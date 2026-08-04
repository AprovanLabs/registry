# Mcp Server Installations

15 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.mcpServerInstallationsList`

```ts
posthog.mcpServerInstallationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; ...>
```

<sub>`GET /api/projects/{project_id}/mcp_server_installations/` · `mcp_server_installations_list`</sub>

## `posthog.mcpServerInstallationsCreate`

```ts
posthog.mcpServerInstallationsCreate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/` · `mcp_server_installations_create`</sub>

## `posthog.mcpServerInstallationsDestroy`

```ts
posthog.mcpServerInstallationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/mcp_server_installations/{id}/` · `mcp_server_installations_destroy`</sub>

## `posthog.mcpServerInstallationsRetrieve`

```ts
posthog.mcpServerInstallationsRetrieve(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/mcp_server_installations/{id}/` · `mcp_server_installations_retrieve`</sub>

## `posthog.mcpServerInstallationsPartialUpdate`

```ts
posthog.mcpServerInstallationsPartialUpdate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/mcp_server_installations/{id}/` · `mcp_server_installations_partial_update`</sub>

## `posthog.mcpServerInstallationsUpdate`

```ts
posthog.mcpServerInstallationsUpdate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/mcp_server_installations/{id}/` · `mcp_server_installations_update`</sub>

## `posthog.mcpServerInstallationsProxyCreate`

```ts
posthog.mcpServerInstallationsProxyCreate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/{id}/proxy/` · `mcp_server_installations_proxy_create`</sub>

## `posthog.mcpServerInstallationsShareCreate`

Escalate a personal installation to a team-wide shared one. Owner-only AND admin-only: sharing exposes the owner's credential to project members, so it carries the same gate as creating a shared install outright. Agents require separate explicit grants.

```ts
posthog.mcpServerInstallationsShareCreate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/{id}/share/` · `mcp_server_installations_share_create`</sub>

## `posthog.mcpServerInstallationsToolsRetrieve`

```ts
posthog.mcpServerInstallationsToolsRetrieve(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; tool_name: string; display_name: string; description: string; input_schema: unknown; approval_state: "approved" | "needs_approval" | "do_not_use"; team_state: "approved" | "needs_approval" | "do_not_use" | null; locked: boolean; decided_by: string; last_seen_at: string; removed_at: string | null; created_at: ...>
```

<sub>`GET /api/projects/{project_id}/mcp_server_installations/{id}/tools/` · `mcp_server_installations_tools_retrieve`</sub>

## `posthog.mcpServerInstallationsToolsPartialUpdate`

```ts
posthog.mcpServerInstallationsToolsPartialUpdate(): Promise<{ id: string; tool_name: string; display_name: string; description: string; input_schema: unknown; approval_state: "approved" | "needs_approval" | "do_not_use"; team_state: "approved" | "needs_approval" | "do_not_use" | null; locked: boolean; decided_by: string; last_seen_at: string; removed_at: string | null; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/mcp_server_installations/{id}/tools/{tool_name}/` · `mcp_server_installations_tools_partial_update`</sub>

## `posthog.mcpServerInstallationsToolsRefreshCreate`

```ts
posthog.mcpServerInstallationsToolsRefreshCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; tool_name: string; display_name: string; description: string; input_schema: unknown; approval_state: "approved" | "needs_approval" | "do_not_use"; team_state: "approved" | "needs_approval" | "do_not_use" | null; locked: boolean; decided_by: string; last_seen_at: string; removed_at: string | null; created_at: ...>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/{id}/tools/refresh/` · `mcp_server_installations_tools_refresh_create`</sub>

## `posthog.mcpServerInstallationsUnshareCreate`

De-escalate a shared installation back to personal. Allowed for the credential owner OR a project admin (the reclaim path for shared credentials). The row always stays owned by the ORIGINAL owner — an admin unsharing someone else's install must not capture their credential.

```ts
posthog.mcpServerInstallationsUnshareCreate(): Promise<{ id: string; template_id: string | null; name: string; icon_key: string; icon_domain: string; display_name?: string; url?: string; description?: string; auth_type?: "api_key" | "oauth"; is_enabled?: boolean; scope: "personal" | "shared"; is_owner: boolean; needs_reauth: boolean; pending_oauth: boolean; proxy_url: string; tool_count: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/{id}/unshare/` · `mcp_server_installations_unshare_create`</sub>

## `posthog.mcpServerInstallationsAuthorizeRetrieve`

Start (or re-start) an OAuth flow. Pass ``template_id`` to (re)connect a catalog template, or ``installation_id`` to reconnect an existing custom install using its cached metadata and per-user DCR creds.

```ts
posthog.mcpServerInstallationsAuthorizeRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/mcp_server_installations/authorize/` · `mcp_server_installations_authorize_retrieve`</sub>

## `posthog.mcpServerInstallationsInstallCustomCreate`

```ts
posthog.mcpServerInstallationsInstallCustomCreate(): Promise<{ redirect_url: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/install_custom/` · `mcp_server_installations_install_custom_create`</sub>

## `posthog.mcpServerInstallationsInstallTemplateCreate`

```ts
posthog.mcpServerInstallationsInstallTemplateCreate(): Promise<{ redirect_url: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_server_installations/install_template/` · `mcp_server_installations_install_template_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
