/**
 * Per-provider catalog detail (operations + try-it schemas).
 * Emitted as /catalog/p/{providerPath}.json and loaded on demand.
 */

import type { APIRoute } from "astro";
import type { CatalogProviderDetail } from "@/lib/catalog";
import { loadProviderOperations } from "@/lib/openapi";
import { getRegistryCatalog, getRegistryEntry } from "@/lib/registry";

export async function getStaticPaths() {
  const catalog = await getRegistryCatalog();
  return catalog.entries
    .filter((entry) => entry.kind === "provider")
    .map((entry) => ({
      params: { path: entry.providerPath },
    }));
}

export const GET: APIRoute = async ({ params }) => {
  const providerPath = params.path;
  if (!providerPath) {
    return new Response(JSON.stringify({ error: "missing provider path" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const [entry, operations] = await Promise.all([
    getRegistryEntry(providerPath),
    loadProviderOperations(providerPath),
  ]);

  if (!entry || entry.kind !== "provider") {
    return new Response(JSON.stringify({ error: "unknown provider" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const registryOutputs = new Map(
    entry.operations.map((op) => [
      op.operationId,
      { outputs: op.outputs, responseUnknown: op.responseUnknown },
    ]),
  );

  const body: CatalogProviderDetail = {
    id: entry.providerPath,
    title: entry.title,
    description: entry.summary ?? entry.description,
    packageName: entry.packageName,
    icon: entry.openApiIcon,
    version: entry.version,
    importSample: entry.importSample,
    createClientSample: entry.createClientSample,
    scorecardDomain: entry.scorecardDomain,
    scorecardInfrastructure: entry.scorecardInfrastructure,
    auth: entry.auth,
    operations: operations.map((op) => {
      const registry = registryOutputs.get(op.operationId);
      return {
        operationId: op.operationId,
        sdkPath: op.sdkPath,
        httpMethod: op.httpMethod,
        httpPath: op.httpPath,
        summary: op.summary,
        description: op.description,
        tags: op.tags,
        parameters: op.parameters,
        requestBodyFields: op.requestBodyFields,
        outputs: registry?.outputs ?? op.outputs,
        responseUnknown: registry?.responseUnknown ?? op.responseUnknown,
      };
    }),
  };

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
  });
};
