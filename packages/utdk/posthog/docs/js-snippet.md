# Js Snippet

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.jsSnippetResolveRetrieve`

Preview what a given pin would resolve to, without saving it.

```ts
posthog.jsSnippetResolveRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/js-snippet/resolve/` · `js_snippet_resolve_retrieve`</sub>

## `posthog.jsSnippetVersionRetrieve`

Return the team's current version pin and resolved version.

```ts
posthog.jsSnippetVersionRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/js-snippet/version/` · `js_snippet_version_retrieve`</sub>

## `posthog.jsSnippetVersionPartialUpdate`

Update the team's version pin.

```ts
posthog.jsSnippetVersionPartialUpdate(): Promise<{ [key: string]: unknown }>
```

<sub>`PATCH /api/projects/{project_id}/js-snippet/version/` · `js_snippet_version_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
