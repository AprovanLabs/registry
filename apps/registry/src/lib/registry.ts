import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

type OpenApiDocument = {
  info?: {
    title?: string;
    version?: string;
    description?: string;
    termsOfService?: string;
  };
  paths?: Record<string, Record<string, unknown>>;
  components?: {
    schemas?: Record<string, unknown>;
    parameters?: Record<string, unknown>;
    securitySchemes?: Record<string, unknown>;
  };
};

type OpenApiOperationRaw = {
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: OpenApiParameterRaw[];
  requestBody?: {
    description?: string;
    required?: boolean;
    content?: Record<string, { schema?: unknown }>;
  };
  responses?: Record<string, { description?: string; content?: Record<string, { schema?: unknown }> }>;
  tags?: string[];
};

type OpenApiParameterRaw = {
  name?: string;
  in?: string;
  required?: boolean;
  description?: string;
  schema?: unknown;
  $ref?: string;
};

type ProvenanceJson = {
  pipeline?: {
    scorecard?: {
      infrastructure?: string;
      domain?: number;
    };
  };
};

export type RegistryOperation = {
  /** Canonical UTDK method path (e.g. "orgs.listForUser") — use this for SDK references and gateway calls */
  sdkPath: string;
  /** Raw OpenAPI operationId (e.g. "orgs/list-for-user") — internal reference only */
  operationId: string;
  httpMethod: string;
  httpPath: string;
  summary: string | null;
  description: string | null;
  parameters: RegistryParameter[];
  input: RegistryRequestBody | null;
  outputs: Record<string, RegistryResponse>;
  tags: string[];
};

export type RegistryParameter = {
  name: string;
  location: string;
  required: boolean;
  description: string | null;
  schema: unknown;
};

export type RegistryRequestBody = {
  description: string | null;
  required: boolean;
  schema: unknown;
};

export type RegistryResponse = {
  description: string | null;
  schema: unknown;
};

type UtdkManifest = {
  name?: string;
  version?: string;
  description?: string;
  homepage?: string;
  license?: string;
  utdk?: {
    namespace?: string;
    provider?: string;
    providers?: string[];
    generation?: number;
    generatedAt?: string;
    openapi?: {
      title?: string;
      url?: string;
      version?: string;
      termsOfService?: string;
      icon?: string;
    };
    provenance?: RegistryProvenance;
    branding?: RegistryBranding;
  };
};

/** Chain of ownership — always the upstream vendor, never an aggregator. */
export type RegistryProvenance = {
  source?: string;
  originDomain?: string;
  originSpecUrl?: string;
  service?: string;
  retrievedAt?: string;
};

export type RegistryBranding = {
  logo?: string;
  site?: string;
};

/** LLM-generated auth intelligence (bundler auth phase → auth.json). */
export type RegistryAuthIntel = {
  summary: string;
  methods: ProviderAuthMethod[];
  apiKeyHeader: string | null;
  setupSteps: Array<{ title: string; detail: string }>;
  oauth: {
    authorizationUrl: string | null;
    tokenUrl: string | null;
    appRegistrationUrl: string | null;
    scopes: Array<{ name: string; description: string }>;
  } | null;
};

export type RegistryDocPage = {
  slug: string;
  title: string;
  markdown: string;
  html: string;
};

/** Credential types the gateway can store (mirrors apps/gateway credentials). */
export type ProviderAuthMethod =
  | "bearer_token"
  | "api_key"
  | "oauth2_client"
  | "oauth2_authcode";

export type ProviderAuthInfo = {
  /** Credential types the provider's OpenAPI spec supports. */
  methods: ProviderAuthMethod[];
  /**
   * Whether the spec actually declared `securitySchemes`. When false the
   * methods list is a permissive fallback, not a provider guarantee.
   */
  declared: boolean;
  /** Header name for `api_key` credentials (e.g. `X-Figma-Token`). */
  apiKeyHeader: string | null;
  oauth: {
    authUrl: string | null;
    tokenUrl: string | null;
    /** scope → human description, straight from the spec. */
    scopes: Record<string, string>;
  } | null;
};

const ALL_AUTH_METHODS: ProviderAuthMethod[] = [
  "bearer_token",
  "api_key",
  "oauth2_client",
  "oauth2_authcode",
];

