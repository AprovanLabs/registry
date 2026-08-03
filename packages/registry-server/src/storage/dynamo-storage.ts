/**
 * DynamoDB profile + grant storage — colocated in the workspace Credentials
 * single-table (PK = `WS#<tenantId>`) so production Dynamo deployments can
 * serve profiles without waiting for the DSQL cutover (product-ux-feedback D8).
 */

import { randomBytes } from "node:crypto";
import type {
  ApiKeyStore,
  AuditStore,
  CredentialStore,
  GrantStore,
  GrantSubject,
  ProfileGrantRow,
  ProfileLimits,
  ProfileRow,
  ProfileStore,
  ProfileTargetKind,
  RegistryStorage,
  TenantRow,
  TenantStore,
} from "./types.js";

export type DynamoSend = (
  command: unknown,
) => Promise<{
  Items?: Record<string, unknown>[];
  Item?: Record<string, unknown>;
}>;

export interface DynamoCommands {
  GetCommand: new (input: Record<string, unknown>) => unknown;
  PutCommand: new (input: Record<string, unknown>) => unknown;
  QueryCommand: new (input: Record<string, unknown>) => unknown;
  TransactWriteCommand: new (input: Record<string, unknown>) => unknown;
  DeleteCommand: new (input: Record<string, unknown>) => unknown;
}

export interface DynamoStorageOptions {
  tableName: string;
  send: DynamoSend;
  credentials: CredentialStore;
  commands: DynamoCommands;
}

let idSequence = 0;
const newId = (): string =>
  Date.now().toString(16).padStart(12, "0") +
  (idSequence = (idSequence + 1) & 0xffff).toString(16).padStart(4, "0") +
  randomBytes(4).toString("hex");
const now = (): string => new Date().toISOString();

const pk = (tenantId: string): string => `WS#${tenantId}`;
const profileSk = (id: string): string => `PROFILE#${id}`;
const profileNameSk = (
  targetKind: ProfileTargetKind,
  targetId: string,
  name: string,
): string => `PROFILENAME#${targetKind}#${targetId}#${name}`;
const grantSk = (profileId: string, subject: GrantSubject): string =>
  `GRANT#${profileId}#${subject.kind}#${subject.id}`;

function toProfileRow(tenantId: string, item: Record<string, unknown>): ProfileRow {
  return {
    id: String(item["id"]),
    tenantId,
    name: String(item["name"]),
    targetKind: String(item["targetKind"]) as ProfileTargetKind,
    targetId: String(item["targetId"]),
    ...(item["provider"] !== undefined && item["provider"] !== null
      ? { provider: String(item["provider"]) }
      : {}),
    ...(item["credentialId"] !== undefined && item["credentialId"] !== null
      ? { credentialId: String(item["credentialId"]) }
      : {}),
    options:
      typeof item["options"] === "string"
        ? (JSON.parse(item["options"]) as Record<string, unknown>)
        : ((item["options"] as Record<string, unknown> | undefined) ?? {}),
    ...(item["limits"] !== undefined && item["limits"] !== null
      ? {
          limits:
            typeof item["limits"] === "string"
              ? (JSON.parse(item["limits"]) as ProfileLimits)
              : (item["limits"] as ProfileLimits),
        }
      : {}),
    createdBy: String(item["createdBy"]),
    createdAt: String(item["createdAt"]),
    updatedAt: String(item["updatedAt"]),
  };
}

class DynamoTenantStore implements TenantStore {
  constructor(
    private readonly tableName: string,
    private readonly send: DynamoSend,
    private readonly commands: DynamoCommands,
  ) {}

  async ensure(id: string, displayName?: string): Promise<TenantRow> {
    const existing = await this.get(id);
    if (existing) return existing;
    const createdAt = now();
    const item = {
      PK: pk(id),
      SK: "TENANT",
      id,
      ...(displayName !== undefined ? { displayName } : {}),
      createdAt,
    };
    const { PutCommand } = this.commands;
    await this.send(
      new PutCommand({
        TableName: this.tableName,
        Item: item,
        ConditionExpression: "attribute_not_exists(PK)",
      }),
    ).catch((err: unknown) => {
      if (isConditionalFailure(err)) return;
      throw err;
    });
    return { id, ...(displayName !== undefined ? { displayName } : {}), createdAt };
  }

  async get(id: string): Promise<TenantRow | undefined> {
    const { GetCommand } = this.commands;
    const result = await this.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: pk(id), SK: "TENANT" },
      }),
    );
    if (!result.Item) return undefined;
    return {
      id: String(result.Item["id"]),
      ...(result.Item["displayName"] !== undefined
        ? { displayName: String(result.Item["displayName"]) }
        : {}),
      createdAt: String(result.Item["createdAt"]),
    };
  }

  async list(): Promise<TenantRow[]> {
    return [];
  }
}

