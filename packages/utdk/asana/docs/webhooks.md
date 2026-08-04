# Webhooks

5 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getWebhooks`

Get multiple webhooks — [Provider docs](https://asana.com/support)

```ts
asana.getWebhooks(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The workspace to query for webhooks in. */
  workspace: string;
  /** Only return webhooks for the given resource. */
  resource?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("active" | "created_at" | "delivery_retry_count" | "failure_deletion_timestamp" | "filters" | "filters.action" | "filters.fields" | "filters.resource_subtype" | "last_failure_at" | "last_failure_content" | "last_success_at" | "next_attempt_after" | "offset" | "path" | "resource" | "resource.name" | "target" | "uri")[];
}): Promise<{ data?: (WebhookResponse)[]; next_page?: NextPage }>
```

<sub>`GET /webhooks` · `getWebhooks`</sub>

## `asana.createWebhook`

Establish a webhook — [Provider docs](https://asana.com/support)

```ts
asana.createWebhook(input: {
  data?: WebhookRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("active" | "created_at" | "delivery_retry_count" | "failure_deletion_timestamp" | "filters" | "filters.action" | "filters.fields" | "filters.resource_subtype" | "last_failure_at" | "last_failure_content" | "last_success_at" | "next_attempt_after" | "resource" | "resource.name" | "target")[];
}): Promise<{ data?: WebhookResponse; "X-Hook-Secret"?: string }>
```

<sub>`POST /webhooks` · `createWebhook`</sub>

## `asana.deleteWebhook`

Delete a webhook — [Provider docs](https://asana.com/support)

```ts
asana.deleteWebhook(input: {
  /** Globally unique identifier for the webhook. */
  webhook_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /webhooks/{webhook_gid}` · `deleteWebhook`</sub>

## `asana.getWebhook`

Get a webhook — [Provider docs](https://asana.com/support)

```ts
asana.getWebhook(input: {
  /** Globally unique identifier for the webhook. */
  webhook_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("active" | "created_at" | "delivery_retry_count" | "failure_deletion_timestamp" | "filters" | "filters.action" | "filters.fields" | "filters.resource_subtype" | "last_failure_at" | "last_failure_content" | "last_success_at" | "next_attempt_after" | "resource" | "resource.name" | "target")[];
}): Promise<{ data?: WebhookResponse }>
```

<sub>`GET /webhooks/{webhook_gid}` · `getWebhook`</sub>

## `asana.updateWebhook`

Update a webhook — [Provider docs](https://asana.com/support)

```ts
asana.updateWebhook(input: {
  data?: WebhookUpdateRequest;
  /** Globally unique identifier for the webhook. */
  webhook_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("active" | "created_at" | "delivery_retry_count" | "failure_deletion_timestamp" | "filters" | "filters.action" | "filters.fields" | "filters.resource_subtype" | "last_failure_at" | "last_failure_content" | "last_success_at" | "next_attempt_after" | "resource" | "resource.name" | "target")[];
}): Promise<{ data?: WebhookResponse }>
```

<sub>`PUT /webhooks/{webhook_gid}` · `updateWebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
