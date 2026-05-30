import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { StripeClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

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
