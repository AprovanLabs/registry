/**
 * DynamoDB data layer for workspace Groups and the three grant tables.
 *
 * Tables (from db/schema.ts):
 *   Groups          — PK: workspaceId, SK: groupId
 *   GroupPrefixGrants — PK: workspaceId#groupId, SK: pathPrefix
 *   GroupToolGrants  — PK: workspaceId#groupId, SK: provider#operation
 *   UserGroups       — PK: workspaceId#userId, SK: groupId
 */

import { randomBytes } from "crypto";
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Table name helpers (env overrides for tests)
// ---------------------------------------------------------------------------

const GROUPS_TABLE = () => process.env["GROUPS_TABLE"] ?? "Groups";
const GROUP_PREFIX_GRANTS_TABLE = () => process.env["GROUP_PREFIX_GRANTS_TABLE"] ?? "GroupPrefixGrants";
const GROUP_TOOL_GRANTS_TABLE = () => process.env["GROUP_TOOL_GRANTS_TABLE"] ?? "GroupToolGrants";
const USER_GROUPS_TABLE = () => process.env["USER_GROUPS_TABLE"] ?? "UserGroups";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GroupRecord {
  workspaceId: string;
  groupId: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PrefixGrantRecord {
  workspaceId: string;
  groupId: string;
  pathPrefix: string;
}

export interface ToolGrantRecord {
  workspaceId: string;
  groupId: string;
  provider: string;
  operation: string;
}

export interface UserGroupRecord {
  workspaceId: string;
  userId: string;
  groupId: string;
}

// ---------------------------------------------------------------------------
// Groups CRUD
// ---------------------------------------------------------------------------

export async function createGroup(
  workspaceId: string,
  name: string,
  description?: string,
): Promise<GroupRecord> {
  const groupId = randomBytes(12).toString("hex");
  const now = new Date().toISOString();
  const item: Record<string, unknown> = {
    workspaceId,
    groupId,
    name,
    createdAt: now,
    updatedAt: now,
  };
  if (description !== undefined) item["description"] = description;

  await getDynamoDocClient().send(
    new PutCommand({
      TableName: GROUPS_TABLE(),
      Item: item,
      ConditionExpression: "attribute_not_exists(groupId)",
    }),
  );

  return { workspaceId, groupId, name, description, createdAt: now, updatedAt: now };
}

export async function listGroups(workspaceId: string): Promise<GroupRecord[]> {
  const result = await getDynamoDocClient().send(
    new QueryCommand({
      TableName: GROUPS_TABLE(),
      KeyConditionExpression: "workspaceId = :ws",
      ExpressionAttributeValues: { ":ws": workspaceId },
    }),
  );
  return (result.Items ?? []) as GroupRecord[];
}

export async function getGroup(
  workspaceId: string,
  groupId: string,
): Promise<GroupRecord | undefined> {
  const result = await getDynamoDocClient().send(
    new GetCommand({
      TableName: GROUPS_TABLE(),
      Key: { workspaceId, groupId },
    }),
  );
  return result.Item as GroupRecord | undefined;
}

export async function updateGroup(
  workspaceId: string,
  groupId: string,
  patch: { name?: string; description?: string },
): Promise<GroupRecord | undefined> {
  const now = new Date().toISOString();
  const updates: string[] = ["updatedAt = :updatedAt"];
  const exprValues: Record<string, unknown> = { ":updatedAt": now, ":ws": workspaceId, ":gid": groupId };
  const exprNames: Record<string, string> = {};

  if (patch.name !== undefined) {
    updates.push("#nm = :name");
    exprNames["#nm"] = "name";
    exprValues[":name"] = patch.name;
  }
  if (patch.description !== undefined) {
    updates.push("#desc = :description");
    exprNames["#desc"] = "description";
    exprValues[":description"] = patch.description;
  }

  try {
    const result = await getDynamoDocClient().send(
      new UpdateCommand({
        TableName: GROUPS_TABLE(),
        Key: { workspaceId, groupId },
        ConditionExpression: "workspaceId = :ws AND groupId = :gid",
        UpdateExpression: `SET ${updates.join(", ")}`,
        ExpressionAttributeValues: exprValues,
        ...(Object.keys(exprNames).length > 0 ? { ExpressionAttributeNames: exprNames } : {}),
        ReturnValues: "ALL_NEW",
      }),
    );
    return result.Attributes as GroupRecord | undefined;
  } catch (err) {
    if (err instanceof ConditionalCheckFailedException) return undefined;
    throw err;
  }
}

/**
 * Delete a group and best-effort clean up its prefix and tool grants.
 * UserGroups cleanup is not performed here (no GSI on groupId); those rows
 * become orphans and will stop resolving once the group record is gone.
 */
export async function deleteGroup(
  workspaceId: string,
  groupId: string,
): Promise<boolean> {
  const existing = await getGroup(workspaceId, groupId);
  if (!existing) return false;

  await getDynamoDocClient().send(
    new DeleteCommand({
      TableName: GROUPS_TABLE(),
      Key: { workspaceId, groupId },
    }),
  );

  await deleteAllPrefixGrants(workspaceId, groupId);
  await deleteAllToolGrants(workspaceId, groupId);

  return true;
}

// ---------------------------------------------------------------------------
// UserGroups (user ↔ group bindings)
// ---------------------------------------------------------------------------

export async function addUserToGroup(
  workspaceId: string,
  groupId: string,
  userId: string,
): Promise<void> {
  await getDynamoDocClient().send(
    new PutCommand({
      TableName: USER_GROUPS_TABLE(),
      Item: {
        "workspaceId#userId": `${workspaceId}#${userId}`,
        groupId,
        workspaceId,
        userId,
      },
    }),
  );
}

export async function removeUserFromGroup(
  workspaceId: string,
  groupId: string,
  userId: string,
): Promise<boolean> {
  const result = await getDynamoDocClient().send(
    new GetCommand({
      TableName: USER_GROUPS_TABLE(),
      Key: {
        "workspaceId#userId": `${workspaceId}#${userId}`,
        groupId,
      },
    }),
  );
  if (!result.Item) return false;

  await getDynamoDocClient().send(
    new DeleteCommand({
      TableName: USER_GROUPS_TABLE(),
      Key: {
        "workspaceId#userId": `${workspaceId}#${userId}`,
        groupId,
      },
    }),
  );
  return true;
}

// ---------------------------------------------------------------------------
// GroupPrefixGrants
// ---------------------------------------------------------------------------

export async function addPrefixGrant(
  workspaceId: string,
  groupId: string,
  pathPrefix: string,
): Promise<PrefixGrantRecord> {
  await getDynamoDocClient().send(
    new PutCommand({
      TableName: GROUP_PREFIX_GRANTS_TABLE(),
      Item: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        pathPrefix,
        workspaceId,
        groupId,
      },
    }),
  );
  return { workspaceId, groupId, pathPrefix };
}

