#!/usr/bin/env tsx
/**
 * curated-vendors.ts — one-time ingest of hand-picked vendors with official
 * OpenAPI specs into data/registry.json.
 *
 * The vendor list is *inspired by* the integration catalogs at Composio
 * (composio.dev/toolkits) and Airbyte (airbyte.com/connectors) — those
 * catalogs tell us which providers developers reach for. For legal
 * compliance we take only the vendor names from that inspiration: every spec
 * URL below is the vendor's own published OpenAPI document (their docs site
 * or their official spec repository), fetched under the vendor's terms, and
 * provenance records the vendor as origin. Nothing is copied from an
 * aggregator.
 *
 * Descriptions and categories are generated through the Synthetic.new
 * LLM-augmentation (packages/bundler/src/llm.ts) grounded in each spec.
 *
 * ## Usage
 *
 *   pnpm tsx scripts/sources/curated-vendors.ts               # full ingest
 *   pnpm tsx scripts/sources/curated-vendors.ts --dry-run     # validate only
 *   pnpm tsx scripts/sources/curated-vendors.ts --filter box  # subset
 *   pnpm tsx scripts/sources/curated-vendors.ts --no-llm      # skip augmentation
 *
 * ## Merge policy
 *
 * - Entries previously ingested by this script or by an aggregator
 *   (provenance.source "curated-vendors" or "apis-guru") are replaced — the
 *   vendor's official spec beats an aggregator copy. Hand-curated entries
 *   (any other provenance, or none) always win and are skipped.
 * - Vendors whose spec fails to fetch or parse are skipped and reported —
 *   the registry only ever gains entries with a working spec.
 */

import {
  augmentMetadata,
  fetchSpecSummary,
  hasLlmBackend,
  loadBundlerEnv,
  loadRegistry,
  nowIso,
  saveRegistry,
  today,
  urlToDomain,
  type RegistryEntry,
  type SpecSummary,
} from "./lib.js";

type CuratedVendor = {
  name: string;
  specUrl: string;
  contentType?: string;
  maintainer: string;
  docsUrl: string;
  site: string;
  /** Gateway credential template, when the auth model is known and simple. */
  auth?: Array<Record<string, unknown>>;
};

/**
 * Official spec sources only. Each URL is published by the vendor (docs site
 * or vendor-owned GitHub org). Comments note the auth surface where curated.
 */
