// Chooses the working folder for a new Hermes chat from the note that is open.
//
// A chat's cwd decides which Hermes Project it is grouped under, so a chat about a
// Factory job should land in that project's repo, not in the vault root. The rule:
//   Projects/<slug>/...  -> the project with that slug
//   Ideas/<id>/...       -> the project named in that idea's idea.md `project:` key
//   anything else        -> the fallback (the vault root, as before)
// The slug-to-folder map is read from ~/.hermes/projects.db by the host (primary_path).

export interface ProjectFolder {
  path: string;
  name: string;
}

// Reads the frontmatter `project:` value from an idea note's text. Returns undefined when absent.
export function projectFromIdeaFrontmatter(text: string): string | undefined {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!match) return undefined;
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^project:\s*(.*?)\s*$/.exec(line);
    if (kv) {
      const value = kv[1].replace(/^["']|["']$/g, "").trim();
      return value || undefined;
    }
  }
  return undefined;
}

// Slug for a vault-relative note path, or undefined when the note is not in a project.
// The idea case needs the note's text, so it is passed in and read only when needed.
export function projectSlugForNote(
  relPath: string,
  readIdeaText: (ideaFolderRelPath: string) => string | undefined,
): string | undefined {
  const parts = relPath.split(/[\\/]+/).filter(Boolean);
  if (parts[0] === "Projects" && parts[1]) return parts[1];
  if (parts[0] === "Ideas" && parts[1]) {
    const ideaText = readIdeaText(`Ideas/${parts[1]}/idea.md`);
    return ideaText ? projectFromIdeaFrontmatter(ideaText) : undefined;
  }
  return undefined;
}

// The folder a new chat should use. `projects` maps slug -> primary folder.
export function chatFolderFor(
  relPath: string | undefined,
  projects: ReadonlyMap<string, ProjectFolder>,
  fallback: ProjectFolder,
  readIdeaText: (ideaFolderRelPath: string) => string | undefined,
): ProjectFolder {
  if (!relPath) return fallback;
  const slug = projectSlugForNote(relPath, readIdeaText);
  if (!slug) return fallback;
  return projects.get(slug) ?? fallback;
}
