/**
 * ScriptPlayground — write a script against `@utdk/*` providers and run it in
 * the browser sandbox.
 *
 * The script executes inside a sandboxed iframe (`@aprovan/runtime`); every
 * namespaced call crosses the iframe boundary and is proxied to the gateway,
 * where workspace credentials are injected server-side. The right panel is a
 * live span view fed by the runtime event stream: call timing bars, retries,
 * console output, and the script result.
 */

import {
  createGatewayTransport,
  instrument,
  runScriptInSandbox,
  withPolicy,
  type RuntimeEvent,
  type SandboxRun,
} from "@aprovan/runtime";
import { PlayIcon, SquareIcon } from "lucide-react";
import * as React from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { INITIAL_RUN, reduceRunEvent, RunView, type RunState } from "@/components/RunView";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAccessToken, getAuthenticatedUser, isAuthConfigured, signIn } from "@/lib/auth";
import { loadSession } from "@/lib/gateway";
import { compileScript, detectDependencies, SAMPLE_SCRIPT } from "@/lib/playground";
import { gatewayBaseUrl } from "@/lib/site";

type AuthState = "unknown" | "signed-out" | "ready";

export function ScriptPlayground() {
  const [source, setSource] = React.useState(SAMPLE_SCRIPT);
  const [inputsJson, setInputsJson] = React.useState(
    '{ "username": "octocat", "channel": "#general" }',
  );
  const [authState, setAuthState] = React.useState<AuthState>("unknown");
  const [run, setRun] = React.useState<RunState>(INITIAL_RUN);
  const [compileError, setCompileError] = React.useState<string | null>(null);
  const sandboxRef = React.useRef<SandboxRun | null>(null);

  React.useEffect(() => {
    if (!isAuthConfigured()) {
      setAuthState("unknown");
      return;
    }
    void getAuthenticatedUser().then((user) => {
      setAuthState(user && !user.expired ? "ready" : "signed-out");
    });
    return () => sandboxRef.current?.dispose();
  }, []);

  const dependencies = React.useMemo(() => {
    try {
      return detectDependencies(source);
    } catch {
      return [];
    }
  }, [source]);

  const start = () => {
    let compiled;
    let inputs: Record<string, unknown>;
    try {
      compiled = compileScript(source);
    } catch (error) {
      setCompileError(error instanceof Error ? error.message : String(error));
      return;
    }
    try {
      const parsed: unknown = inputsJson.trim() === "" ? {} : JSON.parse(inputsJson);
      inputs =
        parsed && typeof parsed === "object" && !Array.isArray(parsed)
          ? (parsed as Record<string, unknown>)
          : {};
    } catch {
      setCompileError("Inputs must be a JSON object.");
      return;
    }
    setCompileError(null);
    setRun({ events: [], running: true, startTs: Date.now() });

    const onEvent = (event: RuntimeEvent) => {
      setRun((previous) => reduceRunEvent(previous, event));
    };

    const transport = instrument(
      withPolicy(
        createGatewayTransport({
          baseUrl: gatewayBaseUrl(),
          getToken: async () => (await getAccessToken()) ?? undefined,
          getWorkspaceId: () => loadSession()?.workspaceId,
        }),
        { retry: { attempts: 3 } },
        {
          onRetry: (info) =>
            onEvent({
              type: "call:retry",
              callId: info.callId ?? "",
              provider: info.provider,
              operation: info.operation,
              attempt: info.attempt,
              delayMs: info.delayMs,
              reason: info.reason,
              ts: Date.now(),
            }),
        },
      ),
      onEvent,
    );

    const sandbox = runScriptInSandbox({
      body: compiled.body,
      dependencies: compiled.dependencies,
      transport,
      inputs,
      onEvent,
    });
    sandbox.result.catch(() => {
      // Failures are surfaced through the script:end event.
    });
    sandboxRef.current = sandbox;
  };

  const stop = () => sandboxRef.current?.dispose();

  return (
    <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-base">Script</CardTitle>
          <CardDescription>
            Imports declare the sandbox&apos;s dependencies — each one becomes a
            namespace proxied through the gateway with your workspace credentials.
          </CardDescription>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {dependencies.length === 0 ? (
              <span className="text-xs text-muted-foreground">No providers imported yet.</span>
            ) : (
              dependencies.map((dependency) => (
                <Badge key={`${dependency.identifier}:${dependency.specifier}`} variant="secondary">
                  <span className="font-mono text-xs">
                    {dependency.identifier}
                    <span className="text-muted-foreground">
                      {" → "}
                      {dependency.provider}
                      {dependency.path ? `.${dependency.path}` : ""}
                    </span>
                  </span>
                </Badge>
              ))
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <CodeEditor ariaLabel="Script source" onChange={setSource} value={source} />
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">
              Inputs <span className="font-normal text-muted-foreground">(passed to the default export)</span>
            </span>
            <textarea
              className="w-full rounded-lg border border-input bg-transparent px-3 py-2 font-mono text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              onChange={(event) => setInputsJson(event.target.value)}
              rows={2}
              spellCheck={false}
              value={inputsJson}
            />
          </label>

          {compileError && <p className="text-sm text-destructive">{compileError}</p>}

          <div className="flex flex-wrap items-center gap-2">
            <Button disabled={run.running} onClick={start} type="button">
              <PlayIcon className="size-3.5" />
              {run.running ? "Running…" : "Run in sandbox"}
            </Button>
            {run.running && (
              <Button onClick={stop} size="sm" type="button" variant="outline">
                <SquareIcon className="size-3" />
                Stop
              </Button>
            )}
            {authState === "signed-out" && (
              <span className="text-xs text-muted-foreground">
                The sandbox runs locally, but gateway calls need you to{" "}
                <button
                  className="font-medium underline underline-offset-2 hover:text-foreground"
                  onClick={() =>
                    void signIn(`${window.location.pathname}${window.location.search}`)
                  }
                  type="button"
                >
                  sign in
                </button>
                .
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            Live execution
            {run.running && (
              <span className="size-2 animate-pulse rounded-full bg-syntax-fn" title="running" />
            )}
          </CardTitle>
          <CardDescription>
            Every gateway call as a span — latency, retries, logs, straight from the
            runtime event stream.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <RunView run={run} />
        </CardContent>
      </Card>
    </div>
  );
}
