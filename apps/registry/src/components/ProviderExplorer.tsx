/**
 * Client-side providers SPA. Browse/search from catalog/index.json; load a
 * provider's full detail (+ try-it schemas) from catalog/p/{id}.json on demand.
 * Routes via ?p=&op= so a single /providers/ shell works on S3.
 */

import type { TryItField } from "@aprovan/registry-ui";
import { BoxesIcon, SearchIcon, ZapIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { TryItPanel } from "@/components/TryItPanel";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  fetchCatalogIndex,
  fetchCatalogOps,
  fetchCatalogProvider,
  providersHref,
  type CatalogIndex,
  type CatalogIndexOperation,
  type CatalogIndexProvider,
  type CatalogOperation,
  type CatalogProviderDetail,
} from "@/lib/catalog";
import { withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils";

const METHOD_COLORS: Record<string, string> = {
  GET: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  POST: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  PUT: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  PATCH: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  DELETE: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  HEAD: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  OPTIONS: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  TRACE: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
};

function MethodBadge({ method }: { method: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-4 items-center rounded px-1 font-mono text-[0.6rem] font-medium uppercase",
        METHOD_COLORS[method] ?? "bg-muted text-muted-foreground",
      )}
    >
      {method}
    </span>
  );
}

function readRoute(): { providerPath: string | null; operationId: string | null } {
  if (typeof window === "undefined") {
    return { providerPath: null, operationId: null };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    providerPath: params.get("p"),
    operationId: params.get("op"),
  };
}

