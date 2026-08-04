# Sandbox Environments

5 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sandboxList`

API for managing sandbox environments that control network access for task runs.

```ts
posthog.sandboxList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; network_access_level: string; allowed_domains?: (string)[]; repositories?: (string)[]; private: boolean; internal: boolean; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { ...>
```

<sub>`GET /api/projects/{project_id}/sandbox_environments/` · `sandbox_list`</sub>

## `posthog.sandboxCreate`

API for managing sandbox environments that control network access for task runs.

```ts
posthog.sandboxCreate(): Promise<{ id: string; name: string; network_access_level: string; allowed_domains?: (string)[]; repositories?: (string)[]; private: boolean; internal: boolean; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | n...>
```

<sub>`POST /api/projects/{project_id}/sandbox_environments/` · `sandbox_create`</sub>

## `posthog.sandboxDestroy`

API for managing sandbox environments that control network access for task runs.

```ts
posthog.sandboxDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/sandbox_environments/{id}/` · `sandbox_destroy`</sub>

## `posthog.sandboxRetrieve`

API for managing sandbox environments that control network access for task runs.

```ts
posthog.sandboxRetrieve(): Promise<{ id: string; name: string; network_access_level: string; allowed_domains?: (string)[]; repositories?: (string)[]; private: boolean; internal: boolean; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | n...>
```

<sub>`GET /api/projects/{project_id}/sandbox_environments/{id}/` · `sandbox_retrieve`</sub>

## `posthog.sandboxPartialUpdate`

API for managing sandbox environments that control network access for task runs.

```ts
posthog.sandboxPartialUpdate(): Promise<{ id: string; name: string; network_access_level: string; allowed_domains?: (string)[]; repositories?: (string)[]; private: boolean; internal: boolean; created_by?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | n...>
```

<sub>`PATCH /api/projects/{project_id}/sandbox_environments/{id}/` · `sandbox_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
