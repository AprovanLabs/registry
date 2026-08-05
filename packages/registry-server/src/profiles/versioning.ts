/**
 * Provider API-version resolution (graphql-schema-surface tech-plan D4).
 *
 * `apiVersions`/`defaultVersion`/`versionedBaseUrl` are optional registry.json
 * fields — most of the ~2,000 providers have no version concept and never
 * touch this module. When a provider DOES declare them, `resolveProviderVersion`
 * is the ONLY place that turns (provider versioning, a profile's pinned
 * `version`) into (resolved version, endpoint): `baseUrl` is always DERIVED
 * from `versionedBaseUrl`, never accepted from the profile directly, so the
 * endpoint and the schema a call ends up using can never drift apart
 * (tech-plan "Rejected — baseUrl override alone").
 */

import { ServiceError } from "../kernel/index.js";

export interface ProviderVersioning {
  apiVersions: string[];
  defaultVersion: string;
  versionedBaseUrl?: string;
}

/** Provider id → its versioning metadata; undefined = unversioned. */
export type GetProviderVersioning = (provider: string) => ProviderVersioning | undefined;

export interface VersionResolution {
  /** Resolved version; undefined when the provider has no version concept. */
  version?: string;
  /** Endpoint derived from `versionedBaseUrl`; undefined when the provider declares none. */
  baseUrl?: string;
}

/**
 * Resolve a call's API version and, from it alone, its endpoint.
 *
 * - Unversioned provider + no pinned version → a no-op (task 5.3).
 * - Unversioned provider + a pinned version → loud error: nothing to pin against.
 * - Versioned provider + an explicit `baseUrl` on the profile → loud 400: the
 *   endpoint must be derived, never set alongside a version (task 5.2).
 * - Versioned provider + an unsupported pinned version → loud error naming
 *   the supported set (task 5.1).
 */
export function resolveProviderVersion(
  provider: string,
  versioning: ProviderVersioning | undefined,
  requestedVersion: string | undefined,
  explicitBaseUrl: string | undefined,
): VersionResolution {
  if (!versioning) {
    if (requestedVersion) {
      throw new ServiceError(
        `Profile pins version "${requestedVersion}" for provider "${provider}", which declares no ` +
          `apiVersions — remove "version" from the profile.`,
        400,
      );
    }
    return {};
  }

  if (explicitBaseUrl) {
    throw new ServiceError(
      `Provider "${provider}" derives its endpoint from the resolved API version ` +
        `(versionedBaseUrl) — a profile may not also set "baseUrl". Set "version" instead, or ` +
        `omit both to use the default version ("${versioning.defaultVersion}").`,
      400,
    );
  }

  const version = requestedVersion ?? versioning.defaultVersion;
  if (requestedVersion && !versioning.apiVersions.includes(requestedVersion)) {
    throw new ServiceError(
      `Provider "${provider}" has no API version "${requestedVersion}". Supported versions: ` +
        `${versioning.apiVersions.join(", ")}.`,
      400,
    );
  }

  const baseUrl = versioning.versionedBaseUrl?.replace("{version}", version);
  return { version, ...(baseUrl ? { baseUrl } : {}) };
}

/**
 * Builds the `GetProviderVersioning` lookup from loaded registry.json
 * entries. `defaultVersion` presence and membership in `apiVersions` are
 * asserted at registry-load time (bundler `assertValidApiVersioning`) — this
 * trusts that gate rather than re-validating it per call.
 */
export function buildProviderVersioningLookup(
  providers: ReadonlyArray<{
    name: string;
    apiVersions?: string[];
    defaultVersion?: string;
    versionedBaseUrl?: string;
  }>,
): GetProviderVersioning {
  const byProvider = new Map<string, ProviderVersioning>();
  for (const provider of providers) {
    if (!provider.apiVersions || provider.apiVersions.length === 0) continue;
    byProvider.set(provider.name, {
      apiVersions: provider.apiVersions,
      defaultVersion: provider.defaultVersion!,
      ...(provider.versionedBaseUrl ? { versionedBaseUrl: provider.versionedBaseUrl } : {}),
    });
  }
  return (provider) => byProvider.get(provider);
}
