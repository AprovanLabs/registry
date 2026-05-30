#!/usr/bin/env tsx
/**
 * ingest-composio.ts
 *
 * Ingest providers from the Composio platform into the @utdk registry.
 *
 * ## Usage
 *
 *   # Ingest specific Tier 1 providers
 *   pnpm tsx scripts/ingest-composio.ts --providers slack,linear,notion
 *
 *   # Ingest all 12 Tier 1 providers
 *   pnpm tsx scripts/ingest-composio.ts --all
 *
 *   # Ingest and run the full pipeline (generate + review + ship)
 *   pnpm tsx scripts/ingest-composio.ts --all --pipeline
 *
 *   # Dry-run: print what would be ingested without modifying any files
 *   pnpm tsx scripts/ingest-composio.ts --all --dry-run
 *
 *   # Batch mode: fetch full Composio catalog and process all remaining apps (Tier 3)
 *   pnpm tsx scripts/ingest-composio.ts --batch
 *
 *   # Batch mode with concurrency limit (default: 5)
 *   pnpm tsx scripts/ingest-composio.ts --batch --concurrency 10
 *
 *   # Batch mode dry-run
 *   pnpm tsx scripts/ingest-composio.ts --batch --dry-run
 *
 * ## Background
 *
 * Composio publishes a catalog of 1,000+ app integrations. Each app has
 * associated authentication metadata and, for many apps, a public OpenAPI spec.
 *
 * The Tier 1 providers are the 12 highest-demand integrations:
 *   Slack, Linear, Notion, Jira, Salesforce, HubSpot, Stripe, Twilio,
 *   SendGrid, Airtable, Intercom, Zendesk
 *
 * These are already registered in data/registry.json with ingestSource="composio".
 * This script re-fetches the catalog, resolves updated spec URLs, and optionally
 * runs the bundler pipeline to regenerate @utdk/* packages.
 *
 * Batch mode (--batch) processes the remaining ~1,000 Composio apps (Tier 3).
 * It applies a domain scoring model and:
 *   - Skips providers scoring < 40 (insufficient metadata) with a warning
 *   - Tags providers scoring 40–59 as "beta" (excluded from default web UI listing)
 *   - Fully registers providers scoring >= 60
 *   - Skips providers whose Composio catalog entry is unchanged (hash comparison)
 *
 * ## Composio API
 *
 * The public catalog endpoint is:
 *   GET https://backend.composio.dev/api/v1/apps
 *   (Note: v1 is retired; the script falls back to curated spec URLs when
 *    the Composio API is unavailable or requires authentication.)
 *
 * ## Auth
 *
 * Set COMPOSIO_API_KEY in your environment for authenticated access to the
 * Composio v3 API, which unlocks app-specific action schemas and spec URLs.
 */

import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AuthConfig =
  | { auth_type: "api_key"; api_key: string; var_name: string; location: "header" | "query" }
  | { auth_type: "oauth2"; token_url: string; authorization_url: string; api_key?: string; var_name?: string; location?: string }
  | { auth_type: "http"; scheme: "basic"; username: string; password: string };

type ProviderEntry = {
  name: string;
  provider_type: "http" | "local";
  http_method?: "GET";
  url: string;
  content_type?: string;
  ingestSource: "composio";
  sourceHash?: string;
  tags?: string[];
  score?: { domain: number };
  options?: {
    auth?: AuthConfig | AuthConfig[];
  };
  metadata?: {
    description?: string;
    category?: string;
    last_updated?: string;
    maintainer?: string;
    documentation_url?: string;
    version?: string;
    openapi_version?: string;
  };
};

type ComposioApp = {
  name: string;
  key: string;
  description?: string;
  auth_schemes?: Array<{
    auth_mode?: string;
    fields?: Array<{ name: string; displayName?: string; required?: boolean }>;
  }>;
  openapi_spec_url?: string;
  categories?: string[];
};

type BatchResult = {
  provider: string;
  composioKey: string;
  specUrl: string | null;
  action: "added" | "updated" | "skipped-low-score" | "skipped-hash" | "error" | "dry-run";
  domainScore?: number;
  tags?: string[];
  error?: string;
};

type BatchReport = {
  ok: boolean;
  dryRun: boolean;
  fetchedFromApi: number;
  tier3Processed: number;
  succeeded: number;
  failed: number;
  skippedLowScore: number;
  skippedHashUnchanged: number;
  beta: number;
  results: BatchResult[];
};

// ---------------------------------------------------------------------------
// Tier 1 provider catalog
// ---------------------------------------------------------------------------

