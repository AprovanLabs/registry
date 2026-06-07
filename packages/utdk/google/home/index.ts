import { createClient, createLazyClient } from "../../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleHomeClient } from "./types.js";
import type { CreateClientOptions } from "../../client.js";

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
