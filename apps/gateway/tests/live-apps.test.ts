import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { liveAppsRouter } from "../src/routes/live-apps.js";

let dataDir: string;

beforeAll(() => {
  dataDir = mkdtempSync(join(tmpdir(), "gateway-live-apps-"));
  process.env["GATEWAY_DATA_DIR"] = dataDir;
});

afterAll(() => {
  delete process.env["GATEWAY_DATA_DIR"];
  rmSync(dataDir, { recursive: true, force: true });
});

const manage = (path: string, args: Record<string, unknown>) =>
  createApp().request(`/tools/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ args }),
  });

const putFile = (path: string, content: string) =>
  createApp().request(`/fs/${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

const appCall = (user: string, path: string, body: Record<string, unknown> = {}) =>
  createApp().request(`/apps/local/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-App-User": user },
    body: JSON.stringify(body),
  });

async function data<T>(res: Response): Promise<T> {
  const body = (await res.json()) as { data: T };
  return body.data;
}

async function publishFolderApp(
  name: string,
  extra: Record<string, unknown> = {},
): Promise<void> {
  await putFile(`apps/${name}/index.tsx`, `export default function App() { return null; }`);
  const res = await manage("apps/publish", {
    name,
    dir: `apps/${name}`,
    allowed_tools: ["keyvalue.*", "vfs.*"],
    ...extra,
  });
  expect(res.status).toBe(200);
}

describe("live app pages", () => {
  it("serves the page shell and the source project", async () => {
    await publishFolderApp("site", { visibility: "public" });
    await putFile("apps/site/lib.ts", "export const n = 1;");

    const page = await liveAppsRouter.request("/local/site");
    expect(page.status).toBe(200);
    expect(page.headers.get("content-type")).toContain("text/html");
    expect(await page.text()).toContain("__project__");

    const project = await liveAppsRouter.request("/local/site/__project__");
    expect(project.status).toBe(200);
    const body = (await project.json()) as { entry: string; files: Array<{ path: string }> };
    expect(body.entry).toBe("index.tsx");
    expect(body.files.map((f) => f.path).sort()).toEqual(["index.tsx", "lib.ts"]);
  });

  it("refuses to publish a folder app without its entrypoint", async () => {
    const res = await manage("apps/publish", {
      name: "hollow",
      dir: "apps/hollow",
      allowed_tools: ["keyvalue.*"],
    });
    expect(res.status).toBe(400);
  });

  it("serves static files but never the data partition, with SPA fallback", async () => {
    await publishFolderApp("assets", { visibility: "public" });
    await putFile("apps/assets/style.css", "body { margin: 0 }");
    await putFile("apps/assets/data/alice/secret", "hunter2");

    const css = await liveAppsRouter.request("/local/assets/style.css");
    expect(css.status).toBe(200);
    expect(await css.text()).toContain("margin: 0");

    // data/ is invisible: falls back to the page shell instead of the file.
    const secret = await liveAppsRouter.request("/local/assets/data/alice/secret");
    expect(secret.headers.get("content-type")).toContain("text/html");
    expect(await secret.text()).not.toContain("hunter2");

    // Unknown paths (client-side routes) fall back to the shell too.
    const spa = await liveAppsRouter.request("/local/assets/some/client/route");
    expect(spa.headers.get("content-type")).toContain("text/html");
  });

  it("gates private apps by the role model", async () => {
    await publishFolderApp("members-only", {
      visibility: "private",
      roles: { access: "listed", users: ["alice"] },
    });

    const alice = await liveAppsRouter.request("/local/members-only/__project__", {
      headers: { "X-App-User": "alice" },
    });
    expect(alice.status).toBe(200);

    const mallory = await liveAppsRouter.request("/local/members-only/__project__", {
      headers: { "X-App-User": "mallory" },
    });
    expect(mallory.status).toBe(403);
  });
});

describe("co-located app data", () => {
  it("stores keyvalue partitions inside the app folder", async () => {
    await publishFolderApp("tracker");

    await appCall("alice", "tracker/tools/keyvalue/set", {
      args: { key: "state", value: { weeks: 3 } },
    });

    // The data physically lives next to the app.
    const raw = await data<{ content: string }>(
      await manage("vfs/read", { path: "apps/tracker/data/alice/state" }),
    );
    expect(JSON.parse(raw.content)).toEqual({ weeks: 3 });
  });

  it("resolves app vfs paths app-relative with automatic folder access", async () => {
    await publishFolderApp("notes");

    const write = await appCall("alice", "notes/tools/vfs/write", {
      args: { path: "shared-notes.md", content: "# hi" },
    });
    expect(write.status).toBe(200);

    const owner = await data<{ content: string }>(
      await manage("vfs/read", { path: "apps/notes/shared-notes.md" }),
    );
    expect(owner.content).toBe("# hi");

    // Listing is scoped to the app folder.
    const listing = await data<{ entries: Array<{ path: string }> }>(
      await appCall("alice", "notes/tools/vfs/list", { args: {} }).then((r) => r),
    );
    expect(listing.entries.every((e) => e.path.startsWith("apps/notes/"))).toBe(true);
  });

  it("blocks workspace paths unless shared via workspace config", async () => {
    await publishFolderApp("reader");
    await putFile("shared/recipes.json", JSON.stringify(["soup"]));

    // Not shared → denied.
    const denied = await appCall("alice", "reader/tools/vfs/read", {
      args: { path: "~/shared/recipes.json" },
    });
    expect(denied.status).toBe(403);

    // Share read access with every app.
    await putFile(
      ".services/workspace.json",
      JSON.stringify({ shares: [{ prefix: "shared", apps: "*", mode: "read" }] }),
    );

    const allowed = await appCall("alice", "reader/tools/vfs/read", {
      args: { path: "~/shared/recipes.json" },
    });
    expect(allowed.status).toBe(200);

    // Read-only share → writes still denied.
    const write = await appCall("alice", "reader/tools/vfs/write", {
      args: { path: "~/shared/recipes.json", content: "[]" },
    });
    expect(write.status).toBe(403);
  });
});
