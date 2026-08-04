# User Home Settings

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.userHomeSettingsRetrieve`

Get the authenticated user's pinned sidebar tabs and configured homepage for the current team. Pass `@me` as the UUID.

```ts
posthog.userHomeSettingsRetrieve(): Promise<{ tabs?: ({ id?: string; pathname?: string; search?: string; hash?: string; title?: string; customTitle?: string | null; iconType?: string; sceneId?: string | null; sceneKey?: string | null; sceneParams?: unknown; pinned?: boolean })[]; homepage?: { id?: string; pathname?: string; search?: string; hash?: string; title?: string; customTitle?: string | null; iconType?: string; sceneId?: string | nu...>
```

<sub>`GET /api/user_home_settings/{uuid}/` · `user_home_settings_retrieve`</sub>

## `posthog.userHomeSettingsPartialUpdate`

Update the authenticated user's pinned sidebar tabs and/or homepage for the current team. Pass `@me` as the UUID. Send `tabs` to replace the pinned tab list, `homepage` to set the home destination (any PostHog URL — dashboard, insight, search results, scene). Either field may be omitted to leave it unchanged; sending `homepage: null` or `{}` clears the homepage.

```ts
posthog.userHomeSettingsPartialUpdate(): Promise<{ tabs?: ({ id?: string; pathname?: string; search?: string; hash?: string; title?: string; customTitle?: string | null; iconType?: string; sceneId?: string | null; sceneKey?: string | null; sceneParams?: unknown; pinned?: boolean })[]; homepage?: { id?: string; pathname?: string; search?: string; hash?: string; title?: string; customTitle?: string | null; iconType?: string; sceneId?: string | nu...>
```

<sub>`PATCH /api/user_home_settings/{uuid}/` · `user_home_settings_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