function navigate(providerPath?: string, operationId?: string): void {
  const href = providersHref(providerPath, operationId);
  window.history.pushState(null, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function toTryItFields(op: CatalogOperation): TryItField[] {
  return [
    ...op.parameters.map((param) => ({
      name: param.name,
      location: param.location,
      required: param.required,
      description: param.description,
      type: param.schema.type ?? null,
      enumValues: (param.schema.enum ?? null) as Array<string | number> | null,
      defaultValue: param.schema.default,
    })),
    ...op.requestBodyFields.map((field) => ({
      name: field.name,
      location: "body" as const,
      required: field.required,
      description: field.description,
      type: field.schema.type ?? null,
      enumValues: (field.schema.enum ?? null) as Array<string | number> | null,
      defaultValue: field.schema.default,
    })),
  ];
}

function buildSnippet(
  packageName: string,
  providerPath: string,
  op: CatalogOperation,
): string {
  const ident = providerPath
    .split("/")
    .flatMap((s) => s.split(/[^a-zA-Z0-9]+/))
    .filter(Boolean)
    .map((s, i) =>
      i === 0
        ? s.toLowerCase()
        : s[0]!.toUpperCase() + s.slice(1).toLowerCase(),
    )
    .join("");
  const required = op.parameters.filter((p) => p.required);
  const inner =
    required.length > 0
      ? ` /* ${required.map((p) => p.name).join(", ")} */ `
      : "";
  return `import ${ident || "client"} from "${packageName}";\nawait ${ident || "client"}.${op.sdkPath}({${inner}});`;
}

export function ProviderExplorer() {
  const [route, setRoute] = useState(readRoute);
  const [index, setIndex] = useState<CatalogIndex | null>(null);
  const [indexError, setIndexError] = useState<string | null>(null);
  const [detail, setDetail] = useState<CatalogProviderDetail | null>(null);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const onPop = () => setRoute(readRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void fetchCatalogIndex()
      .then((data) => {
        if (!cancelled) setIndex(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setIndexError(err instanceof Error ? err.message : "Failed to load catalog");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!route.providerPath) {
      setDetail(null);
      setDetailError(null);
      setDetailLoading(false);
      return;
    }

    let cancelled = false;
    setDetailLoading(true);
    setDetailError(null);
    void fetchCatalogProvider(route.providerPath)
      .then((data) => {
        if (!cancelled) {
          setDetail(data);
          setDetailLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setDetail(null);
          setDetailError(
            err instanceof Error ? err.message : "Failed to load provider",
          );
          setDetailLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [route.providerPath]);

  if (!route.providerPath) {
    return (
      <BrowseView
        error={indexError}
        index={index}
        onOpenOperation={(providerPath, operationId) =>
          navigate(providerPath, operationId)
        }
        onOpenProvider={(providerPath) => navigate(providerPath)}
      />
    );
  }

  if (detailLoading && !detail) {
    return (
      <p className="text-sm text-muted-foreground">Loading provider…</p>
    );
  }

  if (detailError || !detail) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm text-destructive">
          {detailError ?? "Provider not found."}
        </p>
        <button
          className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
          onClick={() => navigate()}
          type="button"
        >
          ← Back to catalog
        </button>
      </div>
    );
  }

  const operation = route.operationId
    ? detail.operations.find((op) => op.operationId === route.operationId)
    : null;

  if (route.operationId && !operation) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm text-destructive">
          Unknown operation “{route.operationId}” for {detail.title}.
        </p>
        <button
          className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
          onClick={() => navigate(detail.id)}
          type="button"
        >
          ← Back to {detail.title}
        </button>
      </div>
    );
  }

  if (operation) {
    return (
      <OperationView
        detail={detail}
        onBack={() => navigate(detail.id)}
        onSelectOp={(opId) => navigate(detail.id, opId)}
        operation={operation}
      />
    );
  }

  return (
    <ProviderView
      detail={detail}
      onBack={() => navigate()}
      onSelectOp={(opId) => navigate(detail.id, opId)}
    />
  );
}

function BrowseView({
  index,
  error,
  onOpenProvider,
  onOpenOperation,
}: {
  index: CatalogIndex | null;
  error: string | null;
  onOpenProvider: (providerPath: string) => void;
  onOpenOperation: (providerPath: string, operationId: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [operations, setOperations] = useState<CatalogIndexOperation[] | null>(
    null,
  );
  const [opsError, setOpsError] = useState<string | null>(null);
  const providers = index?.providers ?? [];
  const normalizedQuery = query.trim().toLowerCase();
  const hasQuery = normalizedQuery.length > 0;

  // Load the ops search index on first keystroke (or prefetch once typed).
  useEffect(() => {
    if (!hasQuery || operations !== null || opsError) return;
    let cancelled = false;
    void fetchCatalogOps()
      .then((data) => {
        if (!cancelled) setOperations(data.operations);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setOpsError(
            err instanceof Error ? err.message : "Failed to load ops index",
          );
        }
      });
    return () => {
      cancelled = true;
    };
  }, [hasQuery, operations, opsError]);

  const { filteredProviders, filteredOperations } = useMemo(() => {
    if (!hasQuery) {
      return {
        filteredProviders: providers,
        filteredOperations: [] as CatalogIndexOperation[],
      };
    }
    return {
      filteredProviders: providers.filter((p) =>
        [p.title, p.providerPath, p.summary]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(normalizedQuery)),
      ),
      filteredOperations: (operations ?? []).filter((op) =>
        [
          op.sdkPath,
          op.path,
          op.summary,
          op.operationId,
          op.providerTitle,
          op.providerPath,
          op.method,
        ]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(normalizedQuery)),
      ),
    };
  }, [hasQuery, normalizedQuery, providers, operations]);

  const hasResults =
    filteredProviders.length > 0 || filteredOperations.length > 0;
  const totalOps = providers.reduce((sum, p) => sum + p.operationCount, 0);

  if (error) {
    return <p className="text-sm text-destructive">{error}</p>;
  }

  if (!index) {
    return <p className="text-sm text-muted-foreground">Loading catalog…</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Badge variant="outline">{providers.length} providers</Badge>
        <Badge variant="secondary">{totalOps.toLocaleString()} tools</Badge>
      </div>

      <div className="sticky top-0 z-10 rounded-xl border bg-background/90 p-3 backdrop-blur">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Search providers and tools
          </span>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-9 pl-9"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="stripe, /v1/charges, createCustomer..."
              type="search"
              value={query}
            />
          </div>
          {hasQuery && operations === null && !opsError ? (
            <span className="text-xs text-muted-foreground">
              Loading tool index…
            </span>
          ) : null}
          {opsError ? (
            <span className="text-xs text-destructive">{opsError}</span>
          ) : null}
        </label>
      </div>

      {hasQuery && filteredOperations.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Tools ({filteredOperations.length})
          </h3>
          <div className="flex flex-col gap-1.5">
            {filteredOperations.slice(0, 30).map((op) => (
              <button
                key={`${op.providerPath}/${op.operationId}`}
                className="group flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5 text-left transition-colors hover:bg-muted/50"
                onClick={() => onOpenOperation(op.providerPath, op.operationId)}
                type="button"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-xs font-medium text-foreground">
                    {op.sdkPath}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 break-all font-mono text-[0.65rem] text-muted-foreground">
                    <MethodBadge method={op.method} />
                    {op.path}
                  </p>
                </div>
                <span className="shrink-0 rounded px-1.5 py-0.5 text-[0.65rem] text-muted-foreground ring-1 ring-foreground/10">
                  {op.providerTitle}
                </span>
              </button>
            ))}
            {filteredOperations.length > 30 ? (
              <p className="pl-1 text-xs text-muted-foreground">
                + {filteredOperations.length - 30} more — refine your query.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {filteredProviders.length > 0 ? (
        <div className="flex flex-col gap-2">
          {hasQuery ? (
            <h3 className="text-sm font-medium text-muted-foreground">
              Providers ({filteredProviders.length})
            </h3>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.providerPath}
                onOpen={() => onOpenProvider(provider.providerPath)}
                provider={provider}
              />
            ))}
          </div>
        </div>
      ) : null}

      {!hasResults ? (
        <Card>
          <CardHeader>
            <CardTitle>No matches</CardTitle>
            <CardDescription>
              Try a provider name, tool name, or operation summary.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : null}
    </div>
  );
}

function ProviderCard({
  provider,
  onOpen,
}: {
  provider: CatalogIndexProvider;
  onOpen: () => void;
}) {
  return (
    <button
      className="group block h-full rounded-xl text-left outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
      onClick={onOpen}
      type="button"
    >
      <Card className="h-full py-3 transition-colors group-hover:bg-muted/30">
        <CardHeader className="gap-2 pb-0">
          <div className="flex items-center gap-2">
            {provider.openApiIcon ? (
              <img
                alt={`${provider.title} logo`}
                className="h-5 w-5 rounded object-contain"
                loading="lazy"
                src={provider.openApiIcon}
              />
            ) : null}
            <CardTitle className="text-sm">{provider.title}</CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="outline">
              <BoxesIcon data-icon="inline-start" />
              {provider.operationCount} ops
            </Badge>
            {provider.scorecardDomain !== null ? (
              <Badge
                variant={
                  provider.scorecardDomain >= 90
                    ? "default"
                    : provider.scorecardDomain >= 60
                      ? "secondary"
                      : "outline"
                }
              >
                <ZapIcon data-icon="inline-start" />
                {provider.scorecardDomain}
              </Badge>
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
            {provider.summary ?? "Browse tools and try operations."}
          </p>
        </CardContent>
      </Card>
    </button>
  );
}

function ProviderView({
  detail,
  onBack,
  onSelectOp,
}: {
  detail: CatalogProviderDetail;
  onBack: () => void;
  onSelectOp: (operationId: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <Breadcrumb
        crumbs={[
          { label: "Providers", onClick: onBack },
          { label: detail.title },
        ]}
      />

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            {detail.icon ? (
              <img
                alt={`${detail.title} logo`}
                className="h-8 w-8 rounded object-contain"
                src={detail.icon}
              />
            ) : null}
            <CardTitle className="text-2xl">{detail.title}</CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{detail.packageName}</Badge>
            <Badge variant="outline">{detail.operations.length} operations</Badge>
            {detail.scorecardDomain !== null ? (
              <Badge variant="secondary">Score: {detail.scorecardDomain}</Badge>
            ) : null}
          </div>
          {detail.description ? (
            <CardDescription className="text-sm leading-6">
              {detail.description}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <SnippetBlock label="Import" text={detail.importSample} />
            {detail.createClientSample ? (
              <SnippetBlock label="Factory" text={detail.createClientSample} />
            ) : null}
          </div>
          <a
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            href={withBasePath(`/packages/${detail.id}`)}
          >
            Package docs →
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tools</CardTitle>
          <CardDescription>
            All {detail.operations.length} operations — open one to try it.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex max-h-[70vh] flex-col gap-0 overflow-y-auto p-0 pb-1">
          {detail.operations.length === 0 ? (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              No operations found.
            </p>
          ) : (
            detail.operations.map((op) => (
              <button
                key={op.operationId}
                className="group flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-muted/50"
                onClick={() => onSelectOp(op.operationId)}
                type="button"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-xs font-medium text-foreground">
                    {op.sdkPath}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 break-all font-mono text-[0.65rem] text-muted-foreground">
                    <MethodBadge method={op.httpMethod} />
                    {op.httpPath}
                  </p>
                </div>
                {op.tags[0] ? (
                  <span className="shrink-0 rounded px-1.5 py-0.5 text-[0.65rem] text-muted-foreground ring-1 ring-foreground/10">
                    {op.tags[0]}
                  </span>
                ) : null}
              </button>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function OperationView({
  detail,
  operation,
  onBack,
  onSelectOp,
}: {
  detail: CatalogProviderDetail;
  operation: CatalogOperation;
  onBack: () => void;
  onSelectOp: (operationId: string) => void;
}) {
  const fields = toTryItFields(operation);
  const snippet = buildSnippet(detail.packageName, detail.id, operation);
  const sameTagOps = operation.tags.length
    ? detail.operations
        .filter(
          (op) =>
            op.operationId !== operation.operationId &&
            op.tags.some((t) => operation.tags.includes(t)),
        )
        .slice(0, 10)
    : [];

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <Breadcrumb
        crumbs={[
          { label: "Providers", onClick: () => navigate() },
          { label: detail.title, onClick: onBack },
          { label: operation.sdkPath },
        ]}
      />

      <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden xl:block">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Operations</CardTitle>
              <CardDescription>
                {detail.operations.length} in {detail.title}.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex max-h-[600px] flex-col gap-0.5 overflow-y-auto">
              {detail.operations.map((op) => {
                const active = op.operationId === operation.operationId;
                return (
                  <button
                    key={op.operationId}
                    className={cn(
                      "rounded-lg px-2.5 py-2 text-left text-xs transition-colors",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={() => onSelectOp(op.operationId)}
                    type="button"
                  >
                    <span className="block font-mono">{op.operationId}</span>
                    {op.summary ? (
                      <span className="block truncate opacity-70">
                        {op.summary}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </aside>

        <section className="flex min-w-0 flex-col gap-6">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">
                  <span className="font-mono">{detail.packageName}</span>
                </Badge>
                {operation.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <span className="flex items-center gap-1.5 rounded border border-border px-2 py-0.5 text-xs">
                  <MethodBadge method={operation.httpMethod} />
                  <code className="break-all font-mono text-xs text-muted-foreground">
                    {operation.httpPath}
                  </code>
                </span>
              </div>
              <CardTitle className="text-2xl font-semibold">
                {operation.summary ?? operation.sdkPath}
              </CardTitle>
              {operation.description ? (
                <CardDescription className="leading-6">
                  {operation.description}
                </CardDescription>
              ) : null}
            </CardHeader>
            {(operation.parameters.length > 0 ||
              operation.requestBodyFields.length > 0) && (
              <CardContent>
                <dl className="grid gap-2 sm:grid-cols-2">
                  {operation.parameters.map((param) => (
                    <div
                      key={`${param.location}:${param.name}`}
                      className="rounded-lg border bg-muted/30 p-3"
                    >
                      <dt className="flex flex-wrap items-center gap-1.5 font-mono text-sm font-medium">
                        {param.name}
                        <Badge
                          className="font-mono text-[0.65rem]"
                          variant="secondary"
                        >
                          {param.location}
                        </Badge>
                        {param.required ? (
                          <Badge
                            className="text-[0.65rem]"
                            variant="destructive"
                          >
                            required
                          </Badge>
                        ) : null}
                      </dt>
                      {param.description ? (
                        <dd className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {param.description}
                        </dd>
                      ) : null}
                    </div>
                  ))}
                  {operation.requestBodyFields.map((field) => (
                    <div
                      key={`body:${field.name}`}
                      className="rounded-lg border bg-muted/30 p-3"
                    >
                      <dt className="flex flex-wrap items-center gap-1.5 font-mono text-sm font-medium">
                        {field.name}
                        <Badge
                          className="font-mono text-[0.65rem]"
                          variant="secondary"
                        >
                          body
                        </Badge>
                        {field.required ? (
                          <Badge
                            className="text-[0.65rem]"
                            variant="destructive"
                          >
                            required
                          </Badge>
                        ) : null}
                      </dt>
                      {field.description ? (
                        <dd className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {field.description}
                        </dd>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </CardContent>
            )}
          </Card>

          <SnippetBlock label="TypeScript snippet" text={snippet} />

          <div>
            <h2 className="mb-4 text-xl font-semibold tracking-tight">Try it</h2>
            <TryItPanel
              fields={fields}
              operation={operation.sdkPath}
              provider={detail.id}
            />
          </div>

          {sameTagOps.length > 0 ? (
            <Card size="sm">
              <CardHeader>
                <CardTitle>Related</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-0.5">
                {sameTagOps.map((op) => (
                  <button
                    key={op.operationId}
                    className="rounded-lg px-2.5 py-2 text-left text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => onSelectOp(op.operationId)}
                    type="button"
                  >
                    <span className="block font-mono">{op.operationId}</span>
                    {op.summary ? (
                      <span className="block truncate opacity-70">
                        {op.summary}
                      </span>
                    ) : null}
                  </button>
                ))}
              </CardContent>
            </Card>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function SnippetBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border bg-muted/50 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{label}</p>
        <CopyButton idleLabel="Copy" size="xs" text={text} />
      </div>
      <pre className="overflow-x-auto break-all rounded-lg bg-background p-3 text-xs leading-5">
        <code>{text}</code>
      </pre>
    </div>
  );
}

function Breadcrumb({
  crumbs,
}: {
  crumbs: Array<{ label: string; onClick?: () => void }>;
}) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {crumbs.map((crumb, i) => (
        <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
          {i > 0 ? <span>/</span> : null}
          {crumb.onClick ? (
            <button
              className="transition-colors hover:text-foreground"
              onClick={crumb.onClick}
              type="button"
            >
              {crumb.label}
            </button>
          ) : (
            <span className="font-medium text-foreground">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
