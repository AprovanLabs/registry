/**
 * MCP sandbox execution tool (grant-enforcement §5, PRD capability
 * `sandbox-mcp-tool`): a sandboxed-TypeScript tool registered through the
 * generic `McpExtensions` hook — not a special case in `buildMcpServer`.
 *
 * Its `tools.<namespace>` calls dispatch through the same `Dispatcher` as
 * `call_tool`, so every call passes `resolveProfile` — the same predicate
 * that decides `permittedTools` for `list_tools`. A namespace hidden from
 * this caller's catalog is refused identically from inside a submitted
 * script (tech-plan D2): the tool globals are NOT filtered by grant — that
 * would be a second implementation of the same predicate — the gate is
 * dispatch, exactly as everywhere else.
 *
 * Resource-pattern checks (iw9-c) ride the same path: the sandbox forwards
 * a string `resource` arg into `DispatchOptions` and the Dispatcher runs
 * `assertResourceAccess` when a `resourceGrants` store is wired — one
 * extended predicate, not a second gate.
 *
 * Refuses to register when `authMode === "none"` (PRD D5): unauthenticated
 * arbitrary TypeScript with ambient tenant credentials is the vulnerability
 * this stream closes, so the tool must not exist in that mode at all — not
 * registered-and-erroring.
 */

import { finalizeCallContext } from "../dispatch/call-context.js";
import { runScriptInSandbox } from "../sandbox/quickjs.js";
import type { Dispatcher } from "../dispatch/index.js";
import type { ResolveDeps } from "../profiles/resolve.js";
import type { CallContext, McpExtensions, McpExtensionTool } from "../config/types.js";
import type { ResourceGrantStore } from "../storage/types.js";

export const SANDBOX_TOOL_NAME = "run_script";

export interface SandboxToolDeps {
  dispatcher: Dispatcher;
  resolveDeps: ResolveDeps;
  /**
   * Optional resource-grant store. When provided, it is passed through to
   * the shared dispatch predicate via `DispatchOptions` forwarding of
   * `resource` — the store itself must also be on `DispatcherDeps` for
   * enforcement (single chokepoint). Kept here so hosts compose the MCP
   * extension with the same store reference they give the Dispatcher.
   */
  resourceGrants?: ResourceGrantStore;
  /** Wall-clock budget applied when the caller omits `timeoutMs` (default 30_000). */
  defaultTimeoutMs?: number;
}

const SANDBOX_TOOL_SCHEMA: McpExtensionTool = {
  name: SANDBOX_TOOL_NAME,
  description:
    "Execute sandboxed TypeScript/JavaScript against your granted tool namespaces. Runs in " +
    "a WASM-isolated interpreter with no host access; `import x from \"namespace\"` binds a " +
    "namespace global and `export default async function run(input) { ... }` is the entrypoint " +
    "(bare top-level statements also run). Every tools.<namespace>.<operation>(args) call " +
    "dispatches through the same pipeline as call_tool — a namespace hidden from list_tools is " +
    "unreachable here too; listing it in `namespaces` does not grant it. Pass `narrowedTo` to " +
    "voluntarily run under a subset of your grant; a superset of your grant is rejected, never " +
    "silently clamped. Pass `resource` on an operation's args to scope resource-grant checks.",
  inputSchema: {
    type: "object",
    properties: {
      source: {
        type: "string",
        description: "ES-module-shaped script source.",
      },
      namespaces: {
        type: "array",
        items: { type: "string" },
        description:
          "Namespace globals to bind (e.g. [\"github\", \"sql\"]). Merely listing a namespace " +
          "does not grant it — dispatch still enforces this caller's grant per call.",
      },
      input: {
        description: "JSON-serializable trigger payload exposed as the `input` global.",
      },
      narrowedTo: {
        type: "array",
        items: { type: "string" },
        description:
          "Optional subset of this caller's granted providers to run under for this call only.",
      },
      timeoutMs: {
        type: "number",
        description: "Wall-clock budget for the run in milliseconds (default 30000).",
      },
    },
    required: ["source"],
  },
};

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string") : [];
}

/**
 * The `run_script` handler: narrows the call context (if requested), then
 * runs the guest exactly like the embedding `RegistryServer.runScript` API —
 * `tools.<namespace>` calls fold their single positional argument into the
 * operation's args object and dispatch through the shared pipeline.
 */
