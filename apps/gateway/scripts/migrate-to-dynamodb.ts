/**
 * One-shot migration of JSON-persisted gateway stores to DynamoDB.
 *
 * Reads the three legacy file-backed stores (credentials, API keys, permissions)
 * and writes each record into the corresponding DynamoDB single-table backend.
 * Audit is not migrated — it is an in-memory ring buffer with no persisted history.
 *
 * Usage:
 *   tsx scripts/migrate-to-dynamodb.ts --dry-run   # print what would be written
 *   tsx scripts/migrate-to-dynamodb.ts --apply     # write to DynamoDB (idempotent)
 *
 * Required env vars:
 *   GATEWAY_WORKSPACE_KEY      AES-256 key used to decrypt credential payloads
 *                              (needed only when GATEWAY_STORE_PATH is set)
 *
 * Optional source paths (skip the store when unset or file not found):
 *   GATEWAY_STORE_PATH         Path to the credentials JSON file
 *   GATEWAY_APIKEYS_PATH       Path to the API keys JSON file
 *   GATEWAY_PERMISSIONS_PATH   Path to the permissions JSON file
 *
 * Optional DynamoDB overrides (defaults match the production table names):
 *   CREDENTIALS_TABLE          default: Credentials
 *   APIKEYS_TABLE              default: ApiKeys
 *   PERMISSIONS_TABLE          default: Permissions
 *   DYNAMO_ENDPOINT            Override endpoint (e.g. http://localhost:8000 for local)
 *   AWS_REGION                 default: us-east-1
 *   AWS_ACCESS_KEY_ID          Required when DYNAMO_ENDPOINT is set
 *   AWS_SECRET_ACCESS_KEY      Required when DYNAMO_ENDPOINT is set
 */

import { createDecipheriv, scryptSync } from "crypto";
import { readFileSync, existsSync } from "fs";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const APPLY = args.includes("--apply");

if (!DRY_RUN && !APPLY) {
  process.stderr.write("Usage: tsx scripts/migrate-to-dynamodb.ts --dry-run | --apply\n");
  process.exit(1);
}
if (DRY_RUN && APPLY) {
  process.stderr.write("Error: --dry-run and --apply are mutually exclusive\n");
  process.exit(1);
}

const mode = DRY_RUN ? "dry-run" : "apply";
process.stdout.write(`[migrate] mode=${mode}\n`);

// ---------------------------------------------------------------------------
// DynamoDB client
// ---------------------------------------------------------------------------

const DYNAMO_ENDPOINT = process.env["DYNAMO_ENDPOINT"];
const AWS_REGION = process.env["AWS_REGION"] ?? "us-east-1";

function makeDdbClient(): DynamoDBDocumentClient {
  const base = new DynamoDBClient({
    endpoint: DYNAMO_ENDPOINT,
    region: AWS_REGION,
    credentials: DYNAMO_ENDPOINT
      ? {
          accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "local",
          secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "local",
        }
      : undefined,
  });
  return DynamoDBDocumentClient.from(base);
}

// ---------------------------------------------------------------------------
// Crypto helpers (mirrors credentials.ts)
// ---------------------------------------------------------------------------

const ALGORITHM = "aes-256-gcm";
const KEY_LENGTH = 32;
const SALT = "utdk-gateway-v1";

function deriveKey(workspaceKey: string): Buffer {
  return scryptSync(workspaceKey, SALT, KEY_LENGTH);
}

