/** sessionStorage helpers for pending standalone OIDC PKCE. */

export const STANDALONE_OIDC_PENDING_KEY = "utdk_standalone_oidc";

export type StandaloneOidcPending = {
  issuer: string;
  clientId: string;
};

export function saveStandaloneOidcPending(pending: StandaloneOidcPending): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(STANDALONE_OIDC_PENDING_KEY, JSON.stringify(pending));
}

export function loadStandaloneOidcPending(): StandaloneOidcPending | null {
  if (typeof sessionStorage === "undefined") return null;
  const raw = sessionStorage.getItem(STANDALONE_OIDC_PENDING_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StandaloneOidcPending;
    if (
      typeof parsed.issuer === "string" &&
      typeof parsed.clientId === "string" &&
      parsed.issuer &&
      parsed.clientId
    ) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

export function clearStandaloneOidcPending(): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(STANDALONE_OIDC_PENDING_KEY);
}
