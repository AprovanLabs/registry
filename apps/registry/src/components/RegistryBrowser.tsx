import { BoxesIcon, FileTextIcon, SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { CopyButton } from "@/components/CopyButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
};

type RegistryBrowserProps = {
  entries: BrowserEntry[];
};

export function RegistryBrowser({ entries }: RegistryBrowserProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredEntries = useMemo(() => {
    if (!normalizedQuery) {
      return entries;
    }

    return entries.filter((entry) =>
      [
        entry.title,
        entry.providerPath,
        entry.packageName,
        entry.parentProviderPath,
        entry.summary,
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedQuery)),
    );
  }, [entries, normalizedQuery]);

  return (
    <div className="flex flex-col gap-5">
      <div className="sticky top-0 z-10 rounded-xl border bg-background/90 p-3 backdrop-blur">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Search packages</span>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="github, google/books, @utdk/openai..."
              type="search"
              value={query}
            />
          </div>
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredEntries.map((entry) => (
          <Card key={entry.providerPath} className="h-full">
            <CardHeader>
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
              <CardTitle>{entry.title}</CardTitle>
              <CardDescription className="font-mono text-xs text-muted-foreground">
                {entry.packageName}
              </CardDescription>
              <CardAction className="hidden md:block">
                <CopyButton idleLabel="Copy name" text={entry.packageName} />
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <p className="text-sm leading-6 text-muted-foreground">
                {entry.summary ?? "Generated UTDK package ready to browse and import."}
              </p>
              {entry.parentProviderPath ? (
                <p className="text-xs text-muted-foreground">
                  Parent package: <span className="font-mono">{entry.parentProviderPath}</span>
                </p>
              ) : null}
            </CardContent>
            <CardFooter className="justify-between gap-3">
              <a
                className="inline-flex h-7 items-center rounded-lg border border-border px-2.5 text-[0.8rem] font-medium transition-colors hover:bg-muted"
                href={withBasePath(`/packages/${entry.providerPath}`)}
              >
                Open package
              </a>
              <CopyButton className="md:hidden" idleLabel="Copy" size="xs" text={entry.packageName} />
            </CardFooter>
          </Card>
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
