/**
 * Generic interfaces — virtual tool namespaces a workspace binds to a
 * concrete provider + credential.
 *
 * Many APIs implement a subset of another (OpenAI-compatible LLM servers,
 * S3-compatible object stores). An *interface* names that common surface
 * (`llm`, `objectstore`, …); *compat entries* list which registry providers
 * implement it and how to reach them (executor module + base URL + option
 * defaults); a *workspace binding* (`.services/bindings.json`) picks the
 * implementation. Callers use one stable namespace —
 *
 *   await llm.createChatCompletion({ messages });
 *
 * — and swapping OpenAI for Anthropic (or Synthetic) is a binding change,
 * not a code change. Credentials stay keyed by the concrete provider id, so
 * the registry credentials page and the gateway credential store line up.
 *
 * Zero-config: with no explicit binding, an interface resolves to the first
 * compat provider that has a workspace credential.
 */

import { getFsStore } from "./fs-store.js";
import { getCredentialStore } from "./credentials.js";
import { listLlmProviders } from "./llm.js";
import { ServiceError } from "./service-kernel.js";

const BINDINGS_PATH = ".services/bindings.json";

export interface InterfaceCompat {
  /** Registry provider id (also the credential-store key). */
  provider: string;
  label: string;
  /** UTDK module that executes operations for this implementation. */
  module: string;
  /**
   * Import specifier when the module is not in the UTDK catalogue — a
   * first-party implementation of a public contract. `module` still names the
   * client factory; this only changes where it is loaded from.
   */
  moduleSpecifier?: string;
  /** API root override; undefined = the module's own spec server. */
  baseUrl?: string;
  /** Option defaults applied when the call omits them (e.g. model). */
  defaults?: Record<string, unknown>;
}

export interface InterfaceDef {
  id: string;
  label: string;
  description: string;
  /** Per-call timeout for operations dispatched through this interface. */
  timeoutMs: number;
  /**
   * Operations that receive the binding's option defaults as missing args
   * (e.g. `model` on createChatCompletion). Other operations get caller args
   * untouched.
   */
  defaultsFor: string[];
  compat: InterfaceCompat[];
}

export interface InterfaceBinding {
  provider: string;
  /** Option overrides merged over the compat entry's defaults (e.g. model). */
  options?: Record<string, unknown>;
}

interface BindingsFile {
  bindings?: Record<string, InterfaceBinding>;
}

/**
 * The interface catalog. `llm` rides the OpenAI-compatible chat surface —
 * its compat list IS the chat-provider registry (src/llm.ts), so the chat
 * picker and the interface stay in lockstep. Further interfaces
 * (objectstore/S3-compat, sql warehouses) add entries here as their
 * providers land in the registry.
 */
export function listInterfaces(): InterfaceDef[] {
  return [
    {
      id: "llm",
      label: "LLM",
      description:
        "OpenAI-compatible chat completions. Bind to any connected LLM provider; scripts call llm.createChatCompletion / llm.listModels.",
      timeoutMs: 120_000,
      defaultsFor: ["createChatCompletion"],
      compat: listLlmProviders().map((provider) => ({
        provider: provider.id,
        label: provider.label,
        module: provider.module,
        baseUrl: provider.baseUrl,
        defaults: { model: provider.defaultModel },
      })),
    },
    {
      id: "sql",
      label: "SQL",
      description:
        "Uniform SQL queries over relational backends; scripts call sql.query({ sql, params }). " +
        "Each backend is a handwritten UTDK provider module built on @utdk/sql. " +
        "Secrets live in the provider credential (Snowflake/Databricks token, Postgres connection string); " +
        "connection config (account, host, warehouse_id, database) rides the binding options.",
      timeoutMs: 60_000,
      defaultsFor: ["query"],
      compat: [
        { provider: "postgres", label: "PostgreSQL", module: "postgres" },
        { provider: "snowflake", label: "Snowflake", module: "snowflake" },
        { provider: "databricks", label: "Databricks", module: "databricks" },
      ],
    },
    {
      id: "sandbox",
      label: "Sandbox",
      description:
        "Execution environments with a filesystem and a shell: create/exec/read/write/list against any connected sandbox host. " +
        "Each backend is a handwritten UTDK provider module built on @utdk/sandbox. " +
        "Secrets live in the provider credential (API token, or a local host's client token); " +
        "the API root, default image and region ride the binding options. " +
        "Workspace-facing mounting, sync and commit live in the `sandboxes` core service — see docs/sandboxes.md.",
      // Sandbox work is slow by nature (installs, builds, test suites), and
      // the driver's own deadline is the caller's `timeoutMs`. This is the
      // outer bound the gateway will wait for a single operation.
      timeoutMs: 300_000,
      // Only `create` takes binding defaults: image, region and resources are
      // workspace policy, while exec/file args are always the caller's.
      defaultsFor: ["create"],
      compat: [
        {
          provider: "machine",
          label: "Registered machine",
          module: "machine",
          // First-party: a laptop has no vendor, so it is not in utdk/*.
          moduleSpecifier: "@aprovan/sandbox-host",
        },
        { provider: "fly/sprites", label: "fly.io Sprites", module: "fly/sprites" },
        {
          provider: "cloudflare/sandbox",
          label: "Cloudflare Sandbox",
          module: "cloudflare/sandbox",
        },
      ],
    },
  ];
}

