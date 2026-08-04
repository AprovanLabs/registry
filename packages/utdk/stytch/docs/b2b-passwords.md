# B2B Passwords

6 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BPasswordV1B2BPasswordsDiscoveryAuthenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsDiscoveryAuthenticate(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsDiscoveryAuthenticateResponse>
```

<sub>`POST /v1/b2b/passwords/discovery/authenticate` · `api_b2b_password_v1_b2b_passwords_discovery_Authenticate`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsEmailRequireReset`

Requirereset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsEmailRequireReset(input: {
  /** The email address of the Member to start the email reset process for. */
  email_address: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id?: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id?: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BPasswordV1B2BPasswordsEmailRequireResetResponse>
```

<sub>`POST /v1/b2b/passwords/email/require_reset` · `api_b2b_password_v1_b2b_passwords_email_RequireReset`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsEmailReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsEmailReset(input: {
  /** The password reset token to authenticate. */
  password_reset_token: string;
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** Reuse an existing session instead of creating a new one. If you provide a `session_token`, Stytch will update the session.       If the `session_token` and `magic_links_token` belong to different Members, the `session_token` will be ignored. This endpoint will error if       both `session_token` and `session_jwt` are provided. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Reuse an existing session instead of creating a new one. If you provide a `session_jwt`, Stytch will update the session. If the `session_jwt`       and `magic_links_token` belong to different Members, the `session_jwt` will be ignored. This endpoint will error if both `session_token` and `session_jwt`       are provided. */
  session_jwt?: string;
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  code_verifier?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiB2BPasswordV1PasswordsEmailResetRequestLocale;
  /** Adds this primary authentication factor to the intermediate session token. If the resulting set of factors satisfies the organization's primary authentication requirements and MFA requirements, the intermediate session token will be consumed and converted to a member session. If not, the same intermediate session token will be returned. */
  intermediate_session_token?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsEmailResetResponse>
```

<sub>`POST /v1/b2b/passwords/email/reset` · `api_b2b_password_v1_b2b_passwords_email_Reset`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsEmailResetStart`

Resetstart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsEmailResetStart(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The email address of the Member to start the email reset process for. */
  email_address: string;
  /** The URL that the Member is redirected to from the reset password magic link. This URL should display your application's reset password page.   Before rendering the reset page, extract the `token` from the query parameters. On the reset page, collect the new password and complete the flow by calling the corresponding Password Reset by Email endpoint.   If this parameter is not specified, the default Reset Password redirect URL configured in the Dashboard will be used. If you have not set a default Reset Password redirect URL, an error is returned. */
  reset_password_redirect_url?: string;
  /** Sets a time limit after which the email link to reset the member's password will no longer be valid. The minimum allowed expiration is 5 minutes and the maximum is 10080 minutes (7 days). By default, the expiration is 30 minutes. */
  reset_password_expiration_minutes?: number;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  code_challenge?: string;
  /** The URL that Members are redirected to upon clicking the "Log in without password" button in password reset emails.        After Members are redirected to the login redirect URL, your application should retrieve the `token` value from the URL parameters and call the [Magic Link Authenticate endpoint](https://stytch.com/docs/api/authenticate-magic-link) to log the Member in without requiring a password reset. If this value is not provided, your project's default login redirect URL will be used. If you have not set a default login redirect URL, an error will be returned. */
  login_redirect_url?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BPasswordV1PasswordsEmailResetStartRequestLocale;
  /** Use a custom template for reset password emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Passwords - Reset Password”. */
  reset_password_template_id?: string;
  /** Use a custom template for verification emails sent during password reset flows. When cross-organization passwords are enabled for your Project, this template will be used the first time a user sets a password via a   password reset flow. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Passwords - Email Verification”. */
  verify_email_template_id?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsEmailResetStartResponse>
```

<sub>`POST /v1/b2b/passwords/email/reset/start` · `api_b2b_password_v1_b2b_passwords_email_ResetStart`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsExistingPasswordReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsExistingPasswordReset(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The Member's current password that they supplied. */
  existing_password: string;
  /** The Member's elected new password. */
  new_password: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiB2BPasswordV1PasswordsExistingPasswordResetRequestLocale;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsExistingPasswordResetResponse>
```

<sub>`POST /v1/b2b/passwords/existing_password/reset` · `api_b2b_password_v1_b2b_passwords_existing_password_Reset`</sub>

## `stytch.apiB2BPasswordV1B2BPasswordsSessionReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1B2BPasswordsSessionReset(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiB2BPasswordV1PasswordsSessionResetRequestLocale;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BPasswordV1B2BPasswordsSessionResetResponse>
```

<sub>`POST /v1/b2b/passwords/session/reset` · `api_b2b_password_v1_b2b_passwords_session_Reset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
