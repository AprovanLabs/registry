/**
 * TailorFlow — the shared "Tailor-style" script renderer: parses a plain
 * async script (tree-sitter, loaded from CDN wasm) and renders its execution
 * flow — steps, provider calls, branches, nested callbacks — as an
 * interactive graph.
 *
 * Two optional layers sit on top of the pure preview, both host-supplied via
 * the renderer registry's capabilities (or props, when mounted directly):
 *
 *  - **run** — a compact form derived from the analysed signature triggers a
 *    manual execution. Without it the inputs are read-only.
 *  - **trace** — a recorded run overlays per-step status/duration/error onto
 *    the graph, and the span list cross-highlights with the nodes: hover a
 *    row to light its node, click either side to focus the other.
 *
 * Host requirements:
 *   - `@import "@aprovan/registry-ui/tailor.css"` in the app's Tailwind entry
 *   - `import "@xyflow/react/dist/style.css"` once per app
 */

import { Background, Controls, ReactFlow, type Node } from "@xyflow/react";
import * as React from "react";
import {
  isWorkflowScript,
  registerRenderer,
  useRendererCapabilities,
  type WorkflowRunCapability,
} from "./renderers";
import { RunView, runViewFromWorkflowRun, type WorkflowRunLike } from "./run-view";
import { Breadcrumbs } from "./tailor/Breadcrumbs";
import { analyzeScript } from "./tailor/flow-analyzer";
import { buildGraph } from "./tailor/graph-builder";
import { ImportsPanel } from "./tailor/ImportsPanel";
import { ParallelNode } from "./tailor/ParallelNode";
import { RunPanel, type RunValues } from "./tailor/RunPanel";
import { StepNode } from "./tailor/StepNode";
import { EMPTY_CORRELATION, correlateRun } from "./tailor/trace";
import type { StepNodeData, ParallelNodeData } from "./tailor/node-types";
import type { FlowAnalysis, FocusView } from "./tailor/types";

const nodeTypes = { step: StepNode, parallel: ParallelNode };

/**
 * React Flow ships its own light/dark variable sets keyed off a `dark` class
 * on the flow root, which `colorMode` sets. Both hosts (and tailor.css) mark
 * dark mode with a `.dark` ancestor class — patchwork syncs that class with
 * the OS scheme itself — so mirror whatever the mounted subtree sits under
 * rather than consulting `prefers-color-scheme` independently, which would
 * darken the canvas inside a light-only host.
 */
function useHostColorMode(ref: React.RefObject<HTMLElement | null>): "light" | "dark" {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  React.useEffect(() => {
    const read = () => setMode(ref.current?.closest(".dark") ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });
    return () => observer.disconnect();
  }, [ref]);
  return mode;
}

export interface TailorFlowProps {
  /** Script source to analyze and render. */
  source: string;
  /** Show the imports panel at root focus (default: true). */
  showImports?: boolean;
  /** Show the input/run panel (default: true). */
  showParams?: boolean;
  /**
   * Manual execution + trace overlay. Omitted (and no host capability) →
   * pure preview: no run button, no run overlay.
   */
  run?: WorkflowRunCapability;
  className?: string;
}

