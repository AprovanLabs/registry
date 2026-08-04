# Portfolio Memberships

3 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getPortfolioMemberships`

Get multiple portfolio memberships — [Provider docs](https://asana.com/support)

```ts
asana.getPortfolioMemberships(input: {
  /** The portfolio to filter results on. */
  portfolio?: string;
  /** The workspace to filter results on. */
  workspace?: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("access_level" | "offset" | "path" | "portfolio" | "portfolio.name" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (DeprecatedPortfolioMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /portfolio_memberships` · `getPortfolioMemberships`</sub>

## `asana.getPortfolioMembership`

Get a portfolio membership — [Provider docs](https://asana.com/support)

```ts
asana.getPortfolioMembership(input: {
  portfolio_membership_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("access_level" | "portfolio" | "portfolio.name" | "user" | "user.name")[];
}): Promise<{ data?: DeprecatedPortfolioMembershipResponse }>
```

<sub>`GET /portfolio_memberships/{portfolio_membership_gid}` · `getPortfolioMembership`</sub>

## `asana.getPortfolioMembershipsForPortfolio`

Get memberships from a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.getPortfolioMembershipsForPortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("access_level" | "offset" | "path" | "portfolio" | "portfolio.name" | "uri" | "user" | "user.name")[];
}): Promise<{ data?: (DeprecatedPortfolioMembershipCompact)[]; next_page?: NextPage }>
```

<sub>`GET /portfolios/{portfolio_gid}/portfolio_memberships` · `getPortfolioMembershipsForPortfolio`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
