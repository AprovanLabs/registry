import { describe, it, expect, vi } from "vitest";
import {
  SessionError,
  SessionManager,
  type SessionEvent,
  type StreamingSessionDriver,
  type TimerHandle,
} from "../streaming.js";

// ---------------------------------------------------------------------------
// Fake clock / timer
// ---------------------------------------------------------------------------

function createFakeClock(start = 0) {
  let now = start;
  let nextHandle = 1;
  const timers = new Map<number, { fireAt: number; fn: () => void }>();

  return {
    now: () => now,
    setTimeout: (fn: () => void, ms: number): TimerHandle => {
      const id = nextHandle++;
      timers.set(id, { fireAt: now + ms, fn });
      return id as unknown as TimerHandle;
    },
    clearTimeout: (handle: TimerHandle) => {
      timers.delete(handle as unknown as number);
    },
    advance(ms: number) {
      now += ms;
      const due = [...timers.entries()]
        .filter(([, t]) => t.fireAt <= now)
        .sort((a, b) => a[1].fireAt - b[1].fireAt);
      for (const [id, t] of due) {
        timers.delete(id);
        t.fn();
      }
    },
  };
}

// ---------------------------------------------------------------------------
// Mock driver
// ---------------------------------------------------------------------------

function createMockDriver(overrides?: Partial<StreamingSessionDriver>): {
  driver: StreamingSessionDriver;
  emit: (event: Omit<SessionEvent, "seq"> & { seq?: number }) => void;
  closed: string[];
  pushed: Array<{ id: string; message: Record<string, unknown> }>;
} {
  const sinks = new Map<string, (event: SessionEvent) => void>();
  const closed: string[] = [];
  const pushed: Array<{ id: string; message: Record<string, unknown> }> = [];
  let seq = 0;

  const driver: StreamingSessionDriver = {
    capabilities: { streaming: true, encodings: ["json"] },
    async openSession() {
      return { providerSessionId: `prov-${++seq}` };
    },
    async push(providerSessionId, message) {
      pushed.push({ id: providerSessionId, message });
    },
    async close(providerSessionId) {
      closed.push(providerSessionId);
      return { done: true, providerSessionId };
    },
    subscribe(providerSessionId, sink) {
      sinks.set(providerSessionId, sink);
      return () => {
        sinks.delete(providerSessionId);
      };
    },
    ...overrides,
  };

  return {
    driver,
    emit(event) {
      for (const sink of sinks.values()) {
        sink({ type: event.type, seq: event.seq ?? 0, data: event.data });
      }
    },
    closed,
    pushed,
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("SessionManager", () => {
  it("opens an active session with minted id and capabilities", async () => {
    const { driver } = createMockDriver();
    const manager = new SessionManager({ mintId: () => "sess-1" });
    const result = await manager.open(driver, "alice", { lang: "en" });
    expect(result).toEqual({
      sessionId: "sess-1",
      capabilities: { streaming: true, encodings: ["json"] },
    });
    expect(manager.getState("sess-1")).toBe("active");
  });

  it("delivers driver events in order with consecutive seq and zero pushes", async () => {
    const { driver, emit } = createMockDriver();
    const manager = new SessionManager({ mintId: () => "sess-evt" });
    await manager.open(driver, "alice");

    const received: SessionEvent[] = [];
    manager.subscribe("sess-evt", "alice", (e) => received.push(e));

    emit({ type: "partial", data: { text: "hel" } });
    emit({ type: "partial", data: { text: "hello" } });

    expect(received).toEqual([
      { type: "partial", seq: 0, data: { text: "hel" } },
      { type: "partial", seq: 1, data: { text: "hello" } },
    ]);
  });

  it("push after close returns 409 with session-not-found", async () => {
    const { driver, closed } = createMockDriver();
    const manager = new SessionManager({ mintId: () => "sess-close" });
    await manager.open(driver, "alice");

    const endEvents: SessionEvent[] = [];
    manager.subscribe("sess-close", "alice", (e) => endEvents.push(e));

    const terminal = await manager.close("sess-close", "alice");
    expect(terminal).toEqual({ done: true, providerSessionId: "prov-1" });
    expect(closed).toEqual(["prov-1"]);
    expect(manager.getState("sess-close")).toBe("closed");
    expect(endEvents.at(-1)).toMatchObject({ type: "end", data: null });

    await expect(manager.push("sess-close", "alice", { audio: "..." })).rejects.toMatchObject({
      name: "SessionError",
      code: "session-not-found",
      status: 409,
    });
  });

  it("idle reclamation releases the driver and marks session-expired", async () => {
    const clock = createFakeClock();
    const { driver, closed } = createMockDriver();
    const manager = new SessionManager({
      mintId: () => "sess-idle",
      idleTimeoutMs: 1_000,
      absoluteTimeoutMs: 60_000,
      now: clock.now,
      setTimeout: clock.setTimeout,
      clearTimeout: clock.clearTimeout,
    });

    await manager.open(driver, "alice");
    expect(closed).toHaveLength(0);

    clock.advance(1_000);
    // finalize is async
    await vi.waitFor(() => expect(closed).toEqual(["prov-1"]));
    expect(manager.getState("sess-idle")).toBe("closed");

    await expect(manager.push("sess-idle", "alice", { x: 1 })).rejects.toMatchObject({
      code: "session-expired",
      status: 409,
    });
  });

  it("absolute cap fires while pushes continue", async () => {
    const clock = createFakeClock();
    const { driver, closed, pushed } = createMockDriver();
    const manager = new SessionManager({
      mintId: () => "sess-abs",
      idleTimeoutMs: 10_000,
      absoluteTimeoutMs: 5_000,
      now: clock.now,
      setTimeout: clock.setTimeout,
      clearTimeout: clock.clearTimeout,
    });

    await manager.open(driver, "alice");

    // Activity keeps resetting idle, but absolute still wins.
    clock.advance(2_000);
    await manager.push("sess-abs", "alice", { n: 1 });
    clock.advance(2_000);
    await manager.push("sess-abs", "alice", { n: 2 });
    expect(pushed).toHaveLength(2);

    clock.advance(1_000); // total 5_000 from open
    await vi.waitFor(() => expect(closed).toEqual(["prov-1"]));

    await expect(manager.push("sess-abs", "alice", { n: 3 })).rejects.toMatchObject({
      code: "session-expired",
      status: 409,
    });
  });

  it("ownership check distinguishes session-forbidden from session-not-found", async () => {
    const { driver } = createMockDriver();
    const manager = new SessionManager({ mintId: () => "sess-own" });
    await manager.open(driver, "alice");

    await expect(manager.push("sess-own", "bob", { x: 1 })).rejects.toMatchObject({
      code: "session-forbidden",
      status: 403,
    });

    await expect(manager.push("missing", "alice", { x: 1 })).rejects.toMatchObject({
      code: "session-not-found",
      status: 404,
    });

    expect(() => manager.subscribe("sess-own", "bob", () => {})).toThrow(SessionError);
    try {
      manager.subscribe("missing", "alice", () => {});
      expect.unreachable();
    } catch (err) {
      expect(err).toMatchObject({ code: "session-not-found", status: 404 });
    }
  });

  it("rejects open when driver capabilities.streaming is false", async () => {
    const { driver } = createMockDriver({
      capabilities: { streaming: false, encodings: [] },
    });
    const manager = new SessionManager();
    await expect(manager.open(driver, "alice")).rejects.toMatchObject({
      code: "streaming-unsupported",
    });
  });
});
