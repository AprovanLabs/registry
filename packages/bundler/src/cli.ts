import { DocsPipelineError } from "./docs/types.js";
import { augmentRegistryProviderDocs, generateRegistryTypes, loadRegistryProviderDocs } from "./index.js";

type CliCommand = "generate" | "load-docs" | "augment-docs";

type ParsedCommand = {
  command: CliCommand;
  provider: string;
  docsCacheRoot?: string;
  outputRoot?: string;
  rawSnapshots?: boolean;
  overwriteDocs?: boolean;
  seededReferences?: Array<{ source: "registry-seed"; url: string }>;
};

function getOptionValue(argv: string[], index: number, flag: string): string {
  const value = argv[index + 1];

  if (!value) {
    throw new Error(`Missing value for ${flag}.`);
  }

  return value;
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

  if (parsed.command === "generate") {
    const result = await generateRegistryTypes({
      provider: parsed.provider,
      outputRoot: parsed.outputRoot,
    });
    writeJson({ ok: true, command: parsed.command, provider: parsed.provider, result });
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
