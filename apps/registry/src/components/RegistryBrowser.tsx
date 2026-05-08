import { BoxesIcon, FileTextIcon, SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

type BrowserEntry = {
  kind: "namespace" | "provider";
  providerPath: string;
  packageName: string;
  title: string;
  summary: string | null;
  parentProviderPath: string | null;
  docsCount: number;
  operationCount: number;
  openApiIcon: string | null;
};

type RegistryBrowserProps = {
  entries: BrowserEntry[];
};

export function RegistryBrowser({ entries }: RegistryBrowserProps) {
  const [query, setQuery] = useState("");
  const [kindFilter, setKindFilter] = useState<"all" | "provider" | "namespace">(
    "all",
  );
  const [docsOnly, setDocsOnly] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      if (kindFilter !== "all" && entry.kind !== kindFilter) {
        return false;
      }

      if (docsOnly && entry.docsCount === 0) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return [
        entry.title,
        entry.providerPath,
        entry.packageName,
        entry.parentProviderPath,
        entry.summary,
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedQuery));
    });
  }, [docsOnly, entries, kindFilter, normalizedQuery]);

  return (
    <div className="flex flex-col gap-5">
      <div className="sticky top-0 z-10 flex flex-col gap-3 rounded-xl border bg-background/90 p-3 backdrop-blur">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Search packages</span>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-9 pl-9"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="github, google/books, @utdk/openai..."
              type="search"
              value={query}
            />
          </div>
        </label>
        <div className="flex flex-wrap gap-2">
          {(["all", "provider", "namespace"] as const).map((kind) => (
            <button
              key={kind}
              className={cn(
                "inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors",
                kindFilter === kind
                  ? "border-foreground/20 bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              onClick={() => setKindFilter(kind)}
              type="button"
            >
              {kind === "all" ? "All" : kind === "provider" ? "Providers" : "Namespaces"}
            </button>
          ))}
          <button
            className={cn(
              "inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors",
              docsOnly
                ? "border-foreground/20 bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            onClick={() => setDocsOnly((active) => !active)}
            type="button"
          >
            Docs only
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEntries.map((entry) => (
          <a
            key={entry.providerPath}
            className="group block h-full rounded-xl outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
            href={withBasePath(`/packages/${entry.providerPath}`)}
          >
            <Card className="h-full py-3 transition-colors group-hover:bg-muted/30">
              <CardHeader className="gap-2 pb-0">
                <div className="flex items-center gap-2">
                  {entry.openApiIcon ? (
                    <img
                      alt={`${entry.title} logo`}
                      className="h-5 w-5 rounded object-contain"
                      loading="lazy"
                      src={entry.openApiIcon}
                    />
                  ) : null}
                  <CardTitle className="text-sm">{entry.title}</CardTitle>
                </div>
                <CardDescription className="font-mono text-[0.7rem] text-muted-foreground">
                  {entry.packageName}
                </CardDescription>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={entry.kind === "namespace" ? "secondary" : "outline"}>
                  {entry.kind}
                </Badge>
                {entry.docsCount > 0 ? (
                  <Badge variant="secondary">
                    <FileTextIcon data-icon="inline-start" />
                    {entry.docsCount} doc{entry.docsCount === 1 ? "" : "s"}
                  </Badge>
                ) : null}
                <Badge variant="outline">
                  <BoxesIcon data-icon="inline-start" />
                  {entry.operationCount} ops
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-2 pt-2">
              <p className="line-clamp-3 text-xs leading-5 text-muted-foreground">
                {entry.summary ?? "Generated UTDK package ready to browse and import."}
              </p>
              {entry.parentProviderPath ? (
                <p className="text-[0.7rem] text-muted-foreground">
                  Parent package: <span className="font-mono">{entry.parentProviderPath}</span>
                </p>
              ) : null}
            </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {!filteredEntries.length ? (
        <Card>
          <CardHeader>
            <CardTitle>No matches</CardTitle>
            <CardDescription>Try a package name, namespace, or provider path.</CardDescription>
          </CardHeader>
        </Card>
      ) : null}
    </div>
  );
}
