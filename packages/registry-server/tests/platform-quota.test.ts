/**
 * Platform quota enforcement (platform-oauth-apps §4, decisions.md):
 * platform-origin dispatch calls contend for the shared pool with the
 * deliberate per-tenant defaults (5 rps / burst 10 / 10k 24h budget); BYO
 * calls never inherit that ceiling; a tenant switching from platform to BYO
 * picks up the wider limit on the very next call with no admin action.
 */

import { afterEach, describe, expect, it, vi } from "vitest";
import { createRegistryServer } from "../src/server.js";
import { resetPlatformOAuthLookup, setPlatformOAuthLookup } from "../src/credentials/oauth.js";
import {
  resetPlatformOAuthSecretStore,
  resetPlatformOAuthStartupLogs,
} from "../src/credentials/platform-secrets.js";
import type { OAuth2ClientPayload } from "../src/credentials/types.js";
import type { RegistryServer } from "../src/config/types.js";
import { adminCtx, fakeProviderModule, makeDispatchEnv, type DispatchEnv } from "./helpers.js";

const stubTokenFetch = () =>
  vi.stubGlobal(
    "fetch",
    vi.fn(async () =>
      new Response(JSON.stringify({ access_token: "tok", expires_in: 3600 }), { status: 200 }),
    ),
  );

let env: DispatchEnv;
let servers: RegistryServer[] = [];

afterEach(async () => {
  await env?.close();
  for (const server of servers) await server.close();
  servers = [];
  resetPlatformOAuthLookup();
  resetPlatformOAuthSecretStore();
  resetPlatformOAuthStartupLogs();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("dispatch-level platform quota (§4.2/§4.3)", () => {
  it("4.2 a platform-origin call is limited by the pool ceiling; a BYO tenant on the same provider is not", async () => {
    env = await makeDispatchEnv({
      limits: { platform: { defaultRps: 1, defaultBurst: 1 } },
      platformPools: [{ provider: "github", rps: 1, burst: 1 }],
    });
    setPlatformOAuthLookup((provider) =>
      provider === "github" ? { clientId: "platform-id", clientSecret: "platform-secret" } : undefined,
    );
    const { mod } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    stubTokenFetch();

    // t1 connects via the shared platform app (no client creds supplied).
    await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "oauth2_client", tokenUrl: "https://issuer.example/token" },
    });
    // t2 brings its own app from the start.
    await env.credentials.create("t2", "user-1", {
      provider: "github",
      payload: {
        type: "oauth2_client",
        clientId: "own-id",
        clientSecret: "own-secret",
        tokenUrl: "https://issuer.example/token",
      },
    });

    await env.dispatcher.dispatch(adminCtx({ tenantId: "t1" }), "github", "repos.get", {});
    await expect(
      env.dispatcher.dispatch(adminCtx({ tenantId: "t1" }), "github", "repos.get", {}),
    ).rejects.toThrow(/Pool rate limit/u);

    // t2's BYO app is untouched by t1's platform-pool exhaustion or ceiling.
    await env.dispatcher.dispatch(adminCtx({ tenantId: "t2" }), "github", "repos.get", {});
    await env.dispatcher.dispatch(adminCtx({ tenantId: "t2" }), "github", "repos.get", {});
  });

  it("4.3 a tenant switching from platform to BYO picks up the wider limit with no admin action", async () => {
    env = await makeDispatchEnv({
      limits: { platform: { defaultRps: 1, defaultBurst: 1 } },
      platformPools: [{ provider: "github", rps: 1, burst: 1 }],
    });
    setPlatformOAuthLookup((provider) =>
      provider === "github" ? { clientId: "platform-id", clientSecret: "platform-secret" } : undefined,
    );
    const { mod } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    stubTokenFetch();

    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "oauth2_client", tokenUrl: "https://issuer.example/token" },
    });

    // Platform pool ceiling binds at 1 rps / burst 1.
    await env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {});
    await expect(
      env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {}),
    ).rejects.toThrow(/Pool rate limit/u);

    // Tenant connects their own OAuth app for the SAME credential — no
    // profile edit, no re-pin, no admin action of any kind.
    const stored = (await env.credentials.getPayload("t1", cred.id)) as OAuth2ClientPayload;
    await env.credentials.updatePayload("t1", cred.id, {
      ...stored,
      clientId: "own-id",
      clientSecret: "own-secret",
      clientOrigin: "tenant",
    });

    // Immediately unblocked on the very next call — BYO never inherits the
    // platform pool ceiling.
    await env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {});
    await env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {});
  });

  it("the platform 24h budget binds on the pool path even when rps/burst are generous", async () => {
    env = await makeDispatchEnv({
      limits: { platform: { defaultRps: 100, defaultBurst: 100, defaultBudget: 2 } },
      platformPools: [{ provider: "github", rps: 100, burst: 100 }],
    });
    setPlatformOAuthLookup((provider) =>
      provider === "github" ? { clientId: "platform-id", clientSecret: "platform-secret" } : undefined,
    );
    const { mod } = fakeProviderModule("createGithubClient");
    env.executor.setModuleForTesting("@utdk/clients/github", mod);
    stubTokenFetch();

    await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "oauth2_client", tokenUrl: "https://issuer.example/token" },
    });

    await env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {});
    await env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {});
    await expect(env.dispatcher.dispatch(adminCtx(), "github", "repos.get", {})).rejects.toThrow(
      /Budget exhausted/u,
    );
  });
});

