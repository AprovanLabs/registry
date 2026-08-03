/**
 * Standalone catalog session — registry-server pluggable auth.
 *
 * Discovers mode via GET /auth/config:
 *   - none → auto-advance (sentinel token, no bearer)
 *   - api-key → paste API key
 *   - oidc + browserClientId → PKCE against advertised issuer; paste-bearer fallback
 *   - oidc without browserClientId → paste-bearer only
 *
 * Identity via GET /whoami. Widget client uses Authorization: Bearer and
 * X-Registry-Tenant for explicit tenant pin.
 */

import { GatewayClient } from "@aprovan/registry-main";
import { createAuthClient, type AuthClient } from "@aprovan/ui/auth";
import * as React from "react";
import {
  clearSession,
  LOCAL_AUTH_SENTINEL,
  loadSession,
  saveSession,
} from "@/lib/gateway-session";
import { gatewayBaseUrl, withBasePath } from "@/lib/site";
import {
  clearStandaloneOidcPending,
  loadStandaloneOidcPending,
  saveStandaloneOidcPending,
} from "./oidc-pending";
import type {
  AuthConfigResponse,
  CatalogSession,
  CatalogSessionState,
  SigninMethod,
  WhoamiResponse,
} from "./types";

function createStandaloneClient(
  token: string | undefined,
  tenantId: string | undefined,
): GatewayClient {
  return new GatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () =>
      token && token !== LOCAL_AUTH_SENTINEL ? token : undefined,
    getWorkspaceId: () => tenantId,
    scopeHeader: "X-Registry-Tenant",
  });
}

async function fetchAuthConfig(): Promise<AuthConfigResponse> {
  const base = gatewayBaseUrl();
  const res = await fetch(`${base}/auth/config`);
  if (!res.ok) {
    throw new Error(`GET /auth/config failed (${res.status}) at ${base}`);
  }
  return (await res.json()) as AuthConfigResponse;
}

async function fetchWhoami(
  token: string | undefined,
  tenantId?: string,
): Promise<WhoamiResponse> {
  const client = createStandaloneClient(token, tenantId);
  return client.request<WhoamiResponse>("/whoami", true);
}

function signinMethodFor(config: AuthConfigResponse): SigninMethod {
  if (config.mode === "none") return { kind: "none" };
  if (
    config.mode === "oidc" &&
    config.oidc?.browserClientId &&
    config.oidc.issuer
  ) {
    return {
      kind: "oidc-pkce",
      issuer: config.oidc.issuer,
      clientId: config.oidc.browserClientId,
    };
  }
  return { kind: "token" };
}

function createOidcClient(issuer: string, clientId: string): AuthClient {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return createAuthClient({
    authority: issuer,
    clientId,
    redirectUri: `${origin}${withBasePath("/auth/callback")}`,
    postLogoutRedirectUri: `${origin}${withBasePath("/")}`,
  });
}

/** Complete a standalone OIDC PKCE redirect (used by /auth/callback). */
export async function completeStandaloneOidcSignIn(): Promise<string> {
  const pending = loadStandaloneOidcPending();
  if (!pending) {
    throw new Error("No pending standalone OIDC sign-in.");
  }
  const client = createOidcClient(pending.issuer, pending.clientId);
  const user = await client.completeSignIn();
  clearStandaloneOidcPending();
  const whoami = await fetchWhoami(user.accessToken);
  saveSession(user.accessToken, whoami.tenantId);
  return whoami.tenantId;
}

