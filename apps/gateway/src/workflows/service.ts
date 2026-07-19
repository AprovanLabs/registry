/**
 * `workflows` core service — registration and operation of workspace
 * workflows as ordinary gateway tools. Because it is a core service, the
 * whole surface appears in tool discovery automatically: the chat model,
 * widgets, and scripts can register, inspect, trigger, and trace workflows
 * with no bespoke client code.
 */

import { ServiceError, type CoreService } from "../services.js";
import { runWorkflowByName } from "./runner.js";
import {
  listRegistrations,
  listRuns,
  readRegistration,
  readRun,
  removeRegistration,
  saveRegistration,
  updateCronIndex,
  workflowName,
  type WorkflowRegistration,
  type WorkflowTriggers,
} from "./store.js";
import { parseCron } from "./cron.js";

function parseTriggers(raw: unknown): WorkflowTriggers {
  if (raw === undefined || raw === null) return { manual: true };
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ServiceError("triggers must be an object", 400);
  }
  const value = raw as Record<string, unknown>;
  const triggers: WorkflowTriggers = { manual: true };
  if (typeof value["cron"] === "string" && value["cron"].trim()) {
    parseCron(value["cron"]); // validates
    triggers.cron = value["cron"].trim();
  }
  if (value["webhook"] === true) triggers.webhook = true;
  if (Array.isArray(value["events"])) {
    const channels = value["events"].filter(
      (channel): channel is string => typeof channel === "string" && channel.length > 0,
    );
    if (channels.length > 0) triggers.events = channels;
  }
  return triggers;
}

/** Public webhook URL path for a registered workflow. */
export function hookPath(workspaceId: string, name: string): string {
  return `/hooks/${workspaceId}/${name}`;
}

function summarize(registration: WorkflowRegistration, workspaceId: string) {
  return {
    name: registration.name,
    description: registration.description,
    scriptPath: registration.scriptPath,
    triggers: registration.triggers,
    webhookPath: registration.triggers.webhook ? hookPath(workspaceId, registration.name) : undefined,
    createdBy: registration.createdBy,
    updatedAt: registration.updatedAt,
  };
}

export const workflowsService: CoreService = {
  tools: [
    {
      name: "workflows.register",
      operation: "register",
      description:
        "Register (or update) a workspace workflow: a script that runs on demand, on a cron schedule, on a webhook, or when events fire. The script is a workspace file of plain async JavaScript with tool namespaces (github, events, keyvalue, …) available as globals and the trigger payload as `input`.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Workflow id (kebab-case)" },
          script_path: { type: "string", description: "Workspace path of the script, e.g. workflows/daily-report.js" },
          description: { type: "string" },
          triggers: {
            type: "object",
            description: "How the workflow runs",
            properties: {
              cron: { type: "string", description: "5-field cron (UTC), e.g. '0 13 * * 1-5'" },
              webhook: { type: "boolean", description: "Expose a tokened webhook endpoint" },
              events: { type: "array", items: { type: "string" }, description: "Event channels that trigger a run" },
            },
          },
        },
        required: ["name", "script_path"],
      },
    },
    {
      name: "workflows.list",
      operation: "list",
      description: "List registered workflows with their triggers (cron/webhook/events).",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "workflows.get",
      operation: "get",
      description: "Get a workflow's registration, webhook path, and recent runs.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "workflows.remove",
      operation: "remove",
      description: "Delete a workflow registration and its run history.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "workflows.run",
      operation: "run",
      description:
        "Run a workflow now with an optional input payload. Returns the run record: status, result, logs, and one span per tool call.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, input: {} },
        required: ["name"],
      },
    },
    {
      name: "workflows.runs",
      operation: "runs",
      description: "List recent runs of a workflow (newest first).",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, limit: { type: "number" } },
        required: ["name"],
      },
    },
    {
      name: "workflows.trace",
      operation: "trace",
      description: "Full trace of one run: input, result, logs, and per-tool-call spans.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, run_id: { type: "string" } },
        required: ["name", "run_id"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    switch (procedure) {
      case "register": {
        const name = workflowName(args["name"]);
        const scriptPath = typeof args["script_path"] === "string" ? args["script_path"] : "";
        if (!scriptPath) throw new ServiceError("script_path is required", 400);
        const existing = await readRegistration(ctx.workspaceId, name);
        const triggers = parseTriggers(args["triggers"]);
        const now = new Date().toISOString();
        const registration: WorkflowRegistration = {
          name,
          description: typeof args["description"] === "string" ? args["description"] : existing?.description,
          scriptPath,
          triggers,
          // Webhook token survives re-registration so external callers keep working.
          hookToken: triggers.webhook
            ? (existing?.hookToken ?? crypto.randomUUID().replace(/-/g, ""))
            : undefined,
          createdBy: existing?.createdBy ?? ctx.userId,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        };
        await saveRegistration(ctx.workspaceId, registration);
        await updateCronIndex(ctx.workspaceId);
        return {
          ...summarize(registration, ctx.workspaceId),
          hookToken: registration.hookToken,
        };
      }
      case "list": {
        const registrations = await listRegistrations(ctx.workspaceId);
        return {
          workflows: registrations.map((registration) => summarize(registration, ctx.workspaceId)),
        };
      }
      case "get": {
        const name = workflowName(args["name"]);
        const registration = await readRegistration(ctx.workspaceId, name);
        if (!registration) throw new ServiceError(`Unknown workflow: ${name}`, 404);
        const runs = await listRuns(ctx.workspaceId, name, 10);
        return {
          ...summarize(registration, ctx.workspaceId),
          hookToken: registration.hookToken,
          runs: runs.map((run) => ({
            id: run.id,
            trigger: run.trigger,
            status: run.status,
            startedAt: run.startedAt,
            durationMs: run.durationMs,
            error: run.error,
          })),
        };
      }
      case "remove": {
        const name = workflowName(args["name"]);
        const removed = await removeRegistration(ctx.workspaceId, name);
        await updateCronIndex(ctx.workspaceId);
        return { name, removed };
      }
      case "run": {
        const name = workflowName(args["name"]);
        return runWorkflowByName(ctx, name, "manual", args["input"], ctx.userId);
      }
      case "runs": {
        const name = workflowName(args["name"]);
        const limit = Math.min(Number(args["limit"]) || 20, 100);
        const runs = await listRuns(ctx.workspaceId, name, limit);
        return {
          name,
          runs: runs.map((run) => ({
            id: run.id,
            trigger: run.trigger,
            triggerDetail: run.triggerDetail,
            status: run.status,
            startedAt: run.startedAt,
            durationMs: run.durationMs,
            error: run.error,
            spanCount: run.spans.length,
          })),
        };
      }
      case "trace": {
        const name = workflowName(args["name"]);
        const runId = typeof args["run_id"] === "string" ? args["run_id"] : "";
        const run = await readRun(ctx.workspaceId, name, runId);
        if (!run) throw new ServiceError(`Unknown run: ${name}/${runId}`, 404);
        return run;
      }
      default:
        throw new ServiceError(`Unknown workflows procedure: ${procedure}`, 404);
    }
  },
};
