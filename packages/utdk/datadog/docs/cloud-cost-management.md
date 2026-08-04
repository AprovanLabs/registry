# Cloud Cost Management

71 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getCostAccountFilters`

Get account filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostAccountFilters(input: {
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<AccountFiltersResponse>
```

<sub>`GET /api/v2/cost/account_filters/{cloud_account_id}` · `GetCostAccountFilters`</sub>

## `datadog.updateCostAccountFilters`

Update account filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCostAccountFilters(input: {
  data: AccountFiltersPatchData;
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<AccountFiltersResponse>
```

<sub>`PATCH /api/v2/cost/account_filters/{cloud_account_id}` · `UpdateCostAccountFilters`</sub>

## `datadog.listCostAnomalies`

List cost anomalies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostAnomalies(input: {
  /** Start time as Unix milliseconds. Defaults to the start of the latest stable seven-day window. */
  start?: number;
  /** End time as Unix milliseconds. Defaults to the end of the latest stable seven-day window. */
  end?: number;
  /** Optional JSON object mapping cost tag keys to allowed values, for example `{"team":["payments"],"env":["prod"]}`. Filters match anomaly dimensions or correlated tags. */
  filter?: string;
  /** Minimum absolute anomalous cost change to include. Numeric value; defaults to `1`. */
  min_anomalous_threshold?: string;
  /** Minimum absolute actual cost to include. Numeric value; defaults to `0`. */
  min_cost_threshold?: string;
  /** Filter by resolution state. Use `none` for unresolved anomalies, `all` or `*` for resolved anomalies, or a comma-separated list of causes. */
  dismissal_cause?: string;
  /** Sort field. One of `start_date`, `end_date`, `duration`, `max_cost`, `anomalous_cost`, or `dismissal_date`. Defaults to `anomalous_cost`. */
  order_by?: string;
  /** Sort direction. One of `asc` or `desc`. Defaults to `desc`. */
  order?: string;
  /** Maximum number of anomalies to return. Defaults to `200`. */
  limit?: number;
  /** Pagination offset. Defaults to `0`. */
  offset?: number;
  /** Optional repeated cloud or SaaS provider filters, such as `aws`, `gcp`, `azure`, `Oracle`, `datadog`, `OpenAI`, or `Anthropic`. */
  provider_ids?: (string)[];
}): Promise<CostAnomaliesResponse>
```

<sub>`GET /api/v2/cost/anomalies` · `ListCostAnomalies`</sub>

## `datadog.getCostAnomaly`

Get cost anomaly — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostAnomaly(input: {
  /** The UUID of the cost anomaly. */
  anomaly_id: string;
}): Promise<CostAnomalyResponse>
```

<sub>`GET /api/v2/cost/anomalies/{anomaly_id}` · `GetCostAnomaly`</sub>

## `datadog.listCustomAllocationRules`

List custom allocation rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCustomAllocationRules(): Promise<ArbitraryRuleResponseArray>
```

<sub>`GET /api/v2/cost/arbitrary_rule` · `ListCustomAllocationRules`</sub>

## `datadog.createCustomAllocationRule`

Create custom allocation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomAllocationRule(input: {
  data?: ArbitraryCostUpsertRequestData;
}): Promise<ArbitraryRuleResponse>
```

<sub>`POST /api/v2/cost/arbitrary_rule` · `CreateCustomAllocationRule`</sub>

## `datadog.deleteCustomAllocationRule`

Delete custom allocation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomAllocationRule(input: {
  /** The unique identifier of the custom allocation rule */
  rule_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/arbitrary_rule/{rule_id}` · `DeleteCustomAllocationRule`</sub>

## `datadog.getCustomAllocationRule`

Get custom allocation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomAllocationRule(input: {
  /** The unique identifier of the custom allocation rule */
  rule_id: number;
}): Promise<ArbitraryRuleResponse>
```

<sub>`GET /api/v2/cost/arbitrary_rule/{rule_id}` · `GetCustomAllocationRule`</sub>

## `datadog.updateCustomAllocationRule`

Update custom allocation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCustomAllocationRule(input: {
  data?: ArbitraryCostUpsertRequestData;
  /** The unique identifier of the custom allocation rule */
  rule_id: number;
}): Promise<ArbitraryRuleResponse>
```

<sub>`PATCH /api/v2/cost/arbitrary_rule/{rule_id}` · `UpdateCustomAllocationRule`</sub>

## `datadog.reorderCustomAllocationRules`

Reorder custom allocation rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderCustomAllocationRules(input: {
  /** The `ReorderRuleResourceArray` `data`. */
  data: (ReorderRuleResourceData)[];
}): Promise<undefined>
```

<sub>`POST /api/v2/cost/arbitrary_rule/reorder` · `ReorderCustomAllocationRules`</sub>

## `datadog.listCustomAllocationRulesStatus`

List custom allocation rule statuses — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCustomAllocationRulesStatus(): Promise<ArbitraryRuleStatusResponseArray>
```

<sub>`GET /api/v2/cost/arbitrary_rule/status` · `ListCustomAllocationRulesStatus`</sub>

## `datadog.listCostAwscurConfigs`

List Cloud Cost Management AWS CUR configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostAwscurConfigs(): Promise<AwsCurConfigsResponse>
```

<sub>`GET /api/v2/cost/aws_cur_config` · `ListCostAWSCURConfigs`</sub>

## `datadog.createCostAwscurConfig`

Create Cloud Cost Management AWS CUR config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCostAwscurConfig(input: {
  data: AwsCurConfigPostData;
}): Promise<AwsCurConfigResponse>
```

<sub>`POST /api/v2/cost/aws_cur_config` · `CreateCostAWSCURConfig`</sub>

## `datadog.deleteCostAwscurConfig`

Delete Cloud Cost Management AWS CUR config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCostAwscurConfig(input: {
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/aws_cur_config/{cloud_account_id}` · `DeleteCostAWSCURConfig`</sub>

## `datadog.getCostAwscurConfig`

Get cost AWS CUR config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostAwscurConfig(input: {
  /** The unique identifier of the cloud account */
  cloud_account_id: number;
}): Promise<AwsCurConfigResponse>
```

<sub>`GET /api/v2/cost/aws_cur_config/{cloud_account_id}` · `GetCostAWSCURConfig`</sub>

## `datadog.updateCostAwscurConfig`

Update Cloud Cost Management AWS CUR config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCostAwscurConfig(input: {
  data: AwsCurConfigPatchData;
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<AwsCurConfigsResponse>
```

<sub>`PATCH /api/v2/cost/aws_cur_config/{cloud_account_id}` · `UpdateCostAWSCURConfig`</sub>

## `datadog.listCostAzureUcConfigs`

List Cloud Cost Management Azure configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostAzureUcConfigs(): Promise<AzureUcConfigsResponse>
```

<sub>`GET /api/v2/cost/azure_uc_config` · `ListCostAzureUCConfigs`</sub>

## `datadog.createCostAzureUcConfigs`

Create Cloud Cost Management Azure configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCostAzureUcConfigs(input: {
  data: AzureUcConfigPostData;
}): Promise<AzureUcConfigPairsResponse>
```

<sub>`POST /api/v2/cost/azure_uc_config` · `CreateCostAzureUCConfigs`</sub>

## `datadog.deleteCostAzureUcConfig`

Delete Cloud Cost Management Azure config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCostAzureUcConfig(input: {
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/azure_uc_config/{cloud_account_id}` · `DeleteCostAzureUCConfig`</sub>

## `datadog.getCostAzureUcConfig`

Get cost Azure UC config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostAzureUcConfig(input: {
  /** The unique identifier of the cloud account */
  cloud_account_id: number;
}): Promise<UcConfigPair>
```

<sub>`GET /api/v2/cost/azure_uc_config/{cloud_account_id}` · `GetCostAzureUCConfig`</sub>

## `datadog.updateCostAzureUcConfigs`

Update Cloud Cost Management Azure config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCostAzureUcConfigs(input: {
  data: AzureUcConfigPatchData;
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<AzureUcConfigPairsResponse>
```

<sub>`PATCH /api/v2/cost/azure_uc_config/{cloud_account_id}` · `UpdateCostAzureUCConfigs`</sub>

## `datadog.upsertBudget`

Create or update a budget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertBudget(input: {
  data?: BudgetWithEntriesData;
}): Promise<BudgetWithEntries>
```

<sub>`PUT /api/v2/cost/budget` · `UpsertBudget`</sub>

## `datadog.deleteBudget`

Delete budget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteBudget(input: {
  /** Budget id. */
  budget_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/budget/{budget_id}` · `DeleteBudget`</sub>

## `datadog.getBudget`

Get budget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getBudget(input: {
  /** Budget id. */
  budget_id: string;
  /** When `true`, includes actual cost data in the response. */
  actual?: boolean;
  /** When `true`, includes forecast cost data in the response, including `ootb_forecast` and `custom_forecast` per entry. */
  forecast?: boolean;
  /** Start of the cost window in milliseconds since epoch. Must be used together with `end`. */
  start?: number;
  /** End of the cost window in milliseconds since epoch. Must be used together with `start`. */
  end?: number;
}): Promise<BudgetWithEntries>
```

<sub>`GET /api/v2/cost/budget/{budget_id}` · `GetBudget`</sub>

## `datadog.deleteCustomForecast`

Delete a budget's custom forecast — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomForecast(input: {
  /** Budget id. */
  budget_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/budget/{budget_id}/custom-forecast` · `DeleteCustomForecast`</sub>

## `datadog.getCustomForecast`

Get a budget's custom forecast — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomForecast(input: {
  /** Budget id. */
  budget_id: string;
}): Promise<CustomForecastResponse>
```

<sub>`GET /api/v2/cost/budget/{budget_id}/custom-forecast` · `GetCustomForecast`</sub>

## `datadog.validateCsvBudget`

Validate CSV budget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateCsvBudget(): Promise<ValidationResponse>
```

<sub>`POST /api/v2/cost/budget/csv/validate` · `ValidateCsvBudget`</sub>

## `datadog.upsertCustomForecast`

Create or replace a budget's custom forecast — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertCustomForecast(input: {
  data: CustomForecastUpsertRequestData;
}): Promise<CustomForecastResponse>
```

<sub>`PUT /api/v2/cost/budget/custom-forecast` · `UpsertCustomForecast`</sub>

## `datadog.validateBudget`

Validate budget — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateBudget(input: {
  data?: BudgetValidationRequestData;
}): Promise<BudgetValidationResponse>
```

<sub>`POST /api/v2/cost/budget/validate` · `ValidateBudget`</sub>

## `datadog.listBudgets`

List budgets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listBudgets(): Promise<BudgetArray>
```

<sub>`GET /api/v2/cost/budgets` · `ListBudgets`</sub>

## `datadog.getCommitmentsCommitmentList`

Get commitments list — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsCommitmentList(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
  commitmentType?: CommitmentsCommitmentType;
}): Promise<CommitmentsListResponse>
```

<sub>`GET /api/v2/cost/commitments/commitment-list` · `GetCommitmentsCommitmentList`</sub>

## `datadog.getCommitmentsCoverageScalar`

Get commitments coverage (scalar) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsCoverageScalar(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
}): Promise<CommitmentsCoverageScalarResponse>
```

<sub>`GET /api/v2/cost/commitments/coverage/scalar` · `GetCommitmentsCoverageScalar`</sub>

## `datadog.getCommitmentsCoverageTimeseries`

Get commitments coverage (timeseries) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsCoverageTimeseries(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
}): Promise<CommitmentsCoverageTimeseriesResponse>
```

<sub>`GET /api/v2/cost/commitments/coverage/timeseries` · `GetCommitmentsCoverageTimeseries`</sub>

## `datadog.getCommitmentsOnDemandHotspotsScalar`

Get commitments on-demand hot spots (scalar) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsOnDemandHotspotsScalar(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
}): Promise<CommitmentsOnDemandHotspotsScalarResponse>
```

<sub>`GET /api/v2/cost/commitments/on-demand-hot-spots/scalar` · `GetCommitmentsOnDemandHotspotsScalar`</sub>

## `datadog.getCommitmentsSavingsScalar`

Get commitments savings (scalar) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsSavingsScalar(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
}): Promise<CommitmentsSavingsScalarResponse>
```

