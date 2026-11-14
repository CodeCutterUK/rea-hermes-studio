import { type App, PluginSettingTab, Setting } from "obsidian";
import { defaultTerminalShell } from "./host/integrated-terminal";
import { buildLabel } from "./build-identity";
import type HermesStudioPlugin from "./main";
import { clampTerminalFontSize } from "./webview/terminal-panel";

export interface HermesPluginSettings {
  path: string;
  terminalShell: string;
  terminalFontSize: number;
  environment: Record<string, string>;
  autoStart: boolean;
  notifications: "all" | "permissions" | "off";
  modeId: "default" | "accept_edits" | "dont_ask";
  trace: boolean;
  statusBarPadding: number;
  syncObsidianSkills: boolean;
  obsidianSkillsCheckedAt?: number;
  webviewState?: any;
  workspaceState?: Record<string, any>;
}

export const DEFAULT_HERMES_SETTINGS: HermesPluginSettings = {
  path: "",
  terminalShell: defaultTerminalShell(),
  terminalFontSize: 13,
  environment: {},
  autoStart: true,
  notifications: "all",
  modeId: "default",
  trace: false,
  statusBarPadding: 14,
  syncObsidianSkills: true,
  webviewState: undefined,
  workspaceState: {},
};

export function parseEnvText(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx <= 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) {
      out[key] = val;
    }
  }
  return out;
}

export function formatEnvText(env: Record<string, string>): string {
  return Object.entries(env ?? {})
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");
}

export class HermesSettingTab extends PluginSettingTab {
  plugin: HermesStudioPlugin;

  constructor(app: App, plugin: HermesStudioPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    if (typeof containerEl.empty === "function") {
      containerEl.empty();
    } else {
      while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
      }
    }

    const title = containerEl.ownerDocument.createElement("h2");
    title.textContent = buildLabel(this.plugin.manifest?.version ?? "");
    containerEl.appendChild(title);

    new Setting(containerEl)
      .setName("Hermes executable path")
      .setDesc(
        "Absolute path to the `hermes` binary. Leave empty to discover `hermes` on PATH or in `~/.local/bin/hermes`.",
      )
      .addText((text) =>
        text
          .setPlaceholder("/home/user/.local/bin/hermes")
          .setValue(this.plugin.settings.path)
          .onChange(async (value) => {
            this.plugin.settings.path = value.trim();
            await this.plugin.saveSettings("path");
          }),
      )
      .addButton((btn) =>
        btn.setButtonText("Restart Hermes").onClick(() => {
          this.plugin.executeHermesCommand("hermesStudio.restart");
        }),
      );

    new Setting(containerEl)
      .setName("Terminal shell")
      .setDesc(
        "Executable opened by the Terminal tab. Linux and macOS start at /bin/sh; type another path, such as /bin/zsh or /bin/bash, to use that shell. On macOS, Terminal.app usually opens /bin/zsh. Windows stores cmd.exe here. The tab needs a POSIX pty, so it does not open a shell on Windows.",
      )
      .addText((text) =>
        text
          .setPlaceholder(defaultTerminalShell())
          .setValue(this.plugin.settings.terminalShell || defaultTerminalShell())
          .onChange(async (value) => {
            this.plugin.settings.terminalShell = value.trim() || defaultTerminalShell();
            await this.plugin.saveSettings("terminalShell");
          }),
      );

    new Setting(containerEl)
      .setName("Terminal font size")
      .setDesc(
        "Size, in pixels, of the text in the Terminal tab. Default: 13. Values stay between 8 and 32.",
      )
      .addText((text) =>
        text
          .setPlaceholder("13")
          .setValue(String(this.plugin.settings.terminalFontSize ?? 13))
          .onChange(async (value) => {
            this.plugin.settings.terminalFontSize = clampTerminalFontSize(value);
            await this.plugin.saveSettings("terminalFontSize");
          }),
      );

