/**
 * MCP workspace router — /mcp/:workspaceId
 *
 * Provides the gateway endpoint that MCP clients connect to. Auth follows RFC
 * 6750 §3 and §3.1: 401 responses include a WWW-Authenticate header pointing
 * at the RFC 9728 resource metadata document so OAuth-aware clients can
 * auto-discover Cognito and complete the flow without a hand-fed token.
 *
 * Phase 2 will replace the stub handler with the real streamable-HTTP MCP
 * session logic. This file owns the auth layer and the error envelope; the
 * handler is intentionally minimal for now.
 */

import type { Context, Next } from "hono";
import { Hono } from "hono";
import { getMembership } from "../memberships.js";
import {
  CognitoNotConfiguredError,
  verifyAccessToken,
} from "../middleware/auth.js";
import { getCurrentWorkspace } from "../sessions.js";
import { listUserGroupIds } from "../userGroups.js";

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
// Mirrors requireAuth but emits RFC 6750-compliant WWW-Authenticate headers on
// 401 and 403 so MCP clients can initiate the OAuth discovery flow.
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
// Routes
// ---------------------------------------------------------------------------

mcpRouter.all("/:workspaceId", requireMcpAuth, (c) => {
  // Phase 2 will replace this with the real streamable-HTTP MCP session.
  return c.json({ error: "not_implemented", message: "MCP endpoint not yet available" }, 501);
});
