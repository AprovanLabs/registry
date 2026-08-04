# Insights Pull Requests (Beta)

1 operation · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getPullRequests`

List pull requests — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getPullRequests(input: {
  /** The project key */
  projectKey: string;
  /** Required if you are using the <code>sort</code> parameter's <code>leadTime</code> option to sort pull requests. */
  environmentKey?: string;
  /** Filter the results to pull requests deployed to a comma separated list of applications */
  applicationKey?: string;
  /** Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`, `deployed`. */
  status?: string;
  /** Filter list of pull requests by title or author */
  query?: string;
  /** The number of pull requests to return. Default is 20. Maximum allowed is 100. */
  limit?: number;
  /** Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`. */
  expand?: string;
  /** Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc) and `-leadTime` (desc). When query option is excluded, default sort is by created or merged date. */
  sort?: string;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: string;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: string;
  /** Identifier used for pagination */
  after?: string;
  /** Identifier used for pagination */
  before?: string;
}): Promise<PullRequestCollectionRep>
```

<sub>`GET /api/v2/engineering-insights/pull-requests` · `getPullRequests`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
