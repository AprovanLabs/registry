# Webhooks

7 operations · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getTeamWebhooks`

[Deprecated] Get team webhooks — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getTeamWebhooks(input: {
  /** ID of team to get webhooks for */
  team_id: string;
}): Promise<{ webhooks: (WebhookV2)[] }>
```

<sub>`GET /v2/teams/{team_id}/webhooks` · `getTeamWebhooks`</sub>

## `figma.getWebhooks`

Get webhooks by context or plan — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getWebhooks(input: {
  /** Context to create the resource on. Should be "team", "project", or "file". */
  context?: string;
  /** The id of the context that you want to get attached webhooks for. If you're using context_id, you cannot use plan_api_id. */
  context_id?: string;
  /** The id of your plan. Use this to get all webhooks for all contexts you have access to. If you're using plan_api_id, you cannot use context or context_id. When you use plan_api_id, the response is paginated. */
  plan_api_id?: string;
  /** If you're using plan_api_id, this is the cursor to use for pagination. If you're using context or context_id, this parameter is ignored. Provide the next_page or prev_page value from the previous response to get the next or previous page of results. */
  cursor?: string;
}): Promise<{ webhooks: (WebhookV2)[]; pagination?: ResponsePagination }>
```

<sub>`GET /v2/webhooks` · `getWebhooks`</sub>

## `figma.postWebhook`

Create a webhook — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.postWebhook(input: {
  event_type: WebhookV2Event;
  /** Team id to receive updates about. This is deprecated, use 'context' and 'context_id' instead. */
  team_id?: string;
  /** Context to create the webhook for. Must be "team", "project", or "file". */
  context: string;
  /** The id of the context you want to receive updates about. */
  context_id: string;
  /** The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters. */
  endpoint: string;
  /** String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters. */
  passcode: string;
  /** State of the webhook, including any error state it may be in */
  status?: WebhookV2Status;
  /** User provided description or name for the webhook. Max length 150 characters. */
  description?: string;
}): Promise<WebhookV2>
```

<sub>`POST /v2/webhooks` · `postWebhook`</sub>

## `figma.deleteWebhook`

Delete a webhook — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.deleteWebhook(input: {
  /** ID of webhook to delete */
  webhook_id: string;
}): Promise<WebhookV2>
```

<sub>`DELETE /v2/webhooks/{webhook_id}` · `deleteWebhook`</sub>

## `figma.getWebhook`

Get a webhook — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getWebhook(input: {
  /** ID of webhook to get */
  webhook_id: string;
}): Promise<WebhookV2>
```

<sub>`GET /v2/webhooks/{webhook_id}` · `getWebhook`</sub>

## `figma.putWebhook`

Update a webhook — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.putWebhook(input: {
  event_type: WebhookV2Event;
  /** The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters. */
  endpoint: string;
  /** String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters. */
  passcode: string;
  /** State of the webhook, including any error state it may be in */
  status?: WebhookV2Status;
  /** User provided description or name for the webhook. Max length 150 characters. */
  description?: string;
  /** ID of webhook to update */
  webhook_id: string;
}): Promise<WebhookV2>
```

<sub>`PUT /v2/webhooks/{webhook_id}` · `putWebhook`</sub>

## `figma.getWebhookRequests`

Get webhook requests — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getWebhookRequests(input: {
  /** The id of the webhook subscription you want to see events from */
  webhook_id: string;
}): Promise<{ requests: (WebhookV2Request)[] }>
```

<sub>`GET /v2/webhooks/{webhook_id}/requests` · `getWebhookRequests`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
