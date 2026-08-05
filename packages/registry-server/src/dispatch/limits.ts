/**
 * Server-side rate limits and budgets (tech-plan D5): enforced in the ONE
 * dispatch pipeline (HTTP, embedding, MCP, and sandbox all pass through),
 * keyed `(tenant, profile-or-provider, principal)` with an optional `pool`
 * dimension for platform OAuth apps.
 *
 * **In-process only.** Buckets and budget windows live in this process's
 * memory — they are not shared across replicas. A pool ceiling is therefore
 * correct only under the arithmetic scheme: divide the provider's published
 * limit by the current tenant count on that pool, recomputed when the tenant
 * set changes. Do not assume this limiter is distributed; leased buckets
 * against a shared store are the follow-on when static division wastes too
 * much headroom (tech-plan D3).
 *
 * **Platform quota defaults (decisions.md / tech-plan D5, resolved open
 * question).** A pool-scoped call is capped at
 * `min(publishedRps ÷ tenantCount, platformDefaultRps)` plus the platform 24h
 * budget on the same pool+tenant key — deliberately distinct from BYO, which
 * uses only profile `limits` / tenant `defaultRps`/`defaultBurst` and never
 * inherits a platform ceiling. The four numbers below are the shipped
 * defaults and apply even when a caller passes no `platform` overrides;
 * `config/env.ts` maps `REGISTRY_PLATFORM_DEFAULT_{RPS,BURST,BUDGET}` /
 * `REGISTRY_PLATFORM_POOL_RPS` onto them for standalone deployments. Raising
 * these later is fine; lowering them needs a new decision (see decisions.md).
 *
 * Profile `limits` override tenant defaults. The token bucket is the seed
 * implementation ported from packages/runtime/src/policy.ts, adapted to
 * reject (429) instead of sleep — the in-sandbox policy layer stays
 * cooperative-only.
 */

import type { ProfileLimits } from "../storage/types.js";

/** Metric emitted when a pool-scoped limit is exceeded (leased-bucket signal). */
export const POOL_RATE_LIMIT_HIT_METRIC = "aprovan.rate_limit.pool_exceeded" as const;

/** Metric emitted when a tenant-scoped (BYO / no pool) limit is exceeded. */
export const TENANT_RATE_LIMIT_HIT_METRIC = "aprovan.rate_limit.tenant_exceeded" as const;

// ---------------------------------------------------------------------------
// Platform quota defaults (decisions.md — do not change without a new
// decision; see the module docstring above).
// ---------------------------------------------------------------------------

/** Platform per-tenant rps default — `REGISTRY_PLATFORM_DEFAULT_RPS`. */
export const PLATFORM_DEFAULT_RPS = 5;
/** Platform per-tenant burst default — `REGISTRY_PLATFORM_DEFAULT_BURST`. */
export const PLATFORM_DEFAULT_BURST = 10;
/** Platform per-tenant 24h budget default — `REGISTRY_PLATFORM_DEFAULT_BUDGET`. */
export const PLATFORM_DEFAULT_BUDGET = 10_000;
/** Published pool ceiling default (arithmetic divisor) — `REGISTRY_PLATFORM_POOL_RPS`. */
export const PLATFORM_POOL_RPS = 50;

/**
 * The one documented pool-id scheme (tech-plan D5): every platform-origin
 * call for a provider contends for the SAME pool, named after that provider.
 * `dispatch/index.ts` and startup wiring (`server.ts`) both derive the pool
 * id this way so they always agree on what a call is contending against.
 */
export function platformPoolId(provider: string): string {
  return `${provider}:platform`;
}

export interface PlatformQuotaDefaults {
  defaultRps?: number;
  defaultBurst?: number;
  defaultBudget?: number;
}

export type RateLimitKey = {
  tenant: string;
  provider: string;
  principal: string;
  /** Platform-app pool id; omitted for tenant-supplied (BYO) apps. */
  pool?: string;
};

export type PoolPublishedLimits = {
  /** Provider-published requests-per-second ceiling for the shared app. */
  rps: number;
  burst?: number;
};

type MetricCallback = (name: string, attrs: Record<string, string>) => void;

class TokenBucket {
  private tokens: number;
  private lastRefill = Date.now();

  constructor(
    private rps: number,
    private readonly burst: number,
  ) {
    this.tokens = burst;
  }

