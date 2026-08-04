/**
 * Thin mirror of `@aprovan/patchwork/namespace-types` type-bundle helpers.
 *
 * The registry workspace cannot depend on `@aprovan/patchwork` (that package
 * lives in the aprovan monorepo and is pinned via `workspace:*` there). Keep
 * this file byte-equivalent to:
 *   packages/compiler/src/transforms/{identifier-case,provider-types-bundle}.ts
 * in the aprovan editor-consolidation worktree.
 */

function sanitizeIdentifier(name: string): string {
  return name.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^[0-9]/, "_$&");
}

function splitIdentifierWords(name: string): string[] {
  return name
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/** `github` → `Github`, `google/books` → `GoogleBooks` — single derivation. */
export function toPascalCase(name: string): string {
  return sanitizeIdentifier(
    splitIdentifierWords(name)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
      .join(""),
  );
}

export interface ProviderTypesBundle {
  module: string;
  files: Record<string, string>;
}

export function emitProviderModuleIndex(
  providerPath: string,
  typesImportPath: string,
): string {
  const pascal = toPascalCase(providerPath);
  const clientTypeName = `${pascal}Client`;
  return [
    `import type { ${clientTypeName} } from "${typesImportPath}";`,
    `export * from "${typesImportPath}";`,
    `export declare function create${pascal}Client(`,
    `  options?: Record<string, unknown>,`,
    `): Promise<${clientTypeName}>;`,
    `declare const defaultClient: ${clientTypeName};`,
    `export default defaultClient;`,
    ``,
  ].join("\n");
}

export function providerModuleName(providerPath: string): string {
  return `@utdk/${providerPath}`;
}

export interface OnDemandProviderMountOptions {
  providers: readonly string[];
  fetchBundle: (provider: string) => Promise<ProviderTypesBundle | null>;
  builtins?: {
    has(provider: string): boolean;
    getTypes?(provider: string): string | undefined;
  };
}

/**
 * Mount provider declarations for exactly the providers the source references.
 * Does not fetch the full catalogue ahead of time.
 */
export async function resolveOnDemandProviderMounts(
  options: OnDemandProviderMountOptions,
): Promise<{
  files: Record<string, string>;
  fetchedProviders: string[];
}> {
  const files: Record<string, string> = {};
  const fetchedProviders: string[] = [];
  const unique = [...new Set(options.providers)];

  for (const provider of unique) {
    if (options.builtins?.has(provider)) {
      const types = options.builtins.getTypes?.(provider);
      if (types) {
        files[`/node_modules/${provider}/index.d.ts`] = types;
      }
      continue;
    }

    fetchedProviders.push(provider);
    const bundle = await options.fetchBundle(provider);
    if (!bundle) continue;

    for (const [relative, content] of Object.entries(bundle.files)) {
      files[`/node_modules/${bundle.module}/${relative}`] = content;
    }

    if (provider !== bundle.module) {
      files[`/node_modules/@utdk/${provider}/index.d.ts`] =
        `export * from "${bundle.module}";\n` +
        `export { default } from "${bundle.module}";\n`;
    }
  }

  return { files, fetchedProviders };
}
