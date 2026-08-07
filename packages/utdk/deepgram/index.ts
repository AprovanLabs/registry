/**
 * `utdk/deepgram` — Deepgram streaming adapter for `@utdk/stt`.
 *
 * Holds Deepgram's duplex listen WebSocket inside a
 * {@link StreamingSessionDriver}: `push` sends raw PCM frames; vendor
 * `Results` / VAD messages become {@link SttEvent}s. The caller never sees
 * Deepgram's wire shapes.
 *
 * Auth follows every other UTDK provider: the executor injects
 * `Authorization: Bearer <key>` from a `bearer_token` credential. Deepgram's
 * listen socket wants `Authorization: Token <key>`, so the driver rewrites
 * the scheme at connect time rather than asking operators for a custom
 * header.
 *
 * A dropped upstream socket emits `{ type: "error", data: { retryable: true } }`
 * and leaves the session active — further pushes reconnect. That matches the
 * stt contract: recoverable provider errors do not end the session.
 */

import type { SessionEvent } from "@utdk/common/streaming";
import {
  REQUIRED_ENCODING,
  SttError,
  assertOpenSupported,
  secretFromHeaders,
  sttToolEntries,
  type SttCapabilities,
  type SttDriver,
  type SttOpenArgs,
  type SttPushMessage,
  type SttResult,
  type SttSegment,
  type SttWord,
} from "@utdk/stt";
import WebSocket from "ws";
import { createLazyClient } from "../client.js";

const PROVIDER = "deepgram";
const DEFAULT_BASE_URL = "wss://api.deepgram.com";
const DEFAULT_MODEL = "nova-3";

/**
 * What Deepgram's streaming listen surface actually supports. Diarization,
 * word timestamps, and VAD are request flags on the same socket — not
 * separate operations — which is why the contract makes them capabilities.
 */
export const DEEPGRAM_CAPABILITIES: SttCapabilities = {
  streaming: true,
  encodings: [REQUIRED_ENCODING],
  diarization: true,
  wordTimestamps: true,
  vad: true,
  languages: "auto",
};

export type DeepgramWebSocket = {
  readonly readyState: number;
  binaryType: string;
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
  close(code?: number, reason?: string): void;
  addEventListener(type: string, listener: (event: { data?: unknown; code?: number; reason?: string; message?: string }) => void): void;
  removeEventListener(type: string, listener: (event: { data?: unknown; code?: number; reason?: string; message?: string }) => void): void;
};

export type DeepgramWebSocketConstructor = new (
  url: string,
  protocols?: string | string[],
  options?: { headers?: Record<string, string> },
) => DeepgramWebSocket;

export interface DeepgramSttClientOptions {
  headers?: Record<string, string>;
  /** Override the listen origin (default `wss://api.deepgram.com`). */
  baseUrl?: string;
  /**
   * Injectable WebSocket. Node 22's global `WebSocket` does not accept
   * handshake headers; undici/`ws` constructors that do may be supplied here.
   * Tests inject a fake.
   */
  WebSocketImpl?: DeepgramWebSocketConstructor;
}

type SessionRecord = {
  providerSessionId: string;
  args: SttOpenArgs;
  token: string;
  ws: DeepgramWebSocket | null;
  sink: ((event: SessionEvent) => void) | null;
  segments: SttSegment[];
  openedAt: number;
  /** Estimated audio duration from pushed PCM (16 kHz mono s16le). */
  audioDurationMs: number;
  closing: boolean;
  closed: boolean;
  /** Upstream dropped; session stays active until the caller closes. */
  dropped: boolean;
  closeWaiters: Array<() => void>;
};

const OPEN = 1;

function secondsToMs(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.round(n * 1000));
}

