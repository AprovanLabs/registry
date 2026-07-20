#!/usr/bin/env tsx
/**
 * seed-example-app.ts — publish the LIIFT4 Tracker example app into a
 * workspace and validate the app surface end-to-end: app folder in the VFS
 * (index.tsx entrypoint), manifest published, and per-(app, user) keyvalue
 * co-location exercised exactly the way the public /apps routes do it.
 *
 * Usage:
 *   cd apps/gateway
 *   AWS_PROFILE=aprovan FS_BUCKET=… FS_TABLE=… pnpm tsx scripts/seed-example-app.ts \
 *     --workspace ws_jacob_personal --user <sub>
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { loadAprovanEnv, dotenv } from "@aprovan/node";

dotenv.config();
const aprovanEnv = process.env["APROVAN_ENV"] ?? "prd";
if (aprovanEnv !== "off") {
  process.env["AWS_REGION"] ??= "us-east-2";
  process.env["AWS_DEFAULT_REGION"] ??= process.env["AWS_REGION"];
  await loadAprovanEnv(aprovanEnv, { overwrite: false });
}

const { getFsStore } = await import("../src/fs-store.js");
const { CORE_SERVICES } = await import("../src/services.js");
const { invokeTool } = await import("../src/workflows/invoke.js");

const { values: args } = parseArgs({
  options: {
    workspace: { type: "string" },
    user: { type: "string" },
  },
  strict: true,
});

const workspaceId = args.workspace;
const userId = args.user;
if (!workspaceId || !userId) {
  console.error("Usage: seed-example-app.ts --workspace <id> --user <sub>");
  process.exit(1);
}

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const appSource = readFileSync(join(scriptsDir, "../examples/liift4/index.tsx"), "utf-8");

const ownerCtx = { workspaceId, userId };
const apps = CORE_SERVICES["apps"]!;
const store = getFsStore();

// 1. The app is an ordinary workspace folder with an index.tsx entrypoint.
await store.write(workspaceId, "apps/liift4/index.tsx", appSource, "text/typescript-jsx");
console.log("✔ wrote apps/liift4/index.tsx");

// 2. Publish the app bundle.
const published = await apps.call(ownerCtx, "publish", {
  name: "liift4",
  title: "LIIFT4 Tracker",
  description:
    "Weight tracker for the LIIFT4 program — weeks, round-split days, and a core timer. Your log is private to your account and follows you across devices.",
  dir: "apps/liift4",
  visibility: "private",
  allowed_tools: ["keyvalue.*"],
  rate_limit: { rps: 10, burst: 30 },
});
console.log("✔ published:", JSON.stringify(published, null, 2));

// 3. Validate per-user co-located partitions through the same dispatch the
//    /apps routes use — data lands next to the app in apps/liift4/data/<user>/.
const asUser = (sub: string) => ({
  workspaceId,
  userId: sub,
  appScope: { app: "liift4", dir: "apps/liift4", userId: sub, role: "user" as const },
});

await invokeTool(asUser("validation-alice"), "keyvalue", "set", {
  key: "liift4-state",
  value: { weeks: [{ number: 1 }], weights: { "w1:legs:0:0": 45 } },
});
await invokeTool(asUser("validation-bob"), "keyvalue", "set", {
  key: "liift4-state",
  value: { weeks: [{ number: 1 }, { number: 2 }], weights: {} },
});

const alice = (await invokeTool(asUser("validation-alice"), "keyvalue", "get", {
  key: "liift4-state",
})) as { value: { weights: Record<string, number> } };
const bob = (await invokeTool(asUser("validation-bob"), "keyvalue", "get", {
  key: "liift4-state",
})) as { value: { weeks: unknown[] } };
const owner = (await invokeTool(ownerCtx, "keyvalue", "get", {
  key: "liift4-state",
})) as { value: unknown };

if (alice.value.weights["w1:legs:0:0"] !== 45) throw new Error("alice partition wrong");
if (bob.value.weeks.length !== 2) throw new Error("bob partition wrong");
if (owner.value !== null) throw new Error("owner namespace polluted");

const aliceFile = await store.read(workspaceId, "apps/liift4/data/validation-alice/liift4-state");
if (!aliceFile) throw new Error("alice data not co-located under apps/liift4/data/");
console.log("✔ per-user partitions isolated and co-located (apps/liift4/data/<user>/)");

// Clean up validation partitions.
await invokeTool(asUser("validation-alice"), "keyvalue", "delete", { key: "liift4-state" });
await invokeTool(asUser("validation-bob"), "keyvalue", "delete", { key: "liift4-state" });

console.log(`✔ done — live app: https://aprovan.com/apps/${workspaceId}/liift4`);
