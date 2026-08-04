# Logs Custom Destinations

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listLogsCustomDestinations`

Get all custom destinations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLogsCustomDestinations(): Promise<CustomDestinationsResponse>
```

<sub>`GET /api/v2/logs/config/custom-destinations` · `ListLogsCustomDestinations`</sub>

## `datadog.createLogsCustomDestination`

Create a custom destination — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLogsCustomDestination(input: {
  data?: CustomDestinationCreateRequestDefinition;
}): Promise<CustomDestinationResponse>
```

<sub>`POST /api/v2/logs/config/custom-destinations` · `CreateLogsCustomDestination`</sub>

## `datadog.deleteLogsCustomDestination`

Delete a custom destination — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLogsCustomDestination(input: {
  /** The ID of the custom destination. */
  custom_destination_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/custom-destinations/{custom_destination_id}` · `DeleteLogsCustomDestination`</sub>

## `datadog.getLogsCustomDestination`

Get a custom destination — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLogsCustomDestination(input: {
  /** The ID of the custom destination. */
  custom_destination_id: string;
}): Promise<CustomDestinationResponse>
```

<sub>`GET /api/v2/logs/config/custom-destinations/{custom_destination_id}` · `GetLogsCustomDestination`</sub>

## `datadog.updateLogsCustomDestination`

Update a custom destination — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLogsCustomDestination(input: {
  data?: CustomDestinationUpdateRequestDefinition;
  /** The ID of the custom destination. */
  custom_destination_id: string;
}): Promise<CustomDestinationResponse>
```

<sub>`PATCH /api/v2/logs/config/custom-destinations/{custom_destination_id}` · `UpdateLogsCustomDestination`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
