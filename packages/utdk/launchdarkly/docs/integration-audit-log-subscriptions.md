# Integration Audit Log Subscriptions

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getSubscriptions`

Get audit log subscriptions by integration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSubscriptions(input: {
  /** The integration key */
  integrationKey: string;
}): Promise<Integrations>
```

<sub>`GET /api/v2/integrations/{integrationKey}` · `getSubscriptions`</sub>

## `launchdarkly.createSubscription`

Create audit log subscription — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createSubscription(input: {
  /** A human-friendly name for your audit log subscription. */
  name: string;
  /** The set of resources you wish to subscribe to audit log notifications for. */
  statements?: StatementPostList;
  /** Whether or not you want your subscription to actively send events. */
  on?: boolean;
  /** An array of tags for this subscription. */
  tags?: (string)[];
  /** The unique set of fields required to configure an audit log subscription integration of this type. Refer to the <code>formVariables</code> field in the corresponding <code>manifest.json</code> at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure. */
  config: { [key: string]: unknown | undefined };
  /** Slack webhook receiver URL. Only necessary for legacy Slack webhook integrations. */
  url?: string;
  /** Datadog API key. Only necessary for legacy Datadog webhook integrations. */
  apiKey?: string;
  /** The integration key */
  integrationKey: string;
}): Promise<Integration>
```

<sub>`POST /api/v2/integrations/{integrationKey}` · `createSubscription`</sub>

## `launchdarkly.deleteSubscription`

Delete audit log subscription — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteSubscription(input: {
  /** The integration key */
  integrationKey: string;
  /** The subscription ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/{integrationKey}/{id}` · `deleteSubscription`</sub>

## `launchdarkly.getSubscriptionById`

Get audit log subscription by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSubscriptionById(input: {
  /** The integration key */
  integrationKey: string;
  /** The subscription ID */
  id: string;
}): Promise<Integration>
```

<sub>`GET /api/v2/integrations/{integrationKey}/{id}` · `getSubscriptionByID`</sub>

## `launchdarkly.updateSubscription`

Update audit log subscription — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateSubscription(input: {
  body: JsonPatch;
  /** The integration key */
  integrationKey: string;
  /** The ID of the audit log subscription */
  id: string;
}): Promise<Integration>
```

<sub>`PATCH /api/v2/integrations/{integrationKey}/{id}` · `updateSubscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
