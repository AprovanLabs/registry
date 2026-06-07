import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { PlaidClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
