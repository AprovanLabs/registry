import type { CreateClientOptions } from "../../client.js";
import { createClient, createLazyClient } from "../../client.js";
import type { GooglePeopleClient } from "./types/index.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types/index.js";

export function createGooglePeopleClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GooglePeopleClient> {
  return createClient<GooglePeopleClient>({
    ...options,
    name: "google/people",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGooglePeopleClient());

export default defaultClient;
