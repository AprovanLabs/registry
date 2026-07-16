#!/usr/bin/env tsx
/**
 * apis-guru.ts — one-time ingest of the APIs.guru openapi-directory catalog
 * into data/registry.json.
 *
 * Pulls the machine-readable index (https://api.apis.guru/v2/list.json) rather
 * than scraping the GitHub tree, and records provenance that points at the
 * upstream vendor (x-origin spec URL + provider domain) — APIs.guru itself is
 * only recorded as the ingest `source` and used as the stable fetch URL.
 *
 * ## Usage
 *
 *   pnpm tsx scripts/sources/apis-guru.ts                 # full ingest
 *   pnpm tsx scripts/sources/apis-guru.ts --dry-run       # report only
 *   pnpm tsx scripts/sources/apis-guru.ts --filter github # subset by domain
 *   pnpm tsx scripts/sources/apis-guru.ts --limit 50      # cap ingested count
 *
 * ## Merge policy
 *
 * - Hand-curated entries (no `provenance.source === "apis-guru"` and not a
 *   legacy raw-GitHub APIs.guru URL) are always preserved and win name
 *   collisions.
 * - Legacy bulk-seeded entries pointing at
 *   raw.githubusercontent.com/APIs-guru/openapi-directory are replaced by
 *   fresh, clean-named entries.
 * - Re-running refreshes previously ingested entries in place.
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REGISTRY_PATH = path.join(
  fileURLToPath(new URL("../..", import.meta.url)),
  "data",
  "registry.json",
);

const LIST_URL = "https://api.apis.guru/v2/list.json";
const LEGACY_URL_PREFIX =
  "https://raw.githubusercontent.com/APIs-guru/openapi-directory/";

type ApisGuruVersion = {
  info?: {
    title?: string;
    description?: string;
    version?: string;
    contact?: { name?: string; url?: string };
    "x-apisguru-categories"?: string[];
    "x-logo"?: { url?: string };
    "x-origin"?: Array<{ format?: string; url?: string; version?: string }>;
    "x-providerName"?: string;
    "x-serviceName"?: string;
    "x-unofficialSpec"?: boolean;
  };
  externalDocs?: { url?: string };
  updated?: string;
  swaggerUrl?: string;
  openapiVer?: string;
};

type ApisGuruApi = {
  preferred?: string;
  versions?: Record<string, ApisGuruVersion>;
};

type RegistryEntry = {
  name: string;
  transport_type?: string;
  fetch_method?: string;
  url: string;
  content_type?: string;
  metadata?: Record<string, unknown>;
  provenance?: {
    source: string;
    originDomain?: string;
    originSpecUrl?: string;
    service?: string;
    retrievedAt?: string;
  };
  branding?: { logo?: string; site?: string };
  [key: string]: unknown;
};

function parseArgs(argv: string[]) {
  const args = { dryRun: false, filter: "", limit: Infinity };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--filter") args.filter = argv[++i] ?? "";
    else if (token === "--limit") args.limit = Number(argv[++i] ?? "Infinity");
    else throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

/** "github.com" → "github"; "bbci.co.uk" → "bbci"; "1password.com" → "1password". */
function domainToSlug(domain: string): string {
  const [first = domain] = domain.split(".");
  return sanitizeSegment(first);
}

/** Segments must avoid "." and "/" — the bundler splits provider names on both. */
function sanitizeSegment(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .replace(/^(?=\d)/u, "api-");
}

/** Full domain fallback for slug collisions: "github.io" → "github-io". */
function domainToFullSlug(domain: string): string {
  return sanitizeSegment(domain);
}

