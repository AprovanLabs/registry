/**
 * LLM chat routes.
 *
 * Chat providers are aliases onto OpenAI-compatible UTDK modules (see
 * src/llm.ts) — the routes here resolve the alias, inject the workspace
 * credential (keyed by the chat-facing provider id), and adapt protocols:
 *
 * - GET  /llm/providers        — every chat provider + connected flag
 * - GET  /llm/:provider/models — upstream model listing (OpenAI `/models`)
 * - POST /llm/:provider/chat   — AI SDK UI-message chat; streams the AI SDK
 *                                UI message stream protocol back to `useChat`.
 */

import { Hono } from "hono";
import { getAuditStore } from "../audit.js";
import { expandPromptVars, resolveStoredPrompt } from "../promptStore.js";
import { getCredentialStore } from "../credentials.js";
import { getExecutor } from "../isolate.js";
import { requireAuth } from "../middleware/auth.js";
import { rateLimitByUserId } from "../middleware/rateLimitMiddleware.js";
import { OAuthExchangeError, resolveToInjectable } from "../oauthTokens.js";
import {
  listLlmProviders,
  resolveLlmProvider,
  toOpenAiMessages,
  toUiMessageStream,
  UI_MESSAGE_STREAM_HEADERS,
} from "../llm.js";
import type { CredentialPayload } from "../credentials.js";

export const llmRouter = new Hono();

llmRouter.use("*", requireAuth);

// ---------------------------------------------------------------------------
// GET /llm/providers
// ---------------------------------------------------------------------------

llmRouter.get("/providers", async (c) => {
  const workspaceId = c.get("principal").workspaceId;
  const credentials = await getCredentialStore().list(workspaceId);
  const connected = new Set(credentials.map((credential) => credential.provider));
  return c.json({
    providers: listLlmProviders().map((provider) => ({
      id: provider.id,
      label: provider.label,
      defaultModel: provider.defaultModel,
      connected: connected.has(provider.id),
    })),
  });
});

// ---------------------------------------------------------------------------
// Credential resolution (same contract as the tools route)
// ---------------------------------------------------------------------------

async function resolveCredentials(
  workspaceId: string,
  providerId: string,
): Promise<{ credentials?: CredentialPayload; error?: string }> {
  const store = getCredentialStore();
  const record = await store.resolveRecordForProvider(workspaceId, providerId);
  if (!record) return {};
  try {
    return {
      credentials: await resolveToInjectable(record.payload, {
        cacheKey: `${workspaceId}:${providerId}:${record.id}`,
        persist: (payload) => store.updatePayload(workspaceId, record.id, payload),
      }),
    };
  } catch (err) {
    return {
      error:
        err instanceof OAuthExchangeError
          ? `OAuth token resolution failed for ${providerId}: ${err.message}`
          : `OAuth token resolution failed for ${providerId}`,
    };
  }
}

// ---------------------------------------------------------------------------
// GET /llm/:provider/models
// ---------------------------------------------------------------------------

llmRouter.get("/:provider/models", rateLimitByUserId, async (c) => {
  const providerId = c.req.param("provider") ?? "";
  const provider = resolveLlmProvider(providerId);
  if (!provider) return c.json({ error: `Unknown LLM provider: ${providerId}` }, 404);

  const workspaceId = c.get("principal").workspaceId;
  const { credentials, error } = await resolveCredentials(workspaceId, providerId);
  if (error) return c.json({ error }, 502);
  if (!credentials) {
    return c.json({ error: `No credential for ${providerId} in this workspace` }, 403);
  }

  const executor = await getExecutor();
  const result = await executor.execute({
    provider: provider.module,
    operation: "listModels",
    args: {},
    credentials,
    baseUrl: provider.baseUrl,
    timeout: 15_000,
  });
  if (!result.success) {
    return c.json({ error: result.error ?? "Model listing failed" }, 502);
  }

  const data = result.data as { data?: Array<{ id?: unknown }> } | undefined;
  const models = Array.isArray(data?.data)
    ? data.data
        .map((model) => (typeof model?.id === "string" ? model.id : undefined))
        .filter((id): id is string => Boolean(id))
        .sort((left, right) => left.localeCompare(right))
    : [];
  return c.json({ models, defaultModel: provider.defaultModel });
});

