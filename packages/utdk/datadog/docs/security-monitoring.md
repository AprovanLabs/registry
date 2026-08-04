# Security Monitoring

157 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createCustomFramework`

Create a custom framework — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCustomFramework(input: {
  data: CustomFrameworkData;
}): Promise<CreateCustomFrameworkResponse>
```

<sub>`POST /api/v2/cloud_security_management/custom_frameworks` · `CreateCustomFramework`</sub>

## `datadog.deleteCustomFramework`

Delete a custom framework — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCustomFramework(input: {
  /** The framework handle */
  handle: string;
  /** The framework version */
  version: string;
}): Promise<DeleteCustomFrameworkResponse>
```

<sub>`DELETE /api/v2/cloud_security_management/custom_frameworks/{handle}/{version}` · `DeleteCustomFramework`</sub>

## `datadog.getCustomFramework`

Get a custom framework — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCustomFramework(input: {
  /** The framework handle */
  handle: string;
  /** The framework version */
  version: string;
}): Promise<GetCustomFrameworkResponse>
```

<sub>`GET /api/v2/cloud_security_management/custom_frameworks/{handle}/{version}` · `GetCustomFramework`</sub>

## `datadog.updateCustomFramework`

Update a custom framework — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCustomFramework(input: {
  data: CustomFrameworkData;
  /** The framework handle */
  handle: string;
  /** The framework version */
  version: string;
}): Promise<UpdateCustomFrameworkResponse>
```

<sub>`PUT /api/v2/cloud_security_management/custom_frameworks/{handle}/{version}` · `UpdateCustomFramework`</sub>

## `datadog.getResourceEvaluationFilters`

List resource filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getResourceEvaluationFilters(input: {
  /** Filter resource filters by cloud provider (e.g. aws, gcp, azure). */
  cloud_provider?: string;
  /** Filter resource filters by cloud provider account ID. This parameter is only valid when provider is specified. */
  account_id?: string;
  /** Skip cache for resource filters. */
  skip_cache?: boolean;
}): Promise<GetResourceEvaluationFiltersResponse>
```

<sub>`GET /api/v2/cloud_security_management/resource_filters` · `GetResourceEvaluationFilters`</sub>

## `datadog.updateResourceEvaluationFilters`

Update resource filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateResourceEvaluationFilters(input: {
  data: UpdateResourceEvaluationFiltersRequestData;
}): Promise<UpdateResourceEvaluationFiltersResponse>
```

<sub>`PUT /api/v2/cloud_security_management/resource_filters` · `UpdateResourceEvaluationFilters`</sub>

## `datadog.listFindings`

List findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFindings(input: {
  /** Limit the number of findings returned. Must be <= 1000. */
  "page[limit]"?: number;
  /** Return findings for a given snapshot of time (Unix ms). */
  snapshot_timestamp?: number;
  /** Return the next page of findings pointed to by the cursor. */
  "page[cursor]"?: string;
  /** Return findings that have these associated tags (repeatable). */
  "filter[tags]"?: string;
  /** Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators). */
  "filter[evaluation_changed_at]"?: string;
  /** Set to `true` to return findings that are muted. Set to `false` to return unmuted findings. */
  "filter[muted]"?: boolean;
  /** Return findings for the specified rule ID. */
  "filter[rule_id]"?: string;
  /** Return findings for the specified rule. */
  "filter[rule_name]"?: string;
  /** Return only findings for the specified resource type. */
  "filter[resource_type]"?: string;
  /** Return only findings for the specified resource id. */
  "filter[@resource_id]"?: string;
  /** Return findings that were found on a specified date (Unix ms) or date range (using comparison operators). */
  "filter[discovery_timestamp]"?: string;
  "filter[evaluation]"?: FindingEvaluation;
  "filter[status]"?: FindingStatus;
  /** Return findings that match the selected vulnerability types (repeatable). */
  "filter[vulnerability_type]"?: (FindingVulnerabilityType)[];
  /** Return additional fields for some findings. */
  detailed_findings?: boolean;
}): Promise<ListFindingsResponse>
```

<sub>`GET /api/v2/posture_management/findings` · `ListFindings`</sub>

## `datadog.getFinding`

Get a finding — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFinding(input: {
  /** The ID of the finding. */
  finding_id: string;
  /** Return the finding for a given snapshot of time (Unix ms). */
  snapshot_timestamp?: number;
}): Promise<GetFindingResponse>
```

<sub>`GET /api/v2/posture_management/findings/{finding_id}` · `GetFinding`</sub>

## `datadog.listSecurityMonitoringCriticalAssets`

Get all critical assets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringCriticalAssets(): Promise<SecurityMonitoringCriticalAssetsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/critical_assets` · `ListSecurityMonitoringCriticalAssets`</sub>

## `datadog.createSecurityMonitoringCriticalAsset`

Create a critical asset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityMonitoringCriticalAsset(input: {
  data: SecurityMonitoringCriticalAssetCreateData;
}): Promise<SecurityMonitoringCriticalAssetResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/critical_assets` · `CreateSecurityMonitoringCriticalAsset`</sub>

## `datadog.deleteSecurityMonitoringCriticalAsset`

Delete a critical asset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityMonitoringCriticalAsset(input: {
  /** The ID of the critical asset. */
  critical_asset_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}` · `DeleteSecurityMonitoringCriticalAsset`</sub>

## `datadog.getSecurityMonitoringCriticalAsset`

Get a critical asset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringCriticalAsset(input: {
  /** The ID of the critical asset. */
  critical_asset_id: string;
}): Promise<SecurityMonitoringCriticalAssetResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}` · `GetSecurityMonitoringCriticalAsset`</sub>

## `datadog.updateSecurityMonitoringCriticalAsset`

Update a critical asset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityMonitoringCriticalAsset(input: {
  data: SecurityMonitoringCriticalAssetUpdateData;
  /** The ID of the critical asset. */
  critical_asset_id: string;
}): Promise<SecurityMonitoringCriticalAssetResponse>
```

<sub>`PATCH /api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}` · `UpdateSecurityMonitoringCriticalAsset`</sub>

## `datadog.getCriticalAssetsAffectingRule`

Get critical assets affecting a specific rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCriticalAssetsAffectingRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringCriticalAssetsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/critical_assets/rules/{rule_id}` · `GetCriticalAssetsAffectingRule`</sub>

## `datadog.listSecurityMonitoringIntegrationConfigs`

List entity context sync configurations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringIntegrationConfigs(input: {
  "filter[integration_type]"?: SecurityMonitoringIntegrationType;
}): Promise<SecurityMonitoringIntegrationConfigsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/integration_config` · `ListSecurityMonitoringIntegrationConfigs`</sub>

## `datadog.createSecurityMonitoringIntegrationConfig`

Create an entity context sync configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityMonitoringIntegrationConfig(input: {
  data: SecurityMonitoringIntegrationConfigCreateData;
}): Promise<SecurityMonitoringIntegrationConfigResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/integration_config` · `CreateSecurityMonitoringIntegrationConfig`</sub>

## `datadog.deleteSecurityMonitoringIntegrationConfig`

Delete an entity context sync configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityMonitoringIntegrationConfig(input: {
  /** The ID of the entity context sync configuration. */
  integration_config_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/configuration/integration_config/{integration_config_id}` · `DeleteSecurityMonitoringIntegrationConfig`</sub>

## `datadog.getSecurityMonitoringIntegrationConfig`

Get an entity context sync configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringIntegrationConfig(input: {
  /** The ID of the entity context sync configuration. */
  integration_config_id: string;
}): Promise<SecurityMonitoringIntegrationConfigResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/integration_config/{integration_config_id}` · `GetSecurityMonitoringIntegrationConfig`</sub>

## `datadog.updateSecurityMonitoringIntegrationConfig`

Update an entity context sync configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityMonitoringIntegrationConfig(input: {
  data: SecurityMonitoringIntegrationConfigUpdateData;
  /** The ID of the entity context sync configuration. */
  integration_config_id: string;
}): Promise<SecurityMonitoringIntegrationConfigResponse>
```

<sub>`PATCH /api/v2/security_monitoring/configuration/integration_config/{integration_config_id}` · `UpdateSecurityMonitoringIntegrationConfig`</sub>

## `datadog.validateSecurityMonitoringIntegrationConfig`