<sub>`GET /api/v2/cost/commitments/savings/scalar` · `GetCommitmentsSavingsScalar`</sub>

## `datadog.getCommitmentsSavingsTimeseries`

Get commitments savings (timeseries) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsSavingsTimeseries(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
}): Promise<CommitmentsSavingsTimeseriesResponse>
```

<sub>`GET /api/v2/cost/commitments/savings/timeseries` · `GetCommitmentsSavingsTimeseries`</sub>

## `datadog.getCommitmentsUtilizationScalar`

Get commitments utilization (scalar) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsUtilizationScalar(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
  commitmentType?: CommitmentsCommitmentType;
}): Promise<CommitmentsUtilizationScalarResponse>
```

<sub>`GET /api/v2/cost/commitments/utilization/scalar` · `GetCommitmentsUtilizationScalar`</sub>

## `datadog.getCommitmentsUtilizationTimeseries`

Get commitments utilization (timeseries) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCommitmentsUtilizationTimeseries(input: {
  provider: CommitmentsProvider;
  /** Cloud product identifier (for example, ec2, rds, virtualmachines). */
  product: string;
  /** Start of the query time range in Unix milliseconds. */
  start: number;
  /** End of the query time range in Unix milliseconds. */
  end: number;
  /** Optional filter expression to narrow down results. */
  filterBy?: string;
  commitmentType?: CommitmentsCommitmentType;
}): Promise<CommitmentsUtilizationTimeseriesResponse>
```

<sub>`GET /api/v2/cost/commitments/utilization/timeseries` · `GetCommitmentsUtilizationTimeseries`</sub>

## `datadog.listCustomCostsFiles`

List Custom Costs files — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCustomCostsFiles(input: {
  /** Page number for pagination */
  "page[number]"?: number;
  /** Page size for pagination */
  "page[size]"?: number;
  /** Filter by file status */
  "filter[status]"?: string;
  /** Filter files by name with case-insensitive substring matching. */
  "filter[name]"?: string;
  /** Filter by provider. */
  "filter[provider]"?: (string)[];
  /** Sort key with optional descending prefix */
  sort?: string;
}): Promise<CustomCostsFileListResponse>
```

