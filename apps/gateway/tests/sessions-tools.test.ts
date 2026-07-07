/**
 * Unit tests for:
 *   - POST /auth/sessions  (APR-297 acceptance criterion 1)
 *   - GET /tools           (APR-297 acceptance criterion 2)
 *   - POST /tools/:ns/:proc with LRU shared client (APR-297 acceptance criterion 3)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor, setExecutor, resetProviderCache, setProviderModuleForTesting, isProviderCached, type IsolateExecutor } from "../src/isolate.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { setCognitoVerifier, resetCognitoVerifier } from "../src/routes/auth.js";
import { resetToolListCache } from "../src/routes/tools.js";
import { resetToolCache, getClientBuildCount, getOrBuildClient } from "../src/toolCache.js";

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
// Setup
// ---------------------------------------------------------------------------

const TEST_JWT_SECRET = "test-jwt-secret-for-sessions-tests";
const TEST_ADMIN_SECRET = "test-admin-secret-for-sessions-tests";

beforeEach(() => {
  process.env["GATEWAY_JWT_SECRET"] = TEST_JWT_SECRET;
  process.env["GATEWAY_ADMIN_SECRET"] = TEST_ADMIN_SECRET;
  process.env["GATEWAY_WORKSPACE_KEY"] = "test-workspace-key";

  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetToolCache();
  resetToolListCache();
  resetProviderCache();
  resetCognitoVerifier();
  mockDdbSend.mockReset();
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
// Helpers
// ---------------------------------------------------------------------------

async function getAdminToken(app: ReturnType<typeof createApp>, workspaceId = "ws-test"): Promise<string> {
  const res = await app.request("/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callerId: "admin", workspaceId, role: "admin", secret: TEST_ADMIN_SECRET }),
  });
  const body = await res.json() as { token: string };
  return body.token;
}

async function getCallerToken(app: ReturnType<typeof createApp>, callerId: string, workspaceId = "ws-test"): Promise<string> {
  const res = await app.request("/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callerId, workspaceId, role: "caller", secret: TEST_ADMIN_SECRET }),
  });
  const body = await res.json() as { token: string };
  return body.token;
}

// ---------------------------------------------------------------------------
// POST /auth/sessions  — acceptance criterion 1
// ---------------------------------------------------------------------------

describe("POST /auth/sessions", () => {
  it("returns a session token when Cognito JWT is valid", async () => {
    const mockSub = "cognito-user-abc123";
    const mockWid = "ws-cognito-workspace";

    setCognitoVerifier({
      verify: vi.fn().mockResolvedValue({ sub: mockSub }),
    });

    // DDB: Memberships query returns one membership; Sessions PutCommand succeeds.
    mockDdbSend.mockImplementation((cmd: { input?: { TableName?: string } }) => {
      const table = cmd?.input?.["TableName"] as string | undefined;
      if (table === "Memberships") {
        return Promise.resolve({ Items: [{ workspaceId: mockWid, userSub: mockSub }] });
      }
      return Promise.resolve({});
    });

    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer cognito-access-token",
      },
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { token: string; expires_at: string; workspace_id: string; expires_in: number };
    expect(typeof body.token).toBe("string");
    expect(body.token.length).toBeGreaterThan(0);
    expect(body.workspace_id).toBe(mockWid);
    expect(body.expires_in).toBe(900);
    expect(typeof body.expires_at).toBe("string");
  });

  it("returns 401 when Cognito JWT is expired or invalid", async () => {
    setCognitoVerifier({
      verify: vi.fn().mockRejectedValue(new Error("Token expired")),
    });

    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer expired-or-invalid-token",
      },
    });

    expect(res.status).toBe(401);
    const body = await res.json() as { error: string };
    expect(body.error).toContain("Invalid or expired");
  });

  it("returns 401 when Authorization header is missing", async () => {
    setCognitoVerifier({ verify: vi.fn() });

    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    expect(res.status).toBe(401);
  });

  it("returns 403 when user has no workspace membership", async () => {
    const mockSub = "user-no-workspace";

    setCognitoVerifier({
      verify: vi.fn().mockResolvedValue({ sub: mockSub }),
    });

    mockDdbSend.mockResolvedValue({ Items: [] });

    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer valid-token",
      },
    });

    expect(res.status).toBe(403);
    const body = await res.json() as { error: string };
    expect(body.error).toContain("No workspace membership");
  });

  it("selects preferred workspace_id when provided in body", async () => {
    const mockSub = "user-multi-workspace";
    const preferredWid = "ws-preferred";
    const otherWid = "ws-other";

    setCognitoVerifier({
      verify: vi.fn().mockResolvedValue({ sub: mockSub }),
    });

    mockDdbSend.mockImplementation((cmd: { input?: { TableName?: string } }) => {
      const table = cmd?.input?.["TableName"] as string | undefined;
      if (table === "Memberships") {
        return Promise.resolve({
          Items: [
            { workspaceId: otherWid, userSub: mockSub },
            { workspaceId: preferredWid, userSub: mockSub },
          ],
        });
      }
      return Promise.resolve({});
    });

    const app = createApp();
    const res = await app.request("/auth/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer valid-token",
      },
      body: JSON.stringify({ workspace_id: preferredWid }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { workspace_id: string };
    expect(body.workspace_id).toBe(preferredWid);
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
      body: JSON.stringify({ callerId: "test-user", provider: "github", operation: "*" }),
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
