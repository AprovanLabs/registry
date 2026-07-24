/**
 * WorkflowDetail — everything you can do with one workflow, in one pane:
 * the TailorFlow graph (lazily loaded) with the selected run painted onto it,
 * the derived run form, the run history, the per-run trace, the cascade tree
 * for runs that fanned out to other workflows, and the script's version log.
 *
 * This is the *only* implementation of that machinery in the package — the
 * flat WorkflowsPanel and the master/detail AppsPanel both render this
 * component, so a fix lands in both surfaces at once.
 *
 * Manual runs are triggered from the workflow *renderer*, not from a JSON
 * console: the pane hands the flow renderer a `workflowRun` capability
 * (execute + the selected run to overlay) through the renderer registry. A
 * host that also passes `loadScript` gets the full graph with the run painted
 * onto it; without it the same input form renders on its own.
 */

import * as React from "react";
import { RendererCapabilitiesProvider } from "../renderers";
import { RunView, runViewFromWorkflowRun } from "../run-view";
import { RunPanel, type RunValues } from "../tailor/RunPanel";
import {
  ConfirmDeleteButton,
  CopyChip,
  Empty,
  ErrorLine,
  SMALL_BUTTON,
  SectionHeading,
  StatusDot,
  TriggerBadges,
  formatWhen,
  useLoader,
} from "./ui";
import { VersionsSection } from "./versions";
import {
  attempt,
  normalizeRunSummary,
  normalizeRunTrace,
  normalizeTraceTree,
  unwrapList,
  type TraceRunNode,
  type ToolsInvoke,
  type WorkflowRunSummary,
  type WorkflowRunTrace,
  type WorkflowSummary,
} from "./wire";

// The graph pulls in @xyflow/react + tree-sitter, so it only loads for hosts
// that can actually supply a script to render.
const LazyTailorFlow = React.lazy(() =>
  import("../tailor").then((module) => ({ default: module.TailorFlow })),
);

// ---------------------------------------------------------------------------
// Run metadata + cascade tree
// ---------------------------------------------------------------------------

/** Run metadata that sits above whichever trace view is showing. */
export function RunMeta({ trace }: { trace: WorkflowRunTrace }) {
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
      {trace.traceId && (
        <span className="flex items-center gap-1 font-mono" title="Trace id">
          {trace.traceId.slice(0, 12)}
          <CopyChip label="trace" text={trace.traceId} />
        </span>
      )}
    </div>
  );
}

