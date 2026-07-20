import type { CreateClientOptions } from "../../client.js";
import { createClient, createLazyClient } from "../../client.js";
import type { GoogleSheetsClient } from "./types/index.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types/index.js";

export function createGoogleSheetsClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleSheetsClient> {
  return createClient<GoogleSheetsClient>({
    ...options,
    name: "google/sheets",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleSheetsClient());

export default defaultClient;
