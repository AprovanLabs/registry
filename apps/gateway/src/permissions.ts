/**
 * Per-tool permission grants — DynamoDB single-table backend.
 *
 * Per APR-323, the legacy in-memory/file backend has been removed.
 * `PermissionStoreDynamodb` is now the sole implementation.
 *
 * A permission entry grants `callerId` the right to call `provider:operation`
 * (or `provider:*` as a wildcard for all operations of a provider).
 *
 * `check(wsId, caller, provider, op)` is a `BatchGetItem` of the exact-op item
 * `PERM#<caller>#<provider>#<op>` and the wildcard item
 * `PERM#<caller>#<provider>#*` (two items, one round-trip).
 * `revoke(wsId, permId)` resolves the permId → tuple via a `PERMID#<permId>`
 * pointer item, then `TransactWriteItems` both items away.
 *
 * The public API is async so callers `await` every method.
 */

import { randomBytes } from "crypto";
import {
  BatchGetCommand,
  GetCommand,
  QueryCommand,
  TransactWriteCommand,
} from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Permission {
  id: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  /** Operation name or "*" for all operations under the provider */
  operation: string;
  grantedAt: string;
  grantedBy: string;
}

export interface GrantInput {
  callerId: string;
  provider: string;
  operation: string;
  grantedBy: string;
}

// ---------------------------------------------------------------------------
// Store interface
// ---------------------------------------------------------------------------

export interface IPermissionStore {
  grant(workspaceId: string, input: GrantInput): Promise<Permission>;
  revoke(workspaceId: string, id: string): Promise<boolean>;
  list(workspaceId: string, callerId?: string): Promise<Permission[]>;
  /** Whether `callerId` may invoke `provider:operation` (or a `*` wildcard). */
  check(workspaceId: string, callerId: string, provider: string, operation: string): Promise<boolean>;
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function makeId(): string {
  return randomBytes(12).toString("hex");
}

// ---------------------------------------------------------------------------
// DynamoDB backend (single-table design, APR-320)
// ---------------------------------------------------------------------------

/**
 * DynamoDB-backed permission store using the single-table schema in
 * `db/schema.ts` (`Permissions`):
 *   - `PK = WS#<workspaceId>`
 *   - `SK = PERM#<callerId>#<provider>#<operation>`   (the grant; `operation`
 *     may be `*` for a wildcard over all of the provider's operations)
 *   - `SK = PERMID#<permId>`                          (a permId → tuple pointer
 *     written alongside the grant so `revoke(wsId, permId)` can resolve the
 *     tuple and `TransactWriteItems` both items away)
 *
 * `grant` is idempotent — the SK encodes the (caller, provider, operation)
 * tuple, so re-granting the same tuple overwrites the same item. Both the grant
 * and its pointer are written in a single `TransactWriteItems` so a grant never
 * leaves an orphaned PERM item. (Re-granting a tuple does leave the previous
 * grant's `PERMID#` pointer behind — it is invisible to `list`, and a revoke
 * through it simply re-deletes the same SK; an accepted minor cost of the
 * spec'd permId-pointer design.)
 *
 * `check(wsId, caller, provider, op)` is a `BatchGetItem` of the exact-op item
 * `PERM#<caller>#<provider>#<op>` and the wildcard item
 * `PERM#<caller>#<provider>#*` — two items, one round-trip. When `op` itself is
 * `*` the two keys collapse to one.
 *
 * `list(wsId, callerId?)` queries `begins_with(SK, "PERM#<callerId>#")` when a
 * caller is given, else `begins_with(SK, "PERM#")`; both exclude the
 * `PERMID#` pointer items (their 5th character is `I`, not `#`).
 */
export class PermissionStoreDynamodb implements IPermissionStore {
  private readonly tableName: string;

  constructor(tableName?: string) {
    this.tableName = tableName ?? process.env["PERMISSIONS_TABLE"] ?? "Permissions";
  }

