import { afterEach, describe, expect, it, vi } from "vitest";

import type { Tool } from "@utcp/sdk";
import type { OpenAPIV3 } from "openapi-types";
import type { RegistryProvider } from "./provider.js";
import { applyProviderOpenApiOptions, buildPublicTypeMap, loadOpenApiDocument } from "./openapi.js";

function createTool(name: string, httpMethod: string, url: string): Tool {
  return {
    name,
    description: name,
    tags: [],
    tool_call_template: {
      call_template_type: "http",
      http_method: httpMethod,
      url,
      content_type: "application/json",
    },
    inputs: {
      type: "object",
      properties: {},
    },
    outputs: {
      type: "object",
      properties: {},
    },
  } as unknown as Tool;
}

describe("loadOpenApiDocument", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("parses JSON OpenAPI documents", async () => {
    const provider: RegistryProvider = {
      name: "example-json",
      url: "https://example.com/openapi.json",
      content_type: "application/json",
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ openapi: "3.0.0", info: { title: "JSON API", version: "1.0.0" }, paths: {} }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );

    const document = await loadOpenApiDocument(provider);

    expect(document.info?.title).toBe("JSON API");
  });

  it("parses YAML OpenAPI documents", async () => {
    const provider: RegistryProvider = {
      name: "datadog",
      url: "https://example.com/openapi.yaml",
      content_type: "application/x-yaml",
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          ["openapi: 3.0.0", "info:", "  title: Datadog API", "  version: 1.0.0", "paths: {}"].join("\n"),
          {
            status: 200,
            headers: { "Content-Type": "application/x-yaml" },
          },
        ),
      ),
    );

    const document = await loadOpenApiDocument(provider);

    expect(document.info?.title).toBe("Datadog API");
  });
});

describe("buildPublicTypeMap", () => {
  it("matches operations when the server url contributes a base path", () => {
    const tool = createTool("openai.createResponse", "POST", "https://api.openai.com/v1/responses");
    const openApiDocument = {
      openapi: "3.0.0",
      info: { title: "OpenAI", version: "1.0.0" },
      servers: [{ url: "https://api.openai.com/v1" }],
      paths: {
        "/responses": {
          post: {
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      model: { type: "string" },
                    },
                    required: ["model"],
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                      },
                      required: ["id"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as const;

    const typeMap = buildPublicTypeMap(openApiDocument as never, [tool]);

    expect(typeMap.get(tool.name)?.outputType).toBe("{ id: string }");
  });
});

describe("applyProviderOpenApiOptions", () => {
  it("strips configured operation prefixes from generated docs", () => {
    const provider: RegistryProvider = {
      name: "google/books",
      url: "https://example.com/openapi.json",
      options: {
        operations: {
          stripPrefix: "books.",
        },
      },
    };
    const openApiDocument = {
      openapi: "3.0.0",
      info: { title: "Google Books", version: "1.0.0" },
      paths: {
        "/volumes": {
          get: {
            operationId: "books.volumes.list",
            responses: {
              "200": {
                description: "ok",
              },
            },
          },
        },
      },
    } as OpenAPIV3.Document;

    const normalizedDocument = applyProviderOpenApiOptions(openApiDocument, provider);

    expect(normalizedDocument.paths?.["/volumes"]?.get?.operationId).toBe("volumes.list");
    expect(openApiDocument.paths?.["/volumes"]?.get?.operationId).toBe("books.volumes.list");
  });
});
