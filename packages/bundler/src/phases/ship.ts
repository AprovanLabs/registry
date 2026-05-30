import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { DEFAULT_OUTPUT_ROOT, loadRegistryProviders, resolveProvider, resolveProviderOutputDir } from "../provider.js";
import { runScorecard, type ScorecardResult } from "../verification/scorecard.js";

export type ProvenanceManifest = {
  provider: string;
  generatedAt: string;
  specSourceUrl: string;
  generation: number;
  scorecardScores: {
    infrastructurePassed: boolean;
    domainTotal: number;
  };
  researchHash: string | null;
};

export type RunShipPhaseOptions = {
  provider: string;
  outputRoot?: string;
  scorecardResult?: ScorecardResult;
};

export type RunShipPhaseResult = {
  provider: string;
  provenancePath: string;
  provenance: ProvenanceManifest;
};

async function readFileSafe(filePath: string): Promise<string | undefined> {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return undefined;
  }
}

function hashContent(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

function getGeneration(packageJson: string | undefined): number {
  if (!packageJson) return 1;
  try {
    const parsed = JSON.parse(packageJson) as { utdk?: { generation?: unknown } };
    const gen = parsed.utdk?.generation;
    return typeof gen === "number" ? gen : 1;
  } catch {
    return 1;
  }
}

export async function runShipPhase(options: RunShipPhaseOptions): Promise<RunShipPhaseResult> {
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const providers = await loadRegistryProviders();
  const provider = resolveProvider(providers, options.provider);
  const providerDir = resolveProviderOutputDir(provider.name, outputRoot);

  const [researchJson, packageJson] = await Promise.all([
    readFileSafe(path.join(providerDir, "research.json")),
    readFileSafe(path.join(providerDir, "package.json")),
  ]);

  const scorecard =
    options.scorecardResult ?? (await runScorecard({ provider: provider.name, outputRoot }));

  const researchHash = researchJson ? `sha256:${hashContent(researchJson)}` : null;
  const generation = getGeneration(packageJson);

  const provenance: ProvenanceManifest = {
    provider: provider.name,
    generatedAt: new Date().toISOString(),
    specSourceUrl: provider.url,
    generation,
    scorecardScores: {
      infrastructurePassed: scorecard.infrastructure.allPassed,
      domainTotal: scorecard.domain.total,
    },
    researchHash,
  };

  await mkdir(providerDir, { recursive: true });
  const provenancePath = path.join(providerDir, "provenance.json");
  await writeFile(provenancePath, JSON.stringify(provenance, null, 2).concat("\n"), "utf8");

  return { provider: provider.name, provenancePath, provenance };
}
