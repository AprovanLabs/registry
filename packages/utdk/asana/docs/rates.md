# Rates

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getRates`

Get multiple rates — [Provider docs](https://asana.com/support)

```ts
asana.getRates(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Globally unique identifier for `project`. */
  parent?: string;
  /** Globally unique identifier for `user` or `placeholder`. */
  resource?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("offset" | "path" | "uri")[];
}): Promise<{ data?: (RateOrPlaceholderCompact)[]; next_page?: NextPage }>
```

<sub>`GET /rates` · `getRates`</sub>

## `asana.createRate`

Create a rate — [Provider docs](https://asana.com/support)

```ts
asana.createRate(input: {
  data?: RateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "currency_code" | "parent" | "parent.name" | "rate" | "resource" | "resource.name")[];
}): Promise<{ data?: RateResponse }>
```

<sub>`POST /rates` · `createRate`</sub>

## `asana.deleteRate`

Delete a rate — [Provider docs](https://asana.com/support)

```ts
asana.deleteRate(input: {
  /** Globally unique identifier for the rate. */
  rate_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /rates/{rate_gid}` · `deleteRate`</sub>

## `asana.getRate`

Get a rate — [Provider docs](https://asana.com/support)

```ts
asana.getRate(input: {
  /** Globally unique identifier for the rate. */
  rate_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "currency_code" | "parent" | "parent.name" | "rate" | "resource" | "resource.name")[];
}): Promise<{ data?: RateResponse }>
```

<sub>`GET /rates/{rate_gid}` · `getRate`</sub>

## `asana.updateRate`

Update a rate — [Provider docs](https://asana.com/support)

```ts
asana.updateRate(input: {
  data?: RateUpdateRequest;
  /** Globally unique identifier for the rate. */
  rate_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_by" | "created_by.name" | "currency_code" | "parent" | "parent.name" | "rate" | "resource" | "resource.name")[];
}): Promise<{ data?: RateResponse }>
```

<sub>`PUT /rates/{rate_gid}` · `updateRate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