function buildListenUrl(baseUrl: string, args: SttOpenArgs): string {
  const origin = baseUrl.replace(/\/+$/u, "");
  const url = new URL(`${origin}/v1/listen`);
  url.searchParams.set("encoding", "linear16");
  url.searchParams.set("sample_rate", "16000");
  url.searchParams.set("channels", "1");
  url.searchParams.set("model", typeof args.model === "string" && args.model ? args.model : DEFAULT_MODEL);
  url.searchParams.set("interim_results", "true");
  url.searchParams.set("punctuate", "true");
  url.searchParams.set("smart_format", "true");

  if (args.diarize === true) {
    url.searchParams.set("diarize", "true");
  }
  if (args.wordTimestamps === true) {
    // Deepgram always returns word timings when present; this flag keeps the
    // contract's opt-in semantics explicit on the wire.
    url.searchParams.set("utterances", "false");
  }
  if (args.language) {
    url.searchParams.set("language", args.language);
  } else {
    url.searchParams.set("detect_language", "true");
  }
  // Capability vad:true — SpeechStarted / UtteranceEnd events.
  url.searchParams.set("vad_events", "true");
  url.searchParams.set("utterance_end_ms", "1000");

  return url.toString();
}

function mapWords(
  raw: unknown,
  includeWords: boolean,
  diarize: boolean,
): SttWord[] | undefined {
  if (!includeWords || !Array.isArray(raw)) return undefined;
  const words: SttWord[] = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const w = entry as Record<string, unknown>;
    const text = typeof w["word"] === "string" ? w["word"] : typeof w["punctuated_word"] === "string" ? w["punctuated_word"] : "";
    if (!text) continue;
    const word: SttWord = {
      text,
      startMs: secondsToMs(w["start"]),
      endMs: secondsToMs(w["end"]),
    };
    if (diarize && w["speaker"] !== undefined && w["speaker"] !== null) {
      word.speaker = String(w["speaker"]);
    }
    words.push(word);
  }
  return words;
}

function mapSegment(
  message: Record<string, unknown>,
  args: SttOpenArgs,
): SttSegment | null {
  const channel = message["channel"] as Record<string, unknown> | undefined;
  const alternatives = channel?.["alternatives"] as unknown[] | undefined;
  const alt = (alternatives?.[0] ?? undefined) as Record<string, unknown> | undefined;
  if (!alt) return null;
  const text = typeof alt["transcript"] === "string" ? alt["transcript"] : "";
  if (!text.trim() && message["is_final"] !== true) {
    // Empty interim — nothing to surface.
    return null;
  }
  const startMs = secondsToMs(message["start"]);
  const durationMs = secondsToMs(message["duration"]);
  const words = mapWords(alt["words"], args.wordTimestamps === true, args.diarize === true);
  const segment: SttSegment = {
    text,
    startMs,
    endMs: startMs + durationMs,
  };
  if (args.diarize === true && words && words.length > 0) {
    const speaker = words.find((w) => w.speaker !== undefined)?.speaker;
    if (speaker !== undefined) segment.speaker = speaker;
  }
  if (words) segment.words = words;
  return segment;
}

function emit(session: SessionRecord, event: Omit<SessionEvent, "seq"> & { seq?: number }): void {
  session.sink?.({
    type: event.type,
    seq: event.seq ?? 0,
    data: event.data,
  });
}

