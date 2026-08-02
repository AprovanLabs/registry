/**
 * DynamoDB-backed membership lookup.
 *
 * `Memberships` is keyed by `workspaceId` (HASH) + `userId` (RANGE), so a
 * direct GetItem resolves whether a user belongs to a workspace and the role
 * they hold there. The auth middleware uses this to enforce that a request's
 * active workspace is one the caller is a member of.
 */

import { invalidatePrincipal } from "./auth-cache.js";
import { dynamo } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MembershipRecord {
  workspaceId: string;
  userId: string;
  /** Workspace-scoped role, e.g. "admin" | "member". */
  role?: string;
  createdAt?: string;
}

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const DYNAMODB_MEMBERSHIPS_TABLE = () =>
  process.env["DYNAMODB_MEMBERSHIPS_TABLE"] ?? "Memberships";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch a single membership row by composite key.
 * Returns undefined when the user is not a member of the workspace.
 */
export async function getMembership(
  workspaceId: string,
  userId: string,
): Promise<MembershipRecord | undefined> {
  const { client, GetCommand } = await dynamo();
  const result = await client.send(
    new GetCommand({
      TableName: DYNAMODB_MEMBERSHIPS_TABLE(),
      Key: { workspaceId, userId },
    }),
  );
  return result.Item as MembershipRecord | undefined;
}

/** List all membership rows for a workspace. */
export async function listMembers(workspaceId: string): Promise<MembershipRecord[]> {
  const { client, QueryCommand } = await dynamo();
  const result = await client.send(
    new QueryCommand({
      TableName: DYNAMODB_MEMBERSHIPS_TABLE(),
      KeyConditionExpression: "workspaceId = :ws",
      ExpressionAttributeValues: { ":ws": workspaceId },
    }),
  );
  return (result.Items ?? []) as MembershipRecord[];
}

/**
 * List every workspace a user belongs to, via the `ByUserId` GSI on
 * `Memberships`. Used by `GET /session` to populate the workspace picker —
 * the auth middleware cannot do this because it only resolves the *active*
 * workspace.
 */
export async function listMembershipsForUser(
  userId: string,
): Promise<MembershipRecord[]> {
  const { client, QueryCommand } = await dynamo();
  const result = await client.send(
    new QueryCommand({
      TableName: DYNAMODB_MEMBERSHIPS_TABLE(),
      IndexName: "ByUserId",
      KeyConditionExpression: "userId = :us",
      ExpressionAttributeValues: { ":us": userId },
    }),
  );
  return (result.Items ?? []) as MembershipRecord[];
}

/** Add or upsert a membership row (used by invite accept). */
export async function putMembership(record: MembershipRecord): Promise<void> {
  const item: Record<string, string> = {
    workspaceId: record.workspaceId,
    userId: record.userId,
    role: record.role ?? "member",
    createdAt: record.createdAt ?? new Date().toISOString(),
  };
  const { client, PutCommand } = await dynamo();
  await client.send(
    new PutCommand({ TableName: DYNAMODB_MEMBERSHIPS_TABLE(), Item: item }),
  );
  // A role change (or a brand-new membership) changes what the auth cache
  // would resolve for this user — drop any cached principal immediately
  // rather than waiting out the TTL.
  invalidatePrincipal(record.userId);
}

/** Remove a membership row. Returns false if it did not exist. */
export async function removeMember(
  workspaceId: string,
  userId: string,
): Promise<boolean> {
  const existing = await getMembership(workspaceId, userId);
  if (!existing) return false;
  const { client, DeleteCommand } = await dynamo();
  await client.send(
    new DeleteCommand({
      TableName: DYNAMODB_MEMBERSHIPS_TABLE(),
      Key: { workspaceId, userId },
    }),
  );
  // Revocation must take effect immediately, not after the auth-cache TTL —
  // see specs/identity-store "Revocation takes effect".
  invalidatePrincipal(userId);
  return true;
}
