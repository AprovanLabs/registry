/**
 * Per-(app, user) daily usage metering.
 *
 * The rps/burst limiter protects against bursts within one process; this is
 * the durable complement — a per-day call budget that survives Lambda
 * instance churn because it lives in the workspace FS
 * (`.services/apps/<app>/usage/<sub>/<yyyy-mm-dd>.json`).
 *
 * The read-modify-write is not atomic, so concurrent calls can undercount
 * slightly — fine for a fairness budget, which is what daily limits are.
 */

import { getFsStore } from "../fs-store.js";
import type { AppManifest } from "./store.js";

/** Daily call budget per user when the manifest doesn't set one. */
export const DEFAULT_DAILY_CALLS = 1_000;

export interface DailyUsage {
  allowed: boolean;
  used: number;
  limit: number;
  /** ISO date the budget resets after (UTC midnight). */
  date: string;
}

function usagePath(app: string, sub: string, date: string): string {
  // Escape path separators in subs (Cognito subs are uuid-ish, but be safe).
  const safeSub = sub.replace(/[^A-Za-z0-9_-]/gu, "_");
  return `.services/apps/${app}/usage/${safeSub}/${date}.json`;
}

/**
 * Count one call against the caller's daily budget; `allowed: false` means
 * the call should be rejected (the count is not incremented past the limit).
 */
export async function countDailyCall(
  workspaceId: string,
  manifest: AppManifest,
  sub: string,
): Promise<DailyUsage> {
  const limit = manifest.rateLimit?.daily ?? DEFAULT_DAILY_CALLS;
  const date = new Date().toISOString().slice(0, 10);
  const path = usagePath(manifest.name, sub, date);
  const store = getFsStore();

  let used = 0;
  const existing = await store.read(workspaceId, path).catch(() => undefined);
  if (existing) {
    try {
      const parsed = JSON.parse(existing.content) as { used?: number };
      if (typeof parsed.used === "number" && parsed.used >= 0) used = parsed.used;
    } catch {
      // Corrupt counter: start over rather than lock the user out.
    }
  }

  if (used >= limit) {
    return { allowed: false, used, limit, date };
  }
  used += 1;
  await store.write(workspaceId, path, JSON.stringify({ used }), "application/json");
  return { allowed: true, used, limit, date };
}
