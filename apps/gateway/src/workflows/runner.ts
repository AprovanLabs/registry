/**
 * Server-side workflow script runner — the gateway twin of the registry
 * playground's browser sandbox. The script runs inside a fresh `vm` context
 * where the only capabilities are:
 *
 *   - namespace proxies (core services + every credentialed provider), each
 *     call dispatched through {@link invokeTool} and recorded as a span
 *   - `console.*`, captured into the run record
 *   - `input` — the trigger payload (webhook body, event payload, manual args)
 *
 * No `require`, `process`, `fetch`, or host globals: all effects ride the
 * same tool-dispatch path widgets use, so tracing, credentials, and authz are
 * uniform. Scripts are plain async JavaScript (`await github.repos.get(...)`)
 * with an optional trailing `return`.
 *
 * Event emissions from inside a run trigger subscribed workflows with an
 * incremented depth; MAX_EVENT_DEPTH caps cascades to prevent loops.
 */

import vm from "node:vm";
import { getFsStore } from "../fs-store.js";
import { CORE_SERVICES, ServiceError, type ServiceContext } from "../services.js";
import { getCredentialStore } from "../credentials.js";
import { invokeTool } from "./invoke.js";
import {
  newRunId,
  readRegistration,
  saveRun,
  type WorkflowLogLine,
  type WorkflowRegistration,
  type WorkflowRun,
  type WorkflowSpan,
} from "./store.js";

export const MAX_EVENT_DEPTH = 2;
// Generous enough for a couple of LLM calls (chat-provider dispatch allows
// 120s per call); the sync spin-loop guard below stays tight.
const SCRIPT_TIMEOUT_MS = 180_000;