/**
 * Derive the supported credential avenues for a provider from its OpenAPI
 * `securitySchemes`. Specs that declare nothing (e.g. GitHub's official spec)
 * fall back to every method with `declared: false`.
 */
export function extractProviderAuth(
  openApiDocument: OpenApiDocument | null,
): ProviderAuthInfo {
  const schemes = openApiDocument?.components?.securitySchemes;
  const fallback: ProviderAuthInfo = {
    methods: ALL_AUTH_METHODS,
    declared: false,
    apiKeyHeader: null,
    oauth: null,
  };
  if (!schemes || typeof schemes !== "object") return fallback;

  const methods = new Set<ProviderAuthMethod>();
  let apiKeyHeader: string | null = null;
  let hasOAuth = false;
  const oauthInfo: NonNullable<ProviderAuthInfo["oauth"]> = {
    authUrl: null,
    tokenUrl: null,
    scopes: {},
  };

  for (const raw of Object.values(schemes)) {
    if (!raw || typeof raw !== "object") continue;
    const scheme = raw as Record<string, unknown>;
    const type = typeof scheme.type === "string" ? scheme.type.toLowerCase() : "";

    if (type === "http") {
      const httpScheme =
        typeof scheme.scheme === "string" ? scheme.scheme.toLowerCase() : "";
      if (httpScheme === "bearer") methods.add("bearer_token");
      continue;
    }

    if (type === "apikey") {
      methods.add("api_key");
      if (scheme.in === "header" && typeof scheme.name === "string") {
        apiKeyHeader ??= scheme.name;
      }
      continue;
    }

    if (type === "oauth2") {
      const flows =
        scheme.flows && typeof scheme.flows === "object"
          ? (scheme.flows as Record<string, unknown>)
          : {};
      for (const [flowName, rawFlow] of Object.entries(flows)) {
        if (!rawFlow || typeof rawFlow !== "object") continue;
        const flow = rawFlow as Record<string, unknown>;
        const scopes =
          flow.scopes && typeof flow.scopes === "object"
            ? (flow.scopes as Record<string, string>)
            : {};
        if (flowName === "clientCredentials") {
          methods.add("oauth2_client");
        } else if (flowName === "authorizationCode" || flowName === "implicit") {
          methods.add("oauth2_authcode");
        } else {
          continue;
        }
        hasOAuth = true;
        if (typeof flow.authorizationUrl === "string") {
          oauthInfo.authUrl = flow.authorizationUrl;
        }
        if (typeof flow.tokenUrl === "string") {
          oauthInfo.tokenUrl = flow.tokenUrl;
        }
        Object.assign(oauthInfo.scopes, scopes);
      }
      // OAuth2 providers virtually always accept their issued access token as
      // a bearer credential, so allow pasting one directly.
      methods.add("bearer_token");
    }
  }

  if (methods.size === 0) return fallback;
  return {
    methods: [...methods],
    declared: true,
    apiKeyHeader,
    oauth: hasOAuth ? oauthInfo : null,
  };
}

export type RegistryEntry = {
  kind: "namespace" | "provider";
  providerPath: string;
  packageName: string;
  title: string;
  description: string | null;
  descriptionHtml: string | null;
  summary: string | null;
  version: string | null;
  homepage: string | null;
  license: string | null;
  generatedAt: string | null;
  openApiTitle: string | null;
  openApiVersion: string | null;
  openApiUrl: string | null;
  termsOfService: string | null;
  openApiIcon: string | null;
  operationCount: number;
  scorecardDomain: number | null;
  scorecardInfrastructure: string | null;
  auth: ProviderAuthInfo;
  authIntel: RegistryAuthIntel | null;
  provenance: RegistryProvenance | null;
  branding: RegistryBranding | null;
  operations: RegistryOperation[];
  parentProviderPath: string | null;
  parentPackageName: string | null;
  childProviderPaths: string[];
  readmeMarkdown: string | null;
  readmeHtml: string | null;
  docs: RegistryDocPage[];
  importSample: string;
  createClientSample: string | null;
};

export type RegistryCatalog = {
  entries: RegistryEntry[];
  namespaceCount: number;
  providerCount: number;
  documentedCount: number;
  updatedAt: string | null;
};

const workspaceRoot = findWorkspaceRoot(process.cwd());
const packagesRoot = path.join(workspaceRoot, "packages", "utdk");

