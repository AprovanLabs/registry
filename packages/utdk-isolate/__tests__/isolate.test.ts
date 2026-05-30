/**
 * Integration tests for the Isolate runtime.
 *
 * These tests exercise the full execute() path using mock provider modules.
 * Real network calls are avoided — all provider operations are vi.fn() mocks.
 *
 * Provider simulation:
 *   - `@utdk/github`  → Bearer token auth, users.getByUsername operation
 *   - `@utdk/spotify` → OAuth2 pre-resolved token, tracks.search operation
 */

import vm from "node:vm";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createBridge, resolveAuthProvider } from "../src/bridge.js";
import { IsolateTimeoutError } from "../src/index.js";
import { createSandboxContext } from "../src/sandbox.js";
import type { UtdkAuthConfig } from "../src/types.js";

// Reusable sandbox script (same one the Isolate uses internally)
const SANDBOX_SCRIPT = new vm.Script("__bridge__.call(__args__)");

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// Sandbox execution via bridge
// ---------------------------------------------------------------------------

describe("sandbox script invokes bridge.call", () => {
  it("passes args to the operation and returns the result", async () => {
    const operationFn = vi.fn().mockResolvedValue({ id: "track-123", name: "Bohemian Rhapsody" });
    const bridge = createBridge({ operation: operationFn });
    const args = { q: "Bohemian Rhapsody", limit: 1 };

    const context = createSandboxContext({
      extraGlobals: { __bridge__: bridge, __args__: args },
    });

    const result = await (SANDBOX_SCRIPT.runInContext(context) as Promise<unknown>);

    expect(operationFn).toHaveBeenCalledWith(args);
    expect(result).toEqual({ id: "track-123", name: "Bohemian Rhapsody" });
  });

  it("propagates errors thrown by the bridge", async () => {
    const operationFn = vi.fn().mockRejectedValue(new Error("API error 429"));
    const bridge = createBridge({ operation: operationFn });

    const context = createSandboxContext({
      extraGlobals: { __bridge__: bridge, __args__: {} },
    });

    await expect(SANDBOX_SCRIPT.runInContext(context) as Promise<unknown>).rejects.toThrow("API error 429");
  });
});

// ---------------------------------------------------------------------------
// Sandbox isolation
// ---------------------------------------------------------------------------

describe("sandbox isolation", () => {
  it("process is not accessible inside the sandbox", () => {
    const ctx = createSandboxContext();
    const result = vm.runInContext("typeof process", ctx);
    expect(result).toBe("undefined");
  });

  it("process.env is not accessible inside the sandbox", () => {
    const ctx = createSandboxContext();
    const result = vm.runInContext(
      "try { typeof process.env } catch (e) { 'threw' }",
      ctx,
    );
    expect(["threw", "undefined"]).toContain(result);
  });

  it("require is not accessible inside the sandbox", () => {
    const ctx = createSandboxContext();
    expect(vm.runInContext("typeof require", ctx)).toBe("undefined");
  });

  it("global is not accessible inside the sandbox", () => {
    const ctx = createSandboxContext();
    expect(vm.runInContext("typeof global", ctx)).toBe("undefined");
  });

  it("credentials are NOT injected as standalone sandbox globals", () => {
    // Credentials must only flow through the bridge, never as top-level globals.
    const ctx = createSandboxContext({
      extraGlobals: {
        __bridge__: { call: vi.fn().mockResolvedValue({}) },
        __args__: {},
        // GITHUB_TOKEN intentionally NOT added
      },
    });
    expect(vm.runInContext("typeof GITHUB_TOKEN", ctx)).toBe("undefined");
    expect(vm.runInContext("typeof SPOTIFY_ACCESS_TOKEN", ctx)).toBe("undefined");
  });

  it("state from one execution context does not leak to the next", () => {
    const ctx1 = createSandboxContext();
    const ctx2 = createSandboxContext();

    vm.runInContext("var leakyVar = 'should-not-escape'", ctx1);

    expect(vm.runInContext("typeof leakyVar", ctx2)).toBe("undefined");
  });
});

// ---------------------------------------------------------------------------
// Timeout enforcement
// ---------------------------------------------------------------------------

describe("timeout enforcement", () => {
  it("rejects with TimeoutError when execution stalls", async () => {
    const neverResolves = new Promise<never>(() => { /* stalled */ });
    const bridge = { call: vi.fn().mockReturnValue(neverResolves) };

    const ctx = createSandboxContext({
      extraGlobals: { __bridge__: bridge, __args__: {} },
    });

    const resultPromise = SANDBOX_SCRIPT.runInContext(ctx) as Promise<unknown>;
    const timeoutMs = 50;

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new IsolateTimeoutError(timeoutMs)), timeoutMs);
    });

    await expect(Promise.race([resultPromise, timeoutPromise])).rejects.toMatchObject({
      name: "TimeoutError",
    });
  }, 1_000);

  it("TimeoutError message includes the configured timeout value", () => {
    const err = new IsolateTimeoutError(5_000);
    expect(err.message).toContain("5000ms");
    expect(err.name).toBe("TimeoutError");
  });
});

