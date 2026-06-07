import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { AsanaClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
