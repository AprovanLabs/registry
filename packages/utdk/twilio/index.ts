import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { TwilioClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createTwilioClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<TwilioClient> {
  return createClient<TwilioClient>({
    ...options,
    name: "twilio",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createTwilioClient());

export default defaultClient;
