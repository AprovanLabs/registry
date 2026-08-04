# Usage Metering

13 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getActiveBillingDimensions`

Get active billing dimensions for cost attribution — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getActiveBillingDimensions(): Promise<ActiveBillingDimensionsResponse>
```

<sub>`GET /api/v2/cost_by_tag/active_billing_dimensions` · `GetActiveBillingDimensions`</sub>

## `datadog.getMonthlyCostAttribution`

Get Monthly Cost Attribution — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMonthlyCostAttribution(input: {
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning in this month. */
  start_month: string;
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
  end_month?: string;
  /** Comma-separated list specifying cost types (e.g., `<billing_dimension>_on_demand_cost`, `<billing_dimension>_committed_cost`, `<billing_dimension>_total_cost`) and the proportions (`<billing_dimension>_percentage_in_org`, `<billing_dimension>_percentage_in_account`). Use `*` to retrieve all fields. Example: `infra_host_on_demand_cost,infra_host_percentage_in_account` To obtain the complete list of active billing dimensions that can be used to replace `<billing_dimension>` in the field names, make a request to the [Get active billing dimensions API](https://docs.datadoghq.com/api/latest/usage-metering/#get-active-billing-dimensions-for-cost-attribution). */
  fields: string;
  sort_direction?: SortDirection;
  /** The billing dimension to sort by. Always sorted by total cost. Example: `infra_host`. */
  sort_name?: string;
  /** Comma separated list of tag keys used to group cost. If no value is provided the cost will not be broken down by tags. To see which tags are available, look for the value of `tag_config_source` in the API response. */
  tag_breakdown_keys?: string;
  /** List following results with a next_record_id provided in the previous query. */
  next_record_id?: string;
  /** Include child org cost in the response. Defaults to `true`. */
  include_descendants?: boolean;
}): Promise<MonthlyCostAttributionResponse>
```

<sub>`GET /api/v2/cost_by_tag/monthly_cost_attribution` · `GetMonthlyCostAttribution`</sub>

## `datadog.getUsageApplicationSecurityMonitoring`

Get hourly usage for application security — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUsageApplicationSecurityMonitoring(input: {
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
  start_hr: string;
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
  end_hr?: string;
}): Promise<UsageApplicationSecurityMonitoringResponse>
```

<sub>`GET /api/v2/usage/application_security` · `GetUsageApplicationSecurityMonitoring`</sub>

## `datadog.getBillingDimensionMapping`

Get billing dimension mapping for usage endpoints — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getBillingDimensionMapping(input: {
  /** Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month. */
  "filter[month]"?: string;
  /** String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`. */
  "filter[view]"?: string;
}): Promise<BillingDimensionsMappingResponse>
```

<sub>`GET /api/v2/usage/billing_dimension_mapping` · `GetBillingDimensionMapping`</sub>

## `datadog.getCostByOrg`

Get cost across multi-org account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostByOrg(input: {
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. */
  start_month: string;
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
  end_month?: string;
}): Promise<CostByOrgResponse>
```

<sub>`GET /api/v2/usage/cost_by_org` · `GetCostByOrg`</sub>

## `datadog.getEstimatedCostByOrg`

