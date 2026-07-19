/**
 * Public workflow entry points that don't ride Cognito auth:
 *
 *   POST /hooks/:workspaceId/:name        — external webhook trigger. Callers
 *     authenticate with the per-workflow hook token (X-Hook-Token header or
 *     ?token=), minted at registration. The request body becomes the run's
 *     `input`.
 *
 *   POST /hooks/cron/tick                 — scheduler tick: runs every cron
 *     workflow whose expression matches the current UTC minute, across all
 *     workspaces that have registrations. Invoked by EventBridge Scheduler in
 *     AWS (secured with CRON_TICK_SECRET) and by a local interval when the
 *     gateway runs as a long-lived server.
 */

import { Hono } from "hono";
import { cronMatches } from "../workflows/cron.js";
import { runWorkflow } from "../workflows/runner.js";
import {
  listRegistrations,
  readRegistration,
  workspacesWithCronWorkflows,
} from "../workflows/store.js";

export const hooksRouter = new Hono();

// ---------------------------------------------------------------------------
// Cron tick
// ---------------------------------------------------------------------------

export async function runCronTick(now = new Date()): Promise<{ ran: string[] }> {
  const ran: string[] = [];
  for (const workspaceId of await workspacesWithCronWorkflows()) {
    let registrations;
    try {
      registrations = await listRegistrations(workspaceId);
    } catch {
      continue;
    }
    for (const registration of registrations) {
      const cron = registration.triggers.cron;
      if (!cron) continue;
      let matches = false;
      try {
        matches = cronMatches(cron, now);
      } catch {
        continue; // invalid expression — registration validated it, but stay safe
      }
      if (!matches) continue;
      ran.push(`${workspaceId}/${registration.name}`);
      void runWorkflow({
        workspaceId,
        userId: registration.createdBy,
        registration,
        trigger: "cron",
        triggerDetail: cron,
        input: { firedAt: now.toISOString() },
      }).catch(() => undefined);
    }
  }
  return { ran };
}

hooksRouter.post("/cron/tick", async (c) => {
  const secret = process.env["CRON_TICK_SECRET"];
  if (secret && c.req.header("x-cron-secret") !== secret) {
    return c.json({ error: "Forbidden" }, 403);
  }
  const result = await runCronTick();
  return c.json(result);
});

// ---------------------------------------------------------------------------
// Webhook trigger
// ---------------------------------------------------------------------------

hooksRouter.post("/:workspaceId/:name", async (c) => {
  const workspaceId = c.req.param("workspaceId");
  const name = c.req.param("name");
  if (!workspaceId || !name) return c.json({ error: "Not found" }, 404);

  const registration = await readRegistration(workspaceId, name).catch(() => undefined);
  if (!registration?.triggers.webhook || !registration.hookToken) {
    return c.json({ error: "Not found" }, 404);
  }

  const token = c.req.header("x-hook-token") ?? c.req.query("token");
  if (token !== registration.hookToken) {
    return c.json({ error: "Forbidden" }, 403);
  }

  let body: unknown = null;
  try {
    body = await c.req.json();
  } catch {
    // Non-JSON bodies arrive as text.
    try {
      body = await c.req.text();
    } catch {
      body = null;
    }
  }

  const run = await runWorkflow({
    workspaceId,
    userId: registration.createdBy,
    registration,
    trigger: "webhook",
    input: body,
  });

  return c.json(
    {
      runId: run.id,
      status: run.status,
      durationMs: run.durationMs,
      result: run.result ?? null,
      error: run.error,
    },
    run.status === "failed" ? 500 : 200,
  );
});

/** Local scheduler for long-lived (non-Lambda) gateway processes. */
export function startLocalCronLoop(): () => void {
  const timer = setInterval(() => {
    void runCronTick().catch(() => undefined);
  }, 60_000);
  timer.unref?.();
  return () => clearInterval(timer);
}
