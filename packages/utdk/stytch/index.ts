import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { StytchClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
