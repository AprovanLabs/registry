/**
 * On-demand provider type mounting for the playground editor.
 *
 * Driven by what the source references (via {@link detectDependencies}) —
 * never prefetches the full catalogue. Mount logic mirrors
 * `@aprovan/patchwork/namespace-types` {@link resolveOnDemandProviderMounts}.
 */

import { resolveOnDemandProviderMounts } from "./type-bundle";
import type { ProviderTypesBundle } from "./catalog";
import { BUILTIN_BY_ID } from "./playground";

export type { ProviderTypesBundle };

/**
 * Build the virtual `.d.ts` file map for providers referenced in source.
 * `fetchBundle` is called once per non-builtin provider — hosts must not
 * pass every catalog id.
 */
export async function mountReferencedProviderTypes(options: {
  providers: readonly string[];
  fetchBundle: (provider: string) => Promise<ProviderTypesBundle | null>;
}): Promise<{
  files: Record<string, string>;
  fetchedProviders: string[];
}> {
  return resolveOnDemandProviderMounts({
    providers: options.providers,
    fetchBundle: options.fetchBundle,
    builtins: {
      has: (provider) => BUILTIN_BY_ID.has(provider),
      getTypes: (provider) => BUILTIN_BY_ID.get(provider)?.types,
    },
  });
}
