import type { CreateClientOptions } from "../client.js";
import { createClient, createLazyClient } from "../client.js";
import type { JiraClient } from "./types.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };

export * from "./types.js";

export function createJiraClient(
  options: Omit<CreateClientOptions, "name" | "openApiDocument" | "toolMetadata"> = {},
): Promise<JiraClient> {
  return createClient<JiraClient>({
    ...options,
    name: "jira",
    openApiDocument,
    toolMetadata,
  });
}

const defaultClient = createLazyClient(() => createJiraClient());

export default defaultClient;
