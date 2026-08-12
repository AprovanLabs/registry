/**
 * @utdk/stt — the shared contract for UTDK speech-to-text providers.
 *
 * Speech recognition is a streaming session: open, push audio, read partial
 * and final transcripts, then close for the terminal result. Vendors differ
 * (Deepgram's duplex WebSocket, AssemblyAI's streaming API, an on-device
 * transcribe.cpp process) and one of them will live on a laptop — so provider
 * modules are handwritten, exactly like the hosts on `@utdk/sandbox`, and all
 * of them speak this contract:
 *
 *   - the operation surface is a session — `open` / push / close — using the
 *     mechanism in `@utdk/common/streaming`;
 *   - audio always arrives as push payloads supplied by the caller; the
 *     contract defines no operation that opens a capture device, so a remote
 *     vendor and a local model can both fulfill it;
 *   - every backend resolves to the same {@link SttEvent} / {@link SttResult}
 *     shapes, with `pcm_s16le_16k` as the required wire encoding;
 *   - the secret arrives as the standard UTDK `Authorization: Bearer …`
 *     header injection.
 *
 * Diarization is a *capability*, not an operation. Some providers produce
 * speaker labels in the same pass as the transcript (combined ASR+diarize
 * models); others expose a request flag; a few cannot at all. Splitting
 * diarization into its own call would force the combined case to run twice,
 * and always returning speaker fields would hide the difference between "one
 * speaker" and "not supported". A caller reads {@link SttCapabilities}; a
 * session opened with `diarize: true` against a driver that lacks the
 * capability fails at open with a message naming what was asked.
 *
 * Word timestamps and voice-activity detection follow the same rule.
 * Capabilities are declared, not assumed — a driver asked for something it
 * lacks fails loudly rather than degrading in silence.
 */

import type { StreamingMode, StreamingSessionDriver } from "@utdk/common/streaming";

/** Default absolute session budget; override via the streaming session manager. */
export const DEFAULT_SESSION_TIMEOUT_MS = 300_000;

/** Required wire encoding: 16 kHz mono signed 16-bit PCM, base64 in push. */
export const REQUIRED_ENCODING = "pcm_s16le_16k";

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

/** Error with an HTTP-ish status for hosts that map errors onto responses. */
export class SttError extends Error {
  readonly status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "SttError";
    this.status = status;
  }
}

// ---------------------------------------------------------------------------
// Capabilities
// ---------------------------------------------------------------------------

/**
 * What a transcription backend can actually do. Extends the streaming
 * descriptor (`streaming` + `encodings`) with STT-specific optionals.
 *
 * `encodings` MUST include {@link REQUIRED_ENCODING}. Extra encodings
 * (e.g. `opus`) are opt-in for callers that check the descriptor first.
 */
export interface SttCapabilities {
  /** Always true for this contract — session transcription is the surface. */
  streaming: boolean;
  /** Upstream payload encodings; must include {@link REQUIRED_ENCODING}. */
  encodings: string[];
  /** Final segments may carry opaque, session-scoped speaker ids. */
  diarization: boolean;
  /** Segments may include word-level timing when the caller asks. */
  wordTimestamps: boolean;
  /** Provider detects end of utterance (`speech-start` / `speech-end`). */
  vad: boolean;
  /** Supported BCP-47 tags, or `"auto"` when the provider picks. */
  languages: string[] | "auto";
}

export const NO_STT_CAPABILITIES: SttCapabilities = {
  streaming: false,
  encodings: [REQUIRED_ENCODING],
  diarization: false,
  wordTimestamps: false,
  vad: false,
  languages: "auto",
};

// ---------------------------------------------------------------------------
// Session args & messages
// ---------------------------------------------------------------------------

export interface SttOpenArgs {
  /** Omit for the provider default or auto-detect. */
  language?: string;
  /** Requires {@link SttCapabilities.diarization}. */
  diarize?: boolean;
  /** Requires {@link SttCapabilities.wordTimestamps}. */
  wordTimestamps?: boolean;
  /** Defaults to {@link REQUIRED_ENCODING}; must be advertised. */
  encoding?: string;
  model?: string;
  [option: string]: unknown;
}

export interface SttPushMessage {
  /** Base64 audio in the session's encoding. */
  audio: string;
  /** Caller-monotonic from 0; providers may use it to detect loss. */
  seq: number;
}

export interface SttWord {
  text: string;
  startMs: number;
  endMs: number;
  /** Present only when diarization is active for the session. */
  speaker?: string;
}

export interface SttSegment {
  text: string;
  startMs: number;
  endMs: number;
  speaker?: string;
  words?: SttWord[];
}

/**
 * Session event payloads, discriminated by `SessionEvent.type`.
 *
 * `final` settles one segment — not the session. The complete transcript
 * comes only from {@link SttResult} on close. Speaker ids are opaque and
 * meaningful only within one session.
 */
export type SttEvent =
  | { type: "partial"; data: { text: string; segment?: SttSegment } }
  | { type: "final"; data: { segment: SttSegment } }
  | { type: "speech-start" | "speech-end"; data: { atMs: number } }
  | { type: "error"; data: { message: string; retryable: boolean } };

/** Terminal result of close. */
export interface SttResult {
  text: string;
  segments: SttSegment[];
  durationMs: number;
}