class DynamoProfileStore implements ProfileStore {
  constructor(
    private readonly tableName: string,
    private readonly send: DynamoSend,
    private readonly commands: DynamoCommands,
  ) {}

  async create(
    tenantId: string,
    input: Omit<ProfileRow, "id" | "tenantId" | "createdAt" | "updatedAt"> & { id?: string },
  ): Promise<ProfileRow> {
    const id = input.id ?? newId();
    const ts = now();
    const item = {
      PK: pk(tenantId),
      SK: profileSk(id),
      id,
      name: input.name,
      targetKind: input.targetKind,
      targetId: input.targetId,
      ...(input.provider !== undefined ? { provider: input.provider } : {}),
      ...(input.credentialId !== undefined ? { credentialId: input.credentialId } : {}),
      options: JSON.stringify(input.options ?? {}),
      ...(input.limits !== undefined ? { limits: JSON.stringify(input.limits) } : {}),
      createdBy: input.createdBy,
      createdAt: ts,
      updatedAt: ts,
    };
    const { TransactWriteCommand } = this.commands;
    await this.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Put: {
              TableName: this.tableName,
              Item: item,
              ConditionExpression: "attribute_not_exists(PK)",
            },
          },
          {
            Put: {
              TableName: this.tableName,
              Item: {
                PK: pk(tenantId),
                SK: profileNameSk(input.targetKind, input.targetId, input.name),
                profileId: id,
              },
              ConditionExpression: "attribute_not_exists(PK)",
            },
          },
        ],
      }),
    );
    return toProfileRow(tenantId, item);
  }

  async update(
    tenantId: string,
    id: string,
    patch: Partial<Pick<ProfileRow, "name" | "provider" | "credentialId" | "options" | "limits">>,
  ): Promise<ProfileRow | undefined> {
    const existing = await this.getById(tenantId, id);
    if (!existing) return undefined;
    const merged = { ...existing, ...patch };
    const ts = now();
    const item = {
      PK: pk(tenantId),
      SK: profileSk(id),
      id,
      name: merged.name,
      targetKind: merged.targetKind,
      targetId: merged.targetId,
      ...(merged.provider !== undefined ? { provider: merged.provider } : {}),
      ...("credentialId" in patch
        ? merged.credentialId !== undefined
          ? { credentialId: merged.credentialId }
          : {}
        : existing.credentialId !== undefined
          ? { credentialId: existing.credentialId }
          : {}),
      options: JSON.stringify(merged.options ?? {}),
      ...(merged.limits !== undefined ? { limits: JSON.stringify(merged.limits) } : {}),
      createdBy: merged.createdBy,
      createdAt: merged.createdAt,
      updatedAt: ts,
    };
    const { PutCommand, DeleteCommand } = this.commands;
    if (patch.name !== undefined && patch.name !== existing.name) {
      await this.send(
        new DeleteCommand({
          TableName: this.tableName,
          Key: {
            PK: pk(tenantId),
            SK: profileNameSk(existing.targetKind, existing.targetId, existing.name),
          },
        }),
      );
      await this.send(
        new PutCommand({
          TableName: this.tableName,
          Item: {
            PK: pk(tenantId),
            SK: profileNameSk(merged.targetKind, merged.targetId, merged.name),
            profileId: id,
          },
          ConditionExpression: "attribute_not_exists(PK)",
        }),
      );
    }
    await this.send(new PutCommand({ TableName: this.tableName, Item: item }));
    return toProfileRow(tenantId, item);
  }

  async delete(tenantId: string, id: string): Promise<boolean> {
    const existing = await this.getById(tenantId, id);
    if (!existing) return false;
    const grants = await this.listGrantKeys(tenantId, id);
    const { TransactWriteCommand } = this.commands;
    await this.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: pk(tenantId), SK: profileSk(id) },
            },
          },
          {
            Delete: {
              TableName: this.tableName,
              Key: {
                PK: pk(tenantId),
                SK: profileNameSk(existing.targetKind, existing.targetId, existing.name),
              },
            },
          },
          ...grants.map((sk) => ({
            Delete: {
              TableName: this.tableName,
              Key: { PK: pk(tenantId), SK: sk },
            },
          })),
        ],
      }),
    );
    return true;
  }

  async getById(tenantId: string, id: string): Promise<ProfileRow | undefined> {
    const { GetCommand } = this.commands;
    const result = await this.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: pk(tenantId), SK: profileSk(id) },
      }),
    );
    return result.Item ? toProfileRow(tenantId, result.Item) : undefined;
  }

  async getByName(
    tenantId: string,
    targetKind: ProfileTargetKind,
    targetId: string,
    name: string,
  ): Promise<ProfileRow | undefined> {
    const { GetCommand } = this.commands;
    const pointer = await this.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: pk(tenantId), SK: profileNameSk(targetKind, targetId, name) },
      }),
    );
    const profileId = pointer.Item?.["profileId"];
    if (typeof profileId !== "string") return undefined;
    return this.getById(tenantId, profileId);
  }

  async list(
    tenantId: string,
    filter?: { targetKind?: ProfileTargetKind; targetId?: string },
  ): Promise<ProfileRow[]> {
    const rows = await this.queryProfiles(tenantId);
    return rows.filter((row) => {
      if (filter?.targetKind && row.targetKind !== filter.targetKind) return false;
      if (filter?.targetId && row.targetId !== filter.targetId) return false;
      return true;
    });
  }

  async namesForTarget(
    tenantId: string,
    targetKind: ProfileTargetKind,
    targetId: string,
  ): Promise<string[]> {
    return (await this.list(tenantId, { targetKind, targetId })).map((row) => row.name).sort();
  }

  private async queryProfiles(tenantId: string): Promise<ProfileRow[]> {
    const { QueryCommand } = this.commands;
    const result = await this.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": pk(tenantId),
          ":sk": "PROFILE#",
        },
      }),
    );
    return (result.Items ?? []).map((item) => toProfileRow(tenantId, item));
  }

  private async listGrantKeys(tenantId: string, profileId: string): Promise<string[]> {
    const { QueryCommand } = this.commands;
    const result = await this.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": pk(tenantId),
          ":sk": `GRANT#${profileId}#`,
        },
      }),
    );
    return (result.Items ?? []).map((item) => String(item["SK"]));
  }
}

