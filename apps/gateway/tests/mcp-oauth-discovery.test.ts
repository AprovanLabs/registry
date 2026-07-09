/**
 * Tests for OAuth discovery (APR-314):
 *   - GET /.well-known/oauth-protected-resource/mcp/:workspaceId  (RFC 9728)
 *   - WWW-Authenticate header on 401 / 403 from POST /mcp/:workspaceId (RFC 6750)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetAuditStore } from "../src/audit.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor } from "../src/isolate.js";
import { resetMcpCatalog } from "../src/mcp/server.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
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
  BatchGetCommand: vi.fn((input: unknown) => ({ input })),
  TransactWriteCommand: vi.fn((input: unknown) => ({ input })),
}));

vi.mock("@aws-sdk/client-dynamodb", () => ({
  DynamoDBClient: vi.fn(() => ({})),
}));

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const VALID_WID = "11111111-2222-3333-4444-555555555555";
const ADMIN_TOKEN = "mcp-test-admin-token";
const ADMIN_SUB = "mcp-admin-user";

beforeEach(() => {
  setupAuth({
    mockDdbSend,
    users: [
      { sub: ADMIN_SUB, token: ADMIN_TOKEN, role: "admin", workspaceId: VALID_WID },
    ],
  });
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetCredentialStore();
  resetAuditStore();
  resetMcpCatalog();
});

afterEach(() => {
  resetCognitoVerifier();
  delete process.env["GATEWAY_COGNITO_USER_POOL_ID"];
});

// ---------------------------------------------------------------------------
// GET /.well-known/oauth-protected-resource/mcp/:workspaceId
// ---------------------------------------------------------------------------

describe("GET /.well-known/oauth-protected-resource/mcp/:workspaceId", () => {
  it("returns 200 with RFC 9728 metadata document for a valid UUID", async () => {
    process.env["GATEWAY_COGNITO_USER_POOL_ID"] = "us-east-1_TestPool";
    const app = createApp();

    const res = await app.request(
      `/.well-known/oauth-protected-resource/mcp/${VALID_WID}`,
    );

    expect(res.status).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(body["resource"]).toMatch(new RegExp(`/mcp/${VALID_WID}$`));
    expect(body["authorization_servers"]).toEqual([
      "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_TestPool",
    ]);
    expect(body["bearer_methods_supported"]).toEqual(["header"]);
    expect(body["resource_name"]).toBe(`Aprovan Gateway — workspace ${VALID_WID}`);
    expect(body["resource_documentation"]).toBe("https://aprovan.com/docs/mcp");
  });

  it("returns 400 for an invalid (non-UUID) workspace id", async () => {
    const app = createApp();

    const res = await app.request(
      "/.well-known/oauth-protected-resource/mcp/not-a-uuid",
    );

    expect(res.status).toBe(400);
    const body = await res.json() as { error: string };
    expect(body.error).toBe("invalid_workspace_id");
  });

  it("returns empty authorization_servers when GATEWAY_COGNITO_USER_POOL_ID is unset", async () => {
    delete process.env["GATEWAY_COGNITO_USER_POOL_ID"];
    const app = createApp();

    const res = await app.request(
      `/.well-known/oauth-protected-resource/mcp/${VALID_WID}`,
    );

    expect(res.status).toBe(200);
    const body = await res.json() as { authorization_servers: unknown[] };
    expect(body.authorization_servers).toEqual([]);
  });

  it("derives resource URL from X-Forwarded-Host header", async () => {
    process.env["GATEWAY_COGNITO_USER_POOL_ID"] = "us-east-1_TestPool";
    const app = createApp();

    const res = await app.request(
      `/.well-known/oauth-protected-resource/mcp/${VALID_WID}`,
      { headers: { "x-forwarded-host": "custom.aprovan.com" } },
    );

    expect(res.status).toBe(200);
    const body = await res.json() as { resource: string };
    expect(body.resource).toBe(`https://custom.aprovan.com/mcp/${VALID_WID}`);
  });

  it("is reachable without an Authorization header (unauthenticated)", async () => {
    const app = createApp();

    const res = await app.request(
      `/.well-known/oauth-protected-resource/mcp/${VALID_WID}`,
    );

    // Must not require auth — unauthenticated requests must succeed (≥ 200, < 400)
    expect(res.status).toBeLessThan(400);
  });
});

// ---------------------------------------------------------------------------
// WWW-Authenticate on 401 from /mcp/:workspaceId
// ---------------------------------------------------------------------------

describe("POST /mcp/:workspaceId — 401 includes WWW-Authenticate", () => {
  it("returns 401 with WWW-Authenticate pointing at the resource metadata URL", async () => {
    const app = createApp();

    const res = await app.request(`/mcp/${VALID_WID}`, { method: "POST" });

    expect(res.status).toBe(401);
    const wwwAuth = res.headers.get("WWW-Authenticate");
    expect(wwwAuth).toBeTruthy();
    expect(wwwAuth).toMatch(/^Bearer /);
    expect(wwwAuth).toContain('realm="aprovan-mcp"');
    expect(wwwAuth).toContain(
      `/.well-known/oauth-protected-resource/mcp/${VALID_WID}`,
    );
  });

  it("returns 401 body { error: 'invalid_token' } when no Authorization header", async () => {
    const app = createApp();

    const res = await app.request(`/mcp/${VALID_WID}`, { method: "POST" });

    expect(res.status).toBe(401);
    const body = await res.json() as { error: string };
    expect(body.error).toBe("invalid_token");
  });

  it("returns 401 with WWW-Authenticate for an invalid Bearer token", async () => {
    const app = createApp();

    const res = await app.request(`/mcp/${VALID_WID}`, {
      method: "POST",
      headers: { Authorization: "Bearer invalid-token-xyz" },
    });

    expect(res.status).toBe(401);
    expect(res.headers.get("WWW-Authenticate")).toContain('realm="aprovan-mcp"');
  });

  it("includes the metadata URL in the WWW-Authenticate resource_metadata param", async () => {
    const app = createApp();

    const res = await app.request(`/mcp/${VALID_WID}`, {
      method: "POST",
      headers: { "x-forwarded-host": "gw.aprovan.com" },
    });

    expect(res.status).toBe(401);
    const wwwAuth = res.headers.get("WWW-Authenticate") ?? "";
    expect(wwwAuth).toContain(
      `resource_metadata="https://gw.aprovan.com/.well-known/oauth-protected-resource/mcp/${VALID_WID}"`,
    );
  });
});

// ---------------------------------------------------------------------------
// WWW-Authenticate on 403 (insufficient scope) from /mcp/:workspaceId
// ---------------------------------------------------------------------------

describe("POST /mcp/:workspaceId — 403 workspace_mismatch", () => {
  it("returns 403 workspace_mismatch when URL workspace differs from token's active workspace", async () => {
    const OTHER_WID = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
    const otherToken = "other-workspace-token";
    const otherSub = "other-sub";

    setupAuth({
      mockDdbSend,
      users: [
        { sub: otherSub, token: otherToken, role: "member", workspaceId: OTHER_WID },
      ],
    });

    const app = createApp();
    // otherSub's active workspace is OTHER_WID, but URL has VALID_WID → mismatch
    const res = await app.request(`/mcp/${VALID_WID}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${otherToken}` },
    });

    expect(res.status).toBe(403);
    const body = await res.json() as { error: string };
    expect(body.error).toBe("workspace_mismatch");
  });
});

describe("POST /mcp/:workspaceId — 403 includes WWW-Authenticate insufficient_scope", () => {
  it("triggers 403 with insufficient_scope header when session workspace membership is missing", async () => {
    // User verifies OK but has no membership in their active workspace.
    const noMemberToken = "no-member-token";
    const noMemberSub = "no-member-sub";
    const noMemberWid = "ffffffff-ffff-ffff-ffff-ffffffffffff";

    // Override DDB mock: token verifies, session returns a workspaceId,
    // but membership lookup returns nothing.
    const { setCognitoVerifier } = await import("../src/middleware/auth.js");
    setCognitoVerifier({
      verify: vi.fn().mockImplementation((t: string) => {
        if (t === noMemberToken) return Promise.resolve({ sub: noMemberSub });
        throw new Error("invalid token");
      }),
      hydrate: vi.fn().mockResolvedValue(undefined),
    });
    mockDdbSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const table = (cmd.input ?? {})["TableName"] as string | undefined;
      const key = (cmd.input ?? {})["Key"] as Record<string, string> | undefined;
      if (table === "Sessions" && key?.["userSub"] === noMemberSub) {
        return Promise.resolve({
          Item: {
            userSub: noMemberSub,
            currentWorkspaceId: noMemberWid,
            expiresAt: Math.floor(Date.now() / 1000) + 3600,
          },
        });
      }
      if (table === "Memberships") return Promise.resolve({}); // no membership
      if (table === "UserGroups") return Promise.resolve({ Items: [] });
      return Promise.resolve({});
    });

    const app = createApp();
    // Hit the user's own workspace URL so workspace_mismatch doesn't trigger
    const res = await app.request(`/mcp/${noMemberWid}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${noMemberToken}` },
    });

    expect(res.status).toBe(403);
    const wwwAuth = res.headers.get("WWW-Authenticate") ?? "";
    expect(wwwAuth).toContain('error="insufficient_scope"');
    expect(wwwAuth).toContain('scope="mcp.invoke"');
  });
});

// ---------------------------------------------------------------------------
// Successful auth → real MCP handler (Phase 2)
// ---------------------------------------------------------------------------

describe("POST /mcp/:workspaceId — authenticated request", () => {
  it("passes auth and reaches the MCP handler for a valid authenticated request", async () => {
    const app = createApp();

    // A valid JSON-RPC initialize request so the MCP SDK accepts it
    const res = await app.request(`/mcp/${VALID_WID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2024-11-05",
          capabilities: {},
          clientInfo: { name: "test-client", version: "1.0" },
        },
      }),
    });

    // 401/403 would mean auth failed; 200 means Phase 2 handler is active
    expect(res.status).not.toBe(401);
    expect(res.status).not.toBe(403);
    expect(res.status).toBe(200);
  });
});
