# Library Analytics

6 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getLibraryAnalyticsComponentActions`

Get library analytics component action data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsComponentActions(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "component" | "team";
  /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
  start_date?: string;
  /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
  end_date?: string;
}): Promise<{ rows: (LibraryAnalyticsComponentActionsByAsset)[] | (LibraryAnalyticsComponentActionsByTeam)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/component/actions` · `getLibraryAnalyticsComponentActions`</sub>

## `figma.getLibraryAnalyticsComponentUsages`

Get library analytics component usage data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsComponentUsages(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "component" | "file";
}): Promise<{ rows: (LibraryAnalyticsComponentUsagesByAsset)[] | (LibraryAnalyticsComponentUsagesByFile)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/component/usages` · `getLibraryAnalyticsComponentUsages`</sub>

## `figma.getLibraryAnalyticsStyleActions`

Get library analytics style action data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsStyleActions(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "style" | "team";
  /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
  start_date?: string;
  /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
  end_date?: string;
}): Promise<{ rows: (LibraryAnalyticsStyleActionsByAsset)[] | (LibraryAnalyticsStyleActionsByTeam)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/style/actions` · `getLibraryAnalyticsStyleActions`</sub>

## `figma.getLibraryAnalyticsStyleUsages`

Get library analytics style usage data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsStyleUsages(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "style" | "file";
}): Promise<{ rows: (LibraryAnalyticsStyleUsagesByAsset)[] | (LibraryAnalyticsStyleUsagesByFile)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/style/usages` · `getLibraryAnalyticsStyleUsages`</sub>

## `figma.getLibraryAnalyticsVariableActions`

Get library analytics variable action data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsVariableActions(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "variable" | "team";
  /** ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior. */
  start_date?: string;
  /** ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week. */
  end_date?: string;
}): Promise<{ rows: (LibraryAnalyticsVariableActionsByAsset)[] | (LibraryAnalyticsVariableActionsByTeam)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/variable/actions` · `getLibraryAnalyticsVariableActions`</sub>

## `figma.getLibraryAnalyticsVariableUsages`

Get library analytics variable usage data. — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getLibraryAnalyticsVariableUsages(input: {
  /** File key of the library to fetch analytics data for. */
  file_key: string;
  /** Cursor indicating what page of data to fetch. Obtained from prior API call. */
  cursor?: string;
  /** A dimension to group returned analytics data by. */
  group_by: "variable" | "file";
}): Promise<{ rows: (LibraryAnalyticsVariableUsagesByAsset)[] | (LibraryAnalyticsVariableUsagesByFile)[]; next_page: boolean; cursor?: string }>
```

<sub>`GET /v1/analytics/libraries/{file_key}/variable/usages` · `getLibraryAnalyticsVariableUsages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
