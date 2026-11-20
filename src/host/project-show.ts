// Parses `hermes project show <slug>` output into the folder a chat should use.
//
// The output is text, not JSON (the CLI has no JSON mode). Example:
//   software-factory  [p_d1527109]
//     name:    software-factory
//     primary: /Users/mark/hermes-projects/software-factory
//     folders:
//       * /Users/mark/hermes-projects/software-factory
// The primary path is the line after "primary:".

import type { ProjectFolder } from "./chat-project";

export function primaryPathFromProjectShow(text: string): ProjectFolder | undefined {
  const match = /^\s*primary:\s*(.+?)\s*$/m.exec(text);
  if (!match) return undefined;
  const path = match[1];
  if (!path.startsWith("/") && !/^[A-Za-z]:[\\/]/.test(path)) return undefined;
  const name = path.split(/[\\/]/).filter(Boolean).pop() ?? path;
  return { path, name };
}
