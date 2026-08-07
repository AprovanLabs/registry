import { afterEach, describe, expect, it } from "vitest";
import { defaultCatalog } from "../src/catalog/default.js";
import { deriveGlobalAlias, namespaceAliasFields } from "../src/catalog/global-alias.js";
import { findInterface, findLlmAlias } from "../src/catalog/types.js";
import { createRegistryServer } from "../src/server.js";
import { TEST_CATALOG } from "./helpers.js";
import type { RegistryServer } from "../src/config/types.js";
import { DEFAULT_TENANT_ID, TenantService } from "../src/tenancy/index.js";
import { createStorage } from "../src/storage/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const contractsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../contracts",
);

describe("default catalog (WS-2 compat data)", () => {
  it("loads the contract compat documents with credentialless/unavailable/defaultsFor/timeoutMs intact", () => {
    const catalog = defaultCatalog({ contractsDir });
    const ids = catalog.interfaces.map((def) => def.id);
    expect(ids).toContain("llm");
    expect(ids).toContain("sql");
    expect(ids).toContain("agent");
    expect(ids).toContain("stt");

    const sql = findInterface(catalog, "sql")!;
    expect(sql.timeoutMs).toBeGreaterThan(0);
    expect(Array.isArray(sql.defaultsFor)).toBe(true);
    expect(sql.compat.length).toBeGreaterThan(0);
    expect(sql.compat.every((entry) => typeof entry.provider === "string")).toBe(true);

    // The agent contract's native entry is the credentialless dispatch
    // short-circuit — the field must survive the load.
    const agent = findInterface(catalog, "agent")!;
    expect(agent.compat.some((entry) => entry.credentialless === true)).toBe(true);

    const stt = findInterface(catalog, "stt")!;
    expect(stt.defaultsFor).toContain("open");
    expect(stt.compat.some((entry) => entry.unavailable)).toBe(true);
  });

  it("composes llm compat from the chat-provider alias table (compatSource indirection)", () => {
    const catalog = defaultCatalog({ contractsDir });
    const llm = findInterface(catalog, "llm")!;
    expect(llm.compat.map((entry) => entry.provider)).toEqual(
      catalog.llmAliases.map((alias) => alias.id),
    );
    const anthropic = findLlmAlias(catalog, "anthropic")!;
    expect(anthropic.module).toBe("openai");
    expect(anthropic.defaultModel).toBeTruthy();
  });
});

describe("namespace catalog globalAlias", () => {
  let servers: RegistryServer[] = [];

  afterEach(async () => {
    for (const server of servers) await server.close();
    servers = [];
  });

  it("derives globalAlias from the naming authority", () => {
    expect(namespaceAliasFields("github")).toEqual({ name: "github", globalAlias: "github" });
    expect(namespaceAliasFields("google/drive")).toEqual({
      name: "google/drive",
      globalAlias: "googleDrive",
    });
    expect(deriveGlobalAlias("adyen/checkoutservice")).toBe("adyenCheckoutservice");
  });

  async function makeServer(): Promise<RegistryServer> {
    const server = await createRegistryServer({
      storage: { driver: "sqlite", url: "file::memory:" },
      auth: { mode: "none" },
      tenancy: { mode: "single" },
      catalog: TEST_CATALOG,
    });
    servers.push(server);
    return server;
  }

  it("publishes globalAlias alongside canonical name on GET /tools/namespaces", async () => {
    const server = await makeServer();

    await server.router.request("/credentials", {
      method: "POST",
      body: JSON.stringify({
        provider: "google/drive",
        payload: { type: "bearer_token", token: "gd" },
      }),
      headers: { "content-type": "application/json" },
    });

    const res = await server.router.request("/tools/namespaces");
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      namespaces: Array<{ id: string; name: string; globalAlias: string; kind: string }>;
    };

    const driveEntries = body.namespaces.filter((ns) => ns.name === "google/drive");
    expect(driveEntries).toHaveLength(1);
    expect(driveEntries[0]).toMatchObject({
      id: "google/drive",
      name: "google/drive",
      globalAlias: "googleDrive",
      kind: "provider",
    });
  });
});

describe("tenancy", () => {
  it("single mode auto-provisions the default tenant at init", async () => {
    const storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
    const tenancy = new TenantService(storage.tenants, { mode: "single" });
    await tenancy.init();
    expect(await storage.tenants.get(DEFAULT_TENANT_ID)).toBeDefined();
    await storage.close();
  });

  it("external mode auto-provisions on first use and honors the host resolver", async () => {
    const storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
    const tenancy = new TenantService(storage.tenants, {
      mode: "external",
      resolve: async (_authn, requested) => ({
        tenantId: requested ?? "ws-1",
        role: "member",
        groupIds: ["g1"],
      }),
    });
    await tenancy.init();
    expect(await storage.tenants.get("ws-1")).toBeUndefined();
    const resolved = await tenancy.resolve({ sub: "u", claims: {} }, undefined);
    expect(resolved).toEqual({ tenantId: "ws-1", role: "member", groupIds: ["g1"] });
    expect(await storage.tenants.get("ws-1")).toBeDefined();
    await storage.close();
  });

  it("single mode refuses a requested tenant other than default", async () => {
    const storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
    const tenancy = new TenantService(storage.tenants, { mode: "single" });
    await tenancy.init();
    await expect(tenancy.resolve({ sub: "u", claims: {} }, "someone-else")).rejects.toThrow(
      /not a member/u,
    );
    await storage.close();
  });
});
