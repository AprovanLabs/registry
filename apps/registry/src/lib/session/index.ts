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

const PRODUCTION_CATALOG_SITE = "https://aprovan.com";

function isProductionCatalogHost(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname === "aprovan.com";
}

/**
 * Build-time session mode. Unset / unknown → `standalone` (D1).
 * Production catalog (`aprovan.com/registry`) always resolves to `hosted` so
 * Sign in never falls through to standalone `/auth/config` discovery.
 */
export function resolveSessionMode(): SessionMode {
  const mode = import.meta.env.PUBLIC_SESSION_MODE as string | undefined;
  if (mode === "hosted") return "hosted";
  if (import.meta.env.PUBLIC_SITE_URL === PRODUCTION_CATALOG_SITE) return "hosted";
  if (isProductionCatalogHost()) return "hosted";
  return "standalone";
}
