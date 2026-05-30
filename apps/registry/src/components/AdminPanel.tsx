/**
 * AdminPanel — /admin/permissions
 *
 * Client-side React component that communicates with the UTDK gateway to:
 *   1. Show a members/callers list with their permission sets
 *   2. Grant / revoke operation-level permissions (provider-level or single op)
 *   3. Show the audit log (last 100 tool calls)
 *   4. Manage named API keys (create with scoped permissions, revoke)
 *
 * The gateway URL is read from the GATEWAY_URL env var (baked in at build time via
 * Astro's import.meta.env) or falls back to http://localhost:4000 for local dev.
 */

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// In Astro/Vite the env var must be prefixed PUBLIC_ to be available client-side.
// Fallback to localhost:4000 for local development.
const GATEWAY_URL: string =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((import.meta as unknown as { env: Record<string, string> }).env
    .PUBLIC_GATEWAY_URL as string | undefined) ?? "http://localhost:4000";

// ---------------------------------------------------------------------------
// Types (mirror gateway models)
// ---------------------------------------------------------------------------

interface Permission {
  id: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  grantedAt: string;
  grantedBy: string;
}

interface AuditEntry {
  id: string;
  ts: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  status: number;
  durationMs?: number;
  result: "success" | "forbidden" | "error";
}

interface ApiKey {
  id: string;
  workspaceId: string;
  name: string;
  callerId: string;
  createdAt: string;
  createdBy: string;
  expiresAt: string | null;
}

interface ApiKeyWithSecret extends ApiKey {
  secret: string;
}

// ---------------------------------------------------------------------------
// Gateway client helpers
// ---------------------------------------------------------------------------