<sub>`GET /api/v2/cost/custom_costs` · `ListCustomCostsFiles`</sub>

## `datadog.uploadCustomCostsFile`

Upload Custom Costs file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.uploadCustomCostsFile(input: {
  body: CustomCostsFileUploadRequest;
}): Promise<CustomCostsFileUploadResponse>
```

<sub>`PUT /api/v2/cost/custom_costs` · `UploadCustomCostsFile`</sub>

## `datadog.deleteCustomCostsFile`

Delete Custom Costs file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomCostsFile(input: {
  /** File ID. */
  file_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/custom_costs/{file_id}` · `DeleteCustomCostsFile`</sub>

## `datadog.getCustomCostsFile`

Get Custom Costs file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomCostsFile(input: {
  /** File ID. */
  file_id: string;
}): Promise<CustomCostsFileGetResponse>
```

<sub>`GET /api/v2/cost/custom_costs/{file_id}` · `GetCustomCostsFile`</sub>

## `datadog.listCostGcpUsageCostConfigs`

List Google Cloud Usage Cost configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostGcpUsageCostConfigs(): Promise<GcpUsageCostConfigsResponse>
```

<sub>`GET /api/v2/cost/gcp_uc_config` · `ListCostGCPUsageCostConfigs`</sub>

## `datadog.createCostGcpUsageCostConfig`

