/**
 * ScriptPlayground — write a script against `@utdk/*` providers and run it in
 * the browser sandbox.
 *
 * The script executes inside a sandboxed iframe; every namespaced call crosses
 * the iframe boundary and is dispatched by `@utdk/remote`. Where it goes
 * depends on the call:
 *
 *  - a credential-free operation (see `lib/credential-free.ts`) is fetched
 *    straight from the browser against the provider's public API. That is what
 *    lets a signed-out visitor click Run and get real data.
 *  - anything else goes to the gateway, which injects the workspace credential
 *    server-side and therefore needs a session.
 *
 * The sign-in gate is per-namespace, not per-run: it appears only when the
 * script actually reaches for something that needs a credential.
 */

import { CodeEditor } from "@aprovan/editor";
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
import { StateEffect } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import {
  instrument,
  TransportError,
  withPolicy,
  type RuntimeEvent,
  type Transport,
  type TransportCallOptions,
} from "@utdk/remote";
import { PlayIcon, SquareIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  fetchCatalogProviders,
  fetchProviderTypes,
  type ProviderTypesBundle,
} from "@/lib/catalog";
import {
  namespacesNeedingCredentials,
  routeKey,
} from "@/lib/credential-free";
import {
  createRoutingTransport,
  fetchCredentialFreeRoutes,
  type CredentialFreeRoutes,
} from "@/lib/direct-dispatch";
import {
  createPlaygroundGatewayClient,
  LOCAL_AUTH_SENTINEL,
  loadSession,
} from "@/lib/gateway-session";
import {
  BUILTIN_NAMESPACES,
  compileScript,
  detectDependencies,
  SAMPLE_SCRIPT,
  synthesizeWorkflowImports,
} from "@/lib/playground";
import { mountReferencedProviderTypes } from "@/lib/provider-types";
import {
  runScriptInSandbox,
  type SandboxRun,
} from "@/lib/sandbox";
import { resolveSessionMode } from "@/lib/session";
import { withBasePath } from "@/lib/site";

/** Sandbox transport backed by the mode-aware playground gateway client (Try-It parity). */
function createPlaygroundTransport(): Transport {
  const client = createPlaygroundGatewayClient();
  return {
    async call(provider, operation, args, _options?: TransportCallOptions) {
      try {
        const response = await client.callTool<{ data?: unknown }>(
          provider,
          operation,
          { args },
        );
        return response && typeof response === "object" && "data" in response
          ? response.data
          : response;
      } catch (error) {
        throw new TransportError(
          error instanceof Error ? error.message : String(error),
        );
      }
    },
  };
}