async function handleRunScript(
  deps: SandboxToolDeps,
  ctx: CallContext,
  args: Record<string, unknown>,
): Promise<{ content: Array<{ type: "text"; text: string }>; isError?: boolean }> {
  try {
    const source = typeof args["source"] === "string" ? args["source"] : "";
    if (!source) {
      return {
        isError: true,
        content: [{ type: "text", text: 'run_script requires a non-empty "source" string.' }],
      };
    }
    const namespaces = asStringArray(args["namespaces"]);
    const narrowedTo = "narrowedTo" in args ? asStringArray(args["narrowedTo"]) : undefined;
    const timeoutMs =
      typeof args["timeoutMs"] === "number" && args["timeoutMs"] > 0
        ? args["timeoutMs"]
        : deps.defaultTimeoutMs ?? 30_000;

    // Narrowing is validated once, up front — a superset of the caller's
    // grant is a 400 naming the offending entries (never a silent clamp),
    // enforced by the same helper the embedding `dispatch`/`runScript` API
    // uses (grant-enforcement §4).
    const scopedCtx = await finalizeCallContext(
      { authMode: deps.resolveDeps.authMode, profileService: deps.resolveDeps.profileService },
      narrowedTo ? { ...ctx, narrowedTo } : ctx,
    );

    const result = await runScriptInSandbox({
      source,
      input: args["input"] ?? null,
      namespaces,
      timeoutMs,
      log: () => undefined,
      dispatch: async (namespace, path, dispatchArgs, profile) => {
        // Positional args follow the SDK call convention: a single object
        // argument is the operation's named args (same fold as the
        // embedding runScript API — see server.ts).
        const argObject =
          dispatchArgs.length === 1 && typeof dispatchArgs[0] === "object" && dispatchArgs[0] !== null
            ? (dispatchArgs[0] as Record<string, unknown>)
            : dispatchArgs.length === 0
              ? {}
              : { args: dispatchArgs };
        // Forward resource into DispatchOptions so the shared
        // assertResourceAccess predicate (iw9-c) sees it — not a second gate.
        const resource =
          typeof argObject["resource"] === "string" ? (argObject["resource"] as string) : undefined;
        const dispatched = await deps.dispatcher.dispatch(
          scopedCtx,
          namespace,
          path,
          argObject,
          {
            ...(profile !== undefined ? { profile } : {}),
            ...(resource !== undefined ? { resource } : {}),
          },
        );
        if (dispatched.kind === "stream") return new Response(dispatched.stream).text();
        return dispatched.data;
      },
    });
    return { content: [{ type: "text", text: JSON.stringify(result ?? null) }] };
  } catch (err) {
    return {
      isError: true,
      content: [{ type: "text", text: err instanceof Error ? err.message : String(err) }],
    };
  }
}

/**
 * Builds the sandbox tool's `McpExtensions` contribution. Returns an empty
 * extension (no tool registered) when `authMode === "none"`.
 */
export function createSandboxMcpExtensions(deps: SandboxToolDeps): McpExtensions {
  if (deps.resolveDeps.authMode === "none") return {};
  return {
    tools: [SANDBOX_TOOL_SCHEMA],
    handleTool: (ctx, name, args) => {
      if (name !== SANDBOX_TOOL_NAME) throw new Error(`Unknown tool: ${name}`);
      return handleRunScript(deps, ctx, args);
    },
  };
}

/**
 * Composes the sandbox tool's extension with a host-supplied one, so the
 * host's own extensions (product-plane fs tools, prompts, …) keep working
 * unchanged. Both contribute tools to the same `list_tools`/`call` surface;
 * `handleTool` dispatches to whichever extension owns the requested name.
 */
export function withSandboxTool(deps: SandboxToolDeps, base?: McpExtensions): McpExtensions {
  const sandbox = createSandboxMcpExtensions(deps);
  if (!sandbox.tools || sandbox.tools.length === 0) return base ?? {};
  if (!base) return sandbox;

  const sandboxNames = new Set(sandbox.tools.map((tool) => tool.name));
  return {
    ...base,
    tools: [...(base.tools ?? []), ...sandbox.tools],
    handleTool: (ctx, name, args) => {
      if (sandboxNames.has(name)) return sandbox.handleTool!(ctx, name, args);
      if (!base.handleTool) throw new Error(`Unknown tool: ${name}`);
      return base.handleTool(ctx, name, args);
    },
  };
}
