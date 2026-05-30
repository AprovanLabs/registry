import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  DEFAULT_DOCS_CACHE_ROOT,
  DEFAULT_OUTPUT_ROOT,
  getProviderClientImportPath,
  getProviderPackageRootName,
  loadRegistryProviders,
  resolveProvider,
  resolveProviderDocsOutputDir,
  resolveProviderOutputDir,
  resolveProviderPackageRootDir,
  splitProviderName,
} from "./provider.js";
import { buildClientToolMap } from "./client-api.js";
import { applyProviderOpenApiOptions, buildPublicTypeMap, loadOpenApiDocument } from "./openapi.js";
import { augmentProviderDocs, type AugmentProviderDocsOptions, type AugmentProviderDocsResult } from "./docs/augment.js";
import { loadProviderDocs, type LoadProviderDocsOptions, type LoadProviderDocsResult } from "./docs/load.js";
import {
  renderCopyAssetsScript,
  renderNamespaceEntry,
  renderNamespacePackageJson,
  renderRootClient,
  renderProviderEntry,
  renderProviderMetadata,
  renderProviderPackageJson,
  renderProviderReadme,
  renderProviderTypes,
  renderRootPackageEntry,
  renderRootPackageJson,
  renderRootTsconfig,
} from "./render.js";
import { loadProviderTools } from "./utcp.js";
import { runEnrichPhase, type RunEnrichPhaseOptions, type RunEnrichPhaseResult } from "./phases/enrich.js";
import { runResearchPhase, type RunResearchPhaseOptions, type RunResearchPhaseResult } from "./phases/research.js";
import { runReviewPhase, type RunReviewPhaseOptions, type RunReviewPhaseResult } from "./phases/review.js";
import { runShipPhase, type RunShipPhaseOptions, type RunShipPhaseResult } from "./phases/ship.js";

export {
  runResearchPhase,
  type RunResearchPhaseOptions,
  type RunResearchPhaseResult,
  runEnrichPhase,
  type RunEnrichPhaseOptions,
  type RunEnrichPhaseResult,
  runReviewPhase,
  type RunReviewPhaseOptions,
  type RunReviewPhaseResult,
  runShipPhase,
  type RunShipPhaseOptions,
  type RunShipPhaseResult,
};

export type GenerateRegistryTypesOptions = {
  provider: string;
  outputRoot?: string;
};

export type GenerateRegistryTypesResult = {
  provider: string;
  outputPaths: string[];
  toolCount: number;
};

export type LoadRegistryProviderDocsOptions = LoadProviderDocsOptions;
export type LoadRegistryProviderDocsResult = LoadProviderDocsResult;

export type AugmentRegistryProviderDocsOptions = {
  provider: string;
  docsCacheRoot?: string;
  outputRoot?: string;
  overwriteDocs?: boolean;
};

export type AugmentRegistryProviderDocsResult = {
  provider: string;
  readmePath: string;
  docsPaths: string[];
  packageJsonPath: string;
  staleReason: string;
  metadata: AugmentProviderDocsResult["metadata"];
};

async function writeTextFile(filePath: string, contents: string): Promise<string> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, contents, "utf8");
  return filePath;
}

async function readOptionalTextFile(filePath: string): Promise<string | undefined> {
  try {
    return await readFile(filePath, "utf8");
  } catch (error: unknown) {
    if (typeof error === "object" && error && "code" in error && error.code === "ENOENT") {
      return undefined;
    }

    throw error;
  }
}

export async function loadRegistryProviderDocs(
  options: LoadRegistryProviderDocsOptions,
): Promise<LoadRegistryProviderDocsResult> {
  return loadProviderDocs(options);
}

export async function augmentRegistryProviderDocs(
  options: AugmentRegistryProviderDocsOptions,
): Promise<AugmentRegistryProviderDocsResult> {
  const docsCacheRoot = options.docsCacheRoot ?? DEFAULT_DOCS_CACHE_ROOT;
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const providers = await loadRegistryProviders();
  const provider = resolveProvider(providers, options.provider);
  const [rawOpenApiDocument, { tools }] = await Promise.all([loadOpenApiDocument(provider), loadProviderTools(provider)]);
  const openApiDocument = applyProviderOpenApiOptions(rawOpenApiDocument, provider);
  const clientToolMap = buildClientToolMap(openApiDocument, tools, provider);
  const augmented = await augmentProviderDocs({
    provider: provider.name,
    providerOptions: provider.options,
    openApiDocument,
    tools,
    clientToolMap,
    docsCacheRoot,
    outputRoot,
    overwriteDocs: options.overwriteDocs,
  });
  const providerDir = resolveProviderOutputDir(provider.name, outputRoot);
  const readmePath = path.join(providerDir, "README.md");
  const docsDir = resolveProviderDocsOutputDir(provider.name, outputRoot);
  const packageJsonPath = path.join(providerDir, "package.json");
  const previousPackageJson = await readOptionalTextFile(packageJsonPath);

  await rm(docsDir, { recursive: true, force: true });

  const docsPaths = await Promise.all(
    augmented.docs.map((doc) => writeTextFile(path.join(docsDir, doc.relativePath), doc.content)),
  );

  await Promise.all([
    writeTextFile(
      readmePath,
      renderProviderReadme(provider, {
        generatedReadme: augmented.readme,
      }),
    ),
    writeTextFile(
      packageJsonPath,
      renderProviderPackageJson(provider, openApiDocument, previousPackageJson, undefined, {
        docsMetadata: augmented.metadata,
      }),
    ),
  ]);

  return {
    provider: provider.name,
    readmePath,
    docsPaths,
    packageJsonPath,
    staleReason: augmented.staleReason,
    metadata: augmented.metadata,
  };
}

