/**
 * Gateway session storage + clients for catalog playground / try-it surfaces.
 *
 * Account pages use `lib/session/*` engines; this module keeps the shared
 * sessionStorage keys and playground clients. Mode selects transport headers.
 */

import { GatewayClient } from "@aprovan/registry-main";
import {
  clearStoredSession,
  createGatewayClient,
  loadStoredSession,
  saveStoredSession,
  type GatewayClient as UiGatewayClient,
  type SessionStoreKeys,
} from "@aprovan/ui/gateway";
import { resolveSessionMode } from "@/lib/session";
import { gatewayBaseUrl } from "@/lib/site";

export const SESSION_KEYS: SessionStoreKeys = {
  token: "utdk_gateway_token",
  workspace: "utdk_gateway_workspace",
};

/** Sentinel persisted when the gateway runs in auth `none` mode (no bearer token). */
export const LOCAL_AUTH_SENTINEL = "__local__";

export function loadSession(): { token: string; workspaceId: string } | null {
  return loadStoredSession(SESSION_KEYS);
}

export function saveSession(token: string, workspaceId: string): void {
  saveStoredSession(SESSION_KEYS, { token, workspaceId });
}

export function clearSession(): void {
  clearStoredSession(SESSION_KEYS);
}

function resolveToken(): string | undefined {
  const stored = loadSession();
  if (!stored?.token || stored.token === LOCAL_AUTH_SENTINEL) return undefined;
  return stored.token;
}

function resolveWorkspaceId(workspaceId?: string): string | undefined {
  return workspaceId ?? loadSession()?.workspaceId;
}

function modeClientOptions(workspaceId?: string) {
  const mode = resolveSessionMode();
  if (mode === "hosted") {
    return {
      baseUrl: gatewayBaseUrl(),
      getToken: async () => resolveToken(),
      getWorkspaceId: () => resolveWorkspaceId(workspaceId),
      authHeader: "X-Aprovan-Authorization" as const,
    };
  }
  return {
    baseUrl: gatewayBaseUrl(),
    getToken: async () => resolveToken(),
    getWorkspaceId: () => resolveWorkspaceId(workspaceId),
    scopeHeader: "X-Registry-Tenant" as const,
  };
}

/** Gateway client for catalog playground / try-it surfaces. */
export function createPlaygroundGatewayClient(): GatewayClient {
  return new GatewayClient(modeClientOptions());
}

/** UI gateway client for session/workspace endpoints (hosted CloudFront headers). */
export function createSessionGatewayClient(): UiGatewayClient {
  return createGatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => resolveToken() ?? null,
  });
}

/** Registry-main client for ad-hoc use outside the session gate. */
export function createWidgetGatewayClient(
  workspaceId?: string,
): GatewayClient {
  return new GatewayClient(modeClientOptions(workspaceId));
}
