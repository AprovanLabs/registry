# Web Integrations

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listWebIntegrationAccounts`

List web integration accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listWebIntegrationAccounts(input: {
  /** The name of the integration (for example, `databricks`). */
  integration_name: string;
}): Promise<WebIntegrationAccountsResponse>
```

<sub>`GET /api/v2/web-integrations/{integration_name}/accounts` · `ListWebIntegrationAccounts`</sub>

## `datadog.createWebIntegrationAccount`

Create a web integration account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createWebIntegrationAccount(input: {
  data: WebIntegrationAccountCreateRequestData;
  /** The name of the integration (for example, `databricks`). */
  integration_name: string;
}): Promise<WebIntegrationAccountResponse>
```

<sub>`POST /api/v2/web-integrations/{integration_name}/accounts` · `CreateWebIntegrationAccount`</sub>

## `datadog.deleteWebIntegrationAccount`

Delete a web integration account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteWebIntegrationAccount(input: {
  /** The name of the integration (for example, `databricks`). */
  integration_name: string;
  /** The unique identifier of the web integration account. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/web-integrations/{integration_name}/accounts/{account_id}` · `DeleteWebIntegrationAccount`</sub>

## `datadog.getWebIntegrationAccount`

Get a web integration account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getWebIntegrationAccount(input: {
  /** The name of the integration (for example, `databricks`). */
  integration_name: string;
  /** The unique identifier of the web integration account. */
  account_id: string;
}): Promise<WebIntegrationAccountResponse>
```

<sub>`GET /api/v2/web-integrations/{integration_name}/accounts/{account_id}` · `GetWebIntegrationAccount`</sub>

## `datadog.updateWebIntegrationAccount`

Update a web integration account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateWebIntegrationAccount(input: {
  data: WebIntegrationAccountUpdateRequestData;
  /** The name of the integration (for example, `databricks`). */
  integration_name: string;
  /** The unique identifier of the web integration account. */
  account_id: string;
}): Promise<WebIntegrationAccountResponse>
```

<sub>`PATCH /api/v2/web-integrations/{integration_name}/accounts/{account_id}` · `UpdateWebIntegrationAccount`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
