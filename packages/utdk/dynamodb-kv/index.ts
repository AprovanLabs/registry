/**
 * `utdk/dynamodb-kv` — Amazon DynamoDB provider for `@utdk/keyvalue`.
 */

import {
  keyvalueToolEntries,
  parseAwsCredentialSecret,
  secretFromHeaders,
  type KeyValueClient,
  type KeyValueClientOptions,
} from "@utdk/keyvalue";
import { dynamodbKeyValue } from "@utdk/keyvalue/dynamodb";
import { createLazyClient } from "../client.js";

export type {
  KeyValueClient,
  KeyValueDeleteArgs,
  KeyValueDeleteResult,
  KeyValueGetArgs,
  KeyValueGetResult,
  KeyValueListArgs,
  KeyValueListResult,
  KeyValueSetArgs,
  KeyValueSetResult,
} from "@utdk/keyvalue";

export interface DynamoKeyValueClientOptions extends KeyValueClientOptions {
  tableName?: string;
  region?: string;
  prefix?: string;
}

export async function createDynamodbKeyValueClient(
  options: DynamoKeyValueClientOptions = {},
): Promise<KeyValueClient> {
  const secret = secretFromHeaders(
    options.headers,
    "dynamodb",
    "AWS credential JSON (accessKeyId + secretAccessKey)",
  );
  const credentials = parseAwsCredentialSecret(secret);
  const tableName = options.tableName;
  if (!tableName) {
    throw new Error('dynamodb needs tableName in binding options (e.g. { "tableName": "MyKvTable" })');
  }
  return dynamodbKeyValue({
    tableName,
    region: options.region,
    prefix: options.prefix,
    credentials,
  });
}

const defaultClient = createLazyClient(() => createDynamodbKeyValueClient());

export default defaultClient;

export const tools = keyvalueToolEntries("dynamodb");
