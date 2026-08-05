/**
 * `schema_lookup` MCP tool tests (graphql-schema-surface §3): registered
 * through the generic `McpExtensions` hook, composes with the sandbox tool
 * (grant-enforcement §5) rather than replacing its registration, returns
 * root entry points when `type` is omitted and one type's fields otherwise,
 * caps and flags truncated responses, and misses (rather than throws) for
 * unknown providers/types/fields.
 */

import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { resolveProviderGraphqlIndexDir, type GraphqlTypeIndexManifest } from "@utdk/mcp-core";
import { buildMcpServer, resetMcpCatalog, setMcpCatalogForTesting } from "../src/mcp/server.js";
import { withSandboxTool } from "../src/mcp/sandbox-tool.js";
import {
  createSchemaLookupMcpExtensions,
  withSchemaLookupTool,
  SCHEMA_LOOKUP_TOOL_NAME,
  type SchemaLookupToolDeps,
} from "../src/mcp/schema-lookup-tool.js";
import { adminCtx, ctx, makeDispatchEnv, type DispatchEnv } from "./helpers.js";

// ---------------------------------------------------------------------------
// Fixture provider index — hand-written, independent of the bundler's
// build-side code (registry-server does not depend on @aprovan/utdk-bundler
// for this tool; see mcp-core/src/graphql-index.ts).
// ---------------------------------------------------------------------------

type FixtureField = {
  name: string;
  type: string;
  args: unknown[];
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
  entryPoint: boolean;
};

function field(name: string, type: string, entryPoint = false): FixtureField {
  return { name, type, args: [], description: null, deprecated: false, deprecationReason: null, entryPoint };
}

const tempDirs: string[] = [];

async function writeFixtureIndex(
  types: Array<{ name: string; kind: string; fields: FixtureField[]; enumValues?: unknown[] }>,
  entryPoints: Array<{ rootType: "Query" | "Mutation" | "Subscription"; field: string }>,
): Promise<{ dir: string; resolveIndexDir: SchemaLookupToolDeps["resolveIndexDir"] }> {
  const dir = await mkdtemp(path.join(tmpdir(), "registry-server-schema-lookup-"));
  tempDirs.push(dir);

  const records = types.map((t) => ({ name: t.name, kind: t.kind, description: null, fields: t.fields, enumValues: t.enumValues ?? [] }));
  const lines = records.map((record) => `${JSON.stringify(record)}\n`);
  let offset = 0;
  const manifestTypes: GraphqlTypeIndexManifest["types"] = {};
  for (const [index, record] of records.entries()) {
    const line = lines[index] as string;
    const length = Buffer.byteLength(line, "utf8");
    manifestTypes[record.name] = { kind: record.kind as never, fieldCount: record.fields.length, offset, length };
    offset += length;
  }
  const recordsNdjson = lines.join("");
  const manifest: GraphqlTypeIndexManifest = {
    provider: "acme",
    generatedAt: "2026-01-01T00:00:00.000Z",
    typeCount: records.length,
    sizeBytes: Buffer.byteLength(recordsNdjson, "utf8"),
    entryPoints,
    types: manifestTypes,
  };

  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "graphql-index.json"), JSON.stringify(manifest), "utf8");
  await writeFile(path.join(dir, "graphql-index.ndjson"), recordsNdjson, "utf8");

  return { dir, resolveIndexDir: (provider: string) => (provider === "acme" ? dir : null) };
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

function parseResult(result: { content: Array<{ type: string; text: string }>; isError?: boolean }) {
  const text = result.content[0]?.text ?? "{}";
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    body = { rawText: text };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { isError: result.isError ?? false, body: body as any };
}

async function callSchemaLookup(deps: SchemaLookupToolDeps, args: Record<string, unknown>) {
  const extensions = createSchemaLookupMcpExtensions(deps);
  const result = await extensions.handleTool!(ctx(), SCHEMA_LOOKUP_TOOL_NAME, args);
  return parseResult(result);
}

// ---------------------------------------------------------------------------
// Root entry points ("no type given")
// ---------------------------------------------------------------------------

