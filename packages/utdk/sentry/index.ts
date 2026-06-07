import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { SentryClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createSentryClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<SentryClient> {
  return createClient<SentryClient>({
    ...options,
    name: "sentry",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createSentryClient());

export default defaultClient;
