import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";

import { afterEach, describe, expect, it } from "vitest";

import { runReviewPhase } from "./review.js";

const tempDirs: string[] = [];

async function createTempDir(): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "bundler-review-"));
  tempDirs.push(dir);
  return dir;
}

async function writeProviderFiles(
  outputRoot: string,
  providerName: string,
  overrides: Partial<{
    indexTs: string;
    typesTs: string;
    packageJson: string;
    openApiJson: string;
    readme: string;
  }> = {},
): Promise<void> {
  const providerDir = path.join(outputRoot, providerName);
  await mkdir(providerDir, { recursive: true });

  const defaults = {
    indexTs: `import type { OpenaiClient } from "./types.js";\nexport * from "./types.js";\n`,
    typesTs: `export type OpenaiClient = { responses: { create: () => Promise<void> } };\n`,
    packageJson: JSON.stringify({
      name: "@utdk/openai",
      version: "1.0.0-20260101.1",
      utdk: { provider: "openai", generation: 1, auth: [{ auth_type: "api_key" }] },
    }),
    openApiJson: JSON.stringify({
      openapi: "3.0.0",
      info: { title: "Test API", version: "1.0.0" },
      paths: {
        "/items": { get: { operationId: "list_items", responses: { "200": { description: "ok" } } } },
      },
    }),
    readme:
      "# OpenAI\n\nGenerated UTDK provider for OpenAI. This package provides TypeScript types and a client for the OpenAI API.\n",
  };

  await Promise.all([
    writeFile(path.join(providerDir, "index.ts"), overrides.indexTs ?? defaults.indexTs, "utf8"),
    writeFile(path.join(providerDir, "types.ts"), overrides.typesTs ?? defaults.typesTs, "utf8"),
    writeFile(
      path.join(providerDir, "package.json"),
      overrides.packageJson ?? defaults.packageJson,
      "utf8",
    ),
    writeFile(
      path.join(providerDir, "openapi.json"),
      overrides.openApiJson ?? defaults.openApiJson,
      "utf8",
    ),
    writeFile(path.join(providerDir, "README.md"), overrides.readme ?? defaults.readme, "utf8"),
  ]);
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("runReviewPhase", () => {
  it("passes when all expected files are present and valid", async () => {
    const outputRoot = await createTempDir();
    await writeProviderFiles(outputRoot, "openai");

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    expect(result.provider).toBe("openai");
    expect(result.scorecard.passed).toBe(true);
    expect(result.agentReadiness.passed).toBe(true);
    expect(result.passed).toBe(true);
  });

  it("fails agent-readiness when scaffold files are missing", async () => {
    const outputRoot = await createTempDir();
    // Don't write any files

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    expect(result.agentReadiness.passed).toBe(false);
    expect(result.passed).toBe(false);

    const errorCodes = result.agentReadiness.blockers
      .filter((b) => b.severity === "error")
      .map((b) => b.code);

    expect(errorCodes).toContain("MISSING_INDEX_TS");
    expect(errorCodes).toContain("MISSING_TYPES_TS");
    expect(errorCodes).toContain("MISSING_PACKAGE_JSON");
  });

  it("issues warning when auth config is missing", async () => {
    const outputRoot = await createTempDir();
    await writeProviderFiles(outputRoot, "openai", {
      packageJson: JSON.stringify({
        name: "@utdk/openai",
        version: "1.0.0",
        utdk: { provider: "openai", generation: 1 },
      }),
    });

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    const warnCodes = result.agentReadiness.blockers
      .filter((b) => b.severity === "warning")
      .map((b) => b.code);

    expect(warnCodes).toContain("MISSING_AUTH_CONFIG");
    // Missing auth is a warning, not an error — agent-readiness still passes
    expect(result.agentReadiness.passed).toBe(true);
  });

  it("includes scorecard scores in the result", async () => {
    const outputRoot = await createTempDir();
    await writeProviderFiles(outputRoot, "openai");

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    expect(result.scorecard.infrastructure.score).toBeGreaterThan(0);
    expect(result.scorecard.domain.score).toBeGreaterThanOrEqual(0);
    expect(result.scorecard.total).toBeGreaterThan(0);
  });

  it("reports no exported types as error", async () => {
    const outputRoot = await createTempDir();
    await writeProviderFiles(outputRoot, "openai", {
      typesTs: "// no exports here\n",
    });

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    const errorCodes = result.agentReadiness.blockers
      .filter((b) => b.severity === "error")
      .map((b) => b.code);

    expect(errorCodes).toContain("NO_EXPORTED_TYPES");
    expect(result.agentReadiness.passed).toBe(false);
  });

  it("populates warnings array for non-passing conditions", async () => {
    const outputRoot = await createTempDir();
    await writeProviderFiles(outputRoot, "openai", {
      packageJson: JSON.stringify({
        name: "@utdk/openai",
        version: "1.0.0",
        utdk: { provider: "openai", generation: 1 },
      }),
    });

    const result = await runReviewPhase({ provider: "openai", outputRoot });

    // warnings should contain the auth warning
    expect(result.warnings.some((w) => w.includes("MISSING_AUTH_CONFIG"))).toBe(true);
  });
});
