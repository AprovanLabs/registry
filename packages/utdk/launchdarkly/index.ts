import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { LaunchdarklyClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createLaunchdarklyClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<LaunchdarklyClient> {
  return createClient<LaunchdarklyClient>({
    ...options,
    name: "launchdarkly",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createLaunchdarklyClient());

export default defaultClient;