/**
 * Curated metadata for the 12 Tier 1 providers.
 *
 * Each entry maps a normalized provider name to:
 *   - composioKey: the slug used in the Composio catalog
 *   - specUrl: fallback OpenAPI spec URL if Composio does not provide one
 *   - specType: "http" or "local" (local = repo://data/openapi/<name>.json)
 *   - auth: correct authentication configuration
 *   - metadata: human-readable metadata for registry.json
 */
const TIER1_CATALOG: Record<
  string,
  {
    composioKey: string;
    specUrl: string;
    specType: "http" | "local";
    contentType: string;
    auth: AuthConfig[];
    metadata: NonNullable<ProviderEntry["metadata"]>;
  }
> = {
  slack: {
    composioKey: "slack",
    specUrl: "https://api.apis.guru/v2/specs/slack.com/1.7.0/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://slack.com/api/oauth.v2.access",
        authorization_url: "https://slack.com/oauth/v2/authorize",
        api_key: "Bearer ${SLACK_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Slack is a messaging platform for teams. Build bots, send messages, manage channels, and automate workflows using the Slack Web API",
      category: "Communication",
      maintainer: "Slack Technologies",
      documentation_url: "https://api.slack.com/web",
      version: "1.7.0",
      openapi_version: "3.0.0",
    },
  },
  linear: {
    composioKey: "linear",
    specUrl: "repo://data/openapi/linear.json",
    specType: "local",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${LINEAR_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Linear is a modern project management tool for high-performance software teams. Manage issues, track projects, and ship faster using the Linear API",
      category: "Project Management",
      maintainer: "Linear",
      documentation_url: "https://developers.linear.app",
      version: "1.0.0",
      openapi_version: "3.0.3",
    },
  },
  notion: {
    composioKey: "notion",
    specUrl: "https://api.apis.guru/v2/specs/notion.com/1.0.0/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${NOTION_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Notion is an all-in-one workspace for notes, wikis, and databases. Use the Notion API to read and write pages, databases, blocks, and users",
      category: "Productivity",
      maintainer: "Notion Labs",
      documentation_url: "https://developers.notion.com",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },
  jira: {
    composioKey: "jira",
    specUrl: "https://api.apis.guru/v2/specs/atlassian.com/jira/1001.0.0-SNAPSHOT/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://auth.atlassian.com/oauth/token",
        authorization_url: "https://auth.atlassian.com/authorize",
        api_key: "Bearer ${JIRA_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Jira is a project management and issue tracking tool by Atlassian. Create, update, and query issues, manage projects, and automate workflows using the Jira Cloud REST API",
      category: "Project Management",
      maintainer: "Atlassian",
      documentation_url: "https://developer.atlassian.com/cloud/jira/platform/rest/v3",
      version: "1001.0.0",
      openapi_version: "3.0.1",
    },
  },
  salesforce: {
    composioKey: "salesforce",
    specUrl: "repo://data/openapi/salesforce.json",
    specType: "local",
    contentType: "application/json",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://login.salesforce.com/services/oauth2/token",
        authorization_url: "https://login.salesforce.com/services/oauth2/authorize",
        api_key: "Bearer ${SALESFORCE_ACCESS_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Salesforce CRM REST API provides programmatic access to accounts, contacts, leads, opportunities, and custom objects. Build integrations with the world's #1 CRM platform",
      category: "CRM",
      maintainer: "Salesforce",
      documentation_url:
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest",
      version: "58.0",
      openapi_version: "3.0.3",
    },
  },
  hubspot: {
    composioKey: "hubspot",
    specUrl: "https://api.apis.guru/v2/specs/hubapi.com/webhooks/v3/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://api.hubapi.com/oauth/v1/token",
        authorization_url: "https://app.hubspot.com/oauth/authorize",
        api_key: "Bearer ${HUBSPOT_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "HubSpot is a CRM platform with marketing, sales, and service tools. The HubSpot API lets you access contacts, companies, deals, tickets, and automate workflows",
      category: "CRM",
      maintainer: "HubSpot",
      documentation_url: "https://developers.hubspot.com/docs/api/overview",
      version: "v3",
      openapi_version: "3.0.0",
    },
  },
  stripe: {
    composioKey: "stripe",
    specUrl: "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.yaml",
    specType: "http",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${STRIPE_SECRET_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Stripe provides APIs for accepting payments, managing subscriptions, sending payouts, and running online businesses. Accept payments and manage transactions globally",
      category: "Payments",
      maintainer: "Stripe",
      documentation_url: "https://stripe.com/docs/api",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },
  twilio: {
    composioKey: "twilio",
    specUrl: "https://api.apis.guru/v2/specs/twilio.com/api/1.42.0/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "http",
        scheme: "basic",
        username: "${TWILIO_ACCOUNT_SID}",
        password: "${TWILIO_AUTH_TOKEN}",
      },
    ],
    metadata: {
      description:
        "Twilio is a cloud communications platform for building SMS, voice, video, and messaging applications. Send and receive messages, make calls, and manage phone numbers",
      category: "Communications",
      maintainer: "Twilio",
      documentation_url: "https://www.twilio.com/docs/api",
      version: "1.42.0",
      openapi_version: "3.0.0",
    },
  },
  sendgrid: {
    composioKey: "sendgrid",
    specUrl: "https://api.apis.guru/v2/specs/sendgrid.com/1.0.0/openapi.json",
    specType: "http",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${SENDGRID_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "SendGrid is a cloud-based email delivery service. Send transactional and marketing emails, manage contacts, track opens/clicks, and configure email authentication",
      category: "Email",
      maintainer: "Twilio SendGrid",
      documentation_url: "https://docs.sendgrid.com/api-reference",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },
  airtable: {
    composioKey: "airtable",
    specUrl: "repo://data/openapi/airtable.json",
    specType: "local",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${AIRTABLE_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Airtable is a low-code platform for building collaborative apps. Create, read, update, and delete records in Airtable bases using the REST API",
      category: "Database",
      maintainer: "Airtable",
      documentation_url: "https://airtable.com/developers/web/api/introduction",
      version: "0.1.0",
      openapi_version: "3.0.3",
    },
  },
  intercom: {
    composioKey: "intercom",
    specUrl:
      "https://raw.githubusercontent.com/intercom/Intercom-OpenAPI/main/descriptions/2.15/api.intercom.io.yaml",
    specType: "http",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${INTERCOM_ACCESS_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Intercom is a customer messaging platform. Manage contacts, conversations, companies, articles, and custom attributes using the Intercom API",
      category: "Customer Support",
      maintainer: "Intercom",
      documentation_url: "https://developers.intercom.com/intercom-api-reference",
      version: "2.15",
      openapi_version: "3.0.1",
    },
  },
  zendesk: {
    composioKey: "zendesk",
    specUrl: "repo://data/openapi/zendesk.json",
    specType: "local",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${ZENDESK_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Zendesk is a customer service and support ticketing platform. Manage tickets, users, organizations, and automate support workflows using the Zendesk Support API",
      category: "Customer Support",
      maintainer: "Zendesk",
      documentation_url: "https://developer.zendesk.com/api-reference",
      version: "2.0.0",
      openapi_version: "3.0.3",
    },
  },
};

