/**
 * Credential storage with two interchangeable backends.
 *
 * - In-memory (+ optional file persistence) with AES-256-GCM encryption.
 *   Default; key derived from `GATEWAY_WORKSPACE_KEY` via scrypt.
 * - DynamoDB single-table backend (`CredentialStoreDynamodb`), selected with
 *   `GATEWAY_STORE_BACKEND=dynamodb`. Per APR-272 / APR-318, this cut stores the
 *   payload as plaintext JSON and relies on DynamoDB SSE for at-rest encryption;
 *   the IAM policy must scope the table to the gateway Lambda role. A future
 *   envelope-encryption cut can swap the `payload` attribute back for the
 *   `iv`/`encryptedPayload`/`authTag` triple without a schema migration.
 *
 * Supported credential types: bearer_token, api_key, oauth2_client, oauth2_authcode
 *
 * The public API is async so a DynamoDB backend can satisfy it; the in-memory
 * backend is async too for a shared `ICredentialStore` contract.
 */

import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { GetCommand, PutCommand, QueryCommand, TransactWriteCommand } from "@aws-sdk/lib-dynamodb";
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

export interface Credential {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: CredentialType;
  /** AES-256-GCM encrypted JSON of CredentialPayload */
  encryptedPayload: string;
  /** Base64 IV used during encryption */
  iv: string;
  /** Base64 auth tag from GCM */
  authTag: string;
  createdAt: string;
  updatedAt: string;
}

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
// Store interface (shared by both backends)
// ---------------------------------------------------------------------------

/**
 * Backend-agnostic credential store. Methods are async so a DynamoDB backend
 * can satisfy the same contract as the in-memory store. Callers `await` every
 * method; the in-memory backend resolves immediately.
 */
export interface ICredentialStore {
  create(workspaceId: string, input: CredentialInput): Promise<CredentialRecord>;
  list(workspaceId: string): Promise<CredentialRecord[]>;
  get(workspaceId: string, id: string): Promise<CredentialRecord | undefined>;
  delete(workspaceId: string, id: string): Promise<boolean>;
  /** Decrypt (or read) and return the raw payload for a credential. Internal use only. */
  getPayload(workspaceId: string, id: string): Promise<CredentialPayload | undefined>;
  /**
   * Find and return the first credential payload for a given provider in the
   * workspace. Used by the tool proxy to inject credentials at call time.
   */
  resolveForProvider(workspaceId: string, provider: string): Promise<CredentialPayload | undefined>;
}

// ---------------------------------------------------------------------------
// Crypto helpers
// ---------------------------------------------------------------------------

const ALGORITHM = "aes-256-gcm";
const KEY_LENGTH = 32; // bytes for AES-256
const IV_LENGTH = 12;  // bytes (96-bit IV recommended for GCM)
const SALT = "utdk-gateway-v1"; // fixed salt; per-workspace keys differ by workspaceKey content

function deriveKey(workspaceKey: string): Buffer {
  return scryptSync(workspaceKey, SALT, KEY_LENGTH);
}

function encrypt(plaintext: string, key: Buffer): { iv: string; ciphertext: string; authTag: string } {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return {
    iv: iv.toString("base64"),
    ciphertext: encrypted.toString("base64"),
    authTag: cipher.getAuthTag().toString("base64"),
  };
}

