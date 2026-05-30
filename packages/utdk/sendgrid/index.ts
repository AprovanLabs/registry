import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { SendgridClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createSendgridClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<SendgridClient> {
  return createClient<SendgridClient>({
    ...options,
    name: "sendgrid",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createSendgridClient());

export default defaultClient;
