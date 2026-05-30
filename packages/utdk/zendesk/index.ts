import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { ZendeskClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createZendeskClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<ZendeskClient> {
  return createClient<ZendeskClient>({
    ...options,
    name: "zendesk",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createZendeskClient());

export default defaultClient;
