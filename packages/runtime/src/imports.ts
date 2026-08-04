/**
 * Script dependency parsing — derive a {@link RuntimeManifest} dependency list
 * from `tools.<namespace>` member access in source, and strip legacy import
 * statements so the remaining body can run in a sandbox where `tools` is
 * injected as a global.
 */

import type { RuntimeDependency } from "./types.js";
import { scanToolsAccess } from "./tools-scan.js";

const IMPORT_PATTERN =
  /import\s+(?:([A-Za-z_$][\w$]*)|\*\s+as\s+([A-Za-z_$][\w$]*)|\{([^}]*)\})?\s*(?:,\s*\{([^}]*)\})?\s*(?:from\s*)?["']([^"']+)["']\s*;?/g;

export interface ParsedScript {
  dependencies: RuntimeDependency[];
  /** Source with import statements removed (line structure preserved). */
  body: string;
  /** True when dynamic `tools[expr]` access makes the dependency list incomplete. */
  unresolved: boolean;
}

function namespacesToDependencies(namespaces: string[]): RuntimeDependency[] {
  return namespaces.map((namespace) => ({
    identifier: namespace,
    specifier: `tools.${namespace}`,
    provider: namespace,
    path: "",
  }));
}

/** Parse a script's `tools.` accesses into runtime dependencies and strip imports. */
export function parseScriptDependencies(source: string): ParsedScript {
  const { namespaces, unresolved } = scanToolsAccess(source);
  const dependencies = namespacesToDependencies(namespaces);

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
