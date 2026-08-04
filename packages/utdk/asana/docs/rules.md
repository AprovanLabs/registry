# Rules

1 operation · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.triggerRule`

Trigger a rule — [Provider docs](https://asana.com/support)

```ts
asana.triggerRule(input: {
  data?: RuleTriggerRequest;
  /** The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint. */
  rule_trigger_gid: string;
}): Promise<{ data?: RuleTriggerResponse }>
```

<sub>`POST /rule_triggers/{rule_trigger_gid}/run` · `triggerRule`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