let registryCatalogPromise: Promise<RegistryCatalog> | undefined;

export async function getRegistryCatalog(): Promise<RegistryCatalog> {
  registryCatalogPromise ??= buildRegistryCatalog();
  return registryCatalogPromise;
}

export async function getRegistryEntry(
  providerPath: string,
): Promise<RegistryEntry | undefined> {
  const catalog = await getRegistryCatalog();

  return catalog.entries.find((entry) => entry.providerPath === providerPath);
}

export async function getRegistryRoutes(): Promise<
  Array<{ slug: string[]; providerPath: string; docSlug: string | null }>
> {
  const catalog = await getRegistryCatalog();

  return catalog.entries.flatMap((entry) => {
    const overviewRoute = {
      slug: entry.providerPath.split("/"),
      providerPath: entry.providerPath,
      docSlug: null,
    };

    const docRoutes = entry.docs.map((doc) => ({
      slug: [...entry.providerPath.split("/"), "docs", ...doc.slug.split("/")],
      providerPath: entry.providerPath,
      docSlug: doc.slug,
    }));

    return [overviewRoute, ...docRoutes];
  });
}

export function getDocPage(
  entry: RegistryEntry,
  docSlug: string | null,
): RegistryDocPage | null {
  if (!docSlug) {
    return null;
  }

  return entry.docs.find((doc) => doc.slug === docSlug) ?? null;
}

export function buildOperationSnippet(
  packageName: string,
  providerPath: string,
  operation: RegistryOperation,
): string {
  const importIdentifier = toImportIdentifier(providerPath);
  const requiredParams = operation.parameters.filter((p) => p.required);
  const paramsInner =
    requiredParams.length > 0
      ? ` /* ${requiredParams.map((p) => p.name).join(", ")} */ `
      : "";
  return `import ${importIdentifier} from "${packageName}";\nawait ${importIdentifier}.${operation.sdkPath}({${paramsInner}});`;
}

/**
 * Converts a segment (e.g. "list-for-user" or "listWebhooks") to camelCase
 * (e.g. "listForUser" / "listWebhooks"). Must match @utdk client's toCamelCase,
 * including splitting existing camelCase / PascalCase identifiers.
 */
function segmentToCamelCase(segment: string): string {
  const words = segment
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Za-z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "_";

  const [first = "_", ...rest] = words;
  return (
    first.toLowerCase() +
    rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")
  );
}

/**
 * Converts an OpenAPI operationId (e.g. "orgs/list-for-user") to the canonical
 * UTDK SDK path (e.g. "orgs.listForUser").
 */
function operationIdToSdkPath(operationId: string): string {
  return operationId
    .split("/")
    .filter(Boolean)
    .map(segmentToCamelCase)
    .join(".");
}

async function buildRegistryCatalog(): Promise<RegistryCatalog> {
  const candidatePaths = await discoverEntryDirectories(packagesRoot);

  const entries = (
    await Promise.all(
      candidatePaths.map(async (relativePath) =>
        buildRegistryEntry(relativePath),
      ),
    )
  )
    .filter((entry): entry is RegistryEntry => entry !== null)
    .sort((left, right) =>
      left.providerPath.localeCompare(right.providerPath, undefined, {
        sensitivity: "base",
      }),
    );

  const entryMap = new Map(entries.map((entry) => [entry.providerPath, entry]));

  for (const entry of entries) {
    if (entry.kind === "namespace") {
      const manifestChildPaths = entry.childProviderPaths.filter((providerPath) =>
        entryMap.has(providerPath),
      );

      entry.childProviderPaths = manifestChildPaths.length
        ? manifestChildPaths
        : entries
            .filter((candidate) => candidate.parentProviderPath === entry.providerPath)
            .map((candidate) => candidate.providerPath)
            .sort();
    }

    if (entry.parentProviderPath) {
      entry.parentPackageName =
        entryMap.get(entry.parentProviderPath)?.packageName ?? null;
    }
  }

  const documentedCount = entries.filter(
    (entry) => entry.readmeHtml || entry.docs.length > 0,
  ).length;
  const updatedAt = entries.reduce<string | null>((latest, entry) => {
    if (!entry.generatedAt) {
      return latest;
    }

    if (!latest) {
      return entry.generatedAt;
    }

    return entry.generatedAt > latest ? entry.generatedAt : latest;
  }, null);

  return {
    entries,
    namespaceCount: entries.filter((entry) => entry.kind === "namespace").length,
    providerCount: entries.filter((entry) => entry.kind === "provider").length,
    documentedCount,
    updatedAt,
  };
}