const ALL_TIER1_PROVIDERS = Object.keys(TIER1_CATALOG);

// Set of Tier 1 Composio keys — used in batch mode to skip already-processed providers
const TIER1_COMPOSIO_KEYS = new Set(
  Object.values(TIER1_CATALOG).map((e) => e.composioKey.toLowerCase()),
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function resolveRepoRoot(): string {
  // This script lives in <repo-root>/scripts/ingest-composio.ts
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(scriptDir, "..");
}

function log(message: string): void {
  process.stderr.write(`${message}\n`);
}

function writeJson(payload: unknown): void {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

/**
 * Normalize a Composio app key to a registry provider name.
 * Lowercases, replaces non-alphanumeric characters with underscores.
 */
function normalizeProviderName(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9-]/g, "_");
}

/**
 * Compute a source hash for a Composio app entry.
 * Used to detect whether the app's catalog data has changed since last ingestion,
 * allowing the batch pipeline to skip unchanged providers.
 */
function computeSourceHash(app: ComposioApp): string {
  const payload = JSON.stringify({
    key: app.key,
    openapi_spec_url: app.openapi_spec_url ?? null,
    auth_modes: (app.auth_schemes ?? [])
      .map((s) => s.auth_mode ?? "")
      .sort(),
  });
  return "sha256:" + createHash("sha256").update(payload).digest("hex");
}

/**
 * Compute a domain score (0–100) for a Composio app.
 *
 * Scoring criteria:
 *   +40  Has a non-empty openapi_spec_url
 *   +20  Has a description longer than 20 characters
 *   +20  Has at least one auth_scheme
 *   +10  Has at least one category
 *   +10  Auth scheme is a recognized type (OAUTH2, API_KEY, BASIC)
 */
function computeDomainScore(app: ComposioApp): number {
  let score = 0;
  if (app.openapi_spec_url) score += 40;
  if (app.description && app.description.length > 20) score += 20;
  if (app.auth_schemes && app.auth_schemes.length > 0) score += 20;
  if (app.categories && app.categories.length > 0) score += 10;
  const knownModes = new Set(["OAUTH2", "OAUTH2_WITH_REFRESH_TOKEN", "API_KEY", "BASIC", "BEARER"]);
  if (app.auth_schemes?.some((s) => knownModes.has((s.auth_mode ?? "").toUpperCase()))) {
    score += 10;
  }
  return Math.min(score, 100);
}

