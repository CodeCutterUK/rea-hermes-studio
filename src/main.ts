import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  addIcon,
  FileSystemAdapter,
  MarkdownView,
  Notice,
  Plugin,
  type TFile,
  type WorkspaceLeaf,
} from "obsidian";
import { type ActivatedHermesCore, activateHermesCore } from "./host/hermes-core-bridge";
import { VaultNoteTracker } from "./host/note-tracker";
import { createObsidianVscodeShim, SimpleUri } from "./host/obsidian-shim";
import {
  createGithubSkillHttp,
  OBSIDIAN_SKILLS_SYNC_INTERVAL_MS,
  syncObsidianSkills,
} from "./host/obsidian-skills-sync";
import { VaultDocumentRouter } from "./host/vault-document-router";
import { createWorkspaceLeafHost, type WorkspaceLeafHost } from "./host/workspace-leaf-host";
import { DEFAULT_HERMES_SETTINGS, type HermesPluginSettings, HermesSettingTab } from "./settings";
import {
  HERMES_DIFF_VIEW_TYPE,
  HERMES_EDITOR_VIEW_TYPE,
  HERMES_SIDE_VIEW_TYPE,
  HermesDiffItemView,
  HermesStudioView,
} from "./views/hermes-chat-view";
import { HERMES_DOC_VIEW_TYPE, HermesDocItemView } from "./views/hermes-doc-view";
import {
  HermesMultiPickModal,
  HermesQuickPickModal,
  showHermesNotice,
  showImageFileDialog,
} from "./views/modals";

export {
  HERMES_DIFF_VIEW_TYPE,
  HERMES_DOC_VIEW_TYPE,
  HERMES_EDITOR_VIEW_TYPE,
  HERMES_SIDE_VIEW_TYPE,
  HermesDocItemView,
};

function leafIsPinned(leaf: WorkspaceLeaf): boolean {
  return (leaf as WorkspaceLeaf & { pinned?: boolean }).pinned === true;
}

function hermesConfigFile(): string {
  const configured = process.env.HERMES_HOME?.trim();
  const home = configured ? configured : path.join(os.homedir(), ".hermes");
  return path.join(home, "config.yaml");
}

// Hermes Studio 100x100 scaled icon for Obsidian's addIcon API
const HERMES_OBSIDIAN_ICON_SVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M4 4h3.2v6.6h7.6V4H18v16h-3.2v-6.6H7.2V20H4z"/><path fill="currentColor" d="M18 4.2c1.9-1.5 3.6-1.6 5-.9-1.1.4-2 1.1-2.6 2.1.8-.1 1.6 0 2.3.4-1.3.4-2.6 1.3-3.4 2.6H18z"/></svg>`;

export default class HermesStudioPlugin extends Plugin {
  settings: HermesPluginSettings = { ...DEFAULT_HERMES_SETTINGS };
  vscodeShim!: ReturnType<typeof createObsidianVscodeShim>;
  noteTracker!: VaultNoteTracker;
  router!: VaultDocumentRouter;
  leaves!: WorkspaceLeafHost;
  private core: ActivatedHermesCore | undefined;
  private obsidianSkillsTail: Promise<void> = Promise.resolve();
  private ribbonEl: HTMLElement | undefined;
  private activeSideView: HermesStudioView | undefined;
  private activeEditorView: HermesStudioView | undefined;
  private pendingEditorAdapter: any | undefined;

  getVaultBasePath(): string {
    const adapter = this.app?.vault?.adapter;
    if (adapter instanceof FileSystemAdapter) {
      return adapter.getBasePath();
    }
    if (typeof (adapter as any)?.getBasePath === "function") {
      return (adapter as any).getBasePath();
    }
    return process.cwd();
  }

  getPluginDirPath(): string {
    const base = this.getVaultBasePath();
    const dir = (this.manifest as any)?.dir;
    return dir ? path.resolve(base, dir) : base;
  }