async function buildRegistryEntry(
  relativePath: string,
): Promise<RegistryEntry | null> {
  const absolutePath = path.join(packagesRoot, relativePath);
  const manifest = await readJson<UtdkManifest>(path.join(absolutePath, "package.json"));
  const openApiDocument = await readJson<OpenApiDocument>(
    path.join(absolutePath, "openapi.json"),
  );
  const provenance = await readJson<ProvenanceJson>(
    path.join(absolutePath, "provenance.json"),
  );
  const authIntelFile = await readJson<{ auth?: RegistryAuthIntel }>(
    path.join(absolutePath, "auth.json"),
  );
  const readmeMarkdown = await readText(path.join(absolutePath, "README.md"));
  const docs = await loadDocs(path.join(absolutePath, "docs"));

  const manifestNamespace = manifest?.utdk?.namespace ?? null;
  const manifestProvider = manifest?.utdk?.provider ?? null;
  const providerPath = manifestNamespace ?? manifestProvider ?? relativePath;

  if (!providerPath || providerPath === ".") {
    return null;
  }

  const kind = manifestNamespace ? "namespace" : "provider";
  const packageName = manifest?.name ?? `@utdk/${providerPath}`;
  const title =
    manifest?.utdk?.openapi?.title ??
    openApiDocument?.info?.title ??
    toDisplayTitle(providerPath);
  const descriptionMarkdown =
    manifest?.description ?? openApiDocument?.info?.description ?? null;
  const description = collapseWhitespace(stripMarkdown(descriptionMarkdown));
  const descriptionHtml = descriptionMarkdown
    ? renderMarkdown(descriptionMarkdown)
    : null;
  const summary = extractSummary(readmeMarkdown) ?? description;
  const readmeHtml = readmeMarkdown ? renderMarkdown(readmeMarkdown) : null;
  const childProviderPaths =
    kind === "namespace" ? [...(manifest?.utdk?.providers ?? [])].sort() : [];
  const parentProviderPath =
    kind === "provider" && providerPath.includes("/")
      ? path.posix.dirname(providerPath)
      : null;

  const scorecardDomain = provenance?.pipeline?.scorecard?.domain ?? null;
  const scorecardInfrastructure =
    provenance?.pipeline?.scorecard?.infrastructure ?? null;
  const operations = extractOperations(openApiDocument);

  return {
    kind,
    providerPath,
    packageName,
    title,
    description,
    descriptionHtml,
    summary,
    version: manifest?.version ?? openApiDocument?.info?.version ?? null,
    homepage: manifest?.homepage ?? null,
    license: manifest?.license ?? null,
    generatedAt: manifest?.utdk?.generatedAt ?? null,
    openApiTitle:
      manifest?.utdk?.openapi?.title ?? openApiDocument?.info?.title ?? null,
    openApiVersion:
      manifest?.utdk?.openapi?.version ?? openApiDocument?.info?.version ?? null,
    openApiUrl: manifest?.utdk?.openapi?.url ?? null,
    termsOfService:
      manifest?.utdk?.openapi?.termsOfService ??
      openApiDocument?.info?.termsOfService ??
      null,
    openApiIcon: manifest?.utdk?.openapi?.icon ?? null,
    operationCount: countOperations(openApiDocument),
    scorecardDomain,
    scorecardInfrastructure,
    auth: extractProviderAuth(openApiDocument),
    authIntel: authIntelFile?.auth ?? null,
    provenance: manifest?.utdk?.provenance ?? null,
    branding: manifest?.utdk?.branding ?? null,
    operations,
    parentProviderPath,
    parentPackageName: null,
    childProviderPaths,
    readmeMarkdown,
    readmeHtml,
    docs,
    importSample: buildImportSample(kind, packageName, providerPath, childProviderPaths),
    createClientSample:
      kind === "provider"
        ? `import { create${toPascalCase(providerPath)}Client } from "${packageName}"`
        : null,
  };
}

const HTTP_METHODS = ["get", "post", "put", "patch", "delete", "head", "options", "trace"] as const;

