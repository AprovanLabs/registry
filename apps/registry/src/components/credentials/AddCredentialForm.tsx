/**
 * AddCredentialForm — modal form for registering a new credential.
 *
 * Supports:
 *   - Bearer token
 *   - API key
 *   - OAuth2 client credentials
 *   - OAuth2 authorization code (redirects to provider, returns via /account/oauth-callback)
 */

import { CheckIcon, PlusIcon, SearchIcon, XIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  type CatalogProviderSummary,
  fetchCatalogProviders,
} from "@/lib/catalog";
import {
  type CredentialRecord,
  type CredentialType,
  GatewayError,
  addCredential,
  generateState,
  initiateOAuthFlow,
  saveOAuthPending,
} from "@/lib/gateway";
import { withBasePath } from "@/lib/site";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CREDENTIAL_TYPES: { value: CredentialType; label: string; description: string }[] = [
  {
    value: "bearer_token",
    label: "Bearer Token",
    description: "A static Authorization: Bearer <token> header.",
  },
  {
    value: "api_key",
    label: "API Key",
    description: "A static key injected via a custom header (default: X-Api-Key).",
  },
  {
    value: "oauth2_client",
    label: "OAuth2 Client Credentials",
    description: "Machine-to-machine OAuth2 using client_id + client_secret.",
  },
  {
    value: "oauth2_authcode",
    label: "OAuth2 Authorization Code",
    description: "User-facing OAuth2 — browser redirect to provider, then code exchange.",
  },
];

// ---------------------------------------------------------------------------
// Scopes multi-select
// ---------------------------------------------------------------------------

/**
 * Scope picker: the provider's known scopes render as toggleable chips
 * (hover for the scope's description); anything else can be typed in and
 * added freeform (new/undocumented scopes).
 */
