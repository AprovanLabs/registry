import type { Tool } from "@utcp/sdk";
import { describe, expect, it } from "vitest";

import type { ClientToolDefinition } from "./client-api.js";
import type { RegistryProvider } from "./provider.js";
import {
  renderNamespaceEntry,
  renderNamespacePackageJson,
  renderProviderMetadata,
  renderProviderTypes,
  renderRootPackageJson,
} from "./render.js";

function createTool(name: string): Tool {
  return {
    name,
    description: `Tool ${name}`,
    tags: [],
    tool_call_template: {
      call_template_type: "http",
      http_method: "GET",
      url: "https://example.com",
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

function createClientToolDefinition(accessPath: string[]): ClientToolDefinition {
  return {
    accessPath,
    hasInput: true,
    hasOptions: false,
    inputType: "{}",
    optionsOptional: true,
    optionsType: "{}",
    runtimeMetadata: {
      accessPath,
      bodyKind: "none",
      bodyPropertyKeys: [],
      httpMethod: "GET",
      pathTemplate: "/",
      headerParameterKeys: [],
      pathConflictKeys: [],
      pathParameterKeys: [],
      queryConflictKeys: [],
      queryParameterKeys: [],
    },
  };
}

describe("renderProviderTypes", () => {
  it("preserves operationId word boundaries in accessor names", () => {
    const rendered = renderProviderTypes(
      { name: "datadog" },
      [createTool("datadog.AddMemberTeam")],
      new Map(),
      new Map([["datadog.AddMemberTeam", createClientToolDefinition(["addMemberTeam"])]]),
    );

    expect(rendered).toContain("addMemberTeam: (input:");
    expect(rendered).not.toContain("addmemberteam: (input:");
    expect(rendered).not.toContain("export namespace datadog");
  });

  it("normalizes mixed naming styles consistently", () => {
    const rendered = renderProviderTypes(
      { name: "example" },
      [createTool("example.api_keys/ListAPIKeys"), createTool("example.events/list-events")],
      new Map(),
      new Map([
        ["example.api_keys/ListAPIKeys", createClientToolDefinition(["apiKeys", "listApiKeys"])],
        ["example.events/list-events", createClientToolDefinition(["events", "listEvents"])],
      ]),
    );

    expect(rendered).toContain("apiKeys: {");
    expect(rendered).toContain("listApiKeys: (input:");
    expect(rendered).toContain("events: {");
    expect(rendered).toContain("listEvents: (input:");
  });

  it("inlines method types and labels the second argument as options", () => {
    const rendered = renderProviderTypes(
      { name: "github" },
      [createTool("github.users/get-by-username")],
      new Map([
        [
          "github.users/get-by-username",
          {
            inputType: "{ username: string }",
            outputType: "{ login: string }",
          },
        ],
      ]),
      new Map([
        [
          "github.users/get-by-username",
          {
            ...createClientToolDefinition(["users", "getByUsername"]),
            hasInput: true,
            hasOptions: true,
            inputType: "{ username: string }",
            optionsType: '{ params: { username: string }; headers?: { "x-trace-id"?: string } }',
            optionsOptional: false,
          },
        ],
      ]),
    );

    expect(rendered).toContain(
      'getByUsername: (input: { username: string }, options: { params: { username: string }; headers?: { "x-trace-id"?: string } }) => Promise<{ login: string }>',
    );
    expect(rendered).not.toContain("RequestOverrides");
    expect(rendered).not.toContain("export namespace github");
    expect(rendered).not.toContain("github.users_get_by_username");
  });

  it("omits the input argument for tools with no input or options", () => {
    const rendered = renderProviderTypes(
      { name: "example" },
      [createTool("example.get-queue")],
      new Map(),
      new Map([
        [
          "example.get-queue",
          {
            ...createClientToolDefinition(["getQueue"]),
            hasInput: false,
          },
        ],
      ]),
    );

    expect(rendered).toContain("getQueue: () => Promise<{ [key: string]: unknown }>;");
    expect(rendered).toContain("Access as: example.getQueue()");
    expect(rendered).not.toContain("getQueue: (input:");
  });

  it("uses options as the only argument for input-less tools with overrides", () => {
    const rendered = renderProviderTypes(
      { name: "example" },
      [createTool("example.inspect")],
      new Map(),
      new Map([
        [
          "example.inspect",
          {
            ...createClientToolDefinition(["inspect"]),
            hasInput: false,
            hasOptions: true,
            optionsType: '{ headers: { "x-api-key": string } }',
            optionsOptional: false,
          },
        ],
      ]),
    );

    expect(rendered).toContain('inspect: (options: { headers: { "x-api-key": string } }) => Promise<{ [key: string]: unknown }>;');
    expect(rendered).toContain("Access as: example.inspect(options)");
    expect(rendered).not.toContain("inspect: (input:");
  });
});

describe("nested provider rendering", () => {
  it("adds namespace and leaf exports to the root package", () => {
    const rendered = renderRootPackageJson([
      { name: "github", url: "https://example.com/github.json" },
      { name: "google.books", url: "https://example.com/google-books.json" },
    ] satisfies RegistryProvider[]);

    expect(rendered).toContain('"./github"');
    expect(rendered).toContain('"./google"');
    expect(rendered).toContain('"./google/books"');
  });

  it("renders namespace entries for nested providers", () => {
    const rendered = renderNamespaceEntry(
      ["google"],
      [
        { name: "google.books", url: "https://example.com/google-books.json" },
        { name: "google.calendar", url: "https://example.com/google-calendar.json" },
      ] satisfies RegistryProvider[],
    );

    expect(rendered).toContain('export * from "./books/index.js";');
    expect(rendered).toContain("export { default as books }");
    expect(rendered).toContain('export * from "./calendar/index.js";');
  });

  it("uses the namespace package name for nested providers", () => {
    const rendered = renderNamespacePackageJson(
      "google.books",
      [{ name: "google.books", url: "https://example.com/google-books.json" }] satisfies RegistryProvider[],
      undefined,
      new Date("2026-04-07T00:00:00.000Z"),
    );

    expect(rendered).toContain('"name": "@utdk/google"');
    expect(rendered).toContain('"namespace": "google"');
    expect(rendered).toContain('"providers": [');
    expect(rendered).toContain('"google/books"');
  });

  it("strips the full provider prefix from metadata keys", () => {
    const rendered = renderProviderMetadata(
      {
        name: "google/books",
        options: {
          operations: {
            stripPrefix: "books.",
          },
        },
      },
      new Map([["google.books.volumes/list", createClientToolDefinition(["volumes", "list"])]]),
      "../../client.js",
    );

    expect(rendered).toContain('"volumes/list"');
    expect(rendered).not.toContain('"books.volumes/list"');
    expect(rendered).toContain('"../../client.js"');
  });
});
