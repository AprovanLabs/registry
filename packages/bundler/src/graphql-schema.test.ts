import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  assertSchemaOperationPairing,
  assertValidSdl,
  hasGraphqlOperation,
  loadGraphqlSchemaSource,
} from "./graphql-schema.js";
import type { OpenAPIV3 } from "openapi-types";

const VALID_SDL = `
type Query {
  issues: [Issue!]!
}

type Issue {
  id: ID!
  title: String!
}
`;

const CORRUPT_SDL = `
type Query {
  issues: [Issue!!
}
`;

function graphqlOperationDocument(): OpenAPIV3.Document {
  return {
    openapi: "3.0.3",
    info: { title: "Fixture", version: "1.0.0" },
    paths: {
      "/graphql": {
        post: {
          operationId: "executeGraphQL",
          tags: ["GraphQL"],
          responses: { "200": { description: "ok" } },
        },
      },
    },
  } as unknown as OpenAPIV3.Document;
}

function noGraphqlOperationDocument(): OpenAPIV3.Document {
  return {
    openapi: "3.0.3",
    info: { title: "Fixture", version: "1.0.0" },
    paths: {
      "/widgets": {
        get: {
          operationId: "listWidgets",
          responses: { "200": { description: "ok" } },
        },
      },
    },
  } as unknown as OpenAPIV3.Document;
}

describe("loadGraphqlSchemaSource", () => {
  const tempDirs: string[] = [];

  afterEach(async () => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
  });

  it("throws naming the provider when graphqlSchemaUrl is absent", async () => {
    await expect(loadGraphqlSchemaSource({ name: "widgets" })).rejects.toThrow(/widgets/u);
  });

  it("fetches SDL from an https source", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(VALID_SDL, { status: 200 })),
    );

    const { sdl, fetchedAt } = await loadGraphqlSchemaSource({
      name: "linear",
      graphqlSchemaUrl: "https://example.com/schema.graphql",
    });

    expect(sdl).toBe(VALID_SDL);
    expect(fetchedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/u);
  });

  it("throws naming the provider when the https fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("not found", { status: 404 })));

    await expect(
      loadGraphqlSchemaSource({ name: "linear", graphqlSchemaUrl: "https://example.com/schema.graphql" }),
    ).rejects.toThrow(/linear/u);
  });

  it("reads SDL from a file:// source", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "graphql-schema-"));
    tempDirs.push(dir);
    const filePath = path.join(dir, "schema.graphql");
    await writeFile(filePath, VALID_SDL, "utf8");

    const { sdl } = await loadGraphqlSchemaSource({
      name: "fixture",
      graphqlSchemaUrl: `file://${filePath}`,
    });

    expect(sdl).toBe(VALID_SDL);
  });
});

describe("assertValidSdl", () => {
  it("does not throw for valid SDL", () => {
    expect(() => assertValidSdl("linear", VALID_SDL)).not.toThrow();
  });

  it("throws naming the provider for corrupt SDL", () => {
    expect(() => assertValidSdl("linear", CORRUPT_SDL)).toThrow(/linear/u);
  });
});

describe("hasGraphqlOperation", () => {
  it("returns true when an operation is tagged GraphQL", () => {
    expect(hasGraphqlOperation(graphqlOperationDocument())).toBe(true);
  });

  it("returns false when no operation mentions GraphQL", () => {
    expect(hasGraphqlOperation(noGraphqlOperationDocument())).toBe(false);
  });
});

describe("assertSchemaOperationPairing", () => {
  it("does not throw when both a schema source and a GraphQL operation are present", () => {
    expect(() =>
      assertSchemaOperationPairing(
        { name: "linear", graphqlSchemaUrl: "https://example.com/schema.graphql" },
        graphqlOperationDocument(),
      ),
    ).not.toThrow();
  });

  it("does not throw when neither a schema source nor a GraphQL operation are present", () => {
    expect(() =>
      assertSchemaOperationPairing({ name: "widgets" }, noGraphqlOperationDocument()),
    ).not.toThrow();
  });

  it("throws naming the provider when a schema source is declared with no GraphQL operation", () => {
    expect(() =>
      assertSchemaOperationPairing(
        { name: "widgets", graphqlSchemaUrl: "https://example.com/schema.graphql" },
        noGraphqlOperationDocument(),
      ),
    ).toThrow(/widgets/u);
  });

  it("throws naming the provider when a GraphQL operation is declared with no schema source", () => {
    expect(() => assertSchemaOperationPairing({ name: "linear" }, graphqlOperationDocument())).toThrow(
      /linear/u,
    );
  });
});