export async function removePrefixGrant(
  workspaceId: string,
  groupId: string,
  pathPrefix: string,
): Promise<boolean> {
  const result = await getDynamoDocClient().send(
    new GetCommand({
      TableName: GROUP_PREFIX_GRANTS_TABLE(),
      Key: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        pathPrefix,
      },
    }),
  );
  if (!result.Item) return false;

  await getDynamoDocClient().send(
    new DeleteCommand({
      TableName: GROUP_PREFIX_GRANTS_TABLE(),
      Key: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        pathPrefix,
      },
    }),
  );
  return true;
}

export async function listPrefixGrants(
  workspaceId: string,
  groupId: string,
): Promise<PrefixGrantRecord[]> {
  const result = await getDynamoDocClient().send(
    new QueryCommand({
      TableName: GROUP_PREFIX_GRANTS_TABLE(),
      KeyConditionExpression: "#pk = :pk",
      ExpressionAttributeNames: { "#pk": "workspaceId#groupId" },
      ExpressionAttributeValues: { ":pk": `${workspaceId}#${groupId}` },
    }),
  );
  return (result.Items ?? []).map((item) => ({
    workspaceId: (item as Record<string, unknown>)["workspaceId"] as string,
    groupId: (item as Record<string, unknown>)["groupId"] as string,
    pathPrefix: (item as Record<string, unknown>)["pathPrefix"] as string,
  }));
}

async function deleteAllPrefixGrants(workspaceId: string, groupId: string): Promise<void> {
  const grants = await listPrefixGrants(workspaceId, groupId);
  for (const grant of grants) {
    await getDynamoDocClient().send(
      new DeleteCommand({
        TableName: GROUP_PREFIX_GRANTS_TABLE(),
        Key: {
          "workspaceId#groupId": `${workspaceId}#${groupId}`,
          pathPrefix: grant.pathPrefix,
        },
      }),
    );
  }
}

