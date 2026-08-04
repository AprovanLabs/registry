# Project Secret Api Keys

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.projectSecretApiKeysList`

```ts
posthog.projectSecretApiKeysList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization...>
```

<sub>`GET /api/projects/{project_id}/project_secret_api_keys/` · `project_secret_api_keys_list`</sub>

## `posthog.projectSecretApiKeysCreate`

```ts
posthog.projectSecretApiKeysCreate(): Promise<{ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketi...>
```

<sub>`POST /api/projects/{project_id}/project_secret_api_keys/` · `project_secret_api_keys_create`</sub>

## `posthog.projectSecretApiKeysDestroy`

```ts
posthog.projectSecretApiKeysDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/project_secret_api_keys/{id}/` · `project_secret_api_keys_destroy`</sub>

## `posthog.projectSecretApiKeysRetrieve`

```ts
posthog.projectSecretApiKeysRetrieve(): Promise<{ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketi...>
```

<sub>`GET /api/projects/{project_id}/project_secret_api_keys/{id}/` · `project_secret_api_keys_retrieve`</sub>

## `posthog.projectSecretApiKeysPartialUpdate`

```ts
posthog.projectSecretApiKeysPartialUpdate(): Promise<{ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketi...>
```

<sub>`PATCH /api/projects/{project_id}/project_secret_api_keys/{id}/` · `project_secret_api_keys_partial_update`</sub>

## `posthog.projectSecretApiKeysUpdate`

```ts
posthog.projectSecretApiKeysUpdate(): Promise<{ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketi...>
```

<sub>`PUT /api/projects/{project_id}/project_secret_api_keys/{id}/` · `project_secret_api_keys_update`</sub>

## `posthog.projectSecretApiKeysRollCreate`

Roll a project secret API key

```ts
posthog.projectSecretApiKeysRollCreate(): Promise<{ id: string; label: string; value: string; mask_value: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketi...>
```

<sub>`POST /api/projects/{project_id}/project_secret_api_keys/{id}/roll/` · `project_secret_api_keys_roll_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
