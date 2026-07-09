/**
 * AuthGate — the registry UI's Cognito sign-in + workspace-picker gate.
 *
 * Wraps any page that needs an authenticated gateway session. It:
 *   1. Checks for a cached Cognito user (PKCE); if none, shows "Sign in".
 *   2. Calls `GET /session`; if no active workspace, shows the picker.
 *   3. Otherwise renders children with `{ token, workspaceId, signOut }`.
 *
 * The access token is kept fresh by the `UserManager` silent-renew loop
 * (see `lib/auth.ts`); `saveSession` mirrors it into `sessionStorage` so
 * legacy call sites (`OAuthCallback`, `AddCredentialForm`) keep working.
 */

import { LogInIcon } from "lucide-react";
import * as React from "react";
import { WorkspacePicker } from "@/components/auth/WorkspacePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getAuthenticatedUser,
  isAuthConfigured,
  signIn as cognitoSignIn,
  signOut as cognitoSignOut,
} from "@/lib/auth";
import { GatewayError, getSession, saveSession } from "@/lib/gateway";

export interface AuthContext {
  token: string;
  workspaceId: string;
  signOut: () => Promise<void>;
}

type Phase = "loading" | "needs-config" | "signed-out" | "no-workspace" | "ready";

export function AuthGate({
  caption,
  children,
}: {
  /** Describes what the page needs, shown on the sign-in card. */
  caption: string;
  children: (ctx: AuthContext) => React.ReactNode;
}) {
  const [phase, setPhase] = React.useState<Phase>("loading");
  const [token, setToken] = React.useState("");
  const [workspaceId, setWorkspaceId] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    void init();
  }, []);

  async function init(): Promise<void> {
    if (!isAuthConfigured()) {
      setPhase("needs-config");
      return;
    }
    try {
      const user = await getAuthenticatedUser();
      if (!user || user.expired) {
        setPhase("signed-out");
        return;
      }
      await activate(user.access_token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start session.");
      setPhase("signed-out");
    }
  }

  /** Resolve the active workspace for a fresh access token. */
  async function activate(accessToken: string): Promise<void> {
    try {
      const session = await getSession(accessToken);
      setToken(accessToken);
      if (session.activeWorkspaceId) {
        setWorkspaceId(session.activeWorkspaceId);
        saveSession(accessToken, session.activeWorkspaceId);
        setPhase("ready");
      } else {
        setPhase("no-workspace");
      }
    } catch (err) {
      // 401 → the access token is no good; re-sign-in. Other errors surface.
      if (err instanceof GatewayError && err.status === 401) {
        setPhase("signed-out");
      } else {
        setError(err instanceof Error ? err.message : "Failed to load session.");
        setPhase("signed-out");
      }
    }
  }

  async function handleSignIn(): Promise<void> {
    setError("");
    try {
      await cognitoSignIn(
        `${window.location.pathname}${window.location.search}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start sign-in.");
    }
  }

  async function handleSignOut(): Promise<void> {
    await cognitoSignOut();
    setToken("");
    setWorkspaceId("");
    setPhase("signed-out");
  }

  function handlePicked(wsId: string): void {
    setWorkspaceId(wsId);
    saveSession(token, wsId);
    setPhase("ready");
  }

  if (phase === "ready") {
    return (
      <>
        {children({ token, workspaceId, signOut: handleSignOut })}
      </>
    );
  }

  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>
            {phase === "no-workspace" ? "Choose a workspace" : "Sign in required"}
          </CardTitle>
          <CardDescription>
            {phase === "needs-config"
              ? "Cognito sign-in is not configured for this environment."
              : phase === "no-workspace"
                ? "Pick a workspace to continue."
                : `Sign in via Cognito and pick a workspace to ${caption}.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {phase === "loading" && (
            <div className="h-2 w-full animate-pulse rounded bg-muted" />
          )}
          {phase === "no-workspace" && token ? (
            <WorkspacePicker token={token} onPicked={handlePicked} />
          ) : null}
          {(phase === "signed-out" || phase === "needs-config") && (
            <Button
              disabled={phase === "needs-config"}
              onClick={handleSignIn}
            >
              <LogInIcon />
              Sign in with Cognito
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
