/**
 * MCP server factory for the gateway's /mcp/:workspaceId endpoint.
 *
 * `buildMcpServer(principal)` builds a fresh MCP Server instance per request.
 * The full tool catalog is loaded once at boot and cached at module scope;
 * only the per-caller permitted subset is exposed inside each Server.
 *
 * Tools are filtered through `permittedTools` / `mayInvokeTool` using the same
 * check semantics as `routes/tools.ts`. The `call_tool` meta-tool re-uses
 * `getExecutor()` (the same singleton as `routes/tools.ts`) for sandboxed
 * execution.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { withSpan } from "@utdk/common/telemetry";
import {
  handleCallTool,
  handleListTools,
  handleSearchTools,
  handleToolInfo,
  loadProviders,
  parseProviderNames,
  META_TOOLS,
  type Execute,
  type ProviderTool,
} from "@utdk/mcp-core";
import { mayInvokeTool } from "../authorize.js";
import { FS_TOOLS, FS_TOOL_NAMES, handleFsTool } from "./fs-tools.js";
import { getAuditStore } from "../audit.js";
import { getContentStore } from "../content-store.js";
import { getCredentialStore } from "../credentials.js";
import { getExecutor } from "../isolate.js";
import { getAuthMode, type Principal } from "../middleware/auth.js";

// ---------------------------------------------------------------------------
// Module-level catalog cache (loaded once at first call)
// ---------------------------------------------------------------------------

let _catalog: ProviderTool[] | undefined;
let _catalogLoading: Promise<ProviderTool[]> | undefined;

async function getCatalog(): Promise<ProviderTool[]> {
  if (_catalog) return _catalog;
  if (_catalogLoading) return _catalogLoading;
  _catalogLoading = (async () => {
    const providerNames = parseProviderNames(process.env["UTDK_PROVIDERS"]);
    const tools = await loadProviders(providerNames);
    _catalog = tools;
    return tools;
  })();
  return _catalogLoading;
}

/** Reset the cached catalog (used in tests). */
export function resetMcpCatalog(): void {
  _catalog = undefined;
  _catalogLoading = undefined;
}

// ---------------------------------------------------------------------------
// Permission filter
// ---------------------------------------------------------------------------

async function permittedTools(all: ProviderTool[], principal: Principal): Promise<ProviderTool[]> {
  if (getAuthMode() === "none") return all;
  if (principal.role === "admin") return all;
  const results: ProviderTool[] = [];
  for (const tool of all) {
    if (await mayInvokeTool(principal, tool.providerName, toolOperation(tool))) {
      results.push(tool);
    }
  }
  return results;
}

/** Extract the operation string used for permission checks from a ProviderTool. */
function toolOperation(tool: ProviderTool): string {
  const rawOp = tool.utcpName.startsWith(`${tool.providerName}.`)
    ? tool.utcpName.slice(tool.providerName.length + 1)
    : tool.utcpName;
  return rawOp.replace(/\//g, ".");
}

// ---------------------------------------------------------------------------
// MCP Server factory
// ---------------------------------------------------------------------------

export async function buildMcpServer(principal: Principal): Promise<Server> {
  const all = await getCatalog();
  const permitted = await permittedTools(all, principal);
  const permittedMap = new Map<string, ProviderTool>(permitted.map((t) => [t.mcpName, t]));

  const server = new Server(
    { name: "@aprovan/registry-app", version: "0.1.0" },
    {
      capabilities: {
        tools: { listChanged: false },
        prompts: { listChanged: false },
        resources: { listChanged: false },
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    // Built-in workspace tools (filesystem) + the UTDK meta-tools.
    tools: [...FS_TOOLS, ...META_TOOLS],
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const args = (request.params.arguments ?? {}) as Record<string, unknown>;

    if (FS_TOOL_NAMES.has(toolName)) return handleFsTool(principal, toolName, args);

    if (toolName === "list_tools") return handleListTools(permitted, args);
    if (toolName === "search_tools") return handleSearchTools(permitted, args);
    if (toolName === "tool_info") return handleToolInfo(permittedMap, args);

    if (toolName === "call_tool") {
      const requestedName = typeof args["tool_name"] === "string" ? args["tool_name"] : "";
      const tool = permittedMap.get(requestedName);
      if (!tool) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `forbidden: caller does not have permission for ${requestedName}`,
            },
          ],
        };
      }
      return handleCallTool(tool, args, makeExecute(principal));
    }

    return {
      isError: true,
      content: [
        {
          type: "text" as const,
          text: `Unknown tool: ${toolName}. Use list_tools or search_tools to discover tools, then call_tool to execute them.`,
        },
      ],
    };
  });

  server.setRequestHandler(ListPromptsRequestSchema, async () => ({
    prompts: getContentStore()
      .list("prompt", principal.workspaceId)
      .map((prompt) => ({ name: prompt.name })),
  }));
  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const prompt = getContentStore().get(
      "prompt",
      principal.workspaceId,
      request.params.name,
    );
    if (!prompt) throw new Error(`Prompt not found: ${request.params.name}`);
    return {
      messages: [
        {
          role: "user" as const,
          content: { type: "text" as const, text: prompt.content },
        },
      ],
    };
  });
  server.setRequestHandler(ListResourcesRequestSchema, async () => ({
    resources: getContentStore()
      .list("artifact", principal.workspaceId)
      .map((artifact) => ({
        uri: `aprovan://${artifact.name}/${artifact.hash}`,
        name: artifact.name,
        mimeType: artifact.mimeType,
      })),
  }));
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const url = new URL(request.params.uri);
    const [name, hash] = `${url.host}${url.pathname}`.split("/").filter(Boolean);
    const artifact = name
      ? getContentStore().get("artifact", principal.workspaceId, name, hash)
      : undefined;
    if (!artifact) throw new Error(`Resource not found: ${request.params.uri}`);
    return {
      contents: [
        {
          uri: request.params.uri,
          mimeType: artifact.mimeType,
          text: artifact.content,
        },
      ],
    };
  });

  return server;
}

// ---------------------------------------------------------------------------
// Execute callback — maps IsolateExecutor result onto Execute contract
// ---------------------------------------------------------------------------

function makeExecute(principal: Principal): Execute {
  return async (input) => {
    const provider = input.tool.providerName;
    const operation = toolOperation(input.tool);
    const requestId = crypto.randomUUID();
    const startTime = Date.now();

    const credStore = getCredentialStore();
    const credentials = await credStore.resolveForProvider(principal.workspaceId, provider);

    const executor = await getExecutor();

    const result = await withSpan(
      { provider, operation, spanName: `mcp ${provider} ${operation}` },
      async (span) => {
        span.setAttribute("mcp.transport", "streamable_http");
        span.setAttribute("caller_id", principal.sub);
        span.setAttribute("workspace_id", principal.workspaceId);
        return executor.execute({ provider, operation, args: input.args, credentials, timeout: 30_000 });
      },
    );

    const durationMs = Date.now() - startTime;
    const status = result.success ? 200 : 500;

    getAuditStore().append({
      requestId,
      workspaceId: principal.workspaceId,
      callerId: principal.sub,
      provider,
      operation,
      status,
      durationMs,
      mcp_tool_name: input.tool.mcpName,
    });

    return result.success
      ? { ok: true as const, data: result.data }
      : { ok: false as const, error: result.error ?? "Execution failed" };
  };
}
