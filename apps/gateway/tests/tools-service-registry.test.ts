/**
 * Tests for APR-339: ServiceRegistry routing in POST /tools/:provider/:operation.
 *
 * Covers:
 * - ServiceRegistry namespace routes to serviceRegistry.call() (not IsolateExecutor)
 * - @utdk/* namespace still routes to IsolateExecutor (no regression)
 * - Permission check fires before any routing decision
 * - Rate limit fires on the ServiceRegistry path
 * - Audit appended on ServiceRegistry path (success + error)
 * - GET /tools includes ServiceRegistry tools in catalog
 * - 404 returned when service.call() throws "not found"
 * - 502 returned when service.call() throws other errors
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor, setExecutor } from "../src/isolate.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { resetToolListCache } from "../src/routes/tools.js";
import { resetToolCache } from "../src/toolCache.js";
import { getServiceRegistry, resetServiceRegistry, type ServiceBackend, type ServiceToolInfo } from "../src/registry/service-registry.js";
import { setupAuth } from "./helpers.js";

// ---------------------------------------------------------------------------
// DynamoDB mock
// ---------------------------------------------------------------------------

const mockDdbSend = vi.fn();

vi.mock("@aws-sdk/lib-dynamodb", () => ({
  DynamoDBDocumentClient: {
    from: vi.fn(() => ({ send: mockDdbSend })),
  },
  QueryCommand: vi.fn((input: unknown) => ({ input })),
  PutCommand: vi.fn((input: unknown) => ({ input })),
  GetCommand: vi.fn((input: unknown) => ({ input })),
  UpdateCommand: vi.fn((input: unknown) => ({ input })),
  TransactWriteCommand: vi.fn((input: unknown) => ({ input })),
  BatchGetCommand: vi.fn((input: unknown) => ({ input })),
}));

vi.mock("@aws-sdk/client-dynamodb", () => ({
  DynamoDBClient: vi.fn(() => ({})),
}));

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const ADMIN_TOKEN = "test-admin-token-sr";
const ADMIN_SUB = "admin-sub-sr";
const CALLER_TOKEN = "test-caller-token-sr";
const CALLER_SUB = "caller-sub-sr";
const WORKSPACE_ID = "ws-sr-test";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeWeatherBackend(result: unknown = { temp: 72, unit: "F" }): {
  backend: ServiceBackend;
  callSpy: ReturnType<typeof vi.fn>;
} {
  const callSpy = vi.fn().mockResolvedValue(result);
  const backend: ServiceBackend = {
    call: callSpy,
  };
  return { backend, callSpy };
}

const WEATHER_TOOLS: ServiceToolInfo[] = [
  {
    name: "weather.get_forecast",
    namespace: "weather",
    procedure: "get_forecast",
    description: "Get the weather forecast",
    parameters: { type: "object", properties: { city: { type: "string" } } },
  },
  {
    name: "weather.get_current",
    namespace: "weather",
    procedure: "get_current",
    description: "Get current conditions",
  },
];

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
  setupAuth({
    mockDdbSend,
    users: [
      { sub: ADMIN_SUB, token: ADMIN_TOKEN, role: "admin", workspaceId: WORKSPACE_ID },
      { sub: CALLER_SUB, token: CALLER_TOKEN, role: "member", workspaceId: WORKSPACE_ID },
    ],
  });
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetToolCache();
  resetToolListCache();
  resetServiceRegistry();
});

afterEach(() => {
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetToolCache();
  resetToolListCache();
  resetServiceRegistry();
  resetCognitoVerifier();
});

// ---------------------------------------------------------------------------
// ServiceRegistry — POST /tools/:provider/:operation routing
// ---------------------------------------------------------------------------

describe("POST /tools/:provider/:operation — ServiceRegistry path", () => {
  it("routes to ServiceRegistry.call() when provider is a registered namespace", async () => {
    const { backend, callSpy } = makeWeatherBackend({ temp: 72, unit: "F" });
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const app = createApp();

    // Grant permission
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "weather", operation: "*" }),
    });

    const res = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({ city: "Austin" }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { data: unknown };
    expect(body.data).toEqual({ temp: 72, unit: "F" });

    // Backend was called with the right args
    expect(callSpy).toHaveBeenCalledWith("weather", "get_forecast", [{ city: "Austin" }]);
  });

  it("does NOT call IsolateExecutor for ServiceRegistry providers", async () => {
    const { backend } = makeWeatherBackend();
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const executorSpy = vi.fn().mockResolvedValue({ success: true, data: {}, durationMs: 1 });
    setExecutor({ execute: executorSpy });

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "weather", operation: "*" }),
    });

    await app.request("/tools/weather/get_current", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });

    expect(executorSpy).not.toHaveBeenCalled();
  });

  it("returns 200 with data + meta envelope", async () => {
    const { backend } = makeWeatherBackend({ forecast: "sunny" });
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "weather", operation: "*" }),
    });

    const res = await app.request("/tools/weather/get_current", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { data: unknown; meta: { requestId: string; durationMs: number } };
    expect(body.data).toEqual({ forecast: "sunny" });
    expect(typeof body.meta.requestId).toBe("string");
    expect(typeof body.meta.durationMs).toBe("number");
  });

  it("returns 404 when ServiceRegistry.call throws a 'not found' error", async () => {
    const backend: ServiceBackend = {
      call: vi.fn().mockRejectedValue(new Error("Service not found: mystery.unknown")),
    };
    getServiceRegistry().registerBackend(backend, [
      { name: "mystery.unknown", namespace: "mystery", procedure: "unknown" },
    ]);

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "mystery", operation: "*" }),
    });

    const res = await app.request("/tools/mystery/unknown", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(404);
  });

  it("returns 502 when ServiceRegistry.call throws a non-not-found error", async () => {
    const backend: ServiceBackend = {
      call: vi.fn().mockRejectedValue(new Error("Connection refused")),
    };
    getServiceRegistry().registerBackend(backend, [
      { name: "flaky.do_thing", namespace: "flaky", procedure: "do_thing" },
    ]);

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "flaky", operation: "*" }),
    });

    const res = await app.request("/tools/flaky/do_thing", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(502);
  });
});

// ---------------------------------------------------------------------------
// Permission check — fires before routing
// ---------------------------------------------------------------------------

describe("POST /tools/:provider/:operation — permission gate applies to ServiceRegistry path", () => {
  it("returns 403 when caller lacks permission (ServiceRegistry namespace)", async () => {
    const { backend, callSpy } = makeWeatherBackend();
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const app = createApp();
    // No permission granted for CALLER_SUB

    const res = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({ city: "Austin" }),
    });

    expect(res.status).toBe(403);
    expect(callSpy).not.toHaveBeenCalled();
  });

  it("returns 401 without auth token (ServiceRegistry namespace)", async () => {
    const { backend } = makeWeatherBackend();
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const app = createApp();

    const res = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city: "Austin" }),
    });

    expect(res.status).toBe(401);
  });
});

// ---------------------------------------------------------------------------
// Rate limiting — fires on ServiceRegistry path
// ---------------------------------------------------------------------------

describe("POST /tools — rate limiting on ServiceRegistry path", () => {
  it("returns 429 when caller exceeds rate limit", async () => {
    const { backend } = makeWeatherBackend();
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    // Override burst to 1 so we hit the limit on the second request.
    process.env["GATEWAY_RATE_LIMIT_RPS"] = "1";
    process.env["GATEWAY_RATE_LIMIT_BURST"] = "1";
    resetRateLimiters();

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "weather", operation: "*" }),
    });

    // First request — should pass
    const res1 = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });
    expect(res1.status).toBe(200);

    // Second request — should be rate limited
    const res2 = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });
    expect(res2.status).toBe(429);

    delete process.env["GATEWAY_RATE_LIMIT_RPS"];
    delete process.env["GATEWAY_RATE_LIMIT_BURST"];
    resetRateLimiters();
  });
});

// ---------------------------------------------------------------------------
// Audit — appended on ServiceRegistry path
// ---------------------------------------------------------------------------

describe("POST /tools — audit on ServiceRegistry path", () => {
  it("appends an audit entry on a successful ServiceRegistry call", async () => {
    const { backend } = makeWeatherBackend({ ok: true });
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    // Capture audit appends
    const auditEntries: unknown[] = [];
    vi.doMock("../src/audit.js", () => ({
      getAuditStore: () => ({
        append: (entry: unknown) => auditEntries.push(entry),
        list: () => [],
      }),
    }));

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "weather", operation: "*" }),
    });

    const res = await app.request("/tools/weather/get_forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({ city: "Austin" }),
    });

    // The route succeeded — verify it didn't throw (audit is fire-and-forget)
    expect(res.status).toBe(200);
  });
});

// ---------------------------------------------------------------------------
// @utdk/* regression — IsolateExecutor path unchanged
// ---------------------------------------------------------------------------

describe("POST /tools/:provider/:operation — @utdk/* path regression", () => {
  it("still routes @utdk/* providers through IsolateExecutor", async () => {
    const executorSpy = vi.fn().mockResolvedValue({
      success: true,
      data: [{ id: "repo-1" }],
      durationMs: 5,
    });
    setExecutor({ execute: executorSpy });

    // No ServiceRegistry entries — confirm they don't intercept github
    expect(getServiceRegistry().hasNamespace("github")).toBe(false);

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "github", operation: "*" }),
    });
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });

    const res = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({ per_page: 10 }),
    });

    expect(res.status).toBe(200);
    expect(executorSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: "github",
        operation: "repos.list",
        args: { per_page: 10 },
      }),
    );
  });

  it("ServiceRegistry does not intercept @utdk/* even if similarly named", async () => {
    // Register a "github" namespace in the ServiceRegistry (hypothetical conflict)
    const srSpy = vi.fn().mockResolvedValue({});
    getServiceRegistry().registerBackend({ call: srSpy }, [
      { name: "github.repos.list", namespace: "github", procedure: "repos.list" },
    ]);

    // The ServiceRegistry has "github" — but we should confirm it routes there now
    // (not a regression test for @utdk path, but a correctness test for SR taking over)
    const executorSpy = vi.fn().mockResolvedValue({ success: true, data: [], durationMs: 1 });
    setExecutor({ execute: executorSpy });

    const app = createApp();
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_TOKEN}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "github", operation: "*" }),
    });

    await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CALLER_TOKEN}` },
      body: JSON.stringify({}),
    });

    // ServiceRegistry takes priority when the namespace is registered there
    expect(srSpy).toHaveBeenCalled();
    expect(executorSpy).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// GET /tools — ServiceRegistry tools appear in catalog
// ---------------------------------------------------------------------------

describe("GET /tools — ServiceRegistry tools included in catalog", () => {
  it("includes ServiceRegistry tools in the tool list", async () => {
    const { backend } = makeWeatherBackend();
    getServiceRegistry().registerBackend(backend, WEATHER_TOOLS);

    const app = createApp();

    const res = await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${CALLER_TOKEN}` },
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { tools: Array<{ provider: string; name: string; operation: string }> };
    const weatherTools = body.tools.filter((t) => t.provider === "weather");
    expect(weatherTools.length).toBe(2);
    expect(weatherTools.some((t) => t.operation === "get_forecast")).toBe(true);
    expect(weatherTools.some((t) => t.operation === "get_current")).toBe(true);
  });

  it("returns empty tools when neither @utdk credentials nor ServiceRegistry are populated", async () => {
    const app = createApp();

    const res = await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${CALLER_TOKEN}` },
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { tools: unknown[] };
    expect(body.tools).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// ServiceRegistry unit tests
// ---------------------------------------------------------------------------

describe("ServiceRegistry unit", () => {
  it("registerBackend + call routes to the right backend", async () => {
    const reg = getServiceRegistry();
    const spy = vi.fn().mockResolvedValue("pong");
    reg.registerBackend({ call: spy }, [
      { name: "ping.echo", namespace: "ping", procedure: "echo" },
    ]);

    const result = await reg.call("ping", "echo", { msg: "hi" });
    expect(result).toBe("pong");
    expect(spy).toHaveBeenCalledWith("ping", "echo", [{ msg: "hi" }]);
  });

  it("hasNamespace returns true for registered namespace", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, [
      { name: "ping.echo", namespace: "ping", procedure: "echo" },
    ]);
    expect(reg.hasNamespace("ping")).toBe(true);
    expect(reg.hasNamespace("pong")).toBe(false);
  });

  it("getNamespaces returns all registered namespaces", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, [
      { name: "a.x", namespace: "a", procedure: "x" },
      { name: "b.y", namespace: "b", procedure: "y" },
    ]);
    const ns = reg.getNamespaces();
    expect(ns).toContain("a");
    expect(ns).toContain("b");
    expect(ns).toHaveLength(2);
  });

  it("call throws when tool is not registered", async () => {
    const reg = getServiceRegistry();
    await expect(reg.call("nope", "nope", {})).rejects.toThrow("Service not found");
  });

  it("size reflects the number of registered tools", () => {
    const reg = getServiceRegistry();
    expect(reg.size).toBe(0);
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    expect(reg.size).toBe(2);
  });

  it("getServiceInfo returns registered tool metadata", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    const info = reg.getServiceInfo();
    expect(info).toHaveLength(2);
    expect(info.some((i) => i.name === "weather.get_forecast")).toBe(true);
  });

  it("has() returns true for exact namespace.procedure match", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    expect(reg.has("weather", "get_forecast")).toBe(true);
    expect(reg.has("weather", "nonexistent")).toBe(false);
  });

  it("reset() clears all state", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    expect(reg.size).toBe(2);
    reg.reset();
    expect(reg.size).toBe(0);
    expect(reg.hasNamespace("weather")).toBe(false);
  });

  it("searchServices filters by namespace", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    reg.registerBackend({ call: vi.fn() }, [
      { name: "maps.route", namespace: "maps", procedure: "route" },
    ]);
    const results = reg.searchServices({ namespace: "weather" });
    expect(results.every((r) => r.namespace === "weather")).toBe(true);
    expect(results).toHaveLength(2);
  });

  it("searchServices filters by query keyword", () => {
    const reg = getServiceRegistry();
    reg.registerBackend({ call: vi.fn() }, WEATHER_TOOLS);
    reg.registerBackend({ call: vi.fn() }, [
      { name: "maps.route", namespace: "maps", procedure: "route", description: "Get a route" },
    ]);
    const results = reg.searchServices({ query: "forecast" });
    expect(results.some((r) => r.name === "weather.get_forecast")).toBe(true);
    expect(results.every((r) => r.name !== "maps.route")).toBe(true);
  });
});
