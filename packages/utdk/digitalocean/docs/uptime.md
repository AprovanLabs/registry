# Uptime

11 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.uptimeListChecks`

List All Checks

```ts
digitalocean.uptimeListChecks(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ checks?: (Check)[] } & Pagination & Meta>
```

<sub>`GET /v2/uptime/checks` · `uptime_list_checks`</sub>

## `digitalocean.uptimeCreateCheck`

Create a New Check

```ts
digitalocean.uptimeCreateCheck(input: {
  /** A human-friendly display name. */
  name: string;
  /** The type of health check to perform. */
  type: "ping" | "http" | "https";
  /** The endpoint to perform healthchecks on. */
  target: string;
  /** An array containing the selected regions to perform healthchecks from. */
  regions: ("us_east" | "us_west" | "eu_west" | "se_asia")[];
  /** A boolean value indicating whether the check is enabled/disabled. */
  enabled: boolean;
}): Promise<{ check?: Check }>
```

<sub>`POST /v2/uptime/checks` · `uptime_create_check`</sub>

## `digitalocean.uptimeDeleteCheck`

Delete a Check

```ts
digitalocean.uptimeDeleteCheck(input: {
  /** A unique identifier for a check. */
  check_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/uptime/checks/{check_id}` · `uptime_delete_check`</sub>

## `digitalocean.uptimeGetCheck`

Retrieve an Existing Check

```ts
digitalocean.uptimeGetCheck(input: {
  /** A unique identifier for a check. */
  check_id: string;
}): Promise<{ check?: Check }>
```

<sub>`GET /v2/uptime/checks/{check_id}` · `uptime_get_check`</sub>

## `digitalocean.uptimeUpdateCheck`

Update a Check

```ts
digitalocean.uptimeUpdateCheck(input: {
  /** A human-friendly display name. */
  name?: string;
  /** The type of health check to perform. */
  type?: "ping" | "http" | "https";
  /** The endpoint to perform healthchecks on. */
  target?: string;
  /** An array containing the selected regions to perform healthchecks from. */
  regions?: ("us_east" | "us_west" | "eu_west" | "se_asia")[];
  /** A boolean value indicating whether the check is enabled/disabled. */
  enabled?: boolean;
  /** A unique identifier for a check. */
  check_id: string;
}): Promise<{ check?: Check }>
```

<sub>`PUT /v2/uptime/checks/{check_id}` · `uptime_update_check`</sub>

## `digitalocean.uptimeListAlerts`

List All Alerts

```ts
digitalocean.uptimeListAlerts(input: {
  /** A unique identifier for a check. */
  check_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ alerts?: (Alert)[] } & Pagination & Meta>
```

<sub>`GET /v2/uptime/checks/{check_id}/alerts` · `uptime_list_alerts`</sub>

## `digitalocean.uptimeCreateAlert`

Create a New Alert

```ts
digitalocean.uptimeCreateAlert(input: {
  /** A unique ID that can be used to identify and reference the alert. */
  id?: string;
  /** A human-friendly display name. */
  name: string;
  /** The type of alert. */
  type: "latency" | "down" | "down_global" | "ssl_expiry";
  /** The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type. */
  threshold?: number;
  /** The comparison operator used against the alert's threshold. */
  comparison?: "greater_than" | "less_than";
  notifications: Notification;
  /** Period of time the threshold must be exceeded to trigger the alert. */
  period: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
  /** A unique identifier for a check. */
  check_id: string;
}): Promise<{ alert?: Alert }>
```

<sub>`POST /v2/uptime/checks/{check_id}/alerts` · `uptime_create_alert`</sub>

## `digitalocean.uptimeDeleteAlert`

Delete an Alert

```ts
digitalocean.uptimeDeleteAlert(input: {
  /** A unique identifier for a check. */
  check_id: string;
  /** A unique identifier for an alert. */
  alert_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/uptime/checks/{check_id}/alerts/{alert_id}` · `uptime_delete_alert`</sub>

## `digitalocean.uptimeGetAlert`

Retrieve an Existing Alert

```ts
digitalocean.uptimeGetAlert(input: {
  /** A unique identifier for a check. */
  check_id: string;
  /** A unique identifier for an alert. */
  alert_id: string;
}): Promise<{ alert?: Alert }>
```

<sub>`GET /v2/uptime/checks/{check_id}/alerts/{alert_id}` · `uptime_get_alert`</sub>

## `digitalocean.uptimeUpdateAlert`

Update an Alert

```ts
digitalocean.uptimeUpdateAlert(input: {
  /** A human-friendly display name. */
  name: string;
  /** The type of alert. */
  type: "latency" | "down" | "down_global" | "ssl_expiry";
  /** The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type. */
  threshold?: number;
  /** The comparison operator used against the alert's threshold. */
  comparison?: "greater_than" | "less_than";
  notifications: Notification;
  /** Period of time the threshold must be exceeded to trigger the alert. */
  period: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
  /** A unique identifier for a check. */
  check_id: string;
  /** A unique identifier for an alert. */
  alert_id: string;
}): Promise<{ alert?: Alert }>
```

<sub>`PUT /v2/uptime/checks/{check_id}/alerts/{alert_id}` · `uptime_update_alert`</sub>

## `digitalocean.uptimeGetCheckState`

Retrieve Check State

```ts
digitalocean.uptimeGetCheckState(input: {
  /** A unique identifier for a check. */
  check_id: string;
}): Promise<{ state?: State }>
```

<sub>`GET /v2/uptime/checks/{check_id}/state` · `uptime_get_checkState`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
