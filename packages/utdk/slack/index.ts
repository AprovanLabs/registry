import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { SlackClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createSlackClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<SlackClient> {
  return createClient<SlackClient>({
    ...options,
    name: "slack",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createSlackClient());

export default defaultClient;
