# Statuspage Integration

8 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteStatuspageAccount`

Delete the Statuspage account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteStatuspageAccount(): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/statuspage/account` · `DeleteStatuspageAccount`</sub>

## `datadog.getStatuspageAccount`

Get the Statuspage account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStatuspageAccount(): Promise<StatuspageAccountResponse>
```

<sub>`GET /api/v2/integration/statuspage/account` · `GetStatuspageAccount`</sub>

## `datadog.updateStatuspageAccount`

Update the Statuspage account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateStatuspageAccount(input: {
  data: StatuspageAccountUpdateData;
}): Promise<StatuspageAccountResponse>
```

<sub>`PATCH /api/v2/integration/statuspage/account` · `UpdateStatuspageAccount`</sub>

## `datadog.createStatuspageAccount`

Create the Statuspage account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createStatuspageAccount(input: {
  data: StatuspageAccountCreateData;
}): Promise<StatuspageAccountResponse>
```

<sub>`POST /api/v2/integration/statuspage/account` · `CreateStatuspageAccount`</sub>

## `datadog.listStatuspageUrlSettings`

Get all Statuspage URL settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listStatuspageUrlSettings(): Promise<StatuspageUrlSettingsResponse>
```

<sub>`GET /api/v2/integration/statuspage/url_settings` · `ListStatuspageUrlSettings`</sub>

## `datadog.createStatuspageUrlSetting`

Create a Statuspage URL setting — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createStatuspageUrlSetting(input: {
  data: StatuspageUrlSettingCreateData;
}): Promise<StatuspageUrlSettingResponse>
```

<sub>`POST /api/v2/integration/statuspage/url_settings` · `CreateStatuspageUrlSetting`</sub>

## `datadog.deleteStatuspageUrlSetting`

Delete a Statuspage URL setting — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteStatuspageUrlSetting(input: {
  /** The UUID of the Statuspage URL setting. */
  statuspage_url_setting_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/statuspage/url_settings/{statuspage_url_setting_id}` · `DeleteStatuspageUrlSetting`</sub>

## `datadog.updateStatuspageUrlSetting`

Update a Statuspage URL setting — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateStatuspageUrlSetting(input: {
  data: StatuspageUrlSettingUpdateData;
  /** The UUID of the Statuspage URL setting. */
  statuspage_url_setting_id: string;
}): Promise<StatuspageUrlSettingResponse>
```

<sub>`PATCH /api/v2/integration/statuspage/url_settings/{statuspage_url_setting_id}` · `UpdateStatuspageUrlSetting`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
