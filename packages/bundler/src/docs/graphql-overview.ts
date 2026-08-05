import {
  buildSchema,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isIntrospectionType,
  isObjectType,
  isSpecifiedScalarType,
} from "graphql";
import type { GraphQLField, GraphQLNamedType } from "graphql";
import { buildGraphqlTypeIndex, type GraphqlTypeIndexManifest } from "../graphql-index.js";
import type { OpenAPIV3 } from "openapi-types";

/** Max characters for a provider GraphQL overview (tasks.md 4.3 — tool-description sized). */
export const GRAPHQL_OVERVIEW_CHAR_BUDGET = 6_000;

export type GraphqlPaginationStyle = "relay" | "offset" | "mixed" | "none";

export type GraphqlConventionAnalysis = {
  manifest: GraphqlTypeIndexManifest;
  pagination: GraphqlPaginationStyle;
  paginationSummary: string;
  hasNodeInterface: boolean;
  nodeIdField: string | null;
  deprecatedFieldCount: number;
  deprecatedEnumValueCount: number;
  authSummary: string;
  entryPointSamples: Record<"Query" | "Mutation" | "Subscription", string[]>;
};

export type BuildGraphqlOverviewOptions = {
  provider: string;
  packageSpecifier: string;
  clientVariable: string;
  executeMethod: string;
  sdl: string;
  openApiDocument?: OpenAPIV3.Document;
  promptsHash: string;
  charBudget?: number;
};

export type BuildGraphqlOverviewResult = {
  markdown: string;
  analysis: GraphqlConventionAnalysis;
  truncated: boolean;
  charBudget: number;
};

function countDeprecated(schema: ReturnType<typeof buildSchema>): {
  fields: number;
  enumValues: number;
} {
  let fields = 0;
  let enumValues = 0;

  for (const type of Object.values(schema.getTypeMap())) {
    if (!type || isIntrospectionType(type) || isSpecifiedScalarType(type)) {
      continue;
    }

    if (isObjectType(type) || isInterfaceType(type) || isInputObjectType(type)) {
      for (const field of Object.values(type.getFields())) {
        if (field.deprecationReason) {
          fields += 1;
        }
        if ("args" in field) {
          for (const arg of (field as GraphQLField<unknown, unknown>).args) {
            if (arg.deprecationReason) {
              fields += 1;
            }
          }
        }
      }
    } else if (isEnumType(type)) {
      for (const value of type.getValues()) {
        if (value.deprecationReason) {
          enumValues += 1;
        }
      }
    }
  }

  return { fields, enumValues };
}

function isRelayConnectionType(type: GraphQLNamedType): boolean {
  if (!isObjectType(type) || !type.name.endsWith("Connection")) {
    return false;
  }

  const fields = type.getFields();
  return Boolean(fields.pageInfo) && (Boolean(fields.edges) || Boolean(fields.nodes));
}

function detectPaginationStyle(schema: ReturnType<typeof buildSchema>): {
  style: GraphqlPaginationStyle;
  summary: string;
} {
  const typeMap = schema.getTypeMap();
  const hasPageInfo = Boolean(typeMap.PageInfo);
  const connectionCount = Object.values(typeMap).filter(
    (type) => type && !isIntrospectionType(type) && isRelayConnectionType(type),
  ).length;

  let offsetArgFields = 0;
  let cursorArgFields = 0;

  for (const type of Object.values(typeMap)) {
    if (!type || !isObjectType(type) || isIntrospectionType(type)) {
      continue;
    }

    for (const field of Object.values(type.getFields())) {
      const argNames = new Set(field.args.map((arg) => arg.name));
      if (argNames.has("first") || argNames.has("after") || argNames.has("last") || argNames.has("before")) {
        cursorArgFields += 1;
      }
      if (argNames.has("offset") || argNames.has("page")) {
        offsetArgFields += 1;
      }
    }
  }

  const relaySignals = hasPageInfo && connectionCount > 0;
  const offsetSignals = offsetArgFields > 0;

  if (relaySignals && offsetSignals) {
    return {
      style: "mixed",
      summary:
        `Relay-style cursor pagination (\`${connectionCount}\` \`*Connection\` types` +
        `${hasPageInfo ? ", `PageInfo`" : ""}) coexists with offset/page arguments on some list fields. ` +
        "Prefer cursor args (`first`/`after`/`last`/`before`) on connection-returning fields.",
    };
  }

  if (relaySignals) {
    return {
      style: "relay",
      summary:
        `Relay cursor pagination — \`${connectionCount}\` \`*Connection\` types expose ` +
        "`edges`/`nodes` with `PageInfo` (`hasNextPage`, `endCursor`, …). " +
        "List fields take `first`/`after` (forward) or `last`/`before` (backward).",
    };
  }

  if (offsetSignals) {
    return {
      style: "offset",
      summary:
        "Offset or page-number pagination — list fields accept `offset` and/or `page` arguments rather than Relay cursors.",
    };
  }

  return {
    style: "none",
    summary: "No dominant pagination convention detected in the SDL (no `PageInfo`, `*Connection`, or offset/page args).",
  };
}

