/**
 * DynamoDB-backed membership lookup.
 *
 * `Memberships` is keyed by `workspaceId` (HASH) + `userSub` (RANGE), so a
 * direct GetItem resolves whether a user belongs to a workspace and the role
 * they hold there. The auth middleware uses this to enforce that a request's
 * active workspace is one the caller is a member of.
 */

import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MembershipRecord {
  workspaceId: string;
  userSub: string;
  /** Workspace-scoped role, e.g. "admin" | "member". */
  role?: string;
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
