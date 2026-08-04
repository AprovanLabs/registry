# Allocations

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAllocations`

Get multiple allocations — [Provider docs](https://asana.com/support)

```ts
asana.getAllocations(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the project to filter allocations by. */
  parent?: string;
  /** Globally unique identifier for the user or placeholder the allocation is assigned to. */
  assignee?: string;
  /** Globally unique identifier for the workspace. */
  workspace?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_by" | "created_by.name" | "effort" | "effort.type" | "effort.value" | "end_date" | "offset" | "parent" | "parent.name" | "path" | "resource_subtype" | "start_date" | "uri")[];
}): Promise<{ data?: (AllocationResponse)[]; next_page?: NextPage }>
```

<sub>`GET /allocations` · `getAllocations`</sub>

## `asana.createAllocation`

Create an allocation — [Provider docs](https://asana.com/support)

```ts
asana.createAllocation(input: {
  data?: AllocationRequest & { [key: string]: unknown };
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_by" | "created_by.name" | "effort" | "effort.type" | "effort.value" | "end_date" | "parent" | "parent.name" | "resource_subtype" | "start_date")[];
}): Promise<{ data?: AllocationResponse }>
```

<sub>`POST /allocations` · `createAllocation`</sub>

## `asana.deleteAllocation`

Delete an allocation — [Provider docs](https://asana.com/support)

```ts
asana.deleteAllocation(input: {
  /** Globally unique identifier for the allocation. */
  allocation_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /allocations/{allocation_gid}` · `deleteAllocation`</sub>

## `asana.getAllocation`

Get an allocation — [Provider docs](https://asana.com/support)

```ts
asana.getAllocation(input: {
  /** Globally unique identifier for the allocation. */
  allocation_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_by" | "created_by.name" | "effort" | "effort.type" | "effort.value" | "end_date" | "parent" | "parent.name" | "resource_subtype" | "start_date")[];
}): Promise<{ data?: AllocationResponse }>
```

<sub>`GET /allocations/{allocation_gid}` · `getAllocation`</sub>

## `asana.updateAllocation`

Update an allocation — [Provider docs](https://asana.com/support)

```ts
asana.updateAllocation(input: {
  data?: AllocationRequest;
  /** Globally unique identifier for the allocation. */
  allocation_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("assignee" | "assignee.name" | "created_by" | "created_by.name" | "effort" | "effort.type" | "effort.value" | "end_date" | "parent" | "parent.name" | "resource_subtype" | "start_date")[];
}): Promise<{ data?: AllocationResponse }>
```

<sub>`PUT /allocations/{allocation_gid}` · `updateAllocation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
