import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { GithubClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

export * from "./types.js";

export function createGithubClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<GithubClient> {
  return createClient<GithubClient>({
    ...options,
    name: "github",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createGithubClient());

export default defaultClient;
