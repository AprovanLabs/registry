/**
 * Startup wiring for provider API-version metadata (graphql-schema-surface
 * §5). Reads `apiVersions`/`defaultVersion`/`versionedBaseUrl` straight off
 * the public registry manifest — same source, same one-time-load-then-cache
 * shape as `wirePlatformOAuthAtStartup` (platform-oauth-apps §2) and
 * `isCatalogueProvider` (the catalogue guard). Does not import the private
 * `@aprovan/utdk-bundler` package (see `registry-manifest.ts`).
 */

import { buildProviderVersioningLookup, type GetProviderVersioning } from "../profiles/versioning.js";
import { loadRegistryManifest } from "./registry-manifest.js";

let cached: GetProviderVersioning | undefined;

/** Load registry.json's version metadata once and cache the lookup. */
export async function loadProviderVersioning(): Promise<GetProviderVersioning> {
  cached ??= buildProviderVersioningLookup(await loadRegistryManifest());
  return cached;
}

/** Tests: force a re-read of the registry manifest. */
export function resetProviderVersioningCache(): void {
  cached = undefined;
}
