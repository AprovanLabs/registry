/**
 * lib.ts — shared helpers for the one-time registry ingest scripts in
 * scripts/sources/.
 *
 * Every ingest script follows the same contract:
 *   1. read data/registry.json, never clobber hand-curated entries;
 *   2. fetch specs only from official vendor URLs (aggregator catalogs may
 *      inspire *which* vendors to add, but spec bytes and doc links come from
 *      the vendor — that keeps provenance clean and licensing compliant);
 *   3. route generated metadata (descriptions, categories) through the
 *      Synthetic.new LLM-augmentation (packages/bundler/src/llm.ts), the same
 *      structured-completion backend the bundler phases use.
 *
 * LLM config comes from packages/bundler/.env (SYNTHETIC_PROVIDER_URL +
 * SYNTHETIC_PROVIDER_API_KEY, with ANTHROPIC_API_KEY as fallback) — call
 * `loadBundlerEnv()` before augmenting.
 */

import { readFileSync } from "node:fs";
import { readFile as readFileAsync, writeFile as writeFileAsync } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  createStructuredCompletion,
} from "../../packages/bundler/src/llm.js";
import { loadOpenApiDocument } from "../../packages/bundler/src/openapi.js";
import type { RegistryProvider } from "../../packages/bundler/src/provider.js";

/** Loose OpenAPI shapes — enough for summarization without a type dependency. */
type LooseOperation = {
  summary?: string;
  operationId?: string;
};
type LooseDocument = {
  openapi?: string;
  swagger?: string;
  info?: {
    title?: string;
    version?: string;
    description?: string;
    contact?: { url?: string };
  };
  externalDocs?: { url?: string };
  paths?: Record<string, Record<string, LooseOperation | undefined> | undefined>;
  components?: { securitySchemes?: Record<string, unknown> };
};

export const REPO_ROOT = path.join(fileURLToPath(new URL("../..", import.meta.url)));
export const REGISTRY_PATH = path.join(REPO_ROOT, "data", "registry.json");

/** Registry entry as stored in data/registry.json (superset of the bundler type). */
export type RegistryEntry = RegistryProvider & {
  ingestSource?: string;
  /** Recorded when an LLM pass generated/refreshed metadata fields. */
  augmentation?: {
    model: string;
    generatedAt: string;
    fields: string[];
  };
  [key: string]: unknown;
};

/**
 * Canonical category vocabulary — the distinct values already used by the
 * catalog, deduped. Augmentation passes must pick from this list so the
 * registry UI's category facets stay coherent.
 */
export const CATEGORIES = [
  "AI & Machine Learning",
  "Analytics",
  "Backend",
  "Cloud",
  "Collaboration",
  "Communication",
  "CRM",
  "Customer Support",
  "Design Tools",
  "Developer Tools",
  "Ecommerce",
  "Education",
  "Email",
  "Entertainment",
  "Financial",
  "Forms",
  "Hosting",
  "IoT",
  "Location",
  "Marketing",
  "Media",
  "Messaging",
  "Monitoring",
  "Open Data",
  "Payments",
  "Project Management",
  "Search",
  "Security",
  "Social",
  "Telecom",
  "Text",
  "Transport",
] as const;

export async function loadRegistry(): Promise<RegistryEntry[]> {
  const raw = await readFileAsync(REGISTRY_PATH, "utf8");
  return JSON.parse(raw) as RegistryEntry[];
}

export async function saveRegistry(entries: RegistryEntry[]): Promise<void> {
  await writeFileAsync(REGISTRY_PATH, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
}

/**
 * Load packages/bundler/.env into process.env (existing vars win) — the same
 * convention the bundler CLI uses, so scripts and bundler share one LLM config.
 */
export function loadBundlerEnv(): void {
  const envPath = path.join(REPO_ROOT, "packages", "bundler", ".env");
  let raw: string;
  try {
    raw = readFileSync(envPath, "utf8");
  } catch {
    return;
  }
  for (const line of raw.split("\n")) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, value] = match;
    if (key && value !== undefined && process.env[key] === undefined) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}

export function hasLlmBackend(): boolean {
  return Boolean(
    (process.env.SYNTHETIC_PROVIDER_URL && process.env.SYNTHETIC_PROVIDER_API_KEY) ||
      process.env.ANTHROPIC_API_KEY,
  );
}

// ---------------------------------------------------------------------------
// Spec fetch + summarization
// ---------------------------------------------------------------------------

export type SpecSummary = {
  title?: string;
  version?: string;
  openapiVersion?: string;
  description?: string;
  docsUrl?: string;
  pathCount: number;
  /** A sample of paths + summaries, for LLM grounding. */
  operations: string[];
  securitySchemes: string[];
};

/**
 * Fetch and parse a provider's OpenAPI spec (JSON or YAML, http or repo://),
 * returning a compact summary suitable for validation and LLM grounding.
 */
