# Uploaded Media

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.uploadedMediaCreate`

When object storage is available this API allows upload of media which can be used, for example, in text cards on dashboards. Uploaded media must have a content type beginning with 'image/' and be less than 4MB.

```ts
posthog.uploadedMediaCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/uploaded_media/` · `uploaded_media_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
