import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { parse } from "graphql";
import { resolveRepoPath } from "./provider.js";
import type { RegistryProvider } from "./provider.js";
import type { OpenAPIV3 } from "openapi-types";

export type GraphqlSchemaSource = {
  sdl: string;
  fetchedAt: string;
};

/**
 * Fetches a provider's declared GraphQL SDL source. Mirrors `loadOpenApiDocument`'s
 * scheme handling (`file://`, `repo://`, bare URL) but returns raw text — SDL has no
 * JSON/YAML framing to parse. Ingest only: this is the static, published SDL
 * document a vendor ships, never a runtime introspection round trip (see tech-plan
 * D2 — introspection is rejected).
 */
export async function loadGraphqlSchemaSource(
  provider: Pick<RegistryProvider, "name" | "graphqlSchemaUrl">,
): Promise<GraphqlSchemaSource> {
  const source = provider.graphqlSchemaUrl;

  if (!source) {
    throw new Error(`Provider "${provider.name}" has no graphqlSchemaUrl declared.`);
  }

  let sdl: string;

  if (source.startsWith("file://")) {
    sdl = await readFile(fileURLToPath(source), "utf8");
  } else if (source.startsWith("repo://")) {
    const relPath = source.slice("repo://".length);
    sdl = await readFile(resolveRepoPath(...relPath.split("/")), "utf8");
  } else {
    const response = await fetch(source, {
      headers: { "User-Agent": "UTDK/1.0.0" },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${provider.name} GraphQL schema: ${response.status} ${response.statusText}`,
      );
    }

    sdl = await response.text();
  }

  return { sdl, fetchedAt: new Date().toISOString() };
}

/**
 * Validates SDL parses as a GraphQL document. Bundle-time gate: a malformed
 * schema must fail the build naming the provider rather than ship — see D2
 * (shipped artifact, not runtime introspection) in the tech plan.
 */
export function assertValidSdl(providerName: string, sdl: string): void {
  try {
    parse(sdl);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Provider "${providerName}" has malformed GraphQL SDL: ${message}`);
  }
}

const GRAPHQL_TAG_PATTERN = /graphql/iu;

/**
 * Heuristic: does this OpenAPI document expose a GraphQL passthrough operation?
 * Matches the `GraphQL` tag or an operationId mentioning "graphql" — the signal
 * every current passthrough provider (Linear) carries. A provider whose
 * passthrough operation matches neither will need to widen this check rather
 * than silently skip `assertSchemaOperationPairing`.
 */
export function hasGraphqlOperation(document: OpenAPIV3.Document): boolean {
  if (!document.paths) {
    return false;
  }

  const methods = ["get", "put", "post", "delete", "options", "head", "patch", "trace"] as const;

  for (const pathItem of Object.values(document.paths)) {
    if (!pathItem) {
      continue;
    }

    for (const method of methods) {
      const operation = pathItem[method] as OpenAPIV3.OperationObject | undefined;

      if (!operation) {
        continue;
      }

      const operationId = operation.operationId ?? "";
      const tags = operation.tags ?? [];

      if (GRAPHQL_TAG_PATTERN.test(operationId) || tags.some((tag) => GRAPHQL_TAG_PATTERN.test(tag))) {
        return true;
      }
    }
  }

  return false;
}

/**
 * A schema source and a GraphQL operation must both be present or neither — a
 * schema with no way to execute it, or an executable GraphQL passthrough with
 * no schema to browse, is a packaging bug. Throws naming the provider on
 * either mismatch.
 */
export function assertSchemaOperationPairing(
  provider: Pick<RegistryProvider, "name" | "graphqlSchemaUrl">,
  document: OpenAPIV3.Document,
): void {
  const declaresSchema = Boolean(provider.graphqlSchemaUrl);
  const declaresOperation = hasGraphqlOperation(document);

  if (declaresSchema && !declaresOperation) {
    throw new Error(
      `Provider "${provider.name}" declares graphqlSchemaUrl but its OpenAPI spec has no GraphQL ` +
        `passthrough operation — a schema with no way to execute it is a packaging bug.`,
    );
  }

  if (declaresOperation && !declaresSchema) {
    throw new Error(
      `Provider "${provider.name}" has a GraphQL passthrough operation but no graphqlSchemaUrl declared — ` +
        `either declare a schema source or the operation ships with no schema to browse.`,
    );
  }
}
