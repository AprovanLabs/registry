import { createClient, createLazyClient } from "../../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleDriveClient } from "./types.js";
import type { CreateClientOptions } from "../../client.js";

export * from "./types.js";

export function createGoogleDriveClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleDriveClient> {
  return createClient<GoogleDriveClient>({
    ...options,
    name: "google/drive",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleDriveClient());

export default defaultClient;
