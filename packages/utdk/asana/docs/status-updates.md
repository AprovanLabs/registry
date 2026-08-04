# Status Updates

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getStatusesForObject`

Get status updates from an object — [Provider docs](https://asana.com/support)

```ts
asana.getStatusesForObject(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal. */
  parent: string;
  /** Only return statuses that have been created since the given time. */
  created_since?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "created_at" | "created_by" | "created_by.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "liked" | "likes" | "likes.user" | "likes.user.name" | "modified_at" | "num_hearts" | "num_likes" | "offset" | "parent" | "parent.name" | "path" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "status_type" | "text" | "title" | "uri")[];
}): Promise<{ data?: (StatusUpdateCompact)[]; next_page?: NextPage }>
```

<sub>`GET /status_updates` · `getStatusesForObject`</sub>

## `asana.createStatusForObject`

Create a status update — [Provider docs](https://asana.com/support)

```ts
asana.createStatusForObject(input: {
  data?: StatusUpdateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "created_at" | "created_by" | "created_by.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "liked" | "likes" | "likes.user" | "likes.user.name" | "modified_at" | "num_hearts" | "num_likes" | "parent" | "parent.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "status_type" | "text" | "title")[];
}): Promise<{ data?: StatusUpdateResponse }>
```

<sub>`POST /status_updates` · `createStatusForObject`</sub>

## `asana.deleteStatus`

Delete a status update — [Provider docs](https://asana.com/support)

```ts
asana.deleteStatus(input: {
  /** The status update to get. */
  status_update_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /status_updates/{status_update_gid}` · `deleteStatus`</sub>

## `asana.getStatus`

Get a status update — [Provider docs](https://asana.com/support)

```ts
asana.getStatus(input: {
  /** The status update to get. */
  status_update_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "created_at" | "created_by" | "created_by.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_text" | "liked" | "likes" | "likes.user" | "likes.user.name" | "modified_at" | "num_hearts" | "num_likes" | "parent" | "parent.name" | "reaction_summary" | "reaction_summary.count" | "reaction_summary.emoji_base" | "reaction_summary.reacted" | "reaction_summary.variant" | "resource_subtype" | "status_type" | "text" | "title")[];
}): Promise<{ data?: StatusUpdateResponse }>
```

<sub>`GET /status_updates/{status_update_gid}` · `getStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
