/**
 * Deepgram STT driver tests: mock WebSocket conformance + drop → retryable error.
 */

import { EventEmitter } from "node:events";
import { describe, expect, it } from "vitest";
import { SessionManager, type SessionEvent } from "@utdk/common/streaming";
import { runSttConformance } from "@utdk/stt/conformance";
import {
  createDeepgramClient,
  DEEPGRAM_CAPABILITIES,
  type DeepgramWebSocket,
  type DeepgramWebSocketConstructor,
} from "../index.js";

class FakeSocket extends EventEmitter {
  readyState = 0;
  binaryType = "arraybuffer";
  sent: Array<string | Buffer | ArrayBuffer | Uint8Array> = [];
  closed = false;

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    if (typeof data === "string") {
      this.sent.push(data);
      return;
    }
    if (data instanceof ArrayBuffer) {
      this.sent.push(Buffer.from(data));
      return;
    }
    if (ArrayBuffer.isView(data)) {
      this.sent.push(Buffer.from(data.buffer, data.byteOffset, data.byteLength));
      return;
    }
    this.sent.push(String(data));
  }

  close(): void {
    this.closed = true;
    this.readyState = 3;
    this.emit("close", { code: 1000, reason: "" });
  }

  addEventListener(type: string, listener: (...args: unknown[]) => void): void {
    this.on(type, listener);
  }

  removeEventListener(type: string, listener: (...args: unknown[]) => void): void {
    this.off(type, listener);
  }

  /** Simulate Deepgram opening the socket. */
  open(): void {
    this.readyState = 1;
    this.emit("open", {});
  }

  /** Deliver a JSON vendor message. */
  deliver(message: unknown): void {
    this.emit("message", { data: JSON.stringify(message) });
  }
}

function createFakeWebSocketCtor(sockets: FakeSocket[]): DeepgramWebSocketConstructor {
  return class extends FakeSocket {
    constructor(
      public readonly url: string,
      _protocols?: string | string[],
      public readonly options?: { headers?: Record<string, string> },
    ) {
      super();
      sockets.push(this);
      queueMicrotask(() => this.open());
    }
  } as unknown as DeepgramWebSocketConstructor;
}

async function waitFor(
  predicate: () => boolean,
  label: string,
  timeoutMs = 1_000,
): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`timed out waiting for ${label}`);
    }
    await new Promise((r) => setTimeout(r, 5));
  }
}

