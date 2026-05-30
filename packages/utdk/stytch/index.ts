import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { StytchClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createStytchClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<StytchClient> {
  return createClient<StytchClient>({
    ...options,
    name: "stytch",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createStytchClient());

export default defaultClient;
