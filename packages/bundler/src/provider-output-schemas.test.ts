/**
 * provider-output-schemas / "Error bodies eliminated"
 *
 * After regeneration, no generated operation should declare a return type
 * sourced from a non-2xx response body.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  applyProviderOpenApiOptions,
  buildPublicTypeMap,
  extractResponse,
} from "./openapi.js";
import { resolveRepoPath, loadRegistryProviders, resolveProvider } from "./provider.js";
import { createProviderSchemaTypes, createSchemaRenderContext } from "./render.js";
import { schemaToTypeScriptType } from "./schema.js";
import { loadProviderTools, normalizeOpenApiDocument } from "./utcp.js";
import type { Tool } from "@utcp/sdk";
import type { OpenAPIV3 } from "openapi-types";

const UTDK_ROOT = resolveRepoPath("packages", "utdk");
const NON_PROVIDER_DIRS = new Set(["dist", "node_modules", "common", "llm", "sql", ".turbo", "fn"]);
const NON_PROVIDER_SUBDIRS = new Set(["dist", "node_modules", "types", "__tests__"]);

function providersOnDisk(): string[] {
  const found: string[] = [];

  const walk = (relative: string): void => {
    const absolute = path.join(UTDK_ROOT, relative);
    if (existsSync(path.join(absolute, "index.ts"))) {
      found.push(relative);
    }
    for (const entry of readdirSync(absolute, { withFileTypes: true })) {
      if (!entry.isDirectory() || NON_PROVIDER_SUBDIRS.has(entry.name)) continue;
      walk(path.join(relative, entry.name));
    }
  };

  for (const entry of readdirSync(UTDK_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || NON_PROVIDER_DIRS.has(entry.name)) continue;
    walk(entry.name);
  }

  return found;
}

function isReferenceObject(value: unknown): value is OpenAPIV3.ReferenceObject {
  return Boolean(value && typeof value === "object" && "$ref" in value);
}

function getRefTarget(document: OpenAPIV3.Document, ref: string): unknown {
  if (!ref.startsWith("#/")) return undefined;
  return ref
    .slice(2)
    .split("/")
    .reduce<unknown>((current, part) => {
      if (!current || typeof current !== "object") return undefined;
      return (current as Record<string, unknown>)[part.replace(/~1/g, "/").replace(/~0/g, "~")];
    }, document);
}

function resolveResponseObject(
  document: OpenAPIV3.Document,
  responseValue: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject,
): OpenAPIV3.ResponseObject | undefined {
  if (isReferenceObject(responseValue)) {
    return getRefTarget(document, responseValue.$ref) as OpenAPIV3.ResponseObject | undefined;
  }
  return responseValue;
}

function pickContentSchema(
  response: OpenAPIV3.ResponseObject,
): OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined {
  if (!response.content) return undefined;
  const contentEntry =
    response.content["application/json"] ??
    Object.entries(response.content).find(([contentType]) => contentType.includes("json"))?.[1] ??
    Object.values(response.content)[0];
  return contentEntry?.schema;
}

function getOperation(document: OpenAPIV3.Document, tool: Tool): OpenAPIV3.OperationObject | undefined {
  const method =
    tool.tool_call_template && typeof tool.tool_call_template.http_method === "string"
      ? tool.tool_call_template.http_method.toLowerCase()
      : undefined;
  const rawUrl =
    tool.tool_call_template && typeof tool.tool_call_template.url === "string" ? tool.tool_call_template.url : undefined;

  if (!method || !rawUrl) return undefined;

  const pathname = rawUrl.replace(/^https?:\/\/[^/]+/u, "");
  const pathItem = document.paths?.[pathname];
  if (!pathItem || !(method in pathItem)) return undefined;
  return pathItem[method as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject | undefined;
}

function non2xxResponseTypes(document: OpenAPIV3.Document, operation: OpenAPIV3.OperationObject): string[] {
  const types: string[] = [];
  for (const [statusCode, responseValue] of Object.entries(operation.responses ?? {})) {
    if (/^2\d\d$/.test(statusCode)) continue;
    const response = resolveResponseObject(document, responseValue);
    if (!response) continue;
    const schema = pickContentSchema(response);
    if (!schema) continue;
    types.push(schemaToTypeScriptType(schema));
  }
  return types;
}

function loadShippedOpenApi(providerName: string): OpenAPIV3.Document | undefined {
  const openapiPath = path.join(UTDK_ROOT, providerName, "openapi.json");
  if (!existsSync(openapiPath)) return undefined;
  return JSON.parse(readFileSync(openapiPath, "utf8")) as OpenAPIV3.Document;
}

async function checkProvider(
  registryProviders: Awaited<ReturnType<typeof loadRegistryProviders>>,
  providerName: string,
): Promise<string[]> {
  const violations: string[] = [];
  const shipped = loadShippedOpenApi(providerName);
  if (!shipped) return violations;

  const provider = resolveProvider(registryProviders, providerName);
  const openApiDocument = normalizeOpenApiDocument(applyProviderOpenApiOptions(shipped, provider));
  const { tools } = await loadProviderTools(provider, openApiDocument);
  const schemaTypes = createProviderSchemaTypes(openApiDocument);
  const context = createSchemaRenderContext(schemaTypes);
  const typeMap = buildPublicTypeMap(openApiDocument, tools, context);

  for (const tool of tools) {
    const operation = getOperation(openApiDocument, tool);
    if (!operation) continue;

    const extracted = extractResponse(openApiDocument, operation, { dereference: true, context });
    const outputType = typeMap.get(tool.name)?.outputType;
    if (!outputType) continue;

    const errorTypes = non2xxResponseTypes(openApiDocument, operation);
    if (errorTypes.length === 0) continue;

    const substantiveErrorTypes = errorTypes.filter((type) => type !== "unknown");

    if (extracted.kind === "no-content") {
      if (
        outputType !== "undefined" &&
        outputType !== "unknown" &&
        substantiveErrorTypes.includes(outputType)
      ) {
        violations.push(`${provider.name}/${tool.name}: no-content op typed as error body`);
      }
      continue;
    }

    if (extracted.kind === "schema") {
      const successType = schemaToTypeScriptType(extracted.schema, context);
      if (outputType !== successType && substantiveErrorTypes.includes(outputType)) {
        violations.push(`${provider.name}/${tool.name}: return type matches non-2xx, not 2xx success`);
      }
      continue;
    }

    if (extracted.kind === "streaming") {
      if (
        outputType !== "ReadableStream<Uint8Array>" &&
        substantiveErrorTypes.includes(outputType)
      ) {
        violations.push(`${provider.name}/${tool.name}: streaming op typed as error body`);
      }
    }
  }

  return violations;
}

describe("provider-output-schemas", () => {
  it("does not declare return types sourced from non-2xx response bodies", async () => {
    const registryProviders = await loadRegistryProviders();
    const onDisk = new Set(providersOnDisk());
    const violations: string[] = [];

    for (const registryProvider of registryProviders) {
      if (!onDisk.has(registryProvider.name)) continue;
      violations.push(...(await checkProvider(registryProviders, registryProvider.name)));
    }

    expect(violations).toEqual([]);
  }, 600_000);
});