function formatNamespaces(namespaces: string[]): string {
  const labels = namespaces.map((namespace) => `tools.${namespace}`);
  if (labels.length === 1) return labels[0]!;
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels.at(-1)}`;
}

/**
 * Sign-in requirement for the namespaces this run needs a credential for.
 * Null when the run is fully credential-free — the whole point: the sample
 * script must never see a sign-in wall.
 */
function credentialSessionError(namespaces: string[]): string | null {
  if (namespaces.length === 0) return null;
  if (resolveSessionMode() !== "hosted") return null;

  const session = loadSession();
  const subject = formatNamespaces(namespaces);
  const verb = namespaces.length === 1 ? "needs" : "need";

  if (!session?.token || session.token === LOCAL_AUTH_SENTINEL) {
    return `${subject} ${verb} a saved credential — sign in to run this script. Public, credential-free calls (like the GitHub sample) run without an account.`;
  }
  if (!session.workspaceId) {
    return `Select a workspace to supply credentials for ${subject}.`;
  }
  return null;
}

/**
 * Turn on soft wrapping in whichever CodeMirror editor mounts inside `host`.
 *
 * `TsScriptEditor` ships its extension list inside `@aprovan/registry-ui` and
 * exposes no hook for adding to it, so the extension is appended from here
 * once the view exists. Without it a long line makes `.cm-content` wider than
 * its container — at 375px the sample script measured 802px, overflowing the
 * gutter and scrolling the page sideways. Re-applies whenever the editor
 * remounts (e.g. the Suspense fallback swapping for the real editor).
 */
function useEditorLineWrapping(host: React.RefObject<HTMLElement | null>): void {
  React.useEffect(() => {
    const node = host.current;
    if (!node) return;

    const applied = new WeakSet<EditorView>();
    const apply = () => {
      for (const element of node.querySelectorAll<HTMLElement>(".cm-editor")) {
        const view = EditorView.findFromDOM(element);
        if (!view || applied.has(view)) continue;
        applied.add(view);
        view.dispatch({
          effects: StateEffect.appendConfig.of(EditorView.lineWrapping),
        });
      }
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(node, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [host]);
}

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

export function ScriptPlayground() {
  const [source, setSource] = React.useState(SAMPLE_SCRIPT);
  const [inputsJson, setInputsJson] = React.useState(
    '{ "username": "octocat" }',
  );
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
  // Credential-free routing table, fetched once. `start` awaits the promise
  // rather than reading a state snapshot so a Run click that lands before the
  // table arrives still routes correctly instead of demanding a sign-in.
  const [routesPromise] = React.useState<Promise<CredentialFreeRoutes>>(() =>
    fetchCredentialFreeRoutes(),
  );
  const editorHostRef = React.useRef<HTMLDivElement | null>(null);

  useEditorLineWrapping(editorHostRef);

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
        setSource((current) => synthesizeWorkflowImports(current, Object.keys(merged)));
      })
      .catch(() => {
        // Panel degrades to "unregistered" rows without catalog data.
      });
  }, [builtinCatalog]);

  React.useEffect(() => {
    return () => sandboxRef.current?.dispose();
  }, []);

  const { dependencies } = React.useMemo(() => {
    try {
      return detectDependencies(source);
    } catch {
      return { dependencies: [] };
    }
  }, [source]);

  // Mount real provider types for every import (registry's answer to
  // automatic type acquisition). Bundles land at
  // /node_modules/@utdk/<provider>/…; bare-name imports get a one-line
  // alias module. Providers without bundles keep the ambient `any` fallback.
  // Driven by source references only — the full catalogue is never fetched.
  React.useEffect(() => {
    let cancelled = false;
    const providers = [...new Set(dependencies.map((dep) => dep.provider))];
    void mountReferencedProviderTypes({
      providers,
      fetchBundle: async (provider) => {
        if (!typeBundlesRef.current.has(provider)) {
          typeBundlesRef.current.set(
            provider,
            await fetchProviderTypes(provider).catch(() => null),
          );
        }
        return typeBundlesRef.current.get(provider) ?? null;
      },
    }).then(({ files }) => {
      if (cancelled) return;
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

  const start = async () => {
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
    // Gate on what this script actually needs, not on "is anyone signed in".
    // Every call the scanner can pin to a credential-free route runs in the
    // browser; only the rest requires a session, and the message says which
    // namespace forced it.
    const activeRoutes = await routesPromise;
    const credentialNamespaces = namespacesNeedingCredentials(
      compiled.body,
      (provider, operation) => activeRoutes.has(routeKey(provider, operation)),
      compiled.dependencies.map((dependency) => dependency.provider),
    );
    const sessionError = credentialSessionError(credentialNamespaces);
    if (sessionError) {
      setCompileError(sessionError);
      return;
    }
    setCompileError(null);
    setRun({ events: [], running: true, startTs: Date.now() });

    const onEvent = (event: RuntimeEvent) => {
      setRun((previous) => reduceRunEvent(previous, event));
    };

    const transport = instrument(
      withPolicy(
        createRoutingTransport({
          routes: activeRoutes,
          gateway: createPlaygroundTransport(),
          credentialGuard: (provider) => credentialSessionError([provider]),
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
    <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle className="font-mono text-base">Script</CardTitle>
          <CardDescription>
            Scripts call providers through the global tools root. Public,
            credential-free operations run straight from your browser — no
            account needed. Calls that need a saved credential are proxied
            through the gateway;{" "}
            <a
              className="font-medium underline underline-offset-2 hover:text-foreground"
              href="https://aprovan.com/chat/?native=playground"
            >
              open the playground in the product app
            </a>{" "}
            for those.
          </CardDescription>
          <DependencyPanel
            catalog={catalog}
            className="mt-1"
            dependencies={dependencies}
            registryBaseUrl={withBasePath("/").replace(/\/$/, "")}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="min-w-0" ref={editorHostRef}>
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
          </div>
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
            <Button
              disabled={run.running}
              onClick={() => {
                void start();
              }}
              type="button"
            >
              <PlayIcon className="size-3.5" />
              {run.running ? "Running…" : "Run in sandbox"}
            </Button>
            {run.running && (
              <Button onClick={stop} size="sm" type="button" variant="outline">
                <SquareIcon className="size-3" />
                Stop
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="min-w-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            Live execution
            {run.running && (
              <span className="size-2 animate-pulse rounded-full bg-syntax-fn" title="running" />
            )}
          </CardTitle>
          <CardDescription>
            Every provider call as a span — latency, retries, logs, straight from
            the runtime event stream, whether it went direct or through the
            gateway.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <RunView model={runViewFromRuntimeEvents(run)} />
        </CardContent>
      </Card>
    </div>
  );
}