  async onload(): Promise<void> {
    await this.loadSettings();
    this.applyLayoutSpacing();

    addIcon("hermes-studio", HERMES_OBSIDIAN_ICON_SVG);

    const vaultBasePath = this.getVaultBasePath();
    const vaultName = this.app?.vault?.getName?.() || path.basename(vaultBasePath);

    this.leaves = createWorkspaceLeafHost(() => this.app?.workspace);
    this.router = new VaultDocumentRouter({
      getVaultBasePath: () => this.getVaultBasePath(),
      getFiles: () => this.app?.vault?.getFiles?.() ?? [],
      getMarkdownFiles: () => this.app?.vault?.getMarkdownFiles?.() ?? [],
      getAllLoadedFiles: () => (this.app?.vault as any)?.getAllLoadedFiles?.() ?? [],
      getAbstractFileByPath: (p: string) => this.app?.vault?.getAbstractFileByPath?.(p),
      getFirstLinkpathDest: (linkpath: string, sourcePath = "") =>
        this.app?.metadataCache?.getFirstLinkpathDest?.(linkpath, sourcePath),
      iterateAllLeaves: (cb) => this.app?.workspace?.iterateAllLeaves?.(cb),
      getLeavesOfType: (t) => this.app?.workspace?.getLeavesOfType?.(t) ?? [],
      getLeaf: (type) => this.app?.workspace?.getLeaf?.(type),
      getActiveLeaf: () => {
        // 1. If an unpinned MarkdownView is currently active in the main workspace, reuse its leaf
        const activeMd = this.app?.workspace?.getActiveViewOfType?.(MarkdownView) as any;
        if (activeMd?.leaf && !activeMd.leaf.pinned) {
          const root = (activeMd.leaf as any).getRoot?.();
          if (!root || root === this.app?.workspace?.rootSplit) {
            return activeMd.leaf;
          }
        }
        // 2. Otherwise get the most recently active leaf in the root split (main editor area)
        const mostRecent = this.app?.workspace?.getMostRecentLeaf?.();
        if (mostRecent && !leafIsPinned(mostRecent)) {
          const viewType = mostRecent.view?.getViewType?.() ?? mostRecent.getViewState?.()?.type;
          if (!viewType?.startsWith("hermes-")) {
            const root = (mostRecent as any).getRoot?.();
            if (!root || root === this.app?.workspace?.rootSplit) {
              return mostRecent;
            }
          }
        }
        // 3. Check workspace.activeLeaf directly
        const activeLeaf = (this.app?.workspace as any)?.activeLeaf;
        if (activeLeaf && !activeLeaf.pinned) {
          const viewType = activeLeaf.view?.getViewType?.() ?? activeLeaf.getViewState?.()?.type;
          if (!viewType?.startsWith("hermes-")) {
            const root = (activeLeaf as any).getRoot?.();
            if (!root || root === this.app?.workspace?.rootSplit) {
              return activeLeaf;
            }
          }
        }
        // 4. Fallback: find any unpinned markdown leaf in rootSplit
        const mdLeaves = this.app?.workspace?.getLeavesOfType?.("markdown") ?? [];
        for (const l of mdLeaves) {
          if (!leafIsPinned(l)) {
            const root = (l as any).getRoot?.();
            if (!root || root === this.app?.workspace?.rootSplit) {
              return l;
            }
          }
        }
        // Also check iterateAllLeaves for an existing markdown leaf if getLeavesOfType returned none
        let fallbackLeaf: any = null;
        if (typeof this.app?.workspace?.iterateAllLeaves === "function") {
          this.app.workspace.iterateAllLeaves((l: any) => {
            if (fallbackLeaf || l.pinned) return;
            const vt = l.view?.getViewType?.() ?? l.getViewState?.()?.type;
            if (vt === "markdown" || (!vt && l.view?.file)) {
              const root = (l as any).getRoot?.();
              if (!root || root === this.app?.workspace?.rootSplit) {
                fallbackLeaf = l;
              }
            }
          });
        }
        if (fallbackLeaf) return fallbackLeaf;
        // 5. Default leaf (false = reuse or create main leaf, NEVER 'tab')
        return this.app?.workspace?.getLeaf?.(false);
      },
      getMostRecentLeaf: () => this.app?.workspace?.getMostRecentLeaf?.(),
      revealLeaf: (leaf) => this.app?.workspace?.revealLeaf?.(leaf),
      setActiveLeaf: (leaf, params) => {
        this.app?.workspace?.setActiveLeaf?.(leaf, params);
        this.refreshTrackerFromWorkspace({ file: (leaf?.view as any)?.file });
      },
      openLinkText: async (linktext, sourcePath, action, openViewState) => {
        const res = await this.app?.workspace?.openLinkText?.(
          linktext,
          sourcePath,
          action,
          openViewState,
        );
        this.refreshTrackerFromWorkspace();
        return res;
      },
      leafHost: this.leaves,
      externalDocumentViewType: HERMES_DOC_VIEW_TYPE,
      showInFolder: (absPath) => (this.app as any)?.showInFolder?.(absPath),
      openWithDefaultApp: (absPath) => (this.app as any)?.openWithDefaultApp?.(absPath),
      showNotice: (msg) => new Notice(msg),
    });

    this.noteTracker = new VaultNoteTracker({
      vaultBasePath,
      resolveWikiLink: (linkpath, sourcePath) => this.resolveVaultWikiLink(linkpath, sourcePath),
      onChange: () => {
        this.vscodeShim?._internal.fireActiveEditorChanged();
        this.vscodeShim?._internal.fireSelectionChanged();
      },
    });

    let hasGitRepo = false;
    try {
      hasGitRepo = Boolean(await this.app?.vault?.adapter?.exists?.(".git"));
    } catch {}

    this.vscodeShim = createObsidianVscodeShim({
      fs: {
        vaultBasePath,
        vaultName,
        app: this.app,
        vault: this.app?.vault,
        adapter: this.app?.vault?.adapter,
        hasGit: () => hasGitRepo,
        listVaultFiles: () => {
          const files = this.app?.vault?.getFiles?.() ?? [];
          return files.map((f: TFile) => f.path);
        },
      },
      settings: {
        getSettings: () => this.settings,
        updateSetting: async (key, value) => {
          (this.settings as any)[key] = value;
          await this.saveSettings(key);
        },
      },
      ui: {
        revealSideView: async () => {
          await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
        },
        createEditorWebviewPanel: () => {
          if (this.activeEditorView) {
            return this.activeEditorView.toVscodeWebviewAdapter();
          }
          void this.leaves.reveal(HERMES_EDITOR_VIEW_TYPE, { placement: "tab" });
          return { _asyncAdopt: true };
        },
        openFileInObsidian: async (absPath, selection) => {
          await this.openVaultFile(absPath, selection);
        },
        openDiffInObsidian: async ({ leftUri, rightUri, title, readContent }) => {
          const beforeText = (await Promise.resolve(readContent(leftUri))) ?? "";
          const afterText = (await Promise.resolve(readContent(rightUri))) ?? "";
          const filePath =
            rightUri.scheme === "file"
              ? rightUri.fsPath
              : leftUri.scheme === "file"
                ? leftUri.fsPath
                : undefined;
          await this.leaves.reveal(HERMES_DIFF_VIEW_TYPE, {
            placement: "tab",
            bind: (view) => {
              if (typeof view?.setDiffPayload === "function") {
                view.setDiffPayload({
                  title,
                  beforeText,
                  afterText,
                  filePath,
                  onOpenFile: (fp: string, line?: number) => {
                    void this.openVaultFile(
                      fp,
                      line ? { startLine: line, endLine: line } : undefined,
                    );
                  },
                });
              }
            },
          });
        },
        openPluginSettings: () => {
          (this.app as any)?.setting?.open?.();
          (this.app as any)?.setting?.openTabById?.(this.manifest.id);
        },
        showNotice: (message, level, actions) => showHermesNotice(message, level, actions),
        showQuickPickModal: (items, options) =>
          new Promise((resolve) => {
            if (options?.canPickMany) {
              new HermesMultiPickModal(this.app, items, options, resolve).open();
            } else {
              new HermesQuickPickModal(this.app, items, options, resolve).open();
            }
          }),
        showOpenFileDialog: () => showImageFileDialog(),
      },
      editor: {
        resolveWikiLink: (linkpath) => this.resolveVaultWikiLink(linkpath),
        getVaultDiagnostics: () => this.collectVaultDiagnostics(),
        getActiveEditorState: () => {
          this.refreshTrackerFromWorkspace({ silent: true });
          const cur = this.noteTracker.current;
          if (!cur) return undefined;
          return {
            absPath: cur.absPath,
            relPath: cur.relPath,
            content: cur.selection?.text ?? "",
            languageId: "markdown",
            cursorLine: cur.cursorLine,
            selection: cur.selection,
          };
        },
      },
    });

    // Activate Hermes Studio core engine
    this.core = activateHermesCore({
      vscodeShim: this.vscodeShim,
      extensionPath: this.getPluginDirPath(),
      pluginVersion: this.manifest?.version || "0.6.19",
      initialWorkspaceState: this.settings.workspaceState,
      onWorkspaceStateChange: (next) => {
        this.settings.workspaceState = next;
        void this.saveData(this.settings);
      },
      resolvePromptWikiLinks: (text) => this.noteTracker.resolvePromptWikiLinks(text),
      getCustomEnv: () => this.settings.environment ?? {},
      initialMode: this.settings.modeId ?? "default",
      onModeChange: (modeId) => {
        this.settings.modeId = modeId as any;
        void this.saveData(this.settings);
      },
    });

    // Register Obsidian workspace views
    this.safeRegisterView(
      HERMES_SIDE_VIEW_TYPE,
      (leaf) => new HermesStudioView(leaf, this, "side"),
    );
    this.safeRegisterView(
      HERMES_EDITOR_VIEW_TYPE,
      (leaf) => new HermesStudioView(leaf, this, "editor"),
    );
    this.safeRegisterView(HERMES_DIFF_VIEW_TYPE, (leaf) => new HermesDiffItemView(leaf, this));
    this.safeRegisterView(HERMES_DOC_VIEW_TYPE, (leaf) => new HermesDocItemView(leaf, this));

    // Add Ribbon Icon
    this.ribbonEl = this.addRibbonIcon("hermes-studio", "Hermes Studio", () => {
      void this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
    });

    // Add Settings Tab
    this.addSettingTab(new HermesSettingTab(this.app, this));

    // Register Obsidian URI protocol handler: obsidian://hermes-studio?session=...&card=...
    // obsidian://hermes-studio?text=... opens a new chat and sends the prompt (see sendPrompt).
    this.registerObsidianProtocolHandler("hermes-studio", (params) => {
      if (typeof params.text === "string" && params.text.length > 0) {
        void this.sendPrompt(params.text);
        return;
      }
      const query = new URLSearchParams(params as Record<string, string>).toString();
      const uri = SimpleUri.from({
        scheme: "obsidian",
        authority: "hermes-studio",
        path: "/show",
        query,
      });
      this.vscodeShim._internal.getUriHandler()?.handleUri(uri);
    });

    // Track active MarkdownView & selection
    this.setupWorkspaceListeners();

    // Register all Hermes Studio commands in Obsidian Command Palette
    this.registerHermesCommands();

    if (typeof this.registerInterval === "function") {
      this.registerInterval(
        window.setInterval(() => {
          void this.syncObsidianSkills(false);
        }, OBSIDIAN_SKILLS_SYNC_INTERVAL_MS),
      );
    }
    void this.syncObsidianSkills(false);
  }

