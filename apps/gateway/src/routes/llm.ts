/**
 * LLM chat routes.
 *
 * Chat providers are aliases onto OpenAI-compatible UTDK modules (see
 * src/llm.ts) — the routes here resolve the alias, inject the workspace
 * credential (keyed by the chat-facing provider id), and adapt protocols:
 *
 * - GET  /llm/providers             — every chat provider + connected flag
 * - GET  /llm/:provider/models      — upstream model listing (OpenAI `/models`)
 * - POST /llm/:provider/chat        — AI SDK UI-message chat; streams the AI
 *                                     SDK UI message stream protocol back to
 *                                     `useChat`.
 * - POST /llm/:provider/completions — job-backed completion (see below).
 * - GET  /llm/jobs/:id              — poll a completion job's status/result.
 *
 * `/completions` exists because widget-edit completions run 1–2 minutes, and
 * mobile browsers kill the fetch on screen-lock or backgrounding well before
 * that — the server finishes fine but the client never sees it. The route
 * responds with SSE immediately (`{"jobId"}` first, then deltas + keepalive
 * comments, then `[DONE]`) but — critically — upstream consumption and job
 * persistence are driven independently of whether that response stream is
 * still attached to anything (see runCompletionJob), so a dropped client
 * loses only its own tap; the job still reaches a terminal record that
 * `GET /llm/jobs/:id` can hand back.
 */

