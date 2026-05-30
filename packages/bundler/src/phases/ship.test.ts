import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";

import { afterEach, describe, expect, it } from "vitest";

import { runShipPhase } from "./ship.js";
import type { ScorecardResult } from "../verification/scorecard.js";

const tempDirs: string[] = [];

async function createTempDir(): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "bundler-ship-"));
  tempDirs.push(dir);
  return dir;
}

const mockScorecardResult: ScorecardResult = {
  infrastructure: {
    hasIndexTs: true,
    hasTypesTs: true,
    hasPackageJson: true,
    hasOpenApiJson: true,
    hasReadme: true,
    typesExportFound: true,
    score: 100,
  },
  domain: {
    hasAuthConfig: true,
    hasReadmeContent: true,
    operationCount: 5,
    score: 100,
  },
  total: 100,
  passed: true,
};

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("runShipPhase", () => {
  it("emits provenance.json with required fields", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenancePath).toContain("provenance.json");
    expect(result.provenance.provider).toBe("openai");
    expect(result.provenance.specSourceUrl).toBeTruthy();
    expect(result.provenance.generatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/u);
    expect(result.provenance.generation).toBeGreaterThanOrEqual(1);
  });

  it("includes scorecard scores in provenance.json", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenance.scorecardScores.infrastructure).toBe(100);
    expect(result.provenance.scorecardScores.domain).toBe(100);
    expect(result.provenance.scorecardScores.total).toBe(100);
  });

  it("sets researchHash to null when research.json is absent", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenance.researchHash).toBeNull();
  });

  it("computes researchHash when research.json exists", async () => {
    const outputRoot = await createTempDir();
    const providerDir = path.join(outputRoot, "openai");
    await mkdir(providerDir, { recursive: true });

    const researchContent = JSON.stringify({ provider: "openai", noveltyScore: 8 });
    await writeFile(path.join(providerDir, "research.json"), researchContent, "utf8");

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenance.researchHash).toMatch(/^sha256:[a-f0-9]{64}$/u);
  });

  it("writes valid JSON to provenance.json", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    const raw = await readFile(result.provenancePath, "utf8");
    const parsed = JSON.parse(raw) as { provider: string };
    expect(parsed.provider).toBe("openai");
  });

  it("reads generation from existing package.json", async () => {
    const outputRoot = await createTempDir();
    const providerDir = path.join(outputRoot, "openai");
    await mkdir(providerDir, { recursive: true });

    await writeFile(
      path.join(providerDir, "package.json"),
      JSON.stringify({ utdk: { generation: 5 } }),
      "utf8",
    );

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenance.generation).toBe(5);
  });

  it("defaults generation to 1 when package.json is absent", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenance.generation).toBe(1);
  });

  it("places provenance.json in the correct provider subdirectory", async () => {
    const outputRoot = await createTempDir();

    const result = await runShipPhase({
      provider: "openai",
      outputRoot,
      scorecardResult: mockScorecardResult,
    });

    expect(result.provenancePath).toBe(path.join(outputRoot, "openai", "provenance.json"));
  });
});