  private safeRegisterView(viewType: string, factory: (leaf: WorkspaceLeaf) => any): void {
    try {
      this.registerView(viewType, factory);
    } catch {
      // View type already registered
    }
  }

  attachHermesView(view: HermesStudioView): void {
    const provider = this.vscodeShim._internal.getWebviewViewProvider();
    if (!provider) return;

    const adapter = view.toVscodeWebviewAdapter();
    if (view.place === "side") {
      this.activeSideView = view;
      provider.resolveWebviewView(adapter);
      view.notifyReady();
    } else {
      this.activeEditorView = view;
      provider.adopt(adapter);
      view.notifyReady();
    }
  }

  async setMode(modeId: string): Promise<void> {
    await this.core?.setMode?.(modeId);
  }

  updateRibbonBadge(count: number, tooltip: string): void {
    if (!this.ribbonEl) return;
    this.ribbonEl.setAttribute(
      "aria-label",
      count > 0 ? `Hermes Studio (${tooltip})` : "Hermes Studio",
    );
    this.ribbonEl.toggleClass?.("hermes-has-badge", count > 0);
  }

  private resolveVaultWikiLink(linkpath: string, sourcePath = ""): string | undefined {
    return this.router.resolveWikiLink(linkpath, sourcePath);
  }

  private collectVaultDiagnostics() {
    const unresolved = this.app?.metadataCache?.unresolvedLinks ?? {};
    const out: Array<{
      relPath: string;
      line: number;
      column: number;
      severity: "error" | "warning";
      message: string;
      source?: string;
    }> = [];

    for (const [sourcePath, linksObj] of Object.entries(unresolved)) {
      if (!linksObj || typeof linksObj !== "object") continue;
      for (const [missingTarget, count] of Object.entries(linksObj as Record<string, number>)) {
        if (count > 0) {
          out.push({
            relPath: sourcePath,
            line: 1,
            column: 1,
            severity: "warning",
            message: `Unresolved WikiLink [[${missingTarget}]] (${count} reference${count === 1 ? "" : "s"})`,
            source: "Obsidian Links",
          });
        }
      }
    }
    return out;
  }

