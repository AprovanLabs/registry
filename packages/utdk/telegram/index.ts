import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { TelegramClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createTelegramClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<TelegramClient> {
  return createClient<TelegramClient>({
    ...options,
    name: "telegram",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createTelegramClient());

export default defaultClient;
