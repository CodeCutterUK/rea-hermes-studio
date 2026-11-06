// @vitest-environment jsdom

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { activateHermesCore } from "../src/host/hermes-core-bridge";
import { createObsidianVscodeShim } from "../src/host/obsidian-shim";
import { computeUnifiedDiffLines } from "../src/views/hermes-diff-view";
import { mountHermesWebview } from "../src/webview/webview-mount";

describe("HermesDiffView line diff computation", () => {
  it("computes added, deleted, and unchanged lines with line numbers", () => {
    const before = "line 1\nold line 2\nline 3\n";
    const after = "line 1\nnew line 2\nadded line\nline 3\n";
    const rows = computeUnifiedDiffLines(before, after);

    expect(rows.some((r) => r.kind === "del" && r.text === "old line 2")).toBe(true);
    expect(rows.some((r) => r.kind === "add" && r.text === "new line 2")).toBe(true);
    expect(rows.some((r) => r.kind === "add" && r.text === "added line")).toBe(true);
    expect(rows.some((r) => r.kind === "ctx" && r.text === "line 1")).toBe(true);
  });
});

describe("Hermes Core Host <-> Shadow DOM Svelte 5 Webview Integration", () => {
  it("activates Hermes Studio core, binds the Shadow DOM webview, and exchanges init + panels + context messages", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-core-vault-"));
    fs.writeFileSync(
      path.join(tmpVault, "Architecture.md"),
      "# Architecture\nDetails here.\n",
      "utf8",
    );

    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "CoreTestVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
      resolveWikiLink: (link) => (link === "Architecture" ? "Architecture.md" : undefined),
    });

    const core = activateHermesCore({
      vscodeShim: shim,
      extensionPath: tmpVault,
      resolvePromptWikiLinks: (text) =>
        text.includes("[[Architecture]]") ? ["Architecture.md"] : [],
    });

    const provider = shim._internal.getWebviewViewProvider();
    expect(provider).toBeDefined();

    // Mount real Shadow DOM Svelte 5 webview and connect to provider.resolveWebviewView
    const hostEl = document.createElement("div");
    document.body.appendChild(hostEl);
    const shadowRoot = hostEl.attachShadow({ mode: "open" });

    const hostToWebviewMessages: any[] = [];
    let webviewReceiveCallback: ((msg: any) => void) | undefined;
    let mounted: ReturnType<typeof mountHermesWebview> | undefined;

    const fakeWebviewView = {
      visible: true,
      badge: undefined as any,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          webviewReceiveCallback = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          mounted?.postMessageToWebview(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    };

    provider.resolveWebviewView(fakeWebviewView);

    mounted = mountHermesWebview({
      shadowRoot,
      place: "side",
      onMessageFromWebview: (msg) => {
        webviewReceiveCallback?.(msg);
      },
    });

    // Wait for async panel loading and initial messages
    await new Promise((r) => setTimeout(r, 80));

    const msgTypes = new Set(hostToWebviewMessages.map((m) => m.type));
    expect(msgTypes.has("chatPlace")).toBe(true);
    expect(msgTypes.has("init")).toBe(true);
    expect(msgTypes.has("context")).toBe(true);
    expect(msgTypes.has("accountUsage")).toBe(true);
    expect(msgTypes.has("effort")).toBe(true);
    expect(msgTypes.has("background")).toBe(true);

    // Verify mentioning a file adds a context chip
    webviewReceiveCallback?.({ type: "mentionFile", path: "Architecture.md" });
    await new Promise((r) => setTimeout(r, 120));

    const ctxMsgs = hostToWebviewMessages.filter((m) => m.type === "context");
    const lastCtx = ctxMsgs.at(-1);
    expect(lastCtx?.items?.some((item: any) => item.label === "Architecture.md")).toBe(true);

    mounted.destroy();
    await core.deactivate();
    hostEl.remove();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("attaches a single-line active editor selection and adopts an async editor tab leaf", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-sel-vault-"));
    const noteAbs = path.join(tmpVault, "SingleLine.md");
    fs.writeFileSync(noteAbs, "# Title\nSelected single line text\n", "utf8");

    let editorLeafOpened = false;
    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "SelVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
      createEditorWebviewPanel: () => {
        editorLeafOpened = true;
        return { _asyncAdopt: true };
      },
      getActiveEditorState: () => ({
        absPath: noteAbs,
        relPath: "SingleLine.md",
        content: "Selected single line text",
        languageId: "markdown",
        cursorLine: 2,
        selection: {
          startLine: 2,
          endLine: 2,
          text: "Selected single line text",
        },
      }),
    });

    const core = activateHermesCore({
      vscodeShim: shim,
      extensionPath: tmpVault,
    });

    const provider = shim._internal.getWebviewViewProvider();
    const hostToWebviewMessages: any[] = [];
    let webviewReceiveCallback: ((msg: any) => void) | undefined;

    provider.resolveWebviewView({
      visible: true,
      badge: undefined,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          webviewReceiveCallback = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    });

    webviewReceiveCallback?.({ type: "ready" });
    await new Promise((r) => setTimeout(r, 30));

    // 1. Verify editorContext chip includes line 2 selection
    const editorCtx = hostToWebviewMessages.filter((m) => m.type === "editorContext").at(-1);
    expect(editorCtx?.file?.label).toBe("SingleLine.md 2");

    // 2. Verify addContext("selection") adds the single-line selection chip
    webviewReceiveCallback?.({ type: "addContext", kind: "selection" });
    const ctxMsg = hostToWebviewMessages.filter((m) => m.type === "context").at(-1);
    expect(
      ctxMsg?.items?.some((i: any) => i.kind === "selection" && i.label === "SingleLine.md 2"),
    ).toBe(true);

    // 3. Verify hermesStudio.openChatInEditor triggers async leaf open without blocking subsequent adopt()
    await shim.commands.executeCommand("hermesStudio.openChatInEditor");
    expect(editorLeafOpened).toBe(true);

    provider.adopt({
      visible: true,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: () => ({ dispose() {} }),
        postMessage: async () => true,
      },
      reveal() {},
      onDidChangeViewState: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
      dispose: () => {},
    });
    expect(provider.panel).toBeDefined();

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("synchronizes initialMode and dispatches setMode updates with onModeChange notification", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-mode-vault-"));
    const modeChanges: string[] = [];

    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "ModeVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
    });

    const core = activateHermesCore({
      vscodeShim: shim,
      extensionPath: tmpVault,
      initialMode: "accept_edits",
      onModeChange: (modeId) => {
        modeChanges.push(modeId);
      },
    });

    const provider = shim._internal.getWebviewViewProvider();
    const hostToWebviewMessages: any[] = [];
    let webviewReceiveCallback: ((msg: any) => void) | undefined;

    provider.resolveWebviewView({
      visible: true,
      badge: undefined,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          webviewReceiveCallback = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    });

    webviewReceiveCallback?.({ type: "ready" });
    await new Promise((r) => setTimeout(r, 30));

    // Initial init message should contain initialMode
    const initMsg = hostToWebviewMessages.find((m) => m.type === "init");
    expect(initMsg?.model?.meta?.mode).toBe("accept_edits");

    // Webview dispatches setMode "default" (Manual)
    webviewReceiveCallback?.({ type: "setMode", modeId: "default" });
    await new Promise((r) => setTimeout(r, 30));
    expect(modeChanges).toContain("default");

    // core.setMode programmatic call
    await core.setMode("dont_ask");
    expect(modeChanges).toContain("dont_ask");

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("shows the open file as an opt-in chip mid-conversation: included only after the user toggles it", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-optin-vault-"));
    fs.writeFileSync(path.join(tmpVault, "OpenNote.md"), "# Open\nBody\n", "utf8");

    const noteAbs = path.join(tmpVault, "OpenNote.md");
    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "OptInVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
      getActiveEditorState: () => ({
        absPath: noteAbs,
        relPath: "OpenNote.md",
        content: "# Open\nBody\n",
        languageId: "markdown",
        cursorLine: 1,
        selection: undefined,
      }),
    });

    const core = activateHermesCore({ vscodeShim: shim, extensionPath: tmpVault });

    const provider = shim._internal.getWebviewViewProvider();
    const hostToWebviewMessages: any[] = [];
    let receive: ((msg: any) => void) | undefined;
    provider.resolveWebviewView({
      visible: true,
      badge: undefined,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          receive = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    });

    receive?.({ type: "ready" });
    await new Promise((r) => setTimeout(r, 30));

    // The open note is shown as a chip.
    shim._internal.fireActiveEditorChanged?.();
    await new Promise((r) => setTimeout(r, 30));
    const chip = () => hostToWebviewMessages.filter((m) => m.type === "editorContext").at(-1)?.file;
    expect(chip()?.label).toBe("OpenNote.md");

    // A new chat (no turns yet) attaches the open file by default.
    expect(core.attachEditorContextFor([])).toMatchObject({ kind: "editor", sourceUri: expect.any(String) });

    // Mid-conversation (turn > 0) the file is NOT attached by default.
    core.__setTurnForTest(2);
    expect(core.attachEditorContextFor([])).toBeUndefined();
    expect(chip()?.included).toBe(false);

    // Opting in from the chip attaches it on mid-conversation sends.
    receive?.({ type: "toggleEditorContext" });
    await new Promise((r) => setTimeout(r, 30));
    expect(chip()?.included).toBe(true);
    expect(core.attachEditorContextFor([])).toMatchObject({ kind: "editor", sourceUri: expect.any(String) });

    // Back in a new chat, the opt-in does not carry over and a new chat attaches by default again.
    core.__setTurnForTest(0);
    expect(core.attachEditorContextFor([])).toMatchObject({ kind: "editor" });

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("exposes sendPrompt: rejects empty text and reports false when no agent is connected", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-sendprompt-vault-"));
    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "SendPromptVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
    });

    const core = activateHermesCore({ vscodeShim: shim, extensionPath: tmpVault });

    expect(await core.sendPrompt("   ")).toBe(false);
    expect(await core.sendPrompt("")).toBe(false);
    // No agent is running in tests, so send() refuses rather than queuing a turn.
    expect(await core.sendPrompt("Help me unblock this factory job: J1")).toBe(false);

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("publishes dynamic effort levels and supported flags based on active model", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-effort-vault-"));

    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "EffortVault",
      getSettings: () => ({
        path: "/nonexistent/hermes-binary-for-unit-test",
        environment: {},
        autoStart: false,
        notifications: "all",
      }),
    });

    const core = activateHermesCore({
      vscodeShim: shim,
      extensionPath: tmpVault,
    });

    const provider = shim._internal.getWebviewViewProvider();
    const hostToWebviewMessages: any[] = [];
    let webviewReceiveCallback: ((msg: any) => void) | undefined;

    provider.resolveWebviewView({
      visible: true,
      badge: undefined,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          webviewReceiveCallback = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    });

    webviewReceiveCallback?.({ type: "ready" });
    await new Promise((r) => setTimeout(r, 30));

    // Initial effort message without a model selected defaults to standard reasoning ladder
    const initialEffort = hostToWebviewMessages.find((m) => m.type === "effort");
    expect(initialEffort).toBeDefined();
    expect(initialEffort?.effort?.supported).toBe(true);
    expect(initialEffort?.effort?.levels).toHaveLength(5);

    // Switch model to Moonshot Kimi K3 -> exactly 3 levels (low, high, max)
    webviewReceiveCallback?.({ type: "setModel", modelId: "moonshot/kimi-k3" });
    await new Promise((r) => setTimeout(r, 30));
    const kimiEffort = hostToWebviewMessages.filter((m) => m.type === "effort").at(-1);
    expect(kimiEffort?.effort?.supported).toBe(true);
    expect(kimiEffort?.effort?.levels.map((l: any) => l.id)).toEqual(["low", "high", "max"]);

    // Switch model to Claude 3.7 Sonnet -> 4 levels (low, medium, high, max)
    webviewReceiveCallback?.({ type: "setModel", modelId: "anthropic/claude-3-7-sonnet" });
    await new Promise((r) => setTimeout(r, 30));
    const claudeEffort = hostToWebviewMessages.filter((m) => m.type === "effort").at(-1);
    expect(claudeEffort?.effort?.supported).toBe(true);
    expect(claudeEffort?.effort?.levels.map((l: any) => l.id)).toEqual([
      "low",
      "medium",
      "high",
      "max",
    ]);

    // Switch model to non-reasoning GPT-4o -> supported: false, levels: []
    webviewReceiveCallback?.({ type: "setModel", modelId: "openai/gpt-4o" });
    await new Promise((r) => setTimeout(r, 30));
    const gpt4oEffort = hostToWebviewMessages.filter((m) => m.type === "effort").at(-1);
    expect(gpt4oEffort?.effort?.supported).toBe(false);
    expect(gpt4oEffort?.effort?.levels).toEqual([]);

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });

  it("retains previous chats in the session list when creating a new chat even if ACP session/list omits local gateway sessions", async () => {
    const tmpVault = fs.mkdtempSync(path.join(os.tmpdir(), "hermes-sessions-vault-"));
    const fakeHermes = path.join(tmpVault, "fake-hermes.js");
    fs.writeFileSync(
      fakeHermes,
      `#!/usr/bin/env node
const readline = require("node:readline");
if (process.argv.includes("--print-runtime-command")) {
  console.log(JSON.stringify([process.execPath, "-e", "// hermes_bootstrap; runpy.run_module('hermes')"]));
  process.exit(0);
}
let sessionSeq = 0;
const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
rl.on("line", (line) => {
  if (!line.trim()) return;
  let msg;
  try { msg = JSON.parse(line); } catch { return; }
  const reply = (result) => process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: msg.id, result }) + "\\n");
  if (msg.method === "initialize") {
    reply({ protocolVersion: 1, agentInfo: { name: "hermes", version: "1.0.0" }, agentCapabilities: {} });
  } else if (msg.method === "session/new") {
    const sid = "sess-" + (++sessionSeq);
    reply({ sessionId: sid, models: { currentModelId: "openai/gpt-5.4", availableModels: [{ modelId: "openai/gpt-5.4", name: "GPT-5.4" }] }, modes: { currentModeId: "default", availableModes: [{ id: "default", name: "Manual" }] } });
  } else if (msg.method === "session/set_mode") {
    reply({});
  } else if (msg.method === "session/prompt") {
    const sid = msg.params?.sessionId || "sess-1";
    process.stdout.write(JSON.stringify({
      jsonrpc: "2.0",
      method: "session/update",
      params: {
        sessionId: sid,
        update: { sessionUpdate: "agent_message_chunk", messageId: "m1", content: { type: "text", text: "Hello from " + sid } }
      }
    }) + "\\n");
    reply({ stopReason: "end_turn" });
  } else if (msg.method === "session/list") {
    // Simulate gateway catalog bug where active/completed local-routed ACP sessions are omitted
    reply({ sessions: [] });
  } else if (msg.id !== undefined) {
    reply({});
  }
});
`,
      { mode: 0o755 },
    );

    const shim = createObsidianVscodeShim({
      vaultBasePath: tmpVault,
      vaultName: "SessionsVault",
      getSettings: () => ({
        path: fakeHermes,
        environment: {},
        autoStart: true,
        notifications: "all",
      }),
    });

    const core = activateHermesCore({
      vscodeShim: shim,
      extensionPath: tmpVault,
    });

    const provider = shim._internal.getWebviewViewProvider();
    const hostToWebviewMessages: any[] = [];
    let webviewReceiveCallback: ((msg: any) => void) | undefined;

    provider.resolveWebviewView({
      visible: true,
      badge: undefined,
      webview: {
        options: {},
        html: "",
        cspSource: "self",
        asWebviewUri: (u: any) => u,
        onDidReceiveMessage: (cb: (msg: any) => void) => {
          webviewReceiveCallback = cb;
          return { dispose() {} };
        },
        postMessage: async (msg: any) => {
          hostToWebviewMessages.push(msg);
          return true;
        },
      },
      onDidChangeVisibility: () => ({ dispose() {} }),
      onDidDispose: () => ({ dispose() {} }),
    });

    webviewReceiveCallback?.({ type: "ready" });
    await new Promise((r) => setTimeout(r, 80));

    // Send a prompt in the first chat (sess-1)
    webviewReceiveCallback?.({ type: "send", text: "List all available book lists" });
    await new Promise((r) => setTimeout(r, 150));

    // Create a new chat (sess-2)
    webviewReceiveCallback?.({ type: "newChat" });
    await new Promise((r) => setTimeout(r, 150));

    // Open sessions combobox -> listSessions
    webviewReceiveCallback?.({ type: "listSessions" });
    await new Promise((r) => setTimeout(r, 100));

    const sessionListMsgs = hostToWebviewMessages.filter(
      (m) => m.type === "sessions" && m.list?.loading === false,
    );
    const lastList = sessionListMsgs.at(-1)?.list;
    expect(lastList).toBeDefined();
    expect(
      lastList.items.some(
        (item: any) => item.id === "sess-1" && item.title === "List all available book lists",
      ),
    ).toBe(true);

    await core.deactivate();
    fs.rmSync(tmpVault, { recursive: true, force: true });
  });
});
