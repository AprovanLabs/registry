# Dashboard Secure Embed

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createDashboardSecureEmbed`

Create a secure embed for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDashboardSecureEmbed(input: {
  data: SecureEmbedCreateRequestData;
  /** The ID of the dashboard. */
  dashboard_id: string;
}): Promise<SecureEmbedCreateResponse>
```

<sub>`POST /api/v2/dashboard/{dashboard_id}/shared/secure-embed` · `CreateDashboardSecureEmbed`</sub>

## `datadog.deleteDashboardSecureEmbed`

Delete a secure embed for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDashboardSecureEmbed(input: {
  /** The ID of the dashboard. */
  dashboard_id: string;
  /** The share token identifying the secure embed. */
  token: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}` · `DeleteDashboardSecureEmbed`</sub>

## `datadog.getDashboardSecureEmbed`

Get a secure embed for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDashboardSecureEmbed(input: {
  /** The ID of the dashboard. */
  dashboard_id: string;
  /** The share token identifying the secure embed. */
  token: string;
}): Promise<SecureEmbedGetResponse>
```

<sub>`GET /api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}` · `GetDashboardSecureEmbed`</sub>

## `datadog.updateDashboardSecureEmbed`

Update a secure embed for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDashboardSecureEmbed(input: {
  data: SecureEmbedUpdateRequestData;
  /** The ID of the dashboard. */
  dashboard_id: string;
  /** The share token identifying the secure embed. */
  token: string;
}): Promise<SecureEmbedUpdateResponse>
```

<sub>`PATCH /api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}` · `UpdateDashboardSecureEmbed`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
