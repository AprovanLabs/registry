/**
 * Integration tests for the DynamoDB-backed API key store (APR-319).
 *
 * These run against a real DynamoDB-compatible endpoint at `DYNAMO_ENDPOINT`
 * (default http://localhost:8000), e.g. `amazon/dynamodb-local`:
 *
 *   docker run -p 8000:8000 amazon/dynamodb-local
 *
 * The suite is gated on endpoint availability: if no local DynamoDB is running
 * (the default for `pnpm test` without docker), the suite is skipped so the
 * mock-based unit tests and the rest of the gate stay green. Bring up a local
 * DynamoDB to exercise these end-to-end.
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
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ApiKeyStoreDynamodb } from "../src/apikeys.js";
import { resetDynamoDocClient, getDynamoDocClient } from "../src/db/client.js";

// ---------------------------------------------------------------------------
// Endpoint probe + table provisioning (top-level await so describe.skipIf can
// see the result at module evaluation time)
// ---------------------------------------------------------------------------

const TABLE_NAME = process.env["APIKEYS_TABLE"] ?? "ApiKeys-test";
const ENDPOINT = process.env["DYNAMO_ENDPOINT"];

let ddbReady = false;

if (ENDPOINT) {
  try {
    ddbReady = await provisionTable();
  } catch (err) {
    process.stderr.write(
      `[apikeys-dynamodb] skipping suite — no reachable DynamoDB at ${ENDPOINT}` +
        ` (${err instanceof Error ? `${err.name}: ${err.message || "unknown"}` : String(err)})\n`,
    );
    ddbReady = false;
  }
}

async function lowLevelClient(): Promise<DynamoDBClient> {
  return new DynamoDBClient({
    endpoint: ENDPOINT,
    region: process.env["AWS_REGION"] ?? "us-east-1",
    credentials: {
      accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "local",
      secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "local",
    },
  });
}

async function provisionTable(): Promise<boolean> {
  const client = await lowLevelClient();

  // Drop any leftover table, then recreate with the single-table PK/SK schema
  // so a stale schema from a prior experiment can't poison the run.
  try {
    await client.send(new DeleteTableCommand({ TableName: TABLE_NAME }));
  } catch (err) {
    if (!(err instanceof ResourceNotFoundException)) throw err;
  }
  await waitForTableState(client, TABLE_NAME, false);

  try {
    await client.send(
      new CreateTableCommand({
        TableName: TABLE_NAME,
        KeySchema: [
          { AttributeName: "PK", KeyType: "HASH" },
          { AttributeName: "SK", KeyType: "RANGE" },
        ],
        AttributeDefinitions: [
          { AttributeName: "PK", AttributeType: "S" },
          { AttributeName: "SK", AttributeType: "S" },
        ],
        BillingMode: "PAY_PER_REQUEST",
      }),
    );
  } catch (err) {
    if (!(err instanceof ResourceInUseException)) throw err;
  }
  await waitForTableState(client, TABLE_NAME, true);
  return true;
}

/** Poll DescribeTable until the table exists (or is gone) or we time out. */
async function waitForTableState(
  client: DynamoDBClient,
  tableName: string,
  wantActive: boolean,
): Promise<void> {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    try {
      const res = await client.send(new DescribeTableCommand({ TableName: tableName }));
      const status = res.Table?.TableStatus;
      if (wantActive && status === "ACTIVE") return;
    } catch (err) {
      if (err instanceof ResourceNotFoundException) {
        if (!wantActive) return;
      } else {
        throw err;
      }
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`timed out waiting for table ${tableName} (wantActive=${wantActive})`);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

function uniqueWs(): string {
  return `ws-${randomUUID()}`;
}

describe.skipIf(!ddbReady)("ApiKeyStoreDynamodb", () => {
  beforeAll(() => {
    resetDynamoDocClient();
  });

  afterAll(() => {
    resetDynamoDocClient();
  });

  it("creates a key and lists it for the workspace", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, { name: "CI caller", createdBy: "user-1" });

    expect(created.id).toMatch(/^[0-9a-f]{24}$/);
    expect(created.workspaceId).toBe(ws);
    expect(created.name).toBe("CI caller");
    expect(created.callerId).toBe(`apikey:${created.id}`);
    expect(created.createdBy).toBe("user-1");
    expect(created.expiresAt).toBeNull();
    expect(created.secret).toMatch(/^utdk_[0-9a-f]{48}$/);
    expect(created.secretHash).toMatch(/^[0-9a-f]{64}$/);
    expect(typeof created.createdAt).toBe("string");

    const list = await store.list(ws);
    expect(list).toHaveLength(1);
    expect(list[0]!.id).toBe(created.id);
    expect(list[0]!.name).toBe("CI caller");
    // list returns the full ApiKey (secretHash included); the route strips it.
    expect(list[0]!.secretHash).toBe(created.secretHash);
    // The raw secret is never stored.
    expect((list[0] as unknown as Record<string, unknown>)["secret"]).toBeUndefined();
  });

  it("verifies a key with the correct secret and returns the record", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, { name: "bot", createdBy: "user-2" });

    const verified = await store.verify(ws, created.secret);
    expect(verified).not.toBeNull();
    expect(verified!.id).toBe(created.id);
    expect(verified!.callerId).toBe(created.callerId);
    expect(verified!.workspaceId).toBe(ws);
  });

  it("verify returns null for a wrong secret", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    await store.create(ws, { name: "bot", createdBy: "user-2" });

    expect(await store.verify(ws, "utdk_ffffffffffffffffffffffffffffffffffffffffffffffff")).toBeNull();
  });

  it("verify returns null when no key exists for the workspace", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    expect(await store.verify(ws, "utdk_deadbeef")).toBeNull();
  });

  it("revokes a key and removes both the record and the hash mirror", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, { name: "to-revoke", createdBy: "user-3" });

    expect(await store.revoke(ws, created.id)).toBe(true);
    expect(await store.list(ws)).toHaveLength(0);
    expect(await store.verify(ws, created.secret)).toBeNull();
    // Re-revoking a missing key returns false.
    expect(await store.revoke(ws, created.id)).toBe(false);
  });

  it("revoke returns false for a missing key", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    expect(await store.revoke(ws, "nonexistent-id")).toBe(false);
  });

  it("list excludes the APIKEYHASH# mirror items", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    await store.create(ws, { name: "one", createdBy: "u" });
    await store.create(ws, { name: "two", createdBy: "u" });

    const list = await store.list(ws);
    // Two keys, not four (each create also writes a hash mirror).
    expect(list).toHaveLength(2);
    expect(list.every((k) => k.name === "one" || k.name === "two")).toBe(true);
  });

  it("isolates keys by workspace", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const wsA = uniqueWs();
    const wsB = uniqueWs();
    const a = await store.create(wsA, { name: "a", createdBy: "u" });
    const b = await store.create(wsB, { name: "b", createdBy: "u" });

    expect(await store.list(wsA)).toHaveLength(1);
    expect(await store.list(wsB)).toHaveLength(1);
    expect((await store.list(wsA))[0]!.id).toBe(a.id);
    expect((await store.list(wsB))[0]!.id).toBe(b.id);

    // verify is workspace-scoped: a's secret does not verify in wsB.
    expect(await store.verify(wsB, a.secret)).toBeNull();
    // revoke is workspace-scoped: revoking a's id from wsB does nothing.
    expect(await store.revoke(wsB, a.id)).toBe(false);
    expect(await store.list(wsA)).toHaveLength(1);
  });

  it("supports multiple keys per workspace", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    await store.create(ws, { name: "first", createdBy: "u" });
    await store.create(ws, { name: "second", createdBy: "u" });
    await store.create(ws, { name: "third", createdBy: "u" });

    const list = await store.list(ws);
    expect(list).toHaveLength(3);
    expect(list.map((k) => k.name).sort()).toEqual(["first", "second", "third"]);
  });

  it("verify succeeds for a non-expiring key", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, { name: "forever", createdBy: "u" });

    expect(created.expiresAt).toBeNull();
    expect(await store.verify(ws, created.secret)).not.toBeNull();
  });

  it("writes a hash mirror with a TTL when an expiry is set", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, {
      name: "expiring",
      createdBy: "u",
      expiresInSeconds: 3600,
    });

    expect(created.expiresAt).not.toBeNull();
    const client = getDynamoDocClient();
    const mirror = await client.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `WS#${ws}`, SK: `APIKEYHASH#${created.secretHash}` },
      }),
    );
    expect(mirror.Item).toBeDefined();
    expect((mirror.Item as Record<string, unknown>)["keyId"]).toBe(created.id);
    // TTL is the expiry expressed as epoch seconds.
    const ttl = (mirror.Item as Record<string, unknown>)["ttl"];
    expect(typeof ttl).toBe("number");
    const expectedTtl = Math.floor(new Date(created.expiresAt!).getTime() / 1000);
    expect(ttl).toBe(expectedTtl);
  });

  it("omits the TTL on the hash mirror when the key never expires", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    const created = await store.create(ws, { name: "forever", createdBy: "u" });

    const client = getDynamoDocClient();
    const mirror = await client.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `WS#${ws}`, SK: `APIKEYHASH#${created.secretHash}` },
      }),
    );
    expect(mirror.Item).toBeDefined();
    expect((mirror.Item as Record<string, unknown>)["ttl"]).toBeUndefined();
  });

  it("verify fails closed on an expired key (server-side expiry check)", async () => {
    const store = new ApiKeyStoreDynamodb(TABLE_NAME);
    const ws = uniqueWs();
    // 1-second expiry. The TTL sweep is best-effort (and dynamodb-local does
    // not sweep on this timescale), so the mirror will still be present after
    // expiry — the server-side expiresAt check is what makes verify fail closed.
    const created = await store.create(ws, {
      name: "short-lived",
      createdBy: "u",
      expiresInSeconds: 1,
    });

    // Not yet expired: verify succeeds.
    expect(await store.verify(ws, created.secret)).not.toBeNull();

    await new Promise((r) => setTimeout(r, 1200));

    // Expired: verify fails closed via the server-side expiresAt check, even
    // though the mirror item has not been swept.
    expect(await store.verify(ws, created.secret)).toBeNull();
    // The key is still listed until revoke is called (listing is not filtered
    // by expiry); only verify enforces expiry.
    expect(await store.list(ws)).toHaveLength(1);
  });
});
