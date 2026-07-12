import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { PosthogClient } from "./types/index.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types/index.js";

export function createPosthogClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<PosthogClient> {
  return createClient<PosthogClient>({
    ...options,
    name: "posthog",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createPosthogClient());

export default defaultClient;
