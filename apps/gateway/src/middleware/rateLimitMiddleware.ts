/**
 * Rate limiting middleware.
 *
 * Applies token-bucket rate limiting per user (sub from JWT).
 * For non-enterprise accounts, limits are scoped per user ID.
 *
 * Configuration via env vars:
 *   GATEWAY_RATE_LIMIT_RPS    — requests per second (default: 10)
 *   GATEWAY_RATE_LIMIT_BURST  — burst capacity (default: 20)
 */

import { RateLimiter } from "@utdk/common/rateLimit";
import type { Context, Next } from "hono";

const DEFAULT_RPS = 10;
const DEFAULT_BURST = 20;

const limiters = new Map<string, RateLimiter>();

function getLimiter(key: string): RateLimiter {
  let limiter = limiters.get(key);
  if (!limiter) {
    const rps = Number(process.env["GATEWAY_RATE_LIMIT_RPS"] ?? DEFAULT_RPS);
    const burst = Number(process.env["GATEWAY_RATE_LIMIT_BURST"] ?? DEFAULT_BURST);
    limiter = new RateLimiter({ requestsPerSecond: rps, burst });
    limiters.set(key, limiter);
  }
  return limiter;
}

/**
 * Rate limit per user id (sub from the resolved principal).
 * Expects `c.var.principal` (set by `requireAuth`).
 */
export async function rateLimitByUserId(c: Context, next: Next): Promise<void> {
  const principal = c.get("principal");
  const userId = principal?.sub ?? "anonymous";
  const limiter = getLimiter(userId);
  await limiter.acquire();
  await next();
}

/**
 * Rate limit per callerId + provider combination (kept for backward compat).
 * @deprecated Use rateLimitByUserId for new routes.
 */
export async function rateLimitByCallerAndProvider(c: Context, next: Next): Promise<void> {
  const principal = c.get("principal");
  const callerId = principal?.sub ?? "anonymous";
  const provider = c.req.param("provider") ?? "unknown";
  const key = `${callerId}:${provider}`;

  const limiter = getLimiter(key);
  await limiter.acquire();

  await next();
}

/** Clear all rate limiter state (used in tests). */
export function resetRateLimiters(): void {
  limiters.clear();
}
