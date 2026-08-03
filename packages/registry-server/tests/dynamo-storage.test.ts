/**
 * Dynamo profile/grant storage — product-ux-feedback D8.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createDynamoStorage, type DynamoCommands } from "../src/storage/dynamo-storage.js";
import type { CredentialStore } from "../src/storage/types.js";

const mockSend = vi.fn();

const commands: DynamoCommands = {
  GetCommand: class {
    input;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  },
  PutCommand: class {
    input;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  },
  QueryCommand: class {
    input;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  },
  TransactWriteCommand: class {
    input;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  },
  DeleteCommand: class {
    input;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  },
};

const credentials: CredentialStore = {
  async create() {
    throw new Error("not used");
  },
  async list() {
    return [];
  },
  async get() {
    return undefined;
  },
  async getWithPayload() {
    return undefined;
  },
  async firstForProvider() {
    return undefined;
  },
  async updatePayload() {},
  async delete() {
    return false;
  },
};

describe("createDynamoStorage profiles", () => {
  const store = () =>
    createDynamoStorage({
      tableName: "Credentials",
      send: mockSend,
      credentials,
      commands,
    });

  const pkSkStore = new Map<string, Record<string, unknown>>();

  function key(pk: unknown, sk: unknown): string {
    return `${String(pk)}||${String(sk)}`;
  }

  beforeEach(() => {
    mockSend.mockReset();
    pkSkStore.clear();
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      if (Array.isArray(input["TransactItems"])) {
        for (const op of input["TransactItems"] as Array<{
          Put?: { Item: Record<string, unknown> };
          Delete?: { Key: Record<string, unknown> };
        }>) {
          if (op.Put) pkSkStore.set(key(op.Put.Item["PK"], op.Put.Item["SK"]), op.Put.Item);
          if (op.Delete) pkSkStore.delete(key(op.Delete.Key["PK"], op.Delete.Key["SK"]));
        }
        return Promise.resolve({});
      }
      if ("Item" in input && !input["Key"]) {
        const item = input["Item"] as Record<string, unknown>;
        pkSkStore.set(key(item["PK"], item["SK"]), item);
        return Promise.resolve({});
      }
      if (input["Key"]) {
        const k = input["Key"] as Record<string, unknown>;
        const item = pkSkStore.get(key(k["PK"], k["SK"]));
        return Promise.resolve(item ? { Item: item } : {});
      }
      if ("KeyConditionExpression" in input) {
        const values = (input["ExpressionAttributeValues"] ?? {}) as Record<string, unknown>;
        const pk = values[":pk"];
        const skPrefix = values[":sk"];
        const items = [...pkSkStore.values()].filter(
          (item) =>
            item["PK"] === pk &&
            (skPrefix === undefined || String(item["SK"]).startsWith(String(skPrefix))),
        );
        return Promise.resolve({ Items: items });
      }
      return Promise.resolve({});
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("creates, lists, and deletes a profile with grants", async () => {
    const storage = store();
    await storage.tenants.ensure("ws-1");
    const created = await storage.profiles.create("ws-1", {
      name: "default",
      targetKind: "interface",
      targetId: "sql",
      provider: "postgres",
      options: {},
      createdBy: "admin",
    });
    expect(created.name).toBe("default");
    await storage.grants.grant("ws-1", created.id, { kind: "group", id: "g1" }, "admin");
    const granted = await storage.grants.grantedProfileIds("ws-1", [
      { kind: "group", id: "g1" },
    ]);
    expect(granted.has(created.id)).toBe(true);
    expect(await storage.profiles.delete("ws-1", created.id)).toBe(true);
    expect(await storage.profiles.list("ws-1")).toHaveLength(0);
  });
});
