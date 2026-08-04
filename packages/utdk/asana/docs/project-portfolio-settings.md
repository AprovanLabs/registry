# Project Portfolio Settings

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getProjectPortfolioSettingsForPortfolio`

Get project portfolio settings for a portfolio — [Provider docs](https://asana.com/support)

```ts
asana.getProjectPortfolioSettingsForPortfolio(input: {
  /** Globally unique identifier for the portfolio. */
  portfolio_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_access_control_inherited" | "offset" | "path" | "portfolio" | "project" | "uri")[];
}): Promise<{ data?: (ProjectPortfolioSettingCompact)[]; next_page?: NextPage }>
```

<sub>`GET /portfolios/{portfolio_gid}/project_portfolio_settings` · `getProjectPortfolioSettingsForPortfolio`</sub>

## `asana.getProjectPortfolioSetting`

Get a project portfolio setting — [Provider docs](https://asana.com/support)

```ts
asana.getProjectPortfolioSetting(input: {
  /** Globally unique identifier for the project portfolio setting. */
  project_portfolio_setting_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_access_control_inherited" | "portfolio" | "project")[];
}): Promise<{ data?: ProjectPortfolioSettingResponse }>
```

<sub>`GET /project_portfolio_settings/{project_portfolio_setting_gid}` · `getProjectPortfolioSetting`</sub>

## `asana.updateProjectPortfolioSetting`

Update a project portfolio setting — [Provider docs](https://asana.com/support)

```ts
asana.updateProjectPortfolioSetting(input: {
  data?: ProjectPortfolioSettingUpdateRequest;
  /** Globally unique identifier for the project portfolio setting. */
  project_portfolio_setting_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_access_control_inherited" | "portfolio" | "project")[];
}): Promise<{ data?: ProjectPortfolioSettingResponse }>
```

<sub>`PUT /project_portfolio_settings/{project_portfolio_setting_gid}` · `updateProjectPortfolioSetting`</sub>

## `asana.getProjectPortfolioSettingsForProject`

Get project portfolio settings for a project — [Provider docs](https://asana.com/support)

```ts
asana.getProjectPortfolioSettingsForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("created_at" | "is_access_control_inherited" | "offset" | "path" | "portfolio" | "project" | "uri")[];
}): Promise<{ data?: (ProjectPortfolioSettingCompact)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/project_portfolio_settings` · `getProjectPortfolioSettingsForProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
