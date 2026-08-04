# Scheduled Changes

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.scheduledChangesList`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; team_id: number; record_id: string; model_name: "FeatureFlag"; payload: unknown; scheduled_at: string; executed_at: string | null; failure_reason: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_...>
```

<sub>`GET /api/projects/{project_id}/scheduled_changes/` · `scheduled_changes_list`</sub>

## `posthog.scheduledChangesCreate`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesCreate(): Promise<{ id: number; team_id: number; record_id: string; model_name: "FeatureFlag"; payload: unknown; scheduled_at: string; executed_at: string | null; failure_reason: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown ...>
```

<sub>`POST /api/projects/{project_id}/scheduled_changes/` · `scheduled_changes_create`</sub>

## `posthog.scheduledChangesDestroy`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/scheduled_changes/{id}/` · `scheduled_changes_destroy`</sub>

## `posthog.scheduledChangesRetrieve`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesRetrieve(): Promise<{ id: number; team_id: number; record_id: string; model_name: "FeatureFlag"; payload: unknown; scheduled_at: string; executed_at: string | null; failure_reason: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown ...>
```

<sub>`GET /api/projects/{project_id}/scheduled_changes/{id}/` · `scheduled_changes_retrieve`</sub>

## `posthog.scheduledChangesPartialUpdate`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesPartialUpdate(): Promise<{ id: number; team_id: number; record_id: string; model_name: "FeatureFlag"; payload: unknown; scheduled_at: string; executed_at: string | null; failure_reason: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown ...>
```

<sub>`PATCH /api/projects/{project_id}/scheduled_changes/{id}/` · `scheduled_changes_partial_update`</sub>

## `posthog.scheduledChangesUpdate`

Create, read, update and delete scheduled changes.

```ts
posthog.scheduledChangesUpdate(): Promise<{ id: number; team_id: number; record_id: string; model_name: "FeatureFlag"; payload: unknown; scheduled_at: string; executed_at: string | null; failure_reason: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown ...>
```

<sub>`PUT /api/projects/{project_id}/scheduled_changes/{id}/` · `scheduled_changes_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
