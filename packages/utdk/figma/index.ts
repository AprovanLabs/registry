import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { FigmaClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createFigmaClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<FigmaClient> {
  return createClient<FigmaClient>({
    ...options,
    name: "figma",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createFigmaClient());

export default defaultClient;