export function resolveInterface(id: string): InterfaceDef | undefined {
  return listInterfaces().find((def) => def.id === id);
}

export function isInterface(id: string): boolean {
  return listInterfaces().some((def) => def.id === id);
}

export async function readBindings(
  workspaceId: string,
): Promise<Record<string, InterfaceBinding>> {
  const file = await getFsStore().read(workspaceId, BINDINGS_PATH);
  if (!file) return {};
  try {
    return (JSON.parse(file.content) as BindingsFile).bindings ?? {};
  } catch {
    return {};
  }
}

export async function writeBinding(
  workspaceId: string,
  interfaceId: string,
  binding: InterfaceBinding | null,
): Promise<void> {
  const bindings = await readBindings(workspaceId);
  if (binding) {
    bindings[interfaceId] = binding;
  } else {
    delete bindings[interfaceId];
  }
  await getFsStore().write(
    workspaceId,
    BINDINGS_PATH,
    JSON.stringify({ bindings }, null, 2),
    "application/json",
  );
}

export interface ResolvedInterface {
  def: InterfaceDef;
  compat: InterfaceCompat;
  /** compat defaults merged with binding option overrides, minus `baseUrl`. */
  options: Record<string, unknown>;
  /**
   * API root for the executing module: the binding's `baseUrl` option, else
   * the compat entry's. Some implementations have no vendor-hosted endpoint
   * at all — a Cloudflare sandbox Worker, a local host relay — so where the
   * API lives is workspace configuration, not a property of the provider.
   */
  baseUrl?: string;
  /** Whether an explicit binding chose this implementation. */
  bound: boolean;
}

/**
 * Split the merged option bag into the API root and the option defaults that
 * get folded into call arguments. `baseUrl` is transport, not an argument —
 * passing it through as one would put it in every `defaultsFor` operation's
 * args.
 */
function splitOptions(
  compat: InterfaceCompat,
  merged: Record<string, unknown>,
): { options: Record<string, unknown>; baseUrl?: string } {
  const { baseUrl, ...options } = merged;
  const resolved = typeof baseUrl === "string" && baseUrl ? baseUrl : compat.baseUrl;
  return { options, ...(resolved ? { baseUrl: resolved } : {}) };
}

/**
 * Resolve an interface to its concrete implementation for a workspace:
 * caller override first (e.g. a workflow registration's `bindings`), then
 * the workspace binding, else the first compat provider with a credential.
 */
export async function resolveInterfaceForWorkspace(
  workspaceId: string,
  interfaceId: string,
  overrideProvider?: string,
): Promise<ResolvedInterface> {
  const def = resolveInterface(interfaceId);
  if (!def) throw new ServiceError(`Unknown interface: ${interfaceId}`, 404);

  if (overrideProvider) {
    const compat = def.compat.find((entry) => entry.provider === overrideProvider);
    if (!compat) {
      throw new ServiceError(
        `${overrideProvider} does not implement ${interfaceId}. Compatible: ${def.compat.map((c) => c.provider).join(", ")}`,
        400,
      );
    }
    // Workspace binding options still apply when they target the same
    // provider (e.g. a model choice for the overridden provider).
    const workspaceBinding = (await readBindings(workspaceId))[interfaceId];
    const merged =
      workspaceBinding?.provider === overrideProvider
        ? { ...compat.defaults, ...workspaceBinding.options }
        : { ...compat.defaults };
    return { def, compat, ...splitOptions(compat, merged), bound: true };
  }

  const binding = (await readBindings(workspaceId))[interfaceId];
  if (binding) {
    const compat = def.compat.find((entry) => entry.provider === binding.provider);
    if (!compat) {
      throw new ServiceError(
        `Interface ${interfaceId} is bound to ${binding.provider}, which does not implement it`,
        400,
      );
    }
    return {
      def,
      compat,
      ...splitOptions(compat, { ...compat.defaults, ...binding.options }),
      bound: true,
    };
  }

  const credentials = await getCredentialStore().list(workspaceId);
  const connected = new Set(credentials.map((credential) => credential.provider));
  const compat = def.compat.find((entry) => connected.has(entry.provider));
  if (!compat) {
    throw new ServiceError(
      `Interface ${interfaceId} has no binding and no connected compatible provider. ` +
        `Connect a credential for one of: ${def.compat.map((c) => c.provider).join(", ")} — or bind one with interfaces.bind.`,
      400,
    );
  }
  return { def, compat, ...splitOptions(compat, { ...compat.defaults }), bound: false };
}