import { Hono, type Context } from "hono";
import { getAuditStore } from "../audit.js";
import { expandPromptVars, resolveStoredPrompt } from "../promptStore.js";
import { getCredentialStore } from "../credentials.js";
import { readBindings, resolveInterfaceForWorkspace } from "../interfaces.js";
import { getExecutor } from "../isolate.js";
import { readLlmJob, writeLlmJob, type LlmJobRecord } from "../llm-jobs.js";
import { requireAuth } from "../middleware/auth.js";
import { ServiceError } from "../service-kernel.js";
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
  const [credentials, bindings] = await Promise.all([
    getCredentialStore().list(workspaceId),
    readBindings(workspaceId),
  ]);
  const connected = new Set(credentials.map((credential) => credential.provider));
  const binding = bindings["llm"];
  return c.json({
    providers: listLlmProviders().map((provider) => ({
      id: provider.id,
      label: provider.label,
      defaultModel: provider.defaultModel,
      connected: connected.has(provider.id),
      /** Whether this provider is the workspace's `llm` interface binding. */
      bound: binding?.provider === provider.id,
    })),
    binding: binding ?? null,
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

/**
 * Ephemeral body credential (if present and not disabled) wins; otherwise
 * fall back to the workspace-bound credential. Shared by `/chat` and
 * `/completions` — both take the same `{ credential? }` contract.
 */
async function resolveChatCredentials(
  workspaceId: string,
  providerId: string,
  body: { credential?: { type: string; token?: string; value?: string; name?: string } },
): Promise<{ credentials?: CredentialPayload; error?: string }> {
  if (body.credential && process.env["GATEWAY_EPHEMERAL_CREDENTIALS"] !== "0") {
    return {
      credentials:
        body.credential.type === "bearer_token"
          ? { type: "bearer_token", token: body.credential.token ?? "" }
          : { type: "api_key", value: body.credential.value ?? "", headerName: body.credential.name },
    };
  }
  return resolveCredentials(workspaceId, providerId);
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

// The generic endpoint: chat via the workspace's `llm` interface binding
// (or the first connected compatible provider). Scripts, widgets, and chat
// hit one URL; swapping the backing provider is an interfaces.bind call.
llmRouter.post("/chat", rateLimitByUserId, async (c) => {
  const workspaceId = c.get("principal").workspaceId;
  let resolved;
  try {
    resolved = await resolveInterfaceForWorkspace(workspaceId, "llm");
  } catch (err) {
    const status = err instanceof ServiceError ? err.status : 500;
    return c.json({ error: err instanceof Error ? err.message : String(err) }, status as 400);
  }
  const provider = resolveLlmProvider(resolved.compat.provider);
  if (!provider) return c.json({ error: `Bound provider unavailable: ${resolved.compat.provider}` }, 500);
  const boundModel = typeof resolved.options["model"] === "string" ? resolved.options["model"] : undefined;
  return handleChat(c, provider, boundModel);
});

llmRouter.post("/:provider/chat", rateLimitByUserId, async (c) => {
  const providerId = c.req.param("provider") ?? "";
  const provider = resolveLlmProvider(providerId);
  if (!provider) return c.json({ error: `Unknown LLM provider: ${providerId}` }, 404);
  return handleChat(c, provider);
});

async function handleChat(
  c: Context,
  provider: NonNullable<ReturnType<typeof resolveLlmProvider>>,
  boundModel?: string,
): Promise<Response> {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const providerId = provider.id;

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

  const { credentials, error: credentialError } = await resolveChatCredentials(workspaceId, providerId, body);
  if (credentialError) return c.json({ error: credentialError }, 502);
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
      model: body.model || boundModel || provider.defaultModel,
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
}

// ---------------------------------------------------------------------------
// POST /llm/:provider/completions — job-backed completion
// ---------------------------------------------------------------------------

interface CompletionJobRequestBody extends ChatRequestBody {
  /** Required — opts into the job protocol; `/completions` has no other mode. */
  job?: boolean;
}

const JOB_STREAM_HEADERS: Record<string, string> = {
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
};

/** How often keepalive comments are written while draining the upstream. */
const JOB_KEEPALIVE_MS = 15_000;
/** Dirty-flag persistence throttle — plus one unconditional write on terminal. */
const JOB_PERSIST_THROTTLE_MS = 3_000;

llmRouter.post("/:provider/completions", rateLimitByUserId, async (c) => {
  const providerId = c.req.param("provider") ?? "";
  const provider = resolveLlmProvider(providerId);
  if (!provider) return c.json({ error: `Unknown LLM provider: ${providerId}` }, 404);
  return handleCompletionJob(c, provider);
});

async function handleCompletionJob(
  c: Context,
  provider: NonNullable<ReturnType<typeof resolveLlmProvider>>,
): Promise<Response> {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const providerId = provider.id;

  let body: CompletionJobRequestBody;
  try {
    body = await c.req.json<CompletionJobRequestBody>();
  } catch {
    return c.json({ error: "Expected a JSON body with messages" }, 400);
  }
  if (body.job !== true) {
    return c.json({ error: "/completions requires job: true" }, 400);
  }

  const messages = toOpenAiMessages(body.messages);
  if (messages.length === 0) {
    return c.json({ error: "messages must contain at least one text message" }, 400);
  }

  let system = typeof body.system === "string" ? body.system : undefined;
  if (!system && body.prompt?.id) {
    const stored = await resolveStoredPrompt(workspaceId, body.prompt.id);
    if (stored) system = expandPromptVars(stored, body.prompt.vars);
  }
  if (system) {
    messages.unshift({ role: "system", content: system });
  }

  const { credentials, error: credentialError } = await resolveChatCredentials(workspaceId, providerId, body);
  if (credentialError) return c.json({ error: credentialError }, 502);
  if (!credentials) {
    return c.json({ error: `No credential for ${providerId} in this workspace` }, 403);
  }

  const model = body.model || provider.defaultModel;
  const requestId = crypto.randomUUID();
  const startTime = Date.now();
  const executor = await getExecutor();
  const result = await executor.execute({
    provider: provider.module,
    operation: "createChatCompletion",
    args: { model, messages, stream: true },
    credentials,
    baseUrl: provider.baseUrl,
    timeout: 120_000,
  });

  const durationMs = Date.now() - startTime;
  getAuditStore().append({
    requestId,
    workspaceId,
    callerId: principal.sub,
    provider: providerId,
    operation: "createChatCompletion",
    status: result.success ? 200 : 502,
    durationMs,
  });

  if (!result.success) {
    // Failed before any jobId was issued — nothing to poll, report inline
    // the same way /chat does.
    return c.json({ error: result.error ?? "Chat completion failed" }, 502);
  }

  const jobId = crypto.randomUUID();
  const now = new Date().toISOString();
  const job: LlmJobRecord = {
    id: jobId,
    status: "running",
    provider: providerId,
    model,
    text: "",
    createdAt: now,
    updatedAt: now,
  };
  await writeLlmJob(workspaceId, job);

  const persist = async (text: string, terminal: boolean, error?: string): Promise<void> => {
    job.text = text;
    job.status = terminal ? (error ? "failed" : "succeeded") : "running";
    job.error = error;
    job.updatedAt = new Date().toISOString();
    await writeLlmJob(workspaceId, job);
  };

  const upstream =
    result.data instanceof ReadableStream
      ? result.data
      : result.data instanceof Response && result.data.body
        ? result.data.body
        : undefined;

  if (!upstream) {
    // Non-streaming upstream (some compat servers ignore `stream`): the
    // completion is already done — persist it and emit it as one delta.
    const completion = result.data as
      | { choices?: Array<{ message?: { content?: string } }> }
      | undefined;
    const text = completion?.choices?.[0]?.message?.content ?? "";
    await persist(text, true);
    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ jobId })}\n\n`));
        if (text) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`),
          );
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });
    return c.newResponse(stream, 200, JOB_STREAM_HEADERS);
  }

  return c.newResponse(createJobResponseStream(jobId, upstream, persist), 200, JOB_STREAM_HEADERS);
}

