/**
 * Named API keys for programmatic callers.
 *
 * An API key lets a non-human caller authenticate with the gateway without
 * knowing the admin secret.  Each key has:
 *   - a human-readable name
 *   - a stable callerId (used for permission grants)
 *   - an opaque secret value (shown once at creation; stored as a SHA-256 hash)
 *   - optional scoped permissions baked in at creation time
 *
 * Callers exchange the key secret for a JWT via POST /auth/token/apikey.
 *
 * Two interchangeable backends share one async `IApiKeyStore` contract:
 *   - In-memory (+ optional file persistence). Default.
 *   - DynamoDB single-table (`ApiKeyStoreDynamodb`), selected with
 *     `GATEWAY_STORE_BACKEND=dynamodb`. `verify(wsId, secret)` is O(1) via a
 *     `APIKEYHASH#<sha256(secret)>` mirror item that points at the primary
 *     `APIKEY#<keyId>` record; the mirror carries a DynamoDB TTL so an expired
 *     key fails closed even if `revoke` is never called.
 *
 * The public API is async so a DynamoDB backend can satisfy it; the in-memory
 * backend is async too for a shared contract.
 */

import { randomBytes, createHash } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";
import {
  GetCommand,
  QueryCommand,
  TransactWriteCommand,
} from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ApiKey {
  id: string;
  workspaceId: string;
  name: string;
  /** Stable caller identity used in permission grants */
  callerId: string;
  /** SHA-256 hex of the raw secret (never stored plain) */
  secretHash: string;
  createdAt: string;
  createdBy: string;
  /** ISO expiry date, or null = never expires */
  expiresAt: string | null;
}

/** Returned once at creation, then discarded from the store */
export interface ApiKeyWithSecret extends ApiKey {
  secret: string;
}

export interface CreateApiKeyInput {
  name: string;
  createdBy: string;
  /** Seconds until expiry; omit / 0 = never */
  expiresInSeconds?: number;
}

// ---------------------------------------------------------------------------
// Store interface (shared by both backends)
// ---------------------------------------------------------------------------

/**
 * Backend-agnostic API key store. Methods are async so a DynamoDB backend can
 * satisfy the same contract as the in-memory store. Callers `await` every
 * method; the in-memory backend resolves immediately.
 */
export interface IApiKeyStore {
  create(workspaceId: string, input: CreateApiKeyInput): Promise<ApiKeyWithSecret>;
  list(workspaceId: string): Promise<ApiKey[]>;
  revoke(workspaceId: string, id: string): Promise<boolean>;
  /** Verify a raw secret and return the matching key (if valid and not expired). */
  verify(workspaceId: string, secret: string): Promise<ApiKey | null>;
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function makeId(): string {
  return randomBytes(12).toString("hex");
}

function hashSecret(secret: string): string {
  return createHash("sha256").update(secret).digest("hex");
}

function makeSecret(): string {
  return `utdk_${randomBytes(24).toString("hex")}`;
}

/** Epoch seconds for an ISO expiry date, or undefined when the key never expires. */
function expiryToTtl(expiresAt: string | null): number | undefined {
  if (!expiresAt) return undefined;
  return Math.floor(new Date(expiresAt).getTime() / 1000);
}

// ---------------------------------------------------------------------------
// In-memory store
// ---------------------------------------------------------------------------

interface SerializedStore {
  keys: ApiKey[];
}

export class ApiKeyStore implements IApiKeyStore {
  private readonly store: Map<string, ApiKey> = new Map();
  private readonly storePath: string | undefined;

  constructor(storePath?: string) {
    this.storePath = storePath;
    if (storePath && existsSync(storePath)) {
      this.load(storePath);
    }
  }

  private load(path: string): void {
    try {
      const raw = readFileSync(path, "utf8");
      const data = JSON.parse(raw) as SerializedStore;
      for (const key of data.keys) {
        this.store.set(key.id, key);
      }
    } catch {
      // Start fresh on parse error
    }
  }

