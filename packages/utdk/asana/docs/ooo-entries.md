# Ooo Entries

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getOooEntries`

Get OOO entries for a user — [Provider docs](https://asana.com/support)

```ts
asana.getOooEntries(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for the user to filter OOO entries by. */
  user: string;
  /** Globally unique identifier for the workspace. */
  workspace: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** An ISO 8601 date string. Filters to OOO entries that overlap with or end after this date. */
  start_date?: string;
  /** An ISO 8601 date string. Filters to OOO entries that overlap with or start before this date. */
  end_date?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "end_date" | "offset" | "path" | "start_date" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (OooEntryResponse)[]; next_page?: NextPage }>
```

<sub>`GET /ooo_entries` · `getOooEntries`</sub>

## `asana.createOooEntry`

Create an OOO entry — [Provider docs](https://asana.com/support)

```ts
asana.createOooEntry(input: {
  data?: OooEntryCreateRequest & { [key: string]: unknown };
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "end_date" | "start_date" | "user" | "user.name")[];
}): Promise<{ data?: OooEntryResponse }>
```

<sub>`POST /ooo_entries` · `createOooEntry`</sub>

## `asana.deleteOooEntry`

Delete an OOO entry — [Provider docs](https://asana.com/support)

```ts
asana.deleteOooEntry(input: {
  /** Globally unique identifier for the OOO entry. */
  ooo_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /ooo_entries/{ooo_entry_gid}` · `deleteOooEntry`</sub>

## `asana.getOooEntry`

Get an OOO entry — [Provider docs](https://asana.com/support)

```ts
asana.getOooEntry(input: {
  /** Globally unique identifier for the OOO entry. */
  ooo_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "end_date" | "start_date" | "user" | "user.name")[];
}): Promise<{ data?: OooEntryResponse }>
```

<sub>`GET /ooo_entries/{ooo_entry_gid}` · `getOooEntry`</sub>

## `asana.updateOooEntry`

Update an OOO entry — [Provider docs](https://asana.com/support)

```ts
asana.updateOooEntry(input: {
  data?: OooEntryUpdateRequest;
  /** Globally unique identifier for the OOO entry. */
  ooo_entry_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "end_date" | "start_date" | "user" | "user.name")[];
}): Promise<{ data?: OooEntryResponse }>
```

<sub>`PUT /ooo_entries/{ooo_entry_gid}` · `updateOooEntry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