  public isVaultPathKnown(targetPath: string): boolean {
    return this.router.isPathKnown(targetPath);
  }

  /**
   * Automatically linkifies plain-text references to existing vault notes and
   * `[[WikiLinks]]` in assistant Markdown responses so clicking them opens the
   * note in Obsidian Reading View mode (`preview`).
   */
  public linkifyVaultReferences(markdownText: string): string {
    return this.router.linkify(markdownText);
  }

  public async openVaultFile(
    filePathOrLink: string,
    selection?: { startLine: number; endLine: number },
  ): Promise<boolean> {
    const opened = await this.router.routeUri(
      filePathOrLink,
      selection ? { selection } : undefined,
    );
    if (opened) {
      this.refreshTrackerFromWorkspace();
    }
    return opened;
  }

  private findViewForFilePath(targetPath: string): any {
    const activeMd = this.app?.workspace?.getActiveViewOfType?.(MarkdownView) as any;
    if (activeMd?.file?.path === targetPath) return activeMd;

    const mostRecent = this.app?.workspace?.getMostRecentLeaf?.() as any;
    if (mostRecent?.view?.file?.path === targetPath) return mostRecent.view;

    const mdLeaves = this.app?.workspace?.getLeavesOfType?.("markdown") ?? [];
    for (const l of mdLeaves) {
      if ((l as any)?.view?.file?.path === targetPath) {
        return (l as any).view;
      }
    }

    let matchedView: any = null;
    if (typeof this.app?.workspace?.iterateAllLeaves === "function") {
      this.app.workspace.iterateAllLeaves((l: any) => {
        if (!matchedView && l?.view?.file?.path === targetPath) {
          matchedView = l.view;
        }
      });
    }
    return matchedView;
  }

