# Discovery

5 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiDiscoveryV1DiscoveryIntermediateSessionsExchange`

Exchange — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiDiscoveryV1DiscoveryIntermediateSessionsExchange(input: {
  /** The Intermediate Session Token. This token does not necessarily belong to a specific instance of a Member, but represents a bag of factors that may be converted to a member session. The token can be used with the [OTP SMS Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-otp-sms), [TOTP Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-totp), or [Recovery Codes Recover endpoint](https://stytch.com/docs/b2b/api/recovery-codes-recover) to complete an MFA flow and log in to the Organization. The token has a default expiry of 10 minutes. It can also be used with the [Exchange Intermediate Session endpoint](https://stytch.com/docs/b2b/api/exchange-intermediate-session) to join a specific Organization that allows the factors represented by the intermediate session token; or the [Create Organization via Discovery endpoint](https://stytch.com/docs/b2b/api/create-organization-via-discovery) to create a new Organization and Member. Intermediate Session Tokens have a default expiry of 10 minutes. */
  intermediate_session_token: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequestLocale;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeResponse>
```

<sub>`POST /v1/b2b/discovery/intermediate_sessions/exchange` · `api_discovery_v1_discovery_intermediate_sessions_Exchange`</sub>

## `stytch.apiDiscoveryV1DiscoveryOrganizationsList`

List — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiDiscoveryV1DiscoveryOrganizationsList(input: {
  /** The Intermediate Session Token. This token does not necessarily belong to a specific instance of a Member, but represents a bag of factors that may be converted to a member session. The token can be used with the [OTP SMS Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-otp-sms), [TOTP Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-totp), or [Recovery Codes Recover endpoint](https://stytch.com/docs/b2b/api/recovery-codes-recover) to complete an MFA flow and log in to the Organization. The token has a default expiry of 10 minutes. It can also be used with the [Exchange Intermediate Session endpoint](https://stytch.com/docs/b2b/api/exchange-intermediate-session) to join a specific Organization that allows the factors represented by the intermediate session token; or the [Create Organization via Discovery endpoint](https://stytch.com/docs/b2b/api/create-organization-via-discovery) to create a new Organization and Member. Intermediate Session Tokens have a default expiry of 10 minutes. */
  intermediate_session_token?: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
}): Promise<ApiDiscoveryV1DiscoveryListResponse>
```

<sub>`POST /v1/b2b/discovery/organizations` · `api_discovery_v1_discovery_organizations_List`</sub>

## `stytch.apiDiscoveryV1DiscoveryOrganizationsCreate`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiDiscoveryV1DiscoveryOrganizationsCreate(input: {
  /** The Intermediate Session Token. This token does not necessarily belong to a specific instance of a Member, but represents a bag of factors that may be converted to a member session. The token can be used with the [OTP SMS Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-otp-sms), [TOTP Authenticate endpoint](https://stytch.com/docs/b2b/api/authenticate-totp), or [Recovery Codes Recover endpoint](https://stytch.com/docs/b2b/api/recovery-codes-recover) to complete an MFA flow and log in to the Organization. The token has a default expiry of 10 minutes. It can also be used with the [Exchange Intermediate Session endpoint](https://stytch.com/docs/b2b/api/exchange-intermediate-session) to join a specific Organization that allows the factors represented by the intermediate session token; or the [Create Organization via Discovery endpoint](https://stytch.com/docs/b2b/api/create-organization-via-discovery) to create a new Organization and Member. Intermediate Session Tokens have a default expiry of 10 minutes. */
  intermediate_session_token: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** The name of the Organization. If the name is not specified, a default name will be created based on the email used to initiate the discovery flow. If the email domain is a common email provider such as gmail.com, or if the email is a .edu email, the organization name will be generated based on the name portion of the email. Otherwise, the organization name will be generated based on the email domain. */
  organization_name?: string;
  /** The unique URL slug of the Organization. A minimum of two characters is required. The slug only accepts alphanumeric characters and the following reserved characters: `-` `.` `_` `~`. If the slug is not specified, a default slug will be created based on the email used to initiate the discovery flow. If the email domain is a common email provider such as gmail.com, or if the email is a .edu email, the organization slug will be generated based on the name portion of the email. Otherwise, the organization slug will be generated based on the email domain. */
  organization_slug?: string;
  /** An identifier that can be used in API calls wherever a organization_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within a project, but may be reused across different projects in the same workspace. */
  organization_external_id?: string;
  /** The image URL of the Organization logo. */
  organization_logo_url?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data. */
  trusted_metadata?: { [key: string]: unknown };
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
  /** The authentication setting that sets the Organization's policy towards first party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any first party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only first party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no first party Connected Apps are permitted.    */
  first_party_connected_apps_allowed_type?: ApiDiscoveryV1DiscoveryOrganizationsCreateRequestFirstPartyConnectedAppsAllowedType;
  /** An array of first party Connected App IDs that are allowed for the Organization. Only used when the Organization's `first_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_first_party_connected_apps?: (string)[];
  /** The authentication setting that sets the Organization's policy towards third party Connected Apps. The accepted values are:     `ALL_ALLOWED` – the default setting, any third party Connected App in the Project is permitted for use by Members.     `RESTRICTED` – only third party Connected Apps with IDs in `allowed_first_party_connected_apps` can be used by Members.     `NOT_ALLOWED` – no third party Connected Apps are permitted.    */
  third_party_connected_apps_allowed_type?: ApiDiscoveryV1DiscoveryOrganizationsCreateRequestThirdPartyConnectedAppsAllowedType;
  /** An array of third party Connected App IDs that are allowed for the Organization. Only used when the Organization's `third_party_connected_apps_allowed_type` is `RESTRICTED`. */
  allowed_third_party_connected_apps?: (string)[];
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiDiscoveryV1DiscoveryOrganizationsCreateResponse>
```

<sub>`POST /v1/b2b/discovery/organizations/create` · `api_discovery_v1_discovery_organizations_Create`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsDiscoveryEmailReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsDiscoveryEmailReset(input: {
  /** The password reset token to authenticate. */
  password_reset_token: string;
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  pkce_code_verifier?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsDiscoveryEmailResetResponse>
```

