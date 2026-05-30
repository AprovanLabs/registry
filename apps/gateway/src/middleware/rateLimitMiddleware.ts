/**
 * Rate limiting middleware.
 *
 * Applies token-bucket rate limiting per (callerId + provider) pair.
 * Uses @utdk/common RateLimiter under the hood.
 *
 * Configuration via env vars:
 *   GATEWAY_RATE_LIMIT_RPS    — requests per second (default: 10)
 *   GATEWAY_RATE_LIMIT_BURST  — burst capacity (default: 20)
 */

import type { Context, Next } from "hono";
import { RateLimiter } from "@utdk/common/rateLimit";

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
 * Rate limit per callerId + provider combination.
 * Expects `c.var.jwtPayload` (set by requireAuth) and `c.req.param("provider")`.
 */
export async function rateLimitByCallerAndProvider(c: Context, next: Next): Promise<void> {
  const payload = c.get("jwtPayload");
  const callerId = payload?.sub ?? "anonymous";
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
