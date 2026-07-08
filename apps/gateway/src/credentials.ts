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

import { randomBytes } from "crypto";
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

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: ICredentialStore | undefined;

/** Resolve the singleton credential store (always DynamoDB). */
export function getCredentialStore(): ICredentialStore {
  if (!_store) {
    _store = new CredentialStoreDynamodb();
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetCredentialStore(): void {
  _store = undefined;
}
