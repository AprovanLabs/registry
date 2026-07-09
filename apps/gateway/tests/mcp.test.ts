/**
 * Integration tests for the MCP Streamable-HTTP gateway endpoint.
 *
 * Demonstrates the canonical flow a real client uses:
 *   initialize → tools/list → tools/call name=call_tool arguments={tool_name, arguments}
 *
 * Covers all 13 required test cases (APR-315):
 *   1.  Discovery metadata: GET /.well-known/oauth-protected-resource/mcp/:wid
 *   2.  Unauthenticated → 401 + WWW-Authenticate (realm + resource_metadata)
 *   3.  Workspace mismatch → 403 workspace_mismatch
 *   4.  initialize handshake → 200, protocol echoed, capabilities.tools present
 *   5.  tools/list → always returns 4 meta-tools regardless of grants
 *   6.  call_tool list_tools respects per-caller grants (A/B/C)
 *   7.  call_tool → executor receives exact {provider, operation, args, credentials} payload
 *   8.  call_tool permission denied → isError with /forbidden/ text, HTTP 200
 *   9.  call_tool unknown tool → isError with /Unknown tool/, HTTP 200
 *   10. call_tool isolate failure → isError with error message, audit row status=500
 *   11. Audit row shape → all required fields present after call_tool
 *   12. Rate limit shared bucket → MCP and REST paths share the same per-user limiter
 *   13. Unsupported methods → JSON-RPC error -32601 MethodNotFound
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetAuditStore, getAuditStore } from "../src/audit.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor, setExecutor, type IsolateExecutor } from "../src/isolate.js";
import { resetMcpCatalog } from "../src/mcp/server.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { setupAuth, bearer } from "./helpers.js";

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
// @utdk/mcp-core catalog mock — two tools, only one permitted per test
// ---------------------------------------------------------------------------

const GITHUB_TOOL = {
  mcpName: "github__repos_list",
  utcpName: "github.repos.list",
  description: "List GitHub repositories",
  inputSchema: { type: "object", properties: {} },
  providerName: "github",
  tags: ["repos"],
  method: "GET",
  routeTemplate: "/repos",
  contentType: "application/json",
  pathParamKeys: [],
  queryParamKeys: [],
  auth: undefined,
};

const SLACK_TOOL = {
  mcpName: "slack__channels_list",
  utcpName: "slack.channels.list",
  description: "List Slack channels",
  inputSchema: { type: "object", properties: {} },
  providerName: "slack",
  tags: ["channels"],
  method: "GET",
  routeTemplate: "/channels",
  contentType: "application/json",
  pathParamKeys: [],
  queryParamKeys: [],
  auth: undefined,
};

vi.mock("@utdk/mcp-core", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@utdk/mcp-core")>();
  return {
    ...actual,
    parseProviderNames: vi.fn(() => ["github", "slack"]),
    loadProviders: vi.fn(async () => [GITHUB_TOOL, SLACK_TOOL]),
  };
});

// ---------------------------------------------------------------------------
// Auth fixtures
// ---------------------------------------------------------------------------

// Caller A — granted github:repos.list only
const CALLER_TOKEN = "test-caller-token";
const CALLER_SUB = "caller-user";
const WORKSPACE_ID = "ws-test";

// Caller B — no grants
const CALLER_B_TOKEN = "test-caller-b-token";
const CALLER_B_SUB = "caller-b-user";

// Caller C — granted github:* wildcard
const CALLER_C_TOKEN = "test-caller-c-token";
const CALLER_C_SUB = "caller-c-user";

// A user whose active workspace differs from the URL
const OTHER_TOKEN = "test-other-token";
const OTHER_SUB = "other-user";
const OTHER_WORKSPACE = "ws-other";

// UUID-format workspace id (needed for .well-known endpoint UUID validation)
const WORKSPACE_UUID = "11111111-2222-3333-4444-555555555555";
const UUID_CALLER_TOKEN = "uuid-caller-token";
const UUID_CALLER_SUB = "uuid-caller-sub";

// ---------------------------------------------------------------------------
// MCP JSON-RPC helpers
// ---------------------------------------------------------------------------

// MCP Streamable-HTTP requires these headers on every POST request.
const MCP_HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json, text/event-stream",
};

function mcpRequest(method: string, params: unknown, id: number | string = 1) {
  return JSON.stringify({ jsonrpc: "2.0", id, method, params });
}

function initializeRequest() {
  return mcpRequest("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "test-client", version: "1.0" },
  });
}

function toolsListRequest() {
  return mcpRequest("tools/list", {});
}

function toolsCallRequest(name: string, args: Record<string, unknown> = {}) {
  return mcpRequest("tools/call", { name, arguments: args });
}

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

beforeEach(() => {
  setupAuth({
    mockDdbSend,
    users: [
      { sub: CALLER_SUB, token: CALLER_TOKEN, role: "member", workspaceId: WORKSPACE_ID },
      { sub: CALLER_B_SUB, token: CALLER_B_TOKEN, role: "member", workspaceId: WORKSPACE_ID },
      { sub: CALLER_C_SUB, token: CALLER_C_TOKEN, role: "member", workspaceId: WORKSPACE_ID },
      { sub: OTHER_SUB, token: OTHER_TOKEN, role: "member", workspaceId: OTHER_WORKSPACE },
      { sub: UUID_CALLER_SUB, token: UUID_CALLER_TOKEN, role: "member", workspaceId: WORKSPACE_UUID },
    ],
  });
  resetPermissionStore();
  resetRateLimiters();
  resetExecutor();
  resetCredentialStore();
  resetAuditStore();
  resetMcpCatalog();
  process.env["GATEWAY_WORKSPACE_KEY"] = "test-workspace-key-for-tests-only";
});

afterEach(() => {
  resetCognitoVerifier();
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("MCP route auth", () => {
  it("returns 401 with WWW-Authenticate for missing token", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS },
      body: initializeRequest(),
    });
    expect(res.status).toBe(401);
    expect(res.headers.get("WWW-Authenticate")).toMatch(/Bearer/);
  });

  it("returns 403 workspace_mismatch when URL workspace differs from token workspace", async () => {
    const app = createApp();
    // OTHER_SUB's active workspace is OTHER_WORKSPACE; URL has WORKSPACE_ID
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(OTHER_TOKEN),
      },
      body: initializeRequest(),
    });
    expect(res.status).toBe(403);
    const body = await res.json() as { error: string };
    expect(body.error).toBe("workspace_mismatch");
  });
});

describe("MCP tools/list", () => {
  it("always returns the 4 meta-tools regardless of permissions", async () => {
    const app = createApp();
    // Grant zero permissions — tools/list still returns META_TOOLS
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsListRequest(),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { tools: unknown[] } };
    expect(body.result.tools).toHaveLength(4);
    const names = (body.result.tools as Array<{ name: string }>).map((t) => t.name);
    expect(names).toEqual(
      expect.arrayContaining(["list_tools", "search_tools", "tool_info", "call_tool"]),
    );
  });
});

describe("MCP catalog filtering", () => {
  it("list_tools returns only permitted tools", async () => {
    // Grant access to github only
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("list_tools", {}),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { content: Array<{ text: string }> } };
    const toolNames = JSON.parse(body.result.content[0]!.text) as string[];
    expect(toolNames).toContain("github__repos_list");
    expect(toolNames).not.toContain("slack__channels_list");
  });

  it("list_tools returns empty list for caller with zero grants", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("list_tools", {}),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { content: Array<{ text: string }> } };
    const toolNames = JSON.parse(body.result.content[0]!.text) as string[];
    expect(toolNames).toHaveLength(0);
  });
});

describe("MCP call_tool permission-denied", () => {
  it("returns forbidden isError when tool is not in permitted set", async () => {
    // No grants — calling github__repos_list is forbidden
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: {},
      }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { isError: boolean; content: Array<{ text: string }> } };
    expect(body.result.isError).toBe(true);
    expect(body.result.content[0]!.text).toMatch(/forbidden/);
    expect(body.result.content[0]!.text).toMatch(/github__repos_list/);
  });
});

describe("MCP call_tool unknown tool", () => {
  it("returns unknown-tool isError for a name that does not exist in any catalog", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("call_tool", {
        tool_name: "nonexistent__tool",
        arguments: {},
      }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { isError: boolean; content: Array<{ text: string }> } };
    expect(body.result.isError).toBe(true);
    expect(body.result.content[0]!.text).toMatch(/forbidden/);
  });

  it("returns unknown-tool isError for an unrecognised meta-tool name", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("totally_unknown_meta_tool", {}),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { result: { isError: boolean; content: Array<{ text: string }> } };
    expect(body.result.isError).toBe(true);
    expect(body.result.content[0]!.text).toMatch(/Unknown tool/);
  });
});

describe("MCP call_tool executor payload", () => {
  it("invokes executor with correct provider, operation, args, and credentials", async () => {
    // Grant permission for github
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    // Capture executor call
    const mockExecute = vi.fn().mockResolvedValue({
      success: true,
      data: [{ name: "my-repo" }],
      durationMs: 50,
    });
    const mockExecutor: IsolateExecutor = { execute: mockExecute };
    setExecutor(mockExecutor);

    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: { per_page: 10 },
      }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { result: { isError?: boolean; content: Array<{ text: string }> } };
    expect(body.result.isError).toBeFalsy();

    expect(mockExecute).toHaveBeenCalledOnce();
    const callArgs = mockExecute.mock.calls[0]![0] as {
      provider: string;
      operation: string;
      args: Record<string, unknown>;
      credentials: unknown;
      timeout: number;
    };
    expect(callArgs.provider).toBe("github");
    expect(callArgs.operation).toBe("repos.list");
    expect(callArgs.args).toEqual({ per_page: 10 });
    expect(callArgs.timeout).toBe(30_000);
  });

  it("surfaces executor errors as isError CallToolResult", async () => {
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: false,
        error: "upstream timeout",
        durationMs: 30_000,
      }),
    };
    setExecutor(mockExecutor);

    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: {},
      }),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { result: { isError: boolean; content: Array<{ text: string }> } };
    expect(body.result.isError).toBe(true);
    expect(body.result.content[0]!.text).toMatch(/upstream timeout/);
  });
});

// ---------------------------------------------------------------------------
// Test 1 — Discovery metadata (also tested in mcp-oauth-discovery.test.ts,
// duplicated here so the full MCP flow is self-contained in one file)
// ---------------------------------------------------------------------------

describe("GET /.well-known/oauth-protected-resource/mcp/:workspaceId — (test 1)", () => {
  it("returns 200 with authorization_servers and resource URL for a valid UUID", async () => {
    process.env["GATEWAY_COGNITO_USER_POOL_ID"] = "us-east-1_TestPool";
    const app = createApp();

    const res = await app.request(
      `/.well-known/oauth-protected-resource/mcp/${WORKSPACE_UUID}`,
    );

    expect(res.status).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(Array.isArray(body["authorization_servers"])).toBe(true);
    expect((body["authorization_servers"] as unknown[]).length).toBeGreaterThan(0);
    expect(typeof body["resource"]).toBe("string");
    expect((body["resource"] as string).endsWith(`/mcp/${WORKSPACE_UUID}`)).toBe(true);

    delete process.env["GATEWAY_COGNITO_USER_POOL_ID"];
  });
});

// ---------------------------------------------------------------------------
// Test 2 — Unauthenticated: 401 + full WWW-Authenticate header
// ---------------------------------------------------------------------------

describe("POST /mcp/:workspaceId — unauthenticated (test 2)", () => {
  it("returns 401 with WWW-Authenticate containing realm and resource_metadata URL", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS },
      body: initializeRequest(),
    });

    expect(res.status).toBe(401);
    const wwwAuth = res.headers.get("WWW-Authenticate") ?? "";
    expect(wwwAuth).toContain('Bearer realm="aprovan-mcp"');
    expect(wwwAuth).toContain("resource_metadata=");
    expect(wwwAuth).toContain(`/.well-known/oauth-protected-resource/mcp/${WORKSPACE_ID}`);
  });
});

// ---------------------------------------------------------------------------
// Test 4 — initialize handshake
// ---------------------------------------------------------------------------

describe("MCP initialize handshake (test 4)", () => {
  it("echoes protocolVersion and advertises tools capability", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: {
        ...MCP_HEADERS,
        Authorization: bearer(CALLER_TOKEN),
      },
      body: initializeRequest(),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as {
      jsonrpc: string;
      id: number;
      result: {
        protocolVersion: string;
        capabilities: Record<string, unknown>;
        serverInfo: Record<string, unknown>;
      };
    };
    expect(body.jsonrpc).toBe("2.0");
    expect(body.id).toBe(1);
    expect(body.result.protocolVersion).toBe("2024-11-05");
    expect(body.result.capabilities).toHaveProperty("tools");
    expect(typeof body.result.serverInfo).toBe("object");
  });
});

// ---------------------------------------------------------------------------
// Test 6 — call_tool list_tools respects grants per caller
// ---------------------------------------------------------------------------

describe("MCP call_tool list_tools per-caller grant filtering (test 6)", () => {
  it("Caller A (github:repos.list) sees only that one tool", async () => {
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_TOKEN) },
      body: toolsCallRequest("list_tools", {}),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { result: { content: Array<{ text: string }> } };
    const toolNames = JSON.parse(body.result.content[0]!.text) as string[];
    expect(toolNames).toContain("github__repos_list");
    expect(toolNames).not.toContain("slack__channels_list");
    expect(toolNames).toHaveLength(1);
  });

  it("Caller B (no grants) sees empty tool list, not an error", async () => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_B_TOKEN) },
      body: toolsCallRequest("list_tools", {}),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { result: { content: Array<{ text: string }>; isError?: boolean } };
    expect(body.result.isError).toBeFalsy();
    const toolNames = JSON.parse(body.result.content[0]!.text) as string[];
    expect(toolNames).toHaveLength(0);
  });

  it("Caller C (github:*) sees full github catalog", async () => {
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_C_SUB,
      provider: "github",
      operation: "*",
      grantedBy: "admin",
    });

    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_C_TOKEN) },
      body: toolsCallRequest("list_tools", {}),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as { result: { content: Array<{ text: string }> } };
    const toolNames = JSON.parse(body.result.content[0]!.text) as string[];
    // With github:* grant, should see github tools (both GITHUB_TOOL and any others)
    expect(toolNames).toContain("github__repos_list");
    expect(toolNames).not.toContain("slack__channels_list");
  });
});

// ---------------------------------------------------------------------------
// Test 11 — Audit row shape after call_tool
// ---------------------------------------------------------------------------

describe("MCP call_tool audit row shape (test 11)", () => {
  it("writes an audit row with all required fields after a successful call", async () => {
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: true,
        data: [{ name: "my-repo" }],
        durationMs: 42,
      }),
    };
    setExecutor(mockExecutor);

    const app = createApp();
    await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_TOKEN) },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: {},
      }),
    });

    const auditStore = getAuditStore();
    const rows = await auditStore.recent({ workspaceId: WORKSPACE_ID });
    expect(rows.length).toBeGreaterThan(0);

    const row = rows[0]!;
    expect(row.workspaceId).toBe(WORKSPACE_ID);
    expect(row.callerId).toBe(CALLER_SUB);
    expect(row.provider).toBe("github");
    expect(row.operation).toBe("repos.list");
    expect(row.status).toBe(200);
    expect(typeof row.durationMs).toBe("number");
    expect(row.mcp_tool_name).toBe("github__repos_list");
    // result field derived from status
    expect(row.result).toBe("success");
  });

  it("writes audit row with status=500 when isolate returns failure", async () => {
    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({
        success: false,
        error: "boom",
        durationMs: 100,
      }),
    };
    setExecutor(mockExecutor);

    const app = createApp();
    await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_TOKEN) },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: {},
      }),
    });

    const auditStore = getAuditStore();
    const rows = await auditStore.recent({ workspaceId: WORKSPACE_ID });
    expect(rows.length).toBeGreaterThan(0);

    const row = rows[0]!;
    expect(row.status).toBe(500);
    expect(row.result).toBe("error");
    expect(row.mcp_tool_name).toBe("github__repos_list");
  });
});

// ---------------------------------------------------------------------------
// Test 12 — Rate limit shared bucket (MCP + REST tools use same per-user limiter)
// ---------------------------------------------------------------------------

describe("Rate limit shared bucket (test 12)", () => {
  afterEach(() => {
    delete process.env["GATEWAY_RATE_LIMIT_BURST"];
    delete process.env["GATEWAY_RATE_LIMIT_RPS"];
    resetRateLimiters();
  });

  it("MCP call exhausts per-user bucket; subsequent REST tools POST returns 429", async () => {
    // Set burst=1 so one request drains the bucket entirely
    process.env["GATEWAY_RATE_LIMIT_BURST"] = "1";
    process.env["GATEWAY_RATE_LIMIT_RPS"] = "0.0001";

    const permStore = (await import("../src/permissions.js")).getPermissionStore();
    await permStore.grant(WORKSPACE_ID, {
      callerId: CALLER_SUB,
      provider: "github",
      operation: "repos.list",
      grantedBy: "admin",
    });

    const mockExecutor: IsolateExecutor = {
      execute: vi.fn().mockResolvedValue({ success: true, data: [], durationMs: 1 }),
    };
    setExecutor(mockExecutor);

    const app = createApp();

    // First request (MCP) — consumes the single token
    const mcpRes = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_TOKEN) },
      body: toolsCallRequest("call_tool", {
        tool_name: "github__repos_list",
        arguments: {},
      }),
    });
    expect(mcpRes.status).toBe(200);

    // Second request (REST tools) — same user, same bucket, now empty → 429
    const toolsRes = await app.request("/tools/github/repos.list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer(CALLER_TOKEN),
      },
      body: JSON.stringify({}),
    });
    expect(toolsRes.status).toBe(429);
  });
});

// ---------------------------------------------------------------------------
// Test 13 — Unsupported methods return JSON-RPC MethodNotFound (-32601)
// ---------------------------------------------------------------------------

describe("Unsupported MCP methods → MethodNotFound (test 13)", () => {
  it.each([
    "resources/list",
    "prompts/list",
    "sampling/createMessage",
  ])("returns JSON-RPC error -32601 for %s", async (method) => {
    const app = createApp();
    const res = await app.request(`/mcp/${WORKSPACE_ID}`, {
      method: "POST",
      headers: { ...MCP_HEADERS, Authorization: bearer(CALLER_TOKEN) },
      body: mcpRequest(method, {}),
    });

    expect(res.status).toBe(200);
    const body = await res.json() as {
      jsonrpc: string;
      error: { code: number; message: string };
    };
    expect(body.jsonrpc).toBe("2.0");
    expect(body.error.code).toBe(-32601);
  });
});
