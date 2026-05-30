import { DocsPipelineError } from "./docs/types.js";
import { augmentRegistryProviderDocs, generateRegistryTypes, loadRegistryProviderDocs, runFullPipeline } from "./index.js";
import { runEnrichPhase } from "./phases/enrich.js";
import { runResearchPhase } from "./phases/research.js";
import { runReviewPhase } from "./phases/review.js";
import { runShipPhase } from "./phases/ship.js";
import { DEFAULT_OUTPUT_ROOT } from "./provider.js";
import { runSmokeTest } from "./verification/smoke.js";

type CliCommand = "generate" | "load-docs" | "augment-docs";
type PipelinePhase = "research" | "enrich" | "review" | "ship";

type ParsedCommand = {
  command: CliCommand;
  provider: string;
  phase?: PipelinePhase;
  docsCacheRoot?: string;
  outputRoot?: string;
  rawSnapshots?: boolean;
  overwriteDocs?: boolean;
  smoke?: boolean;
  seededReferences?: Array<{ source: "registry-seed"; url: string }>;
};

function getOptionValue(argv: string[], index: number, flag: string): string {
  const value = argv[index + 1];

  if (!value) {
    throw new Error(`Missing value for ${flag}.`);
  }

  return value;
}

function isValidPhase(value: string): value is PipelinePhase {
  return value === "research" || value === "enrich" || value === "review" || value === "ship";
}

function parseCommand(argv: string[]): ParsedCommand {
  const [first, second, ...rest] = argv;
  const command: CliCommand = first === "load-docs" || first === "augment-docs" || first === "generate" ? first : "generate";
  const candidateProvider = command === "generate" && first !== "generate" ? first : second;

  if (!candidateProvider) {
    throw new Error('Expected a provider name.');
  }

  const provider = candidateProvider;

  const parsed: ParsedCommand = {
    command,
    provider,
  };

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];

    if (!token) {
      continue;
    }

    if (token === "--phase") {
      const value = getOptionValue(rest, index, token);
      if (!isValidPhase(value)) {
        throw new Error(`Unknown phase: ${value}. Valid phases are: research, enrich, review, ship.`);
      }
      parsed.phase = value;
      index += 1;
      continue;
    }

    if (token === "--docs-cache-root") {
      parsed.docsCacheRoot = getOptionValue(rest, index, token);
      index += 1;
      continue;
    }

    if (token === "--output-root") {
      parsed.outputRoot = getOptionValue(rest, index, token);
      index += 1;
      continue;
    }

    if (token === "--raw-snapshots") {
      parsed.rawSnapshots = true;
      continue;
    }

    if (token === "--overwrite-docs") {
      parsed.overwriteDocs = true;
      continue;
    }

    if (token === "--smoke") {
      parsed.smoke = true;
      continue;
    }

    if (token === "--seed-url") {
      const url = getOptionValue(rest, index, token);
      parsed.seededReferences = [...(parsed.seededReferences ?? []), { source: "registry-seed", url }];
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return parsed;
}

function writeJson(payload: unknown): void {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

async function main(): Promise<void> {
  const parsed = parseCommand(process.argv.slice(2));

  // --smoke: run the smoke test harness on demand
  if (parsed.smoke) {
    const outputRoot = parsed.outputRoot ?? DEFAULT_OUTPUT_ROOT;
    const result = await runSmokeTest({ provider: parsed.provider, outputRoot });
    writeJson({ ok: result.status !== "failed", command: "smoke", provider: parsed.provider, result });
    if (result.status === "failed") {
      process.exitCode = 1;
    }
    return;
  }

  if (parsed.command === "generate") {
    if (parsed.phase === "research") {
      const result = await runResearchPhase({
        provider: parsed.provider,
        outputRoot: parsed.outputRoot,
      });
      writeJson({ ok: true, command: "generate", phase: "research", provider: parsed.provider, result });
      return;
    }

    if (parsed.phase === "enrich") {
      const result = await runEnrichPhase({
        provider: parsed.provider,
        outputRoot: parsed.outputRoot,
      });
      writeJson({ ok: true, command: "generate", phase: "enrich", provider: parsed.provider, result });
      return;
    }

    if (parsed.phase === "review") {
      const result = await runReviewPhase({
        provider: parsed.provider,
        outputRoot: parsed.outputRoot,
      });
      writeJson({ ok: true, command: "generate", phase: "review", provider: parsed.provider, result });
      return;
    }

    if (parsed.phase === "ship") {
      const result = await runShipPhase({
        provider: parsed.provider,
        outputRoot: parsed.outputRoot,
      });
      writeJson({ ok: true, command: "generate", phase: "ship", provider: parsed.provider, result });
      return;
    }

    // Full pipeline (no --phase)
    const result = await runFullPipeline({
      provider: parsed.provider,
      outputRoot: parsed.outputRoot,
    });
    writeJson({ ok: true, command: "generate", provider: parsed.provider, result });
    return;
  }

  if (parsed.command === "load-docs") {
    const result = await loadRegistryProviderDocs({
      provider: parsed.provider,
      docsCacheRoot: parsed.docsCacheRoot,
      outputRoot: parsed.outputRoot,
      rawSnapshots: parsed.rawSnapshots,
      seededReferences: parsed.seededReferences,
    });
    writeJson({ ok: true, command: parsed.command, provider: parsed.provider, result });
    return;
  }

  const result = await augmentRegistryProviderDocs({
    provider: parsed.provider,
    docsCacheRoot: parsed.docsCacheRoot,
    outputRoot: parsed.outputRoot,
    overwriteDocs: parsed.overwriteDocs,
  });
  writeJson({ ok: true, command: parsed.command, provider: parsed.provider, result });
}

main().catch((error: unknown) => {
  const payload =
    error instanceof DocsPipelineError
      ? {
          ok: false,
          error: {
            code: error.code,
            message: error.message,
            details: error.details ?? {},
          },
        }
      : {
          ok: false,
          error: {
            code: "CLI_ERROR",
            message: error instanceof Error ? error.message : String(error),
          },
        };

  process.stderr.write(`${JSON.stringify(payload, null, 2)}\n`);
  process.exitCode = 1;
});
