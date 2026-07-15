/**
 * Compact operation search index. Loaded on demand when the user searches —
 * not required for the providers grid.
 */

import type { APIRoute } from "astro";
import type { CatalogIndexOperation } from "@/lib/catalog";
import { getRegistryCatalog } from "@/lib/registry";

export const GET: APIRoute = async () => {
  const catalog = await getRegistryCatalog();
  const operations: CatalogIndexOperation[] = catalog.entries
    .filter((e) => e.kind === "provider")
    .flatMap((e) =>
      e.operations.map((op) => ({
        providerPath: e.providerPath,
        providerTitle: e.title,
        operationId: op.operationId,
        sdkPath: op.sdkPath,
        method: op.httpMethod,
        path: op.httpPath,
        summary: op.summary,
      })),
    );

  return new Response(
    JSON.stringify({ operations, updatedAt: catalog.updatedAt }),
    { headers: { "Content-Type": "application/json" } },
  );
};
