import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleCloudRunClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createGoogleCloudRunClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleCloudRunClient> {
  return createClient<GoogleCloudRunClient>({
    ...options,
    name: "google-cloud-run",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleCloudRunClient());

export default defaultClient;