function decryptPayload(encryptedPayload: string, iv: string, authTag: string, key: Buffer): string {
  const decipher = createDecipheriv(ALGORITHM, key, Buffer.from(iv, "base64"));
  decipher.setAuthTag(Buffer.from(authTag, "base64"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedPayload, "base64")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

// ---------------------------------------------------------------------------
// File reading helpers
// ---------------------------------------------------------------------------

function readJsonFile<T>(path: string): T | null {
  if (!existsSync(path)) {
    process.stdout.write(`[migrate] not found: ${path} — skipping\n`);
    return null;
  }
  try {
    return JSON.parse(readFileSync(path, "utf8")) as T;
  } catch (err) {
    process.stderr.write(
      `[migrate] failed to parse ${path}: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return null;
  }
}

// ---------------------------------------------------------------------------
// Write helper
// ---------------------------------------------------------------------------

let written = 0;
let skipped = 0;

async function putItem(
  client: DynamoDBDocumentClient,
  tableName: string,
  item: Record<string, unknown>,
  label: string,
): Promise<void> {
  process.stdout.write(`[migrate]   ${DRY_RUN ? "(dry-run) " : ""}put ${tableName} ${label}\n`);
  if (DRY_RUN) {
    process.stdout.write(`            item: ${JSON.stringify(item)}\n`);
    written++;
    return;
  }
  try {
    await client.send(
      new PutCommand({
        TableName: tableName,
        Item: item,
        // Idempotent: skip if the item already exists (safe to re-run).
        ConditionExpression: "attribute_not_exists(PK)",
      }),
    );
    written++;
  } catch (err) {
    const name = (err as { name?: string }).name;
    if (name === "ConditionalCheckFailedException") {
      process.stdout.write(`[migrate]   skip (already exists): ${tableName} ${label}\n`);
      skipped++;
    } else {
      throw err;
    }
  }
}

// ---------------------------------------------------------------------------
// Credentials migration
// ---------------------------------------------------------------------------

interface LegacyCredential {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: string;
  encryptedPayload: string;
  iv: string;
  authTag: string;
  createdAt: string;
  updatedAt: string;
}

interface CredentialsFile {
  credentials: LegacyCredential[];
}

async function migrateCredentials(client: DynamoDBDocumentClient): Promise<void> {
  const storePath = process.env["GATEWAY_STORE_PATH"];
  if (!storePath) {
    process.stdout.write("[migrate] GATEWAY_STORE_PATH not set — skipping credentials\n");
    return;
  }

  const data = readJsonFile<CredentialsFile>(storePath);
  if (!data) return;

  const workspaceKey = process.env["GATEWAY_WORKSPACE_KEY"];
  if (!workspaceKey) {
    process.stderr.write(
      "[migrate] GATEWAY_WORKSPACE_KEY is required to decrypt credentials. Aborting.\n",
    );
    process.exit(1);
  }

  const tableName = process.env["CREDENTIALS_TABLE"] ?? "Credentials";
  const credentials = data.credentials ?? [];
  process.stdout.write(`[migrate] credentials: ${credentials.length} record(s) from ${storePath}\n`);

  const key = deriveKey(workspaceKey);

  for (const cred of credentials) {
    let plaintextPayload: string;
    try {
      plaintextPayload = decryptPayload(cred.encryptedPayload, cred.iv, cred.authTag, key);
    } catch (err) {
      process.stderr.write(
        `[migrate] failed to decrypt credential ${cred.id} (provider=${cred.provider}): ${err instanceof Error ? err.message : String(err)}\n`,
      );
      process.stderr.write("[migrate] Aborting — check GATEWAY_WORKSPACE_KEY matches the encrypting key.\n");
      process.exit(1);
    }

    // Validate the decrypted JSON before writing.
    let parsedPayload: Record<string, unknown>;
    try {
      parsedPayload = JSON.parse(plaintextPayload) as Record<string, unknown>;
    } catch {
      process.stderr.write(`[migrate] decrypted payload for credential ${cred.id} is not valid JSON\n`);
      process.exit(1);
    }

    const record: Record<string, unknown> = {
      PK: `WS#${cred.workspaceId}`,
      SK: `CRED#${cred.provider}#${cred.id}`,
      id: cred.id,
      workspaceId: cred.workspaceId,
      provider: cred.provider,
      type: cred.type,
      payload: JSON.stringify(parsedPayload),
      createdAt: cred.createdAt,
      updatedAt: cred.updatedAt,
    };
    if (cred.label !== undefined) record["label"] = cred.label;

    const pointer: Record<string, unknown> = {
      PK: `WS#${cred.workspaceId}`,
      SK: `CREDID#${cred.id}`,
      provider: cred.provider,
    };

    await putItem(client, tableName, record, `CRED#${cred.provider}#${cred.id}`);
    await putItem(client, tableName, pointer, `CREDID#${cred.id}`);
  }
}

// ---------------------------------------------------------------------------
// ApiKeys migration
// ---------------------------------------------------------------------------

interface LegacyApiKey {
  id: string;
  workspaceId: string;
  name: string;
  callerId: string;
  secretHash: string;
  createdAt: string;
  createdBy: string;
  expiresAt?: string | null;
}

interface ApiKeysFile {
  apiKeys: LegacyApiKey[];
}

async function migrateApiKeys(client: DynamoDBDocumentClient): Promise<void> {
  const apiKeysPath = process.env["GATEWAY_APIKEYS_PATH"];
  if (!apiKeysPath) {
    process.stdout.write("[migrate] GATEWAY_APIKEYS_PATH not set — skipping API keys\n");
    return;
  }

  const data = readJsonFile<ApiKeysFile>(apiKeysPath);
  if (!data) return;

  const tableName = process.env["APIKEYS_TABLE"] ?? "ApiKeys";
  const apiKeys = data.apiKeys ?? [];
  process.stdout.write(`[migrate] apiKeys: ${apiKeys.length} record(s) from ${apiKeysPath}\n`);

  for (const key of apiKeys) {
    const record: Record<string, unknown> = {
      PK: `WS#${key.workspaceId}`,
      SK: `APIKEY#${key.id}`,
      id: key.id,
      workspaceId: key.workspaceId,
      name: key.name,
      callerId: key.callerId,
      secretHash: key.secretHash,
      createdAt: key.createdAt,
      createdBy: key.createdBy,
    };
    if (key.expiresAt) {
      record["expiresAt"] = key.expiresAt;
      // Numeric TTL (epoch seconds) for DynamoDB auto-eviction.
      record["ttl"] = Math.floor(new Date(key.expiresAt).getTime() / 1000);
    }

    // The hash mirror item lets verify() do a point lookup by secretHash.
    const mirror: Record<string, unknown> = {
      PK: `WS#${key.workspaceId}`,
      SK: `APIKEYHASH#${key.secretHash}`,
      id: key.id,
      workspaceId: key.workspaceId,
    };
    if (key.expiresAt) {
      mirror["ttl"] = Math.floor(new Date(key.expiresAt).getTime() / 1000);
    }

    await putItem(client, tableName, record, `APIKEY#${key.id}`);
    await putItem(client, tableName, mirror, `APIKEYHASH#${key.secretHash}`);
  }
}

// ---------------------------------------------------------------------------
// Permissions migration
// ---------------------------------------------------------------------------

interface LegacyPermission {
  id: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  grantedAt: string;
  grantedBy: string;
}

interface PermissionsFile {
  permissions: LegacyPermission[];
}

async function migratePermissions(client: DynamoDBDocumentClient): Promise<void> {
  const permissionsPath = process.env["GATEWAY_PERMISSIONS_PATH"];
  if (!permissionsPath) {
    process.stdout.write("[migrate] GATEWAY_PERMISSIONS_PATH not set — skipping permissions\n");
    return;
  }

  const data = readJsonFile<PermissionsFile>(permissionsPath);
  if (!data) return;

  const tableName = process.env["PERMISSIONS_TABLE"] ?? "Permissions";
  const permissions = data.permissions ?? [];
  process.stdout.write(`[migrate] permissions: ${permissions.length} record(s) from ${permissionsPath}\n`);

  for (const perm of permissions) {
    const sk = `PERM#${perm.callerId}#${perm.provider}#${perm.operation}`;
    const record: Record<string, unknown> = {
      PK: `WS#${perm.workspaceId}`,
      SK: sk,
      id: perm.id,
      workspaceId: perm.workspaceId,
      callerId: perm.callerId,
      provider: perm.provider,
      operation: perm.operation,
      grantedAt: perm.grantedAt,
      grantedBy: perm.grantedBy,
    };

    // permId pointer: lets revoke(wsId, permId) resolve the (caller,provider,op) tuple.
    const pointer: Record<string, unknown> = {
      PK: `WS#${perm.workspaceId}`,
      SK: `PERMID#${perm.id}`,
      callerId: perm.callerId,
      provider: perm.provider,
      operation: perm.operation,
    };

    await putItem(client, tableName, record, sk);
    await putItem(client, tableName, pointer, `PERMID#${perm.id}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const client = APPLY ? makeDdbClient() : ({} as DynamoDBDocumentClient);

  await migrateCredentials(client);
  await migrateApiKeys(client);
  await migratePermissions(client);

  process.stdout.write(
    `[migrate] done — ${written} item(s) written, ${skipped} item(s) skipped (already existed)\n`,
  );
}

main().catch((err) => {
  process.stderr.write(`[migrate] fatal: ${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
