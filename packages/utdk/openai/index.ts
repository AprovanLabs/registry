import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { OpenaiClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createOpenaiClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<OpenaiClient> {
  return createClient<OpenaiClient>({
    ...options,
    name: "openai",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createOpenaiClient());

export default defaultClient;
