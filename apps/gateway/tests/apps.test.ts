import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { resetAppRateLimiters } from "../src/routes/apps.js";

let dataDir: string;

beforeAll(() => {
  dataDir = mkdtempSync(join(tmpdir(), "gateway-apps-"));
  process.env["GATEWAY_DATA_DIR"] = dataDir;
});

afterAll(() => {
  delete process.env["GATEWAY_DATA_DIR"];
  rmSync(dataDir, { recursive: true, force: true });
});

beforeEach(() => resetAppRateLimiters());

// Owner-side management rides the tools proxy (auth mode "none" → workspace
// "local"); app consumption rides /apps with X-App-User as the caller sub.
const manage = (path: string, args: Record<string, unknown>) =>
  createApp().request(`/tools/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ args }),
  });

const appCall = (
  user: string,
  path: string,
  body: Record<string, unknown> = {},
) =>
  createApp().request(`/apps/local/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-App-User": user },
    body: JSON.stringify(body),
  });

async function data<T>(res: Response): Promise<T> {
  const body = (await res.json()) as { data: T };
  return body.data;
}

describe("apps service (owner management)", () => {
  it("publishes, lists, and removes an app", async () => {
    const publish = await manage("apps/publish", {
      name: "tracker",
      title: "Workout Tracker",
      allowed_tools: ["keyvalue.*"],
      rate_limit: { rps: 50, burst: 100 },
    });
    expect(publish.status).toBe(200);
    const published = await data<{ appPath: string }>(publish);
    expect(published.appPath).toBe("/apps/local/tracker");

    const list = await data<{ apps: Array<{ name: string }> }>(await manage("apps/list", {}));
    expect(list.apps.map((a) => a.name)).toContain("tracker");

    const removed = await data<{ removed: boolean }>(await manage("apps/remove", { name: "tracker" }));
    expect(removed.removed).toBe(true);
  });

  it("rejects publishing with unknown workflows or empty allow-list", async () => {
    expect(
      (await manage("apps/publish", { name: "x", allowed_tools: [], workflows: [] })).status,
    ).toBe(400);
    expect(
      (
        await manage("apps/publish", {
          name: "x",
          allowed_tools: ["keyvalue.*"],
          workflows: ["nope"],
        })
      ).status,
    ).toBe(400);
  });
});

describe("app consumption surface", () => {
  beforeEach(async () => {
    await manage("apps/publish", {
      name: "tracker",
      title: "Workout Tracker",
      allowed_tools: ["keyvalue.*"],
      rate_limit: { rps: 100, burst: 200 },
    });
  });

  it("serves the public manifest", async () => {
    const res = await createApp().request("/apps/local/tracker", {
      headers: { "X-App-User": "alice" },
    });
    expect(res.status).toBe(200);
    const body = (await res.json()) as { name: string; role: string };
    expect(body.name).toBe("tracker");
    expect(body.role).toBe("user");
  });

  it("partitions keyvalue data per app user", async () => {
    // Alice and Bob write the same key through the app; each sees only theirs.
    await appCall("alice", "tracker/tools/keyvalue/set", {
      args: { key: "state", value: { weeks: 3 } },
    });
    await appCall("bob", "tracker/tools/keyvalue/set", {
      args: { key: "state", value: { weeks: 9 } },
    });

    const alice = await data<{ value: { weeks: number } }>(
      await appCall("alice", "tracker/tools/keyvalue/get", { args: { key: "state" } }),
    );
    const bob = await data<{ value: { weeks: number } }>(
      await appCall("bob", "tracker/tools/keyvalue/get", { args: { key: "state" } }),
    );
    expect(alice.value.weeks).toBe(3);
    expect(bob.value.weeks).toBe(9);

    // Each user's list is scoped to their own partition.
    const aliceKeys = await data<{ keys: string[] }>(
      await appCall("alice", "tracker/tools/keyvalue/list", { args: {} }),
    );
    expect(aliceKeys.keys).toEqual(["state"]);

    // The owner workspace's own keyvalue namespace is untouched.
    const owner = await data<{ value: unknown }>(await manage("keyvalue/get", { key: "state" }));
    expect(owner.value).toBeNull();
  });

  it("denies tools outside the allow-list", async () => {
    const res = await appCall("alice", "tracker/tools/vfs/read", {
      args: { path: "secret.txt" },
    });
    expect(res.status).toBe(403);
  });

  it("enforces the listed-access role model", async () => {
    await manage("apps/publish", {
      name: "private-app",
      allowed_tools: ["keyvalue.*"],
      roles: { access: "listed", users: ["alice"], admins: ["carol"] },
    });

    expect((await appCall("alice", "private-app/tools/keyvalue/list", { args: {} })).status).toBe(200);
    expect((await appCall("carol", "private-app/tools/keyvalue/list", { args: {} })).status).toBe(200);
    expect((await appCall("mallory", "private-app/tools/keyvalue/list", { args: {} })).status).toBe(403);
  });

  it("rate limits per app user", async () => {
    await manage("apps/publish", {
      name: "tight",
      allowed_tools: ["keyvalue.*"],
      rate_limit: { rps: 1, burst: 2 },
    });

    const results: number[] = [];
    for (let i = 0; i < 4; i++) {
      results.push(
        (await appCall("alice", "tight/tools/keyvalue/list", { args: {} })).status,
      );
    }
    expect(results.filter((s) => s === 429).length).toBeGreaterThan(0);
    // A different user has their own bucket.
    expect((await appCall("bob", "tight/tools/keyvalue/list", { args: {} })).status).toBe(200);
  });

  it("runs exposed workflows with the app's per-user scope", async () => {
    // A workflow that counts per-user runs in keyvalue.
    await createApp().request("/fs/apps/counter.js", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `const current = await keyvalue.get({ key: "count" });
const next = (current.value || 0) + 1;
await keyvalue.set({ key: "count", value: next });
return { count: next };`,
      }),
    });
    await manage("workflows/register", { name: "counter", script_path: "apps/counter.js" });
    await manage("apps/publish", {
      name: "tracker",
      allowed_tools: ["keyvalue.*"],
      workflows: ["counter"],
    });

    const first = await appCall("alice", "tracker/workflows/counter/run");
    expect(first.status).toBe(200);
    expect(((await first.json()) as { result: { count: number } }).result.count).toBe(1);

    const second = await appCall("alice", "tracker/workflows/counter/run");
    expect(((await second.json()) as { result: { count: number } }).result.count).toBe(2);

    // Bob's partition starts fresh.
    const bob = await appCall("bob", "tracker/workflows/counter/run");
    expect(((await bob.json()) as { result: { count: number } }).result.count).toBe(1);

    // Workflows not in the bundle are invisible.
    expect((await appCall("alice", "tracker/workflows/other/run")).status).toBe(404);
  });
});
