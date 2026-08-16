import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { assertUniqueGlobalAliases, assertValidProviderName } from "./naming.js";

export type RegistryProvider = {
  name: string;
  /**
   * Public flag: this provider has a hosted platform OAuth app tenants can
   * use without registering their own (platform-oauth-apps D2). The secret
   * never lives in the repo — it is resolved from `PLATFORM_OAUTH_*` env at
   * hosted startup only.
   */
  platformApp?: boolean;
  options?: RegistryProviderOptions;
  transport_type?: string;
  fetch_method?: string;
  url: string;
  content_type?: string;
  /**
   * Optional GraphQL SDL source, fetched alongside `url` and shipped as
   * `schema.graphql` with the same provenance treatment (hash, fetchedAt,
   * generation). Same scheme conventions as `url` (`https://`, `file://`,
   * `repo://`). A provider declaring this must also expose a GraphQL
   * passthrough operation, and vice versa — see `graphql-schema.ts`.
   */
  graphqlSchemaUrl?: string;
  /**
   * Providers that version their API by date/label put the version in the
   * URL (graphql-schema-surface tech-plan D4, e.g. Shopify's `2024-10`).
   * `apiVersions` is the supported set; `defaultVersion` (required whenever
   * `apiVersions` is present) is required iff `apiVersions` is present and
   * must be one of them. Both are optional — most providers have no version
   * concept.
   */
  apiVersions?: string[];
  defaultVersion?: string;
  /**
   * The endpoint template a resolved version is substituted into (its
   * `{version}` placeholder), e.g.
   * `https://{shop}.myshopify.com/admin/api/{version}/graphql.json`.
   * Registry-server DERIVES `baseUrl` from this rather than accepting one
   * set alongside a version — see `resolveProviderVersion` in
   * `@aprovan/registry-server/profiles/versioning`.
   */
  versionedBaseUrl?: string;
  /** Ingest source for provenance tracking. Defaults to "manual". */
  ingestSource?: string;
  metadata?: RegistryProviderMetadata;
  provenance?: RegistryProviderProvenance;
  branding?: RegistryProviderBranding;
};

export type RegistryProviderMetadata = {
  description?: string;
  category?: string;
  last_updated?: string;
  maintainer?: string;
  documentation_url?: string;
  version?: string;
  openapi_version?: string;
};

/**
 * Chain of ownership for a provider. Links must point at the upstream vendor
 * (origin spec + domain), never at an aggregator we happened to ingest through
 * (the aggregator is recorded separately as `source`).
 */
export type RegistryProviderProvenance = {
  /** Ingest script/source that produced this entry (e.g. "apis-guru", "manual"). */
  source: string;
  /** Vendor domain that owns the API (e.g. "github.com"). */
  originDomain?: string;
  /** The vendor's original OpenAPI spec URL, as published by them. */
  originSpecUrl?: string;
  /** Sub-service under the origin domain (e.g. "api.github.com"). */
  service?: string;
  /** ISO timestamp of when this entry was ingested/refreshed. */
  retrievedAt?: string;
};

export type RegistryProviderBranding = {
  /** Provider logo URL. */
  logo?: string;
  /** Vendor website (marketing/home), preferred link target for the provider. */
  site?: string;
};

export type RegistryProviderAuthOption = Record<string, unknown>;

export type RegistryProviderOptions = {
  auth?: RegistryProviderAuthOption | RegistryProviderAuthOption[];
  openapi?: RegistryProviderOpenApiOptions;
  operations?: RegistryProviderOperationsOptions;
};

export type RegistryProviderOpenApiOptions = {
  icon?: string;
};

export type RegistryProviderOperationsOptions = {
  stripPrefix?: string;
};

export const REGISTRY_PATH = resolveRepoPath("data", "registry.json");
export const DEFAULT_OUTPUT_ROOT = resolveRepoPath("packages", "utdk");
export const DEFAULT_DOCS_CACHE_ROOT = resolveRepoPath(".registry");

export function resolveRepoPath(...segments: string[]): string {
  return path.join(fileURLToPath(new URL("../../..", import.meta.url)), ...segments);
}

/**
 * Provider names split on `/` only. Dots are not a separator in provider
 * identity — they belong to the tool surface (`github.repos.get`); the
 * naming authority (naming.ts) guarantees names never contain them.
 */
export function splitProviderName(providerName: string): string[] {
  const segments = providerName
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean);

  return segments.length > 0 ? segments : [providerName];
}

export function normalizeProviderName(providerName: string): string {
  return splitProviderName(providerName).join("/");
}

export function getProviderPackageRootName(providerName: string): string {
  return splitProviderName(providerName)[0] ?? providerName;
}

export function getProviderPackageSubpath(providerName: string): string | undefined {
  const segments = splitProviderName(providerName);
  return segments.length > 1 ? segments.slice(1).join("/") : undefined;
}

export function getProviderPackageName(providerName: string): string {
  return `@utdk/${getProviderPackageRootName(providerName)}`;
}

