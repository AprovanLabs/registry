import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { AnthropicClient } from "./types/index.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types/index.js";

export function createAnthropicClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<AnthropicClient> {
  return createClient<AnthropicClient>({
    ...options,
    name: "anthropic",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createAnthropicClient());

export default defaultClient;