function attachSocketHandlers(session: SessionRecord, ws: DeepgramWebSocket): void {
  const onMessage = (event: { data?: unknown }) => {
    if (session.closed) return;
    const raw = event.data;
    let text: string;
    if (typeof raw === "string") {
      text = raw;
    } else if (raw instanceof ArrayBuffer) {
      text = new TextDecoder().decode(raw);
    } else if (ArrayBuffer.isView(raw)) {
      text = new TextDecoder().decode(raw);
    } else {
      return;
    }

    let message: Record<string, unknown>;
    try {
      message = JSON.parse(text) as Record<string, unknown>;
    } catch {
      return;
    }

    const type = message["type"];
    if (type === "Results") {
      const segment = mapSegment(message, session.args);
      if (!segment) return;
      if (message["is_final"] === true) {
        session.segments.push(segment);
        emit(session, { type: "final", data: { segment } });
      } else {
        emit(session, {
          type: "partial",
          data: { text: segment.text, segment },
        });
      }
      return;
    }

    if (type === "SpeechStarted") {
      emit(session, {
        type: "speech-start",
        data: { atMs: secondsToMs(message["timestamp"] ?? message["start"]) },
      });
      return;
    }

    if (type === "UtteranceEnd") {
      emit(session, {
        type: "speech-end",
        data: { atMs: secondsToMs(message["last_word_end"] ?? message["timestamp"]) },
      });
      return;
    }

    if (type === "Error") {
      const errMsg =
        typeof message["message"] === "string"
          ? message["message"]
          : typeof message["description"] === "string"
            ? message["description"]
            : "Deepgram stream error";
      emit(session, {
        type: "error",
        data: { message: errMsg, retryable: true },
      });
      return;
    }

    if (type === "Metadata" && session.closing) {
      for (const wake of session.closeWaiters.splice(0)) wake();
    }
  };

  const onClose = () => {
    if (session.closed || session.closing) {
      for (const wake of session.closeWaiters.splice(0)) wake();
      return;
    }
    session.dropped = true;
    session.ws = null;
    emit(session, {
      type: "error",
      data: {
        message: `${PROVIDER} upstream connection dropped`,
        retryable: true,
      },
    });
  };

  const onError = (event: { message?: string }) => {
    if (session.closed || session.closing) return;
    emit(session, {
      type: "error",
      data: {
        message: event.message ?? `${PROVIDER} WebSocket error`,
        retryable: true,
      },
    });
  };

  ws.addEventListener("message", onMessage);
  ws.addEventListener("close", onClose);
  ws.addEventListener("error", onError);
}

function resolveWebSocketImpl(
  options: DeepgramSttClientOptions,
): DeepgramWebSocketConstructor {
  // Prefer an injectable (tests). Default to `ws`, which accepts handshake
  // headers — Node's global WebSocket does not, and Deepgram requires
  // `Authorization: Token …` on the upgrade.
  if (options.WebSocketImpl) return options.WebSocketImpl;
  return WebSocket as unknown as DeepgramWebSocketConstructor;
}

function openSocket(
  WebSocketImpl: DeepgramWebSocketConstructor,
  url: string,
  token: string,
): Promise<DeepgramWebSocket> {
  return new Promise((resolve, reject) => {
    let settled = false;
    let ws: DeepgramWebSocket;
    try {
      // Prefer constructors that accept handshake headers (ws / undici).
      ws = new WebSocketImpl(url, undefined, {
        headers: { Authorization: `Token ${token}` },
      });
    } catch {
      // Browser-style constructors reject the options bag; fall back and
      // put the token in a subprotocol slot is not supported by Deepgram —
      // require a header-capable constructor instead.
      reject(
        new SttError(
          `${PROVIDER} WebSocket constructor rejected handshake headers. Pass a header-capable WebSocketImpl (e.g. the \`ws\` package).`,
          500,
        ),
      );
      return;
    }

    const onOpen = () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(ws);
    };
    const onError = (event: { message?: string }) => {
      if (settled) return;
      settled = true;
      cleanup();
      try {
        ws.close();
      } catch {
        // ignore
      }
      reject(new SttError(event.message ?? `${PROVIDER} failed to open listen socket`, 502));
    };
    const cleanup = () => {
      ws.removeEventListener("open", onOpen);
      ws.removeEventListener("error", onError);
    };
    ws.addEventListener("open", onOpen);
    ws.addEventListener("error", onError);
  });
}

/**
 * Build a Deepgram {@link SttDriver}. Credentials come from the standard
 * UTDK `Authorization: Bearer …` header injection.
 */
