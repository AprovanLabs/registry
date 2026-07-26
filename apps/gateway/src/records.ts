/**
 * The record store — where accumulated state lives, as opposed to authored
 * files on the workspace FS (see docs/app-data.md, "App data: split the
 * record plane from the file plane").
 *
 * **Files are authored; records are accumulated.** Before this module,
 * `keyvalue` rode the FS store: every `keyvalue.set` created a content
 * version, appeared in `vfs.list`/file search, and was browsable by any
 * workspace member through ordinary file APIs — a `*-state` file sitting next
 * to source is clutter at best and a per-user privacy leak at worst. The
 * record store gives accumulated state its own namespace: unversioned,
 * invisible to the file plane, private to its partition by default.
 *
 * One partition key shape serves every caller:
 *
 *   PK = t#<tenantWorkspaceId>#s#<scope>        SK = <key>
 *     scope for a workspace caller:  "ws"                     (shared workspace KV)
 *     scope for an app session:      "app#<name>#u#<userSub>" (per-app-user, always)
 *
 * `tenantWorkspaceId` is the only thing an app's `dataScope` decides (owner's
 * workspace vs. the caller's own) — the scope suffix is identical either way,
 * because a session only ever addresses its own `app#<name>#u#<self>`
 * partition regardless of whose tenancy stores the rows. That tenancy
 * resolution already happens upstream (see routes/apps.ts `resolveAppSession`
 * — `ServiceContext.workspaceId` IS the execution/tenant workspace by the
 * time it reaches here), so this module just takes `tenant` as given.
 *
 * Two backends behind {@link IRecordStore}, selected the same way as the FS
 * and credential stores (`STORE_BACKEND`):
 *
 * - **SQLite** (local dev): one table in the gateway db, values inline as
 *   TEXT — no size limit worth enforcing locally.
 * - **DynamoDB** (Lambda): item values inline as JSON, except a JSON blob
 *   over ~350KB — most of Dynamo's 400KB item ceiling once PK/SK/attrs are
 *   accounted for — which spills to the existing `FS_BUCKET` under a
 *   `records/` prefix instead of failing the write.
 */

