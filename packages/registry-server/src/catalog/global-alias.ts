/**
 * Namespace catalog alias surface. The ingest-time naming authority lives in
 * `packages/bundler/src/naming.ts`; this mirrors `deriveGlobalAlias` so the
 * published server does not depend on the private `@aprovan/utdk-bundler`
 * package. Keep the two in sync when the alias rules change.
 */

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

/** Attach canonical `name` and derived `globalAlias` to a namespace entry. */
export function namespaceAliasFields(id: string): { name: string; globalAlias: string } {
  return { name: id, globalAlias: deriveGlobalAlias(id) };
}
