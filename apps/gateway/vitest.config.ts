import { defineConfig } from "@aprovan/vitest-config";

export default {
  test: defineConfig("node", {
    include: ["tests/**/*.test.ts"],
    env: {
      DYNAMO_ENDPOINT: "http://localhost:8000",
      AWS_REGION: "us-east-1",
      AWS_ACCESS_KEY_ID: "local",
      AWS_SECRET_ACCESS_KEY: "local",
    },
    alias: {
      "@utdk/common/telemetry": new URL("../../packages/utdk/common/telemetry.ts", import.meta.url).pathname,
      "@utdk/common/rateLimit": new URL("../../packages/utdk/common/rateLimit.ts", import.meta.url).pathname,
      "@utdk/common/auth": new URL("../../packages/utdk/common/auth.ts", import.meta.url).pathname,
      "@utdk/common": new URL("../../packages/utdk/common/index.ts", import.meta.url).pathname,
      "utdk/registry.json": new URL("../../packages/utdk/registry.json", import.meta.url).pathname,
    },
  }),
};
