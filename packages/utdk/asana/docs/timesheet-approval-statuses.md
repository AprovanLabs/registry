# Timesheet Approval Statuses

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTimesheetApprovalStatuses`

Get multiple timesheet approval statuses — [Provider docs](https://asana.com/support)

```ts
asana.getTimesheetApprovalStatuses(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the workspace. */
  workspace: string;
  /** Globally unique identifier for the user to filter timesheet approval statuses by. */
  user?: string;
  /** The start date for filtering timesheet approval statuses. */
  from_date?: string;
  /** The end date for filtering timesheet approval statuses. */
  to_date?: string;
  /** Filter by approval status. Can be one or more of draft, submitted, approved, or rejected. */
  approval_statuses?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "created_at" | "end_date" | "offset" | "path" | "start_date" | "uri" | "user" | "user.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TimesheetApprovalStatusCompact)[]; next_page?: NextPage }>
```

<sub>`GET /timesheet_approval_statuses` · `getTimesheetApprovalStatuses`</sub>

## `asana.createTimesheetApprovalStatus`

Create a timesheet approval status — [Provider docs](https://asana.com/support)

```ts
asana.createTimesheetApprovalStatus(input: {
  data?: CreateTimesheetApprovalStatusRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "created_at" | "end_date" | "start_date" | "user" | "user.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TimesheetApprovalStatusResponse }>
```

<sub>`POST /timesheet_approval_statuses` · `createTimesheetApprovalStatus`</sub>

## `asana.getTimesheetApprovalStatus`

Get a timesheet approval status — [Provider docs](https://asana.com/support)

```ts
asana.getTimesheetApprovalStatus(input: {
  /** Globally unique identifier for the timesheet approval status. */
  timesheet_approval_status_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "created_at" | "end_date" | "start_date" | "user" | "user.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TimesheetApprovalStatusResponse }>
```

<sub>`GET /timesheet_approval_statuses/{timesheet_approval_status_gid}` · `getTimesheetApprovalStatus`</sub>

## `asana.updateTimesheetApprovalStatus`

Update a timesheet approval status — [Provider docs](https://asana.com/support)

```ts
asana.updateTimesheetApprovalStatus(input: {
  data?: UpdateTimesheetApprovalStatusRequest;
  /** Globally unique identifier for the timesheet approval status. */
  timesheet_approval_status_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "created_at" | "end_date" | "start_date" | "user" | "user.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TimesheetApprovalStatusResponse }>
```

<sub>`PUT /timesheet_approval_statuses/{timesheet_approval_status_gid}` · `updateTimesheetApprovalStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
