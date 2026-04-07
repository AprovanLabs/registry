import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  DEFAULT_OUTPUT_ROOT,
  getProviderClientImportPath,
  getProviderPackageRootName,
  loadRegistryProviders,
  resolveProvider,
  resolveProviderOutputDir,
  resolveProviderPackageRootDir,
  splitProviderName,
} from "./provider.js";
import { buildClientToolMap } from "./client-api.js";
import { applyProviderOpenApiOptions, buildPublicTypeMap, loadOpenApiDocument } from "./openapi.js";
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

export type GenerateRegistryTypesOptions = {
  provider: string;
  outputRoot?: string;
};

export type GenerateRegistryTypesResult = {
  provider: string;
  outputPaths: string[];
  toolCount: number;
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
