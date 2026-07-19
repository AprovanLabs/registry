#!/usr/bin/env tsx
/**
 * llm-augment.ts — spiff-up pass over data/registry.json.
 *
 * Two layers:
 *
 * 1. **Deterministic normalization** (always runs): collapses near-duplicate
 *    category spellings ("Iot" → "IoT", "Payment" → "Payments", …) and
 *    backfills `branding.site` / `provenance` for hand-curated entries from
 *    fields they already carry. No network, no LLM.
 *
 * 2. **LLM augmentation** (Synthetic.new via packages/bundler/src/llm.ts):
 *    entries with a missing/empty description or category get their spec
 *    fetched and summarized, and a grounded description + category generated
 *    through the shared structured-completion backend. Augmented entries
 *    record `augmentation: { model, generatedAt, fields }`.
 *
 * ## Usage
 *
 *   pnpm tsx scripts/sources/llm-augment.ts --dry-run          # report only
 *   pnpm tsx scripts/sources/llm-augment.ts --limit 25         # bound LLM spend
 *   pnpm tsx scripts/sources/llm-augment.ts --filter azure/    # subset by name
 *   pnpm tsx scripts/sources/llm-augment.ts --normalize-only   # skip the LLM layer
 */

import {
  augmentMetadata,
  fetchSpecSummary,
  hasLlmBackend,
  isLowQualityDescription,
  loadBundlerEnv,
  loadRegistry,
  nowIso,
  saveRegistry,
  urlToDomain,
  type RegistryEntry,
} from "./lib.js";

/** Near-duplicate category spellings → canonical entries in lib.CATEGORIES. */
const CATEGORY_ALIASES: Record<string, string> = {
  Iot: "IoT",
  Payment: "Payments",
  "Development Tools": "Developer Tools",
  AI: "AI & Machine Learning",
  "Machine Learning": "AI & Machine Learning",
  "Customer Relation": "CRM",
  Communications: "Communication",
  Tools: "Developer Tools",
  None: "",
};

function parseArgs(argv: string[]) {
  const args = { dryRun: false, filter: "", limit: 25, normalizeOnly: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--normalize-only") args.normalizeOnly = true;
    else if (token === "--filter") args.filter = argv[++i] ?? "";
    else if (token === "--limit") args.limit = Number(argv[++i] ?? "25");
    else throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

function normalizeEntry(entry: RegistryEntry): string[] {
  const changes: string[] = [];
  const metadata = (entry.metadata ??= {});

  const alias = metadata.category ? CATEGORY_ALIASES[metadata.category] : undefined;
  if (alias !== undefined) {
    changes.push(`category "${metadata.category}" → ${alias ? `"${alias}"` : "(cleared)"}`);
    if (alias) metadata.category = alias;
    else delete metadata.category;
  }

  if (!entry.branding?.site) {
    const site =
      urlToDomain(metadata.documentation_url) ??
      (entry.url.startsWith("http") ? urlToDomain(entry.url) : undefined);
    if (site) {
      entry.branding = { ...entry.branding, site: `https://${site}` };
      changes.push(`branding.site ← https://${site}`);
    }
  }

  if (!entry.provenance) {
    entry.provenance = {
      source: entry.ingestSource ?? "manual",
      ...(urlToDomain(metadata.documentation_url)
        ? { originDomain: urlToDomain(metadata.documentation_url) }
        : {}),
      ...(entry.url.startsWith("http") ? { originSpecUrl: entry.url } : {}),
    };
    changes.push(`provenance ← { source: "${entry.provenance.source}" }`);
  }

  return changes;
}

function needsAugmentation(entry: RegistryEntry): boolean {
  const metadata = entry.metadata ?? {};
  const category = metadata.category?.trim() ?? "";
  return isLowQualityDescription(metadata.description) || category.length === 0;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  loadBundlerEnv();

  const registry = await loadRegistry();
  const scoped = registry.filter((entry) => !args.filter || entry.name.includes(args.filter));

  // Layer 1 — deterministic normalization.
  let normalized = 0;
  for (const entry of scoped) {
    const changes = normalizeEntry(entry);
    if (changes.length > 0) {
      normalized += 1;
      console.log(`~ ${entry.name}: ${changes.join("; ")}`);
    }
  }
  console.log(`Normalized ${normalized} entries.`);

  // Layer 2 — LLM augmentation for missing metadata.
  const candidates = scoped.filter(needsAugmentation);
  console.log(`Entries needing augmentation: ${candidates.length} (processing up to ${args.limit}).`);

  let augmented = 0;
  const failures: string[] = [];

  if (!args.normalizeOnly && candidates.length > 0) {
    if (!hasLlmBackend()) {
      console.warn(
        "No LLM backend configured (SYNTHETIC_PROVIDER_URL/API_KEY or ANTHROPIC_API_KEY) — skipping augmentation layer.",
      );
    } else {
      for (const entry of candidates.slice(0, args.limit)) {
        try {
          const spec = await fetchSpecSummary(entry);
          const result = await augmentMetadata(entry.name, spec, entry.metadata);
          const filled: string[] = [];
          if (isLowQualityDescription(entry.metadata?.description)) filled.push("description");
          if (!entry.metadata?.category?.trim()) filled.push("category");
          entry.metadata = {
            ...entry.metadata,
            description: filled.includes("description")
              ? result.description
              : entry.metadata?.description?.trim(),
            category: entry.metadata?.category?.trim() || result.category,
          };
          entry.augmentation = {
            model: result.model,
            generatedAt: nowIso(),
            fields: filled,
          };
          augmented += 1;
          console.log(`+ ${entry.name}: [${entry.metadata.category}] ${entry.metadata.description?.slice(0, 100)}`);
        } catch (error: unknown) {
          failures.push(`${entry.name}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }
  }

  console.log(`\nAugmented ${augmented} entries.`);
  if (failures.length > 0) {
    console.log(`Failures: ${failures.length}`);
    for (const failure of failures.slice(0, 15)) console.log(`  - ${failure}`);
    if (failures.length > 15) console.log(`  … and ${failures.length - 15} more`);
  }

  if (args.dryRun) {
    console.log("Dry run — registry.json not modified.");
    return;
  }

  await saveRegistry(registry);
  console.log(`Wrote ${registry.length} entries to data/registry.json`);
}

await main();
