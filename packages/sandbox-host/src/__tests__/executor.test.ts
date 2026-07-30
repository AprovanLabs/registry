/**
 * The local executor, with containment as the point.
 *
 * A local host is not a microVM — the registered root is the only boundary
 * there is, so these cases are load-bearing rather than decorative: if a path
 * can escape, `aprovan sandbox host run` hands the whole disk to whatever the
 * workspace asks for.
 */

import { createHash } from "node:crypto";
import { mkdtempSync, rmSync, symlinkSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LocalExecutor } from "../executor.js";

let root: string;
let outside: string;
let executor: LocalExecutor;

beforeEach(async () => {
  root = mkdtempSync(join(tmpdir(), "aprovan-root-"));
  outside = mkdtempSync(join(tmpdir(), "aprovan-outside-"));
  executor = new LocalExecutor({ root });
  await executor.init();
});

afterEach(() => {
  rmSync(root, { recursive: true, force: true });
  rmSync(outside, { recursive: true, force: true });
});

async function newSandbox(): Promise<string> {
  const instance = (await executor.run("create", {})) as { id: string };
  return instance.id;
}

describe("containment", () => {
  it("refuses traversal out of the sandbox", async () => {
    const id = await newSandbox();
    await expect(
      executor.run("writeFile", { id, path: "../escape.txt", content: "no" }),
    ).rejects.toThrow(/escapes the sandbox/u);
    await expect(
      executor.run("readFile", { id, path: "a/../../../etc/hosts" }),
    ).rejects.toThrow(/escapes the sandbox/u);
  });

  it("refuses absolute paths", async () => {
    const id = await newSandbox();
    await expect(
      executor.run("writeFile", { id, path: "/etc/hosts", content: "no" }),
    ).rejects.toThrow(/must be relative/u);
  });

  it("refuses a symlink that resolves outside the sandbox", async () => {
    const id = await newSandbox();
    const secret = join(outside, "secret.txt");
    writeFileSync(secret, "classified");
    symlinkSync(secret, join(root, id, "link.txt"));

    // Lexically innocent, which is exactly why the realpath check exists.
    await expect(executor.run("readFile", { id, path: "link.txt" })).rejects.toThrow(
      /resolves outside the sandbox/u,
    );
  });

  it("never follows a symlink into a listing", async () => {
    const id = await newSandbox();
    writeFileSync(join(outside, "secret.txt"), "classified");
    symlinkSync(outside, join(root, id, "peek"));
    writeFileSync(join(root, id, "real.txt"), "mine");

    const entries = (await executor.run("listFiles", { id })) as Array<{ path: string }>;
    expect(entries.map((entry) => entry.path)).toEqual(["real.txt"]);
  });

  it("rejects a sandbox id that is not one", async () => {
    await expect(executor.run("readFile", { id: "../..", path: "x" })).rejects.toThrow(
      /id must be a sandbox id/u,
    );
  });
});

describe("files", () => {
  it("hashes with the same identity the workspace FS store uses", async () => {
    const id = await newSandbox();
    const content = "export const a = 1;\n";
    const written = (await executor.run("writeFile", { id, path: "src/a.ts", content })) as {
      hash: string;
    };
    expect(written.hash).toBe(createHash("sha256").update(content).digest("hex"));

    const listed = (await executor.run("listFiles", { id })) as Array<{
      path: string;
      hash: string;
    }>;
    expect(listed).toEqual([{ ...listed[0], path: "src/a.ts", hash: written.hash }]);
  });

  it("creates parent directories on write and round-trips content", async () => {
    const id = await newSandbox();
    await executor.run("writeFile", { id, path: "deep/nested/file.txt", content: "hi" });
    const read = (await executor.run("readFile", { id, path: "deep/nested/file.txt" })) as {
      content: string;
      encoding: string;
    };
    expect(read).toMatchObject({ content: "hi", encoding: "utf8" });
  });

  it("reports binary bodies as base64 rather than mangling them as text", async () => {
    const id = await newSandbox();
    writeFileSync(join(root, id, "blob.bin"), Buffer.from([0xff, 0xfe, 0x00, 0x01]));
    const read = (await executor.run("readFile", { id, path: "blob.bin" })) as {
      encoding: string;
    };
    expect(read.encoding).toBe("base64");
  });

  it("keeps dependency and VCS directories out of listings", async () => {
    const id = await newSandbox();
    mkdirSync(join(root, id, "node_modules", "pkg"), { recursive: true });
    writeFileSync(join(root, id, "node_modules", "pkg", "index.js"), "noise");
    writeFileSync(join(root, id, "index.js"), "mine");

    const entries = (await executor.run("listFiles", { id })) as Array<{ path: string }>;
    expect(entries.map((entry) => entry.path)).toEqual(["index.js"]);
  });
});

describe("exec", () => {
  it("runs in the sandbox and captures output", async () => {
    const id = await newSandbox();
    const result = (await executor.run("exec", { id, command: "echo hello" })) as {
      exitCode: number;
      stdout: string;
    };
    expect(result.exitCode).toBe(0);
    expect(result.stdout.trim()).toBe("hello");
  });

  it("reports a non-zero exit rather than throwing", async () => {
    const id = await newSandbox();
    const result = (await executor.run("exec", { id, command: "exit 3" })) as {
      exitCode: number;
    };
    expect(result.exitCode).toBe(3);
  });

  it("kills a command that outlives its deadline", async () => {
    const id = await newSandbox();
    const result = (await executor.run("exec", {
      id,
      command: "sleep 5",
      timeoutMs: 200,
    })) as { stderr: string };
    expect(result.stderr).toMatch(/killed after 200ms/u);
  });

  it("refuses a cwd outside the sandbox", async () => {
    const id = await newSandbox();
    await expect(
      executor.run("exec", { id, command: "ls", cwd: "../.." }),
    ).rejects.toThrow(/escapes the sandbox/u);
  });
});

describe("lifecycle", () => {
  it("creates, lists and destroys sandboxes under the root", async () => {
    const id = await newSandbox();
    const listed = (await executor.run("list", {})) as Array<{ id: string }>;
    expect(listed.map((entry) => entry.id)).toContain(id);

    expect(await executor.run("destroy", { id })).toEqual({ destroyed: true });
    expect(await executor.run("get", { id })).toBeUndefined();
    expect(await executor.run("destroy", { id })).toEqual({ destroyed: false });
  });

  it("fails create when the image requires a binary this machine lacks", async () => {
    await expect(
      executor.run("create", { base: { require: ["definitely-not-installed-xyz"] } }),
    ).rejects.toThrow(/does not have "definitely-not-installed-xyz" on PATH/u);
  });

  it("rejects an operation the local host does not implement", async () => {
    await expect(executor.run("exposePort", { id: "x", port: 3000 })).rejects.toThrow(
      /Unsupported operation: exposePort/u,
    );
  });
});
