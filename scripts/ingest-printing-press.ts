#!/usr/bin/env tsx
/**
 * ingest-printing-press.ts
 *
 * Ingest providers from the cli-printing-press catalog into the @utdk registry.
 *
 * ## Usage
 *
 *   # Ingest all 23 printing-press providers (updates data/registry.json)
 *   pnpm tsx scripts/ingest-printing-press.ts --all
 *
 *   # Ingest specific providers
 *   pnpm tsx scripts/ingest-printing-press.ts --providers asana,discord,sentry
 *
 *   # Ingest and run the full bundler pipeline for each provider
 *   pnpm tsx scripts/ingest-printing-press.ts --all --pipeline
 *
 *   # Run pipeline with a concurrency limit (default: 3)
 *   pnpm tsx scripts/ingest-printing-press.ts --all --pipeline --concurrency 5
 *
 *   # Dry-run: print what would be ingested without modifying any files
 *   pnpm tsx scripts/ingest-printing-press.ts --all --dry-run
 *
 * ## Background
 *
 * cli-printing-press (https://github.com/mvanhorn/cli-printing-press) is a Go
 * generator that creates production-ready CLIs and MCP servers from API specs.
 * Its catalog of 27 pre-curated APIs is the source for this Tier 2 ingestion wave.
 *
 * Providers excluded from this script (handled elsewhere or unsuitable):
 *   - github: already in @utdk registry
 *   - google-flights: no public API — reverse-engineered protobuf, not OpenAPI
 *   - supercut: not currently in registry scope
 *   - quo: not currently in registry scope
 *
 * Providers that overlap with existing Tier 1 entries (hubspot, jira, stripe,
 * twilio) are upserted in place; the printing-press spec URL replaces the
 * Composio one, and ingestSource is updated to "printing-press".
 *
 * ## Spec note: Kayak
 *
 * Kayak has no public OpenAPI spec (scraping-based only). It is added to
 * data/registry.json as a placeholder with tag "no-spec". The bundler pipeline
 * is not run for it; no @utdk/kayak package is generated.
 *
 * ## ingestSource
 *
 * All entries written by this script set ingestSource="printing-press".  The
 * bundler's ship phase propagates this value into each provider's provenance.json,
 * satisfying the APR-10 acceptance criterion.
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
  | { auth_type: "oauth2"; token_url: string; client_id: string; client_secret: string; scope?: string }
  | { auth_type: "basic"; username: string; password: string };

type ProviderEntry = {
  name: string;
  transport_type: "http" | "local";
  fetch_method?: "GET";
  url: string;
  content_type?: string;
  ingestSource: "printing-press";
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

type IngestResult = {
  provider: string;
  specUrl: string | null;
  action: "added" | "updated" | "skipped-no-spec" | "dry-run" | "error";
  pipelineRan: boolean;
  error?: string;
};

// ---------------------------------------------------------------------------
// Catalog: all 23 printing-press Tier 2 providers
// ---------------------------------------------------------------------------

/**
 * Curated metadata for the 23 printing-press catalog entries.
 *
 * specUrl: null indicates there is no public OpenAPI spec for this provider.
 * When specUrl is null the script adds a placeholder registry entry but does
 * NOT run the bundler pipeline.
 */
const PRINTING_PRESS_CATALOG: Record<
  string,
  {
    specUrl: string | null;
    contentType: string;
    auth: AuthConfig[];
    metadata: NonNullable<ProviderEntry["metadata"]>;
  }
