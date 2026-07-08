/**
 * Invite-flow routes.
 *
 * POST   /invites                — admin only; create an invite and email the magic link
 * GET    /invites                — admin only; list pending invites for the workspace
 * DELETE /invites/:token         — admin only; revoke a pending invite
 * POST   /invites/:token/accept  — authenticated user (already signed in) accepts an invite
 *                                  to join a second workspace
 */

import { Hono } from "hono";
import { sendInviteEmail } from "../email.js";
import { consumeInvite, createInvite, listInvites, revokeInvite } from "../invites.js";
import { addUserToGroup } from "../groups.js";
import { putMembership } from "../memberships.js";
import {
  CognitoNotConfiguredError,
  requireAdmin,
  requireAuth,
  verifyAccessToken,
} from "../middleware/auth.js";

export const invitesRouter = new Hono();

// ---------------------------------------------------------------------------
// POST /invites — admin creates an invite
// ---------------------------------------------------------------------------

invitesRouter.post("/", requireAuth, requireAdmin, async (c) => {
  const principal = c.get("principal");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isCreateInviteInput(body)) {
    return c.json(
      {
        error:
          "Invalid input. Required: email (string). Optional: role (string), groupIds (string[])",
      },
      400,
    );
  }

  const { email, role = "member", groupIds = [] } = body as {
    email: string;
    role?: string;
    groupIds?: string[];
  };

  let invite;
  try {
    invite = await createInvite(
      principal.workspaceId,
      email,
      role,
      groupIds,
      principal.sub,
    );
  } catch (err) {
    process.stderr.write(
      `[gateway] createInvite failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to create invite" }, 500);
  }

  try {
    await sendInviteEmail({
      toEmail: email,
      inviteToken: invite.inviteToken,
    });
  } catch (err) {
    process.stderr.write(
      `[gateway] sendInviteEmail failed (non-fatal): ${err instanceof Error ? err.message : String(err)}\n`,
    );
    // Email failure is non-fatal — the admin can resend; return the invite record
    // so they can also share the token out-of-band in dev.
  }

  return c.json(
    {
      inviteToken: invite.inviteToken,
      email: invite.email,
      role: invite.role,
      groupIds: invite.groupIds,
      createdAt: invite.createdAt,
      expiresAt: invite.expiresAt,
    },
    201,
  );
});

// ---------------------------------------------------------------------------
// GET /invites — admin lists pending invites
// ---------------------------------------------------------------------------

invitesRouter.get("/", requireAuth, requireAdmin, async (c) => {
  const principal = c.get("principal");

  let invites;
  try {
    invites = await listInvites(principal.workspaceId);
  } catch (err) {
    process.stderr.write(
      `[gateway] listInvites failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to list invites" }, 500);
  }

  return c.json({
    invites: invites.map((i) => ({
      inviteToken: i.inviteToken,
      email: i.email,
      role: i.role,
      groupIds: i.groupIds,
      invitedBy: i.invitedBy,
      createdAt: i.createdAt,
      expiresAt: i.expiresAt,
    })),
  });
});

// ---------------------------------------------------------------------------
// DELETE /invites/:token — admin revokes a pending invite
// ---------------------------------------------------------------------------

invitesRouter.delete("/:token", requireAuth, requireAdmin, async (c) => {
  const principal = c.get("principal");
  const inviteToken = c.req.param("token") ?? "";

  let invite;
  try {
    const invites = await listInvites(principal.workspaceId);
    invite = invites.find((i) => i.inviteToken === inviteToken);
  } catch {
    // fall through — revokeInvite checks existence
  }

  if (!invite) {
    return c.json({ error: "Invite not found" }, 404);
  }

  const revoked = await revokeInvite(inviteToken);
  if (!revoked) {
    return c.json({ error: "Invite not found" }, 404);
  }
  return c.json({ revoked: true });
});

// ---------------------------------------------------------------------------
// POST /invites/:token/accept — signed-in user accepts an invite
//
// Called by the UI when a user who already has an account (and thus an active
// workspace) receives an invite to join a second workspace. The post-confirmation
// Lambda handles the equivalent step for brand-new sign-ups.
// ---------------------------------------------------------------------------

invitesRouter.post("/:token/accept", async (c) => {
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
    return c.json({ error: "Invalid or expired token" }, 401);
  }

  const inviteToken = c.req.param("token") ?? "";

  let invite;
  try {
    invite = await consumeInvite(inviteToken);
  } catch (err) {
    process.stderr.write(
      `[gateway] consumeInvite failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to consume invite" }, 500);
  }

  if (!invite) {
    return c.json({ error: "Invite not found or expired" }, 404);
  }

  try {
    await putMembership({
      workspaceId: invite.workspaceId,
      userSub,
      role: invite.role,
    });
  } catch (err) {
    process.stderr.write(
      `[gateway] putMembership failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to create workspace membership" }, 500);
  }

  for (const groupId of invite.groupIds) {
    try {
      await addUserToGroup(invite.workspaceId, groupId, userSub);
    } catch (err) {
      process.stderr.write(
        `[gateway] addUserToGroup(${groupId}) failed (non-fatal): ${err instanceof Error ? err.message : String(err)}\n`,
      );
    }
  }

  return c.json({
    workspaceId: invite.workspaceId,
    role: invite.role,
    groupIds: invite.groupIds,
  });
});

// ---------------------------------------------------------------------------
// Type guard
// ---------------------------------------------------------------------------

function isCreateInviteInput(
  v: unknown,
): v is { email: string; role?: string; groupIds?: string[] } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (typeof o["email"] !== "string" || o["email"].trim() === "") return false;
  if (o["role"] !== undefined && typeof o["role"] !== "string") return false;
  if (o["groupIds"] !== undefined) {
    if (!Array.isArray(o["groupIds"])) return false;
    if ((o["groupIds"] as unknown[]).some((g) => typeof g !== "string")) return false;
  }
  return true;
}