  private refreshTrackerFromWorkspace(options?: {
    silent?: boolean;
    file?: { path?: string } | null;
  }): void {
    let mdView: any = null;
    let relPath: string | undefined;

    if (options?.file?.path) {
      relPath = options.file.path;
      mdView = this.findViewForFilePath(relPath);
    } else {
      const activeMd = this.app?.workspace?.getActiveViewOfType?.(MarkdownView) as any;
      if (activeMd?.file?.path) {
        mdView = activeMd;
        relPath = activeMd.file.path;
      } else {
        const activeFile = (this.app?.workspace as any)?.getActiveFile?.();
        if (activeFile?.path) {
          relPath = activeFile.path;
          mdView = this.findViewForFilePath(activeFile.path);
        } else {
          const mostRecent = this.app?.workspace?.getMostRecentLeaf?.() as any;
          const vt = mostRecent?.view?.getViewType?.() ?? mostRecent?.getViewState?.()?.type;
          if (mostRecent?.view?.file?.path && !vt?.startsWith("hermes-")) {
            mdView = mostRecent.view;
            relPath = mostRecent.view.file.path;
          }
        }
      }
    }

    if (!relPath) return;

    const editor = mdView?.editor;
    if (!editor) {
      this.noteTracker.updateFromEditor(
        {
          relPath,
          cursorLine: 1,
        },
        { silent: options?.silent },
      );
      return;
    }

    const cursor = editor.getCursor?.() ?? { line: 0, ch: 0 };
    const selectedText = editor.getSelection?.() ?? "";
    if (selectedText && selectedText.trim().length > 0) {
      const from = editor.getCursor?.("from") ?? cursor;
      const to = editor.getCursor?.("to") ?? cursor;
      this.noteTracker.updateFromEditor(
        {
          relPath,
          cursorLine: (cursor.line ?? 0) + 1,
          selection: {
            startLine: (from.line ?? 0) + 1,
            endLine: (to.line ?? 0) + 1,
            text: selectedText,
          },
        },
        { silent: options?.silent },
      );
    } else {
      this.noteTracker.updateFromEditor(
        {
          relPath,
          cursorLine: (cursor.line ?? 0) + 1,
        },
        { silent: options?.silent },
      );
    }
  }

