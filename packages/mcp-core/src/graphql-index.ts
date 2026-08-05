/**
 * Read-side client for the SDL-derived GraphQL type index (graphql-schema-
 * surface §2, built by `@aprovan/utdk-bundler/graphql-index`). Deliberately
 * does not depend on that package or on `graphql` itself: mcp-core is
 * consumed by the stdio server (`@utdk/mcp`) as well as the gateway, and
 * pulling in the bundler's build-time dependency tree just to read two
 * shipped JSON/ndjson files would bloat every consumer for a capability
 * only the lookup tool (registry-server §3) needs.
 *
 * The manifest/records shapes here are a structural mirror of the artifact
 * `writeGraphqlTypeIndex` produces — same field names, same byte-range
 * contract — so any provider package built by §2 reads correctly through
 * this module without the two packages sharing code.
 */

import { createRequire } from "node:module";
import { open, readFile } from "node:fs/promises";
import path from "node:path";
import { getProviderImportBase } from "./loader.js";

// ---------------------------------------------------------------------------
// Types (mirrors @aprovan/utdk-bundler/graphql-index's artifact shape)
// ---------------------------------------------------------------------------

export type GraphqlTypeKind = "OBJECT" | "INTERFACE" | "UNION" | "ENUM" | "INPUT_OBJECT" | "SCALAR";

export type GraphqlFieldArg = {
  name: string;
  type: string;
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
};

export type GraphqlIndexField = {
  name: string;
  type: string;
  args: GraphqlFieldArg[];
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
  /** True when this field hangs off the root Query/Mutation/Subscription type. */
  entryPoint: boolean;
};

export type GraphqlEnumValue = {
  name: string;
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
};

export type GraphqlTypeRecord = {
  name: string;
  kind: GraphqlTypeKind;
  description: string | null;
  /** Populated for OBJECT, INTERFACE, and INPUT_OBJECT; empty otherwise. */
  fields: GraphqlIndexField[];
  /** Populated for ENUM only. */
  enumValues: GraphqlEnumValue[];
};

export type GraphqlIndexEntryPoint = {
  rootType: "Query" | "Mutation" | "Subscription";
  field: string;
};

export type GraphqlIndexManifestTypeEntry = {
  kind: GraphqlTypeKind;
  fieldCount: number;
  offset: number;
  length: number;
};

export type GraphqlTypeIndexManifest = {
  provider: string;
  generatedAt: string;
  typeCount: number;
  sizeBytes: number;
  entryPoints: GraphqlIndexEntryPoint[];
  types: Record<string, GraphqlIndexManifestTypeEntry>;
};

export const GRAPHQL_INDEX_MANIFEST_FILENAME = "graphql-index.json";
export const GRAPHQL_INDEX_RECORDS_FILENAME = "graphql-index.ndjson";

// ---------------------------------------------------------------------------
// Locating a provider's shipped index directory
// ---------------------------------------------------------------------------

function isEnoent(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && (error as { code: unknown }).code === "ENOENT";
}

/**
 * Locates the on-disk directory of a shipped `@utdk/<provider>` (or vendor-
 * suite `@utdk/clients/<vendor>/<provider>`) package via Node module
 * resolution — the same "resolve, don't guess a repo-relative path"
 * approach `loader.ts` uses to import `openapi.json`, so this works
 * identically in the monorepo (pnpm workspace symlinks) and in a real npm
 * install. Returns null when the package cannot be resolved at all (unknown
 * provider name) — never throws.
 */
export function resolveProviderPackageDir(providerName: string): string | null {
  const packageName = getProviderImportBase(providerName);
  try {
    const require = createRequire(import.meta.url);
    return path.dirname(require.resolve(`${packageName}/package.json`));
  } catch {
    return null;
  }
}

/**
 * Resolves the directory that should contain `graphql-index.json` /
 * `graphql-index.ndjson` for a provider, honoring an optional pinned API
 * version (graphql-schema-surface §5): versioned providers ship their index
 * under `schemas/<version>/`; unversioned providers (most of them) ship it
 * at the package root. Returns null only when the provider package itself
 * cannot be resolved — a resolvable package with no index at that path is
 * for `readGraphqlIndexManifest` to report as a miss, not this function.
 */
export function resolveProviderGraphqlIndexDir(providerName: string, version?: string): string | null {
  const packageDir = resolveProviderPackageDir(providerName);
  if (!packageDir) return null;
  return version ? path.join(packageDir, "schemas", version) : packageDir;
}

// ---------------------------------------------------------------------------
// Reading the artifact
// ---------------------------------------------------------------------------

/**
 * Reads the manifest only — not the records file. A provider with no
 * shipped index (no SDL ingested, or a version with no schema for it) is a
 * miss (`null`), never a thrown error.
 */
export async function readGraphqlIndexManifest(indexDir: string): Promise<GraphqlTypeIndexManifest | null> {
  try {
    const raw = await readFile(path.join(indexDir, GRAPHQL_INDEX_MANIFEST_FILENAME), "utf8");
    return JSON.parse(raw) as GraphqlTypeIndexManifest;
  } catch (error: unknown) {
    if (isEnoent(error)) return null;
    throw error;
  }
}

export type GraphqlTypeLookupResult = { found: true; record: GraphqlTypeRecord } | { found: false; record: null };

/**
 * Looks up one type by name. Costs a bounded read regardless of schema
 * size: the manifest gives the exact byte offset/length of that type's
 * record, and this reads exactly that slice of `graphql-index.ndjson` —
 * never the whole records file, let alone the SDL. An unknown type (or a
 * provider with no manifest) is a miss, never a thrown error.
 */
export async function lookupGraphqlType(
  indexDir: string,
  typeName: string,
  manifest?: GraphqlTypeIndexManifest | null,
): Promise<GraphqlTypeLookupResult> {
  const resolvedManifest = manifest === undefined ? await readGraphqlIndexManifest(indexDir) : manifest;
  if (!resolvedManifest) return { found: false, record: null };

  const entry = resolvedManifest.types[typeName];
  if (!entry) return { found: false, record: null };

  const recordsPath = path.join(indexDir, GRAPHQL_INDEX_RECORDS_FILENAME);
  const handle = await open(recordsPath, "r");
  try {
    const buffer = Buffer.alloc(entry.length);
    await handle.read(buffer, 0, entry.length, entry.offset);
    return { found: true, record: JSON.parse(buffer.toString("utf8")) as GraphqlTypeRecord };
  } finally {
    await handle.close();
  }
}
