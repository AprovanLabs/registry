import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { MercuryClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
