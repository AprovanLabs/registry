import { mkdir, open, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  buildSchema,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isIntrospectionType,
  isObjectType,
  isScalarType,
  isSpecifiedScalarType,
  isUnionType,
} from "graphql";
import type {
  GraphQLArgument,
  GraphQLField,
  GraphQLInputField,
  GraphQLNamedType,
  GraphQLObjectType,
} from "graphql";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GraphqlTypeKind = "OBJECT" | "INTERFACE" | "UNION" | "ENUM" | "INPUT_OBJECT" | "SCALAR";

export type GraphqlFieldArg = {
  name: string;
  type: string;
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
};

export type GraphqlIndexField = {
  name: string;
  type: string;
  args: GraphqlFieldArg[];
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
  /** True when this field hangs off the root Query/Mutation/Subscription type. */
  entryPoint: boolean;
};

export type GraphqlEnumValue = {
  name: string;
  description: string | null;
  deprecated: boolean;
  deprecationReason: string | null;
};

export type GraphqlTypeRecord = {
  name: string;
  kind: GraphqlTypeKind;
  description: string | null;
  /** Populated for OBJECT, INTERFACE, and INPUT_OBJECT; empty otherwise. */
  fields: GraphqlIndexField[];
  /** Populated for ENUM only. */
  enumValues: GraphqlEnumValue[];
};

export type GraphqlIndexEntryPoint = {
  rootType: "Query" | "Mutation" | "Subscription";
  field: string;
};

export type GraphqlIndexManifestTypeEntry = {
  kind: GraphqlTypeKind;
  fieldCount: number;
  /** Byte offset of this type's record within the ndjson records file. */
  offset: number;
  /** Byte length of this type's record line (including trailing newline). */
  length: number;
};

export type GraphqlTypeIndexManifest = {
  provider: string;
  generatedAt: string;
  /** Number of non-introspection, non-builtin-scalar types indexed. */
  typeCount: number;
  /** Total byte size of the ndjson records artifact — the number that tells
   * you when the artifact needs splitting (tasks.md 2.3). */
  sizeBytes: number;
  /** Root Query/Mutation/Subscription fields — the entry points into the
   * schema, listed here so "no type given" lookups never require scanning
   * every type record. */
  entryPoints: GraphqlIndexEntryPoint[];
  /** Type name -> where to find its full record. Small (one entry per type,
   * no field bodies), so reading it never costs what reading the full
   * records file would. */
  types: Record<string, GraphqlIndexManifestTypeEntry>;
};

export type GraphqlTypeIndexArtifact = {
  manifest: GraphqlTypeIndexManifest;
  /** Newline-delimited JSON: one `GraphqlTypeRecord` per line, in the byte
   * order the manifest's offsets describe. */
  recordsNdjson: string;
};

export const GRAPHQL_INDEX_MANIFEST_FILENAME = "graphql-index.json";
export const GRAPHQL_INDEX_RECORDS_FILENAME = "graphql-index.ndjson";

// ---------------------------------------------------------------------------
// Building the index from SDL
// ---------------------------------------------------------------------------

function getGraphqlTypeKind(type: GraphQLNamedType): GraphqlTypeKind {
  const typeName = type.name;
  if (isObjectType(type)) return "OBJECT";
  if (isInterfaceType(type)) return "INTERFACE";
  if (isUnionType(type)) return "UNION";
  if (isEnumType(type)) return "ENUM";
  if (isInputObjectType(type)) return "INPUT_OBJECT";
  if (isScalarType(type)) return "SCALAR";
  throw new Error(`Unsupported GraphQL type kind for "${typeName}".`);
}

function buildArgRecord(arg: GraphQLArgument): GraphqlFieldArg {
  return {
    name: arg.name,
    type: arg.type.toString(),
    description: arg.description ?? null,
    deprecated: Boolean(arg.deprecationReason),
    deprecationReason: arg.deprecationReason ?? null,
  };
}

