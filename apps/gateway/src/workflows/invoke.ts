/**
 * In-process tool dispatch for workflow scripts — the server-side twin of
 * `POST /tools/:provider/:operation`, minus HTTP. Core services are called
 * directly; provider operations resolve workspace credentials and execute in
 * the isolate; LLM chat-provider aliases resolve to their OpenAI-compatible
 * module. Used by the workflow runner so a script's `github.repos.get(...)`
 * behaves identically to a widget's proxied call.
 */

import { getCredentialStore, type CredentialPayload } from "../credentials.js";
import { getExecutor } from "../isolate.js";
import { isLlmProvider, resolveLlmProvider } from "../llm.js";
import { OAuthExchangeError, resolveToInjectable } from "../oauthTokens.js";
import { getCoreService, ServiceError } from "../services.js";
import type { ServiceContext } from "../services.js";

export async function invokeTool(
  ctx: ServiceContext,
  namespace: string,
  procedure: string,
  args: Record<string, unknown>,
): Promise<unknown> {
  const core = getCoreService(namespace);
  if (core) {
    return core.call(ctx, procedure, args);
  }

  const store = getCredentialStore();
  const record = await store.resolveRecordForProvider(ctx.workspaceId, namespace);
  let credentials: CredentialPayload | undefined;
  if (record) {
    try {
      credentials = await resolveToInjectable(record.payload, {
        cacheKey: `${ctx.workspaceId}:${namespace}:${record.id}`,
        persist: (payload) => store.updatePayload(ctx.workspaceId, record.id, payload),
      });
    } catch (err) {
      throw new ServiceError(
        err instanceof OAuthExchangeError
          ? `OAuth token resolution failed for ${namespace}: ${err.message}`
          : `OAuth token resolution failed for ${namespace}`,
        502,
      );
    }
  }

  const llmAlias = isLlmProvider(namespace) ? resolveLlmProvider(namespace) : undefined;
  let finalArgs = args;
  if (llmAlias && procedure === "createChatCompletion" && !("model" in finalArgs)) {
    finalArgs = { ...finalArgs, model: llmAlias.defaultModel };
  }

  const executor = await getExecutor();
  const result = await executor.execute({
    provider: llmAlias?.module ?? namespace,
    operation: procedure,
    args: finalArgs,
    credentials,
    ...(llmAlias?.baseUrl ? { baseUrl: llmAlias.baseUrl } : {}),
    timeout: llmAlias ? 120_000 : 30_000,
  });
  if (!result.success) {
    throw new ServiceError(result.error ?? `${namespace}.${procedure} failed`, 502);
  }
  return result.data;
}
