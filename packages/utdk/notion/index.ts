import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { NotionClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createNotionClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<NotionClient> {
  return createClient<NotionClient>({
    ...options,
    name: "notion",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createNotionClient());

export default defaultClient;
