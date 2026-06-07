import { createClient, createLazyClient } from "../../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleYoutubeClient } from "./types.js";
import type { CreateClientOptions } from "../../client.js";

export * from "./types.js";

export function createGoogleYoutubeClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleYoutubeClient> {
  return createClient<GoogleYoutubeClient>({
    ...options,
    name: "google/youtube",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleYoutubeClient());

export default defaultClient;
