/**
 * Gateway session for local catalog surfaces (playground, try-it, account pages).
 *
 * Persists an optional bearer token + workspace id in sessionStorage (legacy
 * keys). No Cognito on the public catalog — local `auth none` gateways accept
 * unauthenticated session calls.
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

/** Gateway client for catalog playground / try-it surfaces. */
export function createPlaygroundGatewayClient(): GatewayClient {
  return new GatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => resolveToken(),
    getWorkspaceId: () => resolveWorkspaceId(),
  });
}

/** UI gateway client for session/workspace endpoints (proper CloudFront headers). */
export function createSessionGatewayClient(
  workspaceId?: string,
): UiGatewayClient {
  return createGatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => resolveToken(),
    getWorkspaceId: () => resolveWorkspaceId(workspaceId),
  });
}

/** Registry-main client injected into registry-ui credential/admin widgets. */
export function createWidgetGatewayClient(
  workspaceId?: string,
): GatewayClient {
  return new GatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => resolveToken(),
    getWorkspaceId: () => resolveWorkspaceId(workspaceId),
  });
}

/**
 * Whether the catalog should host live standalone surfaces (account pages,
 * apps panel) instead of deferring to the product app.
 */
export function isStandaloneCatalogHost(): boolean {
  const host = import.meta.env.PUBLIC_ACCOUNT_HOST as string | undefined;
  if (host === "local") return true;
  if (host === "chat") return false;
  return import.meta.env.DEV;
}
