# Entity Integration Configs

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteEntityIntegrationConfig`

Delete an entity integration configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteEntityIntegrationConfig(input: {
  /** The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`. */
  integration_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/idp/entity_integrations/{integration_id}` · `DeleteEntityIntegrationConfig`</sub>

## `datadog.getEntityIntegrationConfig`

Get an entity integration configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEntityIntegrationConfig(input: {
  /** The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`. */
  integration_id: string;
}): Promise<EntityIntegrationConfigResponse>
```

<sub>`GET /api/v2/idp/entity_integrations/{integration_id}` · `GetEntityIntegrationConfig`</sub>

## `datadog.updateEntityIntegrationConfig`

Create or update entity integration configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateEntityIntegrationConfig(input: {
  data: EntityIntegrationConfigRequestData;
  /** The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`. */
  integration_id: string;
}): Promise<EntityIntegrationConfigResponse>
```

<sub>`PUT /api/v2/idp/entity_integrations/{integration_id}` · `UpdateEntityIntegrationConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
