/**
 * Credential storage — DynamoDB single-table backend.
 *
 * Uses `CredentialStoreDynamodb` exclusively. Per APR-323, the legacy
 * in-memory/file backend has been removed; DynamoDB SSE handles at-rest
 * encryption (IAM policy must scope the table to the gateway Lambda role).
 *
 * Supported credential types: bearer_token, api_key, oauth2_client, oauth2_authcode
 *
 * The public API is async so callers `await` every method.
 */

import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from "node:crypto";
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { GetCommand, PutCommand, QueryCommand, TransactWriteCommand } from "@aws-sdk/lib-dynamodb";
import Database from "better-sqlite3";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CredentialType =
  | "bearer_token"
  | "api_key"
  | "oauth2_client"
  | "oauth2_authcode";

export interface BearerTokenPayload {
  type: "bearer_token";
  token: string;
}

export interface ApiKeyPayload {
  type: "api_key";
  value: string;
  /** Header to inject (default: X-Api-Key) */
  headerName?: string;
}

export interface OAuth2ClientPayload {
  type: "oauth2_client";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  scopes?: string[];
}

export interface OAuth2AuthCodePayload {
  type: "oauth2_authcode";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
  scopes?: string[];
}

export type CredentialPayload =
  | BearerTokenPayload
  | ApiKeyPayload
  | OAuth2ClientPayload
  | OAuth2AuthCodePayload;

export interface CredentialInput {
  provider: string;
  label?: string;
  payload: CredentialPayload;
}

export interface CredentialRecord {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: CredentialType;
  createdAt: string;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Store interface
// ---------------------------------------------------------------------------

export interface ICredentialStore {
  create(workspaceId: string, input: CredentialInput): Promise<CredentialRecord>;
  list(workspaceId: string): Promise<CredentialRecord[]>;
  get(workspaceId: string, id: string): Promise<CredentialRecord | undefined>;
  delete(workspaceId: string, id: string): Promise<boolean>;
  /** Return the raw payload for a credential. Internal use only. */
  getPayload(workspaceId: string, id: string): Promise<CredentialPayload | undefined>;
  /**
   * Find and return the first credential payload for a given provider in the
   * workspace. Used by the tool proxy to inject credentials at call time.
   */
  resolveForProvider(workspaceId: string, provider: string): Promise<CredentialPayload | undefined>;
}

// ---------------------------------------------------------------------------
// DynamoDB backend (single-table design, APR-318)
// ---------------------------------------------------------------------------

/**
 * DynamoDB-backed credential store using the single-table schema in
 * `db/schema.ts` (`Credentials`):
 *   - `PK = WS#<workspaceId>`
 *   - `SK = CRED#<provider>#<credId>`  (the record)
 *   - `SK = CREDID#<credId>`           (a pointer credId → provider)
 *
 * `get`/`delete`/`getPayload` take `(wsId, credId)` without a provider, so they
 * read the pointer first, then the record (two reads on this cold path). The
 * hot path — `resolveForProvider(wsId, provider)` — queries the partition with
 * `begins_with(SK, "CRED#<provider>#")` in one round trip.
 *
 * Per APR-272, the payload is stored as plaintext JSON and DynamoDB SSE handles
 * at-rest encryption (no application-level crypto in this cut).
 */
export class CredentialStoreDynamodb implements ICredentialStore {
  private readonly tableName: string;

  constructor(tableName?: string) {
    this.tableName = tableName ?? process.env["CREDENTIALS_TABLE"] ?? "Credentials";
  }

  async create(workspaceId: string, input: CredentialInput): Promise<CredentialRecord> {
    const id = randomBytes(12).toString("hex");
    const now = new Date().toISOString();
    const item: Record<string, unknown> = {
      PK: `WS#${workspaceId}`,
      SK: `CRED#${input.provider}#${id}`,
      id,
      workspaceId,
      provider: input.provider,
      type: input.payload.type,
      payload: JSON.stringify(input.payload),
      createdAt: now,
      updatedAt: now,
    };
    if (input.label !== undefined) item["label"] = input.label;
    const pointer: Record<string, unknown> = {
      PK: `WS#${workspaceId}`,
      SK: `CREDID#${id}`,
      provider: input.provider,
    };
    const client = getDynamoDocClient();
    // Write the record first with a condition so a rare id collision throws
    // instead of silently overwriting, then write the credId → provider pointer.
    await client.send(
      new PutCommand({
        TableName: this.tableName,
        Item: item,
        ConditionExpression: "attribute_not_exists(PK)",
      }),
    );
    await client.send(
      new PutCommand({
        TableName: this.tableName,
        Item: pointer,
        ConditionExpression: "attribute_not_exists(PK)",
      }),
    );
    return this.toRecord(item);
  }

