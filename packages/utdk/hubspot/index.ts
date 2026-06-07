import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { HubspotClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createHubspotClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<HubspotClient> {
  return createClient<HubspotClient>({
    ...options,
    name: "hubspot",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createHubspotClient());

export default defaultClient;
