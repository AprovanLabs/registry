# Deployment Gates

12 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listDeploymentGates`

Get all deployment gates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDeploymentGates(input: {
  /** Cursor for pagination. Use the `meta.page.next_cursor` value from the previous response. */
  "page[cursor]"?: string;
  /** Number of results per page. Defaults to 50. Must be between 1 and 1000. */
  "page[size]"?: number;
}): Promise<DeploymentGatesListResponse>
```

<sub>`GET /api/v2/deployment_gates` · `ListDeploymentGates`</sub>

## `datadog.createDeploymentGate`

Create deployment gate — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDeploymentGate(input: {
  data: CreateDeploymentGateParamsData;
}): Promise<DeploymentGateResponse>
```

<sub>`POST /api/v2/deployment_gates` · `CreateDeploymentGate`</sub>

## `datadog.getDeploymentGateRules`

Get rules for a deployment gate — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDeploymentGateRules(input: {
  /** The ID of the deployment gate. */
  gate_id: string;
}): Promise<DeploymentGateRulesResponse>
```

<sub>`GET /api/v2/deployment_gates/{gate_id}/rules` · `GetDeploymentGateRules`</sub>

## `datadog.createDeploymentRule`

Create deployment rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDeploymentRule(input: {
  data?: CreateDeploymentRuleParamsData;
  /** The ID of the deployment gate. */
  gate_id: string;
}): Promise<DeploymentRuleResponse>
```

<sub>`POST /api/v2/deployment_gates/{gate_id}/rules` · `CreateDeploymentRule`</sub>

## `datadog.deleteDeploymentRule`

Delete deployment rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDeploymentRule(input: {
  /** The ID of the deployment gate. */
  gate_id: string;
  /** The ID of the deployment rule. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/deployment_gates/{gate_id}/rules/{id}` · `DeleteDeploymentRule`</sub>

## `datadog.getDeploymentRule`

Get deployment rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDeploymentRule(input: {
  /** The ID of the deployment gate. */
  gate_id: string;
  /** The ID of the deployment rule. */
  id: string;
}): Promise<DeploymentRuleResponse>
```

<sub>`GET /api/v2/deployment_gates/{gate_id}/rules/{id}` · `GetDeploymentRule`</sub>

## `datadog.updateDeploymentRule`

Update deployment rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDeploymentRule(input: {
  data: UpdateDeploymentRuleParamsData;
  /** The ID of the deployment gate. */
  gate_id: string;
  /** The ID of the deployment rule. */
  id: string;
}): Promise<DeploymentRuleResponse>
```

<sub>`PUT /api/v2/deployment_gates/{gate_id}/rules/{id}` · `UpdateDeploymentRule`</sub>

## `datadog.deleteDeploymentGate`

Delete deployment gate — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDeploymentGate(input: {
  /** The ID of the deployment gate. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/deployment_gates/{id}` · `DeleteDeploymentGate`</sub>

## `datadog.getDeploymentGate`

Get deployment gate — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDeploymentGate(input: {
  /** The ID of the deployment gate. */
  id: string;
}): Promise<DeploymentGateResponse>
```

<sub>`GET /api/v2/deployment_gates/{id}` · `GetDeploymentGate`</sub>

## `datadog.updateDeploymentGate`

Update deployment gate — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDeploymentGate(input: {
  data: UpdateDeploymentGateParamsData;
  /** The ID of the deployment gate. */
  id: string;
}): Promise<DeploymentGateResponse>
```

<sub>`PUT /api/v2/deployment_gates/{id}` · `UpdateDeploymentGate`</sub>

## `datadog.triggerDeploymentGatesEvaluation`

Trigger a deployment gate evaluation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.triggerDeploymentGatesEvaluation(input: {
  data: DeploymentGatesEvaluationRequestData;
}): Promise<DeploymentGatesEvaluationResponse>
```

<sub>`POST /api/v2/deployments/gates/evaluation` · `TriggerDeploymentGatesEvaluation`</sub>

## `datadog.getDeploymentGatesEvaluationResult`

Get a deployment gate evaluation result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDeploymentGatesEvaluationResult(input: {
  /** The evaluation ID returned by the trigger endpoint. */
  id: string;
}): Promise<DeploymentGatesEvaluationResultResponse>
```

<sub>`GET /api/v2/deployments/gates/evaluation/{id}` · `GetDeploymentGatesEvaluationResult`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