describe("schema_lookup — root entry points", () => {
  it("lists root entry points with their return type and args, never the full type list", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [
        {
          name: "Query",
          kind: "OBJECT",
          fields: [field("widget", "Widget", true), field("widgets", "[Widget!]!", true)],
        },
        { name: "Widget", kind: "OBJECT", fields: [field("id", "ID!"), field("name", "String")] },
      ],
      [
        { rootType: "Query", field: "widget" },
        { rootType: "Query", field: "widgets" },
      ],
    );

    const { isError, body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme" });

    expect(isError).toBe(false);
    expect(body.found).toBe(true);
    expect(body.truncated).toBe(false);
    expect(body.entryPoints).toHaveLength(2);
    expect(body.entryPoints).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ rootType: "Query", name: "widget", type: "Widget" }),
        expect.objectContaining({ rootType: "Query", name: "widgets", type: "[Widget!]!" }),
      ]),
    );
    // Never the full type list: Widget's own field records (e.g. "name":
    // "String") must not appear — only its name as an entry point's return type.
    expect(JSON.stringify(body)).not.toContain('"name":"String"');
    expect(body).not.toHaveProperty("types");
  });

  it("falls back to a name-only entry when the root type record can't be found (custom root type names)", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Query", kind: "OBJECT", fields: [field("widget", "Widget", true)] }],
      [
        { rootType: "Query", field: "widget" },
        { rootType: "Mutation", field: "createWidget" }, // no "Mutation" type record shipped
      ],
    );

    const { isError, body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme" });

    expect(isError).toBe(false);
    expect(body.entryPoints).toEqual(
      expect.arrayContaining([expect.objectContaining({ rootType: "Mutation", name: "createWidget", type: "" })]),
    );
  });

  it("narrows to one named entry point via `field`", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Query", kind: "OBJECT", fields: [field("widget", "Widget", true), field("widgets", "[Widget!]!", true)] }],
      [
        { rootType: "Query", field: "widget" },
        { rootType: "Query", field: "widgets" },
      ],
    );

    const { body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", field: "widget" });

    expect(body.entryPoints).toEqual([expect.objectContaining({ name: "widget", type: "Widget" })]);
  });

  it("reports a miss (not an error) for an unknown `field`", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Query", kind: "OBJECT", fields: [field("widget", "Widget", true)] }],
      [{ rootType: "Query", field: "widget" }],
    );

    const { isError, body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", field: "nope" });

    expect(isError).toBe(false);
    expect(body.found).toBe(false);
    expect(body.message).toMatch(/no root entry point named "nope"/iu);
  });

  it("caps and flags a large entry-point listing rather than truncating silently", async () => {
    const manyEntries = Array.from({ length: 50 }, (_, i) => field(`field${i}`, "String", true));
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Query", kind: "OBJECT", fields: manyEntries }],
      manyEntries.map((f) => ({ rootType: "Query" as const, field: f.name })),
    );

    const { body } = await callSchemaLookup({ resolveIndexDir, maxResponseBytes: 300 }, { provider: "acme" });

    expect(body.truncated).toBe(true);
    expect(body.totalEntryPoints).toBe(50);
    expect(body.entryPoints.length).toBeGreaterThan(0);
    expect(body.entryPoints.length).toBeLessThan(50);
    expect(body.truncatedMessage).toMatch(/showing \d+ of 50 entry points/iu);
  });
});

// ---------------------------------------------------------------------------
// Single type ("type given")
// ---------------------------------------------------------------------------

