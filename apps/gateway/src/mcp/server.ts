/**
 * MCP server factory for the gateway's /mcp/:workspaceId endpoint.
 *
 * `buildMcpServer(principal)` builds a fresh MCP Server instance per request.
 * The full tool catalog is loaded once at boot and cached at module scope;
 * only the per-caller permitted subset is exposed inside each Server.
 *
 * Tools are filtered through `permittedTools` which calls PermissionStore.check
 * for every (provider, operation) pair using the same check semantics as
 * `routes/tools.ts`. The `call_tool` meta-tool re-uses `getExecutor()` (the
 * same singleton as `routes/tools.ts`) for sandboxed execution.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
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
import { getAuditStore } from "../audit.js";
import { getCredentialStore } from "../credentials.js";
import { getExecutor } from "../isolate.js";
import { getPermissionStore } from "../permissions.js";
import type { Principal } from "../middleware/auth.js";

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
  const permStore = getPermissionStore();
  const results: ProviderTool[] = [];
  for (const tool of all) {
    const allowed = await permStore.check(
      principal.workspaceId,
      principal.sub,
      tool.providerName,
      toolOperation(tool),
    );
    if (allowed) results.push(tool);
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
    { name: "@aprovan/gateway-mcp", version: "0.1.0" },
    { capabilities: { tools: { listChanged: false } } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: META_TOOLS }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const args = (request.params.arguments ?? {}) as Record<string, unknown>;

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