  async list(workspaceId: string): Promise<CredentialRecord[]> {
    const client = getDynamoDocClient();
    const result = await client.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": `WS#${workspaceId}`,
          ":sk": "CRED#",
        },
        // Exclude the payload from the listing response.
        ProjectionExpression: "id, workspaceId, provider, #lbl, #tp, createdAt, updatedAt",
        ExpressionAttributeNames: { "#lbl": "label", "#tp": "type" },
      }),
    );
    return (result.Items ?? []).map((it) => this.toRecord(it as Record<string, unknown>));
  }

  async get(workspaceId: string, id: string): Promise<CredentialRecord | undefined> {
    const provider = await this.resolveProviderViaPointer(workspaceId, id);
    if (provider === undefined) return undefined;
    const client = getDynamoDocClient();
    const result = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `CRED#${provider}#${id}` },
      }),
    );
    if (!result.Item) return undefined;
    return this.toRecord(result.Item as Record<string, unknown>);
  }

  async delete(workspaceId: string, id: string): Promise<boolean> {
    const provider = await this.resolveProviderViaPointer(workspaceId, id);
    if (provider === undefined) return false;
    const client = getDynamoDocClient();
    await client.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: `CRED#${provider}#${id}` },
            },
          },
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: `CREDID#${id}` },
            },
          },
        ],
      }),
    );
    return true;
  }

  async getPayload(workspaceId: string, id: string): Promise<CredentialPayload | undefined> {
    const provider = await this.resolveProviderViaPointer(workspaceId, id);
    if (provider === undefined) return undefined;
    const client = getDynamoDocClient();
    const result = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `CRED#${provider}#${id}` },
      }),
    );
    if (!result.Item) return undefined;
    return JSON.parse((result.Item as Record<string, unknown>)["payload"] as string) as CredentialPayload;
  }

  async resolveForProvider(workspaceId: string, provider: string): Promise<CredentialPayload | undefined> {
    const client = getDynamoDocClient();
    const result = await client.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": `WS#${workspaceId}`,
          ":sk": `CRED#${provider}#`,
        },
        Limit: 1,
      }),
    );
    const item = result.Items?.[0] as Record<string, unknown> | undefined;
    if (!item) return undefined;
    return JSON.parse(item["payload"] as string) as CredentialPayload;
  }

  /**
   * Read the `CREDID#<id>` pointer to recover the provider for an id-keyed
   * lookup. Returns undefined when no such credential exists.
   */
  private async resolveProviderViaPointer(workspaceId: string, id: string): Promise<string | undefined> {
    const client = getDynamoDocClient();
    const result = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `CREDID#${id}` },
      }),
    );
    if (!result.Item) return undefined;
    return (result.Item as Record<string, unknown>)["provider"] as string;
  }

  private toRecord(item: Record<string, unknown>): CredentialRecord {
    return {
      id: item["id"] as string,
      workspaceId: item["workspaceId"] as string,
      provider: item["provider"] as string,
      label: item["label"] as string | undefined,
      type: item["type"] as CredentialType,
      createdAt: item["createdAt"] as string,
      updatedAt: item["updatedAt"] as string,
    };
  }
}

export class CredentialStoreSqlite implements ICredentialStore {
  private readonly database: Database.Database;
  private readonly key: Buffer;

  constructor(directory = join(homedir(), ".aprovan")) {
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    const keyPath = join(directory, "key");
    try {
      this.key = Buffer.from(readFileSync(keyPath, "utf8"), "base64");
    } catch {
      this.key = randomBytes(32);
      writeFileSync(keyPath, this.key.toString("base64"), { mode: 0o600 });
    }
    this.database = new Database(join(directory, "gateway.db"));
    this.database.exec(`
      CREATE TABLE IF NOT EXISTS credentials (
        id TEXT PRIMARY KEY,
        workspace_id TEXT NOT NULL,
        provider TEXT NOT NULL,
        label TEXT,
        type TEXT NOT NULL,
        payload TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS credentials_workspace_provider
      ON credentials(workspace_id, provider);
    `);
  }

