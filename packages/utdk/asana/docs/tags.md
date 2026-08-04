# Tags

8 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTags`

Get multiple tags — [Provider docs](https://asana.com/support)

```ts
asana.getTags(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The workspace to filter tags on. */
  workspace?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "offset" | "path" | "permalink_url" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TagCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tags` · `getTags`</sub>

## `asana.createTag`

Create a tag — [Provider docs](https://asana.com/support)

```ts
asana.createTag(input: {
  data?: TagCreateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "permalink_url" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TagResponse }>
```

<sub>`POST /tags` · `createTag`</sub>

## `asana.deleteTag`

Delete a tag — [Provider docs](https://asana.com/support)

```ts
asana.deleteTag(input: {
  /** Globally unique identifier for the tag. */
  tag_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /tags/{tag_gid}` · `deleteTag`</sub>

## `asana.getTag`

Get a tag — [Provider docs](https://asana.com/support)

```ts
asana.getTag(input: {
  /** Globally unique identifier for the tag. */
  tag_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "permalink_url" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TagResponse }>
```

<sub>`GET /tags/{tag_gid}` · `getTag`</sub>

## `asana.updateTag`

Update a tag — [Provider docs](https://asana.com/support)

```ts
asana.updateTag(input: {
  data?: TagUpdateRequest;
  /** Globally unique identifier for the tag. */
  tag_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "permalink_url" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TagResponse }>
```

<sub>`PUT /tags/{tag_gid}` · `updateTag`</sub>

## `asana.getTagsForTask`

Get a task's tags — [Provider docs](https://asana.com/support)

```ts
asana.getTagsForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "offset" | "path" | "permalink_url" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TagCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/tags` · `getTagsForTask`</sub>

## `asana.getTagsForWorkspace`

Get tags in a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getTagsForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "offset" | "path" | "permalink_url" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TagCompact)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/tags` · `getTagsForWorkspace`</sub>

## `asana.createTagForWorkspace`

Create a tag in a workspace — [Provider docs](https://asana.com/support)

```ts
asana.createTagForWorkspace(input: {
  data?: TagCreateTagForWorkspaceRequest;
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "created_at" | "followers" | "followers.name" | "name" | "notes" | "permalink_url" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TagResponse }>
```

<sub>`POST /workspaces/{workspace_gid}/tags` · `createTagForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
