/**
 * Provider conformance suite for `@utdk/stt`.
 *
 * A provider module runs this against itself (see Deepgram stream) so the
 * contract's invariants are checked once, not re-litigated per adapter.
 */

import { describe, expect, it } from "vitest";
import type { SessionEvent } from "@utdk/common/streaming";
import { SessionManager } from "@utdk/common/streaming";
import {
  REQUIRED_ENCODING,
  assertOpenSupported,
  type SttCapabilities,
  type SttDriver,
  type SttOpenArgs,
  type SttPushMessage,
  type SttResult,
} from "./index.js";

export interface SttConformanceOptions {
  /** Skip the suite (e.g. live vendor without credentials). */
  skip?: boolean;
  /** Provider id used in validation error messages. */
  provider?: string;
  /**
   * Open args that should succeed against this driver.
   * Defaults to `{}` (required encoding, no optional capabilities).
   */
  openArgs?: SttOpenArgs;
}

/**
 * Register vitest cases that every STT driver must pass.
 *
 * @param name — suite label, usually the provider id
 * @param factory — builds a fresh driver (and optional teardown)
 */
export function runSttConformance(
  name: string,
  factory: () =>
    | SttDriver
    | Promise<SttDriver>
    | { driver: SttDriver; dispose?: () => void | Promise<void> }
    | Promise<{ driver: SttDriver; dispose?: () => void | Promise<void> }>,
  options: SttConformanceOptions = {},
): void {
  const suite = options.skip ? describe.skip : describe;
  const provider = options.provider ?? name;
  const openArgs = options.openArgs ?? {};

  suite(`stt conformance: ${name}`, () => {
    let driver: SttDriver;
    let dispose: (() => void | Promise<void>) | undefined;

    const setup = async () => {
      const built = await factory();
      if ("driver" in built && built.driver) {
        driver = built.driver;
        dispose = built.dispose;
      } else {
        driver = built as SttDriver;
      }
    };

    const teardown = async () => {
      if (dispose) await dispose();
    };

    it("advertises streaming and the required encoding", async () => {
      await setup();
      try {
        const caps = driver.capabilities;
        expect(caps.streaming).toBe(true);
        expect(caps.encodings).toContain(REQUIRED_ENCODING);
        expect(typeof caps.diarization).toBe("boolean");
        expect(typeof caps.wordTimestamps).toBe("boolean");
        expect(typeof caps.vad).toBe("boolean");
        expect(
          caps.languages === "auto" || Array.isArray(caps.languages),
        ).toBe(true);
      } finally {
        await teardown();
      }
    });

    it("rejects undeclared diarization and wordTimestamps at open validation", async () => {
      await setup();
      try {
        const caps = driver.capabilities;
        if (!caps.diarization) {
          expect(() =>
            assertOpenSupported(caps, provider, { diarize: true }),
          ).toThrow(/diarization/u);
        }
        if (!caps.wordTimestamps) {
          expect(() =>
            assertOpenSupported(caps, provider, { wordTimestamps: true }),
          ).toThrow(/wordTimestamps/u);
        }
        expect(() =>
          assertOpenSupported(caps, provider, { encoding: "not-a-real-encoding" }),
        ).toThrow(/encoding/u);
      } finally {
        await teardown();
      }
    });

    it("opens, accepts a push, and closes with an SttResult shape", async () => {
      await setup();
      try {
        assertOpenSupported(driver.capabilities, provider, openArgs);

        const manager = new SessionManager({
          idleTimeoutMs: 60_000,
          absoluteTimeoutMs: 60_000,
          mintId: () => `conf-${name}`,
        });
        const events: SessionEvent[] = [];

        const { sessionId } = await manager.open(driver, "conformance", openArgs as Record<string, unknown>);
        const unsubscribe = manager.subscribe(sessionId, "conformance", (event) => {
          events.push(event);
        });

        const push: SttPushMessage = {
          // A few samples of silence — enough to exercise the path.
          audio: Buffer.alloc(320, 0).toString("base64"),
          seq: 0,
        };
        await manager.push(sessionId, "conformance", push as unknown as Record<string, unknown>);

        const result = (await manager.close(sessionId, "conformance")) as SttResult;
        unsubscribe();

        expect(result).toEqual(
          expect.objectContaining({
            text: expect.any(String),
            segments: expect.any(Array),
            durationMs: expect.any(Number),
          }),
        );
        expect(result.durationMs).toBeGreaterThanOrEqual(0);
        // Terminal end frame from the session manager.
        expect(events.some((e) => e.type === "end")).toBe(true);
      } finally {
        await teardown();
      }
    });
  });
}

/** Minimal in-memory driver for contract self-tests. */
export function createFakeSttDriver(
  capabilities: SttCapabilities = {
    streaming: true,
    encodings: [REQUIRED_ENCODING],
    diarization: false,
    wordTimestamps: false,
    vad: false,
    languages: "auto",
  },
): SttDriver & {
  emit: (event: Omit<SessionEvent, "seq"> & { seq?: number }) => void;
} {
  const sinks = new Map<string, (event: SessionEvent) => void>();
  let nextId = 0;
  const openedAt = new Map<string, number>();
  const segments = new Map<string, SttResult["segments"]>();

  const driver: SttDriver & {
    emit: (event: Omit<SessionEvent, "seq"> & { seq?: number }) => void;
  } = {
    capabilities,
    async openSession(_args) {
      const providerSessionId = `fake-${++nextId}`;
      openedAt.set(providerSessionId, Date.now());
      segments.set(providerSessionId, []);
      return { providerSessionId };
    },
    async push(providerSessionId, message) {
      const audio = (message as unknown as SttPushMessage).audio;
      if (typeof audio !== "string") {
        throw new Error("push requires { audio: string, seq: number }");
      }
      const sink = sinks.get(providerSessionId);
      const text = "hello";
      sink?.({
        type: "partial",
        seq: 0,
        data: { text },
      });
      const segment = {
        text,
        startMs: 0,
        endMs: 100,
      };
      segments.get(providerSessionId)?.push(segment);
      sink?.({
        type: "final",
        seq: 0,
        data: { segment },
      });
    },
    async close(providerSessionId) {
      const segs = segments.get(providerSessionId) ?? [];
      const started = openedAt.get(providerSessionId) ?? Date.now();
      const result: SttResult = {
        text: segs.map((s) => s.text).join(" ").trim(),
        segments: segs,
        durationMs: Math.max(0, Date.now() - started),
      };
      sinks.delete(providerSessionId);
      openedAt.delete(providerSessionId);
      segments.delete(providerSessionId);
      return result;
    },
    subscribe(providerSessionId, sink) {
      sinks.set(providerSessionId, sink);
      return () => {
        sinks.delete(providerSessionId);
      };
    },
    emit(event) {
      for (const sink of sinks.values()) {
        sink({ type: event.type, seq: event.seq ?? 0, data: event.data });
      }
    },
  };

  return driver;
}
