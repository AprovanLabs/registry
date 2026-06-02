/**
 * Provider and operation discovery for @utdk/cli.
 *
 * Scans the utdk package directory for providers and reads their OpenAPI
 * specifications to enumerate operations. Name transformations mirror
 * those in packages/utdk/client.ts so CLI operation names match the
 * accessor paths on the created client.
 *
 * Also builds ToolRuntimeMetadataMap entries for path/query/header/body
 * parameter routing, so the generated client can correctly assemble HTTP
 * requests even when the provider's hand-written metadata.ts is empty.
 */

import { existsSync, readdirSync, readFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import type { ToolRuntimeMetadata, ToolRuntimeMetadataMap } from "utdk/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Compiled to packages/utdk-cli/dist/; navigate to packages/utdk/
export const UTDK_ROOT = resolve(__dirname, "..", "..", "utdk");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AuthConfig = {
  auth_type: "api_key" | "oauth2" | "basic";
  api_key?: string;
  var_name?: string;
  location?: string;
  token_url?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
};

export type ProviderInfo = {
  name: string;
  description?: string;
  auth: AuthConfig[];
};

export type ParameterInfo = {
  name: string;
  in: "query" | "path" | "header" | "cookie";
  required: boolean;
  description?: string;
  type?: string;
};

export type BodyInfo = {
  kind: "none" | "properties" | "raw";
  propertyKeys: string[];
  contentType?: string;
  allowsAdditionalProperties?: boolean;
};

export type OperationInfo = {
  accessPath: string[];
  operationId: string;
  method: string;
  path: string;
  summary?: string;
  description?: string;
  parameters: ParameterInfo[];
  body: BodyInfo;
};

// ---------------------------------------------------------------------------
// Name transformation (mirrors client.ts identically)
// ---------------------------------------------------------------------------

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

export function toCamelCase(name: string): string {
  const cleaned = splitIdentifierWords(name);
  if (cleaned.length === 0) return "_";
  const [first = "_", ...rest] = cleaned;
  return sanitizeIdentifier(
    first.toLowerCase() +
      rest.map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(""),
  );
}

/** Converts an OpenAPI operationId to a client access path (same logic as client.ts). */
function operationIdToBasePath(operationId: string): string[] {
  const segments = operationId.split("/").filter(Boolean);
  const path = (segments.length > 0 ? segments : [operationId]).map(toCamelCase);
  // Collapse duplicate consecutive leaf (e.g. a/a → ['a','call'])
  if (path.length > 1 && path[path.length - 1] === path[path.length - 2]) {
    path[path.length - 1] = "call";
  }
  return path;
}

function hasPathConflict(candidate: string[], used: Set<string>): boolean {
  const key = candidate.join(".");
  for (const u of used) {
    if (u === key || u.startsWith(`${key}.`) || key.startsWith(`${u}.`)) return true;
  }
  return false;
}

function resolveAccessPath(basePath: string[], used: Set<string>): string[] {
  const baseLeaf = basePath[basePath.length - 1] ?? "_";
  let path = [...basePath];
  let suffix = 2;
  while (hasPathConflict(path, used)) {
    path = [...basePath.slice(0, -1), `${baseLeaf}_${suffix}`];
    suffix++;
  }
  used.add(path.join("."));
  return path;
}

// ---------------------------------------------------------------------------
// Provider listing
// ---------------------------------------------------------------------------

/** Returns all provider names found in the utdk package directory. */
export function listProviders(): string[] {
  if (!existsSync(UTDK_ROOT)) return [];
  const entries = readdirSync(UTDK_ROOT, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && existsSync(join(UTDK_ROOT, e.name, "openapi.json")))
    .map((e) => e.name)
    .sort();
}

// ---------------------------------------------------------------------------
// Provider info
// ---------------------------------------------------------------------------

type ProviderPkg = {
  description?: string;
  utdk?: {
    auth?: AuthConfig[];
    openapi?: { title?: string };
  };
};

/** Returns metadata for a single provider, or undefined if not found. */
export function getProviderInfo(providerName: string): ProviderInfo | undefined {
  const providerDir = join(UTDK_ROOT, providerName);
  if (!existsSync(providerDir)) return undefined;

  const pkgPath = join(providerDir, "package.json");
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as ProviderPkg;
    return {
      name: providerName,
      description: pkg.description ?? pkg.utdk?.openapi?.title,
      auth: pkg.utdk?.auth ?? [],
    };
  } catch {
    return { name: providerName, auth: [] };
  }
}

// ---------------------------------------------------------------------------
// OpenAPI parsing helpers
// ---------------------------------------------------------------------------

type OpenApiSchema = {
  type?: string;
  properties?: Record<string, OpenApiSchema>;
  additionalProperties?: boolean | OpenApiSchema;
  $ref?: string;
};

type OpenApiParameter = {
  name: string;
  in?: string;
  required?: boolean;
  description?: string;
  schema?: OpenApiSchema;
  $ref?: string;
};

