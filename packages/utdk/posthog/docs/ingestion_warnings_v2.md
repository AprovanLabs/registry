# Ingestion Warnings V2

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.ingestionWarningsV2List`

List ingestion warnings

```ts
posthog.ingestionWarningsV2List(): Promise<({ type: string; category: string; severity: string; count: number; last_seen: string; sparkline: ({ timestamp: string; count: number })[]; samples: ({ timestamp: string; source: string; pipeline_step: string; event_uuid: string | null; distinct_id: string | null; person_id: string | null; group_key: string | null; details: { [key: string]: unknown } })[] })[]>
```

<sub>`GET /api/projects/{project_id}/ingestion_warnings_v2/` · `ingestion_warnings_v2_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
