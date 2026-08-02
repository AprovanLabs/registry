/**
 * AdminPanel — /admin/permissions
 *
 * Members-and-Groups admin surface. Communicates with the gateway to:
 *   - List and remove workspace members
 *   - Manage groups (create, delete, rename)
 *   - Assign members to groups (drag-and-drop or button)
 *   - Attach/detach capability profiles per group
 *   - Send invites (email, role, initial groups)
 *   - View and revoke pending invites
 *   - View the audit log
 */

import * as React from "react";
import { AuthGate } from "@/components/auth/AuthGate";
import { McpInstallWidget } from "@/components/McpInstallWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const GATEWAY_URL: string =
  ((import.meta as unknown as { env: Record<string, string> }).env
    .PUBLIC_GATEWAY_URL as string | undefined) ?? "http://localhost:4000";

// ---------------------------------------------------------------------------
// Types (mirror gateway models)
// ---------------------------------------------------------------------------

interface Member {
  userId: string;
  role: string;
  createdAt?: string;
}

interface Group {
  workspaceId: string;
  groupId: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

/** One workspace profile, as the gateway's /profiles + /groups/:id/profiles
 *  routes report it (name, target, display credential label). */
interface ProfileSummary {
  id: string;
  name: string;
  target: { kind: "interface" | "provider"; id: string; provider?: string };
  credentialLabel?: string;
}

interface Invite {
  inviteToken: string;
  email: string;
  role: string;
  groupIds: string[];
  invitedBy: string;
  createdAt: string;
  expiresAt: number;
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

// The gateway sits behind CloudFront OAC, whose SigV4 signing overwrites the
// standard `Authorization` header. The user token rides in this app-specific
// header instead (matches @aprovan/ui DEFAULT_AUTH_HEADER and the gateway's
// ACCESS_TOKEN_HEADER); CloudFront forwards it untouched.
const AUTH_HEADER = "Authorization";

function gatewayFetch(path: string, token: string, opts: RequestInit = {}): Promise<Response> {
  return fetch(`${GATEWAY_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      [AUTH_HEADER]: `Bearer ${token}`,
      ...(opts.headers ?? {}),
    },
  });
}

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------

type Tab = "members" | "groups" | "invites" | "audit" | "install";

const TABS: { id: Tab; label: string }[] = [
  { id: "members", label: "Members" },
  { id: "groups", label: "Groups" },
  { id: "invites", label: "Invites" },
  { id: "audit", label: "Audit Log" },
  { id: "install", label: "Install via MCP" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function AdminPanel() {
  return (
    <AuthGate caption="manage members, groups, and invites">
      {({ token, workspaceId, signOut }) => (
        <AdminPanelContent
          signOut={signOut}
          token={token}
          workspaceId={workspaceId}
        />
      )}
    </AuthGate>
  );
}

function AdminPanelContent({
  token,
  workspaceId,
  signOut,
}: {
  token: string;
  workspaceId: string;
  signOut: () => Promise<void>;
}) {
  const [activeTab, setActiveTab] = React.useState<Tab>("members");

  return (
    <div className="flex flex-col gap-6">
      {/* Tab bar */}
      <div className="flex flex-wrap items-center gap-1 border-b">
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
          <Button variant="ghost" size="sm" onClick={signOut}>
            Disconnect
          </Button>
        </div>
      </div>

      {activeTab === "members" && <MembersTab token={token} />}
      {activeTab === "groups" && <GroupsTab token={token} />}
      {activeTab === "invites" && <InvitesTab token={token} />}
      {activeTab === "audit" && <AuditTab token={token} />}
      {activeTab === "install" && workspaceId && (
        <McpInstallWidget workspaceId={workspaceId} />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// MembersTab — workspace member list
// ---------------------------------------------------------------------------

function MembersTab({ token }: { token: string }) {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await gatewayFetch("/members", token);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = (await res.json()) as { members: Member[] };
      setMembers(data.members);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load members");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [token]);

  async function removeMember(userId: string) {
    try {
      const res = await gatewayFetch(`/members/${userId}`, token, { method: "DELETE" });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setMembers((prev) => prev.filter((m) => m.userId !== userId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to remove member");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Workspace Members</h2>
        <Button variant="outline" size="sm" onClick={load}>
          Refresh
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          {loading && <p className="px-4 py-3 text-sm text-muted-foreground">Loading…</p>}
          {error && <p className="px-4 py-3 text-sm text-destructive">{error}</p>}
          {!loading && members.length === 0 && (
            <p className="px-4 py-3 text-sm text-muted-foreground">No members found.</p>
          )}
          {members.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="pb-2 pl-4 pt-3 text-left font-medium">User</th>
                    <th className="pb-2 pr-4 pt-3 text-left font-medium">Role</th>
                    <th className="pb-2 pr-4 pt-3 text-left font-medium">Joined</th>
                    <th className="pb-2 pr-4 pt-3" />
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.userId} className="border-b last:border-0">
                      <td className="py-2 pl-4 font-mono text-xs">{m.userId}</td>
                      <td className="py-2 pr-4">
                        <Badge variant={m.role === "admin" ? "default" : "secondary"}>
                          {m.role}
                        </Badge>
                      </td>
                      <td className="py-2 pr-4 text-xs text-muted-foreground">
                        {m.createdAt ? new Date(m.createdAt).toLocaleDateString() : "—"}
                      </td>
                      <td className="py-2 pr-4">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeMember(m.userId)}
                        >
                          Remove
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
  );
}

// ---------------------------------------------------------------------------
// GroupsTab — manage groups, members in groups, attached profiles
// ---------------------------------------------------------------------------

function GroupsTab({ token }: { token: string }) {
  const [groups, setGroups] = React.useState<Group[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [selectedGroupId, setSelectedGroupId] = React.useState<string | null>(null);

  // Create group form
  const [newGroupName, setNewGroupName] = React.useState("");
  const [newGroupDesc, setNewGroupDesc] = React.useState("");
  const [creating, setCreating] = React.useState(false);

  async function loadGroups() {
    setLoading(true);
    setError("");
    try {
      const res = await gatewayFetch("/groups", token);
      if (!res.ok) throw new Error(`${res.status}`);
      const data = (await res.json()) as { groups: Group[] };
      setGroups(data.groups);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load groups");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    loadGroups();
  }, [token]);

  async function createGroup(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await gatewayFetch("/groups", token, {
        method: "POST",
        body: JSON.stringify({ name: newGroupName, description: newGroupDesc || undefined }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      const group = (await res.json()) as Group;
      setGroups((prev) => [...prev, group]);
      setNewGroupName("");
      setNewGroupDesc("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create group");
    } finally {
      setCreating(false);
    }
  }

  async function deleteGroup(groupId: string) {
    try {
      const res = await gatewayFetch(`/groups/${groupId}`, token, { method: "DELETE" });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setGroups((prev) => prev.filter((g) => g.groupId !== groupId));
      if (selectedGroupId === groupId) setSelectedGroupId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete group");
    }
  }

  const selectedGroup = groups.find((g) => g.groupId === selectedGroupId) ?? null;

  return (
    <div className="flex flex-col gap-6">
      {error && <p className="text-sm text-destructive">{error}</p>}

      {/* Create group form */}
      <Card>
        <CardHeader>
          <CardTitle>Create Group</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={createGroup} className="flex flex-wrap items-end gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <Input
                placeholder="Engineering"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                required
                className="w-48"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Description (optional)</label>
              <Input
                placeholder="Access to engineering tools"
                value={newGroupDesc}
                onChange={(e) => setNewGroupDesc(e.target.value)}
                className="w-64"
              />
            </div>
            <Button type="submit" disabled={creating || !newGroupName.trim()}>
              {creating ? "Creating…" : "Create"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Groups list + detail */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Group list */}
        <Card>
          <CardHeader>
            <CardTitle>Groups</CardTitle>
            <CardDescription>{groups.length} group(s)</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {loading && <p className="px-4 py-3 text-sm text-muted-foreground">Loading…</p>}
            {!loading && groups.length === 0 && (
              <p className="px-4 py-3 text-sm text-muted-foreground">No groups yet.</p>
            )}
            <ul>
              {groups.map((g) => (
                <li key={g.groupId} className="flex items-center border-b last:border-0">
                  <button
                    onClick={() =>
                      setSelectedGroupId((prev) => (prev === g.groupId ? null : g.groupId))
                    }
                    className={cn(
                      "flex-1 truncate px-4 py-3 text-left text-sm transition-colors hover:bg-muted",
                      selectedGroupId === g.groupId && "bg-muted font-medium",
                    )}
                  >
                    {g.name}
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mr-2 text-destructive hover:text-destructive"
                    onClick={() => deleteGroup(g.groupId)}
                  >
                    ×
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Group detail */}
        {selectedGroup ? (
          <GroupDetail token={token} group={selectedGroup} />
        ) : (
          <Card>
            <CardContent className="py-6">
              <p className="text-sm text-muted-foreground">Select a group to manage its members and grants.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// GroupDetail — members and profile grants for a single group
// ---------------------------------------------------------------------------

function GroupDetail({ token, group }: { token: string; group: Group }) {
  const { groupId } = group;

  // Group users
  const [userIds, setUserSubs] = React.useState<string[]>([]);
  const [addUserSub, setAddUserSub] = React.useState("");

  // Attached profiles + the workspace-wide attach picker source.
  const [attachedProfiles, setAttachedProfiles] = React.useState<ProfileSummary[]>([]);
  const [workspaceProfiles, setWorkspaceProfiles] = React.useState<ProfileSummary[]>([]);
  const [profilesError, setProfilesError] = React.useState("");
  const [selectedProfileId, setSelectedProfileId] = React.useState("");
  const [profilesReloadKey, setProfilesReloadKey] = React.useState(0);

  const [loadError, setLoadError] = React.useState("");

  React.useEffect(() => {
    setLoadError("");
    gatewayFetch(`/groups/${groupId}/users`, token)
      .then((r) => r.json() as Promise<{ userIds: string[] }>)
      .then((d) => setUserSubs(d.userIds ?? []))
      .catch((err) => {
        setLoadError(err instanceof Error ? err.message : "Failed to load group details");
      });
  }, [groupId, token]);

  // Profiles load separately so a failure here leaves Members usable
  // (inline error + retry, per the groups-screen states).
  React.useEffect(() => {
    setProfilesError("");
    Promise.all([
      gatewayFetch(`/groups/${groupId}/profiles`, token).then(async (r) => {
        const body = (await r.json()) as { profiles?: ProfileSummary[]; error?: string };
        if (!r.ok) throw new Error(body.error ?? `${r.status}`);
        setAttachedProfiles(body.profiles ?? []);
      }),
      gatewayFetch(`/profiles`, token).then(async (r) => {
        const body = (await r.json()) as { profiles?: ProfileSummary[]; error?: string };
        if (!r.ok) throw new Error(body.error ?? `${r.status}`);
        setWorkspaceProfiles(body.profiles ?? []);
      }),
    ]).catch((err) => {
      setProfilesError(err instanceof Error ? err.message : "Failed to load profiles");
    });
  }, [groupId, token, profilesReloadKey]);

  async function addUser(e: React.FormEvent) {
    e.preventDefault();
    const sub = addUserSub.trim();
    if (!sub) return;
    try {
      const res = await gatewayFetch(`/groups/${groupId}/users`, token, {
        method: "POST",
        body: JSON.stringify({ userId: sub }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setUserSubs((prev) => [...new Set([...prev, sub])]);
      setAddUserSub("");
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Failed to add user");
    }
  }

  async function removeUser(sub: string) {
    try {
      const res = await gatewayFetch(`/groups/${groupId}/users`, token, {
        method: "DELETE",
        body: JSON.stringify({ userId: sub }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setUserSubs((prev) => prev.filter((s) => s !== sub));
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Failed to remove user");
    }
  }

  async function attachProfile(e: React.FormEvent) {
    e.preventDefault();
    const profile = selectedProfileId;
    if (!profile) return;
    try {
      const res = await gatewayFetch(`/groups/${groupId}/profiles`, token, {
        method: "POST",
        body: JSON.stringify({ profile }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      const attached = (await res.json()) as ProfileSummary;
      // Idempotent server-side; dedupe by id client-side too.
      setAttachedProfiles((prev) => [...prev.filter((p) => p.id !== attached.id), attached]);
      setSelectedProfileId("");
    } catch (err) {
      setProfilesError(err instanceof Error ? err.message : "Failed to attach profile");
    }
  }

  async function detachProfile(profileId: string) {
    try {
      const res = await gatewayFetch(`/groups/${groupId}/profiles`, token, {
        method: "DELETE",
        body: JSON.stringify({ profile: profileId }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setAttachedProfiles((prev) => prev.filter((p) => p.id !== profileId));
    } catch (err) {
      setProfilesError(err instanceof Error ? err.message : "Failed to detach profile");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {loadError && <p className="text-sm text-destructive">{loadError}</p>}

      {/* Members in group */}
      <Card>
        <CardHeader>
          <CardTitle>{group.name} — Members</CardTitle>
          {group.description && <CardDescription>{group.description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <form onSubmit={addUser} className="flex gap-2">
            <Input
              placeholder="User sub (Cognito sub)"
              value={addUserSub}
              onChange={(e) => setAddUserSub(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!addUserSub.trim()}>
              Add
            </Button>
          </form>
          {userIds.length === 0 && (
            <p className="text-sm text-muted-foreground">No members in this group.</p>
          )}
          <ul className="flex flex-col gap-1">
            {userIds.map((sub) => (
              <li
                key={sub}
                className="flex items-center justify-between rounded border px-3 py-1"
                draggable
              >
                <span className="truncate font-mono text-xs">{sub}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 text-destructive hover:text-destructive"
                  onClick={() => removeUser(sub)}
                >
                  ×
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Profiles — the group's capability, as profile membership. */}
      <Card>
        <CardHeader>
          <CardTitle>Profiles</CardTitle>
          <CardDescription>
            Members of this group can invoke whatever the attached profiles grant — effective on
            their next call.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {profilesError && (
            <p className="text-sm text-destructive">
              {profilesError}{" "}
              <button
                className="underline hover:text-foreground"
                onClick={() => setProfilesReloadKey((k) => k + 1)}
              >
                Retry
              </button>
            </p>
          )}
          {!profilesError && workspaceProfiles.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              This workspace defines no profiles yet. Create a profile first — profiles are
              managed on the workspace's Interfaces/Profiles surface.
            </p>
          ) : (
            !profilesError && (
              <form onSubmit={attachProfile} className="flex flex-wrap gap-2">
                <select
                  aria-label="Profile to attach"
                  value={selectedProfileId}
                  onChange={(e) => setSelectedProfileId(e.target.value)}
                  className="h-9 flex-1 min-w-40 rounded-md border bg-transparent px-2 text-sm"
                >
                  <option value="">Attach profile…</option>
                  {workspaceProfiles
                    .filter((p) => !attachedProfiles.some((a) => a.id === p.id))
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.target.kind}: {p.target.id}
                        {p.credentialLabel ? ` (${p.credentialLabel})` : ""}
                      </option>
                    ))}
                </select>
                <Button type="submit" disabled={!selectedProfileId}>
                  Attach
                </Button>
              </form>
            )
          )}
          {!profilesError && attachedProfiles.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No profiles attached. Members get only their direct permissions.
            </p>
          )}
          <ul className="flex flex-wrap gap-2">
            {attachedProfiles.map((p) => (
              <li key={p.id} className="flex items-center gap-1">
                <Badge variant="secondary" className="font-mono text-xs">
                  {p.name} · {p.target.kind}: {p.target.id}
                  {p.credentialLabel ? ` · ${p.credentialLabel}` : ""}
                </Badge>
                <button
                  aria-label={`Detach ${p.name}`}
                  className="text-xs text-muted-foreground hover:text-destructive"
                  onClick={() => detachProfile(p.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// InvitesTab — invite form + pending invites list
// ---------------------------------------------------------------------------

function InvitesTab({ token }: { token: string }) {
  const [invites, setInvites] = React.useState<Invite[]>([]);
  const [groups, setGroups] = React.useState<Group[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  // Invite form
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("member");
  const [selectedGroupIds, setSelectedGroupIds] = React.useState<string[]>([]);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState("");
  const [sendSuccess, setSendSuccess] = React.useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [invitesRes, groupsRes] = await Promise.all([
        gatewayFetch("/invites", token),
        gatewayFetch("/groups", token),
      ]);
      if (!invitesRes.ok) throw new Error(`Invites: ${invitesRes.status}`);
      if (!groupsRes.ok) throw new Error(`Groups: ${groupsRes.status}`);
      const invitesData = (await invitesRes.json()) as { invites: Invite[] };
      const groupsData = (await groupsRes.json()) as { groups: Group[] };
      setInvites(invitesData.invites);
      setGroups(groupsData.groups);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [token]);

  async function sendInvite(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setSendError("");
    setSendSuccess("");
    try {
      const res = await gatewayFetch("/invites", token, {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), role, groupIds: selectedGroupIds }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      const invite = (await res.json()) as Invite;
      setInvites((prev) => [invite, ...prev]);
      setEmail("");
      setRole("member");
      setSelectedGroupIds([]);
      setSendSuccess(`Invite sent to ${invite.email}`);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Failed to send invite");
    } finally {
      setSending(false);
    }
  }

  async function revokeInvite(inviteToken: string) {
    try {
      const res = await gatewayFetch(`/invites/${inviteToken}`, token, { method: "DELETE" });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? `${res.status}`);
      }
      setInvites((prev) => prev.filter((i) => i.inviteToken !== inviteToken));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to revoke invite");
    }
  }

  function toggleGroup(groupId: string) {
    setSelectedGroupIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId],
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Send invite form */}
      <Card>
        <CardHeader>
          <CardTitle>Send Invite</CardTitle>
          <CardDescription>
            Email a magic link to invite someone to this workspace. New signups go through Cognito;
            existing users accept the invite from the link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendInvite} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="alice@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                >
                  <option value="member">member</option>
                  <option value="admin">admin</option>
                </select>
              </div>
            </div>

            {groups.length > 0 && (
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-muted-foreground">
                  Initial Groups (optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {groups.map((g) => (
                    <button
                      key={g.groupId}
                      type="button"
                      onClick={() => toggleGroup(g.groupId)}
                      className={cn(
                        "rounded border px-2 py-1 text-xs transition-colors",
                        selectedGroupIds.includes(g.groupId)
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground",
                      )}
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {sendError && <p className="text-sm text-destructive">{sendError}</p>}
            {sendSuccess && <p className="text-sm text-green-600">{sendSuccess}</p>}
            <Button
              type="submit"
              disabled={sending || !email.trim()}
              className="self-start"
            >
              {sending ? "Sending…" : "Send Invite"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Pending invites */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Invites</CardTitle>
          <CardDescription>
            {loading ? "Loading…" : `${invites.length} pending invite(s)`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!loading && invites.length === 0 && (
            <p className="text-sm text-muted-foreground">No pending invites.</p>
          )}
          {invites.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="pb-2 text-left font-medium">Email</th>
                    <th className="pb-2 pr-4 text-left font-medium">Role</th>
                    <th className="pb-2 pr-4 text-left font-medium">Groups</th>
                    <th className="pb-2 pr-4 text-left font-medium">Expires</th>
                    <th className="pb-2" />
                  </tr>
                </thead>
                <tbody>
                  {invites.map((inv) => (
                    <tr key={inv.inviteToken} className="border-b last:border-0">
                      <td className="py-2 pr-4">{inv.email}</td>
                      <td className="py-2 pr-4">
                        <Badge variant={inv.role === "admin" ? "default" : "secondary"}>
                          {inv.role}
                        </Badge>
                      </td>
                      <td className="py-2 pr-4 text-xs text-muted-foreground">
                        {inv.groupIds.length > 0 ? inv.groupIds.join(", ") : "—"}
                      </td>
                      <td className="py-2 pr-4 text-xs text-muted-foreground">
                        {new Date(inv.expiresAt * 1000).toLocaleDateString()}
                      </td>
                      <td className="py-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => revokeInvite(inv.inviteToken)}
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
  );
}

// ---------------------------------------------------------------------------
// AuditTab — recent tool calls
// ---------------------------------------------------------------------------

function AuditTab({ token }: { token: string }) {
  const [entries, setEntries] = React.useState<AuditEntry[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [filterProvider, setFilterProvider] = React.useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ limit: "100" });
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
      <Card>
        <CardContent className="pt-4">
          <div className="flex flex-wrap items-end gap-3">
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
          <CardDescription>{entries.length} event(s) — most recent first</CardDescription>
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
                    <th className="pb-2 pr-4 text-left font-medium">Provider</th>
                    <th className="pb-2 pr-4 text-left font-medium">Operation</th>
                    <th className="pb-2 pr-4 text-left font-medium">Result</th>
                    <th className="pb-2 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e) => (
                    <tr key={e.id} className="border-b last:border-0">
                      <td className="py-2 pr-4 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(e.ts).toLocaleString()}
                      </td>
                      <td className="py-2 pr-4 font-mono">{e.provider}</td>
                      <td className="py-2 pr-4 font-mono">{e.operation}</td>
                      <td className="py-2 pr-4">{resultBadge(e.result)}</td>
                      <td className="py-2 text-xs text-muted-foreground">
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
