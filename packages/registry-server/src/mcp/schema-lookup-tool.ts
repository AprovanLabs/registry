/**
 * Schema lookup MCP tool (graphql-schema-surface §3, tech-plan D3): queries
 * the SDL-derived type index a provider ships next to its `schema.graphql`
 * (§2) so an agent can discover a GraphQL provider's shape — one type's
 * fields, or the root Query/Mutation/Subscription entry points when no
 * `type` is given — without the SDL, or the full type list, ever entering
 * context.
 *
 * Registered through the generic `McpExtensions` hook, exactly like the
 * sandbox tool (grant-enforcement §5) — see `withSandboxTool` for the
 * composition pattern this mirrors via `withSchemaLookupTool` below.
 *
 * Unlike the sandbox tool, this does not dispatch through `Dispatcher`: it
 * only reads artifacts shipped inside installed `@utdk/*` packages, carries
 * no tenant credentials, and returns nothing not already public in the
 * provider's shipped SDL. It is therefore registered unconditionally — not
 * gated by grant or auth mode.
 */

import {
  lookupGraphqlType,
  readGraphqlIndexManifest,
  resolveProviderGraphqlIndexDir,
  type GraphqlIndexField,
  type GraphqlEnumValue,
  type GraphqlTypeIndexManifest,
} from "@utdk/mcp-core";
import type { CallContext, McpExtensions, McpExtensionTool } from "../config/types.js";

export const SCHEMA_LOOKUP_TOOL_NAME = "schema_lookup";

/**
 * Soft cap, in bytes of serialized field/entry-point data, before a
 * response is truncated (tasks.md 3.3). Sized so a single lookup call stays
 * a small fraction of a typical context budget even for a large object
 * type (Linear's `Query` root, for example, serializes to well over this).
 */
const DEFAULT_MAX_RESPONSE_BYTES = 8_000;

export interface SchemaLookupToolDeps {
  /**
   * Resolves a provider name (+ optional pinned API version, §5) to its
   * on-disk `graphql-index.json`/`.ndjson` directory. Defaults to the
   * shipped-package resolver in `@utdk/mcp-core`; overridable in tests.
   */
  resolveIndexDir?: (provider: string, version?: string) => string | null;
  /** Byte budget for one response's field/entry-point list (default 8000). */
  maxResponseBytes?: number;
}

const SCHEMA_LOOKUP_TOOL_SCHEMA: McpExtensionTool = {
  name: SCHEMA_LOOKUP_TOOL_NAME,
  description:
    "Look up a GraphQL provider's schema without loading its SDL into context. Omit `type` to list " +
    "root Query/Mutation/Subscription entry points (name, return type, args) and pick which type to " +
    "inspect next; pass `type` to get that type's fields or enum values (name, type, args, " +
    "deprecation, description). Pass `field` to narrow either result to one named field. Large " +
    "results are capped and say so via `truncated`/`truncatedMessage` rather than silently cutting " +
    "off. A provider with no shipped GraphQL schema index (most providers are REST-only) or an " +
    "unknown type/field reports `found: false` with a message, never an error.",
  inputSchema: {
    type: "object",
    properties: {
      provider: {
        type: "string",
        description: "Provider name (e.g. \"linear\").",
      },
      type: {
        type: "string",
        description: "GraphQL type name to look up. Omit to list root entry points instead.",
      },
      field: {
        type: "string",
        description:
          "Narrow the result to one named field — within `type` when given, or among root entry " +
          "points when `type` is omitted.",
      },
      version: {
        type: "string",
        description: "Pinned API version, for providers with versioned schemas (graphql-schema-surface §5).",
      },
    },
    required: ["provider"],
  },
};

// ---------------------------------------------------------------------------
// Truncation
// ---------------------------------------------------------------------------

type TruncatedList<T> = { items: T[]; truncated: boolean; totalCount: number };

/**
 * Keeps items (in order) until adding the next would exceed `maxBytes` of
 * serialized JSON, always keeping at least one item so a single
 * oversized entry is reported — truncated — rather than dropped entirely
 * (tasks.md 3.3: truncation must say so, never read as "that's all there
 * is" or as an empty result).
 */
function truncateToByteBudget<T>(items: T[], maxBytes: number): TruncatedList<T> {
  const kept: T[] = [];
  let bytes = 2; // "[" + "]"
  for (const item of items) {
    const itemBytes = Buffer.byteLength(JSON.stringify(item), "utf8") + 1; // + separator
    if (kept.length > 0 && bytes + itemBytes > maxBytes) {
      return { items: kept, truncated: true, totalCount: items.length };
    }
    bytes += itemBytes;
    kept.push(item);
  }
  return { items: kept, truncated: false, totalCount: items.length };
}

