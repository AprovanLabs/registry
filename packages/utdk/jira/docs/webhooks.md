# Webhooks

5 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.deleteWebhookById`

Delete webhooks by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWebhookById(input: {
  /** A list of webhook IDs. */
  webhookIds: (number)[];
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/webhook` · `deleteWebhookById`</sub>

## `jira.getDynamicWebhooksForApp`

Get dynamic webhooks for app — [Provider docs](http://www.atlassian.com)

```ts
jira.getDynamicWebhooksForApp(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanWebhook>
```

<sub>`GET /rest/api/3/webhook` · `getDynamicWebhooksForApp`</sub>

## `jira.registerDynamicWebhooks`

Register dynamic webhooks — [Provider docs](http://www.atlassian.com)

```ts
jira.registerDynamicWebhooks(input: {
  /** The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered. */
  url: string;
  /** A list of webhooks. */
  webhooks: (WebhookDetails)[];
}): Promise<ContainerForRegisteredWebhooks>
```

<sub>`POST /rest/api/3/webhook` · `registerDynamicWebhooks`</sub>

## `jira.getFailedWebhooks`

Get failed webhooks — [Provider docs](http://www.atlassian.com)

```ts
jira.getFailedWebhooks(input: {
  /** The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page. */
  maxResults?: number;
  /** The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch. */
  after?: number;
}): Promise<FailedWebhooks>
```

<sub>`GET /rest/api/3/webhook/failed` · `getFailedWebhooks`</sub>

## `jira.refreshWebhooks`

Extend webhook life — [Provider docs](http://www.atlassian.com)

```ts
jira.refreshWebhooks(input: {
  /** A list of webhook IDs. */
  webhookIds: (number)[];
}): Promise<WebhooksExpirationDate>
```

<sub>`PUT /rest/api/3/webhook/refresh` · `refreshWebhooks`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
