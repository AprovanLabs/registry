import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, "dist");
const skippedRootFiles = new Set(["package.json", "tsconfig.json"]);

/**
 * Mirrors build.mjs's SKIP_DIRS. Without it this walk copies `llm/package.json`
 * and `sql/package.json` into dist, creating `dist/llm` and `dist/sql`
 * directories that contain manifests and no code — enough to look like
 * providers to anything enumerating dist, and to fail when imported.
 */
const skippedDirs = new Set(["dist", "node_modules", "llm", "sql", "__tests__"]);

async function copyAssets(currentDir, relativeDir = '') {
  const entries = await readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    if (skippedDirs.has(entry.name)) {
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
