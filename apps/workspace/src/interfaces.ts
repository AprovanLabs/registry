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
 *
 * ## Instances
 *
 * One binding per interface is enough to answer "which LLM does this
 * workspace use", and not enough for anything else: a workspace with a
 * production database and an analytics warehouse needs *both* bound to `sql`
 * at once, and two accounts on one provider need two credentials. So a
 * binding is keyed by an **instance name**, not by the interface id:
 *
 *   sql              → the default instance (what `sql.query` reaches)
 *   sql:analytics    → a second, independently bound implementation
 *   sql:warehouse    → a third
 *
 * Each instance is (interface, provider, credential, options), and each is a
 * namespace of its own — `sql:analytics.query` appears in tool discovery, in
 * the services menu, and as a workflow script import next to `sql.query`. The
 * bare interface id is reserved as the default instance, which is why the
 * pre-instance bindings file (keyed by interface id, with no `interface`
 * field) reads correctly as-is: it was always describing the default.
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
  /**
   * This implementation needs no workspace credential — it is the gateway's
   * own, or something the workspace already operates.
   *
   * Two things follow, and both are why the flag exists rather than being
   * inferred from an empty credential list. Such an entry counts as
   * *connected* for discovery, so its interface is listed even in a workspace
   * that has connected nothing; and it wins the zero-config fallback ahead of
   * any vendor. The `agent` interface is the motivating case: a workspace with
   * an OpenAI key has not thereby said "run my agents in OpenAI's cloud", and
   * without this the first credential in the list would decide that.
   */
  credentialless?: boolean;
  /**
   * This entry is declared but has no executable module yet — the reason,
   * phrased for whoever hits it.
   *
   * A catalog entry is a *contract commitment*, and it earns its place before
   * the module exists: it is what the design doc, the compat list and the
   * bindings UI are written against. So resolution still points at it happily
   * — "what does this namespace mean" has an answer either way, and the
   * `agents`-style short-circuit that skips the module entirely depends on
   * that answer.
   *
   * What must not happen is reaching the *isolate* with it. The failure there
   * is a module-resolution error from deep inside the loader (`Package subpath
   * './native' is not defined by "exports"`), which names nothing the caller
   * can act on. So the two places that would expose it check this instead:
   * dispatch refuses with a 501 carrying this text, and tool discovery leaves
   * the namespace out — a tool the model can see is a tool the model calls.
   */
  unavailable?: string;
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
  /**
   * Which interface this instance implements. Absent in files written before
   * instances existed, where the map key *was* the interface id — which is
   * still true of the default instance, so absence resolves to the key.
   */
  interface?: string;
  provider: string;
  /**
   * Pin this instance to one credential. Without it the provider's first
   * credential is used, which is the only sensible default and exactly the
   * thing that makes two accounts on one provider indistinguishable.
   */
  credentialId?: string;
  /** Option overrides merged over the compat entry's defaults (e.g. model). */
  options?: Record<string, unknown>;
}

interface BindingsFile {
  bindings?: Record<string, InterfaceBinding>;
}

/** Instance names: same shape as an agent or workflow name. */
const INSTANCE_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export interface InterfaceNamespace {
  /** The interface being implemented (`sql`). */
  interfaceId: string;
  /** The bindings-file key (`sql` for the default, `sql:analytics` named). */
  instance: string;
  /** The part after the colon, absent for the default instance. */
  name?: string;
}

/**
 * Parse a namespace into its interface and instance, or `undefined` when it
 * names no interface at all.
 *
 * `:` is safe as the separator: no registry provider id contains one (they
 * use dots and slashes — `synthetic.new`, `fly/sprites`), and a namespace is
 * a single path segment on the wire, so `POST /tools/sql:analytics/query`
 * needs no routing change.
 */
