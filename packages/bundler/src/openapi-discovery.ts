import type { OpenAPIV3 } from "openapi-types";

type HttpMethod = "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";

const HTTP_METHODS: HttpMethod[] = ["delete", "get", "head", "options", "patch", "post", "put", "trace"];

/**
 * A lightweight representation of an API operation discovered directly from
 * an OpenAPI document.  This is the common currency between operation discovery
 * (UTCP or direct parser) and the client-tool builder in `client-api.ts`.
 */
export type DiscoveredOperation = {
  /** Stable name derived from operationId or method+path. */
  name: string;
  /** HTTP method (uppercase). */
  method: string;
  /** Route path template, e.g. `/repos/{owner}/{repo}/issues`. */
  path: string;
  /** Preferred request content-type, if declared. */
  contentType?: string;
  /** Human-readable operation summary or description. */
  description: string;
  /** OpenAPI tags for grouping. */
  tags: string[];
};

function getPreferredContentType(
  requestBody: OpenAPIV3.RequestBodyObject | OpenAPIV3.ReferenceObject | undefined,
): string | undefined {
  if (!requestBody || "$ref" in requestBody) {
    return undefined;
  }

  const content = requestBody.content;

  if (!content) {
    return undefined;
  }

  if (content["application/json"]) {
    return "application/json";
  }

  const jsonLike = Object.keys(content).find((ct) => ct.includes("json"));

  if (jsonLike) {
    return jsonLike;
  }

  return Object.keys(content)[0];
}

/**
 * Walk the `paths` object of an OpenAPI 3.x document and return one
 * `DiscoveredOperation` for every method+path pair.  This replaces the
 * UTCP-based tool discovery for providers where UTCP fails.
 *
 * The function is intentionally minimal — it only extracts what `buildClientToolMap`
 * needs to look up the full operation in the OpenAPI document:
 *   • name (for tool naming / access-path derivation)
 *   • method + path (for parameter & schema resolution)
 *   • content-type (for request serialisation)
 *   • description & tags (for docs / JSDoc generation)
 *
 * All heavy lifting (parameter classification, schema resolution, type
 * generation) stays in `client-api.ts` where it belongs.
 */
export function discoverOperationsFromOpenApi(document: OpenAPIV3.Document): DiscoveredOperation[] {
  const operations: DiscoveredOperation[] = [];

  for (const [path, pathItem] of Object.entries(document.paths ?? {}).sort(([a], [b]) => a.localeCompare(b))) {
    if (!pathItem) {
      continue;
    }

    for (const method of HTTP_METHODS) {
      const operation = (pathItem as Record<string, unknown>)[method] as OpenAPIV3.OperationObject | undefined;

      if (!operation || typeof operation !== "object") {
        continue;
      }

      const operationId = operation.operationId;
      const name = operationId ?? `${method.toUpperCase()} ${path}`;
      const description = operation.summary ?? operation.description ?? "";
      const tags = Array.isArray(operation.tags) ? operation.tags : [];
      const contentType = getPreferredContentType(operation.requestBody as OpenAPIV3.RequestBodyObject | undefined);

      operations.push({
        name,
        method: method.toUpperCase(),
        path,
        contentType,
        description,
        tags,
      });
    }
  }

  return operations;
}
