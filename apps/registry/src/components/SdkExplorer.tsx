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
import { HighlightedCode } from "@aprovan/editor";
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

function schemaTypeLabel(schema: unknown): string {
  if (!schema || typeof schema !== "object") {
    return "no body";
  }
  const record = schema as Record<string, unknown>;
  if (typeof record.$ref === "string") {
    return record.$ref.replace(/^#\/components\/schemas\//, "");
  }
  const type = typeof record.type === "string" ? record.type : null;
  const format = typeof record.format === "string" ? record.format : null;
  if (type) {
    return format ? `${type} (${format})` : type;
  }
  if (record.properties) {
    return "object";
  }
  if (record.items) {
    return "array";
  }
  return "unknown";
}

function sortStatusCodes(statuses: string[]): string[] {
  return [...statuses].sort((left, right) => {
    const leftNum = Number.parseInt(left, 10);
    const rightNum = Number.parseInt(right, 10);
    const leftIsNum = !Number.isNaN(leftNum);
    const rightIsNum = !Number.isNaN(rightNum);
    if (leftIsNum && rightIsNum) return leftNum - rightNum;
    if (leftIsNum) return -1;
    if (rightIsNum) return 1;
    return left.localeCompare(right);
  });
}

function SymbolReturnsSection({ symbol }: { symbol: SdkSymbol }) {
  const statuses = sortStatusCodes(Object.keys(symbol.outputs));

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-muted/30 p-4">
      <div>
        <p className="text-sm font-medium">Returns</p>
        <p className="text-xs text-muted-foreground">
          Per-status response shapes from the upstream OpenAPI specification.
        </p>
      </div>
      {symbol.responseUnknown ? (
        <p className="text-sm text-muted-foreground">
          Upstream spec declares no <code className="font-mono text-xs">responses</code>{" "}
          object — return type coverage is unknown for this operation.
        </p>
      ) : statuses.length === 0 ? (
        <p className="text-sm text-muted-foreground">No response entries declared.</p>
      ) : (
        statuses.map((status) => {
          const output = symbol.outputs[status]!;
          const schemaJson =
            output.schema && typeof output.schema === "object"
              ? JSON.stringify(output.schema, null, 2)
              : null;
          const truncated =
            schemaJson && schemaJson.length > 1200
              ? `${schemaJson.slice(0, 1200)}\n…`
              : schemaJson;

          return (
            <div key={status} className="rounded-lg border bg-background p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border px-1.5 py-0.5 font-mono text-[0.65rem]">
                  {status}
                </span>
                <span className="font-mono text-xs text-syntax-type">
                  {schemaTypeLabel(output.schema)}
                </span>
              </div>
              {output.description ? (
                <p className="mt-2 text-xs text-muted-foreground">{output.description}</p>
              ) : null}
              {truncated ? (
                <pre className="mt-2 max-h-48 overflow-auto rounded-md bg-muted/50 p-2 text-[0.65rem] leading-5">
                  <code>{truncated}</code>
                </pre>
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
}

export interface SdkExplorerProps {
  /** Provider path used by the gateway (e.g. "github"). */
  provider: string;
  packageName: string;
  symbols: SdkSymbol[];
}

/**
 * Hover card exploring a symbol's typed signature — every input field with
 * its type, requiredness, and doc line. Pure CSS reveal (group-hover) so it
 * works without portals inside the scrolling list.
 */
function TypeHoverCard({ symbol }: { symbol: SdkSymbol }) {
  return (
    <div className="absolute left-8 top-full z-30 mt-1 hidden w-max max-w-md rounded-xl border bg-popover p-3 shadow-lg group-hover:block">
      <p className="mb-2 font-mono text-xs">
        <span className="text-syntax-fn">{symbol.method}</span>
        <span className="text-muted-foreground">(</span>
        {symbol.fields.length > 0 ? (
          <span className="text-muted-foreground">{"{ … }"}</span>
        ) : null}
        <span className="text-muted-foreground">)</span>
      </p>
      {symbol.fields.length === 0 ? (
        <p className="text-xs text-muted-foreground">No inputs.</p>
      ) : (
        <ul className="flex max-h-64 flex-col gap-1.5 overflow-y-auto">
          {symbol.fields.map((field) => (
            <li className="font-mono text-xs" key={`${field.location}:${field.name}`}>
              <span>{field.name}</span>
              {!field.required && <span className="text-muted-foreground">?</span>}
              <span className="text-muted-foreground">: </span>
              <span className="text-syntax-type">
                {field.enumValues && field.enumValues.length > 0
                  ? field.enumValues.slice(0, 4).map((v) => JSON.stringify(v)).join(" | ") +
                    (field.enumValues.length > 4 ? " | …" : "")
                  : (field.type ?? "string")}
              </span>
              {field.description ? (
                <span className="ml-1.5 font-sans text-muted-foreground">
                  — {field.description.length > 80
                    ? `${field.description.slice(0, 80)}…`
                    : field.description}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 break-all border-t pt-2 font-mono text-[0.65rem] uppercase text-muted-foreground/70">
        {symbol.httpMethod} {symbol.httpPath}
      </p>
    </div>
  );
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
    <div className="flex min-w-0 flex-col gap-6">
      <div ref={consoleRef} className="scroll-mt-24">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-baseline gap-2 font-mono text-base">
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
              <div className="p-3 border rounded-xl bg-muted/50">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-xs font-medium text-muted-foreground">Import and Run</p>
                  <CopyButton idleLabel="Copy" size="xs" text={active.snippet} />
                </div>
                <div className="overflow-x-auto break-all text-xs leading-5">
                  <HighlightedCode code={active.snippet} />
                </div>
              </div>
              <TryItPanel
                key={active.sdkPath}
                fields={active.fields}
                operation={active.sdkPath}
                provider={provider}
              />
              <SymbolReturnsSection symbol={active} />
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
                <ul className="border divide-y rounded-xl">
                  {groupSymbols.map((symbol) => {
                    const isActive = symbol.sdkPath === activePath;

                    return (
                      <li
                        key={symbol.sdkPath}
                        className={cn(
                          "group relative flex items-center gap-3 px-3 py-2 transition-colors",
                          isActive ? "bg-accent/60" : "hover:bg-muted/40",
                        )}
                      >
                        <TypeHoverCard symbol={symbol} />
                        <button
                          aria-label={`Try ${symbol.sdkPath}`}
                          className="inline-flex items-center justify-center transition-all border rounded-md size-6 shrink-0 text-muted-foreground opacity-60 hover:bg-background hover:text-syntax-fn group-hover:opacity-100"
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
                          <span className="font-mono text-sm truncate">
                            <span className="text-syntax-fn">{symbol.method}</span>
                            <span className="text-muted-foreground">
                              ({symbol.paramsPreview})
                            </span>
                          </span>
                          {symbol.summary ? (
                            <span className="text-xs truncate text-muted-foreground">
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
