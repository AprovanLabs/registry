# Agentless Scanning

18 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAwsScanOptions`

List AWS scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsScanOptions(): Promise<AwsScanOptionsListResponse>
```

<sub>`GET /api/v2/agentless_scanning/accounts/aws` · `ListAwsScanOptions`</sub>

## `datadog.createAwsScanOptions`

Create AWS scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsScanOptions(input: {
  data: AwsScanOptionsCreateData;
}): Promise<AwsScanOptionsResponse>
```

<sub>`POST /api/v2/agentless_scanning/accounts/aws` · `CreateAwsScanOptions`</sub>

## `datadog.deleteAwsScanOptions`

Delete AWS scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAwsScanOptions(input: {
  /** The ID of an AWS account. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/agentless_scanning/accounts/aws/{account_id}` · `DeleteAwsScanOptions`</sub>

## `datadog.getAwsScanOptions`

Get AWS scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsScanOptions(input: {
  /** The ID of an AWS account. */
  account_id: string;
}): Promise<AwsScanOptionsResponse>
```

<sub>`GET /api/v2/agentless_scanning/accounts/aws/{account_id}` · `GetAwsScanOptions`</sub>

## `datadog.updateAwsScanOptions`

Update AWS scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAwsScanOptions(input: {
  data: AwsScanOptionsUpdateData;
  /** The ID of an AWS account. */
  account_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/agentless_scanning/accounts/aws/{account_id}` · `UpdateAwsScanOptions`</sub>

## `datadog.listAzureScanOptions`

List Azure scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAzureScanOptions(): Promise<AzureScanOptionsArray>
```

<sub>`GET /api/v2/agentless_scanning/accounts/azure` · `ListAzureScanOptions`</sub>

## `datadog.createAzureScanOptions`

Create Azure scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAzureScanOptions(input: {
  data?: AzureScanOptionsData;
}): Promise<AzureScanOptions>
```

<sub>`POST /api/v2/agentless_scanning/accounts/azure` · `CreateAzureScanOptions`</sub>

## `datadog.deleteAzureScanOptions`

Delete Azure scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteAzureScanOptions(input: {
  /** The Azure subscription ID. */
  subscription_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/agentless_scanning/accounts/azure/{subscription_id}` · `DeleteAzureScanOptions`</sub>

## `datadog.getAzureScanOptions`

Get Azure scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAzureScanOptions(input: {
  /** The Azure subscription ID. */
  subscription_id: string;
}): Promise<AzureScanOptions>
```

<sub>`GET /api/v2/agentless_scanning/accounts/azure/{subscription_id}` · `GetAzureScanOptions`</sub>

## `datadog.updateAzureScanOptions`

Update Azure scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAzureScanOptions(input: {
  data?: AzureScanOptionsInputUpdateData;
  /** The Azure subscription ID. */
  subscription_id: string;
}): Promise<AzureScanOptions>
```

<sub>`PATCH /api/v2/agentless_scanning/accounts/azure/{subscription_id}` · `UpdateAzureScanOptions`</sub>

## `datadog.listGcpScanOptions`

List GCP scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGcpScanOptions(): Promise<GcpScanOptionsArray>
```

<sub>`GET /api/v2/agentless_scanning/accounts/gcp` · `ListGcpScanOptions`</sub>

## `datadog.createGcpScanOptions`

Create GCP scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createGcpScanOptions(input: {
  data?: GcpScanOptionsData;
}): Promise<GcpScanOptions>
```

<sub>`POST /api/v2/agentless_scanning/accounts/gcp` · `CreateGcpScanOptions`</sub>

## `datadog.deleteGcpScanOptions`

Delete GCP scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGcpScanOptions(input: {
  /** The GCP project ID. */
  project_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/agentless_scanning/accounts/gcp/{project_id}` · `DeleteGcpScanOptions`</sub>

## `datadog.getGcpScanOptions`

Get GCP scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGcpScanOptions(input: {
  /** The GCP project ID. */
  project_id: string;
}): Promise<GcpScanOptions>
```

<sub>`GET /api/v2/agentless_scanning/accounts/gcp/{project_id}` · `GetGcpScanOptions`</sub>

## `datadog.updateGcpScanOptions`

Update GCP scan options — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGcpScanOptions(input: {
  data?: GcpScanOptionsInputUpdateData;
  /** The GCP project ID. */
  project_id: string;
}): Promise<GcpScanOptions>
```

<sub>`PATCH /api/v2/agentless_scanning/accounts/gcp/{project_id}` · `UpdateGcpScanOptions`</sub>

## `datadog.listAwsOnDemandTasks`

List AWS on demand tasks — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAwsOnDemandTasks(): Promise<AwsOnDemandListResponse>
```

<sub>`GET /api/v2/agentless_scanning/ondemand/aws` · `ListAwsOnDemandTasks`</sub>

## `datadog.createAwsOnDemandTask`

Create AWS on demand task — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAwsOnDemandTask(input: {
  data: AwsOnDemandCreateData;
}): Promise<AwsOnDemandResponse>
```

<sub>`POST /api/v2/agentless_scanning/ondemand/aws` · `CreateAwsOnDemandTask`</sub>

## `datadog.getAwsOnDemandTask`

Get AWS on demand task — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAwsOnDemandTask(input: {
  /** The UUID of the task. */
  task_id: string;
}): Promise<AwsOnDemandResponse>
```

<sub>`GET /api/v2/agentless_scanning/ondemand/aws/{task_id}` · `GetAwsOnDemandTask`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
