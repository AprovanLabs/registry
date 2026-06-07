import { createClient, createLazyClient } from "../client.js";
import { toolMetadata } from "./metadata.js";
import openApiDocument from "./openapi.json" with { type: "json" };
import type { JiraClient } from "./types.js";
import type { CreateClientOptions } from "../client.js";

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
