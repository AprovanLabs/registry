import { createClient, createLazyClient } from "../../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleFcmClient } from "./types.js";
import type { CreateClientOptions } from "../../client.js";

export * from "./types.js";

export function createGoogleFcmClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleFcmClient> {
  return createClient<GoogleFcmClient>({
    ...options,
    name: "google/fcm",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleFcmClient());

export default defaultClient;
