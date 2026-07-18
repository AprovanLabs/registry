/**
 * First-party core service namespaces — the infra-level primitives widgets
 * and handlers call as bare injected globals:
 *
 *   await keyvalue.set("draft", { title: "..." });
 *   const draft = await keyvalue.get("draft");
 *   await events.emit("form.submitted", { id: 1 });
 *
 * Every call is auto-tenanted by the caller's workspace and attributed to the
 * calling user — callers never see storage, tenancy, or transport. The SDK
 * surface is the stable contract (think WASI): today both services are backed
 * by the workspace FS store, and the backend can be swapped (Valkey/Redis for
 * keyvalue, SNS/Kafka for events) without touching a single caller.
 *
 * Dispatch rides the same proxy path as UTDK providers
 * (`POST /tools/:namespace/:procedure`), so clients need no special casing:
 * core namespaces appear in tool discovery next to credentialed providers.
 */

import { getFsStore } from "./fs-store.js";
import type { ToolEntry } from "./routes/tools.js";

export interface ServiceContext {
  workspaceId: string;
  userId: string;
}

export interface CoreService {
  /** Tool entries advertised in discovery (`GET /tools`). */
  tools: Omit<ToolEntry, "provider">[];
  call(
    ctx: ServiceContext,
    procedure: string,
    args: Record<string, unknown>,
  ): Promise<unknown>;
}

/** Keys/channels: dotted-path identifiers, no traversal. */
const IDENT_RE = /^[\w][\w.\-:]{0,127}$/u;

function ident(value: unknown, label: string): string {
  if (typeof value !== "string" || !IDENT_RE.test(value)) {
    throw new ServiceError(`${label} must match ${IDENT_RE}`, 400);
  }
  return value;
}

export class ServiceError extends Error {
  constructor(
    message: string,
    readonly status: number = 400,
  ) {
    super(message);
  }
}

// ---------------------------------------------------------------------------
// keyvalue — workspace-scoped KV. Backend: WFS (`.services/keyvalue/<key>`).
// ---------------------------------------------------------------------------

const KV_PREFIX = ".services/keyvalue/";

const keyvalue: CoreService = {
  tools: [
    {
      name: "keyvalue.get",
      operation: "get",
      description: "Read a value by key (null when absent).",
      inputSchema: { type: "object", properties: { key: { type: "string" } }, required: ["key"] },
    },
    {
      name: "keyvalue.set",
      operation: "set",
      description: "Write a JSON-serializable value under a key.",
      inputSchema: {
        type: "object",
        properties: { key: { type: "string" }, value: {} },
        required: ["key", "value"],
      },
    },
    {
      name: "keyvalue.delete",
      operation: "delete",
      description: "Delete a key.",
      inputSchema: { type: "object", properties: { key: { type: "string" } }, required: ["key"] },
    },
    {
      name: "keyvalue.list",
      operation: "list",
      description: "List keys under an optional prefix.",
      inputSchema: { type: "object", properties: { prefix: { type: "string" } } },
    },
  ],

  async call(ctx, procedure, args) {
    const store = getFsStore();
    switch (procedure) {
      case "get": {
        const key = ident(args["key"], "key");
        const file = await store.read(ctx.workspaceId, KV_PREFIX + key);
        return { key, value: file ? (JSON.parse(file.content) as unknown) : null };
      }
      case "set": {
        const key = ident(args["key"], "key");
        await store.write(
          ctx.workspaceId,
          KV_PREFIX + key,
          JSON.stringify(args["value"] ?? null),
          "application/json",
        );
        return { key, ok: true };
      }
      case "delete": {
        const key = ident(args["key"], "key");
        const deleted = await store.remove(ctx.workspaceId, KV_PREFIX + key);
        return { key, deleted };
      }
      case "list": {
        // FS listing is directory-style; key-prefix filtering happens here.
        const prefix = typeof args["prefix"] === "string" ? args["prefix"] : "";
        const entries = await store.list(ctx.workspaceId, KV_PREFIX.slice(0, -1));
        const keys = entries
          .map((e) => e.path.slice(KV_PREFIX.length))
          .filter((k) => k.startsWith(prefix));
        return { keys };
      }
      default:
        throw new ServiceError(`Unknown keyvalue procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// events — workspace-scoped event channels. Backend: WFS append-log
// (`.services/events/<channel>.jsonl`). Emit is fire-and-forget for callers;
// consumers poll with `list`. A push backend (SNS/Kafka/WebSocket fan-out)
// replaces this file without changing the emit/list contract.
// ---------------------------------------------------------------------------

const EVENTS_PREFIX = ".services/events/";
const EVENTS_MAX_RETAINED = 500;

interface EventRecord {
  id: string;
  ts: string;
  userId: string;
  payload: unknown;
}

const events: CoreService = {
  tools: [
    {
      name: "events.emit",
      operation: "emit",
      description: "Emit an event on a named channel (e.g. 'form.submitted').",
      inputSchema: {
        type: "object",
        properties: { channel: { type: "string" }, payload: {} },
        required: ["channel"],
      },
    },
    {
      name: "events.list",
      operation: "list",
      description: "Read recent events on a channel, oldest first.",
      inputSchema: {
        type: "object",
        properties: { channel: { type: "string" }, limit: { type: "number" } },
        required: ["channel"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    const store = getFsStore();
    switch (procedure) {
      case "emit": {
        const channel = ident(args["channel"], "channel");
        const path = EVENTS_PREFIX + channel + ".jsonl";
        const record: EventRecord = {
          id: crypto.randomUUID(),
          ts: new Date().toISOString(),
          userId: ctx.userId,
          payload: args["payload"] ?? null,
        };
        const existing = await store.read(ctx.workspaceId, path);
        const lines = existing ? existing.content.split("\n").filter(Boolean) : [];
        lines.push(JSON.stringify(record));
        await store.write(
          ctx.workspaceId,
          path,
          lines.slice(-EVENTS_MAX_RETAINED).join("\n"),
          "application/jsonl",
        );
        return { id: record.id, channel };
      }
      case "list": {
        const channel = ident(args["channel"], "channel");
        const limit = Math.min(Number(args["limit"]) || 50, EVENTS_MAX_RETAINED);
        const file = await store.read(ctx.workspaceId, EVENTS_PREFIX + channel + ".jsonl");
        const records = (file ? file.content.split("\n").filter(Boolean) : [])
          .slice(-limit)
          .map((line) => JSON.parse(line) as EventRecord);
        return { channel, events: records };
      }
      default:
        throw new ServiceError(`Unknown events procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const CORE_SERVICES: Record<string, CoreService> = { keyvalue, events };

export function getCoreService(namespace: string): CoreService | undefined {
  return CORE_SERVICES[namespace];
}

/** Discovery entries for every core service (always available, no credential). */
export function coreToolEntries(): ToolEntry[] {
  return Object.entries(CORE_SERVICES).flatMap(([provider, service]) =>
    service.tools.map((tool) => ({ ...tool, provider })),
  );
}
