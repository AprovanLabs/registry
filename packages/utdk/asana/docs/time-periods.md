# Time Periods

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTimePeriods`

Get time periods — [Provider docs](https://asana.com/support)

```ts
asana.getTimePeriods(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** ISO 8601 date string */
  start_on?: string;
  /** ISO 8601 date string */
  end_on?: string;
  /** Globally unique identifier for the workspace. */
  workspace: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("display_name" | "end_on" | "offset" | "parent" | "parent.display_name" | "parent.end_on" | "parent.period" | "parent.start_on" | "path" | "period" | "start_on" | "uri")[];
}): Promise<{ data?: (TimePeriodCompact)[]; next_page?: NextPage }>
```

<sub>`GET /time_periods` · `getTimePeriods`</sub>

## `asana.getTimePeriod`

Get a time period — [Provider docs](https://asana.com/support)

```ts
asana.getTimePeriod(input: {
  /** Globally unique identifier for the time period. */
  time_period_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("display_name" | "end_on" | "parent" | "parent.display_name" | "parent.end_on" | "parent.period" | "parent.start_on" | "period" | "start_on")[];
}): Promise<{ data?: TimePeriodResponse }>
```

<sub>`GET /time_periods/{time_period_gid}` · `getTimePeriod`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
