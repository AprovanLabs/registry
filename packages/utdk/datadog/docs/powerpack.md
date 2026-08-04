# Powerpack

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listPowerpacks`

Get all powerpacks — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listPowerpacks(input: {
  /** Maximum number of powerpacks in the response. */
  "page[limit]"?: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
}): Promise<ListPowerpacksResponse>
```

<sub>`GET /api/v2/powerpacks` · `ListPowerpacks`</sub>

## `datadog.createPowerpack`

Create a new powerpack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createPowerpack(input: {
  data?: PowerpackData;
}): Promise<PowerpackResponse>
```

<sub>`POST /api/v2/powerpacks` · `CreatePowerpack`</sub>

## `datadog.deletePowerpack`

Delete a powerpack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deletePowerpack(input: {
  /** Powerpack id */
  powerpack_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/powerpacks/{powerpack_id}` · `DeletePowerpack`</sub>

## `datadog.getPowerpack`

Get a Powerpack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPowerpack(input: {
  /** ID of the powerpack. */
  powerpack_id: string;
}): Promise<PowerpackResponse>
```

<sub>`GET /api/v2/powerpacks/{powerpack_id}` · `GetPowerpack`</sub>

## `datadog.updatePowerpack`

Update a powerpack — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updatePowerpack(input: {
  data?: PowerpackData;
  /** ID of the powerpack. */
  powerpack_id: string;
}): Promise<PowerpackResponse>
```

<sub>`PATCH /api/v2/powerpacks/{powerpack_id}` · `UpdatePowerpack`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
