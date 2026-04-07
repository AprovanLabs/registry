import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { FigmaClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

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