export function useStandaloneSession(): CatalogSession {
  const [state, setState] = React.useState<CatalogSessionState>({
    status: "loading",
  });
  const [config, setConfig] = React.useState<AuthConfigResponse | null>(null);
  const [retryKey, setRetryKey] = React.useState(0);

  const activate = React.useCallback(
    async (
      authConfig: AuthConfigResponse,
      token: string | undefined,
      tenantHint?: string,
    ): Promise<void> => {
      if (authConfig.mode === "none") {
        saveSession(LOCAL_AUTH_SENTINEL, tenantHint ?? "local");
        try {
          const whoami = await fetchWhoami(undefined, tenantHint);
          saveSession(LOCAL_AUTH_SENTINEL, whoami.tenantId);
          setState({
            status: "ready",
            client: createStandaloneClient(undefined, whoami.tenantId),
            scope: { kind: "tenant", id: whoami.tenantId },
            identity: { principal: whoami.principal, role: whoami.role },
          });
        } catch (err) {
          setState({
            status: "error",
            message:
              err instanceof Error
                ? err.message
                : `Could not reach the gateway at ${gatewayBaseUrl()}.`,
          });
        }
        return;
      }

      if (!token || token === LOCAL_AUTH_SENTINEL) {
        setState({
          status: "signin",
          method: signinMethodFor(authConfig),
        });
        return;
      }

      try {
        const whoami = await fetchWhoami(token, tenantHint);
        saveSession(token, whoami.tenantId);
        setState({
          status: "ready",
          client: createStandaloneClient(token, whoami.tenantId),
          scope: { kind: "tenant", id: whoami.tenantId },
          identity: { principal: whoami.principal, role: whoami.role },
        });
      } catch (err) {
        clearSession();
        const message =
          err instanceof Error ? err.message : "Invalid credential.";
        setState({
          status: "signin",
          method: signinMethodFor(authConfig),
          error: message,
        });
      }
    },
    [],
  );

  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      setState({ status: "loading" });
      try {
        const authConfig = await fetchAuthConfig();
        if (cancelled) return;
        setConfig(authConfig);
        const stored = loadSession();
        await activate(
          authConfig,
          stored?.token,
          stored?.workspaceId,
        );
      } catch (err) {
        if (!cancelled) {
          setState({
            status: "error",
            message:
              err instanceof Error
                ? err.message
                : `Could not reach the gateway at ${gatewayBaseUrl()}.`,
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activate, retryKey]);

  const signIn = React.useCallback(
    async (input?: { token?: string; tenant?: string }) => {
      const authConfig = config ?? (await fetchAuthConfig());
      setConfig(authConfig);

      // PKCE redirect when advertised and no pasted token.
      if (
        !input?.token &&
        authConfig.mode === "oidc" &&
        authConfig.oidc?.browserClientId &&
        authConfig.oidc.issuer
      ) {
        const issuer = authConfig.oidc.issuer;
        const clientId = authConfig.oidc.browserClientId;
        saveStandaloneOidcPending({ issuer, clientId });
        const oidc = createOidcClient(issuer, clientId);
        const returnPath = `${window.location.pathname}${window.location.search}`;
        await oidc.signIn(returnPath || withBasePath("/account/credentials"));
        return;
      }

      const token = input?.token?.trim();
      if (!token) {
        setState({
          status: "signin",
          method: signinMethodFor(authConfig),
          error: "Enter a bearer token or API key.",
        });
        return;
      }

      setState({ status: "loading" });
      await activate(authConfig, token, input?.tenant);
    },
    [activate, config],
  );

  const selectScope = React.useCallback(
    async (id: string) => {
      const stored = loadSession();
      const token = stored?.token;
      const authConfig = config ?? (await fetchAuthConfig());
      setState({ status: "loading" });
      await activate(authConfig, token, id);
    },
    [activate, config],
  );

  const signOut = React.useCallback(() => {
    clearSession();
    clearStandaloneOidcPending();
    const method = config ? signinMethodFor(config) : { kind: "token" as const };
    setState({
      status: "signin",
      method: method.kind === "none" ? { kind: "token" } : method,
    });
  }, [config]);

  const retry = React.useCallback(() => {
    setRetryKey((k) => k + 1);
  }, []);

  return { state, signIn, selectScope, signOut, retry };
}