describe("schema_lookup — single type", () => {
  it("returns one type's fields", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [
        { name: "Query", kind: "OBJECT", fields: [field("widget", "Widget", true)] },
        { name: "Widget", kind: "OBJECT", fields: [field("id", "ID!"), field("name", "String")] },
      ],
      [{ rootType: "Query", field: "widget" }],
    );

    const { isError, body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", type: "Widget" });

    expect(isError).toBe(false);
    expect(body.found).toBe(true);
    expect(body.kind).toBe("OBJECT");
    expect(body.fields.map((f: { name: string }) => f.name)).toEqual(["id", "name"]);
    expect(body.truncated).toBe(false);
  });

  it("returns enum values for an ENUM type", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Status", kind: "ENUM", fields: [], enumValues: [{ name: "OPEN", description: null, deprecated: false, deprecationReason: null }] }],
      [],
    );

    const { body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", type: "Status" });

    expect(body.kind).toBe("ENUM");
    expect(body.enumValues).toEqual([{ name: "OPEN", description: null, deprecated: false, deprecationReason: null }]);
  });

  it("narrows to one named field via `field`", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Widget", kind: "OBJECT", fields: [field("id", "ID!"), field("name", "String")] }],
      [],
    );

    const { body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", type: "Widget", field: "name" });

    expect(body.fields).toEqual([expect.objectContaining({ name: "name", type: "String" })]);
  });

  it("reports a miss (not an error) for an unknown type", async () => {
    const { resolveIndexDir } = await writeFixtureIndex([{ name: "Widget", kind: "OBJECT", fields: [] }], []);

    const { isError, body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", type: "NoSuchType" });

    expect(isError).toBe(false);
    expect(body.found).toBe(false);
    expect(body.message).toMatch(/unknown type "NoSuchType"/iu);
  });

  it("reports a miss for an unknown field on a known type", async () => {
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Widget", kind: "OBJECT", fields: [field("id", "ID!")] }],
      [],
    );

    const { body } = await callSchemaLookup({ resolveIndexDir }, { provider: "acme", type: "Widget", field: "nope" });

    expect(body.found).toBe(false);
    expect(body.message).toMatch(/no field or enum value named "nope"/iu);
  });

  it("a type large enough to trigger truncation says so, explicitly", async () => {
    const manyFields = Array.from({ length: 50 }, (_, i) => field(`field${i}`, "String"));
    const { resolveIndexDir } = await writeFixtureIndex([{ name: "BigType", kind: "OBJECT", fields: manyFields }], []);

    const { body } = await callSchemaLookup({ resolveIndexDir, maxResponseBytes: 300 }, { provider: "acme", type: "BigType" });

    expect(body.found).toBe(true);
    expect(body.truncated).toBe(true);
    expect(body.totalFields).toBe(50);
    expect(body.fields.length).toBeLessThan(50);
    expect(body.truncatedFieldsMessage).toMatch(/showing \d+ of 50 fields/iu);
  });
});

// ---------------------------------------------------------------------------
// Unknown / missing provider index
// ---------------------------------------------------------------------------

describe("schema_lookup — provider resolution", () => {
  it("reports a miss (not an error) for an unknown provider", async () => {
    const { isError, body } = await callSchemaLookup(
      { resolveIndexDir: () => null },
      { provider: "__totally_not_a_provider__" },
    );

    expect(isError).toBe(false);
    expect(body.found).toBe(false);
    expect(body.message).toMatch(/unknown provider/iu);
  });

  it("reports a miss for a provider whose package resolves but ships no GraphQL index", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "registry-server-schema-lookup-empty-"));
    tempDirs.push(dir);

    const { isError, body } = await callSchemaLookup(
      { resolveIndexDir: () => dir },
      { provider: "rest-only-provider" },
    );

    expect(isError).toBe(false);
    expect(body.found).toBe(false);
    expect(body.message).toMatch(/no shipped graphql schema index/iu);
  });

  it("rejects an empty provider argument as a tool error, not a miss", async () => {
    const { isError, body } = await callSchemaLookup({}, { provider: "" });
    expect(isError).toBe(true);
    void body;
  });

  it("threads an explicit version to resolveIndexDir", async () => {
    const seen: Array<[string, string | undefined]> = [];
    const { resolveIndexDir } = await writeFixtureIndex([{ name: "Widget", kind: "OBJECT", fields: [] }], []);
    const wrapped: SchemaLookupToolDeps["resolveIndexDir"] = (provider, version) => {
      seen.push([provider, version]);
      return resolveIndexDir!(provider, version);
    };

    await callSchemaLookup({ resolveIndexDir: wrapped }, { provider: "acme", version: "2024-10" });

    expect(seen).toEqual([["acme", "2024-10"]]);
  });
});

// ---------------------------------------------------------------------------
// Real, shipped linear package (integration) — proves the default resolver
// (mcp-core's `resolveProviderGraphqlIndexDir`) works end to end, not just
// against the fixture.
// ---------------------------------------------------------------------------

