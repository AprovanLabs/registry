import { BoxesIcon, SearchIcon, ZapIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils";

export type ProviderSearchEntry = {
  providerPath: string;
  title: string;
  summary: string | null;
  openApiIcon: string | null;
  operationCount: number;
  scorecardDomain: number | null;
};

export type OperationSearchEntry = {
  providerPath: string;
  providerTitle: string;
  operationId: string;
  sdkPath: string;
  method: string;
  path: string;
  summary: string | null;
};

type ProvidersGridProps = {
  providers: ProviderSearchEntry[];
  operations: OperationSearchEntry[];
};

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
  const colorClass = METHOD_COLORS[method] ?? "bg-muted text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex h-4 items-center rounded px-1 font-mono text-[0.6rem] font-medium uppercase",
        colorClass,
      )}
    >
      {method}
    </span>
  );
}

export function ProvidersGrid({ providers, operations }: ProvidersGridProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const { filteredProviders, filteredOperations, hasQuery } = useMemo(() => {
    const hasQuery = normalizedQuery.length > 0;

    if (!hasQuery) {
      return { filteredProviders: providers, filteredOperations: [], hasQuery };
    }

    const filteredProviders = providers.filter((p) =>
      [p.title, p.providerPath, p.summary]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery)),
    );

    const filteredOperations = operations.filter((op) =>
      [op.sdkPath, op.path, op.summary, op.operationId, op.providerTitle, op.providerPath, op.method]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(normalizedQuery)),
    );

    return { filteredProviders, filteredOperations, hasQuery };
  }, [normalizedQuery, providers, operations]);

  const hasResults = filteredProviders.length > 0 || filteredOperations.length > 0;

  return (
    <div className="flex flex-col gap-5">
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
        </label>
      </div>

      {hasQuery && filteredOperations.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Tools ({filteredOperations.length})
          </h3>
          <div className="flex flex-col gap-1.5">
            {filteredOperations.slice(0, 30).map((op) => (
              <a
                key={`${op.providerPath}/${op.operationId}`}
                className="group flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5 transition-colors hover:bg-muted/50"
                href={withBasePath(`/providers/${op.providerPath}/${op.operationId}`)}
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-xs font-medium text-foreground">{op.sdkPath}</p>
                  <p className="mt-0.5 flex items-center gap-1 truncate font-mono text-[0.65rem] text-muted-foreground">
                    <MethodBadge method={op.method} />
                    {op.path}
                  </p>
                </div>
                <span className="shrink-0 rounded px-1.5 py-0.5 text-[0.65rem] text-muted-foreground ring-1 ring-foreground/10">
                  {op.providerTitle}
                </span>
              </a>
            ))}
            {filteredOperations.length > 30 ? (
              <p className="pl-1 text-xs text-muted-foreground">
                + {filteredOperations.length - 30} more — refine your query to narrow results.
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
              <a
                key={provider.providerPath}
                className="group block h-full rounded-xl outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                href={withBasePath(`/providers/${provider.providerPath}`)}
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
                      {provider.summary ?? "Browse tools and copy TypeScript import snippets."}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {!hasResults ? (
        <Card>
          <CardHeader>
            <CardTitle>No matches</CardTitle>
            <div className="text-sm text-muted-foreground">
              Try a provider name, tool name, or operation summary.
            </div>
          </CardHeader>
        </Card>
      ) : null}
    </div>
  );
}
