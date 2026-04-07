import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { SpotifyClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createSpotifyClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<SpotifyClient> {
  return createClient<SpotifyClient>({
    ...options,
    name: "spotify",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createSpotifyClient());

export default defaultClient;
