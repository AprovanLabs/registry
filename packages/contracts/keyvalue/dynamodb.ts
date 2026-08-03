/**
 * DynamoDB key-value engine — single-table PK/SK pattern for @utdk/keyvalue.
 *
 * Partition key `KV#<prefix>` (host supplies the workspace-scoped prefix via
 * binding options) and sort key `KEY#<key>`. Values are JSON attributes;
 * `ttl_seconds` maps to a DynamoDB TTL attribute (`expiresAt`, epoch seconds).
 *
 * Credential: bearer JSON `{ "accessKeyId", "secretAccessKey", "sessionToken"? }`.
 * Binding options: `tableName` (required), `region?`, `prefix?` (default "").
 */

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  type DynamoDBDocumentClient as DynamoDBDocumentClientType,
} from "@aws-sdk/lib-dynamodb";
import {
  DEFAULT_LIST_LIMIT,
  KeyValueError,
  validateKey,
  validateListArgs,
  validateSetArgs,
  type KeyValueClient,
  type KeyValueDeleteArgs,
  type KeyValueDeleteResult,
  type KeyValueGetArgs,
  type KeyValueGetResult,
  type KeyValueListArgs,
  type KeyValueListResult,
  type KeyValueSetArgs,
  type KeyValueSetResult,
} from "./index.js";

const PK_PREFIX = "KV#";
const SK_PREFIX = "KEY#";
const VALUE_ATTR = "value";
const UPDATED_ATTR = "updatedAt";
const TTL_ATTR = "expiresAt";

export interface AwsCredentialSecret {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export interface DynamoKeyValueConfig {
  tableName: string;
  region?: string;
  /** Host-scoped partition prefix (e.g. workspace id). */
  prefix?: string;
  credentials: AwsCredentialSecret;
  /** Injection point for tests. */
  documentClient?: DynamoDBDocumentClientType;
}

/** Parse the bearer credential JSON for DynamoDB. */
export function parseAwsCredentialSecret(secret: string): AwsCredentialSecret {
  let parsed: unknown;
  try {
    parsed = JSON.parse(secret);
  } catch {
    throw new KeyValueError(
      "dynamodb credential must be JSON with accessKeyId and secretAccessKey",
      400,
    );
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new KeyValueError(
      "dynamodb credential must be JSON with accessKeyId and secretAccessKey",
      400,
    );
  }
  const record = parsed as Record<string, unknown>;
  if (typeof record.accessKeyId !== "string" || typeof record.secretAccessKey !== "string") {
    throw new KeyValueError(
      "dynamodb credential must be JSON with accessKeyId and secretAccessKey",
      400,
    );
  }
  return {
    accessKeyId: record.accessKeyId,
    secretAccessKey: record.secretAccessKey,
    ...(typeof record.sessionToken === "string" ? { sessionToken: record.sessionToken } : {}),
  };
}

function partitionKey(prefix: string): string {
  return `${PK_PREFIX}${prefix}`;
}

function sortKey(key: string): string {
  return `${SK_PREFIX}${key}`;
}

function keyFromSortKey(sk: string): string {
  return sk.startsWith(SK_PREFIX) ? sk.slice(SK_PREFIX.length) : sk;
}

function encodeCursor(key: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(key), "utf8").toString("base64url");
}

function decodeCursor(cursor: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(Buffer.from(cursor, "base64url").toString("utf8")) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("not an object");
    }
    return parsed as Record<string, unknown>;
  } catch {
    throw new KeyValueError("cursor is invalid or expired", 400);
  }
}

function isExpired(expiresAt: unknown, nowSeconds = Math.floor(Date.now() / 1000)): boolean {
  return typeof expiresAt === "number" && Number.isFinite(expiresAt) && expiresAt <= nowSeconds;
}

function expiresAtIso(expiresAt: unknown): string | undefined {
  return typeof expiresAt === "number" && Number.isFinite(expiresAt)
    ? new Date(expiresAt * 1000).toISOString()
    : undefined;
}

