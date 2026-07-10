/**
 * MCP Streamable-HTTP transport route.
 *
 * POST /mcp/:workspaceId
 *
 * Exposes four Aprovan meta-tools (`list_tools`, `search_tools`, `tool_info`,
 * `call_tool`) via the MCP Streamable-HTTP protocol. Auth follows RFC 6750
 * §3.1: 401 responses include a WWW-Authenticate header with resource_metadata
 * pointing at the RFC 9728 discovery document for the workspace.
 */

import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Hono } from "hono";
import { buildMcpServer } from "../mcp/server.js";
import { getMembership } from "../memberships.js";
import {
  CognitoNotConfiguredError,
  verifyAccessToken,
} from "../middleware/auth.js";
import { rateLimitByUserId } from "../middleware/rateLimitMiddleware.js";
import { getCurrentWorkspace } from "../sessions.js";
import { listUserGroupIds } from "../userGroups.js";
import type { Context, Next } from "hono";

export const mcpRouter = new Hono();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getGatewayHost(
  forwardedHost: string | undefined,
  host: string | undefined,
): string {
  return forwardedHost ?? host ?? "gateway.aprovan.com";
}

function buildMetadataUrl(host: string, workspaceId: string): string {
  return `https://${host}/.well-known/oauth-protected-resource/mcp/${workspaceId}`;
}

// ---------------------------------------------------------------------------
// MCP-specific auth middleware
//
// Emits RFC 6750-compliant WWW-Authenticate headers on 401 (with
// resource_metadata pointing at the RFC 9728 discovery document) and 403.
// Also checks that the URL workspace matches the principal's active workspace.
// ---------------------------------------------------------------------------

async function requireMcpAuth(c: Context, next: Next): Promise<Response | void> {
  const workspaceId = c.req.param("workspaceId") ?? "";
  const host = getGatewayHost(
    c.req.header("x-forwarded-host"),
    c.req.header("host"),
  );
  const metadataUrl = buildMetadataUrl(host, workspaceId);
  const wwwAuthBase = `Bearer realm="aprovan-mcp", resource_metadata="${metadataUrl}"`;

  const authHeader = c.req.header("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return c.json({ error: "invalid_token" }, 401, {
      "WWW-Authenticate": wwwAuthBase,
    });
  }

  const token = authHeader.slice("Bearer ".length);

  let sub: string;
  try {
    sub = await verifyAccessToken(token);
  } catch (err) {
    if (err instanceof CognitoNotConfiguredError) {
      return c.json({ error: "Cognito verifier not configured" }, 500);
    }
    return c.json({ error: "invalid_token" }, 401, {
      "WWW-Authenticate": wwwAuthBase,
    });
  }

  // Active workspace from the session row.
  let activeWorkspaceId: string | undefined;
  try {
    activeWorkspaceId = await getCurrentWorkspace(sub);
  } catch {
    return c.json({ error: "Failed to read session" }, 500);
  }
  if (!activeWorkspaceId) {
    return c.json(
      { error: "No active workspace selected", code: "workspace_not_selected" },
      400,
    );
  }

  // Workspace mismatch check — URL param must match the token's active workspace.
  if (workspaceId && activeWorkspaceId !== workspaceId) {
    return c.json({ error: "workspace_mismatch" }, 403);
  }

  // Membership in the active workspace.
  let membership;
  try {
    membership = await getMembership(activeWorkspaceId, sub);
  } catch {
    return c.json({ error: "Failed to resolve membership" }, 500);
  }
  if (!membership) {
    return c.json({ error: "No membership in active workspace" }, 403, {
      "WWW-Authenticate": 'Bearer error="insufficient_scope", scope="mcp.invoke"',
    });
  }

  // Group ids for the active workspace.
  let groupIds: string[];
  try {
    groupIds = await listUserGroupIds(activeWorkspaceId, sub);
  } catch {
    return c.json({ error: "Failed to load groups" }, 500);
  }

  c.set("principal", {
    sub,
    workspaceId: activeWorkspaceId,
    role: membership.role ?? "member",
    groupIds,
  });

  await next();
}

// ---------------------------------------------------------------------------
// Middleware chain: auth (with workspace mismatch check) → rate limit
// ---------------------------------------------------------------------------

mcpRouter.use("/:workspaceId", requireMcpAuth, rateLimitByUserId);

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
