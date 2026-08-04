# Webauthn

6 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiWebauthnV1Update`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1Update(input: {
  /** The `name` of the WebAuthn registration or Passkey. */
  name: string;
  /** Globally unique UUID that identifies a Passkey or WebAuthn registration in the Stytch API. The `webauthn_registration_id` is used when you need to operate on a specific User's WebAuthn registration. */
  webauthn_registration_id: string;
}): Promise<ApiWebauthnV1UpdateResponse>
```

<sub>`PUT /v1/webauthn/{webauthn_registration_id}` · `api_webauthn_v1_Update`</sub>

## `stytch.apiWebauthnV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1Authenticate(input: {
  /** The response of the [navigator.credentials.create()](https://www.w3.org/TR/webauthn-2/#sctn-createCredential). */
  public_key_credential: string;
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
}): Promise<ApiWebauthnV1AuthenticateResponse>
```

<sub>`POST /v1/webauthn/authenticate` · `api_webauthn_v1_Authenticate`</sub>

## `stytch.apiWebauthnV1AuthenticateStart`

Authenticatestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1AuthenticateStart(input: {
  /** The domain for Passkeys or WebAuthn. Defaults to `window.location.hostname`. */
  domain: string;
  /** The `user_id` of an active user the Passkey or WebAuthn registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id?: string;
  /** If true, the `public_key_credential_creation_options` returned will be optimized for Passkeys with `userVerification` set to `"preferred"`.        */
  return_passkey_credential_options?: boolean;
  /** If true, values in the `public_key_credential_creation_options` will be base64 URL encoded. Set this option to true when using built-in browser methods like `navigator.credentials.create` and `navigator.credentials.get`. */
  use_base64_url_encoding?: boolean;
}): Promise<ApiWebauthnV1AuthenticateStartResponse>
```

<sub>`POST /v1/webauthn/authenticate/start` · `api_webauthn_v1_AuthenticateStart`</sub>

## `stytch.apiWebauthnV1ListCredentials`

Listcredentials — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1ListCredentials(input: {
  /** The `user_id` of an active user the Passkey or WebAuthn registration should be tied to. */
  user_id: string;
  /** The domain for Passkeys or WebAuthn. Defaults to `window.location.hostname`. */
  domain: string;
}): Promise<ApiWebauthnV1ListCredentialsResponse>
```

<sub>`GET /v1/webauthn/credentials/{user_id}/{domain}` · `api_webauthn_v1_ListCredentials`</sub>

## `stytch.apiWebauthnV1Register`

Register — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1Register(input: {
  /** The `user_id` of an active user the Passkey or WebAuthn registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The response of the [navigator.credentials.create()](https://www.w3.org/TR/webauthn-2/#sctn-createCredential). */
  public_key_credential: string;
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
}): Promise<ApiWebauthnV1RegisterResponse>
```

<sub>`POST /v1/webauthn/register` · `api_webauthn_v1_Register`</sub>

## `stytch.apiWebauthnV1RegisterStart`

Registerstart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiWebauthnV1RegisterStart(input: {
  /** The `user_id` of an active user the Passkey or WebAuthn registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The domain for Passkeys or WebAuthn. Defaults to `window.location.hostname`. */
  domain: string;
  /** The user agent of the client. */
  user_agent?: string;
  /** The requested authenticator type of the Passkey or WebAuthn device. The two valid values are platform and cross-platform. If no value passed, we assume both values are allowed. */
  authenticator_type?: string;
  /** If true, the `public_key_credential_creation_options` returned will be optimized for Passkeys with `residentKey` set to `"required"` and `userVerification` set to `"preferred"`.        */
  return_passkey_credential_options?: boolean;
  override_id?: string;
  override_name?: string;
  override_display_name?: string;
  /** If true, values in the `public_key_credential_creation_options` will be base64 URL encoded. Set this option to true when using built-in browser methods like `navigator.credentials.create` and `navigator.credentials.get`. */
  use_base64_url_encoding?: boolean;
}): Promise<ApiWebauthnV1RegisterStartResponse>
```

<sub>`POST /v1/webauthn/register/start` · `api_webauthn_v1_RegisterStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