  private persist(): void {
    if (!this.storePath) return;
    const data: SerializedStore = { keys: Array.from(this.store.values()) };
    writeFileSync(this.storePath, JSON.stringify(data, null, 2), "utf8");
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  create(workspaceId: string, input: CreateApiKeyInput): Promise<ApiKeyWithSecret> {
    const secret = makeSecret();
    const id = makeId();
    const callerId = `apikey:${id}`;
    const expiresAt =
      input.expiresInSeconds && input.expiresInSeconds > 0
        ? new Date(Date.now() + input.expiresInSeconds * 1000).toISOString()
        : null;

    const key: ApiKey = {
      id,
      workspaceId,
      name: input.name,
      callerId,
      secretHash: hashSecret(secret),
      createdAt: new Date().toISOString(),
      createdBy: input.createdBy,
      expiresAt,
    };

    this.store.set(id, key);
    this.persist();

    return Promise.resolve({ ...key, secret });
  }

  list(workspaceId: string): Promise<ApiKey[]> {
    const results: ApiKey[] = [];
    for (const key of this.store.values()) {
      if (key.workspaceId === workspaceId) results.push(key);
    }
    return Promise.resolve(results);
  }

  revoke(workspaceId: string, id: string): Promise<boolean> {
    const key = this.store.get(id);
    if (!key || key.workspaceId !== workspaceId) return Promise.resolve(false);
    this.store.delete(id);
    this.persist();
    return Promise.resolve(true);
  }

  /**
   * Verify a raw secret and return the matching key (if valid and not expired).
   */
  verify(workspaceId: string, secret: string): Promise<ApiKey | null> {
    const hash = hashSecret(secret);
    for (const key of this.store.values()) {
      if (key.workspaceId !== workspaceId) continue;
      if (key.secretHash !== hash) continue;
      if (key.expiresAt && new Date(key.expiresAt) < new Date()) return Promise.resolve(null);
      return Promise.resolve(key);
    }
    return Promise.resolve(null);
  }
}

// ---------------------------------------------------------------------------
// DynamoDB backend (single-table design, APR-319)
// ---------------------------------------------------------------------------

/**
 * DynamoDB-backed API key store using the single-table schema in
 * `db/schema.ts` (`ApiKeys`):
 *   - `PK = WS#<workspaceId>`
 *   - `SK = APIKEY#<keyId>`        (the primary record)
 *   - `SK = APIKEYHASH#<sha256(secret)>`  (a hash → keyId mirror for O(1) verify)
 *
 * `verify(wsId, secret)` hashes the secret and does a single `GetItem` on the
 * mirror; a hit yields the `keyId`, which is then fetched as the primary record
 * (two reads, but both are point lookups — no scan). The mirror carries a
 * DynamoDB TTL derived from `expiresAt`, so an expired key's mirror is
 * auto-evicted and `verify` fails closed even if `revoke` is never called.
 * `expiresAt` is still checked server-side on the primary record because the
 * TTL sweep is best-effort and can lag.
 *
 * `list(wsId)` queries `begins_with(SK, "APIKEY#")`, which excludes the
 * `APIKEYHASH#` mirrors (their 7th character is `H`, not `#`).
 *
 * `secretHash` is a one-way SHA-256 hash, not encryption — kept as-is per the
 * APR-272 "no application-level encryption" decision.
 */
export class ApiKeyStoreDynamodb implements IApiKeyStore {
  private readonly tableName: string;

  constructor(tableName?: string) {
    this.tableName = tableName ?? process.env["APIKEYS_TABLE"] ?? "ApiKeys";
  }

