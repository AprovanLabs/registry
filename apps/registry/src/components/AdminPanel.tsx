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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { clearSession, loadSession } from "@/lib/gateway";
import { cn } from "@/lib/utils";
import { McpInstallWidget } from "@/components/McpInstallWidget";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// In Astro/Vite the env var must be prefixed PUBLIC_ to be available client-side.
// Fallback to localhost:4000 for local development.
const GATEWAY_URL: string =
   
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

type Tab = "members" | "audit" | "install";

const TABS: { id: Tab; label: string }[] = [
  { id: "members", label: "Members & Permissions" },
  { id: "audit", label: "Audit Log" },
  { id: "install", label: "Install via MCP" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function AdminPanel() {
  const [token, setToken] = React.useState<string | null>(null);
  const [workspaceId, setWorkspaceId] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<Tab>("members");

  // Restore the gateway session (Cognito access token) on mount.
  React.useEffect(() => {
    const session = loadSession();
    if (session) {
      setToken(session.token);
      setWorkspaceId(session.workspaceId);
    }
  }, []);

  function handleDisconnect() {
    clearSession();
    setToken(null);
  }

  if (!token) {
    return (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Sign in required</CardTitle>
          <CardDescription>
            Sign in via Cognito and pick a workspace to manage permissions and
            audit the gateway.
          </CardDescription>
        </CardHeader>
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
          <Button variant="ghost" size="sm" onClick={handleDisconnect}>
            Disconnect
          </Button>
        </div>
      </div>

      {activeTab === "members" && <MembersTab token={token} />}
      {activeTab === "audit" && <AuditTab token={token} />}
      {activeTab === "install" && workspaceId && (
        <McpInstallWidget workspaceId={workspaceId} />
      )}
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

