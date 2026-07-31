import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, "dist");
const skippedRootFiles = new Set(["package.json", "tsconfig.json"]);

/**
 * Mirrors build.mjs's SKIP_DIRS / SKIP_TOP_DIRS. Without it this walk copies
 * the nested workspace packages' manifests (`llm/package.json`,
 * `sandbox/package.json`, …) into dist, creating directories that contain
 * manifests and no code — enough to look like providers to anything
 * enumerating dist, and to fail when imported. The contract names apply at
 * the top level only, for build.mjs's reason: `github/vcs` is a provider
 * suite directory, not the `@utdk/vcs` package.
 */
const skippedDirs = new Set(["dist", "node_modules", "__tests__"]);
const skippedTopDirs = new Set(["llm", "sql", "sandbox", "agent", "vcs"]);

async function copyAssets(currentDir, relativeDir = '') {
  const entries = await readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    if (skippedDirs.has(entry.name)) {
      continue;
    }
    if (relativeDir === '' && skippedTopDirs.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(currentDir, entry.name);
    const relativePath = path.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      await copyAssets(sourcePath, relativePath);
      continue;
    }

    if (!entry.name.endsWith('.json')) {
      continue;
    }

    if (relativeDir === '' && skippedRootFiles.has(entry.name)) {
      continue;
    }

    const destinationPath = path.join(distDir, relativePath);
    await mkdir(path.dirname(destinationPath), { recursive: true });
    await cp(sourcePath, destinationPath);
  }
}

await copyAssets(rootDir);
