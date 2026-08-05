/**
 * Credential domain tests: cipher envelope round-trip, OAuth resolution with
 * the tenant-keyed token cache, and refresh-persist behavior
 * (provider-execution spec "OAuth pre-resolution").
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getCredentialCipher, resetCredentialCipher } from "../src/credentials/cipher.js";
import {
  createOAuthTokenCache,
  resolveToInjectable,
} from "../src/credentials/oauth.js";
import { makeEnv, type TestEnv } from "./helpers.js";
import type { OAuth2AuthCodePayload, OAuth2ClientPayload } from "../src/credentials/types.js";
import type { SqlClient } from "../src/storage/sql-client.js";

let env: TestEnv;

beforeEach(async () => {
  resetCredentialCipher();
  delete process.env["CREDENTIALS_CIPHER_SECRET"];
  env = await makeEnv();
});

afterEach(async () => {
  await env.close();
  resetCredentialCipher();
  delete process.env["CREDENTIALS_CIPHER_SECRET"];
  vi.restoreAllMocks();
});

describe("credential cipher", () => {
  it("local backend seals and opens the envelope; plaintext legacy reads pass through", async () => {
    process.env["CREDENTIALS_CIPHER_SECRET"] = "test-secret";
    resetCredentialCipher();
    const cipher = getCredentialCipher();
    expect(cipher.backend).toBe("local");
    const sealed = await cipher.encrypt('{"type":"bearer_token","token":"x"}');
    expect(sealed.startsWith("enc:v1:local:")).toBe(true);
    expect(await cipher.decrypt(sealed)).toBe('{"type":"bearer_token","token":"x"}');
    // Legacy plaintext decrypts as itself.
    expect(await cipher.decrypt('{"plain":true}')).toBe('{"plain":true}');
  });

  it("service round-trips payloads through the cipher", async () => {
    process.env["CREDENTIALS_CIPHER_SECRET"] = "test-secret";
    resetCredentialCipher();
    const row = await env.credentials.create("t1", "u", {
      provider: "github",
      payload: { type: "bearer_token", token: "tok" },
    });
    // Raw storage holds the envelope, not the token.
    const raw = await env.storage.credentials.getWithPayload("t1", row.id);
    expect(raw?.payload.startsWith("enc:v1:local:")).toBe(true);
    expect(raw?.payload).not.toContain("tok");
    // The service decrypts.
    expect(await env.credentials.getPayload("t1", row.id)).toEqual({
      type: "bearer_token",
      token: "tok",
    });
  });
});

describe("oauth resolution", () => {
  it("client-credentials tokens cache per key until expiry; distinct tenants get distinct entries", async () => {
    const payload: OAuth2ClientPayload = {
      type: "oauth2_client",
      clientId: "id",
      clientSecret: "secret",
      tokenUrl: "https://issuer.example/token",
    };
    let calls = 0;
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        calls += 1;
        return new Response(
          JSON.stringify({ access_token: `tok-${calls}`, expires_in: 3600 }),
          { status: 200 },
        );
      }),
    );
    const cache = createOAuthTokenCache();
    const a1 = await resolveToInjectable(payload, {
      provider: "github",
      cacheKey: "tenant-a:svc:c1",
      cache,
    });
    const a2 = await resolveToInjectable(payload, {
      provider: "github",
      cacheKey: "tenant-a:svc:c1",
      cache,
    });
    expect(a1).toEqual({ type: "bearer_token", token: "tok-1" });
    expect(a2).toEqual({ type: "bearer_token", token: "tok-1" }); // cache hit
    expect(calls).toBe(1);
    const b1 = await resolveToInjectable(payload, {
      provider: "github",
      cacheKey: "tenant-b:svc:c1",
      cache,
    });
    expect(b1).toEqual({ type: "bearer_token", token: "tok-2" }); // no cross-tenant reuse
    expect(calls).toBe(2);
    vi.unstubAllGlobals();
  });

  it("expired authcode token refreshes once and persists the updated payload", async () => {
    const payload: OAuth2AuthCodePayload = {
      type: "oauth2_authcode",
      clientId: "id",
      clientSecret: "secret",
      tokenUrl: "https://issuer.example/token",
      code: "",
      redirectUri: "https://app.example/cb",
      accessToken: "stale",
      refreshToken: "refresh-1",
      expiresAt: Date.now() - 1000,
    };
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(
          JSON.stringify({ access_token: "fresh", refresh_token: "refresh-2", expires_in: 3600 }),
          { status: 200 },
        ),
      ),
    );
    const persisted: unknown[] = [];
    const result = await resolveToInjectable(payload, {
      provider: "github",
      cacheKey: "t:x:c",
      persist: async (p) => {
        persisted.push(p);
      },
    });
    expect(result).toEqual({ type: "bearer_token", token: "fresh" });
    expect(persisted).toHaveLength(1);
    const stored = persisted[0] as OAuth2AuthCodePayload;
    expect(stored.accessToken).toBe("fresh");
    expect(stored.refreshToken).toBe("refresh-2");
    vi.unstubAllGlobals();
  });

  it("bearer and api-key payloads pass through untouched", async () => {
    expect(
      await resolveToInjectable({ type: "bearer_token", token: "t" }, { provider: "github", cacheKey: "k" }),
    ).toEqual({ type: "bearer_token", token: "t" });
    expect(
      await resolveToInjectable(
        { type: "api_key", value: "v", headerName: "X-K" },
        { provider: "github", cacheKey: "k" },
      ),
    ).toEqual({ type: "api_key", value: "v", headerName: "X-K" });
  });
});

/**
 * Grant-enforcement tech-plan D3, §3: connecting a credential provisions a
 * `default` profile + grant to the connecting principal in the SAME
 * transaction — every `credentials.create()` call site (direct, OAuth
 * authcode exchange) routes through `RegistryStorage.provisionCredential`.
 */
