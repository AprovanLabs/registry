import { defineConfig } from "@aprovan/vitest-config";

export default {
  test: defineConfig("node", {
    include: ["tests/**/*.test.ts"],
    // Live probes hit real APIs over the network; the default 10s is too tight
    // for cold-start providers (Databricks warehouses, Snowflake).
    testTimeout: 60_000,
    hookTimeout: 60_000,
    // Providers are independent, but a wide fan-out invites per-account rate
    // limits (Google's twelve sub-providers share one quota). Keep it modest.
    maxConcurrency: 4,
    alias: {
      "@utdk/common/auth": new URL("../utdk/common/auth.ts", import.meta.url).pathname,
      "@utdk/common": new URL("../utdk/common/index.ts", import.meta.url).pathname,
    },
  }),
};
