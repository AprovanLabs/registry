import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { FrontClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createFrontClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<FrontClient> {
  return createClient<FrontClient>({
    ...options,
    name: "front",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createFrontClient());

export default defaultClient;
