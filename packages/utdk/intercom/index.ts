import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { IntercomClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createIntercomClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<IntercomClient> {
  return createClient<IntercomClient>({
    ...options,
    name: "intercom",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createIntercomClient());

export default defaultClient;