/**
 * Infer AuthConfig[] from a Composio app's auth_schemes.
 * Falls back to an empty array when no recognizable scheme is found.
 */
function inferAuthFromComposioApp(app: ComposioApp): AuthConfig[] {
  const configs: AuthConfig[] = [];

  for (const scheme of app.auth_schemes ?? []) {
    const mode = (scheme.auth_mode ?? "").toUpperCase();

    if (mode === "OAUTH2" || mode === "OAUTH2_WITH_REFRESH_TOKEN") {
      configs.push({
        auth_type: "oauth2",
        token_url: `https://api.${app.key}.com/oauth/token`,
        authorization_url: `https://api.${app.key}.com/oauth/authorize`,
        api_key: `Bearer \${${app.key.toUpperCase()}_ACCESS_TOKEN}`,
        var_name: "Authorization",
        location: "header",
      });
    } else if (mode === "API_KEY") {
      const keyField = scheme.fields?.find(
        (f) =>
          f.name?.toLowerCase().includes("key") || f.name?.toLowerCase().includes("token"),
      );
      const envVar = keyField?.name?.toUpperCase() ?? `${app.key.toUpperCase()}_API_KEY`;
      configs.push({
        auth_type: "api_key",
        api_key: `\${${envVar}}`,
        var_name: "x-api-key",
        location: "header",
      });
    } else if (mode === "BEARER") {
      configs.push({
        auth_type: "api_key",
        api_key: `Bearer \${${app.key.toUpperCase()}_TOKEN}`,
        var_name: "Authorization",
        location: "header",
      });
    } else if (mode === "BASIC") {
      configs.push({
        auth_type: "http",
        scheme: "basic",
        username: `\${${app.key.toUpperCase()}_USERNAME}`,
        password: `\${${app.key.toUpperCase()}_PASSWORD}`,
      });
    }
  }

  return configs;
}

/**
 * Build a ProviderEntry for a batch (Tier 3) Composio app.
 */
function buildBatchRegistryEntry(
  app: ComposioApp,
  domainScore: number,
  sourceHash: string,
): ProviderEntry {
  const providerName = normalizeProviderName(app.key);
  const auth = inferAuthFromComposioApp(app);
  const tags: string[] = [];

  if (domainScore >= 40 && domainScore < 60) {
    tags.push("beta");
  }

  const entry: ProviderEntry = {
    name: providerName,
    provider_type: "http",
    http_method: "GET",
    url: app.openapi_spec_url ?? "",
    content_type: "application/json",
    ingestSource: "composio",
    sourceHash,
    score: { domain: domainScore },
    metadata: {
      description: app.description ?? "",
      category: app.categories?.[0] ?? "Other",
      last_updated: new Date().toISOString().split("T")[0],
    },
  };

  if (tags.length > 0) entry.tags = tags;
  if (auth.length > 0) entry.options = { auth };

  return entry;
}

/**
 * Attempt to fetch the Composio app catalog (first page only, used for Tier 1 mode).
 *
 * The v1 endpoint is retired; the v3 endpoint requires authentication.
 * Returns null if the catalog is unavailable, in which case the script
 * falls back to the curated spec URLs in TIER1_CATALOG.
 */
async function fetchComposioCatalog(
  apiKey?: string,
): Promise<Record<string, ComposioApp> | null> {
  const baseUrl = "https://backend.composio.dev/api/v3";
  const headers: Record<string, string> = {
    Accept: "application/json",
    "User-Agent": "UTDK-Ingest/1.0.0",
  };

  if (apiKey) {
    headers["x-api-key"] = apiKey;
  }

  try {
    // Try fetching the catalog with optional auth
    const response = await fetch(`${baseUrl}/toolkits?limit=100`, { headers });

    if (!response.ok) {
      log(
        `[composio] Catalog fetch returned ${response.status} — falling back to curated spec URLs.`,
      );
      return null;
    }

    const data = (await response.json()) as { items?: ComposioApp[] };
    const items = data.items ?? [];
    const catalog: Record<string, ComposioApp> = {};

    for (const app of items) {
      if (app.key) {
        catalog[app.key.toLowerCase()] = app;
      }
    }

    log(`[composio] Fetched ${items.length} apps from Composio catalog.`);
    return catalog;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    log(`[composio] Catalog fetch failed: ${message} — falling back to curated spec URLs.`);
    return null;
  }
}

/**
 * Fetch the full Composio app catalog with pagination.
 *
 * Iterates through all pages until no more items are returned.
 * Returns an empty array if the API is unavailable or requires authentication.
 */