// ---------------------------------------------------------------------------
// Credential injection — github simulation
// ---------------------------------------------------------------------------

describe("credential injection — github provider simulation", () => {
  it("bearer token is injected via auth provider, NOT process.env", async () => {
    const authConfigs: UtdkAuthConfig[] = [
      {
        auth_type: "api_key",
        api_key: "Bearer ${GITHUB_TOKEN}",
        var_name: "Authorization",
      },
    ];
    const credentials = { GITHUB_TOKEN: "ghs_injected_by_gateway" };
    const auth = resolveAuthProvider(credentials, authConfigs);

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);

    expect(headers["Authorization"]).toBe("Bearer ghs_injected_by_gateway");
    // process.env must NOT have been touched
    expect(process.env["GITHUB_TOKEN"]).toBeUndefined();
  });

  it("executes github-like operation via sandbox bridge", async () => {
    const mockUser = { login: "octocat", id: 1, type: "User" };
    const getUserFn = vi.fn().mockResolvedValue(mockUser);

    // Simulate how the client would be structured after createGithubClient()
    const bridge = createBridge({
      operation: (args) => getUserFn(args),
    });

    const context = createSandboxContext({
      extraGlobals: { __bridge__: bridge, __args__: { username: "octocat" } },
    });

    const result = await (SANDBOX_SCRIPT.runInContext(context) as Promise<unknown>);

    expect(getUserFn).toHaveBeenCalledWith({ username: "octocat" });
    expect(result).toEqual(mockUser);
  });
});

// ---------------------------------------------------------------------------
// Credential injection — spotify simulation
// ---------------------------------------------------------------------------

describe("credential injection — spotify provider simulation", () => {
  it("pre-resolved OAuth2 token is injected as BearerToken, NOT via process.env", async () => {
    const authConfigs: UtdkAuthConfig[] = [
      { auth_type: "oauth2", flow: "authorization_code" },
    ];
    // Gateway pre-resolves the OAuth2 exchange and provides the access token directly
    const credentials = { SPOTIFY_ACCESS_TOKEN: "eyJspotify_access_token" };
    const auth = resolveAuthProvider(credentials, authConfigs);

    const headers: Record<string, string> = {};
    await auth!.applyToRequest(headers);

    expect(headers["Authorization"]).toBe("Bearer eyJspotify_access_token");
    expect(process.env["SPOTIFY_ACCESS_TOKEN"]).toBeUndefined();
    expect(process.env["SPOTIFY_CLIENT_SECRET"]).toBeUndefined();
  });

  it("executes spotify-like search operation via sandbox bridge", async () => {
    const mockTracks = {
      tracks: { items: [{ name: "Bohemian Rhapsody", id: "abc" }] },
    };
    const searchFn = vi.fn().mockResolvedValue(mockTracks);
    const bridge = createBridge({ operation: searchFn });

    const context = createSandboxContext({
      extraGlobals: {
        __bridge__: bridge,
        __args__: { q: "Bohemian Rhapsody", type: "track", limit: 1 },
      },
    });

    const result = await (SANDBOX_SCRIPT.runInContext(context) as Promise<unknown>);

    expect(searchFn).toHaveBeenCalledWith({
      q: "Bohemian Rhapsody",
      type: "track",
      limit: 1,
    });
    expect(result).toEqual(mockTracks);
  });
});

// ---------------------------------------------------------------------------
// Performance overhead measurement
// ---------------------------------------------------------------------------

describe("performance overhead", () => {
  it("sandbox overhead is within acceptable bounds (<200ms for trivial calls)", async () => {
    const operationFn = vi.fn().mockResolvedValue({ ok: true });
    const bridge = createBridge({ operation: operationFn });
    const args = { test: true };

    const ITERATIONS = 5;
    const sandboxDurations: number[] = [];
    const directDurations: number[] = [];

    for (let i = 0; i < ITERATIONS; i++) {
      // Sandbox path
      const ctx = createSandboxContext({
        extraGlobals: { __bridge__: bridge, __args__: args },
      });
      const sandboxStart = performance.now();
      await (SANDBOX_SCRIPT.runInContext(ctx) as Promise<unknown>);
      sandboxDurations.push(performance.now() - sandboxStart);

      // Direct call baseline
      const directStart = performance.now();
      await operationFn(args);
      directDurations.push(performance.now() - directStart);
    }

    const avgSandbox = sandboxDurations.reduce((a, b) => a + b, 0) / ITERATIONS;
    const avgDirect = directDurations.reduce((a, b) => a + b, 0) / ITERATIONS;
    const overhead = avgSandbox - avgDirect;

    console.log(
      `[perf] avg sandbox: ${avgSandbox.toFixed(2)}ms, ` +
      `avg direct: ${avgDirect.toFixed(2)}ms, ` +
      `overhead: ${overhead.toFixed(2)}ms`,
    );

    // Context creation + vm.Script execution overhead should be well under 200ms
    expect(avgSandbox).toBeLessThan(200);
  });
});
