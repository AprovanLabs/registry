/**
 * DynamoDB data layer for workspace invite tokens.
 *
 * `Invites` is keyed by `inviteToken` (PK). Two GSIs:
 *   - `ByEmailWorkspace` (email HASH, workspaceId RANGE) — used by the
 *     post-confirmation Lambda to resolve an invite on sign-up.
 *   - `ByWorkspace` (workspaceId HASH) — used by `listInvites` to display
 *     pending invites in the admin panel.
 *
 * A TTL attribute (`expiresAt`, unix epoch seconds) drives DynamoDB auto-eviction.
 * Client-side TTL checks ensure stale (not-yet-reaped) rows are treated as absent.
 */

import { randomBytes } from "crypto";
import { dynamo } from "./db/client.js";

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const DYNAMODB_INVITES_TABLE = () => process.env["DYNAMODB_INVITES_TABLE"] ?? "Invites";

const DEFAULT_TTL_SECONDS = 7 * 24 * 3600; // 7 days

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InviteRecord {
  inviteToken: string;
  workspaceId: string;
  email: string;
  role: string;
  groupIds: string[];
  invitedBy: string;
  createdAt: string;
  expiresAt: number;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Write a new invite row. Generates a 256-bit random hex token.
 * The token is returned so the caller can include it in the magic link.
 */
export async function createInvite(
  workspaceId: string,
  email: string,
  role: string,
  groupIds: string[],
  invitedBy: string,
): Promise<InviteRecord> {
  const inviteToken = randomBytes(32).toString("hex");
  const now = new Date().toISOString();
  const expiresAt = Math.floor(Date.now() / 1000) + DEFAULT_TTL_SECONDS;

  const item: InviteRecord = {
    inviteToken,
    workspaceId,
    email: email.toLowerCase().trim(),
    role: role || "member",
    groupIds: groupIds ?? [],
    invitedBy,
    createdAt: now,
    expiresAt,
  };

  const { client, PutCommand } = await dynamo();
  await client.send(
    new PutCommand({
      TableName: DYNAMODB_INVITES_TABLE(),
      Item: item as unknown as Record<string, unknown>,
    }),
  );

  return item;
}

/**
 * Fetch an invite by token.
 * Returns undefined when not found or TTL has passed.
 */
export async function getInvite(inviteToken: string): Promise<InviteRecord | undefined> {
  const { client, GetCommand } = await dynamo();
  const result = await client.send(
    new GetCommand({
      TableName: DYNAMODB_INVITES_TABLE(),
      Key: { inviteToken },
    }),
  );
  if (!result.Item) return undefined;
  const item = result.Item as InviteRecord;
  if (item.expiresAt <= Math.floor(Date.now() / 1000)) return undefined;
  return item;
}

/**
 * List all non-expired pending invites for a workspace (uses ByWorkspace GSI).
 */
export async function listInvites(workspaceId: string): Promise<InviteRecord[]> {
  const { client, QueryCommand } = await dynamo();
  const result = await client.send(
    new QueryCommand({
      TableName: DYNAMODB_INVITES_TABLE(),
      IndexName: "ByWorkspace",
      KeyConditionExpression: "workspaceId = :ws",
      ExpressionAttributeValues: { ":ws": workspaceId },
    }),
  );
  const now = Math.floor(Date.now() / 1000);
  return ((result.Items ?? []) as InviteRecord[]).filter((i) => i.expiresAt > now);
}

/**
 * Delete an invite row (admin revoke). Returns false if it did not exist.
 */
export async function revokeInvite(inviteToken: string): Promise<boolean> {
  const existing = await getInvite(inviteToken);
  if (!existing) return false;
  const { client, DeleteCommand } = await dynamo();
  await client.send(
    new DeleteCommand({
      TableName: DYNAMODB_INVITES_TABLE(),
      Key: { inviteToken },
    }),
  );
  return true;
}

/**
 * Consume an invite: delete it and return its data so the caller can create a
 * Membership. Returns undefined when the token is not found or expired.
 */
export async function consumeInvite(inviteToken: string): Promise<InviteRecord | undefined> {
  const invite = await getInvite(inviteToken);
  if (!invite) return undefined;
  const { client, DeleteCommand } = await dynamo();
  await client.send(
    new DeleteCommand({
      TableName: DYNAMODB_INVITES_TABLE(),
      Key: { inviteToken },
    }),
  );
  return invite;
}