function decrypt(ciphertext: string, iv: string, authTag: string, key: Buffer): string {
  const decipher = createDecipheriv(ALGORITHM, key, Buffer.from(iv, "base64"));
  decipher.setAuthTag(Buffer.from(authTag, "base64"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(ciphertext, "base64")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

type StoreMap = Map<string, Credential>;

interface SerializedStore {
  credentials: Credential[];
}

export class CredentialStore implements ICredentialStore {
  private readonly store: StoreMap = new Map();
  private readonly workspaceKey: string;
  private readonly storePath: string | undefined;

  constructor(workspaceKey: string, storePath?: string) {
    this.workspaceKey = workspaceKey;
    this.storePath = storePath;
    if (storePath && existsSync(storePath)) {
      this.load(storePath);
    }
  }

  private load(path: string): void {
    try {
      const raw = readFileSync(path, "utf8");
      const data = JSON.parse(raw) as SerializedStore;
      for (const cred of data.credentials) {
        this.store.set(cred.id, cred);
      }
    } catch {
      // Ignore parse errors on startup; start fresh
    }
  }

  private persist(): void {
    if (!this.storePath) return;
    const data: SerializedStore = { credentials: Array.from(this.store.values()) };
    writeFileSync(this.storePath, JSON.stringify(data, null, 2), "utf8");
  }

  private makeId(): string {
    return randomBytes(12).toString("hex");
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  create(workspaceId: string, input: CredentialInput): Promise<CredentialRecord> {
    const key = deriveKey(this.workspaceKey);
    const { iv, ciphertext, authTag } = encrypt(JSON.stringify(input.payload), key);
    const now = new Date().toISOString();
    const cred: Credential = {
      id: this.makeId(),
      workspaceId,
      provider: input.provider,
      label: input.label,
      type: input.payload.type,
      encryptedPayload: ciphertext,
      iv,
      authTag,
      createdAt: now,
      updatedAt: now,
    };
    this.store.set(cred.id, cred);
    this.persist();
    return Promise.resolve(this.toRecord(cred));
  }

  list(workspaceId: string): Promise<CredentialRecord[]> {
    const results: CredentialRecord[] = [];
    for (const cred of this.store.values()) {
      if (cred.workspaceId === workspaceId) {
        results.push(this.toRecord(cred));
      }
    }
    return Promise.resolve(results);
  }

  get(workspaceId: string, id: string): Promise<CredentialRecord | undefined> {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return Promise.resolve(undefined);
    return Promise.resolve(this.toRecord(cred));
  }

  delete(workspaceId: string, id: string): Promise<boolean> {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return Promise.resolve(false);
    this.store.delete(id);
    this.persist();
    return Promise.resolve(true);
  }

  /** Decrypt and return the raw payload for a given credential. Internal use only. */
  getPayload(workspaceId: string, id: string): Promise<CredentialPayload | undefined> {
    const cred = this.store.get(id);
    if (!cred || cred.workspaceId !== workspaceId) return Promise.resolve(undefined);
    const key = deriveKey(this.workspaceKey);
    const raw = decrypt(cred.encryptedPayload, cred.iv, cred.authTag, key);
    return Promise.resolve(JSON.parse(raw) as CredentialPayload);
  }

  /**
   * Find and decrypt the first credential for a given provider in the workspace.
   * Used by the tool proxy to inject credentials at call time.
   */
  resolveForProvider(workspaceId: string, provider: string): Promise<CredentialPayload | undefined> {
    for (const cred of this.store.values()) {
      if (cred.workspaceId === workspaceId && cred.provider === provider) {
        const key = deriveKey(this.workspaceKey);
        const raw = decrypt(cred.encryptedPayload, cred.iv, cred.authTag, key);
        return Promise.resolve(JSON.parse(raw) as CredentialPayload);
      }
    }
    return Promise.resolve(undefined);
  }

  private toRecord(cred: Credential): CredentialRecord {
    return {
      id: cred.id,
      workspaceId: cred.workspaceId,
      provider: cred.provider,
      label: cred.label,
      type: cred.type,
      createdAt: cred.createdAt,
      updatedAt: cred.updatedAt,
    };
  }
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

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: ICredentialStore | undefined;

/**
 * Resolve the singleton credential store. The backend is selected by the
 * `GATEWAY_STORE_BACKEND` env var: `dynamodb` uses `CredentialStoreDynamodb`
 * (DynamoDB single-table, plaintext payload + SSE); any other value (or
 * unset) uses the in-memory store with optional file persistence.
 */
export function getCredentialStore(): ICredentialStore {
  if (!_store) {
    if (process.env["GATEWAY_STORE_BACKEND"] === "dynamodb") {
      _store = new CredentialStoreDynamodb();
    } else {
      const workspaceKey = process.env["GATEWAY_WORKSPACE_KEY"] ?? "dev-insecure-key";
      const storePath = process.env["GATEWAY_STORE_PATH"];
      _store = new CredentialStore(workspaceKey, storePath);
    }
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetCredentialStore(): void {
  _store = undefined;
}
