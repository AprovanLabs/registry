import { describe, expect, it, vi } from "vitest";
import {
  POOL_RATE_LIMIT_HIT_METRIC,
  RateLimitExceededError,
  RateLimiter,
  TENANT_RATE_LIMIT_HIT_METRIC,
  type RateLimitKey,
} from "../limits.js";

const platformKey = (tenant: string, principal = "user"): RateLimitKey => ({
  tenant,
  provider: "github",
  principal,
  pool: "github:platform",
});

const byoKey = (tenant: string, principal = "user"): RateLimitKey => ({
  tenant,
  provider: "github",
  principal,
});

describe("RateLimiter pool dimension", () => {
  it("two tenants on one platform app share the published ceiling arithmetically", () => {
    const limiter = new RateLimiter();
    limiter.configurePool("github:platform", { rps: 4, burst: 4 });
    limiter.registerPoolTenant("github:platform", "t1");
    limiter.registerPoolTenant("github:platform", "t2");

    // 4 rps / 2 tenants → 2 rps, burst 2 each.
    limiter.enforce(platformKey("t1"));
    limiter.enforce(platformKey("t1"));
    expect(() => limiter.enforce(platformKey("t1"))).toThrow(RateLimitExceededError);

    // t2 has its own per-tenant share and is not blocked by t1 exhaustion.
    limiter.enforce(platformKey("t2"));
    limiter.enforce(platformKey("t2"));
    expect(() => limiter.enforce(platformKey("t2"))).toThrow(RateLimitExceededError);
  });

  it("a tenant on its own app is not limited by platform pool tenants", () => {
    const limiter = new RateLimiter({ defaultRps: 2, defaultBurst: 2 });
    limiter.configurePool("github:platform", { rps: 4, burst: 4 });
    limiter.registerPoolTenant("github:platform", "t1");
    limiter.registerPoolTenant("github:platform", "t2");

    // 4 / 2 tenants → 2 rps, burst 2 each for platform tenants.
    limiter.enforce(platformKey("t1"));
    limiter.enforce(platformKey("t1"));
    expect(() => limiter.enforce(platformKey("t1"))).toThrow(RateLimitExceededError);

    // BYO tenant keeps the full tenant default bucket.
    limiter.enforce(byoKey("byo"));
    limiter.enforce(byoKey("byo"));
    expect(() => limiter.enforce(byoKey("byo"))).toThrow(RateLimitExceededError);
  });

  it("pool exhaustion returns RateLimitExceededError naming the pool", () => {
    const onMetric = vi.fn();
    const limiter = new RateLimiter({}, onMetric);
    limiter.configurePool("github:platform", { rps: 1, burst: 1 });
    limiter.registerPoolTenant("github:platform", "t1");

    limiter.enforce(platformKey("t1"));
    let err: RateLimitExceededError | undefined;
    try {
      limiter.enforce(platformKey("t1"));
    } catch (e) {
      err = e as RateLimitExceededError;
    }
    expect(err).toBeInstanceOf(RateLimitExceededError);
    expect(err!.pool).toBe("github:platform");
    expect(err!.message).toMatch(/pool=github:platform/u);
    expect(onMetric).toHaveBeenCalledWith(
      POOL_RATE_LIMIT_HIT_METRIC,
      expect.objectContaining({ pool: "github:platform" }),
    );
  });

  it("tenant-scoped hits emit a distinct metric from pool-scoped hits", () => {
    const onMetric = vi.fn();
    const limiter = new RateLimiter({ defaultRps: 1, defaultBurst: 1 }, onMetric);

    limiter.enforce(byoKey("t1"));
    try {
      limiter.enforce(byoKey("t1"));
    } catch {
      // expected
    }

    expect(onMetric).toHaveBeenCalledWith(
      TENANT_RATE_LIMIT_HIT_METRIC,
      expect.objectContaining({ pool: "" }),
    );
    expect(onMetric).not.toHaveBeenCalledWith(POOL_RATE_LIMIT_HIT_METRIC, expect.anything());
  });

  it("recomputes per-tenant quota when the pool tenant count changes", () => {
    const limiter = new RateLimiter();
    limiter.configurePool("github:platform", { rps: 6, burst: 6 });
    limiter.registerPoolTenant("github:platform", "t1");

    // Solo tenant gets the full published ceiling.
    for (let i = 0; i < 6; i++) limiter.enforce(platformKey("t1"));
    expect(() => limiter.enforce(platformKey("t1"))).toThrow(RateLimitExceededError);

    limiter.reset();
    limiter.configurePool("github:platform", { rps: 6, burst: 6 });
    limiter.registerPoolTenant("github:platform", "t1");
    limiter.registerPoolTenant("github:platform", "t2");

    // Two tenants → 3 rps / burst 3 each.
    for (let i = 0; i < 3; i++) limiter.enforce(platformKey("t1"));
    expect(() => limiter.enforce(platformKey("t1"))).toThrow(RateLimitExceededError);
  });

  it("accepts legacy string keys for per-tenant enforcement", () => {
    const limiter = new RateLimiter({ defaultRps: 1, defaultBurst: 1 });
    limiter.enforce("t1:github:user");
    expect(() => limiter.enforce("t1:github:user")).toThrow(RateLimitExceededError);
  });
});
