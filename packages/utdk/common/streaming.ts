/**
 * Contract-agnostic streaming session mechanics for @utdk.
 *
 * Providers implement `StreamingSessionDriver`; the gateway owns a
 * `SessionManager` that mints ids, enforces ownership, fans out events,
 * and reclaims idle / absolute-expired sessions.
 */

/** Mode declared per operation in discovery. Absent ≡ false. */
export type StreamingMode = "response" | "session" | false;

export interface StreamingCapabilities {
  /** False means: never bind this provider to a session operation. */
  streaming: boolean;
  /** Upstream payload encodings the driver accepts. */
  encodings: string[];
}

export interface SessionEvent {
  /** Contract-defined discriminator, e.g. "partial" | "final" | "error". */
  type: string;
  /** Monotonic per session, starting at 0. */
  seq: number;
  data: unknown;
}

export interface StreamingSessionDriver {
  readonly capabilities: StreamingCapabilities;
  openSession(args: Record<string, unknown>): Promise<{ providerSessionId: string }>;
  push(providerSessionId: string, message: Record<string, unknown>): Promise<void>;
  close(providerSessionId: string): Promise<unknown>;
  /** Driver-emitted events; the manager forwards them to the SSE channel. */
  subscribe(providerSessionId: string, sink: (event: SessionEvent) => void): () => void;
}

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

export type SessionErrorCode =
  | "session-not-found"
  | "session-expired"
  | "session-forbidden"
  | "streaming-unsupported";

export class SessionError extends Error {
  readonly code: SessionErrorCode;
  /** HTTP status hint for the tools surface. */
  readonly status: number;

  constructor(code: SessionErrorCode, message?: string, status?: number) {
    super(message ?? code);
    this.name = "SessionError";
    this.code = code;
    this.status = status ?? defaultStatus(code);
  }
}

function defaultStatus(code: SessionErrorCode): number {
  switch (code) {
    case "session-forbidden":
      return 403;
    case "session-expired":
      return 410;
    case "streaming-unsupported":
      return 400;
    case "session-not-found":
    default:
      return 404;
  }
}

// ---------------------------------------------------------------------------
// Session manager
// ---------------------------------------------------------------------------

export type SessionState = "open" | "active" | "closing" | "closed";

export type TimerHandle = ReturnType<typeof setTimeout>;

export interface SessionManagerOptions {
  /** Idle timeout without a push or emitted event. Default: 60_000. */
  idleTimeoutMs?: number;
  /** Absolute lifetime from open. Default: 1_800_000 (30 min). */
  absoluteTimeoutMs?: number;
  /** Injectable clock (epoch ms). Defaults to Date.now. */
  now?: () => number;
  /** Injectable timer. Defaults to global setTimeout. */
  setTimeout?: (fn: () => void, ms: number) => TimerHandle;
  /** Injectable clear. Defaults to global clearTimeout. */
  clearTimeout?: (handle: TimerHandle) => void;
  /** Injectable id mint. Defaults to crypto.randomUUID. */
  mintId?: () => string;
}

export interface OpenSessionResult {
  sessionId: string;
  capabilities: StreamingCapabilities;
}

type SessionSink = (event: SessionEvent) => void;

interface SessionRecord {
  sessionId: string;
  principal: string;
  driver: StreamingSessionDriver;
  providerSessionId: string;
  state: SessionState;
  /** True once reclaimed by idle or absolute expiry. */
  expired: boolean;
  nextSeq: number;
  openedAt: number;
  lastActivityAt: number;
  sinks: Set<SessionSink>;
  unsubscribeDriver: (() => void) | null;
  idleTimer: TimerHandle | null;
  absoluteTimer: TimerHandle | null;
  closeResult: unknown;
}

const DEFAULT_IDLE_MS = 60_000;
const DEFAULT_ABSOLUTE_MS = 30 * 60_000;

export class SessionManager {
  private readonly idleTimeoutMs: number;
  private readonly absoluteTimeoutMs: number;
  private readonly now: () => number;
  private readonly schedule: (fn: () => void, ms: number) => TimerHandle;
  private readonly unschedule: (handle: TimerHandle) => void;
  private readonly mintId: () => string;
  private readonly sessions = new Map<string, SessionRecord>();

  constructor(options: SessionManagerOptions = {}) {
    this.idleTimeoutMs = options.idleTimeoutMs ?? DEFAULT_IDLE_MS;
    this.absoluteTimeoutMs = options.absoluteTimeoutMs ?? DEFAULT_ABSOLUTE_MS;
    this.now = options.now ?? (() => Date.now());
    this.schedule = options.setTimeout ?? ((fn, ms) => setTimeout(fn, ms));
    this.unschedule = options.clearTimeout ?? ((h) => clearTimeout(h));
    this.mintId = options.mintId ?? (() => crypto.randomUUID());
  }

  /**
   * Open a provider session, record ownership, and return the public session id.
   * On success the session is `active`.
   */
  async open(
    driver: StreamingSessionDriver,
    principal: string,
    args: Record<string, unknown> = {},
  ): Promise<OpenSessionResult> {
    if (!driver.capabilities.streaming) {
      throw new SessionError(
        "streaming-unsupported",
        "provider does not support streaming sessions",
      );
    }

    const sessionId = this.mintId();
    const openedAt = this.now();
    const record: SessionRecord = {
      sessionId,
      principal,
      driver,
      providerSessionId: "",
      state: "open",
      expired: false,
      nextSeq: 0,
      openedAt,
      lastActivityAt: openedAt,
      sinks: new Set(),
      unsubscribeDriver: null,
      idleTimer: null,
      absoluteTimer: null,
      closeResult: undefined,
    };
    this.sessions.set(sessionId, record);

    try {
      const { providerSessionId } = await driver.openSession(args);
      record.providerSessionId = providerSessionId;
      record.unsubscribeDriver = driver.subscribe(providerSessionId, (event) => {
        this.onDriverEvent(record, event);
      });
      record.state = "active";
      this.armAbsoluteTimer(record);
      this.resetIdleTimer(record);
      return { sessionId, capabilities: driver.capabilities };
    } catch (err) {
      this.sessions.delete(sessionId);
      throw err;
    }
  }

