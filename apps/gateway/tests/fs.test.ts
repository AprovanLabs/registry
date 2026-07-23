import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { getFsStore, normalizeFsPath } from "../src/fs-store.js";

const tick = () => new Promise((resolve) => setTimeout(resolve, 2));

let dataDir: string;

beforeAll(() => {
  dataDir = mkdtempSync(join(tmpdir(), "gateway-fs-"));
  process.env["GATEWAY_DATA_DIR"] = dataDir;
});

afterAll(() => {
  delete process.env["GATEWAY_DATA_DIR"];
  rmSync(dataDir, { recursive: true, force: true });
});

const put = (path: string, content: string) =>
  createApp().request(`/fs/${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

describe("workspace filesystem", () => {
  it("writes and reads a file back", async () => {
    const written = await put("widgets/timer/main.tsx", "export default 1;");
    expect(written.status).toBe(201);
    const { hash } = (await written.json()) as { hash: string };

    const read = await createApp().request("/fs/widgets/timer/main.tsx");
    expect(read.status).toBe(200);
    expect(await read.json()).toMatchObject({
      path: "widgets/timer/main.tsx",
      content: "export default 1;",
      hash,
    });
  });

  it("keeps versions addressable by hash", async () => {
    const first = (await (await put("notes.md", "v1")).json()) as {
      hash: string;
    };
    await put("notes.md", "v2");

    const latest = await createApp().request("/fs/notes.md");
    expect(((await latest.json()) as { content: string }).content).toBe("v2");

    const pinned = await createApp().request(`/fs/notes.md?hash=${first.hash}`);
    expect(((await pinned.json()) as { content: string }).content).toBe("v1");
  });

  it("lists a subtree, latest version per path", async () => {
    await put("widgets/timer/manifest.json", "{}");
    await put("skills/triage/SKILL.md", "# triage");

    const response = await createApp().request("/fs?prefix=widgets");
    const { entries } = (await response.json()) as {
      entries: Array<{ path: string }>;
    };
    const paths = entries.map((entry) => entry.path);
    expect(paths).toContain("widgets/timer/main.tsx");
    expect(paths).toContain("widgets/timer/manifest.json");
    expect(paths).not.toContain("skills/triage/SKILL.md");
  });

  it("deletes files and subtrees", async () => {
    await put("tmp/a.txt", "a");
    await put("tmp/deep/b.txt", "b");

    const single = await createApp().request("/fs/tmp/a.txt", {
      method: "DELETE",
    });
    expect(single.status).toBe(204);

    const subtree = await createApp().request("/fs/tmp?recursive=1", {
      method: "DELETE",
    });
    expect(subtree.status).toBe(204);

    const listing = await createApp().request("/fs?prefix=tmp");
    expect(((await listing.json()) as { entries: unknown[] }).entries).toEqual(
      [],
    );
  });

  it("rejects path traversal", async () => {
    // Over HTTP, URL parsing collapses dot segments (even percent-encoded)
    // before routing, so traversal never reaches the handler.
    const response = await put("%2e%2e/escape.txt", "nope");
    expect(response.status).toBe(404);

    // The handler-level guard still rejects hostile paths from non-HTTP
    // callers (MCP tools, internal writers).
    expect(normalizeFsPath("../escape.txt")).toBeNull();
    expect(normalizeFsPath("a/../../b")).toBeNull();
    expect(normalizeFsPath("a//b")).toBeNull();
    expect(normalizeFsPath("/widgets/timer/")).toBe("widgets/timer");
  });

  it("404s on unknown files", async () => {
    const response = await createApp().request("/fs/missing.txt");
    expect(response.status).toBe(404);
  });

  it("listVersions enumerates every version newest-first", async () => {
    const store = getFsStore();
    // tick() spaces the ISO-ms timestamps so ordering is deterministic.
    await store.write("verws", "doc.txt", "a");
    await tick();
    await store.write("verws", "doc.txt", "b");
    await tick();
    const live = await store.write("verws", "doc.txt", "c");

    const versions = await store.listVersions("verws", "doc.txt");
    expect(versions).toHaveLength(3);
    // Newest first, and the head equals the current read() hash.
    expect(versions[0]!.hash).toBe(live.hash);
    expect(versions.map((v) => v.hash)).toContain(
      (await store.read("verws", "doc.txt"))!.hash,
    );

    // A path with no versions is an empty list, not an error.
    expect(await store.listVersions("verws", "missing.txt")).toEqual([]);
  });
});