export async function generateRegistryTypes(
  options: GenerateRegistryTypesOptions,
): Promise<GenerateRegistryTypesResult> {
  const providers = await loadRegistryProviders();
  const provider = resolveProvider(providers, options.provider);
  const [{ tools }, rawOpenApiDocument] = await Promise.all([loadProviderTools(provider), loadOpenApiDocument(provider)]);
  const openApiDocument = applyProviderOpenApiOptions(rawOpenApiDocument, provider);
  const publicTypeMap = buildPublicTypeMap(openApiDocument, tools);
  const clientToolMap = buildClientToolMap(openApiDocument, tools, provider);
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const providerDir = resolveProviderOutputDir(provider.name, outputRoot);
  const providerPackageRootDir = resolveProviderPackageRootDir(provider.name, outputRoot);
  const providerPackageJsonPath = path.join(providerPackageRootDir, "package.json");
  const providerLeafPackageJsonPath = path.join(providerDir, "package.json");
  const legacyRuntimePath = path.join(providerDir, "runtime.ts");
  const providerSegments = splitProviderName(provider.name);
  const providerClientImportPath = getProviderClientImportPath(provider.name);
  const namespaceProviders = providers.filter(
    (entry) => getProviderPackageRootName(entry.name) === getProviderPackageRootName(provider.name),
  );
  const previousProviderPackageJson = await readOptionalTextFile(providerPackageJsonPath);
  const previousLeafPackageJson =
    providerLeafPackageJsonPath === providerPackageJsonPath
      ? previousProviderPackageJson
      : await readOptionalTextFile(providerLeafPackageJsonPath);

  await rm(legacyRuntimePath, { force: true });

  const namespaceOutputPaths =
    providerSegments.length > 1
      ? await Promise.all([
          writeTextFile(
            providerPackageJsonPath,
            renderNamespacePackageJson(provider.name, namespaceProviders, previousProviderPackageJson),
          ),
          ...providerSegments.slice(0, -1).map((_, index) => {
            const namespaceSegments = providerSegments.slice(0, index + 1);
            return writeTextFile(
              path.join(outputRoot, ...namespaceSegments, "index.ts"),
              renderNamespaceEntry(namespaceSegments, namespaceProviders),
            );
          }),
        ])
      : [];

  const outputPaths = await Promise.all([
    writeTextFile(path.join(outputRoot, "package.json"), renderRootPackageJson(providers)),
    writeTextFile(path.join(outputRoot, "tsconfig.json"), renderRootTsconfig()),
    writeTextFile(path.join(outputRoot, "index.ts"), renderRootPackageEntry()),
    writeTextFile(path.join(outputRoot, "client.ts"), renderRootClient()),
    writeTextFile(path.join(outputRoot, "copy-assets.mjs"), renderCopyAssetsScript()),
    ...(providerSegments.length === 1
      ? [writeTextFile(providerPackageJsonPath, renderProviderPackageJson(provider, openApiDocument, previousProviderPackageJson))]
      : [
          writeTextFile(
            providerLeafPackageJsonPath,
            renderProviderPackageJson(provider, openApiDocument, previousLeafPackageJson, undefined, {
              includePackageName: false,
            }),
          ),
        ]),
    writeTextFile(path.join(providerDir, "README.md"), renderProviderReadme(provider)),
    writeTextFile(path.join(providerDir, "index.ts"), renderProviderEntry(provider.name, providerClientImportPath)),
    writeTextFile(path.join(providerDir, "types.ts"), renderProviderTypes(provider, tools, publicTypeMap, clientToolMap)),
    writeTextFile(
      path.join(providerDir, "metadata.ts"),
      renderProviderMetadata(provider, clientToolMap, providerClientImportPath),
    ),
    writeTextFile(path.join(providerDir, "openapi.json"), JSON.stringify(openApiDocument, null, 2).concat("\n")),
    ...namespaceOutputPaths,
  ]);

  return {
    provider: provider.name,
    outputPaths,
    toolCount: tools.length,
  };
}

export type FullPipelineOptions = {
  provider: string;
  outputRoot?: string;
};

export type FullPipelineResult = {
  scaffold: GenerateRegistryTypesResult;
  research: RunResearchPhaseResult | { error: string };
  enrich: RunEnrichPhaseResult | { error: string };
  review: RunReviewPhaseResult | { error: string };
  ship: RunShipPhaseResult | { error: string };
};

async function safeRun<T>(fn: () => Promise<T>): Promise<T | { error: string }> {
  try {
    return await fn();
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

export async function runFullPipeline(options: FullPipelineOptions): Promise<FullPipelineResult> {
  const scaffold = await generateRegistryTypes({
    provider: options.provider,
    outputRoot: options.outputRoot,
  });

  const [research, enrich] = await Promise.all([
    safeRun(() => runResearchPhase({ provider: options.provider, outputRoot: options.outputRoot })),
    safeRun(() => runEnrichPhase({ provider: options.provider, outputRoot: options.outputRoot })),
  ]);

  const review = await safeRun(() =>
    runReviewPhase({ provider: options.provider, outputRoot: options.outputRoot }),
  );

  const reviewPassed = !("error" in review) && review.passed;
  const scorecardResult = !("error" in review) ? review.scorecard : undefined;

  const ship = await safeRun(() =>
    runShipPhase({
      provider: options.provider,
      outputRoot: options.outputRoot,
      scorecardResult,
    }),
  );

  if (!reviewPassed && !("error" in review)) {
    process.stderr.write(
      `Warning: review phase did not pass for ${options.provider}. ` +
        `Scorecard domain: ${review.scorecard.domain.total}/100. ` +
        `Blockers: ${review.agentReadiness.blockers.filter((b) => b.severity === "error").length} errors.\n`,
    );
  }

  return { scaffold, research, enrich, review, ship };
}
