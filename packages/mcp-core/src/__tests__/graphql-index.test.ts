import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  GRAPHQL_INDEX_MANIFEST_FILENAME,
  GRAPHQL_INDEX_RECORDS_FILENAME,
  lookupGraphqlType,
  readGraphqlIndexManifest,
  resolveProviderGraphqlIndexDir,
  resolveProviderPackageDir,
  type GraphqlTypeIndexManifest,
} from "../graphql-index.js";

// ---------------------------------------------------------------------------
// resolveProviderPackageDir / resolveProviderGraphqlIndexDir
//
// These exercise real, shipped `@utdk/linear` package resolution — the same
// package @utdk/mcp-core already declares as an optional dependency for
// `loadProviders` integration tests (loader.test.ts) — rather than a
// synthetic fixture, so a break in the resolution contract shows up here.
// ---------------------------------------------------------------------------

describe("resolveProviderPackageDir", () => {
  it("resolves the linear provider package directory (integration)", () => {
    const dir = resolveProviderPackageDir("linear");
    expect(dir).not.toBeNull();
    expect(dir).toMatch(/linear$/);
  });

  it("returns null for an unknown provider, never throws", () => {
    expect(resolveProviderPackageDir("__totally_not_a_provider__")).toBeNull();
  });
});

describe("resolveProviderGraphqlIndexDir", () => {
  it("resolves to the package root when no version is given", () => {
    const packageDir = resolveProviderPackageDir("linear");
    expect(resolveProviderGraphqlIndexDir("linear")).toBe(packageDir);
  });

  it("resolves to a schemas/<version> subdirectory when a version is given", () => {
    const packageDir = resolveProviderPackageDir("linear");
    expect(resolveProviderGraphqlIndexDir("linear", "2024-10")).toBe(
      path.join(packageDir ?? "", "schemas", "2024-10"),
    );
  });

  it("returns null for an unknown provider regardless of version", () => {
    expect(resolveProviderGraphqlIndexDir("__totally_not_a_provider__", "2024-10")).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// readGraphqlIndexManifest / lookupGraphqlType — real linear artifact
//
// Linear ships a real graphql-index.json/.ndjson pair (graphql-schema-
// surface §2, seeded for exactly this reason). Reading it here proves the
// two packages' shapes actually agree, not just that they compile against
// the same hand-written type.
// ---------------------------------------------------------------------------

describe("readGraphqlIndexManifest (linear integration)", () => {
  it("reads the shipped manifest and reports a large, known type count", async () => {
    const dir = resolveProviderPackageDir("linear");
    expect(dir).not.toBeNull();
    const manifest = await readGraphqlIndexManifest(dir as string);

    expect(manifest).not.toBeNull();
    expect(manifest?.provider).toBe("linear");
    expect(manifest?.typeCount).toBeGreaterThan(1000);
    expect(manifest?.entryPoints.length).toBeGreaterThan(0);
    expect(manifest?.entryPoints.some((entry) => entry.rootType === "Query")).toBe(true);
  });
});

describe("lookupGraphqlType (linear integration)", () => {
  it("resolves a known large type (Query) to its fields via a bounded read", async () => {
    const dir = resolveProviderPackageDir("linear") as string;
    const { found, record } = await lookupGraphqlType(dir, "Query");

    expect(found).toBe(true);
    expect(record?.kind).toBe("OBJECT");
    expect(record?.fields.length).toBeGreaterThan(50);
    expect(record?.fields.every((field) => field.entryPoint)).toBe(true);
  });

  it("resolves a known small type to exactly its fields", async () => {
    const dir = resolveProviderPackageDir("linear") as string;
    const { found, record } = await lookupGraphqlType(dir, "AccessKeyReleaseStage");

    expect(found).toBe(true);
    expect(record?.fields.length).toBe(1);
  });

  it("returns a miss, not an error, for an unknown type", async () => {
    const dir = resolveProviderPackageDir("linear") as string;
    const result = await lookupGraphqlType(dir, "TotallyNotAGraphqlType");

    expect(result.found).toBe(false);
    expect(result.record).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Hand-written fixtures — deterministic byte-range/miss behavior, isolated
// from any real provider package's data.
// ---------------------------------------------------------------------------

const tempDirs: string[] = [];

async function createTempDir(): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "mcp-core-graphql-index-"));
  tempDirs.push(dir);
  return dir;
}

async function writeFixtureIndex(dir: string): Promise<GraphqlTypeIndexManifest> {
  const records = [
    { name: "Widget", kind: "OBJECT", description: null, fields: [{ name: "id", type: "ID!", args: [], description: null, deprecated: false, deprecationReason: null, entryPoint: false }], enumValues: [] },
    { name: "Query", kind: "OBJECT", description: null, fields: [{ name: "widget", type: "Widget", args: [], description: null, deprecated: false, deprecationReason: null, entryPoint: true }], enumValues: [] },
  ];
  const lines = records.map((record) => `${JSON.stringify(record)}\n`);
  let offset = 0;
  const types: GraphqlTypeIndexManifest["types"] = {};
  for (const [index, record] of records.entries()) {
    const line = lines[index] as string;
    const length = Buffer.byteLength(line, "utf8");
    types[record.name] = { kind: record.kind as never, fieldCount: record.fields.length, offset, length };
    offset += length;
  }
  const recordsNdjson = lines.join("");
  const manifest: GraphqlTypeIndexManifest = {
    provider: "acme",
    generatedAt: "2026-01-01T00:00:00.000Z",
    typeCount: records.length,
    sizeBytes: Buffer.byteLength(recordsNdjson, "utf8"),
    entryPoints: [{ rootType: "Query", field: "widget" }],
    types,
  };
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, GRAPHQL_INDEX_MANIFEST_FILENAME), JSON.stringify(manifest), "utf8");
  await writeFile(path.join(dir, GRAPHQL_INDEX_RECORDS_FILENAME), recordsNdjson, "utf8");
  return manifest;
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("readGraphqlIndexManifest (fixture)", () => {
  it("returns null when no manifest exists on disk", async () => {
    const dir = await createTempDir();
    expect(await readGraphqlIndexManifest(dir)).toBeNull();
  });

  it("reads a hand-written manifest back verbatim", async () => {
    const dir = await createTempDir();
    const written = await writeFixtureIndex(dir);
    expect(await readGraphqlIndexManifest(dir)).toEqual(written);
  });
});

describe("lookupGraphqlType (fixture)", () => {
  it("reads only the requested type's byte range", async () => {
    const dir = await createTempDir();
    await writeFixtureIndex(dir);

    const { found, record } = await lookupGraphqlType(dir, "Widget");

    expect(found).toBe(true);
    expect(record?.name).toBe("Widget");
    expect(record?.fields.map((field) => field.name)).toEqual(["id"]);
  });

  it("accepts a pre-loaded manifest to avoid re-reading it per lookup", async () => {
    const dir = await createTempDir();
    const manifest = await writeFixtureIndex(dir);

    const first = await lookupGraphqlType(dir, "Query", manifest);
    const second = await lookupGraphqlType(dir, "Widget", manifest);

    expect(first.record?.name).toBe("Query");
    expect(second.record?.name).toBe("Widget");
  });

  it("returns a miss, not an error, for a provider with no index on disk", async () => {
    const dir = await createTempDir();
    const result = await lookupGraphqlType(dir, "Widget");

    expect(result.found).toBe(false);
    expect(result.record).toBeNull();
  });
});
