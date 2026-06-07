import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { DigitaloceanClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createDigitaloceanClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<DigitaloceanClient> {
  return createClient<DigitaloceanClient>({
    ...options,
    name: "digitalocean",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createDigitaloceanClient());

export default defaultClient;