export async function fetchSpecSummary(entry: RegistryEntry): Promise<SpecSummary> {
  const document = (await loadOpenApiDocument(entry)) as LooseDocument;
  const info = document.info ?? {};
  const paths = document.paths ?? {};
  const operations: string[] = [];

  for (const [route, item] of Object.entries(paths)) {
    if (!item || typeof item !== "object") continue;
    for (const method of ["get", "post", "put", "patch", "delete"] as const) {
      const operation = item[method];
      if (!operation) continue;
      const summary = operation.summary ?? operation.operationId ?? "";
      operations.push(`${method.toUpperCase()} ${route}${summary ? ` — ${summary}` : ""}`);
      if (operations.length >= 40) break;
    }
    if (operations.length >= 40) break;
  }

  return {
    title: info.title,
    version: info.version,
    openapiVersion: document.openapi ?? document.swagger,
    description: info.description,
    docsUrl: document.externalDocs?.url ?? info.contact?.url,
    pathCount: Object.keys(paths).length,
    operations,
    securitySchemes: Object.keys(document.components?.securitySchemes ?? {}),
  };
}

// ---------------------------------------------------------------------------
// Synthetic.new metadata augmentation
// ---------------------------------------------------------------------------

export type AugmentedMetadata = {
  description: string;
  category: (typeof CATEGORIES)[number];
  model: string;
};

const AUGMENT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["description", "category"],
  properties: {
    description: {
      type: "string",
      maxLength: 400,
      description:
        "One or two sentences, plain language, describing what a developer can do with this API. " +
        "Written in your own words — never copied from the spec description. " +
        "Plain text only: no Markdown, no links, no HTML. No marketing fluff, no leading 'The X API'.",
    },
    category: {
      type: "string",
      enum: [...CATEGORIES],
      description: "The single best-fitting catalog category.",
    },
  },
} as const;

/**
 * Generate catalog metadata (description + category) for a provider from its
 * spec summary, via the shared structured-completion backend (Synthetic.new
 * when configured, Anthropic otherwise).
 */
export async function augmentMetadata(
  name: string,
  spec: SpecSummary,
  existing?: { description?: string; category?: string },
): Promise<AugmentedMetadata> {
  const user = [
    `Provider: ${name}`,
    spec.title ? `Spec title: ${spec.title}` : undefined,
    spec.description ? `Spec description: ${spec.description.slice(0, 1500)}` : undefined,
    existing?.description ? `Existing catalog description: ${existing.description}` : undefined,
    existing?.category ? `Existing catalog category: ${existing.category}` : undefined,
    `Operations (${spec.pathCount} paths total; sample):`,
    ...spec.operations.slice(0, 25).map((operation) => `  - ${operation}`),
  ]
    .filter(Boolean)
    .join("\n");

  const completion = await createStructuredCompletion({
    system:
      "You write concise catalog metadata for API provider entries in a developer tool registry. " +
      "Ground every claim in the provided spec summary — never invent capabilities the operations don't show. " +
      "Write descriptions in your own words; never copy sentences from the spec (spec descriptions are often " +
      "auth boilerplate, not capability summaries). Plain text only — no Markdown, links, or HTML. " +
      "Pick the category from the API's business domain (what the operations manage), not from incidental keywords.",
    user,
    schema: AUGMENT_SCHEMA as unknown as Record<string, unknown>,
    schemaName: "provider_catalog_metadata",
    maxTokens: 16384,
  });

  const parsed = JSON.parse(completion.text) as {
    description: string;
    category: (typeof CATEGORIES)[number];
  };

  const description = parsed.description.replace(/\s+/gu, " ").trim();
  if (isLowQualityDescription(description)) {
    throw new Error(`augmentation produced boilerplate for ${name}: ${description.slice(0, 120)}`);
  }

  return { ...parsed, description, model: completion.model };
}

/**
 * True when a catalog description is spec-dump boilerplate rather than a
 * capability summary: Markdown/HTML markup, auth-guide preambles, or nothing.
 */
export function isLowQualityDescription(description: string | undefined): boolean {
  const value = description?.trim() ?? "";
  if (value.length === 0) return true;
  return (
    value.includes("](") || // Markdown links
    /<[a-z][^>]*>/iu.test(value) || // HTML tags
    value.includes("```") ||
    /^before using/iu.test(value) ||
    /^#|\n#/u.test(value)
  );
}

// ---------------------------------------------------------------------------
// Small shared utilities
// ---------------------------------------------------------------------------

export function nowIso(): string {
  return new Date().toISOString();
}

export function today(): string {
  return nowIso().slice(0, 10);
}

/** "https://developer.example.com/docs" → "example.com" (best-effort). */
export function urlToDomain(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

export function sortByName(entries: RegistryEntry[]): RegistryEntry[] {
  return entries.slice().sort((left, right) => left.name.localeCompare(right.name));
}