async function fetchAllComposioApps(apiKey?: string): Promise<ComposioApp[]> {
  const baseUrl = "https://backend.composio.dev/api/v3";
  const headers: Record<string, string> = {
    Accept: "application/json",
    "User-Agent": "UTDK-Ingest/1.0.0",
  };

  if (apiKey) {
    headers["x-api-key"] = apiKey;
  }

  const allApps: ComposioApp[] = [];
  let offset = 0;
  const limit = 100;
  let page = 1;

  while (true) {
    log(`[composio] Fetching page ${page} (offset=${offset}, limit=${limit})...`);

    let response: Response;
    try {
      response = await fetch(`${baseUrl}/toolkits?limit=${limit}&offset=${offset}`, { headers });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      log(`[composio] Network error on page ${page}: ${message}`);
      break;
    }

    if (!response.ok) {
      log(`[composio] Page ${page} returned ${response.status} — stopping pagination.`);
      break;
    }

    const data = (await response.json()) as {
      items?: ComposioApp[];
      totalCount?: number;
      nextCursor?: string;
    };

    const items = data.items ?? [];
    allApps.push(...items);

    log(`[composio] Page ${page}: ${items.length} apps (total so far: ${allApps.length})`);

    if (items.length < limit) {
      // Last page reached
      break;
    }

    offset += limit;
    page++;
  }

  log(`[composio] Full catalog fetch complete: ${allApps.length} apps total`);
  return allApps;
}

/**
 * Run an array of async tasks with a maximum concurrency limit.
 */
async function runConcurrent<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number,
): Promise<T[]> {
  if (tasks.length === 0) return [];

  const results: T[] = new Array(tasks.length);
  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (nextIndex < tasks.length) {
      const i = nextIndex++;
      results[i] = await tasks[i]!();
    }
  }

  const workerCount = Math.min(concurrency, tasks.length);
  await Promise.all(Array.from({ length: workerCount }, worker));
  return results;
}

/**
 * Resolve the best OpenAPI spec URL for a Tier 1 provider.
 *
 * Checks the Composio catalog for an app-provided spec URL first, then falls
 * back to the curated URL in TIER1_CATALOG.
 */
function resolveSpecUrl(
  providerName: string,
  catalog: Record<string, ComposioApp> | null,
): string {
  const entry = TIER1_CATALOG[providerName];
  if (!entry) throw new Error(`Unknown provider: ${providerName}`);

  if (catalog) {
    const app = catalog[entry.composioKey];
    if (app?.openapi_spec_url) {
      log(
        `[${providerName}] Using Composio-provided spec URL: ${app.openapi_spec_url}`,
      );
      return app.openapi_spec_url;
    }
  }

  log(
    `[${providerName}] Using curated spec URL: ${entry.specUrl}`,
  );
  return entry.specUrl;
}

/**
 * Build a RegistryProvider entry for data/registry.json (Tier 1).
 */
function buildRegistryEntry(
  providerName: string,
  specUrl: string,
  catalog: Record<string, ComposioApp> | null,
): ProviderEntry {
  const entry = TIER1_CATALOG[providerName];
  if (!entry) throw new Error(`Unknown provider: ${providerName}`);

  const composioApp = catalog?.[entry.composioKey];
  const description = composioApp?.description ?? entry.metadata.description ?? "";

  return {
    name: providerName,
    provider_type: entry.specType,
    http_method: "GET",
    url: specUrl,
    content_type: entry.contentType,
    ingestSource: "composio",
    options: {
      auth: entry.auth,
    },
    metadata: {
      ...entry.metadata,
      description,
      last_updated: new Date().toISOString().split("T")[0],
    },
  };
}

/**
 * Upsert a provider entry in data/registry.json.
 *
 * If a provider with the same name already exists, it is updated in place.
 * Otherwise the entry is appended.
 */
async function upsertRegistryEntry(
  repoRoot: string,
  entry: ProviderEntry,
  dryRun: boolean,
): Promise<"added" | "updated" | "dry-run"> {
  const registryPath = path.join(repoRoot, "data", "registry.json");
  const raw = await readFile(registryPath, "utf8");
  const providers = JSON.parse(raw) as ProviderEntry[];

  const existingIndex = providers.findIndex((p) => p.name === entry.name);

  if (existingIndex >= 0) {
    providers[existingIndex] = entry;
    if (!dryRun) {
      await writeFile(registryPath, JSON.stringify(providers, null, 2) + "\n", "utf8");
    }
    return dryRun ? "dry-run" : "updated";
  } else {
    providers.push(entry);
    if (!dryRun) {
      await writeFile(registryPath, JSON.stringify(providers, null, 2) + "\n", "utf8");
    }
    return dryRun ? "dry-run" : "added";
  }
}

