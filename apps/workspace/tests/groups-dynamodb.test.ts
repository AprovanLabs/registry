/**
 * Integration tests for the DynamoDB-backed groups data layer (APR-282).
 *
 * Requires a local DynamoDB-compatible endpoint at `DYNAMO_ENDPOINT`
 * (default http://localhost:8000). Skipped automatically when the endpoint is
 * not reachable so the mock-based tests gate stays green without Docker.
 *
 *   docker run -p 8000:8000 amazon/dynamodb-local
 */

import { randomUUID } from "crypto";
import {
  CreateTableCommand,
  DeleteTableCommand,
  DescribeTableCommand,
  DynamoDBClient,
  ResourceInUseException,
  ResourceNotFoundException,
} from "@aws-sdk/client-dynamodb";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { resetDynamoDocClient } from "../src/db/client.js";
import {
  addPrefixGrant,
  addToolGrant,
  addUserToGroup,
  checkToolGrant,
  createGroup,
  deleteGroup,
  getGroup,
  listGrantedPrefixes,
  listGroups,
  listPrefixGrants,
  listToolGrants,
  removePrefixGrant,
  removeToolGrant,
  removeUserFromGroup,
  updateGroup,
} from "../src/groups.js";

// ---------------------------------------------------------------------------
// Endpoint probe + table provisioning
// ---------------------------------------------------------------------------

const GROUPS_TABLE = process.env["GROUPS_TABLE"] ?? "Groups-test";
const PREFIX_GRANTS_TABLE = process.env["GROUP_PREFIX_GRANTS_TABLE"] ?? "GroupPrefixGrants-test";
const TOOL_GRANTS_TABLE = process.env["GROUP_TOOL_GRANTS_TABLE"] ?? "GroupToolGrants-test";
const USER_GROUPS_TABLE = process.env["USER_GROUPS_TABLE"] ?? "UserGroups-test";
const ENDPOINT = process.env["DYNAMO_ENDPOINT"];

let ddbReady = false;

if (ENDPOINT) {
  try {
    ddbReady = await provisionTables();
  } catch (err) {
    process.stderr.write(
      `[groups-dynamodb] skipping suite — no reachable DynamoDB at ${ENDPOINT}` +
        ` (${err instanceof Error ? `${err.name}: ${err.message || "unknown"}` : String(err)})\n`,
    );
    ddbReady = false;
  }
}

function makeLowLevelClient(): DynamoDBClient {
  return new DynamoDBClient({
    endpoint: ENDPOINT,
    region: process.env["AWS_REGION"] ?? "us-east-1",
    credentials: {
      accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "local",
      secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "local",
    },
  });
}

async function dropAndCreate(
  client: DynamoDBClient,
  tableName: string,
  keySchema: { AttributeName: string; KeyType: "HASH" | "RANGE" }[],
  attrDefs: { AttributeName: string; AttributeType: "S" | "N" | "B" }[],
): Promise<void> {
  try {
    await client.send(new DeleteTableCommand({ TableName: tableName }));
  } catch (err) {
    if (!(err instanceof ResourceNotFoundException)) throw err;
  }
  await waitForTableState(client, tableName, false);

  try {
    await client.send(
      new CreateTableCommand({
        TableName: tableName,
        KeySchema: keySchema,
        AttributeDefinitions: attrDefs,
        BillingMode: "PAY_PER_REQUEST",
      }),
    );
  } catch (err) {
    if (!(err instanceof ResourceInUseException)) throw err;
  }
  await waitForTableState(client, tableName, true);
}

async function provisionTables(): Promise<boolean> {
  const client = makeLowLevelClient();

  await dropAndCreate(
    client,
    GROUPS_TABLE,
    [
      { AttributeName: "workspaceId", KeyType: "HASH" },
      { AttributeName: "groupId", KeyType: "RANGE" },
    ],
    [
      { AttributeName: "workspaceId", AttributeType: "S" },
      { AttributeName: "groupId", AttributeType: "S" },
    ],
  );

  await dropAndCreate(
    client,
    PREFIX_GRANTS_TABLE,
    [
      { AttributeName: "workspaceId#groupId", KeyType: "HASH" },
      { AttributeName: "pathPrefix", KeyType: "RANGE" },
    ],
    [
      { AttributeName: "workspaceId#groupId", AttributeType: "S" },
      { AttributeName: "pathPrefix", AttributeType: "S" },
    ],
  );

  await dropAndCreate(
    client,
    TOOL_GRANTS_TABLE,
    [
      { AttributeName: "workspaceId#groupId", KeyType: "HASH" },
      { AttributeName: "provider#operation", KeyType: "RANGE" },
    ],
    [
      { AttributeName: "workspaceId#groupId", AttributeType: "S" },
      { AttributeName: "provider#operation", AttributeType: "S" },
    ],
  );

  await dropAndCreate(
    client,
    USER_GROUPS_TABLE,
    [
      { AttributeName: "workspaceId#userId", KeyType: "HASH" },
      { AttributeName: "groupId", KeyType: "RANGE" },
    ],
    [
      { AttributeName: "workspaceId#userId", AttributeType: "S" },
      { AttributeName: "groupId", AttributeType: "S" },
    ],
  );

  return true;
}

