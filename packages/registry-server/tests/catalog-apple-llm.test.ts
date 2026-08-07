/**
 * Apple on-device chat provider catalog entry + availabilityProbe bind refusal.
 */

import { afterEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { defaultCatalog, defaultLlmAliases } from "../src/catalog/default.js";
import { findInterface } from "../src/catalog/types.js";
import { resolveProfile } from "../src/profiles/resolve.js";
import { adminCtx, makeEnv, type TestEnv } from "./helpers.js";

const contractsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../contracts",
);

const llmPackageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../contracts/llm",
);

describe("apple on-device chat provider", () => {
  it("registers apple in CHAT_PROVIDERS with loopback baseUrl, credentialless, and probe", () => {
    const apple = defaultLlmAliases().find((alias) => alias.id === "apple");
    expect(apple).toMatchObject({
      id: "apple",
      label: "Apple on-device",
      module: "openai",
      credentialless: true,
      availabilityProbe: "helper:llm",
    });
    expect(apple?.baseUrl).toMatch(/^http:\/\/127\.0\.0\.1(?::\d+)?\/v1$/u);

    const catalog = defaultCatalog({ contractsDir });
    const llm = findInterface(catalog, "llm");
    expect(llm).toBeDefined();
    const entry = llm!.compat.find((c) => c.provider === "apple");
    expect(entry).toMatchObject({
      provider: "apple",
      credentialless: true,
      availabilityProbe: "helper:llm",
      module: "openai",
    });
  });

  it("does not change the llm contract package (shapes / dispatch live there)", () => {
    const pkg = JSON.parse(readFileSync(path.join(llmPackageRoot, "package.json"), "utf8")) as {
      name: string;
      version: string;
    };
    expect(pkg.name).toBe("@utdk/llm");
    const index = readFileSync(path.join(llmPackageRoot, "index.ts"), "utf8");
    expect(index).toContain("export interface LlmChatCompletionResult");
    expect(index).toContain('object: "chat.completion"');
    expect(index).toContain("export async function openAiCompatChat");
    expect(index).toContain("export async function openAiCompatListModels");
    // No native-transport surface was added to the contract.
    expect(index).not.toMatch(/availabilityProbe|FoundationModels|on-device/iu);
  });

  describe("availabilityProbe bind refusal", () => {
    let env: TestEnv;

    afterEach(async () => {
      await env?.close();
    });

    it("binding apple fails with the probe reason when unavailable", async () => {
      const catalog = defaultCatalog({ contractsDir });
      env = await makeEnv({
        catalog,
        knownProviders: ["openai", "apple"],
        authMode: "none",
        runAvailabilityProbe: async () => ({
          state: "unsupported",
          reason: "On-device model requires macOS 26 or later",
        }),
      });

      const error = await env.profiles
        .create(adminCtx(), {
          name: "default",
          target: { kind: "interface", interface: "llm" },
          provider: "apple",
        })
        .catch((e) => e);

      expect(error.status).toBe(501);
      expect(error.message).toMatch(/macOS 26/u);
    });

    it("resolve refuses apple when the probe reports disabled", async () => {
      const catalog = defaultCatalog({ contractsDir });
      env = await makeEnv({
        catalog,
        knownProviders: ["openai", "apple"],
        authMode: "none",
        runAvailabilityProbe: async () => ({
          state: "available",
        }),
      });

      await env.profiles.create(adminCtx(), {
        name: "default",
        target: { kind: "interface", interface: "llm" },
        provider: "apple",
      });

      // Flip the probe after bind — resolve must still refuse loudly.
      env.deps.runAvailabilityProbe = async () => ({
        state: "disabled",
        reason: "Apple Intelligence is turned off",
        remedy: "Enable Apple Intelligence in System Settings",
      });

      const error = await resolveProfile(env.deps, adminCtx(), "llm").catch((e) => e);
      expect(error.status).toBe(501);
      expect(error.message).toMatch(/Apple Intelligence is turned off/u);
      expect(error.message).toMatch(/System Settings/u);
    });

    it("binding apple succeeds when the probe reports available", async () => {
      const catalog = defaultCatalog({ contractsDir });
      env = await makeEnv({
        catalog,
        knownProviders: ["openai", "apple"],
        authMode: "none",
        runAvailabilityProbe: async () => ({ state: "available" }),
      });

      const row = await env.profiles.create(adminCtx(), {
        name: "default",
        target: { kind: "interface", interface: "llm" },
        provider: "apple",
      });
      expect(row.provider).toBe("apple");

      const resolved = await resolveProfile(env.deps, adminCtx(), "llm");
      expect(resolved.provider).toBe("apple");
      expect(resolved.credentialless).toBe(true);
      expect(resolved.module).toBe("openai");
    });
  });
});
