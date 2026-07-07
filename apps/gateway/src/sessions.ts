/**
 * DynamoDB-backed session store.
 *
 * Responsible for:
 *   1. Resolving a workspace ID for a Cognito userSub via the Memberships table.
 *   2. Writing short-lived session records to the Sessions table (TTL auto-cleanup).
 *   3. Looking up existing session records (used by POST /tools to validate tokens).
 */

import { QueryCommand, PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SessionRecord {
  userSub: string;
  sessionId: string;
  workspaceId: string;
  createdAt: string;
  expiresAt: number;
}

export interface MembershipRecord {
  workspaceId: string;
  userSub: string;
  role?: string;
}

// ---------------------------------------------------------------------------
// Table / index names (override in tests via env)
// ---------------------------------------------------------------------------

const MEMBERSHIPS_TABLE = () =>
  process.env["MEMBERSHIPS_TABLE"] ?? "Memberships";
const MEMBERSHIPS_GSI = () =>
  process.env["MEMBERSHIPS_GSI"] ?? "ByUserSub";
const SESSIONS_TABLE = () =>
  process.env["SESSIONS_TABLE"] ?? "Sessions";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Resolve the workspace ID for a user via the Memberships GSI.
 * If the user belongs to multiple workspaces, returns the first one found.
 * Pass `preferredWorkspaceId` to pick a specific workspace (validates membership).
 */
export async function resolveWorkspaceForUser(
  userSub: string,
  preferredWorkspaceId?: string,
): Promise<string | undefined> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new QueryCommand({
      TableName: MEMBERSHIPS_TABLE(),
      IndexName: MEMBERSHIPS_GSI(),
      KeyConditionExpression: "userSub = :sub",
      ExpressionAttributeValues: { ":sub": userSub },
    }),
  );

  const memberships = (result.Items ?? []) as MembershipRecord[];
  if (memberships.length === 0) return undefined;

  if (preferredWorkspaceId) {
    const match = memberships.find(
      (m) => m.workspaceId === preferredWorkspaceId,
    );
    return match?.workspaceId;
  }

  return memberships[0]!.workspaceId;
}

/**
 * Write a session record to the Sessions table.
 * The item TTL is set so DynamoDB automatically removes it after expiry.
 */
export async function putSession(record: SessionRecord): Promise<void> {
  const client = getDynamoDocClient();
  await client.send(
    new PutCommand({
      TableName: SESSIONS_TABLE(),
      Item: record,
    }),
  );
}

/**
 * Look up a session by userSub (the DDB hash key).
 * Returns undefined if missing or expired.
 */
export async function getSession(
  userSub: string,
): Promise<SessionRecord | undefined> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new GetCommand({
      TableName: SESSIONS_TABLE(),
      Key: { userSub },
    }),
  );

  if (!result.Item) return undefined;
  const item = result.Item as SessionRecord;
  const nowSecs = Math.floor(Date.now() / 1000);
  if (item.expiresAt <= nowSecs) return undefined;
  return item;
}