Create Google Cloud Usage Cost config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCostGcpUsageCostConfig(input: {
  data: GcpUsageCostConfigPostData;
}): Promise<GcpUsageCostConfigResponse>
```

<sub>`POST /api/v2/cost/gcp_uc_config` · `CreateCostGCPUsageCostConfig`</sub>

## `datadog.deleteCostGcpUsageCostConfig`

Delete Google Cloud Usage Cost config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCostGcpUsageCostConfig(input: {
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/gcp_uc_config/{cloud_account_id}` · `DeleteCostGCPUsageCostConfig`</sub>

## `datadog.getCostGcpUsageCostConfig`

Get Google Cloud Usage Cost config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostGcpUsageCostConfig(input: {
  /** The unique identifier of the cloud account */
  cloud_account_id: number;
}): Promise<GcpUcConfigResponse>
```

<sub>`GET /api/v2/cost/gcp_uc_config/{cloud_account_id}` · `GetCostGCPUsageCostConfig`</sub>

## `datadog.updateCostGcpUsageCostConfig`

Update Google Cloud Usage Cost config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCostGcpUsageCostConfig(input: {
  data: GcpUsageCostConfigPatchData;
  /** Cloud Account id. */
  cloud_account_id: number;
}): Promise<GcpUsageCostConfigResponse>
```

