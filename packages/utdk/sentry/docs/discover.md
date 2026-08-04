# Discover

9 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationDiscoverSavedQueries`

List an Organization's Discover Saved Queries

```ts
sentry.listOrganizationDiscoverSavedQueries(): Promise<({ environment?: (string)[]; query?: string; fields?: (string)[]; widths?: (string)[]; conditions?: (string)[]; aggregations?: (string)[]; range?: string; start?: string; end?: string; orderby?: string; limit?: string; yAxis?: (string)[]; display?: string; topEvents?: number; interval?: string; exploreQuery?: { [key: string]: unknown | undefined }; id: string; name: string; projects: (number)[]; ...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/discover/saved/` · `listOrganizationDiscoverSavedQueries`</sub>

## `sentry.createOrganizationDiscoverSavedQuery`

Create a New Saved Query

```ts
sentry.createOrganizationDiscoverSavedQuery(): Promise<{ environment?: (string)[]; query?: string; fields?: (string)[]; widths?: (string)[]; conditions?: (string)[]; aggregations?: (string)[]; range?: string; start?: string; end?: string; orderby?: string; limit?: string; yAxis?: (string)[]; display?: string; topEvents?: number; interval?: string; exploreQuery?: { [key: string]: unknown | undefined }; id: string; name: string; projects: (number)[]; v...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/discover/saved/` · `createOrganizationDiscoverSavedQuery`</sub>

## `sentry.deleteOrganizationDiscoverSavedQuery`

Delete an Organization's Discover Saved Query

```ts
sentry.deleteOrganizationDiscoverSavedQuery(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/discover/saved/{query_id}/` · `deleteOrganizationDiscoverSavedQuery`</sub>

## `sentry.getOrganizationDiscoverSavedQuery`

Retrieve an Organization's Discover Saved Query

```ts
sentry.getOrganizationDiscoverSavedQuery(): Promise<{ environment?: (string)[]; query?: string; fields?: (string)[]; widths?: (string)[]; conditions?: (string)[]; aggregations?: (string)[]; range?: string; start?: string; end?: string; orderby?: string; limit?: string; yAxis?: (string)[]; display?: string; topEvents?: number; interval?: string; exploreQuery?: { [key: string]: unknown | undefined }; id: string; name: string; projects: (number)[]; v...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/discover/saved/{query_id}/` · `getOrganizationDiscoverSavedQuery`</sub>

## `sentry.updateOrganizationDiscoverSavedQuery`

Edit an Organization's Discover Saved Query

```ts
sentry.updateOrganizationDiscoverSavedQuery(): Promise<{ environment?: (string)[]; query?: string; fields?: (string)[]; widths?: (string)[]; conditions?: (string)[]; aggregations?: (string)[]; range?: string; start?: string; end?: string; orderby?: string; limit?: string; yAxis?: (string)[]; display?: string; topEvents?: number; interval?: string; exploreQuery?: { [key: string]: unknown | undefined }; id: string; name: string; projects: (number)[]; v...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/discover/saved/{query_id}/` · `updateOrganizationDiscoverSavedQuery`</sub>

## `sentry.listOrganizationTags`

List an Organization's Tags

```ts
sentry.listOrganizationTags(): Promise<({ uniqueValues?: number | null; totalValues?: number | null; topValues?: ({ query?: string | null; key: string; name: string; value: string | null; count: number | null; lastSeen: string | null; firstSeen: string | null })[] | null; key: string; name: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/tags/` · `listOrganizationTags`</sub>

## `sentry.listOrganizationTraceItemAttributes`

List Trace Item Attributes

```ts
sentry.listOrganizationTraceItemAttributes(): Promise<({ key: string; name: string; secondaryAliases?: (string)[]; attributeSource: { source_type: "sentry" | "user"; is_transformed_alias?: boolean }; attributeType: "string" | "number" | "boolean"; context?: { isConvention?: boolean; isCustom?: boolean; brief?: string; isDeprecated?: boolean; details?: (string)[]; examples?: (unknown)[]; replacementAttribute?: string } })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/trace-items/attributes/` · `listOrganizationTraceItemAttributes`</sub>

## `sentry.getOrganizationTraceMeta`

Retrieve Trace Metadata

```ts
sentry.getOrganizationTraceMeta(): Promise<{ uptimeCount?: number; errorsCount: number; logsCount: number; metricsCount: number; performanceIssuesCount: number; spansCount: number; transactionChildCountMap: ({ [key: string]: unknown | undefined })[]; spansCountMap: { [key: string]: number | undefined } }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/trace-meta/{trace_id}/` · `getOrganizationTraceMeta`</sub>

## `sentry.getOrganizationTrace`

Retrieve a Trace

```ts
sentry.getOrganizationTrace(): Promise<({ description: string; event_id: string; project_id: number; project_slug: string; transaction: string; event_type: "span"; children: ({ description: string; event_id: string; project_id: number; project_slug: string; transaction: string })[]; errors: ({ description: string; event_id: string; project_id: number; project_slug: string; transaction: string; event_type: "error" | "occurrence"; issue...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/trace/{trace_id}/` · `getOrganizationTrace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
