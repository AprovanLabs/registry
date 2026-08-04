# Passwords

4 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiPasswordV1PasswordsEmailReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1PasswordsEmailReset(input: {
  /** The Passwords `token` from the `?token=` query parameter in the URL.        In the redirect URL, the `stytch_token_type` will be `login` or `reset_password`.        See examples and read more about redirect URLs [here](https://stytch.com/docs/workspace-management/redirect-urls). */
  token: string;
  /** The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  code_verifier?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** Specify optional security settings. */
  options?: ApiMagicV1Options;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiPasswordV1PasswordsEmailResetResponse>
```

<sub>`POST /v1/passwords/email/reset` · `api_password_v1_passwords_email_Reset`</sub>

## `stytch.apiPasswordV1PasswordsEmailResetStart`

Resetstart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1PasswordsEmailResetStart(input: {
  /** The email of the User that requested the password reset. */
  email: string;
  /** The URL that the User is redirected to from the reset password magic link. This URL should display your application's reset password page.   Before rendering the reset page, extract the `token` from the query parameters. On the reset page, collect the new password and complete the flow by calling the corresponding Password Reset by Email endpoint.   If this parameter is not specified, the default Reset Password redirect URL configured in the Dashboard will be used. If you have not set a default Reset Password redirect URL, an error is returned. */
  reset_password_redirect_url?: string;
  /** Set the expiration for the password reset, in minutes. By default, it expires in 30 minutes.   The minimum expiration is 5 minutes and the maximum is 7 days (10080 mins). */
  reset_password_expiration_minutes?: number;
  /** A base64url encoded SHA256 hash of a one time secret used to validate that the request starts and ends on the same device. */
  code_challenge?: string;
  /** Provided attributes to help with fraud detection. These values are pulled and passed into Stytch endpoints by your application. */
  attributes?: ApiAttributeV1Attributes;
  /** The URL that Users are redirected to upon clicking the "Log in without password" button in password reset emails.        After Users are redirected to the login redirect URL, your application should retrieve the `token` value from the URL parameters and call the [Magic Link Authenticate endpoint](https://stytch.com/docs/api/authenticate-magic-link) to log the User in without requiring a password reset. If this value is not provided, your project's default login redirect URL will be used. If you have not set a default login redirect URL, an error will be returned. */
  login_redirect_url?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiPasswordV1PasswordsEmailResetStartRequestLocale;
  /** Use a custom template for password reset emails. By default, it will use your default email template.   Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Passwords - Password reset”. */
  reset_password_template_id?: string;
}): Promise<ApiPasswordV1PasswordsEmailResetStartResponse>
```

<sub>`POST /v1/passwords/email/reset/start` · `api_password_v1_passwords_email_ResetStart`</sub>

## `stytch.apiPasswordV1PasswordsExistingPasswordReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1PasswordsExistingPasswordReset(input: {
  /** The email address of the end user. */
  email: string;
  /** The user's existing password. */
  existing_password: string;
  /** The new password for the user. */
  new_password: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiPasswordV1PasswordsExistingPasswordResetResponse>
```

<sub>`POST /v1/passwords/existing_password/reset` · `api_password_v1_passwords_existing_password_Reset`</sub>

## `stytch.apiPasswordV1PasswordsSessionReset`

Reset — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1PasswordsSessionReset(input: {
  /** The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** The `session_token` associated with a User's existing Session. */
  session_token?: string;
  /** The `session_jwt` associated with a User's existing Session. */
  session_jwt?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiPasswordV1PasswordsSessionResetResponse>
```

<sub>`POST /v1/passwords/session/reset` · `api_password_v1_passwords_session_Reset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
