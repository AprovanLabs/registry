import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { ProducthuntClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createProducthuntClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<ProducthuntClient> {
  return createClient<ProducthuntClient>({
    ...options,
    name: "producthunt",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createProducthuntClient());

export default defaultClient;
