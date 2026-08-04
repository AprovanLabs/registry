# Managed Viewsets

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.managedViewsetsRetrieve`

Get all views associated with a specific managed viewset. GET /api/environments/{team_id}/managed_viewsets/{kind}/

```ts
posthog.managedViewsetsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/managed_viewsets/{kind}/` · `managed_viewsets_retrieve`</sub>

## `posthog.managedViewsetsUpdate`

Enable or disable a managed viewset by kind. PUT /api/environments/{team_id}/managed_viewsets/{kind}/ with body {"enabled": true/false}

```ts
posthog.managedViewsetsUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/managed_viewsets/{kind}/` · `managed_viewsets_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
