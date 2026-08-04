# Pipelines

3 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getPipelineConversionStatistics`

Get deals conversion rates in pipeline

```ts
pipedrive.getPipelineConversionStatistics(input: {
  /** The ID of the pipeline */
  id: number;
  /** The start of the period. Date in format of YYYY-MM-DD. */
  start_date: string;
  /** The end of the period. Date in format of YYYY-MM-DD. */
  end_date: string;
  /** The ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used. */
  user_id?: number;
}): Promise<{ success?: boolean } & { data?: { stage_conversions?: ({ from_stage_id?: number; to_stage_id?: number; conversion_rate?: number })[]; won_conversion?: number; lost_conversion?: number } }>
```

<sub>`GET /pipelines/{id}/conversion_statistics` · `getPipelineConversionStatistics`</sub>

## `pipedrive.getPipelineDeals`

Get deals in a pipeline

```ts
pipedrive.getPipelineDeals(input: {
  /** The ID of the pipeline */
  id: number;
  /** If supplied, only deals matching the given filter will be returned */
  filter_id?: number;
  /** If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. */
  user_id?: number;
  /** If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned */
  everyone?: 0 | 1;
  /** If supplied, only deals within the given stage will be returned */
  stage_id?: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Whether to include a summary of the pipeline in the `additional_data` or not */
  get_summary?: 0 | 1;
  /** The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled. */
  totals_convert_currency?: string;
}): Promise<{ success?: boolean; data?: ({ id?: number; creator_user_id?: number; user_id?: number; person_id?: number; org_id?: number } & { stage_id?: number; title?: string; value?: number; currency?: string; add_time?: string; update_time?: string; stage_change_time?: string; active?: boolean; deleted?: boolean; is_archived?: boolean; status?: string; probability?: number | null; next_activity_date?: str...>
```

<sub>`GET /pipelines/{id}/deals` · `getPipelineDeals`</sub>

## `pipedrive.getPipelineMovementStatistics`

Get deals movements in pipeline

```ts
pipedrive.getPipelineMovementStatistics(input: {
  /** The ID of the pipeline */
  id: number;
  /** The start of the period. Date in format of YYYY-MM-DD. */
  start_date: string;
  /** The end of the period. Date in format of YYYY-MM-DD. */
  end_date: string;
  /** The ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used. */
  user_id?: number;
}): Promise<{ success?: boolean } & { data?: { movements_between_stages?: { count?: number }; new_deals?: { count?: number; deals_ids?: (number)[]; values?: { CURRENCY_ID?: number }; formatted_values?: { CURRENCY_ID?: string } }; deals_left_open?: { count?: number; deals_ids?: (number)[]; values?: { CURRENCY_ID?: number }; formatted_values?: { CURRENCY_ID?: string } }; won_deals?: { count?: number; deals_ids...>
```

<sub>`GET /pipelines/{id}/movement_statistics` · `getPipelineMovementStatistics`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