function truncatedMessage(kind: string, kept: number, total: number, maxBytes: number): string {
  return (
    `Showing ${kept} of ${total} ${kind}, capped at ~${maxBytes} bytes. ` +
    "Narrow with `field` (or `type`) to see the rest."
  );
}

// ---------------------------------------------------------------------------
// Root entry points ("no type given")
// ---------------------------------------------------------------------------

type EntryPointRecord = {
  rootType: "Query" | "Mutation" | "Subscription";
  name: string;
  type: string;
  args: GraphqlIndexField["args"];
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
};

/**
 * Builds the full entry-point list from the manifest's root type records
 * (Query/Mutation/Subscription), which is where each field's return type
 * and args actually live — the manifest's `entryPoints` array alone only
 * carries names. A small, bounded number of type lookups (at most three)
 * regardless of overall schema size.
 *
 * Falls back to a name-only record (no `type`/`args`) for a root type that
 * the manifest lists entry points for but whose type record isn't found —
 * defends against a schema using non-default root operation type names,
 * which the manifest doesn't currently capture (§2 limitation).
 */
async function collectEntryPoints(
  indexDir: string,
  manifest: GraphqlTypeIndexManifest,
): Promise<EntryPointRecord[]> {
  const rootTypeNames = [...new Set(manifest.entryPoints.map((entry) => entry.rootType))];
  const fieldsByRootAndName = new Map<string, GraphqlIndexField>();

  for (const rootTypeName of rootTypeNames) {
    const { found, record } = await lookupGraphqlType(indexDir, rootTypeName, manifest);
    if (!found) continue;
    for (const field of record.fields) {
      fieldsByRootAndName.set(`${rootTypeName}:${field.name}`, field);
    }
  }

  return manifest.entryPoints.map((entry) => {
    const field = fieldsByRootAndName.get(`${entry.rootType}:${entry.field}`);
    if (field) return { rootType: entry.rootType, ...field };
    return {
      rootType: entry.rootType,
      name: entry.field,
      type: "",
      args: [],
      description: null,
      deprecated: false,
      deprecationReason: null,
    };
  });
}

async function lookupRootEntryPoints(
  indexDir: string,
  manifest: GraphqlTypeIndexManifest,
  fieldFilter: string | undefined,
  maxBytes: number,
) {
  let entryPoints = await collectEntryPoints(indexDir, manifest);
  if (fieldFilter) entryPoints = entryPoints.filter((entry) => entry.name === fieldFilter);

  const { items, truncated, totalCount } = truncateToByteBudget(entryPoints, maxBytes);
  return {
    entryPoints: items,
    totalEntryPoints: totalCount,
    truncated,
    ...(truncated ? { truncatedMessage: truncatedMessage("entry points", items.length, totalCount, maxBytes) } : {}),
  };
}

// ---------------------------------------------------------------------------
// Single type ("type given")
// ---------------------------------------------------------------------------

async function lookupTypeRecord(
  indexDir: string,
  manifest: GraphqlTypeIndexManifest,
  typeName: string,
  fieldFilter: string | undefined,
  maxBytes: number,
) {
  const { found, record } = await lookupGraphqlType(indexDir, typeName, manifest);
  if (!found) return { found: false as const };

  const fields: GraphqlIndexField[] = fieldFilter
    ? record.fields.filter((field) => field.name === fieldFilter)
    : record.fields;
  const enumValues: GraphqlEnumValue[] = fieldFilter
    ? record.enumValues.filter((value) => value.name === fieldFilter)
    : record.enumValues;

  const fieldsResult = truncateToByteBudget(fields, maxBytes);
  const enumResult = truncateToByteBudget(enumValues, maxBytes);
  const truncated = fieldsResult.truncated || enumResult.truncated;

  return {
    found: true as const,
    kind: record.kind,
    description: record.description,
    fields: fieldsResult.items,
    totalFields: fieldsResult.totalCount,
    enumValues: enumResult.items,
    totalEnumValues: enumResult.totalCount,
    truncated,
    ...(fieldsResult.truncated
      ? { truncatedFieldsMessage: truncatedMessage("fields", fieldsResult.items.length, fieldsResult.totalCount, maxBytes) }
      : {}),
    ...(enumResult.truncated
      ? {
          truncatedEnumValuesMessage: truncatedMessage(
            "enum values",
            enumResult.items.length,
            enumResult.totalCount,
            maxBytes,
          ),
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

function textResult(body: unknown): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify(body) }] };
}

