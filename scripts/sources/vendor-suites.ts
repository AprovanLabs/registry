#!/usr/bin/env tsx
/**
 * vendor-suites.ts — validate and curate the multi-provider vendor suites
 * (Google, Microsoft) in data/registry.json.
 *
 * The registry models a vendor suite as `<vendor>/<service>` names —
 * `googleapis/drive`, `microsoft/graph` — which the bundler turns into
 * per-service utdk subpath exports plus a vendor-level index
 * (`utdk/googleapis`, `utdk/microsoft`). This script:
 *
 * 1. **Validates** the suite: every generated utdk package directory whose
 *    `package.json#utdk.provider` names a suite provider must still have a
 *    registry entry — orphans (e.g. stale pre-rename `google/<service>`
 *    packages) are reported.
 * 2. **Curates** the popular services: attaches the vendor OAuth credential
 *    template (`options.auth`), branding, and documentation URLs — the docs
 *    pipeline seeds itself from `metadata.documentation_url`, so this is also
 *    what associates provider docs.
 * 3. **Augments** curated services through the Synthetic.new LLM backend
 *    (packages/bundler/src/llm.ts) for grounded descriptions/categories.
 *
 * ## Usage
 *
 *   pnpm tsx scripts/sources/vendor-suites.ts             # validate + curate
 *   pnpm tsx scripts/sources/vendor-suites.ts --dry-run   # report only
 *   pnpm tsx scripts/sources/vendor-suites.ts --no-llm    # skip augmentation
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import {
  augmentMetadata,
  fetchSpecSummary,
  hasLlmBackend,
  loadBundlerEnv,
  loadRegistry,
  nowIso,
  REPO_ROOT,
  saveRegistry,
  type RegistryEntry,
} from "./lib.js";

const UTDK_ROOT = path.join(REPO_ROOT, "packages", "utdk");

/** Google OAuth 2.0 credential template (Google identity endpoints). */
const GOOGLE_OAUTH = [
  {
    auth_type: "oauth2",
    flow: "authorization_code",
    client_id: "${CLIENT_ID}",
    client_secret: "${CLIENT_SECRET}",
    authorization_url: "https://accounts.google.com/o/oauth2/v2/auth",
    token_url: "https://oauth2.googleapis.com/token",
  },
];

/** Microsoft identity platform (v2.0) credential template. */
const MICROSOFT_OAUTH = [
  {
    auth_type: "oauth2",
    flow: "authorization_code",
    client_id: "${CLIENT_ID}",
    client_secret: "${CLIENT_SECRET}",
    authorization_url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    token_url: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
  },
];

type SuiteService = {
  /** Registry entry name (must already exist — this script curates, it does not mint). */
  name: string;
  docsUrl: string;
};

type VendorSuite = {
  vendor: string;
  /** Registry name prefixes that belong to this suite. */
  prefixes: string[];
  site: string;
  auth: Array<Record<string, unknown>>;
  /** The high-traffic services worth full curation. */
  services: SuiteService[];
};

const SUITES: VendorSuite[] = [
  {
    vendor: "google",
    prefixes: ["googleapis/", "google/"],
    site: "https://developers.google.com",
    auth: GOOGLE_OAUTH,
    services: [
      { name: "googleapis/drive", docsUrl: "https://developers.google.com/workspace/drive/api/reference/rest" },
      { name: "googleapis/gmail", docsUrl: "https://developers.google.com/workspace/gmail/api/reference/rest" },
      { name: "googleapis/calendar", docsUrl: "https://developers.google.com/workspace/calendar/api/v3/reference" },
      { name: "googleapis/sheets", docsUrl: "https://developers.google.com/workspace/sheets/api/reference/rest" },
      { name: "googleapis/docs", docsUrl: "https://developers.google.com/workspace/docs/api/reference/rest" },
      { name: "googleapis/slides", docsUrl: "https://developers.google.com/workspace/slides/api/reference/rest" },
      { name: "googleapis/forms", docsUrl: "https://developers.google.com/workspace/forms/api/reference/rest" },
      { name: "googleapis/tasks", docsUrl: "https://developers.google.com/workspace/tasks/reference/rest" },
      { name: "googleapis/people", docsUrl: "https://developers.google.com/people/api/rest" },
      { name: "googleapis/books", docsUrl: "https://developers.google.com/books/docs/v1/reference" },
      { name: "googleapis/youtube", docsUrl: "https://developers.google.com/youtube/v3/docs" },
    ],
  },
  {
    vendor: "microsoft",
    prefixes: ["microsoft/"],
    site: "https://developer.microsoft.com",
    auth: MICROSOFT_OAUTH,
    services: [
      { name: "microsoft/graph", docsUrl: "https://learn.microsoft.com/en-us/graph/api/overview" },
      { name: "microsoft/graph-beta", docsUrl: "https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-beta" },
    ],
  },
];

