# Users

39 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.usersList`

```ts
posthog.usersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ date_joined: string; uuid: string; distinct_id: string | null; first_name?: string; last_name?: string; email: string; pending_email: string | null; is_email_verified: boolean | null; notification_settings?: { [key: string]: unknown }; anonymize_data?: boolean | null; allow_impersonation?: boolean | null; toolbar_mode?: ...>
```

<sub>`GET /api/users/` · `users_list`</sub>

## `posthog.usersSignalAutonomyDestroy`

Per-user signal autonomy config (singleton keyed by user). GET /api/users/<id>/signal_autonomy/ → current config (or 404) POST /api/users/<id>/signal_autonomy/ → create or update DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)

```ts
posthog.usersSignalAutonomyDestroy(): Promise<unknown>
```

<sub>`DELETE /api/users/{user_id}/signal_autonomy/` · `users_signal_autonomy_destroy`</sub>

## `posthog.usersSignalAutonomyRetrieve`

Per-user signal autonomy config (singleton keyed by user). GET /api/users/<id>/signal_autonomy/ → current config (or 404) POST /api/users/<id>/signal_autonomy/ → create or update DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)

```ts
posthog.usersSignalAutonomyRetrieve(): Promise<{ id: string; user: { id: number; uuid: string; first_name: string; last_name: string; email: string }; autostart_priority?: "P0" | "P1" | "P2" | "P3" | "P4" | "" | null; slack_notification_integration_id: number | null; slack_notification_channel?: string | null; slack_notification_min_priority?: "P0" | "P1" | "P2" | "P3" | "P4" | "" | null; created_at: string; updated_at: string }>
```

<sub>`GET /api/users/{user_id}/signal_autonomy/` · `users_signal_autonomy_retrieve`</sub>

## `posthog.usersSignalAutonomyCreate`

Per-user signal autonomy config (singleton keyed by user). GET /api/users/<id>/signal_autonomy/ → current config (or 404) POST /api/users/<id>/signal_autonomy/ → create or update DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)

```ts
posthog.usersSignalAutonomyCreate(): Promise<{ id: string; user: { id: number; uuid: string; first_name: string; last_name: string; email: string }; autostart_priority?: "P0" | "P1" | "P2" | "P3" | "P4" | "" | null; slack_notification_integration_id: number | null; slack_notification_channel?: string | null; slack_notification_min_priority?: "P0" | "P1" | "P2" | "P3" | "P4" | "" | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/users/{user_id}/signal_autonomy/` · `users_signal_autonomy_create`</sub>

## `posthog.usersDestroy`

```ts
posthog.usersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/users/{uuid}/` · `users_destroy`</sub>

## `posthog.usersRetrieve`

Retrieve a user's profile and settings. Pass `@me` as the UUID to fetch the authenticated user; non-staff callers may only access their own account.

```ts
posthog.usersRetrieve(): Promise<{ date_joined: string; uuid: string; distinct_id: string | null; first_name?: string; last_name?: string; email: string; pending_email: string | null; is_email_verified: boolean | null; notification_settings?: { [key: string]: unknown }; anonymize_data?: boolean | null; allow_impersonation?: boolean | null; toolbar_mode?: "disabled" | "toolbar" | "" | null; has_password: boolean; id: number; is_s...>
```

<sub>`GET /api/users/{uuid}/` · `users_retrieve`</sub>

## `posthog.usersPartialUpdate`

Update one or more of the authenticated user's profile fields or settings.

```ts
posthog.usersPartialUpdate(): Promise<{ date_joined: string; uuid: string; distinct_id: string | null; first_name?: string; last_name?: string; email: string; pending_email: string | null; is_email_verified: boolean | null; notification_settings?: { [key: string]: unknown }; anonymize_data?: boolean | null; allow_impersonation?: boolean | null; toolbar_mode?: "disabled" | "toolbar" | "" | null; has_password: boolean; id: number; is_s...>
```

<sub>`PATCH /api/users/{uuid}/` · `users_partial_update`</sub>

## `posthog.usersUpdate`

Replace the authenticated user's profile and settings. Pass `@me` as the UUID to update the authenticated user. Prefer the PATCH endpoint for partial updates — PUT requires every writable field to be provided.

```ts
posthog.usersUpdate(): Promise<{ date_joined: string; uuid: string; distinct_id: string | null; first_name?: string; last_name?: string; email: string; pending_email: string | null; is_email_verified: boolean | null; notification_settings?: { [key: string]: unknown }; anonymize_data?: boolean | null; allow_impersonation?: boolean | null; toolbar_mode?: "disabled" | "toolbar" | "" | null; has_password: boolean; id: number; is_s...>
```

<sub>`PUT /api/users/{uuid}/` · `users_update`</sub>

## `posthog.usersCredentialsReviewCompleteCreate`

Mark the user as having reviewed their existing credentials. Idempotent. Flips `requires_credential_review` to False so the post-login interstitial isn't shown again. Does not modify any credentials; the user revokes individual Personal API Keys and passkeys via their existing endpoints from the same screen.

```ts
posthog.usersCredentialsReviewCompleteCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/credentials_review_complete/` · `users_credentials_review_complete_create`</sub>

## `posthog.usersGithubLoginRetrieve`

```ts
posthog.usersGithubLoginRetrieve(): Promise<unknown>
```

<sub>`GET /api/users/{uuid}/github_login/` · `users_github_login_retrieve`</sub>

## `posthog.usersHedgehogConfigRetrieve`

```ts
posthog.usersHedgehogConfigRetrieve(): Promise<unknown>
```

<sub>`GET /api/users/{uuid}/hedgehog_config/` · `users_hedgehog_config_retrieve`</sub>

## `posthog.usersHedgehogConfigPartialUpdate`

```ts
posthog.usersHedgehogConfigPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/users/{uuid}/hedgehog_config/` · `users_hedgehog_config_partial_update`</sub>

## `posthog.usersIntegrationsList`

List the user's personal integrations of a given kind

```ts
posthog.usersIntegrationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ results: ({ id: string; kind: string; installation_id: string; repository_selection?: string | null; account?: { type?: string | null; name?: string | null } | null; github_login?: string | null; uses_shared_installation: boolean; created_at: string })[] })[] }>
```

<sub>`GET /api/users/{uuid}/integrations/` · `users_integrations_list`</sub>

## `posthog.usersIntegrationsGithubDestroy`

Disconnect a personal GitHub integration

```ts
posthog.usersIntegrationsGithubDestroy(): Promise<unknown>
```

<sub>`DELETE /api/users/{uuid}/integrations/github/{installation_id}/` · `users_integrations_github_destroy`</sub>

## `posthog.usersIntegrationsGithubBranchesRetrieve`

List branches for a personal GitHub installation repository

```ts
posthog.usersIntegrationsGithubBranchesRetrieve(): Promise<{ branches: (string)[]; default_branch?: string | null; has_more: boolean }>
```

<sub>`GET /api/users/{uuid}/integrations/github/{installation_id}/branches/` · `users_integrations_github_branches_retrieve`</sub>

## `posthog.usersIntegrationsGithubReposRetrieve`

List repositories for a personal GitHub installation

```ts
posthog.usersIntegrationsGithubReposRetrieve(): Promise<{ repositories: ({ id: number; name: string; full_name: string; private?: boolean; default_branch?: string; language?: string; pushed_at?: string; archived?: boolean; can_push?: boolean })[]; has_more: boolean }>
```

<sub>`GET /api/users/{uuid}/integrations/github/{installation_id}/repos/` · `users_integrations_github_repos_retrieve`</sub>

## `posthog.usersIntegrationsGithubReposRefreshCreate`

Refresh repositories for a personal GitHub installation

```ts
posthog.usersIntegrationsGithubReposRefreshCreate(): Promise<{ repositories: ({ id: number; name: string; full_name: string; private?: boolean; default_branch?: string; language?: string; pushed_at?: string; archived?: boolean; can_push?: boolean })[] }>
```

<sub>`POST /api/users/{uuid}/integrations/github/{installation_id}/repos/refresh/` · `users_integrations_github_repos_refresh_create`</sub>

## `posthog.usersIntegrationsGithubPrepareCallbackCreate`

Seed personal GitHub manage callback state before opening installation settings on GitHub.

```ts
posthog.usersIntegrationsGithubPrepareCallbackCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/integrations/github/prepare_callback/` · `users_integrations_github_prepare_callback_create`</sub>

## `posthog.usersIntegrationsGithubStartCreate`

Start GitHub personal integration linking

```ts
posthog.usersIntegrationsGithubStartCreate(): Promise<{ install_url: string; connect_flow: string }>
```

<sub>`POST /api/users/{uuid}/integrations/github/start/` · `users_integrations_github_start_create`</sub>

## `posthog.usersIntegrationsSlackDestroy`

Unlink a Slack identity

```ts
posthog.usersIntegrationsSlackDestroy(): Promise<unknown>
```

<sub>`DELETE /api/users/{uuid}/integrations/slack/{slack_user_id}/` · `users_integrations_slack_destroy`</sub>

## `posthog.usersIntegrationsSlackLinkableWorkspacesRetrieve`

List Slack workspaces this user could link to

```ts
posthog.usersIntegrationsSlackLinkableWorkspacesRetrieve(): Promise<{ results: ({ posthog_team_id: number; posthog_team_name: string; posthog_organization_name: string; slack_team_id: string; slack_team_name?: string | null })[] }>
```

<sub>`GET /api/users/{uuid}/integrations/slack/linkable_workspaces/` · `users_integrations_slack_linkable_workspaces_retrieve`</sub>

## `posthog.usersIntegrationsSlackStartCreate`

Start Slack identity link from settings

```ts
posthog.usersIntegrationsSlackStartCreate(): Promise<{ install_url: string }>
```

<sub>`POST /api/users/{uuid}/integrations/slack/start/` · `users_integrations_slack_start_create`</sub>

## `posthog.usersLoginSessionsList`

List the cookie-auth login sessions for the current user. Self-only — never another user.

```ts
posthog.usersLoginSessionsList(): Promise<({ id: string; created_at: string | null; last_activity: string; location: string; device: string; login_method: string; is_current: boolean })[]>
```

<sub>`GET /api/users/{uuid}/login_sessions/` · `users_login_sessions_list`</sub>

## `posthog.usersLoginSessionsDestroy`

Revoke a single login session belonging to the current user. Self-only. Requires recent auth (TimeSensitiveActionPermission) so a stolen cookie can't weaponize revocation, and is blocked while impersonating via ImpersonationBlockedPathsMiddleware.

```ts
posthog.usersLoginSessionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/users/{uuid}/login_sessions/{session_id}/` · `users_login_sessions_destroy`</sub>

## `posthog.usersLoginSessionsRevokeOthersCreate`

Revoke every login session for the current user except the one making this request. Self-only. Requires recent auth (TimeSensitiveActionPermission) so a stolen cookie can't weaponize the "log out everywhere else" lock-out, and is blocked while impersonating.

```ts
posthog.usersLoginSessionsRevokeOthersCreate(): Promise<{ revoked_count: number }>
```

<sub>`POST /api/users/{uuid}/login_sessions/revoke_others/` · `users_login_sessions_revoke_others_create`</sub>

## `posthog.usersOnboardingSkipCreate`

Mark the current user as having exited onboarding with a non-delegated reason. Idempotent: the skip timestamp is only set on the first successful call. Callers wanting to delegate setup to a teammate must use the dedicated /organizations/{id}/invites/delegate/ endpoint, which atomically creates the invite and sets reason="delegated". This endpoint rejects that reason so state can't be faked without a real invite.

```ts
posthog.usersOnboardingSkipCreate(): Promise<{ date_joined: string; uuid: string; distinct_id: string | null; first_name?: string; last_name?: string; email: string; pending_email: string | null; is_email_verified: boolean | null; notification_settings?: { [key: string]: unknown }; anonymize_data?: boolean | null; allow_impersonation?: boolean | null; toolbar_mode?: "disabled" | "toolbar" | "" | null; has_password: boolean; id: number; is_s...>
```

<sub>`POST /api/users/{uuid}/onboarding/skip/` · `users_onboarding_skip_create`</sub>

## `posthog.usersPushTokensCreate`

Register a push notification token

```ts
posthog.usersPushTokensCreate(): Promise<{ id: string; platform: "ios" | "android" | "web"; created_at: string; last_seen_at: string }>
```

<sub>`POST /api/users/{uuid}/push_tokens/` · `users_push_tokens_create`</sub>

## `posthog.usersPushTokensUnregisterCreate`

Unregister a push notification token

```ts
posthog.usersPushTokensUnregisterCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/push_tokens/unregister/` · `users_push_tokens_unregister_create`</sub>

## `posthog.usersScenePersonalisationCreate`

```ts
posthog.usersScenePersonalisationCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/scene_personalisation/` · `users_scene_personalisation_create`</sub>

## `posthog.usersStart2FaSetupRetrieve`

```ts
posthog.usersStart2FaSetupRetrieve(): Promise<unknown>
```

<sub>`GET /api/users/{uuid}/start_2fa_setup/` · `users_start_2fa_setup_retrieve`</sub>

## `posthog.usersTwoFactorBackupCodesCreate`

Generate new backup codes, invalidating any existing ones

```ts
posthog.usersTwoFactorBackupCodesCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/two_factor_backup_codes/` · `users_two_factor_backup_codes_create`</sub>

## `posthog.usersTwoFactorDisableCreate`

Disable 2FA and remove all related devices

```ts
posthog.usersTwoFactorDisableCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/two_factor_disable/` · `users_two_factor_disable_create`</sub>

## `posthog.usersTwoFactorStartSetupRetrieve`

```ts
posthog.usersTwoFactorStartSetupRetrieve(): Promise<unknown>
```

<sub>`GET /api/users/{uuid}/two_factor_start_setup/` · `users_two_factor_start_setup_retrieve`</sub>

## `posthog.usersTwoFactorStatusRetrieve`

Get current 2FA status including backup codes if enabled

```ts
posthog.usersTwoFactorStatusRetrieve(): Promise<unknown>
```

<sub>`GET /api/users/{uuid}/two_factor_status/` · `users_two_factor_status_retrieve`</sub>

## `posthog.usersTwoFactorValidateCreate`

```ts
posthog.usersTwoFactorValidateCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/two_factor_validate/` · `users_two_factor_validate_create`</sub>

## `posthog.usersValidate2FaCreate`

```ts
posthog.usersValidate2FaCreate(): Promise<unknown>
```

<sub>`POST /api/users/{uuid}/validate_2fa/` · `users_validate_2fa_create`</sub>

## `posthog.usersCancelEmailChangeRequestPartialUpdate`

```ts
posthog.usersCancelEmailChangeRequestPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/users/cancel_email_change_request/` · `users_cancel_email_change_request_partial_update`</sub>

## `posthog.usersRequestEmailVerificationCreate`

```ts
posthog.usersRequestEmailVerificationCreate(): Promise<unknown>
```

<sub>`POST /api/users/request_email_verification/` · `users_request_email_verification_create`</sub>

## `posthog.usersVerifyEmailCreate`

```ts
posthog.usersVerifyEmailCreate(): Promise<unknown>
```

<sub>`POST /api/users/verify_email/` · `users_verify_email_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
