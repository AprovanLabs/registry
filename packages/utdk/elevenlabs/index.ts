import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { ElevenlabsClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createElevenlabsClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<ElevenlabsClient> {
  return createClient<ElevenlabsClient>({
    ...options,
    name: "elevenlabs",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createElevenlabsClient());

export default defaultClient;
