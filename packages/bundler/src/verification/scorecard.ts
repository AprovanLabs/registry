import { readFile } from "node:fs/promises";
import path from "node:path";

import type { OpenAPIV3 } from "openapi-types";

import { resolveProviderOutputDir } from "../provider.js";

export type InfrastructureScore = {
  hasIndexTs: boolean;
  hasTypesTs: boolean;
  hasPackageJson: boolean;
  hasOpenApiJson: boolean;
  hasReadme: boolean;
  typesExportFound: boolean;
  score: number;
};

export type DomainScore = {
  hasAuthConfig: boolean;
  hasReadmeContent: boolean;
  operationCount: number;
  score: number;
};

export type ScorecardResult = {
  infrastructure: InfrastructureScore;
  domain: DomainScore;
  total: number;
  passed: boolean;
};

export type RunScorecardOptions = {
  provider: string;
  outputRoot: string;
};

async function readFileSafe(filePath: string): Promise<string | undefined> {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return undefined;
  }
}

function countOperations(openApiDoc: OpenAPIV3.Document): number {
  const methods = ["get", "post", "put", "patch", "delete", "head", "options", "trace"] as const;
  let count = 0;
  for (const pathItem of Object.values(openApiDoc.paths ?? {})) {
    if (!pathItem) continue;
    for (const method of methods) {
      if (method in pathItem) count++;
    }
  }
  return count;
}

export async function runScorecard(options: RunScorecardOptions): Promise<ScorecardResult> {
  const providerDir = resolveProviderOutputDir(options.provider, options.outputRoot);

  const [indexTs, typesTs, packageJson, openApiJson, readme] = await Promise.all([
    readFileSafe(path.join(providerDir, "index.ts")),
    readFileSafe(path.join(providerDir, "types.ts")),
    readFileSafe(path.join(providerDir, "package.json")),
    readFileSafe(path.join(providerDir, "openapi.json")),
    readFileSafe(path.join(providerDir, "README.md")),
  ]);

  // Infrastructure checks
  const hasIndexTs = Boolean(indexTs);
  const hasTypesTs = Boolean(typesTs);
  const hasPackageJson = Boolean(packageJson);
  const hasOpenApiJson = Boolean(openApiJson);
  const hasReadme = Boolean(readme);
  const typesExportFound = Boolean(typesTs?.includes("export type"));

  const infraChecks = [hasIndexTs, hasTypesTs, hasPackageJson, hasOpenApiJson, hasReadme, typesExportFound];
  const infraScore = Math.round((infraChecks.filter(Boolean).length / infraChecks.length) * 100);

  // Domain checks
  let hasAuthConfig = false;
  let operationCount = 0;

  if (packageJson) {
    try {
      const parsed = JSON.parse(packageJson) as { utdk?: { auth?: unknown } };
      const auth = parsed.utdk?.auth;
      hasAuthConfig = Array.isArray(auth) ? auth.length > 0 : Boolean(auth);
    } catch {
      // invalid JSON
    }
  }

  if (openApiJson) {
    try {
      const doc = JSON.parse(openApiJson) as OpenAPIV3.Document;
      operationCount = countOperations(doc);
    } catch {
      // invalid JSON
    }
  }

  const hasReadmeContent = Boolean(readme && readme.trim().length > 100);
  const hasOperations = operationCount > 0;

  const domainChecks = [hasAuthConfig, hasReadmeContent, hasOperations];
  const domainScore = Math.round((domainChecks.filter(Boolean).length / domainChecks.length) * 100);

  const total = Math.round((infraScore + domainScore) / 2);

  return {
    infrastructure: {
      hasIndexTs,
      hasTypesTs,
      hasPackageJson,
      hasOpenApiJson,
      hasReadme,
      typesExportFound,
      score: infraScore,
    },
    domain: {
      hasAuthConfig,
      hasReadmeContent,
      operationCount,
      score: domainScore,
    },
    total,
    passed: total >= 50,
  };
}
