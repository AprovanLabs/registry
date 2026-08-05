/**
 * Platform OAuth env wiring (platform-oauth-apps §2).
 */

import { afterEach, describe, expect, it, vi } from "vitest";
import type { InterfaceCatalog } from "../../catalog/types.js";
import type { RegistryServer } from "../types.js";
import { createRegistryServer } from "../../server.js";
import { resetPlatformOAuthLookup, resolveOAuthClient } from "../../credentials/oauth.js";
import { wirePlatformOAuthAtStartup } from "../platform-oauth.js";
import {
  PLATFORM_OAUTH_STORE_PREFIX,
  getPlatformOAuthSecretStore,
  platformOAuthEnvKeys,
  resetPlatformOAuthSecretStore,
  resetPlatformOAuthStartupLogs,
  wirePlatformOAuthSecrets,
} from "../../credentials/platform-secrets.js";

const MINIMAL_CATALOG: InterfaceCatalog = { interfaces: [], llmAliases: [] };

let servers: RegistryServer[] = [];

afterEach(async () => {
  for (const server of servers) await server.close();
  servers = [];
  resetPlatformOAuthLookup();
  resetPlatformOAuthSecretStore();
  resetPlatformOAuthStartupLogs();
  vi.restoreAllMocks();
});

describe("platformOAuthEnvKeys", () => {
  it("maps slash-separated providers to underscore env suffixes", () => {
    expect(platformOAuthEnvKeys("github")).toEqual({
      clientId: "PLATFORM_OAUTH_GITHUB_CLIENT_ID",
      clientSecret: "PLATFORM_OAUTH_GITHUB_CLIENT_SECRET",
    });
    expect(platformOAuthEnvKeys("google/drive")).toEqual({
      clientId: "PLATFORM_OAUTH_GOOGLE_DRIVE_CLIENT_ID",
      clientSecret: "PLATFORM_OAUTH_GOOGLE_DRIVE_CLIENT_SECRET",
    });
  });
});

describe("wirePlatformOAuthSecrets (§2.5)", () => {
  it("flag present + secret present → platform resolution", async () => {
    const logs: string[] = [];
    const keys = platformOAuthEnvKeys("github");
    await wirePlatformOAuthSecrets({
      platformProviders: ["github"],
      env: {
        [keys.clientId]: "hosted-id",
        [keys.clientSecret]: "hosted-secret",
      },
      log: (line) => logs.push(line),
    });

    const resolution = resolveOAuthClient("github", undefined, undefined);
    expect(resolution).toEqual({
      clientId: "hosted-id",
      clientSecret: "hosted-secret",
      origin: "platform",
    });
    expect(logs.some((line) => line.includes("platform_oauth_secret_loaded"))).toBe(true);
  });

  it("flag present + secret absent → BYO with a single startup log", async () => {
    const logs: string[] = [];
    await wirePlatformOAuthSecrets({
      platformProviders: ["slack"],
      env: {},
      log: (line) => logs.push(line),
    });

    expect(() => resolveOAuthClient("slack", undefined, undefined)).toThrow(/slack/u);
    const missingLogs = logs.filter((line) => line.includes("platform_oauth_secret_missing"));
    expect(missingLogs).toHaveLength(1);

    // Second wire must not duplicate the startup log.
    await wirePlatformOAuthSecrets({
      platformProviders: ["slack"],
      env: {},
      log: (line) => logs.push(line),
    });
    expect(logs.filter((line) => line.includes("platform_oauth_secret_missing"))).toHaveLength(1);
  });

  it("flag absent → BYO (lookup returns undefined)", async () => {
    await wirePlatformOAuthSecrets({
      platformProviders: [],
      env: {
        PLATFORM_OAUTH_GITHUB_CLIENT_ID: "orphan-id",
        PLATFORM_OAUTH_GITHUB_CLIENT_SECRET: "orphan-secret",
      },
    });

    expect(() => resolveOAuthClient("github", undefined, undefined)).toThrow(/github/u);
  });
});

describe("platform secret store (§2.4)", () => {
  it("stores secrets under the platform-oauth prefix, not tenant credential keys", async () => {
    const keys = platformOAuthEnvKeys("github");
    const auditCalls: string[] = [];
    await wirePlatformOAuthSecrets({
      platformProviders: ["github"],
      env: {
        [keys.clientId]: "id",
        [keys.clientSecret]: "secret",
      },
      accessAudit: (_provider, storeKey) => auditCalls.push(storeKey),
    });

    resolveOAuthClient("github", undefined, undefined);
    expect(auditCalls).toEqual([`${PLATFORM_OAUTH_STORE_PREFIX}github`]);

    expect(getPlatformOAuthSecretStore().keys()).toEqual([`${PLATFORM_OAUTH_STORE_PREFIX}github`]);
  });

  it("tenant credential store paths cannot read platform-oauth prefix keys", async () => {
    const keys = platformOAuthEnvKeys("github");
    await wirePlatformOAuthSecrets({
      platformProviders: ["github"],
      env: {
        [keys.clientId]: "id",
        [keys.clientSecret]: "secret",
      },
    });

    const server = await createRegistryServer({
      storage: { driver: "sqlite", url: "file::memory:" },
      auth: { mode: "none" },
      tenancy: { mode: "single" },
      catalog: MINIMAL_CATALOG,
    });
    servers.push(server);

    const tenantPayload = await server.stores.credentials.getWithPayload("default", "nonexistent");
    expect(tenantPayload).toBeUndefined();

    // Platform prefix is outside tenant credential id space.
    expect(`${PLATFORM_OAUTH_STORE_PREFIX}github`).not.toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u,
    );
  });
});

describe("wirePlatformOAuthAtStartup (§4 — pool wiring)", () => {
  it("returns only the flagged providers that actually resolved a secret", async () => {
    const { writeFile, mkdtemp } = await import("node:fs/promises");
    const { tmpdir } = await import("node:os");
    const { join } = await import("node:path");
    const dir = await mkdtemp(join(tmpdir(), "registry-manifest-"));
    const manifestPath = join(dir, "registry.json");
    await writeFile(
      manifestPath,
      JSON.stringify([
        { name: "github", platformApp: true },
        { name: "slack", platformApp: true },
        { name: "postgres" },
      ]),
    );
    const keys = platformOAuthEnvKeys("github");

    const loaded = await wirePlatformOAuthAtStartup({
      env: {
        REGISTRY_JSON_PATH: manifestPath,
        [keys.clientId]: "hosted-id",
        [keys.clientSecret]: "hosted-secret",
      },
    });

    // github has a secret; slack is flagged but has none; postgres isn't flagged.
    expect(loaded).toEqual(["github"]);
  });

  it("providers with no secret loaded stay unlisted (self-host, BYO-only)", async () => {
    const loaded = await wirePlatformOAuthAtStartup({
      env: { REGISTRY_JSON_PATH: "/nonexistent/registry.json" },
    });
    expect(loaded).toEqual([]);
  });
});

describe("self-host boot (§2.3)", () => {
  it("does not throw when flagged providers lack env secrets", async () => {
    await expect(
      wirePlatformOAuthSecrets({
        platformProviders: ["github", "slack"],
        env: {},
      }),
    ).resolves.toBeUndefined();
  });

  it("createRegistryServer boots when no platformApp flags are set", async () => {
    const server = await createRegistryServer({
      storage: { driver: "sqlite", url: "file::memory:" },
      auth: { mode: "none" },
      tenancy: { mode: "single" },
      catalog: MINIMAL_CATALOG,
    });
    servers.push(server);

    const health = await server.router.request("/healthz");
    expect(health.status).toBe(200);
  });
});
