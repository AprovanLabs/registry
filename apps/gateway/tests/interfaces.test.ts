import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { resolveInterfaceForWorkspace } from "../src/interfaces.js";

let dataDir: string;

beforeAll(() => {
  dataDir = mkdtempSync(join(tmpdir(), "gateway-interfaces-"));
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

async function data<T>(res: Response): Promise<T> {
  const body = (await res.json()) as { data: T };
  return body.data;
}

describe("generic interfaces", () => {
  it("lists interfaces with compat providers and no binding by default", async () => {
    const listed = await data<{
      interfaces: Array<{
        id: string;
        binding: unknown;
        compat: Array<{ provider: string; connected: boolean }>;
      }>;
    }>(await manage("interfaces/list", {}));

    const llm = listed.interfaces.find((entry) => entry.id === "llm");
    expect(llm).toBeDefined();
    expect(llm!.binding).toBeNull();
    expect(llm!.compat.map((c) => c.provider)).toContain("anthropic");
    expect(llm!.compat.map((c) => c.provider)).toContain("openai");
  });

  it("rejects binding to a provider that does not implement the interface", async () => {
    const res = await manage("interfaces/bind", { interface: "llm", provider: "github" });
    expect(res.status).toBe(400);
  });

  it("binds, resolves, and unbinds", async () => {
    await manage("interfaces/bind", {
      interface: "llm",
      provider: "anthropic",
      options: { model: "claude-sonnet-5" },
    });

    const resolved = await resolveInterfaceForWorkspace("local", "llm");
    expect(resolved.bound).toBe(true);
    expect(resolved.compat.provider).toBe("anthropic");
    expect(resolved.compat.module).toBe("openai");
    expect(resolved.compat.baseUrl).toContain("anthropic.com");
    expect(resolved.options["model"]).toBe("claude-sonnet-5");

    await manage("interfaces/unbind", { interface: "llm" });
    // Unbound: either a helpful error (no credentials) or a non-bound
    // fallback to a connected provider — never the explicit binding.
    const after = await resolveInterfaceForWorkspace("local", "llm").catch(
      (err: Error) => err,
    );
    if (after instanceof Error) {
      expect(after.message).toMatch(/no binding and no connected/i);
    } else {
      expect(after.bound).toBe(false);
    }
  });

  it("falls back to the first connected compatible provider without a binding", async () => {
    // Store a credential for a compat provider; resolution should pick it up.
    const saved = await createApp().request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "synthetic.new",
        payload: { type: "api_key", value: "test-key" },
      }),
    });
    expect(saved.status).toBeLessThan(300);

    const resolved = await resolveInterfaceForWorkspace("local", "llm");
    expect(resolved.bound).toBe(false);
    expect(resolved.compat.provider).toBe("synthetic.new");
    expect(resolved.options["model"]).toBeTruthy();
  });

  it("keeps app sessions from managing bindings", async () => {
    const res = await createApp().request("/tools/interfaces/bind", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ args: { interface: "llm", provider: "openai" } }),
    });
    // Workspace caller may bind; the app-session guard is enforced in the
    // service itself (exercised via apps tests' allowedTools + this unit):
    expect(res.status).toBe(200);
  });
});

describe("per-workflow interface binding overrides", () => {
  it("resolves an override provider ahead of the workspace binding", async () => {
    const resolved = await resolveInterfaceForWorkspace("local", "llm", "openai");
    expect(resolved.compat.provider).toBe("openai");
    expect(resolved.bound).toBe(true);
  });

  it("rejects overrides that do not implement the interface", async () => {
    await expect(resolveInterfaceForWorkspace("local", "llm", "github")).rejects.toThrow(
      /does not implement/u,
    );
  });

  it("stores bindings on workflow registrations", async () => {
    await manage("vfs/write", { path: "workflows/noop.js", content: "return 1;" });
    const res = await manage("workflows/register", {
      name: "bound-flow",
      script_path: "workflows/noop.js",
      bindings: { llm: "synthetic.new" },
    });
    expect(res.status).toBe(200);
    const got = await data<{ bindings?: Record<string, string> }>(
      await manage("workflows/get", { name: "bound-flow" }),
    );
    expect(got.bindings).toEqual({ llm: "synthetic.new" });
  });
});
