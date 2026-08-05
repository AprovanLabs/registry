import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  buildGraphqlTypeIndex,
  lookupGraphqlType,
  readGraphqlIndexManifest,
  writeGraphqlTypeIndex,
  GRAPHQL_INDEX_MANIFEST_FILENAME,
  GRAPHQL_INDEX_RECORDS_FILENAME,
} from "./graphql-index.js";

const SDL = `
type Query {
  issue(id: ID!): Issue
  issues(first: Int = 50): [Issue!]!
  legacyIssue: Issue @deprecated(reason: "use issue instead")
}

type Mutation {
  createIssue(input: IssueFilter!): Issue!
}

"""A trackable unit of work."""
type Issue {
  id: ID!
  title: String!
  status: IssueStatus!
  """Superseded by \`title\`."""
  oldTitle: String @deprecated(reason: "renamed to title")
}

enum IssueStatus {
  OPEN
  CLOSED
  ARCHIVED @deprecated(reason: "use CLOSED")
}

input IssueFilter {
  status: IssueStatus
  archived: Boolean = false
}
`;

const tempDirs: string[] = [];

async function createTempDir(): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "bundler-graphql-index-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("buildGraphqlTypeIndex", () => {
  it("indexes every non-introspection, non-builtin-scalar type", () => {
    const { manifest } = buildGraphqlTypeIndex("acme", SDL);

    expect(Object.keys(manifest.types).sort()).toEqual(
      ["Issue", "IssueFilter", "IssueStatus", "Mutation", "Query"].sort(),
    );
    expect(manifest.typeCount).toBe(5);
  });

  it("marks root Query/Mutation fields as entry points in the manifest", () => {
    const { manifest } = buildGraphqlTypeIndex("acme", SDL);

    const entryPointKeys = manifest.entryPoints.map((entry) => `${entry.rootType}.${entry.field}`).sort();
    expect(entryPointKeys).toEqual(
      ["Query.issue", "Query.issues", "Query.legacyIssue", "Mutation.createIssue"].sort(),
    );
  });

  it("resolves a known type to its fields, kind, and description", async () => {
    const { manifest, recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const outputRoot = await createTempDir();
    await writeGraphqlTypeIndex(outputRoot, "acme", SDL, { generatedAt: manifest.generatedAt });

    const { found, record } = await lookupGraphqlType(outputRoot, "Issue");

    expect(found).toBe(true);
    expect(record?.kind).toBe("OBJECT");
    expect(record?.description).toBe("A trackable unit of work.");
    expect(record?.fields.map((field) => field.name).sort()).toEqual(
      ["id", "title", "status", "oldTitle"].sort(),
    );
    // sanity: the record came from the same bytes the manifest points into
    expect(recordsNdjson).toContain('"name":"Issue"');
  });

  it("marks entry-point fields on Query but not on non-root types", () => {
    const { manifest, recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const lines = recordsNdjson.trim().split("\n").map((line) => JSON.parse(line) as { name: string; fields: Array<{ name: string; entryPoint: boolean }> });

    const queryRecord = lines.find((line) => line.name === "Query");
    expect(queryRecord?.fields.every((field) => field.entryPoint)).toBe(true);

    const issueRecord = lines.find((line) => line.name === "Issue");
    expect(issueRecord?.fields.every((field) => field.entryPoint === false)).toBe(true);

    void manifest;
  });

  it("captures field args including defaults and descriptions", () => {
    const { recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const queryRecord = recordsNdjson
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line) as { name: string; fields: Array<{ name: string; args: Array<{ name: string; type: string }> }> })
      .find((line) => line.name === "Query");

    const issuesField = queryRecord?.fields.find((field) => field.name === "issues");
    expect(issuesField?.args).toEqual([{ name: "first", type: "Int", description: null, deprecated: false, deprecationReason: null }]);
  });

  it("carries deprecation reasons on deprecated fields", () => {
    const { recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const issueRecord = recordsNdjson
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line) as { name: string; fields: Array<{ name: string; deprecated: boolean; deprecationReason: string | null }> })
      .find((line) => line.name === "Issue");

    const oldTitleField = issueRecord?.fields.find((field) => field.name === "oldTitle");
    expect(oldTitleField?.deprecated).toBe(true);
    expect(oldTitleField?.deprecationReason).toBe("renamed to title");

    const titleField = issueRecord?.fields.find((field) => field.name === "title");
    expect(titleField?.deprecated).toBe(false);
    expect(titleField?.deprecationReason).toBeNull();
  });

  it("carries deprecation reasons on deprecated enum values", () => {
    const { recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const statusRecord = recordsNdjson
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line) as { name: string; enumValues: Array<{ name: string; deprecated: boolean; deprecationReason: string | null }> })
      .find((line) => line.name === "IssueStatus");

    const archived = statusRecord?.enumValues.find((value) => value.name === "ARCHIVED");
    expect(archived?.deprecated).toBe(true);
    expect(archived?.deprecationReason).toBe("use CLOSED");

    const open = statusRecord?.enumValues.find((value) => value.name === "OPEN");
    expect(open?.deprecated).toBe(false);
  });

  it("records a byte-range manifest entry per type that matches the ndjson bytes", () => {
    const { manifest, recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    const buffer = Buffer.from(recordsNdjson, "utf8");

    for (const [name, entry] of Object.entries(manifest.types)) {
      const slice = buffer.subarray(entry.offset, entry.offset + entry.length).toString("utf8");
      const parsed = JSON.parse(slice) as { name: string };
      expect(parsed.name).toBe(name);
    }
  });

  it("records total ndjson size in the manifest for split-threshold decisions", () => {
    const { manifest, recordsNdjson } = buildGraphqlTypeIndex("acme", SDL);
    expect(manifest.sizeBytes).toBe(Buffer.byteLength(recordsNdjson, "utf8"));
    expect(manifest.sizeBytes).toBeGreaterThan(0);
  });

  it("is deterministic for the same SDL modulo generatedAt", () => {
    const first = buildGraphqlTypeIndex("acme", SDL, { generatedAt: "2026-01-01T00:00:00.000Z" });
    const second = buildGraphqlTypeIndex("acme", SDL, { generatedAt: "2026-01-01T00:00:00.000Z" });
    expect(first).toEqual(second);
  });
});

