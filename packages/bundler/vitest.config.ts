import { defineConfig } from "@aprovan/vitest-config";

export default {
  test: defineConfig("node", {
    include: ["src/**/*.test.ts"],
    testTimeout: 600_000,
    // Provider-wide OpenAPI walks are memory-heavy; keep one worker.
    maxWorkers: 1,
    fileParallelism: false,
  }),
};