class DynamoGrantStore implements GrantStore {
  constructor(
    private readonly tableName: string,
    private readonly send: DynamoSend,
    private readonly commands: DynamoCommands,
  ) {}

  async grant(
    tenantId: string,
    profileId: string,
    subject: GrantSubject,
    grantedBy: string,
  ): Promise<ProfileGrantRow> {
    const ts = now();
    const item = {
      PK: pk(tenantId),
      SK: grantSk(profileId, subject),
      tenantId,
      profileId,
      subjectKind: subject.kind,
      subjectId: subject.id,
      grantedBy,
      createdAt: ts,
    };
    const { PutCommand } = this.commands;
    await this.send(new PutCommand({ TableName: this.tableName, Item: item }));
    return {
      tenantId,
      profileId,
      subjectKind: subject.kind,
      subjectId: subject.id,
      grantedBy,
      createdAt: ts,
    };
  }

  async revoke(tenantId: string, profileId: string, subject: GrantSubject): Promise<boolean> {
    const { DeleteCommand } = this.commands;
    await this.send(
      new DeleteCommand({
        TableName: this.tableName,
        Key: { PK: pk(tenantId), SK: grantSk(profileId, subject) },
      }),
    );
    return true;
  }

  async listForProfile(tenantId: string, profileId: string): Promise<ProfileGrantRow[]> {
    const { QueryCommand } = this.commands;
    const result = await this.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": pk(tenantId),
          ":sk": `GRANT#${profileId}#`,
        },
      }),
    );
    return (result.Items ?? []).map((item) => ({
      tenantId: String(item["tenantId"]),
      profileId: String(item["profileId"]),
      subjectKind: item["subjectKind"] as ProfileGrantRow["subjectKind"],
      subjectId: String(item["subjectId"]),
      grantedBy: String(item["grantedBy"]),
      createdAt: String(item["createdAt"]),
    }));
  }

  async grantedProfileIds(tenantId: string, subjects: GrantSubject[]): Promise<Set<string>> {
    if (subjects.length === 0) return new Set();
    const { QueryCommand } = this.commands;
    const result = await this.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": pk(tenantId),
          ":sk": "GRANT#",
        },
      }),
    );
    const subjectKeys = new Set(subjects.map((s) => `${s.kind}#${s.id}`));
    const ids = new Set<string>();
    for (const item of result.Items ?? []) {
      const kind = String(item["subjectKind"]);
      const id = String(item["subjectId"]);
      if (subjectKeys.has(`${kind}#${id}`)) ids.add(String(item["profileId"]));
    }
    return ids;
  }
}

const unsupportedApiKeys: ApiKeyStore = {
  async create() {
    throw new Error("API keys are not stored in the interim Dynamo profile table");
  },
  async findByDigest() {
    return undefined;
  },
  async list() {
    return [];
  },
  async revoke() {
    return false;
  },
};

const unsupportedAudit: AuditStore = {
  async append() {},
  async query() {
    return [];
  },
};

function isConditionalFailure(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "name" in err &&
    (err as { name: string }).name === "ConditionalCheckFailedException"
  );
}

export function createDynamoStorage(options: DynamoStorageOptions): RegistryStorage {
  const { tableName, send, credentials, commands } = options;
  return {
    tenants: new DynamoTenantStore(tableName, send, commands),
    credentials,
    profiles: new DynamoProfileStore(tableName, send, commands),
    grants: new DynamoGrantStore(tableName, send, commands),
    apiKeys: unsupportedApiKeys,
    audit: unsupportedAudit,
    close: async () => undefined,
  };
}
