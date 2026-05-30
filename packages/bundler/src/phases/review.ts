import { DEFAULT_OUTPUT_ROOT, loadRegistryProviders, resolveProvider } from "../provider.js";
import { runScorecard, type ScorecardResult } from "../verification/scorecard.js";
import { runAgentReadiness, type AgentReadinessResult } from "./agentReadiness.js";

export type RunReviewPhaseResult = {
  provider: string;
  scorecard: ScorecardResult;
  agentReadiness: AgentReadinessResult;
  passed: boolean;
  warnings: string[];
};

export type RunReviewPhaseOptions = {
  provider: string;
  outputRoot?: string;
};

export async function runReviewPhase(options: RunReviewPhaseOptions): Promise<RunReviewPhaseResult> {
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const providers = await loadRegistryProviders();
  const provider = resolveProvider(providers, options.provider);

  const [scorecard, agentReadiness] = await Promise.all([
    runScorecard({ provider: provider.name, outputRoot }),
    runAgentReadiness({ provider: provider.name, outputRoot }),
  ]);

  const warnings: string[] = [
    ...agentReadiness.blockers
      .filter((b) => b.severity === "warning")
      .map((b) => `[${b.code}] ${b.message}`),
    ...(!scorecard.passed
      ? [`Scorecard total ${scorecard.total}/100 is below the passing threshold of 50.`]
      : []),
  ];

  const passed = scorecard.passed && agentReadiness.passed;

  return {
    provider: provider.name,
    scorecard,
    agentReadiness,
    passed,
    warnings,
  };
}
