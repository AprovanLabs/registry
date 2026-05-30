import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { PetstoreClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createPetstoreClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<PetstoreClient> {
  return createClient<PetstoreClient>({
    ...options,
    name: "petstore",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createPetstoreClient());

export default defaultClient;
