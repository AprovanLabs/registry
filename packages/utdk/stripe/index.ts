import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { StripeClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createStripeClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<StripeClient> {
  return createClient<StripeClient>({
    ...options,
    name: "stripe",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createStripeClient());

export default defaultClient;