  setRates(rps: number, burst: number): void {
    this.rps = rps;
    this.tokens = Math.min(this.tokens, burst);
  }

  /** Take a token if available; otherwise report the wait without reserving. */
  tryTake(): { ok: true } | { ok: false; retryAfterMs: number } {
    const now = Date.now();
    this.tokens = Math.min(this.burst, this.tokens + ((now - this.lastRefill) / 1000) * this.rps);
    this.lastRefill = now;
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return { ok: true };
    }
    return { ok: false, retryAfterMs: Math.ceil(((1 - this.tokens) / this.rps) * 1000) };
  }
}

interface BudgetWindow {
  windowStart: number;
  count: number;
}

interface PoolState {
  published: PoolPublishedLimits;
  tenants: Set<string>;
  perTenantRps: number;
  perTenantBurst: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export class RateLimitExceededError extends Error {
  readonly status = 429;
  constructor(
    message: string,
    readonly retryAfterMs: number,
    readonly pool?: string,
  ) {
    super(message);
    this.name = "RateLimitExceededError";
  }
}

function normalizeKey(key: RateLimitKey | string): RateLimitKey {
  if (typeof key !== "string") return key;
  const [tenant, provider, principal] = key.split(":");
  return { tenant: tenant ?? "", provider: provider ?? "", principal: principal ?? "" };
}

function bucketKey(key: RateLimitKey): string {
  if (key.pool) {
    return `pool:${key.pool}:${key.tenant}:${key.principal}`;
  }
  return `${key.tenant}:${key.provider}:${key.principal}`;
}

export class RateLimiter {
  /** Buckets and budget windows keyed by tenant or pool+tenant — tenants
   * cannot observe or drain another tenant's bucket. */
  private readonly buckets = new Map<string, TokenBucket>();
  private readonly budgets = new Map<string, BudgetWindow>();
  private readonly pools = new Map<string, PoolState>();

  constructor(
    private readonly defaults: {
      defaultRps?: number;
      defaultBurst?: number;
      /** Platform-origin (pool) calls only — BYO never reads this (decisions.md). */
      platform?: PlatformQuotaDefaults;
    } = {},
    private readonly onMetric?: MetricCallback,
  ) {}

  /**
   * Configure the provider-published ceiling for a platform-app pool.
   * Per-tenant quota is recomputed when tenants register or unregister.
   */
  configurePool(pool: string, published: PoolPublishedLimits): void {
    const existing = this.pools.get(pool);
    const tenants = existing?.tenants ?? new Set<string>();
    const state: PoolState = {
      published,
      tenants,
      perTenantRps: 0,
      perTenantBurst: 0,
    };
    this.recomputePoolQuota(state);
    this.pools.set(pool, state);
    this.invalidatePoolBuckets(pool);
  }

  /** Register a tenant on a pool; quota is recomputed for all pool members. */
  registerPoolTenant(pool: string, tenant: string): void {
    const state = this.pools.get(pool);
    if (!state) {
      throw new Error(`Pool ${pool} is not configured`);
    }
    if (!state.tenants.has(tenant)) {
      state.tenants.add(tenant);
      this.recomputePoolQuota(state);
      this.invalidatePoolBuckets(pool);
    }
  }

  /** Remove a tenant from a pool; quota is recomputed for remaining members. */
  unregisterPoolTenant(pool: string, tenant: string): void {
    const state = this.pools.get(pool);
    if (!state?.tenants.delete(tenant)) return;
    this.recomputePoolQuota(state);
    this.invalidatePoolBuckets(pool);
  }

  /**
   * Enforce for one dispatch. `key.pool` set → arithmetic per-tenant share of
   * the pool's published ceiling; omitted → per-tenant limits as today.
   * Throws RateLimitExceededError (429-class, retryable) on excess.
   */
  enforce(key: RateLimitKey | string, limits?: ProfileLimits): void {
    const normalized = normalizeKey(key);
    const storageKey = bucketKey(normalized);

    if (normalized.pool) {
      this.enforcePool(normalized, storageKey);
      return;
    }

    const rps = limits?.rps ?? this.defaults.defaultRps;
    const burst = limits?.burst ?? limits?.rps ?? this.defaults.defaultBurst ?? rps;
    this.enforceRps(storageKey, rps, burst, {
      metric: TENANT_RATE_LIMIT_HIT_METRIC,
      message: (effectiveRps, retryAfterMs) =>
        `Rate limit exceeded (${effectiveRps} rps) — retry in ${retryAfterMs}ms`,
    });
    this.enforceBudget(storageKey, limits?.budget);
  }

