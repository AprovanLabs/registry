/**
 * Provider browse index (no operations). Ops live in catalog/ops.json and are
 * fetched when the user searches.
 */

import type { APIRoute } from "astro";
import type { CatalogIndexProvider } from "@/lib/catalog";
import { getRegistryCatalog } from "@/lib/registry";

export const GET: APIRoute = async () => {
  const catalog = await getRegistryCatalog();
  const providers: CatalogIndexProvider[] = catalog.entries
    .filter((e) => e.kind === "provider")
    .map((e) => ({
      providerPath: e.providerPath,
      title: e.title,
      summary: e.summary,
      openApiIcon: e.openApiIcon,
      operationCount: e.operationCount,
      scorecardDomain: e.scorecardDomain,
      packageName: e.packageName,
    }));

  return new Response(
    JSON.stringify({ providers, updatedAt: catalog.updatedAt }),
    { headers: { "Content-Type": "application/json" } },
  );
};
