import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { ItglueClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createItglueClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<ItglueClient> {
  return createClient<ItglueClient>({
    ...options,
    name: "itglue",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createItglueClient());

export default defaultClient;
