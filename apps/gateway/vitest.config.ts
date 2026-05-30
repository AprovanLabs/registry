import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    include: ["tests/**/*.test.ts"],
    alias: {
      "@utdk/common/telemetry": new URL("../../packages/utdk/common/telemetry.ts", import.meta.url).pathname,
      "@utdk/common/rateLimit": new URL("../../packages/utdk/common/rateLimit.ts", import.meta.url).pathname,
      "@utdk/common/auth": new URL("../../packages/utdk/common/auth.ts", import.meta.url).pathname,
      "@utdk/common": new URL("../../packages/utdk/common/index.ts", import.meta.url).pathname,
    },
  },
});
