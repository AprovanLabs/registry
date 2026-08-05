/**
 * `optionsFromEnv` — platform quota env overrides (platform-oauth-apps §4,
 * decisions.md). BYO tenant defaults (`REGISTRY_DEFAULT_*`) are pre-existing
 * and covered incidentally here; the platform knobs are new.
 */

import { describe, expect, it } from "vitest";
import { optionsFromEnv } from "../env.js";

const BASE_ENV = { REGISTRY_AUTH: "none" };

describe("optionsFromEnv platform quota overrides (§4)", () => {
  it("omits limits entirely when no override env vars are set", () => {
    const { options } = optionsFromEnv(BASE_ENV);
    expect(options.limits).toBeUndefined();
  });

  it("maps REGISTRY_PLATFORM_DEFAULT_{RPS,BURST,BUDGET} onto limits.platform", () => {
    const { options } = optionsFromEnv({
      ...BASE_ENV,
      REGISTRY_PLATFORM_DEFAULT_RPS: "7",
      REGISTRY_PLATFORM_DEFAULT_BURST: "14",
      REGISTRY_PLATFORM_DEFAULT_BUDGET: "20000",
    });
    expect(options.limits).toEqual({
      platform: { defaultRps: 7, defaultBurst: 14, defaultBudget: 20000 },
    });
  });

  it("maps REGISTRY_PLATFORM_POOL_RPS onto limits.platform.poolRps", () => {
    const { options } = optionsFromEnv({ ...BASE_ENV, REGISTRY_PLATFORM_POOL_RPS: "100" });
    expect(options.limits).toEqual({ platform: { poolRps: 100 } });
  });

  it("keeps BYO tenant defaults (REGISTRY_DEFAULT_*) and platform overrides independent", () => {
    const { options } = optionsFromEnv({
      ...BASE_ENV,
      REGISTRY_DEFAULT_RPS: "100",
      REGISTRY_DEFAULT_BURST: "200",
      REGISTRY_PLATFORM_DEFAULT_RPS: "5",
    });
    expect(options.limits).toEqual({
      defaultRps: 100,
      defaultBurst: 200,
      platform: { defaultRps: 5 },
    });
  });

  it("ignores non-numeric or non-positive platform overrides, falling back to shipped defaults", () => {
    const { options } = optionsFromEnv({
      ...BASE_ENV,
      REGISTRY_PLATFORM_DEFAULT_RPS: "not-a-number",
      REGISTRY_PLATFORM_DEFAULT_BURST: "0",
      REGISTRY_PLATFORM_DEFAULT_BUDGET: "-5",
    });
    expect(options.limits).toBeUndefined();
  });
});
