import { describe, expect, it } from "vitest";
import { buildLabel, isForkVersion } from "../src/build-identity";

describe("fork build identity", () => {
  it("recognises a fork version and rejects an upstream one", () => {
    expect(isForkVersion("0.6.35-fork.1")).toBe(true);
    expect(isForkVersion("0.6.35-fork.12")).toBe(true);
    expect(isForkVersion("0.6.35")).toBe(false);
    expect(isForkVersion("0.6.35-fork")).toBe(false);
    expect(isForkVersion("v0.6.35-fork.1")).toBe(false);
  });

  it("labels a fork build with the upstream base and the fork version", () => {
    expect(buildLabel("0.6.35-fork.1")).toBe("Hermes Studio 0.6.35 · 0.6.35-fork.1 (CodeCutterUK fork)");
  });

  it("labels an upstream build with its plain version", () => {
    expect(buildLabel("0.6.35")).toBe("Hermes Studio 0.6.35");
  });

  it("keeps manifest.json and package.json on the same version", async () => {
    const fs = await import("node:fs");
    const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf8"));
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    expect(manifest.version).toBe(pkg.version);
    expect(manifest.id).toBe("hermes-studio");
    // The version must have a versions.json entry, or Obsidian cannot resolve the min app version.
    const versions = JSON.parse(fs.readFileSync("versions.json", "utf8"));
    expect(versions[manifest.version]).toBeDefined();
  });
});
