/**
 * In-process tool dispatch for workflow scripts — the server-side twin of
 * `POST /tools/:provider/:operation`, minus HTTP. Core services are called
 * directly; provider operations resolve workspace credentials and execute in
 * the isolate; LLM chat-provider aliases resolve to their OpenAI-compatible
 * module. Used by the workflow runner so a script's `github.repos.get(...)`
 * behaves identically to a widget's proxied call.
 */

import { mayInvokeTool } from "../authorize.js";
import { assertToolGranted } from "../grants.js";
import { getCredentialStore, type CredentialPayload } from "../credentials.js";
import { isInterface, resolveInterfaceForWorkspace } from "../interfaces.js";
import { getExecutor } from "../isolate.js";
import { isLlmProvider, resolveLlmProvider } from "../llm.js";
import { getMembership } from "../memberships.js";
import { getAuthMode } from "../middleware/auth.js";
import { OAuthExchangeError, resolveToInjectable } from "../oauthTokens.js";
import { getCoreService, ServiceError } from "../service-kernel.js";
import { listUserGroupIds } from "../userGroups.js";
import type { ServiceContext } from "../service-kernel.js";

/**
 * Per-user tool authorization for in-process dispatch — the same gate the
 * HTTP tools route applies (`mayInvokeTool`), so a workflow script cannot
 * exercise provider credentials its runner's user was never granted. App
 * sessions skip this: the app manifest's role model + workflow allow-list
 * are their boundary, and executions deliberately run with the owning
 * workspace's reach (the owner audited the workflow when publishing).
 */
async function assertProviderAllowed(
  ctx: ServiceContext,
  provider: string,
  operation: string,
): Promise<void> {
  if (getAuthMode() !== "oidc" || ctx.appScope) return;
  const membership = await getMembership(ctx.workspaceId, ctx.userId).catch(() => undefined);
  const principal = {
    sub: ctx.userId,
    workspaceId: ctx.workspaceId,
    role: membership?.role ?? "member",
    groupIds: await listUserGroupIds(ctx.workspaceId, ctx.userId).catch(() => []),
  };
  if (!(await mayInvokeTool(principal, provider, operation))) {
    throw new ServiceError(
      `Forbidden: ${ctx.userId} has no grant for ${provider}.${operation}`,
      403,
    );
  }
}

export async function invokeTool(
  ctx: ServiceContext,
  namespace: string,
  procedure: string,
  args: Record<string, unknown>,
): Promise<unknown> {
  // Agent-attributed runs are bounded by their profile's tool grants —
  // checked before any dispatch branch so native, interface, and provider
  // calls all answer to the same list.
  assertToolGranted(ctx.grants, namespace, procedure);
  const core = getCoreService(namespace);
  if (core) {
    return core.call(ctx, procedure, args);
  }

  // Generic interfaces (llm, sql, sandbox, …) resolve to their bound
  // implementation and dispatch as that concrete provider — same call,
  // swappable backend.
  if (isInterface(namespace)) {
    await assertProviderAllowed(ctx, namespace, procedure);
    return dispatchInterface(ctx, namespace, procedure, args);
  }

  await assertProviderAllowed(ctx, namespace, procedure);

  const llmAlias = isLlmProvider(namespace) ? resolveLlmProvider(namespace) : undefined;
  let finalArgs = args;
  if (llmAlias && procedure === "createChatCompletion" && !("model" in finalArgs)) {
    finalArgs = { ...finalArgs, model: llmAlias.defaultModel };
  }

  return dispatchProvider(ctx, {
    credentialProvider: namespace,
    module: llmAlias?.module ?? namespace,
    baseUrl: llmAlias?.baseUrl,
    procedure,
    args: finalArgs,
    timeout: llmAlias ? 120_000 : 30_000,
    label: namespace,
  });
}

/**
 * Dispatch one operation through a generic interface's bound implementation.
 *
 * Split out of {@link invokeTool} because a core service can *be* the caller:
 * `sandboxes.exec` is authorized as `sandboxes.exec` and then reaches the
 * bound sandbox driver through here. Routing that back through `invokeTool`
 * would demand a second grant on the raw `sandbox.*` namespace for a call the
 * user never made, so the grant check stays with the namespace the caller
 * actually named.
 *
 * `overrideProvider` pins the implementation — a live sandbox must keep
 * talking to the host that created it even if the workspace rebinds.
 */
export async function dispatchInterface(
  ctx: ServiceContext,
  interfaceId: string,
  procedure: string,
  args: Record<string, unknown>,
  overrideProvider?: string,
): Promise<unknown> {
  const resolved = await resolveInterfaceForWorkspace(
    ctx.workspaceId,
    interfaceId,
    overrideProvider ?? ctx.interfaceBindings?.[interfaceId],
  );
  const withDefaults = resolved.def.defaultsFor.includes(procedure)
    ? { ...resolved.options, ...args }
    : args;
  return dispatchProvider(ctx, {
    credentialProvider: resolved.compat.provider,
    module: resolved.compat.module,
    ...(resolved.compat.moduleSpecifier
      ? { moduleSpecifier: resolved.compat.moduleSpecifier }
      : {}),
    baseUrl: resolved.baseUrl,
    procedure,
    args: withDefaults,
    timeout: resolved.def.timeoutMs,
    label: `${interfaceId}→${resolved.compat.provider}`,
  });
}

interface ProviderDispatch {
  /** Credential-store key (the concrete provider id). */
  credentialProvider: string;
  /** UTDK module executed in the isolate (also names the client factory). */
  module: string;
  /** Import specifier, when the module is not in the UTDK catalogue. */
  moduleSpecifier?: string;
  baseUrl?: string;
  procedure: string;
  args: Record<string, unknown>;
  timeout: number;
  /** Human-readable name for error messages (e.g. "llm→anthropic"). */
  label: string;
}

/** Resolve a provider's workspace credential to an injectable payload. */
async function resolveProviderCredentials(
  ctx: ServiceContext,
  provider: string,
  label: string,
): Promise<CredentialPayload | undefined> {
  const store = getCredentialStore();
  const record = await store.resolveRecordForProvider(ctx.workspaceId, provider);
  if (!record) return undefined;
  try {
    return await resolveToInjectable(record.payload, {
      cacheKey: `${ctx.workspaceId}:${provider}:${record.id}`,
      persist: (payload) => store.updatePayload(ctx.workspaceId, record.id, payload),
    });
  } catch (err) {
    throw new ServiceError(
      err instanceof OAuthExchangeError
        ? `OAuth token resolution failed for ${label}: ${err.message}`
        : `OAuth token resolution failed for ${label}`,
      502,
    );
  }
}

async function dispatchProvider(
  ctx: ServiceContext,
  dispatch: ProviderDispatch,
): Promise<unknown> {
  const credentials = await resolveProviderCredentials(
    ctx,
    dispatch.credentialProvider,
    dispatch.label,
  );

  const executor = await getExecutor();
  const result = await executor.execute({
    provider: dispatch.module,
    ...(dispatch.moduleSpecifier ? { module: dispatch.moduleSpecifier } : {}),
    operation: dispatch.procedure,
    args: dispatch.args,
    credentials,
    ...(dispatch.baseUrl ? { baseUrl: dispatch.baseUrl } : {}),
    timeout: dispatch.timeout,
  });
  if (!result.success) {
    throw new ServiceError(
      result.error ?? `${dispatch.label}.${dispatch.procedure} failed`,
      502,
    );
  }
  return result.data;
}
