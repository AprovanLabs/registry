# Web Vitals

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.webVitalsRetrieve`

Get web vitals for a specific pathname. Toolbar accesses this via OAuth (handled by TeamAndOrgViewSetMixin.get_authenticators).

```ts
posthog.webVitalsRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/web_vitals/` · `web_vitals_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
