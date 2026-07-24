/**
 * Server-side workflow script runner — the gateway twin of the registry
 * playground's browser sandbox. The script runs inside a QuickJS WASM
 * isolate (see sandbox.ts) where the only capabilities are:
 *
 *   - namespace proxies (core services + every credentialed provider), each
 *     call dispatched through {@link invokeTool} and recorded as a span
 *   - `console.*`, captured into the run record
 *   - `input` — the trigger payload (webhook body, event payload, manual args)
 *
 * No `require`, `process`, `fetch`, or host globals — the WASM boundary
 * makes that a guarantee rather than a convention: all effects ride the
 * same tool-dispatch path widgets use, so tracing, credentials, and authz
 * are uniform. Scripts are plain async JavaScript
 * (`await github.repos.get(...)`) with an optional trailing `return`.
 *
 * Event emissions from inside a run trigger subscribed workflows with an
 * incremented depth; MAX_EVENT_DEPTH caps cascades to prevent loops.
 */

import { getCredentialStore } from "../credentials.js";
import { getFsStore } from "../fs-store.js";
import { listInterfaces } from "../interfaces.js";
import { CORE_SERVICES, ServiceError, type ServiceContext } from "../services.js";
import { invokeTool } from "./invoke.js";
import { runScriptInSandbox } from "./sandbox.js";
import {
  newRunId,
  newTraceId,
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

/**
 * Top-level provider names from the utdk registry (github, stripe, …),
 * loaded once. Used to expose script-referenced public providers as
 * namespaces even when no credential is stored.
 */
let utdkProvidersPromise: Promise<Set<string>> | undefined;

function utdkProviderNames(): Promise<Set<string>> {
  utdkProvidersPromise ??= (async () => {
    try {
      const { createRequire } = await import("node:module");
      const require = createRequire(import.meta.url);
      const registry = require("utdk/registry.json") as {
        providers?: Record<string, unknown>;
      };
      const names = new Set<string>();
      for (const name of Object.keys(registry.providers ?? {})) {
        const root = name.split("/")[0] ?? "";
        if (/^[A-Za-z_$][\w$]*$/u.test(root)) names.add(root);
      }
      return names;
    } catch {
      return new Set<string>();
    }
  })();
  return utdkProvidersPromise;
}

function stringify(value: unknown): string {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
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
  /**
   * Where the script SOURCE is read from, when that differs from the
   * workspace the run executes in — a `dataScope: "workspace"` app publishes
   * its code from the owner workspace but runs against the caller's.
   */
  scriptWorkspaceId?: string;
  /** Trace this run belongs to (a new trace is started when absent). */
  traceId?: string;
  /** Run that caused this one (event cascade, workflow→workflow, app call). */
  parentRunId?: string;
  /** App this run was started through, for the trace tree. */
  app?: string;
}

export async function runWorkflow(options: RunWorkflowOptions): Promise<WorkflowRun> {
  const {
    workspaceId,
    userId,
    registration,
    trigger,
    triggerDetail,
    input,
    depth = 0,
    appScope,
    scriptWorkspaceId,
    parentRunId,
    app,
  } = options;

  const traceId = options.traceId ?? newTraceId();
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
    traceId,
    parentRunId,
    app,
  };
  const startMs = performance.now();

  const scriptFile = await getFsStore().read(
    scriptWorkspaceId ?? workspaceId,
    registration.scriptPath,
  );
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
  const ctx: ServiceContext = {
    workspaceId,
    userId,
    workflowDepth: depth + 1,
    appScope,
    // Registration-level interface bindings pin e.g. `llm` to a specific
    // provider for this workflow's runs.
    interfaceBindings: registration.bindings,
    // Anything this run causes (an emit that fires a workflow, a nested
    // workflows.run) inherits the trace and names THIS run as its parent.
    traceId,
    parentRunId: run.id,
  };

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

  // Namespace globals: every core service, every generic interface (llm, …
  // — resolved to the workspace's bound implementation at call time), plus
  // every credentialed provider (LLM aliases included — they dispatch
  // through the alias resolution), plus any registry provider the script
  // references — public APIs (github, …) work without a credential, so a
  // missing credential must not strip the namespace.
  const namespaces = new Set<string>(Object.keys(CORE_SERVICES));
  for (const def of listInterfaces()) namespaces.add(def.id);
  const registryProviders = await utdkProviderNames();
  for (const match of scriptFile.content.matchAll(/([A-Za-z_$][\w$]*)\s*\./gu)) {
    const identifier = match[1]!;
    if (registryProviders.has(identifier)) namespaces.add(identifier);
  }
  try {
    const credentials = await getCredentialStore().list(workspaceId);
    for (const credential of credentials) namespaces.add(credential.provider);
  } catch {
    // Credential listing is best-effort; core namespaces still work.
  }

  try {
    run.result =
      (await runScriptInSandbox({
        source: scriptFile.content,
        filename: registration.scriptPath,
        input: input ?? null,
        namespaces: [...namespaces],
        dispatch: (namespace, path, args) => dispatchFor(namespace)(path, args),
        log: pushLog,
        timeoutMs: SCRIPT_TIMEOUT_MS,
      })) ?? null;
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
      // The emitting run (or app call) is this run's parent in the trace.
      // The app scope deliberately does NOT propagate: an event-subscribed
      // workflow is the workspace's own automation, not part of the app
      // session, and must keep the workspace's data view.
      traceId: ctx.traceId,
      parentRunId: ctx.parentRunId,
    }).catch(() => undefined);
  }
}

/**
 * Convenience: run by name (manual/API trigger). A workflow→workflow call
 * lands here with the caller's context, so the child run joins the caller's
 * trace and names it as parent; the depth cap still applies through
 * `workflowDepth`.
 */
export async function runWorkflowByName(
  ctx: ServiceContext,
  name: string,
  trigger: WorkflowRun["trigger"],
  input?: unknown,
  triggerDetail?: string,
): Promise<WorkflowRun> {
  if ((ctx.workflowDepth ?? 0) > MAX_EVENT_DEPTH) {
    throw new ServiceError(
      `Workflow cascade depth exceeded (${MAX_EVENT_DEPTH}) running ${name}`,
      429,
    );
  }
  const registration = await readRegistration(ctx.workspaceId, name);
  if (!registration) throw new ServiceError(`Unknown workflow: ${name}`, 404);
  return runWorkflow({
    workspaceId: ctx.workspaceId,
    userId: ctx.userId,
    registration,
    trigger,
    triggerDetail,
    input,
    depth: ctx.workflowDepth ?? 0,
    appScope: ctx.appScope,
    traceId: ctx.traceId,
    parentRunId: ctx.parentRunId,
    app: ctx.appScope?.name,
  });
}