<sub>`POST /v1/b2b/passwords/discovery/email/reset` · `api_b2b_password_v1_b2b_passwords_discovery_email_Reset`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsDiscoveryEmailResetStart`

Resetstart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsDiscoveryEmailResetStart(input: {
  /** The email address of the Member to start the email reset process for. */
  email_address: string;
  /** The URL that the Member is redirected to from the reset password magic link. This URL should display your application's reset password page.   Before rendering the reset page, extract the `token` from the query parameters. On the reset page, collect the new password and complete the flow by calling the corresponding Password Reset by Email endpoint.   If this parameter is not specified, the default Reset Password redirect URL configured in the Dashboard will be used. If you have not set a default Reset Password redirect URL, an error is returned. */
  reset_password_redirect_url?: string;
  /** The URL that the end user clicks from the discovery Magic Link. This URL should be an endpoint in the backend server that   verifies the request by querying Stytch's discovery authenticate endpoint and continues the flow. If this value is not passed, the default   discovery redirect URL that you set in your Dashboard is used. If you have not set a default discovery redirect URL, an error is returned. */
  discovery_redirect_url?: string;
  /** Use a custom template for reset password emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Passwords - Reset Password”. */
  reset_password_template_id?: string;
  /** Sets a time limit after which the email link to reset the member's password will no longer be valid. The minimum allowed expiration is 5 minutes and the maximum is 10080 minutes (7 days). By default, the expiration is 30 minutes. */
  reset_password_expiration_minutes?: number;
  pkce_code_challenge?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: string;
  /** Use a custom template for verification emails sent during password reset flows. When cross-organization passwords are enabled for your Project, this template will be used the first time a user sets a password via a   password reset flow. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Passwords - Email Verification”. */
  verify_email_template_id?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsDiscoveryEmailResetStartResponse>
```

<sub>`POST /v1/b2b/passwords/discovery/email/reset/start` · `api_b2b_password_v1_b2b_passwords_discovery_email_ResetStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
