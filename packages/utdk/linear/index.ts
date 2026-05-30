import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { LinearClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createLinearClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<LinearClient> {
  return createClient<LinearClient>({
    ...options,
    name: "linear",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createLinearClient());

export default defaultClient;
