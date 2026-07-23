/**
 * WorkflowsPanel — shared management surface for workspace workflows,
 * rendered identically by the registry app and patchwork chat.
 *
 * Transport-agnostic: the host passes `invoke(operation, args)` which must
 * dispatch to the gateway's `workflows` tool namespace (POST
 * /tools/workflows/:operation). Everything else — listing, trigger badges
 * (cron / webhook / events), manual runs, run history, per-run traces (via
 * the shared run-view), and deletion — lives here so both apps stay in
 * lockstep.
 *
 * Manual runs are triggered from the workflow *renderer*, not from a JSON
 * console: the panel hands the flow renderer a `workflowRun` capability
 * (execute + the selected run to overlay) through the renderer registry. A
 * host that also passes `loadScript` gets the full graph with the run
 * painted onto it; without it the same input form renders on its own.
 *
 * Every workflow row and app row also exposes a "Versions" affordance backed
 * by the workspace FS content-version log (`versions` / `version` / `restore`
 * on both namespaces): browse prior revisions of the script / entry, view one
 * read-only, and non-destructively restore an old one as the new latest.
 *
 * Passing the optional `invokeApps(operation, args)` transport (gateway
 * `apps` tool namespace) additionally renders a published-apps section with
 * delete/purge affordances.
 */

import * as React from "react";
import { JsonView, RendererCapabilitiesProvider } from "./renderers";
import { RunView, runViewFromWorkflowRun } from "./run-view";
import { RunPanel, type RunValues } from "./tailor/RunPanel";

// The graph pulls in @xyflow/react + tree-sitter, so it only loads for hosts
// that can actually supply a script to render.
const LazyTailorFlow = React.lazy(() =>
  import("./tailor").then((module) => ({ default: module.TailorFlow })),
);

// ---------------------------------------------------------------------------
// Wire types (mirror the gateway's workflows/apps service results)
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

export interface AppSummary {
  name: string;
  title?: string;
  description?: string;
  /** Workspace path of the UI entrypoint. */
  entry?: string;
  /** Workspace prefixes the app publishes; `paths[0]` is its root. */
  paths?: string[];
  visibility: "public" | "private";
  liveUrl?: string;
  updatedAt?: string;
  allowedTools?: string[];
  roles?: { access?: "any" | "listed"; users?: string[]; admins?: string[] };
  rateLimit?: { rps?: number; burst?: number; daily?: number };
}

/** One entry in a versioned file's history (newest first from the gateway). */
export interface FileVersion {
  hash: string;
  updatedAt: string;
  size: number;
  /** The live version — the one `read()` returns and the row currently serves. */
  current: boolean;
}

export type WorkflowsInvoke = (
  operation: string,
  args: Record<string, unknown>,
) => Promise<unknown>;

export interface WorkflowsPanelProps {
  invoke: WorkflowsInvoke;
  /**
   * Optional transport for the gateway's `apps` tool namespace (POST
   * /tools/apps/:operation). When present, a published-apps section renders
   * below the workflows list.
   */
  invokeApps?: WorkflowsInvoke;
  /** Open the workflow's script in the host's editor, when available. */
  onOpenScript?: (path: string) => void;
  /**
   * Read a workflow's script from the workspace. When supplied, an expanded
   * workflow renders as the flow graph with its run overlaid; without it the
   * run form renders alone.
   */
  loadScript?: (path: string) => Promise<string | null>;
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

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

const SMALL_BUTTON =
  "rounded-md border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

/** Inline copy-to-clipboard affordance with a transient "copied" state. */
function CopyChip({ text, label = "copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timeout);
  }, [copied]);
  return (
    <button
      className="rounded border px-1.5 py-0.5 text-[0.65rem] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      onClick={() => {
        void navigator.clipboard.writeText(text).then(() => setCopied(true));
      }}
      title={`Copy ${text}`}
      type="button"
    >
      {copied ? "copied" : label}
    </button>
  );
}

