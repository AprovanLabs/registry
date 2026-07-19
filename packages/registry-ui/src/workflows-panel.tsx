/**
 * WorkflowsPanel — shared management surface for workspace workflows,
 * rendered identically by the registry app and patchwork chat.
 *
 * Transport-agnostic: the host passes `invoke(operation, args)` which must
 * dispatch to the gateway's `workflows` tool namespace (POST
 * /tools/workflows/:operation). Everything else — listing, trigger badges
 * (cron / webhook / events), manual runs, run history, and per-run traces
 * (logs + tool-call spans) — lives here so both apps stay in lockstep.
 */

import * as React from "react";

// ---------------------------------------------------------------------------
// Wire types (mirror the gateway's workflows service results)
// ---------------------------------------------------------------------------

export interface WorkflowSummary {
  name: string;
  description?: string;
  scriptPath: string;
  triggers: {
    manual?: boolean;
    cron?: string;
    webhook?: boolean;
    events?: string[];
  };
  webhookPath?: string;
  updatedAt?: string;
}

export interface WorkflowRunSummary {
  id: string;
  trigger: string;
  triggerDetail?: string;
  status: "running" | "succeeded" | "failed";
  startedAt: string;
  durationMs?: number;
  error?: string;
  spanCount?: number;
}

export interface WorkflowRunTrace extends WorkflowRunSummary {
  input?: unknown;
  result?: unknown;
  logs: Array<{ level: string; message: string; ts: string }>;
  spans: Array<{
    namespace: string;
    procedure: string;
    startedAt: string;
    durationMs: number;
    ok: boolean;
    error?: string;
  }>;
}

export type WorkflowsInvoke = (
  operation: string,
  args: Record<string, unknown>,
) => Promise<unknown>;

export interface WorkflowsPanelProps {
  invoke: WorkflowsInvoke;
  /** Open the workflow's script in the host's editor, when available. */
  onOpenScript?: (path: string) => void;
  className?: string;
}

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

function TriggerBadges({ workflow }: { workflow: WorkflowSummary }) {
  const badge =
    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium";
  return (
    <span className="flex flex-wrap items-center gap-1.5">
      {workflow.triggers.cron && (
        <span className={`${badge} border-sky-300 text-sky-700 dark:border-sky-800 dark:text-sky-400`}>
          cron <code className="font-mono">{workflow.triggers.cron}</code>
        </span>
      )}
      {workflow.triggers.webhook && (
        <span className={`${badge} border-violet-300 text-violet-700 dark:border-violet-800 dark:text-violet-400`}>
          webhook
        </span>
      )}
      {workflow.triggers.events?.map((channel) => (
        <span
          className={`${badge} border-emerald-300 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400`}
          key={channel}
        >
          on <code className="font-mono">{channel}</code>
        </span>
      ))}
      {!workflow.triggers.cron && !workflow.triggers.webhook && !workflow.triggers.events?.length && (
        <span className={`${badge} border-border text-muted-foreground`}>manual</span>
      )}
    </span>
  );
}

function StatusDot({ status }: { status: WorkflowRunSummary["status"] }) {
  const color =
    status === "succeeded"
      ? "bg-emerald-500"
      : status === "failed"
        ? "bg-red-500"
        : "bg-amber-400 animate-pulse";
  return <span className={`inline-block h-2 w-2 shrink-0 rounded-full ${color}`} />;
}

function formatWhen(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  } catch {
    return iso;
  }
}

function Pre({ value }: { value: unknown }) {
  if (value === undefined || value === null) return null;
  return (
    <pre className="max-h-48 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[0.7rem] whitespace-pre-wrap break-words">
      {typeof value === "string" ? value : JSON.stringify(value, null, 2)}
    </pre>
  );
}

// ---------------------------------------------------------------------------
// Run trace view
// ---------------------------------------------------------------------------