type OpenApiRequestBody = {
  required?: boolean;
  content?: Record<string, { schema?: OpenApiSchema | { $ref: string } }>;
};

type OpenApiOperation = {
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: Array<OpenApiParameter | { $ref: string }>;
  requestBody?: OpenApiRequestBody | { $ref: string };
  // Swagger 2 body/formData live in parameters; handled implicitly above
};

type OpenApiPathItem = Record<string, OpenApiOperation | undefined>;

type OpenApiDoc = {
  paths?: Record<string, OpenApiPathItem>;
  components?: { schemas?: Record<string, OpenApiSchema> };
  // Swagger 2
  definitions?: Record<string, OpenApiSchema>;
};

const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);
const JSON_CONTENT_TYPES = new Set([
  "application/json",
  "application/json-patch+json",
  "application/merge-patch+json",
  "application/vnd.api+json",
]);

/** Resolve a JSON $ref to a schema object within the document. */
function resolveRef(doc: OpenApiDoc, ref: string): OpenApiSchema | undefined {
  if (!ref.startsWith("#/")) return undefined;
  const parts = ref.slice(2).split("/");
  let current: unknown = doc;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part.replace(/~1/g, "/").replace(/~0/g, "~")];
  }
  return current as OpenApiSchema | undefined;
}

function resolveSchemaRef(doc: OpenApiDoc, schema: OpenApiSchema): OpenApiSchema {
  if (schema.$ref) {
    return resolveRef(doc, schema.$ref) ?? schema;
  }
  return schema;
}

/** Resolve a $ref parameter to a concrete OpenApiParameter, or return the input if already concrete. */
function resolveParameter(
  doc: OpenApiDoc,
  param: OpenApiParameter | { $ref: string },
): OpenApiParameter | undefined {
  if (!("name" in param)) {
    // It's a $ref
    const resolved = resolveRef(doc, (param as { $ref: string }).$ref);
    if (resolved && "name" in (resolved as object)) {
      return resolved as unknown as OpenApiParameter;
    }
    return undefined;
  }
  return param;
}

/** Extract BodyInfo from an OpenAPI 3.x requestBody or Swagger 2 body param. */
function extractBodyInfo(
  doc: OpenApiDoc,
  operation: OpenApiOperation,
): BodyInfo {
  // Check requestBody (OpenAPI 3.x)
  if (operation.requestBody) {
    let rb = operation.requestBody as OpenApiRequestBody | { $ref: string };
    if ("$ref" in rb) {
      const resolved = resolveRef(doc, rb.$ref);
      if (resolved) rb = resolved as unknown as OpenApiRequestBody;
      else return { kind: "none", propertyKeys: [] };
    }
    const content = (rb as OpenApiRequestBody).content;
    if (!content) return { kind: "raw", propertyKeys: [] };

    // Prefer JSON content types
    const jsonEntry = Object.entries(content).find(([ct]) =>
      JSON_CONTENT_TYPES.has(ct) || ct.includes("json"),
    );
    const [contentType, mediaType] = jsonEntry ?? Object.entries(content)[0] ?? [];
    if (!contentType || !mediaType) return { kind: "none", propertyKeys: [] };

    const rawSchema = mediaType.schema;
    if (!rawSchema) return { kind: "raw", propertyKeys: [], contentType };

    const schema = resolveSchemaRef(doc, rawSchema as OpenApiSchema);
    if (schema.type === "object" || schema.properties) {
      const keys = Object.keys(schema.properties ?? {});
      const allowsAdditional =
        schema.additionalProperties === true ||
        (typeof schema.additionalProperties === "object" && schema.additionalProperties !== null);
      return {
        kind: "properties",
        propertyKeys: keys,
        contentType,
        allowsAdditionalProperties: allowsAdditional || undefined,
      };
    }
    return { kind: "raw", propertyKeys: [], contentType };
  }

  // Swagger 2: check for body or formData parameters
  const params = (operation.parameters ?? []) as Array<OpenApiParameter | { $ref: string }>;
  const bodyParam = params.find(
    (p): p is OpenApiParameter =>
      "name" in p && ((p as OpenApiParameter).in === "body" || (p as OpenApiParameter).in === "formData"),
  );
  if (!bodyParam) return { kind: "none", propertyKeys: [] };

  const schema = bodyParam.schema ? resolveSchemaRef(doc, bodyParam.schema) : undefined;
  if (!schema) return { kind: "raw", propertyKeys: [], contentType: "application/json" };

  if (schema.type === "object" || schema.properties) {
    const keys = Object.keys(schema.properties ?? {});
    return { kind: "properties", propertyKeys: keys, contentType: "application/json" };
  }
  return { kind: "raw", propertyKeys: [], contentType: "application/json" };
}

// ---------------------------------------------------------------------------
// Operation listing
// ---------------------------------------------------------------------------

