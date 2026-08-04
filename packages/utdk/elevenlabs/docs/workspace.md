# Workspace

29 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getWorkspaceServiceAccounts`

Get Workspace Service Accounts

```ts
elevenlabs.getWorkspaceServiceAccounts(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceServiceAccountListResponseModel>
```

<sub>`GET /v1/service-accounts` · `get_workspace_service_accounts`</sub>

## `elevenlabs.createServiceAccount`

Create Service Account

```ts
elevenlabs.createServiceAccount(input: {
  name: string;
  /** List of groups with their permission levels to share with by default. Each entry should specify a group_id and a permission_level (admin, editor, or viewer). */
  default_sharing_groups?: (DefaultSharingGroupConfig)[] | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceCreateServiceAccountResponseModel>
```

<sub>`POST /v1/service-accounts` · `create_service_account`</sub>

## `elevenlabs.getServiceAccountApiKeysRoute`

Get Service Account Api Keys Route

```ts
elevenlabs.getServiceAccountApiKeysRoute(input: {
  service_account_user_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceApiKeyListResponseModel>
```

<sub>`GET /v1/service-accounts/{service_account_user_id}/api-keys` · `get_service_account_api_keys_route`</sub>

## `elevenlabs.createServiceAccountApiKey`

Create Service Account Api Key

```ts
elevenlabs.createServiceAccountApiKey(input: {
  name: string;
  /** The permissions of the XI API. */
  permissions: (PermissionType)[] | string;
  /** The character limit of the XI API key. If provided this will limit the usage of this api key to n characters per month where n is the chosen value. Requests that incur charges will fail after reaching this monthly limit. */
  character_limit?: number | null;
  /** List of IP addresses or CIDR ranges allowed to use this API key. Each entry may be a CIDR range (e.g. '10.0.0.0/24') or a bare IP address (normalized to /32 or /128). On create, omit or pass null to allow all IPs. On update, omit to leave the allowlist unchanged, or pass "clear" to remove it. */
  allowed_ips?: (string)[] | null;
  /** Whether the holder of this key may disable it via the self-disable endpoint. On create, omit or pass null to use the workspace's default (enabled for non-Enterprise plans, disabled for Enterprise plans). On update, omit to leave it unchanged, or pass "clear" to reset it to the workspace default. Only honored for workspaces with self-disable access enabled. */
  third_party_disable_allowed?: boolean | null;
  service_account_user_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceCreateApiKeyResponseModel>
```

<sub>`POST /v1/service-accounts/{service_account_user_id}/api-keys` · `create_service_account_api_key`</sub>

## `elevenlabs.deleteServiceAccountApiKey`

Delete Service Account Api Key

```ts
elevenlabs.deleteServiceAccountApiKey(input: {
  service_account_user_id: string;
  api_key_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}` · `delete_service_account_api_key`</sub>

## `elevenlabs.editServiceAccountApiKey`

Edit Service Account Api Key

```ts
elevenlabs.editServiceAccountApiKey(input: {
  /** Whether to enable or disable the API key. */
  is_enabled?: boolean | string;
  /** The name of the XI API key to use (used for identification purposes only). */
  name?: string | null;
  /** The permissions of the XI API. */
  permissions?: (PermissionType)[] | "all" | "no_update";
  /** The character limit of the XI API key. If provided this will limit the usage of this api key to n characters per month where n is the chosen value. Requests that incur charges will fail after reaching this monthly limit. */
  character_limit?: number | "clear" | "no_update" | null;
  /** List of IP addresses or CIDR ranges allowed to use this API key. Each entry may be a CIDR range (e.g. '10.0.0.0/24') or a bare IP address (normalized to /32 or /128). On create, omit or pass null to allow all IPs. On update, omit to leave the allowlist unchanged, or pass "clear" to remove it. */
  allowed_ips?: (string)[] | "clear" | "no_update";
  /** Whether the holder of this key may disable it via the self-disable endpoint. On create, omit or pass null to use the workspace's default (enabled for non-Enterprise plans, disabled for Enterprise plans). On update, omit to leave it unchanged, or pass "clear" to reset it to the workspace default. Only honored for workspaces with self-disable access enabled. */
  third_party_disable_allowed?: boolean | "clear" | "no_update";
  service_account_user_id: string;
  api_key_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}` · `edit_service_account_api_key`</sub>

## `elevenlabs.getWorkspaceAuditLogs`

Get Workspace Audit Logs

```ts
elevenlabs.getWorkspaceAuditLogs(input: {
  /** Maximum number of entries per page */
  limit?: number;
  /** Cursor for the next page (from previous response) */
  cursor?: string | null;
  /** Only include entries at or after this time (ms since epoch) */
  time_from_unix_ms?: number | null;
  /** Only include entries at or before this time (ms since epoch) */
  time_to_unix_ms?: number | null;
  /** Filter by actor user ID */
  actor_uid?: string | null;
  /** Filter by OCSF event class name (e.g. Account Change) */
  class_name?: string | null;
  /** Filter by audit activity name (e.g. Subscription Creation) */
  activity_name?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceAuditLogsPageResponse>
```

<sub>`GET /v1/workspace/audit-logs` · `get_workspace_audit_logs`</sub>

## `elevenlabs.listAuthConnections`

Get Workspace Auth Connections

```ts
elevenlabs.listAuthConnections(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListAuthConnectionsResponse>
```

<sub>`GET /v1/workspace/auth-connections` · `list_auth_connections`</sub>

## `elevenlabs.createAuthConnection`

Create Workspace Auth Connection

```ts
elevenlabs.createAuthConnection(input: {
  /** Auth connection to create */
  body: CreateOAuth2ClientCredsRequest | CreateCustomHeaderAuthRequest | CreateBasicAuthRequest | CreateBearerAuthRequest | CreateOAuth2JwtRequest | CreatePrivateKeyJwtRequest | CreateMtlsAuthRequest;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<OAuth2ClientCredsResponse | RefreshTokenAuthResponse | BasicAuthResponse | BearerAuthResponse | OAuth2JwtResponse | PrivateKeyJwtResponse | MtlsAuthResponse | CustomHeaderAuthResponse | ApiIntegrationOAuth2AuthCodeResponse | ApiIntegrationOAuth2CustomAppResponse | WhatsAppAuthResponse | SlackBotAuthResponse | UrlSecretAuthResponse>
```

<sub>`POST /v1/workspace/auth-connections` · `create_auth_connection`</sub>

## `elevenlabs.deleteAuthConnection`

Delete Workspace Auth Connection

```ts
elevenlabs.deleteAuthConnection(input: {
  auth_connection_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/workspace/auth-connections/{auth_connection_id}` · `delete_auth_connection`</sub>

## `elevenlabs.updateAuthConnection`

Update Workspace Auth Connection

```ts
elevenlabs.updateAuthConnection(input: {
  /** Updated auth connection fields */
  body: UpdateOAuth2ClientCredsRequest | UpdateBasicAuthRequest | UpdateBearerAuthRequest | UpdateOAuth2JwtRequest;
  auth_connection_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<OAuth2ClientCredsResponse | RefreshTokenAuthResponse | BasicAuthResponse | BearerAuthResponse | OAuth2JwtResponse | PrivateKeyJwtResponse | MtlsAuthResponse | CustomHeaderAuthResponse | ApiIntegrationOAuth2AuthCodeResponse | ApiIntegrationOAuth2CustomAppResponse | WhatsAppAuthResponse | SlackBotAuthResponse | UrlSecretAuthResponse>
```

<sub>`PATCH /v1/workspace/auth-connections/{auth_connection_id}` · `update_auth_connection`</sub>

## `elevenlabs.getGroupsEndpoint`

Get All Groups

```ts
elevenlabs.getGroupsEndpoint(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<{ [key: string]: WorkspaceGroupResponseModel | undefined }>
```

<sub>`GET /v1/workspace/groups` · `get_groups_endpoint`</sub>

## `elevenlabs.addMember`

Add Member To User Group

```ts
elevenlabs.addMember(input: {
  /** The email of the target workspace member. */
  email: string;
  /** The ID of the target group. */
  group_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddWorkspaceGroupMemberResponseModel>
```

<sub>`POST /v1/workspace/groups/{group_id}/members` · `add_member`</sub>

## `elevenlabs.removeMember`

Delete Member From User Group

```ts
elevenlabs.removeMember(input: {
  /** The email of the target workspace member. */
  email: string;
  /** The ID of the target group. */
  group_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteWorkspaceGroupMemberResponseModel>
```

<sub>`POST /v1/workspace/groups/{group_id}/members/remove` · `remove_member`</sub>

## `elevenlabs.searchGroups`

Search User Groups

```ts
elevenlabs.searchGroups(input: {
  /** Name of the target group. */
  name: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<(WorkspaceGroupByNameResponseModel)[]>
```

<sub>`GET /v1/workspace/groups/search` · `search_groups`</sub>

## `elevenlabs.deleteInvite`

Delete Existing Invitation

```ts
elevenlabs.deleteInvite(input: {
  /** The email of the customer */
  email: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteWorkspaceInviteResponseModel>
```

<sub>`DELETE /v1/workspace/invites` · `delete_invite`</sub>

## `elevenlabs.inviteUser`

Invite User

```ts
elevenlabs.inviteUser(input: {
  /** The email of the customer */
  email: string;
  /** The workspace permission of the user. This is deprecated, use `seat_type` instead. */
  workspace_permission?: string | null;
  /** The seat type of the user */
  seat_type?: SeatType | null;
  /** The group ids of the user */
  group_ids?: (string)[] | null;
  /** Monthly credit usage limit for the invitee. Omit or set to null for no custom cap. */
  usage_limit?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddWorkspaceInviteResponseModel>
```

<sub>`POST /v1/workspace/invites/add` · `invite_user`</sub>

## `elevenlabs.inviteUsersBulk`

Invite Multiple Users

```ts
elevenlabs.inviteUsersBulk(input: {
  /** The email of the customer */
  emails: (string)[];
  /** The seat type of the user */
  seat_type?: SeatType | null;
  /** The group ids of the user */
  group_ids?: (string)[] | null;
  /** Monthly credit usage limit for the invitee. Omit or set to null for no custom cap. */
  usage_limit?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddWorkspaceInviteResponseModel>
```

<sub>`POST /v1/workspace/invites/add-bulk` · `invite_users_bulk`</sub>

## `elevenlabs.getWorkspaceMembers`

Get Workspace Members

```ts
elevenlabs.getWorkspaceMembers(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<(WorkspaceMemberResponseModel)[]>
```

<sub>`GET /v1/workspace/members` · `get_workspace_members`</sub>

## `elevenlabs.updateWorkspaceMember`

Update Member

```ts
elevenlabs.updateWorkspaceMember(input: {
  /** Email of the target user. */
  email: string;
  /** Whether to lock or unlock the user account. */
  is_locked?: boolean | null;
  /** The workspace role of the user. This is deprecated, use `workspace_seat_type` instead. */
  workspace_role?: SeatType | null;
  /** The workspace seat type */
  workspace_seat_type?: SeatType | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<UpdateWorkspaceMemberResponseModel>
```

<sub>`POST /v1/workspace/members` · `update_workspace_member`</sub>

## `elevenlabs.getResourceMetadata`

Get Resource

```ts
elevenlabs.getResourceMetadata(input: {
  /** The ID of the target resource. */
  resource_id: string;
  /** Resource type of the target resource. */
  resource_type: WorkspaceResourceType;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ResourceMetadataResponseModel>
```

<sub>`GET /v1/workspace/resources/{resource_id}` · `get_resource_metadata`</sub>

## `elevenlabs.shareResourceEndpoint`

Share Workspace Resource

```ts
elevenlabs.shareResourceEndpoint(input: {
  /** Role to grant to the target: one of 'admin', 'editor', 'commenter', or 'viewer'. */
  role: "admin" | "editor" | "commenter" | "viewer";
  /** Resource type of the target resource. */
  resource_type: WorkspaceResourceType;
  /** The email of the user or service account. */
  user_email?: string | null;
  /** The ID of the target group. Use 'default' to set the resource's baseline role — every workspace member receives this role unless they hold a higher one through a direct user grant, group membership, or workspace (service account) API key. */
  group_id?: string | null;
  /** The ID of the target workspace (service account) API key. This is not the API key string itself that you pass in the header for authentication — it is the key's ID, which workspace admins can find under Developers → Service Accounts. */
  workspace_api_key_id?: string | null;
  /** The ID of the target resource. */
  resource_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/workspace/resources/{resource_id}/share` · `share_resource_endpoint`</sub>

## `elevenlabs.unshareResourceEndpoint`

Unshare Workspace Resource

```ts
elevenlabs.unshareResourceEndpoint(input: {
  /** Resource type of the target resource. */
  resource_type: WorkspaceResourceType;
  /** The email of the user or service account. */
  user_email?: string | null;
  /** The ID of the target group. Use 'default' to set the resource's baseline role — every workspace member receives this role unless they hold a higher one through a direct user grant, group membership, or workspace (service account) API key. */
  group_id?: string | null;
  /** The ID of the target workspace (service account) API key. This is not the API key string itself that you pass in the header for authentication — it is the key's ID, which workspace admins can find under Developers → Service Accounts. */
  workspace_api_key_id?: string | null;
  /** The ID of the target resource. */
  resource_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/workspace/resources/{resource_id}/unshare` · `unshare_resource_endpoint`</sub>

## `elevenlabs.getWorkspaceWebhooksRoute`

List Workspace Webhooks

```ts
elevenlabs.getWorkspaceWebhooksRoute(input: {
  /** Whether to include active usages of the webhook, only usable by admins */
  include_usages?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceWebhookListResponseModel>
```

<sub>`GET /v1/workspace/webhooks` · `get_workspace_webhooks_route`</sub>

## `elevenlabs.createWorkspaceWebhookRoute`

Create Workspace Webhook

```ts
elevenlabs.createWorkspaceWebhookRoute(input: {
  /** Webhook settings object containing auth_type and corresponding configuration */
  settings: WebhookHmacSettings;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceCreateWebhookResponseModel>
```

<sub>`POST /v1/workspace/webhooks` · `create_workspace_webhook_route`</sub>

## `elevenlabs.deleteWorkspaceWebhookRoute`

Delete Workspace Webhook

```ts
elevenlabs.deleteWorkspaceWebhookRoute(input: {
  /** The unique ID for the webhook */
  webhook_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteWorkspaceWebhookResponseModel>
```

<sub>`DELETE /v1/workspace/webhooks/{webhook_id}` · `delete_workspace_webhook_route`</sub>

## `elevenlabs.editWorkspaceWebhookRoute`

Update Workspace Webhook

```ts
elevenlabs.editWorkspaceWebhookRoute(input: {
  /** Whether to disable or enable the webhook */
  is_disabled: boolean;
  /** The display name of the webhook (used for display purposes only). */
  name: string;
  /** Whether to enable automatic retries for transient failures (5xx, 429, timeout) */
  retry_enabled?: boolean | null;
  /** A list of request headers to include with the webhook delivery (optional) */
  request_headers?: { [key: string]: string | undefined } | null;
  /** The complete set of workspace-level events this webhook should be subscribed to. The webhook is added to the events in the list and removed from any not in the list. Omit to leave the current event subscriptions unchanged. */
  events?: (WorkspaceWebhookEventType)[] | null;
  /** The unique ID for the webhook */
  webhook_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PatchWorkspaceWebhookResponseModel>
```

<sub>`PATCH /v1/workspace/webhooks/{webhook_id}` · `edit_workspace_webhook_route`</sub>

## `elevenlabs.disable`

Disable Api Key

```ts
elevenlabs.disable(input: {
  /** Must be set to `self` to disable the API key used to authenticate this request. Required as an explicit confirmation to avoid accidentally disabling the wrong key. */
  api_key_name: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/workspaces/api-keys/disable` · `disable`</sub>

## `elevenlabs.setThirdPartyDisablingPolicy`

Set Workspace Third-Party Disabling Policy

```ts
elevenlabs.setThirdPartyDisablingPolicy(input: {
  /** `true` forces every key in the workspace to be disable-able by its holder; `false` forbids it for every key; `null` clears the override (per-key values and the plan default apply). */
  third_party_disable_allowed?: boolean | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/workspaces/api-keys/third-party-disabling` · `set_third_party_disabling_policy`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
