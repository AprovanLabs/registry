# Time Tracking Categories

6 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTimeTrackingCategories`

Get time tracking categories for a workspace — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingCategories(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the workspace. */
  workspace: string;
  /** Filter by archived status. If not provided, defaults to returning non-archived categories. */
  is_archived?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "is_archived" | "name" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (TimeTrackingCategoryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /time_tracking_categories` · `getTimeTrackingCategories`</sub>

## `asana.createTimeTrackingCategory`

Create a time tracking category — [Provider docs](https://asana.com/support)

```ts
asana.createTimeTrackingCategory(input: {
  data?: TimeTrackingCategoryCreateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "is_archived" | "name")[];
}): Promise<{ data?: TimeTrackingCategoryResponse }>
```

<sub>`POST /time_tracking_categories` · `createTimeTrackingCategory`</sub>

## `asana.deleteTimeTrackingCategory`

Delete a time tracking category — [Provider docs](https://asana.com/support)

```ts
asana.deleteTimeTrackingCategory(input: {
  /** Globally unique identifier for the time tracking category. */
  time_tracking_category_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /time_tracking_categories/{time_tracking_category_gid}` · `deleteTimeTrackingCategory`</sub>

## `asana.getTimeTrackingCategory`

Get a time tracking category — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingCategory(input: {
  /** Globally unique identifier for the time tracking category. */
  time_tracking_category_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "is_archived" | "name")[];
}): Promise<{ data?: TimeTrackingCategoryResponse }>
```

<sub>`GET /time_tracking_categories/{time_tracking_category_gid}` · `getTimeTrackingCategory`</sub>

## `asana.updateTimeTrackingCategory`

Update a time tracking category — [Provider docs](https://asana.com/support)

```ts
asana.updateTimeTrackingCategory(input: {
  data?: TimeTrackingCategoryUpdateRequest;
  /** Globally unique identifier for the time tracking category. */
  time_tracking_category_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("color" | "is_archived" | "name")[];
}): Promise<{ data?: TimeTrackingCategoryResponse }>
```

<sub>`PUT /time_tracking_categories/{time_tracking_category_gid}` · `updateTimeTrackingCategory`</sub>

## `asana.getTimeTrackingEntriesForTimeTrackingCategory`

Get time tracking entries for a time tracking category — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingEntriesForTimeTrackingCategory(input: {
  /** Globally unique identifier for the time tracking category. */
  time_tracking_category_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** The start date for filtering time tracking entries by their entry date. */
  start_date?: string;
  /** The end date for filtering time tracking entries by their entry date. */
  end_date?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("attributable_to" | "attributable_to.name" | "categories" | "categories.color" | "categories.name" | "created_by" | "created_by.name" | "duration_minutes" | "entered_on" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (TimeTrackingEntryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /time_tracking_categories/{time_tracking_category_gid}/time_tracking_entries` · `getTimeTrackingEntriesForTimeTrackingCategory`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
