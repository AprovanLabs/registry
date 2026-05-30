import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { PlaidClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createPlaidClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<PlaidClient> {
  return createClient<PlaidClient>({
    ...options,
    name: "plaid",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createPlaidClient());

export default defaultClient;
