# Heatmap Screenshots

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.heatmapScreenshotsContentRetrieve`

Fetch the rendered screenshot image (JPEG bytes) for a saved heatmap at a given viewport width. Returns 202 with the saved-heatmap metadata while the screenshot is still being generated.

```ts
posthog.heatmapScreenshotsContentRetrieve(): Promise<string>
```

<sub>`GET /api/projects/{project_id}/heatmap_screenshots/{id}/content/` · `heatmap_screenshots_content_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
