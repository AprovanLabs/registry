import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { DatadogClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createDatadogClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<DatadogClient> {
  return createClient<DatadogClient>({
    ...options,
    name: "datadog",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createDatadogClient());

export default defaultClient;