Validate an entity context sync configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateSecurityMonitoringIntegrationConfig(input: {
  /** The ID of the entity context sync configuration. */
  integration_config_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/security_monitoring/configuration/integration_config/{integration_config_id}/validate` · `ValidateSecurityMonitoringIntegrationConfig`</sub>

## `datadog.activateIntegration`

Activate an entity context sync integration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.activateIntegration(input: {
  data?: SecurityMonitoringIntegrationActivateData;
  /** The integration type to activate (for example, `entra_id`). */
  integration_type: string;
}): Promise<SecurityMonitoringIntegrationConfigResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/integration_config/{integration_type}/activate` · `ActivateIntegration`</sub>

## `datadog.deactivateIntegration`

Deactivate an entity context sync integration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deactivateIntegration(input: {
  /** The integration type to deactivate (for example, `entra_id`). */
  integration_type: string;
}): Promise<SecurityMonitoringIntegrationConfigResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/integration_config/{integration_type}/deactivate` · `DeactivateIntegration`</sub>

## `datadog.getEntraIdAzureAppRegistrations`

Get Entra ID Azure App Registration prerequisites — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEntraIdAzureAppRegistrations(): Promise<SecurityMonitoringEntraIdAzureAppRegistrationsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/integration_config/entra_id/azure_app_registrations` · `GetEntraIdAzureAppRegistrations`</sub>

## `datadog.validateSecurityMonitoringIntegrationCredentials`

Validate entity context sync credentials — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateSecurityMonitoringIntegrationCredentials(input: {
  data: SecurityMonitoringIntegrationCredentialsValidateData;
}): Promise<undefined>
```

<sub>`POST /api/v2/security_monitoring/configuration/integration_config/validate` · `ValidateSecurityMonitoringIntegrationCredentials`</sub>

## `datadog.sendSecurityMonitoringNotificationPreview`

Test a notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.sendSecurityMonitoringNotificationPreview(input: {
  data?: CreateNotificationRuleParametersData;
}): Promise<NotificationRulePreviewResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/notification_rules/send_notification_preview` · `SendSecurityMonitoringNotificationPreview`</sub>

## `datadog.listSecurityFilters`

Get all security filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFilters(): Promise<SecurityFiltersResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/security_filters` · `ListSecurityFilters`</sub>

## `datadog.createSecurityFilter`

Create a security filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityFilter(input: {
  data: SecurityFilterCreateData;
}): Promise<SecurityFilterResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/security_filters` · `CreateSecurityFilter`</sub>

## `datadog.deleteSecurityFilter`

Delete a security filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityFilter(input: {
  /** The ID of the security filter. */
  security_filter_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/configuration/security_filters/{security_filter_id}` · `DeleteSecurityFilter`</sub>

## `datadog.getSecurityFilter`

Get a security filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityFilter(input: {
  /** The ID of the security filter. */
  security_filter_id: string;
}): Promise<SecurityFilterResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/security_filters/{security_filter_id}` · `GetSecurityFilter`</sub>

## `datadog.updateSecurityFilter`

Update a security filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityFilter(input: {
  data: SecurityFilterUpdateData;
  /** The ID of the security filter. */
  security_filter_id: string;
}): Promise<SecurityFilterResponse>
```

<sub>`PATCH /api/v2/security_monitoring/configuration/security_filters/{security_filter_id}` · `UpdateSecurityFilter`</sub>

## `datadog.listSecurityFilterVersions`

Get the version history of security filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFilterVersions(): Promise<SecurityFilterVersionsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/security_filters/versions` · `ListSecurityFilterVersions`</sub>

## `datadog.listSecurityMonitoringSuppressions`

Get all suppression rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringSuppressions(input: {
  /** Query string. */
  query?: string;
  sort?: SecurityMonitoringSuppressionSort;
  /** Size for a given page. Use `-1` to return all items. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<SecurityMonitoringPaginatedSuppressionsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/suppressions` · `ListSecurityMonitoringSuppressions`</sub>

## `datadog.createSecurityMonitoringSuppression`

Create a suppression rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityMonitoringSuppression(input: {
  data: SecurityMonitoringSuppressionCreateData;
}): Promise<SecurityMonitoringSuppressionResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/suppressions` · `CreateSecurityMonitoringSuppression`</sub>

## `datadog.deleteSecurityMonitoringSuppression`

Delete a suppression rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityMonitoringSuppression(input: {
  /** The ID of the suppression rule */
  suppression_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/configuration/suppressions/{suppression_id}` · `DeleteSecurityMonitoringSuppression`</sub>

## `datadog.getSecurityMonitoringSuppression`

Get a suppression rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringSuppression(input: {
  /** The ID of the suppression rule */
  suppression_id: string;
}): Promise<SecurityMonitoringSuppressionResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/suppressions/{suppression_id}` · `GetSecurityMonitoringSuppression`</sub>

## `datadog.updateSecurityMonitoringSuppression`

Update a suppression rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityMonitoringSuppression(input: {
  data: SecurityMonitoringSuppressionUpdateData;
  /** The ID of the suppression rule */
  suppression_id: string;
}): Promise<SecurityMonitoringSuppressionResponse>
```

<sub>`PATCH /api/v2/security_monitoring/configuration/suppressions/{suppression_id}` · `UpdateSecurityMonitoringSuppression`</sub>

## `datadog.getSuppressionVersionHistory`

Get a suppression's version history — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSuppressionVersionHistory(input: {
  /** The ID of the suppression rule */
  suppression_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<GetSuppressionVersionHistoryResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/suppressions/{suppression_id}/version_history` · `GetSuppressionVersionHistory`</sub>

## `datadog.getSuppressionsAffectingFutureRule`

Get suppressions affecting future rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSuppressionsAffectingFutureRule(input: {
  body: SecurityMonitoringRuleCreatePayload;
}): Promise<SecurityMonitoringSuppressionsResponse>
```

<sub>`POST /api/v2/security_monitoring/configuration/suppressions/rules` · `GetSuppressionsAffectingFutureRule`</sub>

## `datadog.getSuppressionsAffectingRule`

Get suppressions affecting a specific rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSuppressionsAffectingRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringSuppressionsResponse>
```

<sub>`GET /api/v2/security_monitoring/configuration/suppressions/rules/{rule_id}` · `GetSuppressionsAffectingRule`</sub>

## `datadog.validateSecurityMonitoringSuppression`

Validate a suppression rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateSecurityMonitoringSuppression(input: {
  data: SecurityMonitoringSuppressionCreateData;
}): Promise<undefined>
```

<sub>`POST /api/v2/security_monitoring/configuration/suppressions/validation` · `ValidateSecurityMonitoringSuppression`</sub>

## `datadog.activateContentPack`

Activate content pack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.activateContentPack(input: {
  /** The ID of the content pack to activate (for example, `aws-cloudtrail`). */
  content_pack_id: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/security_monitoring/content_packs/{content_pack_id}/activate` · `ActivateContentPack`</sub>

## `datadog.deactivateContentPack`

Deactivate content pack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deactivateContentPack(input: {
  /** The ID of the content pack to deactivate (for example, `aws-cloudtrail`). */
  content_pack_id: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/security_monitoring/content_packs/{content_pack_id}/deactivate` · `DeactivateContentPack`</sub>

## `datadog.getContentPacksStates`

Get content pack states — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getContentPacksStates(): Promise<SecurityMonitoringContentPackStatesResponse>
```

<sub>`GET /api/v2/security_monitoring/content_packs/states` · `GetContentPacksStates`</sub>

## `datadog.listSecurityMonitoringDatasets`

List datasets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringDatasets(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Attribute used to sort datasets. Prefix with `-` to sort in descending order. */
  sort?: string;
  /** A search query to filter datasets by name or description. */
  "filter[query]"?: string;
}): Promise<SecurityMonitoringDatasetsListResponse>
```

<sub>`GET /api/v2/security_monitoring/datasets` · `ListSecurityMonitoringDatasets`</sub>

## `datadog.createSecurityMonitoringDataset`

Create a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityMonitoringDataset(input: {
  data: SecurityMonitoringDatasetCreateData;
}): Promise<SecurityMonitoringDatasetCreateResponse>
```

<sub>`POST /api/v2/security_monitoring/datasets` · `CreateSecurityMonitoringDataset`</sub>

## `datadog.deleteSecurityMonitoringDataset`

Delete a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityMonitoringDataset(input: {
  /** The UUID of the dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/datasets/{dataset_id}` · `DeleteSecurityMonitoringDataset`</sub>

## `datadog.getSecurityMonitoringDataset`

Get a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringDataset(input: {
  /** The UUID of the dataset. */
  dataset_id: string;
}): Promise<SecurityMonitoringDatasetResponse>
```

<sub>`GET /api/v2/security_monitoring/datasets/{dataset_id}` · `GetSecurityMonitoringDataset`</sub>

## `datadog.updateSecurityMonitoringDataset`

Update a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityMonitoringDataset(input: {
  data: SecurityMonitoringDatasetUpdateData;
  /** The UUID of the dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/security_monitoring/datasets/{dataset_id}` · `UpdateSecurityMonitoringDataset`</sub>

## `datadog.getSecurityMonitoringDatasetVersionHistory`

Get the version history of a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringDatasetVersionHistory(input: {
  /** The UUID of the dataset. */
  dataset_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<SecurityMonitoringDatasetVersionHistoryResponse>
```

<sub>`GET /api/v2/security_monitoring/datasets/{dataset_id}/version_history` · `GetSecurityMonitoringDatasetVersionHistory`</sub>

## `datadog.getSecurityMonitoringDatasetByVersion`

Get a dataset at a specific version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringDatasetByVersion(input: {
  /** The UUID of the dataset. */
  dataset_id: string;
  /** The version number of the dataset to retrieve. */
  version: number;
}): Promise<SecurityMonitoringDatasetResponse>
```

<sub>`GET /api/v2/security_monitoring/datasets/{dataset_id}/version/{version}` · `GetSecurityMonitoringDatasetByVersion`</sub>

## `datadog.batchGetSecurityMonitoringDatasetDependencies`

Get dataset dependencies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.batchGetSecurityMonitoringDatasetDependencies(input: {
  data: SecurityMonitoringDatasetDependenciesRequestData;
}): Promise<SecurityMonitoringDatasetDependenciesResponse>
```

<sub>`POST /api/v2/security_monitoring/datasets/dependencies` · `BatchGetSecurityMonitoringDatasetDependencies`</sub>

## `datadog.getEntityContext`

Get entity context — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEntityContext(input: {
  /** A free-text query (for example, an email address or principal ID) used to filter the entities returned. */
  query?: string;
  /** The start of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now-7d`). Defaults to `now-7d`. Ignored when `as_of` is set. */
  from?: string;
  /** The end of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now`). Defaults to `now`. Ignored when `as_of` is set. */
  to?: string;
  /** A point in time at which to query the entity revisions, as an RFC3339 timestamp, a Unix timestamp (in seconds), or a relative time (for example, `now-1d`). When set, `from` and `to` are ignored. Cannot be combined with custom `from` / `to` values. */
  as_of?: string;
  /** The maximum number of entities to return. */
  limit?: number;
  /** An opaque token used to fetch the next page of results, as returned in `meta.page.next_token` of a previous response. */
  page_token?: string;
}): Promise<EntityContextResponse>
```

<sub>`GET /api/v2/security_monitoring/entity_context` · `GetEntityContext`</sub>

## `datadog.getSingleEntityContext`

Get a single entity context — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSingleEntityContext(input: {
  /** The unique identifier of the entity to retrieve. */
  id: string;
  /** The start of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now-7d`). Defaults to `now-7d`. Ignored when `as_of` is set. */
  from?: string;
  /** The end of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now`). Defaults to `now`. Ignored when `as_of` is set. */
  to?: string;
  /** A point in time at which to query the entity revisions, as an RFC3339 timestamp, a Unix timestamp (in seconds), or a relative time (for example, `now-1d`). When set, `from` and `to` are ignored. Cannot be combined with custom `from` / `to` values. */
  as_of?: string;
}): Promise<SingleEntityContextResponse>
```

<sub>`GET /api/v2/security_monitoring/entity_context/{id}` · `GetSingleEntityContext`</sub>

## `datadog.listSecurityMonitoringRules`

List rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringRules(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** A search query to filter security rules. You can filter by attributes such as `type`, `source`, `tags`. */
  query?: string;
  sort?: SecurityMonitoringRuleSort;
}): Promise<SecurityMonitoringListRulesResponse>
```

<sub>`GET /api/v2/security_monitoring/rules` · `ListSecurityMonitoringRules`</sub>

## `datadog.createSecurityMonitoringRule`

Create a detection rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityMonitoringRule(input: {
  body: SecurityMonitoringRuleCreatePayload;
}): Promise<SecurityMonitoringRuleResponse>
```

<sub>`POST /api/v2/security_monitoring/rules` · `CreateSecurityMonitoringRule`</sub>

## `datadog.deleteSecurityMonitoringRule`

Delete an existing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityMonitoringRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security_monitoring/rules/{rule_id}` · `DeleteSecurityMonitoringRule`</sub>

## `datadog.getSecurityMonitoringRule`

Get a rule's details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringRuleResponse>
```

<sub>`GET /api/v2/security_monitoring/rules/{rule_id}` · `GetSecurityMonitoringRule`</sub>

## `datadog.updateSecurityMonitoringRule`

Update an existing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityMonitoringRule(input: {
  /** Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined. */
  calculatedFields?: (CalculatedField)[];
  /** Cases for generating signals. */
  cases?: (SecurityMonitoringRuleCase)[];
  complianceSignalOptions?: CloudConfigurationRuleComplianceSignalOptions;
  /** Custom/Overridden Message for generated signals (used in case of Default rule update). */
  customMessage?: string;
  /** Custom/Overridden name (used in case of Default rule update). */
  customName?: string;
  /** Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules. */
  filters?: (SecurityMonitoringFilter)[];
  /** Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups. */
  groupSignalsBy?: (string)[];
  /** Whether the notifications include the triggering group-by values in their title. */
  hasExtendedTitle?: boolean;
  /** Whether the rule is enabled. */
  isEnabled?: boolean;
  /** Message for generated signals. */
  message?: string;
  /** Name of the rule. */
  name?: string;
  options?: SecurityMonitoringRuleOptions;
  /** Queries for selecting logs which are part of the rule. */
  queries?: (SecurityMonitoringRuleQuery)[];
  /** Reference tables for the rule. */
  referenceTables?: (SecurityMonitoringReferenceTable)[];
  schedulingOptions?: SecurityMonitoringSchedulingOptions;
  /** Tags for generated signals. */
  tags?: (string)[];
  /** Cases for generating signals from third-party rules. Only available for third-party rules. */
  thirdPartyCases?: (SecurityMonitoringThirdPartyRuleCase)[];
  /** The version of the rule being updated. */
  version?: number;
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringRuleResponse>
```

<sub>`PUT /api/v2/security_monitoring/rules/{rule_id}` · `UpdateSecurityMonitoringRule`</sub>

## `datadog.convertExistingSecurityMonitoringRule`

Convert an existing rule from JSON to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.convertExistingSecurityMonitoringRule(input: {
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringRuleConvertResponse>
```

<sub>`GET /api/v2/security_monitoring/rules/{rule_id}/convert` · `ConvertExistingSecurityMonitoringRule`</sub>

## `datadog.restoreSecurityMonitoringRule`

Restore a rule to a historical version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.restoreSecurityMonitoringRule(input: {
  /** The ID of the rule. */
  rule_id: string;
  /** The historical version number of the rule. */
  version: number;
}): Promise<SecurityMonitoringRuleResponse>
```

<sub>`POST /api/v2/security_monitoring/rules/{rule_id}/restore/{version}` · `RestoreSecurityMonitoringRule`</sub>

## `datadog.testExistingSecurityMonitoringRule`

Test an existing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.testExistingSecurityMonitoringRule(input: {
  rule?: SecurityMonitoringRuleTestPayload;
  /** Data payloads used to test rules query with the expected result. */
  ruleQueryPayloads?: (SecurityMonitoringRuleQueryPayload)[];
  /** The ID of the rule. */
  rule_id: string;
}): Promise<SecurityMonitoringRuleTestResponse>
```

<sub>`POST /api/v2/security_monitoring/rules/{rule_id}/test` · `TestExistingSecurityMonitoringRule`</sub>

## `datadog.getRuleVersionHistory`

Get a rule's version history — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRuleVersionHistory(input: {
  /** The ID of the rule. */
  rule_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<GetRuleVersionHistoryResponse>
```

<sub>`GET /api/v2/security_monitoring/rules/{rule_id}/version_history` · `GetRuleVersionHistory`</sub>

## `datadog.bulkDeleteSecurityMonitoringRules`

Bulk delete security monitoring rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkDeleteSecurityMonitoringRules(input: {
  data: SecurityMonitoringRuleBulkDeleteData;
}): Promise<SecurityMonitoringRuleBulkDeleteResponse>
```

<sub>`DELETE /api/v2/security_monitoring/rules/bulk_delete` · `BulkDeleteSecurityMonitoringRules`</sub>

## `datadog.bulkExportSecurityMonitoringRules`

Bulk export security monitoring rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkExportSecurityMonitoringRules(input: {
  data: SecurityMonitoringRuleBulkExportData;
}): Promise<string>
```

<sub>`POST /api/v2/security_monitoring/rules/bulk_export` · `BulkExportSecurityMonitoringRules`</sub>

## `datadog.convertSecurityMonitoringRuleFromJsonToTerraform`

Convert a rule from JSON to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.convertSecurityMonitoringRuleFromJsonToTerraform(input: {
  body: SecurityMonitoringRuleConvertPayload;
}): Promise<SecurityMonitoringRuleConvertResponse>
```

<sub>`POST /api/v2/security_monitoring/rules/convert` · `ConvertSecurityMonitoringRuleFromJSONToTerraform`</sub>

## `datadog.bulkConvertExistingSecurityMonitoringRules`

Bulk convert rules to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkConvertExistingSecurityMonitoringRules(input: {
  data: SecurityMonitoringRuleConvertBulkData;
}): Promise<string>
```

<sub>`POST /api/v2/security_monitoring/rules/convert/bulk` · `BulkConvertExistingSecurityMonitoringRules`</sub>

## `datadog.testSecurityMonitoringRule`

Test a rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.testSecurityMonitoringRule(input: {
  rule?: SecurityMonitoringRuleTestPayload;
  /** Data payloads used to test rules query with the expected result. */
  ruleQueryPayloads?: (SecurityMonitoringRuleQueryPayload)[];
}): Promise<SecurityMonitoringRuleTestResponse>
```

<sub>`POST /api/v2/security_monitoring/rules/test` · `TestSecurityMonitoringRule`</sub>

## `datadog.validateSecurityMonitoringRule`

Validate a detection rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateSecurityMonitoringRule(input: {
  body: SecurityMonitoringRuleValidatePayload;
}): Promise<undefined>
```

<sub>`POST /api/v2/security_monitoring/rules/validation` · `ValidateSecurityMonitoringRule`</sub>

## `datadog.listSampleLogGenerationSubscriptions`

Get sample log generation subscriptions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSampleLogGenerationSubscriptions(input: {
  status?: SampleLogGenerationSubscriptionsStatusFilter;
  /** The start of the time range, as an RFC3339 timestamp. When provided, the response includes every subscription that was active at any point in `[start_timestamp, end_timestamp]`, and the `status` filter is ignored. */
  start_timestamp?: string;
  /** The end of the time range, as an RFC3339 timestamp. Ignored unless `start_timestamp` is set. Defaults to the current time when `start_timestamp` is provided. */
  end_timestamp?: string;
}): Promise<SampleLogGenerationSubscriptionsResponse>
```

<sub>`GET /api/v2/security_monitoring/sample_log_generation/subscriptions` · `ListSampleLogGenerationSubscriptions`</sub>

## `datadog.createSampleLogGenerationSubscription`

Subscribe to sample log generation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSampleLogGenerationSubscription(input: {
  data: SampleLogGenerationSubscriptionCreateData;
}): Promise<SampleLogGenerationSubscriptionResponse>
```

<sub>`POST /api/v2/security_monitoring/sample_log_generation/subscriptions` · `CreateSampleLogGenerationSubscription`</sub>

## `datadog.deleteSampleLogGenerationSubscription`

Unsubscribe from sample log generation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSampleLogGenerationSubscription(input: {
  /** The identifier of the Cloud SIEM content pack to operate on (for example, `aws-cloudtrail`). */
  content_pack_id: string;
}): Promise<SampleLogGenerationSubscriptionResponse>
```

<sub>`DELETE /api/v2/security_monitoring/sample_log_generation/subscriptions/{content_pack_id}` · `DeleteSampleLogGenerationSubscription`</sub>

## `datadog.bulkCreateSampleLogGenerationSubscriptions`

Bulk subscribe to sample log generation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkCreateSampleLogGenerationSubscriptions(input: {
  data: SampleLogGenerationBulkSubscriptionData;
}): Promise<SampleLogGenerationBulkSubscriptionResponse>
```

<sub>`POST /api/v2/security_monitoring/sample_log_generation/subscriptions/bulk` · `BulkCreateSampleLogGenerationSubscriptions`</sub>

## `datadog.listSecurityMonitoringSignals`

Get a quick list of security signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringSignals(input: {
  /** The search query for security signals. */
  "filter[query]"?: string;
  /** The minimum timestamp for requested security signals. */
  "filter[from]"?: string;
  /** The maximum timestamp for requested security signals. */
  "filter[to]"?: string;
  sort?: SecurityMonitoringSignalsSort;
  /** A list of results using the cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** The maximum number of security signals in the response. */
  "page[limit]"?: number;
}): Promise<SecurityMonitoringSignalsListResponse>
```

<sub>`GET /api/v2/security_monitoring/signals` · `ListSecurityMonitoringSignals`</sub>

## `datadog.getSecurityMonitoringSignal`

Get a signal's details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringSignal(input: {
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalResponse>
```

<sub>`GET /api/v2/security_monitoring/signals/{signal_id}` · `GetSecurityMonitoringSignal`</sub>

## `datadog.editSecurityMonitoringSignalAssignee`

Modify the triage assignee of a security signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editSecurityMonitoringSignalAssignee(input: {
  data: SecurityMonitoringSignalAssigneeUpdateData;
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/{signal_id}/assignee` · `EditSecurityMonitoringSignalAssignee`</sub>

## `datadog.getSignalEntities`

Get entities related to a signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSignalEntities(input: {
  /** The ID of the signal. */
  signal_id: string;
  /** The maximum number of entities to return. */
  limit?: number;
}): Promise<SignalEntitiesResponse>
```

<sub>`GET /api/v2/security_monitoring/signals/{signal_id}/entities` · `GetSignalEntities`</sub>

## `datadog.editSecurityMonitoringSignalIncidents`

Change the related incidents of a security signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editSecurityMonitoringSignalIncidents(input: {
  data: SecurityMonitoringSignalIncidentsUpdateData;
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/{signal_id}/incidents` · `EditSecurityMonitoringSignalIncidents`</sub>

## `datadog.getInvestigationLogQueriesMatchingSignal`

Get investigation queries for a signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getInvestigationLogQueriesMatchingSignal(input: {
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalSuggestedActionsResponse>
```

<sub>`GET /api/v2/security_monitoring/signals/{signal_id}/investigation_queries` · `GetInvestigationLogQueriesMatchingSignal`</sub>

## `datadog.editSecurityMonitoringSignalState`

Change the triage state of a security signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editSecurityMonitoringSignalState(input: {
  data: SecurityMonitoringSignalStateUpdateData;
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/{signal_id}/state` · `EditSecurityMonitoringSignalState`</sub>

## `datadog.getSuggestedActionsMatchingSignal`

Get suggested actions for a signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSuggestedActionsMatchingSignal(input: {
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalSuggestedActionsResponse>
```

<sub>`GET /api/v2/security_monitoring/signals/{signal_id}/suggested_actions` · `GetSuggestedActionsMatchingSignal`</sub>

## `datadog.editSecurityMonitoringSignal`

Update security signal triage state or assignee — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editSecurityMonitoringSignal(input: {
  data: SecurityMonitoringSignalUpdateData;
  /** The ID of the signal. */
  signal_id: string;
}): Promise<SecurityMonitoringSignalTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/{signal_id}/update` · `EditSecurityMonitoringSignal`</sub>

## `datadog.bulkEditSecurityMonitoringSignalsAssignee`

Bulk update triage assignee of security signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkEditSecurityMonitoringSignalsAssignee(input: {
  /** An array of signal assignee updates. */
  data: (SecurityMonitoringSignalsBulkAssigneeUpdateData)[];
}): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/bulk/assignee` · `BulkEditSecurityMonitoringSignalsAssignee`</sub>

## `datadog.bulkEditSecurityMonitoringSignalsState`

Bulk update triage state of security signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkEditSecurityMonitoringSignalsState(input: {
  /** An array of signal state updates. */
  data: (SecurityMonitoringSignalsBulkStateUpdateData)[];
}): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/bulk/state` · `BulkEditSecurityMonitoringSignalsState`</sub>

## `datadog.bulkEditSecurityMonitoringSignals`

Bulk update security signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkEditSecurityMonitoringSignals(input: {
  /** An array of signal updates. */
  data: (SecurityMonitoringSignalsBulkUpdateData)[];
}): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse>
```

<sub>`PATCH /api/v2/security_monitoring/signals/bulk/update` · `BulkEditSecurityMonitoringSignals`</sub>

## `datadog.searchSecurityMonitoringSignals`

Get a list of security signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchSecurityMonitoringSignals(input: {
  filter?: SecurityMonitoringSignalListRequestFilter;
  page?: SecurityMonitoringSignalListRequestPage;
  sort?: SecurityMonitoringSignalsSort;
}): Promise<SecurityMonitoringSignalsListResponse>
```

<sub>`POST /api/v2/security_monitoring/signals/search` · `SearchSecurityMonitoringSignals`</sub>

## `datadog.exportSecurityMonitoringTerraformResource`

Export security monitoring resource to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.exportSecurityMonitoringTerraformResource(input: {
  resource_type: SecurityMonitoringTerraformResourceType;
  /** The ID of the security monitoring resource to export. */
  resource_id: string;
}): Promise<SecurityMonitoringTerraformExportResponse>
```

<sub>`GET /api/v2/security_monitoring/terraform/{resource_type}/{resource_id}` · `ExportSecurityMonitoringTerraformResource`</sub>

## `datadog.bulkExportSecurityMonitoringTerraformResources`

Export security monitoring resources to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkExportSecurityMonitoringTerraformResources(input: {
  data: SecurityMonitoringTerraformBulkExportData;
  resource_type: SecurityMonitoringTerraformResourceType;
}): Promise<string>
```

<sub>`POST /api/v2/security_monitoring/terraform/{resource_type}/bulk` · `BulkExportSecurityMonitoringTerraformResources`</sub>

## `datadog.convertSecurityMonitoringTerraformResource`

Convert security monitoring resource to Terraform — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.convertSecurityMonitoringTerraformResource(input: {
  data: SecurityMonitoringTerraformConvertData;
  resource_type: SecurityMonitoringTerraformResourceType;
}): Promise<SecurityMonitoringTerraformExportResponse>
```

<sub>`POST /api/v2/security_monitoring/terraform/{resource_type}/convert` · `ConvertSecurityMonitoringTerraformResource`</sub>

## `datadog.listSecurityFindings`

List security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFindings(input: {
  /** The search query following log search syntax. */
  "filter[query]"?: string;
  /** Get the next page of results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** The maximum number of findings in the response. */
  "page[limit]"?: number;
  sort?: SecurityFindingsSort;
}): Promise<ListSecurityFindingsResponse>
```

<sub>`GET /api/v2/security/findings` · `ListSecurityFindings`</sub>

## `datadog.updateFindingsAssignee`

Assign or unassign security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFindingsAssignee(input: {
  data: AssigneeRequestData;
}): Promise<AssigneeResponse>
```

<sub>`PATCH /api/v2/security/findings/assignee` · `UpdateFindingsAssignee`</sub>

## `datadog.listSecurityFindingsAutomationDueDateRules`

Get all due date rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFindingsAutomationDueDateRules(input: {
  /** The number of rules per page. Maximum is 1000. */
  "page[size]"?: number;
  /** The page number to return. */
  "page[number]"?: number;
}): Promise<DueDateRulesResponse>
```

<sub>`GET /api/v2/security/findings/automation/due_date_rules` · `ListSecurityFindingsAutomationDueDateRules`</sub>

## `datadog.createSecurityFindingsAutomationDueDateRule`

Create a due date rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityFindingsAutomationDueDateRule(input: {
  data: DueDateRuleDataCreate;
}): Promise<DueDateRuleResponse>
```

<sub>`POST /api/v2/security/findings/automation/due_date_rules` · `CreateSecurityFindingsAutomationDueDateRule`</sub>

## `datadog.deleteSecurityFindingsAutomationDueDateRule`

Delete a due date rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityFindingsAutomationDueDateRule(input: {
  /** The ID of the due date rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/findings/automation/due_date_rules/{rule_id}` · `DeleteSecurityFindingsAutomationDueDateRule`</sub>

## `datadog.getSecurityFindingsAutomationDueDateRule`

Get a due date rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityFindingsAutomationDueDateRule(input: {
  /** The ID of the due date rule. */
  rule_id: string;
}): Promise<DueDateRuleResponse>
```

<sub>`GET /api/v2/security/findings/automation/due_date_rules/{rule_id}` · `GetSecurityFindingsAutomationDueDateRule`</sub>

## `datadog.updateSecurityFindingsAutomationDueDateRule`

Update a due date rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityFindingsAutomationDueDateRule(input: {
  data: DueDateRuleDataCreate;
  /** The ID of the due date rule. */
  rule_id: string;
}): Promise<DueDateRuleResponse>
```

<sub>`PUT /api/v2/security/findings/automation/due_date_rules/{rule_id}` · `UpdateSecurityFindingsAutomationDueDateRule`</sub>

## `datadog.reorderSecurityFindingsAutomationDueDateRules`

Reorder due date rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderSecurityFindingsAutomationDueDateRules(input: {
  data: DueDateRuleReorderData;
}): Promise<DueDateRuleReorderRequest>
```

<sub>`POST /api/v2/security/findings/automation/due_date_rules/reorder` · `ReorderSecurityFindingsAutomationDueDateRules`</sub>

## `datadog.listSecurityFindingsAutomationMuteRules`

Get all mute rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFindingsAutomationMuteRules(input: {
  /** The number of rules per page. Maximum is 1000. */
  "page[size]"?: number;
  /** The page number to return. */
  "page[number]"?: number;
}): Promise<MuteRulesResponse>
```

<sub>`GET /api/v2/security/findings/automation/mute_rules` · `ListSecurityFindingsAutomationMuteRules`</sub>

## `datadog.createSecurityFindingsAutomationMuteRule`

Create a mute rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityFindingsAutomationMuteRule(input: {
  data: MuteRuleDataCreate;
}): Promise<MuteRuleResponse>
```

<sub>`POST /api/v2/security/findings/automation/mute_rules` · `CreateSecurityFindingsAutomationMuteRule`</sub>

## `datadog.deleteSecurityFindingsAutomationMuteRule`

Delete a mute rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityFindingsAutomationMuteRule(input: {
  /** The ID of the mute rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/findings/automation/mute_rules/{rule_id}` · `DeleteSecurityFindingsAutomationMuteRule`</sub>

## `datadog.getSecurityFindingsAutomationMuteRule`

Get a mute rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityFindingsAutomationMuteRule(input: {
  /** The ID of the mute rule. */
  rule_id: string;
}): Promise<MuteRuleResponse>
```

<sub>`GET /api/v2/security/findings/automation/mute_rules/{rule_id}` · `GetSecurityFindingsAutomationMuteRule`</sub>

## `datadog.updateSecurityFindingsAutomationMuteRule`

Update a mute rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityFindingsAutomationMuteRule(input: {
  data: MuteRuleDataCreate;
  /** The ID of the mute rule. */
  rule_id: string;
}): Promise<MuteRuleResponse>
```

<sub>`PUT /api/v2/security/findings/automation/mute_rules/{rule_id}` · `UpdateSecurityFindingsAutomationMuteRule`</sub>

## `datadog.reorderSecurityFindingsAutomationMuteRules`

Reorder mute rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderSecurityFindingsAutomationMuteRules(input: {
  data: MuteRuleReorderData;
}): Promise<MuteRuleReorderRequest>
```

<sub>`POST /api/v2/security/findings/automation/mute_rules/reorder` · `ReorderSecurityFindingsAutomationMuteRules`</sub>

## `datadog.listSecurityFindingsAutomationTicketCreationRules`

Get all ticket creation rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityFindingsAutomationTicketCreationRules(input: {
  /** The number of rules per page. Maximum is 1000. */
  "page[size]"?: number;
  /** The page number to return. */
  "page[number]"?: number;
}): Promise<TicketCreationRulesResponse>
```

<sub>`GET /api/v2/security/findings/automation/ticket_creation_rules` · `ListSecurityFindingsAutomationTicketCreationRules`</sub>

## `datadog.createSecurityFindingsAutomationTicketCreationRule`

Create a ticket creation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSecurityFindingsAutomationTicketCreationRule(input: {
  data: TicketCreationRuleDataCreate;
}): Promise<TicketCreationRuleResponse>
```

<sub>`POST /api/v2/security/findings/automation/ticket_creation_rules` · `CreateSecurityFindingsAutomationTicketCreationRule`</sub>

## `datadog.deleteSecurityFindingsAutomationTicketCreationRule`

Delete a ticket creation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSecurityFindingsAutomationTicketCreationRule(input: {
  /** The ID of the ticket creation rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/findings/automation/ticket_creation_rules/{rule_id}` · `DeleteSecurityFindingsAutomationTicketCreationRule`</sub>

## `datadog.getSecurityFindingsAutomationTicketCreationRule`

Get a ticket creation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityFindingsAutomationTicketCreationRule(input: {
  /** The ID of the ticket creation rule. */
  rule_id: string;
}): Promise<TicketCreationRuleResponse>
```

<sub>`GET /api/v2/security/findings/automation/ticket_creation_rules/{rule_id}` · `GetSecurityFindingsAutomationTicketCreationRule`</sub>

## `datadog.updateSecurityFindingsAutomationTicketCreationRule`

Update a ticket creation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSecurityFindingsAutomationTicketCreationRule(input: {
  data: TicketCreationRuleDataCreate;
  /** The ID of the ticket creation rule. */
  rule_id: string;
}): Promise<TicketCreationRuleResponse>
```

<sub>`PUT /api/v2/security/findings/automation/ticket_creation_rules/{rule_id}` · `UpdateSecurityFindingsAutomationTicketCreationRule`</sub>

## `datadog.reorderSecurityFindingsAutomationTicketCreationRules`

Reorder ticket creation rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderSecurityFindingsAutomationTicketCreationRules(input: {
  data: TicketCreationRuleReorderData;
}): Promise<TicketCreationRuleReorderRequest>
```

<sub>`POST /api/v2/security/findings/automation/ticket_creation_rules/reorder` · `ReorderSecurityFindingsAutomationTicketCreationRules`</sub>

## `datadog.detachCase`

Detach security findings from their case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.detachCase(input: {
  data?: DetachCaseRequestData;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/findings/cases` · `DetachCase`</sub>

## `datadog.createCases`

Create cases for security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCases(input: {
  /** Array of case creation request data objects. */
  data: (CreateCaseRequestData)[];
}): Promise<FindingCaseResponseArray>
```

<sub>`POST /api/v2/security/findings/cases` · `CreateCases`</sub>

## `datadog.attachCase`

Attach security findings to a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.attachCase(input: {
  data?: AttachCaseRequestData;
  /** Unique identifier of the case to attach security findings to */
  case_id: string;
}): Promise<FindingCaseResponse>
```

<sub>`PATCH /api/v2/security/findings/cases/{case_id}` · `AttachCase`</sub>

## `datadog.attachJiraIssue`

Attach security findings to a Jira issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.attachJiraIssue(input: {
  data?: AttachJiraIssueRequestData;
}): Promise<FindingCaseResponse>
```

<sub>`PATCH /api/v2/security/findings/jira_issues` · `AttachJiraIssue`</sub>

## `datadog.createJiraIssues`

Create Jira issues for security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createJiraIssues(input: {
  /** Array of Jira issue creation request data objects. */
  data: (CreateJiraIssueRequestData)[];
}): Promise<FindingCaseResponseArray>
```

<sub>`POST /api/v2/security/findings/jira_issues` · `CreateJiraIssues`</sub>

## `datadog.attachLinearIssue`

Attach security findings to a Linear issue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.attachLinearIssue(input: {
  data: AttachLinearIssueRequestData;
}): Promise<FindingCaseResponse>
```

<sub>`PATCH /api/v2/security/findings/linear_issues` · `AttachLinearIssue`</sub>

## `datadog.createLinearIssues`

Create Linear issues for security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLinearIssues(input: {
  /** Array of Linear issue creation request data objects. */
  data: (CreateLinearIssueRequestData)[];
}): Promise<FindingCaseResponseArray>
```

<sub>`POST /api/v2/security/findings/linear_issues` · `CreateLinearIssues`</sub>

## `datadog.muteSecurityFindings`

Mute or unmute security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.muteSecurityFindings(input: {
  data: MuteFindingsRequestData;
}): Promise<MuteFindingsResponse>
```

<sub>`PATCH /api/v2/security/findings/mute` · `MuteSecurityFindings`</sub>

## `datadog.searchSecurityFindings`

Search security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchSecurityFindings(input: {
  data?: SecurityFindingsSearchRequestData;
}): Promise<ListSecurityFindingsResponse>
```

<sub>`POST /api/v2/security/findings/search` · `SearchSecurityFindings`</sub>

## `datadog.attachServiceNowTicket`

Attach security findings to a ServiceNow ticket — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.attachServiceNowTicket(input: {
  data: AttachServiceNowTicketRequestData;
}): Promise<FindingCaseResponse>
```

<sub>`PATCH /api/v2/security/findings/servicenow_tickets` · `AttachServiceNowTicket`</sub>

## `datadog.createServiceNowTickets`

Create ServiceNow tickets for security findings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createServiceNowTickets(input: {
  /** Array of ServiceNow ticket creation request data objects. */
  data: (CreateServiceNowTicketRequestData)[];
}): Promise<FindingCaseResponseArray>
```

<sub>`POST /api/v2/security/findings/servicenow_tickets` · `CreateServiceNowTickets`</sub>

## `datadog.listAssetsSboMs`

List assets SBOMs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAssetsSboMs(input: {
  /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
  "page[token]"?: string;
  /** The page number to be retrieved. It should be equal to or greater than 1. */
  "page[number]"?: number;
  "filter[asset_type]"?: AssetType;
  /** The name of the asset for the SBOM request. */
  "filter[asset_name]"?: string;
  /** The name of the component that is a dependency of an asset. */
  "filter[package_name]"?: string;
  /** The version of the component that is a dependency of an asset. */
  "filter[package_version]"?: string;
  /** The software license name of the component that is a dependency of an asset. */
  "filter[license_name]"?: string;
  "filter[license_type]"?: SbomComponentLicenseType;
}): Promise<ListAssetsSboMsResponse>
```

<sub>`GET /api/v2/security/sboms` · `ListAssetsSBOMs`</sub>

## `datadog.getSbom`

Get SBOM — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSbom(input: {
  asset_type: AssetType;
  /** The name of the asset for the SBOM request. */
  "filter[asset_name]": string;
  /** The container image `repo_digest` for the SBOM request. When the requested asset type is 'Image', this filter is mandatory. */
  "filter[repo_digest]"?: string;
  "ext:format"?: SbomFormat;
}): Promise<GetSbomResponse>
```

<sub>`GET /api/v2/security/sboms/{asset_type}` · `GetSBOM`</sub>

## `datadog.listScannedAssetsMetadata`

List scanned assets metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listScannedAssetsMetadata(input: {
  /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
  "page[token]"?: string;
  /** The page number to be retrieved. It should be equal to or greater than 1. */
  "page[number]"?: number;
  "filter[asset.type]"?: CloudAssetType;
  /** The name of the scanned asset. */
  "filter[asset.name]"?: string;
  /** The origin of last success scan. */
  "filter[last_success.origin]"?: string;
  /** The environment of last success scan. */
  "filter[last_success.env]"?: string;
}): Promise<ScannedAssetsMetadata>
```

<sub>`GET /api/v2/security/scanned-assets-metadata` · `ListScannedAssetsMetadata`</sub>

## `datadog.listIndicatorsOfCompromise`

List indicators of compromise — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIndicatorsOfCompromise(input: {
  /** Number of results per page. */
  limit?: number;
  /** Pagination offset. */
  offset?: number;
  /** Search/filter query (supports field:value syntax). */
  query?: string;
  /** Sort column: score, first_seen_ts_epoch, last_seen_ts_epoch, indicator, indicator_type, signal_count, log_count, category, as_type. */
  "sort[column]"?: string;
  /** Sort order: asc or desc. */
  "sort[order]"?: string;
  /** When true, return only OCSF field-based matches. When false, return regex/message-based matches. */
  ocsf?: boolean;
  /** Filter indicators whose triage state was updated by a specific user identified by their handle. */
  worked_by?: string;
  triage_state?: IoCTriageState;
}): Promise<IoCExplorerListResponse>
```

<sub>`GET /api/v2/security/siem/ioc-explorer` · `ListIndicatorsOfCompromise`</sub>

## `datadog.getIndicatorOfCompromise`

Get an indicator of compromise — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIndicatorOfCompromise(input: {
  /** The indicator value to look up (for example, an IP address or domain). */
  indicator: string;
  /** When true, return only OCSF field-based matches. When false, return regex/message-based matches. */
  ocsf?: boolean;
  /** Include full triage history for the indicator. */
  include_triage_history?: boolean;
  /** Maximum number of triage history events returned. Only applied when `include_triage_history` is true. */
  triage_history_limit?: number;
  /** Pagination offset into the triage history. Only applied when `include_triage_history` is true. */
  triage_history_offset?: number;
}): Promise<GetIoCIndicatorResponse>
```

<sub>`GET /api/v2/security/siem/ioc-explorer/indicator` · `GetIndicatorOfCompromise`</sub>

## `datadog.createIoCTriageState`

Create or update an indicator triage state — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIoCTriageState(input: {
  data: IoCTriageWriteRequestData;
}): Promise<IoCTriageWriteResponse>
```

<sub>`POST /api/v2/security/siem/ioc-explorer/triage` · `CreateIoCTriageState`</sub>

## `datadog.getSignalNotificationRules`

Get the list of signal-based notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSignalNotificationRules(): Promise<NotificationRulesListResponse>
```

<sub>`GET /api/v2/security/signals/notification_rules` · `GetSignalNotificationRules`</sub>

## `datadog.createSignalNotificationRule`

Create a new signal-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSignalNotificationRule(input: {
  data?: CreateNotificationRuleParametersData;
}): Promise<NotificationRuleResponse>
```

<sub>`POST /api/v2/security/signals/notification_rules` · `CreateSignalNotificationRule`</sub>

## `datadog.deleteSignalNotificationRule`

Delete a signal-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSignalNotificationRule(input: {
  /** ID of the notification rule. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/signals/notification_rules/{id}` · `DeleteSignalNotificationRule`</sub>

## `datadog.getSignalNotificationRule`

Get details of a signal-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSignalNotificationRule(input: {
  /** ID of the notification rule. */
  id: string;
}): Promise<NotificationRuleResponse>
```

<sub>`GET /api/v2/security/signals/notification_rules/{id}` · `GetSignalNotificationRule`</sub>

## `datadog.patchSignalNotificationRule`

Patch a signal-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchSignalNotificationRule(input: {
  data?: PatchNotificationRuleParametersData;
  /** ID of the notification rule. */
  id: string;
}): Promise<NotificationRuleResponse>
```

<sub>`PATCH /api/v2/security/signals/notification_rules/{id}` · `PatchSignalNotificationRule`</sub>

## `datadog.listVulnerabilities`

List vulnerabilities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listVulnerabilities(input: {
  /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
  "page[token]"?: string;
  /** The page number to be retrieved. It should be equal or greater than `1` */
  "page[number]"?: number;
  "filter[type]"?: VulnerabilityType;
  /** Filter by vulnerability base (i.e. from the original advisory) severity score. */
  "filter[cvss.base.score][`$op`]"?: number;
  "filter[cvss.base.severity]"?: VulnerabilitySeverity;
  /** Filter by vulnerability base CVSS vector. */
  "filter[cvss.base.vector]"?: string;
  /** Filter by vulnerability Datadog severity score. */
  "filter[cvss.datadog.score][`$op`]"?: number;
  "filter[cvss.datadog.severity]"?: VulnerabilitySeverity;
  /** Filter by vulnerability Datadog CVSS vector. */
  "filter[cvss.datadog.vector]"?: string;
  "filter[status]"?: VulnerabilityStatus;
  "filter[tool]"?: VulnerabilityTool;
  /** Filter by library name. */
  "filter[library.name]"?: string;
  /** Filter by library version. */
  "filter[library.version]"?: string;
  /** Filter by advisory ID. */
  "filter[advisory.id]"?: string;
  /** Filter by exploitation probability. */
  "filter[risks.exploitation_probability]"?: boolean;
  /** Filter by POC exploit availability. */
  "filter[risks.poc_exploit_available]"?: boolean;
  /** Filter by public exploit availability. */
  "filter[risks.exploit_available]"?: boolean;
  /** Filter by vulnerability [EPSS](https://www.first.org/epss/) severity score. */
  "filter[risks.epss.score][`$op`]"?: number;
  "filter[risks.epss.severity]"?: VulnerabilitySeverity;
  /** Filter by language. */
  "filter[language]"?: string;
  "filter[ecosystem]"?: VulnerabilityEcosystem;
  /** Filter by vulnerability location. */
  "filter[code_location.location]"?: string;
  /** Filter by vulnerability file path. */
  "filter[code_location.file_path]"?: string;
  /** Filter by method. */
  "filter[code_location.method]"?: string;
  /** Filter by fix availability. */
  "filter[fix_available]"?: boolean;
  /** Filter by vulnerability `repo_digest` (when the vulnerability is related to `Image` asset). */
  "filter[repo_digests]"?: string;
  /** Filter by origin. */
  "filter[origin]"?: string;
  /** Filter for whether the vulnerability affects a running kernel (for vulnerabilities related to a `Host` asset). */
  "filter[running_kernel]"?: boolean;
  /** Filter by asset name. This field supports the usage of wildcards (*). */
  "filter[asset.name]"?: string;
  "filter[asset.type]"?: AssetType;
  /** Filter by the first version of the asset this vulnerability has been detected on. */
  "filter[asset.version.first]"?: string;
  /** Filter by the last version of the asset this vulnerability has been detected on. */
  "filter[asset.version.last]"?: string;
  /** Filter by the repository url associated to the asset. */
  "filter[asset.repository_url]"?: string;
  /** Filter whether the asset is in production or not. */
  "filter[asset.risks.in_production]"?: boolean;
  /** Filter whether the asset is under attack or not. */
  "filter[asset.risks.under_attack]"?: boolean;
  /** Filter whether the asset is publicly accessible or not. */
  "filter[asset.risks.is_publicly_accessible]"?: boolean;
  /** Filter whether the asset is publicly accessible or not. */
  "filter[asset.risks.has_privileged_access]"?: boolean;
  /** Filter whether the asset  has access to sensitive data or not. */
  "filter[asset.risks.has_access_to_sensitive_data]"?: boolean;
  /** Filter by asset environments. */
  "filter[asset.environments]"?: string;
  /** Filter by asset teams. */
  "filter[asset.teams]"?: string;
  /** Filter by asset architecture. */
  "filter[asset.arch]"?: string;
  /** Filter by asset operating system name. */
  "filter[asset.operating_system.name]"?: string;
  /** Filter by asset operating system version. */
  "filter[asset.operating_system.version]"?: string;
}): Promise<ListVulnerabilitiesResponse>
```

<sub>`GET /api/v2/security/vulnerabilities` · `ListVulnerabilities`</sub>

## `datadog.importSecurityVulnerabilities`

Import security vulnerabilities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.importSecurityVulnerabilities(input: {
  /** The BOM format identifier. Must be `CycloneDX`. */
  bomFormat: string;
  /** The list of scanned software components. Cannot be empty. */
  components: (CycloneDxComponent)[];
  metadata: CycloneDxMetadata;
  /** The CycloneDX specification version. Must be `1.5`. */
  specVersion: string;
  /** The version number of the BOM document. */
  version?: number;
  /** The list of detected vulnerabilities. Cannot be empty. */
  vulnerabilities: (CycloneDxVulnerability)[];
}): Promise<undefined>
```

<sub>`POST /api/v2/security/vulnerabilities` · `ImportSecurityVulnerabilities`</sub>

## `datadog.getVulnerabilityNotificationRules`

Get the list of vulnerability notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getVulnerabilityNotificationRules(): Promise<NotificationRulesListResponse>
```

<sub>`GET /api/v2/security/vulnerabilities/notification_rules` · `GetVulnerabilityNotificationRules`</sub>

## `datadog.createVulnerabilityNotificationRule`

Create a new vulnerability-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createVulnerabilityNotificationRule(input: {
  data?: CreateNotificationRuleParametersData;
}): Promise<NotificationRuleResponse>
```

<sub>`POST /api/v2/security/vulnerabilities/notification_rules` · `CreateVulnerabilityNotificationRule`</sub>

## `datadog.deleteVulnerabilityNotificationRule`

Delete a vulnerability-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteVulnerabilityNotificationRule(input: {
  /** ID of the notification rule. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/security/vulnerabilities/notification_rules/{id}` · `DeleteVulnerabilityNotificationRule`</sub>

## `datadog.getVulnerabilityNotificationRule`

Get details of a vulnerability notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getVulnerabilityNotificationRule(input: {
  /** ID of the notification rule. */
  id: string;
}): Promise<NotificationRuleResponse>
```

<sub>`GET /api/v2/security/vulnerabilities/notification_rules/{id}` · `GetVulnerabilityNotificationRule`</sub>

## `datadog.patchVulnerabilityNotificationRule`

Patch a vulnerability-based notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchVulnerabilityNotificationRule(input: {
  data?: PatchNotificationRuleParametersData;
  /** ID of the notification rule. */
  id: string;
}): Promise<NotificationRuleResponse>
```

<sub>`PATCH /api/v2/security/vulnerabilities/notification_rules/{id}` · `PatchVulnerabilityNotificationRule`</sub>

## `datadog.listVulnerableAssets`

List vulnerable assets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listVulnerableAssets(input: {
  /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
  "page[token]"?: string;
  /** The page number to be retrieved. It should be equal or greater than `1` */
  "page[number]"?: number;
  /** Filter by name. This field supports the usage of wildcards (*). */
  "filter[name]"?: string;
  "filter[type]"?: AssetType;
  /** Filter by the first version of the asset since it has been vulnerable. */
  "filter[version.first]"?: string;
  /** Filter by the last detected version of the asset. */
  "filter[version.last]"?: string;
  /** Filter by the repository url associated to the asset. */
  "filter[repository_url]"?: string;
  /** Filter whether the asset is in production or not. */
  "filter[risks.in_production]"?: boolean;
  /** Filter whether the asset (Service) is under attack or not. */
  "filter[risks.under_attack]"?: boolean;
  /** Filter whether the asset (Host) is publicly accessible or not. */
  "filter[risks.is_publicly_accessible]"?: boolean;
  /** Filter whether the asset (Host) has privileged access or not. */
  "filter[risks.has_privileged_access]"?: boolean;
  /** Filter whether the asset (Host)  has access to sensitive data or not. */
  "filter[risks.has_access_to_sensitive_data]"?: boolean;
  /** Filter by environment. */
  "filter[environments]"?: string;
  /** Filter by teams. */
  "filter[teams]"?: string;
  /** Filter by architecture. */
  "filter[arch]"?: string;
  /** Filter by operating system name. */
  "filter[operating_system.name]"?: string;
  /** Filter by operating system version. */
  "filter[operating_system.version]"?: string;
}): Promise<ListVulnerableAssetsResponse>
```

<sub>`GET /api/v2/security/vulnerable-assets` · `ListVulnerableAssets`</sub>

## `datadog.listSecurityMonitoringHistsignals`

List hist signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSecurityMonitoringHistsignals(input: {
  /** The search query for security signals. */
  "filter[query]"?: string;
  /** The minimum timestamp for requested security signals. */
  "filter[from]"?: string;
  /** The maximum timestamp for requested security signals. */
  "filter[to]"?: string;
  sort?: SecurityMonitoringSignalsSort;
  /** A list of results using the cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** The maximum number of security signals in the response. */
  "page[limit]"?: number;
}): Promise<SecurityMonitoringSignalsListResponse>
```

<sub>`GET /api/v2/siem-historical-detections/histsignals` · `ListSecurityMonitoringHistsignals`</sub>

## `datadog.getSecurityMonitoringHistsignal`

Get a hist signal's details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringHistsignal(input: {
  /** The ID of the historical signal. */
  histsignal_id: string;
}): Promise<SecurityMonitoringSignalResponse>
```

<sub>`GET /api/v2/siem-historical-detections/histsignals/{histsignal_id}` · `GetSecurityMonitoringHistsignal`</sub>

## `datadog.searchSecurityMonitoringHistsignals`

Search hist signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchSecurityMonitoringHistsignals(input: {
  filter?: SecurityMonitoringSignalListRequestFilter;
  page?: SecurityMonitoringSignalListRequestPage;
  sort?: SecurityMonitoringSignalsSort;
}): Promise<SecurityMonitoringSignalsListResponse>
```

<sub>`POST /api/v2/siem-historical-detections/histsignals/search` · `SearchSecurityMonitoringHistsignals`</sub>

## `datadog.listHistoricalJobs`

List historical jobs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listHistoricalJobs(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** The order of the jobs in results. */
  sort?: string;
  /** Query used to filter items from the fetched list. */
  "filter[query]"?: string;
}): Promise<ListHistoricalJobsResponse>
```

<sub>`GET /api/v2/siem-historical-detections/jobs` · `ListHistoricalJobs`</sub>

## `datadog.runHistoricalJob`

Run a historical job — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.runHistoricalJob(input: {
  data?: RunHistoricalJobRequestData;
}): Promise<JobCreateResponse>
```

<sub>`POST /api/v2/siem-historical-detections/jobs` · `RunHistoricalJob`</sub>

## `datadog.deleteHistoricalJob`

Delete an existing job — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteHistoricalJob(input: {
  /** The ID of the job. */
  job_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/siem-historical-detections/jobs/{job_id}` · `DeleteHistoricalJob`</sub>

## `datadog.getHistoricalJob`

Get a job's details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getHistoricalJob(input: {
  /** The ID of the job. */
  job_id: string;
}): Promise<HistoricalJobResponse>
```

<sub>`GET /api/v2/siem-historical-detections/jobs/{job_id}` · `GetHistoricalJob`</sub>

## `datadog.cancelHistoricalJob`

Cancel a historical job — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cancelHistoricalJob(input: {
  /** The ID of the job. */
  job_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/siem-historical-detections/jobs/{job_id}/cancel` · `CancelHistoricalJob`</sub>

## `datadog.getSecurityMonitoringHistsignalsByJobId`

Get a job's hist signals — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecurityMonitoringHistsignalsByJobId(input: {
  /** The ID of the job. */
  job_id: string;
  /** The search query for security signals. */
  "filter[query]"?: string;
  /** The minimum timestamp for requested security signals. */
  "filter[from]"?: string;
  /** The maximum timestamp for requested security signals. */
  "filter[to]"?: string;
  sort?: SecurityMonitoringSignalsSort;
  /** A list of results using the cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** The maximum number of security signals in the response. */
  "page[limit]"?: number;
}): Promise<SecurityMonitoringSignalsListResponse>
```

<sub>`GET /api/v2/siem-historical-detections/jobs/{job_id}/histsignals` · `GetSecurityMonitoringHistsignalsByJobId`</sub>

## `datadog.convertJobResultToSignal`

Convert a job result to a signal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.convertJobResultToSignal(input: {
  data?: ConvertJobResultsToSignalsData;
}): Promise<undefined>
```

<sub>`POST /api/v2/siem-historical-detections/jobs/signal_convert` · `ConvertJobResultToSignal`</sub>

## `datadog.listStaticAnalysisCodegenRulesets`

List codegen rulesets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listStaticAnalysisCodegenRulesets(): Promise<SastRulesetsResponse>
```

<sub>`GET /api/v2/static-analysis/codegen/rulesets` · `ListStaticAnalysisCodegenRulesets`</sub>

## `datadog.getStaticAnalysisDefaultRulesets`

Get default rulesets for a language — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStaticAnalysisDefaultRulesets(input: {
  /** The programming language for which to retrieve the default rulesets. */
  language: string;
}): Promise<DefaultRulesetsPerLanguageResponse>
```

<sub>`GET /api/v2/static-analysis/default-rulesets/{language}` · `GetStaticAnalysisDefaultRulesets`</sub>

## `datadog.listMultipleRulesets`

Ruleset get multiple — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMultipleRulesets(input: {
  data?: GetMultipleRulesetsRequestData;
}): Promise<GetMultipleRulesetsResponse>
```

<sub>`POST /api/v2/static-analysis/rulesets` · `ListMultipleRulesets`</sub>

## `datadog.getStaticAnalysisRuleset`

Get a SAST ruleset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStaticAnalysisRuleset(input: {
  /** The name of the ruleset to retrieve. */
  ruleset_name: string;
  /** When true, test cases for each rule are included in the response. */
  include_tests?: boolean;
  /** When true, rules that are in testing mode are included in the response. */
  include_testing_rules?: boolean;
}): Promise<SastRulesetResponse>
```

<sub>`GET /api/v2/static-analysis/rulesets/{ruleset_name}` · `GetStaticAnalysisRuleset`</sub>

## `datadog.getSecretsRules`

Returns a list of Secrets rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSecretsRules(): Promise<SecretRuleArray>
```

<sub>`GET /api/v2/static-analysis/secrets/rules` · `GetSecretsRules`</sub>

## `datadog.createStaticAnalysisServerAnalysis`

Analyze code — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createStaticAnalysisServerAnalysis(input: {
  data: AnalysisRequestData;
}): Promise<AnalysisResponse>
```

<sub>`POST /api/v2/static-analysis/static-analysis-server/analyze` · `CreateStaticAnalysisServerAnalysis`</sub>

## `datadog.createStaticAnalysisAst`

Get AST for source code — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createStaticAnalysisAst(input: {
  data: GetAstRequestData;
}): Promise<GetAstResponse>
```

<sub>`POST /api/v2/static-analysis/static-analysis-server/get-ast` · `CreateStaticAnalysisAst`</sub>

## `datadog.getStaticAnalysisNodeTypes`

Get node types for a language — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStaticAnalysisNodeTypes(input: {
  /** The programming language for which to retrieve node type definitions. */
  language: string;
}): Promise<NodeTypesResponse>
```

<sub>`GET /api/v2/static-analysis/static-analysis-server/node-types/{language}` · `GetStaticAnalysisNodeTypes`</sub>

## `datadog.getStaticAnalysisTreeSitterWasm`

Get tree-sitter WASM file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStaticAnalysisTreeSitterWasm(input: {
  /** The name of the WASM file to download. */
  file: string;
}): Promise<string>
```

<sub>`GET /api/v2/static-analysis/static-analysis-server/tree-sitter-wasm/{file}` · `GetStaticAnalysisTreeSitterWasm`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