function extractOperations(openApiDocument: OpenApiDocument | null): RegistryOperation[] {
  if (!openApiDocument?.paths) {
    return [];
  }

  const operations: RegistryOperation[] = [];
  let autoIndex = 0;

  for (const [apiPath, pathItem] of Object.entries(openApiDocument.paths)) {
    for (const method of HTTP_METHODS) {
      const raw = (pathItem as Record<string, unknown>)[method] as OpenApiOperationRaw | undefined;

      if (!raw || typeof raw !== "object") {
        continue;
      }

      autoIndex += 1;
      const operationId =
        raw.operationId?.trim() ||
        `op_${method}_${autoIndex}`;

      const parameters: RegistryParameter[] = (raw.parameters ?? [])
        .filter((p): p is OpenApiParameterRaw => Boolean(p && typeof p === "object" && !("$ref" in p)))
        .map((p) => ({
          name: p.name ?? "",
          location: p.in ?? "query",
          required: p.required ?? false,
          description: collapseWhitespace(p.description ?? null),
          schema: p.schema ?? null,
        }));

      let input: RegistryRequestBody | null = null;

      if (raw.requestBody) {
        const contentEntry = raw.requestBody.content
          ? Object.values(raw.requestBody.content)[0]
          : undefined;

        input = {
          description: collapseWhitespace(raw.requestBody.description ?? null),
          required: raw.requestBody.required ?? false,
          schema: contentEntry?.schema ?? null,
        };
      }

      const outputs: Record<string, RegistryResponse> = {};

      for (const [statusCode, responseObj] of Object.entries(raw.responses ?? {})) {
        if (!responseObj || typeof responseObj !== "object") {
          continue;
        }

        const contentEntry = responseObj.content
          ? Object.values(responseObj.content)[0]
          : undefined;

        outputs[statusCode] = {
          description: collapseWhitespace((responseObj as { description?: string }).description ?? null),
          schema: (contentEntry as { schema?: unknown } | undefined)?.schema ?? null,
        };
      }

      operations.push({
        sdkPath: operationIdToSdkPath(operationId),
        operationId,
        httpMethod: method.toUpperCase(),
        httpPath: apiPath,
        summary: collapseWhitespace(raw.summary ?? null),
        description: collapseWhitespace(raw.description ?? null),
        parameters,
        input,
        outputs,
        tags: raw.tags ?? [],
      });
    }
  }

  return operations;
}

async function discoverEntryDirectories(rootDirectory: string): Promise<string[]> {
  const directories = await walkDirectories(rootDirectory);

  const entryDirectories: string[] = [];

  for (const directory of directories) {
    const relativePath = path.relative(rootDirectory, directory);

    if (
      !relativePath ||
      relativePath === "." ||
      relativePath.split(path.sep).includes("docs")
    ) {
      continue;
    }

    const hasManifest = await readJson<UtdkManifest>(path.join(directory, "package.json"));
    const hasReadme = await readText(path.join(directory, "README.md"));
    const hasOpenApi = await readText(path.join(directory, "openapi.json"));

    if (hasManifest || hasReadme || hasOpenApi) {
      entryDirectories.push(relativePath.split(path.sep).join("/"));
    }
  }

  return entryDirectories;
}

async function walkDirectories(directory: string): Promise<string[]> {
  const children = await readdir(directory, { withFileTypes: true });
  const nestedDirectories: string[] = [];

  for (const child of children) {
    if (
      !child.isDirectory() ||
      child.name.startsWith(".") ||
      child.name === "dist" ||
      child.name === "node_modules"
    ) {
      continue;
    }

    const childPath = path.join(directory, child.name);

    nestedDirectories.push(childPath);
    nestedDirectories.push(...(await walkDirectories(childPath)));
  }

  return nestedDirectories;
}

async function loadDocs(docsDirectory: string): Promise<RegistryDocPage[]> {
  const markdownFiles = await walkMarkdownFiles(docsDirectory);

  const docs = await Promise.all(
    markdownFiles.map(async (filePath) => {
      const markdown = await readFile(filePath, "utf8");
      const relativePath = path
        .relative(docsDirectory, filePath)
        .split(path.sep)
        .join("/");
      const slug = normalizeDocSlug(relativePath);

      return {
        slug,
        title: extractHeading(markdown) ?? toDisplayTitle(slug),
        markdown,
        html: renderMarkdown(markdown),
      };
    }),
  );

  return docs.sort((left, right) =>
    left.slug.localeCompare(right.slug, undefined, { sensitivity: "base" }),
  );
}

