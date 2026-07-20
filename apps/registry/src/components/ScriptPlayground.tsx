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
import {
  DependencyPanel,
  type ProviderCatalogInfo,
} from "@aprovan/registry-ui/dependency-panel";
import {
  INITIAL_RUN,
  reduceRunEvent,
  RunView,
  runViewFromRuntimeEvents,
  type RunState,
} from "@aprovan/registry-ui/run-view";
import { createGatewayClient } from "@aprovan/ui/gateway";
import { PlayIcon, SquareIcon } from "lucide-react";
import * as React from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAccessToken, getAuthenticatedUser, isAuthConfigured, signIn } from "@/lib/auth";
import {
  fetchCatalogProviders,
  fetchProviderTypes,
  type ProviderTypesBundle,
} from "@/lib/catalog";
import { loadSession } from "@/lib/gateway";
import {
  BUILTIN_BY_ID,
  BUILTIN_NAMESPACES,
  compileScript,
  detectDependencies,
  SAMPLE_SCRIPT,
  synthesizeWorkflowImports,
} from "@/lib/playground";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";

/**
 * The TypeScript-aware editor pulls the `typescript` package into the page;
 * lazy-load it and keep the lightweight highlighted textarea as the fallback
 * so the playground is usable immediately.
 */
const TsScriptEditor = React.lazy(() =>
  import("@aprovan/registry-ui/editor").then((module) => ({
    default: module.TsScriptEditor,
  })),
);

type AuthState = "unknown" | "signed-out" | "ready";

/** Loading state for a workspace file passed via `?file=<path>`. */
type FileLoad =
  | { status: "idle" }
  | { status: "loading"; path: string }
  | { status: "loaded"; path: string }
  | { status: "error"; path: string; message: string };

