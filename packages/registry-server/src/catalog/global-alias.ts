/**
 * Namespace catalog alias surface — derived from the naming authority in
 * `@aprovan/utdk-bundler/naming`, never stored.
 */

import { deriveGlobalAlias } from "@aprovan/utdk-bundler/naming";

export { deriveGlobalAlias };

/** Attach canonical `name` and derived `globalAlias` to a namespace entry. */
export function namespaceAliasFields(id: string): { name: string; globalAlias: string } {
  return { name: id, globalAlias: deriveGlobalAlias(id) };
}
