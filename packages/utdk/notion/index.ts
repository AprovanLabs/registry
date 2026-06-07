import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { NotionClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
