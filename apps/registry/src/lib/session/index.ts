/**
 * Session mode resolution and shared session helpers for the catalog.
 */

import type { SessionMode } from "./types";

export type {
  AuthConfigResponse,
  CatalogSession,
  CatalogSessionState,
  SessionMode,
  SigninMethod,
  WhoamiResponse,
  WorkspaceSummary,
} from "./types";

export {
  clearStandaloneOidcPending,
  loadStandaloneOidcPending,
  saveStandaloneOidcPending,
  STANDALONE_OIDC_PENDING_KEY,
  type StandaloneOidcPending,
} from "./oidc-pending";

/**
 * Build-time session mode. Unset / unknown → `standalone` (D1).
 * Only the aprovan-operated deploy sets `hosted`.
 */
export function resolveSessionMode(): SessionMode {
  const mode = import.meta.env.PUBLIC_SESSION_MODE as string | undefined;
  return mode === "hosted" ? "hosted" : "standalone";
}
