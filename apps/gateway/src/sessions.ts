/**
 * DynamoDB-backed session store for the active-workspace picker.
 *
 * Each user (Cognito `sub`) has at most one `Sessions` item keyed by `userId`
 * carrying `currentWorkspaceId`. The auth middleware reads this to scope every
 * request to the user's active workspace; `POST /auth/sessions` writes it when
 * the user picks a workspace. A TTL attribute (`expiresAt`) lets DynamoDB
 * reclaim stale rows.
 */

import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const SESSIONS_TABLE = () =>
  process.env["SESSIONS_TABLE"] ?? "Sessions";

const DEFAULT_SESSION_TTL_SECONDS = (): number => {
  const raw = Number(process.env["GATEWAY_SESSION_TTL_SECONDS"]);
  return Number.isFinite(raw) && raw > 0 ? raw : 604_800; // 7 days
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Read the user's active workspace id from the Sessions table.
 * Returns undefined when no session row exists, `currentWorkspaceId` is unset,
 * or the row has expired (TTL reaped or about to be).
 */
export async function getCurrentWorkspace(
  userId: string,
): Promise<string | undefined> {
  const client = getDynamoDocClient();
  let result;
  try {
    result = await client.send(
      new GetCommand({
        TableName: SESSIONS_TABLE(),
        Key: { userId },
        ProjectionExpression: "currentWorkspaceId, expiresAt",
      }),
    );
  } catch (err) {
    // Local/dev often has Users/Memberships from SSM but no Sessions table yet.
    // Treat a missing table (or row read failure) as "no active workspace".
    const name = err instanceof Error ? err.name : "";
    if (name === "ResourceNotFoundException") return undefined;
    throw err;
  }
  if (!result.Item) return undefined;
  const item = result.Item as { currentWorkspaceId?: string; expiresAt?: number };
  // Honour the TTL client-side so a stale (not-yet-reaped) row is treated as absent.
  if (
    typeof item.expiresAt === "number" &&
    item.expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return undefined;
  }
  return item.currentWorkspaceId;
}

/**
 * Persist the user's active workspace choice. Writes `currentWorkspaceId`
 * and a unix-seconds `expiresAt` (the TTL attribute on the Sessions table).
 */
export async function setCurrentWorkspace(
  userId: string,
  workspaceId: string,
  ttlSeconds?: number,
): Promise<void> {
  const client = getDynamoDocClient();
  const ttl = ttlSeconds ?? DEFAULT_SESSION_TTL_SECONDS();
  const expiresAt = Math.floor(Date.now() / 1000) + ttl;
  await client.send(
    new PutCommand({
      TableName: SESSIONS_TABLE(),
      Item: { userId, currentWorkspaceId: workspaceId, expiresAt },
    }),
  );
}