function ScopesField({
  available,
  value,
  onChange,
}: {
  /** Known scopes → descriptions, from the provider's OpenAPI securitySchemes. */
  available?: Record<string, string>;
  value: string[];
  onChange: (scopes: string[]) => void;
}) {
  const [draft, setDraft] = useState("");

  const knownScopes = Object.keys(available ?? {});
  const customScopes = value.filter((scope) => !knownScopes.includes(scope));

  const toggle = (scope: string) =>
    onChange(
      value.includes(scope) ? value.filter((s) => s !== scope) : [...value, scope],
    );

  const addDraft = () => {
    const added = draft
      .split(/[\s,]+/)
      .filter(Boolean)
      .filter((scope) => !value.includes(scope));
    if (added.length > 0) onChange([...value, ...added]);
    setDraft("");
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">
        Scopes <span className="font-normal text-muted-foreground">(optional)</span>
      </span>
      {knownScopes.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {knownScopes.map((scope) => {
            const selected = value.includes(scope);
            return (
              <button
                className={`rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors ${
                  selected
                    ? "border-ring bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
                key={scope}
                onClick={() => toggle(scope)}
                title={available?.[scope] || scope}
                type="button"
              >
                {selected ? "✓ " : ""}
                {scope}
              </button>
            );
          })}
        </div>
      )}
      {customScopes.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {customScopes.map((scope) => (
            <Badge className="gap-1 font-mono text-xs" key={scope} variant="secondary">
              {scope}
              <button
                aria-label={`Remove scope ${scope}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => toggle(scope)}
                type="button"
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2">
        <Input
          className="h-8 font-mono text-xs"
          onBlur={addDraft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addDraft();
            }
          }}
          placeholder={
            knownScopes.length > 0
              ? "Add a scope not listed above…"
              : "e.g. read:user repo"
          }
          type="text"
          value={draft}
        />
        <Button
          disabled={!draft.trim()}
          onClick={addDraft}
          size="icon-sm"
          type="button"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface AddCredentialFormProps {
  token: string;
  onSaved: (record: CredentialRecord) => void;
  onCancel: () => void;
  /** Preselect a provider (deep links: `/account/credentials?provider=openai`). */
  initialProvider?: string;
}

export function AddCredentialForm({
  token,
  onSaved,
  onCancel,
  initialProvider,
}: AddCredentialFormProps) {
  const [provider, setProvider] = useState(initialProvider ?? "");
  const [customProvider, setCustomProvider] = useState("");
  const [label, setLabel] = useState("");
  const [credType, setCredType] = useState<CredentialType>("bearer_token");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Catalog-driven provider picker
  const [catalog, setCatalog] = useState<CatalogProviderSummary[]>([]);
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [providerQuery, setProviderQuery] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);

  // Bearer token fields
  const [bearerToken, setBearerToken] = useState("");

  // API key fields
  const [apiKeyValue, setApiKeyValue] = useState("");
  const [apiKeyHeader, setApiKeyHeader] = useState("");

  // OAuth2 client credentials fields
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [scopes, setScopes] = useState<string[]>([]);

  // OAuth2 auth code fields
  const [authUrl, setAuthUrl] = useState("");
  const [oauthClientId, setOauthClientId] = useState("");
  const [oauthClientSecret, setOauthClientSecret] = useState("");
  const [oauthTokenUrl, setOauthTokenUrl] = useState("");
  const [oauthScopes, setOauthScopes] = useState<string[]>([]);

  // The redirect URI the provider's OAuth app must allow. Rendered copiable
  // so it can be pasted into the provider's app settings before authorizing.
  const callbackUrl =
    typeof window !== "undefined"
      ? window.location.origin + withBasePath("/account/oauth-callback")
      : "";

  const resolvedProvider = provider === "__custom__" ? customProvider.trim() : provider;

  useEffect(() => {
    fetchCatalogProviders()
      .then(setCatalog)
      .catch(() => {
        setCatalogError(
          "Could not load the provider catalog — enter a provider ID manually.",
        );
        setProvider("__custom__");
      });
  }, []);

  const selectedCatalogEntry = useMemo(
    () => catalog.find((entry) => entry.id === provider) ?? null,
    [catalog, provider],
  );

  /** Credential types the selected provider supports (all, when unknown). */
  const supportedTypes = useMemo(() => {
    if (!selectedCatalogEntry) return CREDENTIAL_TYPES;
    const methods = selectedCatalogEntry.auth.methods;
    return CREDENTIAL_TYPES.filter((ct) => methods.includes(ct.value));
  }, [selectedCatalogEntry]);

  const filteredCatalog = useMemo(() => {
    const query = providerQuery.trim().toLowerCase();
    if (!query) return catalog.slice(0, 8);
    return catalog
      .filter(
        (entry) =>
          entry.id.toLowerCase().includes(query) ||
          entry.title.toLowerCase().includes(query) ||
          (entry.description ?? "").toLowerCase().includes(query),
      )
      .slice(0, 8);
  }, [catalog, providerQuery]);

  // Prefill auth fields from the provider's OpenAPI security schemes.
  function handleProviderPicked(entry: CatalogProviderSummary) {
    setProvider(entry.id);
    setProviderQuery(entry.title);
    setPickerOpen(false);

    const { auth } = entry;
    if (auth.apiKeyHeader) setApiKeyHeader(auth.apiKeyHeader);
    if (auth.oauth?.authUrl) setAuthUrl(auth.oauth.authUrl);
    if (auth.oauth?.tokenUrl) {
      setOauthTokenUrl(auth.oauth.tokenUrl);
      setTokenUrl(auth.oauth.tokenUrl);
    }

    // Keep the selected credential type valid for this provider.
    const methods = auth.methods;
    if (!methods.includes(credType)) {
      const first = CREDENTIAL_TYPES.find((ct) => methods.includes(ct.value));
      if (first) setCredType(first.value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!resolvedProvider) {
      setError("Provider is required.");
      return;
    }

    // OAuth2 auth code — initiate redirect flow instead of saving directly
    if (credType === "oauth2_authcode") {
      if (!authUrl || !oauthClientId || !oauthClientSecret || !oauthTokenUrl) {
        setError("Authorization URL, Token URL, Client ID, and Client Secret are required.");
        return;
      }
      const state = generateState();
      const redirectUri = window.location.origin + withBasePath("/account/oauth-callback");
      const pending = {
        provider: resolvedProvider,
        label: label.trim() || undefined,
        clientId: oauthClientId,
        clientSecret: oauthClientSecret,
        tokenUrl: oauthTokenUrl,
        redirectUri,
        scopes: oauthScopes.length > 0 ? oauthScopes : undefined,
        state,
      };
      saveOAuthPending(pending);
      initiateOAuthFlow(authUrl, pending);
      return;
    }

    setSaving(true);
    try {
      let payload;
      if (credType === "bearer_token") {
        if (!bearerToken) throw new Error("Token is required.");
        payload = { type: "bearer_token" as const, token: bearerToken };
      } else if (credType === "api_key") {
        if (!apiKeyValue) throw new Error("API key value is required.");
        payload = {
          type: "api_key" as const,
          value: apiKeyValue,
          headerName: apiKeyHeader.trim() || undefined,
        };
      } else {
        // oauth2_client
        if (!clientId || !clientSecret || !tokenUrl) {
          throw new Error("Client ID, Client Secret, and Token URL are required.");
        }
        payload = {
          type: "oauth2_client" as const,
          clientId,
          clientSecret,
          tokenUrl,
          scopes: scopes.length > 0 ? scopes : undefined,
        };
      }

      const record = await addCredential(token, {
        provider: resolvedProvider,
        label: label.trim() || undefined,
        payload,
      });
      onSaved(record);
    } catch (err) {
      setError(
        err instanceof GatewayError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Failed to save credential.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card>
      <CardHeader className="border-b pb-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle>Add Credential</CardTitle>
            <CardDescription>Register an API key or OAuth token for a provider.</CardDescription>
          </div>
          <Button onClick={onCancel} size="icon-sm" type="button" variant="ghost">
            <XIcon />
          </Button>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-4 pt-4 max-h-[60vh] overflow-y-auto">
          {/* Provider — searchable, backed by the registry catalog */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="provider-search">
              Provider
            </label>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                autoComplete="off"
                className="pl-9"
                id="provider-search"
                onChange={(e) => {
                  setProviderQuery(e.target.value);
                  setPickerOpen(true);
                  if (provider && provider !== "__custom__") setProvider("");
                }}
                onBlur={() => window.setTimeout(() => setPickerOpen(false), 150)}
                onFocus={() => setPickerOpen(true)}
                placeholder="Search the catalog (e.g. GitHub, Slack)…"
                type="text"
                value={providerQuery}
              />
              {pickerOpen && provider !== "__custom__" && (
                <div className="absolute top-full left-0 z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border bg-background shadow-md">
                  {filteredCatalog.map((entry) => (
                    <button
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
                      key={entry.id}
                      onClick={() => handleProviderPicked(entry)}
                      type="button"
                    >
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="flex items-center gap-1.5">
                          <span className="font-medium">{entry.title}</span>
                          <code className="text-xs text-muted-foreground">{entry.id}</code>
                        </span>
                        {entry.description && (
                          <span className="truncate text-xs text-muted-foreground">
                            {entry.description}
                          </span>
                        )}
                      </span>
                      {provider === entry.id && <CheckIcon className="size-4 shrink-0" />}
                    </button>
                  ))}
                  {filteredCatalog.length === 0 && (
                    <p className="px-3 py-2 text-sm text-muted-foreground">
                      No catalog match for “{providerQuery.trim()}”.
                    </p>
                  )}
                  <button
                    className="flex w-full items-center gap-2 border-t px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => {
                      setProvider("__custom__");
                      setPickerOpen(false);
                    }}
                    type="button"
                  >
                    Use a custom provider ID…
                  </button>
                </div>
              )}
            </div>
            {catalogError && (
              <p className="text-xs text-muted-foreground">{catalogError}</p>
            )}
            {selectedCatalogEntry && !selectedCatalogEntry.auth.declared && (
              <p className="text-xs text-muted-foreground">
                {selectedCatalogEntry.title} does not declare auth schemes in its
                OpenAPI spec — all credential types are shown.
              </p>
            )}
          </div>

          {provider === "__custom__" && (
            <div className="flex flex-col gap-1.5">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Provider ID</span>
                <Input
                  onChange={(e) => setCustomProvider(e.target.value)}
                  placeholder="e.g. my-api"
                  required
                  type="text"
                  value={customProvider}
                />
              </label>
              <button
                className="self-start text-xs text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => {
                  setProvider("");
                  setCustomProvider("");
                  setProviderQuery("");
                }}
                type="button"
              >
                ← Search the catalog instead
              </button>
            </div>
          )}

          {/* Label */}
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">
              Label <span className="text-muted-foreground font-normal">(optional)</span>
            </span>
            <Input
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Personal GitHub token"
              type="text"
              value={label}
            />
          </label>

          {/* Credential type — only the avenues the provider supports */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Type</span>
            {selectedCatalogEntry?.auth.declared && (
              <p className="text-xs text-muted-foreground">
                {selectedCatalogEntry.title} supports {supportedTypes.length} of{" "}
                {CREDENTIAL_TYPES.length} credential types.
              </p>
            )}
            <div className="flex flex-col gap-2">
              {supportedTypes.map((ct) => (
                <label
                  key={ct.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors ${
                    credType === ct.value
                      ? "border-ring bg-accent/50"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <input
                    checked={credType === ct.value}
                    className="mt-0.5"
                    name="credType"
                    onChange={() => setCredType(ct.value)}
                    type="radio"
                    value={ct.value}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">{ct.label}</span>
                    <span className="text-xs text-muted-foreground">{ct.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Type-specific fields */}
          {credType === "bearer_token" && (
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Token</span>
              <Input
                autoComplete="off"
                onChange={(e) => setBearerToken(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                required
                type="password"
                value={bearerToken}
              />
            </label>
          )}

          {credType === "api_key" && (
            <>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">API Key</span>
                <Input
                  autoComplete="off"
                  onChange={(e) => setApiKeyValue(e.target.value)}
                  placeholder="sk-xxxxxxxxxxxxxxxxxxxx"
                  required
                  type="password"
                  value={apiKeyValue}
                />
              </label>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                HTTP Transport Configuration
              </p>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">
                  Header name <span className="text-muted-foreground font-normal">(default: X-Api-Key)</span>
                </span>
                <Input
                  onChange={(e) => setApiKeyHeader(e.target.value)}
                  placeholder="X-Api-Key"
                  type="text"
                  value={apiKeyHeader}
                />
              </label>
            </>
          )}

          {credType === "oauth2_client" && (
            <>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Client ID</span>
                <Input
                  onChange={(e) => setClientId(e.target.value)}
                  required
                  type="text"
                  value={clientId}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Client Secret</span>
                <Input
                  autoComplete="off"
                  onChange={(e) => setClientSecret(e.target.value)}
                  required
                  type="password"
                  value={clientSecret}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Token URL</span>
                <Input
                  onChange={(e) => setTokenUrl(e.target.value)}
                  placeholder="https://provider.example.com/oauth/token"
                  required
                  type="url"
                  value={tokenUrl}
                />
              </label>
              <ScopesField
                available={selectedCatalogEntry?.auth.oauth?.scopes}
                onChange={setScopes}
                value={scopes}
              />
            </>
          )}

          {credType === "oauth2_authcode" && (
            <>
              <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                You will be redirected to the provider to authorize access. After approval you
                will return here automatically.
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Callback URL</span>
                <div className="flex items-center gap-2">
                  <code className="min-w-0 flex-1 truncate rounded-lg border bg-muted/40 px-3 py-1.5 font-mono text-xs">
                    {callbackUrl}
                  </code>
                  <CopyButton idleLabel="Copy" size="sm" text={callbackUrl} />
                </div>
                <span className="text-xs text-muted-foreground">
                  Register this as the redirect URI in the provider&apos;s OAuth app settings
                  before authorizing.
                </span>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Authorization URL</span>
                <Input
                  onChange={(e) => setAuthUrl(e.target.value)}
                  placeholder="https://provider.example.com/oauth/authorize"
                  required
                  type="url"
                  value={authUrl}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Token URL</span>
                <Input
                  onChange={(e) => setOauthTokenUrl(e.target.value)}
                  placeholder="https://provider.example.com/oauth/token"
                  required
                  type="url"
                  value={oauthTokenUrl}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Client ID</span>
                <Input
                  onChange={(e) => setOauthClientId(e.target.value)}
                  required
                  type="text"
                  value={oauthClientId}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Client Secret</span>
                <Input
                  autoComplete="off"
                  onChange={(e) => setOauthClientSecret(e.target.value)}
                  required
                  type="password"
                  value={oauthClientSecret}
                />
              </label>
              <ScopesField
                available={selectedCatalogEntry?.auth.oauth?.scopes}
                onChange={setOauthScopes}
                value={oauthScopes}
              />
            </>
          )}

          {error ? (
            <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          ) : null}
        </CardContent>
        <CardFooter className="gap-2">
          <Button disabled={saving} type="submit" variant="default">
            {credType === "oauth2_authcode"
              ? "Authorize with provider →"
              : saving
                ? "Saving…"
                : "Save credential"}
          </Button>
          <Button onClick={onCancel} type="button" variant="outline">
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