  /** Current state, or undefined if the id is unknown. */
  getState(sessionId: string): SessionState | undefined {
    return this.sessions.get(sessionId)?.state;
  }

  /**
   * Subscribe to session events (SSE fan-out). Throws on ownership /
   * existence / expiry failures.
   */
  subscribe(sessionId: string, principal: string, sink: SessionSink): () => void {
    const record = this.requireSession(sessionId, principal);
    this.assertActive(record);
    record.sinks.add(sink);
    return () => {
      record.sinks.delete(sink);
    };
  }

  /** Deliver one upstream message to an active session. */
  async push(
    sessionId: string,
    principal: string,
    message: Record<string, unknown>,
  ): Promise<void> {
    const record = this.requireSession(sessionId, principal);
    this.assertActive(record);
    await record.driver.push(record.providerSessionId, message);
    record.lastActivityAt = this.now();
    this.resetIdleTimer(record);
  }

  /**
   * Close an active session, emit a terminal `end` event, and return the
   * driver's terminal result.
   */
  async close(sessionId: string, principal: string): Promise<unknown> {
    const record = this.requireSession(sessionId, principal);
    this.assertActive(record);
    return this.finalize(record, { expired: false });
  }

  // -------------------------------------------------------------------------
  // Internals
  // -------------------------------------------------------------------------

  private requireSession(sessionId: string, principal: string): SessionRecord {
    const record = this.sessions.get(sessionId);
    if (!record) {
      throw new SessionError("session-not-found", "session not found");
    }
    if (record.principal !== principal) {
      throw new SessionError("session-forbidden", "session owned by another principal");
    }
    return record;
  }

  /** Push / subscribe / close on a non-active session → 409. */
  private assertActive(record: SessionRecord): void {
    if (record.state === "active") return;
    throw new SessionError(
      record.expired ? "session-expired" : "session-not-found",
      record.expired ? "session expired" : "session is not active",
      409,
    );
  }

  private onDriverEvent(record: SessionRecord, event: SessionEvent): void {
    if (record.state !== "active") return;
    const stamped: SessionEvent = {
      type: event.type,
      seq: record.nextSeq++,
      data: event.data,
    };
    record.lastActivityAt = this.now();
    this.resetIdleTimer(record);
    this.fanOut(record, stamped);
  }

  private fanOut(record: SessionRecord, event: SessionEvent): void {
    for (const sink of record.sinks) {
      try {
        sink(event);
      } catch {
        // Sink errors must not break other subscribers or the session.
      }
    }
  }

  private emitEnd(record: SessionRecord): void {
    const end: SessionEvent = {
      type: "end",
      seq: record.nextSeq++,
      data: null,
    };
    this.fanOut(record, end);
    record.sinks.clear();
  }

  private async finalize(
    record: SessionRecord,
    opts: { expired: boolean },
  ): Promise<unknown> {
    if (record.state !== "active") {
      return record.closeResult;
    }
    record.state = "closing";
    this.clearTimers(record);
    if (record.unsubscribeDriver) {
      try {
        record.unsubscribeDriver();
      } catch {
        // ignore
      }
      record.unsubscribeDriver = null;
    }

    let result: unknown;
    try {
      result = await record.driver.close(record.providerSessionId);
    } catch (err) {
      if (!opts.expired) throw err;
      result = undefined;
    }
    record.closeResult = result;
    record.expired = opts.expired;
    this.emitEnd(record);
    record.state = "closed";
    return result;
  }

  private reclaim(record: SessionRecord): void {
    if (record.state !== "active") return;
    void this.finalize(record, { expired: true });
  }

  private clearTimers(record: SessionRecord): void {
    if (record.idleTimer !== null) {
      this.unschedule(record.idleTimer);
      record.idleTimer = null;
    }
    if (record.absoluteTimer !== null) {
      this.unschedule(record.absoluteTimer);
      record.absoluteTimer = null;
    }
  }

  private resetIdleTimer(record: SessionRecord): void {
    if (record.idleTimer !== null) {
      this.unschedule(record.idleTimer);
      record.idleTimer = null;
    }
    if (record.state !== "active") return;
    const idleMs = this.idleTimeoutMs;
    record.idleTimer = this.schedule(() => {
      record.idleTimer = null;
      // Confirm idle relative to injectable clock (handles early/fake fires).
      if (this.now() - record.lastActivityAt >= idleMs) {
        this.reclaim(record);
      } else if (record.state === "active") {
        this.resetIdleTimer(record);
      }
    }, idleMs);
  }

  private armAbsoluteTimer(record: SessionRecord): void {
    if (record.absoluteTimer !== null) {
      this.unschedule(record.absoluteTimer);
      record.absoluteTimer = null;
    }
    const remaining = record.openedAt + this.absoluteTimeoutMs - this.now();
    if (remaining <= 0) {
      this.reclaim(record);
      return;
    }
    record.absoluteTimer = this.schedule(() => {
      record.absoluteTimer = null;
      if (this.now() - record.openedAt >= this.absoluteTimeoutMs) {
        this.reclaim(record);
      }
    }, remaining);
  }
}