const CURATED_VENDORS: CuratedVendor[] = [
  {
    name: "cloudflare",
    specUrl: "https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json",
    maintainer: "Cloudflare",
    docsUrl: "https://developers.cloudflare.com/api/",
    site: "https://www.cloudflare.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${CLOUDFLARE_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "vercel",
    specUrl: "https://openapi.vercel.sh",
    maintainer: "Vercel",
    docsUrl: "https://vercel.com/docs/rest-api",
    site: "https://vercel.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${VERCEL_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "gitlab",
    specUrl: "https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi.yaml",
    contentType: "application/x-yaml",
    maintainer: "GitLab",
    docsUrl: "https://docs.gitlab.com/ee/api/",
    site: "https://gitlab.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${GITLAB_TOKEN}",
        var_name: "PRIVATE-TOKEN",
        location: "header",
      },
    ],
  },
  {
    name: "box",
    specUrl: "https://raw.githubusercontent.com/box/box-openapi/main/openapi.json",
    maintainer: "Box",
    docsUrl: "https://developer.box.com/reference/",
    site: "https://www.box.com",
  },
  {
    name: "resend",
    specUrl: "https://raw.githubusercontent.com/resend/resend-openapi/main/resend.yaml",
    contentType: "application/x-yaml",
    maintainer: "Resend",
    docsUrl: "https://resend.com/docs/api-reference",
    site: "https://resend.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${RESEND_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "pagerduty",
    specUrl: "https://raw.githubusercontent.com/PagerDuty/api-schema/main/reference/REST/openapiv3.json",
    maintainer: "PagerDuty",
    docsUrl: "https://developer.pagerduty.com/api-reference/",
    site: "https://www.pagerduty.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Token token=${PAGERDUTY_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "circleci",
    specUrl: "https://circleci.com/api/v2/openapi.json",
    maintainer: "CircleCI",
    docsUrl: "https://circleci.com/docs/api/v2/",
    site: "https://circleci.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "${CIRCLECI_TOKEN}",
        var_name: "Circle-Token",
        location: "header",
      },
    ],
  },
  {
    name: "netlify",
    specUrl: "https://raw.githubusercontent.com/netlify/open-api/master/swagger.yml",
    contentType: "application/x-yaml",
    maintainer: "Netlify",
    docsUrl: "https://docs.netlify.com/api/get-started/",
    site: "https://www.netlify.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${NETLIFY_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "replicate",
    specUrl: "https://api.replicate.com/openapi.json",
    maintainer: "Replicate",
    docsUrl: "https://replicate.com/docs/reference/http",
    site: "https://replicate.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${REPLICATE_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "deepgram",
    specUrl: "https://raw.githubusercontent.com/deepgram/deepgram-api-specs/main/openapi.yml",
    contentType: "application/x-yaml",
    maintainer: "Deepgram",
    docsUrl: "https://developers.deepgram.com/reference/",
    site: "https://deepgram.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Token ${DEEPGRAM_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "docusign",
    specUrl:
      "https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/esignature.rest.swagger-v2.1.json",
    maintainer: "Docusign",
    docsUrl: "https://developers.docusign.com/docs/esign-rest-api/",
    site: "https://www.docusign.com",
  },
  {
    name: "lob",
    specUrl: "https://raw.githubusercontent.com/lob/lob-openapi/main/lob-api-public.yml",
    contentType: "application/x-yaml",
    maintainer: "Lob",
    docsUrl: "https://docs.lob.com",
    site: "https://www.lob.com",
  },
  {
    name: "mistral",
    specUrl: "https://raw.githubusercontent.com/mistralai/platform-docs-public/main/openapi.yaml",
    contentType: "application/x-yaml",
    maintainer: "Mistral AI",
    docsUrl: "https://docs.mistral.ai/api/",
    site: "https://mistral.ai",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${MISTRAL_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "supabase",
    specUrl: "https://api.supabase.com/api/v1-json",
    maintainer: "Supabase",
    docsUrl: "https://supabase.com/docs/reference/api/introduction",
    site: "https://supabase.com",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${SUPABASE_ACCESS_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "neon",
    specUrl: "https://neon.tech/api_spec/release/v2.json",
    maintainer: "Neon",
    docsUrl: "https://api-docs.neon.tech",
    site: "https://neon.tech",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${NEON_API_KEY}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
  {
    name: "fly-io",
    specUrl: "https://docs.machines.dev/spec/openapi3.json",
    maintainer: "Fly.io",
    docsUrl: "https://docs.machines.dev",
    site: "https://fly.io",
    auth: [
      {
        auth_type: "api_key",
        api_key: "Bearer ${FLY_API_TOKEN}",
        var_name: "Authorization",
        location: "header",
      },
    ],
  },
];

function parseArgs(argv: string[]) {
  const args = { dryRun: false, filter: "", noLlm: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--no-llm") args.noLlm = true;
    else if (token === "--filter") args.filter = argv[++i] ?? "";
    else throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

function buildEntry(
  vendor: CuratedVendor,
  spec: SpecSummary,
  retrievedAt: string,
): RegistryEntry {
  return {
    name: vendor.name,
    transport_type: "http",
    fetch_method: "GET",
    url: vendor.specUrl,
    content_type: vendor.contentType ?? "application/json",
    ...(vendor.auth ? { options: { auth: vendor.auth } } : {}),
    metadata: {
      ...(spec.description
        ? { description: spec.description.replace(/\s+/g, " ").trim().slice(0, 400) }
        : {}),
      last_updated: today(),
      maintainer: vendor.maintainer,
      documentation_url: vendor.docsUrl,
      ...(spec.version ? { version: spec.version } : {}),
      ...(spec.openapiVersion ? { openapi_version: spec.openapiVersion } : {}),
      ...(spec.title ? { title: spec.title } : {}),
    },
    provenance: {
      source: "curated-vendors",
      originDomain: urlToDomain(vendor.site) ?? urlToDomain(vendor.specUrl),
      originSpecUrl: vendor.specUrl,
      retrievedAt,
    },
    branding: {
      site: vendor.site,
    },
  };
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  loadBundlerEnv();

  const useLlm = !args.noLlm && hasLlmBackend();
  if (!args.noLlm && !useLlm) {
    console.warn(
      "No LLM backend configured (SYNTHETIC_PROVIDER_URL/API_KEY or ANTHROPIC_API_KEY) — spec-derived metadata only.",
    );
  }

  const registry = await loadRegistry();
  const byName = new Map(registry.map((entry) => [entry.name, entry] as const));
  const retrievedAt = nowIso();

  const added: string[] = [];
  const refreshed: string[] = [];
  const skipped: string[] = [];
  const failed: string[] = [];

  for (const vendor of CURATED_VENDORS) {
    if (args.filter && !vendor.name.includes(args.filter)) continue;

    const existing = byName.get(vendor.name);
    const existingSource = existing?.provenance?.source;
    if (existing && existingSource !== "curated-vendors" && existingSource !== "apis-guru") {
      skipped.push(`${vendor.name} (hand-curated entry wins)`);
      continue;
    }

    let entry = buildEntry(vendor, { pathCount: 0, operations: [], securitySchemes: [] }, retrievedAt);
    let spec: SpecSummary;
    try {
      spec = await fetchSpecSummary(entry);
    } catch (error: unknown) {
      failed.push(`${vendor.name}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    if (spec.pathCount === 0) {
      failed.push(`${vendor.name}: spec parsed but has no paths`);
      continue;
    }
    entry = buildEntry(vendor, spec, retrievedAt);
    console.log(
      `✓ ${vendor.name} — ${spec.title ?? "untitled"} (${spec.pathCount} paths, OpenAPI ${spec.openapiVersion ?? "?"})`,
    );

    if (useLlm) {
      try {
        const augmented = await augmentMetadata(vendor.name, spec, entry.metadata);
        entry.metadata = {
          ...entry.metadata,
          description: augmented.description,
          category: augmented.category,
        };
        entry.augmentation = {
          model: augmented.model,
          generatedAt: retrievedAt,
          fields: ["description", "category"],
        };
      } catch (error: unknown) {
        console.warn(
          `  augmentation failed for ${vendor.name} (keeping spec-derived metadata): ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }

    if (existing) {
      const index = registry.indexOf(existing);
      registry[index] = entry;
      refreshed.push(vendor.name);
    } else {
      registry.push(entry);
      added.push(vendor.name);
    }
    byName.set(vendor.name, entry);
  }

  console.log(`\nAdded: ${added.length} (${added.join(", ") || "none"})`);
  console.log(`Refreshed: ${refreshed.length} (${refreshed.join(", ") || "none"})`);
  if (skipped.length > 0) console.log(`Skipped: ${skipped.length}\n  - ${skipped.join("\n  - ")}`);
  if (failed.length > 0) console.log(`Failed: ${failed.length}\n  - ${failed.join("\n  - ")}`);

  if (args.dryRun) {
    console.log("Dry run — registry.json not modified.");
    return;
  }

  await saveRegistry(registry);
  console.log(`Wrote ${registry.length} entries to data/registry.json`);
}

await main();
