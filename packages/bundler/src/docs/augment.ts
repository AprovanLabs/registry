import { readFile } from "node:fs/promises";
import path from "node:path";

import type { Tool } from "@utcp/sdk";
import type { OpenAPIV3 } from "openapi-types";

import type { ClientToolDefinition } from "../client-api.js";
import { resolveProviderDocsIndexPath, resolveProviderDocsManifestPath, resolveProviderOutputDir } from "../provider.js";
import { stripProviderToolName, type RegistryProvider } from "../provider.js";
import { schemaToTypeScriptType } from "../schema.js";
import { getDocsStaleCheckResult } from "./hash.js";
import { groupOpenApiOperations } from "./grouping.js";
import { readDocsManifest } from "./manifest.js";
import { loadDocsPromptAssets } from "./prompt.js";
import { DocsPipelineError, type ProviderPackageDocsMetadata } from "./types.js";

export type AugmentProviderDocsOptions = {
  provider: string;
  providerOptions?: RegistryProvider["options"];
  openApiDocument: OpenAPIV3.Document;
  tools?: Tool[];
  clientToolMap?: Map<string, ClientToolDefinition>;
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

type AugmentedOperation = {
  accessPath: string[];
  description?: string;
  hasInput: boolean;
  hasOptions: boolean;
  inputType: string;
  optionsOptional: boolean;
  optionsType: string;
  outputType: string;
  toolName: string;
};

function normalizePath(pathTemplate: string): string {
  const value = pathTemplate.trim();

  if (!value) {
    return "/";
  }

  return value.startsWith("/") ? value : `/${value}`;
}

function getOperationKey(method: string, route: string): string {
  return `${method.toUpperCase()} ${normalizePath(route)}`;
}

function splitIdentifierWords(name: string): string[] {
  return name
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function toPascalCase(name: string): string {
  const parts = splitIdentifierWords(name);

  if (parts.length === 0) {
    return "Operation";
  }

  return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join("");
}

function toCamelCase(name: string): string {
  const parts = splitIdentifierWords(name);

  if (parts.length === 0) {
    return "client";
  }

  const [first = "client", ...rest] = parts;
  return first.toLowerCase() + rest.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join("");
}

function getOperationFromPath(
  document: OpenAPIV3.Document,
  operationPath: string,
  operationMethod: string,
): OpenAPIV3.OperationObject | undefined {
  const pathItem = document.paths?.[operationPath];

  if (!pathItem) {
    return undefined;
  }

  return pathItem[operationMethod.toLowerCase() as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject | undefined;
}

function isParameterObject(
  parameter: OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject,
): parameter is OpenAPIV3.ParameterObject {
  return typeof parameter === "object" && !("$ref" in parameter);
}

function buildOperationLookup(
  provider: string,
  providerOptions: RegistryProvider["options"] | undefined,
  tools: Tool[] | undefined,
  clientToolMap: Map<string, ClientToolDefinition> | undefined,
): {
  byMethodAndPath: Map<string, AugmentedOperation>;
  byOperationId: Map<string, AugmentedOperation>;
} {
  const byMethodAndPath = new Map<string, AugmentedOperation>();
  const byOperationId = new Map<string, AugmentedOperation>();

  for (const tool of tools ?? []) {
    const mapped = clientToolMap?.get(tool.name);

    if (!mapped) {
      continue;
    }

    const strippedToolName = stripProviderToolName(tool.name, {
      name: provider,
      options: providerOptions,
    });
    const operation: AugmentedOperation = {
      accessPath: mapped.accessPath,
      description: tool.description,
      hasInput: mapped.hasInput,
      hasOptions: mapped.hasOptions,
      inputType: mapped.inputType,
      optionsOptional: mapped.optionsOptional,
      optionsType: mapped.optionsType,
      outputType: schemaToTypeScriptType(tool.outputs),
      toolName: strippedToolName,
    };

    byOperationId.set(strippedToolName, operation);
    byMethodAndPath.set(getOperationKey(mapped.runtimeMetadata.httpMethod, mapped.runtimeMetadata.pathTemplate), operation);
  }

  return { byMethodAndPath, byOperationId };
}

function formatResponseCodes(operation: OpenAPIV3.OperationObject | undefined): string {
  const responseCodes = operation ? Object.keys(operation.responses ?? {}) : [];

  if (responseCodes.length === 0) {
    return "Not declared in OpenAPI";
  }

  return responseCodes.sort((left, right) => left.localeCompare(right)).map((code) => `\`${code}\``).join(", ");
}

function formatListOrNone(values: string[]): string {
  return values.length > 0 ? values.map((value) => `\`${value}\``).join(", ") : "None";
}

function getClientPackageSpecifier(provider: string): string {
  return `@utdk/${provider.replace(/\./g, "/")}`;
}

function getOperationMethodName(
  operation: AugmentedOperation | undefined,
  fallbackOperationId: string | undefined,
  method: string,
  route: string,
): string {
  if (operation) {
    return operation.accessPath.join(".");
  }

  if (fallbackOperationId) {
    return toCamelCase(fallbackOperationId);
  }

  return `${method.toLowerCase()}${toPascalCase(route)}`;
}

function getOverviewBlurb(groups: ReturnType<typeof groupOpenApiOperations>): string {
  if (groups.length === 0) {
    return "This client exposes typed operations generated from the provider OpenAPI specification.";
  }

  const topGroups = groups
    .slice()
    .sort((left, right) => right.operations.length - left.operations.length)
    .slice(0, 4)
    .map((group) => group.title);

  return `This client wraps the provider API in typed methods focused on ${topGroups.join(", ")}.`;
}

function truncateInlineType(value: string, maxLength = 220): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > maxLength ? `${normalized.slice(0, maxLength - 1)}...` : normalized;
}

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
  const operationLookup = buildOperationLookup(options.provider, options.providerOptions, options.tools, options.clientToolMap);
  const packageSpecifier = getClientPackageSpecifier(options.provider);
  const clientVariable = toCamelCase(options.provider.split(/[./]/u).at(-1) ?? options.provider);
  const docs = groups.map((group) => ({
    relativePath: `${group.key}.md`,
    content: [
      `# ${group.title}`,
      "",
      "Use these operations through the generated client (not direct HTTP calls).",
      "",
      `Import path: \`${packageSpecifier}\``,
      "",
      "## Operations",
      "",
      ...group.operations.flatMap((operation) => {
        const openApiOperation = getOperationFromPath(options.openApiDocument, operation.path, operation.method);
        const operationDetails =
          operationLookup.byMethodAndPath.get(getOperationKey(operation.method, operation.path)) ??
          (operation.operationId ? operationLookup.byOperationId.get(operation.operationId) : undefined);
        const methodName = getOperationMethodName(operationDetails, operation.operationId, operation.method, operation.path);
        const callPath = `${clientVariable}.${methodName}`;
        const aliasBase = toPascalCase(methodName);
        const inputAlias = `${aliasBase}Input`;
        const outputAlias = `${aliasBase}Output`;
        const operationDescription =
          operation.summary ?? openApiOperation?.summary ?? openApiOperation?.description ?? operationDetails?.description;
        const pathParams = openApiOperation?.parameters
          ?.filter(isParameterObject)
          .filter((parameter) => parameter.in === "path")
          .map((parameter) => parameter.name);
        const queryParams = openApiOperation?.parameters
          ?.filter(isParameterObject)
          .filter((parameter) => parameter.in === "query")
          .map((parameter) => parameter.name);
        const inputType = operationDetails?.inputType ?? "Unknown";
        const outputType = operationDetails?.outputType ?? "Unknown";
        const outputPreview = truncateInlineType(outputType);
        const invocationArgs = [
          operationDetails?.hasInput ? "input" : undefined,
          operationDetails?.hasOptions ? "options" : undefined,
        ]
          .filter((value): value is string => Boolean(value))
          .join(", ");
        const fallbackSourceUrl = options.openApiDocument.externalDocs?.url ?? toOptionalString(options.openApiDocument.info?.contact?.url);

        return [
          `### \`${callPath}\``,
          "",
          `- **HTTP**: \`${operation.method.toUpperCase()} ${operation.path}\``,
          operationDescription ? `- **What it does**: ${operationDescription}` : undefined,
          operation.operationId ? `- **OpenAPI operationId**: \`${operation.operationId}\`` : undefined,
          `- **Path params**: ${formatListOrNone(pathParams ?? [])}`,
          `- **Query params**: ${formatListOrNone(queryParams ?? [])}`,
          `- **Response codes**: ${formatResponseCodes(openApiOperation)}`,
          operationDetails?.hasOptions
            ? `- **Transport options**: \`${operationDetails.optionsType}\`${operationDetails.optionsOptional ? " (optional)" : ""}`
            : "- **Transport options**: None",
          fallbackSourceUrl ? `- **Source**: [OpenAPI reference](${fallbackSourceUrl})` : undefined,
          "- **TypeScript**: [Client interface](../types.ts)",
          "",
          "**Inputs**",
          "",
          `- Client input type: \`${inputType}\``,
          operationDetails?.hasOptions
            ? `- Client transport options: \`${operationDetails.optionsType}\`${operationDetails.optionsOptional ? " (optional)" : ""}`
            : "- Client transport options: None",
          "",
          "**Outputs**",
          "",
          `- Client return type: \`${outputPreview}\``,
          `- OpenAPI response codes: ${formatResponseCodes(openApiOperation)}`,
          "",
          "```ts",
          `import ${clientVariable} from "${packageSpecifier}";`,
          "",
          `type ${inputAlias} = Parameters<typeof ${callPath}> extends [infer T, ...unknown[]] ? T : undefined;`,
          `type ${outputAlias} = Awaited<ReturnType<typeof ${callPath}>>;`,
          operationDetails?.hasOptions
            ? `type ${aliasBase}Options = Parameters<typeof ${callPath}> extends [unknown, infer T, ...unknown[]] ? T : undefined;`
            : undefined,
          "",
          operationDetails?.hasInput ? `const input: ${inputAlias} = {} as ${inputType};` : undefined,
          operationDetails?.hasOptions
            ? `const options: ${aliasBase}Options = {} as ${operationDetails.optionsType};`
            : undefined,
          `const result: ${outputAlias} = await ${callPath}(${invocationArgs});`,
          "",
          `// Result shape (from schema): ${outputPreview}`,
          "```",
          "",
        ].filter((line): line is string => line !== undefined);
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
    `${packageSpecifier} is a generated, typed client for this provider.`,
    "",
    getOverviewBlurb(groups),
    "",
    "## Quick start",
    "",
    "```ts",
    `import ${clientVariable} from "${packageSpecifier}";`,
    "",
    "// Example operation call (see guides below for full signatures)",
    `await ${clientVariable}.someOperation({});`,
    "```",
    "",
    "## Capability guides",
    "",
    ...groups.map((group) => `- [${group.title}](./docs/${group.key}.md) - ${group.operations.length} operations`),
    "",
    "Each guide is organized by callable operation name (for example, `client.someOperation`), with typed input/output snippets.",
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
