/**
 * Workspace picker route.
 *
 * POST /auth/sessions  — select the caller's active workspace.
 *
 * The gateway authenticates every request with a Cognito access token and
 * scopes it to the user's *active* workspace, read from
 * `Sessions[sub].currentWorkspaceId` (see `middleware/auth.ts`). When that is
 * unset the middleware returns 400 `workspace_not_selected` and the client
 * sends the user through this picker: the caller presents their Cognito
 * access token plus a chosen `workspace_id`, the gateway validates membership
 * and persists the choice.
 *
 * The legacy `POST /auth/token` and `POST /auth/token/apikey` token-issuance
 * endpoints were removed — the gateway no longer mints its own JWTs.
 */

import { Hono } from "hono";
import { getMembership } from "../memberships.js";
import {
  CognitoNotConfiguredError,
  verifyAccessToken,
} from "../middleware/auth.js";
import { setCurrentWorkspace } from "../sessions.js";

export const authRouter = new Hono();

// ---------------------------------------------------------------------------
// POST /auth/sessions — set the active workspace (the picker)
// ---------------------------------------------------------------------------

authRouter.post("/sessions", async (c) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return c.json({ error: "Missing or invalid Authorization header" }, 401);
  }
  const accessToken = authHeader.slice("Bearer ".length);

  let userSub: string;
  try {
    userSub = await verifyAccessToken(accessToken);
  } catch (err) {
    if (err instanceof CognitoNotConfiguredError) {
      return c.json({ error: "Cognito verifier not configured" }, 500);
    }
    return c.json({ error: "Invalid or expired Cognito token" }, 401);
  }

  let preferredWorkspaceId: string | undefined;
  try {
    const body = await c.req.json<{ workspace_id?: string }>();
    if (typeof body?.workspace_id === "string" && body.workspace_id.length > 0) {
      preferredWorkspaceId = body.workspace_id;
    }
  } catch {
    // empty body is fine
  }

  if (!preferredWorkspaceId) {
    return c.json(
      { error: "workspace_id is required", code: "workspace_not_selected" },
      400,
    );
  }

  let membership;
  try {
    membership = await getMembership(preferredWorkspaceId, userSub);
  } catch (err) {
    process.stderr.write(
      `[gateway] membership read failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to resolve membership" }, 500);
  }
  if (!membership) {
    return c.json({ error: "No membership in that workspace" }, 403);
  }

  try {
    await setCurrentWorkspace(userSub, preferredWorkspaceId);
  } catch (err) {
    process.stderr.write(
      `[gateway] session write failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to persist workspace selection" }, 500);
  }

  return c.json({ workspace_id: preferredWorkspaceId });
});
