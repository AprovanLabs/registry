# Mcp Gateway

29 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.mcpGatewayAuditList`

Read-only trail of proxied tool calls. Admin-only — it exposes what every member and agent has been doing.

```ts
posthog.mcpGatewayAuditList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_at: string; server_name: string; tool_name: string; decision: "auto" | "approved" | "pending" | "blocked"; actor_user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: ...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/audit/` · `mcp_gateway_audit_list`</sub>

## `posthog.mcpGatewayAuditRetrieve`

Read-only trail of proxied tool calls. Admin-only — it exposes what every member and agent has been doing.

```ts
posthog.mcpGatewayAuditRetrieve(): Promise<{ id: string; created_at: string; server_name: string; tool_name: string; decision: "auto" | "approved" | "pending" | "blocked"; actor_user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product"...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/audit/{id}/` · `mcp_gateway_audit_retrieve`</sub>

## `posthog.mcpGatewayAuditCountsRetrieve`

Totals backing the quick-filter chips.

```ts
posthog.mcpGatewayAuditCountsRetrieve(): Promise<{ all: number; agents: number; approvals: number; blocked: number }>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/audit/counts/` · `mcp_gateway_audit_counts_retrieve`</sub>

## `posthog.mcpGatewayConfigList`

The team's gateway settings, plus whether the caller can administer them.

```ts
posthog.mcpGatewayConfigList(): Promise<{ allow_custom_servers?: boolean; allow_member_agent_access?: boolean; default_servers_enabled?: boolean; member_default_preset?: "allow" | "user" | "ask" | "block" | ""; agent_default_preset?: "allow" | "user" | "ask" | "block" | ""; is_admin: boolean }>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/config/` · `mcp_gateway_config_list`</sub>

## `posthog.mcpGatewayConfigApplyPresetCreate`

Set the policy baseline for members or agents (admin-only).

```ts
posthog.mcpGatewayConfigApplyPresetCreate(): Promise<{ allow_custom_servers?: boolean; allow_member_agent_access?: boolean; default_servers_enabled?: boolean; member_default_preset?: "allow" | "user" | "ask" | "block" | ""; agent_default_preset?: "allow" | "user" | "ask" | "block" | ""; is_admin: boolean }>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/config/apply_preset/` · `mcp_gateway_config_apply_preset_create`</sub>

## `posthog.mcpGatewayConfigSetAllServersEnabledCreate`

Enable or disable every MCP server for the team (admin-only): flips each registered server and the default for untouched catalog servers, so newly published templates follow the same posture.

```ts
posthog.mcpGatewayConfigSetAllServersEnabledCreate(): Promise<{ allow_custom_servers?: boolean; allow_member_agent_access?: boolean; default_servers_enabled?: boolean; member_default_preset?: "allow" | "user" | "ask" | "block" | ""; agent_default_preset?: "allow" | "user" | "ask" | "block" | ""; is_admin: boolean }>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/config/set_all_servers_enabled/` · `mcp_gateway_config_set_all_servers_enabled_create`</sub>

## `posthog.mcpGatewayConfigUpdateSettingsCreate`

Update team gateway settings (admin-only).

```ts
posthog.mcpGatewayConfigUpdateSettingsCreate(): Promise<{ allow_custom_servers?: boolean; allow_member_agent_access?: boolean; default_servers_enabled?: boolean; member_default_preset?: "allow" | "user" | "ask" | "block" | ""; agent_default_preset?: "allow" | "user" | "ask" | "block" | ""; is_admin: boolean }>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/config/update_settings/` · `mcp_gateway_config_update_settings_create`</sub>

## `posthog.mcpGatewayMembersList`

Admin overview of each member's gateway posture, plus the per-member server kill switch.

```ts
posthog.mcpGatewayMembersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "stu...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/members/` · `mcp_gateway_members_list`</sub>

## `posthog.mcpGatewayMembersRetrieve`

Admin overview of each member's gateway posture, plus the per-member server kill switch.

```ts
posthog.mcpGatewayMembersRetrieve(): Promise<{ user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; is_org_admin: boolean; connected_server_ids:...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/members/{id}/` · `mcp_gateway_members_retrieve`</sub>

## `posthog.mcpGatewayMembersSetAccessCreate`

Turn one gateway server off (or back on) for one member.

```ts
posthog.mcpGatewayMembersSetAccessCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/members/{id}/set_access/` · `mcp_gateway_members_set_access_create`</sub>

## `posthog.mcpGatewayRulesList`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; applies_to?: "everyone" | "members" | "agents"; effect?: "needs_approval" | "do_not_use"; tool_pattern?: string; enabled?: boolean; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/rules/` · `mcp_gateway_rules_list`</sub>

## `posthog.mcpGatewayRulesCreate`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesCreate(): Promise<{ id: string; name: string; description?: string; applies_to?: "everyone" | "members" | "agents"; effect?: "needs_approval" | "do_not_use"; tool_pattern?: string; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/rules/` · `mcp_gateway_rules_create`</sub>

## `posthog.mcpGatewayRulesDestroy`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/mcp_gateway/rules/{id}/` · `mcp_gateway_rules_destroy`</sub>

## `posthog.mcpGatewayRulesRetrieve`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesRetrieve(): Promise<{ id: string; name: string; description?: string; applies_to?: "everyone" | "members" | "agents"; effect?: "needs_approval" | "do_not_use"; tool_pattern?: string; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/rules/{id}/` · `mcp_gateway_rules_retrieve`</sub>

## `posthog.mcpGatewayRulesPartialUpdate`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesPartialUpdate(): Promise<{ id: string; name: string; description?: string; applies_to?: "everyone" | "members" | "agents"; effect?: "needs_approval" | "do_not_use"; tool_pattern?: string; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/mcp_gateway/rules/{id}/` · `mcp_gateway_rules_partial_update`</sub>

## `posthog.mcpGatewayRulesUpdate`

Team guardrails evaluated before any scope policy.

```ts
posthog.mcpGatewayRulesUpdate(): Promise<{ id: string; name: string; description?: string; applies_to?: "everyone" | "members" | "agents"; effect?: "needs_approval" | "do_not_use"; tool_pattern?: string; enabled?: boolean; created_at: string; updated_at: string }>
```

<sub>`PUT /api/projects/{project_id}/mcp_gateway/rules/{id}/` · `mcp_gateway_rules_update`</sub>

## `posthog.mcpGatewayServersList`

The team's gateway server registry. The registry is sparse: rows appear through the install/share/OAuth-start flows in views.py, or when an admin toggles an untouched catalog template here (`set_template_enabled`). Servers with no row follow the team config's `default_servers_enabled`.

```ts
posthog.mcpGatewayServersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; url: string; description: string; category: "business" | "data" | "design" | "dev" | "infra" | "productivity"; template_auth_type: "api_key" | "oauth" | null; is_team_enabled: boolean; icon_key: string; icon_domain: string; docs_url: string; template_id: string | null; tool_count: number; connec...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/servers/` · `mcp_gateway_servers_list`</sub>

## `posthog.mcpGatewayServersDestroy`

The team's gateway server registry. The registry is sparse: rows appear through the install/share/OAuth-start flows in views.py, or when an admin toggles an untouched catalog template here (`set_template_enabled`). Servers with no row follow the team config's `default_servers_enabled`.

```ts
posthog.mcpGatewayServersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/mcp_gateway/servers/{id}/` · `mcp_gateway_servers_destroy`</sub>

## `posthog.mcpGatewayServersRetrieve`

The team's gateway server registry. The registry is sparse: rows appear through the install/share/OAuth-start flows in views.py, or when an admin toggles an untouched catalog template here (`set_template_enabled`). Servers with no row follow the team config's `default_servers_enabled`.

```ts
posthog.mcpGatewayServersRetrieve(): Promise<{ id: string; name: string; url: string; description: string; category: "business" | "data" | "design" | "dev" | "infra" | "productivity"; template_auth_type: "api_key" | "oauth" | null; is_team_enabled: boolean; icon_key: string; icon_domain: string; docs_url: string; template_id: string | null; tool_count: number; connections: ({ installation_id: string; user: { id: number; uuid: string; distin...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/servers/{id}/` · `mcp_gateway_servers_retrieve`</sub>

## `posthog.mcpGatewayServersPartialUpdate`

The team's gateway server registry. The registry is sparse: rows appear through the install/share/OAuth-start flows in views.py, or when an admin toggles an untouched catalog template here (`set_template_enabled`). Servers with no row follow the team config's `default_servers_enabled`.

```ts
posthog.mcpGatewayServersPartialUpdate(): Promise<{ name?: string; description?: string; category?: "business" | "data" | "design" | "dev" | "infra" | "productivity"; is_team_enabled?: boolean }>
```

<sub>`PATCH /api/projects/{project_id}/mcp_gateway/servers/{id}/` · `mcp_gateway_servers_partial_update`</sub>

## `posthog.mcpGatewayServersUpdate`

The team's gateway server registry. The registry is sparse: rows appear through the install/share/OAuth-start flows in views.py, or when an admin toggles an untouched catalog template here (`set_template_enabled`). Servers with no row follow the team config's `default_servers_enabled`.

```ts
posthog.mcpGatewayServersUpdate(): Promise<{ name?: string; description?: string; category?: "business" | "data" | "design" | "dev" | "infra" | "productivity"; is_team_enabled?: boolean }>
```

<sub>`PUT /api/projects/{project_id}/mcp_gateway/servers/{id}/` · `mcp_gateway_servers_update`</sub>

## `posthog.mcpGatewayServersPoliciesCreate`

Upsert per-tool states for a scope, returning the re-resolved catalog.

```ts
posthog.mcpGatewayServersPoliciesCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ tool_name: string; description: string; input_schema: { [key: string]: unknown }; policy_state: "approved" | "needs_approval" | "do_not_use"; team_state: "approved" | "needs_approval" | "do_not_use" | null; locked: boolean; decided_by: "rule" | "scope" | "team" | "preset" | "legacy" | "default"; rule_name: string; rule_d...>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/servers/{id}/policies/` · `mcp_gateway_servers_policies_create`</sub>

## `posthog.mcpGatewayServersToolsRetrieve`

Tool catalog with the resolved policy for a scope.

```ts
posthog.mcpGatewayServersToolsRetrieve(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ tool_name: string; description: string; input_schema: { [key: string]: unknown }; policy_state: "approved" | "needs_approval" | "do_not_use"; team_state: "approved" | "needs_approval" | "do_not_use" | null; locked: boolean; decided_by: "rule" | "scope" | "team" | "preset" | "legacy" | "default"; rule_name: string; rule_d...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/servers/{id}/tools/` · `mcp_gateway_servers_tools_retrieve`</sub>

## `posthog.mcpGatewayServersSetTemplateEnabledCreate`

Enable or disable a catalog template for the team (admin-only), materializing its gateway registration on the first toggle.

```ts
posthog.mcpGatewayServersSetTemplateEnabledCreate(): Promise<{ id: string; name: string; url: string; description: string; category: "business" | "data" | "design" | "dev" | "infra" | "productivity"; template_auth_type: "api_key" | "oauth" | null; is_team_enabled: boolean; icon_key: string; icon_domain: string; docs_url: string; template_id: string | null; tool_count: number; connections: ({ installation_id: string; user: { id: number; uuid: string; distin...>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/servers/set_template_enabled/` · `mcp_gateway_servers_set_template_enabled_create`</sub>

## `posthog.mcpGatewayServiceAccountsList`

PostHog's built-in agents and their MCP access grants. The catalog is fixed. Projects can pause an agent's MCP access and grant or revoke servers, but cannot create, rename, rotate, or delete agents.

```ts
posthog.mcpGatewayServiceAccountsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string; handle: string; agent_key: "support" | "scout"; status: "active" | "paused"; server_ids: (string)[]; servers: ({ id: string; name: string; description: string; icon_key: string; icon_domain: string; connection_state: "ready" | "pending_oauth" | "needs_reauth" | "disabled" | ...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/service_accounts/` · `mcp_gateway_service_accounts_list`</sub>

## `posthog.mcpGatewayServiceAccountsRetrieve`

PostHog's built-in agents and their MCP access grants. The catalog is fixed. Projects can pause an agent's MCP access and grant or revoke servers, but cannot create, rename, rotate, or delete agents.

```ts
posthog.mcpGatewayServiceAccountsRetrieve(): Promise<{ id: string; name: string; description: string; handle: string; agent_key: "support" | "scout"; status: "active" | "paused"; server_ids: (string)[]; servers: ({ id: string; name: string; description: string; icon_key: string; icon_domain: string; connection_state: "ready" | "pending_oauth" | "needs_reauth" | "disabled" | "missing_credential" })[]; last_active_at: string | null; created_at: strin...>
```

<sub>`GET /api/projects/{project_id}/mcp_gateway/service_accounts/{id}/` · `mcp_gateway_service_accounts_retrieve`</sub>

## `posthog.mcpGatewayServiceAccountsPartialUpdate`

PostHog's built-in agents and their MCP access grants. The catalog is fixed. Projects can pause an agent's MCP access and grant or revoke servers, but cannot create, rename, rotate, or delete agents.

```ts
posthog.mcpGatewayServiceAccountsPartialUpdate(): Promise<{ status?: "active" | "paused" }>
```

<sub>`PATCH /api/projects/{project_id}/mcp_gateway/service_accounts/{id}/` · `mcp_gateway_service_accounts_partial_update`</sub>

## `posthog.mcpGatewayServiceAccountsUpdate`

PostHog's built-in agents and their MCP access grants. The catalog is fixed. Projects can pause an agent's MCP access and grant or revoke servers, but cannot create, rename, rotate, or delete agents.

```ts
posthog.mcpGatewayServiceAccountsUpdate(): Promise<{ status?: "active" | "paused" }>
```

<sub>`PUT /api/projects/{project_id}/mcp_gateway/service_accounts/{id}/` · `mcp_gateway_service_accounts_update`</sub>

## `posthog.mcpGatewayServiceAccountsAccessCreate`

Grant or revoke this agent's access to one gateway server.

```ts
posthog.mcpGatewayServiceAccountsAccessCreate(): Promise<{ id: string; name: string; description: string; handle: string; agent_key: "support" | "scout"; status: "active" | "paused"; server_ids: (string)[]; servers: ({ id: string; name: string; description: string; icon_key: string; icon_domain: string; connection_state: "ready" | "pending_oauth" | "needs_reauth" | "disabled" | "missing_credential" })[]; last_active_at: string | null; created_at: strin...>
```

<sub>`POST /api/projects/{project_id}/mcp_gateway/service_accounts/{id}/access/` · `mcp_gateway_service_accounts_access_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
