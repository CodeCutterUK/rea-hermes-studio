import { describe, expect, it } from "vitest";
import { primaryPathFromProjectShow } from "../src/host/project-show";

const SHOW = `software-factory  [p_d1527109]
  name:    software-factory
  primary: /Users/mark/hermes-projects/software-factory
  folders:
    * /Users/mark/hermes-projects/software-factory
`;

describe("primaryPathFromProjectShow", () => {
  it("reads the primary path from hermes project show output", () => {
    expect(primaryPathFromProjectShow(SHOW)).toEqual({
      path: "/Users/mark/hermes-projects/software-factory",
      name: "software-factory",
    });
  });

  it("returns undefined when there is no primary line", () => {
    expect(primaryPathFromProjectShow("software-factory  [p_1]\n  name: x\n")).toBeUndefined();
    expect(primaryPathFromProjectShow("")).toBeUndefined();
  });

  it("rejects a primary that is not an absolute path", () => {
    expect(primaryPathFromProjectShow("  primary: relative/dir\n")).toBeUndefined();
  });

  it("accepts a Windows absolute path", () => {
    expect(primaryPathFromProjectShow("  primary: C:\\Projects\\ttm\n")?.path).toBe(
      "C:\\Projects\\ttm",
    );
  });
});
