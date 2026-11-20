import { describe, expect, it } from "vitest";
import {
  chatFolderFor,
  HERMES_SLUG_FOR_VAULT_FOLDER,
  hermesSlugFor,
  type ProjectFolder,
  projectFromIdeaFrontmatter,
  projectSlugForNote,
} from "../src/host/chat-project";

const VAULT: ProjectFolder = { path: "/vault/Factory", name: "Factory" };
const FACTORY: ProjectFolder = { path: "/repos/software-factory", name: "software-factory" };
const TTM: ProjectFolder = { path: "/repos/train-ticket-manager", name: "train-ticket-manager" };
const PROJECTS = new Map<string, ProjectFolder>([
  ["factory", FACTORY],
  ["ttm", TTM],
]);
const NO_IDEA = () => undefined;

describe("projectFromIdeaFrontmatter", () => {
  it("reads the project key from idea frontmatter", () => {
    const text = "---\nid: 20261113-0044-audit\nproject: ttm\nstage: shape\n---\n# body\n";
    expect(projectFromIdeaFrontmatter(text)).toBe("ttm");
  });

  it("strips quotes and surrounding whitespace", () => {
    expect(projectFromIdeaFrontmatter('---\nproject: "factory"  \n---\n')).toBe("factory");
  });

  it("returns undefined when there is no project key, an empty value, or no frontmatter", () => {
    expect(projectFromIdeaFrontmatter("---\nstage: shape\n---\n")).toBeUndefined();
    expect(projectFromIdeaFrontmatter("---\nproject:\n---\n")).toBeUndefined();
    expect(projectFromIdeaFrontmatter("# just a note")).toBeUndefined();
  });
});

describe("projectSlugForNote", () => {
  it("takes the slug from a Projects/<slug>/ path", () => {
    expect(projectSlugForNote("Projects/factory/Jobs/20261112-0832-37o/job.md", NO_IDEA)).toBe(
      "factory",
    );
    expect(projectSlugForNote("Projects/ttm/Inbox/note.md", NO_IDEA)).toBe("ttm");
  });

  it("reads the project from the idea's idea.md for an Ideas/<id>/ path", () => {
    const read = (p: string) =>
      p === "Ideas/20261113-0044-audit/idea.md" ? "---\nproject: ttm\n---\n" : undefined;
    expect(projectSlugForNote("Ideas/20261113-0044-audit/design.md", read)).toBe("ttm");
  });

  it("returns undefined for an idea with no project, and for notes outside Projects/ and Ideas/", () => {
    expect(projectSlugForNote("Ideas/Inbox/draft.md", NO_IDEA)).toBeUndefined();
    expect(projectSlugForNote("Ideas/20261113-0044-audit/idea.md", NO_IDEA)).toBeUndefined();
    expect(projectSlugForNote("People/Mark.md", NO_IDEA)).toBeUndefined();
    expect(projectSlugForNote("README.md", NO_IDEA)).toBeUndefined();
  });

  it("handles Windows-style separators", () => {
    expect(projectSlugForNote("Projects\\factory\\Inbox\\n.md", NO_IDEA)).toBe("factory");
  });
});

describe("chatFolderFor", () => {
  it("uses the project's primary folder for a note in a known project", () => {
    expect(chatFolderFor("Projects/factory/Inbox/n.md", PROJECTS, VAULT, NO_IDEA)).toEqual(FACTORY);
  });

  it("falls back to the vault when no note is open", () => {
    expect(chatFolderFor(undefined, PROJECTS, VAULT, NO_IDEA)).toEqual(VAULT);
  });

  it("falls back to the vault when the slug has no project folder", () => {
    expect(chatFolderFor("Projects/unknown-slug/Inbox/n.md", PROJECTS, VAULT, NO_IDEA)).toEqual(
      VAULT,
    );
  });

  it("falls back to the vault for notes outside any project", () => {
    expect(chatFolderFor("People/Mark.md", PROJECTS, VAULT, NO_IDEA)).toEqual(VAULT);
  });

  it("routes an idea note through its project", () => {
    const read = () => "---\nproject: ttm\n---\n";
    expect(chatFolderFor("Ideas/20261113-0044-audit/idea.md", PROJECTS, VAULT, read)).toEqual(TTM);
  });
});

describe("vault folder to Hermes project slug", () => {
  it("maps each live vault folder to the Hermes project id the user confirmed", () => {
    expect(hermesSlugFor("factory")).toBe("software-factory");
    expect(hermesSlugFor("ttm")).toBe("train-ticket-manager");
    expect(hermesSlugFor("itv")).toBe("llm-wiki-manager-itv");
    expect(hermesSlugFor("mini-library")).toBe("mini-library");
  });

  it("has no entry for the retired 'mini' folder, or for an unknown folder", () => {
    expect(hermesSlugFor("mini")).toBeUndefined();
    expect(hermesSlugFor("nope")).toBeUndefined();
    expect(HERMES_SLUG_FOR_VAULT_FOLDER.size).toBe(4);
  });
});
