# Organization

9 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiOrganizationV1Create`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Create(input: {
  /** The name of the Organization. Must be between 1 and 128 characters in length. */
  organization_name: string;
  /** The unique URL slug of the Organization. The slug only accepts alphanumeric characters and the following reserved characters: `-` `.` `_` `~`. Must be between 2 and 128 characters in length. Wherever an organization_id is expected in a path or request parameter, you may also use the organization_slug as a convenience. */
  organization_slug?: string;
  /** The image URL of the Organization logo. */
  organization_logo_url?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data. */
  trusted_metadata?: { [key: string]: unknown };
  /** An identifier that can be used in API calls wherever a organization_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within a project, but may be reused across different projects in the same workspace. */
  organization_external_id?: string;
  /** The authentication setting that controls the JIT provisioning of Members when authenticating via SSO. The accepted values are:     `ALL_ALLOWED` – the default setting, new Members will be automatically provisioned upon successful authentication via any of the Organization's `sso_active_connections`.     `RESTRICTED` – only new Members with SSO logins that comply with `sso_jit_provisioning_allowed_connections` can be provisioned upon authentication.     `NOT_ALLOWED` – disable JIT provisioning via SSO.    */
  sso_jit_provisioning?: string;
  /** An array of email domains that allow invites or JIT provisioning for new Members. This list is enforced when either `email_invites` or `email_jit_provisioning` is set to `RESTRICTED`.             Common domains such as `gmail.com` are not allowed. See the [common email domains resource](https://stytch.com/docs/b2b/api/common-email-domains) for the full list. */
  email_allowed_domains?: (string)[];
  /** The authentication setting that controls how a new Member can be provisioned by authenticating via Email Magic Link or OAuth. The accepted values are:     `RESTRICTED` – only new Members with verified emails that comply with `email_allowed_domains` can be provisioned upon authentication via Email Magic Link or OAuth.     `NOT_ALLOWED` – the default setting, disables JIT provisioning via Email Magic Link and OAuth.    */
  email_jit_provisioning?: string;
  /** The authentication setting that controls how a new Member can be invited to an organization by email. The accepted values are:     `ALL_ALLOWED` – any new Member can be invited to join via email.     `RESTRICTED` – only new Members with verified emails that comply with `email_allowed_domains` can be invited via email.     `NOT_ALLOWED` – disable email invites.    */
  email_invites?: string;
  /** The setting that controls which authentication methods can be used by Members of an Organization. The accepted values are:     `ALL_ALLOWED` – the default setting which allows all authentication methods to be used.     `RESTRICTED` – only methods that comply with `allowed_auth_methods` can be used for authentication. This setting does not apply to Members with `is_breakglass` set to `true`.    */
  auth_methods?: string;
  /** An array of allowed authentication methods. This list is enforced when `auth_methods` is set to `RESTRICTED`.   The list's accepted values are: `sso`, `magic_link`, `email_otp`, `password`, `google_oauth`, `microsoft_oauth`, `slack_oauth`, `github_oauth`, and `hubspot_oauth`.    */
  allowed_auth_methods?: (string)[];
  /** The setting that controls the MFA policy for all Members in the Organization. The accepted values are:     `REQUIRED_FOR_ALL` – All Members within the Organization will be required to complete MFA every time they wish to log in. However, any active Session that existed prior to this setting change will remain valid.     `OPTIONAL` – The default value. The Organization does not require MFA by default for all Members. Members will be required to complete MFA only if their `mfa_enrolled` status is set to true.    */
  mfa_policy?: string;
  /** Implicit role assignments based off of email domains.   For each domain-Role pair, all Members whose email addresses have the specified email domain will be granted the   associated Role, regardless of their login method. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment)   for more information about role assignment. */
  rbac_email_implicit_role_assignments?: (ApiOrganizationV1EmailImplicitRoleAssignment)[];
  /** The setting that controls which MFA methods can be used by Members of an Organization. The accepted values are:     `ALL_ALLOWED` – the default setting which allows all authentication methods to be used.     `RESTRICTED` – only methods that comply with `allowed_mfa_methods` can be used for authentication. This setting does not apply to Members with `is_breakglass` set to `true`.    */
  mfa_methods?: string;
  /** An array of allowed MFA authentication methods. This list is enforced when `mfa_methods` is set to `RESTRICTED`.   The list's accepted values are: `sms_otp` and `totp`.    */
  allowed_mfa_methods?: (string)[];
  /** The authentication setting that controls how a new Member can JIT provision into an organization by tenant. The accepted values are:     `RESTRICTED` – only new Members with tenants in `allowed_oauth_tenants` can JIT provision via tenant.     `NOT_ALLOWED` – the default setting, disables JIT provisioning by OAuth Tenant.    */
  oauth_tenant_jit_provisioning?: string;
  /** A map of allowed OAuth tenants. If this field is not passed in, the Organization will not allow JIT provisioning by OAuth Tenant. Allowed keys are "slack", "hubspot", and "github". */
  allowed_oauth_tenants?: { [key: string]: unknown };
  /** A list of email domains that are claimed by the Organization. */
  claimed_email_domains?: (string)[];
  /** The authentication setting that sets the Organization's policy towards first party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any first party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only first party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no first party Connected Apps are permitted.    */
  first_party_connected_apps_allowed_type?: ApiOrganizationV1OrganizationsCreateRequestFirstPartyConnectedAppsAllowedType;
  /** An array of first party Connected App IDs that are allowed for the Organization. Only used when the Organization's `first_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_first_party_connected_apps?: (string)[];
  /** The authentication setting that sets the Organization's policy towards third party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any third party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only third party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no third party Connected Apps are permitted.    */
  third_party_connected_apps_allowed_type?: ApiOrganizationV1OrganizationsCreateRequestThirdPartyConnectedAppsAllowedType;
  /** An array of third party Connected App IDs that are allowed for the Organization. Only used when the Organization's `third_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_third_party_connected_apps?: (string)[];
}): Promise<ApiOrganizationV1CreateResponse>
```

<sub>`POST /v1/b2b/organizations` · `api_organization_v1_Create`</sub>

## `stytch.apiOrganizationV1Delete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Delete(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1DeleteResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}` · `api_organization_v1_Delete`</sub>

## `stytch.apiOrganizationV1Get`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Get(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}): Promise<ApiOrganizationV1GetResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}` · `api_organization_v1_Get`</sub>

## `stytch.apiOrganizationV1Update`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Update(input: {
  /** The name of the Organization. Must be between 1 and 128 characters in length.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.name` action on the `stytch.organization` Resource. */
  organization_name?: string;
  /** The unique URL slug of the Organization. The slug only accepts alphanumeric characters and the following reserved characters: `-` `.` `_` `~`. Must be between 2 and 128 characters in length. Wherever an organization_id is expected in a path or request parameter, you may also use the organization_slug as a convenience.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.slug` action on the `stytch.organization` Resource. */
  organization_slug?: string;
  /** The image URL of the Organization logo.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.logo-url` action on the `stytch.organization` Resource. */
  organization_logo_url?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data.           If a session header is passed into the request, this field may **not** be passed into the request. You cannot           update trusted metadata when acting as a Member. */
  trusted_metadata?: { [key: string]: unknown };
  /** An identifier that can be used in API calls wherever a organization_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within a project, but may be reused across different projects in the same workspace. */
  organization_external_id?: string;
  /** The default connection used for SSO when there are multiple active connections.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.default-sso-connection` action on the `stytch.organization` Resource. */
  sso_default_connection_id?: string;
  /** The authentication setting that controls the JIT provisioning of Members when authenticating via SSO. The accepted values are:     `ALL_ALLOWED` – the default setting, new Members will be automatically provisioned upon successful authentication via any of the Organization's `sso_active_connections`.     `RESTRICTED` – only new Members with SSO logins that comply with `sso_jit_provisioning_allowed_connections` can be provisioned upon authentication.     `NOT_ALLOWED` – disable JIT provisioning via SSO.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.sso-jit-provisioning` action on the `stytch.organization` Resource. */
  sso_jit_provisioning?: string;
  /** An array of `connection_id`s that reference [SAML Connection objects](https://stytch.com/docs/b2b/api/saml-connection-object).   Only these connections will be allowed to JIT provision Members via SSO when `sso_jit_provisioning` is set to `RESTRICTED`.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.sso-jit-provisioning` action on the `stytch.organization` Resource. */
  sso_jit_provisioning_allowed_connections?: (string)[];
  /** An array of email domains that allow invites or JIT provisioning for new Members. This list is enforced when either `email_invites` or `email_jit_provisioning` is set to `RESTRICTED`.             Common domains such as `gmail.com` are not allowed. See the [common email domains resource](https://stytch.com/docs/b2b/api/common-email-domains) for the full list.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-domains` action on the `stytch.organization` Resource. */
  email_allowed_domains?: (string)[];
  /** The authentication setting that controls how a new Member can be provisioned by authenticating via Email Magic Link or OAuth. The accepted values are:     `RESTRICTED` – only new Members with verified emails that comply with `email_allowed_domains` can be provisioned upon authentication via Email Magic Link or OAuth.     `NOT_ALLOWED` – the default setting, disables JIT provisioning via Email Magic Link and OAuth.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.email-jit-provisioning` action on the `stytch.organization` Resource. */
  email_jit_provisioning?: string;
  /** The authentication setting that controls how a new Member can be invited to an organization by email. The accepted values are:     `ALL_ALLOWED` – any new Member can be invited to join via email.     `RESTRICTED` – only new Members with verified emails that comply with `email_allowed_domains` can be invited via email.     `NOT_ALLOWED` – disable email invites.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.email-invites` action on the `stytch.organization` Resource. */
  email_invites?: string;
  /** The setting that controls which authentication methods can be used by Members of an Organization. The accepted values are:     `ALL_ALLOWED` – the default setting which allows all authentication methods to be used.     `RESTRICTED` – only methods that comply with `allowed_auth_methods` can be used for authentication. This setting does not apply to Members with `is_breakglass` set to `true`.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-auth-methods` action on the `stytch.organization` Resource. */
  auth_methods?: string;
  /** An array of allowed authentication methods. This list is enforced when `auth_methods` is set to `RESTRICTED`.   The list's accepted values are: `sso`, `magic_link`, `email_otp`, `password`, `google_oauth`, `microsoft_oauth`, `slack_oauth`, `github_oauth`, and `hubspot_oauth`.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-auth-methods` action on the `stytch.organization` Resource. */
  allowed_auth_methods?: (string)[];
  /** The setting that controls the MFA policy for all Members in the Organization. The accepted values are:     `REQUIRED_FOR_ALL` – All Members within the Organization will be required to complete MFA every time they wish to log in. However, any active Session that existed prior to this setting change will remain valid.     `OPTIONAL` – The default value. The Organization does not require MFA by default for all Members. Members will be required to complete MFA only if their `mfa_enrolled` status is set to true.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.mfa-policy` action on the `stytch.organization` Resource. */
  mfa_policy?: string;
  /** Implicit role assignments based off of email domains.   For each domain-Role pair, all Members whose email addresses have the specified email domain will be granted the   associated Role, regardless of their login method. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment)   for more information about role assignment.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.implicit-roles` action on the `stytch.organization` Resource. */
  rbac_email_implicit_role_assignments?: (ApiOrganizationV1EmailImplicitRoleAssignment)[];
  /** The setting that controls which MFA methods can be used by Members of an Organization. The accepted values are:     `ALL_ALLOWED` – the default setting which allows all authentication methods to be used.     `RESTRICTED` – only methods that comply with `allowed_mfa_methods` can be used for authentication. This setting does not apply to Members with `is_breakglass` set to `true`.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-mfa-methods` action on the `stytch.organization` Resource. */
  mfa_methods?: string;
  /** An array of allowed MFA authentication methods. This list is enforced when `mfa_methods` is set to `RESTRICTED`.   The list's accepted values are: `sms_otp` and `totp`.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-mfa-methods` action on the `stytch.organization` Resource. */
  allowed_mfa_methods?: (string)[];
  /** The authentication setting that controls how a new Member can JIT provision into an organization by tenant. The accepted values are:     `RESTRICTED` – only new Members with tenants in `allowed_oauth_tenants` can JIT provision via tenant.     `NOT_ALLOWED` – the default setting, disables JIT provisioning by OAuth Tenant.     If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.oauth-tenant-jit-provisioning` action on the `stytch.organization` Resource. */
  oauth_tenant_jit_provisioning?: string;
  /** A map of allowed OAuth tenants. If this field is not passed in, the Organization will not allow JIT provisioning by OAuth Tenant. Allowed keys are "slack", "hubspot", and "github".  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.allowed-oauth-tenants` action on the `stytch.organization` Resource. */
  allowed_oauth_tenants?: { [key: string]: unknown };
  /** A list of email domains that are claimed by the Organization. */
  claimed_email_domains?: (string)[];
  /** The authentication setting that sets the Organization's policy towards first party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any first party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only first party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no first party Connected Apps are permitted.    */
  first_party_connected_apps_allowed_type?: ApiOrganizationV1OrganizationsUpdateRequestFirstPartyConnectedAppsAllowedType;
  /** An array of first party Connected App IDs that are allowed for the Organization. Only used when the Organization's `first_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_first_party_connected_apps?: (string)[];
  /** The authentication setting that sets the Organization's policy towards third party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any third party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only third party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no third party Connected Apps are permitted.    */
  third_party_connected_apps_allowed_type?: ApiOrganizationV1OrganizationsUpdateRequestThirdPartyConnectedAppsAllowedType;
  /** An array of third party Connected App IDs that are allowed for the Organization. Only used when the Organization's `third_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_third_party_connected_apps?: (string)[];
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1UpdateResponse>
```

<sub>`PUT /v1/b2b/organizations/{organization_id}` · `api_organization_v1_Update`</sub>

## `stytch.apiOrganizationV1ConnectedApps`

Connectedapps — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1ConnectedApps(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1ConnectedAppsResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/connected_apps` · `api_organization_v1_ConnectedApps`</sub>

## `stytch.apiOrganizationV1GetConnectedApp`

Getconnectedapp — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1GetConnectedApp(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the Connected App. */
  connected_app_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1GetConnectedAppResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/connected_apps/{connected_app_id}` · `api_organization_v1_GetConnectedApp`</sub>

## `stytch.apiOrganizationV1DeleteExternalId`

Deleteexternalid — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1DeleteExternalId(input: {
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1DeleteExternalIdResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/external_id` · `api_organization_v1_DeleteExternalId`</sub>

## `stytch.apiOrganizationV1Metrics`

Metrics — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Metrics(input: {
  organization_id: string;
}): Promise<ApiOrganizationV1MetricsResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/metrics` · `api_organization_v1_Metrics`</sub>

## `stytch.apiOrganizationV1Search`

Search — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1Search(input: {
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
  /** The optional query object contains the operator, i.e. `AND` or `OR`, and the operands that will filter your results. Only an operator is required. If you include no operands, no filtering will be applied. If you include no query object, it will return all Organizations with no filtering applied. */
  query?: ApiOrganizationV1SearchQuery;
}): Promise<ApiOrganizationV1SearchResponse>
```

<sub>`POST /v1/b2b/organizations/search` · `api_organization_v1_Search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
