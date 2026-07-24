/**
 * What a published app may touch — the whitelisting story, stated once so
 * every surface (publish validation, the app tool proxy, the directory UI, the
 * generated SDK) reads it from the same place instead of hardcoding lists.
 *
 * There are exactly three ways an app reaches data:
 *
 *  1. **Native, auto-partitioned** — {@link NATIVE_APP_NAMESPACES}. First-party
 *     namespaces whose storage is automatically partitioned per (app, app
 *     user) and rate-limited per user. No credential, no workspace membership.
 *  2. **Workspace-credentialed** — a provider namespace (`github`, `linear`, …)
 *     executing with a workspace's credential. NEVER reachable from an app
 *     session's tool proxy: an app session is not a workspace member.
 *  3. **Exported workflows** — everything else. A workflow is the BFF boundary:
 *     allow-listed by name, traced, rate-limited, and the only place a secret
 *     is ever near an app request. Exported workflows are callable as
 *     `POST /tools/app/<workflow>` — at the call site a workflow and a native
 *     procedure are indistinguishable (capability = namespace).
 *
 * `allowedTools` may therefore only name (1) and the app's own workflow
 * namespace; {@link assertAllowedTools} rejects everything else with a message
 * pointing at (3).
 */

import { ServiceError } from "../service-kernel.js";
import { DEFAULT_DAILY_CALLS } from "./usage.js";
import type { AppManifest } from "./store.js";

/** The auto-partitioned first-party namespaces an app session may call. */
export const NATIVE_APP_NAMESPACES = ["vfs", "keyvalue", "events"] as const;

export type NativeAppNamespace = (typeof NATIVE_APP_NAMESPACES)[number];

/**
 * Namespace an app's exported workflows answer on. `app` is canonical (an app
 * calls its own workflow as `app.weeklySummary(...)`); `workflow` is accepted
 * as a synonym in allow-list entries and on the wire so a manifest that spells
 * it out long-form keeps working.
 */
export const APP_WORKFLOW_NAMESPACE = "app";
const WORKFLOW_NAMESPACE_ALIASES = new Set([APP_WORKFLOW_NAMESPACE, "workflow"]);

export function isNativeNamespace(namespace: string): namespace is NativeAppNamespace {
  return (NATIVE_APP_NAMESPACES as readonly string[]).includes(namespace);
}

export function isWorkflowNamespace(namespace: string): boolean {
  return WORKFLOW_NAMESPACE_ALIASES.has(namespace);
}

/**
 * `weekly-summary` → `weeklySummary`. Workflow names are kebab-case ids; the
 * SDK and the tool proxy also answer to the camel-case spelling so
 * `app.weeklySummary(input)` reads like an ordinary method call.
 */
export function camelCase(name: string): string {
  return name.replace(/-([a-z0-9])/gu, (_, ch: string) => ch.toUpperCase());
}

/**
 * Resolve a requested procedure to one of the app's exported workflow names,
 * accepting either the kebab-case id or its camel-case alias.
 */
export function resolveExportedWorkflow(
  workflows: readonly string[],
  requested: string,
): string | undefined {
  return workflows.find((name) => name === requested || camelCase(name) === requested);
}

// ---------------------------------------------------------------------------
// Native capability descriptors
// ---------------------------------------------------------------------------

export interface NativeCapabilityPartitioning {
  /**
   * "per-app-user" — owner-hosted apps: every app user gets a private
   * partition inside the app folder of the publishing workspace.
   * "per-workspace" — `dataScope: "workspace"` apps: the caller's own
   * workspace holds the data, so there is nobody else to partition against.
   */
  mode: "per-app-user" | "per-workspace";
  /** Where a write physically lands, as a path template. */
  path: string;
  description: string;
}

export interface NativeCapability {
  namespace: NativeAppNamespace;
  description: string;
  /** Procedures reachable in this app (allow-list filtered). */
  procedures: string[];
  partitioning: NativeCapabilityPartitioning;
  /** Effective per-app-user limits for this app. */
  rateLimit: { rps: number; burst: number; daily: number };
}

interface NativeSpec {
  description: string;
  procedures: string[];
  /** `<root>` is substituted with the app's data root at describe time. */
  ownerPath: string;
  workspacePath: string;
  partitionNote: string;
}

const NATIVE_SPECS: Record<NativeAppNamespace, NativeSpec> = {
  vfs: {
    description:
      "The app's own folder as a filesystem. Relative paths resolve under the app root; `~/<path>` reaches another declared prefix or a workspace share.",
    procedures: ["list", "read", "write", "delete"],
    ownerPath: "<root>/",
    workspacePath: "<prefix>/",
    partitionNote:
      "Reads and writes are confined to the app's declared prefixes; the data partition is never served over HTTP.",
  },
  keyvalue: {
    description: "Per-user JSON key/value storage, co-located with the app.",
    procedures: ["get", "set", "delete", "list"],
    ownerPath: "<root>/data/<appUser>/<key>",
    workspacePath: "<prefix>/data/<key>",
    partitionNote:
      "Keys are transparently namespaced — an app user can only ever read and write their own partition.",
  },
  events: {
    description:
      "Named event channels. Emissions trigger the workspace's subscribed workflows (depth-capped).",
    procedures: ["emit", "list"],
    ownerPath: ".services/events/<channel>.jsonl (owning workspace)",
    workspacePath: ".services/events/<channel>.jsonl (caller workspace)",
    partitionNote:
      "Channels are workspace-wide: emissions are visible to the workspace that hosts the app's data.",
  },
};