function mapAwsError(err: unknown, operation: string): KeyValueError {
  if (err instanceof KeyValueError) return err;
  const message = err instanceof Error ? err.message : String(err);
  const status =
    typeof err === "object" &&
    err !== null &&
    "$metadata" in err &&
    typeof (err as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode ===
      "number"
      ? (err as { $metadata: { httpStatusCode: number } }).$metadata.httpStatusCode
      : 502;
  return new KeyValueError(`dynamodb ${operation} failed: ${message}`, status);
}

function createDocumentClient(config: DynamoKeyValueConfig): DynamoDBDocumentClientType {
  if (config.documentClient) return config.documentClient;
  const client = new DynamoDBClient({
    region: config.region ?? "us-east-1",
    credentials: {
      accessKeyId: config.credentials.accessKeyId,
      secretAccessKey: config.credentials.secretAccessKey,
      ...(config.credentials.sessionToken
        ? { sessionToken: config.credentials.sessionToken }
        : {}),
    },
  });
  return DynamoDBDocumentClient.from(client, {
    marshallOptions: { removeUndefinedValues: true },
  });
}

/** Build a key-value client backed by DynamoDB. */
export function dynamodbKeyValue(config: DynamoKeyValueConfig): KeyValueClient {
  const tableName = config.tableName;
  if (!tableName) {
    throw new KeyValueError("dynamodb needs tableName in binding options", 400);
  }
  const prefix = config.prefix ?? "";
  const pk = partitionKey(prefix);
  const client = createDocumentClient(config);

  return {
    async get(args: KeyValueGetArgs): Promise<KeyValueGetResult> {
      const key = validateKey(args.key);
      try {
        const result = await client.send(
          new GetCommand({
            TableName: tableName,
            Key: { PK: pk, SK: sortKey(key) },
          }),
        );
        const item = result.Item;
        if (!item || isExpired(item[TTL_ATTR])) {
          return { key, value: undefined, found: false };
        }
        return {
          key,
          value: item[VALUE_ATTR] ?? null,
          found: true,
          updatedAt: typeof item[UPDATED_ATTR] === "string" ? item[UPDATED_ATTR] : undefined,
          expiresAt: expiresAtIso(item[TTL_ATTR]),
        };
      } catch (err) {
        throw mapAwsError(err, "get");
      }
    },

    async set(args: KeyValueSetArgs): Promise<KeyValueSetResult> {
      validateSetArgs(args);
      const key = args.key;
      const updatedAt = new Date().toISOString();
      const item: Record<string, unknown> = {
        PK: pk,
        SK: sortKey(key),
        [VALUE_ATTR]: args.value,
        [UPDATED_ATTR]: updatedAt,
      };
      let expiresAt: number | undefined;
      if (args.ttl_seconds !== undefined) {
        expiresAt = Math.floor(Date.now() / 1000) + Math.floor(args.ttl_seconds);
        item[TTL_ATTR] = expiresAt;
      }
      try {
        await client.send(
          new PutCommand({
            TableName: tableName,
            Item: item,
          }),
        );
        return {
          key,
          updatedAt,
          ...(expiresAt !== undefined ? { expiresAt: new Date(expiresAt * 1000).toISOString() } : {}),
        };
      } catch (err) {
        throw mapAwsError(err, "set");
      }
    },

    async delete(args: KeyValueDeleteArgs): Promise<KeyValueDeleteResult> {
      const key = validateKey(args.key);
      try {
        const result = await client.send(
          new DeleteCommand({
            TableName: tableName,
            Key: { PK: pk, SK: sortKey(key) },
            ReturnValues: "ALL_OLD",
          }),
        );
        return { key, deleted: Boolean(result.Attributes) };
      } catch (err) {
        throw mapAwsError(err, "delete");
      }
    },

    async list(args: KeyValueListArgs = {}): Promise<KeyValueListResult> {
      validateListArgs(args);
      const keyPrefix = args.prefix ?? "";
      const limit = args.limit ?? DEFAULT_LIST_LIMIT;
      const keys: KeyValueListResult["keys"] = [];
      let exclusiveStartKey = args.cursor ? decodeCursor(args.cursor) : undefined;

      try {
        while (keys.length < limit) {
          const result = await client.send(
            new QueryCommand({
              TableName: tableName,
              KeyConditionExpression: keyPrefix
                ? "PK = :pk AND begins_with(SK, :skPrefix)"
                : "PK = :pk",
              ExpressionAttributeValues: keyPrefix
                ? { ":pk": pk, ":skPrefix": sortKey(keyPrefix) }
                : { ":pk": pk },
              ProjectionExpression: `SK, ${UPDATED_ATTR}, ${TTL_ATTR}`,
              ExclusiveStartKey: exclusiveStartKey,
              Limit: limit - keys.length,
            }),
          );

          for (const item of result.Items ?? []) {
            if (isExpired(item[TTL_ATTR])) continue;
            const rawSk = String(item.SK ?? "");
            keys.push({
              key: keyFromSortKey(rawSk),
              updatedAt: typeof item[UPDATED_ATTR] === "string" ? item[UPDATED_ATTR] : undefined,
              expiresAt: expiresAtIso(item[TTL_ATTR]),
            });
            if (keys.length >= limit) break;
          }

          if (!result.LastEvaluatedKey || keys.length >= limit) {
            return {
              keys,
              ...(result.LastEvaluatedKey && keys.length >= limit
                ? { cursor: encodeCursor(result.LastEvaluatedKey) }
                : {}),
            };
          }
          exclusiveStartKey = result.LastEvaluatedKey;
        }

        return { keys };
      } catch (err) {
        throw mapAwsError(err, "list");
      }
    },
  };
}