export function parseInterfaceNamespace(namespace: string): InterfaceNamespace | undefined {
  const separator = namespace.indexOf(":");
  if (separator === -1) {
    return isInterface(namespace) ? { interfaceId: namespace, instance: namespace } : undefined;
  }
  const interfaceId = namespace.slice(0, separator);
  const name = namespace.slice(separator + 1);
  if (!isInterface(interfaceId) || !INSTANCE_RE.test(name)) return undefined;
  return { interfaceId, instance: namespace, name };
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
          // The gateway's own in-process WASM interpreter (bash + a private
          // virtual filesystem, no toolchain, no network). First-party like
          // `machine`, but unlike `machine` it needs no registration at all —
          // so it is `credentialless` and wins the zero-config fallback ahead
          // of the vendors, the same reasoning as the agent interface's
          // in-process runner: a workspace holding a fly.io key has not
          // thereby said "run my sandboxes in fly's cloud", and the free,
          // fully-isolated interpreter is the conservative default. Anything
          // needing a real toolchain binds a vendor or registers a machine.
          provider: "bashkit",
          label: "Bashkit (WASM)",
          module: "bashkit",
          moduleSpecifier: "@aprovan/sandbox-bashkit",
          credentialless: true,
        },
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
    {
      id: "vcs",
      label: "Git hosting",
      description:
        "Git hosting for code review: repos.get, pullRequests.get/list/diff/comment/review, branches.get, files.get " +
        "against whichever host a workspace's code lives on. " +
        "Each backend is a handwritten UTDK provider module built on @utdk/vcs. " +
        "Credentials stay keyed by the concrete provider (github), so a connected GitHub account just works.",
      // A diff read or a review submission is one REST round trip; a large
      // monorepo diff is the slow case and a minute bounds it comfortably.
      timeoutMs: 60_000,
      // Every operation names its repo and PR explicitly; there is no
      // workspace-policy argument (like sql's database or agent's model) for
      // a binding to fill in.
      defaultsFor: [],
      compat: [
        {
          provider: "github",
          label: "GitHub",
          // A suite module, like `google/books`: the vendor's generated
          // module covers the whole REST surface, and the /vcs subpath is
          // the thin handwritten adapter that speaks the contract.
          module: "github/vcs",
        },
        {
          // NOT YET BUILT — a contract commitment, in the `openai/assistants`
          // sense: the design doc and the bindings UI are written against
          // this entry, and dispatch refuses it with the reason below rather
          // than letting the module loader answer.
          provider: "bitbucket",
          label: "Bitbucket",
          module: "bitbucket/vcs",
          unavailable:
            "The Bitbucket adapter module is not built yet. The contract is @utdk/vcs; " +
            "the mapping to Bitbucket's REST API does not exist.",
        },
      ],
    },
    {
      id: "agent",
      label: "Agent runtime",
      description:
        "The agent loop itself: run/get/cancel against whichever runtime executes an agent's turns. " +
        "Each backend is a handwritten UTDK provider module built on @utdk/agent. " +
        "The default is the gateway's own in-process runner, which needs no credential; vendor runtimes " +
        "(OpenAI Assistants, a relayed harness) are bound like any other implementation. " +
        "Profiles, instruction layers, grants, mounts and entrypoints live in the `agents` core service " +
        "— see docs/agent-interface.md.",
      // An agent loop is minutes, not seconds: a build, a test suite and a
      // dozen model turns all fit inside one `run`. This is the outer bound on
      // a single dispatched operation, not on the run's own budget, which the
      // caller sets with `limits.wallClockMs`.
      timeoutMs: 900_000,
      // Only `run` takes binding defaults: model, effort and limits are
      // workspace policy, while `get`/`cancel` carry nothing but an id.
      defaultsFor: ["run"],
      compat: [
        {
          // The gateway's own runner (agents/runner.ts). It is a compat entry
          // rather than a separate code path so that binding, instances,
          // discovery and the result shape are the same for it as for
          // anything else — but dispatch short-circuits straight into the
          // in-process loop (workflows/invoke.ts and its HTTP twin), exactly
          // as `sandboxes` does for a `machine` host. The module name below
          // completes the resolution tuple and is never imported.
          provider: "native",
          label: "Aprovan runner (in-process)",
          module: "native",
          credentialless: true,
        },
        {
          // NOT YET BUILT — the adapter module is the remaining work. The
          // vendor surface is verified: `utdk/openai` already generates
          // createThreadAndRun / getRun / cancelRun / submitToolOuputsToRun
          // over /v1/threads, which is a durable run resource with the
          // pause-and-ask (`requires_action`) tool transport this contract
          // calls `yield`. The operation *names* differ from run/get/cancel,
          // so a thin handwritten module maps them — the same shape
          // `utdk/postgres` takes over a query engine.
          //
          // The credential is the ordinary `openai` one: an Assistants run and
          // a chat completion are the same account, and minting a second
          // provider id for it would make a workspace connect OpenAI twice.
          provider: "openai",
          label: "OpenAI Assistants",
          module: "openai/assistants",
          unavailable:
            "The OpenAI Assistants adapter module is not built yet. The vendor surface exists " +
            "(utdk/openai generates createThreadAndRun/getRun/cancelRun); the run/get/cancel mapping does not.",
        },
        {
          // NOT YET BUILT. A `pi`/Claude-Code-style harness on a machine that
          // dials out, over the same host relay the `machine` sandbox provider
          // uses. First-party, so it is not in the vendor catalogue: the
          // contract is public, the implementation is ours.
          provider: "harness",
          label: "Relayed harness",
          module: "harness",
          moduleSpecifier: "@aprovan/agent-host",
          unavailable: "@aprovan/agent-host is not built yet.",
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

/**
 * Every configured instance, keyed by namespace. The default instance is
 * included only when it is explicitly bound — an interface resolving by the
 * zero-config fallback has no instance record, and inventing one would make
 * "bound to Postgres" and "happens to have a Postgres credential" look the
 * same in the UI.
 */
export async function listInstances(
  workspaceId: string,
): Promise<Array<InterfaceNamespace & { binding: InterfaceBinding }>> {
  const bindings = await readBindings(workspaceId);
  const instances: Array<InterfaceNamespace & { binding: InterfaceBinding }> = [];
  for (const [instance, binding] of Object.entries(bindings)) {
    const parsed = parseInterfaceNamespace(instance);
    // A binding whose interface no longer exists (renamed, removed) is
    // skipped rather than thrown on — the file outlives the catalog.
    if (!parsed) continue;
    instances.push({ ...parsed, binding });
  }
  return instances;
}

export async function writeBinding(
  workspaceId: string,
  instance: string,
  binding: InterfaceBinding | null,
): Promise<void> {
  const bindings = await readBindings(workspaceId);
  if (binding) {
    bindings[instance] = binding;
  } else {
    delete bindings[instance];
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
  /** The namespace that resolved here (`sql`, `sql:analytics`). */
  instance: string;
  /** The credential this instance is pinned to, if any. */
  credentialId?: string;
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
 * Resolve an interface namespace to its concrete implementation for a
 * workspace: caller override first (e.g. a workflow registration's
 * `bindings`), then the instance's binding, else — for the default instance
 * only — the first compat provider with a credential.
 *
 * `namespace` is `sql` or `sql:analytics`. A *named* instance has no
 * zero-config fallback by design: `sql` meaning "whatever database is
 * connected" is a convenience, but `sql:analytics` silently pointing at
 * production because nobody bound it would be a data leak wearing a
 * convenience's clothes.
 */
export async function resolveInterfaceForWorkspace(
  workspaceId: string,
  namespace: string,
  overrideProvider?: string,
): Promise<ResolvedInterface> {
  const parsed = parseInterfaceNamespace(namespace);
  if (!parsed) throw new ServiceError(`Unknown interface: ${namespace}`, 404);
  const { interfaceId, instance, name } = parsed;
  const def = resolveInterface(interfaceId);
  if (!def) throw new ServiceError(`Unknown interface: ${interfaceId}`, 404);

  const binding = (await readBindings(workspaceId))[instance];

  if (overrideProvider) {
    const compat = def.compat.find((entry) => entry.provider === overrideProvider);
    if (!compat) {
      throw new ServiceError(
        `${overrideProvider} does not implement ${interfaceId}. Compatible: ${def.compat.map((c) => c.provider).join(", ")}`,
        400,
      );
    }
    // The instance's options still apply when they target the same provider
    // (e.g. a model choice for the overridden provider); its credential does
    // not — an override names a different implementation.
    const merged =
      binding?.provider === overrideProvider
        ? { ...compat.defaults, ...binding.options }
        : { ...compat.defaults };
    return {
      def,
      compat,
      ...splitOptions(compat, merged),
      bound: true,
      instance,
      ...(binding?.provider === overrideProvider && binding.credentialId
        ? { credentialId: binding.credentialId }
        : {}),
    };
  }

  if (binding) {
    const compat = def.compat.find((entry) => entry.provider === binding.provider);
    if (!compat) {
      throw new ServiceError(
        `${instance} is bound to ${binding.provider}, which does not implement ${interfaceId}`,
        400,
      );
    }
    return {
      def,
      compat,
      ...splitOptions(compat, { ...compat.defaults, ...binding.options }),
      bound: true,
      instance,
      ...(binding.credentialId ? { credentialId: binding.credentialId } : {}),
    };
  }

  if (name !== undefined) {
    throw new ServiceError(
      `No such interface instance: ${instance}. Create it with interfaces.bind { interface: "${interfaceId}", as: "${name}", provider: … }.`,
      404,
    );
  }

  const credentials = await getCredentialStore().list(workspaceId);
  const connected = new Set(credentials.map((credential) => credential.provider));
  // A credentialless implementation wins ahead of any connected vendor, in
  // catalog order. Falling back to "the first vendor we happen to hold a key
  // for" is a sensible default for `sql` (a database is a database) and a bad
  // one for `agent`: having an OpenAI key is not consent to run your agents in
  // OpenAI's cloud. Where a first-party implementation exists, it is the
  // conservative answer as well as the free one.
  const compat =
    def.compat.find((entry) => entry.credentialless) ??
    def.compat.find((entry) => connected.has(entry.provider));
  if (!compat) {
    throw new ServiceError(
      `Interface ${interfaceId} has no binding and no connected compatible provider. ` +
        `Connect a credential for one of: ${def.compat.map((c) => c.provider).join(", ")} — or bind one with interfaces.bind.`,
      400,
    );
  }
  return {
    def,
    compat,
    ...splitOptions(compat, { ...compat.defaults }),
    bound: false,
    instance,
  };
}