function gatewayFetch(
  path: string,
  token: string,
  opts: RequestInit = {},
): Promise<Response> {
  return fetch(`${GATEWAY_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(opts.headers ?? {}),
    },
  });
}

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------

type Tab = "members" | "audit" | "apikeys";

const TABS: { id: Tab; label: string }[] = [
  { id: "members", label: "Members & Permissions" },
  { id: "audit", label: "Audit Log" },
  { id: "apikeys", label: "API Keys" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function AdminPanel() {
  const [token, setToken] = React.useState("");
  const [tokenInput, setTokenInput] = React.useState("");
  const [authError, setAuthError] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<Tab>("members");

  // Token login form: authenticate against the gateway
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch(`${GATEWAY_URL}/health`);
      if (!res.ok) throw new Error("Gateway unreachable");
      // Validate the token by fetching permissions
      const check = await fetch(`${GATEWAY_URL}/permissions`, {
        headers: { Authorization: `Bearer ${tokenInput}` },
      });
      if (check.status === 401 || check.status === 403) {
        setAuthError("Invalid token or insufficient role (admin required).");
        return;
      }
      setToken(tokenInput);
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : "Connection failed");
    }
  }

  if (!token) {
    return (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Connect to Gateway</CardTitle>
          <CardDescription>
            Enter an admin JWT to manage permissions. Tokens are issued via{" "}
            <code className="font-mono text-xs">POST {GATEWAY_URL}/auth/token</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <Input
              type="password"
              placeholder="Bearer token"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              required
            />
            {authError && <p className="text-sm text-destructive">{authError}</p>}
            <Button type="submit" disabled={!tokenInput.trim()}>
              Connect
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px",
              activeTab === t.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
        <div className="ml-auto">
          <Button variant="ghost" size="sm" onClick={() => setToken("")}>
            Disconnect
          </Button>
        </div>
      </div>

      {activeTab === "members" && <MembersTab token={token} />}
      {activeTab === "audit" && <AuditTab token={token} />}
      {activeTab === "apikeys" && <ApiKeysTab token={token} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// MembersTab — callers list + permission set editor
// ---------------------------------------------------------------------------

function MembersTab({ token }: { token: string }) {
  const [permissions, setPermissions] = React.useState<Permission[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [selectedCallerId, setSelectedCallerId] = React.useState<string | null>(null);

  // Grant form state
  const [grantCallerId, setGrantCallerId] = React.useState("");
  const [grantProvider, setGrantProvider] = React.useState("");
  const [grantOperation, setGrantOperation] = React.useState("*");
  const [granting, setGranting] = React.useState(false);
  const [grantError, setGrantError] = React.useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await gatewayFetch("/permissions", token);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = (await res.json()) as { permissions: Permission[] };
      setPermissions(data.permissions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load permissions");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [token]);

  async function revoke(id: string) {
    try {
      const res = await gatewayFetch(`/permissions/${id}`, token, { method: "DELETE" });
      if (!res.ok) throw new Error(`${res.status}`);
      setPermissions((prev) => prev.filter((p) => p.id !== id));
      if (selectedCallerId) {
        const remaining = permissions.filter(
          (p) => p.id !== id && p.callerId === selectedCallerId,
        );
        if (remaining.length === 0) setSelectedCallerId(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Revoke failed");
    }
  }

  async function grant(e: React.FormEvent) {
    e.preventDefault();
    setGranting(true);
    setGrantError("");
    try {
      const res = await gatewayFetch("/permissions", token, {
        method: "POST",
        body: JSON.stringify({
          callerId: grantCallerId.trim(),
          provider: grantProvider.trim(),
          operation: grantOperation.trim() || "*",
        }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      const perm = (await res.json()) as Permission;
      setPermissions((prev) => [...prev, perm]);
      setGrantCallerId("");
      setGrantProvider("");
      setGrantOperation("*");
    } catch (err) {
      setGrantError(err instanceof Error ? err.message : "Grant failed");
    } finally {
      setGranting(false);
    }
  }

  // Group by callerId
  const callerIds = Array.from(new Set(permissions.map((p) => p.callerId))).sort();
  const callerPerms = selectedCallerId
    ? permissions.filter((p) => p.callerId === selectedCallerId)
    : [];

  return (
    <div className="flex flex-col gap-6">
      {/* Grant form */}
      <Card>
        <CardHeader>
          <CardTitle>Grant Permission</CardTitle>
          <CardDescription>
            Allow a caller to invoke a provider operation. Use <code>*</code> as the operation to
            grant access to all operations for a provider.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={grant} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">Caller ID</label>
                <Input
                  placeholder="user:alice or apikey:abc123"
                  value={grantCallerId}
                  onChange={(e) => setGrantCallerId(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">Provider</label>
                <Input
                  placeholder="github"
                  value={grantProvider}
                  onChange={(e) => setGrantProvider(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">
                  Operation (<code>*</code> = all)
                </label>
                <Input
                  placeholder="repos.list"
                  value={grantOperation}
                  onChange={(e) => setGrantOperation(e.target.value)}
                />
              </div>
            </div>
            {grantError && <p className="text-sm text-destructive">{grantError}</p>}
            <Button
              type="submit"
              disabled={granting || !grantCallerId.trim() || !grantProvider.trim()}
              className="self-start"
            >
              {granting ? "Granting…" : "Grant"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Members list + detail */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
        {/* Caller list */}
        <Card>
          <CardHeader>
            <CardTitle>Callers</CardTitle>
            <CardDescription>{callerIds.length} caller(s) with grants</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {loading && <p className="px-4 py-3 text-sm text-muted-foreground">Loading…</p>}
            {error && <p className="px-4 py-3 text-sm text-destructive">{error}</p>}
            {!loading && callerIds.length === 0 && (
              <p className="px-4 py-3 text-sm text-muted-foreground">
                No permissions granted yet.
              </p>
            )}
            <ul>
              {callerIds.map((id) => {
                const count = permissions.filter((p) => p.callerId === id).length;
                return (
                  <li key={id}>
                    <button
                      onClick={() =>
                        setSelectedCallerId((prev) => (prev === id ? null : id))
                      }
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-muted",
                        selectedCallerId === id && "bg-muted font-medium",
                      )}
                    >
                      <span className="truncate font-mono text-xs">{id}</span>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {count}
                      </Badge>
                    </button>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        {/* Permission set detail */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedCallerId ? (
                <span className="font-mono text-sm">{selectedCallerId}</span>
              ) : (
                "Select a caller"
              )}
            </CardTitle>
            <CardDescription>
              {selectedCallerId
                ? `${callerPerms.length} permission grant(s)`
                : "Click a caller in the list to see and edit their permission set."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedCallerId && (
              <p className="text-sm text-muted-foreground">No caller selected.</p>
            )}
            {selectedCallerId && callerPerms.length === 0 && (
              <p className="text-sm text-muted-foreground">No permissions for this caller.</p>
            )}
            {callerPerms.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-xs text-muted-foreground">
                      <th className="pb-2 pr-4 text-left font-medium">Provider</th>
                      <th className="pb-2 pr-4 text-left font-medium">Operation</th>
                      <th className="pb-2 pr-4 text-left font-medium">Granted</th>
                      <th className="pb-2 text-left font-medium">By</th>
                      <th className="pb-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {callerPerms.map((p) => (
                      <tr key={p.id} className="border-b last:border-0">
                        <td className="py-2 pr-4 font-mono">{p.provider}</td>
                        <td className="py-2 pr-4 font-mono">
                          {p.operation === "*" ? (
                            <Badge variant="secondary">all</Badge>
                          ) : (
                            p.operation
                          )}
                        </td>
                        <td className="py-2 pr-4 text-muted-foreground">
                          {new Date(p.grantedAt).toLocaleString()}
                        </td>
                        <td className="py-2 pr-4 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                          {p.grantedBy}
                        </td>
                        <td className="py-2">
                          <Button
                            variant="destructive"
                            size="xs"
                            onClick={() => revoke(p.id)}
                          >
                            Revoke
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AuditTab — recent tool calls
// ---------------------------------------------------------------------------

function AuditTab({ token }: { token: string }) {
  const [entries, setEntries] = React.useState<AuditEntry[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [filterCaller, setFilterCaller] = React.useState("");
  const [filterProvider, setFilterProvider] = React.useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ limit: "100" });
      if (filterCaller.trim()) params.set("callerId", filterCaller.trim());
      if (filterProvider.trim()) params.set("provider", filterProvider.trim());
      const res = await gatewayFetch(`/audit?${params}`, token);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = (await res.json()) as { entries: AuditEntry[] };
      setEntries(data.entries);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load audit log");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [token]);

  function resultBadge(result: AuditEntry["result"]) {
    if (result === "success") return <Badge variant="secondary">success</Badge>;
    if (result === "forbidden") return <Badge variant="destructive">403</Badge>;
    return <Badge variant="destructive">error</Badge>;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex flex-wrap items-end gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Caller ID</label>
              <Input
                placeholder="Filter by caller…"
                value={filterCaller}
                onChange={(e) => setFilterCaller(e.target.value)}
                className="w-56"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Provider</label>
              <Input
                placeholder="Filter by provider…"
                value={filterProvider}
                onChange={(e) => setFilterProvider(e.target.value)}
                className="w-40"
              />
            </div>
            <Button variant="outline" onClick={load}>
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tool Calls</CardTitle>
          <CardDescription>
            {entries.length} event(s) — most recent first
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!loading && entries.length === 0 && (
            <p className="text-sm text-muted-foreground">No tool calls recorded yet.</p>
          )}
          {entries.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="pb-2 pr-4 text-left font-medium">Timestamp</th>
                    <th className="pb-2 pr-4 text-left font-medium">Caller</th>
                    <th className="pb-2 pr-4 text-left font-medium">Provider</th>
                    <th className="pb-2 pr-4 text-left font-medium">Operation</th>
                    <th className="pb-2 pr-4 text-left font-medium">Result</th>
                    <th className="pb-2 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e) => (
                    <tr key={e.id} className="border-b last:border-0">
                      <td className="py-2 pr-4 text-muted-foreground text-xs whitespace-nowrap">
                        {new Date(e.ts).toLocaleString()}
                      </td>
                      <td className="py-2 pr-4 font-mono text-xs truncate max-w-[140px]">
                        {e.callerId}
                      </td>
                      <td className="py-2 pr-4 font-mono">{e.provider}</td>
                      <td className="py-2 pr-4 font-mono">{e.operation}</td>
                      <td className="py-2 pr-4">{resultBadge(e.result)}</td>
                      <td className="py-2 text-muted-foreground text-xs">
                        {e.durationMs != null ? `${e.durationMs}ms` : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ApiKeysTab — create / list / revoke named API keys
// ---------------------------------------------------------------------------

function ApiKeysTab({ token }: { token: string }) {
  const [keys, setKeys] = React.useState<ApiKey[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  // Create form
  const [newName, setNewName] = React.useState("");
  const [newExpiry, setNewExpiry] = React.useState("");
  const [creating, setCreating] = React.useState(false);
  const [createError, setCreateError] = React.useState("");
  const [newSecret, setNewSecret] = React.useState<ApiKeyWithSecret | null>(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await gatewayFetch("/api-keys", token);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = (await res.json()) as { keys: ApiKey[] };
      setKeys(data.keys);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load API keys");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [token]);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setCreateError("");
    setNewSecret(null);
    try {
      const body: Record<string, unknown> = { name: newName.trim() };
      if (newExpiry) {
        const days = parseInt(newExpiry, 10);
        if (days > 0) body.expiresInSeconds = days * 86400;
      }
      const res = await gatewayFetch("/api-keys", token, {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errBody = (await res.json()) as { error?: string };
        throw new Error(errBody.error ?? `${res.status}`);
      }
      const created = (await res.json()) as ApiKeyWithSecret;
      setNewSecret(created);
      setKeys((prev) => [...prev, created]);
      setNewName("");
      setNewExpiry("");
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Create failed");
    } finally {
      setCreating(false);
    }
  }

  async function revoke(id: string) {
    try {
      const res = await gatewayFetch(`/api-keys/${id}`, token, { method: "DELETE" });
      if (!res.ok) throw new Error(`${res.status}`);
      setKeys((prev) => prev.filter((k) => k.id !== id));
      if (newSecret?.id === id) setNewSecret(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Revoke failed");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Create form */}
      <Card>
        <CardHeader>
          <CardTitle>Create API Key</CardTitle>
          <CardDescription>
            Named API keys allow programmatic callers to authenticate without the admin secret.
            The secret is shown once and never stored in plain text — copy it immediately.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={create} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <Input
                  placeholder="My CI runner"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">
                  Expires in (days) — blank = never
                </label>
                <Input
                  type="number"
                  min="1"
                  placeholder="30"
                  value={newExpiry}
                  onChange={(e) => setNewExpiry(e.target.value)}
                />
              </div>
            </div>
            {createError && <p className="text-sm text-destructive">{createError}</p>}
            <Button type="submit" disabled={creating || !newName.trim()} className="self-start">
              {creating ? "Creating…" : "Create API Key"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Newly created key secret banner */}
      {newSecret && (
        <Card className="border-ring">
          <CardHeader>
            <CardTitle className="text-sm">API Key Created — copy now</CardTitle>
            <CardDescription>
              This secret will not be shown again. Grant permissions to{" "}
              <code className="font-mono text-xs">{newSecret.callerId}</code> using the Members
              tab.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 rounded-lg bg-muted p-3 font-mono text-xs break-all">
              <span className="flex-1">{newSecret.secret}</span>
              <Button
                variant="outline"
                size="xs"
                onClick={() => navigator.clipboard.writeText(newSecret.secret)}
              >
                Copy
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => setNewSecret(null)}
            >
              Dismiss
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Keys list */}
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>{keys.length} key(s)</CardDescription>
        </CardHeader>
        <CardContent>
          {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!loading && keys.length === 0 && (
            <p className="text-sm text-muted-foreground">No API keys yet.</p>
          )}
          {keys.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="pb-2 pr-4 text-left font-medium">Name</th>
                    <th className="pb-2 pr-4 text-left font-medium">Caller ID</th>
                    <th className="pb-2 pr-4 text-left font-medium">Created</th>
                    <th className="pb-2 pr-4 text-left font-medium">Expires</th>
                    <th className="pb-2" />
                  </tr>
                </thead>
                <tbody>
                  {keys.map((k) => {
                    const expired = k.expiresAt && new Date(k.expiresAt) < new Date();
                    return (
                      <tr key={k.id} className="border-b last:border-0">
                        <td className="py-2 pr-4 font-medium">{k.name}</td>
                        <td className="py-2 pr-4 font-mono text-xs">{k.callerId}</td>
                        <td className="py-2 pr-4 text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(k.createdAt).toLocaleString()}
                        </td>
                        <td className="py-2 pr-4 text-xs whitespace-nowrap">
                          {k.expiresAt ? (
                            <span className={cn(expired && "text-destructive")}>
                              {new Date(k.expiresAt).toLocaleDateString()}
                              {expired && " (expired)"}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">Never</span>
                          )}
                        </td>
                        <td className="py-2">
                          <Button
                            variant="destructive"
                            size="xs"
                            onClick={() => revoke(k.id)}
                          >
                            Revoke
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
