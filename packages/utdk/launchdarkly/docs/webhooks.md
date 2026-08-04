# Webhooks

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAllWebhooks`

List webhooks — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAllWebhooks(): Promise<Webhooks>
```

<sub>`GET /api/v2/webhooks` · `getAllWebhooks`</sub>

## `launchdarkly.postWebhook`

Creates a webhook — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postWebhook(input: {
  /** A human-readable name for your webhook */
  name?: string;
  /** The URL of the remote webhook */
  url: string;
  /** If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a secret for you. */
  secret?: string;
  /** Represents a Custom role policy, defining a resource kinds filter the webhook should respond to. */
  statements?: StatementPostList;
  /** If sign is false, the webhook does not include a signature header, and the secret can be omitted. */
  sign: boolean;
  /** Whether or not this webhook is enabled. */
  on: boolean;
  /** List of tags for this webhook */
  tags?: (string)[];
}): Promise<Webhook>
```

<sub>`POST /api/v2/webhooks` · `postWebhook`</sub>

## `launchdarkly.deleteWebhook`

Delete webhook — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteWebhook(input: {
  /** The ID of the webhook to delete */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/webhooks/{id}` · `deleteWebhook`</sub>

## `launchdarkly.getWebhook`

Get webhook — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getWebhook(input: {
  /** The ID of the webhook */
  id: string;
}): Promise<Webhook>
```

<sub>`GET /api/v2/webhooks/{id}` · `getWebhook`</sub>

## `launchdarkly.patchWebhook`

Update webhook — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchWebhook(input: {
  body: JsonPatch;
  /** The ID of the webhook to update */
  id: string;
}): Promise<Webhook>
```

<sub>`PATCH /api/v2/webhooks/{id}` · `patchWebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