describe("createRegistryServer startup wiring (§4 — registry.json → pool)", () => {
  it("configures a rate-limit pool for every platformApp provider with a loaded secret", async () => {
    const { writeFile, mkdtemp } = await import("node:fs/promises");
    const { tmpdir } = await import("node:os");
    const { join } = await import("node:path");
    const dir = await mkdtemp(join(tmpdir(), "registry-manifest-"));
    const manifestPath = join(dir, "registry.json");
    await writeFile(manifestPath, JSON.stringify([{ name: "github", platformApp: true }]));

    const originalEnv = {
      REGISTRY_JSON_PATH: process.env["REGISTRY_JSON_PATH"],
      PLATFORM_OAUTH_GITHUB_CLIENT_ID: process.env["PLATFORM_OAUTH_GITHUB_CLIENT_ID"],
      PLATFORM_OAUTH_GITHUB_CLIENT_SECRET: process.env["PLATFORM_OAUTH_GITHUB_CLIENT_SECRET"],
    };
    process.env["REGISTRY_JSON_PATH"] = manifestPath;
    process.env["PLATFORM_OAUTH_GITHUB_CLIENT_ID"] = "hosted-id";
    process.env["PLATFORM_OAUTH_GITHUB_CLIENT_SECRET"] = "hosted-secret";

    try {
      const server = await createRegistryServer({
        storage: { driver: "sqlite", url: "file::memory:" },
        auth: { mode: "none" },
        tenancy: { mode: "single" },
        catalog: { interfaces: [], llmAliases: [] },
        limits: { platform: { poolRps: 1, defaultRps: 1, defaultBurst: 1 } },
      });
      servers.push(server);

      const { mod } = fakeProviderModule("createGithubClient");
      server.executor.setModuleForTesting("@utdk/clients/github", mod);
      stubTokenFetch();
      await server.resolveDeps.credentials.create("t1", "user-1", {
        provider: "github",
        payload: { type: "oauth2_client", tokenUrl: "https://issuer.example/token" },
      });

      const ctx = adminCtx({ tenantId: "t1" });
      await server.dispatch(ctx, "github", "repos.get", {});
      // Pool-limited (not "Pool ... is not configured") proves server.ts
      // actually called configurePool from the manifest at startup.
      await expect(server.dispatch(ctx, "github", "repos.get", {})).rejects.toThrow(
        /Pool rate limit/u,
      );
    } finally {
      for (const [key, value] of Object.entries(originalEnv)) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      }
    }
  });
});