  async create(
    workspaceId: string,
    input: CredentialInput,
  ): Promise<CredentialRecord> {
    const id = randomBytes(12).toString("hex");
    const now = new Date().toISOString();
    this.database
      .prepare(
        `INSERT INTO credentials
        (id, workspace_id, provider, label, type, payload, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        id,
        workspaceId,
        input.provider,
        input.label ?? null,
        input.payload.type,
        this.encrypt(input.payload),
        now,
        now,
      );
    return {
      id,
      workspaceId,
      provider: input.provider,
      label: input.label,
      type: input.payload.type,
      createdAt: now,
      updatedAt: now,
    };
  }

  async list(workspaceId: string): Promise<CredentialRecord[]> {
    const rows = this.database
      .prepare(
        `SELECT id, workspace_id, provider, label, type, created_at, updated_at
         FROM credentials WHERE workspace_id = ? ORDER BY provider, created_at`,
      )
      .all(workspaceId) as Record<string, unknown>[];
    return rows.map((row) => this.record(row));
  }

  async get(
    workspaceId: string,
    id: string,
  ): Promise<CredentialRecord | undefined> {
    const row = this.database
      .prepare(
        `SELECT id, workspace_id, provider, label, type, created_at, updated_at
         FROM credentials WHERE workspace_id = ? AND id = ?`,
      )
      .get(workspaceId, id);
    return row
      ? this.record(row as Record<string, unknown>)
      : undefined;
  }

  async delete(workspaceId: string, id: string): Promise<boolean> {
    return (
      this.database
        .prepare("DELETE FROM credentials WHERE workspace_id = ? AND id = ?")
        .run(workspaceId, id).changes > 0
    );
  }

  async getPayload(
    workspaceId: string,
    id: string,
  ): Promise<CredentialPayload | undefined> {
    const row = this.database
      .prepare(
        "SELECT payload FROM credentials WHERE workspace_id = ? AND id = ?",
      )
      .get(workspaceId, id) as { payload?: string } | undefined;
    return row?.payload ? this.decrypt(row.payload) : undefined;
  }

  async resolveForProvider(
    workspaceId: string,
    provider: string,
  ): Promise<CredentialPayload | undefined> {
    const row = this.database
      .prepare(
        `SELECT payload FROM credentials
         WHERE workspace_id = ? AND provider = ? ORDER BY created_at LIMIT 1`,
      )
      .get(workspaceId, provider) as { payload?: string } | undefined;
    return row?.payload ? this.decrypt(row.payload) : undefined;
  }

  private encrypt(payload: CredentialPayload): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", this.key, iv);
    const encrypted = Buffer.concat([
      cipher.update(JSON.stringify(payload), "utf8"),
      cipher.final(),
    ]);
    return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString("base64");
  }

  private decrypt(value: string): CredentialPayload {
    const data = Buffer.from(value, "base64");
    const decipher = createDecipheriv(
      "aes-256-gcm",
      this.key,
      data.subarray(0, 12),
    );
    decipher.setAuthTag(data.subarray(12, 28));
    return JSON.parse(
      Buffer.concat([
        decipher.update(data.subarray(28)),
        decipher.final(),
      ]).toString("utf8"),
    ) as CredentialPayload;
  }

  private record(row: Record<string, unknown>): CredentialRecord {
    return {
      id: String(row["id"]),
      workspaceId: String(row["workspace_id"]),
      provider: String(row["provider"]),
      label: typeof row["label"] === "string" ? row["label"] : undefined,
      type: row["type"] as CredentialType,
      createdAt: String(row["created_at"]),
      updatedAt: String(row["updated_at"]),
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: ICredentialStore | undefined;

export function getCredentialStore(): ICredentialStore {
  if (!_store) {
    const backend =
      process.env["STORE_BACKEND"] ??
      (process.env["CREDENTIALS_TABLE"] ? "dynamodb" : "sqlite");
    _store =
      backend === "dynamodb"
        ? new CredentialStoreDynamodb()
        : new CredentialStoreSqlite();
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetCredentialStore(): void {
  _store = undefined;
}
