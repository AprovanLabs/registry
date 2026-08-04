# Views (Beta)

9 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getLinkedViews`

Get linked views for a given resource — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getLinkedViews(input: {
  projectKey: string;
  resourceType: "flags" | "segments" | "aiConfigs";
  resourceKey: string;
  /** Environment ID. Required when resourceType is 'segments' */
  environmentId?: string;
  /** The number of views to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<Views>
```

<sub>`GET /api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey}` · `getLinkedViews`</sub>

## `launchdarkly.getViews`

List views — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getViews(input: {
  projectKey: string;
  /** A sort to apply to the list of views. */
  sort?: "key" | "name" | "updatedAt";
  /** The number of views to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list of views. Supports the following fields and operators: `name` (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith, contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView` (equals). */
  filter?: string;
  /** A comma-separated list of fields to expand. */
  expand?: ("flagsSummary" | "segmentsSummary" | "metricsSummary" | "aiConfigsSummary" | "resourceSummary")[];
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<Views>
```

<sub>`GET /api/v2/projects/{projectKey}/views` · `getViews`</sub>

## `launchdarkly.createView`

Create view — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createView(input: {
  /** Unique key for the view within the account/project */
  key: string;
  /** Human-readable name for the view */
  name: string;
  /** Optional detailed description of the view */
  description?: string;
  /** Member ID of the maintainer for this view. Only one of `maintainerId` or `maintainerTeamKey` can be specified. */
  maintainerId?: string;
  /** Key of the maintainer team for this view. Only one of `maintainerId` or `maintainerTeamKey` can be specified. */
  maintainerTeamKey?: string;
  /** Tags associated with this view */
  tags?: (string)[];
  projectKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<View>
```

<sub>`POST /api/v2/projects/{projectKey}/views` · `createView`</sub>

## `launchdarkly.deleteView`

Delete view — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteView(input: {
  projectKey: string;
  viewKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/views/{viewKey}` · `deleteView`</sub>

## `launchdarkly.getView`

Get view — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getView(input: {
  projectKey: string;
  viewKey: string;
  /** A sort to apply to the list of views. */
  sort?: "key" | "name" | "updatedAt";
  /** The number of views to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list of views. Supports the following fields and operators: `name` (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith, contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView` (equals). */
  filter?: string;
  /** A comma-separated list of fields to expand. */
  expand?: ("allFlags" | "allSegments" | "allMetrics" | "allAIConfigs" | "allResources" | "maintainer" | "flagsSummary" | "segmentsSummary" | "metricsSummary" | "aiConfigsSummary" | "resourceSummary")[];
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<View>
```

<sub>`GET /api/v2/projects/{projectKey}/views/{viewKey}` · `getView`</sub>

## `launchdarkly.updateView`

Update view — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateView(input: {
  /** Human-readable name for the view */
  name?: string;
  /** Optional detailed description of the view */
  description?: string;
  /** Member ID of the maintainer for this view. Only one of `maintainerId` or `maintainerTeamKey` can be specified. */
  maintainerId?: string;
  /** Key of the maintainer team for this view. Only one of `maintainerId` or `maintainerTeamKey` can be specified. */
  maintainerTeamKey?: string;
  /** Tags associated with this view */
  tags?: (string)[];
  projectKey: string;
  viewKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<View>
```

<sub>`PATCH /api/v2/projects/{projectKey}/views/{viewKey}` · `updateView`</sub>

## `launchdarkly.unlinkResource`

Unlink resource — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.unlinkResource(input: {
  body: ViewLinkRequest;
  projectKey: string;
  viewKey: string;
  resourceType: "flags" | "segments" | "aiConfigs";
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<UnlinkResourceSuccessResponse>
```

<sub>`DELETE /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}` · `unlinkResource`</sub>

## `launchdarkly.linkResource`

Link resource — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.linkResource(input: {
  body: ViewLinkRequest;
  projectKey: string;
  viewKey: string;
  resourceType: "flags" | "segments" | "aiConfigs";
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<LinkResourceSuccessResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}` · `linkResource`</sub>

## `launchdarkly.getLinkedResources`

Get linked resources — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getLinkedResources(input: {
  projectKey: string;
  viewKey: string;
  resourceType: "flags" | "segments" | "aiConfigs";
  /** The number of views to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Field to sort by. Default field is `linkedAt`, default order is ascending. */
  sort?: "linkedAt" | "name";
  /** Case-insensitive search query for linked resources. Matches resource key and, when expanded, resource name. */
  query?: string;
  /** Optional resource filter expression for linked resources. - Supported for `flags` and `segments` resource types. - Uses the same syntax as link/unlink and list endpoints. - For `segments`, `environmentId` is required when `filter` is provided.  */
  filter?: string;
  /** A comma-separated list of fields to expand. */
  expand?: ("maintainer" | "resourceDetails")[];
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<ViewLinkedResources>
```

<sub>`GET /api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType}` · `getLinkedResources`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
