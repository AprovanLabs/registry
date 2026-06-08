import { describe, expect, it } from "vitest";
import { discoverOperationsFromOpenApi } from "./openapi-discovery.js";
import type { OpenAPIV3 } from "openapi-types";

describe("discoverOperationsFromOpenApi", () => {
  it("enumerates all operations in a simple document", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/users": {
          get: { operationId: "listUsers", responses: { "200": { description: "ok" } } },
          post: { operationId: "createUser", responses: { "200": { description: "ok" } } },
        },
        "/users/{id}": {
          get: { operationId: "getUser", responses: { "200": { description: "ok" } } },
          delete: { operationId: "deleteUser", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops).toHaveLength(4);
    expect(ops.map((op) => op.name)).toEqual([
      "example.listUsers",
      "example.createUser",
      "example.getUser",
      "example.deleteUser",
    ]);
  });

  it("skips operations without an operationId", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: { operationId: "listItems", responses: { "200": { description: "ok" } } },
          post: { responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops).toHaveLength(1);
    expect(ops[0]?.name).toBe("example.listItems");
  });

  it("uses operationId to build the name with provider prefix", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/widgets": {
          get: { operationId: "widgets_list", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "my.api");

    expect(ops[0]?.name).toBe("my_api.widgets_list");
  });

  it("sanitizes non-word characters in provider name", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/foo": {
          get: { operationId: "getFoo", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "google/books");

    expect(ops[0]?.name).toBe("google_books.getFoo");
  });

  it("sets method to uppercase", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/foo": {
          post: { operationId: "createFoo", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.method).toBe("POST");
  });

  it("sets path to the OpenAPI path key", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/repos/{owner}/{repo}/issues": {
          get: { operationId: "listIssues", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "github");

    expect(ops[0]?.path).toBe("/repos/{owner}/{repo}/issues");
  });

  it("includes server base path in routeTemplate", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "OpenAI", version: "1.0.0" },
      servers: [{ url: "https://api.openai.com/v1" }],
      paths: {
        "/responses": {
          post: { operationId: "createResponse", responses: { "200": { description: "ok" } } },
        },
        "/models": {
          get: { operationId: "listModels", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "openai");

    expect(ops[0]?.routeTemplate).toBe("/v1/responses");
    expect(ops[1]?.routeTemplate).toBe("/v1/models");
  });

  it("uses path as routeTemplate when there is no server base path", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      servers: [{ url: "https://api.example.com" }],
      paths: {
        "/items": {
          get: { operationId: "listItems", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.routeTemplate).toBe("/items");
  });

  it("uses path as routeTemplate when no servers are defined", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/things": {
          get: { operationId: "listThings", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.routeTemplate).toBe("/things");
  });

  it("prefers application/json content type from requestBody", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/upload": {
          post: {
            operationId: "uploadFile",
            requestBody: {
              content: {
                "application/octet-stream": {},
                "application/json": {},
              },
            },
            responses: { "200": { description: "ok" } },
          },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.contentType).toBe("application/json");
  });

  it("falls back to first content type when no json type is present", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/upload": {
          put: {
            operationId: "uploadImage",
            requestBody: {
              content: {
                "image/jpeg": {},
              },
            },
            responses: { "200": { description: "ok" } },
          },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.contentType).toBe("image/jpeg");
  });

  it("leaves contentType undefined when there is no requestBody", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: { operationId: "listItems", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.contentType).toBeUndefined();
  });

  it("reads description from operation.summary", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: {
            operationId: "listItems",
            summary: "List all items",
            description: "Returns a paginated list of items",
            responses: { "200": { description: "ok" } },
          },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.description).toBe("List all items");
  });

  it("falls back to operation.description when summary is absent", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: {
            operationId: "listItems",
            description: "Returns a paginated list of items",
            responses: { "200": { description: "ok" } },
          },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.description).toBe("Returns a paginated list of items");
  });

  it("leaves description undefined when neither summary nor description is present", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: { operationId: "listItems", responses: { "200": { description: "ok" } } },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.description).toBeUndefined();
  });

  it("populates tags from the operation", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/items": {
          get: {
            operationId: "listItems",
            tags: ["Items", "Read"],
            responses: { "200": { description: "ok" } },
          },
        },
      },
    };

    const ops = discoverOperationsFromOpenApi(document, "example");

    expect(ops[0]?.tags).toEqual(["Items", "Read"]);
  });

  it("returns empty array for documents without paths", () => {
    const document: OpenAPIV3.Document = {
      openapi: "3.0.0",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
    };

    expect(discoverOperationsFromOpenApi(document, "example")).toHaveLength(0);
  });

  it("handles Swagger 2.0 basePath for routeTemplate", () => {
    const document = {
      openapi: "3.0.0",
      basePath: "/v2",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/pets": {
          get: { operationId: "listPets", responses: { "200": { description: "ok" } } },
        },
      },
    } as unknown as OpenAPIV3.Document;

    const ops = discoverOperationsFromOpenApi(document, "petstore");

    expect(ops[0]?.routeTemplate).toBe("/v2/pets");
  });
});