/**
 * The SSE tap for a completion job. Upstream consumption (decode → accumulate
 * → throttled persist) drives the whole function; writes to `controller` are
 * a best-effort side channel that stop the moment they fail (client gone —
 * network drop, backgrounded tab, whatever) without touching the read loop.
 * That's the critical property: this function keeps running, and `persist`
 * keeps getting called, all the way to a terminal record, independent of
 * whether anything is still listening on the other end of `controller`.
 */
function createJobResponseStream(
  jobId: string,
  upstream: ReadableStream<Uint8Array>,
  persist: (text: string, terminal: boolean, error?: string) => Promise<void>,
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      let clientGone = false;
      const safeEnqueue = (bytes: Uint8Array): void => {
        if (clientGone) return;
        try {
          controller.enqueue(bytes);
        } catch {
          clientGone = true;
        }
      };
      const emit = (chunk: Record<string, unknown>): void =>
        safeEnqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));

      emit({ jobId });
      const keepalive = setInterval(() => safeEnqueue(encoder.encode(": keepalive\n\n")), JOB_KEEPALIVE_MS);

      let buffered = "";
      let text = "";
      let dirty = false;
      let lastPersist = Date.now();
      const reader = upstream.getReader();

      const maybePersist = async (force: boolean): Promise<void> => {
        if (!force && (!dirty || Date.now() - lastPersist < JOB_PERSIST_THROTTLE_MS)) return;
        dirty = false;
        lastPersist = Date.now();
        await persist(text, false);
      };

      const handleLine = async (line: string): Promise<void> => {
        if (!line.startsWith("data:")) return;
        const data = line.slice(5).trim();
        if (data === "[DONE]" || !data) return;
        let delta: string | undefined;
        try {
          const parsed = JSON.parse(data) as { choices?: Array<{ delta?: { content?: string | null } }> };
          delta = parsed.choices?.[0]?.delta?.content ?? undefined;
        } catch {
          return; // Malformed upstream chunk — skip it, keep draining.
        }
        if (!delta) return;
        text += delta;
        dirty = true;
        // Passthrough in the same OpenAI-compat `{choices[0].delta.content}`
        // shape the upstream used — the client's SSE reader (sse.ts) already
        // knows how to fold that, on both the plain /chat path and here.
        emit({ choices: [{ delta: { content: delta } }] });
        await maybePersist(false);
      };

      let failure: string | undefined;
      try {
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buffered += decoder.decode(value, { stream: true });
          let newlineIndex = buffered.indexOf("\n");
          while (newlineIndex !== -1) {
            const line = buffered.slice(0, newlineIndex).replace(/\r$/u, "");
            buffered = buffered.slice(newlineIndex + 1);
            await handleLine(line);
            newlineIndex = buffered.indexOf("\n");
          }
        }
      } catch (err) {
        failure = err instanceof Error ? err.message : String(err);
      } finally {
        clearInterval(keepalive);
        await persist(text, true, failure);
        // Surface the failure inline too: a stream that just ends at [DONE]
        // reads as success to a client that never learns the job failed.
        // The client's SSE reader (readChatCompletionStream, shared with the
        // plain /chat path) already throws on an `{error}` frame — that's
        // what sends it to the polling fallback, where it picks up this same
        // terminal record and re-throws with this message.
        if (failure) emit({ error: failure });
        safeEnqueue(encoder.encode("data: [DONE]\n\n"));
        try {
          controller.close();
        } catch {
          // Already closed by the client dropping — nothing left to do.
        }
      }
    },
  });
}

// ---------------------------------------------------------------------------
// GET /llm/jobs/:id — poll a completion job
// ---------------------------------------------------------------------------

/** Long-poll ceiling for `?wait=1`. */
const JOB_WAIT_MS = 20_000;
const JOB_WAIT_POLL_MS = 1_000;

llmRouter.get("/jobs/:id", async (c) => {
  const workspaceId = c.get("principal").workspaceId;
  const id = c.req.param("id") ?? "";
  const wait = c.req.query("wait") === "1";

  let job = await readLlmJob(workspaceId, id);
  if (!job) return c.json({ error: `Unknown job: ${id}` }, 404);

  if (wait && job.status === "running") {
    const deadline = Date.now() + JOB_WAIT_MS;
    while (Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, JOB_WAIT_POLL_MS));
      const next = await readLlmJob(workspaceId, id);
      if (!next) break;
      job = next;
      if (job.status !== "running") break;
    }
  }

  return c.json(job);
});
