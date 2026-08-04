# Slack Integration

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listSlackUserBindings`

List Slack user bindings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSlackUserBindings(input: {
  /** The UUID of the Datadog user to list Slack bindings for. */
  user_uuid: string;
}): Promise<SlackUserBindingsResponse>
```

<sub>`GET /api/v2/integration/slack/user-bindings` · `ListSlackUserBindings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
