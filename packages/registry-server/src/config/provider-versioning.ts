/**
 * Startup wiring for provider API-version metadata (graphql-schema-surface
 * §5). Reads `apiVersions`/`defaultVersion`/`versionedBaseUrl` straight off
 * the public registry manifest via the bundler's loader — same source, same
 * one-time-load-then-cache shape as `wirePlatformOAuthAtStartup`
 * (platform-oauth-apps §2) and `isCatalogueProvider` (the catalogue guard).
 */

import { loadRegistryProviders } from "@aprovan/utdk-bundler/provider";
import { buildProviderVersioningLookup, type GetProviderVersioning } from "../profiles/versioning.js";

let cached: GetProviderVersioning | undefined;

/** Load registry.json's version metadata once and cache the lookup. */
export async function loadProviderVersioning(): Promise<GetProviderVersioning> {
  cached ??= buildProviderVersioningLookup(await loadRegistryProviders());
  return cached;
}

/** Tests: force a re-read of the registry manifest. */
export function resetProviderVersioningCache(): void {
  cached = undefined;
}
