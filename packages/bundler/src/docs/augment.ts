import { readFile } from "node:fs/promises";
import path from "node:path";

import type { OpenAPIV3 } from "openapi-types";

import { resolveProviderDocsIndexPath, resolveProviderDocsManifestPath, resolveProviderOutputDir } from "../provider.js";
import { groupOpenApiOperations } from "./grouping.js";
import { readDocsManifest } from "./manifest.js";
import { loadDocsPromptAssets } from "./prompt.js";
import type { ProviderPackageDocsMetadata } from "./types.js";

export type AugmentProviderDocsOptions = {
  provider: string;
  openApiDocument: OpenAPIV3.Document;
  docsCacheRoot: string;
  outputRoot: string;
};

export type AugmentProviderDocsResult = {
  readme: string;
  docs: Array<{
    relativePath: string;
    content: string;
  }>;
  metadata: ProviderPackageDocsMetadata;
};

export async function augmentProviderDocs(options: AugmentProviderDocsOptions): Promise<AugmentProviderDocsResult> {
  const manifestPath = resolveProviderDocsManifestPath(options.provider, options.docsCacheRoot);
  const indexPath = resolveProviderDocsIndexPath(options.provider, options.docsCacheRoot);
  const docsOutputPath = path.join(resolveProviderOutputDir(options.provider, options.outputRoot), "docs");
  const manifest = await readDocsManifest(manifestPath);
  const indexMarkdown = await readFile(indexPath, "utf8");
  const prompts = await loadDocsPromptAssets();
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
  };
}
