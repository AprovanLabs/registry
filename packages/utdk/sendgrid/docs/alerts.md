# Alerts

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getAlerts`

Retrieve all alerts — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAlerts(options?: { headers?: { Authorization?: string; "on-behalf-of"?: string } }): Promise<({ created_at: number; email_to: string; frequency?: string; id: number; percentage?: number; type: "usage_limit" | "stats_notification"; updated_at?: number })[]>
```

<sub>`GET /alerts` · `GET_alerts`</sub>

## `sendgrid.postAlerts`

Create a new Alert — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAlerts(input: {
  /** The email address the alert will be sent to. Example: test@example.com */
  email_to: string | null;
  /** Required for stats_notification. How frequently the alert will be sent. Example: daily */
  frequency?: string;
  /** Required for usage_alert. When this usage threshold is reached, the alert will be sent. Example: 90 */
  percentage?: number;
  /** The type of alert you want to create. Can be either usage_limit or stats_notification. Example: usage_limit */
  type: "stats_notification" | "usage_limit";
}, options?: { headers?: { Authorization?: string; "on-behalf-of"?: string } }): Promise<{ created_at: number; email_to: string; frequency?: string; id: number; percentage?: number; type: string; updated_at: number }>
```

<sub>`POST /alerts` · `POST_alerts`</sub>

## `sendgrid.deleteAlertsAlertId`

Delete an alert — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAlertsAlertId(input: {
  /** The ID of the alert you would like to retrieve. */
  alert_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /alerts/{alert_id}` · `DELETE_alerts-alert_id`</sub>

## `sendgrid.getAlertsAlertId`

Retrieve a specific alert — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAlertsAlertId(input: {
  /** The ID of the alert you would like to retrieve. */
  alert_id: number;
}, options?: { headers?: { Authorization?: string; "on-behalf-of"?: string } }): Promise<{ created_at: number; email_to: string; frequency?: string; id: number; percentage?: number; type: "usage_alert" | "stats_notification"; updated_at: number }>
```

<sub>`GET /alerts/{alert_id}` · `GET_alerts-alert_id`</sub>

## `sendgrid.patchAlertsAlertId`

Update an alert — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchAlertsAlertId(input: {
  /** The new email address you want your alert to be sent to. Example: test@example.com */
  email_to?: string;
  /** The new frequency at which to send the stats_notification alert. Example: monthly */
  frequency?: string;
  /** The new percentage threshold at which the usage_limit alert will be sent. Example: 90 */
  percentage?: number;
  /** The ID of the alert you would like to retrieve. */
  alert_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ created_at: number; email_to: string; frequency?: string; id: number; percentage?: number; type: "usage_alert" | "stats_notification"; updated_at: number }>
```

<sub>`PATCH /alerts/{alert_id}` · `PATCH_alerts-alert_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