  private enforcePool(key: RateLimitKey, storageKey: string): void {
    const pool = key.pool!;
    const state = this.pools.get(pool);
    if (!state) {
      throw new Error(`Pool ${pool} is not configured`);
    }
    if (!state.tenants.has(key.tenant)) {
      this.registerPoolTenant(pool, key.tenant);
    }
    const { perTenantRps, perTenantBurst } = this.pools.get(pool)!;
    this.enforceRps(storageKey, perTenantRps, perTenantBurst, {
      metric: POOL_RATE_LIMIT_HIT_METRIC,
      pool,
      message: (effectiveRps, retryAfterMs) =>
        `Pool rate limit exceeded (pool=${pool}, ${effectiveRps} rps per tenant) — retry in ${retryAfterMs}ms`,
    });
    // Platform 24h budget always applies on the pool path (decisions.md) —
    // BYO never reaches this, it has no pool.
    this.enforceBudget(storageKey, this.defaults.platform?.defaultBudget ?? PLATFORM_DEFAULT_BUDGET);
  }

  private enforceRps(
    storageKey: string,
    rps: number | undefined,
    burst: number | undefined,
    opts: {
      metric: string;
      pool?: string;
      message: (effectiveRps: number, retryAfterMs: number) => string;
    },
  ): void {
    if (!rps || rps <= 0) return;
    const effectiveBurst = burst && burst > 0 ? burst : rps;
    let bucket = this.buckets.get(storageKey);
    if (!bucket) {
      bucket = new TokenBucket(rps, effectiveBurst);
      this.buckets.set(storageKey, bucket);
    } else {
      bucket.setRates(rps, effectiveBurst);
    }
    const taken = bucket.tryTake();
    if (!taken.ok) {
      this.onMetric?.(opts.metric, {
        pool: opts.pool ?? "",
        tenant: storageKey,
      });
      throw new RateLimitExceededError(opts.message(rps, taken.retryAfterMs), taken.retryAfterMs, opts.pool);
    }
  }

  private enforceBudget(storageKey: string, budget: number | undefined): void {
    if (!budget || budget <= 0) return;
    const now = Date.now();
    let window = this.budgets.get(storageKey);
    if (!window || now - window.windowStart >= DAY_MS) {
      window = { windowStart: now, count: 0 };
      this.budgets.set(storageKey, window);
    }
    if (window.count >= budget) {
      const retryAfterMs = window.windowStart + DAY_MS - now;
      throw new RateLimitExceededError(
        `Budget exhausted (${budget} calls per 24h) — retry in ${Math.ceil(retryAfterMs / 1000)}s`,
        retryAfterMs,
      );
    }
    window.count += 1;
  }

  /**
   * Effective platform rps = `min(published ÷ tenantCount, platformDefaultRps)`
   * (decisions.md) — arithmetic pool share, capped by the deliberate
   * per-tenant ceiling so a low tenant count on a generously published pool
   * still cannot exceed the product default.
   */
  private recomputePoolQuota(state: PoolState): void {
    const tenantCount = Math.max(1, state.tenants.size);
    const publishedBurst = state.published.burst ?? state.published.rps;
    const arithmeticRps = state.published.rps / tenantCount;
    const arithmeticBurst = Math.max(1, Math.ceil(publishedBurst / tenantCount));
    const platformRps = this.defaults.platform?.defaultRps ?? PLATFORM_DEFAULT_RPS;
    const platformBurst = this.defaults.platform?.defaultBurst ?? PLATFORM_DEFAULT_BURST;
    state.perTenantRps = Math.min(arithmeticRps, platformRps);
    state.perTenantBurst = Math.min(arithmeticBurst, platformBurst);
  }

  private invalidatePoolBuckets(pool: string): void {
    const prefix = `pool:${pool}:`;
    for (const key of [...this.buckets.keys()]) {
      if (key.startsWith(prefix)) this.buckets.delete(key);
    }
  }

  reset(): void {
    this.buckets.clear();
    this.budgets.clear();
    this.pools.clear();
  }
}
