# Contexts

10 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getContextKindsByProjectKey`

Get context kinds — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextKindsByProjectKey(input: {
  /** The project key */
  projectKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Options: `environmentObservations`. */
  expand?: string;
}): Promise<ContextKindsCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/context-kinds` · `getContextKindsByProjectKey`</sub>

## `launchdarkly.putContextKind`

Create or update context kind — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putContextKind(input: {
  /** The context kind name */
  name: string;
  /** The context kind description */
  description?: string;
  /** Alias for archived. */
  hideInTargeting?: boolean;
  /** Whether the context kind is archived. Archived context kinds are unavailable for targeting. */
  archived?: boolean;
  /** The context kind version. If not specified when the context kind is created, defaults to 1. */
  version?: number;
  /** The project key */
  projectKey: string;
  /** The context kind key */
  key: string;
}): Promise<UpsertResponseRep>
```

<sub>`PUT /api/v2/projects/{projectKey}/context-kinds/{key}` · `putContextKind`</sub>

## `launchdarkly.getContextAttributeNames`

Get context attribute names — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextAttributeNames(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). */
  filter?: string;
  /** Specifies the maximum number of items in the collection to return (max: 100, default: 100) */
  limit?: number;
}): Promise<ContextAttributeNamesCollection>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes` · `getContextAttributeNames`</sub>

## `launchdarkly.getContextAttributeValues`

Get context attribute values — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextAttributeValues(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The attribute name */
  attributeName: string;
  /** A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). */
  filter?: string;
  /** Specifies the maximum number of items in the collection to return (max: 100, default: 50) */
  limit?: number;
}): Promise<ContextAttributeValuesCollection>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}` · `getContextAttributeValues`</sub>

## `launchdarkly.deleteContextInstances`

Delete context instances — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteContextInstances(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The context instance ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}` · `deleteContextInstances`</sub>

## `launchdarkly.getContextInstances`

Get context instances — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextInstances(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The context instance ID */
  id: string;
  /** Specifies the maximum number of context instances to return (max: 50, default: 20) */
  limit?: number;
  /** Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. */
  continuationToken?: string;
  /** Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. */
  sort?: string;
  /** A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). */
  filter?: string;
  /** Specifies whether to include or omit the total count of matching context instances. Defaults to true. */
  includeTotalCount?: boolean;
}): Promise<ContextInstances>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}` · `getContextInstances`</sub>

## `launchdarkly.searchContextInstances`

Search for context instances — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.searchContextInstances(input: {
  /** A collection of context instance filters */
  filter?: string;
  /** Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying <code>ts</code> for this value, or descending order by specifying <code>-ts</code>. */
  sort?: string;
  /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
  limit?: number;
  /** Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the <code>next</code> link instead, because this value is an obfuscated string. */
  continuationToken?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Specifies whether to include or omit the total count of matching context instances. Defaults to true. */
  includeTotalCount?: boolean;
}, options?: { query?: { limit?: number; continuationToken?: string; sort?: string; filter?: string } }): Promise<ContextInstances>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search` · `searchContextInstances`</sub>

## `launchdarkly.getContexts`

Get contexts — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContexts(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The context kind */
  kind: string;
  /** The context key */
  key: string;
  /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
  limit?: number;
  /** Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. */
  continuationToken?: string;
  /** Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. */
  sort?: string;
  /** A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). */
  filter?: string;
  /** Specifies whether to include or omit the total count of matching contexts. Defaults to true. */
  includeTotalCount?: boolean;
}): Promise<Contexts>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key}` · `getContexts`</sub>

## `launchdarkly.searchContexts`

Search for contexts — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.searchContexts(input: {
  /** A collection of context filters */
  filter?: string;
  /** Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying <code>ts</code> for this value, or descending order by specifying <code>-ts</code>. */
  sort?: string;
  /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
  limit?: number;
  /** Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the <code>next</code> link instead, because this value is an obfuscated string. */
  continuationToken?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Specifies whether to include or omit the total count of matching contexts. Defaults to true. */
  includeTotalCount?: boolean;
}, options?: { query?: { limit?: number; continuationToken?: string; sort?: string; filter?: string } }): Promise<Contexts>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search` · `searchContexts`</sub>

## `launchdarkly.evaluateContextInstance`

Evaluate flags for context instance — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.evaluateContextInstance(input: {
  body: ContextInstance;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The number of feature flags to return. Defaults to -1, which returns all flags */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order */
  sort?: string;
  /** A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above. */
  filter?: string;
}): Promise<ContextInstanceEvaluations>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate` · `evaluateContextInstance`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
