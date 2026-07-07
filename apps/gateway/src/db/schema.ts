import type { CreateTableCommandInput } from "@aws-sdk/client-dynamodb";

export interface TableSchema {
  tableName: string;
  createInput: CreateTableCommandInput;
  ttlAttribute?: string;
}

export const Users: TableSchema = {
  tableName: "Users",
  createInput: {
    TableName: "Users",
    KeySchema: [{ AttributeName: "sub", KeyType: "HASH" }],
    AttributeDefinitions: [
      { AttributeName: "sub", AttributeType: "S" },
      { AttributeName: "email", AttributeType: "S" },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ByEmail",
        KeySchema: [{ AttributeName: "email", KeyType: "HASH" }],
        Projection: { ProjectionType: "ALL" },
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Workspaces: TableSchema = {
  tableName: "Workspaces",
  createInput: {
    TableName: "Workspaces",
    KeySchema: [{ AttributeName: "workspaceId", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "workspaceId", AttributeType: "S" }],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Memberships: TableSchema = {
  tableName: "Memberships",
  createInput: {
    TableName: "Memberships",
    KeySchema: [
      { AttributeName: "workspaceId", KeyType: "HASH" },
      { AttributeName: "userSub", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId", AttributeType: "S" },
      { AttributeName: "userSub", AttributeType: "S" },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ByUserSub",
        KeySchema: [{ AttributeName: "userSub", KeyType: "HASH" }],
        Projection: { ProjectionType: "ALL" },
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Sessions: TableSchema = {
  tableName: "Sessions",
  ttlAttribute: "expiresAt",
  createInput: {
    TableName: "Sessions",
    KeySchema: [{ AttributeName: "userSub", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "userSub", AttributeType: "S" }],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Invites: TableSchema = {
  tableName: "Invites",
  ttlAttribute: "expiresAt",
  createInput: {
    TableName: "Invites",
    KeySchema: [{ AttributeName: "inviteToken", KeyType: "HASH" }],
    AttributeDefinitions: [
      { AttributeName: "inviteToken", AttributeType: "S" },
      { AttributeName: "email", AttributeType: "S" },
      { AttributeName: "workspaceId", AttributeType: "S" },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ByEmailWorkspace",
        KeySchema: [
          { AttributeName: "email", KeyType: "HASH" },
          { AttributeName: "workspaceId", KeyType: "RANGE" },
        ],
        Projection: { ProjectionType: "ALL" },
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Credentials: TableSchema = {
  tableName: "Credentials",
  createInput: {
    TableName: "Credentials",
    KeySchema: [
      { AttributeName: "workspaceId", KeyType: "HASH" },
      { AttributeName: "path", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId", AttributeType: "S" },
      { AttributeName: "path", AttributeType: "S" },
      { AttributeName: "provider", AttributeType: "S" },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ByProvider",
        KeySchema: [{ AttributeName: "provider", KeyType: "HASH" }],
        Projection: { ProjectionType: "ALL" },
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

/**
 * Single-table design for gateway permission grants (APR-320).
 *
 * Each workspace's items share the partition `PK = WS#<workspaceId>`. The sort
 * key encodes the entity:
 *   - `SK = PERM#<callerId>#<provider>#<operation>` — the grant (`operation`
 *     may be `*` for a wildcard over all of the provider's operations)
 *   - `SK = PERMID#<permId>` — a permId → (callerId, provider, operation)
 *     pointer written alongside the grant so `revoke(wsId, permId)` can
 *     resolve the tuple and delete both items in one `TransactWriteItems`
 *
 * `check()` is a `BatchGetItem` of the exact-op and wildcard items (two items,
 * one round-trip). `list()` queries `begins_with(SK, "PERM#")`, which excludes
 * the `PERMID#` pointers (their 5th character is `I`, not `#`). No GSI is
 * required.
 */
export const Permissions: TableSchema = {
  tableName: "Permissions",
  createInput: {
    TableName: "Permissions",
    KeySchema: [
      { AttributeName: "PK", KeyType: "HASH" },
      { AttributeName: "SK", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "PK", AttributeType: "S" },
      { AttributeName: "SK", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Groups: TableSchema = {
  tableName: "Groups",
  createInput: {
    TableName: "Groups",
    KeySchema: [
      { AttributeName: "workspaceId", KeyType: "HASH" },
      { AttributeName: "groupId", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId", AttributeType: "S" },
      { AttributeName: "groupId", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const GroupPrefixGrants: TableSchema = {
  tableName: "GroupPrefixGrants",
  createInput: {
    TableName: "GroupPrefixGrants",
    KeySchema: [
      { AttributeName: "workspaceId#groupId", KeyType: "HASH" },
      { AttributeName: "pathPrefix", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId#groupId", AttributeType: "S" },
      { AttributeName: "pathPrefix", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const GroupToolGrants: TableSchema = {
  tableName: "GroupToolGrants",
  createInput: {
    TableName: "GroupToolGrants",
    KeySchema: [
      { AttributeName: "workspaceId#groupId", KeyType: "HASH" },
      { AttributeName: "provider#operation", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId#groupId", AttributeType: "S" },
      { AttributeName: "provider#operation", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const UserGroups: TableSchema = {
  tableName: "UserGroups",
  createInput: {
    TableName: "UserGroups",
    KeySchema: [
      { AttributeName: "workspaceId#userSub", KeyType: "HASH" },
      { AttributeName: "groupId", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId#userSub", AttributeType: "S" },
      { AttributeName: "groupId", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const Audit: TableSchema = {
  tableName: "Audit",
  ttlAttribute: "expiresAt",
  createInput: {
    TableName: "Audit",
    KeySchema: [
      { AttributeName: "workspaceId", KeyType: "HASH" },
      { AttributeName: "timestamp#requestId", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "workspaceId", AttributeType: "S" },
      { AttributeName: "timestamp#requestId", AttributeType: "S" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};

export const ALL_TABLES: TableSchema[] = [
  Users,
  Workspaces,
  Memberships,
  Sessions,
  Invites,
  Credentials,
  Permissions,
  Groups,
  GroupPrefixGrants,
  GroupToolGrants,
  UserGroups,
  Audit,
];
