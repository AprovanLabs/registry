/**
 * Flow 1 — generation integrity. Runs with zero credentials, so this is the
 * suite that belongs on every commit.
 *
 * It answers: after a regeneration, is every provider still structurally
 * sound, and does every probe still point at an operation that exists? Without
 * this, a renamed access path would turn a live E2E test into a permanent skip
 * and nobody would notice.
 */

import { describe, expect, it } from "vitest";
import { credentialEnvKeys } from "../src/env.js";
import { inspectGeneration } from "../src/flows.js";
import { PROVIDERS, PROBED, factoryName } from "../src/matrix.js";

describe("provider matrix", () => {
  it("covers every provider exactly once", () => {
    const ids = PROVIDERS.map((entry) => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("declares either a probe or a reason for not having one", () => {
    for (const entry of PROVIDERS) {
      expect(
        Boolean(entry.probe) || Boolean(entry.unprobed),
        `${entry.id} has neither a probe nor an \`unprobed\` explanation`,
      ).toBe(true);
    }
  });

  it("names a distinct env var per credential slot", () => {
    for (const entry of PROVIDERS) {
      const keys = credentialEnvKeys(entry.auth);
      expect(new Set(keys).size, `${entry.id} reuses an env var within its own descriptor`).toBe(
        keys.length,
      );
    }
  });
});

describe.each(PROVIDERS.map((entry) => [entry.id, entry] as const))(
  "generation: %s",
  (_id, entry) => {
    const report = inspectGeneration(entry);

    it("has a provider directory under packages/utdk", () => {
      expect(report.hasDirectory).toBe(true);
    });

    it.skipIf(entry.shim)("exports its client factory", () => {
      expect(report.exportsFactory, `expected index.ts to export ${factoryName(entry.id)}`).toBe(true);
    });

    it.skipIf(entry.shim)("declares a utdk manifest block", () => {
      expect(report.hasManifest).toBe(true);
    });

    // A generated surface with zero operations means the bundler produced
    // nothing usable — the provider is dead weight in the registry.
    //
    // `knownBroken` providers assert the *inverse*: the defect is expected, so
    // CI stays green while it stays visible, and the test flips to a hard
    // failure the moment it is fixed without clearing the marker.
    const checkSurface = (): void => {
      if (report.operationCount === null) {
        // Handwritten module (sql-backed) or a namespace shim — no metadata.ts.
        expect(report.hasDirectory).toBe(true);
        return;
      }
      expect(report.operationCount).toBeGreaterThan(0);
    };

    if (entry.knownBroken) {
      it.fails(`has a non-empty operation surface [KNOWN BROKEN: ${entry.knownBroken}]`, checkSurface);
    } else {
      it("has a non-empty operation surface", checkSurface);
    }
  },
);

describe.each(PROBED.map((entry) => [entry.id, entry] as const))("probe target: %s", (_id, entry) => {
  it(`resolves ${entry.probe.op} in the generated surface`, () => {
    const report = inspectGeneration(entry);
    expect(
      report.probeOperationExists,
      `probe operation "${entry.probe.op}" is not in ${entry.id}'s generated surface — ` +
        `the provider was regenerated and the access path changed, or the probe is wrong`,
    ).toBe(true);
  });
});
