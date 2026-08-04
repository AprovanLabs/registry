# Custom Types

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getCustomTypes`

Get all custom types associated with an object — [Provider docs](https://asana.com/support)

```ts
asana.getCustomTypes(input: {
  /** Globally unique identifier for the project, which is used as a filter when retrieving all custom types. */
  project: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name" | "offset" | "path" | "status_options" | "status_options.color" | "status_options.completion_state" | "status_options.enabled" | "status_options.name" | "uri")[];
}): Promise<{ data?: (CustomTypeResponse)[]; next_page?: NextPage }>
```

<sub>`GET /custom_types` · `getCustomTypes`</sub>

## `asana.getCustomType`

Get a custom type — [Provider docs](https://asana.com/support)

```ts
asana.getCustomType(input: {
  /** Globally unique identifier for the custom type. */
  custom_type_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name" | "status_options" | "status_options.color" | "status_options.completion_state" | "status_options.enabled" | "status_options.name")[];
}): Promise<{ data?: CustomTypeResponse }>
```

<sub>`GET /custom_types/{custom_type_gid}` · `getCustomType`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