Get estimated cost across your account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEstimatedCostByOrg(input: {
  /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`. */
  view?: string;
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. **Either start_month or start_date should be specified, but not both.** (start_month cannot go beyond two months in the past). Provide an `end_month` to view month-over-month cost. */
  start_month?: string;
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
  end_month?: string;
  /** Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. **Either start_month or start_date should be specified, but not both.** (start_date cannot go beyond two months in the past). Provide an `end_date` to view day-over-day cumulative cost. */
  start_date?: string;
  /** Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day. */
  end_date?: string;
  cost_aggregation?: CostAggregationType;
  /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
  include_connected_accounts?: boolean;
}): Promise<CostByOrgResponse>
```

<sub>`GET /api/v2/usage/estimated_cost` · `GetEstimatedCostByOrg`</sub>

## `datadog.getHistoricalCostByOrg`

Get historical cost across your account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getHistoricalCostByOrg(input: {
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. */
  start_month: string;
  /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`.  Defaults to `summary`. */
  view?: string;
  /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
  end_month?: string;
  /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
  include_connected_accounts?: boolean;
}): Promise<CostByOrgResponse>
```

<sub>`GET /api/v2/usage/historical_cost` · `GetHistoricalCostByOrg`</sub>

## `datadog.getHourlyUsage`

Get hourly usage by product family — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getHourlyUsage(input: {
  /** Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. */
  "filter[timestamp][start]": string;
  /** Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. */
  "filter[timestamp][end]"?: string;
  /** Comma separated list of product families to retrieve. Available families are `all`, `ai`, `analyzed_logs`, `application_performance_monitoring`, `application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`, `csm_container_enterprise`, `csm_host_enterprise`, `csm_host_pro`, `cspm`, `custom_events`, `cws`, `data_observability`, `dbm`, `digital_experience_management`, `error_tracking`, `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `infrastructure_monitoring`, `ingested_spans`, `iot`, `lambda_traced_invocations`, `llm_observability`, `log_management`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`, `observability_pipelines`, `online_archive`, `platform_capabilities`, `product_analytics`, `profiling`, `rum`, `rum_browser_sessions`, `rum_mobile_sessions`, `sds`, `security`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`, `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`. The following product family has been **deprecated**: `audit_logs`. */
  "filter[product_families]": string;
  /** Include child org usage in the response. Defaults to false. */
  "filter[include_descendants]"?: boolean;
  /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false. */
  "filter[include_connected_accounts]"?: boolean;
  /** Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false. */
  "filter[include_breakdown]"?: boolean;
  /** Comma separated list of product family versions to use in the format `product_family:version`. For example, `infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested product family. Currently all families have one version `1.0.0`. */
  "filter[versions]"?: string;
  /** Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified. */
  "page[limit]"?: number;
  /** List following results with a next_record_id provided in the previous query. */
  "page[next_record_id]"?: string;
}): Promise<HourlyUsageResponse>
```

<sub>`GET /api/v2/usage/hourly_usage` · `GetHourlyUsage`</sub>

## `datadog.getUsageLambdaTracedInvocations`

Get hourly usage for Lambda traced invocations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUsageLambdaTracedInvocations(input: {
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
  start_hr: string;
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
  end_hr?: string;
}): Promise<UsageLambdaTracedInvocationsResponse>
```

<sub>`GET /api/v2/usage/lambda_traced_invocations` · `GetUsageLambdaTracedInvocations`</sub>

## `datadog.getUsageObservabilityPipelines`

Get hourly usage for observability pipelines — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUsageObservabilityPipelines(input: {
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
  start_hr: string;
  /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
  end_hr?: string;
}): Promise<UsageObservabilityPipelinesResponse>
```

<sub>`GET /api/v2/usage/observability_pipelines` · `GetUsageObservabilityPipelines`</sub>

## `datadog.getProjectedCost`

Get projected cost across your account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getProjectedCost(input: {
  /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`. */
  view?: string;
  /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
  include_connected_accounts?: boolean;
}): Promise<ProjectedCostResponse>
```

<sub>`GET /api/v2/usage/projected_cost` · `GetProjectedCost`</sub>

## `datadog.getUsageSummaryAvailableFields`

Get available fields for usage summary — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUsageSummaryAvailableFields(): Promise<UsageSummaryAvailableFieldsResponse>
```

<sub>`GET /api/v2/usage/summary/available_fields` · `GetUsageSummaryAvailableFields`</sub>

## `datadog.getUsageAttributionTypes`

Get usage attribution types — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUsageAttributionTypes(): Promise<UsageAttributionTypesResponse>
```

<sub>`GET /api/v2/usage/usage-attribution-types` · `GetUsageAttributionTypes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
