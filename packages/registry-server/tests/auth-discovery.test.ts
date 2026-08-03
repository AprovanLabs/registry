/**
 * Auth discovery endpoints (specs/registry-server-auth-discovery):
 * public GET /auth/config and authenticated GET /whoami.
 */

import { createServer, type Server } from "node:http";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { exportJWK, generateKeyPair, SignJWT } from "jose";
import { mintApiKey } from "../src/auth/adapters.js";
import { createRegistryServer } from "../src/server.js";
import { DEFAULT_TENANT_ID } from "../src/tenancy/index.js";
import { TEST_CATALOG } from "./helpers.js";
import type { AuthConfigResponse } from "../src/http/router.js";
import type { RegistryServer, RegistryServerOptions } from "../src/config/types.js";

let servers: RegistryServer[] = [];

afterEach(async () => {
  for (const server of servers) await server.close();
  servers = [];
});

async function makeServer(overrides: Partial<RegistryServerOptions> = {}): Promise<RegistryServer> {
  const server = await createRegistryServer({
    storage: { driver: "sqlite", url: "file::memory:" },
    auth: { mode: "none" },
    tenancy: { mode: "single" },
    catalog: TEST_CATALOG,
    ...overrides,
  });
  servers.push(server);
  return server;
}

/** Allowed top-level / nested keys — asserts no secret material leaks. */
function assertAuthConfigShape(body: AuthConfigResponse): void {
  expect(Object.keys(body).sort()).toEqual(
    body.oidc ? ["mode", "oidc"].sort() : ["mode"],
  );
  if (body.oidc) {
    const keys = Object.keys(body.oidc).sort();
    for (const key of keys) {
      expect(["issuer", "audience", "browserClientId"]).toContain(key);
    }
    expect(keys).toContain("issuer");
    expect(keys).toContain("audience");
  }
}

describe("GET /auth/config", () => {
  it("returns { mode: none } without authentication", async () => {
    const server = await makeServer({ auth: { mode: "none" } });
    const res = await server.router.request("/auth/config");
    expect(res.status).toBe(200);
    const body = (await res.json()) as AuthConfigResponse;
    expect(body).toEqual({ mode: "none" });
    assertAuthConfigShape(body);
  });

  it("returns { mode: api-key } with no key material", async () => {
    const server = await makeServer({ auth: { mode: "api-key" } });
    const res = await server.router.request("/auth/config");
    expect(res.status).toBe(200);
    const body = (await res.json()) as AuthConfigResponse;
    expect(body).toEqual({ mode: "api-key" });
    assertAuthConfigShape(body);
    expect(JSON.stringify(body)).not.toMatch(/digest|apr_|plaintext|secret/iu);
  });
});

