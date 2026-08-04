# Llm Skills

15 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.llmSkillsList`

```ts
posthog.llmSkillsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolea...>
```

<sub>`GET /api/projects/{project_id}/llm_skills/` · `llm_skills_list`</sub>

## `posthog.llmSkillsCreate`

```ts
posthog.llmSkillsCreate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`POST /api/projects/{project_id}/llm_skills/` · `llm_skills_create`</sub>

## `posthog.llmSkillsImportCreate`

```ts
posthog.llmSkillsImportCreate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`POST /api/projects/{project_id}/llm_skills/import/` · `llm_skills_import_create`</sub>

## `posthog.llmSkillsMarketplaceInstallCommandRetrieve`

Report whether the user already has a marketplace credential, without minting one. The token is unrecoverable, so an existing credential returns its mask only — the UI shows "already connected, existing setups keep working" and offers an explicit rotate.

```ts
posthog.llmSkillsMarketplaceInstallCommandRetrieve(): Promise<{ status: "absent" | "exists" | "created" | "rotated"; connected: boolean; plugin_name: string; marketplace_name: string; label: string; repo_url: string; command: string | null; command_template: string; codex_command: string | null; codex_command_template: string; token: string | null; mask_value: string | null; created_at: string | null; last_rolled_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/llm_skills/marketplace/install-command/` · `llm_skills_marketplace_install_command_retrieve`</sub>

## `posthog.llmSkillsMarketplaceInstallCommandCreate`

Mint the user's read-only marketplace credential (or rotate it) and return the install command. Per-user: rotating only ever invalidates this user's own credential, never a teammate's.

```ts
posthog.llmSkillsMarketplaceInstallCommandCreate(): Promise<{ status: "absent" | "exists" | "created" | "rotated"; connected: boolean; plugin_name: string; marketplace_name: string; label: string; repo_url: string; command: string | null; command_template: string; codex_command: string | null; codex_command_template: string; token: string | null; mask_value: string | null; created_at: string | null; last_rolled_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/llm_skills/marketplace/install-command/` · `llm_skills_marketplace_install_command_create`</sub>

## `posthog.llmSkillsNameRetrieve`

```ts
posthog.llmSkillsNameRetrieve(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`GET /api/projects/{project_id}/llm_skills/name/{skill_name}/` · `llm_skills_name_retrieve`</sub>

## `posthog.llmSkillsNamePartialUpdate`

```ts
posthog.llmSkillsNamePartialUpdate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`PATCH /api/projects/{project_id}/llm_skills/name/{skill_name}/` · `llm_skills_name_partial_update`</sub>

## `posthog.llmSkillsNameArchiveCreate`

```ts
posthog.llmSkillsNameArchiveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/llm_skills/name/{skill_name}/archive/` · `llm_skills_name_archive_create`</sub>

## `posthog.llmSkillsNameDuplicateCreate`

```ts
posthog.llmSkillsNameDuplicateCreate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`POST /api/projects/{project_id}/llm_skills/name/{skill_name}/duplicate/` · `llm_skills_name_duplicate_create`</sub>

## `posthog.llmSkillsNameExportRetrieve`

```ts
posthog.llmSkillsNameExportRetrieve(): Promise<string>
```

<sub>`GET /api/projects/{project_id}/llm_skills/name/{skill_name}/export/` · `llm_skills_name_export_retrieve`</sub>

## `posthog.llmSkillsNameFilesRenameCreate`

```ts
posthog.llmSkillsNameFilesRenameCreate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`POST /api/projects/{project_id}/llm_skills/name/{skill_name}/files-rename/` · `llm_skills_name_files_rename_create`</sub>

## `posthog.llmSkillsNameFilesCreate`

```ts
posthog.llmSkillsNameFilesCreate(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`POST /api/projects/{project_id}/llm_skills/name/{skill_name}/files/` · `llm_skills_name_files_create`</sub>

## `posthog.llmSkillsNameFilesDestroy`

```ts
posthog.llmSkillsNameFilesDestroy(): Promise<{ id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean...>
```

<sub>`DELETE /api/projects/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/` · `llm_skills_name_files_destroy`</sub>

## `posthog.llmSkillsNameFilesRetrieve`

```ts
posthog.llmSkillsNameFilesRetrieve(): Promise<{ path: string; content: string; content_type?: string }>
```

<sub>`GET /api/projects/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/` · `llm_skills_name_files_retrieve`</sub>

## `posthog.llmSkillsResolveNameRetrieve`

```ts
posthog.llmSkillsResolveNameRetrieve(): Promise<{ skill: { id: string; name: string; description: string; body_total_length: number; body_next_offset: number | null; body: string; license?: string; compatibility?: string; allowed_tools?: (string)[]; metadata?: { [key: string]: unknown }; category: string; owners: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?...>
```

<sub>`GET /api/projects/{project_id}/llm_skills/resolve/name/{skill_name}/` · `llm_skills_resolve_name_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
