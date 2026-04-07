import { readFile } from "node:fs/promises";
import path from "node:path";

import type { OpenAPIV3 } from "openapi-types";

import { resolveProviderDocsIndexPath, resolveProviderDocsManifestPath, resolveProviderOutputDir } from "../provider.js";
import { getDocsStaleCheckResult } from "./hash.js";
import { groupOpenApiOperations } from "./grouping.js";
import { readDocsManifest } from "./manifest.js";
import { loadDocsPromptAssets } from "./prompt.js";
import { DocsPipelineError, type ProviderPackageDocsMetadata } from "./types.js";

export type AugmentProviderDocsOptions = {
  provider: string;
  openApiDocument: OpenAPIV3.Document;
  docsCacheRoot: string;
  outputRoot: string;
  overwriteDocs?: boolean;
};

export type AugmentProviderDocsResult = {
  readme: string;
  docs: Array<{
    relativePath: string;
    content: string;
  }>;
  metadata: ProviderPackageDocsMetadata;
  staleReason: string;
};

type ExistingDocsMetadata = {
  openApiHash?: string | null;
  promptHash?: string | null;
};

function toOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

async function readExistingDocsMetadata(outputDir: string): Promise<ExistingDocsMetadata> {
  const packageJsonPath = path.join(outputDir, "package.json");

  try {
    const raw = await readFile(packageJsonPath, "utf8");
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const utdk = parsed.utdk as Record<string, unknown> | undefined;
    const docs = utdk?.docs as Record<string, unknown> | undefined;

    return {
      openApiHash: toOptionalString(docs?.openApiHash) ?? null,
      promptHash: toOptionalString(docs?.promptHash) ?? null,
    };
  } catch (error: unknown) {
    if (typeof error === "object" && error && "code" in error && error.code === "ENOENT") {
      return {};
    }

    throw error;
  }
}

export async function augmentProviderDocs(options: AugmentProviderDocsOptions): Promise<AugmentProviderDocsResult> {
  const manifestPath = resolveProviderDocsManifestPath(options.provider, options.docsCacheRoot);
  const indexPath = resolveProviderDocsIndexPath(options.provider, options.docsCacheRoot);
  const outputDir = resolveProviderOutputDir(options.provider, options.outputRoot);
  const docsOutputPath = path.join(outputDir, "docs");
  const manifest = await readDocsManifest(manifestPath);

  if (!manifest) {
    throw new DocsPipelineError("DOCS_CACHE_MISSING", `Docs cache manifest not found at ${manifestPath}.`, {
      provider: options.provider,
      manifestPath,
      indexPath,
    });
  }

  let indexMarkdown: string;

  try {
    indexMarkdown = await readFile(indexPath, "utf8");
  } catch (error: unknown) {
    if (typeof error === "object" && error && "code" in error && error.code === "ENOENT") {
      throw new DocsPipelineError("DOCS_CACHE_MISSING", `Docs cache index not found at ${indexPath}.`, {
        provider: options.provider,
        manifestPath,
        indexPath,
      });
    }

    throw error;
  }

  const prompts = await loadDocsPromptAssets();
  const existing = await readExistingDocsMetadata(outputDir);
  const staleCheck = getDocsStaleCheckResult({
    previousManifestVersion: manifest.schemaVersion,
    previousOpenApiHash: existing.openApiHash,
    nextOpenApiHash: manifest.openApi.hash,
    previousPromptHash: existing.promptHash,
    nextPromptHash: prompts.hash,
  });

  if (!options.overwriteDocs && !staleCheck.isStale && (existing.openApiHash != null || existing.promptHash != null)) {
    throw new DocsPipelineError(
      "DOCS_OVERWRITE_BLOCKED",
      `Docs outputs for ${options.provider} are up to date. Pass --overwrite-docs to replace unchanged README/docs output.`,
      {
        provider: options.provider,
        staleReason: staleCheck.reason,
        manifestPath,
        indexPath,
      },
    );
  }

  const groups = groupOpenApiOperations(options.openApiDocument);
  const docs = groups.map((group) => ({
    relativePath: `${group.key}.md`,
    content: [
      `# ${group.title}`,
      "",
      "Generated from OpenAPI operation grouping.",
      "",
      ...group.operations.map((operation) => {
        const label = operation.summary ?? operation.operationId ?? `${operation.method.toUpperCase()} ${operation.path}`;
        return `- \`${operation.method.toUpperCase()} ${operation.path}\`: ${label}`;
      }),
      "",
      "<!-- prompt-hash:",
      prompts.hash,
      "-->",
      "",
    ].join("\n"),
  }));
  const readme = [
    `# ${options.provider}`,
    "",
    "Generated UTDK provider docs from cached source material.",
    "",
    "## Groups",
    "",
    ...groups.map((group) => `- ${group.title} (${group.operations.length} operations)`),
    "",
    "## Source Index",
    "",
    indexMarkdown.trim(),
    "",
  ].join("\n");

  return {
    readme,
    docs,
    metadata: {
      manifestPath,
      indexPath,
      docsPath: docsOutputPath,
      generatedAt: new Date().toISOString(),
      sourceCount: manifest?.sources.length ?? 0,
      openApiHash: manifest?.openApi.hash ?? null,
      promptHash: prompts.hash,
    },
    staleReason: staleCheck.reason,
  };
}
