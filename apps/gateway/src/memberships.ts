/**
 * DynamoDB-backed membership lookup.
 *
 * `Memberships` is keyed by `workspaceId` (HASH) + `userSub` (RANGE), so a
 * direct GetItem resolves whether a user belongs to a workspace and the role
 * they hold there. The auth middleware uses this to enforce that a request's
 * active workspace is one the caller is a member of.
 */

import { DeleteCommand, GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MembershipRecord {
  workspaceId: string;
  userSub: string;
  /** Workspace-scoped role, e.g. "admin" | "member". */
  role?: string;
  createdAt?: string;
}

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const MEMBERSHIPS_TABLE = () =>
  process.env["MEMBERSHIPS_TABLE"] ?? "Memberships";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch a single membership row by composite key.
 * Returns undefined when the user is not a member of the workspace.
 */
export async function getMembership(
  workspaceId: string,
  userSub: string,
): Promise<MembershipRecord | undefined> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new GetCommand({
      TableName: MEMBERSHIPS_TABLE(),
      Key: { workspaceId, userSub },
    }),
  );
  return result.Item as MembershipRecord | undefined;
}

/** List all membership rows for a workspace. */
export async function listMembers(workspaceId: string): Promise<MembershipRecord[]> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new QueryCommand({
      TableName: MEMBERSHIPS_TABLE(),
      KeyConditionExpression: "workspaceId = :ws",
      ExpressionAttributeValues: { ":ws": workspaceId },
    }),
  );
  return (result.Items ?? []) as MembershipRecord[];
}

/**
 * List every workspace a user belongs to, via the `ByUserSub` GSI on
 * `Memberships`. Used by `GET /session` to populate the workspace picker —
 * the auth middleware cannot do this because it only resolves the *active*
 * workspace.
 */
export async function listMembershipsForUser(
  userSub: string,
): Promise<MembershipRecord[]> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new QueryCommand({
      TableName: MEMBERSHIPS_TABLE(),
      IndexName: "ByUserSub",
      KeyConditionExpression: "userSub = :us",
      ExpressionAttributeValues: { ":us": userSub },
    }),
  );
  return (result.Items ?? []) as MembershipRecord[];
}

/** Add or upsert a membership row (used by invite accept). */
export async function putMembership(record: MembershipRecord): Promise<void> {
  const item: Record<string, string> = {
    workspaceId: record.workspaceId,
    userSub: record.userSub,
    role: record.role ?? "member",
    createdAt: record.createdAt ?? new Date().toISOString(),
  };
  await getDynamoDocClient().send(
    new PutCommand({ TableName: MEMBERSHIPS_TABLE(), Item: item }),
  );
}

/** Remove a membership row. Returns false if it did not exist. */
export async function removeMember(
  workspaceId: string,
  userSub: string,
): Promise<boolean> {
  const existing = await getMembership(workspaceId, userSub);
  if (!existing) return false;
  await getDynamoDocClient().send(
    new DeleteCommand({
      TableName: MEMBERSHIPS_TABLE(),
      Key: { workspaceId, userSub },
    }),
  );
  return true;
}