/**
 * Apply a batch of provider entry upserts to data/registry.json in a single write.
 *
 * This is more efficient than individual upserts when processing many providers.
 */
async function batchUpsertRegistryEntries(
  repoRoot: string,
  entries: ProviderEntry[],
  dryRun: boolean,
): Promise<Map<string, "added" | "updated" | "dry-run">> {
  const actions = new Map<string, "added" | "updated" | "dry-run">();

  if (entries.length === 0) return actions;

  const registryPath = path.join(repoRoot, "data", "registry.json");
  const raw = await readFile(registryPath, "utf8");
  const providers = JSON.parse(raw) as ProviderEntry[];
  const indexByName = new Map(providers.map((p, i) => [p.name, i]));

  for (const entry of entries) {
    const existingIndex = indexByName.get(entry.name);
    if (existingIndex !== undefined) {
      providers[existingIndex] = entry;
      actions.set(entry.name, dryRun ? "dry-run" : "updated");
    } else {
      const newIndex = providers.length;
      providers.push(entry);
      indexByName.set(entry.name, newIndex);
      actions.set(entry.name, dryRun ? "dry-run" : "added");
    }
  }

  if (!dryRun) {
    await writeFile(registryPath, JSON.stringify(providers, null, 2) + "\n", "utf8");
  }

  return actions;
}

/**
 * Run the bundler generate pipeline for a provider.
 *
 * Requires the bundler package to be built (pnpm build in packages/bundler).
 */
async function runPipeline(providerName: string, repoRoot: string): Promise<void> {
  const { runFullPipeline } = await import(
    path.join(repoRoot, "packages", "bundler", "src", "index.js")
  );

  log(`[${providerName}] Running bundler pipeline...`);
  const result = await (runFullPipeline as (opts: { provider: string }) => Promise<unknown>)({
    provider: providerName,
  });

  log(`[${providerName}] Pipeline complete.`);
  writeJson({ provider: providerName, result });
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv: string[]): {
  providers: string[];
  all: boolean;
  batch: boolean;
  concurrency: number;
  pipeline: boolean;
  dryRun: boolean;
  composioApiKey?: string;
} {
  const providers: string[] = [];
  let all = false;
  let batch = false;
  let concurrency = 5;
  let pipeline = false;
  let dryRun = false;
  let composioApiKey: string | undefined;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--all") {
      all = true;
    } else if (arg === "--batch") {
      batch = true;
    } else if (arg === "--pipeline") {
      pipeline = true;
    } else if (arg === "--dry-run") {
      dryRun = true;
    } else if (arg === "--concurrency") {
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        throw new Error("--concurrency requires a positive integer");
      }
      concurrency = parseInt(next, 10);
      if (isNaN(concurrency) || concurrency < 1) {
        throw new Error("--concurrency must be >= 1");
      }
      i++;
    } else if (arg?.startsWith("--concurrency=")) {
      concurrency = parseInt(arg.slice("--concurrency=".length), 10);
      if (isNaN(concurrency) || concurrency < 1) {
        throw new Error("--concurrency must be >= 1");
      }
    } else if (arg === "--providers") {
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        throw new Error("--providers requires a comma-separated list of provider names");
      }
      providers.push(...next.split(",").map((p) => p.trim().toLowerCase()));
      i++;
    } else if (arg?.startsWith("--providers=")) {
      const value = arg.slice("--providers=".length);
      providers.push(...value.split(",").map((p) => p.trim().toLowerCase()));
    } else if (arg === "--composio-api-key") {
      composioApiKey = argv[i + 1];
      i++;
    } else if (arg?.startsWith("--composio-api-key=")) {
      composioApiKey = arg.slice("--composio-api-key=".length);
    }
  }

  if (!all && !batch && providers.length === 0) {
    throw new Error(
      "Specify providers to ingest with --all, --batch, or --providers slack,linear,notion",
    );
  }

  // Validate Tier 1 provider names (only in non-batch mode)
  if (!batch) {
    for (const name of providers) {
      if (!TIER1_CATALOG[name]) {
        throw new Error(
          `Unknown provider: "${name}". Valid Tier 1 providers: ${ALL_TIER1_PROVIDERS.join(", ")}`,
        );
      }
    }
  }

  return {
    providers: all ? ALL_TIER1_PROVIDERS : providers,
    all,
    batch,
    concurrency,
    pipeline,
    dryRun,
    composioApiKey: composioApiKey ?? process.env["COMPOSIO_API_KEY"],
  };
}

// ---------------------------------------------------------------------------
// Tier 1 mode (original behavior)
// ---------------------------------------------------------------------------

