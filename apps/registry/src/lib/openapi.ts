import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

// ---------------------------------------------------------------------------
// Raw OpenAPI document shape (minimal, just what we need)
// ---------------------------------------------------------------------------

type RawOpenApiDoc = {
  info?: { title?: string; version?: string; description?: string };
  servers?: Array<{ url?: string }>;
  paths?: Record<string, unknown>;
  components?: {
    parameters?: Record<string, unknown>;
    schemas?: Record<string, unknown>;
    requestBodies?: Record<string, unknown>;
  };
};

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type OpenApiSchemaType = {
  type?: string;
  format?: string;
  enum?: unknown[];
  default?: unknown;
  description?: string;
  items?: OpenApiSchemaType;
  properties?: Record<string, OpenApiSchemaType>;
  required?: string[];
  nullable?: boolean;
};

export type OperationParameter = {
  name: string;
  location: "query" | "path" | "header" | "cookie";
  required: boolean;
  description: string | null;
  schema: OpenApiSchemaType;
};

export type RequestBodyField = {
  name: string;
  required: boolean;
  description: string | null;
  schema: OpenApiSchemaType;
};

export type OperationResponse = {
  description: string | null;
  schema: OpenApiSchemaType | null;
};

export type OperationInfo = {
  /** Canonical UTDK method path (e.g. "orgs.listForUser") — use this for gateway calls and SDK references */
  sdkPath: string;
  /** Raw OpenAPI operationId (e.g. "orgs/list-for-user") — internal reference only */
  operationId: string;
  summary: string | null;
  description: string | null;
  httpMethod: string;
  httpPath: string;
  parameters: OperationParameter[];
  requestBodyFields: RequestBodyField[];
  outputs: Record<string, OperationResponse>;
  /** True when the upstream OpenAPI operation omits a `responses` object. */
  responseUnknown: boolean;
  tags: string[];
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a segment (e.g. "list-for-user" or "listWebhooks") to camelCase
 * (e.g. "listForUser" / "listWebhooks"). Must match @utdk client's toCamelCase,
 * including splitting existing camelCase / PascalCase identifiers.
 */
function segmentToCamelCase(segment: string): string {
  const words = segment
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "_";

  const [first = "_", ...rest] = words;
  return (
    first.toLowerCase() +
    rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")
  );
}

/**
 * Converts an OpenAPI operationId (e.g. "orgs/list-for-user") to the canonical
 * UTDK SDK path (e.g. "orgs.listForUser").
 */
export function operationIdToSdkPath(operationId: string): string {
  return operationId
    .split("/")
    .filter(Boolean)
    .map(segmentToCamelCase)
    .join(".");
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

const HTTP_METHODS = ["get", "post", "put", "patch", "delete", "head", "options"] as const;

/**
 * The provider's API root — `servers[0].url` from its OpenAPI document, with
 * any trailing slash removed. Null when the spec is missing or declares no
 * absolute server. Used to dispatch credential-free calls straight from the
 * browser instead of through the gateway.
 */
export async function loadProviderApiBaseUrl(
  providerPath: string,
): Promise<string | null> {
  const workspaceRoot = findWorkspaceRoot(process.cwd());
  const specPath = path.join(
    workspaceRoot,
    "packages",
    "utdk",
    providerPath,
    "openapi.json",
  );

  let doc: RawOpenApiDoc;
  try {
    doc = JSON.parse(await readFile(specPath, "utf8")) as RawOpenApiDoc;
  } catch {
    return null;
  }

  const url = doc.servers?.[0]?.url;
  if (typeof url !== "string" || !/^https?:\/\//u.test(url)) return null;
  return url.replace(/\/$/, "");
}

export async function loadProviderOperations(providerPath: string): Promise<OperationInfo[]> {
  const workspaceRoot = findWorkspaceRoot(process.cwd());
  const packagesRoot = path.join(workspaceRoot, "packages", "utdk");
  const specPath = path.join(packagesRoot, providerPath, "openapi.json");

  let doc: RawOpenApiDoc | null = null;

  try {
    const content = await readFile(specPath, "utf8");
    doc = JSON.parse(content) as RawOpenApiDoc;
  } catch {
    return [];
  }

  if (!doc?.paths) {
    return [];
  }

  const operations: OperationInfo[] = [];

  for (const [httpPath, rawPathItem] of Object.entries(doc.paths)) {
    const pathItem = rawPathItem as Record<string, unknown>;
    // Path-level parameters (shared across methods)
    const pathLevelParams = Array.isArray(pathItem.parameters) ? pathItem.parameters : [];

    for (const method of HTTP_METHODS) {
      const rawOp = pathItem[method];
      if (!rawOp || typeof rawOp !== "object") continue;

      const op = rawOp as Record<string, unknown>;
      const operationId = typeof op.operationId === "string" ? op.operationId : null;
      if (!operationId) continue;

      // Merge path-level + operation-level parameters (op-level takes precedence)
      const rawParams = [
        ...pathLevelParams,
        ...(Array.isArray(op.parameters) ? op.parameters : []),
      ];

      const seenParams = new Set<string>();
      const parameters: OperationParameter[] = [];

      for (const rawParam of rawParams) {
        const resolved = resolveRef(rawParam, doc);
        if (!resolved || typeof resolved !== "object") continue;

        const p = resolved as Record<string, unknown>;
        if (typeof p.name !== "string" || typeof p.in !== "string") continue;

        // De-duplicate: operation-level overrides path-level
        const key = `${p.in}:${p.name}`;
        if (seenParams.has(key)) continue;
        seenParams.add(key);

        parameters.push({
          name: p.name,
          location: p.in as OperationParameter["location"],
          required: typeof p.required === "boolean" ? p.required : p.in === "path",
          description: typeof p.description === "string" ? p.description : null,
          schema: resolveSchemaDeep(p.schema, doc),
        });
      }

      // Request body fields
      const requestBodyFields: RequestBodyField[] = [];

      if (op.requestBody) {
        const rb = resolveRef(op.requestBody, doc);
        if (rb && typeof rb === "object") {
          const rbObj = rb as Record<string, unknown>;
          const content = rbObj.content as Record<string, unknown> | undefined;

          if (content) {
            const jsonContent =
              (content["application/json"] as Record<string, unknown> | undefined) ??
              (content["application/x-www-form-urlencoded"] as Record<string, unknown> | undefined);

            if (jsonContent?.schema) {
              const bodySchema = resolveSchemaDeep(jsonContent.schema, doc);
              if (bodySchema.properties) {
                const requiredFields = new Set<string>(
                  Array.isArray(bodySchema.required) ? bodySchema.required : [],
                );
                for (const [propName, propSchema] of Object.entries(bodySchema.properties)) {
                  requestBodyFields.push({
                    name: propName,
                    required: requiredFields.has(propName),
                    description: propSchema.description ?? null,
                    schema: propSchema,
                  });
                }
              }
            }
          }
        }
      }

      const responseUnknown =
        !op.responses ||
        typeof op.responses !== "object" ||
        Object.keys(op.responses).length === 0;
      const outputs: Record<string, OperationResponse> = {};

      if (!responseUnknown) {
        for (const [statusCode, responseObj] of Object.entries(
          op.responses as Record<string, unknown>,
        )) {
          if (!responseObj || typeof responseObj !== "object") continue;

          const response = resolveRef(responseObj, doc) as Record<string, unknown>;
          const content = response.content as Record<string, unknown> | undefined;
          const jsonContent =
            (content?.["application/json"] as Record<string, unknown> | undefined) ??
            (content?.["application/x-www-form-urlencoded"] as
              | Record<string, unknown>
              | undefined);
          const schema = jsonContent?.schema
            ? resolveSchemaDeep(jsonContent.schema, doc)
            : null;

          outputs[statusCode] = {
            description:
              typeof response.description === "string" ? response.description : null,
            schema,
          };
        }
      }

      operations.push({
        sdkPath: operationIdToSdkPath(operationId),
        operationId,
        summary: typeof op.summary === "string" ? op.summary : null,
        description: typeof op.description === "string" ? op.description : null,
        httpMethod: method.toUpperCase(),
        httpPath,
        parameters,
        requestBodyFields,
        outputs,
        responseUnknown,
        tags: Array.isArray(op.tags)
          ? op.tags.filter((t): t is string => typeof t === "string")
          : [],
      });
    }
  }

  return operations;
}

// ---------------------------------------------------------------------------
// $ref resolution helpers
// ---------------------------------------------------------------------------

function resolveRef(value: unknown, doc: RawOpenApiDoc): unknown {
  if (value && typeof value === "object" && "$ref" in value) {
    const ref = (value as { $ref: string }).$ref;
    return resolveRefPath(ref, doc);
  }
  return value;
}

function resolveRefPath(ref: string, doc: RawOpenApiDoc): unknown {
  if (!ref.startsWith("#/")) return null;

  const parts = ref.slice(2).split("/");
  let current: unknown = doc;

  for (const part of parts) {
    if (current == null || typeof current !== "object") return null;
    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

function resolveSchemaDeep(
  schema: unknown,
  doc: RawOpenApiDoc,
  depth = 0,
): OpenApiSchemaType {
  // Guard against circular $ref cycles in large specs
  if (depth > 5) return {};

  const resolved = resolveRef(schema, doc);
  if (!resolved || typeof resolved !== "object") return {};

  const s = { ...(resolved as OpenApiSchemaType) };

  // Resolve nested properties (one level deeper)
  if (s.properties) {
    const resolvedProps: Record<string, OpenApiSchemaType> = {};
    for (const [k, v] of Object.entries(s.properties)) {
      resolvedProps[k] = resolveSchemaDeep(v, doc, depth + 1);
    }
    s.properties = resolvedProps;
  }

  if (s.items) {
    s.items = resolveSchemaDeep(s.items, doc, depth + 1);
  }

  return s;
}

// ---------------------------------------------------------------------------
// Workspace root detection (mirrors registry.ts)
// ---------------------------------------------------------------------------

function findWorkspaceRoot(startDirectory: string): string {
  let current = path.resolve(startDirectory);

  while (true) {
    if (existsSync(path.join(current, "packages", "utdk"))) {
      return current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error("Could not locate workspace root containing packages/utdk.");
    }
    current = parent;
  }
}