function RunTrace({ trace }: { trace: WorkflowRunTrace }) {
  return (
    <div className="space-y-3 rounded-md border bg-muted/20 p-3 text-xs">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <StatusDot status={trace.status} />
          {trace.status}
        </span>
        <span>{formatWhen(trace.startedAt)}</span>
        {trace.durationMs !== undefined && <span>{trace.durationMs}ms</span>}
        <span className="font-mono">{trace.trigger}{trace.triggerDetail ? `:${trace.triggerDetail}` : ""}</span>
      </div>

      {trace.error && (
        <p className="rounded border border-red-300 bg-red-50 p-2 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400">
          {trace.error}
        </p>
      )}

      {trace.spans.length > 0 && (
        <div>
          <p className="mb-1 font-medium uppercase tracking-wide text-muted-foreground">
            Spans ({trace.spans.length})
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[0.7rem]">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="py-0.5 pr-3 font-medium">Tool</th>
                  <th className="py-0.5 pr-3 font-medium">Started</th>
                  <th className="py-0.5 pr-3 font-medium">ms</th>
                  <th className="py-0.5 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {trace.spans.map((span, i) => (
                  <tr className="border-t border-border/50" key={i}>
                    <td className="py-1 pr-3 font-mono">
                      {span.namespace}.{span.procedure}
                    </td>
                    <td className="py-1 pr-3 whitespace-nowrap">{formatWhen(span.startedAt)}</td>
                    <td className="py-1 pr-3">{span.durationMs}</td>
                    <td className="py-1">
                      {span.ok ? (
                        <span className="text-emerald-600 dark:text-emerald-400">ok</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400" title={span.error}>
                          {span.error ?? "error"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {trace.logs.length > 0 && (
        <div>
          <p className="mb-1 font-medium uppercase tracking-wide text-muted-foreground">Logs</p>
          <pre className="max-h-40 overflow-auto rounded border bg-background p-2 font-mono text-[0.7rem] whitespace-pre-wrap break-words">
            {trace.logs.map((line) => `[${line.level}] ${line.message}`).join("\n")}
          </pre>
        </div>
      )}

      {trace.result !== undefined && trace.result !== null && (
        <div>
          <p className="mb-1 font-medium uppercase tracking-wide text-muted-foreground">Result</p>
          <Pre value={trace.result} />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Per-workflow row
// ---------------------------------------------------------------------------

function WorkflowRow({
  workflow,
  invoke,
  onOpenScript,
}: {
  workflow: WorkflowSummary;
  invoke: WorkflowsInvoke;
  onOpenScript?: (path: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [runs, setRuns] = React.useState<WorkflowRunSummary[] | null>(null);
  const [trace, setTrace] = React.useState<WorkflowRunTrace | null>(null);
  const [running, setRunning] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const loadRuns = React.useCallback(async () => {
    try {
      const result = (await invoke("runs", { name: workflow.name, limit: 15 })) as {
        runs: WorkflowRunSummary[];
      };
      setRuns(result.runs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load runs");
    }
  }, [invoke, workflow.name]);

  React.useEffect(() => {
    if (open && runs === null) void loadRuns();
  }, [open, runs, loadRuns]);

  const triggerRun = async () => {
    setRunning(true);
    setError(null);
    try {
      const run = (await invoke("run", { name: workflow.name })) as WorkflowRunTrace;
      setTrace(run);
      setOpen(true);
      await loadRuns();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Run failed");
    } finally {
      setRunning(false);
    }
  };

  const openTrace = async (runId: string) => {
    try {
      const result = (await invoke("trace", { name: workflow.name, run_id: runId })) as WorkflowRunTrace;
      setTrace(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load trace");
    }
  };

  return (
    <div className="rounded-lg border">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2">
        <button
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
          onClick={() => setOpen((o) => !o)}
          type="button"
        >
          <span className={`transition-transform ${open ? "rotate-90" : ""}`}>›</span>
          <span className="truncate text-sm font-medium">{workflow.name}</span>
          <TriggerBadges workflow={workflow} />
        </button>
        <span className="flex shrink-0 items-center gap-1.5">
          {onOpenScript && (
            <button
              className="rounded-md border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => onOpenScript(workflow.scriptPath)}
              title={workflow.scriptPath}
              type="button"
            >
              script
            </button>
          )}
          <button
            className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            disabled={running}
            onClick={() => void triggerRun()}
            type="button"
          >
            {running ? "Running…" : "Run"}
          </button>
        </span>
      </div>

      {workflow.description && open && (
        <p className="px-3 pb-2 text-xs text-muted-foreground">{workflow.description}</p>
      )}

      {open && (
        <div className="space-y-2 border-t px-3 py-2">
          {workflow.webhookPath && (
            <p className="text-[0.7rem] text-muted-foreground">
              Webhook: <code className="font-mono">{workflow.webhookPath}</code>{" "}
              (X-Hook-Token required)
            </p>
          )}
          {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}

          {runs === null ? (
            <p className="text-xs text-muted-foreground">Loading runs…</p>
          ) : runs.length === 0 ? (
            <p className="text-xs text-muted-foreground">No runs yet.</p>
          ) : (
            <div className="space-y-0.5">
              {runs.map((run) => (
                <button
                  className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs transition-colors hover:bg-muted ${
                    trace?.id === run.id ? "bg-muted" : ""
                  }`}
                  key={run.id}
                  onClick={() => void openTrace(run.id)}
                  type="button"
                >
                  <StatusDot status={run.status} />
                  <span className="font-mono">{run.trigger}</span>
                  <span className="text-muted-foreground">{formatWhen(run.startedAt)}</span>
                  <span className="ml-auto text-muted-foreground">
                    {run.durationMs !== undefined ? `${run.durationMs}ms` : ""}
                  </span>
                </button>
              ))}
            </div>
          )}

          {trace && <RunTrace trace={trace} />}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Panel
// ---------------------------------------------------------------------------

export function WorkflowsPanel({ invoke, onOpenScript, className }: WorkflowsPanelProps) {
  const [workflows, setWorkflows] = React.useState<WorkflowSummary[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const refresh = React.useCallback(async () => {
    setError(null);
    try {
      const result = (await invoke("list", {})) as { workflows: WorkflowSummary[] };
      setWorkflows(result.workflows);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load workflows");
      setWorkflows([]);
    }
  }, [invoke]);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Workflows
        </h3>
        <button
          className="ml-auto rounded-md border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          onClick={() => void refresh()}
          type="button"
        >
          Refresh
        </button>
      </div>

      {error && <p className="mb-2 text-xs text-red-600 dark:text-red-400">{error}</p>}

      {workflows === null ? (
        <p className="text-xs text-muted-foreground">Loading…</p>
      ) : workflows.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          No workflows yet. Register one from chat ("register a workflow that…")
          or with <code className="font-mono">workflows.register</code>.
        </p>
      ) : (
        <div className="space-y-2">
          {workflows.map((workflow) => (
            <WorkflowRow
              invoke={invoke}
              key={workflow.name}
              onOpenScript={onOpenScript}
              workflow={workflow}
            />
          ))}
        </div>
      )}
    </div>
  );
}
