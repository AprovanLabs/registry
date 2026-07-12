import { CheckIcon, CopyIcon, LoaderCircleIcon, PlayIcon, TerminalIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { OperationInfo, OpenApiSchemaType } from "@/lib/openapi";
import { ProviderCredentialConfig } from "@/components/ProviderCredentialConfig";
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
import {
  type ProviderCredentialConfig as CredentialConfig,
  buildAuthHeaders,
  gatewayUrl,
  getProviderCredential,
} from "@/lib/local-credentials";
import { cn } from "@/lib/utils";

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
  const providerVar = provider.replace(/[^a-zA-Z0-9]/g, "_");
  const importPath = `@utdk/${provider}`;
  const argsStr = Object.keys(args).length
    ? JSON.stringify(args, null, 2)
    : "";
  return `import ${providerVar} from '${importPath}';

await ${providerVar}.${operation.sdkPath}(${argsStr})`;
}

function buildCurlSnippet(
  provider: string,
  operation: OperationInfo,
  args: Record<string, unknown>,
  credConfig: CredentialConfig | null,
): string {
  const authHeaders = buildAuthHeaders(credConfig);
  const headerLines = Object.entries(authHeaders)
    .map(([k, v]) => `  -H '${k}: ${v}'`)
    .join(" \\\n");

  const url = `${gatewayUrl.replace(/\/$/, "")}/tools/${provider}/${operation.sdkPath}`;
  const body = JSON.stringify(args, null, 2);
  return `curl -X POST '${url}' \\
-H 'Content-Type: application/json' \\
${headerLines ? headerLines + " \\\n" : ""}  -d '${body}'`;
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
          className="w-4 h-4 rounded border-input accent-primary"
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
      <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
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
    <div className="border rounded-xl bg-muted/50">
      <div className="flex items-center justify-between gap-3 px-4 py-2 border-b">
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
            <CheckIcon className="w-3 h-3" />
          ) : (
            <CopyIcon className="w-3 h-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
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
  providerTitle,
  operation,
  defaultGatewayUrl = "",
}: TryItConsoleProps) {
  // Combine all form fields
  const allFields: SerializedField[] = useMemo(() => {
    return [
      ...operation.parameters.map((p): SerializedField => ({
        name: p.name,
        in: p.location,
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

  const [credConfig, setCredConfig] = useState<CredentialConfig | null>(() => {
    if (typeof window !== "undefined") {
      return getProviderCredential(provider);
    }
    return null;
  });
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

  const handleCredConfigChange = useCallback((config: CredentialConfig | null) => {
    setCredConfig(config);
  }, []);

  const currentArgs = useMemo(() => buildArgs(allFields, values), [allFields, values]);

  const tsSnippet = useMemo(
    () => buildTypeScriptSnippet(provider, operation, currentArgs),
    [provider, operation, currentArgs],
  );

  const curlSnippet = useMemo(
    () => buildCurlSnippet(provider, operation, currentArgs, credConfig),
    [provider, operation, currentArgs, credConfig],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setResponseData(null);
    setFetchError(null);

    try {
      const authHeaders = buildAuthHeaders(credConfig);
      const url = `${gatewayUrl.replace(/\/$/, "")}/tools/${provider}/${operation.sdkPath}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders,
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
  const hasCredential = credConfig && credConfig.credential.type !== "none";

  return (
    <div className="flex flex-col gap-6">
      {/* Credential configuration */}
      <ProviderCredentialConfig
        provider={provider}
        providerTitle={providerTitle}
        onConfigChange={handleCredConfigChange}
      />

      {/* Parameter form */}
      <form onSubmit={(e) => void handleSubmit(e)}>
        <Card>
          <CardHeader>
            <CardTitle className="font-mono">{operation.sdkPath}</CardTitle>
            <div className="flex flex-wrap items-center gap-1.5">
              <span
                className={cn("font-mono text-xs font-medium", methodColor(operation.httpMethod))}
              >
                {operation.httpMethod}
              </span>
              <code className="text-xs text-muted-foreground">{operation.httpPath}</code>
            </div>
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
              title="Parameters"
              fields={pathFields}
              values={values}
              onChange={handleFieldChange}
            />

            {pathFields.length > 0 && queryFields.length > 0 && (
              <Separator />
            )}

            <ParameterGroup
              title=""
              fields={queryFields}
              values={values}
              onChange={handleFieldChange}
            />

            {(pathFields.length > 0 || queryFields.length > 0) && bodyFields.length > 0 && (
              <Separator />
            )}

            <ParameterGroup
              title="Input"
              fields={bodyFields}
              values={values}
              onChange={handleFieldChange}
            />

            <div className="flex items-center gap-3 pt-2">
              <Button
                disabled={isLoading || !hasCredential}
                size="default"
                type="submit"
              >
                {isLoading ? (
                  <LoaderCircleIcon className="w-4 h-4 animate-spin" data-icon="inline-start" />
                ) : (
                  <PlayIcon className="w-4 h-4" data-icon="inline-start" />
                )}
                Send
              </Button>
              {!hasCredential && (
                <p className="text-xs text-muted-foreground">
                  Configure credentials above to enable sending.
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
              <CardTitle>Output</CardTitle>
              {responseData && (
                <Badge variant={responseData.ok ? "outline" : "destructive"}>
                  {responseData.status}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {fetchError ? (
              <div className="p-4 text-sm border rounded-lg border-destructive/40 bg-destructive/5 text-destructive">
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
            <TerminalIcon className="w-4 h-4 text-muted-foreground" />
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
            <CopyableCode code={tsSnippet} label="TypeScript" />
          ) : (
            <CopyableCode code={curlSnippet} label="curl" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
