/**
 * Client-safe catalog types + fetch helpers for static JSON under `/catalog/`.
 * Build-time emission lives in `pages/catalog/*.json.ts`.
 */

import { withBasePath } from "@/lib/site";

export type ProviderAuthMethod =
  | "bearer_token"
  | "api_key"
  | "oauth2_client"
  | "oauth2_authcode";

export interface ProviderAuthInfo {
  methods: ProviderAuthMethod[];
  /** False when the spec declared no securitySchemes (permissive fallback). */
  declared: boolean;
  apiKeyHeader: string | null;
  oauth: {
    authUrl: string | null;
    tokenUrl: string | null;
    scopes: Record<string, string>;
  } | null;
}

export interface CatalogProviderSummary {
  id: string;
  title: string;
  description: string | null;
  packageName: string;
  icon: string | null;
  auth: ProviderAuthInfo;
  /** Vendor site (branding), when known. */
  site: string | null;
  /** Upstream spec origin — the vendor's domain, never an aggregator. */
  originDomain: string | null;
  originSpecUrl: string | null;
}

export interface CatalogIndexProvider {
  providerPath: string;
  title: string;
  summary: string | null;
  openApiIcon: string | null;
  operationCount: number;
  scorecardDomain: number | null;
  packageName: string;
}

export interface CatalogIndexOperation {
  providerPath: string;
  providerTitle: string;
  operationId: string;
  sdkPath: string;
  method: string;
  path: string;
  summary: string | null;
}

export interface CatalogIndex {
  providers: CatalogIndexProvider[];
  updatedAt: string | null;
}

export interface CatalogOpsIndex {
  operations: CatalogIndexOperation[];
  updatedAt: string | null;
}

export interface CatalogSchemaType {
  type?: string;
  format?: string;
  enum?: unknown[];
  default?: unknown;
  description?: string;
  items?: CatalogSchemaType;
  properties?: Record<string, CatalogSchemaType>;
  required?: string[];
  nullable?: boolean;
}

export interface CatalogOperationParameter {
  name: string;
  location: "query" | "path" | "header" | "cookie";
  required: boolean;
  description: string | null;
  schema: CatalogSchemaType;
}

export interface CatalogRequestBodyField {
  name: string;
  required: boolean;
  description: string | null;
  schema: CatalogSchemaType;
}

export interface CatalogOperation {
  operationId: string;
  sdkPath: string;
  httpMethod: string;
  httpPath: string;
  summary: string | null;
  description: string | null;
  tags: string[];
  parameters: CatalogOperationParameter[];
  requestBodyFields: CatalogRequestBodyField[];
}

export interface CatalogProviderDetail {
  id: string;
  title: string;
  description: string | null;
  packageName: string;
  icon: string | null;
  version: string | null;
  importSample: string;
  createClientSample: string | null;
  scorecardDomain: number | null;
  scorecardInfrastructure: string | null;
  auth: ProviderAuthInfo;
  operations: CatalogOperation[];
}

export function providersHref(
  providerPath?: string,
  operationId?: string,
): string {
  if (!providerPath) return withBasePath("/providers/");
  const params = new URLSearchParams({ p: providerPath });
  if (operationId) params.set("op", operationId);
  return withBasePath(`/providers/?${params.toString()}`);
}

/**
 * Gateway LLM chat aliases without a UTDK package of their own. Chat
 * credentials are keyed by these ids (gateway `src/llm.ts` rides them on the
 * OpenAI-compatible module), so the credential picker must offer them even
 * though the generated catalog doesn't know them.
 */
const LLM_CHAT_ALIASES: CatalogProviderSummary[] = [
  {
    id: "synthetic.new",
    title: "Synthetic.new",
    description: "LLM chat provider — OpenAI-compatible API (api.synthetic.new).",
    packageName: "utdk/openai",
    icon: null,
    auth: { methods: ["bearer_token"], declared: true, apiKeyHeader: null, oauth: null },
    site: "https://synthetic.new",
    originDomain: null,
    originSpecUrl: null,
  },
];

export async function fetchCatalogProviders(): Promise<CatalogProviderSummary[]> {
  const response = await fetch(withBasePath("/catalog/providers.json"));
  if (!response.ok) {
    throw new Error(`Failed to load provider catalog (${response.status})`);
  }
  const body = (await response.json()) as { providers: CatalogProviderSummary[] };
  const known = new Set(body.providers.map((provider) => provider.id));
  return [
    ...body.providers,
    ...LLM_CHAT_ALIASES.filter((alias) => !known.has(alias.id)),
  ];
}

/** Provider `.d.ts` bundle for the browser TS editor (`/catalog/types/`). */
export interface ProviderTypesBundle {
  module: string;
  files: Record<string, string>;
}

/**
 * Fetch a provider's type bundle; null when the provider has no generated
 * types (the editor's ambient `any` fallback covers it).
 */
export async function fetchProviderTypes(
  providerPath: string,
): Promise<ProviderTypesBundle | null> {
  const response = await fetch(
    withBasePath(`/catalog/types/${providerPath}.json`),
  );
  if (!response.ok) return null;
  return (await response.json()) as ProviderTypesBundle;
}

export async function fetchCatalogIndex(): Promise<CatalogIndex> {
  const response = await fetch(withBasePath("/catalog/index.json"));
  if (!response.ok) {
    throw new Error(`Failed to load catalog index (${response.status})`);
  }
  return (await response.json()) as CatalogIndex;
}

export async function fetchCatalogOps(): Promise<CatalogOpsIndex> {
  const response = await fetch(withBasePath("/catalog/ops.json"));
  if (!response.ok) {
    throw new Error(`Failed to load ops index (${response.status})`);
  }
  return (await response.json()) as CatalogOpsIndex;
}

export async function fetchCatalogProvider(
  providerPath: string,
): Promise<CatalogProviderDetail> {
  const response = await fetch(
    withBasePath(`/catalog/p/${providerPath}.json`),
  );
  if (!response.ok) {
    throw new Error(
      `Failed to load provider "${providerPath}" (${response.status})`,
    );
  }
  return (await response.json()) as CatalogProviderDetail;
}
