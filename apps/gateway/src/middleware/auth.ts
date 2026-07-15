import { CognitoJwtVerifier } from "aws-jwt-verify";
import { getMembership } from "../memberships.js";
import { getCurrentWorkspace } from "../sessions.js";
import { listUserGroupIds } from "../userGroups.js";
import type { Context, Next } from "hono";

export type AuthMode = "none" | "oidc";

export interface Principal {
  sub: string;
  workspaceId: string;
  role: string;
  groupIds: string[];
}

interface TokenVerifier {
  verify(token: string): Promise<Record<string, unknown>>;
  hydrate(): Promise<void>;
}

declare module "hono" {
  interface ContextVariableMap {
    principal: Principal;
  }
}

let verifierOverride: TokenVerifier | null | undefined;
let verifier: TokenVerifier | undefined;

export function getAuthMode(): AuthMode {
  return process.env["OIDC_ISSUER"] &&
    process.env["OIDCAUDIENCE"]
    ? "oidc"
    : "none";
}

/**
 * Header carrying the caller's bearer token. Deliberately NOT `Authorization`:
 * the gateway sits behind CloudFront with Origin Access Control, whose SigV4
 * signing overwrites `Authorization` with its own signature. The browser
 * client (@aprovan/ui, DEFAULT_AUTH_HEADER) sends the user token here instead.
 */
export const ACCESS_TOKEN_HEADER = "X-Aprovan-Authorization";

interface HeaderCarrier {
  req: { header(name: string): string | undefined };
}

/**
 * Extract the caller's bearer token. Prefers {@link ACCESS_TOKEN_HEADER};
 * falls back to the standard `Authorization` header for direct/dev access that
 * doesn't traverse CloudFront. Returns the bare token (no `Bearer ` prefix),
 * or null when absent or malformed.
 */
export function readBearerToken(c: HeaderCarrier): string | null {
  const raw = c.req.header(ACCESS_TOKEN_HEADER) ?? c.req.header("Authorization");
  if (!raw?.startsWith("Bearer ")) return null;
  return raw.slice("Bearer ".length).trim();
}

function createVerifier(): TokenVerifier {
  if (verifierOverride !== undefined) {
    if (!verifierOverride) throw new Error("OIDC verifier is unavailable");
    return verifierOverride;
  }
  if (verifier) return verifier;
  const issuer = process.env["OIDC_ISSUER"];
  const audience = process.env["OIDCAUDIENCE"];
  if (!issuer || !audience) throw new Error("OIDC configuration is incomplete");
  const match = issuer.match(/cognito-idp\.[^/]+\.amazonaws\.com\/([^/]+)$/);
  if (!match?.[1]) throw new Error("OIDC_ISSUER is not a Cognito issuer");
  verifier = CognitoJwtVerifier.create({
    userPoolId: match[1],
    clientId: audience,
    tokenUse: "access",
  }) as unknown as TokenVerifier;
  return verifier;
}

export async function verifyAccessToken(token: string): Promise<string> {
  const payload = await createVerifier().verify(token);
  const sub = payload["sub"];
  if (typeof sub !== "string" || !sub) throw new Error("Invalid token subject");
  return sub;
}

export function setCognitoVerifier(value: TokenVerifier | null): void {
  verifierOverride = value;
}

export function resetCognitoVerifier(): void {
  verifierOverride = undefined;
  verifier = undefined;
}

export async function initAuth(): Promise<void> {
  if (
    getAuthMode() === "none" &&
    process.env["NODE_ENV"] === "production" &&
    process.env["GATEWAY_ALLOW_INSECURE"] !== "1"
  ) {
    throw new Error(
      "Production gateway requires OIDC or GATEWAY_ALLOW_INSECURE=1",
    );
  }
  if (getAuthMode() === "oidc") await createVerifier().hydrate();
}

async function oidcPrincipal(c: Context): Promise<Principal> {
  const token = readBearerToken(c);
  if (!token) throw new Error("missing_token");
  const sub = await verifyAccessToken(token);
  const requested = c.req.header("X-Aprovan-Workspace");
  const workspaceId = requested || (await getCurrentWorkspace(sub));
  if (!workspaceId) throw new Error("workspace_not_selected");
  const membership = await getMembership(workspaceId, sub);
  if (!membership) throw new Error("workspace_forbidden");
  return {
    sub,
    workspaceId,
    role: membership.role ?? "member",
    groupIds: await listUserGroupIds(workspaceId, sub),
  };
}

export async function resolvePrincipal(c: Context): Promise<Principal> {
  if (getAuthMode() === "none") {
    return {
      sub: "local",
      workspaceId: "local",
      role: "admin",
      groupIds: [],
    };
  }
  return oidcPrincipal(c);
}

export async function requireAuth(
  c: Context,
  next: Next,
): Promise<Response | void> {
  try {
    c.set("principal", await resolvePrincipal(c));
    await next();
  } catch (error) {
    const code = error instanceof Error ? error.message : "invalid_token";
    if (code === "workspace_forbidden") {
      return c.json({ error: "Workspace is not allowed" }, 403);
    }
    if (code === "workspace_not_selected") {
      return c.json({ error: "No workspace selected", code }, 400);
    }
    return c.json({ error: "Invalid or expired token" }, 401);
  }
}

export async function requireAdmin(
  c: Context,
  next: Next,
): Promise<Response | void> {
  if (c.get("principal")?.role !== "admin") {
    return c.json({ error: "Admin role required" }, 403);
  }
  await next();
}
