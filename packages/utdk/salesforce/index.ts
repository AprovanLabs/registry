import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { SalesforceClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createSalesforceClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<SalesforceClient> {
  return createClient<SalesforceClient>({
    ...options,
    name: "salesforce",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createSalesforceClient());

export default defaultClient;
