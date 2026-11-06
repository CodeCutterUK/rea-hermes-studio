import os from "node:os";
import path from "node:path";
import { createHermesExtensionModule } from "./hermes-core.cjs";
import type { createObsidianVscodeShim } from "./obsidian-shim";

export interface ActivateHermesCoreOptions {
  vscodeShim: ReturnType<typeof createObsidianVscodeShim>;
  extensionPath: string;
  pluginVersion?: string;
  globalStoragePath?: string;
  initialWorkspaceState?: Record<string, any>;
  onWorkspaceStateChange?: (state: Record<string, any>) => void;
  resolvePromptWikiLinks?: (promptText: string) => string[];
  getCustomEnv?: () => Record<string, string>;
  initialMode?: string;
  onModeChange?: (modeId: string) => void;
}

export interface ActivatedHermesCore {
  subscriptions: Array<{ dispose?: () => any }>;
  workspaceStateData: Record<string, any>;
  setMode: (modeId: string) => Promise<void>;
  sendPrompt: (text: string, opts?: { skills?: string[] }) => Promise<boolean>;
  /** The open-file context a send would attach now: a new chat includes it, a mid-chat send only if opted in. */
  attachEditorContextFor: (attachments?: unknown[]) => unknown;
  __setTurnForTest: (n: number) => void;
  deactivate: () => Promise<void>;
}

export function activateHermesCore(options: ActivateHermesCoreOptions): ActivatedHermesCore {
  const { vscodeShim, extensionPath } = options;
  const workspaceStateData: Record<string, any> = {
    ...(options.initialWorkspaceState ?? {}),
  };
  const globalStateData: Record<string, any> = {};
  const subscriptions: Array<{ dispose?: () => any }> = [];

  const createMemento = (
    store: Record<string, any>,
    onChange?: (next: Record<string, any>) => void,
  ) => ({
    get<T>(key: string, defaultValue?: T): T {
      return key in store ? (store[key] as T) : (defaultValue as T);
    },
    async update(key: string, value: any): Promise<void> {
      if (value === undefined) {
        delete store[key];
      } else {
        store[key] = value;
      }
      onChange?.({ ...store });
    },
    keys(): readonly string[] {
      return Object.keys(store);
    },
  });

  const extContext = {
    subscriptions,
    extensionUri: vscodeShim.Uri.file(extensionPath),
    extensionPath,
    globalStorageUri: vscodeShim.Uri.file(
      options.globalStoragePath ?? path.join(os.homedir(), ".hermes", "obsidian-storage"),
    ),
    workspaceState: createMemento(workspaceStateData, options.onWorkspaceStateChange),
    globalState: createMemento(globalStateData),
    extension: {
      id: "hermes-studio",
      packageJSON: {
        name: "hermes-studio",
        version: options.pluginVersion ?? "0.6.19",
      },
    },
  };

  const mod = createHermesExtensionModule(vscodeShim, {
    resolvePromptWikiLinks: options.resolvePromptWikiLinks,
    getCustomEnv: options.getCustomEnv,
    getInitialMode: () => options.initialMode ?? "default",
    onModeChange: options.onModeChange,
  });

  mod.activate(extContext);

  return {
    subscriptions,
    workspaceStateData,
    async setMode(modeId: string) {
      await mod.setMode?.(modeId);
    },
    __setTurnForTest(n: number) {
      mod.__setTurnForTest?.(n);
    },
    attachEditorContextFor(attachments: unknown[] = []) {
      return mod.attachEditorContextFor?.(attachments);
    },
    async sendPrompt(text: string, opts?: { skills?: string[] }) {
      return (await mod.sendPrompt?.(text, opts)) === true;
    },
    async deactivate() {
      try {
        await mod.deactivate?.();
      } catch {}
      for (const sub of subscriptions.splice(0)) {
        try {
          sub?.dispose?.();
        } catch {}
      }
    },
  };
}
