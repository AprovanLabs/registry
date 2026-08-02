/**
 * Optional gateway session for catalog playground/try-it — no Cognito.
 *
 * Local standalone hosts may persist a gateway token + workspace id in
 * sessionStorage (the same keys the old registry UI used). When present,
 * playground and try-it calls include them; when absent, the gateway decides
 * whether a call needs auth (public samples still work).
 */

import { GatewayClient } from "@aprovan/registry-main";
import { loadStoredSession } from "@aprovan/ui/gateway";
import { gatewayBaseUrl } from "@/lib/site";

const SESSION_KEYS = {
  token: "utdk_gateway_token",
  workspace: "utdk_gateway_workspace",
} as const;

export function loadSession(): { token: string; workspaceId: string } | null {
  return loadStoredSession(SESSION_KEYS);
}

/** Gateway client for catalog playground surfaces. */
export function createPlaygroundGatewayClient(): GatewayClient {
  return new GatewayClient({
    baseUrl: gatewayBaseUrl(),
    getToken: async () => loadSession()?.token,
    getWorkspaceId: () => loadSession()?.workspaceId,
  });
}

/**
 * Whether the catalog should host live apps/workflows (local standalone)
 * instead of deferring to the product app.
 */
export function isStandaloneCatalogHost(): boolean {
  const host = import.meta.env.PUBLIC_ACCOUNT_HOST as string | undefined;
  if (host === "local") return true;
  if (host === "chat") return false;
  return import.meta.env.DEV;
}