<sub>`PATCH /api/v2/cost/gcp_uc_config/{cloud_account_id}` · `UpdateCostGCPUsageCostConfig`</sub>

## `datadog.listCostOciConfigs`

List Cloud Cost Management OCI configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostOciConfigs(): Promise<OciConfigsResponse>
```

<sub>`GET /api/v2/cost/oci_config` · `ListCostOCIConfigs`</sub>

## `datadog.searchCostRecommendations`

Search cost recommendations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchCostRecommendations(input: {
  /** Filter expression applied to the recommendations. */
  filter?: string;
  /** Ordered list of sort clauses applied to the result set. */
  sort?: (RecommendationsFilterRequestSortItems)[];
  /** Active view name (for example, `active`, `dismissed`, `open`, `in-progress`, or `completed`). */
  view?: string;
  /** Number of results per page (1–10000). */
  "page[size]"?: string;
  /** Pagination token from a previous response. */
  "page[token]"?: string;
}): Promise<CostRecommendationArray>
```

<sub>`POST /api/v2/cost/recommendations` · `SearchCostRecommendations`</sub>

## `datadog.listCostTagDescriptions`

List Cloud Cost Management tag descriptions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagDescriptions(input: {
  /** Filter descriptions to a specific cloud provider (for example, `aws`). Omit to return descriptions across all clouds. */
  "filter[cloud]"?: string;
}): Promise<CostTagDescriptionsResponse>
```

<sub>`GET /api/v2/cost/tag_descriptions` · `ListCostTagDescriptions`</sub>

## `datadog.deleteCostTagDescriptionByKey`

Delete a Cloud Cost Management tag description — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCostTagDescriptionByKey(input: {
  /** The tag key whose description is being deleted. */
  tag_key: string;
  /** Cloud provider to scope the deletion to (for example, `aws`). Omit to delete every description for the tag key. */
  cloud?: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cost/tag_descriptions/{tag_key}` · `DeleteCostTagDescriptionByKey`</sub>

## `datadog.getCostTagDescriptionByKey`

Get a Cloud Cost Management tag description — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostTagDescriptionByKey(input: {
  /** The tag key whose description is being fetched. */
  tag_key: string;
  /** Cloud provider to scope the lookup to (for example, `aws`). Omit to use the resolved fallback. */
  "filter[cloud]"?: string;
}): Promise<CostTagDescriptionResponse>
```

<sub>`GET /api/v2/cost/tag_descriptions/{tag_key}` · `GetCostTagDescriptionByKey`</sub>

## `datadog.upsertCostTagDescriptionByKey`

Upsert a Cloud Cost Management tag description — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertCostTagDescriptionByKey(input: {
  data: CostTagDescriptionUpsertRequestData;
  /** The tag key whose description is being upserted. */
  tag_key: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/cost/tag_descriptions/{tag_key}` · `UpsertCostTagDescriptionByKey`</sub>

## `datadog.generateCostTagDescriptionByKey`