function parseArgs(argv: string[]) {
  const args = { dryRun: false, noLlm: false };
  for (const token of argv) {
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--no-llm") args.noLlm = true;
    else throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

/**
 * Walk packages/utdk two levels deep for generated package.json files and
 * return their `utdk.provider` names.
 */
function collectGeneratedProviders(): Map<string, string> {
  const providers = new Map<string, string>();

  const visit = (dir: string, depth: number) => {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (name === "node_modules" || name === "dist" || name.startsWith(".")) continue;
      const full = path.join(dir, name);
      if (!statSync(full).isDirectory()) continue;
      const packageJsonPath = path.join(full, "package.json");
      let provider: string | undefined;
      try {
        const parsed = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
          utdk?: { provider?: string };
        };
        provider = parsed.utdk?.provider;
      } catch {
        // no package.json at this level — fall through and recurse
      }
      if (provider) {
        providers.set(provider, path.relative(UTDK_ROOT, full));
      } else if (depth < 2) {
        // vendor index dirs (utdk/google) have a package.json without
        // utdk.provider — the per-service packages live one level down
        visit(full, depth + 1);
      }
    }
  };

  visit(UTDK_ROOT, 1);
  return providers;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  loadBundlerEnv();
  const useLlm = !args.noLlm && hasLlmBackend();

  const registry = await loadRegistry();
  const byName = new Map(registry.map((entry) => [entry.name, entry] as const));

  // ------------------------------------------------------------------
  // 1. Validation — generated suite packages must have registry entries.
  // ------------------------------------------------------------------
  const generated = collectGeneratedProviders();
  const orphans: string[] = [];
  for (const [provider, dir] of generated) {
    const inSuite = SUITES.some((suite) =>
      suite.prefixes.some((prefix) => provider.startsWith(prefix)),
    );
    if (inSuite && !byName.has(provider)) {
      orphans.push(`${provider} (packages/utdk/${dir})`);
    }
  }
  if (orphans.length > 0) {
    console.log(`⚠ Orphaned generated packages (no registry entry — stale, regenerate or remove):`);
    for (const orphan of orphans) console.log(`  - ${orphan}`);
  } else {
    console.log("✓ Every generated suite package has a registry entry.");
  }

  // ------------------------------------------------------------------
  // 2 + 3. Curation and augmentation of the popular services.
  // ------------------------------------------------------------------
  const curated: string[] = [];
  const missing: string[] = [];
  const failures: string[] = [];

  for (const suite of SUITES) {
    for (const service of suite.services) {
      const entry = byName.get(service.name);
      if (!entry) {
        missing.push(service.name);
        continue;
      }

      const changes: string[] = [];
      if (!entry.options?.auth) {
        entry.options = { ...entry.options, auth: suite.auth };
        changes.push("options.auth");
      }
      entry.metadata ??= {};
      if (entry.metadata.documentation_url !== service.docsUrl) {
        entry.metadata.documentation_url = service.docsUrl;
        changes.push("documentation_url");
      }
      if (!entry.branding?.site) {
        entry.branding = { ...entry.branding, site: suite.site };
        changes.push("branding.site");
      }

      if (useLlm) {
        try {
          const spec = await fetchSpecSummary(entry);
          const result = await augmentMetadata(entry.name, spec, entry.metadata);
          entry.metadata.description = result.description;
          entry.metadata.category = result.category;
          entry.augmentation = {
            model: result.model,
            generatedAt: nowIso(),
            fields: ["description", "category"],
          };
          changes.push("description", "category");
        } catch (error: unknown) {
          failures.push(
            `${service.name}: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }

      if (changes.length > 0) {
        curated.push(`${service.name} (${changes.join(", ")})`);
      }
    }
  }

  console.log(`\nCurated ${curated.length} suite services:`);
  for (const line of curated) console.log(`  - ${line}`);
  if (missing.length > 0) {
    console.log(`Missing registry entries (expected suite services): ${missing.join(", ")}`);
  }
  if (failures.length > 0) {
    console.log(`Augmentation failures:`);
    for (const failure of failures) console.log(`  - ${failure}`);
  }
  if (!useLlm && !args.noLlm) {
    console.warn("No LLM backend configured — descriptions/categories left unchanged.");
  }

  if (args.dryRun) {
    console.log("Dry run — registry.json not modified.");
    return;
  }

  await saveRegistry(registry);
  console.log(`Wrote ${registry.length} entries to data/registry.json`);
}

await main();
