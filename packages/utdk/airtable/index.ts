import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { AirtableClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createAirtableClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<AirtableClient> {
  return createClient<AirtableClient>({
    ...options,
    name: "airtable",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createAirtableClient());

export default defaultClient;