import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join } from "node:path";
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { DeleteCommand, GetCommand, PutCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";
import { getS3Client } from "./fs-store.js";
import type Database from "better-sqlite3";

const loadSqlite = (): typeof import("better-sqlite3") => {
  const req = typeof require === "function" ? require : createRequire(import.meta.url);
  return req("better-sqlite3");
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RecordEntry {
  tenant: string;
  scope: string;
  key: string;
  value: unknown;
  updatedAt: string;
  updatedBy: string;
}

export interface RecordSetOptions {
  /**
   * Top-level epoch-seconds expiry. On DynamoDB this is the table's TTL
   * attribute (`expiresAt`) and rows are reclaimed by the service; the
   * SQLite backend purges lazily on read/list. Omit for no expiry.
   */
  expiresAtEpochSeconds?: number;
}

export interface IRecordStore {
  get(tenant: string, scope: string, key: string): Promise<RecordEntry | undefined>;
  set(
    tenant: string,
    scope: string,
    key: string,
    value: unknown,
    updatedBy: string,
    options?: RecordSetOptions,
  ): Promise<RecordEntry>;
  delete(tenant: string, scope: string, key: string): Promise<boolean>;
  /** Keys under `scope` whose literal value starts with `prefix` (default ""). */
  list(tenant: string, scope: string, prefix?: string): Promise<string[]>;
  /**
   * Distinct scopes under `tenant` whose value starts with `scopePrefix` —
   * e.g. `app#<name>#u#` to enumerate an app's users for the `apps.data`
   * admin procedure. This is the one place the record store looks *across*
   * scopes rather than within one, so unlike the four ops above it costs a
   * full-table scan on the Dynamo backend (filtered server-side, but not an
   * indexed query) — acceptable for an infrequent admin action, not meant
   * for a hot path. Queryable collections proper are explicitly out of scope
   * for this store (see docs/app-data.md); this is a narrow, named exception.
   */
  listScopes(tenant: string, scopePrefix: string): Promise<string[]>;
}

// ---------------------------------------------------------------------------
// DynamoDB backend
// ---------------------------------------------------------------------------

/** Comfortably under Dynamo's 400KB item cap once PK/SK/attrs are added. */
const SPILL_THRESHOLD_BYTES = 350 * 1024;

function partitionKey(tenant: string, scope: string): string {
  return `t#${tenant}#s#${scope}`;
}

export class RecordStoreDynamodb implements IRecordStore {
  private readonly tableName: string;
  private readonly bucket: string | undefined;

  constructor(options?: { tableName?: string; bucket?: string }) {
    this.tableName = options?.tableName ?? process.env["RECORDS_TABLE"] ?? "Records";
    this.bucket = options?.bucket ?? process.env["FS_BUCKET"];
  }

  private blobKey(tenant: string, scope: string, key: string): string {
    return `records/${tenant}/${scope}/${key}`;
  }

  private requireBucket(): string {
    if (!this.bucket) {
      throw new Error(
        "FS_BUCKET must be set for the record store to spill large values (records.ts)",
      );
    }
    return this.bucket;
  }

  async get(tenant: string, scope: string, key: string): Promise<RecordEntry | undefined> {
    const result = await getDynamoDocClient().send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: partitionKey(tenant, scope), SK: key },
      }),
    );
    if (!result.Item) return undefined;
    return this.toEntry(tenant, scope, key, result.Item, await this.resolveValue(result.Item));
  }

  async set(
    tenant: string,
    scope: string,
    key: string,
    value: unknown,
    updatedBy: string,
    options?: RecordSetOptions,
  ): Promise<RecordEntry> {
    const updatedAt = new Date().toISOString();
    const json = JSON.stringify(value ?? null);
    const spill = Buffer.byteLength(json, "utf8") > SPILL_THRESHOLD_BYTES;
    const item: Record<string, unknown> = {
      PK: partitionKey(tenant, scope),
      SK: key,
      tenant,
      scope,
      key,
      updatedAt,
      updatedBy,
      ...(options?.expiresAtEpochSeconds
        ? { expiresAt: Math.floor(options.expiresAtEpochSeconds) }
        : {}),
    };
    if (spill) {
      const bucket = this.requireBucket();
      await getS3Client().send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: this.blobKey(tenant, scope, key),
          Body: json,
          ContentType: "application/json",
        }),
      );
      item["spilled"] = true;
    } else {
      item["value"] = JSON.parse(json) as unknown;
      // A prior write may have spilled this same key; clean up the orphan
      // blob now that it fits inline. Best-effort — deleting a nonexistent
      // S3 key is a no-op, so this is safe to fire on every non-spilled set
      // rather than paying for an extra read to check first.
      if (this.bucket) {
        await getS3Client()
          .send(new DeleteObjectCommand({ Bucket: this.bucket, Key: this.blobKey(tenant, scope, key) }))
          .catch(() => undefined);
      }
    }
    await getDynamoDocClient().send(new PutCommand({ TableName: this.tableName, Item: item }));
    return { tenant, scope, key, value: value ?? null, updatedAt, updatedBy };
  }

  async delete(tenant: string, scope: string, key: string): Promise<boolean> {
    const result = await getDynamoDocClient().send(
      new DeleteCommand({
        TableName: this.tableName,
        Key: { PK: partitionKey(tenant, scope), SK: key },
        ReturnValues: "ALL_OLD",
      }),
    );
    if (!result.Attributes) return false;
    if (result.Attributes["spilled"] && this.bucket) {
      await getS3Client()
        .send(new DeleteObjectCommand({ Bucket: this.bucket, Key: this.blobKey(tenant, scope, key) }))
        .catch(() => undefined);
    }
    return true;
  }

  async list(tenant: string, scope: string, prefix = ""): Promise<string[]> {
    const keys: string[] = [];
    let cursor: Record<string, unknown> | undefined;
    do {
      // DynamoDB rejects begins_with with an empty string — an empty prefix
      // means "everything under the partition", so drop the clause.
      const page = await getDynamoDocClient().send(
        new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: prefix
            ? "PK = :pk AND begins_with(SK, :prefix)"
            : "PK = :pk",
          ExpressionAttributeValues: prefix
            ? { ":pk": partitionKey(tenant, scope), ":prefix": prefix }
            : { ":pk": partitionKey(tenant, scope) },
          ProjectionExpression: "SK",
          ExclusiveStartKey: cursor,
        }),
      );
      for (const item of page.Items ?? []) keys.push(String(item["SK"]));
      cursor = page.LastEvaluatedKey;
    } while (cursor);
    return keys.sort();
  }

  async listScopes(tenant: string, scopePrefix: string): Promise<string[]> {
    const scopes = new Set<string>();
    let cursor: Record<string, unknown> | undefined;
    do {
      const page = await getDynamoDocClient().send(
        new ScanCommand({
          TableName: this.tableName,
          FilterExpression: "tenant = :tenant AND begins_with(#scope, :prefix)",
          ExpressionAttributeNames: { "#scope": "scope" },
          ExpressionAttributeValues: { ":tenant": tenant, ":prefix": scopePrefix },
          ProjectionExpression: "#scope",
          ExclusiveStartKey: cursor,
        }),
      );
      for (const item of page.Items ?? []) scopes.add(String(item["scope"]));
      cursor = page.LastEvaluatedKey;
    } while (cursor);
    return [...scopes].sort();
  }

  private async resolveValue(item: Record<string, unknown>): Promise<unknown> {
    if (!item["spilled"]) return item["value"] ?? null;
    const bucket = this.requireBucket();
    const blob = await getS3Client().send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: this.blobKey(String(item["tenant"]), String(item["scope"]), String(item["key"])),
      }),
    );
    const body = (await blob.Body?.transformToString("utf8")) ?? "null";
    return JSON.parse(body) as unknown;
  }

  private toEntry(
    tenant: string,
    scope: string,
    key: string,
    item: Record<string, unknown>,
    value: unknown,
  ): RecordEntry {
    return {
      tenant,
      scope,
      key,
      value,
      updatedAt: String(item["updatedAt"]),
      updatedBy: String(item["updatedBy"]),
    };
  }
}

