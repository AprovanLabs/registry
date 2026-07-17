/**
 * Static provider type bundles for the browser TS editor
 * (`@aprovan/registry-ui/editor`).
 *
 * `GET /catalog/types/<provider>.json` → `{ module, files }` where `files`
 * maps virtual paths (relative to the provider package root) to `.d.ts`
 * content. The editor mounts them at
 * `/node_modules/@utdk/<provider>/<path>` so `import github from
 * "@utdk/github"` resolves to real IntelliSense — our provenance-aware
 * answer to automatic type acquisition.
 *
 * Sources are the bundler-generated TS type files in `packages/utdk`:
 * either a flat `types.ts` (older generation) or a `types/` directory
 * (per-tag group files + index). Both are type-only TS, valid as `.d.ts`.
 * The package entry (`index.ts`) contains runtime code, so a declaration
 * entry is synthesized instead: named type re-exports plus a typed default
 * client and factory.
 */

import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";
import { getRegistryCatalog } from "@/lib/registry";

export interface ProviderTypesBundle {
  /** Import specifier the bundle types (e.g. `@utdk/github`). */
  module: string;
  /** Package-relative virtual file map (`index.d.ts`, `types/….d.ts`). */
  files: Record<string, string>;
}

function findWorkspaceRoot(startDirectory: string): string {
  let current = path.resolve(startDirectory);
  while (true) {
    if (existsSync(path.join(current, "packages", "utdk"))) return current;
    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error("Could not locate workspace root containing packages/utdk.");
    }
    current = parent;
  }
}

/** Mirror of the bundler's provider→PascalCase identifier derivation. */
function toPascalCase(name: string): string {
  return name
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join("")
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^[0-9]/, "_$&");
}

async function buildBundle(providerPath: string): Promise<ProviderTypesBundle | null> {
  const workspaceRoot = findWorkspaceRoot(path.dirname(new URL(import.meta.url).pathname));
  const providerDir = path.join(workspaceRoot, "packages", "utdk", ...providerPath.split("/"));
  const files: Record<string, string> = {};

  let typesImportPath: string | null = null;
  const flatTypes = path.join(providerDir, "types.ts");
  const typesDir = path.join(providerDir, "types");
  // Prefer the per-tag `types/` directory: providers regenerated with the
  // newer layout may retain a stale (often empty) flat `types.ts` beside it.
  if (existsSync(path.join(typesDir, "index.ts"))) {
    for (const entry of await readdir(typesDir)) {
      if (!entry.endsWith(".ts")) continue;
      files[`types/${entry.replace(/\.ts$/, ".d.ts")}`] = await readFile(
        path.join(typesDir, entry),
        "utf8",
      );
    }
    typesImportPath = "./types/index.js";
  } else if (existsSync(flatTypes)) {
    files["types.d.ts"] = await readFile(flatTypes, "utf8");
    typesImportPath = "./types.js";
  } else if (existsSync(typesDir)) {
    for (const entry of await readdir(typesDir)) {
      if (!entry.endsWith(".ts")) continue;
      files[`types/${entry.replace(/\.ts$/, ".d.ts")}`] = await readFile(
        path.join(typesDir, entry),
        "utf8",
      );
    }
    typesImportPath = "./types/index.js";
  }
  if (!typesImportPath) return null;

  const clientTypeName = `${toPascalCase(providerPath)}Client`;
  files["index.d.ts"] = [
    `import type { ${clientTypeName} } from "${typesImportPath}";`,
    `export * from "${typesImportPath}";`,
    `export declare function create${toPascalCase(providerPath)}Client(`,
    `  options?: Record<string, unknown>,`,
    `): Promise<${clientTypeName}>;`,
    `declare const defaultClient: ${clientTypeName};`,
    `export default defaultClient;`,
    ``,
  ].join("\n");

  return { module: `@utdk/${providerPath}`, files };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const catalog = await getRegistryCatalog();
  return catalog.entries
    .filter((entry) => entry.kind === "provider")
    .map((entry) => ({ params: { provider: entry.providerPath } }));
};

export const GET: APIRoute = async ({ params }) => {
  const providerPath = params["provider"];
  if (!providerPath || providerPath.includes("..")) {
    return new Response(JSON.stringify({ error: "Invalid provider" }), { status: 400 });
  }
  const bundle = await buildBundle(providerPath);
  if (!bundle) {
    return new Response(JSON.stringify({ error: "No generated types for provider" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify(bundle), {
    headers: { "Content-Type": "application/json" },
  });
};
