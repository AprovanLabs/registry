/**
 * Static catalog feed for client components (e.g. the Add Credential form's
 * provider picker). Built once at build time from the same catalog the
 * provider pages render, including each provider's supported credential
 * avenues derived from its OpenAPI `securitySchemes`.
 */

import type { APIRoute } from "astro";
import type { CatalogProviderSummary } from "@/lib/catalog";
import { getRegistryCatalog } from "@/lib/registry";

export const GET: APIRoute = async () => {
  const catalog = await getRegistryCatalog();
  const providers: CatalogProviderSummary[] = catalog.entries
    .filter((entry) => entry.kind === "provider")
    .map((entry) => ({
      id: entry.providerPath,
      title: entry.title,
      description: entry.summary ?? entry.description,
      packageName: entry.packageName,
      icon: entry.openApiIcon,
      auth: entry.auth,
      site: entry.branding?.site ?? null,
      originDomain: entry.provenance?.originDomain ?? null,
      originSpecUrl: entry.provenance?.originSpecUrl ?? null,
    }));

  return new Response(
    JSON.stringify({ providers, updatedAt: catalog.updatedAt }),
    { headers: { "Content-Type": "application/json" } },
  );
};
