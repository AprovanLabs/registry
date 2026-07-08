/**
 * Audit log for gateway tool calls.
 *
 * Two backends share `IAuditStore`:
 *   - `AuditStore`         — ring-buffer in-memory store (local dev / tests)
 *   - `AuditStoreDynamodb` — 30-day TTL persistent store, selected via
 *                            `GATEWAY_STORE_BACKEND=dynamodb`
 */

import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamoDocClient } from "./db/client.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AuditEntry {
  id: string;
  ts: string;
  requestId: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  /** HTTP status code (200, 403, 500, …) */
  status: number;
  durationMs?: number;
  /** Human-readable label derived from status */
  result: "success" | "forbidden" | "error";
  /** MCP meta-tool name when the call came via the MCP transport */
  mcp_tool_name?: string;
}

export interface IAuditStore {
  /** Fire-and-forget write. Implementations must not throw on write failure. */
  append(entry: Omit<AuditEntry, "id" | "ts" | "result">): void;
  /** Return the N most-recent entries for a workspace, optionally filtered. */
  recent(opts: {
    workspaceId: string;
    limit?: number;
    callerId?: string;
    provider?: string;
  }): Promise<AuditEntry[]>;
}

// ---------------------------------------------------------------------------
// In-memory backend
// ---------------------------------------------------------------------------

const MAX_ENTRIES = 500;

export class AuditStore implements IAuditStore {
  private readonly entries: AuditEntry[] = [];

  append(entry: Omit<AuditEntry, "id" | "ts" | "result">): void {
    const id = crypto.randomUUID();
    const ts = new Date().toISOString();
    const result =
      entry.status === 403 ? "forbidden" : entry.status < 400 ? "success" : "error";

    this.entries.push({ id, ts, result, ...entry });

    if (this.entries.length > MAX_ENTRIES) {
      this.entries.splice(0, this.entries.length - MAX_ENTRIES);
    }
  }

  recent(opts: {
    workspaceId: string;
    limit?: number;
    callerId?: string;
    provider?: string;
  }): Promise<AuditEntry[]> {
    const { workspaceId, limit = 100, callerId, provider } = opts;

    const results: AuditEntry[] = [];
    for (let i = this.entries.length - 1; i >= 0 && results.length < limit; i--) {
      const e = this.entries[i]!;
      if (e.workspaceId !== workspaceId) continue;
      if (callerId !== undefined && e.callerId !== callerId) continue;
      if (provider !== undefined && e.provider !== provider) continue;
      results.push(e);
    }
    return Promise.resolve(results);
  }
}

// ---------------------------------------------------------------------------
// DynamoDB backend (single-table design, APR-321)
// ---------------------------------------------------------------------------

const TTL_30_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export class AuditStoreDynamodb implements IAuditStore {
  private readonly tableName: string;

  constructor(tableName?: string) {
    this.tableName = tableName ?? process.env["AUDIT_TABLE"] ?? "Audit";
  }

  append(entry: Omit<AuditEntry, "id" | "ts" | "result">): void {
    const id = crypto.randomUUID();
    const ts = new Date().toISOString();
    const result =
      entry.status === 403 ? "forbidden" : entry.status < 400 ? "success" : "error";
    const ttl = Math.floor((Date.now() + TTL_30_DAYS_MS) / 1000);

    const item: Record<string, unknown> = {
      PK: `WS#${entry.workspaceId}`,
      SK: `AUDIT#${ts}#${id}`,
      id,
      ts,
      result,
      ttl,
      requestId: entry.requestId,
      workspaceId: entry.workspaceId,
      callerId: entry.callerId,
      provider: entry.provider,
      operation: entry.operation,
      status: entry.status,
    };
    if (entry.durationMs !== undefined) item["durationMs"] = entry.durationMs;
    if (entry.mcp_tool_name !== undefined) item["mcp_tool_name"] = entry.mcp_tool_name;

    getDynamoDocClient()
      .send(new PutCommand({ TableName: this.tableName, Item: item }))
      .catch((err: unknown) => {
        console.error("[AuditStoreDynamodb] append failed:", err);
      });
  }

  async recent(opts: {
    workspaceId: string;
    limit?: number;
    callerId?: string;
    provider?: string;
  }): Promise<AuditEntry[]> {
    const { workspaceId, limit = 100, callerId, provider } = opts;

    const exprAttrValues: Record<string, unknown> = {
      ":pk": `WS#${workspaceId}`,
      ":sk": "AUDIT#",
    };
    const exprAttrNames: Record<string, string> = {};
    const filterParts: string[] = [];

    if (callerId !== undefined) {
      filterParts.push("callerId = :callerId");
      exprAttrValues[":callerId"] = callerId;
    }
    if (provider !== undefined) {
      filterParts.push("#prov = :provider");
      exprAttrValues[":provider"] = provider;
      exprAttrNames["#prov"] = "provider";
    }

    const results: AuditEntry[] = [];
    let lastKey: Record<string, unknown> | undefined;

    do {
      const res = await getDynamoDocClient().send(
        new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
          ExpressionAttributeValues: exprAttrValues,
          ScanIndexForward: false,
          Limit: limit,
          ...(filterParts.length > 0 && { FilterExpression: filterParts.join(" AND ") }),
          ...(Object.keys(exprAttrNames).length > 0 && {
            ExpressionAttributeNames: exprAttrNames,
          }),
          ...(lastKey && { ExclusiveStartKey: lastKey }),
        }),
      );

      for (const item of (res.Items ?? []) as Record<string, unknown>[]) {
        if (results.length >= limit) break;
        results.push(this.toEntry(item));
      }
      lastKey = res.LastEvaluatedKey as Record<string, unknown> | undefined;
    } while (lastKey !== undefined && results.length < limit);

    return results;
  }

  private toEntry(item: Record<string, unknown>): AuditEntry {
    return {
      id: item["id"] as string,
      ts: item["ts"] as string,
      requestId: item["requestId"] as string,
      workspaceId: item["workspaceId"] as string,
      callerId: item["callerId"] as string,
      provider: item["provider"] as string,
      operation: item["operation"] as string,
      status: item["status"] as number,
      durationMs: item["durationMs"] as number | undefined,
      result: item["result"] as "success" | "forbidden" | "error",
      mcp_tool_name: item["mcp_tool_name"] as string | undefined,
    };
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: IAuditStore | undefined;

export function getAuditStore(): IAuditStore {
  if (!_store) {
    if (process.env["GATEWAY_STORE_BACKEND"] === "dynamodb") {
      _store = new AuditStoreDynamodb();
    } else {
      _store = new AuditStore();
    }
  }
  return _store;
}

export function resetAuditStore(): void {
  _store = undefined;
}
