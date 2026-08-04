# Integrations

32 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.integrationsList`

```ts
posthog.integrationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; kind: "anthropic" | "apns" | "aws-redshift" | "aws-s3" | "azure-blob" | "bing-ads" | "clickup" | "customerio-app" | "customerio-track" | "customerio-webhook" | "databricks" | "email" | "firebase" | "github" | "gitlab" | "google-ads" | "google-analytics" | "google-cloud-service-account" | "google-cloud-storage...>
```

<sub>`GET /api/projects/{project_id}/integrations/` · `integrations_list`</sub>

## `posthog.integrationsCreate`

```ts
posthog.integrationsCreate(): Promise<{ id: number; kind: "anthropic" | "apns" | "aws-redshift" | "aws-s3" | "azure-blob" | "bing-ads" | "clickup" | "customerio-app" | "customerio-track" | "customerio-webhook" | "databricks" | "email" | "firebase" | "github" | "gitlab" | "google-ads" | "google-analytics" | "google-cloud-service-account" | "google-cloud-storage" | "google-pubsub" | "google-search-console" | "google-sheets" | "hubspot"...>
```

<sub>`POST /api/projects/{project_id}/integrations/` · `integrations_create`</sub>

## `posthog.integrationsDestroy`

```ts
posthog.integrationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/integrations/{id}/` · `integrations_destroy`</sub>

## `posthog.integrationsRetrieve`

```ts
posthog.integrationsRetrieve(): Promise<{ id: number; kind: "anthropic" | "apns" | "aws-redshift" | "aws-s3" | "azure-blob" | "bing-ads" | "clickup" | "customerio-app" | "customerio-track" | "customerio-webhook" | "databricks" | "email" | "firebase" | "github" | "gitlab" | "google-ads" | "google-analytics" | "google-cloud-service-account" | "google-cloud-storage" | "google-pubsub" | "google-search-console" | "google-sheets" | "hubspot"...>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/` · `integrations_retrieve`</sub>

## `posthog.integrationsAnthropicManagedAgentEnvsRetrieve`

```ts
posthog.integrationsAnthropicManagedAgentEnvsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/anthropic_managed_agent_environments/` · `integrations_anthropic_managed_agent_envs_retrieve`</sub>

## `posthog.integrationsAnthropicManagedAgentVaultsRetrieve`

```ts
posthog.integrationsAnthropicManagedAgentVaultsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/anthropic_managed_agent_vaults/` · `integrations_anthropic_managed_agent_vaults_retrieve`</sub>

## `posthog.integrationsAnthropicManagedAgentsRetrieve`

```ts
posthog.integrationsAnthropicManagedAgentsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/anthropic_managed_agents/` · `integrations_anthropic_managed_agents_retrieve`</sub>

## `posthog.integrationsChannelsRetrieve`

```ts
posthog.integrationsChannelsRetrieve(): Promise<{ channels: ({ id: string; name: string; is_private: boolean; is_member: boolean; is_ext_shared: boolean; is_private_without_access: boolean })[]; lastRefreshedAt?: string | null; has_more?: boolean }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/channels/` · `integrations_channels_retrieve`</sub>

## `posthog.integrationsClickupListsRetrieve`

```ts
posthog.integrationsClickupListsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/clickup_lists/` · `integrations_clickup_lists_retrieve`</sub>

## `posthog.integrationsClickupSpacesRetrieve`

```ts
posthog.integrationsClickupSpacesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/clickup_spaces/` · `integrations_clickup_spaces_retrieve`</sub>

## `posthog.integrationsClickupWorkspacesRetrieve`

```ts
posthog.integrationsClickupWorkspacesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/clickup_workspaces/` · `integrations_clickup_workspaces_retrieve`</sub>

## `posthog.integrationsEmailPartialUpdate`

```ts
posthog.integrationsEmailPartialUpdate(): Promise<{ id: number; kind: "anthropic" | "apns" | "aws-redshift" | "aws-s3" | "azure-blob" | "bing-ads" | "clickup" | "customerio-app" | "customerio-track" | "customerio-webhook" | "databricks" | "email" | "firebase" | "github" | "gitlab" | "google-ads" | "google-analytics" | "google-cloud-service-account" | "google-cloud-storage" | "google-pubsub" | "google-search-console" | "google-sheets" | "hubspot"...>
```

<sub>`PATCH /api/projects/{project_id}/integrations/{id}/email/` · `integrations_email_partial_update`</sub>

## `posthog.integrationsEmailVerifyCreate`

```ts
posthog.integrationsEmailVerifyCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/integrations/{id}/email/verify/` · `integrations_email_verify_create`</sub>

## `posthog.integrationsGithubBranchesRetrieve`

```ts
posthog.integrationsGithubBranchesRetrieve(): Promise<{ branches: (string)[]; default_branch?: string | null; has_more: boolean }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/github_branches/` · `integrations_github_branches_retrieve`</sub>

## `posthog.integrationsGithubReposRetrieve`

```ts
posthog.integrationsGithubReposRetrieve(): Promise<{ repositories: ({ id: number; name: string; full_name: string; private?: boolean; default_branch?: string; language?: string; pushed_at?: string; archived?: boolean; can_push?: boolean })[]; has_more: boolean }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/github_repos/` · `integrations_github_repos_retrieve`</sub>

## `posthog.integrationsGithubReposRefreshCreate`

```ts
posthog.integrationsGithubReposRefreshCreate(): Promise<{ repositories: ({ id: number; name: string; full_name: string; private?: boolean; default_branch?: string; language?: string; pushed_at?: string; archived?: boolean; can_push?: boolean })[] }>
```

<sub>`POST /api/projects/{project_id}/integrations/{id}/github_repos/refresh/` · `integrations_github_repos_refresh_create`</sub>

## `posthog.integrationsGithubTeamsRetrieve`

```ts
posthog.integrationsGithubTeamsRetrieve(): Promise<{ teams: ({ id: number; slug: string; name: string })[]; has_more: boolean }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/github_teams/` · `integrations_github_teams_retrieve`</sub>

## `posthog.integrationsGoogleAccessibleAccountsRetrieve`

```ts
posthog.integrationsGoogleAccessibleAccountsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/google_accessible_accounts/` · `integrations_google_accessible_accounts_retrieve`</sub>

## `posthog.integrationsGoogleConversionActionsRetrieve`

```ts
posthog.integrationsGoogleConversionActionsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/google_conversion_actions/` · `integrations_google_conversion_actions_retrieve`</sub>

## `posthog.integrationsJiraProjectsRetrieve`

```ts
posthog.integrationsJiraProjectsRetrieve(): Promise<{ projects: ({ id: string; key: string; name: string })[] }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/jira_projects/` · `integrations_jira_projects_retrieve`</sub>

## `posthog.integrationsLinearTeamsRetrieve`

```ts
posthog.integrationsLinearTeamsRetrieve(): Promise<{ teams: ({ id: string; name: string })[] }>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/linear_teams/` · `integrations_linear_teams_retrieve`</sub>

## `posthog.integrationsLinkedinAdsAccountsRetrieve`

```ts
posthog.integrationsLinkedinAdsAccountsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/linkedin_ads_accounts/` · `integrations_linkedin_ads_accounts_retrieve`</sub>

## `posthog.integrationsLinkedinAdsConversionRulesRetrieve`

```ts
posthog.integrationsLinkedinAdsConversionRulesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/linkedin_ads_conversion_rules/` · `integrations_linkedin_ads_conversion_rules_retrieve`</sub>

## `posthog.integrationsTwilioPhoneNumbersRetrieve`

```ts
posthog.integrationsTwilioPhoneNumbersRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/{id}/twilio_phone_numbers/` · `integrations_twilio_phone_numbers_retrieve`</sub>

## `posthog.integrationsAuthorizeRetrieve`

```ts
posthog.integrationsAuthorizeRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/authorize/` · `integrations_authorize_retrieve`</sub>

## `posthog.integrationsDomainConnectApplyUrlCreate`

Unified endpoint for generating Domain Connect apply URLs. Accepts a context ("email" or "proxy") and the relevant resource ID. The backend resolves the domain, template variables, and service ID based on context, then builds the signed apply URL.

```ts
posthog.integrationsDomainConnectApplyUrlCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/integrations/domain-connect/apply-url/` · `integrations_domain_connect_apply_url_create`</sub>

## `posthog.integrationsDomainConnectCheckRetrieve`

```ts
posthog.integrationsDomainConnectCheckRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/integrations/domain-connect/check/` · `integrations_domain_connect_check_retrieve`</sub>

## `posthog.integrationsGithubAvailableInstallationsRetrieve`

List the org's existing GitHub installations this project can reuse. A GitHub App installs once per organization, so a second project links an existing installation rather than reinstalling. This backs the picker: when the org has more than one installation, the client passes the chosen installation_id to github/link_existing.

```ts
posthog.integrationsGithubAvailableInstallationsRetrieve(): Promise<{ installations: ({ installation_id: string; account_name: string | null; account_type: string | null; source_team_id: number })[] }>
```

<sub>`GET /api/projects/{project_id}/integrations/github/available_installations/` · `integrations_github_available_installations_retrieve`</sub>

## `posthog.integrationsGithubLinkExistingCreate`

Reuse a GitHub installation already linked to a sibling team in the same organization.

```ts
posthog.integrationsGithubLinkExistingCreate(): Promise<{ id: number; kind: "anthropic" | "apns" | "aws-redshift" | "aws-s3" | "azure-blob" | "bing-ads" | "clickup" | "customerio-app" | "customerio-track" | "customerio-webhook" | "databricks" | "email" | "firebase" | "github" | "gitlab" | "google-ads" | "google-analytics" | "google-cloud-service-account" | "google-cloud-storage" | "google-pubsub" | "google-search-console" | "google-sheets" | "hubspot"...>
```

<sub>`POST /api/projects/{project_id}/integrations/github/link_existing/` · `integrations_github_link_existing_create`</sub>

## `posthog.integrationsGithubOauthAuthorizeCreate`

Mint a User OAuth URL to bootstrap a fresh `code` when the install flow returns without one.

```ts
posthog.integrationsGithubOauthAuthorizeCreate(): Promise<{ oauth_url: string }>
```

<sub>`POST /api/projects/{project_id}/integrations/github/oauth_authorize/` · `integrations_github_oauth_authorize_create`</sub>

## `posthog.integrationsGithubPrepareCallbackCreate`

Seed GitHub setup callback state without redirecting to GitHub. Used when the user opens an existing installation's settings on github.com (e.g. PostHog Code "Update in GitHub") so the subsequent Setup URL redirect can be validated.

```ts
posthog.integrationsGithubPrepareCallbackCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/integrations/github/prepare_callback/` · `integrations_github_prepare_callback_create`</sub>

## `posthog.integrationsRequestAccessCreate`

Notify project admins that a member is requesting an integration be connected.

```ts
posthog.integrationsRequestAccessCreate(): Promise<{ success: boolean }>
```

<sub>`POST /api/projects/{project_id}/integrations/request_access/` · `integrations_request_access_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
