/**
 * RFC 9728 — OAuth Protected Resource Metadata
 *
 * GET /.well-known/oauth-protected-resource/mcp/:workspaceId
 *
 * Unauthenticated endpoint that returns a metadata document describing the
 * Cognito authorization server backing a given MCP workspace endpoint. MCP
 * clients use this to auto-discover the OAuth issuer and complete the flow
 * without a hand-fed token.
 *
 * Required env var (shared with requireAuth):
 *   GATEWAY_COGNITO_USER_POOL_ID — Cognito user pool id (format: <region>_<id>)
 */

import { Hono } from "hono";

export const wellKnownRouter = new Hono();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isValidUuid(value: string): boolean {
  return UUID_RE.test(value);
}

/**
 * Derive the Cognito issuer URL from GATEWAY_COGNITO_USER_POOL_ID.
 * Pool ID format: `<region>_<id>` (e.g. `us-east-1_ABC123`).
 * Issuer URL:     `https://cognito-idp.<region>.amazonaws.com/<poolId>`
 */
function getCognitoIssuer(): string | null {
  const poolId = process.env["GATEWAY_COGNITO_USER_POOL_ID"];
  if (!poolId) return null;
  const region = poolId.split("_")[0];
  if (!region) return null;
  return `https://cognito-idp.${region}.amazonaws.com/${poolId}`;
}

/**
 * Return the public gateway host for building resource URLs.
 * Prefers X-Forwarded-Host (set by the load balancer) then Host.
 */
function getGatewayHost(
  forwardedHost: string | undefined,
  host: string | undefined,
): string {
  return forwardedHost ?? host ?? "gateway.aprovan.com";
}

// ---------------------------------------------------------------------------
// GET /.well-known/oauth-protected-resource/mcp/:workspaceId
// ---------------------------------------------------------------------------

wellKnownRouter.get("/oauth-protected-resource/mcp/:workspaceId", (c) => {
  const workspaceId = c.req.param("workspaceId");

  if (!isValidUuid(workspaceId)) {
    return c.json({ error: "invalid_workspace_id" }, 400);
  }

  const host = getGatewayHost(
    c.req.header("x-forwarded-host"),
    c.req.header("host"),
  );

  const resource = `https://${host}/mcp/${workspaceId}`;
  const issuer = getCognitoIssuer();

  return c.json({
    resource,
    authorization_servers: issuer ? [issuer] : [],
    bearer_methods_supported: ["header"],
    resource_name: `Aprovan Gateway — workspace ${workspaceId}`,
    resource_documentation: "https://aprovan.com/docs/mcp",
  });
});

// ---------------------------------------------------------------------------
// Exports used by tests
// ---------------------------------------------------------------------------

export { isValidUuid, getCognitoIssuer, getGatewayHost };