export async function createDeepgramClient(
  options: DeepgramSttClientOptions = {},
): Promise<SttDriver> {
  const token = secretFromHeaders(options.headers, PROVIDER, "Deepgram API key");
  const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
  const WebSocketImpl = resolveWebSocketImpl(options);
  const sessions = new Map<string, SessionRecord>();
  let nextId = 0;

  const ensureSocket = async (session: SessionRecord): Promise<DeepgramWebSocket> => {
    if (session.ws && session.ws.readyState === OPEN && !session.dropped) {
      return session.ws;
    }
    const url = buildListenUrl(baseUrl, session.args);
    const ws = await openSocket(WebSocketImpl, url, token);
    ws.binaryType = "arraybuffer";
    session.ws = ws;
    session.dropped = false;
    attachSocketHandlers(session, ws);
    return ws;
  };

  const driver: SttDriver = {
    capabilities: DEEPGRAM_CAPABILITIES,

    async openSession(rawArgs) {
      const args = (rawArgs ?? {}) as SttOpenArgs;
      assertOpenSupported(DEEPGRAM_CAPABILITIES, PROVIDER, args);

      const providerSessionId = `dg-${++nextId}`;
      const session: SessionRecord = {
        providerSessionId,
        args,
        token,
        ws: null,
        sink: null,
        segments: [],
        openedAt: Date.now(),
        audioDurationMs: 0,
        closing: false,
        closed: false,
        dropped: false,
        closeWaiters: [],
      };
      sessions.set(providerSessionId, session);
      await ensureSocket(session);
      return { providerSessionId };
    },

    async push(providerSessionId, message) {
      const session = sessions.get(providerSessionId);
      if (!session || session.closed) {
        throw new SttError(`${PROVIDER} session not found: ${providerSessionId}`, 404);
      }
      const body = message as unknown as SttPushMessage;
      if (typeof body?.audio !== "string") {
        throw new SttError(`${PROVIDER} push requires { audio: string, seq: number }`, 400);
      }
      const bytes = Buffer.from(body.audio, "base64");
      // 16 kHz mono s16le → 2 bytes/sample → duration.
      session.audioDurationMs += Math.round((bytes.byteLength / 2 / 16_000) * 1000);

      const ws = await ensureSocket(session);
      if (ws.readyState !== OPEN) {
        throw new SttError(`${PROVIDER} listen socket is not open`, 502);
      }
      ws.send(bytes);
    },

    async close(providerSessionId) {
      const session = sessions.get(providerSessionId);
      if (!session) {
        throw new SttError(`${PROVIDER} session not found: ${providerSessionId}`, 404);
      }
      if (session.closed) {
        return {
          text: session.segments.map((s) => s.text).join(" ").trim(),
          segments: session.segments,
          durationMs: session.audioDurationMs,
        } satisfies SttResult;
      }

      session.closing = true;
      const ws = session.ws;
      if (ws && ws.readyState === OPEN) {
        const closed = new Promise<void>((resolve) => {
          const timer = setTimeout(resolve, 2_000);
          session.closeWaiters.push(() => {
            clearTimeout(timer);
            resolve();
          });
        });
        try {
          ws.send(JSON.stringify({ type: "CloseStream" }));
        } catch {
          // Socket already gone — fall through to local close.
        }
        await closed;
        try {
          ws.close();
        } catch {
          // ignore
        }
      }

      session.closed = true;
      session.ws = null;
      sessions.delete(providerSessionId);

      const result: SttResult = {
        text: session.segments.map((s) => s.text).join(" ").trim(),
        segments: session.segments,
        durationMs: Math.max(
          session.audioDurationMs,
          Math.max(0, Date.now() - session.openedAt),
        ),
      };
      return result;
    },

    subscribe(providerSessionId, sink) {
      const session = sessions.get(providerSessionId);
      if (!session) {
        return () => undefined;
      }
      session.sink = sink;
      return () => {
        if (session.sink === sink) session.sink = null;
      };
    },
  };

  return driver;
}

const defaultClient = createLazyClient(() => createDeepgramClient());

export default defaultClient;

/** Discovery entries for GET /tools. */
export const tools = sttToolEntries(PROVIDER, {
  label: "Deepgram",
  capabilities: DEEPGRAM_CAPABILITIES,
});