/** Does the manifest's allow-list permit `namespace.procedure`? */
function allowListPermits(manifest: AppManifest, namespace: string, procedure: string): boolean {
  const exact = `${namespace}.${procedure}`;
  return manifest.allowedTools.some((entry) => entry === exact || entry === `${namespace}.*`);
}

/** The app's effective per-user rate limits (manifest values or the defaults). */
export function effectiveRateLimit(manifest: AppManifest): {
  rps: number;
  burst: number;
  daily: number;
} {
  return {
    rps: manifest.rateLimit?.rps ?? 5,
    burst: manifest.rateLimit?.burst ?? 10,
    daily: manifest.rateLimit?.daily ?? DEFAULT_DAILY_CALLS,
  };
}

/**
 * The native half of `apps.capabilities`: one descriptor per allow-listed
 * native namespace, with the procedures this app may actually call and where
 * its data lands under the manifest's `dataScope`.
 */
export function nativeCapabilities(manifest: AppManifest): NativeCapability[] {
  const workspaceScoped = (manifest.dataScope ?? "owner") === "workspace";
  const root = manifest.paths?.[0] ?? `apps/${manifest.name}`;
  const rateLimit = effectiveRateLimit(manifest);

  const capabilities: NativeCapability[] = [];
  for (const namespace of NATIVE_APP_NAMESPACES) {
    const spec = NATIVE_SPECS[namespace];
    const procedures = spec.procedures.filter((procedure) =>
      allowListPermits(manifest, namespace, procedure),
    );
    if (procedures.length === 0) continue;
    capabilities.push({
      namespace,
      description: spec.description,
      procedures,
      partitioning: {
        mode: workspaceScoped ? "per-workspace" : "per-app-user",
        path: workspaceScoped
          ? spec.workspacePath.replace("<prefix>", "<installPrefix>")
          : spec.ownerPath.replace("<root>", root),
        description: workspaceScoped
          ? `Data lives in the caller's own workspace under the install prefix. ${spec.partitionNote}`
          : `Data lives in the publishing workspace, inside the app's folder. ${spec.partitionNote}`,
      },
      rateLimit,
    });
  }
  return capabilities;
}

// ---------------------------------------------------------------------------
// Publish validation
// ---------------------------------------------------------------------------

const ENTRY_RE = /^([\w-]+)\.(\*|[\w.-]+)$/u;

/**
 * Validate an `allowed_tools` list against the three-ways-to-reach-data rule.
 * A provider namespace is rejected with the escape hatch spelled out, because
 * "add github.* to allowed_tools" is exactly the mistake this model exists to
 * prevent: an app session holds no workspace membership, so a provider call
 * from one would have to borrow the owner's credential with no audited
 * boundary. A workflow *is* that boundary.
 */
export function assertAllowedTools(
  entries: string[],
  context: { app: string; workflows: readonly string[] },
): void {
  for (const entry of entries) {
    const match = ENTRY_RE.exec(entry);
    if (!match) {
      throw new ServiceError(
        `allowed_tools entry "${entry}" must be 'namespace.procedure' or 'namespace.*'`,
        400,
      );
    }
    const namespace = match[1]!;
    const procedure = match[2]!;
    if (isNativeNamespace(namespace)) continue;
    if (isWorkflowNamespace(namespace)) {
      if (procedure === "*") continue;
      if (resolveExportedWorkflow(context.workflows, procedure)) continue;
      throw new ServiceError(
        `allowed_tools entry "${entry}" names a workflow ${context.app} does not export. ` +
          `Add "${procedure}" to this app's \`workflows\` list first ` +
          `(exported: ${context.workflows.length > 0 ? context.workflows.join(", ") : "none"}).`,
        400,
      );
    }
    throw new ServiceError(
      `allowed_tools entry "${entry}" is not reachable from an app session: "${namespace}" is neither a native namespace ` +
        `(${NATIVE_APP_NAMESPACES.join(", ")}) nor this app's workflow namespace ("${APP_WORKFLOW_NAMESPACE}.*"). ` +
        `App sessions hold no workspace membership, so provider credentials are never exposed to them directly — ` +
        `export a workflow that calls ${namespace} (register it, list it in \`workflows\`), and the app calls it as ` +
        `"${APP_WORKFLOW_NAMESPACE}.<workflow>".`,
      400,
    );
  }
}

/**
 * May an app session call the exported workflow `name`? The export list
 * (`manifest.workflows`) is the grant. A manifest that *also* spells workflow
 * entries out in `allowedTools` narrows further — explicit narrowing wins over
 * the blanket export.
 */
export function workflowCallable(manifest: AppManifest, name: string): boolean {
  if (!(manifest.workflows ?? []).includes(name)) return false;
  const entries = manifest.allowedTools.filter((entry) =>
    isWorkflowNamespace(entry.slice(0, entry.indexOf("."))),
  );
  if (entries.length === 0) return true;
  const aliases = new Set([name, camelCase(name)]);
  return entries.some((entry) => {
    const procedure = entry.slice(entry.indexOf(".") + 1);
    return procedure === "*" || aliases.has(procedure);
  });
}
