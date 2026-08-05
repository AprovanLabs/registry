/**
 * Script dependency parsing — derive a {@link RuntimeManifest} dependency list
 * from `tools.<namespace>` member access in source, and strip legacy import
 * statements so the remaining body can run in a sandbox where `tools` is
 * injected as a global.
 */

import type { ProviderAliasMap, RuntimeDependency } from "./types.js";
import { AliasResolutionError } from "./types.js";
import { scanToolsAccess } from "./tools-scan.js";

export type { ProviderAliasMap } from "./types.js";
export { AliasResolutionError } from "./types.js";

const IMPORT_PATTERN =
  /import\s+(?:([A-Za-z_$][\w$]*)|\*\s+as\s+([A-Za-z_$][\w$]*)|\{([^}]*)\})?\s*(?:,\s*\{([^}]*)\})?\s*(?:from\s*)?["']([^"']+)["']\s*;?/g;

export interface ParsedScript {
  dependencies: RuntimeDependency[];
  /** Source with import statements removed (line structure preserved). */
  body: string;
  /** True when dynamic `tools[expr]` access makes the dependency list incomplete. */
  unresolved: boolean;
}

function dashSegmentToCamel(segment: string, capitalizeFirst: boolean): string {
  const parts = segment.split("-").filter(Boolean);
  if (parts.length === 0) return "";

  return parts
    .map((part, index) => {
      const lower = part.toLowerCase();
      if (index === 0 && !capitalizeFirst) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

/** Derive the camelCase `tools.` alias from a canonical provider name. */
export function deriveGlobalAlias(name: string): string {
  const segments = name.split("/");
  if (segments.length === 1) {
    return dashSegmentToCamel(segments[0] ?? name, false);
  }

  return segments.map((segment, index) => dashSegmentToCamel(segment, index > 0)).join("");
}

/** Build alias → canonical provider map from provider names. */
export function buildProviderAliasMap(
  providerNames: readonly string[],
): ProviderAliasMap {
  const aliases = new Map<string, string>();
  for (const provider of providerNames) {
    aliases.set(deriveGlobalAlias(provider), provider);
  }
  return aliases;
}

function resolveScannedAlias(alias: string, aliases?: ProviderAliasMap): string {
  if (!aliases) return alias;
  const provider = aliases.get(alias);
  if (provider === undefined) {
    throw new AliasResolutionError(alias);
  }
  return provider;
}

function namespacesToDependencies(
  namespaces: string[],
  aliases?: ProviderAliasMap,
): RuntimeDependency[] {
  return namespaces.map((namespace) => ({
    identifier: namespace,
    specifier: `tools.${namespace}`,
    provider: resolveScannedAlias(namespace, aliases),
    path: "",
  }));
}

/** Parse a script's `tools.` accesses into runtime dependencies and strip imports. */
export function parseScriptDependencies(
  source: string,
  aliases?: ProviderAliasMap,
): ParsedScript {
  const { namespaces, unresolved } = scanToolsAccess(source);
  const dependencies = namespacesToDependencies(namespaces, aliases);

  const body = source.replace(
    IMPORT_PATTERN,
    (match) => match.replace(/[^\n]/g, ""),
  );

  return { dependencies, body, unresolved };
}

/**
 * Prepare a script body for sandbox execution: after import stripping, rewrite
 * `export default <fn>` into a binding the sandbox harness invokes with the
 * script's inputs. Scripts without a default export run top-to-bottom.
 */
export function rewriteDefaultExport(body: string, binding = "__default__"): string {
  return body.replace(/export\s+default\s+/, `const ${binding} = `);
}

export { scanToolsAccess, type ToolsAccessScan } from "./tools-scan.js";