describe("GET /auth/config + /whoami (oidc mock issuer)", () => {
  let mockServer: Server;
  let issuer: string;
  let privateKey: CryptoKey;

  beforeAll(async () => {
    const pair = await generateKeyPair("RS256");
    privateKey = pair.privateKey as CryptoKey;
    const jwk = { ...(await exportJWK(pair.publicKey)), kid: "test-key", alg: "RS256", use: "sig" };

    mockServer = createServer((req, res) => {
      if (req.url === "/.well-known/openid-configuration") {
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ issuer, jwks_uri: `${issuer}/jwks` }));
        return;
      }
      if (req.url === "/jwks") {
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ keys: [jwk] }));
        return;
      }
      res.statusCode = 404;
      res.end();
    });
    await new Promise<void>((resolve) => mockServer.listen(0, "127.0.0.1", resolve));
    const address = mockServer.address();
    if (typeof address === "object" && address) issuer = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => mockServer.close(() => resolve()));
  });

  const sign = async (sub = "user-42"): Promise<string> =>
    new SignJWT({})
      .setProtectedHeader({ alg: "RS256", kid: "test-key" })
      .setSubject(sub)
      .setAudience("registry-api")
      .setIssuer(issuer)
      .setIssuedAt()
      .setExpirationTime("5m")
      .sign(privateKey);

  it("advertises oidc without browserClientId", async () => {
    const server = await makeServer({
      auth: { mode: "oidc", issuer, audience: "registry-api" },
    });
    const res = await server.router.request("/auth/config");
    expect(res.status).toBe(200);
    const body = (await res.json()) as AuthConfigResponse;
    expect(body).toEqual({
      mode: "oidc",
      oidc: { issuer, audience: "registry-api" },
    });
    assertAuthConfigShape(body);
    expect(JSON.stringify(body)).not.toMatch(/jwks|secret|digest/iu);
  });

  it("advertises browserClientId when configured", async () => {
    const server = await makeServer({
      auth: {
        mode: "oidc",
        issuer,
        audience: "registry-api",
        browserClientId: "browser-pkce-client",
      },
    });
    const res = await server.router.request("/auth/config");
    expect(res.status).toBe(200);
    const body = (await res.json()) as AuthConfigResponse;
    expect(body).toEqual({
      mode: "oidc",
      oidc: {
        issuer,
        audience: "registry-api",
        browserClientId: "browser-pkce-client",
      },
    });
    assertAuthConfigShape(body);
  });

  it("whoami returns identity for a valid bearer", async () => {
    const server = await makeServer({
      auth: { mode: "oidc", issuer, audience: "registry-api" },
    });
    const token = await sign("alice");
    const res = await server.router.request("/whoami", {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      principal: "alice",
      tenantId: DEFAULT_TENANT_ID,
      role: "admin",
      groupIds: [],
      mode: "oidc",
    });
  });

  it("whoami returns 401 for missing or invalid credential", async () => {
    const server = await makeServer({
      auth: { mode: "oidc", issuer, audience: "registry-api" },
    });
    const missing = await server.router.request("/whoami");
    expect(missing.status).toBe(401);
    const bad = await server.router.request("/whoami", {
      headers: { Authorization: "Bearer not-a-jwt" },
    });
    expect(bad.status).toBe(401);
  });
});

describe("GET /whoami", () => {
  it("auth-none returns the local admin principal", async () => {
    const server = await makeServer({ auth: { mode: "none" } });
    const res = await server.router.request("/whoami");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      principal: "local",
      tenantId: DEFAULT_TENANT_ID,
      role: "admin",
      groupIds: [],
      mode: "none",
    });
  });

  it("api-key happy path and 401 on bad credential", async () => {
    const server = await makeServer({ auth: { mode: "api-key" } });
    // Seed a key under the default tenant via the store (auth-none mint path unavailable).
    const { plaintext } = await mintApiKey(server.stores.apiKeys, DEFAULT_TENANT_ID, {
      createdBy: "seed",
    });

    const ok = await server.router.request("/whoami", {
      headers: { Authorization: `Bearer ${plaintext}` },
    });
    expect(ok.status).toBe(200);
    const body = (await ok.json()) as {
      principal: string;
      tenantId: string;
      role: string;
      groupIds: string[];
      mode: string;
    };
    expect(body.tenantId).toBe(DEFAULT_TENANT_ID);
    expect(body.role).toBe("admin");
    expect(body.mode).toBe("api-key");
    expect(body.principal.startsWith("key:")).toBe(true);
    expect(body.groupIds).toEqual([]);

    const missing = await server.router.request("/whoami");
    expect(missing.status).toBe(401);
    const unknown = await server.router.request("/whoami", {
      headers: { Authorization: "Bearer apr_nope" },
    });
    expect(unknown.status).toBe(401);
  });
});

describe("embedded and standalone share discovery routes", () => {
  it("external (embedded) tenancy exposes /auth/config and /whoami on the same router", async () => {
    const server = await makeServer({
      auth: { mode: "none" },
      tenancy: {
        mode: "external",
        resolve: async () => ({
          tenantId: "ws-1",
          role: "member",
          groupIds: ["g1"],
        }),
      },
      allowInsecure: true,
    });

    const config = await server.router.request("/auth/config");
    expect(config.status).toBe(200);
    expect(await config.json()).toEqual({ mode: "none" });

    const whoami = await server.router.request("/whoami");
    expect(whoami.status).toBe(200);
    expect(await whoami.json()).toEqual({
      principal: "local",
      tenantId: "ws-1",
      role: "member",
      groupIds: ["g1"],
      mode: "none",
    });
  });
});
