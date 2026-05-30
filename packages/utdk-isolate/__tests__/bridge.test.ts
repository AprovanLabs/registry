import { describe, it, expect, vi } from "vitest";
import {
  resolveAuthProvider,
  resolveOperation,
  extractAuthConfigs,
  loadProviderClient,
  createBridge,
} from "../src/bridge.js";
import type { UtdkAuthConfig } from "../src/types.js";

// ---------------------------------------------------------------------------
// resolveAuthProvider
// ---------------------------------------------------------------------------

describe("resolveAuthProvider", () => {
  it("returns undefined when credentials are empty", () => {
    const auth = resolveAuthProvider({});
    expect(auth).toBeUndefined();
  });

  it("resolves BearerToken from api_key config with Bearer pattern", async () => {
    const configs: UtdkAuthConfig[] = [
      {
        auth_type: "api_key",
        api_key: "Bearer ${GITHUB_TOKEN}",
        var_name: "Authorization",
        location: "header",
      } as unknown as UtdkAuthConfig,
    ];
    const auth = resolveAuthProvider({ GITHUB_TOKEN: "ghs_test123" }, configs);
    expect(auth).toBeDefined();

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);
    expect(headers["Authorization"]).toBe("Bearer ghs_test123");
  });

  it("resolves ApiKey from raw ${VAR_NAME} api_key pattern", async () => {
    const configs: UtdkAuthConfig[] = [
      {
        auth_type: "api_key",
        api_key: "${DD_API_KEY}",
        var_name: "DD-API-Key",
        location: "header",
      } as unknown as UtdkAuthConfig,
    ];
    const auth = resolveAuthProvider({ DD_API_KEY: "dd_secret" }, configs);
    expect(auth).toBeDefined();

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);
    expect(headers["DD-API-Key"]).toBe("dd_secret");
  });

  it("resolves BearerToken from oauth2 ACCESS_TOKEN credential", async () => {
    const configs: UtdkAuthConfig[] = [
      { auth_type: "oauth2", flow: "authorization_code" },
    ];
    const auth = resolveAuthProvider(
      { SPOTIFY_ACCESS_TOKEN: "eyJaccess" },
      configs,
    );
    expect(auth).toBeDefined();

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);
    expect(headers["Authorization"]).toBe("Bearer eyJaccess");
  });

  it("falls back to BearerToken with first credential when auth config is empty", async () => {
    const auth = resolveAuthProvider({ SOME_TOKEN: "fallback-token" });
    expect(auth).toBeDefined();

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);
    expect(headers["Authorization"]).toBe("Bearer fallback-token");
  });

  it("credential value is never written to process.env", () => {
    const originalEnv = { ...process.env };
    resolveAuthProvider({ SECRET_KEY: "my-secret" });
    // Verify process.env was not modified
    expect(process.env).toEqual(originalEnv);
  });
});

// ---------------------------------------------------------------------------
// resolveOperation
// ---------------------------------------------------------------------------

describe("resolveOperation", () => {
  it("resolves a simple top-level function", () => {
    const fn = vi.fn();
    const client = { getUser: fn };
    const op = resolveOperation(client, "getUser");
    expect(op).toBe(fn);
  });

  it("resolves a nested dot-notation path", () => {
    const fn = vi.fn();
    const client = { users: { getByUsername: fn } };
    const op = resolveOperation(client, "users.getByUsername");
    expect(op).toBe(fn);
  });

  it("resolves a deeply nested path", () => {
    const fn = vi.fn();
    const client = { a: { b: { c: fn } } };
    const op = resolveOperation(client, "a.b.c");
    expect(op).toBe(fn);
  });

  it("throws TypeError when intermediate segment is missing", () => {
    const client = { users: {} };
    expect(() => resolveOperation(client, "users.missing.fn")).toThrow(TypeError);
  });

  it("throws TypeError when operation is not a function", () => {
    const client = { count: 42 };
    expect(() => resolveOperation(client, "count")).toThrow(TypeError);
  });
});

// ---------------------------------------------------------------------------
// extractAuthConfigs
// ---------------------------------------------------------------------------

describe("extractAuthConfigs", () => {
  it("returns empty array when module has no packageJson export", () => {
    const mod: Record<string, unknown> = {};
    expect(extractAuthConfigs(mod)).toEqual([]);
  });

  it("returns empty array when packageJson has no utdk field", () => {
    const mod = { packageJson: { name: "@utdk/test" } };
    expect(extractAuthConfigs(mod)).toEqual([]);
  });

  it("extracts auth array from packageJson.utdk.auth", () => {
    const authConfig: UtdkAuthConfig[] = [
      { auth_type: "api_key", api_key: "Bearer ${TOKEN}", var_name: "Authorization" },
    ];
    const mod = {
      packageJson: {
        name: "@utdk/test",
        utdk: { auth: authConfig },
      },
    };
    expect(extractAuthConfigs(mod)).toEqual(authConfig);
  });
});

// ---------------------------------------------------------------------------
// loadProviderClient
// ---------------------------------------------------------------------------

describe("loadProviderClient", () => {
  it("calls the create*Client factory with auth option", async () => {
    const mockClient = { users: { getByUsername: vi.fn() } };
    const createMockClient = vi.fn().mockResolvedValue(mockClient);
    const mod = { createMockClient };

    const auth = { applyToRequest: vi.fn() };
    const result = await loadProviderClient(mod, auth);

    expect(createMockClient).toHaveBeenCalledWith({ auth });
    expect(result).toBe(mockClient);
  });

  it("calls the factory with empty options when no auth is provided", async () => {
    const mockClient = {};
    const createNoAuthClient = vi.fn().mockResolvedValue(mockClient);
    const mod = { createNoAuthClient };

    await loadProviderClient(mod, undefined);
    expect(createNoAuthClient).toHaveBeenCalledWith({});
  });

  it("throws when no create*Client export is found", async () => {
    const mod = { someOtherExport: "value" };
    await expect(loadProviderClient(mod, undefined)).rejects.toThrow(
      /does not export a create\*Client function/,
    );
  });
});

// ---------------------------------------------------------------------------
// createBridge
// ---------------------------------------------------------------------------

describe("createBridge", () => {
  it("returns an object with a call method", () => {
    const op = vi.fn().mockResolvedValue({ id: 1 });
    const bridge = createBridge({ operation: op });
    expect(typeof bridge.call).toBe("function");
  });

  it("delegates call to the underlying operation", async () => {
    const op = vi.fn().mockResolvedValue({ login: "octocat" });
    const bridge = createBridge({ operation: op });

    const result = await bridge.call({ username: "octocat" });

    expect(op).toHaveBeenCalledWith({ username: "octocat" });
    expect(result).toEqual({ login: "octocat" });
  });

  it("propagates errors from the operation", async () => {
    const op = vi.fn().mockRejectedValue(new Error("API error"));
    const bridge = createBridge({ operation: op });

    await expect(bridge.call({})).rejects.toThrow("API error");
  });
});
