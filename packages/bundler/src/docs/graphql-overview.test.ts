import { describe, expect, it } from "vitest";
import {
  analyzeGraphqlConventions,
  buildGraphqlOverviewMarkdown,
  GRAPHQL_OVERVIEW_CHAR_BUDGET,
  isGraphqlPassthroughDocsGroup,
} from "./graphql-overview.js";

const MINIMAL_SDL = `
interface Node { id: ID! }
type PageInfo { hasNextPage: Boolean! endCursor: String }
type ItemConnection { edges: [ItemEdge!]! pageInfo: PageInfo! }
type ItemEdge { node: Item! cursor: String! }
type Item implements Node { id: ID! title: String! oldTitle: String @deprecated(reason: "use title") }
enum Status { ACTIVE ARCHIVED @deprecated(reason: "use CLOSED") }
type Query {
  item(id: ID!): Item
  items(first: Int, after: String, offset: Int): ItemConnection!
}
type Mutation {
  itemCreate(input: ItemCreateInput!): Item!
}
input ItemCreateInput { title: String! }
`;

describe("buildGraphqlOverviewMarkdown", () => {
  it("generates SDL-derived overview with conventions and prompt-hash footer", () => {
    const result = buildGraphqlOverviewMarkdown({
      provider: "widgets",
      packageSpecifier: "@utdk/widgets",
      clientVariable: "widgets",
      executeMethod: "executeGraphQl",
      sdl: MINIMAL_SDL,
      promptsHash: "a".repeat(64),
      openApiDocument: {
        openapi: "3.0.0",
        info: { title: "Widgets", version: "1.0.0" },
        components: {
          securitySchemes: {
            bearer: { type: "http", scheme: "bearer" },
          },
        },
      } as never,
    });

    expect(result.charBudget).toBe(GRAPHQL_OVERVIEW_CHAR_BUDGET);
    expect(result.markdown).toContain("# GraphQL");
    expect(result.markdown).toContain("## Entry points");
    expect(result.markdown).toContain("## Pagination");
    expect(result.markdown).toContain("Relay-style cursor pagination");
    expect(result.markdown).toContain("## IDs & nodes");
    expect(result.markdown).toContain("`Node` interface");
    expect(result.markdown).toContain("## Authentication & scopes");
    expect(result.markdown).toContain("Bearer token");
    expect(result.markdown).toContain("## Deprecation");
    expect(result.markdown).toContain("deprecated field/argument/enum value");
    expect(result.markdown).not.toContain("## `widgets.");
    expect(result.markdown).toContain("schema_lookup");
    expect(result.markdown).toContain("<!-- prompt-hash:");
    expect(result.markdown).toContain("a".repeat(64));
    expect(result.markdown.length).toBeLessThanOrEqual(GRAPHQL_OVERVIEW_CHAR_BUDGET);
    expect(result.truncated).toBe(false);
  });

  it("states the generator budget when output exceeds the limit", () => {
    const result = buildGraphqlOverviewMarkdown({
      provider: "widgets",
      packageSpecifier: "@utdk/widgets",
      clientVariable: "widgets",
      executeMethod: "executeGraphQl",
      sdl: MINIMAL_SDL,
      promptsHash: "b".repeat(64),
      charBudget: 400,
    });

    expect(result.truncated).toBe(true);
    expect(result.markdown).toContain("GRAPHQL_OVERVIEW_CHAR_BUDGET");
    expect(result.markdown.length).toBeLessThanOrEqual(400);
  });
});

describe("analyzeGraphqlConventions", () => {
  it("detects offset-only pagination when Relay types are absent", () => {
    const analysis = analyzeGraphqlConventions(
      "offsetco",
      `
      type Query { users(page: Int, limit: Int): [User!]! }
      type User { id: ID! }
    `,
    );

    expect(analysis.pagination).toBe("offset");
    expect(analysis.hasNodeInterface).toBe(false);
  });
});

describe("isGraphqlPassthroughDocsGroup", () => {
  it("matches a single-operation GraphQL tag group", () => {
    expect(
      isGraphqlPassthroughDocsGroup({
        key: "graphql",
        operations: [{ operationId: "executeGraphQL" }],
      }),
    ).toBe(true);
  });

  it("rejects multi-operation or differently keyed groups", () => {
    expect(
      isGraphqlPassthroughDocsGroup({
        key: "graphql",
        operations: [{ operationId: "executeGraphQL" }, { operationId: "other" }],
      }),
    ).toBe(false);
    expect(
      isGraphqlPassthroughDocsGroup({
        key: "users",
        operations: [{ operationId: "executeGraphQL" }],
      }),
    ).toBe(false);
  });
});
