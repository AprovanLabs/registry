/**
 * Audit log for gateway tool calls — DynamoDB backend (30-day TTL).
 *
 * Per APR-323, the legacy in-memory ring-buffer backend has been removed.
 * `AuditStoreDynamodb` is now the sole implementation.
 */

import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join } from "node:path";
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
// SQLite backend (local mode) — same contract, one table in gateway.db,
// with a lazy 30-day purge standing in for DynamoDB's TTL.
// ---------------------------------------------------------------------------

const loadSqlite = (): typeof import("better-sqlite3") => {
  const req =
    typeof require === "function" ? require : createRequire(import.meta.url);
  return req("better-sqlite3");
};

export class AuditStoreSqlite implements IAuditStore {
  private readonly database: import("better-sqlite3").Database;

  constructor(
    directory = process.env["GATEWAY_DATA_DIR"] ?? join(homedir(), ".aprovan"),
  ) {
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    const SqliteDatabase = loadSqlite();
    this.database = new SqliteDatabase(join(directory, "gateway.db"));
    this.database.exec(`
      CREATE TABLE IF NOT EXISTS audit_log (
        id TEXT PRIMARY KEY,
        ts TEXT NOT NULL,
        request_id TEXT NOT NULL,
        workspace_id TEXT NOT NULL,
        caller_id TEXT NOT NULL,
        provider TEXT NOT NULL,
        operation TEXT NOT NULL,
        status INTEGER NOT NULL,
        duration_ms INTEGER,
        result TEXT NOT NULL,
        mcp_tool_name TEXT
      );
      CREATE INDEX IF NOT EXISTS audit_log_ws_ts ON audit_log(workspace_id, ts DESC);
    `);
    this.database
      .prepare(`DELETE FROM audit_log WHERE ts < ?`)
      .run(new Date(Date.now() - TTL_30_DAYS_MS).toISOString());
  }

  append(entry: Omit<AuditEntry, "id" | "ts" | "result">): void {
    try {
      this.database
        .prepare(
          `INSERT INTO audit_log
           (id, ts, request_id, workspace_id, caller_id, provider, operation, status, duration_ms, result, mcp_tool_name)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          crypto.randomUUID(),
          new Date().toISOString(),
          entry.requestId,
          entry.workspaceId,
          entry.callerId,
          entry.provider,
          entry.operation,
          entry.status,
          entry.durationMs ?? null,
          entry.status === 403 ? "forbidden" : entry.status < 400 ? "success" : "error",
          entry.mcp_tool_name ?? null,
        );
    } catch (err) {
      console.error("[AuditStoreSqlite] append failed:", err);
    }
  }

  async recent(opts: {
    workspaceId: string;
    limit?: number;
    callerId?: string;
    provider?: string;
  }): Promise<AuditEntry[]> {
    const { workspaceId, limit = 100, callerId, provider } = opts;
    const clauses = ["workspace_id = ?"];
    const params: unknown[] = [workspaceId];
    if (callerId !== undefined) {
      clauses.push("caller_id = ?");
      params.push(callerId);
    }
    if (provider !== undefined) {
      clauses.push("provider = ?");
      params.push(provider);
    }
    const rows = this.database
      .prepare(
        `SELECT * FROM audit_log WHERE ${clauses.join(" AND ")}
         ORDER BY ts DESC LIMIT ?`,
      )
      .all(...params, limit) as Record<string, unknown>[];
    return rows.map((row) => ({
      id: String(row["id"]),
      ts: String(row["ts"]),
      requestId: String(row["request_id"]),
      workspaceId: String(row["workspace_id"]),
      callerId: String(row["caller_id"]),
      provider: String(row["provider"]),
      operation: String(row["operation"]),
      status: Number(row["status"]),
      durationMs: row["duration_ms"] === null ? undefined : Number(row["duration_ms"]),
      result: String(row["result"]) as AuditEntry["result"],
      mcp_tool_name: row["mcp_tool_name"] === null ? undefined : String(row["mcp_tool_name"]),
    }));
  }
}

// ---------------------------------------------------------------------------
// Singleton factory
// ---------------------------------------------------------------------------

let _store: IAuditStore | undefined;

/** Resolve the singleton audit store (STORE_BACKEND switch, like the FS,
 *  record, and credential stores — SQLite is the local-mode default). */
export function getAuditStore(): IAuditStore {
  if (!_store) {
    const backend =
      process.env["STORE_BACKEND"] ??
      (process.env["FS_BUCKET"] ? "dynamodb" : "sqlite");
    _store = backend === "dynamodb" ? new AuditStoreDynamodb() : new AuditStoreSqlite();
  }
  return _store;
}

export function resetAuditStore(): void {
  _store = undefined;
}