> = {
  asana: {
    specUrl: "https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://app.asana.com/-/oauth_token",
        client_id: "${ASANA_CLIENT_ID}",
        client_secret: "${ASANA_CLIENT_SECRET}",
        scope: "default",
      },
    ],
    metadata: {
      description:
        "Work management and project tracking API for tasks, projects, portfolios, teams, and goals",
      category: "Project Management",
      maintainer: "Asana",
      documentation_url: "https://developers.asana.com/reference",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  digitalocean: {
    specUrl:
      "https://raw.githubusercontent.com/digitalocean/openapi/main/specification/DigitalOcean-public.v2.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${DIGITALOCEAN_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Cloud infrastructure and developer platform API for Droplets, Kubernetes, databases, and block storage",
      category: "Cloud",
      maintainer: "DigitalOcean",
      documentation_url: "https://docs.digitalocean.com/reference/api",
      version: "2.0",
      openapi_version: "3.0.0",
    },
  },

  discord: {
    specUrl: "https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bot ${DISCORD_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Chat and community platform API for bots, guilds, channels, messages, and voice interactions",
      category: "Communication",
      maintainer: "Discord",
      documentation_url: "https://discord.com/developers/docs",
      version: "10.0",
      openapi_version: "3.1.0",
    },
  },

  elevenlabs: {
    specUrl: "https://api.elevenlabs.io/openapi.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${ELEVENLABS_API_KEY}",
        var_name: "xi-api-key",
        location: "header",
      },
    ],
    metadata: {
      description:
        "AI audio platform for text-to-speech, voice cloning, dubbing, transcription, and conversational agents",
      category: "AI",
      maintainer: "ElevenLabs",
      documentation_url: "https://elevenlabs.io/docs",
      version: "1.0.0",
      openapi_version: "3.1.0",
    },
  },

  front: {
    specUrl:
      "https://raw.githubusercontent.com/frontapp/front-api-specs/main/core-api/core-api.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${FRONT_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Customer communication platform API for shared inboxes, conversations, contacts, and workflow automations",
      category: "Customer Support",
      maintainer: "Front",
      documentation_url: "https://dev.frontapp.com/reference",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  "google-cloud-run": {
    specUrl: "https://api.apis.guru/v2/specs/googleapis.com/run/v2/openapi.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://oauth2.googleapis.com/token",
        client_id: "${GOOGLE_CLIENT_ID}",
        client_secret: "${GOOGLE_CLIENT_SECRET}",
        scope: "https://www.googleapis.com/auth/cloud-platform",
      },
    ],
    metadata: {
      description:
        "Cloud Run Admin API for deploying and managing serverless container services, revisions, and jobs on GCP",
      category: "Cloud",
      maintainer: "Google",
      documentation_url: "https://cloud.google.com/run/docs/reference/rest",
      version: "v2",
      openapi_version: "3.0.0",
    },
  },

  hubspot: {
    specUrl:
      "https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Contacts/Rollouts/424/v3/contacts.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "oauth2",
        token_url: "https://api.hubapi.com/oauth/v1/token",
        client_id: "${HUBSPOT_CLIENT_ID}",
        client_secret: "${HUBSPOT_CLIENT_SECRET}",
        scope: "crm.objects.contacts.read crm.objects.contacts.write",
      },
    ],
    metadata: {
      description:
        "HubSpot CRM Contacts API for managing contacts, properties, associations, and batch operations",
      category: "CRM",
      maintainer: "HubSpot",
      documentation_url: "https://developers.hubspot.com/docs/api/crm/contacts",
      version: "v3",
      openapi_version: "3.0.0",
    },
  },

  itglue: {
    specUrl:
      "https://raw.githubusercontent.com/mvanhorn/cli-printing-press/main/catalog/specs/itglue-openapi.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${ITGLUE_API_KEY}",
        var_name: "x-api-key",
        location: "header",
      },
    ],
    metadata: {
      description:
        "IT Glue JSON:API for organizations, contacts, passwords, configurations, and documents for MSP automation",
      category: "IT Management",
      maintainer: "IT Glue (Kaseya)",
      documentation_url: "https://api.itglue.com/developer/",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  jira: {
    specUrl: "https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "basic",
        username: "${JIRA_EMAIL}",
        password: "${JIRA_API_TOKEN}",
      },
    ],
    metadata: {
      description:
        "Jira Cloud REST API v3 for issue tracking, project management, boards, sprints, and JQL searches",
      category: "Project Management",
      maintainer: "Atlassian",
      documentation_url:
        "https://developer.atlassian.com/cloud/jira/platform/rest/v3",
      version: "v3",
      openapi_version: "3.0.0",
    },
  },

  // Kayak: no public OpenAPI spec. Added as a registry placeholder.
  // The bundler pipeline is NOT run; no @utdk/kayak package is generated.
  kayak: {
    specUrl: null,
    contentType: "application/json",
    auth: [],
    metadata: {
      description:
        "Flight, hotel, and car rental aggregator. No public OpenAPI spec — reached via embedded JSON extraction from server-rendered pages",
      category: "Travel",
      maintainer: "Kayak",
      documentation_url: "https://www.kayak.com",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  launchdarkly: {
    specUrl: "https://app.launchdarkly.com/api/v2/openapi.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${LAUNCHDARKLY_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Feature flag management API for flags, environments, segments, experiments, and audit logs",
      category: "Developer Tools",
      maintainer: "LaunchDarkly",
      documentation_url: "https://apidocs.launchdarkly.com",
      version: "v2",
      openapi_version: "3.0.0",
    },
  },

  mercury: {
    specUrl: "https://dash.readme.com/api/v1/api-registry/ilz81omom1n4vx",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${MERCURY_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Business banking API for accounts, transactions, payments, recipients, cards, invoices, and treasury",
      category: "Payments",
      maintainer: "Mercury",
      documentation_url: "https://docs.mercury.com/reference",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  openrouteservice: {
    specUrl:
      "https://raw.githubusercontent.com/mvanhorn/cli-printing-press/main/catalog/specs/openrouteservice-spec.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${ORS_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Open-source routing, geocoding, matrix distances, isochrones, and VRP optimization on OpenStreetMap data",
      category: "Maps",
      maintainer: "HeiGIT / openrouteservice.org",
      documentation_url: "https://openrouteservice.org/dev/#/api-docs",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  petstore: {
    specUrl: "https://petstore3.swagger.io/api/v3/openapi.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${PETSTORE_API_KEY}",
        var_name: "api_key",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Canonical Swagger / OpenAPI example spec — pet store CRUD for tooling tests and reference implementations",
      category: "Example",
      maintainer: "SmartBear / Swagger UI",
      documentation_url: "https://petstore3.swagger.io",
      version: "1.0.17",
      openapi_version: "3.0.0",
    },
  },

  pipedrive: {
    specUrl: "https://developers.pipedrive.com/docs/api/v1/openapi.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${PIPEDRIVE_API_TOKEN}",
        var_name: "api_token",
        location: "query",
      },
    ],
    metadata: {
      description:
        "CRM for sales teams — deals, contacts, pipelines, activities, organizations, and automations",
      category: "CRM",
      maintainer: "Pipedrive",
      documentation_url: "https://developers.pipedrive.com",
      version: "v1",
      openapi_version: "3.0.0",
    },
  },

  plaid: {
    specUrl: "https://raw.githubusercontent.com/plaid/plaid-openapi/master/2020-09-14.yml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${PLAID_CLIENT_ID}",
        var_name: "PLAID-CLIENT-ID",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Banking API for account linking, transactions, identity verification, balances, income, and liabilities",
      category: "Payments",
      maintainer: "Plaid",
      documentation_url: "https://plaid.com/docs/api",
      version: "2020-09-14",
      openapi_version: "3.0.0",
    },
  },

  "postman-explore": {
    specUrl:
      "https://raw.githubusercontent.com/mvanhorn/cli-printing-press/main/catalog/specs/postman-explore-spec.yaml",
    contentType: "application/x-yaml",
    auth: [],
    metadata: {
      description:
        "Postman public API network — discover community collections, workspaces, and public APIs without authentication",
      category: "Developer Tools",
      maintainer: "Postman",
      documentation_url: "https://www.postman.com/explore",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  producthunt: {
    specUrl:
      "https://raw.githubusercontent.com/mvanhorn/cli-printing-press/main/catalog/specs/producthunt-spec.yaml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${PRODUCTHUNT_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Discover and monitor Product Hunt launches for research, competitive scouting, and export. Optional: use PRODUCTHUNT_API_KEY for rate-limit headroom.",
      category: "Marketing",
      maintainer: "Product Hunt",
      documentation_url: "https://www.producthunt.com",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  sentry: {
    specUrl:
      "https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${SENTRY_AUTH_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
    metadata: {
      description:
        "Error tracking and performance monitoring — projects, issues, events, releases, and team management",
      category: "Monitoring",
      maintainer: "Sentry",
      documentation_url: "https://docs.sentry.io/api/",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  stripe: {
    specUrl: "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json",
    contentType: "application/json",
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
        "Payment processing and financial infrastructure API for charges, subscriptions, invoices, payouts, and billing",
      category: "Payments",
      maintainer: "Stripe",
      documentation_url: "https://stripe.com/docs/api",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  stytch: {
    specUrl: "https://raw.githubusercontent.com/stytchauth/stytch-openapi/main/openapi.yml",
    contentType: "application/x-yaml",
    auth: [
      {
        auth_type: "basic",
        username: "${STYTCH_PROJECT_ID}",
        password: "${STYTCH_SECRET}",
      },
    ],
    metadata: {
      description:
        "Authentication and user management API for passwordless login, session management, and MFA",
      category: "Auth",
      maintainer: "Stytch",
      documentation_url: "https://stytch.com/docs/api",
      version: "1.0.0",
      openapi_version: "3.0.0",
    },
  },

  telegram: {
    specUrl: "https://api.apis.guru/v2/specs/telegram.org/5.0.0/openapi.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${TELEGRAM_BOT_TOKEN}",
        var_name: "token",
        location: "query",
      },
    ],
    metadata: {
      description:
        "Telegram Bot API for building bots — send messages, manage chats, handle webhooks, inline queries, and stickers",
      category: "Communication",
      maintainer: "Telegram",
      documentation_url: "https://core.telegram.org/bots/api",
      version: "5.0.0",
      openapi_version: "3.0.0",
    },
  },

  twilio: {
    specUrl:
      "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json",
    contentType: "application/json",
    auth: [
      {
        auth_type: "basic",
        username: "${TWILIO_ACCOUNT_SID}",
        password: "${TWILIO_AUTH_TOKEN}",
      },
    ],
    metadata: {
      description:
        "Twilio communication platform APIs for SMS, MMS, voice calls, video, and messaging channels",
      category: "Communications",
      maintainer: "Twilio",
      documentation_url: "https://www.twilio.com/docs/usage/api",
      version: "2010-04-01",
      openapi_version: "3.0.0",
    },
  },
};

const ALL_PROVIDERS = Object.keys(PRINTING_PRESS_CATALOG);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function resolveRepoRoot(): string {
  // This script lives at <repo-root>/scripts/ingest-printing-press.ts
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(scriptDir, "..");
}

function log(message: string): void {
  process.stderr.write(`${message}\n`);
}

function writeJson(payload: unknown): void {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

function hashString(content: string): string {
  return "sha256:" + createHash("sha256").update(content).digest("hex");
}

/**
 * Build a data/registry.json entry for a printing-press provider.
 *
 * Providers with no specUrl (kayak) are added as placeholders with
 * transport_type "local" and a documentation homepage URL, tagged "no-spec".
 */
function buildRegistryEntry(providerName: string): ProviderEntry {
  const entry = PRINTING_PRESS_CATALOG[providerName];
  if (!entry) throw new Error(`Unknown provider: ${providerName}`);

  const hasSpec = entry.specUrl !== null;
  const today = new Date().toISOString().split("T")[0] ?? new Date().toISOString().substring(0, 10);

  if (!hasSpec) {
    return {
      name: providerName,
      transport_type: "local",
      url: entry.metadata.documentation_url ?? "",
      ingestSource: "printing-press",
      tags: ["no-spec", "printing-press"],
      options: entry.auth.length > 0 ? { auth: entry.auth } : undefined,
      metadata: {
        ...entry.metadata,
        last_updated: today,
      },
    };
  }

  return {
    name: providerName,
    transport_type: "http",
    fetch_method: "GET",
    url: entry.specUrl as string,
    content_type: entry.contentType,
    ingestSource: "printing-press",
    sourceHash: hashString(entry.specUrl as string),
    tags: ["printing-press"],
    options: entry.auth.length > 0 ? { auth: entry.auth } : undefined,
    metadata: {
      ...entry.metadata,
      last_updated: today,
    },
  };
}

/**
 * Upsert a single provider entry in data/registry.json.
 * Returns whether the entry was added, updated, or is a dry-run.
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
 * Upsert multiple provider entries in data/registry.json in a single write.
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
 * Run the bundler generate pipeline for a provider via the bundler's public
 * TypeScript API (no subprocess needed).
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

/**
 * Run an array of async tasks with a bounded concurrency limit.
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

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(argv: string[]): {
  providers: string[];
  all: boolean;
  pipeline: boolean;
  concurrency: number;
  dryRun: boolean;
} {
  const providers: string[] = [];
  let all = false;
  let pipeline = false;
  let concurrency = 3;
  let dryRun = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--all") {
      all = true;
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
    }
  }

  if (!all && providers.length === 0) {
    throw new Error(
      "Specify providers to ingest with --all or --providers asana,discord,sentry",
    );
  }

  const resolved = all ? ALL_PROVIDERS : providers;

  for (const name of resolved) {
    if (!PRINTING_PRESS_CATALOG[name]) {
      const validList = ALL_PROVIDERS.join(", ");
      throw new Error(
        `Unknown provider: "${name}". Valid printing-press providers:\n  ${validList}`,
      );
    }
  }

  return {
    providers: resolved,
    all,
    pipeline,
    concurrency,
    dryRun,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = resolveRepoRoot();

  log(`[ingest-printing-press] Repository root: ${repoRoot}`);
  log(`[ingest-printing-press] Providers: ${args.providers.join(", ")}`);
  log(`[ingest-printing-press] Dry run: ${args.dryRun}`);
  log(`[ingest-printing-press] Pipeline: ${args.pipeline}`);

  // Separate providers with specs from placeholders (kayak)
  const specProviders = args.providers.filter(
    (name) => PRINTING_PRESS_CATALOG[name]?.specUrl !== null,
  );
  const noSpecProviders = args.providers.filter(
    (name) => PRINTING_PRESS_CATALOG[name]?.specUrl === null,
  );

  if (noSpecProviders.length > 0) {
    log(
      `[ingest-printing-press] No-spec providers (registry placeholder only, no pipeline): ${noSpecProviders.join(", ")}`,
    );
  }

  // --- Step 1: Batch-upsert all entries into data/registry.json ---
  const allEntries = args.providers.map(buildRegistryEntry);
  const upsertActions = await batchUpsertRegistryEntries(repoRoot, allEntries, args.dryRun);

  // --- Step 2: Optionally run the bundler pipeline for spec providers ---
  const pipelineResults = new Map<string, { ran: boolean; error?: string }>();

  if (args.pipeline && !args.dryRun && specProviders.length > 0) {
    log(
      `\n[ingest-printing-press] Running bundler pipeline for ${specProviders.length} providers (concurrency=${args.concurrency})...`,
    );

    const pipelineTasks = specProviders.map(
      (providerName) => async () => {
        try {
          await runPipeline(providerName, repoRoot);
          pipelineResults.set(providerName, { ran: true });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : String(error);
          log(`[${providerName}] Pipeline ERROR: ${message}`);
          pipelineResults.set(providerName, { ran: false, error: message });
        }
      },
    );

    await runConcurrent(pipelineTasks, args.concurrency);
  }

  // --- Step 3: Collect results ---
  const results: IngestResult[] = args.providers.map((providerName) => {
    const entry = PRINTING_PRESS_CATALOG[providerName];
    const specUrl = entry?.specUrl ?? null;
    const hasSpec = specUrl !== null;
    const action = !hasSpec
      ? ("skipped-no-spec" as const)
      : ((upsertActions.get(providerName) ?? "dry-run") as IngestResult["action"]);

    const pipelineResult = pipelineResults.get(providerName);
    const pipelineRan = pipelineResult?.ran ?? false;

    return {
      provider: providerName,
      specUrl,
      action,
      pipelineRan,
      ...(pipelineResult?.error ? { error: pipelineResult.error } : {}),
    };
  });

  // --- Step 4: Summary ---
  const succeeded = results.filter((r) => r.action === "added" || r.action === "updated" || r.action === "dry-run");
  const skippedNoSpec = results.filter((r) => r.action === "skipped-no-spec");
  const errored = results.filter((r) => r.error);
  const pipelineRan = results.filter((r) => r.pipelineRan);

  log("\n[ingest-printing-press] ── Summary ──────────────────────────────");
  log(`  Total providers:   ${args.providers.length}`);
  log(`  Registry updated:  ${succeeded.length}`);
  log(`  No-spec (skipped): ${skippedNoSpec.length} (${skippedNoSpec.map((r) => r.provider).join(", ")})`);
  log(`  Pipeline runs:     ${pipelineRan.length}`);
  log(`  Pipeline errors:   ${errored.length}`);
  log("──────────────────────────────────────────────────────────────────");

  for (const r of errored) {
    log(`  [FAIL] ${r.provider}: ${r.error}`);
  }

  writeJson({
    ok: errored.length === 0,
    dryRun: args.dryRun,
    totalProviders: args.providers.length,
    registryUpdated: succeeded.length,
    noSpecSkipped: skippedNoSpec.length,
    pipelineRan: pipelineRan.length,
    pipelineErrors: errored.length,
    results,
  });

  if (errored.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Fatal error: ${message}\n`);
  process.exit(1);
});
