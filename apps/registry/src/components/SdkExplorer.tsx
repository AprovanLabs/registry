/**
 * SdkExplorer — SDK-first provider surface for package pages.
 *
 * A try-it console sits at the top (the primary interaction, not a buried
 * widget); below it, a searchable symbol index presents every operation the
 * way an editor would: `namespace.method({ params })`, syntax-accented, with
 * a play button that loads the symbol into the console.
 */

import { PlayIcon, SearchIcon } from "lucide-react";
import * as React from "react";
import { CopyButton } from "@/components/CopyButton";
import { TryItPanel } from "@/components/TryItPanel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { SdkSymbol } from "@/lib/sdk";
import { cn } from "@/lib/utils";

export interface SdkExplorerProps {
  /** Provider path used by the gateway (e.g. "github"). */
  provider: string;
  packageName: string;
  symbols: SdkSymbol[];
}

function preferredDefault(symbols: SdkSymbol[]): SdkSymbol | undefined {
  return (
    symbols.find((symbol) => symbol.httpMethod === "GET" && symbol.fields.every((f) => !f.required)) ??
    symbols.find((symbol) => symbol.httpMethod === "GET") ??
    symbols[0]
  );
}

export function SdkExplorer({ provider, packageName, symbols }: SdkExplorerProps) {
  const [query, setQuery] = React.useState("");
  const [activePath, setActivePath] = React.useState<string | undefined>(
    () => preferredDefault(symbols)?.sdkPath,
  );
  const consoleRef = React.useRef<HTMLDivElement>(null);

  const active = symbols.find((symbol) => symbol.sdkPath === activePath);

  const filtered = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      return symbols;
    }

    return symbols.filter(
      (symbol) =>
        symbol.sdkPath.toLowerCase().includes(trimmed) ||
        (symbol.summary ?? "").toLowerCase().includes(trimmed) ||
        symbol.httpPath.toLowerCase().includes(trimmed),
    );
  }, [symbols, query]);

  const grouped = React.useMemo(() => {
    const groups = new Map<string, SdkSymbol[]>();

    for (const symbol of filtered) {
      const key = symbol.namespace || "·";
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(symbol);
    }

    return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right));
  }, [filtered]);

  const activate = (sdkPath: string) => {
    setActivePath(sdkPath);
    consoleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col gap-6">
      <div ref={consoleRef} className="scroll-mt-24">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-baseline gap-2 font-mono text-base">
              <span className="text-syntax-keyword">await</span>
              {active ? (
                <span>
                  {active.namespace ? (
                    <>
                      <span className="text-syntax-type">{provider.split("/")[0]}</span>
                      <span className="text-muted-foreground">.</span>
                      <span className="text-syntax-type">{active.namespace}</span>
                      <span className="text-muted-foreground">.</span>
                    </>
                  ) : (
                    <>
                      <span className="text-syntax-type">{provider.split("/")[0]}</span>
                      <span className="text-muted-foreground">.</span>
                    </>
                  )}
                  <span className="text-syntax-fn">{active.method}</span>
                  <span className="text-muted-foreground">({active.paramsPreview})</span>
                </span>
              ) : (
                <span className="text-muted-foreground">Pick an operation below</span>
              )}
            </CardTitle>
            {active?.summary ? <CardDescription>{active.summary}</CardDescription> : null}
          </CardHeader>
          {active ? (
            <CardContent className="flex flex-col gap-4">
              <div className="rounded-xl border bg-muted/50 p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-xs font-medium text-muted-foreground">Use it as an SDK</p>
                  <CopyButton idleLabel="Copy" size="xs" text={active.snippet} />
                </div>
                <pre className="overflow-x-auto text-xs leading-5"><code>{active.snippet}</code></pre>
              </div>
              <TryItPanel
                key={active.sdkPath}
                fields={active.fields}
                operation={active.sdkPath}
                provider={provider}
              />
            </CardContent>
          ) : null}
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Functions</CardTitle>
          <CardDescription>
            {symbols.length} operations on <code className="font-mono">{packageName}</code> — search,
            hover for details, press play to try one.
          </CardDescription>
          <div className="relative mt-2">
            <SearchIcon className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-8"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search functions (name, summary, path)…"
              value={query}
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {grouped.length === 0 ? (
            <p className="text-sm text-muted-foreground">No functions match “{query}”.</p>
          ) : (
            grouped.map(([namespace, groupSymbols]) => (
              <div key={namespace}>
                {namespace !== "·" ? (
                  <p className="mb-1 font-mono text-xs font-medium text-syntax-type">
                    {namespace}
                  </p>
                ) : null}
                <ul className="divide-y rounded-xl border">
                  {groupSymbols.map((symbol) => {
                    const isActive = symbol.sdkPath === activePath;

                    return (
                      <li
                        key={symbol.sdkPath}
                        className={cn(
                          "group flex items-center gap-3 px-3 py-2 transition-colors",
                          isActive ? "bg-accent/60" : "hover:bg-muted/40",
                        )}
                      >
                        <button
                          aria-label={`Try ${symbol.sdkPath}`}
                          className="inline-flex size-6 shrink-0 items-center justify-center rounded-md border text-muted-foreground opacity-60 transition-all hover:bg-background hover:text-syntax-fn group-hover:opacity-100"
                          onClick={() => activate(symbol.sdkPath)}
                          title={`Try ${symbol.sdkPath}`}
                          type="button"
                        >
                          <PlayIcon className="size-3" />
                        </button>
                        <button
                          className="flex min-w-0 flex-1 flex-col gap-0.5 text-left"
                          onClick={() => activate(symbol.sdkPath)}
                          type="button"
                        >
                          <span className="truncate font-mono text-sm">
                            <span className="text-syntax-fn">{symbol.method}</span>
                            <span className="text-muted-foreground">
                              ({symbol.paramsPreview})
                            </span>
                          </span>
                          {symbol.summary ? (
                            <span className="truncate text-xs text-muted-foreground">
                              {symbol.summary}
                            </span>
                          ) : null}
                        </button>
                        <span
                          className="hidden shrink-0 font-mono text-[0.6rem] uppercase text-muted-foreground/70 sm:block"
                          title={`${symbol.httpMethod} ${symbol.httpPath}`}
                        >
                          {symbol.httpMethod}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
