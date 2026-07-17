/**
 * SDK-first presentation helpers: turn registry operations into symbols the
 * site can render like an editor renders a library — namespaces, functions,
 * short signatures — with enough metadata to feed the try-it console.
 */

import type { TryItField } from "@aprovan/registry-ui";
import type { RegistryEntry, RegistryOperation } from "./registry";

export type SdkSymbol = {
  /** Canonical SDK path, e.g. "orgs.list". */
  sdkPath: string;
  /** Leading namespace ("orgs") or "" for top-level symbols. */
  namespace: string;
  /** Trailing method name ("list"). */
  method: string;
  httpMethod: string;
  httpPath: string;
  summary: string | null;
  /** Short parameter preview, e.g. "{ owner, repo, title? }" or "". */
  paramsPreview: string;
  fields: TryItField[];
  snippet: string;
};

type SchemaLike = {
  type?: string;
  enum?: Array<string | number>;
  default?: unknown;
  properties?: Record<string, SchemaLike & { description?: string }>;
  /** OpenAPI object schemas use string[]; some specs incorrectly use a boolean. */
  required?: string[] | boolean;
};

const MAX_PREVIEW_PARAMS = 4;

function requiredPropertyNames(schema: SchemaLike | null): Set<string> {
  return new Set(Array.isArray(schema?.required) ? schema.required : []);
}

function toTryItFields(operation: RegistryOperation): TryItField[] {
  const parameterFields: TryItField[] = operation.parameters
    .filter((parameter) =>
      ["path", "query", "header", "cookie"].includes(parameter.location),
    )
    .map((parameter) => {
      const schema = (parameter.schema ?? {}) as SchemaLike;

      return {
        name: parameter.name,
        location: parameter.location as TryItField["location"],
        required: parameter.required,
        description: parameter.description,
        type: schema.type ?? null,
        enumValues: schema.enum ?? null,
        defaultValue: schema.default,
      };
    });

  const bodySchema = (operation.input?.schema ?? null) as SchemaLike | null;
  const bodyRequired = requiredPropertyNames(bodySchema);
  const bodyFields: TryItField[] = Object.entries(bodySchema?.properties ?? {}).map(
    ([name, schema]) => ({
      name,
      location: "body" as const,
      required: bodyRequired.has(name),
      description: schema.description ?? null,
      type: schema.type ?? null,
      enumValues: schema.enum ?? null,
      defaultValue: schema.default,
    }),
  );

  return [...parameterFields, ...bodyFields];
}

function buildParamsPreview(fields: TryItField[]): string {
  if (fields.length === 0) {
    return "";
  }

  const sorted = [...fields].sort(
    (left, right) => Number(right.required) - Number(left.required),
  );
  const shown = sorted.slice(0, MAX_PREVIEW_PARAMS);
  const parts = shown.map((field) => `${field.name}${field.required ? "" : "?"}`);

  if (fields.length > shown.length) {
    parts.push("…");
  }

  return `{ ${parts.join(", ")} }`;
}

export function toImportIdentifier(providerPath: string): string {
  const parts = providerPath
    .split("/")
    .flatMap((segment) => segment.split(/[^a-zA-Z0-9]+/))
    .filter(Boolean)
    .map((segment) => segment.toLowerCase());

  const [first = "client", ...rest] = parts;

  return [first, ...rest.map((segment) => segment[0]!.toUpperCase() + segment.slice(1))].join("");
}

export function buildSdkSymbols(entry: RegistryEntry): SdkSymbol[] {
  const importIdentifier = toImportIdentifier(entry.providerPath);

  return entry.operations.map((operation) => {
    const segments = operation.sdkPath.split(".");
    const method = segments[segments.length - 1] ?? operation.sdkPath;
    const namespace = segments.slice(0, -1).join(".");
    const fields = toTryItFields(operation);
    const requiredNames = fields.filter((field) => field.required).map((field) => field.name);
    const args = requiredNames.length > 0 ? `{ /* ${requiredNames.join(", ")} */ }` : fields.length > 0 ? "{}" : "";
    const snippet = `import ${importIdentifier} from "${entry.packageName}";\nawait ${importIdentifier}.${operation.sdkPath}(${args});`;

    return {
      sdkPath: operation.sdkPath,
      namespace,
      method,
      httpMethod: operation.httpMethod,
      httpPath: operation.httpPath,
      summary: operation.summary ?? operation.description,
      paramsPreview: buildParamsPreview(fields),
      fields,
      snippet,
    };
  });
}
