/**
 * DynamoDB-backed workspace lookup.
 *
 * `Workspaces` is keyed by `workspaceId` (HASH). `GET /session` reads each of
 * the user's membership workspaces here to surface the human-readable name in
 * the workspace picker.
 */

import { dynamo } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WorkspaceRecord {
  workspaceId: string;
  name: string;
  plan?: string;
  createdAt?: string;
  updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const DYNAMODB_WORKSPACES_TABLE = () =>
  process.env["DYNAMODB_WORKSPACES_TABLE"] ?? "Workspaces";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch a single workspace row by its id. Returns undefined when the workspace
 * does not exist (treated as a stale membership by the caller).
 */
export async function getWorkspace(
  workspaceId: string,
): Promise<WorkspaceRecord | undefined> {
  const { client, GetCommand } = await dynamo();
  const result = await client.send(
    new GetCommand({
      TableName: DYNAMODB_WORKSPACES_TABLE(),
      Key: { workspaceId },
      ProjectionExpression: "workspaceId, #n, plan, createdAt, updatedAt",
      ExpressionAttributeNames: { "#n": "name" },
    }),
  );
  return result.Item as WorkspaceRecord | undefined;
}

/**
 * Fetch multiple workspaces by id. Missing workspaces are omitted from the
 * result. Used by `GET /session` to name every workspace the user is a member
 * of in a single round-trip-friendly loop.
 */
export async function getWorkspaces(
  workspaceIds: string[],
): Promise<WorkspaceRecord[]> {
  if (workspaceIds.length === 0) return [];
  const { client, GetCommand } = await dynamo();
  const results = await Promise.all(
    workspaceIds.map((id) =>
      client
        .send(
          new GetCommand({
            TableName: DYNAMODB_WORKSPACES_TABLE(),
            Key: { workspaceId: id },
            ProjectionExpression: "workspaceId, #n",
            ExpressionAttributeNames: { "#n": "name" },
          }),
        )
        .then((r) => (r.Item ? (r.Item as WorkspaceRecord) : undefined)),
    ),
  );
  return results.filter((w): w is WorkspaceRecord => w !== undefined);
}