  private setupWorkspaceListeners(): void {
    if (typeof this.app?.workspace?.on !== "function") return;

    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf: WorkspaceLeaf | null) => {
        const viewType = (leaf?.view as any)?.getViewType?.();
        this.noteTracker.onActiveLeafChanged(viewType);
        const leafFile = (leaf?.view as any)?.file;
        if (viewType === "markdown" || leafFile?.path) {
          this.refreshTrackerFromWorkspace({ file: leafFile });
        } else {
          this.refreshTrackerFromWorkspace();
        }
      }),
    );

    this.registerEvent(
      (this.app.workspace as any).on("file-open", (file: TFile | null) => {
        if (file?.path) {
          this.refreshTrackerFromWorkspace({ file });
        } else {
          this.refreshTrackerFromWorkspace();
        }
      }),
    );

    this.registerEvent(
      this.app.workspace.on("editor-change", () => {
        this.refreshTrackerFromWorkspace();
      }),
    );

    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu: any) => {
        menu.addItem?.((item: any) => {
          item
            .setTitle("Send selection to Hermes Studio")
            .setIcon("hermes-studio")
            .onClick(async () => {
              this.refreshTrackerFromWorkspace();
              await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
              this.activeSideView?.notifyAddContext("selection");
            });
        });
      }),
    );
  }

  private registerHermesCommands(): void {
    const cmds: Array<{ id: string; name: string; run: () => any }> = [
      {
        id: "open-chat",
        name: "Open Chat",
        run: async () => {
          await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
          await this.executeHermesCommand("hermesStudio.openChat");
        },
      },
      {
        id: "open-chat-in-editor",
        name: "Open Chat in Editor Tab",
        run: async () => {
          await this.leaves.reveal(HERMES_EDITOR_VIEW_TYPE, { placement: "tab" });
        },
      },
      {
        id: "move-chat-to-sidebar",
        name: "Move Chat to Side Bar",
        run: async () => {
          await this.executeHermesCommand("hermesStudio.moveChatToSidebar");
          await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
        },
      },
      {
        id: "new-chat",
        name: "New Chat",
        run: async () => {
          await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
          await this.executeHermesCommand("hermesStudio.newChat");
        },
      },
      {
        id: "show-sessions",
        name: "Show Sessions / Past Chats",
        run: async () => {
          await this.leaves.reveal(HERMES_SIDE_VIEW_TYPE, { placement: "right" });
          await this.executeHermesCommand("hermesStudio.showSessions");
        },
      },
      {
        id: "refresh-panels",
        name: "Refresh Panels (Learning, Curator, Memory, Capabilities, Agents)",
        run: () => this.executeHermesCommand("hermesStudio.refreshPanels"),
      },
      {
        id: "show-skill-changes",
        name: "Show All Skill Changes",
        run: () => this.executeHermesCommand("hermesStudio.showSkillChanges"),
      },
      {
        id: "sync-obsidian-skills",
        name: "Check Obsidian Skills",
        run: () => this.syncObsidianSkills(true),
      },
      {
        id: "review-memory",
        name: "Review Memory Proposals in Terminal",
        run: () => this.executeHermesCommand("hermesStudio.reviewMemory"),
      },
      {
        id: "restart-hermes",
        name: "Restart Hermes",
        run: () => this.executeHermesCommand("hermesStudio.restart"),
      },
      {
        id: "show-log",
        name: "Show Log",
        run: () => this.executeHermesCommand("hermesStudio.showLog"),
      },
    ];

    for (const c of cmds) {
      this.addCommand({
        id: c.id,
        name: c.name,
        callback: () => c.run(),
      });
    }
  }

  /**
   * Opens a new Hermes Studio chat and sends `text` as its first prompt. Returns false if
   * the text is empty or the core is not active. Other plugins call this via
   * `app.plugins.plugins["hermes-studio"].sendPrompt(text)`.
   */
  async sendPrompt(text: string, opts?: { skills?: string[] }): Promise<boolean> {
    if (!this.core) return false;
    return this.core.sendPrompt(text, opts);
  }

  async executeHermesCommand(commandId: string, ...args: any[]): Promise<any> {
    return this.vscodeShim?.commands.executeCommand(commandId, ...args);
  }

  syncObsidianSkills(manual = false): Promise<void> {
    const run = this.obsidianSkillsTail.then(() => this.runObsidianSkillsSync(manual));
    this.obsidianSkillsTail = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  }

  private async runObsidianSkillsSync(manual: boolean): Promise<void> {
    if (this.settings.syncObsidianSkills === false) return;
    const adapter = this.app?.vault?.adapter as
      | {
          exists?: (relPath: string) => Promise<boolean>;
          read?: (relPath: string) => Promise<string>;
          write?: (relPath: string, data: string) => Promise<void>;
          mkdir?: (relPath: string) => Promise<void>;
          list?: (relPath: string) => Promise<{ files: string[]; folders: string[] }>;
        }
      | undefined;
    if (
      !adapter ||
      typeof adapter.exists !== "function" ||
      typeof adapter.read !== "function" ||
      typeof adapter.write !== "function" ||
      typeof adapter.mkdir !== "function" ||
      typeof adapter.list !== "function"
    ) {
      return;
    }
    const vaultAdapter = adapter;
    try {
      const outcome = await syncObsidianSkills({
        vault: {
          exists: (relPath) => vaultAdapter.exists!(relPath),
          read: (relPath) => vaultAdapter.read!(relPath),
          write: (relPath, data) => vaultAdapter.write!(relPath, data),
          mkdir: (relPath) => vaultAdapter.mkdir!(relPath),
          list: (relPath) => vaultAdapter.list!(relPath),
        },
        http: createGithubSkillHttp(),
        vaultBasePath: this.getVaultBasePath(),
        now: Date.now(),
        checkedAt: this.settings.obsidianSkillsCheckedAt,
        manual,
        enabled: true,
        home: os.homedir(),
        readConfig: async () => {
          try {
            return await fs.readFile(hermesConfigFile(), "utf8");
          } catch (error) {
            if ((error as NodeJS.ErrnoException).code === "ENOENT") return "";
            throw error;
          }
        },
        writeConfig: async (yaml) => {
          const file = hermesConfigFile();
          await fs.mkdir(path.dirname(file), { recursive: true });
          await fs.writeFile(file, yaml, "utf8");
        },
      });
      if (typeof outcome.checkedAt === "number") {
        this.settings.obsidianSkillsCheckedAt = outcome.checkedAt;
        await this.saveSettings("obsidianSkillsCheckedAt");
      }
      if (outcome.notice) new Notice(outcome.notice);
      if (outcome.ok && (outcome.filesChanged || outcome.configChanged)) {
        try {
          await this.executeHermesCommand("hermesStudio.restart");
        } catch {
          // Skills are already on disk; the next Hermes start loads them.
        }
      }
    } catch {
      new Notice("Could not sync Obsidian skills.");
    }
  }

  async loadSettings(): Promise<void> {
    const loaded = (await this.loadData()) ?? {};
    this.settings = {
      ...DEFAULT_HERMES_SETTINGS,
      ...loaded,
    };
  }

  applyLayoutSpacing(): void {
    if (typeof document === "undefined") return;
    const pad = Math.max(0, this.settings.statusBarPadding ?? 14);
    document.body?.style?.setProperty?.("--hermes-status-bar-padding", `${pad}px`);
  }

  async saveSettings(changedKey?: string): Promise<void> {
    await this.saveData(this.settings);
    if (changedKey === "statusBarPadding" || !changedKey) {
      this.applyLayoutSpacing();
    }
    if (changedKey === "terminalFontSize" || !changedKey) {
      this.activeSideView?.applyTerminalFontSize();
      this.activeEditorView?.applyTerminalFontSize();
    }
    this.vscodeShim?._internal.fireConfigChanged(changedKey);
  }

  async onunload(): Promise<void> {
    if (typeof document !== "undefined") {
      document.body?.style?.removeProperty?.("--hermes-status-bar-padding");
    }
    await this.core?.deactivate();
    this.core = undefined;
  }
}
