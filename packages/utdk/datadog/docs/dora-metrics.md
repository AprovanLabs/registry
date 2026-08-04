# DORA Metrics

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createDoraDeployment`

Send a deployment event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDoraDeployment(input: {
  data: DoraDeploymentRequestData;
}): Promise<DoraDeploymentResponse>
```

<sub>`POST /api/v2/dora/deployment` · `CreateDORADeployment`</sub>

## `datadog.deleteDoraDeployment`

Delete a deployment event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDoraDeployment(input: {
  /** The ID of the deployment event to delete. */
  deployment_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/dora/deployment/{deployment_id}` · `DeleteDORADeployment`</sub>

## `datadog.listDoraDeployments`

Get a list of deployment events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDoraDeployments(input: {
  data: DoraListDeploymentsRequestData;
}): Promise<DoraDeploymentsListResponse>
```

<sub>`POST /api/v2/dora/deployments` · `ListDORADeployments`</sub>

## `datadog.getDoraDeployment`

Get a deployment event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDoraDeployment(input: {
  /** The ID of the deployment event. */
  deployment_id: string;
}): Promise<DoraDeploymentFetchResponse>
```

<sub>`GET /api/v2/dora/deployments/{deployment_id}` · `GetDORADeployment`</sub>

## `datadog.patchDoraDeployment`

Patch a deployment event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchDoraDeployment(input: {
  data: DoraDeploymentPatchRequestData;
  /** The ID of the deployment event. */
  deployment_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/dora/deployments/{deployment_id}` · `PatchDORADeployment`</sub>

## `datadog.createDoraFailure`

Send an incident event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDoraFailure(input: {
  data: DoraFailureRequestData;
}): Promise<DoraFailureResponse>
```

<sub>`POST /api/v2/dora/failure` · `CreateDORAFailure`</sub>

## `datadog.deleteDoraFailure`

Delete an incident event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDoraFailure(input: {
  /** The ID of the incident event to delete. */
  failure_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/dora/failure/{failure_id}` · `DeleteDORAFailure`</sub>

## `datadog.listDoraFailures`

Get a list of incident events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDoraFailures(input: {
  data: DoraListFailuresRequestData;
}): Promise<DoraFailuresListResponse>
```

<sub>`POST /api/v2/dora/failures` · `ListDORAFailures`</sub>

## `datadog.getDoraFailure`

Get an incident event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDoraFailure(input: {
  /** The ID of the incident event. */
  failure_id: string;
}): Promise<DoraFailureFetchResponse>
```

<sub>`GET /api/v2/dora/failures/{failure_id}` · `GetDORAFailure`</sub>

## `datadog.createDoraIncident`

Send an incident event (legacy) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDoraIncident(input: {
  data: DoraFailureRequestData;
}): Promise<DoraFailureResponse>
```

<sub>`POST /api/v2/dora/incident` · `CreateDORAIncident`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
