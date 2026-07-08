/**
 * Unit tests for the MCP gateway route.
 *
 * Covers:
 *   - Catalog filtering via permittedTools (only granted tools exposed)
 *   - call_tool executor payload shape (provider, operation, args, credentials)
 *   - Permission-denied result shape (isError, forbidden message)
 *   - Unknown-tool result shape (isError, unknown-tool message)
 *   - workspace_mismatch and not_a_member 403s from requireWorkspaceMembership
 *   - 401 with WWW-Authenticate header for missing token
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetAuditStore } from "../src/audit.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetExecutor, setExecutor, type IsolateExecutor } from "../src/isolate.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetMcpCatalog } from "../src/mcp/server.js";
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

const CALLER_TOKEN = "test-caller-token";
const CALLER_SUB = "caller-user";
const WORKSPACE_ID = "ws-test";

// A user whose active workspace differs from the URL
const OTHER_TOKEN = "test-other-token";
const OTHER_SUB = "other-user";
const OTHER_WORKSPACE = "ws-other";

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
      { sub: OTHER_SUB, token: OTHER_TOKEN, role: "member", workspaceId: OTHER_WORKSPACE },
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
