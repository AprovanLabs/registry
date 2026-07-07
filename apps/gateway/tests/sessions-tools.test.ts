/**
 * Unit tests for:
 *   - POST /auth/sessions  (workspace picker, APR-280)
 *   - GET /tools           (workspace-filtered discovery)
 *   - POST /tools/:ns/:proc with LRU shared client
 *
 * Auth is exercised via mocked Cognito verification + a mocked DDB document
 * client (see tests/helpers.ts).
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor, setExecutor, resetProviderCache, setProviderModuleForTesting, isProviderCached, type IsolateExecutor } from "../src/isolate.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { resetToolListCache } from "../src/routes/tools.js";
import { resetToolCache, getClientBuildCount, getOrBuildClient } from "../src/toolCache.js";
import { setupAuth } from "./helpers.js";

// ---------------------------------------------------------------------------
// DynamoDB mock — intercepts all document client calls
// ---------------------------------------------------------------------------

const mockDdbSend = vi.fn();

vi.mock("@aws-sdk/lib-dynamodb", () => ({
  DynamoDBDocumentClient: {
    from: vi.fn(() => ({ send: mockDdbSend })),
  },
  QueryCommand: vi.fn((input: unknown) => ({ input })),
  PutCommand: vi.fn((input: unknown) => ({ input })),
  GetCommand: vi.fn((input: unknown) => ({ input })),
}));

vi.mock("@aws-sdk/client-dynamodb", () => ({
  DynamoDBClient: vi.fn(() => ({})),
}));

// ---------------------------------------------------------------------------
// utdk/github mock — minimal provider export so LRU cache tests work
// ---------------------------------------------------------------------------

const mockGithubClientFactory = vi.fn();

vi.mock("utdk/github", () => ({
  createGithubClient: mockGithubClientFactory,
  toolMetadata: {
    "repos/list": {
      accessPath: ["repos", "list"],
      description: "List repositories",
      method: "GET",
      routeTemplate: "/repos",
      bodyPropertyKeys: [],
      queryParameterKeys: [],
      pathParameterKeys: [],
      headerParameterKeys: [],
    },
  },
}));

// ---------------------------------------------------------------------------
// Auth fixtures
// ---------------------------------------------------------------------------

const ADMIN_TOKEN = "test-cognito-admin-token";
const CALLER_TOKEN = "test-cognito-caller-token";
const ADMIN_SUB = "admin-user";
const CALLER_SUB = "caller-user";
const WORKSPACE_ID = "ws-test";
const PICKER_TOKEN = "test-cognito-picker-token";
const PICKER_SUB = "picker-user";
const PICKER_WORKSPACE = "ws-pick";

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

beforeEach(() => {
  process.env["GATEWAY_WORKSPACE_KEY"] = "test-workspace-key";
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
  resetProviderCache();
  mockGithubClientFactory.mockReset();
});

afterEach(() => {
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetToolCache();
  resetToolListCache();
  resetProviderCache();
  resetCognitoVerifier();
});

// ---------------------------------------------------------------------------
// Helpers — return a Bearer token for the configured admin / caller fixture.
// ---------------------------------------------------------------------------

async function getAdminToken(_app?: ReturnType<typeof createApp>): Promise<string> {
  return ADMIN_TOKEN;
}

async function getCallerToken(
  _app?: ReturnType<typeof createApp>,
  _callerId?: string,
  _workspaceId?: string,
): Promise<string> {
  return CALLER_TOKEN;
}

// ---------------------------------------------------------------------------
// POST /auth/sessions — workspace picker
// ---------------------------------------------------------------------------

describe("POST /auth/sessions", () => {
  beforeEach(() => {
    setupAuth({
      mockDdbSend,
      users: [
        { sub: PICKER_SUB, token: PICKER_TOKEN, role: "member", workspaceId: PICKER_WORKSPACE },
      ],
    });
  });

  it("sets the active workspace and returns workspace_id", async () => {
    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PICKER_TOKEN}`,
      },
      body: JSON.stringify({ workspace_id: PICKER_WORKSPACE }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { workspace_id: string };
    expect(body.workspace_id).toBe(PICKER_WORKSPACE);

    // The picker persists the choice via a Put against the Sessions table.
    const putCalls = mockDdbSend.mock.calls.filter(
      (c) =>
        (c[0] as { input?: { TableName?: string } }).input?.TableName ===
        "Sessions",
    );
    expect(putCalls.length).toBe(1);
    const item = (putCalls[0]![0] as {
      input?: { Item?: Record<string, unknown> };
    }).input?.Item;
    expect(item?.["userSub"]).toBe(PICKER_SUB);
    expect(item?.["currentWorkspaceId"]).toBe(PICKER_WORKSPACE);
  });

  it("returns 401 when the Cognito token is invalid", async () => {
    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer not-a-real-token",
      },
      body: JSON.stringify({ workspace_id: PICKER_WORKSPACE }),
    });

    expect(res.status).toBe(401);
    const body = await res.json() as { error: string };
    expect(body.error).toContain("Invalid or expired");
  });

  it("returns 401 when Authorization header is missing", async () => {
    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    expect(res.status).toBe(401);
  });

  it("returns 400 when workspace_id is missing", async () => {
    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PICKER_TOKEN}`,
      },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    const body = await res.json() as { code?: string };
    expect(body.code).toBe("workspace_not_selected");
  });

  it("returns 403 when not a member of the requested workspace", async () => {
    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PICKER_TOKEN}`,
      },
      body: JSON.stringify({ workspace_id: "ws-not-a-member" }),
    });

    expect(res.status).toBe(403);
  });
});

// ---------------------------------------------------------------------------
// GET /tools  — acceptance criterion 2
// ---------------------------------------------------------------------------

describe("GET /tools", () => {
  it("returns tool contracts for providers the workspace has credentials for", async () => {
    // Inject the mock provider module so getProviderModule doesn't hit real utdk.
    setProviderModuleForTesting("github", {
      createGithubClient: mockGithubClientFactory,
      toolMetadata: {
        "repos/list": {
          accessPath: ["repos", "list"],
          description: "List repositories",
          method: "GET",
          routeTemplate: "/repos",
          bodyPropertyKeys: [],
          queryParameterKeys: [],
          pathParameterKeys: [],
          headerParameterKeys: [],
        },
      },
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);

    // Register a credential so the workspace has github tools.
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });

    const callerToken = await getCallerToken(app, "user-1");
    const res = await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${callerToken}` },
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { tools: { provider: string; name: string }[]; workspace_id: string };
    expect(body.workspace_id).toBe("ws-test");
    expect(Array.isArray(body.tools)).toBe(true);
    expect(body.tools.some((t) => t.provider === "github")).toBe(true);
  });

  it("returns 401 without a token", async () => {
    const app = createApp();
    const res = await app.request("/tools", { method: "GET" });
    expect(res.status).toBe(401);
  });

  it("returns cached contracts on the second call (same warm container)", async () => {
    setProviderModuleForTesting("github", {
      createGithubClient: mockGithubClientFactory,
      toolMetadata: {
        "repos/list": {
          accessPath: ["repos", "list"],
          description: "List repositories",
          method: "GET",
          routeTemplate: "/repos",
          bodyPropertyKeys: [],
          queryParameterKeys: [],
          pathParameterKeys: [],
          headerParameterKeys: [],
        },
      },
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);

    // Register a credential so workspace has tools.
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });

    const callerToken = await getCallerToken(app, "user-cache");

    // First call — contracts loaded into cache.
    const res1 = await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${callerToken}` },
    });
    expect(res1.status).toBe(200);
    const body1 = await res1.json() as { tools: unknown[] };

    // Second call — returns identical cached result.
    const res2 = await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${callerToken}` },
    });
    expect(res2.status).toBe(200);
    const body2 = await res2.json() as { tools: unknown[] };

    expect(body1.tools).toEqual(body2.tools);
  });
});

// ---------------------------------------------------------------------------
// POST /tools/:ns/:proc with shared client — acceptance criterion 3
// ---------------------------------------------------------------------------

describe("POST /tools/:ns/:proc (shared client LRU)", () => {
  it("calls shared client with per-session credentials injected", async () => {
    const executorSpy = vi.fn().mockResolvedValue({
      success: true,
      data: [{ id: "repo-1" }],
      durationMs: 5,
    });
    setExecutor({ execute: executorSpy });

    const app = createApp();
    const adminToken = await getAdminToken(app);

    // Grant permission and store credentials.
    await app.request("/permissions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ callerId: CALLER_SUB, provider: "github", operation: "*" }),
    });
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_session_token" } }),
    });

    const callerToken = await getCallerToken(app, "test-user");

    const res = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${callerToken}` },
      body: JSON.stringify({ per_page: 10 }),
    });

    expect(res.status).toBe(200);
    expect(executorSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: "github",
        operation: "repos.list",
        args: { per_page: 10 },
        credentials: expect.objectContaining({
          type: "bearer_token",
          token: "ghp_session_token",
        }),
      }),
    );
  });

  it("LRU cache: provider module not re-imported on repeated calls", async () => {
    // Inject a mock provider module (bypass dynamic import).
    const fakeMod = {
      createGithubClient: mockGithubClientFactory,
      toolMetadata: {},
    };
    setProviderModuleForTesting("github", fakeMod);

    // First retrieval — already in cache via setProviderModuleForTesting.
    const m1 = await import("../src/isolate.js").then(({ getProviderModule }) => getProviderModule("github"));
    // Second retrieval — same reference from LRU cache.
    const m2 = await import("../src/isolate.js").then(({ getProviderModule }) => getProviderModule("github"));

    expect(m1).toBe(m2);
    expect(isProviderCached("github")).toBe(true);
  });

  it("getOrBuildClient caches built client — factory only called once", async () => {
    const mockClient = { repos: { list: vi.fn().mockResolvedValue([]) } };
    mockGithubClientFactory.mockResolvedValue(mockClient);

    resetToolCache();
    const c1 = await getOrBuildClient("github");
    const c2 = await getOrBuildClient("github");

    expect(c1).toBe(c2);
    expect(getClientBuildCount()).toBe(1);
  });
});