async function waitForTableState(
  client: DynamoDBClient,
  tableName: string,
  wantActive: boolean,
): Promise<void> {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    try {
      const res = await client.send(new DescribeTableCommand({ TableName: tableName }));
      if (wantActive && res.Table?.TableStatus === "ACTIVE") return;
    } catch (err) {
      if (err instanceof ResourceNotFoundException && !wantActive) return;
      if (!(err instanceof ResourceNotFoundException)) throw err;
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`timed out waiting for table ${tableName} (wantActive=${wantActive})`);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function uniqueWs(): string {
  return `ws-${randomUUID()}`;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe.skipIf(!ddbReady)("Groups DynamoDB", () => {
  beforeAll(() => {
    process.env["GROUPS_TABLE"] = GROUPS_TABLE;
    process.env["GROUP_PREFIX_GRANTS_TABLE"] = PREFIX_GRANTS_TABLE;
    process.env["GROUP_TOOL_GRANTS_TABLE"] = TOOL_GRANTS_TABLE;
    process.env["USER_GROUPS_TABLE"] = USER_GROUPS_TABLE;
    resetDynamoDocClient();
  });

  afterAll(() => {
    resetDynamoDocClient();
  });

  // -------------------------------------------------------------------------
  // Group CRUD
  // -------------------------------------------------------------------------

  it("creates a group and retrieves it by id", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "team-a", "Team A");

    expect(group.groupId).toMatch(/^[0-9a-f]{24}$/);
    expect(group.workspaceId).toBe(ws);
    expect(group.name).toBe("team-a");
    expect(group.description).toBe("Team A");
    expect(typeof group.createdAt).toBe("string");

    const fetched = await getGroup(ws, group.groupId);
    expect(fetched).toBeDefined();
    expect(fetched!.name).toBe("team-a");
  });

  it("creates a group without description", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "no-desc");
    expect(group.description).toBeUndefined();

    const fetched = await getGroup(ws, group.groupId);
    expect(fetched!.description).toBeUndefined();
  });

  it("lists groups scoped to workspace", async () => {
    const wsA = uniqueWs();
    const wsB = uniqueWs();
    await createGroup(wsA, "g1");
    await createGroup(wsA, "g2");
    await createGroup(wsB, "g3");

    const listA = await listGroups(wsA);
    expect(listA).toHaveLength(2);
    expect(listA.map((g) => g.name).sort()).toEqual(["g1", "g2"]);

    const listB = await listGroups(wsB);
    expect(listB).toHaveLength(1);
    expect(listB[0]!.name).toBe("g3");
  });

  it("updates group name and description", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "old-name", "old desc");

    const updated = await updateGroup(ws, group.groupId, { name: "new-name", description: "new desc" });
    expect(updated).toBeDefined();
    expect(updated!.name).toBe("new-name");
    expect(updated!.description).toBe("new desc");
    expect(updated!.updatedAt >= group.updatedAt).toBe(true);
  });

  it("updateGroup returns undefined for a non-existent group", async () => {
    const ws = uniqueWs();
    const result = await updateGroup(ws, "nonexistent-id", { name: "x" });
    expect(result).toBeUndefined();
  });

  it("deletes a group and returns false on second delete", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "to-delete");

    expect(await deleteGroup(ws, group.groupId)).toBe(true);
    expect(await getGroup(ws, group.groupId)).toBeUndefined();
    expect(await deleteGroup(ws, group.groupId)).toBe(false);
  });

  it("deleteGroup cascades prefix and tool grants", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "to-cascade");
    await addPrefixGrant(ws, group.groupId, "/team-a/");
    await addToolGrant(ws, group.groupId, "github", "*");

    await deleteGroup(ws, group.groupId);

    expect(await listPrefixGrants(ws, group.groupId)).toHaveLength(0);
    expect(await listToolGrants(ws, group.groupId)).toHaveLength(0);
  });

  // -------------------------------------------------------------------------
  // UserGroups
  // -------------------------------------------------------------------------

  it("adds and removes a user from a group", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "ug-test");

    await addUserToGroup(ws, group.groupId, "user-sub-1");
    await addUserToGroup(ws, group.groupId, "user-sub-2");

    expect(await removeUserFromGroup(ws, group.groupId, "user-sub-1")).toBe(true);
    expect(await removeUserFromGroup(ws, group.groupId, "user-sub-1")).toBe(false);
    expect(await removeUserFromGroup(ws, group.groupId, "user-sub-2")).toBe(true);
  });

  it("addUserToGroup is idempotent", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "idem-test");

    await addUserToGroup(ws, group.groupId, "user-a");
    await addUserToGroup(ws, group.groupId, "user-a");
    expect(await removeUserFromGroup(ws, group.groupId, "user-a")).toBe(true);
  });

  // -------------------------------------------------------------------------
  // GroupPrefixGrants
  // -------------------------------------------------------------------------

  it("adds and lists prefix grants", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "prefix-test");

    await addPrefixGrant(ws, group.groupId, "/team-a/");
    await addPrefixGrant(ws, group.groupId, "/anthropic/");

    const grants = await listPrefixGrants(ws, group.groupId);
    expect(grants).toHaveLength(2);
    expect(grants.map((g) => g.pathPrefix).sort()).toEqual(["/anthropic/", "/team-a/"]);
  });

  it("removes a prefix grant", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "rm-prefix");

    await addPrefixGrant(ws, group.groupId, "/team-a/");
    expect(await removePrefixGrant(ws, group.groupId, "/team-a/")).toBe(true);
    expect(await removePrefixGrant(ws, group.groupId, "/team-a/")).toBe(false);
    expect(await listPrefixGrants(ws, group.groupId)).toHaveLength(0);
  });

  it("listGrantedPrefixes merges prefixes across groups", async () => {
    const ws = uniqueWs();
    const g1 = await createGroup(ws, "gp1");
    const g2 = await createGroup(ws, "gp2");

    await addPrefixGrant(ws, g1.groupId, "/team-a/");
    await addPrefixGrant(ws, g2.groupId, "/team-b/");
    await addPrefixGrant(ws, g2.groupId, "/team-a/");

    const prefixes = await listGrantedPrefixes(ws, [g1.groupId, g2.groupId]);
    expect(prefixes.sort()).toEqual(["/team-a/", "/team-b/"]);
  });

  // -------------------------------------------------------------------------
  // GroupToolGrants
  // -------------------------------------------------------------------------

  it("adds and lists tool grants", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "tool-test");

    await addToolGrant(ws, group.groupId, "github", "repos.list");
    await addToolGrant(ws, group.groupId, "github", "*");
    await addToolGrant(ws, group.groupId, "linear", "issues.list");

    const grants = await listToolGrants(ws, group.groupId);
    expect(grants).toHaveLength(3);
  });

  it("removes a tool grant", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "rm-tool");

    await addToolGrant(ws, group.groupId, "github", "repos.list");
    expect(await removeToolGrant(ws, group.groupId, "github", "repos.list")).toBe(true);
    expect(await removeToolGrant(ws, group.groupId, "github", "repos.list")).toBe(false);
  });

  it("addToolGrant is idempotent", async () => {
    const ws = uniqueWs();
    const group = await createGroup(ws, "idem-tool");

    await addToolGrant(ws, group.groupId, "github", "repos.list");
    await addToolGrant(ws, group.groupId, "github", "repos.list");

    const grants = await listToolGrants(ws, group.groupId);
    expect(grants).toHaveLength(1);
  });

  // -------------------------------------------------------------------------
  // checkToolGrant
  // -------------------------------------------------------------------------

  it("checkToolGrant returns true for an exact grant", async () => {
    const ws = uniqueWs();
    const g = await createGroup(ws, "check-exact");
    await addToolGrant(ws, g.groupId, "github", "repos.list");

    expect(await checkToolGrant(ws, [g.groupId], "github", "repos.list")).toBe(true);
    expect(await checkToolGrant(ws, [g.groupId], "github", "repos.get")).toBe(false);
  });

  it("checkToolGrant returns true for a wildcard grant", async () => {
    const ws = uniqueWs();
    const g = await createGroup(ws, "check-wildcard");
    await addToolGrant(ws, g.groupId, "github", "*");

    expect(await checkToolGrant(ws, [g.groupId], "github", "repos.list")).toBe(true);
    expect(await checkToolGrant(ws, [g.groupId], "github", "repos.get")).toBe(true);
    expect(await checkToolGrant(ws, [g.groupId], "linear", "issues.list")).toBe(false);
  });

  it("checkToolGrant checks across multiple groups", async () => {
    const ws = uniqueWs();
    const g1 = await createGroup(ws, "multi-g1");
    const g2 = await createGroup(ws, "multi-g2");
    await addToolGrant(ws, g1.groupId, "github", "repos.list");
    await addToolGrant(ws, g2.groupId, "linear", "*");

    expect(await checkToolGrant(ws, [g1.groupId, g2.groupId], "github", "repos.list")).toBe(true);
    expect(await checkToolGrant(ws, [g1.groupId, g2.groupId], "linear", "issues.list")).toBe(true);
    expect(await checkToolGrant(ws, [g1.groupId, g2.groupId], "slack", "channels.list")).toBe(false);
  });

  it("checkToolGrant returns false with no groups", async () => {
    const ws = uniqueWs();
    expect(await checkToolGrant(ws, [], "github", "repos.list")).toBe(false);
  });
});
