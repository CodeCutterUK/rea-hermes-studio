/**
 * Identifies this build as the CodeCutterUK fork rather than upstream 6qat/rea-hermes-studio.
 * A fork build carries a `-fork.N` suffix on its version (e.g. `0.6.35-fork.1`); an upstream build
 * does not. Keep the suffix in manifest.json and package.json in step with this check.
 */
export const FORK_VERSION_PATTERN = /^(\d+\.\d+\.\d+)-fork\.(\d+)$/;

/** True when the plugin version is a fork build. */
export function isForkVersion(version: string): boolean {
  return FORK_VERSION_PATTERN.test(version);
}

/**
 * The label shown in settings: "Hermes Studio 0.6.35-fork.1 (CodeCutterUK fork)" for a fork build,
 * or just the version for upstream. `version` is the manifest version.
 */
export function buildLabel(version: string): string {
  if (!isForkVersion(version)) return `Hermes Studio ${version}`;
  const base = version.replace(/-fork\.\d+$/, "");
  return `Hermes Studio ${base} · ${version} (CodeCutterUK fork)`;
}
