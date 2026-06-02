#!/usr/bin/env node
/**
 * @utdk/mcp-server — Unified MCP server with dynamic tool loading.
 *
 * Usage:
 *   UTDK_PROVIDERS=github,slack npx @utdk/mcp-server
 *
 * MCP config:
 *   { "command": "npx", "args": ["@utdk/mcp-server"], "env": { "UTDK_PROVIDERS": "github" } }
 *
 * Environment variables:
 *   UTDK_PROVIDERS          Comma-separated list of @utdk providers to load (required)
 *   UTDK_OTEL_EXPORTER      Telemetry exporter: "otlp" | "console" | unset (noop)
 *   <PROVIDER>_TOKEN        Bearer token for a provider (e.g. GITHUB_TOKEN)
 *   <PROVIDER>_SECRET_KEY   API key for a provider (e.g. STRIPE_SECRET_KEY)
 *
 * Hot-reload:
 *   Send SIGHUP to reload provider list from the current UTDK_PROVIDERS env value.
 */

import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import {
  executeTool,
  initTelemetry,
  loadProviders,
  parseProviderNames,
} from "./loader.js";
import type { ProviderTool } from "./loader.js";

// ---------------------------------------------------------------------------
// Schema normalization
// ---------------------------------------------------------------------------

/**
 * Ensure the input schema is a valid MCP tool inputSchema (type: "object").
 */
function normalizeInputSchema(schema: Record<string, unknown>): {
  type: "object";
  properties?: Record<string, object>;
  required?: string[];
} {
  if (schema["type"] === "object") {
    return {
      type: "object",
      ...(schema["properties"]
        ? { properties: schema["properties"] as Record<string, object> }
        : {}),
      ...(schema["required"] ? { required: schema["required"] as string[] } : {}),
    };
  }

  return {
    type: "object",
    ...(schema["properties"]
      ? { properties: schema["properties"] as Record<string, object> }
      : {}),
    ...(schema["required"] ? { required: schema["required"] as string[] } : {}),
  };
}

// ---------------------------------------------------------------------------
// search_tools helper
// ---------------------------------------------------------------------------

/**
 * Search tools by keyword across mcpName and description.
 * All query words must appear somewhere in name or description (case-insensitive).
 * Results are sorted by relevance: name matches rank above description-only matches.
 */
function searchTools(
  tools: ProviderTool[],
  query: string,
  provider: string | undefined,
  limit: number,
): Array<{ name: string; description: string }> {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const source = provider ? tools.filter((t) => t.providerName === provider) : tools;

  const scored: Array<{ tool: ProviderTool; nameMatches: number; descMatches: number }> = [];

  for (const tool of source) {
    const nameLower = tool.mcpName.toLowerCase();
    const descLower = tool.description.toLowerCase();

    let allMatch = true;
    let nameMatches = 0;
    let descMatches = 0;

    for (const word of words) {
      const inName = nameLower.includes(word);
      const inDesc = descLower.includes(word);
      if (!inName && !inDesc) {
        allMatch = false;
        break;
      }
      if (inName) nameMatches++;
      if (inDesc) descMatches++;
    }

    if (allMatch) {
      scored.push({ tool, nameMatches, descMatches });
    }
  }

  scored.sort((a, b) => {
    if (b.nameMatches !== a.nameMatches) return b.nameMatches - a.nameMatches;
    return b.descMatches - a.descMatches;
  });

  return scored.slice(0, limit).map(({ tool }) => ({
    name: tool.mcpName,
    description: tool.description,
  }));
}

// ---------------------------------------------------------------------------
// MCP Server factory
// ---------------------------------------------------------------------------

/**
 * Create a low-level MCP Server that serves tools from the given ProviderTool list.
 * Uses raw request handlers for tools/list and tools/call to support dynamic,
 * JSON-schema-based tool definitions without requiring Zod schemas.
 */
