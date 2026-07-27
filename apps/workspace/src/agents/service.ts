/**
 * `agents` core service — named agent profiles (docs/telemetry-and-agents.md).
 *
 * An agent is configuration, not code: which LLM to use, what system prompt
 * to run with, and — the important part — a {@link CapabilityGrants} bounding
 * what its runs may touch: tool patterns (native + provider SDKs) and
 * workspace-VFS path prefixes with ro/rw access.
 *
 * Profiles live at `.services/agents/<name>.json` on the workspace FS (same
 * plane as workflow registrations — versioned, syncable, inspectable). The
 * workflow runner resolves a profile when a run is agent-attributed
 * (`workflows.run {name, agent}` or a registration's `agent` field), pins the
 * run's ServiceContext to the profile's grants, and exposes the profile to
 * the script as the `agent` global. Isolation composes with VCS: grants
 * bound what a run *can* touch, its draft session bounds what it *does*
 * touch until someone applies it.
 */

import { getFsStore } from "../fs-store.js";
import { parseGrants, type CapabilityGrants } from "../grants.js";
import { ServiceError, type CoreService } from "../service-kernel.js";

const AGENTS_DIR = ".services/agents";
const NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export interface AgentProfile {
  name: string;
  title?: string;
  /** LLM provider id (synthetic.new, openai, …) the agent's runs should use. */
  provider?: string;
  model?: string;
  /** System prompt for the agent's LLM calls. */
  prompt?: string;
  grants?: CapabilityGrants;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

function profilePath(name: string): string {
  return `${AGENTS_DIR}/${name}.json`;
}

export async function readAgentProfile(
  workspaceId: string,
  name: string,
): Promise<AgentProfile | undefined> {
  if (!NAME_RE.test(name)) return undefined;
  const file = await getFsStore().read(workspaceId, profilePath(name));
  if (!file) return undefined;
  try {
    return JSON.parse(file.content) as AgentProfile;
  } catch {
    return undefined;
  }
}

function optionalString(value: unknown, cap: number): string | undefined {
  return typeof value === "string" && value.trim() ? value.slice(0, cap) : undefined;
}

export const agentsService: CoreService = {
  tools: [
    {
      name: "agents.create",
      operation: "create",
      description:
        'Create a named agent profile: {name, title?, provider?, model?, prompt?, grants?}. grants bound what the agent\'s runs may touch: {tools: ["keyvalue.*", "github.repos.*"], paths: [{prefix: "docs/", access: "rw"}]} — tools not listed and paths not covered are denied (absent axes stay permissive). Run a workflow as an agent with workflows.run {name, agent}.',
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          title: { type: "string" },
          provider: { type: "string" },
          model: { type: "string" },
          prompt: { type: "string" },
          grants: { type: "object" },
        },
        required: ["name"],
      },
    },
    {
      name: "agents.update",
      operation: "update",
      description:
        "Update an agent profile (same fields as create; provided fields replace, others keep). Pass grants: null to clear the grants.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          title: { type: "string" },
          provider: { type: "string" },
          model: { type: "string" },
          prompt: { type: "string" },
          grants: {},
        },
        required: ["name"],
      },
    },
    {
      name: "agents.get",
      operation: "get",
      description: "Read one agent profile by name.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "agents.list",
      operation: "list",
      description: "List the workspace's agent profiles.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "agents.delete",
      operation: "delete",
      description: "Delete an agent profile.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "agents.runs",
      operation: "runs",
      description:
        "Recent agent-attributed workflow executions, newest first: {id, workflow, agent, status, trigger, startedAt, durationMs, error?, traceId}. Filter with name (one agent) and limit. Full run detail lives behind workflows.trace {run}.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, limit: { type: "number" } },
      },
    },
  ],

  async call(ctx, procedure, args) {
    // Agent profiles are workspace configuration — app sessions never manage
    // them (an app could otherwise mint itself a wide grant).
    if (ctx.appScope) {
      if (procedure === "get" || procedure === "list" || procedure === "runs") {
        // Reads are harmless (grants only narrow), and let app workflows
        // resolve an assignee's provider/model/prompt and show executions.
      } else {
        throw new ServiceError("Apps cannot manage agent profiles", 403);
      }
    }
    const store = getFsStore();
    switch (procedure) {
      case "create":
      case "update": {
        const name = typeof args["name"] === "string" ? args["name"] : "";
        if (!NAME_RE.test(name)) {
          throw new ServiceError(
            "name must be lowercase letters/digits/hyphens (max 64 chars)",
            400,
          );
        }
        const existing = await readAgentProfile(ctx.workspaceId, name);
        if (procedure === "create" && existing) {
          throw new ServiceError(`Agent "${name}" already exists`, 409);
        }
        if (procedure === "update" && !existing) {
          throw new ServiceError(`Unknown agent: ${name}`, 404);
        }
        const now = new Date().toISOString();
        const profile: AgentProfile = {
          name,
          title: optionalString(args["title"], 120) ?? existing?.title,
          provider: optionalString(args["provider"], 100) ?? existing?.provider,
          model: optionalString(args["model"], 100) ?? existing?.model,
          prompt: optionalString(args["prompt"], 8000) ?? existing?.prompt,
          grants:
            args["grants"] === null
              ? undefined
              : args["grants"] !== undefined
                ? parseGrants(args["grants"])
                : existing?.grants,
          createdBy: existing?.createdBy ?? ctx.userId,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        };
        await store.write(
          ctx.workspaceId,
          profilePath(name),
          JSON.stringify(profile, null, 2),
          "application/json",
        );
        return { agent: profile };
      }

      case "get": {
        const name = typeof args["name"] === "string" ? args["name"] : "";
        const profile = await readAgentProfile(ctx.workspaceId, name);
        if (!profile) throw new ServiceError(`Unknown agent: ${name}`, 404);
        return { agent: profile };
      }

      case "list": {
        const entries = await store.list(ctx.workspaceId, AGENTS_DIR);
        const agents: AgentProfile[] = [];
        for (const entry of entries) {
          if (!entry.path.endsWith(".json")) continue;
          const file = await store.read(ctx.workspaceId, entry.path);
          if (!file) continue;
          try {
            agents.push(JSON.parse(file.content) as AgentProfile);
          } catch {
            // Skip malformed profiles rather than failing the listing.
          }
        }
        agents.sort((a, b) => a.name.localeCompare(b.name));
        return { agents };
      }

      case "delete": {
        const name = typeof args["name"] === "string" ? args["name"] : "";
        if (!NAME_RE.test(name)) throw new ServiceError(`Unknown agent: ${name}`, 404);
        const removed = await store.remove(ctx.workspaceId, profilePath(name));
        if (!removed) throw new ServiceError(`Unknown agent: ${name}`, 404);
        return { deleted: name };
      }

      case "runs": {
        const name = typeof args["name"] === "string" && args["name"] ? args["name"] : undefined;
        const limit = Math.min(Number(args["limit"]) || 50, 100);
        const { listRegistrations, listRuns } = await import("../workflows/store.js");
        const registrations = await listRegistrations(ctx.workspaceId).catch(() => []);
        const runs: Array<{
          id: string;
          workflow: string;
          agent: string;
          status: string;
          trigger: string;
          startedAt: string;
          durationMs?: number;
          error?: string;
          traceId?: string;
        }> = [];
        for (const registration of registrations) {
          const recent = await listRuns(ctx.workspaceId, registration.name, 25).catch(() => []);
          for (const run of recent) {
            if (!run.agent) continue;
            if (name && run.agent !== name) continue;
            runs.push({
              id: run.id,
              workflow: run.workflow,
              agent: run.agent,
              status: run.status,
              trigger: run.trigger,
              startedAt: run.startedAt,
              ...(run.durationMs !== undefined ? { durationMs: run.durationMs } : {}),
              ...(run.error ? { error: run.error } : {}),
              ...(run.traceId ? { traceId: run.traceId } : {}),
            });
          }
        }
        runs.sort((a, b) => b.startedAt.localeCompare(a.startedAt));
        return { runs: runs.slice(0, limit) };
      }

      default:
        throw new ServiceError(`Unknown agents procedure: ${procedure}`, 404);
    }
  },
};
