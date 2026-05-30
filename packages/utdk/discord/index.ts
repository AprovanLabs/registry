import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { DiscordClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createDiscordClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<DiscordClient> {
  return createClient<DiscordClient>({
    ...options,
    name: "discord",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createDiscordClient());

export default defaultClient;
