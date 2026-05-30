import { CheckIcon, CopyIcon, LoaderCircleIcon, PlayIcon, TerminalIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { OperationInfo, OpenApiSchemaType } from "@/lib/openapi";

/**
 * Converts an OpenAPI operationId like "users/get-by-username" into a
 * UTDK method accessor like "users.getByUsername".
 * (Duplicated here to avoid importing the Node.js-only openapi.ts at runtime.)
 */
function operationIdToSdkPath(operationId: string): string {
  return operationId
    .split("/")
    .map((segment) => segment.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()))
    .join(".");
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SerializedField = {
  name: string;
  in?: "query" | "path" | "header" | "cookie";
  required: boolean;
  description: string | null;
  schema: OpenApiSchemaType;
};

export type TryItConsoleProps = {
  /** Provider identifier (e.g. "github", "google/books") */
  provider: string;
  /** Human-readable provider name */
  providerTitle: string;
  operation: OperationInfo;
  /** Default gateway base URL — can be overridden by the user at runtime */
  defaultGatewayUrl?: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function coerceValue(raw: string, schema: OpenApiSchemaType): unknown {
  if (!raw && raw !== "0") return undefined;
  if (schema.type === "integer" || schema.type === "number") {
    const n = Number(raw);
    return Number.isNaN(n) ? raw : n;
  }
  if (schema.type === "boolean") {
    return raw === "true";
  }
  return raw;
}

function buildArgs(
  fields: SerializedField[],
  values: Record<string, string>,
): Record<string, unknown> {
  const args: Record<string, unknown> = {};
  for (const field of fields) {
    const raw = values[field.name] ?? "";
    if (raw === "" && !field.required) continue;
    const coerced = coerceValue(raw, field.schema);
    if (coerced !== undefined) {
      args[field.name] = coerced;
    }
  }
  return args;
}

function buildTypeScriptSnippet(
  provider: string,
  operation: OperationInfo,
  args: Record<string, unknown>,
): string {
  const sdkPath = operationIdToSdkPath(operation.operationId);
  const providerVar = provider.replace(/[^a-zA-Z0-9]/g, "_");
  const importPath = `@utdk/${provider}`;
  const argsStr = Object.keys(args).length
    ? JSON.stringify(args, null, 2)
    : "";
  return `import ${providerVar} from '${importPath}';

await ${providerVar}.${sdkPath}(${argsStr});`;
}

function buildCurlSnippet(
  provider: string,
  operation: OperationInfo,
  args: Record<string, unknown>,
  gatewayUrl: string,
  jwtToken: string,
): string {
  const url = `${gatewayUrl.replace(/\/$/, "")}/tools/${provider}/${operation.operationId}`;
  const token = jwtToken || "<your-jwt-token>";
  const body = JSON.stringify(args, null, 2);
  return `curl -X POST '${url}' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer ${token}' \\
  -d '${body}'`;
}

function methodColor(method: string): string {
  switch (method.toUpperCase()) {
    case "GET":
      return "text-emerald-500";
    case "POST":
      return "text-blue-500";
    case "PUT":
      return "text-amber-500";
    case "PATCH":
      return "text-orange-500";
    case "DELETE":
      return "text-red-500";
    default:
      return "text-muted-foreground";
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: SerializedField;
  value: string;
  onChange: (value: string) => void;
}) {
  const schema = field.schema;
  const labelId = `field-${field.name}`;

  if (schema.type === "boolean") {
    return (
      <div className="flex items-center gap-2">
        <input
          checked={value === "true"}
          id={labelId}
          onChange={(e) => onChange(e.target.checked ? "true" : "false")}
          type="checkbox"
          className="h-4 w-4 rounded border-input accent-primary"
        />
        <label className="text-sm text-muted-foreground" htmlFor={labelId}>
          {value === "true" ? "true" : "false"}
        </label>
      </div>
    );
  }

  if (schema.enum && schema.enum.length > 0) {
    return (
      <select
        id={labelId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
      >
        <option value="">— select —</option>
        {schema.enum.map((v) => (
          <option key={String(v)} value={String(v)}>
            {String(v)}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Input
      id={labelId}
      placeholder={
        schema.default !== undefined
          ? `default: ${String(schema.default)}`
          : schema.type === "integer" || schema.type === "number"
            ? "0"
            : ""
      }
      type={schema.type === "integer" || schema.type === "number" ? "number" : "text"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function ParameterGroup({
  title,
  fields,
  values,
  onChange,
}: {
  title: string;
  fields: SerializedField[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
}) {
  if (fields.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </p>
      {fields.map((field) => (
        <div key={field.name} className="grid gap-1.5">
          <div className="flex items-center gap-1.5">
            <label
              className="text-sm font-medium"
              htmlFor={`field-${field.name}`}
            >
              {field.name}
            </label>
            {field.required && (
              <span className="text-xs font-medium text-destructive">required</span>
            )}
          </div>
          {field.description && (
            <p className="text-xs text-muted-foreground">{field.description}</p>
          )}
          <FieldInput
            field={field}
            value={values[field.name] ?? ""}
            onChange={(val) => onChange(field.name, val)}
          />
        </div>
      ))}
    </div>
  );
}

function CopyableCode({
  code,
  label,
}: {
  code: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleCopy() {
    void navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    });
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="rounded-xl border bg-muted/50">
      <div className="flex items-center justify-between gap-3 border-b px-4 py-2">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <button
          className={cn(
            "inline-flex h-6 items-center gap-1 rounded-md border px-2 text-xs font-medium transition-colors",
            "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
          onClick={handleCopy}
          type="button"
        >
          {copied ? (
            <CheckIcon className="h-3 w-3" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function TryItConsole({
  provider,
  providerTitle: _providerTitle,
  operation,
  defaultGatewayUrl = "",
}: TryItConsoleProps) {
  // Combine all form fields
  const allFields: SerializedField[] = useMemo(() => {
    return [
      ...operation.parameters.map((p): SerializedField => ({
        name: p.name,
        in: p.in,
        required: p.required,
        description: p.description,
        schema: p.schema,
      })),
      ...operation.requestBodyFields.map((f): SerializedField => ({
        name: f.name,
        required: f.required,
        description: f.description,
        schema: f.schema,
      })),
    ];
  }, [operation]);

  const pathFields = useMemo(
    () => allFields.filter((f) => f.in === "path"),
    [allFields],
  );
  const queryFields = useMemo(
    () => allFields.filter((f) => f.in === "query"),
    [allFields],
  );
  const bodyFields = useMemo(
    () => allFields.filter((f) => !f.in || (f.in !== "path" && f.in !== "query" && f.in !== "header" && f.in !== "cookie")),
    [allFields],
  );

  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const field of allFields) {
      if (field.schema.default !== undefined) {
        initial[field.name] = String(field.schema.default);
      }
    }
    return initial;
  });

  const [gatewayUrl, setGatewayUrl] = useState(defaultGatewayUrl);
  const [jwtToken, setJwtToken] = useState("");
  const [activeSnippet, setActiveSnippet] = useState<"typescript" | "curl">("typescript");
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    status: number;
    body: unknown;
    ok: boolean;
  } | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleFieldChange = useCallback((name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const currentArgs = useMemo(() => buildArgs(allFields, values), [allFields, values]);

  const tsSnippet = useMemo(
    () => buildTypeScriptSnippet(provider, operation, currentArgs),
    [provider, operation, currentArgs],
  );

  const curlSnippet = useMemo(
    () => buildCurlSnippet(provider, operation, currentArgs, gatewayUrl, jwtToken),
    [provider, operation, currentArgs, gatewayUrl, jwtToken],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setResponseData(null);
    setFetchError(null);

    try {
      const url = `${gatewayUrl.replace(/\/$/, "")}/tools/${provider}/${operation.operationId}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}),
        },
        body: JSON.stringify(currentArgs),
      });

      let body: unknown;
      try {
        body = await resp.json();
      } catch {
        body = await resp.text();
      }

      setResponseData({ status: resp.status, body, ok: resp.ok });
    } catch (err) {
      setFetchError(err instanceof Error ? err.message : "Network error — is the gateway running?");
    } finally {
      setIsLoading(false);
    }
  }

  const hasFields = allFields.length > 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Gateway + auth configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Connection</CardTitle>
          <CardDescription>
            Gateway URL and authentication token. Credentials are never sent to
            the browser — the gateway injects them server-side.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label className="text-sm font-medium" htmlFor="gateway-url">
              Gateway URL
            </label>
            <Input
              id="gateway-url"
              placeholder="https://gateway.example.com"
              value={gatewayUrl}
              onChange={(e) => setGatewayUrl(e.target.value)}
            />
          </div>
          <div className="grid gap-1.5">
            <label className="text-sm font-medium" htmlFor="jwt-token">
              JWT token
            </label>
            <Input
              id="jwt-token"
              placeholder="eyJ..."
              type="password"
              value={jwtToken}
              onChange={(e) => setJwtToken(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Parameter form */}
      <form onSubmit={(e) => void handleSubmit(e)}>
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn("font-mono text-sm font-semibold", methodColor(operation.method))}
              >
                {operation.method}
              </span>
              <code className="text-sm text-muted-foreground">{operation.httpPath}</code>
            </div>
            <CardTitle>Parameters</CardTitle>
            {operation.description && (
              <CardDescription>{operation.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {!hasFields && (
              <p className="text-sm text-muted-foreground">
                This operation has no parameters.
              </p>
            )}

            <ParameterGroup
              title="Path parameters"
              fields={pathFields}
              values={values}
              onChange={handleFieldChange}
            />

            {pathFields.length > 0 && queryFields.length > 0 && (
              <Separator />
            )}

            <ParameterGroup
              title="Query parameters"
              fields={queryFields}
              values={values}
              onChange={handleFieldChange}
            />

            {(pathFields.length > 0 || queryFields.length > 0) && bodyFields.length > 0 && (
              <Separator />
            )}

            <ParameterGroup
              title="Request body"
              fields={bodyFields}
              values={values}
              onChange={handleFieldChange}
            />

            <div className="flex items-center gap-3 pt-2">
              <Button
                disabled={isLoading || !gatewayUrl}
                size="default"
                type="submit"
              >
                {isLoading ? (
                  <LoaderCircleIcon className="h-4 w-4 animate-spin" data-icon="inline-start" />
                ) : (
                  <PlayIcon className="h-4 w-4" data-icon="inline-start" />
                )}
                {isLoading ? "Sending…" : "Send"}
              </Button>
              {!gatewayUrl && (
                <p className="text-xs text-muted-foreground">
                  Enter a gateway URL above to enable sending.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Response panel */}
      {(responseData || fetchError) && (
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle>Response</CardTitle>
              {responseData && (
                <Badge variant={responseData.ok ? "outline" : "destructive"}>
                  {responseData.status}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {fetchError ? (
              <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
                {fetchError}
              </div>
            ) : responseData ? (
              <div
                className={cn(
                  "rounded-xl border p-4",
                  responseData.ok
                    ? "border-border bg-muted/30"
                    : "border-destructive/40 bg-destructive/5",
                )}
              >
                <pre className="overflow-x-auto text-xs leading-relaxed">
                  <code>
                    {typeof responseData.body === "string"
                      ? responseData.body
                      : JSON.stringify(responseData.body, null, 2)}
                  </code>
                </pre>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}

      {/* Code snippet */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>Code snippet</CardTitle>
            <TerminalIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription>
            Updates live as you fill in the form above.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex gap-2">
            {(["typescript", "curl"] as const).map((lang) => (
              <button
                key={lang}
                className={cn(
                  "inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors",
                  activeSnippet === lang
                    ? "border-foreground/20 bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                onClick={() => setActiveSnippet(lang)}
                type="button"
              >
                {lang === "typescript" ? "TypeScript" : "curl"}
              </button>
            ))}
          </div>

          {activeSnippet === "typescript" ? (
            <CopyableCode code={tsSnippet} label="TypeScript (UTDK SDK)" />
          ) : (
            <CopyableCode code={curlSnippet} label="curl (via gateway)" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
