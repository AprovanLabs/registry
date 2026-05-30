import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { OpenrouteserviceClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createOpenrouteserviceClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<OpenrouteserviceClient> {
  return createClient<OpenrouteserviceClient>({
    ...options,
    name: "openrouteservice",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createOpenrouteserviceClient());

export default defaultClient;