function buildFieldRecord(
  field: GraphQLField<unknown, unknown> | GraphQLInputField,
  entryPoint: boolean,
): GraphqlIndexField {
  const args = "args" in field ? field.args.map(buildArgRecord) : [];
  return {
    name: field.name,
    type: field.type.toString(),
    args,
    description: field.description ?? null,
    deprecated: Boolean(field.deprecationReason),
    deprecationReason: field.deprecationReason ?? null,
    entryPoint,
  };
}

function buildTypeRecord(type: GraphQLNamedType, entryPointFieldNames: ReadonlySet<string> | undefined): GraphqlTypeRecord {
  const kind = getGraphqlTypeKind(type);
  const fields: GraphqlIndexField[] = [];
  const enumValues: GraphqlEnumValue[] = [];

  if (isObjectType(type) || isInterfaceType(type) || isInputObjectType(type)) {
    for (const field of Object.values(type.getFields())) {
      fields.push(buildFieldRecord(field, entryPointFieldNames?.has(field.name) ?? false));
    }
  } else if (isEnumType(type)) {
    for (const value of type.getValues()) {
      enumValues.push({
        name: value.name,
        description: value.description ?? null,
        deprecated: Boolean(value.deprecationReason),
        deprecationReason: value.deprecationReason ?? null,
      });
    }
  }

  return {
    name: type.name,
    kind,
    description: type.description ?? null,
    fields,
    enumValues,
  };
}

function collectRootEntryPoints(
  schema: ReturnType<typeof buildSchema>,
): { entryPoints: GraphqlIndexEntryPoint[]; fieldNamesByTypeName: Map<string, Set<string>> } {
  const roots: Array<{ type: GraphQLObjectType | null | undefined; rootType: GraphqlIndexEntryPoint["rootType"] }> = [
    { type: schema.getQueryType(), rootType: "Query" },
    { type: schema.getMutationType(), rootType: "Mutation" },
    { type: schema.getSubscriptionType(), rootType: "Subscription" },
  ];

  const entryPoints: GraphqlIndexEntryPoint[] = [];
  const fieldNamesByTypeName = new Map<string, Set<string>>();

  for (const { type, rootType } of roots) {
    if (!type) continue;

    const fieldNames = new Set(Object.keys(type.getFields()));
    fieldNamesByTypeName.set(type.name, fieldNames);

    for (const field of fieldNames) {
      entryPoints.push({ rootType, field });
    }
  }

  return { entryPoints, fieldNamesByTypeName };
}

/**
 * Builds a queryable type index from SDL: type name -> kind, fields, field
 * args, deprecation, description (tasks.md 2.1). Root Query/Mutation/
 * Subscription fields are marked `entryPoint: true`. Pure — no filesystem
 * access; callers write the result with `writeGraphqlTypeIndex`.
 */
export function buildGraphqlTypeIndex(
  provider: string,
  sdl: string,
  options?: { generatedAt?: string },
): GraphqlTypeIndexArtifact {
  const schema = buildSchema(sdl, { assumeValidSDL: true });
  const generatedAt = options?.generatedAt ?? new Date().toISOString();
  const { entryPoints, fieldNamesByTypeName } = collectRootEntryPoints(schema);

  const typeMap = schema.getTypeMap();
  const typeNames = Object.keys(typeMap)
    .filter((name) => {
      const type = typeMap[name];
      return type !== undefined && !isIntrospectionType(type) && !isSpecifiedScalarType(type);
    })
    .sort();

  const types: Record<string, GraphqlIndexManifestTypeEntry> = {};
  const recordLines: string[] = [];
  let offset = 0;

  for (const name of typeNames) {
    const type = typeMap[name];
    if (!type) continue;

    const record = buildTypeRecord(type, fieldNamesByTypeName.get(name));
    const line = `${JSON.stringify(record)}\n`;
    const length = Buffer.byteLength(line, "utf8");

    types[name] = { kind: record.kind, fieldCount: record.fields.length, offset, length };
    recordLines.push(line);
    offset += length;
  }

  const recordsNdjson = recordLines.join("");

  const manifest: GraphqlTypeIndexManifest = {
    provider,
    generatedAt,
    typeCount: typeNames.length,
    sizeBytes: Buffer.byteLength(recordsNdjson, "utf8"),
    entryPoints,
    types,
  };

  return { manifest, recordsNdjson };
}

