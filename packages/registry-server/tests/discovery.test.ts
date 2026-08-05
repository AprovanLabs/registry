/**
 * Namespace discovery profile surfaces (PUXF2-4): profiles + defaultProfile.
 */

import { afterEach, describe, expect, it } from "vitest";
import { createRegistryServer } from "../src/server.js";
import { TEST_CATALOG } from "./helpers.js";
import type { RegistryServer } from "../src/config/types.js";

let servers: RegistryServer[] = [];

afterEach(async () => {
  for (const server of servers) await server.close();
  servers = [];
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

describe("namespace discovery profiles", () => {
  it("lists profile names and defaultProfile when a stored default exists", async () => {
    const server = await makeServer();

    await server.router.request("/credentials", {
      method: "POST",
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "gh" },
      }),
      headers: { "content-type": "application/json" },
    });
    await server.router.request("/profiles", {
      method: "POST",
      body: JSON.stringify({
        name: "default",
        target: { kind: "provider", provider: "github" },
      }),
      headers: { "content-type": "application/json" },
    });
    await server.router.request("/profiles", {
      method: "POST",
      body: JSON.stringify({
        name: "staging",
        target: { kind: "provider", provider: "github" },
      }),
      headers: { "content-type": "application/json" },
    });

    const res = await server.router.request("/tools/namespaces");
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      namespaces: Array<{
        id: string;
        profiles?: string[];
        defaultProfile?: string;
      }>;
    };
    const github = body.namespaces.find((ns) => ns.id === "github");
    expect(github?.profiles?.sort()).toEqual(["default", "staging"]);
    expect(github?.defaultProfile).toBe("default");
  });

  it("connecting a credential auto-provisions defaultProfile (grant-enforcement §3)", async () => {
    const server = await makeServer();

    await server.router.request("/credentials", {
      method: "POST",
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "gh" },
      }),
      headers: { "content-type": "application/json" },
    });
    await server.router.request("/profiles", {
      method: "POST",
      body: JSON.stringify({
        name: "staging",
        target: { kind: "provider", provider: "github" },
      }),
      headers: { "content-type": "application/json" },
    });

    const res = await server.router.request("/tools/namespaces");
    const body = (await res.json()) as {
      namespaces: Array<{ id: string; profiles?: string[]; defaultProfile?: string }>;
    };
    const github = body.namespaces.find((ns) => ns.id === "github");
    // The credential connect above provisioned a `default` row bound to it —
    // no separate profiles.create step needed (D3: "every usable credential
    // has a row").
    expect(github?.profiles?.sort()).toEqual(["default", "staging"]);
    expect(github?.defaultProfile).toBe("default");
  });

  it("omits defaultProfile for an interface target, which credential connect does not provision", async () => {
    const server = await makeServer();

    // Provisioning binds a `default` row to (tenant, "provider", provider) —
    // an interface target ("sql") is a distinct row that must still be
    // created explicitly.
    await server.router.request("/credentials", {
      method: "POST",
      body: JSON.stringify({
        provider: "postgres",
        payload: { type: "bearer_token", token: "pg" },
      }),
      headers: { "content-type": "application/json" },
    });
    await server.router.request("/profiles", {
      method: "POST",
      body: JSON.stringify({
        name: "staging",
        target: { kind: "interface", interface: "sql" },
        provider: "postgres",
      }),
      headers: { "content-type": "application/json" },
    });

    const res = await server.router.request("/tools/namespaces");
    const body = (await res.json()) as {
      namespaces: Array<{ id: string; profiles?: string[]; defaultProfile?: string }>;
    };
    const sql = body.namespaces.find((ns) => ns.id === "sql");
    expect(sql?.profiles).toEqual(["staging"]);
    expect(sql?.defaultProfile).toBeUndefined();
  });
});
