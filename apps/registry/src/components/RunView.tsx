/**
 * RunView — live execution view over a runtime event stream.
 *
 * Renders every gateway call as a span with a real-time timing bar; each span
 * expands to explore its inputs (call args) and output (result or error).
 * Console logs interleave below; the script result closes the run. Shared by
 * the playground and the homepage auto-running demo.
 */

import type { RuntimeEvent } from "@aprovan/runtime";
import { ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface RunState {
  events: RuntimeEvent[];
  running: boolean;
  startTs?: number;
  endTs?: number;
  result?: unknown;
  error?: string;
}

export const INITIAL_RUN: RunState = { events: [], running: false };

/** Fold a runtime event into run state (used by hosts via setState). */
export function reduceRunEvent(previous: RunState, event: RuntimeEvent): RunState {
  const next: RunState = { ...previous, events: [...previous.events, event] };
  if (event.type === "script:end") {
    next.running = false;
    next.endTs = event.ts;
    if (event.ok) next.result = event.result;
    else next.error = event.error;
  }
  return next;
}

interface CallSpan {
  callId: string;
  provider: string;
  operation: string;
  args: Record<string, unknown>;
  startTs: number;
  endTs?: number;
  ok?: boolean;
  result?: unknown;
  error?: string;
  retries: number;
}

function reduceCalls(events: RuntimeEvent[]): CallSpan[] {
  const spans = new Map<string, CallSpan>();
  for (const event of events) {
    if (event.type === "call:start") {
      spans.set(event.callId, {
        callId: event.callId,
        provider: event.provider,
        operation: event.operation,
        args: event.args,
        startTs: event.ts,
        retries: 0,
      });
    } else if (event.type === "call:retry") {
      const span = spans.get(event.callId);
      if (span) span.retries += 1;
    } else if (event.type === "call:end") {
      const span = spans.get(event.callId);
      if (span) {
        span.endTs = event.ts;
        span.ok = event.ok;
        span.result = event.result;
        span.error = event.error;
      }
    }
  }
  return [...spans.values()];
}

function formatDuration(ms: number): string {
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${Math.round(ms)}ms`;
}

function formatJson(value: unknown): string {
  const text = JSON.stringify(value, null, 2) ?? "undefined";
  return text.length > 4000 ? `${text.slice(0, 4000)}\n…` : text;
}

function SpanRow({
  call,
  timelineStart,
  timelineEnd,
  timelineSpanMs,
}: {
  call: CallSpan;
  timelineStart: number;
  timelineEnd: number;
  timelineSpanMs: number;
}) {
  const [expanded, setExpanded] = React.useState(false);

  const offsetPct = ((call.startTs - timelineStart) / timelineSpanMs) * 100;
  const durationMs = (call.endTs ?? timelineEnd) - call.startTs;
  const widthPct = Math.max((durationMs / timelineSpanMs) * 100, 1.5);
  const status = call.ok === undefined ? "running" : call.ok ? "ok" : "error";

  return (
    <div className="flex flex-col gap-0.5">
      <button
        className="flex items-baseline justify-between gap-3 text-left"
        onClick={() => setExpanded((previous) => !previous)}
        type="button"
      >
        <span className="flex min-w-0 items-center gap-1 font-mono text-xs">
          <ChevronRightIcon
            className={cn(
              "size-3 shrink-0 text-muted-foreground transition-transform",
              expanded && "rotate-90",
            )}
          />
          <span className="min-w-0 truncate">
            <span className="text-syntax-type">{call.provider}</span>
            <span className="text-muted-foreground">.</span>
            <span className="text-syntax-fn">{call.operation}</span>
            {call.retries > 0 && (
              <span className="ml-1.5 text-muted-foreground">
                ↻ {call.retries} {call.retries === 1 ? "retry" : "retries"}
              </span>
            )}
          </span>
        </span>
        <span
          className={cn(
            "shrink-0 font-mono text-[0.65rem]",
            status === "error" ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {status === "running" ? "…" : formatDuration(durationMs)}
        </span>
      </button>
      <div className="h-2 w-full overflow-hidden rounded-sm bg-muted/50">
        <div
          className={cn(
            "h-full rounded-sm transition-[width]",
            status === "ok" && "bg-syntax-fn/70",
            status === "error" && "bg-destructive/70",
            status === "running" && "animate-pulse bg-syntax-type/70",
          )}
          style={{ marginLeft: `${offsetPct}%`, width: `${widthPct}%` }}
        />
      </div>
      {expanded && (
        <div className="my-1 grid gap-2 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="mb-1 text-[0.65rem] font-medium uppercase text-muted-foreground">
              Input
            </p>
            <pre className="max-h-48 overflow-auto rounded-lg border bg-muted/30 p-2 font-mono text-xs leading-relaxed">
              {formatJson(call.args)}
            </pre>
          </div>
          <div className="min-w-0">
            <p className="mb-1 text-[0.65rem] font-medium uppercase text-muted-foreground">
              {status === "error" ? "Error" : "Output"}
            </p>
            <pre
              className={cn(
                "max-h-48 overflow-auto rounded-lg border bg-muted/30 p-2 font-mono text-xs leading-relaxed",
                status === "error" && "text-destructive",
              )}
            >
              {status === "running"
                ? "…"
                : status === "error"
                  ? (call.error ?? "unknown error")
                  : formatJson(call.result)}
            </pre>
          </div>
        </div>
      )}
      {!expanded && call.error && <p className="text-xs text-destructive">{call.error}</p>}
    </div>
  );
}

export function RunView({ run, emptyHint }: { run: RunState; emptyHint?: string }) {
  // Re-render while running so live timing bars grow in real time.
  const [, forceTick] = React.useReducer((tick: number) => tick + 1, 0);
  React.useEffect(() => {
    if (!run.running) return;
    const interval = setInterval(forceTick, 200);
    return () => clearInterval(interval);
  }, [run.running]);

  const calls = reduceCalls(run.events);
  const logs = run.events.filter(
    (event): event is Extract<RuntimeEvent, { type: "log" }> => event.type === "log",
  );
  const timelineStart = run.startTs ?? 0;
  const timelineEnd = run.endTs ?? (run.running ? Date.now() : timelineStart);
  const timelineSpanMs = Math.max(timelineEnd - timelineStart, 1);

  if (run.events.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        {emptyHint ?? "Run the script to watch it execute."}
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-1.5">
        {calls.map((call) => (
          <SpanRow
            call={call}
            key={call.callId}
            timelineEnd={timelineEnd}
            timelineSpanMs={timelineSpanMs}
            timelineStart={timelineStart}
          />
        ))}
        {calls.length === 0 && run.running && (
          <p className="text-xs text-muted-foreground">No gateway calls yet…</p>
        )}
      </div>

      {logs.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-muted-foreground">Console</p>
          <pre className="max-h-48 overflow-auto rounded-lg border bg-muted/30 p-3 font-mono text-xs leading-relaxed">
            {logs
              .map(
                (log) =>
                  `${new Date(log.ts).toLocaleTimeString()} [${log.level}] ${log.message}`,
              )
              .join("\n")}
          </pre>
        </div>
      )}

      {!run.running && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant={run.error ? "destructive" : "secondary"}>
              {run.error ? "error" : "done"}
            </Badge>
            {run.endTs && run.startTs && (
              <span className="text-xs text-muted-foreground">
                {formatDuration(run.endTs - run.startTs)} · {calls.length} call
                {calls.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
          <pre className="max-h-72 overflow-auto rounded-lg border bg-muted/30 p-3 font-mono text-xs leading-relaxed">
            {run.error ?? formatJson(run.result)}
          </pre>
        </div>
      )}
    </>
  );
}
