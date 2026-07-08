/**
 * MCP Streamable-HTTP transport route.
 *
 * POST /mcp/:workspaceId
 *
 * Exposes four Aprovan meta-tools (`list_tools`, `search_tools`, `tool_info`,
 * `call_tool`) via the MCP Streamable-HTTP protocol. Authentication uses the
 * same Cognito Bearer token as `routes/tools.ts`. Each request builds a fresh
 * stateless MCP Server so there is no session state.
 *
 * Auth chain (applied to /:workspaceId/*):
 *   requireAuth → requireWorkspaceMembership → rateLimitByCallerAndProvider
 *
 * A wrapper adds `WWW-Authenticate: Bearer realm="mcp"` to any 401 that
 * requireAuth produces, satisfying the stub header requirement for Phase 2.
 */

import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Hono } from "hono";
import { buildMcpServer } from "../mcp/server.js";
import { requireAuth } from "../middleware/auth.js";
import { rateLimitByCallerAndProvider } from "../middleware/rateLimitMiddleware.js";
import { requireWorkspaceMembership } from "../middleware/workspace.js";
import type { Context, Next } from "hono";

export const mcpRouter = new Hono();

// ---------------------------------------------------------------------------
// WWW-Authenticate stub — Phase 2 requirement (full value wired in Phase 3)
// ---------------------------------------------------------------------------

async function requireAuthWithWwwAuthenticate(c: Context, next: Next): Promise<Response | void> {
  const result = await requireAuth(c, next);
  if (result instanceof Response && result.status === 401) {
    const headers = new Headers(result.headers);
    if (!headers.has("WWW-Authenticate")) {
      headers.set("WWW-Authenticate", 'Bearer realm="mcp"');
    }
    return new Response(result.body, { status: 401, headers });
  }
  return result;
}

// ---------------------------------------------------------------------------
// Middleware chain: auth → workspace membership → rate limit
// ---------------------------------------------------------------------------

mcpRouter.use(
  "/:workspaceId/*",
  requireAuthWithWwwAuthenticate,
  requireWorkspaceMembership,
  rateLimitByCallerAndProvider,
);

// ---------------------------------------------------------------------------
// Handler — stateless mode: new Server + transport per request
// ---------------------------------------------------------------------------

mcpRouter.all("/:workspaceId", async (c) => {
  const principal = c.get("principal");

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  const server = await buildMcpServer(principal);
  await server.connect(transport);

  return transport.handleRequest(c.req.raw);
});
