/**
 * `/catalog/credential-free.json` — the browser's routing table for provider
 * operations that need no workspace credential.
 *
 * Built by joining the hand-curated allowlist in `lib/credential-free.ts`
 * against the generated OpenAPI documents, so the playground never hardcodes a
 * provider's base URL or path shape. Emitted as its own tiny file rather than
 * folded into `/catalog/p/<provider>.json`, which is megabytes per provider —
 * the playground has to have this before the first run.
 *
 * An allowlist entry that fails to resolve fails the build: this table backs
 * the registry's primary CTA, and a silently missing route would turn the
 * anonymous sample run into a sign-in wall.
 */

import type { APIRoute } from "astro";
import {
  CREDENTIAL_FREE_ALLOWLIST,
  type CredentialFreeManifest,
  type CredentialFreeRoute,
  type ParameterLocation,
} from "@/lib/credential-free";
import { loadProviderApiBaseUrl, loadProviderOperations } from "@/lib/openapi";

export const GET: APIRoute = async () => {
  const routes: CredentialFreeRoute[] = [];

  for (const policy of CREDENTIAL_FREE_ALLOWLIST) {
    const [baseUrl, operations] = await Promise.all([
      loadProviderApiBaseUrl(policy.provider),
      loadProviderOperations(policy.provider),
    ]);

    if (!baseUrl) {
      throw new Error(
        `credential-free: provider "${policy.provider}" has no absolute servers[0].url in packages/utdk/${policy.provider}/openapi.json.`,
      );
    }

    const bySdkPath = new Map(operations.map((op) => [op.sdkPath, op]));

    for (const sdkPath of policy.operations) {
      const operation = bySdkPath.get(sdkPath);
      if (!operation) {
        throw new Error(
          `credential-free: "${policy.provider}.${sdkPath}" is not an operation of packages/utdk/${policy.provider}/openapi.json.`,
        );
      }

      const method = operation.httpMethod.toUpperCase();
      const hasBody = method !== "GET" && method !== "HEAD";
      if (hasBody) {
        // A JSON request body forces a CORS preflight most public APIs will
        // not answer, and an anonymous write has nowhere to write to.
        throw new Error(
          `credential-free: "${policy.provider}.${sdkPath}" is ${method}; only GET/HEAD operations may be dispatched anonymously.`,
        );
      }

      routes.push({
        provider: policy.provider,
        operation: sdkPath,
        method,
        baseUrl,
        path: operation.httpPath,
        parameters: operation.parameters.map((parameter) => ({
          name: parameter.name,
          location: parameter.location as ParameterLocation,
        })),
        bodyFields: operation.requestBodyFields.map((field) => field.name),
        ...(policy.headers ? { headers: policy.headers } : {}),
        ...(policy.rateLimitHint ? { rateLimitHint: policy.rateLimitHint } : {}),
      });
    }
  }

  const body: CredentialFreeManifest = {
    routes,
    generatedAt: new Date().toISOString(),
  };

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
  });
};
