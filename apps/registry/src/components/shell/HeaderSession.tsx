/**
 * HeaderSession — the always-visible session area in the registry top bar.
 *
 * Composes the shared `@aprovan/ui/shell` components (workspace switcher +
 * profile menu) over the shared auth (`lib/auth`) and gateway session
 * (`@aprovan/ui/gateway`) clients. Patchwork renders the same components, so
 * both apps present an identical login/workspace flow.
 */

import { createGatewayClient, useGatewaySession } from "@aprovan/ui/gateway";
import {
  SessionArea,
  type SessionAreaStatus,
  type SessionUser,
} from "@aprovan/ui/shell";
import * as React from "react";
import {
  getAccessToken,
  getAuthenticatedUser,
  isAuthConfigured,
  signIn,
  signOut,
} from "@/lib/auth";
import { saveSession } from "@/lib/gateway";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";

export function HeaderSession() {
  const [authStatus, setAuthStatus] = React.useState<
    "loading" | "unconfigured" | "signed-out" | "ready"
  >("loading");
  const [user, setUser] = React.useState<SessionUser | null>(null);
  const [switching, setSwitching] = React.useState(false);

  const client = React.useMemo(
    () =>
      createGatewayClient({
        baseUrl: gatewayBaseUrl(),
        getToken: getAccessToken,
      }),
    [],
  );

  React.useEffect(() => {
    if (!isAuthConfigured()) {
      setAuthStatus("unconfigured");
      return;
    }
    void getAuthenticatedUser().then((current) => {
      if (current && !current.expired) {
        const profile = current.profile ?? {};
        setUser({
          email: typeof profile.email === "string" ? profile.email : undefined,
          name: typeof profile.name === "string" ? profile.name : undefined,
        });
        setAuthStatus("ready");
      } else {
        setAuthStatus("signed-out");
      }
    });
  }, []);

  const session = useGatewaySession(client, authStatus === "ready");

  async function handleSelectWorkspace(workspaceId: string): Promise<void> {
    setSwitching(true);
    try {
      await session.select(workspaceId);
      const token = await getAccessToken();
      if (token) saveSession(token, workspaceId);
      // Page data (credentials, permissions) is workspace-scoped — reload.
      window.location.reload();
    } finally {
      setSwitching(false);
    }
  }

  const status: SessionAreaStatus =
    authStatus === "ready" && session.status === "loading"
      ? "loading"
      : authStatus;

  return (
    <SessionArea
      activeWorkspaceId={session.workspaceId}
      links={[
        { label: "Credentials", href: withBasePath("/account/credentials") },
        { label: "Permissions", href: withBasePath("/admin/permissions") },
        { label: "MCP setup", href: withBasePath("/docs/mcp") },
      ]}
      onSelectWorkspace={handleSelectWorkspace}
      onSignIn={() =>
        void signIn(`${window.location.pathname}${window.location.search}`)
      }
      onSignOut={async () => {
        await signOut();
        setAuthStatus("signed-out");
        setUser(null);
      }}
      status={status}
      switching={switching}
      user={user}
      workspaces={session.workspaces}
    />
  );
}
