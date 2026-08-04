# Evaluations

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.evaluationsList`

```ts
posthog.evaluationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; enabled?: boolean; status: "active" | "paused" | "error"; status_reason: "provider_key_required" | "provider_key_deleted" | "no_default_model" | "provider_key_invalid" | "provider_key_permission_denied" | "provider_key_quota_exceeded" | "provider_key_rate_limited" | "model_...>
```

<sub>`GET /api/projects/{project_id}/evaluations/` · `evaluations_list`</sub>

## `posthog.evaluationsCreate`

```ts
posthog.evaluationsCreate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; status: "active" | "paused" | "error"; status_reason: "provider_key_required" | "provider_key_deleted" | "no_default_model" | "provider_key_invalid" | "provider_key_permission_denied" | "provider_key_quota_exceeded" | "provider_key_rate_limited" | "model_not_found" | "hog_error" | null; status_reason_detail: string | null; evalu...>
```

<sub>`POST /api/projects/{project_id}/evaluations/` · `evaluations_create`</sub>

## `posthog.evaluationsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.evaluationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/evaluations/{id}/` · `evaluations_destroy`</sub>

## `posthog.evaluationsRetrieve`

```ts
posthog.evaluationsRetrieve(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; status: "active" | "paused" | "error"; status_reason: "provider_key_required" | "provider_key_deleted" | "no_default_model" | "provider_key_invalid" | "provider_key_permission_denied" | "provider_key_quota_exceeded" | "provider_key_rate_limited" | "model_not_found" | "hog_error" | null; status_reason_detail: string | null; evalu...>
```

<sub>`GET /api/projects/{project_id}/evaluations/{id}/` · `evaluations_retrieve`</sub>

## `posthog.evaluationsPartialUpdate`

```ts
posthog.evaluationsPartialUpdate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; status: "active" | "paused" | "error"; status_reason: "provider_key_required" | "provider_key_deleted" | "no_default_model" | "provider_key_invalid" | "provider_key_permission_denied" | "provider_key_quota_exceeded" | "provider_key_rate_limited" | "model_not_found" | "hog_error" | null; status_reason_detail: string | null; evalu...>
```

<sub>`PATCH /api/projects/{project_id}/evaluations/{id}/` · `evaluations_partial_update`</sub>

## `posthog.evaluationsUpdate`

```ts
posthog.evaluationsUpdate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; status: "active" | "paused" | "error"; status_reason: "provider_key_required" | "provider_key_deleted" | "no_default_model" | "provider_key_invalid" | "provider_key_permission_denied" | "provider_key_quota_exceeded" | "provider_key_rate_limited" | "model_not_found" | "hog_error" | null; status_reason_detail: string | null; evalu...>
```

<sub>`PUT /api/projects/{project_id}/evaluations/{id}/` · `evaluations_update`</sub>

## `posthog.evaluationsTestHogCreate`

Test Hog evaluation code against sample events without saving.

```ts
posthog.evaluationsTestHogCreate(): Promise<{ results: ({ sample_id: string; sample_type: "generation" | "trace"; event_uuid: string | null; trace_id: string | null; input_preview: string; output_preview: string; result: boolean | null; reasoning: string | null; error: string | null })[]; message?: string }>
```

<sub>`POST /api/projects/{project_id}/evaluations/test_hog/` · `evaluations_test_hog_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