function stringify(value: unknown): string {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

/**
 * A recursive proxy turning `ns.a.b.c(args)` into
 * `dispatch("a.b.c", args)` — mirrors the playground sandbox's namespace
 * globals so scripts run unchanged in either runtime.
 */
function namespaceProxy(
  dispatch: (path: string, args: unknown[]) => Promise<unknown>,
  pathPrefix = "",
): unknown {
  const target = () => undefined;
  return new Proxy(target, {
    get(_t, prop) {
      if (typeof prop !== "string" || prop === "then") return undefined;
      return namespaceProxy(dispatch, pathPrefix ? `${pathPrefix}.${prop}` : prop);
    },
    apply(_t, _thisArg, args) {
      return dispatch(pathPrefix || "default", args);
    },
  });
}

export interface RunWorkflowOptions {
  workspaceId: string;
  userId: string;
  registration: WorkflowRegistration;
  trigger: WorkflowRun["trigger"];
  triggerDetail?: string;
  input?: unknown;
  /** Event-cascade depth (0 = user/API initiated). */
  depth?: number;
  /**
   * App session running this workflow (routes/apps.ts): tool calls made by
   * the script inherit the per-(app, user) data partitioning.
   */
  appScope?: ServiceContext["appScope"];
}

export async function runWorkflow(options: RunWorkflowOptions): Promise<WorkflowRun> {
  const { workspaceId, userId, registration, trigger, triggerDetail, input, depth = 0, appScope } = options;

  const run: WorkflowRun = {
    id: newRunId(),
    workflow: registration.name,
    trigger,
    triggerDetail,
    status: "running",
    startedAt: new Date().toISOString(),
    input: input ?? null,
    logs: [],
    spans: [],
  };
  const startMs = performance.now();

  const scriptFile = await getFsStore().read(workspaceId, registration.scriptPath);
  if (!scriptFile) {
    run.status = "failed";
    run.error = `Script not found: ${registration.scriptPath}`;
    run.durationMs = Math.round(performance.now() - startMs);
    await saveRun(workspaceId, run);
    return run;
  }

  // workflowDepth marks tool calls from this run as workflow-context, so
  // `events.emit` cascades subscribed workflows with an incremented depth
  // (capped at MAX_EVENT_DEPTH in triggerEventWorkflows).
  const ctx: ServiceContext = { workspaceId, userId, workflowDepth: depth + 1, appScope };

  const pushLog = (level: WorkflowLogLine["level"], parts: unknown[]) => {
    if (run.logs.length >= 500) return;
    run.logs.push({
      level,
      message: parts.map(stringify).join(" "),
      ts: new Date().toISOString(),
    });
  };

  const dispatchFor =
    (namespace: string) =>
    async (path: string, args: unknown[]): Promise<unknown> => {
      const span: WorkflowSpan = {
        namespace,
        procedure: path,
        startedAt: new Date().toISOString(),
        durationMs: 0,
        ok: false,
      };
      const spanStart = performance.now();
      try {
        // Positional args follow the SDK call convention: a single object
        // argument is the operation's named args.
        const argObject =
          args.length === 1 && typeof args[0] === "object" && args[0] !== null
            ? (args[0] as Record<string, unknown>)
            : args.length === 0
              ? {}
              : { args };
        const result = await invokeTool(ctx, namespace, path, argObject);
        span.ok = true;
        return result;
      } catch (err) {
        span.error = err instanceof Error ? err.message : String(err);
        throw err;
      } finally {
        span.durationMs = Math.round(performance.now() - spanStart);
        if (run.spans.length < 500) run.spans.push(span);
      }
    };

  // Namespace globals: every core service plus every credentialed provider
  // (LLM aliases included — they dispatch through the alias resolution).
  const namespaces = new Set<string>(Object.keys(CORE_SERVICES));
  try {
    const credentials = await getCredentialStore().list(workspaceId);
    for (const credential of credentials) namespaces.add(credential.provider);
  } catch {
    // Credential listing is best-effort; core namespaces still work.
  }

  const sandbox: Record<string, unknown> = {
    input: input ?? null,
    console: {
      log: (...parts: unknown[]) => pushLog("log", parts),
      info: (...parts: unknown[]) => pushLog("info", parts),
      warn: (...parts: unknown[]) => pushLog("warn", parts),
      error: (...parts: unknown[]) => pushLog("error", parts),
      debug: (...parts: unknown[]) => pushLog("debug", parts),
    },
  };
  for (const namespace of namespaces) {
    const proxy = namespaceProxy(dispatchFor(namespace));
    sandbox[namespace] = proxy;
    // Namespaces that aren't valid identifiers (e.g. "synthetic.new") also
    // bind under a sanitized alias so scripts can call `synthetic_new.…`.
    const alias = namespace.replace(/[^\w$]/gu, "_");
    if (alias !== namespace && !(alias in sandbox)) {
      sandbox[alias] = proxy;
    }
  }

  try {
    const context = vm.createContext(sandbox);
    const script = new vm.Script(
      `(async () => {\n${scriptFile.content}\n})()`,
      { filename: registration.scriptPath },
    );
    const resultPromise = script.runInContext(context, {
      timeout: 5_000, // guards synchronous spin-loops only
    }) as Promise<unknown>;

    let timer: NodeJS.Timeout | undefined;
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(
        () => reject(new ServiceError(`Workflow timed out after ${SCRIPT_TIMEOUT_MS}ms`, 504)),
        SCRIPT_TIMEOUT_MS,
      );
    });
    try {
      run.result = (await Promise.race([resultPromise, timeout])) ?? null;
    } finally {
      clearTimeout(timer);
    }
    run.status = "succeeded";
  } catch (err) {
    run.status = "failed";
    run.error = err instanceof Error ? err.message : String(err);
  }

  run.durationMs = Math.round(performance.now() - startMs);
  await saveRun(workspaceId, run);
  return run;
}

/**
 * Fire every workflow subscribed to `channel`. Called after an event lands —
 * from the events core service (user/API emissions, depth 0) and from the
 * runner's emit hook (workflow emissions, depth+1). Runs are fire-and-forget;
 * failures land in their own run records.
 */
export async function triggerEventWorkflows(
  ctx: ServiceContext,
  channel: string,
  payload: unknown,
  depth: number,
): Promise<void> {
  if (depth > MAX_EVENT_DEPTH) return;
  const { listRegistrations } = await import("./store.js");
  let registrations;
  try {
    registrations = await listRegistrations(ctx.workspaceId);
  } catch {
    return;
  }
  for (const registration of registrations) {
    if (!registration.triggers.events?.includes(channel)) continue;
    void runWorkflow({
      workspaceId: ctx.workspaceId,
      userId: ctx.userId,
      registration,
      trigger: "event",
      triggerDetail: channel,
      input: { channel, payload: payload ?? null },
      depth,
    }).catch(() => undefined);
  }
}

/** Convenience: run by name (manual/API trigger). */
export async function runWorkflowByName(
  ctx: ServiceContext,
  name: string,
  trigger: WorkflowRun["trigger"],
  input?: unknown,
  triggerDetail?: string,
): Promise<WorkflowRun> {
  const registration = await readRegistration(ctx.workspaceId, name);
  if (!registration) throw new ServiceError(`Unknown workflow: ${name}`, 404);
  return runWorkflow({
    workspaceId: ctx.workspaceId,
    userId: ctx.userId,
    registration,
    trigger,
    triggerDetail,
    input,
  });
}
