/**
 * HomeSandboxDemo — an editable sandbox run on the landing page.
 *
 * The visitor edits the script, picks a city (autocomplete backed by the same
 * keyless Open-Meteo geocoding API the script calls), and runs it on demand in
 * the sandboxed iframe. Results show as a compact headline; the full span/log
 * view is details-on-demand. No credentials, no gateway, no timers.
 */

import { instrument, type RuntimeEvent } from "@utdk/remote";
import { runScriptInSandbox, type SandboxRun } from "@/lib/sandbox";
import {
  INITIAL_RUN,
  reduceRunEvent,
  RunView,
  runViewFromRuntimeEvents,
  type RunState,
} from "@aprovan/registry-ui/run-view";
import { ChevronDownIcon, PlayIcon } from "lucide-react";
import * as React from "react";
import { CodeEditor } from "@aprovan/editor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  createDemoTransport,
  DEFAULT_DEMO_CITY,
  DEMO_SCRIPT,
  fetchCitySuggestions,
  type CitySuggestion,
} from "@/lib/demo";
import { compileScript } from "@/lib/playground";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

function CityAutocomplete({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (city: string) => void;
  onSubmit: () => void;
}) {
  const [suggestions, setSuggestions] = React.useState<CitySuggestion[]>([]);
  const [open, setOpen] = React.useState(false);
  const abortRef = React.useRef<AbortController | null>(null);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const search = (query: string) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      fetchCitySuggestions(query, controller.signal)
        .then((results) => {
          setSuggestions(results);
          setOpen(results.length > 0);
        })
        .catch(() => {
          // Aborted or offline — keep whatever is showing.
        });
    }, 250);
  };

  React.useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      clearTimeout(debounceRef.current);
      abortRef.current?.abort();
    };
  }, []);

  return (
    <div className="relative w-48" ref={rootRef}>
      <Input
        aria-label="City"
        onChange={(event) => {
          onChange(event.target.value);
          search(event.target.value);
        }}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            setOpen(false);
            onSubmit();
          }
          if (event.key === "Escape") setOpen(false);
        }}
        placeholder="City…"
        spellCheck={false}
        value={value}
      />
      {open && (
        <ul className="absolute z-10 mt-1 w-64 overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md">
          {suggestions.map((place) => (
            <li key={place.id}>
              <button
                className="flex w-full items-baseline gap-1.5 px-3 py-1.5 text-left text-sm hover:bg-muted"
                onClick={() => {
                  onChange(place.name);
                  setOpen(false);
                }}
                type="button"
              >
                <span>{place.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {[place.admin1, place.country].filter(Boolean).join(", ")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Headline facts pulled from a finished run. */
function runHeadline(run: RunState): string | null {
  if (run.running || !run.startTs || !run.endTs) return null;
  const seconds = ((run.endTs - run.startTs) / 1000).toFixed(1);
  const calls = run.events.filter((event) => event.type === "call:start").length;
  if (run.error) return `failed after ${seconds}s`;
  const result = run.result as { city?: string; temperature?: number } | undefined;
  const reading =
    result && typeof result.temperature === "number"
      ? `${result.city ?? "?"} · ${result.temperature}°C`
      : "done";
  return `${reading} · ${calls} call${calls === 1 ? "" : "s"} · ${seconds}s`;
}

export function HomeSandboxDemo() {
  const [source, setSource] = React.useState(DEMO_SCRIPT);
  const [city, setCity] = React.useState(DEFAULT_DEMO_CITY);
  const [run, setRun] = React.useState<RunState>(INITIAL_RUN);
  const [compileError, setCompileError] = React.useState<string | null>(null);
  const [showDetails, setShowDetails] = React.useState(false);
  const sandboxRef = React.useRef<SandboxRun | null>(null);

  React.useEffect(() => () => sandboxRef.current?.dispose(), []);

  const start = () => {
    if (run.running) return;
    let compiled;
    try {
      compiled = compileScript(source);
    } catch (error) {
      setCompileError(error instanceof Error ? error.message : String(error));
      return;
    }
    setCompileError(null);
    setRun({ events: [], running: true, startTs: Date.now() });

    const onEvent = (event: RuntimeEvent) => {
      setRun((previous) => reduceRunEvent(previous, event));
    };

    const sandbox = runScriptInSandbox({
      body: compiled.body,
      dependencies: compiled.dependencies,
      transport: instrument(createDemoTransport(), onEvent),
      inputs: { city },
      onEvent,
      timeoutMs: 20_000,
    });
    sandbox.result.catch(() => {
      // Failures surface through the script:end event.
    });
    sandboxRef.current = sandbox;
  };

  const headline = runHeadline(run);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">Try the sandbox</h2>
          <p className="text-sm text-muted-foreground">
            Edit the script, pick a city, press run — a real sandboxed-iframe
            execution against Open-Meteo&apos;s keyless API.
          </p>
        </div>
        <a
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          href={withBasePath("/playground")}
        >
          Open the playground →
        </a>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex flex-wrap items-center gap-2 text-base">
            <span className="font-mono text-sm">
              weather({"{"} city {"}"})
            </span>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <CityAutocomplete onChange={setCity} onSubmit={start} value={city} />
              <Button disabled={run.running || !city.trim()} onClick={start} type="button">
                <PlayIcon className="size-3.5" />
                {run.running ? "Running…" : "Run"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <CodeEditor
            ariaLabel="Demo script"
            minHeightClass="min-h-[13rem]"
            onChange={setSource}
            value={source}
          />
          {compileError && <p className="text-sm text-destructive">{compileError}</p>}

          {(run.running || headline) && (
            <div className="flex flex-col gap-2 rounded-lg border bg-muted/30 p-3">
              <button
                className="flex items-center gap-2 text-left"
                onClick={() => setShowDetails((previous) => !previous)}
                type="button"
              >
                {run.running ? (
                  <>
                    <span className="size-2 animate-pulse rounded-full bg-syntax-fn" />
                    <span className="text-sm text-muted-foreground">Running…</span>
                  </>
                ) : (
                  <>
                    <Badge variant={run.error ? "destructive" : "secondary"}>
                      {run.error ? "error" : "result"}
                    </Badge>
                    <span className="font-mono text-sm">{headline}</span>
                  </>
                )}
                <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                  {showDetails ? "Hide" : "Show"} spans & logs
                  <ChevronDownIcon
                    className={cn("size-3.5 transition-transform", showDetails && "rotate-180")}
                  />
                </span>
              </button>
              {showDetails && (
                <div className="flex flex-col gap-4 pt-1">
                  <RunView
                    emptyHint="Waiting for the first call…"
                    model={runViewFromRuntimeEvents(run)}
                  />
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
