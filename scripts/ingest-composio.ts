#!/usr/bin/env tsx
/**
 * ingest-composio.ts
 *
 * Ingest providers from the Composio platform into the @utdk registry.
 *
 * ## Usage
 *
 *   # Ingest specific providers
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
 * Attempt to fetch the Composio app catalog.
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
 * Resolve the best OpenAPI spec URL for a provider.
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
 * Build a RegistryProvider entry for data/registry.json.
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
  pipeline: boolean;
  dryRun: boolean;
  composioApiKey?: string;
} {
  const providers: string[] = [];
  let all = false;
  let pipeline = false;
  let dryRun = false;
  let composioApiKey: string | undefined;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--all") {
      all = true;
    } else if (arg === "--pipeline") {
      pipeline = true;
    } else if (arg === "--dry-run") {
      dryRun = true;
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

  if (!all && providers.length === 0) {
    throw new Error(
      "Specify providers to ingest with --all or --providers slack,linear,notion",
    );
  }

  // Validate provider names
  for (const name of providers) {
    if (!TIER1_CATALOG[name]) {
      throw new Error(
        `Unknown provider: "${name}". Valid Tier 1 providers: ${ALL_TIER1_PROVIDERS.join(", ")}`,
      );
    }
  }

  return {
    providers: all ? ALL_TIER1_PROVIDERS : providers,
    all,
    pipeline,
    dryRun,
    composioApiKey: composioApiKey ?? process.env["COMPOSIO_API_KEY"],
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = resolveRepoRoot();

  log(`[ingest-composio] Repository root: ${repoRoot}`);
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

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Fatal error: ${message}\n`);
  process.exit(1);
});
