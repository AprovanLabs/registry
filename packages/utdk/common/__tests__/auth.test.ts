import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  BearerToken,
  ApiKey,
  OAuth2ClientCredentials,
  OAuth2AuthCode,
} from "../auth.js";

describe("BearerToken", () => {
  it("sets Authorization header with Bearer prefix", async () => {
    const auth = new BearerToken("my-secret-token");
    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);
    expect(headers["Authorization"]).toBe("Bearer my-secret-token");
  });
});

describe("ApiKey", () => {
  it("uses X-Api-Key header by default", async () => {
    const auth = new ApiKey({ value: "key123" });
    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);
    expect(headers["X-Api-Key"]).toBe("key123");
  });

  it("uses custom header name when specified", async () => {
    const auth = new ApiKey({ headerName: "X-Custom-Key", value: "secret" });
    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);
    expect(headers["X-Custom-Key"]).toBe("secret");
    expect(headers["X-Api-Key"]).toBeUndefined();
  });
});

describe("OAuth2ClientCredentials", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches a token and applies it to the Authorization header", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        access_token: "access-abc",
        expires_in: 3600,
        token_type: "Bearer",
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2ClientCredentials({
      clientId: "client1",
      clientSecret: "secret1",
      tokenUrl: "https://auth.example.com/token",
    });

    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);

    expect(headers["Authorization"]).toBe("Bearer access-abc");
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(mockFetch).toHaveBeenCalledWith(
      "https://auth.example.com/token",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("caches the token and does not refetch while still valid", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ access_token: "token-xyz", expires_in: 3600 }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2ClientCredentials({
      clientId: "c",
      clientSecret: "s",
      tokenUrl: "https://auth.example.com/token",
    });

    const headers1: Record<string, string> = {};
    await auth.applyToRequest(headers1);

    const headers2: Record<string, string> = {};
    await auth.applyToRequest(headers2);

    expect(mockFetch).toHaveBeenCalledOnce();
    expect(headers2["Authorization"]).toBe("Bearer token-xyz");
  });

  it("sends scopes when configured", async () => {
    let capturedBody = "";
    const mockFetch = vi.fn().mockImplementation(async (_url: string, init: RequestInit) => {
      capturedBody = String(init.body ?? "");
      return {
        ok: true,
        json: async () => ({ access_token: "scoped-token", expires_in: 3600 }),
      };
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2ClientCredentials({
      clientId: "c",
      clientSecret: "s",
      tokenUrl: "https://auth.example.com/token",
      scopes: ["read", "write"],
    });

    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);

    expect(capturedBody).toContain("scope=read+write");
  });

  it("throws on non-ok token response", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      text: async () => "invalid_client",
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2ClientCredentials({
      clientId: "bad",
      clientSecret: "bad",
      tokenUrl: "https://auth.example.com/token",
    });

    await expect(auth.applyToRequest({})).rejects.toThrow("OAuth2 token request failed");
  });
});

describe("OAuth2AuthCode", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("exchanges authorization code for a token", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        access_token: "auth-code-token",
        refresh_token: "refresh-xyz",
        expires_in: 3600,
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2AuthCode({
      clientId: "client1",
      clientSecret: "secret1",
      tokenUrl: "https://auth.example.com/token",
      code: "auth-code-123",
      redirectUri: "https://myapp.com/callback",
    });

    const headers: Record<string, string> = {};
    await auth.applyToRequest(headers);

    expect(headers["Authorization"]).toBe("Bearer auth-code-token");
    expect(mockFetch).toHaveBeenCalledOnce();

    const callArgs = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(callArgs[1].body).toContain("grant_type=authorization_code");
    expect(callArgs[1].body).toContain("code=auth-code-123");
  });

  it("reuses the cached token on subsequent calls", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        access_token: "cached-token",
        refresh_token: "refresh-abc",
        expires_in: 3600,
      }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const auth = new OAuth2AuthCode({
      clientId: "c",
      clientSecret: "s",
      tokenUrl: "https://auth.example.com/token",
      code: "code-abc",
      redirectUri: "https://app.com/cb",
    });

    await auth.applyToRequest({});
    await auth.applyToRequest({});

    expect(mockFetch).toHaveBeenCalledOnce();
  });
});
