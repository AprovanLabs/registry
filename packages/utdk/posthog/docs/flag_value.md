# Flag Value

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.flagValueValuesRetrieve`

Get possible values for a feature flag. Query parameters: - key: The flag ID (required) Returns: - Array of objects with 'name' field containing possible values

```ts
posthog.flagValueValuesRetrieve(): Promise<{ results: ({ name: unknown })[]; refreshing: boolean }>
```

<sub>`GET /api/projects/{project_id}/flag_value/values/` · `flag_value_values_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
