/**
 * Runtime reader for the public provider manifest (`data/registry.json`).
 *
 * `@aprovan/utdk-bundler/provider`'s `loadRegistryProviders` is the ingest-time
 * authority, but the bundler package is private / monorepo-only — published
 * `@aprovan/registry-server` must not depend on it. This module mirrors the
 * fields the server needs at startup (`platformApp`, API-version metadata)
 * and resolves the JSON from, in order:
 *
 * 1. `REGISTRY_JSON_PATH` (explicit override)
 * 2. `<cwd>/data/registry.json` (monorepo / image working directory)
 * 3. empty list (self-host / tests without a manifest — features stand down)
 */

import { readFile } from "node:fs/promises";
import path from "node:path";

export interface RegistryManifestProvider {
  name: string;
  platformApp?: boolean;
  apiVersions?: string[];
  defaultVersion?: string;
  versionedBaseUrl?: string;
}

async function readManifest(filePath: string): Promise<RegistryManifestProvider[] | undefined> {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return undefined;
    return parsed as RegistryManifestProvider[];
  } catch {
    return undefined;
  }
}

/** Load provider entries needed at server startup. Never throws. */
export async function loadRegistryManifest(
  env: NodeJS.ProcessEnv = process.env,
  cwd: string = process.cwd(),
): Promise<RegistryManifestProvider[]> {
  const override = env["REGISTRY_JSON_PATH"]?.trim();
  if (override) {
    const fromOverride = await readManifest(override);
    if (fromOverride) return fromOverride;
  }

  const fromCwd = await readManifest(path.join(cwd, "data", "registry.json"));
  if (fromCwd) return fromCwd;

  return [];
}