export function ScriptPlayground() {
  // `?file=<workspace path>` (e.g. the workflows panel's "script" button)
  // opens that file instead of the sample — the sample never shows in that
  // flow, even while loading or on error.
  const requestedFile = React.useMemo(
    () =>
      typeof window === "undefined"
        ? null
        : new URLSearchParams(window.location.search).get("file"),
    [],
  );
  const [source, setSource] = React.useState(requestedFile ? "" : SAMPLE_SCRIPT);
  const [fileLoad, setFileLoad] = React.useState<FileLoad>(
    requestedFile ? { status: "loading", path: requestedFile } : { status: "idle" },
  );
  const [inputsJson, setInputsJson] = React.useState(
    '{ "username": "octocat" }',
  );
  const [authState, setAuthState] = React.useState<AuthState>("unknown");
  const [run, setRun] = React.useState<RunState>(INITIAL_RUN);
  const [compileError, setCompileError] = React.useState<string | null>(null);
  const [catalog, setCatalog] = React.useState<
    Record<string, ProviderCatalogInfo> | undefined
  >();
  const [extraTypeFiles, setExtraTypeFiles] = React.useState<
    Record<string, string>
  >({});
  const sandboxRef = React.useRef<SandboxRun | null>(null);
  // Per-provider type-bundle cache; null marks "no generated types".
  const typeBundlesRef = React.useRef(
    new Map<string, ProviderTypesBundle | null>(),
  );

  // Built-in namespaces (core services, interfaces, chat aliases) are always
  // in the catalog map so the dependency panel labels them instead of
  // "unregistered" — registry packages merge in when the fetch lands.
  const builtinCatalog = React.useMemo(
    () =>
      Object.fromEntries(
        BUILTIN_NAMESPACES.map((ns) => [ns.id, { title: ns.label, typed: true }]),
      ),
    [],
  );

  const catalogRef = React.useRef<Record<string, ProviderCatalogInfo>>(builtinCatalog);

  React.useEffect(() => {
    setCatalog(builtinCatalog);
    fetchCatalogProviders()
      .then((providers) => {
        const merged = {
          ...builtinCatalog,
          ...Object.fromEntries(
            providers.map((provider) => [
              provider.id,
              {
                title: provider.title,
                icon: provider.icon ?? undefined,
                site: provider.site ?? undefined,
                originDomain: provider.originDomain ?? undefined,
                originSpecUrl: provider.originSpecUrl ?? undefined,
                authMethods: provider.auth.declared
                  ? provider.auth.methods
                  : undefined,
              },
            ]),
          ),
        };
        catalogRef.current = merged;
        setCatalog(merged);
        // A file loaded before the catalog arrived may gain imports for
        // registry packages it uses (github, …) now that they're known.
        setSource((current) => synthesizeWorkflowImports(current, Object.keys(merged)));
      })
      .catch(() => {
        // Panel degrades to "unregistered" rows without catalog data.
      });
  }, [builtinCatalog]);

  // Fetch the requested file once auth has settled: firing at mount races
  // the OIDC client's session restore, the read 401s, and the flow lands on
  // the wrong content.
  React.useEffect(() => {
    const path = requestedFile;
    if (!path) return;
    // Wait for session restore, then attempt regardless of sign-in state —
    // the gateway decides whether the read needs a token (local dev runs
    // open); a 401 surfaces as a sign-in hint below.
    if (isAuthConfigured() && authState === "unknown") return;
    let cancelled = false;
    setFileLoad({ status: "loading", path });
    const client = createGatewayClient({
      baseUrl: gatewayBaseUrl(),
      getToken: getAccessToken,
    });
    client
      .request<{ data?: { content?: unknown } }>("/tools/vfs/read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ args: { path } }),
      })
      .then((result) => {
        if (cancelled) return;
        const content = result.data?.content;
        if (typeof content === "string") {
          // Raw workflow scripts use bare namespace globals; the playground
          // compiles imports into sandbox bindings, so synthesize them from
          // usage (also lights up editor types for each namespace).
          setSource(synthesizeWorkflowImports(content, Object.keys(catalogRef.current)));
          setFileLoad({ status: "loaded", path });
        } else {
          setFileLoad({
            status: "error",
            path,
            message: "The file has no readable text content.",
          });
        }
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : "Request failed";
        setFileLoad({
          status: "error",
          path,
          message: /401|unauthorized/iu.test(message)
            ? "Sign in to load workspace files"
            : message,
        });
      });
    return () => {
      cancelled = true;
    };
  }, [requestedFile, authState]);

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

  // Mount real provider types for every import (registry's answer to
  // automatic type acquisition). Bundles land at
  // /node_modules/@utdk/<provider>/…; bare-name imports get a one-line
  // alias module. Providers without bundles keep the ambient `any` fallback.
  React.useEffect(() => {
    let cancelled = false;
    const providers = [...new Set(dependencies.map((dep) => dep.provider))];
    void Promise.all(
      providers.map(async (provider) => {
        // Built-in namespaces ship their types inline — nothing to fetch.
        if (BUILTIN_BY_ID.has(provider)) return [provider, null] as const;
        if (!typeBundlesRef.current.has(provider)) {
          typeBundlesRef.current.set(
            provider,
            await fetchProviderTypes(provider).catch(() => null),
          );
        }
        return [provider, typeBundlesRef.current.get(provider) ?? null] as const;
      }),
    ).then((bundles) => {
      if (cancelled) return;
      const files: Record<string, string> = {};
      for (const dependency of dependencies) {
        const builtin = BUILTIN_BY_ID.get(dependency.provider);
        if (builtin) {
          files[`/node_modules/${dependency.specifier}/index.d.ts`] = builtin.types;
          continue;
        }
        const bundle = bundles.find(([p]) => p === dependency.provider)?.[1];
        if (!bundle) continue;
        for (const [relative, content] of Object.entries(bundle.files)) {
          files[`/node_modules/${bundle.module}/${relative}`] = content;
        }
        if (dependency.specifier !== bundle.module) {
          files[`/node_modules/${dependency.specifier}/index.d.ts`] =
            `export * from "${bundle.module}";\n` +
            `export { default } from "${bundle.module}";\n`;
        }
      }
      setExtraTypeFiles((previous) => {
        const prevKeys = Object.keys(previous);
        const nextKeys = Object.keys(files);
        const unchanged =
          prevKeys.length === nextKeys.length &&
          nextKeys.every((key) => previous[key] === files[key]);
        return unchanged ? previous : files;
      });
    });
    return () => {
      cancelled = true;
    };
  }, [dependencies]);

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
          <DependencyPanel
            catalog={catalog}
            className="mt-1"
            dependencies={dependencies}
            registryBaseUrl={withBasePath("/").replace(/\/$/, "")}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {fileLoad.status === "loading" && (
            <p className="text-xs text-muted-foreground">
              Loading <code className="font-mono">{fileLoad.path}</code> from your
              workspace…
            </p>
          )}
          {fileLoad.status === "loaded" && (
            <p className="text-xs text-muted-foreground">
              Editing workspace file <code className="font-mono">{fileLoad.path}</code>{" "}
              (changes here run in the sandbox only — they are not saved back).
            </p>
          )}
          {fileLoad.status === "error" && (
            <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-3 py-2 text-xs text-destructive">
              Couldn&apos;t load <code className="font-mono">{fileLoad.path}</code>{" "}
              from your workspace: {fileLoad.message}.
            </p>
          )}
          <React.Suspense
            fallback={
              <CodeEditor ariaLabel="Script source" onChange={setSource} value={source} />
            }
          >
            <TsScriptEditor
              ariaLabel="Script source"
              className="w-full overflow-hidden rounded-lg border border-input focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50"
              extraFiles={extraTypeFiles}
              onChange={setSource}
              value={source}
            />
          </React.Suspense>
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
          <RunView model={runViewFromRuntimeEvents(run)} />
        </CardContent>
      </Card>
    </div>
  );
}
