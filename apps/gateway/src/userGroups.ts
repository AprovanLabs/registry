/**
 * DynamoDB-backed user-group lookup.
 *
 * `UserGroups` is keyed by `workspaceId#userId` (HASH) + `groupId` (RANGE),
 * so a single Query returns every group a user belongs to in a workspace.
 * The auth middleware loads these to populate `principal.groupIds` for
 * group-based permission grants.
 */

import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Table name (override in tests via env)
// ---------------------------------------------------------------------------

const USERGROUPS_TABLE = () =>
  process.env["USERGROUPS_TABLE"] ?? "UserGroups";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Return the set of group ids the user belongs to in the given workspace.
 * Empty array when the user is in no groups.
 */
export async function listUserGroupIds(
  workspaceId: string,
  userId: string,
): Promise<string[]> {
  const client = getDynamoDocClient();
  const result = await client.send(
    new QueryCommand({
      TableName: USERGROUPS_TABLE(),
      KeyConditionExpression: "#pk = :pk",
      ExpressionAttributeNames: { "#pk": "workspaceId#userId" },
      ExpressionAttributeValues: { ":pk": `${workspaceId}#${userId}` },
      ProjectionExpression: "groupId",
    }),
  );
  const items = (result.Items ?? []) as Array<{ groupId?: string }>;
  return items
    .map((i) => i.groupId)
    .filter((g): g is string => typeof g === "string");
}