/**
 * Two-click destructive button: first click arms it ("Confirm delete?"),
 * second click within 4s fires; it disarms on timeout.
 */
function ConfirmDeleteButton({
  onConfirm,
  busy,
  label = "Delete",
}: {
  onConfirm: () => void;
  busy?: boolean;
  label?: string;
}) {
  const [armed, setArmed] = React.useState(false);
  React.useEffect(() => {
    if (!armed) return;
    const timeout = setTimeout(() => setArmed(false), 4000);
    return () => clearTimeout(timeout);
  }, [armed]);
  return (
    <button
      className={
        armed
          ? "rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/70"
          : `${SMALL_BUTTON} hover:border-red-300 hover:text-red-700 dark:hover:border-red-900 dark:hover:text-red-400`
      }
      disabled={busy}
      onClick={() => {
        if (armed) {
          setArmed(false);
          onConfirm();
        } else {
          setArmed(true);
        }
      }}
      title={armed ? "Click again to delete" : label}
      type="button"
    >
      {busy ? "Deleting…" : armed ? "Confirm delete?" : label}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Version history (shared by workflow rows and app rows)
//
// Both namespaces expose the same `versions` / `version` / `restore` shape over
// the workspace FS content-version log, so one controlled panel serves both.
// The parent owns the open toggle (placed in its own button cluster); this
// lazily loads the history the first time it opens. Restore is non-destructive
// on the backend — it re-writes the chosen revision as a new latest — so after
// it lands we just reload the list (the "current" chip moves) and let the row
// refresh its own summary.
// ---------------------------------------------------------------------------

/** Read-only view of one fetched revision: JSON as a tree, everything else raw. */
function VersionContent({
  path,
  content,
  mimeType,
}: {
  path: string;
  content: string;
  mimeType: string;
}) {
  const isJson = mimeType.includes("json") || path.endsWith(".json");
  if (isJson) {
    try {
      return <JsonView value={JSON.parse(content)} />;
    } catch {
      // Fall through to raw text for malformed / partial JSON.
    }
  }
  return (
    <pre className="max-h-96 overflow-auto rounded-md border bg-muted/30 p-2 font-mono text-xs leading-relaxed">
      {content}
    </pre>
  );
}

function VersionsSection({
  invoke,
  name,
  open,
  onRestored,
}: {
  invoke: WorkflowsInvoke;
  name: string;
  open: boolean;
  /** Fired after a successful restore so the row can refresh its summary. */
  onRestored?: () => void;
}) {
  const [versions, setVersions] = React.useState<FileVersion[] | null>(null);
  const [path, setPath] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [viewing, setViewing] = React.useState<{ hash: string; content: string; mimeType: string } | null>(null);
  const [busyHash, setBusyHash] = React.useState<string | null>(null);
  const [armed, setArmed] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setError(null);
    try {
      const result = (await invoke("versions", { name })) as { path: string; versions: FileVersion[] };
      setPath(result.path);
      setVersions(result.versions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load versions");
      setVersions([]);
    }
  }, [invoke, name]);

  React.useEffect(() => {
    if (open && versions === null) void load();
  }, [open, versions, load]);

  // Disarm a pending restore confirmation if the second click doesn't come.
  React.useEffect(() => {
    if (!armed) return;
    const timeout = setTimeout(() => setArmed(null), 4000);
    return () => clearTimeout(timeout);
  }, [armed]);

  const view = async (hash: string) => {
    if (viewing?.hash === hash) {
      setViewing(null);
      return;
    }
    setError(null);
    try {
      const result = (await invoke("version", { name, hash })) as {
        content: string;
        mimeType: string;
      };
      setViewing({ hash, content: result.content, mimeType: result.mimeType });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to read version");
    }
  };

  const restore = async (hash: string) => {
    setBusyHash(hash);
    setArmed(null);
    setError(null);
    try {
      await invoke("restore", { name, hash });
      setViewing(null);
      await load();
      onRestored?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Restore failed");
    } finally {
      setBusyHash(null);
    }
  };

  if (!open) return null;

  return (
    <div className="space-y-1">
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
      {versions === null ? (
        <p className="text-xs text-muted-foreground">Loading versions…</p>
      ) : versions.length === 0 ? (
        <p className="text-xs text-muted-foreground">No version history yet.</p>
      ) : (
        <div className="space-y-0.5">
          {versions.map((version) => (
            <div key={version.hash}>
              <div
                className={`flex flex-wrap items-center gap-2 rounded px-2 py-1 text-xs ${
                  viewing?.hash === version.hash ? "bg-muted" : ""
                }`}
              >
                <code className="font-mono text-muted-foreground" title={version.hash}>
                  {version.hash.slice(0, 10)}
                </code>
                <span className="text-muted-foreground">{formatWhen(version.updatedAt)}</span>
                <span className="text-muted-foreground">{formatBytes(version.size)}</span>
                {version.current && (
                  <span className="inline-flex items-center rounded-full border border-emerald-300 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-700 dark:border-emerald-800 dark:text-emerald-400">
                    current
                  </span>
                )}
                <span className="ml-auto flex items-center gap-1.5">
                  <button
                    className="rounded border px-1.5 py-0.5 text-[0.65rem] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => void view(version.hash)}
                    type="button"
                  >
                    {viewing?.hash === version.hash ? "hide" : "view"}
                  </button>
                  {!version.current && (
                    <button
                      className={
                        armed === version.hash
                          ? "rounded border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[0.65rem] font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400 dark:hover:bg-amber-950/70"
                          : "rounded border px-1.5 py-0.5 text-[0.65rem] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      }
                      disabled={busyHash === version.hash}
                      onClick={() => (armed === version.hash ? void restore(version.hash) : setArmed(version.hash))}
                      title={armed === version.hash ? "Click again to restore" : "Restore this version as the latest"}
                      type="button"
                    >
                      {busyHash === version.hash
                        ? "Restoring…"
                        : armed === version.hash
                          ? "Confirm restore?"
                          : "restore"}
                    </button>
                  )}
                </span>
              </div>
              {viewing?.hash === version.hash && (
                <div className="px-2 pb-1 pt-0.5">
                  <VersionContent content={viewing.content} mimeType={viewing.mimeType} path={path} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Run surface: the workflow's own renderer, granted the ability to run it.
//
// With a script in hand this is the flow graph — inputs derived from the
// signature, the selected run painted onto the nodes. Without one (no
// `loadScript` from the host) the same input form renders standalone over the
// shared run-view, so manual runs never depend on the graph.
// ---------------------------------------------------------------------------

/** Run metadata that sits above whichever trace view is showing. */
function RunMeta({ trace }: { trace: WorkflowRunTrace }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <StatusDot status={trace.status} />
        {trace.status}
      </span>
      <span>{formatWhen(trace.startedAt)}</span>
      {trace.durationMs !== undefined && <span>{trace.durationMs}ms</span>}
      <span className="font-mono">
        {trace.trigger}
        {trace.triggerDetail ? `:${trace.triggerDetail}` : ""}
      </span>
    </div>
  );
}

function RunSurface({
  workflow,
  script,
  trace,
  onRun,
}: {
  workflow: WorkflowSummary;
  script: string | null;
  trace: WorkflowRunTrace | null;
  onRun: (input: unknown) => Promise<WorkflowRunTrace>;
}) {
  const capabilities = React.useMemo(
    () => ({ workflowRun: { run: onRun, activeRun: trace, storageKey: workflow.name } }),
    [onRun, trace, workflow.name],
  );

  // Standalone form + trace: everything the graph gives except the graph.
  const [values, setValues] = React.useState<RunValues>(() => new Map());
  const [running, setRunning] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  if (script !== null) {
    return (
      <div className="space-y-2">
        {trace && <RunMeta trace={trace} />}
        <RendererCapabilitiesProvider value={capabilities}>
          <React.Suspense
            fallback={<p className="text-xs text-muted-foreground">Loading flow renderer…</p>}
          >
            <LazyTailorFlow className="rounded-md border" source={script} />
          </React.Suspense>
        </RendererCapabilitiesProvider>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <RunPanel
        error={error}
        onRun={async (input) => {
          setRunning(true);
          setError(null);
          try {
            await onRun(input);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Run failed");
          } finally {
            setRunning(false);
          }
        }}
        onValuesChange={setValues}
        params={[]}
        running={running}
        storageKey={workflow.name}
        values={values}
      />
      {trace && (
        <div className="space-y-3 rounded-md border bg-muted/20 p-3 text-xs">
          <RunMeta trace={trace} />
          <RunView model={runViewFromWorkflowRun(trace)} />
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
  loadScript,
  onDeleted,
}: {
  workflow: WorkflowSummary;
  invoke: WorkflowsInvoke;
  onOpenScript?: (path: string) => void;
  loadScript?: (path: string) => Promise<string | null>;
  onDeleted: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [versionsOpen, setVersionsOpen] = React.useState(false);
  const [runs, setRuns] = React.useState<WorkflowRunSummary[] | null>(null);
  const [trace, setTrace] = React.useState<WorkflowRunTrace | null>(null);
  const [script, setScript] = React.useState<string | null>(null);
  const [running, setRunning] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
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

  // Fetch the source once the row opens, so the renderer can draw the graph.
  React.useEffect(() => {
    if (!open || !loadScript || script !== null) return;
    let active = true;
    void loadScript(workflow.scriptPath)
      .then((source) => {
        if (active && source != null) setScript(source);
      })
      .catch(() => {
        // A missing script just means the standalone run form renders.
      });
    return () => {
      active = false;
    };
  }, [open, loadScript, script, workflow.scriptPath]);

  /**
   * The one manual-run path: shared by the row's quick "Run" and the
   * renderer's input form, and returning the run so the renderer can overlay
   * it immediately.
   */
  const triggerRun = React.useCallback(
    async (input?: unknown) => {
      setRunning(true);
      setError(null);
      try {
        const args: Record<string, unknown> =
          input === undefined ? { name: workflow.name } : { name: workflow.name, input };
        const run = (await invoke("run", args)) as WorkflowRunTrace;
        setTrace(run);
        setOpen(true);
        await loadRuns();
        return run;
      } finally {
        setRunning(false);
      }
    },
    [invoke, loadRuns, workflow.name],
  );

  const removeWorkflow = async () => {
    setDeleting(true);
    setError(null);
    try {
      await invoke("remove", { name: workflow.name });
      onDeleted();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setDeleting(false);
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
              className={SMALL_BUTTON}
              onClick={() => onOpenScript(workflow.scriptPath)}
              title={workflow.scriptPath}
              type="button"
            >
              script
            </button>
          )}
          <button
            className={`${SMALL_BUTTON} ${versionsOpen ? "bg-muted text-foreground" : ""}`}
            onClick={() => {
              setVersionsOpen((v) => !v);
              setOpen(true);
            }}
            title="Version history for this workflow's script"
            type="button"
          >
            versions
          </button>
          <ConfirmDeleteButton busy={deleting} onConfirm={() => void removeWorkflow()} />
          <button
            className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            disabled={running}
            onClick={() => {
              triggerRun().catch((err: unknown) =>
                setError(err instanceof Error ? err.message : "Run failed"),
              );
            }}
            title="Run with no input"
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
            <p className="flex flex-wrap items-center gap-1.5 text-[0.7rem] text-muted-foreground">
              Webhook: <code className="font-mono">{workflow.webhookPath}</code>
              <CopyChip text={workflow.webhookPath} />
              (X-Hook-Token required)
            </p>
          )}
          {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}

          <VersionsSection
            invoke={invoke}
            name={workflow.name}
            onRestored={onDeleted}
            open={versionsOpen}
          />

          <RunSurface onRun={triggerRun} script={script} trace={trace} workflow={workflow} />

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
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Published apps section
// ---------------------------------------------------------------------------

/**
 * App access + limits editor: visibility, who may sign in, the tool
 * allow-list, and per-user rate/daily budgets. Saves ride the same
 * `apps.publish` upsert the owner used to publish.
 */
function AppSettings({
  app,
  invoke,
  onSaved,
}: {
  app: AppSummary;
  invoke: WorkflowsInvoke;
  onSaved: () => void;
}) {
  const [visibility, setVisibility] = React.useState(app.visibility);
  const [access, setAccess] = React.useState(app.roles?.access ?? "any");
  const [users, setUsers] = React.useState((app.roles?.users ?? []).join("\n"));
  const [tools, setTools] = React.useState((app.allowedTools ?? []).join("\n"));
  const [rps, setRps] = React.useState(String(app.rateLimit?.rps ?? 5));
  const [daily, setDaily] = React.useState(String(app.rateLimit?.daily ?? 1000));
  const [saving, setSaving] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const allowedTools = tools
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      await invoke("publish", {
        name: app.name,
        entry: app.entry,
        paths: app.paths,
        visibility,
        allowed_tools: allowedTools,
        roles: {
          access,
          ...(access === "listed"
            ? { users: users.split("\n").map((line) => line.trim()).filter(Boolean) }
            : {}),
        },
        rate_limit: {
          rps: Number(rps) > 0 ? Number(rps) : 5,
          daily: Number(daily) > 0 ? Number(daily) : 1000,
        },
      });
      setStatus("Saved");
      onSaved();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const FIELD =
    "w-full rounded-md border bg-transparent px-2 py-1 font-mono text-xs outline-none focus-visible:border-ring";
  const LABEL = "block text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground";

  return (
    <div className="space-y-2.5 border-t px-3 py-2.5">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label className={LABEL}>Page visibility</label>
          <select className={FIELD} onChange={(e) => setVisibility(e.target.value as typeof visibility)} value={visibility}>
            <option value="private">private — Aprovan account required</option>
            <option value="public">public — anyone can open the page</option>
          </select>
        </div>
        <div>
          <label className={LABEL}>Who may use it</label>
          <select className={FIELD} onChange={(e) => setAccess(e.target.value as typeof access)} value={access}>
            <option value="any">any signed-in account</option>
            <option value="listed">only listed users</option>
          </select>
        </div>
      </div>
      {access === "listed" && (
        <div>
          <label className={LABEL}>Allowed users (Cognito subs, one per line)</label>
          <textarea className={FIELD} onChange={(e) => setUsers(e.target.value)} rows={2} spellCheck={false} value={users} />
        </div>
      )}
      <div>
        <label className={LABEL}>Tool allow-list (namespace.procedure or namespace.*, one per line)</label>
        <textarea className={FIELD} onChange={(e) => setTools(e.target.value)} rows={3} spellCheck={false} value={tools} />
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label className={LABEL}>Requests / second / user</label>
          <input className={FIELD} inputMode="numeric" onChange={(e) => setRps(e.target.value)} value={rps} />
        </div>
        <div>
          <label className={LABEL}>Calls / day / user</label>
          <input className={FIELD} inputMode="numeric" onChange={(e) => setDaily(e.target.value)} value={daily} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          disabled={saving}
          onClick={() => void save()}
          type="button"
        >
          {saving ? "Saving…" : "Save access & limits"}
        </button>
        {status && (
          <span
            className={`text-xs ${status === "Saved" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

function AppRow({
  app,
  invoke,
  onDeleted,
}: {
  app: AppSummary;
  invoke: WorkflowsInvoke;
  onDeleted: () => void;
}) {
  const [purgeData, setPurgeData] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [versionsOpen, setVersionsOpen] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const removeApp = async () => {
    setDeleting(true);
    setError(null);
    try {
      await invoke("remove", { name: app.name, purge_data: purgeData });
      onDeleted();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-lg border px-3 py-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-1.5">
            <span className="truncate text-sm font-medium">{app.title ?? app.name}</span>
            {app.title && app.title !== app.name && (
              <code className="font-mono text-[0.7rem] text-muted-foreground">{app.name}</code>
            )}
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
                app.visibility === "public"
                  ? "border-emerald-300 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400"
                  : "border-border text-muted-foreground"
              }`}
            >
              {app.visibility}
            </span>
          </span>
          {app.liveUrl && (
            <a
              className="truncate font-mono text-[0.7rem] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              href={app.liveUrl}
              rel="noreferrer"
              target="_blank"
              title={app.liveUrl}
            >
              {app.liveUrl}
            </a>
          )}
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <button
            className={`rounded-md border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground ${settingsOpen ? "bg-muted text-foreground" : ""}`}
            onClick={() => setSettingsOpen((o) => !o)}
            type="button"
          >
            access &amp; limits
          </button>
          <button
            className={`rounded-md border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground ${versionsOpen ? "bg-muted text-foreground" : ""}`}
            onClick={() => setVersionsOpen((o) => !o)}
            title="Version history for this app's entry"
            type="button"
          >
            versions
          </button>
          <label className="flex items-center gap-1 text-[0.7rem] text-muted-foreground">
            <input
              checked={purgeData}
              onChange={(event) => setPurgeData(event.target.checked)}
              type="checkbox"
            />
            also delete app folder &amp; data
          </label>
          <ConfirmDeleteButton busy={deleting} onConfirm={() => void removeApp()} />
        </span>
      </div>
      {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
      {settingsOpen && <AppSettings app={app} invoke={invoke} onSaved={onDeleted} />}
      {versionsOpen && (
        <div className="mt-2 border-t pt-2">
          <VersionsSection invoke={invoke} name={app.name} onRestored={onDeleted} open={versionsOpen} />
        </div>
      )}
    </div>
  );
}

function AppsSection({ invoke }: { invoke: WorkflowsInvoke }) {
  const [apps, setApps] = React.useState<AppSummary[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const refresh = React.useCallback(async () => {
    setError(null);
    try {
      const result = (await invoke("list", {})) as { apps: AppSummary[] };
      setApps(result.apps);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load apps");
      setApps([]);
    }
  }, [invoke]);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Apps
        </h3>
        <button
          className={`ml-auto ${SMALL_BUTTON}`}
          onClick={() => void refresh()}
          type="button"
        >
          Refresh
        </button>
      </div>

      {error && <p className="mb-2 text-xs text-red-600 dark:text-red-400">{error}</p>}

      {apps === null ? (
        <p className="text-xs text-muted-foreground">Loading…</p>
      ) : apps.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          No published apps yet. Publish one with{" "}
          <code className="font-mono">apps.publish</code>.
        </p>
      ) : (
        <div className="space-y-2">
          {apps.map((app) => (
            <AppRow app={app} invoke={invoke} key={app.name} onDeleted={() => void refresh()} />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Panel
// ---------------------------------------------------------------------------

export function WorkflowsPanel({
  invoke,
  invokeApps,
  onOpenScript,
  loadScript,
  className,
}: WorkflowsPanelProps) {
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
          className={`ml-auto ${SMALL_BUTTON}`}
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
              loadScript={loadScript}
              onDeleted={() => void refresh()}
              onOpenScript={onOpenScript}
              workflow={workflow}
            />
          ))}
        </div>
      )}

      {invokeApps && <AppsSection invoke={invokeApps} />}
    </div>
  );
}
