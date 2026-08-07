/**
 * Contract unit tests: open-arg validation branches, discovery shape, and the
 * conformance suite against the in-memory fake driver.
 */

import { describe, expect, it } from "vitest";
import { createFakeSttDriver, runSttConformance } from "../conformance.js";
import {
  NO_STT_CAPABILITIES,
  REQUIRED_ENCODING,
  SttError,
  assertOpenSupported,
  secretFromHeaders,
  sttToolEntries,
  type SttCapabilities,
} from "../index.js";

const FULL: SttCapabilities = {
  streaming: true,
  encodings: [REQUIRED_ENCODING, "opus"],
  diarization: true,
  wordTimestamps: true,
  vad: true,
  languages: ["en", "es"],
};

const MINIMAL: SttCapabilities = {
  streaming: true,
  encodings: [REQUIRED_ENCODING],
  diarization: false,
  wordTimestamps: false,
  vad: false,
  languages: "auto",
};

describe("assertOpenSupported", () => {
  it("accepts defaults against a minimal capable provider", () => {
    expect(() => assertOpenSupported(MINIMAL, "fake")).not.toThrow();
  });

  it("rejects a non-streaming descriptor", () => {
    expect(() => assertOpenSupported(NO_STT_CAPABILITIES, "offline")).toThrow(
      /streaming/u,
    );
  });

  it("rejects a descriptor missing the required encoding", () => {
    const caps: SttCapabilities = {
      ...MINIMAL,
      encodings: ["opus"],
    };
    expect(() => assertOpenSupported(caps, "odd")).toThrow(
      new RegExp(REQUIRED_ENCODING, "u"),
    );
  });

  it("rejects diarization when the capability is false", () => {
    expect(() => assertOpenSupported(MINIMAL, "fake", { diarize: true })).toThrow(
      /diarization/u,
    );
    expect(() => assertOpenSupported(MINIMAL, "fake", { diarize: true })).toThrow(SttError);
  });

  it("rejects wordTimestamps when the capability is false", () => {
    expect(() =>
      assertOpenSupported(MINIMAL, "fake", { wordTimestamps: true }),
    ).toThrow(/wordTimestamps/u);
  });

  it("rejects an unadvertised encoding and names both sides", () => {
    try {
      assertOpenSupported(MINIMAL, "fake", { encoding: "opus" });
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(SttError);
      const message = (err as SttError).message;
      expect(message).toMatch(/opus/u);
      expect(message).toMatch(new RegExp(REQUIRED_ENCODING, "u"));
    }
  });

  it("accepts an advertised optional encoding", () => {
    expect(() => assertOpenSupported(FULL, "dg", { encoding: "opus" })).not.toThrow();
  });

  it("accepts diarize and wordTimestamps when declared", () => {
    expect(() =>
      assertOpenSupported(FULL, "dg", { diarize: true, wordTimestamps: true }),
    ).not.toThrow();
  });

  it("rejects a language absent from a fixed list", () => {
    expect(() => assertOpenSupported(FULL, "dg", { language: "fr" })).toThrow(/fr/u);
    expect(() => assertOpenSupported(FULL, "dg", { language: "en" })).not.toThrow();
  });

  it("skips language checks when languages is auto", () => {
    expect(() => assertOpenSupported(MINIMAL, "fake", { language: "xx" })).not.toThrow();
  });
});

describe("sttToolEntries", () => {
  it("declares open with streaming mode session", () => {
    const entries = sttToolEntries("deepgram", { capabilities: FULL });
    expect(entries).toHaveLength(1);
    expect(entries[0]).toMatchObject({
      name: "deepgram.open",
      streaming: "session",
    });
    expect(entries[0]!.description).toMatch(/does not capture/u);
  });

  it("exposes no capture operations", () => {
    const names = sttToolEntries("stt", { interfaceNamespace: true }).map((e) => e.name);
    expect(names.every((n) => !/capture|microphone|record/iu.test(n))).toBe(true);
  });

  it("uses binding-neutral copy for the interface namespace", () => {
    const [entry] = sttToolEntries("stt");
    expect(entry!.description).toMatch(/bound speech-to-text/u);
  });
});

describe("secretFromHeaders", () => {
  it("reads the bearer token the executor injects", () => {
    expect(secretFromHeaders({ Authorization: "Bearer secret" }, "deepgram")).toBe("secret");
  });

  it("names the provider when the secret is missing", () => {
    expect(() => secretFromHeaders({}, "deepgram")).toThrow(/deepgram/u);
  });
});

runSttConformance("fake", () => createFakeSttDriver(MINIMAL));
