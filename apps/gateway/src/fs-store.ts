import { createHash } from "node:crypto";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join } from "node:path";
import {
  CreateBucketCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { BatchWriteCommand, GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";
import type Database from "better-sqlite3";

/**
 * Workspace filesystem (WFS) — the gateway's S3-like, prefix-partitioned
 * file tree, one namespace per workspace. Everything the platform persists
 * for a workspace lives here as ordinary paths:
 *
 *   widgets/<name>/…       raw widget sources + manifest
 *   skills/<name>/SKILL.md Open-Knowledge-Format docs (frontmatter index)
 *   data/…                 ETL output from scheduled script runs
 *
 * Files are content-hash versioned: a write appends a `(path, hash)` version
 * and reads default to the newest, so history is free and writes are
 * idempotent. Prefix listing doubles as readdir.
 *
 * Two backends behind {@link IFsStore} (selected by `STORE_BACKEND`, same
 * switch as the credential/audit stores):
 *
 * - **SQLite** (local dev): one table in the gateway db.
 * - **S3 + DynamoDB** (Lambda, or local compose with MinIO/dynamodb-local):
 *   content-addressed blobs in S3 (`blobs/<workspace>/<hash>`), pointer +
 *   version index items in the `FsFiles` table. Large/binary uploads go
 *   straight to S3 via presigned PUT (`createUpload`) and are registered
 *   with `completeUpload`.
 */

const loadSqlite = (): typeof import("better-sqlite3") => {
  const req =
    typeof require === "function" ? require : createRequire(import.meta.url);
  return req("better-sqlite3");
};

export interface FsEntry {
  path: string;
  hash: string;
  mimeType: string;
  size: number;
  updatedAt: string;
}

export interface FsFile extends FsEntry {
  content: string;
}

export interface FsUploadTicket {
  /** Presigned PUT URL for the content blob. */
  url: string;
  /** Headers the client must send with the PUT. */
  headers: Record<string, string>;
  /** Seconds until the URL expires. */
  expiresIn: number;
}

export interface IFsStore {
  /** Latest version of every file under `prefix` (metadata only). */
  list(workspaceId: string, prefix?: string): Promise<FsEntry[]>;
  /**
   * Every stored version of `path`, newest first (updatedAt desc). The first
   * entry's hash is the current {@link read} hash. Empty when `path` has none.
   */
  listVersions(workspaceId: string, path: string): Promise<FsEntry[]>;
  read(workspaceId: string, path: string, hash?: string): Promise<FsFile | undefined>;
  write(workspaceId: string, path: string, content: string, mimeType?: string): Promise<FsFile>;
  /** Remove a file (all versions). Returns whether anything was deleted. */
  remove(workspaceId: string, path: string): Promise<boolean>;
  /** Remove an entire subtree. Returns the number of files removed. */
  removePrefix(workspaceId: string, prefix: string): Promise<number>;
  /**
   * Presigned direct-to-S3 upload for a content blob (S3 backend only —
   * undefined on backends without object storage). The client uploads the
   * blob, then registers the path with {@link completeUpload}.
   */
  createUpload?(
    workspaceId: string,
    hash: string,
    mimeType: string,
  ): Promise<FsUploadTicket>;
  /** Register an uploaded blob under a path; verifies the blob exists. */
  completeUpload?(
    workspaceId: string,
    path: string,
    hash: string,
    mimeType: string,
  ): Promise<FsEntry | undefined>;
}

/** Normalize to `a/b/c` form; rejects traversal and empty segments. */
export function normalizeFsPath(raw: string): string | null {
  const path = raw.replace(/^\/+|\/+$/g, "");
  if (!path) return null;
  const segments = path.split("/");
  if (segments.some((s) => !s || s === "." || s === "..")) return null;
  return segments.join("/");
}

/**
 * Service-internal paths (`.services/**`): workflow/app/webhook
 * registrations, hook tokens and HMAC secrets, keyvalue state. These are
 * managed exclusively through their tool namespaces (workflows.*, apps.*,
 * webhooks.*, keyvalue.*) — the raw FS surfaces must never expose them, or
 * any member could read webhook signing secrets or tamper with
 * registrations.
 */
export function isServicePath(path: string): boolean {
  return path === ".services" || path.startsWith(".services/");
}

const inPrefix = (path: string, prefix: string): boolean =>
  prefix === "" || path === prefix || path.startsWith(`${prefix}/`);

// ---------------------------------------------------------------------------
// SQLite backend (local dev)
// ---------------------------------------------------------------------------

export class FsStoreSqlite implements IFsStore {
  private readonly database: Database.Database;

  constructor(
    directory = process.env["GATEWAY_DATA_DIR"] ?? join(homedir(), ".aprovan"),
  ) {
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    const SqliteDatabase = loadSqlite();
    this.database = new SqliteDatabase(join(directory, "gateway.db"));
    this.database.exec(`
      CREATE TABLE IF NOT EXISTS fs_files (
        workspace_id TEXT NOT NULL,
        path TEXT NOT NULL,
        hash TEXT NOT NULL,
        content TEXT NOT NULL,
        mime_type TEXT NOT NULL,
        size INTEGER NOT NULL,
        updated_at TEXT NOT NULL,
        PRIMARY KEY (workspace_id, path, hash)
      );
      CREATE INDEX IF NOT EXISTS fs_files_latest
      ON fs_files(workspace_id, path, updated_at DESC);
    `);
  }

  async list(workspaceId: string, prefix = ""): Promise<FsEntry[]> {
    // SQLite resolves bare columns alongside MAX() to the max row.
    const rows = this.database
      .prepare(
        `SELECT path, hash, mime_type, size, MAX(updated_at) AS updated_at
         FROM fs_files
         WHERE workspace_id = ? AND (? = '' OR path = ? OR path LIKE ? ESCAPE '\\')
         GROUP BY path ORDER BY path`,
      )
      .all(
        workspaceId,
        prefix,
        prefix,
        `${prefix.replace(/[%_]/g, (c) => `\\${c}`)}/%`,
      ) as Record<string, unknown>[];
    return rows.map((row) => this.entry(row));
  }

  async listVersions(workspaceId: string, path: string): Promise<FsEntry[]> {
    const rows = this.database
      .prepare(
        // rowid tiebreak keeps newest-first stable when two versions share an
        // ISO-ms updated_at, matching read()'s latest-row selection.
        `SELECT path, hash, mime_type, size, updated_at FROM fs_files
         WHERE workspace_id = ? AND path = ?
         ORDER BY updated_at DESC, rowid DESC`,
      )
      .all(workspaceId, path) as Record<string, unknown>[];
    return rows.map((row) => this.entry(row));
  }

  async read(workspaceId: string, path: string, hash?: string): Promise<FsFile | undefined> {
    const row = hash
      ? this.database
          .prepare(
            `SELECT path, hash, content, mime_type, size, updated_at FROM fs_files
             WHERE workspace_id = ? AND path = ? AND hash = ?`,
          )
          .get(workspaceId, path, hash)
      : this.database
          .prepare(
            // rowid breaks updated_at ties so the most-recently-written row
            // always wins — two writes can share an ISO-ms timestamp.
            `SELECT path, hash, content, mime_type, size, updated_at FROM fs_files
             WHERE workspace_id = ? AND path = ?
             ORDER BY updated_at DESC, rowid DESC LIMIT 1`,
          )
          .get(workspaceId, path);
    if (!row) return undefined;
    const record = row as Record<string, unknown>;
    return { ...this.entry(record), content: String(record["content"]) };
  }

  async write(
    workspaceId: string,
    path: string,
    content: string,
    mimeType = "text/plain",
  ): Promise<FsFile> {
    const hash = createHash("sha256").update(content).digest("hex");
    const size = Buffer.byteLength(content);
    const updatedAt = new Date().toISOString();
    this.database
      .prepare(
        `INSERT OR REPLACE INTO fs_files
         (workspace_id, path, hash, content, mime_type, size, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(workspaceId, path, hash, content, mimeType, size, updatedAt);
    return { path, hash, content, mimeType, size, updatedAt };
  }

  async remove(workspaceId: string, path: string): Promise<boolean> {
    const result = this.database
      .prepare(`DELETE FROM fs_files WHERE workspace_id = ? AND path = ?`)
      .run(workspaceId, path);
    return result.changes > 0;
  }

  async removePrefix(workspaceId: string, prefix: string): Promise<number> {
    const result = this.database
      .prepare(
        `DELETE FROM fs_files
         WHERE workspace_id = ? AND (path = ? OR path LIKE ? ESCAPE '\\')`,
      )
      .run(
        workspaceId,
        prefix,
        `${prefix.replace(/[%_]/g, (c) => `\\${c}`)}/%`,
      );
    return result.changes;
  }

  private entry(row: Record<string, unknown>): FsEntry {
    return {
      path: String(row["path"]),
      hash: String(row["hash"]),
      mimeType: String(row["mime_type"]),
      size: Number(row["size"]),
      updatedAt: String(row["updated_at"]),
    };
  }
}

// ---------------------------------------------------------------------------
// S3 + DynamoDB backend (Lambda / compose)
// ---------------------------------------------------------------------------
//
// Table layout (`FsFiles`, PK `workspaceId`, SK `sk`):
//   sk = `P#<path>`          latest pointer — hash/mimeType/size/updatedAt
//   sk = `V#<path>#<hash>`   version row    — mimeType/size/updatedAt
// Blob layout (bucket `FS_BUCKET`): `blobs/<workspaceId>/<hash>` — content-
// addressed, shared across paths/versions inside a workspace; deletes drop
// index rows only (blobs are cheap and a GC pass can reclaim them later).

const UPLOAD_URL_TTL_SECONDS = 900;

let _s3: S3Client | undefined;

/**
 * Exported so other stores that piggyback on `FS_BUCKET` (records.ts' large-
 * value spill) share the same client/credentials instead of duplicating the
 * MinIO path-style + local-credential wiring.
 */
export function getS3Client(): S3Client {
  if (!_s3) {
    const endpoint = process.env["S3_ENDPOINT"];
    _s3 = new S3Client({
      endpoint,
      region: process.env["AWS_REGION"] ?? "us-east-1",
      // Local object stores (MinIO) need path-style addressing and their
      // root credentials — dedicated vars so the generic AWS_* pair (which
      // dynamodb-local tests set freely) can't break the object store.
      ...(endpoint
        ? {
            forcePathStyle: true,
            credentials: {
              accessKeyId: process.env["FS_S3_ACCESS_KEY"] ?? "minioadmin",
              secretAccessKey: process.env["FS_S3_SECRET_KEY"] ?? "minioadmin",
            },
          }
        : {}),
    });
  }
  return _s3;
}

export function resetS3Client(): void {
  _s3 = undefined;
}

export class FsStoreS3 implements IFsStore {
  private readonly tableName: string;
  private readonly bucket: string;
  private bucketReady: Promise<void> | undefined;

  constructor(options?: { tableName?: string; bucket?: string }) {
    this.tableName = options?.tableName ?? process.env["FS_TABLE"] ?? "FsFiles";
    const bucket = options?.bucket ?? process.env["FS_BUCKET"];
    if (!bucket) {
      throw new Error("FS_BUCKET must be set for the S3 workspace-fs backend");
    }
    this.bucket = bucket;
  }

  /** Auto-create the bucket against local object stores (MinIO). No-op on AWS. */
  private ensureBucket(): Promise<void> {
    this.bucketReady ??= (async () => {
      if (!process.env["S3_ENDPOINT"]) return;
      try {
        await getS3Client().send(new CreateBucketCommand({ Bucket: this.bucket }));
      } catch (err) {
        const name = err instanceof Error ? err.name : "";
        if (name !== "BucketAlreadyOwnedByYou" && name !== "BucketAlreadyExists") throw err;
      }
    })();
    return this.bucketReady;
  }

  private blobKey(workspaceId: string, hash: string): string {
    return `blobs/${workspaceId}/${hash}`;
  }

  async list(workspaceId: string, prefix = ""): Promise<FsEntry[]> {
    const entries: FsEntry[] = [];
    let cursor: Record<string, unknown> | undefined;
    do {
      const page = await getDynamoDocClient().send(
        new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression:
            "workspaceId = :ws AND begins_with(sk, :prefix)",
          ExpressionAttributeValues: {
            ":ws": workspaceId,
            ":prefix": `P#${prefix}`,
          },
          ExclusiveStartKey: cursor,
        }),
      );
      for (const item of page.Items ?? []) {
        const path = String(item["path"]);
        // begins_with over-matches partial segments ("wid" → "widgetsfoo").
        if (!inPrefix(path, prefix)) continue;
        entries.push(this.entry(item));
      }
      cursor = page.LastEvaluatedKey;
    } while (cursor);
    return entries.sort((a, b) => a.path.localeCompare(b.path));
  }

  async listVersions(workspaceId: string, path: string): Promise<FsEntry[]> {
    // The `V#<path>#<hash>` rows are the version index for this exact path.
    const entries: FsEntry[] = [];
    let cursor: Record<string, unknown> | undefined;
    do {
      const page = await getDynamoDocClient().send(
        new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: "workspaceId = :ws AND begins_with(sk, :v)",
          ExpressionAttributeValues: { ":ws": workspaceId, ":v": `V#${path}#` },
          ExclusiveStartKey: cursor,
        }),
      );
      for (const item of page.Items ?? []) entries.push(this.entry(item));
      cursor = page.LastEvaluatedKey;
    } while (cursor);
    return entries.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  async read(workspaceId: string, path: string, hash?: string): Promise<FsFile | undefined> {
    const key = hash ? `V#${path}#${hash}` : `P#${path}`;
    const result = await getDynamoDocClient().send(
      new GetCommand({
        TableName: this.tableName,
        Key: { workspaceId, sk: key },
      }),
    );
    if (!result.Item) return undefined;
    const entry = this.entry(result.Item);
    await this.ensureBucket();
    const blob = await getS3Client().send(
      new GetObjectCommand({
        Bucket: this.bucket,
        Key: this.blobKey(workspaceId, entry.hash),
      }),
    );
    const content = (await blob.Body?.transformToString("utf8")) ?? "";
    return { ...entry, content };
  }

  async write(
    workspaceId: string,
    path: string,
    content: string,
    mimeType = "text/plain",
  ): Promise<FsFile> {
    const hash = createHash("sha256").update(content).digest("hex");
    const size = Buffer.byteLength(content);
    const updatedAt = new Date().toISOString();
    await this.ensureBucket();
    await getS3Client().send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: this.blobKey(workspaceId, hash),
        Body: content,
        ContentType: mimeType,
      }),
    );
    await this.putIndex(workspaceId, path, { hash, mimeType, size, updatedAt });
    return { path, hash, content, mimeType, size, updatedAt };
  }

  private async putIndex(
    workspaceId: string,
    path: string,
    meta: { hash: string; mimeType: string; size: number; updatedAt: string },
  ): Promise<void> {
    const client = getDynamoDocClient();
    const shared = { workspaceId, path, ...meta };
    await Promise.all([
      client.send(
        new PutCommand({
          TableName: this.tableName,
          Item: { ...shared, sk: `P#${path}` },
        }),
      ),
      client.send(
        new PutCommand({
          TableName: this.tableName,
          Item: { ...shared, sk: `V#${path}#${meta.hash}` },
        }),
      ),
    ]);
  }

  async remove(workspaceId: string, path: string): Promise<boolean> {
    const client = getDynamoDocClient();
    const keys: Array<{ workspaceId: string; sk: string }> = [
      { workspaceId, sk: `P#${path}` },
    ];
    // Collect version rows for this exact path.
    let cursor: Record<string, unknown> | undefined;
    do {
      const page = await client.send(
        new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: "workspaceId = :ws AND begins_with(sk, :v)",
          ExpressionAttributeValues: { ":ws": workspaceId, ":v": `V#${path}#` },
          ProjectionExpression: "sk",
          ExclusiveStartKey: cursor,
        }),
      );
      for (const item of page.Items ?? []) {
        keys.push({ workspaceId, sk: String(item["sk"]) });
      }
      cursor = page.LastEvaluatedKey;
    } while (cursor);

    const existing = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { workspaceId, sk: `P#${path}` },
        ProjectionExpression: "sk",
      }),
    );
    if (!existing.Item) return false;

    for (let index = 0; index < keys.length; index += 25) {
      await client.send(
        new BatchWriteCommand({
          RequestItems: {
            [this.tableName]: keys
              .slice(index, index + 25)
              .map((key) => ({ DeleteRequest: { Key: key } })),
          },
        }),
      );
    }
    return true;
  }

  async removePrefix(workspaceId: string, prefix: string): Promise<number> {
    const entries = await this.list(workspaceId, prefix);
    let removed = 0;
    for (const entry of entries) {
      if (await this.remove(workspaceId, entry.path)) removed += 1;
    }
    return removed;
  }

  async createUpload(
    workspaceId: string,
    hash: string,
    mimeType: string,
  ): Promise<FsUploadTicket> {
    await this.ensureBucket();
    const url = await getSignedUrl(
      getS3Client(),
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: this.blobKey(workspaceId, hash),
        ContentType: mimeType,
      }),
      { expiresIn: UPLOAD_URL_TTL_SECONDS },
    );
    return {
      url,
      headers: { "Content-Type": mimeType },
      expiresIn: UPLOAD_URL_TTL_SECONDS,
    };
  }

  async completeUpload(
    workspaceId: string,
    path: string,
    hash: string,
    mimeType: string,
  ): Promise<FsEntry | undefined> {
    await this.ensureBucket();
    let size: number;
    try {
      const head = await getS3Client().send(
        new HeadObjectCommand({
          Bucket: this.bucket,
          Key: this.blobKey(workspaceId, hash),
        }),
      );
      size = head.ContentLength ?? 0;
    } catch {
      return undefined; // Blob was never uploaded.
    }
    const updatedAt = new Date().toISOString();
    await this.putIndex(workspaceId, path, { hash, mimeType, size, updatedAt });
    return { path, hash, mimeType, size, updatedAt };
  }

  private entry(item: Record<string, unknown>): FsEntry {
    return {
      path: String(item["path"]),
      hash: String(item["hash"]),
      mimeType: String(item["mimeType"]),
      size: Number(item["size"]),
      updatedAt: String(item["updatedAt"]),
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory (same STORE_BACKEND switch as the other stores)
// ---------------------------------------------------------------------------

let store: IFsStore | undefined;

export function getFsStore(): IFsStore {
  if (!store) {
    const backend =
      process.env["STORE_BACKEND"] ??
      (process.env["FS_BUCKET"] ? "dynamodb" : "sqlite");
    if (backend === "dynamodb" && !process.env["FS_BUCKET"]) {
      // The other dynamo stores work without extra infra, but WFS needs an
      // object store — fall back to SQLite until FS_BUCKET is provisioned.
      process.stderr.write(
        JSON.stringify({
          ts: new Date().toISOString(),
          type: "gateway_fs_backend_fallback",
          message: "STORE_BACKEND=dynamodb but FS_BUCKET is unset — workspace fs using local SQLite",
        }) + "\n",
      );
      store = new FsStoreSqlite();
    } else {
      store = backend === "dynamodb" ? new FsStoreS3() : new FsStoreSqlite();
    }
  }
  return store;
}

/** Reset the singleton (used in tests). */
export function resetFsStore(): void {
  store = undefined;
}
