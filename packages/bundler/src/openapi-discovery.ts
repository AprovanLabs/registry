import type { OpenAPIV3 } from "openapi-types";

/**
 * A single HTTP operation discovered from an OpenAPI document.
 *
 * This type replaces UTCP's `Tool` as the pointer passed to `buildClientToolMap`.
 * It carries just enough information to locate the operation in the OpenAPI document
 * and derive runtime metadata; all schema resolution still happens from the document.
 */
export type DiscoveredOperation = {
  /** Full tool name including provider prefix, e.g. "provider_name.operationId" */
  name: string;
  /** Uppercase HTTP method, e.g. "GET", "POST" */
  method: string;
  /** OpenAPI path key, e.g. "/repos/{owner}/{repo}/issues" */
  path: string;
  /** Route template for the runtime, e.g. "/v1/repos/{owner}/{repo}/issues" (includes server base path) */
  routeTemplate: string;
  /** Preferred content type for the request body, if any */
  contentType?: string;
  /** Human-readable description from operation.summary or operation.description */
  description?: string;
  /** OpenAPI operation tags */
  tags: string[];
};

const OPERATION_METHODS = ["get", "post", "put", "delete", "patch"] as const;
type OperationMethod = (typeof OPERATION_METHODS)[number];

/**
 * Returns the path component of the first server URL that has a non-root path.
 * Used to compute routeTemplate = serverBasePath + openApiPath.
 *
 * Example: servers[0].url = "https://api.openai.com/v1" → "/v1"
 */
function getServerBasePath(document: OpenAPIV3.Document): string {
  const openApiV2BasePath = (document as { basePath?: unknown }).basePath;

  if (typeof openApiV2BasePath === "string" && openApiV2BasePath !== "/") {
    return openApiV2BasePath.replace(/\/+$/, "");
  }

  for (const server of document.servers ?? []) {
    if (typeof server.url !== "string") {
      continue;
    }

    try {
      const sanitized = server.url.replace(/\{[^}]+\}/gu, "placeholder");
      const pathname = new URL(sanitized, "https://example.invalid").pathname;

      if (pathname && pathname !== "/") {
        return pathname.replace(/\/+$/u, "");
      }
    } catch {
      continue;
    }
  }

  return "";
}

/**
 * Returns the preferred content type for an operation's request body.
 * Prefers application/json, then any JSON-compatible type, then the first available.
 */
function getOperationContentType(operation: OpenAPIV3.OperationObject): string | undefined {
  const rb = operation.requestBody;

  if (!rb || typeof rb !== "object" || "$ref" in rb) {
    return undefined;
  }

  const content = (rb as OpenAPIV3.RequestBodyObject).content;

  if (!content) {
    return undefined;
  }

  const keys = Object.keys(content);

  return (
    keys.find((k) => k === "application/json") ??
    keys.find((k) => k.includes("json")) ??
    keys[0]
  );
}

/**
 * Enumerates all HTTP operations from an OpenAPI 3.x document without using UTCP.
 *
 * The caller is responsible for pre-processing the document with `addMissingOperationIds`
 * before calling this function so that every operation has an `operationId`.
 * Operations without an `operationId` are silently skipped.
 *
 * @param document   - The OpenAPI document to walk.
 * @param providerName - The registry provider name (used to build the `name` prefix).
 */
export function discoverOperationsFromOpenApi(
  document: OpenAPIV3.Document,
  providerName: string,
): DiscoveredOperation[] {
  const manualName = providerName.replace(/[^\w]/gu, "_");
  const serverBasePath = getServerBasePath(document);
  const operations: DiscoveredOperation[] = [];

  for (const [path, pathItem] of Object.entries(document.paths ?? {})) {
    if (!pathItem) {
      continue;
    }

    for (const method of OPERATION_METHODS) {
      const operation = pathItem[method as OperationMethod] as OpenAPIV3.OperationObject | undefined;

      if (!operation) {
        continue;
      }

      const operationId = operation.operationId;

      if (!operationId) {
        continue;
      }

      operations.push({
        name: `${manualName}.${operationId}`,
        method: method.toUpperCase(),
        path,
        routeTemplate: serverBasePath ? `${serverBasePath}${path}` : path,
        contentType: getOperationContentType(operation),
        description: operation.summary ?? operation.description,
        tags: operation.tags ?? [],
      });
    }
  }

  return operations;
}
