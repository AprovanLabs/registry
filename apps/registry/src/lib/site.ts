/**
 * Gateway base URL for browser calls.
 *
 * Resolution order: `PUBLIC_GATEWAY_URL` → local gateway (`http://localhost:4000`)
 * in dev → same-origin `/api/gateway` in production builds (CloudFront proxies
 * that prefix to the workspace container).
 */
export function gatewayBaseUrl(): string {
  const configured = import.meta.env.PUBLIC_GATEWAY_URL as string | undefined;
  if (configured) return configured.replace(/\/$/, "");
  return import.meta.env.DEV ? "http://localhost:4000" : "/api/gateway";
}

export function withBasePath(pathname: string): string {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `${normalizedBase}${normalizedPath}` || "/";
}
