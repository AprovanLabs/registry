import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { AsanaClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createAsanaClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<AsanaClient> {
  return createClient<AsanaClient>({
    ...options,
    name: "asana",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createAsanaClient());

export default defaultClient;
