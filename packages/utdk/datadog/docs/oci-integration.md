# OCI Integration

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listTenancyProducts`

List tenancy products — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTenancyProducts(input: {
  /** Comma-separated list of product keys to filter by. */
  productKeys: string;
}): Promise<TenancyProductsList>
```

<sub>`GET /api/v2/integration/oci/products` · `ListTenancyProducts`</sub>

## `datadog.getTenancyConfigs`

Get tenancy configs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTenancyConfigs(): Promise<TenancyConfigList>
```

<sub>`GET /api/v2/integration/oci/tenancies` · `GetTenancyConfigs`</sub>

## `datadog.createTenancyConfig`

Create tenancy config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTenancyConfig(input: {
  data: CreateTenancyConfigData;
}): Promise<TenancyConfig>
```

<sub>`POST /api/v2/integration/oci/tenancies` · `CreateTenancyConfig`</sub>

## `datadog.deleteTenancyConfig`

Delete tenancy config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTenancyConfig(input: {
  /** The OCID of the tenancy config to delete. */
  tenancy_ocid: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/oci/tenancies/{tenancy_ocid}` · `DeleteTenancyConfig`</sub>

## `datadog.getTenancyConfig`

Get tenancy config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTenancyConfig(input: {
  /** The OCID of the tenancy config to retrieve. */
  tenancy_ocid: string;
}): Promise<TenancyConfig>
```

<sub>`GET /api/v2/integration/oci/tenancies/{tenancy_ocid}` · `GetTenancyConfig`</sub>

## `datadog.updateTenancyConfig`

Update tenancy config — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTenancyConfig(input: {
  data: UpdateTenancyConfigData;
  /** The OCID of the tenancy config to update. */
  tenancy_ocid: string;
}): Promise<TenancyConfig>
```

<sub>`PATCH /api/v2/integration/oci/tenancies/{tenancy_ocid}` · `UpdateTenancyConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