function summarizeAuth(openApiDocument: OpenAPIV3.Document | undefined, schema: ReturnType<typeof buildSchema>): string {
  const schemes = openApiDocument?.components?.securitySchemes ?? {};
  const bullets: string[] = [];

  for (const definition of Object.values(schemes)) {
    if (!definition || typeof definition !== "object" || "$ref" in definition) {
      continue;
    }

    if (definition.type === "http" && definition.scheme === "bearer") {
      bullets.push("Bearer token on the GraphQL HTTP endpoint (`Authorization: Bearer <token>`).");
    } else if (definition.type === "http") {
      bullets.push(`HTTP \`${definition.scheme}\` authentication on the GraphQL endpoint.`);
    } else if (definition.type === "apiKey") {
      bullets.push(`API key sent as \`${definition.name}\` in the \`${definition.in}\`.`);
    } else if (definition.type === "oauth2") {
      const flows = Object.keys(definition.flows ?? {});
      bullets.push(`OAuth 2.0 (${flows.join(", ") || "unspecified flow"}) — token scopes gate field access.`);
    }
  }

  const typeMap = schema.getTypeMap();
  const scopeHints = Object.keys(typeMap).filter((name) => /scope/i.test(name) && !isIntrospectionType(typeMap[name]!));

  if (scopeHints.length > 0) {
    const sample = scopeHints.slice(0, 4).map((name) => `\`${name}\``).join(", ");
    bullets.push(`SDL exposes scope-related types (${sample}${scopeHints.length > 4 ? ", …" : ""}).`);
  }

  if (bullets.length === 0) {
    return "No `securitySchemes` declared in the paired OpenAPI spec; assume the provider's standard credential model applies to every GraphQL call.";
  }

  return bullets.join(" ");
}

function sampleEntryPoints(manifest: GraphqlTypeIndexManifest, limitPerRoot: number): GraphqlConventionAnalysis["entryPointSamples"] {
  const samples: GraphqlConventionAnalysis["entryPointSamples"] = {
    Query: [],
    Mutation: [],
    Subscription: [],
  };

  for (const rootType of ["Query", "Mutation", "Subscription"] as const) {
    const fields = manifest.entryPoints
      .filter((entry) => entry.rootType === rootType)
      .map((entry) => entry.field)
      .filter((field) => field !== "_dummy");
    samples[rootType] = fields.slice(0, limitPerRoot);
  }

  return samples;
}

export function analyzeGraphqlConventions(provider: string, sdl: string, openApiDocument?: OpenAPIV3.Document): GraphqlConventionAnalysis {
  const schema = buildSchema(sdl, { assumeValidSDL: true });
  const { manifest } = buildGraphqlTypeIndex(provider, sdl);
  const pagination = detectPaginationStyle(schema);
  const nodeType = schema.getType("Node");
  const hasNodeInterface = Boolean(nodeType && isInterfaceType(nodeType));
  const nodeIdField =
    hasNodeInterface && isInterfaceType(nodeType) && nodeType.getFields().id ? "`Node.id: ID!`" : null;
  const deprecated = countDeprecated(schema);

  return {
    manifest,
    pagination: pagination.style,
    paginationSummary: pagination.summary,
    hasNodeInterface,
    nodeIdField,
    deprecatedFieldCount: deprecated.fields,
    deprecatedEnumValueCount: deprecated.enumValues,
    authSummary: summarizeAuth(openApiDocument, schema),
    entryPointSamples: sampleEntryPoints(manifest, 12),
  };
}

function formatEntryPointSection(
  rootType: "Query" | "Mutation" | "Subscription",
  manifest: GraphqlTypeIndexManifest,
  samples: string[],
): string[] {
  const total = manifest.entryPoints.filter((entry) => entry.rootType === rootType).length;
  if (total === 0) {
    return [];
  }

  const visible = samples.filter((field) => field !== "_dummy");
  const remainder = total - visible.length;
  const sampleLine =
    visible.length > 0
      ? visible.map((field) => `\`${field}\``).join(", ") +
        (remainder > 0 ? ` — *+${remainder} more; use \`schema_lookup\` with no \`type\` for the full list*` : "")
      : `*${total} fields — use \`schema_lookup\` with no \`type\` for the full list*`;

  return [`- **${rootType}** (${total}): ${sampleLine}`];
}

