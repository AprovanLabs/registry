/**
 * Tests for POST /tools/search and the searchTools pure helper.
 *
 * Covers:
 *   - tool_name exact lookup (found / not found)
 *   - namespace filter
 *   - keyword query ranking
 *   - limit cap
 *   - empty registry baseline
 *   - auth guard (401 without token)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCredentialStore } from "../src/credentials.js";
import { resetProviderCache, setProviderModuleForTesting } from "../src/isolate.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { resetRateLimiters } from "../src/middleware/rateLimitMiddleware.js";
import { resetPermissionStore } from "../src/permissions.js";
import { resetToolListCache, searchTools, type ToolEntry } from "../src/routes/tools.js";
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
// Auth fixtures
// ---------------------------------------------------------------------------

const ADMIN_TOKEN = "search-test-admin-token";
const CALLER_TOKEN = "search-test-caller-token";
const ADMIN_SUB = "search-admin";
const CALLER_SUB = "search-caller";
const WORKSPACE_ID = "ws-search-test";

// ---------------------------------------------------------------------------
// Shared tool fixtures
// ---------------------------------------------------------------------------

const GITHUB_REPOS_LIST: ToolEntry = {
  provider: "github",
  name: "github.repos.list",
  operation: "repos.list",
  description: "List repositories for the authenticated user",
  inputSchema: { type: "object", properties: { per_page: { type: "number" } } },
};

const GITHUB_ISSUES_LIST: ToolEntry = {
  provider: "github",
  name: "github.issues.list",
  operation: "issues.list",
  description: "List issues for a repository",
  inputSchema: { type: "object", properties: { repo: { type: "string" } } },
};

const STRIPE_CHARGES_LIST: ToolEntry = {
  provider: "stripe",
  name: "stripe.charges.list",
  operation: "charges.list",
  description: "List Stripe charges",
  inputSchema: { type: "object", properties: {} },
};

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
  resetToolListCache();
  resetProviderCache();
});

afterEach(() => {
  resetCredentialStore();
  resetPermissionStore();
  resetRateLimiters();
  resetToolListCache();
  resetProviderCache();
  resetCognitoVerifier();
});

// ---------------------------------------------------------------------------
// Pure searchTools helper — unit tests (no HTTP, no auth)
// ---------------------------------------------------------------------------

describe("searchTools (pure helper)", () => {
  const tools = [GITHUB_REPOS_LIST, GITHUB_ISSUES_LIST, STRIPE_CHARGES_LIST];

  it("returns all tools when no filters are given", () => {
    const result = searchTools(tools, {});
    expect(result).toMatchObject({ success: true, count: 3 });
  });

  it("empty tool list returns success with zero results", () => {
    const result = searchTools([], {});
    expect(result).toEqual({ success: true, count: 0, tools: [], namespaces: [] });
  });

  it("tool_name exact hit returns the matching tool", () => {
    const result = searchTools(tools, { tool_name: "github.repos.list" });
    expect(result).toEqual({ success: true, tool: GITHUB_REPOS_LIST });
  });

  it("tool_name exact miss returns success: false with descriptive error", () => {
    const result = searchTools(tools, { tool_name: "acme.missing" });
    expect(result).toEqual({ success: false, error: "Tool 'acme.missing' not found" });
  });

  it("namespace filter returns only tools for that provider", () => {
    const result = searchTools(tools, { namespace: "github" });
    if (!("tools" in result)) throw new Error("unexpected shape");
    expect(result.success).toBe(true);
    expect(result.tools.every((t) => t.provider === "github")).toBe(true);
    expect(result.namespaces).toEqual(["github"]);
  });

  it("namespace filter that matches nothing returns empty results", () => {
    const result = searchTools(tools, { namespace: "nonexistent" });
    expect(result).toEqual({ success: true, count: 0, tools: [], namespaces: [] });
  });

  it("query ranks by keyword match score", () => {
    const result = searchTools(tools, { query: "list repositories" });
    if (!("tools" in result)) throw new Error("unexpected shape");
    expect(result.success).toBe(true);
    expect(result.tools.length).toBeGreaterThan(0);
    // "github.repos.list" matches both "list" and "repositories" — highest score
    expect(result.tools[0]?.name).toBe("github.repos.list");
  });

  it("query with no matches returns empty results", () => {
    const result = searchTools(tools, { query: "completely unrelated xyz" });
    if (!("tools" in result)) throw new Error("unexpected shape");
    expect(result.count).toBe(0);
  });

  it("limit caps the result count", () => {
    const result = searchTools(tools, { limit: 2 });
    if (!("tools" in result)) throw new Error("unexpected shape");
    expect(result.tools.length).toBeLessThanOrEqual(2);
  });

  it("namespace + query combination narrows results", () => {
    const result = searchTools(tools, { namespace: "github", query: "issues" });
    if (!("tools" in result)) throw new Error("unexpected shape");
    expect(result.tools.every((t) => t.provider === "github")).toBe(true);
    expect(result.tools.some((t) => t.name === "github.issues.list")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// POST /tools/search HTTP integration — uses the app + DDB mock
// ---------------------------------------------------------------------------

describe("POST /tools/search (HTTP)", () => {
  async function registerGithubCredential(app: ReturnType<typeof createApp>) {
    setProviderModuleForTesting("github", {
      tools: [
        {
          name: "github.repos.list",
          description: "List repositories",
          inputSchema: { type: "object", properties: { per_page: { type: "number" } } },
        },
        {
          name: "github.issues.list",
          description: "List issues for a repository",
          inputSchema: { type: "object", properties: { repo: { type: "string" } } },
        },
      ],
    });

    await app.request("/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
      body: JSON.stringify({
        provider: "github",
        payload: { type: "bearer_token", token: "ghp_test" },
      }),
    });
  }

  it("returns 401 without an auth token", async () => {
    const app = createApp();
    const res = await app.request("/tools/search", { method: "POST" });
    expect(res.status).toBe(401);
  });

  it("returns empty result when workspace has no credentials", async () => {
    const app = createApp();
    const res = await app.request("/tools/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CALLER_TOKEN}`,
      },
      body: JSON.stringify({}),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { success: boolean; count: number; tools: unknown[] };
    expect(body.success).toBe(true);
    expect(body.count).toBe(0);
    expect(body.tools).toEqual([]);
  });

  it("returns success:false for a missing tool_name", async () => {
    const app = createApp();
    await registerGithubCredential(app);

    const res = await app.request("/tools/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CALLER_TOKEN}`,
      },
      body: JSON.stringify({ tool_name: "acme.missing" }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { success: boolean; error: string };
    expect(body.success).toBe(false);
    expect(body.error).toContain("acme.missing");
  });

  it("returns the matching tool for an exact tool_name hit", async () => {
    const app = createApp();
    await registerGithubCredential(app);

    const res = await app.request("/tools/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CALLER_TOKEN}`,
      },
      body: JSON.stringify({ tool_name: "github.repos.list" }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { success: boolean; tool: { name: string } };
    expect(body.success).toBe(true);
    expect(body.tool.name).toBe("github.repos.list");
  });

  it("filters by namespace (provider)", async () => {
    const app = createApp();
    await registerGithubCredential(app);

    const res = await app.request("/tools/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CALLER_TOKEN}`,
      },
      body: JSON.stringify({ namespace: "github" }),
    });
    expect(res.status).toBe(200);
    const body = await res.json() as {
      success: boolean;
      tools: { provider: string }[];
      namespaces: string[];
    };
    expect(body.success).toBe(true);
    expect(body.tools.every((t) => t.provider === "github")).toBe(true);
    expect(body.namespaces).toContain("github");
  });

  it("accepts an empty body (all defaults)", async () => {
    const app = createApp();
    await registerGithubCredential(app);

    const res = await app.request("/tools/search", {
      method: "POST",
      headers: { Authorization: `Bearer ${CALLER_TOKEN}` },
    });
    expect(res.status).toBe(200);
    const body = await res.json() as { success: boolean };
    expect(body.success).toBe(true);
  });

  it("reuses the GET /tools cache (only builds tool list once)", async () => {
    const app = createApp();
    await registerGithubCredential(app);

    // Prime cache with GET /tools
    await app.request("/tools", {
      method: "GET",
      headers: { Authorization: `Bearer ${CALLER_TOKEN}` },
    });

    // POST /tools/search should hit the same cache — no additional DDB calls
    const ddbCallsBefore = mockDdbSend.mock.calls.length;

    const res = await app.request("/tools/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CALLER_TOKEN}`,
      },
      body: JSON.stringify({}),
    });

    const ddbCallsAfter = mockDdbSend.mock.calls.length;

    expect(res.status).toBe(200);
    // Auth (Sessions + Memberships) re-verified per request, but no
    // additional Credentials queries should have been issued.
    const extraCalls = ddbCallsAfter - ddbCallsBefore;
    const credentialsCalls = mockDdbSend.mock.calls
      .slice(ddbCallsBefore)
      .filter((c) => {
        const input = (c[0] as { input?: { TableName?: string } }).input;
        return input?.TableName === "Credentials";
      });
    expect(credentialsCalls.length).toBe(0);
    expect(extraCalls).toBeGreaterThanOrEqual(0); // auth overhead is OK
  });
});
