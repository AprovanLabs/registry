/**
 * Platform OAuth client resolution (platform-oauth-apps §1).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createStorage } from "../../storage/index.js";
import { CredentialResolutionError, CredentialService } from "../service.js";
import {
  clientCredentialsGrant,
  exchangeAuthorizationCode,
  OAuthClientResolutionError,
  prepareOAuthPayloadForStorage,
  redactTenantCredentialPayload,
  resetPlatformOAuthLookup,
  resolveOAuthClient,
  resolveToInjectable,
  setPlatformOAuthLookup,
} from "../oauth.js";

const PLATFORM = { clientId: "platform-id", clientSecret: "platform-secret" };

let credentials: CredentialService;
let close: () => Promise<void>;

beforeEach(async () => {
  resetPlatformOAuthLookup();
  setPlatformOAuthLookup((provider) => (provider === "github" ? PLATFORM : undefined));
  const storage = await createStorage({ driver: "sqlite", url: "file::memory:" });
  credentials = new CredentialService(storage.credentials, storage.provisionCredential);
  close = () => storage.close();
});

afterEach(async () => {
  await close();
  resetPlatformOAuthLookup();
  vi.restoreAllMocks();
});

describe("resolveOAuthClient", () => {
  it("1.5 tenant override wins over an available platform app", () => {
    const resolution = resolveOAuthClient("github", "tenant-id", "tenant-secret");
    expect(resolution).toEqual({
      clientId: "tenant-id",
      clientSecret: "tenant-secret",
      origin: "tenant",
    });
  });

  it("1.5 platform app is used when the tenant supplies no client credentials", () => {
    const resolution = resolveOAuthClient("github", undefined, undefined);
    expect(resolution).toEqual({ ...PLATFORM, origin: "platform" });
  });

  it("1.5 no platform app and no override produces an actionable 400 naming the provider", () => {
    expect(() => resolveOAuthClient("slack", undefined, undefined)).toThrow(
      OAuthClientResolutionError,
    );
    try {
      resolveOAuthClient("slack", undefined, undefined);
    } catch (err) {
      expect(err).toBeInstanceOf(OAuthClientResolutionError);
      expect((err as OAuthClientResolutionError).status).toBe(400);
      expect((err as Error).message).toMatch(/slack/u);
      expect((err as Error).message).toMatch(/client ID and client secret/u);
    }
  });
});

describe("credential create (platform-oauth-apps §1)", () => {
  it("1.1/1.2 connects via platform app with no tenant client secret", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url, init) => {
        const body = new URLSearchParams(init?.body as string);
        expect(body.get("client_id")).toBe(PLATFORM.clientId);
        expect(body.get("client_secret")).toBe(PLATFORM.clientSecret);
        return new Response(JSON.stringify({ access_token: "live", expires_in: 3600 }), {
          status: 200,
        });
      }),
    );
    try {
      const row = await credentials.create("t1", "user-1", {
        provider: "github",
        payload: {
          type: "oauth2_authcode",
          tokenUrl: "https://issuer.example/token",
          code: "one-time",
          redirectUri: "https://app.example/cb",
        },
      });
      const stored = await credentials.getPayload("t1", row.id);
      expect(stored).toMatchObject({
        type: "oauth2_authcode",
        clientOrigin: "platform",
        accessToken: "live",
      });
      expect(stored).not.toMatchObject({ clientSecret: PLATFORM.clientSecret });
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("1.1 tenant BYO uses the same create path with origin tenant", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url, init) => {
        const body = new URLSearchParams(init?.body as string);
        expect(body.get("client_id")).toBe("tenant-id");
        expect(body.get("client_secret")).toBe("tenant-secret");
        return new Response(JSON.stringify({ access_token: "live", expires_in: 3600 }), {
          status: 200,
        });
      }),
    );
    try {
      const row = await credentials.create("t1", "user-1", {
        provider: "github",
        payload: {
          type: "oauth2_authcode",
          clientId: "tenant-id",
          clientSecret: "tenant-secret",
          tokenUrl: "https://issuer.example/token",
          code: "one-time",
          redirectUri: "https://app.example/cb",
        },
      });
      const stored = await credentials.getPayload("t1", row.id);
      expect(stored).toMatchObject({
        clientOrigin: "tenant",
        clientId: "tenant-id",
      });
      expect((stored as { clientSecret?: string }).clientSecret).toBe("tenant-secret");
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("1.1 create without platform app or tenant credentials fails before provisioning", async () => {
    await expect(
      credentials.create("t1", "user-1", {
        provider: "slack",
        payload: {
          type: "oauth2_client",
          tokenUrl: "https://issuer.example/token",
        },
      }),
    ).rejects.toThrow(CredentialResolutionError);
  });
});

describe("oauth2_client grant at call time (§1.3)", () => {
  it("resolves platform credentials when the stored payload has no secret", async () => {
    const row = await credentials.create("t1", "user-1", {
      provider: "github",
      payload: {
        type: "oauth2_client",
        tokenUrl: "https://issuer.example/token",
      },
    });
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url, init) => {
        const body = new URLSearchParams(init?.body as string);
        expect(body.get("client_id")).toBe(PLATFORM.clientId);
        expect(body.get("client_secret")).toBe(PLATFORM.clientSecret);
        return new Response(JSON.stringify({ access_token: "granted", expires_in: 3600 }), {
          status: 200,
        });
      }),
    );
    try {
      const stored = await credentials.getPayload("t1", row.id);
      const result = await resolveToInjectable(stored!, {
        provider: "github",
        cacheKey: "t1:github:c1",
      });
      expect(result).toEqual({ type: "bearer_token", token: "granted" });
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

describe("tenant-facing credential reads (§1.4)", () => {
  it("redactTenantCredentialPayload strips platform secrets even if present in storage", () => {
    const redacted = redactTenantCredentialPayload("github", {
      type: "oauth2_client",
      clientOrigin: "platform",
      clientId: "leaked-id",
      clientSecret: PLATFORM.clientSecret,
      tokenUrl: "https://issuer.example/token",
    });
    expect(redacted).toMatchObject({
      clientSecret: "",
      clientOrigin: "platform",
    });
    expect((redacted as { clientSecret: string }).clientSecret).not.toBe(PLATFORM.clientSecret);
  });

  it("getPayload never returns a platform client secret", async () => {
    const { payload } = prepareOAuthPayloadForStorage("github", {
      type: "oauth2_client",
      tokenUrl: "https://issuer.example/token",
    });
    const row = await credentials.create("t1", "user-1", {
      provider: "github",
      payload,
    });
    // Simulate a buggy write that persisted the platform secret anyway.
    await credentials.updatePayload("t1", row.id, {
      ...payload,
      clientSecret: PLATFORM.clientSecret,
    });
    const read = await credentials.getPayload("t1", row.id);
    expect((read as { clientSecret?: string }).clientSecret).not.toBe(PLATFORM.clientSecret);
    expect((read as { clientSecret?: string }).clientSecret).toBe("");
  });
});

describe("token helpers use resolveOAuthClient", () => {
  it("exchangeAuthorizationCode uses tenant credentials when supplied", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url, init) => {
        const body = new URLSearchParams(init?.body as string);
        expect(body.get("client_secret")).toBe("tenant-secret");
        return new Response(JSON.stringify({ access_token: "x" }), { status: 200 });
      }),
    );
    try {
      await exchangeAuthorizationCode("github", {
        type: "oauth2_authcode",
        clientId: "tenant-id",
        clientSecret: "tenant-secret",
        tokenUrl: "https://issuer.example/token",
        code: "c",
        redirectUri: "https://app.example/cb",
      });
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("clientCredentialsGrant falls back to the platform app", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url, init) => {
        const body = new URLSearchParams(init?.body as string);
        expect(body.get("client_secret")).toBe(PLATFORM.clientSecret);
        return new Response(JSON.stringify({ access_token: "x" }), { status: 200 });
      }),
    );
    try {
      await clientCredentialsGrant("github", {
        type: "oauth2_client",
        tokenUrl: "https://issuer.example/token",
      });
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