// ---------------------------------------------------------------------------
// Writing the artifact
// ---------------------------------------------------------------------------

export type WriteGraphqlTypeIndexResult = {
  manifestPath: string;
  recordsPath: string;
  manifest: GraphqlTypeIndexManifest;
};

/**
 * Writes the type index as two sibling files next to `schema.graphql`:
 * a small manifest (`graphql-index.json`, type name -> kind/byte-range) and
 * the bulk records file (`graphql-index.ndjson`, one JSON record per type).
 * Splitting them this way is what makes a single-type lookup a bounded read
 * (tasks.md 2.2) — see `lookupGraphqlType`.
 */
export async function writeGraphqlTypeIndex(
  providerDir: string,
  provider: string,
  sdl: string,
  options?: { generatedAt?: string },
): Promise<WriteGraphqlTypeIndexResult> {
  const { manifest, recordsNdjson } = buildGraphqlTypeIndex(provider, sdl, options);
  const manifestPath = path.join(providerDir, GRAPHQL_INDEX_MANIFEST_FILENAME);
  const recordsPath = path.join(providerDir, GRAPHQL_INDEX_RECORDS_FILENAME);

  await mkdir(providerDir, { recursive: true });
  await Promise.all([
    writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
    writeFile(recordsPath, recordsNdjson, "utf8"),
  ]);

  return { manifestPath, recordsPath, manifest };
}

// ---------------------------------------------------------------------------
// Bounded-read lookup
// ---------------------------------------------------------------------------

function isEnoent(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT";
}

/**
 * Reads the manifest only — not the records file. Callers that need the
 * root entry-point list (or the full type/kind listing) never have to touch
 * the bulk ndjson artifact for that.
 */
export async function readGraphqlIndexManifest(providerDir: string): Promise<GraphqlTypeIndexManifest | null> {
  try {
    const raw = await readFile(path.join(providerDir, GRAPHQL_INDEX_MANIFEST_FILENAME), "utf8");
    return JSON.parse(raw) as GraphqlTypeIndexManifest;
  } catch (error: unknown) {
    if (isEnoent(error)) return null;
    throw error;
  }
}

export type GraphqlTypeLookupResult = { found: true; record: GraphqlTypeRecord } | { found: false; record: null };

/**
 * Looks up one type by name. Costs a bounded read regardless of schema size
 * (tasks.md acceptance criterion): the manifest gives the exact byte
 * offset/length of that type's record, and this reads exactly that slice of
 * `graphql-index.ndjson` — never the whole records file, let alone the SDL.
 * An unknown provider (no manifest) or unknown type is a miss (`found:
 * false`), never a thrown error.
 */
export async function lookupGraphqlType(
  providerDir: string,
  typeName: string,
  manifest?: GraphqlTypeIndexManifest | null,
): Promise<GraphqlTypeLookupResult> {
  const resolvedManifest = manifest === undefined ? await readGraphqlIndexManifest(providerDir) : manifest;

  if (!resolvedManifest) {
    return { found: false, record: null };
  }

  const entry = resolvedManifest.types[typeName];
  if (!entry) {
    return { found: false, record: null };
  }

  const recordsPath = path.join(providerDir, GRAPHQL_INDEX_RECORDS_FILENAME);
  const handle = await open(recordsPath, "r");

  try {
    const buffer = Buffer.alloc(entry.length);
    await handle.read(buffer, 0, entry.length, entry.offset);
    const record = JSON.parse(buffer.toString("utf8")) as GraphqlTypeRecord;
    return { found: true, record };
  } finally {
    await handle.close();
  }
}
