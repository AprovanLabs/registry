import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { PostmanExploreClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createPostmanExploreClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<PostmanExploreClient> {
  return createClient<PostmanExploreClient>({
    ...options,
    name: "postman-explore",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createPostmanExploreClient());

export default defaultClient;
