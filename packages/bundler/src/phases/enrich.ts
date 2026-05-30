import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { parse as parseYaml, stringify as stringifyYaml } from "yaml";

import { DEFAULT_OUTPUT_ROOT, loadRegistryProviders, resolveProvider, resolveProviderOutputDir } from "../provider.js";

export type PaginationHint = {
  type: "cursor" | "offset" | "page";
  cursorParam?: string;
  limitParam?: string;
  offsetParam?: string;
  pageParam?: string;
  resultsKey?: string;
  nextCursorKey?: string;
};

export type EnrichOverlay = {
  provider: string;
  specUrl: string;
  generatedAt: string;
  descriptions: Record<string, string>;
  paginationHints: Record<string, PaginationHint>;
  authHints: Record<string, unknown>;
};

export type RunEnrichPhaseOptions = {
  provider: string;
  outputRoot?: string;
};

export type RunEnrichPhaseResult = {
  provider: string;
  overlayPath: string;
  created: boolean;
  overlay: EnrichOverlay;
};

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function buildInitialOverlay(providerName: string, specUrl: string): EnrichOverlay {
  return {
    provider: providerName,
    specUrl,
    generatedAt: new Date().toISOString(),
    descriptions: {},
    paginationHints: {},
    authHints: {},
  };
}

export async function runEnrichPhase(options: RunEnrichPhaseOptions): Promise<RunEnrichPhaseResult> {
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const providers = await loadRegistryProviders();
  const provider = resolveProvider(providers, options.provider);
  const providerDir = resolveProviderOutputDir(provider.name, outputRoot);
  const overlayPath = path.join(providerDir, "overlay.yaml");

  await mkdir(providerDir, { recursive: true });

  const exists = await fileExists(overlayPath);

  if (exists) {
    const raw = await readFile(overlayPath, "utf8");
    const overlay = parseYaml(raw) as EnrichOverlay;
    return { provider: provider.name, overlayPath, created: false, overlay };
  }

  const overlay = buildInitialOverlay(provider.name, provider.url);

  const yamlContent =
    `# Spec enrichment overlay for ${provider.name}\n` +
    `# Edit this file to add corrections, pagination hints, and auth hints.\n` +
    `# This overlay is applied during regeneration to enrich the generated package.\n` +
    `# Keys under 'descriptions', 'paginationHints', and 'authHints' are keyed by operationId.\n` +
    `#\n` +
    `# Example description correction:\n` +
    `#   descriptions:\n` +
    `#     listRepos: "List all repositories the authenticated user has access to."\n` +
    `#\n` +
    `# Example pagination hint:\n` +
    `#   paginationHints:\n` +
    `#     listRepos:\n` +
    `#       type: cursor\n` +
    `#       cursorParam: page\n` +
    `#       limitParam: per_page\n` +
    `#       resultsKey: items\n` +
    `\n` +
    stringifyYaml(overlay);

  await writeFile(overlayPath, yamlContent, "utf8");
  return { provider: provider.name, overlayPath, created: true, overlay };
}
