#!/usr/bin/env tsx
/**
 * seed-example-app.ts — publish the LIIFT4 Tracker example app into a
 * workspace and validate the app surface end-to-end: widget source in the
 * VFS, manifest published, and per-(app, user) keyvalue isolation exercised
 * exactly the way the public /apps routes do it.
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
const widgetSource = readFileSync(join(scriptsDir, "../examples/liift4-widget.tsx"), "utf-8");

const ownerCtx = { workspaceId, userId };
const apps = CORE_SERVICES["apps"]!;
const store = getFsStore();

// 1. Widget source is an ordinary workspace file.
await store.write(workspaceId, "apps/liift4/widget.tsx", widgetSource, "text/typescript-jsx");
console.log("✔ wrote apps/liift4/widget.tsx");

// 2. Publish the app bundle.
const published = await apps.call(ownerCtx, "publish", {
  name: "liift4",
  title: "LIIFT4 Tracker",
  description:
    "Weight tracker for the LIIFT4 program — weeks, round-split days, and a core timer. Your log is private to your account and follows you across devices.",
  widget_path: "apps/liift4/widget.tsx",
  allowed_tools: ["keyvalue.*"],
  rate_limit: { rps: 10, burst: 30 },
});
console.log("✔ published:", JSON.stringify(published, null, 2));

// 3. Validate per-user isolation through the same dispatch the /apps routes use.
const asUser = (sub: string) => ({
  workspaceId,
  userId: sub,
  appScope: { app: "liift4", userId: sub, role: "user" as const },
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
console.log("✔ per-user partitions isolated (alice / bob / owner all distinct)");

// Clean up validation partitions.
await invokeTool(asUser("validation-alice"), "keyvalue", "delete", { key: "liift4-state" });
await invokeTool(asUser("validation-bob"), "keyvalue", "delete", { key: "liift4-state" });

console.log(`✔ done — widget: https://aprovan.com/api/gateway/apps/${workspaceId}/liift4/widget`);
