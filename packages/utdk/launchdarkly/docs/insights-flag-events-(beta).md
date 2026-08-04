# Insights Flag Events (Beta)

1 operation · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFlagEvents`

List flag events — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagEvents(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** Filter events by flag key */
  query?: string;
  /** Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large` */
  impactSize?: string;
  /** Filter events to those associated with an experiment (`true`) or without an experiment (`false`) */
  hasExperiments?: boolean;
  /** Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude` */
  global?: string;
  /** Expand properties in response. Options: `experiments` */
  expand?: string;
  /** The number of deployments to return. Default is 20. Maximum allowed is 100. */
  limit?: number;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: number;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: number;
  /** Identifier used for pagination */
  after?: string;
  /** Identifier used for pagination */
  before?: string;
}): Promise<FlagEventCollectionRep>
```

<sub>`GET /api/v2/engineering-insights/flag-events` · `getFlagEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
