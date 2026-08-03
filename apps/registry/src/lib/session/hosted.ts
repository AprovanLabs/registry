/**
 * Hosted catalog session — Cognito PKCE + product gateway workspace resolution.
 *
 * Restored shape from registry history (`51e9ab1` auth.ts + AuthGate): shared
 * `@aprovan/ui/auth` client, silent reuse of an existing same-origin product
 * session, then `useGatewaySession` for workspace pick. Widget client sends
 * `X-Aprovan-Authorization` / `X-Aprovan-Workspace` (CloudFront OAC).
 */

import { GatewayClient } from "@aprovan/registry-main";
import {
  configureAuth,
  resolveAuthConfig,
  type AuthClient,
} from "@aprovan/ui/auth";
import {
  createGatewayClient,
  useGatewaySession,
} from "@aprovan/ui/gateway";
import * as React from "react";
import {
  clearSession,
  LOCAL_AUTH_SENTINEL,
  loadSession,
  saveSession,
} from "@/lib/gateway-session";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";
import type {
  CatalogSession,
  CatalogSessionState,
  WorkspaceSummary,
} from "./types";

let hostedAuth: AuthClient | null | undefined;

function getHostedAuth(): AuthClient | null {
  if (hostedAuth !== undefined) return hostedAuth;
  const config = resolveAuthConfig(import.meta.env as Record<string, string | undefined>, {
    basePath: import.meta.env.BASE_URL,
    redirectPath: "/auth/callback",
  });
  hostedAuth = configureAuth(config);
  return hostedAuth;
}

function createHostedWidgetClient(workspaceId: string): GatewayClient {
  return new GatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => {
      const auth = getHostedAuth();
      const token = auth ? await auth.getAccessToken() : null;
      if (token) return token;
      const stored = loadSession();
      if (!stored?.token || stored.token === LOCAL_AUTH_SENTINEL) return undefined;
      return stored.token;
    },
    getWorkspaceId: () => workspaceId,
    authHeader: "X-Aprovan-Authorization",
  });
}

function createHostedSessionClient() {
  return createGatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => {
      const auth = getHostedAuth();
      return (await auth?.getAccessToken()) ?? null;
    },
  });
}

export function useHostedSession(): CatalogSession {
  const [boot, setBoot] = React.useState<{
    phase: "loading" | "signin" | "authed" | "error";
    error?: string;
    principal?: string;
  }>({ phase: "loading" });
  const [workspaceId, setWorkspaceId] = React.useState<string | undefined>(
    () => loadSession()?.workspaceId,
  );
  const [retryKey, setRetryKey] = React.useState(0);

  const sessionClient = React.useMemo(
    () => createHostedSessionClient(),
    // retryKey forces a fresh client + refresh after retry/sign-out
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [retryKey],
  );

  const gatewaySession = useGatewaySession(
    boot.phase === "authed" ? sessionClient : null,
    boot.phase === "authed",
  );

  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      setBoot({ phase: "loading" });
      const auth = getHostedAuth();
      if (!auth) {
        if (!cancelled) {
          setBoot({
            phase: "error",
            error:
              "Cognito is not configured. Set PUBLIC_COGNITO_AUTHORITY and PUBLIC_COGNITO_CLIENT_ID.",
          });
        }
        return;
      }
      try {
        const user = await auth.getUser();
        if (cancelled) return;
        if (!user) {
          setBoot({ phase: "signin" });
          return;
        }
        setBoot({
          phase: "authed",
          principal: user.email ?? user.sub,
        });
      } catch (err) {
        if (!cancelled) {
          setBoot({
            phase: "signin",
            error: err instanceof Error ? err.message : "Failed to restore session.",
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [retryKey]);

  React.useEffect(() => {
    if (gatewaySession.status === "ready" && gatewaySession.workspaceId) {
      setWorkspaceId(gatewaySession.workspaceId);
      const token = loadSession()?.token;
      // Mirror workspace into sessionStorage for legacy readers.
      if (token && token !== LOCAL_AUTH_SENTINEL) {
        saveSession(token, gatewaySession.workspaceId);
      } else {
        void getHostedAuth()
          ?.getAccessToken()
          .then((access) => {
            if (access && gatewaySession.workspaceId) {
              saveSession(access, gatewaySession.workspaceId);
            }
          });
      }
    }
  }, [gatewaySession.status, gatewaySession.workspaceId]);

  const state: CatalogSessionState = React.useMemo(() => {
    if (boot.phase === "loading") return { status: "loading" };
    if (boot.phase === "error") {
      return { status: "error", message: boot.error ?? "Session error." };
    }
    if (boot.phase === "signin") {
      return {
        status: "signin",
        method: { kind: "cognito" },
        ...(boot.error ? { error: boot.error } : {}),
      };
    }

    if (gatewaySession.status === "loading" || gatewaySession.status === "idle") {
      return { status: "loading" };
    }
    if (gatewaySession.status === "unauthenticated") {
      return {
        status: "signin",
        method: { kind: "cognito" },
        error: "Session expired. Sign in again.",
      };
    }
    if (gatewaySession.status === "error") {
      return {
        status: "error",
        message:
          gatewaySession.error ??
          `Could not reach the gateway at ${gatewayBaseUrl()}.`,
      };
    }
    if (gatewaySession.status === "no-workspace") {
      const workspaces: WorkspaceSummary[] = gatewaySession.workspaces.map((w) => ({
        id: w.id,
        name: w.name,
        role: w.role,
      }));
      return { status: "select-scope", workspaces };
    }

    const id = gatewaySession.workspaceId ?? workspaceId;
    if (!id) return { status: "loading" };

    const role =
      gatewaySession.workspaces.find((w) => w.id === id)?.role ?? "member";

    return {
      status: "ready",
      client: createHostedWidgetClient(id),
      scope: { kind: "workspace", id },
      identity: {
        principal: boot.principal ?? "signed-in",
        role,
      },
    };
  }, [boot, gatewaySession, workspaceId]);

  const signIn = React.useCallback(async () => {
    const auth = getHostedAuth();
    if (!auth) return;
    const returnPath = `${window.location.pathname}${window.location.search}`;
    await auth.signIn(returnPath || withBasePath("/account/credentials"));
  }, []);

  const selectScope = React.useCallback(
    async (id: string) => {
      await gatewaySession.select(id);
      setWorkspaceId(id);
      const access = await getHostedAuth()?.getAccessToken();
      if (access) saveSession(access, id);
    },
    [gatewaySession],
  );

  const signOut = React.useCallback(() => {
    clearSession();
    void getHostedAuth()?.signOut();
    setWorkspaceId(undefined);
    setBoot({ phase: "signin" });
    setRetryKey((k) => k + 1);
  }, []);

  const retry = React.useCallback(() => {
    setRetryKey((k) => k + 1);
  }, []);

  return { state, signIn, selectScope, signOut, retry };
}

/** Exposed for /auth/callback completion. */
export { getHostedAuth };