describe("default profile provisioning (grant-enforcement §3)", () => {
  it("3.1/3.2 direct create writes a default profile + grant bound to the credential", async () => {
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "bearer_token", token: "gh" },
    });
    const profile = await env.storage.profiles.getByName("t1", "provider", "github", "default");
    expect(profile).toBeDefined();
    expect(profile?.credentialId).toBe(cred.id);
    expect(profile?.createdBy).toBe("user-1");
    const granted = await env.storage.grants.grantedProfileIds("t1", [
      { kind: "user", id: "user-1" },
    ]);
    expect(granted.has(profile!.id)).toBe(true);
  });

  it("3.2 the OAuth authcode exchange path provisions the same way as a direct create", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ access_token: "live", expires_in: 3600 }), { status: 200 }),
      ),
    );
    try {
      const cred = await env.credentials.create("t1", "user-1", {
        provider: "github",
        payload: {
          type: "oauth2_authcode",
          clientId: "id",
          clientSecret: "s",
          tokenUrl: "https://issuer.example/token",
          code: "one-time-code",
          redirectUri: "https://app.example/cb",
        },
      });
      const profile = await env.storage.profiles.getByName("t1", "provider", "github", "default");
      expect(profile?.credentialId).toBe(cred.id);
      const granted = await env.storage.grants.grantedProfileIds("t1", [
        { kind: "user", id: "user-1" },
      ]);
      expect(granted.has(profile!.id)).toBe(true);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("3.3 a second credential for the same provider does not steal the existing default", async () => {
    const first = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "bearer_token", token: "one" },
    });
    const second = await env.credentials.create("t1", "user-2", {
      provider: "github",
      payload: { type: "bearer_token", token: "two" },
    });
    const profile = await env.storage.profiles.getByName("t1", "provider", "github", "default");
    expect(profile?.credentialId).toBe(first.id);
    expect(profile?.credentialId).not.toBe(second.id);
    // No new grant follows a refused bind — "user-2" never connected anything usable.
    const granted = await env.storage.grants.grantedProfileIds("t1", [
      { kind: "user", id: "user-2" },
    ]);
    expect(granted.has(profile!.id)).toBe(false);
  });

  it("3.3 binds an existing unpinned default row instead of creating a duplicate", async () => {
    const preexisting = await env.profiles.create(
      { tenantId: "t1", principal: "admin", source: { type: "tool" }, role: "admin", groupIds: [] },
      { name: "default", target: { kind: "provider", provider: "github" } },
    );
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "bearer_token", token: "gh" },
    });
    const profile = await env.storage.profiles.getById("t1", preexisting.id);
    expect(profile?.credentialId).toBe(cred.id);
    const granted = await env.storage.grants.grantedProfileIds("t1", [
      { kind: "user", id: "user-1" },
    ]);
    expect(granted.has(preexisting.id)).toBe(true);
  });

  it("3.4 connect → immediately dispatch resolves via the provisioned profile, no admin step", async () => {
    const { resolveProfile } = await import("../src/profiles/resolve.js");
    const { ctx } = await import("./helpers.js");
    const cred = await env.credentials.create("t1", "user-1", {
      provider: "github",
      payload: { type: "bearer_token", token: "gh" },
    });
    const resolved = await resolveProfile(env.deps, ctx(), "github");
    expect(resolved.credential?.id).toBe(cred.id);
    expect(resolved.profileId).toBeDefined();
  });

  it("3.4 a failed write leaves no half-state: neither the credential nor the profile persist", async () => {
    // Force the grant write inside the transaction to fail — everything
    // written before it in the same transaction (credential + profile) must
    // roll back with it.
    const db = (env.storage.credentials as unknown as { db: SqlClient }).db;
    const originalRun = db.run.bind(db);
    const runSpy = vi
      .spyOn(db, "run")
      .mockImplementation(async (sql: string, params?: unknown[]) => {
        if (sql.includes("INSERT INTO profile_grants")) {
          throw new Error("simulated failure writing the grant");
        }
        return originalRun(sql, params);
      });
    try {
      await expect(
        env.credentials.create("t1", "user-1", {
          provider: "github",
          payload: { type: "bearer_token", token: "gh" },
        }),
      ).rejects.toThrow(/simulated failure/);
    } finally {
      runSpy.mockRestore();
    }
    expect(await env.storage.credentials.list("t1")).toHaveLength(0);
    expect(
      await env.storage.profiles.getByName("t1", "provider", "github", "default"),
    ).toBeUndefined();
  });
});
