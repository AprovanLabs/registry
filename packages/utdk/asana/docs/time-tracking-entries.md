# Time Tracking Entries

6 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTimeTrackingEntriesForTask`

Get time tracking entries for a task — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingEntriesForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("attributable_to" | "attributable_to.name" | "categories" | "categories.color" | "categories.name" | "created_by" | "created_by.name" | "duration_minutes" | "entered_on" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (TimeTrackingEntryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/time_tracking_entries` · `getTimeTrackingEntriesForTask`</sub>

## `asana.createTimeTrackingEntry`

Create a time tracking entry — [Provider docs](https://asana.com/support)

```ts
asana.createTimeTrackingEntry(input: {
  data?: CreateTimeTrackingEntryRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "attributable_to" | "attributable_to.name" | "billable_status" | "categories" | "categories.color" | "categories.name" | "created_at" | "created_by" | "created_by.name" | "description" | "duration_minutes" | "entered_on" | "task" | "task.created_by" | "task.name" | "task.resource_subtype")[];
}): Promise<{ data?: TimeTrackingEntryBase }>
```

<sub>`POST /tasks/{task_gid}/time_tracking_entries` · `createTimeTrackingEntry`</sub>

## `asana.getTimeTrackingEntries`

Get multiple time tracking entries — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingEntries(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the task to filter time tracking entries by. */
  task?: string;
  /** Globally unique identifier for the project the time tracking entries are attributed to. */
  attributable_to?: string;
  /** Globally unique identifier for the portfolio to filter time tracking entries by. */
  portfolio?: string;
  /** Globally unique identifier for the user to filter time tracking entries by. */
  user?: string;
  /** Globally unique identifier for the workspace. At least one of `entered_on_start_date` or `entered_on_end_date` must be provided when filtering by workspace. */
  workspace?: string;
  /** The start date for filtering time tracking entries by when they were entered. */
  entered_on_start_date?: string;
  /** The end date for filtering time tracking entries by when they were entered. */
  entered_on_end_date?: string;
  /** Globally unique identifier for the timesheet approval status to filter time tracking entries by. */
  timesheet_approval_status?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("attributable_to" | "attributable_to.name" | "categories" | "categories.color" | "categories.name" | "created_by" | "created_by.name" | "duration_minutes" | "entered_on" | "offset" | "path" | "uri")[];
}): Promise<{ data?: (TimeTrackingEntryCompact)[]; next_page?: NextPage }>
```

<sub>`GET /time_tracking_entries` · `getTimeTrackingEntries`</sub>

## `asana.deleteTimeTrackingEntry`

Delete a time tracking entry — [Provider docs](https://asana.com/support)

```ts
asana.deleteTimeTrackingEntry(input: {
  /** Globally unique identifier for the time tracking entry. */
  time_tracking_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /time_tracking_entries/{time_tracking_entry_gid}` · `deleteTimeTrackingEntry`</sub>

## `asana.getTimeTrackingEntry`

Get a time tracking entry — [Provider docs](https://asana.com/support)

```ts
asana.getTimeTrackingEntry(input: {
  /** Globally unique identifier for the time tracking entry. */
  time_tracking_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "attributable_to" | "attributable_to.name" | "billable_status" | "categories" | "categories.color" | "categories.name" | "created_at" | "created_by" | "created_by.name" | "description" | "duration_minutes" | "entered_on" | "task" | "task.created_by" | "task.name" | "task.resource_subtype")[];
}): Promise<{ data?: TimeTrackingEntryBase }>
```

<sub>`GET /time_tracking_entries/{time_tracking_entry_gid}` · `getTimeTrackingEntry`</sub>

## `asana.updateTimeTrackingEntry`

Update a time tracking entry — [Provider docs](https://asana.com/support)

```ts
asana.updateTimeTrackingEntry(input: {
  data?: UpdateTimeTrackingEntryRequest;
  /** Globally unique identifier for the time tracking entry. */
  time_tracking_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "attributable_to" | "attributable_to.name" | "billable_status" | "categories" | "categories.color" | "categories.name" | "created_at" | "created_by" | "created_by.name" | "description" | "duration_minutes" | "entered_on" | "task" | "task.created_by" | "task.name" | "task.resource_subtype")[];
}): Promise<{ data?: TimeTrackingEntryBase }>
```

<sub>`PUT /time_tracking_entries/{time_tracking_entry_gid}` · `updateTimeTrackingEntry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
