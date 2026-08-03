/**
 * Catalog session contract — one state machine, two engines (hosted / standalone).
 * See openspec change `registry-standalone-credentials` tech-plan interface 5.
 */

import type { GatewayClient } from "@aprovan/registry-main";

export type SessionMode = "hosted" | "standalone";

export type WorkspaceSummary = {
  id: string;
  name: string;
  role: string;
};

export type SigninMethod =
  | { kind: "cognito" }
  | { kind: "oidc-pkce"; issuer: string; clientId: string }
  | { kind: "token" }
  | { kind: "none" };

export type CatalogSessionState =
  | { status: "loading" }
  | { status: "signin"; method: SigninMethod; error?: string }
  | { status: "select-scope"; workspaces: WorkspaceSummary[] }
  | {
      status: "ready";
      client: GatewayClient;
      scope: { kind: "workspace" | "tenant"; id: string };
      identity: { principal: string; role: string };
    }
  | { status: "error"; message: string };

export interface CatalogSession {
  state: CatalogSessionState;
  signIn(input?: { token?: string; tenant?: string }): Promise<void>;
  selectScope(id: string): Promise<void>;
  signOut(): void;
  retry(): void;
}

/** Public GET /auth/config shape (registry-server). */
export type AuthConfigResponse = {
  mode: "oidc" | "api-key" | "none";
  oidc?: { issuer: string; audience: string; browserClientId?: string };
};

/** Authenticated GET /whoami shape (registry-server). */
export type WhoamiResponse = {
  principal: string;
  tenantId: string;
  role: "admin" | "member";
  groupIds: string[];
  mode: "oidc" | "api-key" | "none";
};
