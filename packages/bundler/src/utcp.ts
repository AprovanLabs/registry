import { OpenApiConverter } from "@utcp/http";
import { getDocumentPathItem } from "./openapi-path.js";
import { loadOpenApiDocument } from "./openapi.js";
import { getPrimaryProviderAuthOption, type RegistryProvider } from "./provider.js";
import type { DiscoveredOperation } from "./openapi-discovery.js";
import type { Auth, Tool } from "@utcp/sdk";
import type { OpenAPIV3 } from "openapi-types";

export type LoadedProviderTools = {
  tools: Tool[];
};

const OPERATION_METHODS = ["get", "post", "put", "delete", "patch"] as const;
type OperationMethod = (typeof OPERATION_METHODS)[number];

/**
 * Replaces non-standard JSON Schema types with valid equivalents.
 *
 * Swagger 2.0 uses `type: "file"` for file upload parameters, which is not a
 * valid JSON Schema type and causes UTCP's Zod validator to reject the entire
 * spec conversion. This function replaces "file" with "string" throughout the
 * spec so OpenApiConverter can proceed.
 */
export function sanitizeSchemaTypes(value: unknown): unknown {
  if (!value || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(sanitizeSchemaTypes);
  }

  const obj = value as Record<string, unknown>;
  const result: Record<string, unknown> = {};

  for (const [key, val] of Object.entries(obj)) {
    if (key === "type" && val === "file") {
      result[key] = "string";
    } else {
      result[key] = sanitizeSchemaTypes(val);
    }
  }

  return result;
}

/**
 * Generates a valid `operationId` from an HTTP method and path.
 *
 * Example: GET /auth/token/{grant_type} → "get_auth_token_grant_type"
 */
function generateOperationId(method: string, path: string): string {
  return `${method}_${path}`
    .replace(/\{([^}]+)\}/g, (_, name: string) => name)
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

/**
 * Adds `operationId` to any OpenAPI operation that lacks one.
 *
 * UTCP's OpenApiConverter silently drops operations without `operationId`.
 * This pre-processing step ensures every operation gets a stable, unique ID
 * so all operations are discovered as tools.
 */
export function addMissingOperationIds(spec: OpenAPIV3.Document): OpenAPIV3.Document {
  if (!spec.paths) {
    return spec;
  }

  const usedIds = new Set<string>();

  // First pass: collect all existing operationIds.
  for (const pathItem of Object.values(spec.paths)) {
    if (!pathItem) {
      continue;
    }

    for (const method of OPERATION_METHODS) {
      const op = pathItem[method] as OpenAPIV3.OperationObject | undefined;

      if (op?.operationId) {
        usedIds.add(op.operationId);
      }
    }
  }

  // Second pass: generate unique IDs for operations that lack them.
  const newPaths: OpenAPIV3.PathsObject = {};

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    if (!pathItem) {
      newPaths[path] = pathItem;
      continue;
    }

    const newPathItem = { ...pathItem };

    for (const method of OPERATION_METHODS) {
      const op = pathItem[method] as OpenAPIV3.OperationObject | undefined;

      if (!op || op.operationId) {
        continue;
      }

      let operationId = generateOperationId(method, path);
      let counter = 2;

      while (usedIds.has(operationId)) {
        operationId = `${generateOperationId(method, path)}_${counter}`;
        counter += 1;
      }

      usedIds.add(operationId);
      newPathItem[method as OperationMethod] = { ...(op as OpenAPIV3.OperationObject), operationId };
    }

    newPaths[path] = newPathItem;
  }

  return { ...spec, paths: newPaths };
}

export async function loadProviderTools(
  provider: RegistryProvider,
  openApiDocument?: OpenAPIV3.Document,
): Promise<LoadedProviderTools> {
  const auth = getPrimaryProviderAuthOption(provider.options);

  const rawSpec = openApiDocument ?? (await loadOpenApiDocument(provider));
  const specWithIds = addMissingOperationIds(rawSpec);
  const sanitizedSpec = sanitizeSchemaTypes(specWithIds) as OpenAPIV3.Document;

  const converter = new OpenApiConverter(sanitizedSpec as unknown as Record<string, unknown>, {
    specUrl: provider.url,
    callTemplateName: provider.name,
    ...(auth !== undefined ? { authTools: auth as unknown as Auth } : {}),
  });

  let tools: Tool[];

  try {
    const manual = converter.convert();
    tools = manual.tools;
  } catch (error) {
    process.stderr.write(
      `[loadProviderTools] Failed to convert ${provider.name}: ${error instanceof Error ? error.message : String(error)}\n`,
    );

    return { tools: [] };
  }

  // Replicate UtcpClient.registerManual's tool name prefixing: each tool name
  // must start with "{manualName}." so that stripProviderToolName can strip it.
  const manualName = provider.name.replace(/[^\w]/g, "_");

  return {
    tools: tools.map((tool) => ({
      ...tool,
      name: tool.name.startsWith(`${manualName}.`) ? tool.name : `${manualName}.${tool.name}`,
    })),
  };
}

/**
 * Converts UTCP `Tool[]` to `DiscoveredOperation[]` so that all downstream
 * type-generation functions can accept a single unified type.
 *
 * UTCP tools store the full URL in `tool_call_template.url`. This function
 * resolves that URL back to its OpenAPI path key using the document's path map.
 */
export function toolsToDiscoveredOperations(
  tools: Tool[],
  document: OpenAPIV3.Document,
): DiscoveredOperation[] {
  return tools.flatMap((tool) => {
    const method =
      tool.tool_call_template && typeof tool.tool_call_template.http_method === "string"
        ? tool.tool_call_template.http_method
        : undefined;
    const rawUrl =
      tool.tool_call_template && typeof tool.tool_call_template.url === "string"
        ? tool.tool_call_template.url
        : undefined;

    if (!method || !rawUrl) {
      return [];
    }

    const { pathname } = getDocumentPathItem(document, rawUrl);
    const contentType =
      tool.tool_call_template && typeof tool.tool_call_template.content_type === "string"
        ? tool.tool_call_template.content_type
        : undefined;

    const pathItem = document.paths?.[pathname];
    const operation = pathItem?.[method.toLowerCase() as keyof OpenAPIV3.PathItemObject] as
      | OpenAPIV3.OperationObject
      | undefined;

    return [
      {
        name: tool.name,
        method: method.toUpperCase(),
        path: pathname,
        routeTemplate: rawUrl.replace(/^https?:\/\/[^/]+/u, ""),
        contentType,
        description: operation?.summary ?? operation?.description ?? tool.description,
        tags: operation?.tags ?? (Array.isArray(tool.tags) ? (tool.tags as string[]) : []),
      } satisfies DiscoveredOperation,
    ];
  });
}