/**
 * A provider driver: {@link StreamingSessionDriver} with STT capabilities.
 * `openSession` / `push` / `close` / `subscribe` follow the streaming contract;
 * open args are {@link SttOpenArgs}, push bodies {@link SttPushMessage}, and
 * close resolves to {@link SttResult}.
 */
export interface SttDriver extends StreamingSessionDriver {
  readonly capabilities: SttCapabilities;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/**
 * Check an open request against what the provider can actually do, before a
 * session is created. Every branch here is a promise the gateway would
 * otherwise make on the driver's behalf and silently break.
 */
export function assertOpenSupported(
  capabilities: SttCapabilities,
  provider: string,
  args: SttOpenArgs = {},
): void {
  if (!capabilities.streaming) {
    throw new SttError(
      `${provider} does not support streaming sessions (streaming=false)`,
      501,
    );
  }

  if (!capabilities.encodings.includes(REQUIRED_ENCODING)) {
    throw new SttError(
      `${provider} must advertise encoding "${REQUIRED_ENCODING}" ` +
        `(advertised: ${formatEncodings(capabilities.encodings)})`,
      501,
    );
  }

  if (args.diarize === true && !capabilities.diarization) {
    throw new SttError(
      `${provider} does not support "diarization" ` +
        `(requested diarize=true; capabilities.diarization=false)`,
      501,
    );
  }

  if (args.wordTimestamps === true && !capabilities.wordTimestamps) {
    throw new SttError(
      `${provider} does not support "wordTimestamps" ` +
        `(requested wordTimestamps=true; capabilities.wordTimestamps=false)`,
      501,
    );
  }

  const encoding = args.encoding ?? REQUIRED_ENCODING;
  if (!capabilities.encodings.includes(encoding)) {
    throw new SttError(
      `${provider} does not support encoding "${encoding}" ` +
        `(supported: ${formatEncodings(capabilities.encodings)})`,
      400,
    );
  }

  if (args.language !== undefined && Array.isArray(capabilities.languages)) {
    if (!capabilities.languages.includes(args.language)) {
      throw new SttError(
        `${provider} does not support language "${args.language}" ` +
          `(supported: ${capabilities.languages.join(", ") || "(none)"})`,
        400,
      );
    }
  }
}

function formatEncodings(encodings: string[]): string {
  return encodings.length > 0 ? encodings.join(", ") : "(none)";
}

/**
 * Pull the provider secret out of the injected headers (the UTDK executor
 * translates a `bearer_token` credential into `Authorization: Bearer …`).
 */
export function secretFromHeaders(
  headers: Record<string, string> | undefined,
  provider: string,
  secretName = "API token",
): string {
  const raw = headers?.["Authorization"] ?? headers?.["authorization"] ?? "";
  const match = /^Bearer\s+(.+)$/iu.exec(raw);
  if (!match?.[1]) {
    throw new SttError(
      `${provider} needs a bearer_token credential holding the ${secretName}. Add one for provider "${provider}".`,
      400,
    );
  }
  return match[1];
}

// ---------------------------------------------------------------------------
// Discovery
// ---------------------------------------------------------------------------

export type SttToolEntry = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  outputSchema?: unknown;
  streaming?: StreamingMode;
  effect: "observation" | "action";
};

/**
 * Tool-discovery entries for an stt provider — the static `tools` export the
 * gateway's `GET /tools` prefers over runtime metadata.
 *
 * Only `open` is listed: push and close are the session protocol from
 * `@utdk/common/streaming`, not separate discoverable operations. `open`
 * declares streaming mode `"session"` so callers learn the call shape from
 * discovery without out-of-band knowledge.
 *
 * No entry initiates, configures, or reads from an audio input device —
 * providers never capture.
 */
export function sttToolEntries(
  provider: string,
  details: {
    label?: string;
    capabilities?: SttCapabilities;
    /** Describe the generic `stt` namespace rather than one implementation. */
    interfaceNamespace?: boolean;
  } = {},
): SttToolEntry[] {
  const interfaceNs =
    details.interfaceNamespace === true || provider === "stt" || provider.startsWith("stt:");
  const label = details.label ?? (interfaceNs ? "the workspace's bound speech-to-text provider" : provider);
  const capabilities = details.capabilities;
  const encodings = capabilities?.encodings ?? [REQUIRED_ENCODING];

  return [
    {
      name: `${provider}.open`,
      description:
        `Open a streaming transcription session on ${label}. ` +
        "Push base64 audio chunks, subscribe to partial/final events, then close for { text, segments, durationMs }. " +
        `Required encoding: ${REQUIRED_ENCODING}. Audio is caller-supplied — this operation does not capture.`,
      inputSchema: {
        type: "object",
        properties: {
          language: {
            type: "string",
            description: "BCP-47 language tag; omit for provider default or auto",
          },
          diarize: {
            type: "boolean",
            description: "Request speaker labels (requires capabilities.diarization)",
          },
          wordTimestamps: {
            type: "boolean",
            description: "Request word-level timing (requires capabilities.wordTimestamps)",
          },
          encoding: {
            type: "string",
            description: `Audio encoding (default ${REQUIRED_ENCODING}; must be advertised)`,
            enum: encodings,
          },
          model: { type: "string", description: "Provider model id, when selectable" },
        },
      },
      streaming: "session",
      effect: "action",
    },
  ];
}