// ---------------------------------------------------------------------------
// POST /llm/:provider/chat
// ---------------------------------------------------------------------------

interface ChatRequestBody {
  messages?: unknown;
  model?: string;
  /** Optional stored-prompt reference expanded into the system message. */
  prompt?: { id?: string; vars?: Record<string, unknown> };
  system?: string;
  /** Ephemeral credential (same contract as the tools route). */
  credential?: { type: string; token?: string; value?: string; name?: string };
}

llmRouter.post("/:provider/chat", rateLimitByUserId, async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const providerId = c.req.param("provider") ?? "";
  const provider = resolveLlmProvider(providerId);
  if (!provider) return c.json({ error: `Unknown LLM provider: ${providerId}` }, 404);

  let body: ChatRequestBody;
  try {
    body = await c.req.json<ChatRequestBody>();
  } catch {
    return c.json({ error: "Expected a JSON body with messages" }, 400);
  }

  const messages = toOpenAiMessages(body.messages);
  if (messages.length === 0) {
    return c.json({ error: "messages must contain at least one text message" }, 400);
  }

  // System prompt: explicit `system` wins; otherwise a stored prompt —
  // PostHog-managed when configured, workspace FS fallback (see promptStore).
  let system = typeof body.system === "string" ? body.system : undefined;
  if (!system && body.prompt?.id) {
    const stored = await resolveStoredPrompt(workspaceId, body.prompt.id);
    if (stored) system = expandPromptVars(stored, body.prompt.vars);
  }
  if (system) {
    messages.unshift({ role: "system", content: system });
  }

  let credentials: CredentialPayload | undefined;
  if (body.credential && process.env["GATEWAY_EPHEMERAL_CREDENTIALS"] !== "0") {
    credentials =
      body.credential.type === "bearer_token"
        ? { type: "bearer_token", token: body.credential.token ?? "" }
        : { type: "api_key", value: body.credential.value ?? "", headerName: body.credential.name };
  } else {
    const resolved = await resolveCredentials(workspaceId, providerId);
    if (resolved.error) return c.json({ error: resolved.error }, 502);
    credentials = resolved.credentials;
  }
  if (!credentials) {
    return c.json({ error: `No credential for ${providerId} in this workspace` }, 403);
  }

  const requestId = crypto.randomUUID();
  const startTime = Date.now();
  const executor = await getExecutor();
  const result = await executor.execute({
    provider: provider.module,
    operation: "createChatCompletion",
    args: {
      model: body.model || provider.defaultModel,
      messages,
      stream: true,
    },
    credentials,
    baseUrl: provider.baseUrl,
    timeout: 120_000,
  });

  const durationMs = Date.now() - startTime;
  const status = result.success ? 200 : 502;
  getAuditStore().append({
    requestId,
    workspaceId,
    callerId: principal.sub,
    provider: providerId,
    operation: "createChatCompletion",
    status,
    durationMs,
  });

  if (!result.success) {
    return c.json({ error: result.error ?? "Chat completion failed" }, 502);
  }

  if (result.data instanceof ReadableStream) {
    return c.newResponse(toUiMessageStream(result.data), 200, UI_MESSAGE_STREAM_HEADERS);
  }
  if (result.data instanceof Response && result.data.body) {
    return c.newResponse(toUiMessageStream(result.data.body), 200, UI_MESSAGE_STREAM_HEADERS);
  }

  // Non-streaming upstream (some compat servers ignore `stream`): return the
  // completion as a single-shot UI message stream so `useChat` still renders.
  const completion = result.data as
    | { choices?: Array<{ message?: { content?: string } }> }
    | undefined;
  const text = completion?.choices?.[0]?.message?.content ?? "";
  const encoder = new TextEncoder();
  const messageId = crypto.randomUUID();
  const chunks = [
    { type: "start", messageId },
    { type: "start-step" },
    { type: "text-start", id: `${messageId}-text` },
    { type: "text-delta", id: `${messageId}-text`, delta: text },
    { type: "text-end", id: `${messageId}-text` },
    { type: "finish-step" },
    { type: "finish" },
  ];
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });
  return c.newResponse(stream, 200, UI_MESSAGE_STREAM_HEADERS);
});
