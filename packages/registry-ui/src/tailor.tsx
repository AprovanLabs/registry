/**
 * TailorFlow — the shared "Tailor-style" script renderer: parses a plain
 * async script (tree-sitter, loaded from CDN wasm) and renders its execution
 * flow — steps, provider calls, branches, nested callbacks — as an
 * interactive graph. Extracted from the standalone tailor app so patchwork
 * chat and the registry render workflow scripts identically.
 *
 * Host requirements:
 *   - `@import "@aprovan/registry-ui/tailor.css"` in the app's Tailwind entry
 *   - `import "@xyflow/react/dist/style.css"` once per app
 */

import { Background, Controls, ReactFlow } from "@xyflow/react";
import * as React from "react";
import { Breadcrumbs } from "./tailor/Breadcrumbs";
import { ImportsPanel } from "./tailor/ImportsPanel";
import { ParallelNode } from "./tailor/ParallelNode";
import { ParamsPanel } from "./tailor/ParamsPanel";
import { StepNode } from "./tailor/StepNode";
import { analyzeScript } from "./tailor/flow-analyzer";
import { buildGraph } from "./tailor/graph-builder";
import type { FlowAnalysis, FocusView } from "./tailor/types";
import { isWorkflowScript, registerRenderer } from "./renderers";

const nodeTypes = { step: StepNode, parallel: ParallelNode };

export interface TailorFlowProps {
  /** Script source to analyze and render. */
  source: string;
  /** Show the imports panel at root focus (default: true). */
  showImports?: boolean;
  /** Show editable param inputs (default: true). */
  showParams?: boolean;
  className?: string;
}

export function TailorFlow({
  source,
  showImports = true,
  showParams = true,
  className,
}: TailorFlowProps): React.ReactElement {
  const [analysis, setAnalysis] = React.useState<FlowAnalysis | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [focusStack, setFocusStack] = React.useState<FocusView[]>([]);
  const [inputValues, setInputValues] = React.useState<Map<string, string>>(new Map());

  React.useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      analyzeScript(source)
        .then((nextAnalysis) => {
          if (!active) return;
          setAnalysis(nextAnalysis);
          setFocusStack([]);
          setInputValues((prev) => {
            const next = new Map(prev);
            for (const param of nextAnalysis.params) {
              if (!next.has(param.name)) next.set(param.name, "");
            }
            return next;
          });
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

  const graph = React.useMemo(() => {
    if (!analysis || !current) return { nodes: [], edges: [] };
    return buildGraph(analysis, current, inputValues, handleOpen, handleOpenCallBranch);
  }, [analysis, current, inputValues, handleOpen, handleOpenCallBranch]);

  const handleParamChange = React.useCallback((name: string, value: string) => {
    setInputValues((prev) => {
      const next = new Map(prev);
      next.set(name, value);
      return next;
    });
  }, []);

  const atRoot = focusStack.length === 0;

  // Hosts often mount the flow inside a modal/tab that is zero-sized (or
  // animating) at init, which leaves fitView with a broken viewport and an
  // apparently blank canvas. Re-fit whenever the canvas gains real
  // dimensions.
  const canvasRef = React.useRef<HTMLDivElement | null>(null);
  const flowRef = React.useRef<{ fitView: (options?: { padding?: number }) => unknown } | null>(
    null,
  );
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
          edges={graph.edges}
          fitView
          nodes={graph.nodes}
          nodeTypes={nodeTypes}
          onInit={(instance) => {
            flowRef.current = instance;
          }}
        >
          <Controls position="top-right" />
          <Background gap={22} size={1.2} />
        </ReactFlow>
      </div>

      {(showImports || showParams) && analysis && (
        <div className="flex flex-col gap-3 border-t p-3">
          {showImports && atRoot && analysis.imports.length > 0 && (
            <ImportsPanel imports={analysis.imports} />
          )}
          {showParams && analysis.params.length > 0 && (
            <ParamsPanel
              inputValues={inputValues}
              onChange={handleParamChange}
              params={analysis.params}
            />
          )}
        </div>
      )}
    </div>
  );
}

// Register the workflow-script renderer: any surface that imports TailorFlow
// gets `resolveRenderer({ path, content })` → flow graph for workflow
// scripts. Lives here (not renderers.tsx) so run-view consumers that never
// render graphs don't pull @xyflow/react into their bundle.
registerRenderer({
  id: "workflow-script",
  label: "Workflow",
  match: (input) => (input.content && isWorkflowScript(input.path, input.content) ? 100 : 0),
  Component: ({ input }) => <TailorFlow source={input.content ?? ""} />,
});
