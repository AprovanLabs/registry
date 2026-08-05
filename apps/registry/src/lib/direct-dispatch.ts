/**
 * Browser-direct dispatch for credential-free provider calls.
 *
 * The playground's sandbox emits a `service-call` for every `tools.*` call and
 * hands it to a {@link Transport}. This module supplies a transport that picks
 * a destination per call:
 *
 *  - the call resolves to a route in `/catalog/credential-free.json` → `fetch`
 *    it straight from the visitor's browser to the provider. No gateway, no
 *    credential, no account. The visitor's own IP carries the provider's
 *    anonymous rate limit.
 *  - anything else → the existing gateway transport, unchanged. Gateway
 *    authentication is untouched, and no server-side proxy is introduced.
 *
 * Routing lives at the transport layer rather than inside `lib/sandbox.ts` on
 * purpose: `instrument()` wraps the transport, so both destinations produce the
 * same `call:start` / `call:end` events and the Live-execution panel shows real
 * spans and real latency for direct calls too.
 */

import { TransportError, type Transport, type TransportCallOptions } from "@utdk/remote";
import {
  routeKey,
  type CredentialFreeManifest,
  type CredentialFreeRoute,
} from "@/lib/credential-free";
import { withBasePath } from "@/lib/site";

export type CredentialFreeRoutes = ReadonlyMap<string, CredentialFreeRoute>;

export const NO_ROUTES: CredentialFreeRoutes = new Map();

/**
 * Load the build-time routing table. Resolves to an empty map when the file is
 * missing so an older deploy degrades to "everything needs the gateway"
 * instead of breaking the page.
 */
export async function fetchCredentialFreeRoutes(): Promise<CredentialFreeRoutes> {
  try {
    const response = await fetch(withBasePath("/catalog/credential-free.json"));
    if (!response.ok) return NO_ROUTES;
    const body = (await response.json()) as CredentialFreeManifest;
    return new Map(
      (body.routes ?? []).map((route) => [
        routeKey(route.provider, route.operation),
        route,
      ]),
    );
  } catch {
    return NO_ROUTES;
  }
}

/** Build the provider request for a route from the script's call arguments. */
function buildRequestUrl(
  route: CredentialFreeRoute,
  args: Record<string, unknown>,
): string {
  let path = route.path;

  for (const parameter of route.parameters) {
    if (parameter.location !== "path") continue;
    const value = args[parameter.name];
    if (value === undefined || value === null || value === "") {
      throw new TransportError(
        `${route.provider}.${route.operation} needs "${parameter.name}".`,
        400,
      );
    }
    path = path.split(`{${parameter.name}}`).join(encodeURIComponent(String(value)));
  }

  const unresolved = /\{([^}]+)\}/u.exec(path);
  if (unresolved) {
    throw new TransportError(
      `${route.provider}.${route.operation} needs "${unresolved[1]}".`,
      400,
    );
  }

  const url = new URL(`${route.baseUrl}${path}`);
  for (const parameter of route.parameters) {
    if (parameter.location !== "query") continue;
    const value = args[parameter.name];
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) url.searchParams.append(parameter.name, String(item));
    } else {
      url.searchParams.set(parameter.name, String(value));
    }
  }

  return url.toString();
}

function isRateLimited(response: Response): boolean {
  if (response.status === 429) return true;
  if (response.status !== 403) return false;
  // GitHub answers an exhausted anonymous quota with 403 + this header;
  // `Access-Control-Expose-Headers` makes it readable cross-origin. If a
  // provider hides it, treat a bare 403 as a rate limit too — an anonymous
  // caller has no other reason to be forbidden on an allowlisted public read.
  const remaining = response.headers.get("x-ratelimit-remaining");
  return remaining === null || remaining === "0";
}

async function readErrorDetail(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { message?: string; error?: string };
    return body.message ?? body.error ?? "";
  } catch {
    return "";
  }
}

/** Transport that calls the provider's public API straight from the browser. */
export function createDirectTransport(routes: CredentialFreeRoutes): Transport {
  return {
    async call(provider, operation, args, options?: TransportCallOptions) {
      const route = routes.get(routeKey(provider, operation));
      if (!route) {
        throw new TransportError(
          `${provider}.${operation} has no credential-free route.`,
          400,
        );
      }

      const url = buildRequestUrl(route, args);
      let response: Response;
      try {
        response = await fetch(url, {
          method: route.method,
          headers: { ...(route.headers ?? {}) },
          // No cookies, no auth: this is a public, anonymous read.
          credentials: "omit",
          signal: options?.signal ?? null,
        });
      } catch (error) {
        throw new TransportError(
          `${provider}.${operation} could not reach ${route.baseUrl} (${
            error instanceof Error ? error.message : String(error)
          }).`,
        );
      }

      if (isRateLimited(response)) {
        const reset = response.headers.get("x-ratelimit-reset");
        const resetHint = reset
          ? ` Quota resets at ${new Date(Number(reset) * 1000).toLocaleTimeString()}.`
          : "";
        throw new TransportError(
          `${provider}.${operation} was rate-limited (${response.status}). ${
            route.rateLimitHint ??
            "This provider limits anonymous requests per IP address."
          }${resetHint}`,
          response.status,
        );
      }

      if (!response.ok) {
        const detail = await readErrorDetail(response);
        throw new TransportError(
          detail
            ? `${provider}.${operation} failed (${response.status}): ${detail}`
            : `${provider}.${operation} failed (${response.status}).`,
          response.status,
        );
      }

      if (response.status === 204) return undefined;
      const text = await response.text();
      if (!text) return undefined;
      try {
        return JSON.parse(text) as unknown;
      } catch {
        return text;
      }
    },
  };
}

export interface RoutingTransportOptions {
  routes: CredentialFreeRoutes;
  /** Everything that is not credential-free goes here. */
  gateway: Transport;
  /**
   * Returns a user-facing message when a credentialed call cannot run in the
   * current session (signed out, no workspace). Runtime backstop for the
   * pre-run check in the playground, which only sees statically resolvable
   * calls.
   */
  credentialGuard?: (provider: string, operation: string) => string | null;
}

/** Dispatch credential-free calls in-browser; everything else to the gateway. */
export function createRoutingTransport(options: RoutingTransportOptions): Transport {
  const direct = createDirectTransport(options.routes);

  return {
    async call(provider, operation, args, callOptions?: TransportCallOptions) {
      if (options.routes.has(routeKey(provider, operation))) {
        return direct.call(provider, operation, args, callOptions);
      }
      const blocked = options.credentialGuard?.(provider, operation);
      // 401 so the policy layer does not retry a sign-in requirement.
      if (blocked) throw new TransportError(blocked, 401);
      return options.gateway.call(provider, operation, args, callOptions);
    },
  };
}
