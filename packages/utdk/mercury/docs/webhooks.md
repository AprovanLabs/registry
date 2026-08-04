# Webhooks

6 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getWebhooks`

Get webhook endpoints

```ts
mercury.getWebhooks(input: {
  status?: ("active" | "paused" | "disabled" | "deleted")[];
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the webhook to start the page after (exclusive). When provided, results will begin with the webhook immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the webhook to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<ApiWebhooksPaginatedResponse>
```

<sub>`GET /webhooks` · `getWebhooks`</sub>

## `mercury.createWebhook`

Create a new webhook endpoint

```ts
mercury.createWebhook(input: {
  /**  Optional array of event types to subscribe to. Nothing means subscribe to all event types. */
  eventTypes?: (WebhookEventType)[] | null;
  /**  Optional array of resource field paths to filter events by. When specified, webhook events will only be sent when one of these fields changes. Nothing means no filtering (all events are sent). */
  filterPaths?: (ResourceField)[] | null;
  /**  The URL to which webhook events will be delivered */
  url: string;
}): Promise<ApiWebhookResponse>
```

<sub>`POST /webhooks` · `createWebhook`</sub>

## `mercury.deleteWebhook`

Delete a webhook endpoint

```ts
mercury.deleteWebhook(input: {
  /** ID for the webhook */
  webhookEndpointId: string;
}): Promise<undefined>
```

<sub>`DELETE /webhooks/{webhookEndpointId}` · `deleteWebhook`</sub>

## `mercury.getWebhook`

Get webhook endpoint by ID

```ts
mercury.getWebhook(input: {
  /** ID for the webhook */
  webhookEndpointId: string;
}): Promise<ApiWebhookResponse>
```

<sub>`GET /webhooks/{webhookEndpointId}` · `getWebhook`</sub>

## `mercury.updateWebhook`

Update an existing webhook endpoint

```ts
mercury.updateWebhook(input: {
  /**  Event types to subscribe to. Send null to subscribe to all event types. Send an array to subscribe to specific types. Omit to leave unchanged. */
  eventTypes?: (WebhookEventType)[] | null;
  /**  Resource field paths to filter events by. When specified, webhook events will only be sent when one of these fields changes. Send null for no filtering. Send an array to filter by specific fields. Omit to leave unchanged. */
  filterPaths?: (ResourceField)[] | null;
  status?: WebhookUpdateStatus & unknown | null;
  /**  The URL to which webhook events will be delivered. Omit to leave unchanged. */
  url?: string | null;
  /** ID for the webhook */
  webhookEndpointId: string;
}): Promise<ApiWebhookResponse>
```

<sub>`POST /webhooks/{webhookEndpointId}` · `updateWebhook`</sub>

## `mercury.verifyWebhook`

Verify a webhook endpoint

```ts
mercury.verifyWebhook(input: {
  eventType?: WebhookEventType & unknown | null;
  /** ID for the webhook */
  webhookEndpointId: string;
}): Promise<undefined>
```

<sub>`POST /webhooks/{webhookEndpointId}/verify` · `verifyWebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