/**
 * Import specifier consumers use for a provider's client.
 * Top-level providers are scoped packages (@utdk/github); vendor-suite
 * services are subpaths of the root "utdk" package (@utdk/clients/google/drive).
 */
export function getProviderImportSpecifier(providerName: string): string {
  const segments = splitProviderName(providerName);
  return segments.length > 1 ? `@utdk/clients/${segments.join("/")}` : `@utdk/${segments.join("/")}`;
}

export function getProviderClientImportPath(providerName: string): string {
  return `${"../".repeat(splitProviderName(providerName).length)}client.js`;
}

export function getPrimaryProviderAuthOption(
  providerOptions?: RegistryProviderOptions,
): RegistryProviderAuthOption | undefined {
  return getProviderAuthOptions(providerOptions)[0];
}

export function getProviderAuthOptions(
  providerOptions?: RegistryProviderOptions,
): RegistryProviderAuthOption[] {
  const auth = providerOptions?.auth;

  if (!auth) {
    return [];
  }

  return Array.isArray(auth) ? auth : [auth];
}

function getProviderToolPrefixes(providerName: string): string[] {
  const normalizedProviderName = normalizeProviderName(providerName);
  const dottedProviderName = normalizedProviderName.replace(/\//g, ".");

  return [...new Set([providerName, normalizedProviderName, dottedProviderName])]
    .filter(Boolean)
    .map((prefix) => `${prefix}.`);
}

function stripCustomOperationPrefix(
  toolName: string,
  providerOptions?: RegistryProviderOptions,
): string {
  const stripPrefix = providerOptions?.operations?.stripPrefix?.trim();

  return stripPrefix && toolName.startsWith(stripPrefix) ? toolName.slice(stripPrefix.length) : toolName;
}

export function stripProviderToolName(toolName: string, provider: Pick<RegistryProvider, "name" | "options">): string {
  for (const prefix of getProviderToolPrefixes(provider.name)) {
    if (toolName.startsWith(prefix)) {
      return stripCustomOperationPrefix(toolName.slice(prefix.length), provider.options);
    }
  }

  const fallbackSegments = toolName.split(".");
  const fallbackToolName = fallbackSegments.length > 1 ? fallbackSegments.slice(1).join(".") : toolName;
  return stripCustomOperationPrefix(fallbackToolName, provider.options);
}

function assertValidPlatformApp(provider: RegistryProvider): void {
  if (provider.platformApp !== undefined && typeof provider.platformApp !== "boolean") {
    throw new Error(
      `Provider "${provider.name}" has invalid platformApp in ${REGISTRY_PATH} — must be boolean.`,
    );
  }
}

/**
 * `apiVersions`/`defaultVersion`/`versionedBaseUrl` are optional but, once
 * any is declared, must be internally consistent (graphql-schema-surface
 * tasks.md 5.1/5.4) — caught here, at load time, rather than at first
 * dispatch against the provider.
 */
function assertValidApiVersioning(provider: RegistryProvider): void {
  const { apiVersions, defaultVersion, versionedBaseUrl } = provider;

  if (apiVersions === undefined) {
    if (defaultVersion !== undefined) {
      throw new Error(
        `Provider "${provider.name}" declares defaultVersion without apiVersions in ${REGISTRY_PATH}.`,
      );
    }
    if (versionedBaseUrl !== undefined) {
      throw new Error(
        `Provider "${provider.name}" declares versionedBaseUrl without apiVersions in ${REGISTRY_PATH}.`,
      );
    }
    return;
  }

  if (!Array.isArray(apiVersions) || apiVersions.length === 0 || !apiVersions.every((v) => typeof v === "string" && v.length > 0)) {
    throw new Error(
      `Provider "${provider.name}" has invalid apiVersions in ${REGISTRY_PATH} — must be a non-empty array of strings.`,
    );
  }
  if (defaultVersion === undefined) {
    throw new Error(
      `Provider "${provider.name}" declares apiVersions but no defaultVersion in ${REGISTRY_PATH} — ` +
        `required whenever apiVersions is present.`,
    );
  }
  if (!apiVersions.includes(defaultVersion)) {
    throw new Error(
      `Provider "${provider.name}" has defaultVersion "${defaultVersion}" which is not one of its own ` +
        `apiVersions [${apiVersions.join(", ")}] in ${REGISTRY_PATH}.`,
    );
  }
}

/**
 * Returns true if the path exists on disk (file or directory).
 * Uses `access` so the check is mockable via `node:fs/promises`.
 */
async function pathExists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns true if `p` is a directory that exists on disk.
 * Uses `stat` so the check is mockable via `node:fs/promises`.
 */
async function isDirectory(p: string): Promise<boolean> {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Filesystem half of 5.4 (graphql-schema-surface tasks.md): validates that
 * the shipped `packages/utdk/<provider>/schemas/` layout is coherent with
 * the registry entry.
 *
 * Rule 1 — schemas/ without defaultVersion: if the provider directory
 * contains a `schemas/` subdirectory, the registry entry must declare
 * `defaultVersion` (because there is no unambiguous schema to fall back to).
 *
 * Rule 2 — declared version without schema file: every version in
 * `apiVersions` must have a corresponding `schemas/<version>.graphql` file,
 * so a profile pinning any supported version is guaranteed to resolve a
 * schema.
 *
 * Both checks are skipped for providers whose directory does not exist yet
 * (not yet generated) — this lint applies only to what is actually shipped.
 */
async function assertValidSchemaFiles(
  provider: RegistryProvider,
  outputRoot: string,
): Promise<void> {
  const providerDir = resolveProviderOutputDir(provider.name, outputRoot);
  const schemasDir = path.join(providerDir, "schemas");

  const hasSchemasDir = await isDirectory(schemasDir);

  // Rule 1: schemas/ directory without defaultVersion is incoherent — there
  // is no unambiguous schema to resolve for unversioned callers.
  if (hasSchemasDir && provider.defaultVersion === undefined) {
    throw new Error(
      `Provider "${provider.name}" has a schemas/ directory but declares no defaultVersion in ` +
        `${REGISTRY_PATH} — add defaultVersion to name the schema that unversioned callers resolve to.`,
    );
  }

  // Rule 2: once schemas/ is present every declared apiVersion must have its
  // file — a version without a schema file is unresolvable at dispatch time.
  // Skipped when schemas/ does not exist yet (provider declared apiVersions
  // but has not run generate; the directory-existence check above gates this).
  if (hasSchemasDir && provider.apiVersions && provider.apiVersions.length > 0) {
    for (const version of provider.apiVersions) {
      const schemaFile = path.join(schemasDir, `${version}.graphql`);
      const exists = await pathExists(schemaFile);
      if (!exists) {
        throw new Error(
          `Provider "${provider.name}" declares apiVersion "${version}" but has no schema file ` +
            `at schemas/${version}.graphql — add the file or remove the version from apiVersions.`,
        );
      }
    }
  }
}

export async function loadRegistryProviders(outputRoot = DEFAULT_OUTPUT_ROOT): Promise<RegistryProvider[]> {
  const rawRegistry = await readFile(REGISTRY_PATH, "utf8");
  const providers = JSON.parse(rawRegistry) as RegistryProvider[];
  // A hand-edited dotted (or otherwise malformed) name must fail here, at
  // load time — not later, as a mis-split directory during generation.
  for (const provider of providers) {
    assertValidProviderName(provider.name);
    assertValidPlatformApp(provider);
    assertValidApiVersioning(provider);
    await assertValidSchemaFiles(provider, outputRoot);
  }
  assertUniqueGlobalAliases(providers.map((provider) => provider.name));
  return providers;
}

export function resolveProvider(providers: RegistryProvider[], providerName: string): RegistryProvider {
  const normalizedProviderName = normalizeProviderName(providerName);
  const provider = providers.find((entry) => normalizeProviderName(entry.name) === normalizedProviderName);

  if (!provider) {
    throw new Error(`Provider "${providerName}" was not found in ${REGISTRY_PATH}.`);
  }

  if (!provider.url) {
    throw new Error(`Provider "${providerName}" is missing a URL in ${REGISTRY_PATH}.`);
  }

  const providerType = provider.transport_type ?? "http";
  if (providerType !== "http" && providerType !== "local") {
    throw new Error(`Provider "${providerName}" uses unsupported type "${provider.transport_type}".`);
  }

  return provider;
}

export function resolveProviderOutputDir(providerName: string, outputRoot: string): string {
  return path.join(outputRoot, ...splitProviderName(providerName));
}

export function resolveProviderPackageRootDir(providerName: string, outputRoot: string): string {
  return path.join(outputRoot, getProviderPackageRootName(providerName));
}

export function resolveProviderDocsCacheDir(providerName: string, docsCacheRoot = DEFAULT_DOCS_CACHE_ROOT): string {
  return path.join(docsCacheRoot, ...splitProviderName(providerName));
}

export function resolveProviderDocsManifestPath(providerName: string, docsCacheRoot = DEFAULT_DOCS_CACHE_ROOT): string {
  return path.join(resolveProviderDocsCacheDir(providerName, docsCacheRoot), "manifest.json");
}

export function resolveProviderDocsSourcesDir(providerName: string, docsCacheRoot = DEFAULT_DOCS_CACHE_ROOT): string {
  return path.join(resolveProviderDocsCacheDir(providerName, docsCacheRoot), "sources");
}

export function resolveProviderDocsIndexPath(providerName: string, docsCacheRoot = DEFAULT_DOCS_CACHE_ROOT): string {
  return path.join(resolveProviderDocsCacheDir(providerName, docsCacheRoot), "index.md");
}

export function resolveProviderDocsOutputDir(providerName: string, outputRoot = DEFAULT_OUTPUT_ROOT): string {
  return path.join(resolveProviderOutputDir(providerName, outputRoot), "docs");
}
