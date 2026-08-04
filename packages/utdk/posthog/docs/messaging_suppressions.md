# Messaging Suppressions

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.messagingSuppressionsAddSuppressionCreate`

Manually add an email address to the suppression list

```ts
posthog.messagingSuppressionsAddSuppressionCreate(): Promise<{ id: string; identifier: string; source: "BOUNCE" | "MANUAL"; reason: string | null; transient_bounce_count: number; last_bounce_at: string | null; last_bounce_diagnostic: string | null; suppressed: boolean; suppressed_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/messaging_suppressions/add_suppression/` · `messaging_suppressions_add_suppression_create`</sub>

## `posthog.messagingSuppressionsRemoveSuppressionCreate`

Remove an email address from the suppression list

```ts
posthog.messagingSuppressionsRemoveSuppressionCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/messaging_suppressions/remove_suppression/` · `messaging_suppressions_remove_suppression_create`</sub>

## `posthog.messagingSuppressionsSuppressionsRetrieve`

List suppressed email addresses for the team

```ts
posthog.messagingSuppressionsSuppressionsRetrieve(): Promise<{ count: number; next: string | null; previous: string | null; results: ({ id: string; identifier: string; source: "BOUNCE" | "MANUAL"; reason: string | null; transient_bounce_count: number; last_bounce_at: string | null; last_bounce_diagnostic: string | null; suppressed: boolean; suppressed_at: string | null; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/messaging_suppressions/suppressions/` · `messaging_suppressions_suppressions_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
