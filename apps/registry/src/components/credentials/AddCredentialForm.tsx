/**
 * AddCredentialForm — modal form for registering a new credential.
 *
 * Supports:
 *   - Bearer token
 *   - API key
 *   - OAuth2 client credentials
 *   - OAuth2 authorization code (redirects to provider, returns via /account/oauth-callback)
 */

import { XIcon } from "lucide-react";
import { useState } from "react";
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

// Known providers pre-populated for convenience.
const KNOWN_PROVIDERS = [
  { value: "github", label: "GitHub" },
  { value: "spotify", label: "Spotify" },
  { value: "openai", label: "OpenAI" },
  { value: "datadog", label: "Datadog" },
  { value: "figma", label: "Figma" },
  { value: "slack", label: "Slack" },
  { value: "stripe", label: "Stripe" },
];

// OAuth2 auth URL defaults for known providers
const KNOWN_OAUTH_URLS: Record<string, { authUrl: string; tokenUrl: string }> = {
  github: {
    authUrl: "https://github.com/login/oauth/authorize",
    tokenUrl: "https://github.com/login/oauth/access_token",
  },
  spotify: {
    authUrl: "https://accounts.spotify.com/authorize",
    tokenUrl: "https://accounts.spotify.com/api/token",
  },
  figma: {
    authUrl: "https://www.figma.com/oauth",
    tokenUrl: "https://www.figma.com/api/oauth/token",
  },
  slack: {
    authUrl: "https://slack.com/oauth/v2/authorize",
    tokenUrl: "https://slack.com/api/oauth.v2.access",
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface AddCredentialFormProps {
  token: string;
  onSaved: (record: CredentialRecord) => void;
  onCancel: () => void;
}

export function AddCredentialForm({ token, onSaved, onCancel }: AddCredentialFormProps) {
  const [provider, setProvider] = useState("");
  const [customProvider, setCustomProvider] = useState("");
  const [label, setLabel] = useState("");
  const [credType, setCredType] = useState<CredentialType>("bearer_token");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Bearer token fields
  const [bearerToken, setBearerToken] = useState("");

  // API key fields
  const [apiKeyValue, setApiKeyValue] = useState("");
  const [apiKeyHeader, setApiKeyHeader] = useState("");

  // OAuth2 client credentials fields
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [scopes, setScopes] = useState("");

  // OAuth2 auth code fields
  const [authUrl, setAuthUrl] = useState("");
  const [oauthClientId, setOauthClientId] = useState("");
  const [oauthClientSecret, setOauthClientSecret] = useState("");
  const [oauthTokenUrl, setOauthTokenUrl] = useState("");
  const [oauthScopes, setOauthScopes] = useState("");

  const resolvedProvider = provider === "__custom__" ? customProvider.trim() : provider;

  // Auto-fill OAuth URLs for known providers
  function handleProviderChange(value: string) {
    setProvider(value);
    if (value && value !== "__custom__" && KNOWN_OAUTH_URLS[value]) {
      setAuthUrl(KNOWN_OAUTH_URLS[value].authUrl);
      setOauthTokenUrl(KNOWN_OAUTH_URLS[value].tokenUrl);
      setTokenUrl(KNOWN_OAUTH_URLS[value].tokenUrl);
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
        scopes: oauthScopes ? oauthScopes.split(/[\s,]+/).filter(Boolean) : undefined,
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
          scopes: scopes ? scopes.split(/[\s,]+/).filter(Boolean) : undefined,
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
          {/* Provider */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="provider-select">
              Provider
            </label>
            <select
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              id="provider-select"
              onChange={(e) => handleProviderChange(e.target.value)}
              required
              value={provider}
            >
              <option value="">Select a provider…</option>
              {KNOWN_PROVIDERS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
              <option value="__custom__">Custom…</option>
            </select>
          </div>

          {provider === "__custom__" && (
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

          {/* Credential type */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Type</span>
            <div className="flex flex-col gap-2">
              {CREDENTIAL_TYPES.map((ct) => (
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
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">
                  Scopes <span className="text-muted-foreground font-normal">(space or comma separated)</span>
                </span>
                <Input
                  onChange={(e) => setScopes(e.target.value)}
                  placeholder="read:user repo"
                  type="text"
                  value={scopes}
                />
              </label>
            </>
          )}

          {credType === "oauth2_authcode" && (
            <>
              <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                You will be redirected to the provider to authorize access. After approval you
                will return here automatically.
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
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">
                  Scopes <span className="text-muted-foreground font-normal">(space or comma separated)</span>
                </span>
                <Input
                  onChange={(e) => setOauthScopes(e.target.value)}
                  placeholder="user-read-private playlist-read-private"
                  type="text"
                  value={oauthScopes}
                />
              </label>
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