Generate a Cloud Cost Management tag description — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.generateCostTagDescriptionByKey(input: {
  /** The tag key to generate an AI description for. */
  tag_key: string;
}): Promise<GenerateCostTagDescriptionResponse>
```

<sub>`GET /api/v2/cost/tag_descriptions/{tag_key}/generate` · `GenerateCostTagDescriptionByKey`</sub>

## `datadog.listCostTagKeys`

List Cloud Cost Management tag keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagKeys(input: {
  /** The Cloud Cost Management metric to scope the tag keys to. When omitted, returns tag keys across all metrics. */
  "filter[metric]"?: string;
  /** Filter to return only tag keys that appear with the given `key:value` tag values. For example, `filter[tags]=providername:aws` returns tag keys found on the same cost data, such as `is_aws_ec2_compute` and `aws_instance_type`. */
  "filter[tags]"?: (string)[];
}): Promise<CostTagKeysResponse>
```

<sub>`GET /api/v2/cost/tag_keys` · `ListCostTagKeys`</sub>

## `datadog.getCostTagKey`

Get a Cloud Cost Management tag key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostTagKey(input: {
  /** The Cloud Cost Management tag key. Tag keys can contain forward slashes (for example, `kubernetes/instance`). */
  tag_key: string;
  /** The Cloud Cost Management metric to scope the tag key details to. When omitted, returns details across all metrics. */
  "filter[metric]"?: string;
  /** Controls the size of the internal tag value search scope. This does **not** restrict the number of example tag values returned in the response. Defaults to 50, maximum 10000. */
  "page[size]"?: number;
}): Promise<CostTagKeyResponse>
```

<sub>`GET /api/v2/cost/tag_keys/{tag_key}` · `GetCostTagKey`</sub>

## `datadog.listCostTagMetadata`

List Cloud Cost Management tag key metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagMetadata(input: {
  /** The month to scope the query to, in `YYYY-MM` format. */
  "filter[month]": string;
  /** Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive. */
  "filter[provider]"?: string;
  /** Filter results to a specific Cloud Cost Management metric (for example, `aws.cost.net.amortized`). When omitted, every available metric for the requested period is returned. */
  "filter[metric]"?: string;
  /** Restrict results to a single tag key. */
  "filter[tag_key]"?: string;
  "filter[daily]"?: CostTagMetadataDailyFilter;
}): Promise<CostTagKeyMetadataResponse>
```

<sub>`GET /api/v2/cost/tag_metadata` · `ListCostTagMetadata`</sub>

## `datadog.getCostTagMetadataCurrency`

Get the Cloud Cost Management billing currency — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCostTagMetadataCurrency(input: {
  /** The month to scope the query to, in `YYYY-MM` format. */
  "filter[month]": string;
  /** Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive. */
  "filter[provider]"?: string;
}): Promise<CostCurrencyResponse>
```

<sub>`GET /api/v2/cost/tag_metadata/currency` · `GetCostTagMetadataCurrency`</sub>

## `datadog.listCostTagMetadataMetrics`

List available Cloud Cost Management metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagMetadataMetrics(input: {
  /** The month to scope the query to, in `YYYY-MM` format. */
  "filter[month]": string;
  /** Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive. */
  "filter[provider]"?: string;
}): Promise<CostMetricsResponse>
```

<sub>`GET /api/v2/cost/tag_metadata/metrics` · `ListCostTagMetadataMetrics`</sub>

## `datadog.listCostTagMetadataMonths`

List Cloud Cost Management tag metadata months — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagMetadataMonths(input: {
  /** Provider to scope the query to. Use the value of the `providername` tag in CCM (for example, `aws`, `azure`, `gcp`, `Oracle`, `Confluent Cloud`, `Snowflake`). For costs uploaded through the Custom Costs API, use `custom`. Values are case-sensitive. */
  "filter[provider]": string;
}): Promise<CostTagMetadataMonthsResponse>
```

<sub>`GET /api/v2/cost/tag_metadata/months` · `ListCostTagMetadataMonths`</sub>

## `datadog.listCostTagMetadataOrchestrators`

List Cloud Cost Management orchestrators — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagMetadataOrchestrators(input: {
  /** The month to scope the query to, in `YYYY-MM` format. */
  "filter[month]": string;
  /** Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive. */
  "filter[provider]"?: string;
}): Promise<CostOrchestratorsResponse>
```

<sub>`GET /api/v2/cost/tag_metadata/orchestrators` · `ListCostTagMetadataOrchestrators`</sub>

## `datadog.listCostTagKeySources`

