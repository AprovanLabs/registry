/**
 * DynamoDB-backed user profile store for the active-workspace preference.
 *
 * The `Users` table (PK: `sub`) holds the durable user record created by the
 * PostConfirmation trigger (`{ sub, email, createdAt }`). The `activeWorkspaceId`
 * attribute persists the user's last-chosen workspace so it survives across
 * sessions — unlike the `Sessions` table, which is TTL-based and reaped after
 * the session ends.
 *
 * `GET /session` reads `activeWorkspaceId` here first, falling back to the
 * ephemeral `Sessions` row for users who selected a workspace before this
 * field existed. `POST /session/workspace` (and the `POST /auth/sessions`
 * alias) write to both stores so the per-request auth middleware
 * (`requireAuth`) can keep reading the fast `Sessions` row.
 */

import { GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const USERS_TABLE = () =>
  process.env["USERS_TABLE"] ?? "Users";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Read the user's persisted active workspace id from the `Users` table.
 * Returns undefined when no user row exists or `activeWorkspaceId` is unset
 * (e.g. a new user who has not yet picked a workspace).
 */
export async function getActiveWorkspaceId(
  userSub: string,
): Promise<string | undefined> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new GetCommand({
      TableName: USERS_TABLE(),
      Key: { sub: userSub },
      ProjectionExpression: "activeWorkspaceId",
    }),
  );
  if (!result.Item) return undefined;
  const item = result.Item as { activeWorkspaceId?: string };
  return item.activeWorkspaceId;
}

/**
 * Persist the user's active workspace choice to the `Users` table. Uses an
 * `UpdateCommand` so only `activeWorkspaceId` is touched — the rest of the
 * user record (email, createdAt, …) is preserved.
 */
export async function setActiveWorkspaceId(
  userSub: string,
  workspaceId: string,
): Promise<void> {
  const client = getDynamoDocClient();
  await client.send(
    new UpdateCommand({
      TableName: USERS_TABLE(),
      Key: { sub: userSub },
      UpdateExpression: "SET activeWorkspaceId = :ws",
      ExpressionAttributeValues: { ":ws": workspaceId },
    }),
  );
}
