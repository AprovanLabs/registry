import type { CreateClientOptions } from "../../client.js";
import { createClient, createLazyClient } from "../../client.js";
import type { GoogleHomeClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createGoogleHomeClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleHomeClient> {
  return createClient<GoogleHomeClient>({
    ...options,
    name: "google/home",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleHomeClient());

export default defaultClient;