function errorResult(message: string): { content: Array<{ type: "text"; text: string }>; isError: true } {
  return { isError: true, content: [{ type: "text", text: message }] };
}

async function handleSchemaLookup(
  deps: SchemaLookupToolDeps,
  _ctx: CallContext,
  args: Record<string, unknown>,
): Promise<{ content: Array<{ type: "text"; text: string }>; isError?: boolean }> {
  const provider = typeof args["provider"] === "string" ? args["provider"] : "";
  if (!provider) return errorResult('schema_lookup requires a non-empty "provider" string.');

  const type = typeof args["type"] === "string" ? args["type"] : undefined;
  const field = typeof args["field"] === "string" ? args["field"] : undefined;
  const version = typeof args["version"] === "string" ? args["version"] : undefined;
  const maxBytes = deps.maxResponseBytes ?? DEFAULT_MAX_RESPONSE_BYTES;
  const resolveIndexDir = deps.resolveIndexDir ?? resolveProviderGraphqlIndexDir;

  const indexDir = resolveIndexDir(provider, version);
  if (!indexDir) {
    return textResult({
      provider,
      found: false,
      message: `Unknown provider "${provider}" — no such provider package is installed.`,
    });
  }

  const manifest = await readGraphqlIndexManifest(indexDir);
  if (!manifest) {
    return textResult({
      provider,
      found: false,
      message: version
        ? `Provider "${provider}" has no shipped GraphQL schema index for version "${version}".`
        : `Provider "${provider}" has no shipped GraphQL schema index (no GraphQL SDL was ingested for it).`,
    });
  }

  if (type) {
    const result = await lookupTypeRecord(indexDir, manifest, type, field, maxBytes);
    if (!result.found) {
      return textResult({
        provider,
        type,
        found: false,
        message: `Unknown type "${type}" on provider "${provider}".`,
      });
    }
    if (field && result.fields.length === 0 && result.enumValues.length === 0) {
      return textResult({
        provider,
        type,
        field,
        found: false,
        message: `No field or enum value named "${field}" on type "${type}".`,
      });
    }
    return textResult({ provider, type, ...result });
  }

  const rootResult = await lookupRootEntryPoints(indexDir, manifest, field, maxBytes);
  if (field && rootResult.entryPoints.length === 0) {
    return textResult({
      provider,
      field,
      found: false,
      message: `No root entry point named "${field}" on provider "${provider}".`,
    });
  }
  return textResult({ provider, found: true, ...rootResult });
}

// ---------------------------------------------------------------------------
// McpExtensions wiring
// ---------------------------------------------------------------------------

/** Builds the schema-lookup tool's `McpExtensions` contribution. */
export function createSchemaLookupMcpExtensions(deps: SchemaLookupToolDeps = {}): McpExtensions {
  return {
    tools: [SCHEMA_LOOKUP_TOOL_SCHEMA],
    handleTool: (ctx, name, args) => {
      if (name !== SCHEMA_LOOKUP_TOOL_NAME) throw new Error(`Unknown tool: ${name}`);
      return handleSchemaLookup(deps, ctx, args);
    },
  };
}

/**
 * Composes the schema-lookup tool's extension with a host-supplied one
 * (which may already include the sandbox tool's own composition), so
 * neither registration replaces the other — both contribute tools to the
 * same `list_tools`/`call` surface, and `handleTool` dispatches to whichever
 * extension owns the requested name. Mirrors `withSandboxTool`.
 */
export function withSchemaLookupTool(deps: SchemaLookupToolDeps, base?: McpExtensions): McpExtensions {
  const schemaLookup = createSchemaLookupMcpExtensions(deps);
  if (!base) return schemaLookup;

  const schemaLookupNames = new Set(schemaLookup.tools?.map((tool) => tool.name) ?? []);
  return {
    ...base,
    tools: [...(base.tools ?? []), ...(schemaLookup.tools ?? [])],
    handleTool: (ctx, name, args) => {
      if (schemaLookupNames.has(name)) return schemaLookup.handleTool!(ctx, name, args);
      if (!base.handleTool) throw new Error(`Unknown tool: ${name}`);
      return base.handleTool(ctx, name, args);
    },
  };
}
