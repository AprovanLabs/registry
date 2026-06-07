import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { PipedriveClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createPipedriveClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<PipedriveClient> {
  return createClient<PipedriveClient>({
    ...options,
    name: "pipedrive",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createPipedriveClient());

export default defaultClient;