async function runTier1Mode(
  args: ReturnType<typeof parseArgs>,
  repoRoot: string,
): Promise<void> {
  log(`[ingest-composio] Providers: ${args.providers.join(", ")}`);
  log(`[ingest-composio] Dry run: ${args.dryRun}`);
  log(`[ingest-composio] Pipeline: ${args.pipeline}`);

  // Fetch Composio catalog (best-effort; falls back to curated URLs on failure)
  const catalog = await fetchComposioCatalog(args.composioApiKey);

  const results: Array<{
    provider: string;
    specUrl: string;
    action: string;
    pipelineRan: boolean;
    error?: string;
  }> = [];

  for (const providerName of args.providers) {
    log(`\n[${providerName}] Starting ingestion...`);

    try {
      const specUrl = resolveSpecUrl(providerName, catalog);
      const entry = buildRegistryEntry(providerName, specUrl, catalog);
      const action = await upsertRegistryEntry(repoRoot, entry, args.dryRun);

      log(`[${providerName}] Registry entry ${action}: ${specUrl}`);

      let pipelineRan = false;
      if (args.pipeline && !args.dryRun) {
        await runPipeline(providerName, repoRoot);
        pipelineRan = true;
      }

      results.push({ provider: providerName, specUrl, action, pipelineRan });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      log(`[${providerName}] ERROR: ${message}`);
      results.push({
        provider: providerName,
        specUrl: TIER1_CATALOG[providerName]?.specUrl ?? "unknown",
        action: "error",
        pipelineRan: false,
        error: message,
      });
    }
  }

  // Summary
  log("\n[ingest-composio] Summary:");
  const succeeded = results.filter((r) => !r.error);
  const failed = results.filter((r) => r.error);

  log(`  Succeeded: ${succeeded.length}`);
  log(`  Failed: ${failed.length}`);

  for (const r of failed) {
    log(`  [FAIL] ${r.provider}: ${r.error}`);
  }

  writeJson({
    ok: failed.length === 0,
    dryRun: args.dryRun,
    results,
  });

  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// Batch mode (Tier 3: all remaining Composio apps)
// ---------------------------------------------------------------------------

async function runBatchMode(
  args: ReturnType<typeof parseArgs>,
  repoRoot: string,
): Promise<void> {
  log("[batch] Starting Composio batch pipeline (Tier 3)");
  log(`[batch] Dry run: ${args.dryRun}`);
  log(`[batch] Concurrency: ${args.concurrency}`);

  // Step 1: Fetch full Composio catalog
  const allApps = await fetchAllComposioApps(args.composioApiKey);

  if (allApps.length === 0) {
    log("[batch] ERROR: No apps returned from Composio API. Check COMPOSIO_API_KEY.");
    writeJson({
      ok: false,
      dryRun: args.dryRun,
      fetchedFromApi: 0,
      tier3Processed: 0,
      succeeded: 0,
      failed: 1,
      skippedLowScore: 0,
      skippedHashUnchanged: 0,
      beta: 0,
      results: [
        {
          provider: "",
          composioKey: "",
          specUrl: null,
          action: "error",
          error: "No apps returned from Composio API",
        },
      ],
    } satisfies BatchReport);
    process.exitCode = 1;
    return;
  }

  // Step 2: Filter out Tier 1 (already processed by APR-12)
  const tier3Apps = allApps.filter((app) => {
    const key = (app.key ?? "").toLowerCase();
    return key && !TIER1_COMPOSIO_KEYS.has(key);
  });

  log(`[batch] Total Composio apps: ${allApps.length}`);
  log(`[batch] Tier 1 excluded: ${allApps.length - tier3Apps.length}`);
  log(`[batch] Tier 3 to process: ${tier3Apps.length}`);

  // Step 3: Read existing registry once for hash comparison
  const registryPath = path.join(repoRoot, "data", "registry.json");
  const raw = await readFile(registryPath, "utf8");
  const existingProviders = JSON.parse(raw) as ProviderEntry[];
  const existingByName = new Map(existingProviders.map((p) => [p.name, p]));

  // Step 4: Pre-classify apps (serial, no I/O — determines which need processing)
  type AppWork =
    | { kind: "skip-low-score"; result: BatchResult }
    | { kind: "skip-hash"; result: BatchResult }
    | { kind: "process"; app: ComposioApp; entry: ProviderEntry; isUpdate: boolean; domainScore: number };

  const workItems: AppWork[] = [];

  for (const app of tier3Apps) {
    if (!app.key) continue;

    const providerName = normalizeProviderName(app.key);
    const domainScore = computeDomainScore(app);

    if (domainScore < 40) {
      log(`[batch] ${providerName}: score ${domainScore} < 40, skipping`);
      workItems.push({
        kind: "skip-low-score",
        result: {
          provider: providerName,
          composioKey: app.key,
          specUrl: app.openapi_spec_url ?? null,
          action: "skipped-low-score",
          domainScore,
        },
      });
      continue;
    }

    const newHash = computeSourceHash(app);
    const existing = existingByName.get(providerName);
    if (existing?.sourceHash === newHash) {
      workItems.push({
        kind: "skip-hash",
        result: {
          provider: providerName,
          composioKey: app.key,
          specUrl: app.openapi_spec_url ?? null,
          action: "skipped-hash",
          domainScore,
        },
      });
      continue;
    }

    const entry = buildBatchRegistryEntry(app, domainScore, newHash);
    workItems.push({
      kind: "process",
      app,
      entry,
      isUpdate: existing !== undefined,
      domainScore,
    });
  }

  // Step 5: Run pipeline tasks concurrently (if --pipeline)
  // For basic batch mode, pipeline runs are optional; registry update is the primary goal.
  const processItems = workItems.filter((w): w is Extract<AppWork, { kind: "process" }> => w.kind === "process");

  if (args.pipeline && !args.dryRun && processItems.length > 0) {
    log(`[batch] Running pipeline for ${processItems.length} providers (concurrency=${args.concurrency})...`);

    const pipelineTasks = processItems.map((item) => async () => {
      try {
        await runPipeline(item.entry.name, repoRoot);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        log(`[batch] Pipeline error for ${item.entry.name}: ${message}`);
      }
    });

    await runConcurrent(pipelineTasks, args.concurrency);
  }

  // Step 6: Batch-upsert all qualifying entries
  const entriesToUpsert = processItems.map((w) => w.entry);
  const upsertActions = await batchUpsertRegistryEntries(repoRoot, entriesToUpsert, args.dryRun);

  // Step 7: Collect results
  const results: BatchResult[] = [];

  for (const item of workItems) {
    if (item.kind === "skip-low-score" || item.kind === "skip-hash") {
      results.push(item.result);
    } else {
      const action = upsertActions.get(item.entry.name) ?? "dry-run";
      const tags = item.entry.tags;
      results.push({
        provider: item.entry.name,
        composioKey: item.app.key,
        specUrl: item.app.openapi_spec_url ?? null,
        action,
        domainScore: item.domainScore,
        ...(tags ? { tags } : {}),
      });
      const betaLabel = tags?.includes("beta") ? " [beta]" : "";
      log(`[batch] ${item.entry.name}: ${action} (score: ${item.domainScore}${betaLabel})`);
    }
  }

  // Step 8: Report
  const succeeded = results.filter(
    (r) => r.action === "added" || r.action === "updated" || r.action === "dry-run",
  );
  const failed = results.filter((r) => r.action === "error");
  const skippedLowScore = results.filter((r) => r.action === "skipped-low-score");
  const skippedHash = results.filter((r) => r.action === "skipped-hash");
  const beta = results.filter((r) => r.tags?.includes("beta"));

  log("\n[batch] ── Batch report ──────────────────────────────────────");
  log(`  Composio apps fetched:    ${allApps.length}`);
  log(`  Tier 1 excluded:          ${allApps.length - tier3Apps.length}`);
  log(`  Tier 3 evaluated:         ${tier3Apps.length}`);
  log(`  Succeeded:                ${succeeded.length}`);
  log(`    of which beta-tagged:   ${beta.length}`);
  log(`  Failed:                   ${failed.length}`);
  log(`  Skipped (score < 40):     ${skippedLowScore.length}`);
  log(`  Skipped (hash unchanged): ${skippedHash.length}`);
  log("─────────────────────────────────────────────────────────────");

  for (const r of failed) {
    log(`  [FAIL]  ${r.provider}: ${r.error}`);
  }
  for (const r of skippedLowScore) {
    log(`  [WARN]  ${r.provider}: domain score ${r.domainScore} < 40, skipped`);
  }

  const report: BatchReport = {
    ok: failed.length === 0,
    dryRun: args.dryRun,
    fetchedFromApi: allApps.length,
    tier3Processed: tier3Apps.length,
    succeeded: succeeded.length,
    failed: failed.length,
    skippedLowScore: skippedLowScore.length,
    skippedHashUnchanged: skippedHash.length,
    beta: beta.length,
    results,
  };

  writeJson(report);

  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = resolveRepoRoot();

  log(`[ingest-composio] Repository root: ${repoRoot}`);

  if (args.batch) {
    await runBatchMode(args, repoRoot);
  } else {
    await runTier1Mode(args, repoRoot);
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Fatal error: ${message}\n`);
  process.exit(1);
});