function CascadeNode({
  node,
  depth,
  currentRunId,
  onSelect,
}: {
  node: TraceRunNode;
  depth: number;
  currentRunId?: string;
  onSelect?: (node: TraceRunNode) => void;
}) {
  const isCurrent = node.id === currentRunId;
  return (
    <div>
      <button
        className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs transition-colors hover:bg-muted ${
          isCurrent ? "bg-muted" : ""
        }`}
        onClick={() => onSelect?.(node)}
        style={{ paddingLeft: `${0.5 + depth * 0.9}rem` }}
        type="button"
      >
        {depth > 0 && <span className="text-muted-foreground">└</span>}
        <StatusDot status={node.status} />
        <span className="truncate font-medium">{node.workflow ?? node.id}</span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">{node.trigger}</span>
        <span className="ml-auto shrink-0 text-[0.65rem] text-muted-foreground">
          {node.durationMs !== undefined ? `${node.durationMs}ms` : ""}
        </span>
      </button>
      {node.children.map((child) => (
        <CascadeNode
          currentRunId={currentRunId}
          depth={depth + 1}
          key={child.id}
          node={child}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

/**
 * The cascade a run belongs to: `events.emit` → workflow, workflow →
 * workflow, app call → workflow. Rendered above the span table so the span
 * list reads as "what this run did" and the tree as "what this run was part
 * of". Quietly absent when the gateway has no `workflows.tree` yet.
 */
function CascadeTree({
  invoke,
  trace,
  onSelect,
}: {
  invoke: ToolsInvoke;
  trace: WorkflowRunTrace;
  onSelect?: (node: TraceRunNode) => void;
}) {
  const traceId = trace.traceId;
  const load = React.useCallback(async (): Promise<TraceRunNode[]> => {
    if (!traceId) return [];
    const result = await attempt(() => invoke("tree", { trace_id: traceId, traceId }));
    if (!result.ok) return [];
    return normalizeTraceTree(result.value);
  }, [invoke, traceId]);

  const { data } = useLoader(load, Boolean(traceId), traceId ?? "");
  const roots = data ?? [];
  // A single node is just this run — no cascade worth drawing.
  const total = roots.reduce(function count(sum: number, node: TraceRunNode): number {
    return node.children.reduce(count, sum + 1);
  }, 0);
  if (total < 2) return null;

  return (
    <div className="space-y-1 rounded-md border bg-muted/20 p-2">
      <SectionHeading hint="Runs sharing this trace id">Cascade</SectionHeading>
      <div>
        {roots.map((node) => (
          <CascadeNode
            currentRunId={trace.id}
            depth={0}
            key={node.id}
            node={node}
            onSelect={onSelect}
          />
        ))}
      </div>
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

function RunSurface({
  workflow,
  script,
  trace,
  cascade,
  onRun,
  graphMinHeight,
}: {
  workflow: WorkflowSummary;
  script: string | null;
  trace: WorkflowRunTrace | null;
  cascade?: React.ReactNode;
  onRun: (input: unknown) => Promise<WorkflowRunTrace>;
  /** Canvas floor handed to TailorFlow — the pane, not the graph, knows its room. */
  graphMinHeight?: string | undefined;
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
        {cascade}
        <RendererCapabilitiesProvider value={capabilities}>
          <React.Suspense
            fallback={<p className="text-xs text-muted-foreground">Loading flow renderer…</p>}
          >
            <LazyTailorFlow
              className="rounded-md border"
              source={script}
              {...(graphMinHeight ? { canvasMinHeight: graphMinHeight } : {})}
            />
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
          {cascade}
          <RunView model={runViewFromWorkflowRun(trace)} />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The shared run controller
// ---------------------------------------------------------------------------

export interface WorkflowRunController {
  runs: WorkflowRunSummary[] | null;
  trace: WorkflowRunTrace | null;
  script: string | null;
  running: boolean;
  error: string | null;
  setError: (message: string | null) => void;
  triggerRun: (input?: unknown) => Promise<WorkflowRunTrace>;
  openTrace: (runId: string, workflowName?: string) => Promise<void>;
  reloadRuns: () => Promise<void>;
}

/**
 * The one manual-run path, shared by the detail pane's form, the row's quick
 * "Run", and the sidebar's inline run button — so a run started anywhere
 * lands in the same history and the same overlay.
 */
export function useWorkflowRun({
  invoke,
  workflow,
  loadScript,
  active,
}: {
  invoke: ToolsInvoke;
  workflow: WorkflowSummary;
  loadScript?: ((path: string) => Promise<string | null>) | undefined;
  active: boolean;
}): WorkflowRunController {
  const [runs, setRuns] = React.useState<WorkflowRunSummary[] | null>(null);
  const [trace, setTrace] = React.useState<WorkflowRunTrace | null>(null);
  const [script, setScript] = React.useState<string | null>(null);
  const [running, setRunning] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const name = workflow.name;
  const scriptPath = workflow.scriptPath;

  // A different workflow selected in the same pane starts clean.
  React.useEffect(() => {
    setRuns(null);
    setTrace(null);
    setScript(null);
    setError(null);
  }, [name]);

  const reloadRuns = React.useCallback(async () => {
    const result = await attempt(() => invoke("runs", { name, limit: 25 }));
    if (!result.ok) {
      // History is a nice-to-have; a gateway that can't list runs shouldn't
      // stop you running the workflow.
      setRuns([]);
      if (!result.missing) setError(result.error ?? "Failed to load runs");
      return;
    }
    setRuns(
      unwrapList(result.value, "runs")
        .map(normalizeRunSummary)
        .filter((run): run is WorkflowRunSummary => run !== null),
    );
  }, [invoke, name]);

  React.useEffect(() => {
    if (active && runs === null) void reloadRuns();
  }, [active, runs, reloadRuns]);

  // Fetch the source once the pane is live, so the renderer can draw the graph.
  React.useEffect(() => {
    if (!active || !loadScript || script !== null || !scriptPath) return;
    let alive = true;
    void loadScript(scriptPath)
      .then((source) => {
        if (alive && source != null) setScript(source);
      })
      .catch(() => {
        // A missing script just means the standalone run form renders.
      });
    return () => {
      alive = false;
    };
  }, [active, loadScript, script, scriptPath]);

  const triggerRun = React.useCallback(
    async (input?: unknown) => {
      setRunning(true);
      setError(null);
      try {
        const args: Record<string, unknown> =
          input === undefined ? { name } : { name, input };
        const raw = await invoke("run", args);
        const run = normalizeRunTrace(raw);
        if (!run) throw new Error("The gateway returned an unrecognised run record");
        setTrace(run);
        await reloadRuns();
        return run;
      } finally {
        setRunning(false);
      }
    },
    [invoke, reloadRuns, name],
  );

  const openTrace = React.useCallback(
    async (runId: string, workflowName?: string) => {
      const result = await attempt(() =>
        invoke("trace", { name: workflowName ?? name, run_id: runId }),
      );
      if (!result.ok) {
        setError(result.error ?? "Failed to load trace");
        return;
      }
      const parsed = normalizeRunTrace(result.value);
      if (parsed) setTrace(parsed);
    },
    [invoke, name],
  );

  return { runs, trace, script, running, error, setError, triggerRun, openTrace, reloadRuns };
}

// ---------------------------------------------------------------------------
// Detail pane
// ---------------------------------------------------------------------------

export interface WorkflowDetailProps {
  workflow: WorkflowSummary;
  invoke: ToolsInvoke;
  /** Open the workflow's script in the host's editor, when available. */
  onOpenScript?: ((path: string) => void) | undefined;
  /** Read the script so the graph can render; without it, the form renders alone. */
  loadScript?: ((path: string) => Promise<string | null>) | undefined;
  /** Fired after a restore (or a delete, absent `onRemoved`) so the catalog can refresh. */
  onChanged?: (() => void) | undefined;
  /**
   * The workflow is gone. Distinct from {@link WorkflowDetailProps.onChanged}
   * because a host with a tab strip has to close the tab, not just reload.
   * Falls back to `onChanged` when omitted.
   */
  onRemoved?: (() => void) | undefined;
  /** Rendered above the run surface — the app breadcrumb, in AppsPanel. */
  header?: React.ReactNode;
  /**
   * The pane hosting this detail owns its height (AppsPanel `fill`): give the
   * graph a viewport-proportional canvas instead of the fixed desktop floor.
   */
  fill?: boolean;
  className?: string;
}

export function WorkflowDetail({
  workflow,
  invoke,
  onOpenScript,
  loadScript,
  onChanged,
  onRemoved,
  header,
  fill = false,
  className,
}: WorkflowDetailProps) {
  const [versionsOpen, setVersionsOpen] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const controller = useWorkflowRun({ invoke, workflow, loadScript, active: true });
  const { runs, trace, script, running, error, setError, triggerRun, openTrace } = controller;

  const removeWorkflow = async () => {
    setDeleting(true);
    setError(null);
    try {
      await invoke("remove", { name: workflow.name });
      if (onRemoved) onRemoved();
      else onChanged?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setDeleting(false);
    }
  };

  return (
    <div className={`space-y-3 ${className ?? ""}`}>
      {header}

      <div className="flex flex-wrap items-center gap-2">
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium">{workflow.name}</span>
          {workflow.scriptPath && (
            <code className="font-mono text-[0.7rem] text-muted-foreground">
              {workflow.scriptPath}
            </code>
          )}
        </span>
        <TriggerBadges workflow={workflow} />
        <span className="flex shrink-0 items-center gap-1.5">
          {onOpenScript && workflow.scriptPath && (
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
            onClick={() => setVersionsOpen((open) => !open)}
            title="Version history for this workflow's script"
            type="button"
          >
            versions
          </button>
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

      {workflow.description && (
        <p className="text-xs text-muted-foreground">{workflow.description}</p>
      )}

      {workflow.webhookPath && (
        <p className="flex flex-wrap items-center gap-1.5 text-[0.7rem] text-muted-foreground">
          Webhook: <code className="font-mono">{workflow.webhookPath}</code>
          <CopyChip text={workflow.webhookPath} />
          (X-Hook-Token required)
        </p>
      )}

      <ErrorLine error={error} />

      {versionsOpen && (
        <div className="rounded-md border p-2">
          <VersionsSection
            invoke={invoke}
            name={workflow.name}
            onRestored={() => onChanged?.()}
            open
          />
        </div>
      )}

      <RunSurface
        cascade={
          trace ? (
            <CascadeTree
              invoke={invoke}
              onSelect={(node) => void openTrace(node.id, node.workflow)}
              trace={trace}
            />
          ) : null
        }
        // A real canvas, not a letterbox: a 420px floor on desktop, growing
        // to a viewport share when the host pane owns its height (`fill`),
        // and easing down on short viewports so the form stays reachable.
        graphMinHeight={fill ? "max(420px, 55vh)" : "min(420px, 60vh)"}
        onRun={triggerRun}
        script={script}
        trace={trace}
        workflow={workflow}
      />

      <div className="space-y-1">
        <SectionHeading>Runs</SectionHeading>
        {runs === null ? (
          <Empty>Loading runs…</Empty>
        ) : runs.length === 0 ? (
          <Empty>No runs yet.</Empty>
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

      <div className="flex items-center gap-2 border-t pt-2">
        <span className="text-[0.7rem] text-muted-foreground">
          Removing the registration leaves the script in place.
        </span>
        <span className="ml-auto">
          <ConfirmDeleteButton
            busy={deleting}
            label="Unregister"
            onConfirm={() => void removeWorkflow()}
          />
        </span>
      </div>
    </div>
  );
}
