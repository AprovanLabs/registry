# AWS Integration

20 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAwsAccounts`

List all AWS integrations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsAccounts(input: {
  /** Optional query parameter to filter accounts by AWS Account ID. If not provided, all accounts are returned. */
  aws_account_id?: string;
}): Promise<AwsAccountsResponse>
```

<sub>`GET /api/v2/integration/aws/accounts` · `ListAWSAccounts`</sub>

## `datadog.createAwsAccount`

Create an AWS integration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsAccount(input: {
  data: AwsAccountCreateRequestData;
}): Promise<AwsAccountResponse>
```

<sub>`POST /api/v2/integration/aws/accounts` · `CreateAWSAccount`</sub>

## `datadog.deleteAwsAccount`

Delete an AWS integration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAwsAccount(input: {
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/aws/accounts/{aws_account_config_id}` · `DeleteAWSAccount`</sub>

## `datadog.getAwsAccount`

Get an AWS integration by config ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsAccount(input: {
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsAccountResponse>
```

<sub>`GET /api/v2/integration/aws/accounts/{aws_account_config_id}` · `GetAWSAccount`</sub>

## `datadog.updateAwsAccount`

Update an AWS integration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAwsAccount(input: {
  data: AwsAccountUpdateRequestData;
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsAccountResponse>
```

<sub>`PATCH /api/v2/integration/aws/accounts/{aws_account_config_id}` · `UpdateAWSAccount`</sub>

## `datadog.deleteAwsAccountCcmConfig`

Delete AWS CCM config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAwsAccountCcmConfig(input: {
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config` · `DeleteAWSAccountCCMConfig`</sub>

## `datadog.getAwsAccountCcmConfig`

Get AWS CCM config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsAccountCcmConfig(input: {
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsCcmConfigResponse>
```

<sub>`GET /api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config` · `GetAWSAccountCCMConfig`</sub>

## `datadog.updateAwsAccountCcmConfig`

Update AWS CCM config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAwsAccountCcmConfig(input: {
  data: AwsCcmConfigRequestData;
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsCcmConfigResponse>
```

<sub>`PATCH /api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config` · `UpdateAWSAccountCCMConfig`</sub>

## `datadog.createAwsAccountCcmConfig`

Create AWS CCM config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsAccountCcmConfig(input: {
  data: AwsCcmConfigRequestData;
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsCcmConfigResponse>
```

<sub>`POST /api/v2/integration/aws/accounts/{aws_account_config_id}/ccm_config` · `CreateAWSAccountCCMConfig`</sub>

## `datadog.getAwsMetricNameFilterPreview`

Get AWS metric name filter preview — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsMetricNameFilterPreview(input: {
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsMetricNameFilterPreviewResponse>
```

<sub>`GET /api/v2/integration/aws/accounts/{aws_account_config_id}/metric_name_filter_preview` · `GetAWSMetricNameFilterPreview`</sub>

## `datadog.previewAwsMetricNameFilter`

Preview AWS metric name filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.previewAwsMetricNameFilter(input: {
  data: AwsMetricNameFilterPreviewRequestData;
  /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
  aws_account_config_id: string;
}): Promise<AwsMetricNameFilterPreviewResponse>
```

<sub>`POST /api/v2/integration/aws/accounts/{aws_account_config_id}/metric_name_filter_preview` · `PreviewAWSMetricNameFilter`</sub>

## `datadog.listAwsNamespaces`

List available namespaces — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsNamespaces(): Promise<AwsNamespacesResponse>
```

<sub>`GET /api/v2/integration/aws/available_namespaces` · `ListAWSNamespaces`</sub>

## `datadog.deleteAwsEventBridgeSource`

Delete an Amazon EventBridge source — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAwsEventBridgeSource(input: {
  data: AwsEventBridgeDeleteRequestData;
}): Promise<AwsEventBridgeDeleteResponse>
```

<sub>`DELETE /api/v2/integration/aws/event_bridge` · `DeleteAWSEventBridgeSource`</sub>

## `datadog.listAwsEventBridgeSources`

Get all Amazon EventBridge sources — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsEventBridgeSources(): Promise<AwsEventBridgeListResponse>
```

<sub>`GET /api/v2/integration/aws/event_bridge` · `ListAWSEventBridgeSources`</sub>

## `datadog.createAwsEventBridgeSource`

Create an Amazon EventBridge source — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsEventBridgeSource(input: {
  data: AwsEventBridgeCreateRequestData;
}): Promise<AwsEventBridgeCreateResponse>
```

<sub>`POST /api/v2/integration/aws/event_bridge` · `CreateAWSEventBridgeSource`</sub>

## `datadog.createNewAwsExternalId`

Generate a new external ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createNewAwsExternalId(): Promise<AwsNewExternalIdResponse>
```

<sub>`POST /api/v2/integration/aws/generate_new_external_id` · `CreateNewAWSExternalID`</sub>

## `datadog.getAwsIntegrationIamPermissions`

Get AWS integration IAM permissions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsIntegrationIamPermissions(): Promise<AwsIntegrationIamPermissionsResponse>
```

<sub>`GET /api/v2/integration/aws/iam_permissions` · `GetAWSIntegrationIAMPermissions`</sub>

## `datadog.getAwsIntegrationIamPermissionsResourceCollection`

Get resource collection IAM permissions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsIntegrationIamPermissionsResourceCollection(): Promise<AwsIntegrationIamPermissionsResponse>
```

<sub>`GET /api/v2/integration/aws/iam_permissions/resource_collection` · `GetAWSIntegrationIAMPermissionsResourceCollection`</sub>

## `datadog.getAwsIntegrationIamPermissionsStandard`

Get AWS integration standard IAM permissions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsIntegrationIamPermissionsStandard(): Promise<AwsIntegrationIamPermissionsResponse>
```

<sub>`GET /api/v2/integration/aws/iam_permissions/standard` · `GetAWSIntegrationIAMPermissionsStandard`</sub>

## `datadog.validateAwsccmConfig`

Validate AWS CCM config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateAwsccmConfig(input: {
  data: AwsCcmConfigValidationRequestData;
}): Promise<AwsCcmConfigValidationResponse>
```

<sub>`POST /api/v2/integration/aws/validate_ccm_config` · `ValidateAWSCCMConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
