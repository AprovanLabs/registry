import { describe, expect, it, vi } from "vitest";
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";
import { KeyValueError, secretFromHeaders } from "../index.js";
import { dynamodbKeyValue, parseAwsCredentialSecret } from "../dynamodb.js";

type StoredItem = Record<string, unknown>;

function createMockDocumentClient() {
  const items = new Map<string, StoredItem>();
  const keyOf = (pk: string, sk: string) => `${pk}\0${sk}`;

  const send = vi.fn(async (command: unknown) => {
    if (command instanceof GetCommand) {
      const input = command.input;
      const pk = String(input.Key?.PK);
      const sk = String(input.Key?.SK);
      const item = items.get(keyOf(pk, sk));
      return { Item: item ? { ...item } : undefined };
    }

    if (command instanceof PutCommand) {
      const input = command.input;
      const item = input.Item as StoredItem;
      items.set(keyOf(String(item.PK), String(item.SK)), { ...item });
      return {};
    }

    if (command instanceof DeleteCommand) {
      const input = command.input;
      const pk = String(input.Key?.PK);
      const sk = String(input.Key?.SK);
      const existing = items.get(keyOf(pk, sk));
      if (existing) items.delete(keyOf(pk, sk));
      return { Attributes: existing };
    }

    if (command instanceof QueryCommand) {
      const input = command.input;
      const pk = String(input.ExpressionAttributeValues?.[":pk"]);
      const skPrefix = input.ExpressionAttributeValues?.[":skPrefix"];
      const startKey = input.ExclusiveStartKey as { PK?: string; SK?: string } | undefined;
      const limit = input.Limit ?? 100;

      const matches = [...items.entries()]
        .filter(([composite]) => composite.startsWith(`${pk}\0`))
        .map(([, item]) => item)
        .filter((item) => {
          const sk = String(item.SK);
          if (typeof skPrefix === "string" && !sk.startsWith(skPrefix)) return false;
          return true;
        })
        .sort((a, b) => String(a.SK).localeCompare(String(b.SK)));

      let startIndex = 0;
      if (startKey?.SK) {
        const idx = matches.findIndex((item) => String(item.SK) === startKey.SK);
        startIndex = idx >= 0 ? idx + 1 : 0;
      }

      const page = matches.slice(startIndex, startIndex + limit);
      const last = page.at(-1);
      const hasMore = startIndex + limit < matches.length;

      return {
        Items: page,
        ...(hasMore && last ? { LastEvaluatedKey: { PK: last.PK, SK: last.SK } } : {}),
      };
    }

    throw new Error(`unexpected command ${String(command)}`);
  });

  return { send, items };
}

const credentials = { accessKeyId: "AKIATEST", secretAccessKey: "secret" };

describe("parseAwsCredentialSecret", () => {
  it("parses access keys from JSON", () => {
    expect(
      parseAwsCredentialSecret(
        JSON.stringify({ accessKeyId: "AKIA", secretAccessKey: "sec", sessionToken: "tok" }),
      ),
    ).toEqual({ accessKeyId: "AKIA", secretAccessKey: "sec", sessionToken: "tok" });
  });

  it("rejects malformed JSON with 400", () => {
    expect(() => parseAwsCredentialSecret("not-json")).toThrow(KeyValueError);
    expect(() => parseAwsCredentialSecret("{}")).toThrow(/accessKeyId/u);
  });
});

describe("dynamodb keyvalue engine", () => {
  it("round-trips set then get", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      prefix: "ws-1",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    await client.set({ key: "draft", value: { title: "hello" } });
    const got = await client.get({ key: "draft" });

    expect(got.found).toBe(true);
    expect(got.value).toEqual({ title: "hello" });
    expect(got.key).toBe("draft");
    expect(got.updatedAt).toBeTruthy();
  });

  it("reports found:false for a missing key", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    expect(await client.get({ key: "absent" })).toEqual({
      key: "absent",
      value: undefined,
      found: false,
    });
  });

  it("stores TTL as expiresAt and returns it on get/set", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    const set = await client.set({ key: "temp", value: 1, ttl_seconds: 3600 });
    expect(set.expiresAt).toBeTruthy();
    const got = await client.get({ key: "temp" });
    expect(got.found).toBe(true);
    expect(got.expiresAt).toBe(set.expiresAt);
  });

  it("delete is idempotent", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    expect(await client.delete({ key: "gone" })).toEqual({ key: "gone", deleted: false });
    await client.set({ key: "gone", value: true });
    expect(await client.delete({ key: "gone" })).toEqual({ key: "gone", deleted: true });
    expect(await client.delete({ key: "gone" })).toEqual({ key: "gone", deleted: false });
  });

  it("lists keys lexicographically with prefix and cursor", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      prefix: "tenant",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    await client.set({ key: "b", value: 2 });
    await client.set({ key: "a", value: 1 });
    await client.set({ key: "aa", value: 3 });

    const page1 = await client.list({ prefix: "a", limit: 1 });
    expect(page1.keys.map((entry) => entry.key)).toEqual(["a"]);
    expect(page1.cursor).toBeTruthy();

    const page2 = await client.list({ prefix: "a", limit: 1, cursor: page1.cursor });
    expect(page2.keys.map((entry) => entry.key)).toEqual(["aa"]);
  });

  it("hides expired items on get and list", async () => {
    const mock = createMockDocumentClient();
    const client = dynamodbKeyValue({
      tableName: "KvTable",
      credentials,
      documentClient: { send: mock.send } as never,
    });

    mock.items.set("KV#\0KEY#old", {
      PK: "KV#",
      SK: "KEY#old",
      value: "stale",
      updatedAt: new Date().toISOString(),
      expiresAt: Math.floor(Date.now() / 1000) - 10,
    });

    expect((await client.get({ key: "old" })).found).toBe(false);
    expect((await client.list()).keys.map((entry) => entry.key)).not.toContain("old");
  });
});

describe("secretFromHeaders (dynamodb provider)", () => {
  it("extracts bearer JSON for the thin client", () => {
    const json = JSON.stringify(credentials);
    expect(secretFromHeaders({ Authorization: `Bearer ${json}` }, "dynamodb", "AWS keys")).toBe(
      json,
    );
  });
});
