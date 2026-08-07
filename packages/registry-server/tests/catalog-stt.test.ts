/**
 * Catalog registration for the `stt` contract: deliberate INTERFACE_ORDER
 * placement, session-mode open discovery, and unavailable-bind refusal.
 */

import { afterEach, describe, expect, it } from "vitest";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { sttToolEntries } from "@utdk/stt";
import { defaultCatalog } from "../src/catalog/default.js";
import { findInterface } from "../src/catalog/types.js";
import { resolveProfile } from "../src/profiles/resolve.js";
import { adminCtx, makeEnv, type TestEnv } from "./helpers.js";

const contractsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../contracts",
);

const ASSEMBLYAI_UNAVAILABLE = "The AssemblyAI adapter module is not built yet.";

describe("stt catalog registration", () => {
  it("places stt in INTERFACE_ORDER after the pre-instance set (not alphabetical)", () => {
    const catalog = defaultCatalog({ contractsDir });
    const ids = catalog.interfaces.map((def) => def.id);

    expect(ids).toContain("stt");
    // Deliberate order: … agent, stt, then alphabetical leftovers (events, …).
    expect(ids.indexOf("stt")).toBe(ids.indexOf("agent") + 1);
    expect(ids.indexOf("stt")).toBeLessThan(ids.indexOf("events"));
  });

  it("exposes a session-mode open operation on the loaded interface", () => {
    const catalog = defaultCatalog({ contractsDir });
    const stt = findInterface(catalog, "stt");
    expect(stt).toBeDefined();
    expect(stt!.defaultsFor).toContain("open");
    expect(stt!.compat.map((entry) => entry.provider)).toEqual(["deepgram", "assemblyai"]);

    const [open] = sttToolEntries("stt", { interfaceNamespace: true });
    expect(open).toMatchObject({
      name: "stt.open",
      streaming: "session",
    });
  });

  describe("unavailable bind", () => {
    let env: TestEnv;

    afterEach(async () => {
      await env?.close();
    });

    it("binding assemblyai fails with its declared unavailable reason", async () => {
      const catalog = defaultCatalog({ contractsDir });
      const stt = findInterface(catalog, "stt")!;
      const assembly = stt.compat.find((entry) => entry.provider === "assemblyai");
      expect(assembly?.unavailable).toBe(ASSEMBLYAI_UNAVAILABLE);

      env = await makeEnv({
        catalog,
        knownProviders: ["deepgram", "assemblyai"],
      });
      await env.profiles.create(adminCtx(), {
        name: "default",
        target: { kind: "interface", interface: "stt" },
        provider: "assemblyai",
      });

      const error = await resolveProfile(env.deps, adminCtx(), "stt").catch((e) => e);
      expect(error.status).toBe(501);
      expect(error.message).toMatch(
        new RegExp(ASSEMBLYAI_UNAVAILABLE.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"), "u"),
      );
    });
  });
});