async function walkMarkdownFiles(directory: string): Promise<string[]> {
  try {
    const children = await readdir(directory, { withFileTypes: true });
    const markdownFiles: string[] = [];

    for (const child of children) {
      const childPath = path.join(directory, child.name);

      if (child.isDirectory()) {
        markdownFiles.push(...(await walkMarkdownFiles(childPath)));
        continue;
      }

      if (child.isFile() && /\.(md|mdx)$/i.test(child.name)) {
        markdownFiles.push(childPath);
      }
    }

    return markdownFiles;
  } catch {
    return [];
  }
}

async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    const content = await readFile(filePath, "utf8");

    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

async function readText(filePath: string): Promise<string | null> {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

function countOperations(openApiDocument: OpenApiDocument | null): number {
  if (!openApiDocument?.paths) {
    return 0;
  }

  const methods = new Set([
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "head",
    "options",
    "trace",
  ]);

  return Object.values(openApiDocument.paths).reduce((count, pathDefinition) => {
    return (
      count +
      Object.keys(pathDefinition).filter((method) => methods.has(method)).length
    );
  }, 0);
}

function buildImportSample(
  kind: RegistryEntry["kind"],
  packageName: string,
  providerPath: string,
  childProviderPaths: string[],
): string {
  if (kind === "namespace") {
    const firstChild = childProviderPaths[0];

    if (firstChild) {
      return `import { ${toImportIdentifier(firstChild)} } from "${packageName}"`;
    }

    return `import * as ${toImportIdentifier(providerPath)} from "${packageName}"`;
  }

  return `import ${toImportIdentifier(providerPath)} from "${packageName}"`;
}

function toImportIdentifier(value: string): string {
  const parts = value
    .split("/")
    .flatMap((segment) => segment.split(/[^a-zA-Z0-9]+/))
    .filter(Boolean)
    .map((segment) => segment.toLowerCase());

  const [firstPart = "client", ...rest] = parts;

  return [
    firstPart,
    ...rest.map((segment) => segment[0]!.toUpperCase() + segment.slice(1)),
  ].join("");
}

function toPascalCase(value: string): string {
  return value
    .split("/")
    .flatMap((segment) => segment.split(/[^a-zA-Z0-9]+/))
    .filter(Boolean)
    .map((segment) => segment[0]!.toUpperCase() + segment.slice(1).toLowerCase())
    .join("");
}

function toDisplayTitle(value: string): string {
  return value
    .split("/")
    .map((segment) =>
      segment
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((part) => part[0]!.toUpperCase() + part.slice(1))
        .join(" "),
    )
    .join(" / ");
}

function normalizeDocSlug(relativePath: string): string {
  const withoutExtension = relativePath.replace(/\.(md|mdx)$/i, "");

  if (withoutExtension.endsWith("/index")) {
    return withoutExtension.slice(0, -"/index".length);
  }

  return withoutExtension;
}

function extractHeading(markdown: string): string | null {
  const match = markdown.match(/^#\s+(.+)$/m);

  return match ? collapseWhitespace(match[1]) : null;
}

function extractSummary(markdown: string | null): string | null {
  if (!markdown) {
    return null;
  }

  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("#"));

  if (!lines.length) {
    return null;
  }

  return collapseWhitespace(stripMarkdown(lines[0] ?? ""));
}

function stripMarkdown(value: string | null): string {
  if (!value) {
    return "";
  }

  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_>#-]/g, " ")
    .trim();
}

function collapseWhitespace(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  return value.replace(/\s+/g, " ").trim();
}

function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}

function findWorkspaceRoot(startDirectory: string): string {
  let currentDirectory = path.resolve(startDirectory);

  while (true) {
    if (existsSync(path.join(currentDirectory, "packages", "utdk"))) {
      return currentDirectory;
    }

    const parentDirectory = path.dirname(currentDirectory);

    if (parentDirectory === currentDirectory) {
      throw new Error("Could not locate workspace root containing packages/utdk.");
    }

    currentDirectory = parentDirectory;
  }
}