List Cloud Cost Management tag sources — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTagKeySources(input: {
  /** The month to scope the query to, in `YYYY-MM` format. */
  "filter[month]": string;
  /** Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive. */
  "filter[provider]"?: string;
  /** Filter results to tag keys that have data for a specific Cloud Cost Management metric (for example, `aws.cost.net.amortized`). When omitted, all tag keys for the requested period are returned. */
  "filter[metric]"?: string;
}): Promise<CostTagKeySourcesResponse>
```

<sub>`GET /api/v2/cost/tag_metadata/tag_sources` · `ListCostTagKeySources`</sub>

## `datadog.listCostTags`

List Cloud Cost Management tags — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCostTags(input: {
  /** The Cloud Cost Management metric to scope the tags to. When omitted, returns tags across all metrics. */
  "filter[metric]"?: string;
  /** A substring used to filter the returned tags by name. */
  "filter[match]"?: string;
  /** Filter to return only tags that appear with the given `key:value` tag values. For example, `filter[tags]=providername:aws` returns tags found on the same cost data, such as `aws_instance_type:t3.micro` and `aws_instance_type:m5.large`. */
  "filter[tags]"?: (string)[];
  /** Restrict the returned tags to those whose key matches one of the given tag keys. */
  "filter[tag_keys]"?: (string)[];
  /** Controls the size of the internal tag search scope. This does **not** restrict the number of tags returned in the response. Defaults to 50, maximum 10000. */
  "page[size]"?: number;
}): Promise<CostTagsResponse>
```

<sub>`GET /api/v2/cost/tags` · `ListCostTags`</sub>

## `datadog.listTagPipelinesRulesets`

List tag pipeline rulesets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagPipelinesRulesets(): Promise<RulesetRespArray>
```

<sub>`GET /api/v2/tags/enrichment` · `ListTagPipelinesRulesets`</sub>

## `datadog.createTagPipelinesRuleset`

Create tag pipeline ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTagPipelinesRuleset(input: {
  data?: CreateRulesetRequestData;
}): Promise<RulesetResp>
```

<sub>`POST /api/v2/tags/enrichment` · `CreateTagPipelinesRuleset`</sub>

## `datadog.deleteTagPipelinesRuleset`

Delete tag pipeline ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTagPipelinesRuleset(input: {
  /** The unique identifier of the ruleset */
  ruleset_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/tags/enrichment/{ruleset_id}` · `DeleteTagPipelinesRuleset`</sub>

## `datadog.getTagPipelinesRuleset`

Get a tag pipeline ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTagPipelinesRuleset(input: {
  /** The unique identifier of the ruleset */
  ruleset_id: string;
}): Promise<RulesetResp>
```

<sub>`GET /api/v2/tags/enrichment/{ruleset_id}` · `GetTagPipelinesRuleset`</sub>

## `datadog.updateTagPipelinesRuleset`

Update tag pipeline ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTagPipelinesRuleset(input: {
  data?: UpdateRulesetRequestData;
  /** The unique identifier of the ruleset */
  ruleset_id: string;
}): Promise<RulesetResp>
```

<sub>`PATCH /api/v2/tags/enrichment/{ruleset_id}` · `UpdateTagPipelinesRuleset`</sub>

## `datadog.reorderTagPipelinesRulesets`

Reorder tag pipeline rulesets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderTagPipelinesRulesets(input: {
  /** The `ReorderRulesetResourceArray` `data`. */
  data: (ReorderRulesetResourceData)[];
}): Promise<undefined>
```

<sub>`POST /api/v2/tags/enrichment/reorder` · `ReorderTagPipelinesRulesets`</sub>

## `datadog.listTagPipelinesRulesetsStatus`

List tag pipeline ruleset statuses — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagPipelinesRulesetsStatus(): Promise<RulesetStatusRespArray>
```

<sub>`GET /api/v2/tags/enrichment/status` · `ListTagPipelinesRulesetsStatus`</sub>

## `datadog.validateQuery`

Validate query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateQuery(input: {
  data?: RulesValidateQueryRequestData;
}): Promise<RulesValidateQueryResponse>
```

<sub>`POST /api/v2/tags/enrichment/validate-query` · `ValidateQuery`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
