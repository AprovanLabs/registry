import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";

import { afterEach, describe, expect, it } from "vitest";

import { runEnrichPhase } from "./enrich.js";

const tempDirs: string[] = [];

async function createTempDir(): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "bundler-enrich-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("runEnrichPhase", () => {
  it("creates overlay.yaml when it does not exist", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    expect(result.created).toBe(true);
    expect(result.overlayPath).toContain("overlay.yaml");
    expect(result.overlay.provider).toBe("openai");
    expect(result.overlay.descriptions).toEqual({});
    expect(result.overlay.paginationHints).toEqual({});
    expect(result.overlay.authHints).toEqual({});
  });

  it("overlay.yaml is valid YAML with comment header", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    const raw = await readFile(result.overlayPath, "utf8");
    expect(raw).toContain("# Spec enrichment overlay for openai");
    expect(raw).toContain("provider: openai");
  });

  it("reads existing overlay.yaml without overwriting", async () => {
    const outputRoot = await createTempDir();

    // First run creates the overlay
    const firstResult = await runEnrichPhase({ provider: "openai", outputRoot });
    expect(firstResult.created).toBe(true);

    // Manually edit the overlay
    const overlayPath = firstResult.overlayPath;
    const existing = await readFile(overlayPath, "utf8");
    await writeFile(overlayPath, existing + "\n# Custom edit\n", "utf8");

    // Second run should read without overwriting
    const secondResult = await runEnrichPhase({ provider: "openai", outputRoot });
    expect(secondResult.created).toBe(false);
    expect(secondResult.overlayPath).toBe(firstResult.overlayPath);

    const afterSecond = await readFile(overlayPath, "utf8");
    expect(afterSecond).toContain("# Custom edit");
  });

  it("overlay includes specUrl from provider registry", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    expect(result.overlay.specUrl).toBeTruthy();
    expect(typeof result.overlay.specUrl).toBe("string");
  });

  it("overlay includes generatedAt ISO timestamp", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    expect(result.overlay.generatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/u);
  });

  it("returns correct provider name in result", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    expect(result.provider).toBe("openai");
  });

  it("places overlay.yaml in the correct provider subdirectory", async () => {
    const outputRoot = await createTempDir();
    const result = await runEnrichPhase({ provider: "openai", outputRoot });

    expect(result.overlayPath).toBe(path.join(outputRoot, "openai", "overlay.yaml"));
  });
});
