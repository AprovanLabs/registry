import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { parseProviderNames, loadProviders, executeTool } from "../loader.js";
import type { ProviderTool } from "../loader.js";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
});

// ---------------------------------------------------------------------------
// parseProviderNames
// ---------------------------------------------------------------------------

describe("parseProviderNames", () => {
  it("parses comma-separated provider names", () => {
    expect(parseProviderNames("github,slack,stripe")).toEqual(["github", "slack", "stripe"]);
  });

  it("trims whitespace", () => {
    expect(parseProviderNames("github, slack , stripe")).toEqual(["github", "slack", "stripe"]);
  });

  it("lowercases names", () => {
    expect(parseProviderNames("GitHub,Slack")).toEqual(["github", "slack"]);
  });

  it("returns empty array for undefined", () => {
    expect(parseProviderNames(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseProviderNames("")).toEqual([]);
  });

  it("filters empty entries from double commas", () => {
    expect(parseProviderNames("github,,slack")).toEqual(["github", "slack"]);
  });
});

// ---------------------------------------------------------------------------
// loadProviders
// ---------------------------------------------------------------------------

describe("loadProviders", () => {
  it("returns an empty array for an unknown provider", async () => {
    const tools = await loadProviders(["__nonexistent_provider__"]);
    expect(tools).toEqual([]);
  });

  it("returns an empty array for an empty provider list", async () => {
    const tools = await loadProviders([]);
    expect(tools).toEqual([]);
  });

  it("loads tools from github provider (integration)", async () => {
    // This test requires the @utdk/github package to be present in the workspace.
    // It verifies that the loader correctly converts the OpenAPI doc to MCP tools.
    const tools = await loadProviders(["github"]);

    expect(tools.length).toBeGreaterThan(0);

    // All tools should have required fields
    for (const tool of tools) {
      expect(tool.mcpName).toMatch(/^[a-zA-Z0-9_-]+$/);
      expect(tool.providerName).toBe("github");
      expect(tool.description).toBeTruthy();
      expect(tool.httpMethod).toMatch(/^(GET|POST|PUT|PATCH|DELETE)$/);
      expect(tool.urlTemplate).toMatch(/^https?:\/\//);
      expect(tool.inputSchema).toBeDefined();
    }
  });

  it("loads tools from stripe provider (integration)", async () => {
    const tools = await loadProviders(["stripe"]);

    expect(tools.length).toBeGreaterThan(0);

    const tool = tools[0];
    expect(tool).toBeDefined();
    if (!tool) return;

    expect(tool.providerName).toBe("stripe");
    expect(tool.inputSchema["type"]).toBe("object");
  });

  it("loads tools from multiple providers simultaneously", async () => {
    const tools = await loadProviders(["github", "stripe"]);

    expect(tools.length).toBeGreaterThan(0);

    const githubTools = tools.filter((t) => t.providerName === "github");
    const stripeTools = tools.filter((t) => t.providerName === "stripe");

    expect(githubTools.length).toBeGreaterThan(0);
    expect(stripeTools.length).toBeGreaterThan(0);
  });

  it("tool names are MCP-safe (no dots or slashes)", async () => {
    const tools = await loadProviders(["github"]);
    for (const tool of tools) {
      expect(tool.mcpName).not.toContain(".");
      expect(tool.mcpName).not.toContain("/");
    }
  });

  it("input schemas have type: object", async () => {
    const tools = await loadProviders(["stripe"]);
    for (const tool of tools) {
      const schema = tool.inputSchema;
      expect(schema["type"]).toBe("object");
    }
  });
});

// ---------------------------------------------------------------------------
// executeTool — unit tests with mocked fetch
// ---------------------------------------------------------------------------

describe("executeTool", () => {
  const mockTool: ProviderTool = {
    mcpName: "github__repos_list_for_user",
    utcpName: "github.repos/listForUser",
    description: "List public repositories for the specified user.",
    inputSchema: {
      type: "object",
      properties: {
        username: { type: "string", description: "The handle for the GitHub user account." },
        per_page: { type: "integer" },
      },
      required: ["username"],
    },
    providerName: "github",
    httpMethod: "GET",
    urlTemplate: "https://api.github.com/users/{username}/repos",
    contentType: "application/json",
    pathParamKeys: ["username"],
    queryParamKeys: ["per_page"],
    auth: undefined,
  };

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  it("substitutes path parameters and makes a GET request", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify([{ id: 1, name: "repo1" }]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const result = await executeTool(mockTool, { username: "octocat", per_page: 10 });

    expect(mockFetch).toHaveBeenCalledOnce();
    const [calledUrl, calledInit] = mockFetch.mock.calls[0] as [string, RequestInit];

    expect(calledUrl).toContain("octocat");
    expect(calledUrl).not.toContain("{username}");
    expect(calledInit.method).toBe("GET");
    expect(result).toEqual([{ id: 1, name: "repo1" }]);
  });

  it("appends non-path args as query parameters for GET requests", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response("[]", {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    await executeTool(mockTool, { username: "octocat", per_page: 5 });

    const [calledUrl] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(calledUrl).toContain("per_page=5");
  });

  it("applies auth headers when auth provider is present", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response("{}", {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const toolWithAuth: ProviderTool = {
      ...mockTool,
      auth: {
        applyToRequest: async (headers) => {
          headers["Authorization"] = "Bearer test-token";
        },
      },
    };

    await executeTool(toolWithAuth, { username: "octocat" });

    const [, calledInit] = mockFetch.mock.calls[0] as [string, RequestInit];
    const headers = calledInit.headers as Record<string, string>;
    expect(headers["Authorization"]).toBe("Bearer test-token");
  });

  it("sends JSON body for POST requests", async () => {
    const postTool: ProviderTool = {
      ...mockTool,
      httpMethod: "POST",
      urlTemplate: "https://api.github.com/user/repos",
      pathParamKeys: [],
      queryParamKeys: [],
      mcpName: "github__repos_create_for_authenticated_user",
      utcpName: "github.repos/createForAuthenticatedUser",
    };

    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({ id: 42, name: "new-repo" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const result = await executeTool(postTool, { name: "new-repo", private: true });

    const [, calledInit] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(calledInit.method).toBe("POST");
    expect(calledInit.body).toBe(JSON.stringify({ name: "new-repo", private: true }));
    expect(result).toEqual({ id: 42, name: "new-repo" });
  });

  it("throws on non-ok HTTP responses", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response("Not Found", { status: 404 }),
    );

    await expect(executeTool(mockTool, { username: "nonexistent" })).rejects.toThrow(
      "Tool call failed: 404",
    );
  });
});
