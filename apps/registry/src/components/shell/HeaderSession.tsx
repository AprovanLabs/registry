/**
 * Header session chrome — always-visible sign-in / profile area in the catalog
 * top bar. Uses the same session engines as account `SessionGate` (hosted
 * Cognito / standalone discovery) wired to `@aprovan/ui/shell` `SessionArea`.
 */

import {
  SessionArea,
  type SessionAreaStatus,
  type SessionUser,
} from "@aprovan/ui/shell";
import * as React from "react";
import { resolveSessionMode } from "@/lib/session";
import { useHostedSession } from "@/lib/session/hosted";
import { useStandaloneSession } from "@/lib/session/standalone";
import type { CatalogSession, CatalogSessionState } from "@/lib/session/types";
import { withBasePath } from "@/lib/site";

function HostedHeaderSession() {
  return <HeaderSessionView session={useHostedSession()} />;
}

function StandaloneHeaderSession() {
  return <HeaderSessionView session={useStandaloneSession()} />;
}

export function HeaderSession() {
  return resolveSessionMode() === "hosted" ? (
    <HostedHeaderSession />
  ) : (
    <StandaloneHeaderSession />
  );
}

function HeaderSessionView({ session }: { session: CatalogSession }) {
  const { state, signIn, selectScope, signOut, retry } = session;
  const [switching, setSwitching] = React.useState(false);

  const credentialsHref = withBasePath("/account/credentials");
  const permissionsHref = withBasePath("/admin/permissions");

  const links = React.useMemo(() => {
    const entries = [{ label: "Credentials", href: credentialsHref }];
    if (state.status === "ready" && state.identity.role === "admin") {
      entries.push({ label: "Permissions", href: permissionsHref });
    }
    return entries;
  }, [credentialsHref, permissionsHref, state]);

  const status: SessionAreaStatus = mapStatus(state);
  const user: SessionUser | null = mapUser(state);
  const workspaces =
    state.status === "select-scope"
      ? state.workspaces
      : state.status === "ready" && state.scope.kind === "workspace"
        ? [{ id: state.scope.id, name: state.scope.id, role: state.identity.role }]
        : [];
  const activeWorkspaceId =
    state.status === "ready" && state.scope.kind === "workspace"
      ? state.scope.id
      : null;
  const showWorkspaceSwitcher = state.status === "select-scope";

  async function handleSelectWorkspace(workspaceId: string): Promise<void> {
    if (switching) return;
    setSwitching(true);
    try {
      await selectScope(workspaceId);
      // Account surfaces are scope-scoped — reload so page data matches.
      window.location.reload();
    } finally {
      setSwitching(false);
    }
  }

  function handleSignIn(): void {
    if (state.status === "error") {
      retry();
      return;
    }
    if (state.status === "signin" && state.method.kind === "token") {
      window.location.assign(credentialsHref);
      return;
    }
    void signIn();
  }

  return (
    <SessionArea
      activeWorkspaceId={activeWorkspaceId}
      links={links}
      onSelectWorkspace={
        showWorkspaceSwitcher ? (id) => void handleSelectWorkspace(id) : undefined
      }
      onSignIn={handleSignIn}
      onSignOut={() => signOut()}
      status={status}
      switching={switching}
      user={user}
      workspaces={workspaces}
    />
  );
}

function mapStatus(state: CatalogSessionState): SessionAreaStatus {
  switch (state.status) {
    case "loading":
      return "loading";
    case "error":
    case "signin":
      return "signed-out";
    case "select-scope":
    case "ready":
      return "ready";
    default:
      return "loading";
  }
}

function mapUser(state: CatalogSessionState): SessionUser | null {
  if (state.status === "ready") {
    return { email: state.identity.principal };
  }
  if (state.status === "select-scope") {
    return { email: "Select workspace" };
  }
  return null;
}
