/**
 * Integration tests for the gateway.
 *
 * Tests the full request flow:
 *   /auth/token → credentials CRUD → permission grants → tool proxy
 *
 * Uses the Hono test client (app.request()) so no real port is bound.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCredentialStore } from "../src/credentials.js";
import {
  resetExecutor,
  setExecutor,
  setProviderModuleForTesting,
  isProviderCached,
  resetProviderCache,
  getProviderModule,
  type IsolateExecutor,
} from "../src/isolate.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { resetToolListCache } from "../src/routes/tools.js";

// ---------------------------------------------------------------------------
// Cognito SDK mock (used by DCR tests)
// ---------------------------------------------------------------------------

vi.mock("@aws-sdk/client-cognito-identity-provider", () => {
  const mockSend = vi.fn();
  const CognitoIdentityProviderClient = vi.fn(() => ({ send: mockSend }));
  const CreateUserPoolClientCommand = vi.fn((input: unknown) => ({ input }));
  return { CognitoIdentityProviderClient, CreateUserPoolClientCommand, mockSend };
});

// Accessor used in DCR tests to control mock behaviour
async function getCognitoMockSend() {
  const mod = await import("@aws-sdk/client-cognito-identity-provider") as {
    mockSend: ReturnType<typeof vi.fn>;
  };
  return mod.mockSend;
}

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

const TEST_WORKSPACE_KEY = "test-workspace-key-for-tests-only";
const TEST_JWT_SECRET = "test-jwt-secret-for-tests-only";
const TEST_ADMIN_SECRET = "test-admin-secret-for-tests-only";

beforeEach(() => {
  process.env["GATEWAY_WORKSPACE_KEY"] = TEST_WORKSPACE_KEY;
  process.env["GATEWAY_JWT_SECRET"] = TEST_JWT_SECRET;
  process.env["GATEWAY_ADMIN_SECRET"] = TEST_ADMIN_SECRET;

  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetProviderCache();
  resetToolListCache();
});

afterEach(() => {
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetProviderCache();
  resetToolListCache();
  delete process.env["PROVIDER_CACHE_SIZE"];
  delete process.env["TOOL_LIST_CACHE_TTL_MS"];
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function getAdminToken(app: ReturnType<typeof createApp>, workspaceId = "ws-test"): Promise<string> {
  const res = await app.request("/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      callerId: "admin-caller",
      workspaceId,
      role: "admin",
      secret: TEST_ADMIN_SECRET,
    }),
  });
  const body = await res.json() as { token: string };
  return body.token;
}

async function getCallerToken(app: ReturnType<typeof createApp>, callerId: string, workspaceId = "ws-test"): Promise<string> {
  const res = await app.request("/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      callerId,
      workspaceId,
      role: "caller",
      secret: TEST_ADMIN_SECRET,
    }),
  });
  const body = await res.json() as { token: string };
  return body.token;
}

// ---------------------------------------------------------------------------
// Health check
// ---------------------------------------------------------------------------

describe("GET /health", () => {
  it("returns 200 with status ok", async () => {
    const app = createApp();
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const body = await res.json() as { status: string };
    expect(body.status).toBe("ok");
  });
});

// ---------------------------------------------------------------------------
// Authentication
// ---------------------------------------------------------------------------

describe("POST /auth/token", () => {
  it("issues a token with valid secret", async () => {
    const app = createApp();
    const res = await app.request("/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callerId: "mcp-server",
        workspaceId: "ws-1",
        role: "caller",
        secret: TEST_ADMIN_SECRET,
      }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { token: string; expiresIn: number };
    expect(typeof body.token).toBe("string");
    expect(body.expiresIn).toBe(3600);
  });

  it("returns 401 with invalid secret", async () => {
    const app = createApp();
    const res = await app.request("/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callerId: "mcp-server",
        workspaceId: "ws-1",
        role: "caller",
        secret: "wrong-secret",
      }),
    });
    expect(res.status).toBe(401);
  });
});

// ---------------------------------------------------------------------------
// Credential CRUD
// ---------------------------------------------------------------------------

describe("Credentials CRUD", () => {
  it("creates and lists a bearer_token credential", async () => {
    const app = createApp();
    const token = await getAdminToken(app);

    const createRes = await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        provider: "github",
        label: "My GitHub token",
        payload: { type: "bearer_token", token: "ghp_test" },
      }),
    });
    expect(createRes.status).toBe(201);
    const cred = await createRes.json() as { id: string; provider: string; type: string };
    expect(cred.provider).toBe("github");
    expect(cred.type).toBe("bearer_token");
    expect(typeof cred.id).toBe("string");

    // List
    const listRes = await app.request("/credentials", {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(listRes.status).toBe(200);
    const list = await listRes.json() as { credentials: unknown[] };
    expect(list.credentials).toHaveLength(1);
  });

  it("deletes a credential", async () => {
    const app = createApp();
    const token = await getAdminToken(app);

    const createRes = await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "ghp_test" },
      }),
    });
    const cred = await createRes.json() as { id: string };

    const deleteRes = await app.request(`/credentials/${cred.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(deleteRes.status).toBe(200);
    const del = await deleteRes.json() as { deleted: boolean };
    expect(del.deleted).toBe(true);
  });

  it("returns 401 without a token", async () => {
    const app = createApp();
    const res = await app.request("/credentials");
    expect(res.status).toBe(401);
  });

  it("returns 403 when caller role tries to create credential", async () => {
    const app = createApp();
    const token = await getCallerToken(app, "mcp-server");

    const res = await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "ghp_test" },
      }),
    });
    expect(res.status).toBe(403);
  });
});

// ---------------------------------------------------------------------------
// Permission management
// ---------------------------------------------------------------------------

describe("Permissions CRUD", () => {
  it("grants and lists a permission", async () => {
    const app = createApp();
    const token = await getAdminToken(app);

    const grantRes = await app.request("/permissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        callerId: "mcp-server",
        provider: "github",
        operation: "*",
      }),
    });
    expect(grantRes.status).toBe(201);
    const perm = await grantRes.json() as { id: string; callerId: string };
    expect(perm.callerId).toBe("mcp-server");

    const listRes = await app.request("/permissions", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const list = await listRes.json() as { permissions: unknown[] };
    expect(list.permissions).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------
// Tool proxy
// ---------------------------------------------------------------------------

describe("POST /tools/:provider/:operation", () => {
  it("returns 403 when no permission is granted", async () => {
    const app = createApp();
    const token = await getCallerToken(app, "mcp-server");

    const res = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });
    expect(res.status).toBe(403);
  });

  it("executes a tool call with a mock isolate executor", async () => {
    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: true,
        data: [{ name: "test-repo" }],
        durationMs: 10,
      }),
    };
    setExecutor(mockExecutor);

    const app = createApp();
    const adminToken = await getAdminToken(app);

    // Store a credential
    await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "ghp_test" },
      }),
    });

    // Grant permission
    await app.request("/permissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        callerId: "mcp-server",
        provider: "github",
        operation: "*",
      }),
    });

    const callerToken = await getCallerToken(app, "mcp-server");

    const res = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${callerToken}`,
      },
      body: JSON.stringify({ per_page: 5 }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { data: unknown[]; meta: { requestId: string } };
    expect(body.data).toHaveLength(1);
    expect(typeof body.meta.requestId).toBe("string");

    expect(mockExecutor.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: "github",
        operation: "repos.list",
        args: { per_page: 5 },
      }),
    );
  });

  it("forwards executor errors as 500", async () => {
    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: false,
        error: "Provider unreachable",
        durationMs: 5,
      }),
    };
    setExecutor(mockExecutor);

    const app = createApp();
    const adminToken = await getAdminToken(app);

    await app.request("/permissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        callerId: "mcp-server",
        provider: "github",
        operation: "*",
      }),
    });

    const callerToken = await getCallerToken(app, "mcp-server");
    const res = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${callerToken}`,
      },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(500);
    const body = await res.json() as { error: string };
    expect(body.error).toBe("Provider unreachable");
  });
});

// ---------------------------------------------------------------------------
// Credential encryption
// ---------------------------------------------------------------------------

describe("Credential encryption", () => {
  it("does not return plaintext credentials in list response", async () => {
    const app = createApp();
    const token = await getAdminToken(app);

    await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        provider: "stripe",
        payload: { type: "api_key", value: "sk_test_supersecret" },
      }),
    });

    const listRes = await app.request("/credentials", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const list = await listRes.json() as { credentials: Record<string, unknown>[] };
    const record = list.credentials[0]!;

    // None of the sensitive fields should be exposed
    expect(JSON.stringify(record)).not.toContain("sk_test_supersecret");
    expect(record["encryptedPayload"]).toBeUndefined();
    expect(record["iv"]).toBeUndefined();
    expect(record["authTag"]).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// OAuth 2.0 Dynamic Client Registration (RFC 7591)
// ---------------------------------------------------------------------------

describe("POST /oauth/register", () => {
  beforeEach(async () => {
    process.env["COGNITO_USER_POOL_ID"] = "us-east-1_TestPool";
    process.env["COGNITO_REGION"] = "us-east-1";
    const mockSend = await getCognitoMockSend();
    mockSend.mockReset();
  });

  afterEach(() => {
    delete process.env["COGNITO_USER_POOL_ID"];
    delete process.env["COGNITO_REGION"];
  });

  it("registers a client and returns client_id + client_secret", async () => {
    const mockSend = await getCognitoMockSend();
    mockSend.mockResolvedValueOnce({
      UserPoolClient: {
        ClientId: "abc123clientid",
        ClientSecret: "supersecretvalue",
        ClientName: "my-mcp-client",
      },
    });

    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["https://example.com/callback"],
        client_name: "my-mcp-client",
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        scope: "openid email",
      }),
    });

    expect(res.status).toBe(201);
    const body = await res.json() as Record<string, unknown>;
    expect(body["client_id"]).toBe("abc123clientid");
    expect(body["client_secret"]).toBe("supersecretvalue");
    expect(body["client_id_issued_at"]).toBeTypeOf("number");
    expect(body["client_secret_expires_at"]).toBe(0);
    expect(body["redirect_uris"]).toEqual(["https://example.com/callback"]);
    expect(body["grant_types"]).toContain("authorization_code");
    expect(body["grant_types"]).toContain("refresh_token");
    expect(body["response_types"]).toEqual(["code"]);
    expect(body["token_endpoint_auth_method"]).toBe("client_secret_basic");
  });

  it("returns 400 when redirect_uris is missing", async () => {
    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_name: "no-redirect" }),
    });
    expect(res.status).toBe(400);
    const body = await res.json() as { error: string };
    expect(body["error"]).toBe("invalid_redirect_uri");
  });

  it("returns 400 for non-HTTPS redirect URIs", async () => {
    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["http://example.com/callback"],
      }),
    });
    expect(res.status).toBe(400);
    const body = await res.json() as { error: string };
    expect(body["error"]).toBe("invalid_redirect_uri");
  });

  it("allows http://localhost redirect URIs for development", async () => {
    const mockSend = await getCognitoMockSend();
    mockSend.mockResolvedValueOnce({
      UserPoolClient: {
        ClientId: "localclientid",
        ClientSecret: "localsecret",
      },
    });

    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["http://localhost:3000/callback"],
      }),
    });
    expect(res.status).toBe(201);
  });

  it("returns 400 for unsupported grant types", async () => {
    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["https://example.com/callback"],
        grant_types: ["implicit"],
      }),
    });
    expect(res.status).toBe(400);
    const body = await res.json() as { error: string };
    expect(body["error"]).toBe("invalid_client_metadata");
  });

  it("returns 500 when COGNITO_USER_POOL_ID is not set", async () => {
    delete process.env["COGNITO_USER_POOL_ID"];
    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["https://example.com/callback"],
      }),
    });
    expect(res.status).toBe(500);
    const body = await res.json() as { error: string };
    expect(body["error"]).toBe("server_error");
  });

  it("propagates Cognito errors as 500", async () => {
    const mockSend = await getCognitoMockSend();
    mockSend.mockRejectedValueOnce(new Error("UserPool not found"));

    const app = createApp();
    const res = await app.request("/oauth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        redirect_uris: ["https://example.com/callback"],
      }),
    });
    expect(res.status).toBe(500);
    const body = await res.json() as { error: string; error_description: string };
    expect(body["error"]).toBe("server_error");
    expect(body["error_description"]).toContain("UserPool not found");
  });
});

// ---------------------------------------------------------------------------
// LRU provider cache (APR-306)
// ---------------------------------------------------------------------------

describe("LRU provider cache", () => {
  it("caches a provider module on first load and reuses it on hit", async () => {
    const mod = { createGithubClient: vi.fn() };
    setProviderModuleForTesting("github", mod);

    const first = await getProviderModule("github");
    const second = await getProviderModule("github");

    expect(first).toBe(mod);
    expect(second).toBe(mod);
    expect(isProviderCached("github")).toBe(true);
  });

  it("evicts the least-recently-used entry when over PROVIDER_CACHE_SIZE", async () => {
    process.env["PROVIDER_CACHE_SIZE"] = "3";
    setProviderModuleForTesting("p1", { id: "p1" });
    setProviderModuleForTesting("p2", { id: "p2" });
    setProviderModuleForTesting("p3", { id: "p3" });

    // Touch p1 so p2 becomes the least-recently-used.
    await getProviderModule("p1");

    // Inserting p4 exceeds the limit and should evict the LRU entry (p2).
    setProviderModuleForTesting("p4", { id: "p4" });

    expect(isProviderCached("p1")).toBe(true);
    expect(isProviderCached("p2")).toBe(false);
    expect(isProviderCached("p3")).toBe(true);
    expect(isProviderCached("p4")).toBe(true);
  });

  it("DirectExecutor.execute uses the cached module and injects credentials", async () => {
    const listFn = vi.fn().mockResolvedValue([{ name: "test-repo" }]);
    const createGithubClient = vi.fn().mockResolvedValue({ repos: { list: listFn } });
    setProviderModuleForTesting("github", { createGithubClient });

    const executor = await import("../src/isolate.js").then((m) => m.getExecutor());
    const result = await executor.execute({
      provider: "github",
      operation: "repos.list",
      args: { per_page: 5 },
      credentials: { type: "bearer_token", token: "ghp_test" },
    });

    expect(result.success).toBe(true);
    expect(result.data).toEqual([{ name: "test-repo" }]);
    expect(createGithubClient).toHaveBeenCalledTimes(1);
    expect(createGithubClient).toHaveBeenCalledWith({ headers: { Authorization: "Bearer ghp_test" } });
    expect(listFn).toHaveBeenCalledWith({ per_page: 5 });
  });

  it("DirectExecutor.execute reuses the cached module across calls (no re-import)", async () => {
    const createGithubClient = vi.fn().mockResolvedValue({
      repos: { list: vi.fn().mockResolvedValue([]) },
    });
    setProviderModuleForTesting("github", { createGithubClient });

    const { getExecutor } = await import("../src/isolate.js");
    const executor = await getExecutor();

    await executor.execute({
      provider: "github",
      operation: "repos.list",
      args: {},
      credentials: undefined,
    });
    await executor.execute({
      provider: "github",
      operation: "repos.list",
      args: {},
      credentials: undefined,
    });

    // The factory is per-request, but the module is cached — it should be the
    // same (single) module reference both times, i.e. never re-imported.
    expect(isProviderCached("github")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// GET /tools — workspace-filtered tool discovery (APR-306)
// ---------------------------------------------------------------------------

describe("GET /tools", () => {
  it("returns 401 without a session JWT", async () => {
    const app = createApp();
    const res = await app.request("/tools");
    expect(res.status).toBe(401);
  });

  it("returns an empty tool list when no credentials are configured", async () => {
    const app = createApp();
    const token = await getCallerToken(app, "mcp-server");

    const res = await app.request("/tools", {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { tools: unknown[]; workspace_id: string };
    expect(body.tools).toEqual([]);
    expect(body.workspace_id).toBe("ws-test");
  });

  it("returns tools for providers that have a credential configured", async () => {
    setProviderModuleForTesting("github", {
      tools: [
        { name: "github.repos.list", description: "List repos", inputSchema: { type: "object" }, outputSchema: { type: "array" } },
        { name: "github.repos.get", description: "Get a repo" },
      ],
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });

    const callerToken = await getCallerToken(app, "mcp-server");
    const res = await app.request("/tools", {
      headers: { Authorization: `Bearer ${callerToken}` },
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { tools: Array<Record<string, unknown>>; workspace_id: string };
    expect(body.workspace_id).toBe("ws-test");
    expect(body.tools).toHaveLength(2);
    expect(body.tools[0]!["provider"]).toBe("github");
    expect(body.tools[0]!["name"]).toBe("github.repos.list");
    expect(body.tools[0]!["operation"]).toBe("repos.list");
    expect(body.tools[0]!["description"]).toBe("List repos");
    expect(body.tools[0]!["inputSchema"]).toEqual({ type: "object" });
    expect(body.tools[0]!["outputSchema"]).toEqual({ type: "array" });
    // Tools are namespaced under the provider; operation strips the provider prefix.
    expect(body.tools[1]!["operation"]).toBe("repos.get");
  });

  it("does not include providers without a configured credential", async () => {
    setProviderModuleForTesting("github", {
      tools: [{ name: "github.repos.list", description: "List repos" }],
    });
    setProviderModuleForTesting("linear", {
      tools: [{ name: "linear.issues.list", description: "List issues" }],
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    // Only github has a credential; linear does not.
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });

    const callerToken = await getCallerToken(app, "mcp-server");
    const res = await app.request("/tools", {
      headers: { Authorization: `Bearer ${callerToken}` },
    });
    const body = await res.json() as { tools: Array<Record<string, unknown>> };

    expect(body.tools).toHaveLength(1);
    expect(body.tools[0]!["provider"]).toBe("github");
  });

  it("caches the tool list per workspace for the TTL window", async () => {
    setProviderModuleForTesting("github", {
      tools: [{ name: "github.repos.list", description: "List repos" }],
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });
    const callerToken = await getCallerToken(app, "mcp-server");

    const first = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const firstBody = await first.json() as { tools: unknown[] };
    expect(firstBody.tools).toHaveLength(1);

    // Drop github from the provider cache. A fresh recomputation would now
    // skip github (no module), but the per-workspace tool list is still warm.
    const { invalidateProvider } = await import("../src/isolate.js");
    invalidateProvider("github");
    expect(isProviderCached("github")).toBe(false);

    const second = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const secondBody = await second.json() as { tools: unknown[] };
    // Still served from the tool-list cache — github's absence doesn't matter.
    expect(secondBody.tools).toHaveLength(1);
  });

  it("recomputes the tool list after the TTL expires", async () => {
    process.env["TOOL_LIST_CACHE_TTL_MS"] = "1";
    setProviderModuleForTesting("github", {
      tools: [{ name: "github.repos.list", description: "List repos" }],
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });
    const callerToken = await getCallerToken(app, "mcp-server");

    const first = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const firstBody = await first.json() as { tools: Array<Record<string, unknown>> };
    expect(firstBody.tools).toHaveLength(1);
    expect(firstBody.tools[0]!["name"]).toBe("github.repos.list");

    // Wait for the per-workspace TTL to lapse, then swap the cached module.
    await new Promise((resolve) => setTimeout(resolve, 5));
    setProviderModuleForTesting("github", {
      tools: [{ name: "github.repos.get", description: "Get a repo" }],
    });

    const second = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const secondBody = await second.json() as { tools: Array<Record<string, unknown>> };
    expect(secondBody.tools).toHaveLength(1);
    expect(secondBody.tools[0]!["name"]).toBe("github.repos.get");
  });

  it("invalidates the tool list when a credential is added", async () => {
    setProviderModuleForTesting("github", {
      tools: [{ name: "github.repos.list", description: "List repos" }],
    });
    setProviderModuleForTesting("linear", {
      tools: [{ name: "linear.issues.list", description: "List issues" }],
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });
    const callerToken = await getCallerToken(app, "mcp-server");

    const first = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const firstBody = await first.json() as { tools: Array<Record<string, unknown>> };
    expect(firstBody.tools).toHaveLength(1);
    expect(firstBody.tools[0]!["provider"]).toBe("github");

    // Adding a linear credential invalidates the cached list; the next call
    // picks up linear tools too.
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "linear", payload: { type: "bearer_token", token: "lin_test" } }),
    });

    const second = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const secondBody = await second.json() as { tools: Array<Record<string, unknown>> };
    const providers = secondBody.tools.map((t) => t["provider"]);
    expect(providers).toContain("github");
    expect(providers).toContain("linear");
  });

  it("derives tools from toolMetadata when a tools export is absent (transitional fallback)", async () => {
    setProviderModuleForTesting("github", {
      toolMetadata: {
        "repos/list": {
          accessPath: ["repos", "list"],
          description: "List repositories for the authenticated user",
          pathParameterKeys: [],
          queryParameterKeys: ["per_page"],
          bodyPropertyKeys: [],
          headerParameterKeys: [],
          parameterDescriptions: { per_page: "Number of results per page" },
        },
      },
    });

    const app = createApp();
    const adminToken = await getAdminToken(app);
    await app.request("/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ provider: "github", payload: { type: "bearer_token", token: "ghp_test" } }),
    });
    const callerToken = await getCallerToken(app, "mcp-server");

    const res = await app.request("/tools", { headers: { Authorization: `Bearer ${callerToken}` } });
    const body = await res.json() as { tools: Array<Record<string, unknown>> };
    expect(body.tools).toHaveLength(1);
    expect(body.tools[0]!["name"]).toBe("github.repos.list");
    expect(body.tools[0]!["operation"]).toBe("repos.list");
    expect(body.tools[0]!["description"]).toBe("List repositories for the authenticated user");
    const inputSchema = body.tools[0]!["inputSchema"] as Record<string, unknown>;
    expect(inputSchema["type"]).toBe("object");
    expect(inputSchema["properties"]).toHaveProperty("per_page");
  });
});