// ---------------------------------------------------------------------------
// SQLite backend (local dev)
// ---------------------------------------------------------------------------

export class RecordStoreSqlite implements IRecordStore {
  private readonly database: Database.Database;

  constructor(directory = process.env["GATEWAY_DATA_DIR"] ?? join(homedir(), ".aprovan")) {
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    const SqliteDatabase = loadSqlite();
    this.database = new SqliteDatabase(join(directory, "gateway.db"));
    this.database.exec(`
      CREATE TABLE IF NOT EXISTS records (
        tenant TEXT NOT NULL,
        scope TEXT NOT NULL,
        key TEXT NOT NULL,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        updated_by TEXT NOT NULL,
        expires_at INTEGER,
        PRIMARY KEY (tenant, scope, key)
      );
    `);
    // Pre-expiry dev databases lack the column; add it in place.
    try {
      this.database.exec(`ALTER TABLE records ADD COLUMN expires_at INTEGER`);
    } catch {
      // Column already exists.
    }
    // Lazy reaping stands in for DynamoDB TTL locally.
    this.database
      .prepare(`DELETE FROM records WHERE expires_at IS NOT NULL AND expires_at < ?`)
      .run(Math.floor(Date.now() / 1000));
  }

  async get(tenant: string, scope: string, key: string): Promise<RecordEntry | undefined> {
    const row = this.database
      .prepare(
        `SELECT value, updated_at, updated_by FROM records
         WHERE tenant = ? AND scope = ? AND key = ?
           AND (expires_at IS NULL OR expires_at >= unixepoch())`,
      )
      .get(tenant, scope, key) as
      | { value: string; updated_at: string; updated_by: string }
      | undefined;
    if (!row) return undefined;
    return {
      tenant,
      scope,
      key,
      value: JSON.parse(row.value) as unknown,
      updatedAt: row.updated_at,
      updatedBy: row.updated_by,
    };
  }

  async set(
    tenant: string,
    scope: string,
    key: string,
    value: unknown,
    updatedBy: string,
    options?: RecordSetOptions,
  ): Promise<RecordEntry> {
    const updatedAt = new Date().toISOString();
    this.database
      .prepare(
        `INSERT OR REPLACE INTO records (tenant, scope, key, value, updated_at, updated_by, expires_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        tenant,
        scope,
        key,
        JSON.stringify(value ?? null),
        updatedAt,
        updatedBy,
        options?.expiresAtEpochSeconds ?? null,
      );
    return { tenant, scope, key, value: value ?? null, updatedAt, updatedBy };
  }

  async delete(tenant: string, scope: string, key: string): Promise<boolean> {
    const result = this.database
      .prepare(`DELETE FROM records WHERE tenant = ? AND scope = ? AND key = ?`)
      .run(tenant, scope, key);
    return result.changes > 0;
  }

  async list(tenant: string, scope: string, prefix = ""): Promise<string[]> {
    const rows = this.database
      .prepare(
        `SELECT key FROM records
         WHERE tenant = ? AND scope = ? AND key LIKE ? ESCAPE '\\'
           AND (expires_at IS NULL OR expires_at >= unixepoch())
         ORDER BY key`,
      )
      .all(tenant, scope, `${prefix.replace(/[%_]/g, (c) => `\\${c}`)}%`) as { key: string }[];
    return rows.map((row) => row.key);
  }

  async listScopes(tenant: string, scopePrefix: string): Promise<string[]> {
    const rows = this.database
      .prepare(
        `SELECT DISTINCT scope FROM records
         WHERE tenant = ? AND scope LIKE ? ESCAPE '\\'
         ORDER BY scope`,
      )
      .all(tenant, `${scopePrefix.replace(/[%_]/g, (c) => `\\${c}`)}%`) as { scope: string }[];
    return rows.map((row) => row.scope);
  }
}

// ---------------------------------------------------------------------------
// Singleton factory (same STORE_BACKEND switch as fs-store.ts / credentials.ts)
// ---------------------------------------------------------------------------

let store: IRecordStore | undefined;

export function getRecordStore(): IRecordStore {
  if (!store) {
    const backend =
      process.env["STORE_BACKEND"] ?? (process.env["RECORDS_TABLE"] ? "dynamodb" : "sqlite");
    store = backend === "dynamodb" ? new RecordStoreDynamodb() : new RecordStoreSqlite();
  }
  return store;
}

/** Reset the singleton (used in tests). */
export function resetRecordStore(): void {
  store = undefined;
}
