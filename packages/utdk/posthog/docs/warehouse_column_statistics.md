# Warehouse Column Statistics

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseColumnStatisticsList`

Read per-column data statistics (null fraction, min/max, row count) for warehouse tables. Statistics are computed automatically after a sync and surfaced to the AI agent so it can write better queries. They are system-owned and read-only here. List can be filtered to one table with `?table_id=<uuid>`.

```ts
posthog.warehouseColumnStatisticsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; table: string; column_name: string; column_type: string; row_count: number; null_count: number; null_fraction: number; min_value: string; max_value: string; has_min_max: boolean; computed_at: string; computed_for_delta_version: number; stats_basis: string; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/warehouse_column_statistics/` · `warehouse_column_statistics_list`</sub>

## `posthog.warehouseColumnStatisticsRetrieve`

Read per-column data statistics (null fraction, min/max, row count) for warehouse tables. Statistics are computed automatically after a sync and surfaced to the AI agent so it can write better queries. They are system-owned and read-only here. List can be filtered to one table with `?table_id=<uuid>`.

```ts
posthog.warehouseColumnStatisticsRetrieve(): Promise<{ id: string; table: string; column_name: string; column_type: string; row_count: number; null_count: number; null_fraction: number; min_value: string; max_value: string; has_min_max: boolean; computed_at: string; computed_for_delta_version: number; stats_basis: string; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/warehouse_column_statistics/{id}/` · `warehouse_column_statistics_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