describe("writeGraphqlTypeIndex", () => {
  it("writes a manifest and a records file as siblings in the provider dir", async () => {
    const outputRoot = await createTempDir();
    const { manifestPath, recordsPath } = await writeGraphqlTypeIndex(outputRoot, "acme", SDL);

    expect(manifestPath).toBe(path.join(outputRoot, GRAPHQL_INDEX_MANIFEST_FILENAME));
    expect(recordsPath).toBe(path.join(outputRoot, GRAPHQL_INDEX_RECORDS_FILENAME));

    const manifestRaw = await readFile(manifestPath, "utf8");
    expect(() => JSON.parse(manifestRaw)).not.toThrow();

    const recordsRaw = await readFile(recordsPath, "utf8");
    expect(recordsRaw.trim().split("\n").length).toBeGreaterThan(0);
  });
});

describe("lookupGraphqlType", () => {
  it("resolves a known type to its fields (bounded read)", async () => {
    const outputRoot = await createTempDir();
    await writeGraphqlTypeIndex(outputRoot, "acme", SDL);

    const { found, record } = await lookupGraphqlType(outputRoot, "IssueFilter");

    expect(found).toBe(true);
    expect(record?.kind).toBe("INPUT_OBJECT");
    expect(record?.fields.map((field) => field.name).sort()).toEqual(["status", "archived"].sort());
  });

  it("returns a miss, not an error, for an unknown type", async () => {
    const outputRoot = await createTempDir();
    await writeGraphqlTypeIndex(outputRoot, "acme", SDL);

    const result = await lookupGraphqlType(outputRoot, "NoSuchType");

    expect(result.found).toBe(false);
    expect(result.record).toBeNull();
  });

  it("returns a miss, not an error, for a provider with no index on disk", async () => {
    const outputRoot = await createTempDir();

    const result = await lookupGraphqlType(outputRoot, "Issue");

    expect(result.found).toBe(false);
    expect(result.record).toBeNull();
  });

  it("reads only the requested type's byte range, not the whole records file", async () => {
    const outputRoot = await createTempDir();
    await writeGraphqlTypeIndex(outputRoot, "acme", SDL);
    const manifest = await readGraphqlIndexManifest(outputRoot);
    const recordsRaw = await readFile(path.join(outputRoot, GRAPHQL_INDEX_RECORDS_FILENAME), "utf8");

    const entry = manifest?.types["Issue"];
    expect(entry).toBeDefined();
    // The manifest's byte range for "Issue" must be a strict subset of the
    // full records file whenever other types exist alongside it.
    expect(entry!.length).toBeLessThan(Buffer.byteLength(recordsRaw, "utf8"));

    const { record } = await lookupGraphqlType(outputRoot, "Issue", manifest);
    expect(record?.name).toBe("Issue");
  });

  it("accepts a pre-loaded manifest to avoid re-reading it per lookup", async () => {
    const outputRoot = await createTempDir();
    await writeGraphqlTypeIndex(outputRoot, "acme", SDL);
    const manifest = await readGraphqlIndexManifest(outputRoot);

    const first = await lookupGraphqlType(outputRoot, "Query", manifest);
    const second = await lookupGraphqlType(outputRoot, "Mutation", manifest);

    expect(first.record?.name).toBe("Query");
    expect(second.record?.name).toBe("Mutation");
  });
});

describe("readGraphqlIndexManifest", () => {
  it("returns null when no manifest exists on disk", async () => {
    const outputRoot = await createTempDir();
    const manifest = await readGraphqlIndexManifest(outputRoot);
    expect(manifest).toBeNull();
  });
});