describe("schema_lookup — linear (integration)", () => {
  it("resolves the linear provider's root entry points via the default resolver", async () => {
    expect(resolveProviderGraphqlIndexDir("linear")).not.toBeNull();
    const { isError, body } = await callSchemaLookup({}, { provider: "linear" });

    expect(isError).toBe(false);
    expect(body.found).toBe(true);
    expect(body.entryPoints.length).toBeGreaterThan(0);
    expect(body.entryPoints.every((e: { rootType: string }) => ["Query", "Mutation", "Subscription"].includes(e.rootType))).toBe(true);
  });

  it("looks up a real large linear type and truncates it under the default cap", async () => {
    const { isError, body } = await callSchemaLookup({}, { provider: "linear", type: "Issue" });

    expect(isError).toBe(false);
    expect(body.found).toBe(true);
    expect(body.kind).toBe("OBJECT");
    expect(body.totalFields).toBeGreaterThan(50);
    expect(body.truncated).toBe(true);
  });

  it("reports a miss for an unknown type on a real provider", async () => {
    const { body } = await callSchemaLookup({}, { provider: "linear", type: "TotallyNotARealType" });
    expect(body.found).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Composition with the sandbox tool — must not replace its registration
// ---------------------------------------------------------------------------

let env: DispatchEnv;

afterEach(async () => {
  await env?.close();
  resetMcpCatalog();
});

async function listServerTools(server: Awaited<ReturnType<typeof buildMcpServer>>) {
  const internals = server as unknown as {
    _requestHandlers: Map<string, (req: unknown, extra: unknown) => Promise<unknown>>;
  };
  const handler = internals._requestHandlers.get("tools/list")!;
  return handler({ method: "tools/list", params: {} }, { signal: new AbortController().signal }) as Promise<{
    tools: Array<{ name: string }>;
  }>;
}

async function callServerTool(
  server: Awaited<ReturnType<typeof buildMcpServer>>,
  name: string,
  args: Record<string, unknown>,
) {
  const internals = server as unknown as {
    _requestHandlers: Map<string, (req: unknown, extra: unknown) => Promise<unknown>>;
  };
  const handler = internals._requestHandlers.get("tools/call")!;
  return handler(
    { method: "tools/call", params: { name, arguments: args } },
    { signal: new AbortController().signal },
  ) as Promise<{ content: Array<{ type: string; text: string }>; isError?: boolean }>;
}

describe("schema_lookup — composition with the sandbox tool (grant-enforcement §5)", () => {
  it("both tools are listed and callable side by side — neither registration replaces the other", async () => {
    env = await makeDispatchEnv({ authMode: "oidc" });
    setMcpCatalogForTesting([]);
    const { resolveIndexDir } = await writeFixtureIndex(
      [{ name: "Query", kind: "OBJECT", fields: [field("widget", "Widget", true)] }],
      [{ rootType: "Query", field: "widget" }],
    );

    const extensions = withSandboxTool(
      { dispatcher: env.dispatcher, resolveDeps: env.deps },
      withSchemaLookupTool({ resolveIndexDir }, undefined),
    );

    const server = await buildMcpServer(
      { dispatcher: env.dispatcher, resolveDeps: env.deps, extensions },
      adminCtx({ source: { type: "mcp" } }),
    );

    const listed = await listServerTools(server);
    const names = listed.tools.map((t) => t.name);
    expect(names).toContain("run_script");
    expect(names).toContain(SCHEMA_LOOKUP_TOOL_NAME);
    expect(names).toContain("call_tool");

    const runScriptResult = await callServerTool(server, "run_script", { source: "export default async () => 1;" });
    expect(runScriptResult.isError).toBeFalsy();

    const schemaLookupResult = await callServerTool(server, SCHEMA_LOOKUP_TOOL_NAME, { provider: "acme" });
    expect(schemaLookupResult.isError).toBeFalsy();
    expect(JSON.parse(schemaLookupResult.content[0]?.text ?? "{}").found).toBe(true);
  });

  it("is registered even under authMode \"none\" — it carries no tenant credentials, unlike the sandbox tool", async () => {
    env = await makeDispatchEnv({ authMode: "none" });
    setMcpCatalogForTesting([]);
    const extensions = withSandboxTool({ dispatcher: env.dispatcher, resolveDeps: env.deps }, withSchemaLookupTool({}, undefined));
    const server = await buildMcpServer(
      { dispatcher: env.dispatcher, resolveDeps: env.deps, extensions },
      ctx({ source: { type: "mcp" } }),
    );

    const listed = await listServerTools(server);
    const names = listed.tools.map((t) => t.name);
    expect(names).not.toContain("run_script");
    expect(names).toContain(SCHEMA_LOOKUP_TOOL_NAME);
  });
});