export function TailorFlow({
  source,
  showImports = true,
  showParams = true,
  run,
  className,
}: TailorFlowProps): React.ReactElement {
  const capabilities = useRendererCapabilities();
  const runCapability = run ?? capabilities.workflowRun;

  const [analysis, setAnalysis] = React.useState<FlowAnalysis | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [focusStack, setFocusStack] = React.useState<FocusView[]>([]);
  const [inputValues, setInputValues] = React.useState<RunValues>(() => new Map());

  const [running, setRunning] = React.useState(false);
  const [runError, setRunError] = React.useState<string | null>(null);
  const [localRun, setLocalRun] = React.useState<WorkflowRunLike | null>(null);
  const [hoveredSpanId, setHoveredSpanId] = React.useState<string | null>(null);
  const [hoveredStepId, setHoveredStepId] = React.useState<number | null>(null);
  const [focusSpanId, setFocusSpanId] = React.useState<string | null>(null);

  // Host-selected run wins; otherwise the last run this panel triggered.
  const activeRun = runCapability?.activeRun ?? localRun;

  React.useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      analyzeScript(source)
        .then((nextAnalysis) => {
          if (!active) return;
          setAnalysis(nextAnalysis);
          setFocusStack([]);
          setError(null);
        })
        .catch((nextError: unknown) => {
          if (!active) return;
          setError(nextError instanceof Error ? nextError.message : "Failed to parse source");
        });
    }, 260);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [source]);

  const current = React.useMemo<FocusView | null>(() => {
    if (!analysis) return null;
    return (
      focusStack[focusStack.length - 1] ?? {
        title: analysis.fnName ? `${analysis.fnName}( )` : "root",
        steps: analysis.steps,
        fromStepId: null,
      }
    );
  }, [analysis, focusStack]);

  const handleOpen = React.useCallback(
    (stepId: number, label: "then" | "catch" | "finally") => {
      if (!current) return;
      const step = current.steps.find((s) => s.id === stepId);
      if (!step) return;
      const block = step.nested.find((n) => n.label === label);
      if (!block) return;
      const object = step.object ? `${step.object}.` : "";
      const method = step.method ?? "call";
      setFocusStack((prev) => [
        ...prev,
        { title: `${object}${method}( ) · ${label}`, steps: block.steps, fromStepId: step.id },
      ]);
    },
    [current],
  );

  const handleOpenCallBranch = React.useCallback(
    (stepId: number, callIndex: number, label: "then" | "catch" | "finally") => {
      if (!current) return;
      const step = current.steps.find((s) => s.id === stepId);
      if (!step) return;
      const call = step.calls[callIndex];
      if (!call) return;
      const block = call.nested.find((n) => n.label === label);
      if (!block) return;
      const object = call.object ? `${call.object}.` : "";
      const method = call.method ?? "call";
      setFocusStack((prev) => [
        ...prev,
        { title: `${object}${method}( ) · ${label}`, steps: block.steps, fromStepId: call.id },
      ]);
    },
    [current],
  );

  // Trace ↔ graph correlation, recomputed only when the run or script change.
  const correlation = React.useMemo(() => {
    if (!analysis || !activeRun) return null;
    return correlateRun(analysis, activeRun.spans);
  }, [analysis, activeRun]);

  const highlightedStepIds = React.useMemo(() => {
    const ids = new Set<number>();
    if (hoveredStepId != null) ids.add(hoveredStepId);
    const fromSpan = hoveredSpanId != null ? correlation?.spanStep.get(hoveredSpanId) : undefined;
    if (fromSpan != null) ids.add(fromSpan);
    return ids;
  }, [hoveredStepId, hoveredSpanId, correlation]);

  const graph = React.useMemo(() => {
    if (!analysis || !current) return { nodes: [], edges: [] };
    return buildGraph({
      analysis,
      current,
      inputValues,
      onOpen: handleOpen,
      onOpenCallBranch: handleOpenCallBranch,
      correlation: correlation ?? undefined,
      highlightedStepIds,
    });
  }, [
    analysis,
    current,
    inputValues,
    handleOpen,
    handleOpenCallBranch,
    correlation,
    highlightedStepIds,
  ]);

  // The run's spans, annotated with what the graph could (not) attribute.
  const runModel = React.useMemo(() => {
    if (!activeRun) return null;
    const model = runViewFromWorkflowRun(activeRun);
    const unmatched = new Set((correlation ?? EMPTY_CORRELATION).unmatchedSpanIds);
    return {
      ...model,
      spans: model.spans.map((span) =>
        unmatched.has(span.id) ? { ...span, note: "no matching step" } : span,
      ),
    };
  }, [activeRun, correlation]);

  const highlightedSpanIds = React.useMemo(() => {
    const ids = new Set<string>();
    if (hoveredSpanId != null) ids.add(hoveredSpanId);
    if (hoveredStepId != null) {
      for (const id of correlation?.steps.get(hoveredStepId)?.spanIds ?? []) ids.add(id);
    }
    return ids;
  }, [hoveredSpanId, hoveredStepId, correlation]);

  const triggerRun = React.useCallback(
    async (input: unknown) => {
      if (!runCapability) return;
      setRunning(true);
      setRunError(null);
      try {
        const result = await runCapability.run(input);
        if (result) setLocalRun(result);
      } catch (err) {
        setRunError(err instanceof Error ? err.message : "Run failed");
      } finally {
        setRunning(false);
      }
    },
    [runCapability],
  );

  const atRoot = focusStack.length === 0;

  // Hosts often mount the flow inside a modal/tab that is zero-sized (or
  // animating) at init, which leaves fitView with a broken viewport and an
  // apparently blank canvas. Re-fit whenever the canvas gains real
  // dimensions.
  const canvasRef = React.useRef<HTMLDivElement | null>(null);
  const flowRef = React.useRef<{
    fitView: (options?: { padding?: number; duration?: number; nodes?: Array<{ id: string }> }) => unknown;
  } | null>(null);
  const colorMode = useHostColorMode(canvasRef);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof ResizeObserver === "undefined") return;
    let lastArea = 0;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[entries.length - 1];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const area = width * height;
      if (area > 0 && lastArea === 0) {
        requestAnimationFrame(() => flowRef.current?.fitView({ padding: 0.15 }));
      }
      lastArea = area;
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // A new graph (script change / focus navigation) also needs a fit once
  // nodes are measured.
  React.useEffect(() => {
    if (graph.nodes.length === 0) return;
    const timer = window.setTimeout(() => flowRef.current?.fitView({ padding: 0.15 }), 50);
    return () => window.clearTimeout(timer);
  }, [graph]);

  /** Trace row → node: centre the node that produced the hovered/clicked span. */
  const focusNodeForSpan = React.useCallback(
    (spanId: string) => {
      const stepId = correlation?.spanStep.get(spanId);
      if (stepId == null) return;
      setHoveredStepId(stepId);
      const node = graph.nodes.find(
        (candidate) => (candidate.data as StepNodeData | ParallelNodeData).stepId === stepId,
      );
      if (node) flowRef.current?.fitView({ padding: 0.4, duration: 400, nodes: [{ id: node.id }] });
    },
    [correlation, graph.nodes],
  );

  /** Node → trace row: scroll the span list to this node's first span. */
  const focusSpanForNode = React.useCallback(
    (node: Node<StepNodeData | ParallelNodeData>) => {
      const spanIds = correlation?.steps.get(node.data.stepId)?.spanIds ?? [];
      setFocusSpanId(spanIds[0] ?? null);
    },
    [correlation],
  );

  return (
    <div className={`flex min-h-[380px] flex-col ${className ?? ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-1.5 border-b bg-muted/50 px-3.5">
        <div className="py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          Flow
        </div>
        {analysis && (
          <Breadcrumbs
            focusStack={focusStack}
            fnName={analysis.fnName}
            onNavigate={(i) => setFocusStack((prev) => prev.slice(0, i + 1))}
            onReset={() => setFocusStack([])}
          />
        )}
      </div>

      {error && (
        <p className="m-0 border-b px-3.5 py-2.5 text-[0.84rem] text-destructive">
          Parse error: {error}
        </p>
      )}

      <div className="tailor-canvas" ref={canvasRef}>
        <ReactFlow
          colorMode={colorMode}
          edges={graph.edges}
          fitView
          nodes={graph.nodes}
          nodeTypes={nodeTypes}
          onInit={(instance) => {
            flowRef.current = instance;
          }}
          onNodeClick={(_event, node) => focusSpanForNode(node)}
          onNodeMouseEnter={(_event, node) => setHoveredStepId(node.data.stepId)}
          onNodeMouseLeave={() => setHoveredStepId(null)}
        >
          <Controls position="top-right" />
          <Background gap={22} size={1.2} />
        </ReactFlow>
      </div>

      {(showImports || showParams || runModel) && analysis && (
        <div className="flex flex-col gap-3 border-t p-3">
          {showImports && atRoot && analysis.imports.length > 0 && (
            <ImportsPanel imports={analysis.imports} />
          )}
          {showParams && (analysis.params.length > 0 || runCapability) && (
            <RunPanel
              error={runError}
              onRun={runCapability ? triggerRun : undefined}
              onValuesChange={setInputValues}
              params={analysis.params}
              running={running}
              storageKey={runCapability?.storageKey}
              values={inputValues}
            />
          )}
          {runModel && (
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="px-3.5 py-2 border-b border-border bg-muted/50 text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted-foreground">
                Trace
                {correlation && correlation.unmatchedSpanIds.length > 0 && (
                  <span className="ml-2 font-normal normal-case tracking-normal">
                    {correlation.unmatchedSpanIds.length} call
                    {correlation.unmatchedSpanIds.length === 1 ? "" : "s"} not in this script
                  </span>
                )}
              </div>
              <div className="max-h-72 overflow-auto p-3">
                <RunView
                  focusSpanId={focusSpanId}
                  highlightedSpanIds={highlightedSpanIds}
                  model={runModel}
                  onSpanHover={setHoveredSpanId}
                  onSpanSelect={focusNodeForSpan}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Register the workflow-script renderer: any surface that imports TailorFlow
// gets `resolveRenderer({ path, content })` → flow graph for workflow
// scripts. Lives here (not renderers.tsx) so run-view consumers that never
// render graphs don't pull @xyflow/react into their bundle. Run/trace
// capabilities arrive through the registry context, so a plain file preview
// renders exactly as before.
registerRenderer({
  id: "workflow-script",
  label: "Workflow",
  match: (input) => (input.content && isWorkflowScript(input.path, input.content) ? 100 : 0),
  Component: ({ input }) => <TailorFlow source={input.content ?? ""} />,
});
