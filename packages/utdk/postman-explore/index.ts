import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { PostmanExploreClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
