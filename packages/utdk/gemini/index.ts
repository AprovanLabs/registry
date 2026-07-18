import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { GeminiClient } from "./types/index.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types/index.js";

export function createGeminiClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GeminiClient> {
  return createClient<GeminiClient>({
    ...options,
    name: "gemini",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGeminiClient());

export default defaultClient;