  async create(workspaceId: string, input: CreateApiKeyInput): Promise<ApiKeyWithSecret> {
    const secret = makeSecret();
    const id = makeId();
    const callerId = `apikey:${id}`;
    const secretHash = hashSecret(secret);
    const now = new Date().toISOString();
    const expiresAt =
      input.expiresInSeconds && input.expiresInSeconds > 0
        ? new Date(Date.now() + input.expiresInSeconds * 1000).toISOString()
        : null;

    const primary: Record<string, unknown> = {
      PK: `WS#${workspaceId}`,
      SK: `APIKEY#${id}`,
      id,
      workspaceId,
      name: input.name,
      callerId,
      secretHash,
      createdAt: now,
      createdBy: input.createdBy,
      expiresAt,
    };
    const mirror: Record<string, unknown> = {
      PK: `WS#${workspaceId}`,
      SK: `APIKEYHASH#${secretHash}`,
      keyId: id,
    };
    const ttl = expiryToTtl(expiresAt);
    if (ttl !== undefined) mirror["ttl"] = ttl;

    const client = getDynamoDocClient();
    // Atomically write the primary record and the hash mirror. The condition
    // guards against a (vanishingly unlikely) id collision and a secret-hash
    // collision respectively; either failure rejects the whole transaction.
    await client.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Put: {
              TableName: this.tableName,
              Item: primary,
              ConditionExpression: "attribute_not_exists(PK)",
            },
          },
          {
            Put: {
              TableName: this.tableName,
              Item: mirror,
              ConditionExpression: "attribute_not_exists(PK)",
            },
          },
        ],
      }),
    );

    return { ...this.toApiKey(primary), secret };
  }

  async list(workspaceId: string): Promise<ApiKey[]> {
    const client = getDynamoDocClient();
    const result = await client.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": `WS#${workspaceId}`,
          ":sk": "APIKEY#",
        },
      }),
    );
    return (result.Items ?? []).map((it) => this.toApiKey(it as Record<string, unknown>));
  }

  async revoke(workspaceId: string, id: string): Promise<boolean> {
    const client = getDynamoDocClient();
    const got = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `APIKEY#${id}` },
      }),
    );
    const item = got.Item as Record<string, unknown> | undefined;
    if (!item) return false;
    const secretHash = item["secretHash"] as string;

    await client.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: `APIKEY#${id}` },
            },
          },
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: `APIKEYHASH#${secretHash}` },
            },
          },
        ],
      }),
    );
    return true;
  }

  async verify(workspaceId: string, secret: string): Promise<ApiKey | null> {
    const secretHash = hashSecret(secret);
    const client = getDynamoDocClient();
    const mirrorRes = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `APIKEYHASH#${secretHash}` },
      }),
    );
    const mirror = mirrorRes.Item as Record<string, unknown> | undefined;
    if (!mirror) return null;
    const keyId = mirror["keyId"] as string;

    const primaryRes = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `APIKEY#${keyId}` },
      }),
    );
    const primary = primaryRes.Item as Record<string, unknown> | undefined;
    if (!primary) return null;

    const key = this.toApiKey(primary);
    if (key.expiresAt && new Date(key.expiresAt) < new Date()) return null;
    return key;
  }

  private toApiKey(item: Record<string, unknown>): ApiKey {
    return {
      id: item["id"] as string,
      workspaceId: item["workspaceId"] as string,
      name: item["name"] as string,
      callerId: item["callerId"] as string,
      secretHash: item["secretHash"] as string,
      createdAt: item["createdAt"] as string,
      createdBy: item["createdBy"] as string,
      expiresAt: (item["expiresAt"] as string | null | undefined) ?? null,
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: IApiKeyStore | undefined;

/**
 * Resolve the singleton API key store. The backend is selected by the
 * `GATEWAY_STORE_BACKEND` env var: `dynamodb` uses `ApiKeyStoreDynamodb`
 * (DynamoDB single-table, SHA-256 hash mirror for O(1) verify); any other value
 * (or unset) uses the in-memory store with optional file persistence.
 */
export function getApiKeyStore(): IApiKeyStore {
  if (!_store) {
    if (process.env["GATEWAY_STORE_BACKEND"] === "dynamodb") {
      _store = new ApiKeyStoreDynamodb();
    } else {
      const storePath = process.env["GATEWAY_APIKEYS_PATH"];
      _store = new ApiKeyStore(storePath);
    }
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetApiKeyStore(): void {
  _store = undefined;
}
