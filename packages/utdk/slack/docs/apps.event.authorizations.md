# Apps.Event.Authorizations

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsEventAuthorizationsList`

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to. — [API reference](https://api.slack.com/methods/apps.event.authorizations.list)

```ts
slack.appsEventAuthorizationsList(input: {
  event_context: string;
  cursor?: string;
  limit?: number;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /apps.event.authorizations.list` · `apps_event_authorizations_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
