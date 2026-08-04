# Action Connection

8 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAppKeyRegistrations`

List App Key Registrations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAppKeyRegistrations(input: {
  /** The number of App Key Registrations to return per page. */
  "page[size]"?: number;
  /** The page number to return. */
  "page[number]"?: number;
}): Promise<ListAppKeyRegistrationsResponse>
```

<sub>`GET /api/v2/actions/app_key_registrations` · `ListAppKeyRegistrations`</sub>

## `datadog.unregisterAppKey`

Unregister an App Key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unregisterAppKey(input: {
  /** The ID of the app key */
  app_key_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/actions/app_key_registrations/{app_key_id}` · `UnregisterAppKey`</sub>

## `datadog.getAppKeyRegistration`

Get an existing App Key Registration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAppKeyRegistration(input: {
  /** The ID of the app key */
  app_key_id: string;
}): Promise<GetAppKeyRegistrationResponse>
```

<sub>`GET /api/v2/actions/app_key_registrations/{app_key_id}` · `GetAppKeyRegistration`</sub>

## `datadog.registerAppKey`

Register a new App Key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.registerAppKey(input: {
  /** The ID of the app key */
  app_key_id: string;
}): Promise<RegisterAppKeyResponse>
```

<sub>`PUT /api/v2/actions/app_key_registrations/{app_key_id}` · `RegisterAppKey`</sub>

## `datadog.createActionConnection`

Create a new Action Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createActionConnection(input: {
  data: ActionConnectionData;
}): Promise<CreateActionConnectionResponse>
```

<sub>`POST /api/v2/actions/connections` · `CreateActionConnection`</sub>

## `datadog.deleteActionConnection`

Delete an existing Action Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteActionConnection(input: {
  /** The ID of the action connection */
  connection_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/actions/connections/{connection_id}` · `DeleteActionConnection`</sub>

## `datadog.getActionConnection`

Get an existing Action Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getActionConnection(input: {
  /** The ID of the action connection */
  connection_id: string;
}): Promise<GetActionConnectionResponse>
```

<sub>`GET /api/v2/actions/connections/{connection_id}` · `GetActionConnection`</sub>

## `datadog.updateActionConnection`

Update an existing Action Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateActionConnection(input: {
  data: ActionConnectionDataUpdate;
  /** The ID of the action connection */
  connection_id: string;
}): Promise<UpdateActionConnectionResponse>
```

<sub>`PATCH /api/v2/actions/connections/{connection_id}` · `UpdateActionConnection`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
