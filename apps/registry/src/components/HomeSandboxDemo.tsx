/**
 * HomeSandboxDemo — the sandbox running live on the landing page.
 *
 * Auto-runs the demo script on a slow timer (rotating cities), pausing while
 * the tab is hidden. Left: the highlighted script; right: the same live span
 * view the playground uses. Every run is a real sandboxed-iframe execution
 * against Open-Meteo's free APIs — no credentials, no gateway needed.
 */

import { instrument, runScriptInSandbox, type RuntimeEvent } from "@aprovan/runtime";
import * as React from "react";
import { INITIAL_RUN, reduceRunEvent, RunView, type RunState } from "@/components/RunView";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createDemoTransport, DEMO_CITIES, DEMO_SCRIPT } from "@/lib/demo";
import { HighlightedCode } from "@/lib/highlight";
import { compileScript } from "@/lib/playground";
import { withBasePath } from "@/lib/site";

const RUN_INTERVAL_MS = 15_000;

export function HomeSandboxDemo() {
  const [run, setRun] = React.useState<RunState>(INITIAL_RUN);
  const [cityIndex, setCityIndex] = React.useState(0);
  const runningRef = React.useRef(false);

  React.useEffect(() => {
    let disposed = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const runOnce = (index: number) => {
      if (disposed || document.hidden || runningRef.current) {
        schedule(index);
        return;
      }
      runningRef.current = true;
      setCityIndex(index);
      setRun({ events: [], running: true, startTs: Date.now() });

      const onEvent = (event: RuntimeEvent) => {
        setRun((previous) => reduceRunEvent(previous, event));
        if (event.type === "script:end") {
          runningRef.current = false;
          schedule(index + 1);
        }
      };

      try {
        const compiled = compileScript(DEMO_SCRIPT);
        runScriptInSandbox({
          body: compiled.body,
          dependencies: compiled.dependencies,
          transport: instrument(createDemoTransport(), onEvent),
          inputs: { city: DEMO_CITIES[index % DEMO_CITIES.length] },
          onEvent,
          timeoutMs: 20_000,
        }).result.catch(() => {
          // surfaced through script:end
        });
      } catch {
        runningRef.current = false;
        schedule(index + 1);
      }
    };

    const schedule = (index: number) => {
      if (disposed) return;
      timer = setTimeout(() => runOnce(index), RUN_INTERVAL_MS);
    };

    // First run shortly after mount so the page settles first.
    timer = setTimeout(() => runOnce(0), 1_200);

    return () => {
      disposed = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const city = DEMO_CITIES[cityIndex % DEMO_CITIES.length];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">Watch the sandbox run</h2>
          <p className="text-sm text-muted-foreground">
            This is live — the script below executes in a sandboxed iframe against
            Open-Meteo&apos;s free API, on a slow loop. No credentials involved.
          </p>
        </div>
        <a
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          href={withBasePath("/playground")}
        >
          Open the playground →
        </a>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-sm">
              weather({"{"} city: <span className="text-syntax-string">"{city}"</span> {"}"})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-3 text-xs leading-5">
              <code>
                <HighlightedCode code={DEMO_SCRIPT} />
              </code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              Live execution
              {run.running && (
                <span className="size-2 animate-pulse rounded-full bg-syntax-fn" title="running" />
              )}
              <Badge className="ml-auto" variant="outline">
                auto-runs every {RUN_INTERVAL_MS / 1000}s
              </Badge>
            </CardTitle>
            <CardDescription>
              Spans, latency, logs — the same view the playground gives your own scripts.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <RunView emptyHint="Warming up the sandbox…" run={run} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
