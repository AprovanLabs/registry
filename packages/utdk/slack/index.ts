import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { SlackClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