function createServer(tools: ProviderTool[]): Server {
  const server = new Server(
    { name: "@utdk/mcp-server", version: "0.1.0" },
    { capabilities: { tools: {} } },
  );

  // Build a lookup map for fast dispatch
  const toolMap = new Map<string, ProviderTool>(tools.map((t) => [t.mcpName, t]));

  // tools/list — return the full tool catalog (including the list_tools meta-tool)
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: "list_tools",
        description:
          "List available tool names without full schemas. Pass an optional provider to filter results.",
        inputSchema: {
          type: "object" as const,
          properties: {
            provider: {
              type: "string",
              description: "Filter results to tools from this provider name (e.g. 'github')",
            },
          },
        },
      },
      {
        name: "search_tools",
        description:
          "Find tools by keyword. Searches tool names and descriptions so the LLM can locate relevant tools without browsing the full catalog.",
        inputSchema: {
          type: "object" as const,
          properties: {
            query: {
              type: "string",
              description: "Natural language or keyword search (all words must match)",
            },
            provider: {
              type: "string",
              description: "Restrict search to tools from this provider name (e.g. 'github')",
            },
            limit: {
              type: "number",
              description: "Maximum number of results to return (default 10)",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "tool_info",
        description:
          "Get the full schema and metadata for a specific tool by name. Use this after list_tools or search_tools to retrieve the complete input schema before calling the tool.",
        inputSchema: {
          type: "object" as const,
          properties: {
            tool_name: {
              type: "string",
              description: "The MCP tool name (e.g. 'github__repos_list')",
            },
          },
          required: ["tool_name"],
        },
      },
      ...tools.map((tool) => ({
        name: tool.mcpName,
        description: tool.description,
        inputSchema: normalizeInputSchema(tool.inputSchema),
      })),
    ],
  }));

  // tools/call — dispatch to the provider
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const args = (request.params.arguments ?? {}) as Record<string, unknown>;

    // list_tools meta-tool: enumerate provider tool names without schemas
    if (toolName === "list_tools") {
      const providerFilter =
        typeof args["provider"] === "string" ? args["provider"] : undefined;
      const filtered = providerFilter
        ? tools.filter((t) => t.providerName === providerFilter)
        : tools;
      const names = filtered.map((t) => t.mcpName);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(names, null, 2) }],
      };
    }

    // search_tools meta-tool: keyword search across tool names and descriptions
    if (toolName === "search_tools") {
      const query = typeof args["query"] === "string" ? args["query"] : "";
      const providerFilter =
        typeof args["provider"] === "string" ? args["provider"] : undefined;
      const limit =
        typeof args["limit"] === "number" && args["limit"] > 0 ? Math.floor(args["limit"]) : 10;
      const results = searchTools(tools, query, providerFilter, limit);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      };
    }

    // tool_info meta-tool: return full schema and metadata for a specific tool
    if (toolName === "tool_info") {
      const requestedName = typeof args["tool_name"] === "string" ? args["tool_name"] : "";
      const found = toolMap.get(requestedName);
      if (!found) {
        return {
          isError: true,
          content: [
            { type: "text" as const, text: `Unknown tool: ${requestedName}` },
          ],
        };
      }
      const info = {
        name: found.mcpName,
        description: found.description,
        provider: found.providerName,
        inputSchema: normalizeInputSchema(found.inputSchema),
        httpMethod: found.httpMethod,
        urlTemplate: found.urlTemplate,
      };
      return {
        content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      };
    }

    const tool = toolMap.get(toolName);

    if (!tool) {
      return {
        isError: true,
        content: [{ type: "text" as const, text: `Unknown tool: ${toolName}` }],
      };
    }

    try {
      const result = await executeTool(tool, args);
      const text =
        typeof result === "string" ? result : JSON.stringify(result, null, 2);

      return { content: [{ type: "text" as const, text }] };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return {
        isError: true,
        content: [
          { type: "text" as const, text: `Error calling ${toolName}: ${message}` },
        ],
      };
    }
  });

  return server;
}

// ---------------------------------------------------------------------------
// Hot-reload support
// ---------------------------------------------------------------------------

/**
 * Reload providers from the current UTDK_PROVIDERS env value.
 * Returns the new tool list (the caller is responsible for reconnecting if needed).
 */
async function reloadProviders(): Promise<ProviderTool[]> {
  const providerNames = parseProviderNames(process.env["UTDK_PROVIDERS"]);
  process.stderr.write(
    `[mcp-server] (Re)loading providers: ${providerNames.join(", ") || "(none)"}\n`,
  );

  const tools = await loadProviders(providerNames);
  process.stderr.write(
    `[mcp-server] Loaded ${tools.length} total tool(s) from ${providerNames.length} provider(s)\n`,
  );
  return tools;
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  await initTelemetry();

  const providerNames = parseProviderNames(process.env["UTDK_PROVIDERS"]);

  if (providerNames.length === 0) {
    process.stderr.write(
      "[mcp-server] Warning: UTDK_PROVIDERS is not set — starting with no tools.\n" +
        "[mcp-server] Set UTDK_PROVIDERS=github,slack,stripe to load providers.\n",
    );
  } else {
    process.stderr.write(
      `[mcp-server] Loading providers: ${providerNames.join(", ")}\n`,
    );
  }

  let tools = await loadProviders(providerNames);
  process.stderr.write(
    `[mcp-server] Ready with ${tools.length} tool(s). Starting MCP stdio server...\n`,
  );

  let server = createServer(tools);
  const transport = new StdioServerTransport();

  // SIGHUP → hot-reload provider list.
  // Because the MCP protocol is stateful (initialized per connection), we rebuild
  // the internal request handler registry. The client sees updated tools on the
  // next tools/list request without needing to reconnect.
  process.on("SIGHUP", () => {
    process.stderr.write("[mcp-server] SIGHUP received — reloading providers...\n");
    reloadProviders()
      .then((newTools) => {
        tools = newTools;
        // Rebuild server handlers in-place by re-registering on the existing server.
        // The transport connection is preserved; only the handler registry changes.
        server = createServer(newTools);
        // Reconnect the new server to the existing transport so future messages
        // are routed to the updated handler set.
        server.connect(transport).catch((err) => {
          process.stderr.write(`[mcp-server] Reconnect error after SIGHUP: ${err}\n`);
        });
      })
      .catch((err) => {
        process.stderr.write(`[mcp-server] Reload error: ${err}\n`);
      });
  });

  process.on("SIGTERM", () => {
    process.stderr.write("[mcp-server] SIGTERM received — shutting down.\n");
    process.exit(0);
  });

  await server.connect(transport);
}

main().catch((err) => {
  process.stderr.write(`[mcp-server] Fatal: ${err}\n`);
  process.exit(1);
});
