# Quota Limits

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.quotaLimitsList`

Get a team's quota-limit state

```ts
posthog.quotaLimitsList(): Promise<({ limited: { [key: string]: { limited: boolean; usage: number | null; limit: number | null } | undefined }; code_usage_billing_active: boolean })[]>
```

<sub>`GET /api/projects/{project_id}/quota_limits/` · `quota_limits_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
