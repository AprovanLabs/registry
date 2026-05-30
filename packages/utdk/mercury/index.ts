import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { MercuryClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createMercuryClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<MercuryClient> {
  return createClient<MercuryClient>({
    ...options,
    name: "mercury",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createMercuryClient());

export default defaultClient;
