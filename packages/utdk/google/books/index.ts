import { createClient, createLazyClient } from "../../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GoogleBooksClient } from "./types.js";
import type { CreateClientOptions } from "../../client.js";

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