  async grant(workspaceId: string, input: GrantInput): Promise<Permission> {
    const id = makeId();
    const now = new Date().toISOString();
    const sk = this.permSk(input.callerId, input.provider, input.operation);
    const perm: Permission = {
      id,
      workspaceId,
      callerId: input.callerId,
      provider: input.provider,
      operation: input.operation,
      grantedAt: now,
      grantedBy: input.grantedBy,
    };

    const client = getDynamoDocClient();
    // Atomically write the grant and its permId pointer. Re-granting the same
    // (caller, provider, operation) tuple overwrites the same SK: the
    // transaction replaces the grant and writes a fresh pointer in one shot.
    await client.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Put: {
              TableName: this.tableName,
              Item: {
                PK: `WS#${workspaceId}`,
                SK: sk,
                id,
                workspaceId,
                callerId: input.callerId,
                provider: input.provider,
                operation: input.operation,
                grantedAt: now,
                grantedBy: input.grantedBy,
              },
            },
          },
          {
            Put: {
              TableName: this.tableName,
              Item: {
                PK: `WS#${workspaceId}`,
                SK: `PERMID#${id}`,
                callerId: input.callerId,
                provider: input.provider,
                operation: input.operation,
              },
            },
          },
        ],
      }),
    );
    return perm;
  }

  async revoke(workspaceId: string, id: string): Promise<boolean> {
    const client = getDynamoDocClient();
    // Resolve permId → (callerId, provider, operation) via the pointer.
    const pointerRes = await client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: { PK: `WS#${workspaceId}`, SK: `PERMID#${id}` },
      }),
    );
    const pointer = pointerRes.Item as Record<string, unknown> | undefined;
    if (!pointer) return false;
    const sk = this.permSk(
      pointer["callerId"] as string,
      pointer["provider"] as string,
      pointer["operation"] as string,
    );

    await client.send(
      new TransactWriteCommand({
        TransactItems: [
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: sk },
            },
          },
          {
            Delete: {
              TableName: this.tableName,
              Key: { PK: `WS#${workspaceId}`, SK: `PERMID#${id}` },
            },
          },
        ],
      }),
    );
    return true;
  }

  async list(workspaceId: string, callerId?: string): Promise<Permission[]> {
    const client = getDynamoDocClient();
    const skPrefix = callerId !== undefined ? `PERM#${callerId}#` : "PERM#";
    const result = await client.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": `WS#${workspaceId}`,
          ":sk": skPrefix,
        },
      }),
    );
    return (result.Items ?? []).map((it) => this.toPermission(it as Record<string, unknown>));
  }

  async check(workspaceId: string, callerId: string, provider: string, operation: string): Promise<boolean> {
    const client = getDynamoDocClient();
    // BatchGet the exact-op item and the wildcard item. When `operation` is
    // itself "*" the two keys collapse to one (only the wildcard grant can
    // answer a wildcard query).
    const sks = operation === "*" ? [this.permSk(callerId, provider, "*")] : [this.permSk(callerId, provider, operation), this.permSk(callerId, provider, "*")];
    const res = await client.send(
      new BatchGetCommand({
        RequestItems: {
          [this.tableName]: {
            Keys: sks.map((sk) => ({ PK: `WS#${workspaceId}`, SK: sk })),
          },
        },
      }),
    );
    const responses = res.Responses?.[this.tableName] ?? [];
    return responses.length > 0;
  }

  private permSk(callerId: string, provider: string, operation: string): string {
    return `PERM#${callerId}#${provider}#${operation}`;
  }

  private toPermission(item: Record<string, unknown>): Permission {
    return {
      id: item["id"] as string,
      workspaceId: item["workspaceId"] as string,
      callerId: item["callerId"] as string,
      provider: item["provider"] as string,
      operation: item["operation"] as string,
      grantedAt: item["grantedAt"] as string,
      grantedBy: item["grantedBy"] as string,
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: IPermissionStore | undefined;

/** Resolve the singleton permission store (always DynamoDB). */
export function getPermissionStore(): IPermissionStore {
  if (!_store) {
    _store = new PermissionStoreDynamodb();
  }
  return _store;
}

/** Reset the singleton (used in tests). */
export function resetPermissionStore(): void {
  _store = undefined;
}