/** Parses the OpenAPI spec for a provider and returns all operations with their metadata. */
export function listOperations(providerName: string): OperationInfo[] {
  const openApiPath = join(UTDK_ROOT, providerName, "openapi.json");
  if (!existsSync(openApiPath)) return [];

  let doc: OpenApiDoc;
  try {
    doc = JSON.parse(readFileSync(openApiPath, "utf-8")) as OpenApiDoc;
  } catch {
    return [];
  }

  const operations: OperationInfo[] = [];
  const usedPaths = new Set<string>();

  for (const [apiPath, pathItem] of Object.entries(doc.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(method) || !operation) continue;

      const operationId =
        operation.operationId ??
        `${method}${apiPath.replace(/[^a-zA-Z0-9]/g, "_")}`;

      const basePath = operationIdToBasePath(operationId);
      const accessPath = resolveAccessPath(basePath, usedPaths);

      // Merge path-item-level params (shared across all methods) with operation params.
      // Operation params override path-item params with the same name.
      const pathItemParams = (
        (pathItem as Record<string, unknown>)["parameters"] as Array<
          OpenApiParameter | { $ref: string }
        > | undefined
      ) ?? [];

      const rawParams = [
        ...pathItemParams,
        ...(operation.parameters ?? []),
      ] as Array<OpenApiParameter | { $ref: string }>;

      // Deduplicate: operation-level params override path-level params of the same name.
      const seen = new Set<string>();
      const dedupedParams: Array<OpenApiParameter | { $ref: string }> = [];
      // Process operation params first (higher priority), then path params.
      const operationParams = (operation.parameters ?? []) as Array<
        OpenApiParameter | { $ref: string }
      >;
      for (const p of [...operationParams, ...pathItemParams]) {
        const resolved = resolveParameter(doc, p);
        if (!resolved) continue;
        if (!seen.has(resolved.name)) {
          seen.add(resolved.name);
          dedupedParams.push(resolved);
        }
      }

      const parameters: ParameterInfo[] = dedupedParams
        .map((p) => resolveParameter(doc, p))
        .filter(
          (p): p is OpenApiParameter =>
            p !== undefined && p.in !== "body" && p.in !== "formData",
        )
        .map((p) => ({
          name: p.name,
          in: (p.in as ParameterInfo["in"]) ?? "query",
          required: p.required ?? false,
          description: p.description,
          type: p.schema?.type,
        }));

      void rawParams; // used above via pathItemParams/operationParams

      const body = extractBodyInfo(doc, operation);

      operations.push({
        accessPath,
        operationId,
        method: method.toUpperCase(),
        path: apiPath,
        summary: operation.summary,
        description: operation.description,
        parameters,
        body,
      });
    }
  }

  return operations;
}

/** Returns the OperationInfo for a specific access-path string like "users.getByUsername". */
export function findOperation(
  providerName: string,
  operationPath: string,
): OperationInfo | undefined {
  const ops = listOperations(providerName);
  return ops.find(
    (op) =>
      op.accessPath.join(".") === operationPath ||
      op.accessPath.join(".").toLowerCase() === operationPath.toLowerCase() ||
      op.operationId === operationPath,
  );
}

// ---------------------------------------------------------------------------
// Tool metadata builder
// ---------------------------------------------------------------------------

/**
 * Build a ToolRuntimeMetadataMap from the provider's OpenAPI spec.
 *
 * The map keys equal the bare operationId (which is what OpenApiConverter
 * uses as tool.name).  Providing this map to createClient() gives the
 * request assembler correct path/query/header/body routing without
 * relying on the provider's (often empty) hand-written metadata.ts.
 */
export function buildToolMetadata(ops: OperationInfo[]): ToolRuntimeMetadataMap {
  const map: ToolRuntimeMetadataMap = {};

  for (const op of ops) {
    // tool.name from OpenApiConverter equals the bare operationId (no provider prefix).
    const toolName = op.operationId;

    const pathKeys = op.parameters
      .filter((p) => p.in === "path")
      .map((p) => p.name);
    const queryKeys = op.parameters
      .filter((p) => p.in === "query")
      .map((p) => p.name);
    const headerKeys = op.parameters
      .filter((p) => p.in === "header")
      .map((p) => p.name);

    const meta: ToolRuntimeMetadata = {
      accessPath: op.accessPath,
      bodyKind: op.body.kind,
      bodyPropertyKeys: op.body.propertyKeys,
      ...(op.body.allowsAdditionalProperties
        ? { bodyAllowsAdditionalProperties: true }
        : {}),
      ...(op.body.contentType ? { contentType: op.body.contentType } : {}),
      headerParameterKeys: headerKeys,
      method: op.method,
      routeTemplate: op.path,
      pathConflictKeys: [],
      pathParameterKeys: pathKeys,
      queryConflictKeys: [],
      queryParameterKeys: queryKeys,
    };

    map[toolName] = meta;
  }

  return map;
}