function firstHttpUrl(
  origins: Array<{ url?: string }> | undefined,
): string | undefined {
  for (const origin of origins ?? []) {
    if (origin.url && /^https?:\/\//u.test(origin.url)) return origin.url;
  }
  return undefined;
}

function truncate(value: string | undefined, max = 400): string | undefined {
  if (!value) return undefined;
  const collapsed = value.replace(/\s+/gu, " ").trim();
  if (!collapsed) return undefined;
  return collapsed.length > max ? `${collapsed.slice(0, max - 1)}…` : collapsed;
}

function toTitleCategory(category: string | undefined): string | undefined {
  if (!category) return undefined;
  return category
    .split(/[_\s]+/u)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildEntry(
  apiKey: string,
  api: ApisGuruApi,
  name: string,
  retrievedAt: string,
): RegistryEntry | null {
  const preferred = api.preferred;
  const version = preferred ? api.versions?.[preferred] : undefined;
  if (!version?.swaggerUrl || !version.info) return null;

  const info = version.info;
  const [domain = apiKey, service] = apiKey.split(":");
  const documentationUrl = version.externalDocs?.url ?? info.contact?.url;
  const site = version.externalDocs?.url ?? info.contact?.url ?? `https://${domain}`;

  return {
    name,
    transport_type: "http",
    fetch_method: "GET",
    url: version.swaggerUrl,
    content_type: "application/json",
    metadata: {
      ...(truncate(info.description) ? { description: truncate(info.description) } : {}),
      ...(info["x-apisguru-categories"]?.[0]
        ? { category: toTitleCategory(info["x-apisguru-categories"][0]) }
        : {}),
      ...(version.updated ? { last_updated: version.updated.slice(0, 10) } : {}),
      maintainer: info.contact?.name ?? domain,
      ...(documentationUrl ? { documentation_url: documentationUrl } : {}),
      ...(info.version ? { version: info.version } : {}),
      ...(version.openapiVer ? { openapi_version: version.openapiVer } : {}),
      ...(info.title ? { title: info.title } : {}),
      ...(info["x-unofficialSpec"] ? { unofficial_spec: true } : {}),
    },
    provenance: {
      source: "apis-guru",
      originDomain: domain,
      ...(firstHttpUrl(info["x-origin"])
        ? { originSpecUrl: firstHttpUrl(info["x-origin"]) }
        : {}),
      ...(service ? { service } : {}),
      retrievedAt,
    },
    branding: {
      ...(info["x-logo"]?.url ? { logo: info["x-logo"].url } : {}),
      site,
    },
  };
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  const existingRaw = await readFile(REGISTRY_PATH, "utf8");
  const existing = JSON.parse(existingRaw) as RegistryEntry[];

  const preserved: RegistryEntry[] = [];
  const reservedNames = new Set<string>();
  for (const entry of existing) {
    if (
      entry.provenance?.source === "apis-guru" ||
      entry.url.startsWith(LEGACY_URL_PREFIX)
    ) {
      continue;
    }
    if (reservedNames.has(entry.name)) {
      console.warn(`Dropping duplicate hand-curated entry: ${entry.name}`);
      continue;
    }
    reservedNames.add(entry.name);
    preserved.push(entry);
  }
  const removedLegacy = existing.length - preserved.length;

  console.log(`Fetching ${LIST_URL} …`);
  const response = await fetch(LIST_URL);
  if (!response.ok) {
    throw new Error(`APIs.guru list fetch failed: HTTP ${response.status}`);
  }
  const list = (await response.json()) as Record<string, ApisGuruApi>;
  const retrievedAt = new Date().toISOString();

  // First pass: count APIs per domain-slug so colliding domains fall back to
  // their full-domain slug (github.com → github, github.io → github-io).
  const slugDomains = new Map<string, Set<string>>();
  for (const apiKey of Object.keys(list)) {
    const [domain = apiKey] = apiKey.split(":");
    const slug = domainToSlug(domain);
    if (!slugDomains.has(slug)) slugDomains.set(slug, new Set());
    slugDomains.get(slug)!.add(domain);
  }

  const ingested: RegistryEntry[] = [];
  const ingestedNames = new Set<string>();
  const skipped: string[] = [];
  let matched = 0;

  for (const [apiKey, api] of Object.entries(list)) {
    if (args.filter && !apiKey.includes(args.filter)) continue;
    matched += 1;
    if (ingested.length >= args.limit) break;

    const [domain = apiKey, service] = apiKey.split(":");
    const baseSlug =
      (slugDomains.get(domainToSlug(domain))?.size ?? 1) > 1
        ? domainToFullSlug(domain)
        : domainToSlug(domain);
    let name = service ? `${baseSlug}/${sanitizeSegment(service)}` : baseSlug;

    if (reservedNames.has(name)) {
      skipped.push(`${apiKey} → ${name} (hand-curated entry wins)`);
      continue;
    }

    // Distinct API keys can sanitize to the same name (e.g. trailing "-").
    if (ingestedNames.has(name)) {
      let suffix = 2;
      while (ingestedNames.has(`${name}-${suffix}`)) suffix += 1;
      name = `${name}-${suffix}`;
    }
    ingestedNames.add(name);

    const entry = buildEntry(apiKey, api, name, retrievedAt);
    if (!entry) {
      skipped.push(`${apiKey} (no preferred version / spec URL)`);
      continue;
    }
    ingested.push(entry);
  }

  ingested.sort((left, right) => left.name.localeCompare(right.name));

  console.log(`APIs.guru catalog: ${Object.keys(list).length} APIs (${matched} matched filter)`);
  console.log(`Preserved hand-curated entries: ${preserved.length}`);
  console.log(`Removed legacy raw-GitHub entries: ${removedLegacy}`);
  console.log(`Ingested entries: ${ingested.length}`);
  if (skipped.length > 0) {
    console.log(`Skipped: ${skipped.length}`);
    for (const reason of skipped.slice(0, 10)) console.log(`  - ${reason}`);
    if (skipped.length > 10) console.log(`  … and ${skipped.length - 10} more`);
  }

  if (args.dryRun) {
    console.log("Dry run — registry.json not modified.");
    return;
  }

  const next = [...preserved, ...ingested];
  await writeFile(REGISTRY_PATH, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  console.log(`Wrote ${next.length} entries to ${REGISTRY_PATH}`);
}

await main();
