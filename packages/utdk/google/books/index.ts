import type { CreateClientOptions } from "../../client.js";
import { createClient, createLazyClient } from "../../client.js";
import type { GoogleBooksClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createGoogleBooksClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GoogleBooksClient> {
  return createClient<GoogleBooksClient>({
    ...options,
    name: "google/books",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGoogleBooksClient());

export default defaultClient;
