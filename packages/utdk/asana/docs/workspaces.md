# Workspaces

6 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getWorkspaces`

Get multiple workspaces — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspaces(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("email_domains" | "is_organization" | "name" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (WorkspaceCompact)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces` · `getWorkspaces`</sub>

## `asana.getWorkspace`

Get a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("email_domains" | "is_organization" | "name")[];
}): Promise<{ data?: WorkspaceResponse }>
```

<sub>`GET /workspaces/{workspace_gid}` · `getWorkspace`</sub>

## `asana.updateWorkspace`

Update a workspace — [Provider docs](https://asana.com/support)

```ts
asana.updateWorkspace(input: {
  data?: WorkspaceRequest;
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("email_domains" | "is_organization" | "name")[];
}): Promise<{ data?: WorkspaceResponse }>
```

<sub>`PUT /workspaces/{workspace_gid}` · `updateWorkspace`</sub>

## `asana.addUserForWorkspace`

Add a user to a workspace or organization — [Provider docs](https://asana.com/support)

```ts
asana.addUserForWorkspace(input: {
  data?: WorkspaceAddUserRequest;
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("email" | "name" | "photo" | "photo.image_1024x1024" | "photo.image_128x128" | "photo.image_21x21" | "photo.image_27x27" | "photo.image_36x36" | "photo.image_60x60")[];
}): Promise<{ data?: UserBaseResponse }>
```

<sub>`POST /workspaces/{workspace_gid}/addUser` · `addUserForWorkspace`</sub>

## `asana.getWorkspaceEvents`

Get workspace events — [Provider docs](https://asana.com/support)

```ts
asana.getWorkspaceEvents(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token. If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.* */
  sync?: string;
}): Promise<{ data?: (EventResponse)[]; sync?: string; has_more?: boolean }>
```

<sub>`GET /workspaces/{workspace_gid}/events` · `getWorkspaceEvents`</sub>

## `asana.removeUserForWorkspace`

Remove a user from a workspace or organization — [Provider docs](https://asana.com/support)

```ts
asana.removeUserForWorkspace(input: {
  data?: WorkspaceRemoveUserRequest;
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /workspaces/{workspace_gid}/removeUser` · `removeUserForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
