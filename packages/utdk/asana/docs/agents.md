# Agents

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAgent`

Get an agent — [Provider docs](https://asana.com/support)

```ts
asana.getAgent(input: {
  /** Globally unique identifier for the agent. */
  agent_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("behavior_guidance" | "description" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "resource_subtype" | "workspace")[];
}): Promise<{ data?: AgentResponse }>
```

<sub>`GET /agents/{agent_gid}` · `getAgent`</sub>

## `asana.getAgentsForWorkspace`

Get a list of agents in a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getAgentsForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("behavior_guidance" | "description" | "name" | "offset" | "path" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60" | "resource_subtype" | "uri" | "workspace")[];
}): Promise<{ data?: (AgentCompact)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/agents` · `getAgentsForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