describe("createDeepgramClient", () => {
  it("requires a bearer credential", async () => {
    await expect(createDeepgramClient({})).rejects.toThrow(/deepgram/i);
  });

  it("opens with Token auth and maps Results to partial/final", async () => {
    const sockets: FakeSocket[] = [];
    const driver = await createDeepgramClient({
      headers: { Authorization: "Bearer dg-secret" },
      WebSocketImpl: createFakeWebSocketCtor(sockets),
    });

    const { providerSessionId } = await driver.openSession({ wordTimestamps: true });
    await waitFor(() => sockets.length === 1 && sockets[0]!.readyState === 1, "socket open");

    const sock = sockets[0]!;
    expect(sock.options?.headers?.Authorization).toBe("Token dg-secret");
    expect(sock.url).toContain("encoding=linear16");
    expect(sock.url).toContain("sample_rate=16000");
    expect(sock.url).toContain("vad_events=true");

    const events: SessionEvent[] = [];
    const unsub = driver.subscribe(providerSessionId, (e) => events.push(e));

    sock.deliver({
      type: "Results",
      is_final: false,
      start: 0,
      duration: 0.5,
      channel: {
        alternatives: [{ transcript: "hel", words: [{ word: "hel", start: 0, end: 0.5 }] }],
      },
    });
    sock.deliver({
      type: "Results",
      is_final: true,
      start: 0,
      duration: 1,
      channel: {
        alternatives: [
          {
            transcript: "hello",
            words: [{ word: "hello", start: 0, end: 1, speaker: 0 }],
          },
        ],
      },
    });

    expect(events.some((e) => e.type === "partial")).toBe(true);
    expect(events.some((e) => e.type === "final")).toBe(true);
    const final = events.find((e) => e.type === "final");
    expect(final?.data).toEqual(
      expect.objectContaining({
        segment: expect.objectContaining({
          text: "hello",
          words: [expect.objectContaining({ text: "hello", startMs: 0, endMs: 1000 })],
        }),
      }),
    );

    await driver.push(providerSessionId, {
      audio: Buffer.alloc(320, 0).toString("base64"),
      seq: 0,
    });
    expect(sock.sent.some((s) => Buffer.isBuffer(s) || s instanceof Uint8Array)).toBe(true);

    // CloseStream handshake: deliver Metadata so close resolves promptly.
    const closePromise = driver.close(providerSessionId);
    await waitFor(
      () => sock.sent.some((s) => typeof s === "string" && s.includes("CloseStream")),
      "CloseStream",
    );
    sock.deliver({ type: "Metadata", request_id: "test" });
    const result = await closePromise;
    expect(result).toEqual(
      expect.objectContaining({
        text: "hello",
        segments: expect.any(Array),
        durationMs: expect.any(Number),
      }),
    );
    unsub();
  });

  it("emits retryable error on upstream drop and accepts further pushes", async () => {
    const sockets: FakeSocket[] = [];
    const driver = await createDeepgramClient({
      headers: { Authorization: "Bearer dg-secret" },
      WebSocketImpl: createFakeWebSocketCtor(sockets),
    });

    const manager = new SessionManager({
      idleTimeoutMs: 60_000,
      absoluteTimeoutMs: 60_000,
      mintId: () => "drop-test",
    });
    const events: SessionEvent[] = [];
    const { sessionId } = await manager.open(driver, "tester", {});
    await waitFor(() => sockets.length === 1, "first socket");

    const unsub = manager.subscribe(sessionId, "tester", (e) => events.push(e));

    // Drop the upstream while the session is active.
    sockets[0]!.close();
    await waitFor(
      () => events.some((e) => e.type === "error"),
      "retryable error",
    );
    const err = events.find((e) => e.type === "error");
    expect(err?.data).toEqual(
      expect.objectContaining({ retryable: true }),
    );
    expect(manager.getState(sessionId)).toBe("active");

    // Further push reconnects.
    await manager.push(sessionId, "tester", {
      audio: Buffer.alloc(320, 0).toString("base64"),
      seq: 0,
    });
    await waitFor(() => sockets.length === 2, "reconnect socket");
    expect(sockets[1]!.readyState).toBe(1);

    // Finish close on the new socket.
    const closePromise = manager.close(sessionId, "tester");
    await waitFor(
      () =>
        sockets[1]!.sent.some(
          (s) => typeof s === "string" && s.includes("CloseStream"),
        ),
      "CloseStream after reconnect",
    );
    sockets[1]!.deliver({ type: "Metadata" });
    await closePromise;
    unsub();
  });

  it("advertises Deepgram capabilities honestly", () => {
    expect(DEEPGRAM_CAPABILITIES).toEqual({
      streaming: true,
      encodings: ["pcm_s16le_16k"],
      diarization: true,
      wordTimestamps: true,
      vad: true,
      languages: "auto",
    });
  });
});

runSttConformance(
  "deepgram",
  async () => {
    const sockets: FakeSocket[] = [];
    const driver = await createDeepgramClient({
      headers: { Authorization: "Bearer conformance-key" },
      WebSocketImpl: createFakeWebSocketCtor(sockets),
    });
    // Auto-ack CloseStream during conformance close.
    const poll = setInterval(() => {
      for (const sock of sockets) {
        if (
          sock.sent.some((s) => typeof s === "string" && s.includes("CloseStream")) &&
          !sock.closed
        ) {
          sock.deliver({ type: "Metadata" });
        }
      }
    }, 5);
    return {
      driver,
      dispose: () => clearInterval(poll),
    };
  },
);
