/**
 * ProviderCredentialConfig — inline credential configuration for the Try It console.
 *
 * Allows users to configure auth credentials per-provider, stored in browser localStorage.
 * Supports:
 *   - Bearer tokens
 *   - API keys (with custom header)
 *   - OAuth2 (link to OAuth flow)
 *   - Custom headers
 */

import {
  CheckIcon,
  ChevronDownIcon,
  KeyRoundIcon,
  SettingsIcon,
  ShieldCheckIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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
import { cn } from "@/lib/utils";
import {
  type LocalCredentialType,
  type ProviderCredentialConfig as CredentialConfig,
  getKnownProviderAuth,
  getProviderCredential,
  removeProviderCredential,
  saveProviderCredential,
} from "@/lib/local-credentials";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProviderCredentialConfigProps {
  provider: string;
  providerTitle: string;
  onConfigChange?: (config: CredentialConfig | null) => void;
}

type CredTypeOption = {
  value: LocalCredentialType;
  label: string;
  description: string;
};

const CRED_TYPE_OPTIONS: CredTypeOption[] = [
  { value: "none", label: "No Auth", description: "Public API, no authentication required" },
  { value: "bearer", label: "Bearer Token", description: "Authorization: Bearer <token>" },
  { value: "api_key", label: "API Key", description: "Custom header with API key" },
  { value: "oauth2", label: "OAuth2", description: "OAuth2 access token (manual)" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ProviderCredentialConfig({
  provider,
  providerTitle,
  onConfigChange,
}: ProviderCredentialConfigProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [credType, setCredType] = useState<LocalCredentialType>("bearer");
  const [saved, setSaved] = useState(false);

  // Bearer token fields
  const [bearerToken, setBearerToken] = useState("");

  // API key fields
  const [apiKeyValue, setApiKeyValue] = useState("");
  const [apiKeyHeader, setApiKeyHeader] = useState("X-Api-Key");
  const [apiKeyPrefix, setApiKeyPrefix] = useState("");

  // OAuth2 fields (manual entry for now)
  const [oauthAccessToken, setOauthAccessToken] = useState("");

  // Custom headers
  const [customHeaders, setCustomHeaders] = useState<{ key: string; value: string }[]>([]);

  // Load existing config on mount
  useEffect(() => {
    const existing = getProviderCredential(provider);
    if (existing) {
      const cred = existing.credential;
      setCredType(cred.type);

      switch (cred.type) {
        case "bearer":
          setBearerToken(cred.token);
          break;
        case "api_key":
          setApiKeyValue(cred.value);
          setApiKeyHeader(cred.headerName);
          setApiKeyPrefix(cred.headerPrefix ?? "");
          break;
        case "oauth2":
          setOauthAccessToken(cred.accessToken);
          break;
      }

      if (existing.customHeaders) {
        setCustomHeaders(
          Object.entries(existing.customHeaders).map(([key, value]) => ({ key, value })),
        );
      }
      onConfigChange?.(existing);
    } else {
      // Set defaults from known provider config
      const known = getKnownProviderAuth(provider);
      setCredType(known.defaultType);
      if (known.headerName) setApiKeyHeader(known.headerName);
      if (known.headerPrefix) setApiKeyPrefix(known.headerPrefix);
    }
  }, [provider, onConfigChange]);

  const knownAuth = getKnownProviderAuth(provider);
  const hasOAuthConfig = !!knownAuth.oauthConfig;

  const buildConfig = useCallback((): CredentialConfig => {
    const headersObj: Record<string, string> = {};
    for (const h of customHeaders) {
      if (h.key.trim() && h.value.trim()) {
        headersObj[h.key.trim()] = h.value.trim();
      }
    }

    const base = {
      provider,
      customHeaders: Object.keys(headersObj).length > 0 ? headersObj : undefined,
      updatedAt: new Date().toISOString(),
    };

    switch (credType) {
      case "bearer":
        return { ...base, credential: { type: "bearer", token: bearerToken } };
      case "api_key":
        return {
          ...base,
          credential: {
            type: "api_key",
            value: apiKeyValue,
            headerName: apiKeyHeader,
            headerPrefix: apiKeyPrefix || undefined,
          },
        };
      case "oauth2":
        return {
          ...base,
          credential: { type: "oauth2", accessToken: oauthAccessToken },
        };
      case "none":
      default:
        return { ...base, credential: { type: "none" } };
    }
  }, [
    provider,
    credType,
    bearerToken,
    apiKeyValue,
    apiKeyHeader,
    apiKeyPrefix,
    oauthAccessToken,
    customHeaders,
  ]);

  function handleSave() {
    const config = buildConfig();
    saveProviderCredential(config);
    onConfigChange?.(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function handleClear() {
    removeProviderCredential(provider);
    setBearerToken("");
    setApiKeyValue("");
    setOauthAccessToken("");
    setCustomHeaders([]);
    setCredType(knownAuth.defaultType);
    onConfigChange?.(null);
  }

  function addCustomHeader() {
    setCustomHeaders((prev) => [...prev, { key: "", value: "" }]);
  }

  function updateCustomHeader(index: number, field: "key" | "value", value: string) {
    setCustomHeaders((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  function removeCustomHeader(index: number) {
    setCustomHeaders((prev) => prev.filter((_, i) => i !== index));
  }

  const existingConfig = getProviderCredential(provider);
  const hasCredential = existingConfig && existingConfig.credential.type !== "none";

  return (
    <Card>
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KeyRoundIcon className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Authentication</CardTitle>
            {hasCredential && (
              <Badge variant="outline" className="gap-1 text-emerald-600 border-emerald-200">
                <ShieldCheckIcon className="h-3 w-3" />
                Configured
              </Badge>
            )}
          </div>
          <ChevronDownIcon
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              isExpanded && "rotate-180",
            )}
          />
        </div>
        <CardDescription>
          {hasCredential
            ? `Using ${existingConfig.credential.type.replace("_", " ")} authentication`
            : `Configure credentials for ${providerTitle}`}
        </CardDescription>
      </CardHeader>

      {isExpanded && (
        <CardContent className="flex flex-col gap-4 border-t pt-4">
          {/* Auth type selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Authentication Type</label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {CRED_TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setCredType(opt.value)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                    credType === opt.value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-input bg-background text-muted-foreground hover:bg-muted",
                  )}
                >
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{knownAuth.description}</p>
          </div>

          {/* Bearer token input */}
          {credType === "bearer" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="bearer-token">
                Bearer Token
              </label>
              <Input
                id="bearer-token"
                type="password"
                placeholder="Enter your access token..."
                value={bearerToken}
                onChange={(e) => setBearerToken(e.target.value)}
              />
            </div>
          )}

          {/* API key inputs */}
          {credType === "api_key" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="api-key-value">
                  API Key Value
                </label>
                <Input
                  id="api-key-value"
                  type="password"
                  placeholder="Enter your API key..."
                  value={apiKeyValue}
                  onChange={(e) => setApiKeyValue(e.target.value)}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="api-key-header">
                    Header Name
                  </label>
                  <Input
                    id="api-key-header"
                    placeholder="X-Api-Key"
                    value={apiKeyHeader}
                    onChange={(e) => setApiKeyHeader(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="api-key-prefix">
                    Value Prefix (optional)
                  </label>
                  <Input
                    id="api-key-prefix"
                    placeholder="e.g., Api-Key "
                    value={apiKeyPrefix}
                    onChange={(e) => setApiKeyPrefix(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {/* OAuth2 input */}
          {credType === "oauth2" && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="oauth-token">
                  Access Token
                </label>
                <Input
                  id="oauth-token"
                  type="password"
                  placeholder="Paste your OAuth2 access token..."
                  value={oauthAccessToken}
                  onChange={(e) => setOauthAccessToken(e.target.value)}
                />
              </div>
              {hasOAuthConfig && (
                <p className="text-xs text-muted-foreground">
                  To obtain a token via OAuth flow, visit the{" "}
                  <a
                    href="/account/credentials"
                    className="text-primary underline underline-offset-2"
                  >
                    Credentials page
                  </a>
                  .
                </p>
              )}
            </div>
          )}

          {/* HTTP Transport Configuration */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              HTTP Transport Configuration
            </p>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Custom Headers</label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addCustomHeader}
                className="h-7 gap-1 text-xs"
              >
                <SettingsIcon className="h-3 w-3" />
                Add Header
              </Button>
            </div>
            {customHeaders.map((header, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Input
                  placeholder="Header name"
                  value={header.key}
                  onChange={(e) => updateCustomHeader(idx, "key", e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Value"
                  value={header.value}
                  onChange={(e) => updateCustomHeader(idx, "value", e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCustomHeader(idx)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {customHeaders.length === 0 && (
              <p className="text-xs text-muted-foreground">
                Add custom headers to include with every request (e.g., X-Custom-Header).
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <Button type="button" onClick={handleSave} disabled={saved}>
              {saved ? (
                <>
                  <CheckIcon className="h-4 w-4" data-icon="inline-start" />
                  Saved
                </>
              ) : (
                "Save Credentials"
              )}
            </Button>
            {hasCredential && (
              <Button
                type="button"
                variant="ghost"
                onClick={handleClear}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2Icon className="h-4 w-4" data-icon="inline-start" />
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
