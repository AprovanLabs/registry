# Webhooks

5 operations · `@utdk/linear`

```ts
import linear from "@utdk/linear";
```

## `linear.listWebhooks`

List webhooks — [Provider docs](https://developers.linear.app)

```ts
linear.listWebhooks(input: {
  /** Pagination cursor for fetching the next page of results */
  cursor?: string;
  /** Maximum number of webhooks to return (1-250) */
  limit?: number;
}): Promise<WebhookList>
```

<sub>`GET /webhooks` · `listWebhooks`</sub>

## `linear.createWebhook`

Create a webhook — [Provider docs](https://developers.linear.app)

```ts
linear.createWebhook(input: {
  /** URL to receive webhook event payloads */
  url: string;
  /** HMAC secret for signing webhook payloads */
  secret?: string;
  /** Whether to enable the webhook immediately */
  enabled?: boolean;
  /** Resource types to subscribe to */
  resourceTypes?: (string)[];
  /** Team to scope this webhook to (omit for workspace-wide) */
  teamId?: string;
}): Promise<Webhook>
```

<sub>`POST /webhooks` · `createWebhook`</sub>

## `linear.deleteWebhook`

Delete a webhook — [Provider docs](https://developers.linear.app)

```ts
linear.deleteWebhook(input: {
  /** The unique identifier of the webhook to delete */
  webhookId: string;
}): Promise<{ success?: boolean; lastSyncId?: number }>
```

<sub>`DELETE /webhooks/{webhookId}` · `deleteWebhook`</sub>

## `linear.getWebhook`

Get a webhook — [Provider docs](https://developers.linear.app)

```ts
linear.getWebhook(input: {
  /** The unique identifier of the webhook */
  webhookId: string;
}): Promise<Webhook>
```

<sub>`GET /webhooks/{webhookId}` · `getWebhook`</sub>

## `linear.updateWebhook`

Update a webhook — [Provider docs](https://developers.linear.app)

```ts
linear.updateWebhook(input: {
  /** New URL for the webhook */
  url?: string;
  /** New HMAC secret */
  secret?: string;
  /** Enable or disable the webhook */
  enabled?: boolean;
  /** Updated list of resource types to subscribe to */
  resourceTypes?: (string)[];
  /** The unique identifier of the webhook */
  webhookId: string;
}): Promise<Webhook>
```

<sub>`PATCH /webhooks/{webhookId}` · `updateWebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
