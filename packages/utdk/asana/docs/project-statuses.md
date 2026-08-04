# Project Statuses

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.deleteProjectStatus`

Delete a project status — [Provider docs](https://asana.com/support)

```ts
asana.deleteProjectStatus(input: {
  /** The project status update to get. */
  project_status_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /project_statuses/{project_status_gid}` · `deleteProjectStatus`</sub>

## `asana.getProjectStatus`

Get a project status — [Provider docs](https://asana.com/support)

```ts
asana.getProjectStatus(input: {
  /** The project status update to get. */
  project_status_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "color" | "created_at" | "created_by" | "created_by.name" | "html_text" | "modified_at" | "text" | "title")[];
}): Promise<{ data?: ProjectStatusResponse }>
```

<sub>`GET /project_statuses/{project_status_gid}` · `getProjectStatus`</sub>

## `asana.getProjectStatusesForProject`

Get statuses from a project — [Provider docs](https://asana.com/support)

```ts
asana.getProjectStatusesForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "color" | "created_at" | "created_by" | "created_by.name" | "html_text" | "modified_at" | "offset" | "path" | "text" | "title" | "uri")[];
}): Promise<{ data?: (ProjectStatusCompact)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/project_statuses` · `getProjectStatusesForProject`</sub>

## `asana.createProjectStatusForProject`

Create a project status — [Provider docs](https://asana.com/support)

```ts
asana.createProjectStatusForProject(input: {
  data?: ProjectStatusRequest;
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("author" | "author.name" | "color" | "created_at" | "created_by" | "created_by.name" | "html_text" | "modified_at" | "text" | "title")[];
}): Promise<{ data?: ProjectStatusResponse }>
```

<sub>`POST /projects/{project_gid}/project_statuses` · `createProjectStatusForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
