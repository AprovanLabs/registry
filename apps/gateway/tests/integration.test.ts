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
import { resetExecutor, setExecutor, type IsolateExecutor } from "../src/isolate.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";

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
});

afterEach(() => {
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
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
