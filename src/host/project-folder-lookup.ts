// Resolves a new chat's working folder from the open note, using the Hermes project registry.
//
// The registry is read through `hermes project show <slug>` (text output; the CLI has no
// JSON mode), so the lookups are cached for a short time and each call has a timeout. Any
// failure returns undefined and the caller falls back to the vault.

import { execFile } from "node:child_process";
import type { ProjectFolder } from "./chat-project";
import { primaryPathFromProjectShow } from "./project-show";

export type RunHermes = (args: string[]) => Promise<string | undefined>;

const CACHE_MS = 30_000;

export function createProjectFolderLookup(run: RunHermes, now: () => number = Date.now) {
  const cache = new Map<string, { at: number; folder: ProjectFolder | undefined }>();

  async function folderForSlug(slug: string): Promise<ProjectFolder | undefined> {
    const hit = cache.get(slug);
    if (hit && now() - hit.at < CACHE_MS) return hit.folder;
    const text = await run(["project", "show", slug]);
    const folder = text ? primaryPathFromProjectShow(text) : undefined;
    cache.set(slug, { at: now(), folder });
    return folder;
  }

  return { folderForSlug };
}

// Runs the hermes binary with a timeout. Resolves to stdout, or undefined on any failure.
export function runHermesCli(binary: string, env: NodeJS.ProcessEnv, timeoutMs = 5_000): RunHermes {
  return (args) =>
    new Promise((resolve) => {
      execFile(binary, args, { env, timeout: timeoutMs, windowsHide: true }, (err, stdout) => {
        resolve(err ? undefined : String(stdout));
      });
    });
}