    new Setting(containerEl)
      .setName("File edit confirmation")
      .setDesc(
        "Choose how Hermes edits files: Manual (asks before each edit), Edit automatically (edits notes in this vault automatically), or Auto (edits all files automatically).",
      )
      .addDropdown((drop) =>
        drop
          .addOption("default", "Manual (asks before each file edit)")
          .addOption("accept_edits", "Edit automatically (notes in this vault)")
          .addOption("dont_ask", "Auto (all files everywhere)")
          .setValue(this.plugin.settings.modeId ?? "default")
          .onChange(async (value) => {
            this.plugin.settings.modeId = value as any;
            await this.plugin.saveSettings("modeId");
            void this.plugin.setMode(value);
          }),
      );

    new Setting(containerEl)
      .setName("Notifications")
      .setDesc(
        "Show an Obsidian notice when Hermes needs approval, finishes a background turn, or stops while you are looking away.",
      )
      .addDropdown((drop) =>
        drop
          .addOption("all", "All (approvals & finished turns)")
          .addOption("permissions", "Permissions only")
          .addOption("off", "Off")
          .setValue(this.plugin.settings.notifications)
          .onChange(async (value) => {
            this.plugin.settings.notifications = value as any;
            await this.plugin.saveSettings("notifications");
          }),
      );

    new Setting(containerEl)
      .setName("Environment variables")
      .setDesc(
        "Additional KEY=VALUE environment variables passed to `hermes acp` and CLI commands (one per line).",
      )
      .addTextArea((area) =>
        area
          .setPlaceholder("OPENAI_API_KEY=...\nANTHROPIC_API_KEY=...")
          .setValue(formatEnvText(this.plugin.settings.environment))
          .onChange(async (value) => {
            this.plugin.settings.environment = parseEnvText(value);
            await this.plugin.saveSettings("environment");
          }),
      );

    new Setting(containerEl)
      .setName("Log ACP trace")
      .setDesc(
        "Log every JSON-RPC message exchanged with `hermes acp` to the Hermes Studio log channel.",
      )
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.trace).onChange(async (value) => {
          this.plugin.settings.trace = value;
          await this.plugin.saveSettings("trace");
        }),
      );

    new Setting(containerEl)
      .setName("Obsidian skills")
      .setDesc(
        "Install official Obsidian skills from obsidianmd/obsidian-skills into this vault (.agents/skills) and update the copies Hermes Studio installed about once a day. Skills already in .claude/skills are left in place.",
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.syncObsidianSkills !== false)
          .onChange(async (value) => {
            this.plugin.settings.syncObsidianSkills = value;
            await this.plugin.saveSettings("syncObsidianSkills");
            if (value) void this.plugin.syncObsidianSkills(true);
          }),
      )
      .addButton((btn) =>
        btn.setButtonText("Check now").onClick(() => {
          void this.plugin.syncObsidianSkills(true);
        }),
      );

    new Setting(containerEl)
      .setName("Right sidebar bottom padding")
      .setDesc(
        "Safe bottom margin (in pixels) applied when Hermes Studio is docked in the right sidebar, preventing Obsidian's status bar from covering chat controls. Set to 0 to disable. Default: 14.",
      )
      .addText((text) =>
        text
          .setPlaceholder("14")
          .setValue(String(this.plugin.settings.statusBarPadding ?? 14))
          .onChange(async (val) => {
            const num = parseInt(val.trim(), 10);
            this.plugin.settings.statusBarPadding = Number.isNaN(num) ? 14 : Math.max(0, num);
            await this.plugin.saveSettings("statusBarPadding");
          }),
      );

    new Setting(containerEl)
      .setName("Hermes setup & panels")
      .setDesc("Configure Hermes models in a terminal or refresh `~/.hermes` data.")
      .addButton((btn) =>
        btn
          .setButtonText("Refresh Panels")
          .onClick(() => this.plugin.executeHermesCommand("hermesStudio.refreshPanels")),
      )
      .addButton((btn) =>
        btn
          .setButtonText("Show Log")
          .onClick(() => this.plugin.executeHermesCommand("hermesStudio.showLog")),
      );
  }
}