function buildBody(options: BuildGraphqlOverviewOptions, analysis: GraphqlConventionAnalysis): string {
  const { packageSpecifier, clientVariable, executeMethod } = options;
  const { manifest } = analysis;
  const queryCount = manifest.entryPoints.filter((entry) => entry.rootType === "Query").length;
  const mutationCount = manifest.entryPoints.filter((entry) => entry.rootType === "Mutation").length;
  const subscriptionCount = manifest.entryPoints.filter((entry) => entry.rootType === "Subscription").length;
  const rootSummary = [
    queryCount > 0 ? `${queryCount} queries` : null,
    mutationCount > 0 ? `${mutationCount} mutations` : null,
    subscriptionCount > 0 ? `${subscriptionCount} subscriptions` : null,
  ]
    .filter(Boolean)
    .join(", ");

  const deprecationTotal = analysis.deprecatedFieldCount + analysis.deprecatedEnumValueCount;
  const deprecationLine =
    deprecationTotal === 0
      ? "No deprecated fields or enum values in the shipped SDL."
      : `${deprecationTotal} deprecated field/argument/enum value(s) in the SDL — each carries a \`deprecationReason\`; use \`schema_lookup\` for per-field replacements.`;

  const nodeLine = analysis.hasNodeInterface
    ? `Global object identification via the \`Node\` interface (${analysis.nodeIdField ?? "`id`"}). Fetch individual records through root \`…(id:)\` fields where present.`
    : "No `Node` interface — entities use provider-specific id fields; inspect types with `schema_lookup`.";

  return [
    `# GraphQL`,
    "",
    `\`${packageSpecifier}\` · ${manifest.typeCount} types · ${rootSummary || "no root fields"}`,
    "",
    "## Execution",
    "",
    "All GraphQL traffic goes through the passthrough client method — compose queries/mutations yourself; nothing is pre-generated per root field.",
    "",
    "```ts",
    `import ${clientVariable} from "${packageSpecifier}";`,
    "",
    `await ${clientVariable}.${executeMethod}({ query: "…", variables: { /* … */ } });`,
    "```",
    "",
    "## Entry points",
    "",
    "Root fields only — not an exhaustive catalog. Per-type fields belong in `schema_lookup`.",
    "",
    ...formatEntryPointSection("Query", manifest, analysis.entryPointSamples.Query),
    ...formatEntryPointSection("Mutation", manifest, analysis.entryPointSamples.Mutation),
    ...formatEntryPointSection("Subscription", manifest, analysis.entryPointSamples.Subscription),
    "",
    "## Pagination",
    "",
    analysis.paginationSummary,
    "",
    "## IDs & nodes",
    "",
    nodeLine,
    "",
    "## Authentication & scopes",
    "",
    analysis.authSummary,
    "",
    "## Deprecation",
    "",
    deprecationLine,
    "",
    "<!-- prompt-hash:",
    options.promptsHash,
    "-->",
    "",
  ].join("\n");
}

function truncateToBudget(markdown: string, charBudget: number): { content: string; truncated: boolean } {
  if (markdown.length <= charBudget) {
    return { content: markdown, truncated: false };
  }

  const notice =
    `\n\n> *Overview truncated to ${charBudget} characters (generator budget \`GRAPHQL_OVERVIEW_CHAR_BUDGET\`). Use \`schema_lookup\` for field-level detail.*\n`;
  const allowance = charBudget - notice.length;
  const slicePoint = markdown.lastIndexOf("\n", allowance);
  const cutAt = slicePoint > 0 ? slicePoint : allowance;

  return {
    content: `${markdown.slice(0, cutAt).trimEnd()}${notice}`,
    truncated: true,
  };
}

/**
 * Builds provider-level `docs/graphql.md` from SDL conventions (tasks.md 4.1–4.4).
 * Deliberately omits per-query/mutation sections — that detail is `schema_lookup`'s job.
 */
export function buildGraphqlOverviewMarkdown(options: BuildGraphqlOverviewOptions): BuildGraphqlOverviewResult {
  const charBudget = options.charBudget ?? GRAPHQL_OVERVIEW_CHAR_BUDGET;
  const analysis = analyzeGraphqlConventions(options.provider, options.sdl, options.openApiDocument);
  const body = buildBody(options, analysis);
  const { content, truncated } = truncateToBudget(body, charBudget);

  return {
    markdown: content,
    analysis,
    truncated,
    charBudget,
  };
}

/** True when an OpenAPI docs group is only the GraphQL passthrough operation. */
export function isGraphqlPassthroughDocsGroup(group: { key: string; operations: Array<{ operationId?: string }> }): boolean {
  if (group.key !== "graphql" || group.operations.length !== 1) {
    return false;
  }

  const operationId = group.operations[0]?.operationId ?? "";
  return /graphql/iu.test(operationId);
}
