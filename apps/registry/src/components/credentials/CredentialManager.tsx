/**
 * CredentialManager — top-level client component for /account/credentials.
 *
 * Handles:
 *   - Login (JWT acquisition from gateway)
 *   - Credential listing with provider filter
 *   - Add credential form (bearer token, API key, OAuth2)
 *   - Revoke (delete) credential
 */

import { LogOutIcon, PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AddCredentialForm } from "./AddCredentialForm";
import { AuthGate } from "@/components/auth/AuthGate";
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
import {
  type CredentialRecord,
  type CredentialType,
  GatewayError,
  clearSession,
  deleteCredential,
  listCredentials,
} from "@/lib/gateway";

// ---------------------------------------------------------------------------
// Credential card
// ---------------------------------------------------------------------------

function maskValue(_type: CredentialType): string {
  return "••••••••";
}

const TYPE_LABELS: Record<CredentialType, string> = {
  bearer_token: "Bearer Token",
  api_key: "API Key",
  oauth2_client: "OAuth2 Client Credentials",
  oauth2_authcode: "OAuth2 Auth Code",
};

function CredentialCard({
  credential,
  onRevoke,
  revoking,
}: {
  credential: CredentialRecord;
  onRevoke: (id: string) => void;
  revoking: boolean;
}) {
  const createdAt = new Date(credential.createdAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Card size="sm">
      <CardHeader className="gap-2 border-b pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1 min-w-0">
            <CardTitle className="truncate">
              {credential.label ?? credential.provider}
            </CardTitle>
            <CardDescription className="font-mono text-xs">{credential.provider}</CardDescription>
          </div>
          <Button
            aria-label={`Revoke ${credential.label ?? credential.provider}`}
            disabled={revoking}
            onClick={() => onRevoke(credential.id)}
            size="icon-sm"
            variant="destructive"
          >
            <Trash2Icon />
          </Button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline">{TYPE_LABELS[credential.type]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-14">Token</span>
          <code className="text-xs font-mono text-muted-foreground">{maskValue(credential.type)}</code>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-14">Added</span>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-14">ID</span>
          <code className="text-xs font-mono text-muted-foreground truncate">{credential.id}</code>
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Credential list
// ---------------------------------------------------------------------------

function CredentialList({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [credentials, setCredentials] = useState<CredentialRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [providerFilter, setProviderFilter] = useState("");
  const [search, setSearch] = useState("");
  // `?provider=<id>` deep links (e.g. from patchwork's provider picker) open
  // the add form with that provider preselected.
  const [requestedProvider] = useState(
    () => new URLSearchParams(window.location.search).get("provider") ?? "",
  );
  const [showAddForm, setShowAddForm] = useState(() => Boolean(requestedProvider));
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const fetchCredentials = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const records = await listCredentials(token);
      setCredentials(records);
    } catch (err) {
      setError(err instanceof GatewayError ? err.message : "Failed to load credentials.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void fetchCredentials();
  }, [fetchCredentials]);

  const providers = useMemo(() => {
    const set = new Set(credentials.map((c) => c.provider));
    return Array.from(set).sort();
  }, [credentials]);

  const filtered = useMemo(() => {
    return credentials.filter((c) => {
      if (providerFilter && c.provider !== providerFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          c.provider.toLowerCase().includes(q) ||
          (c.label ?? "").toLowerCase().includes(q) ||
          c.type.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [credentials, providerFilter, search]);

  async function handleRevoke(id: string) {
    const cred = credentials.find((c) => c.id === id);
    const name = cred?.label ?? cred?.provider ?? id;
    if (!confirm(`Revoke "${name}"? This cannot be undone.`)) return;
    setRevokingId(id);
    try {
      await deleteCredential(token, id);
      setCredentials((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert(err instanceof GatewayError ? err.message : "Failed to revoke credential.");
    } finally {
      setRevokingId(null);
    }
  }

  function handleLogout() {
    clearSession();
    onLogout();
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Credentials</h1>
          <p className="text-sm text-muted-foreground">
            Manage API keys and OAuth tokens used by UTDK providers.
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowAddForm(true)} size="sm">
            <PlusIcon />
            Add credential
          </Button>
          <Button onClick={handleLogout} size="sm" variant="ghost">
            <LogOutIcon />
            Sign out
          </Button>
        </div>
      </div>

      {/* Provider filter + search */}
      <div className="sticky top-0 z-10 flex flex-col gap-3 rounded-xl border bg-background/90 p-3 backdrop-blur">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            className="h-9 pl-9"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter credentials…"
            type="search"
            value={search}
          />
        </div>
        {providers.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              className={`inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors ${
                !providerFilter
                  ? "border-foreground/20 bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => setProviderFilter("")}
              type="button"
            >
              All providers
            </button>
            {providers.map((p) => (
              <button
                key={p}
                className={`inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors ${
                  providerFilter === p
                    ? "border-foreground/20 bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setProviderFilter(p === providerFilter ? "" : p)}
                type="button"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Error */}
      {error ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {/* Loading */}
      {loading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl bg-muted"
            />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cred) => (
            <CredentialCard
              key={cred.id}
              credential={cred}
              onRevoke={handleRevoke}
              revoking={revokingId === cred.id}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No credentials {providerFilter ? `for ${providerFilter}` : ""}</CardTitle>
            <CardDescription>
              {credentials.length === 0
                ? "Add your first credential to get started."
                : "Try changing the provider filter or search term."}
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Add credential form overlay */}
      {showAddForm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg">
            <AddCredentialForm
              initialProvider={requestedProvider || undefined}
              onCancel={() => setShowAddForm(false)}
              onSaved={(record) => {
                setCredentials((prev) => [record, ...prev]);
                setShowAddForm(false);
              }}
              token={token}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root component
// ---------------------------------------------------------------------------

export function CredentialManager() {
  return (
    <AuthGate caption="manage your provider credentials">
      {({ token, signOut }) => <CredentialList onLogout={signOut} token={token} />}
    </AuthGate>
  );
}