// ---------------------------------------------------------------------------
// GroupToolGrants
// ---------------------------------------------------------------------------

export async function addToolGrant(
  workspaceId: string,
  groupId: string,
  provider: string,
  operation: string,
): Promise<ToolGrantRecord> {
  await getDynamoDocClient().send(
    new PutCommand({
      TableName: GROUP_TOOL_GRANTS_TABLE(),
      Item: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        "provider#operation": `${provider}#${operation}`,
        workspaceId,
        groupId,
        provider,
        operation,
      },
    }),
  );
  return { workspaceId, groupId, provider, operation };
}

export async function removeToolGrant(
  workspaceId: string,
  groupId: string,
  provider: string,
  operation: string,
): Promise<boolean> {
  const result = await getDynamoDocClient().send(
    new GetCommand({
      TableName: GROUP_TOOL_GRANTS_TABLE(),
      Key: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        "provider#operation": `${provider}#${operation}`,
      },
    }),
  );
  if (!result.Item) return false;

  await getDynamoDocClient().send(
    new DeleteCommand({
      TableName: GROUP_TOOL_GRANTS_TABLE(),
      Key: {
        "workspaceId#groupId": `${workspaceId}#${groupId}`,
        "provider#operation": `${provider}#${operation}`,
      },
    }),
  );
  return true;
}

export async function listToolGrants(
  workspaceId: string,
  groupId: string,
): Promise<ToolGrantRecord[]> {
  const result = await getDynamoDocClient().send(
    new QueryCommand({
      TableName: GROUP_TOOL_GRANTS_TABLE(),
      KeyConditionExpression: "#pk = :pk",
      ExpressionAttributeNames: { "#pk": "workspaceId#groupId" },
      ExpressionAttributeValues: { ":pk": `${workspaceId}#${groupId}` },
    }),
  );
  return (result.Items ?? []).map((item) => ({
    workspaceId: (item as Record<string, unknown>)["workspaceId"] as string,
    groupId: (item as Record<string, unknown>)["groupId"] as string,
    provider: (item as Record<string, unknown>)["provider"] as string,
    operation: (item as Record<string, unknown>)["operation"] as string,
  }));
}

async function deleteAllToolGrants(workspaceId: string, groupId: string): Promise<void> {
  const grants = await listToolGrants(workspaceId, groupId);
  for (const grant of grants) {
    await getDynamoDocClient().send(
      new DeleteCommand({
        TableName: GROUP_TOOL_GRANTS_TABLE(),
        Key: {
          "workspaceId#groupId": `${workspaceId}#${groupId}`,
          "provider#operation": `${grant.provider}#${grant.operation}`,
        },
      }),
    );
  }
}

/**
 * Check whether any of the given groupIds has a tool grant covering
 * (provider, operation). A grant with operation="*" is a wildcard.
 * Used by the tool resolver (APR-283).
 */
export async function checkToolGrant(
  workspaceId: string,
  groupIds: string[],
  provider: string,
  operation: string,
): Promise<boolean> {
  for (const groupId of groupIds) {
    const exact = await getDynamoDocClient().send(
      new GetCommand({
        TableName: GROUP_TOOL_GRANTS_TABLE(),
        Key: {
          "workspaceId#groupId": `${workspaceId}#${groupId}`,
          "provider#operation": `${provider}#${operation}`,
        },
      }),
    );
    if (exact.Item) return true;

    if (operation !== "*") {
      const wildcard = await getDynamoDocClient().send(
        new GetCommand({
          TableName: GROUP_TOOL_GRANTS_TABLE(),
          Key: {
            "workspaceId#groupId": `${workspaceId}#${groupId}`,
            "provider#operation": `${provider}#*`,
          },
        }),
      );
      if (wildcard.Item) return true;
    }
  }
  return false;
}

/**
 * Return all path prefixes granted to any of the given groupIds.
 * Used by the tool resolver (APR-283).
 */
export async function listGrantedPrefixes(
  workspaceId: string,
  groupIds: string[],
): Promise<string[]> {
  const prefixes: string[] = [];
  for (const groupId of groupIds) {
    const grants = await listPrefixGrants(workspaceId, groupId);
    for (const g of grants) prefixes.push(g.pathPrefix);
  }
  return [...new Set(prefixes)];
}
