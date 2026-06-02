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
