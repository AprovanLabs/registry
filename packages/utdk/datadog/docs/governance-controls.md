# Governance Controls

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listGovernanceControls`

List governance controls — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGovernanceControls(): Promise<GovernanceControlsResponse>
```

<sub>`GET /api/v2/governance/control` · `ListGovernanceControls`</sub>

## `datadog.getGovernanceControl`

Get a governance control — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGovernanceControl(input: {
  /** The detection type that identifies the control, for example `unused_api_keys`. */
  detection_type: string;
}): Promise<GovernanceControlResponse>
```

<sub>`GET /api/v2/governance/control/{detection_type}` · `GetGovernanceControl`</sub>

## `datadog.updateGovernanceControl`

Update a governance control — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGovernanceControl(input: {
  data: GovernanceControlUpdateData;
  /** The detection type that identifies the control, for example `unused_api_keys`. */
  detection_type: string;
}): Promise<GovernanceControlResponse>
```

<sub>`PATCH /api/v2/governance/control/{detection_type}` · `UpdateGovernanceControl`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
