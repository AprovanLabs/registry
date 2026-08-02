/**
 * Catalog account/admin hosting mode.
 *
 * Production builds default to MovedNotice stubs that deep-link into chat.
 * Local / self-hosted catalogs set `PUBLIC_ACCOUNT_HOST=local` (or run
 * `astro dev`, which defaults to live pages) to compose registry-ui widgets.
 */

import { isStandaloneCatalogHost } from "@/lib/gateway-session";

const PRODUCT_CHAT_URL = "https://aprovan.com/chat/";

/** Whether this build renders live credential/admin pages (not MovedNotice). */
export function isLocalAccountHost(): boolean {
  return isStandaloneCatalogHost();
}

/** Deep-link URL for chat native surfaces (MovedNotice CTAs, external stubs). */
export function chatNativeUrl(
  surface: "credentials" | "admin",
  provider?: string,
): string {
  const params = new URLSearchParams({ native: surface });
  if (provider) params.set("provider", provider);
  return `${PRODUCT_CHAT_URL}?${params.toString()}`;
}
