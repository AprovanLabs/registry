# Totp

4 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiTotpV1Create`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiTotpV1Create(input: {
  /** The `user_id` of an active user the TOTP registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The expiration for the TOTP instance. If the newly created TOTP is not authenticated within this time frame the TOTP will be unusable. Defaults to 1440 (1 day) with a minimum of 5 and a maximum of 1440. */
  expiration_minutes?: number;
}): Promise<ApiTotpV1CreateResponse>
```

<sub>`POST /v1/totps` · `api_totp_v1_Create`</sub>

## `stytch.apiTotpV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiTotpV1Authenticate(input: {
  /** The `user_id` of an active user the TOTP registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The TOTP code to authenticate. The TOTP code should consist of 6 digits. */
  totp_code: string;
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
}): Promise<ApiTotpV1AuthenticateResponse>
```

<sub>`POST /v1/totps/authenticate` · `api_totp_v1_Authenticate`</sub>

## `stytch.apiTotpV1Recover`

Recover — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiTotpV1Recover(input: {
  /** The `user_id` of an active user the TOTP registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
  /** The recovery code to authenticate. */
  recovery_code: string;
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
}): Promise<ApiTotpV1RecoverResponse>
```

<sub>`POST /v1/totps/recover` · `api_totp_v1_Recover`</sub>

## `stytch.apiTotpV1RecoveryCodes`

Recoverycodes — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiTotpV1RecoveryCodes(input: {
  /** The `user_id` of an active user the TOTP registration should be tied to. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiTotpV1RecoveryCodesResponse>
```

<sub>`POST /v1/totps/recovery_codes` · `api_totp_v1_RecoveryCodes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
