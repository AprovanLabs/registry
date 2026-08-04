# Insights Scores (Beta)

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.createInsightGroup`

Create insight group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createInsightGroup(input: {
  /** The name of the insight group */
  name: string;
  /** The key of the insight group */
  key: string;
  /** The projectKey to be associated with the insight group */
  projectKey: string;
  /** The environmentKey to be associated with the insight group */
  environmentKey: string;
  /** The application keys to associate with the insight group. If not provided, the insight group will include data from all applications. */
  applicationKeys?: (string)[];
}): Promise<InsightGroup>
```

<sub>`POST /api/v2/engineering-insights/insights/group` · `createInsightGroup`</sub>

## `launchdarkly.getInsightGroups`

List insight groups — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getInsightGroups(input: {
  /** The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Sort flag list by field. Prefix field with <code>-</code> to sort in descending order. Allowed fields: name */
  sort?: string;
  /** Filter list of insights groups by name. */
  query?: string;
  /** Options: `scores`, `environment`, `metadata` */
  expand?: string;
}): Promise<InsightGroupCollection>
```

<sub>`GET /api/v2/engineering-insights/insights/groups` · `getInsightGroups`</sub>

## `launchdarkly.deleteInsightGroup`

Delete insight group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteInsightGroup(input: {
  /** The insight group key */
  insightGroupKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/engineering-insights/insights/groups/{insightGroupKey}` · `deleteInsightGroup`</sub>

## `launchdarkly.getInsightGroup`

Get insight group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getInsightGroup(input: {
  /** The insight group key */
  insightGroupKey: string;
  /** Options: `scores`, `environment` */
  expand?: string;
}): Promise<InsightGroup>
```

<sub>`GET /api/v2/engineering-insights/insights/groups/{insightGroupKey}` · `getInsightGroup`</sub>

## `launchdarkly.patchInsightGroup`

Patch insight group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchInsightGroup(input: {
  body: JsonPatch;
  /** The insight group key */
  insightGroupKey: string;
}): Promise<InsightGroup>
```

<sub>`PATCH /api/v2/engineering-insights/insights/groups/{insightGroupKey}` · `patchInsightGroup`</sub>

## `launchdarkly.getInsightsScores`

Get insight scores — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getInsightsScores(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
}): Promise<InsightScores>
```

<sub>`GET /api/v2/engineering-insights/insights/scores` · `getInsightsScores`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
