# Rum Rate Limit

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteRumRateLimitConfig`

Delete a RUM rate limit configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumRateLimitConfig(input: {
  scope_type: RumRateLimitScopeType;
  /** The identifier of the scope the rate limit configuration applies to. For the `application` scope, this is the RUM application ID. */
  scope_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/config/rate-limit/{scope_type}/{scope_id}` · `DeleteRumRateLimitConfig`</sub>

## `datadog.getRumRateLimitConfig`

Get a RUM rate limit configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumRateLimitConfig(input: {
  scope_type: RumRateLimitScopeType;
  /** The identifier of the scope the rate limit configuration applies to. For the `application` scope, this is the RUM application ID. */
  scope_id: string;
}): Promise<RumRateLimitConfigResponse>
```

<sub>`GET /api/v2/rum/config/rate-limit/{scope_type}/{scope_id}` · `GetRumRateLimitConfig`</sub>

## `datadog.updateRumRateLimitConfig`

Create or update a RUM rate limit configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumRateLimitConfig(input: {
  data: RumRateLimitConfigUpdateData;
  scope_type: RumRateLimitScopeType;
  /** The identifier of the scope the rate limit configuration applies to. For the `application` scope, this is the RUM application ID. */
  scope_id: string;
}): Promise<RumRateLimitConfigResponse>
```

<sub>`PUT /api/v2/rum/config/rate-limit/{scope_type}/{scope_id}` · `UpdateRumRateLimitConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
