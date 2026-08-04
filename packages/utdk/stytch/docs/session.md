# Session

15 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BSessionV1Get`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Get(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}): Promise<ApiB2BSessionV1GetResponse>
```

<sub>`GET /v1/b2b/sessions` · `api_b2b_session_v1_Get`</sub>

## `stytch.apiB2BSessionV1Attest`

Attest — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Attest(input: {
  /** The ID of the trusted auth token profile to use for attestation. */
  profile_id: string;
  /** The trusted auth token to authenticate. The token must have an organization ID claim if JIT provisioning is enabled. */
  token: string;
  /** The organization ID that the session should be authenticated in. Must be provided if the trusted auth token does not have an organization ID claim. */
  organization_id?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** The `session_token` for the session that you wish to add the trusted auth token authentication factor to. */
  session_token?: string;
  /** The `session_jwt` for the session that you wish to add the trusted auth token authentication factor to. */
  session_jwt?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BSessionV1AttestResponse>
```

<sub>`POST /v1/b2b/sessions/attest` · `api_b2b_session_v1_Attest`</sub>

## `stytch.apiB2BSessionV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Authenticate(input: {
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If an `authorization_check` object is passed in, this endpoint will also check if the Member is   authorized to perform the given action on the given Resource in the specified Organization. A Member is authorized if   their Member Session contains a Role, assigned   [explicitly or implicitly](https://stytch.com/docs/b2b/guides/rbac/role-assignment), with adequate permissions.   In addition, the `organization_id` passed in the authorization check must match the Member's Organization.    The Roles on the Member Session may differ from the Roles you see on the Member object - Roles that are implicitly   assigned by SSO connection or SSO group will only be valid for a Member Session if there is at least one authentication   factor on the Member Session from the specified SSO connection.    If the Member is not authorized to perform the specified action on the specified Resource, or if the   `organization_id` does not match the Member's Organization, a 403 error will be thrown.   Otherwise, the response will contain a list of Roles that satisfied the authorization check. */
  authorization_check?: ApiB2BSessionV1AuthorizationCheck;
}): Promise<ApiB2BSessionV1AuthenticateResponse>
```

<sub>`POST /v1/b2b/sessions/authenticate` · `api_b2b_session_v1_Authenticate`</sub>

## `stytch.apiB2BSessionV1Exchange`

Exchange — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Exchange(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The `session_token` belonging to the member that you wish to associate the email with. */
  session_token?: string;
  /** The `session_jwt` belonging to the member that you wish to associate the email with. */
  session_jwt?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiB2BSessionV1SessionsExchangeRequestLocale;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BSessionV1ExchangeResponse>
```

<sub>`POST /v1/b2b/sessions/exchange` · `api_b2b_session_v1_Exchange`</sub>

## `stytch.apiB2BSessionV1ExchangeAccessToken`

Exchangeaccesstoken — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1ExchangeAccessToken(input: {
  /** The access token to exchange for a Stytch Session. Must be granted the `full_access` scope. */
  access_token: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BSessionV1ExchangeAccessTokenResponse>
```

<sub>`POST /v1/b2b/sessions/exchange_access_token` · `api_b2b_session_v1_ExchangeAccessToken`</sub>

## `stytch.apiB2BSessionV1GetJwks`

Getjwks — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1GetJwks(input: {
  /** The `project_id` to get the JWKS for. */
  project_id: string;
}): Promise<ApiB2BSessionV1GetJwksResponse>
```

<sub>`GET /v1/b2b/sessions/jwks/{project_id}` · `api_b2b_session_v1_GetJWKS`</sub>

## `stytch.apiB2BSessionV1Migrate`

Migrate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Migrate(input: {
  /** The authorization token Stytch will pass in to the external userinfo endpoint. */
  session_token: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
}): Promise<ApiB2BSessionV1MigrateResponse>
```

<sub>`POST /v1/b2b/sessions/migrate` · `api_b2b_session_v1_Migrate`</sub>

## `stytch.apiB2BSessionV1Revoke`

Revoke — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BSessionV1Revoke(input: {
  /** Globally unique UUID that identifies a specific Session in the Stytch API. The `member_session_id` is critical to perform operations on an Session, so be sure to preserve this value. */
  member_session_id?: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. */
  member_id?: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BSessionV1RevokeResponse>
```

<sub>`POST /v1/b2b/sessions/revoke` · `api_b2b_session_v1_Revoke`</sub>

## `stytch.apiSessionV1Get`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1Get(input: {
  /** The `user_id` to get active Sessions for. You may use an `external_id` here if one is set for the user. */
  user_id: string;
}): Promise<ApiSessionV1GetResponse>
```

<sub>`GET /v1/sessions` · `api_session_v1_Get`</sub>

## `stytch.apiSessionV1Attest`

Attest — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1Attest(input: {
  /** The ID of the trusted auth token profile to use for attestation. */
  profile_id: string;
  /** The trusted auth token to authenticate. */
  token: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** The `session_token` for the session that you wish to add the trusted auth token authentication factor to. */
  session_token?: string;
  /** The `session_jwt` for the session that you wish to add the trusted auth token authentication factor to. */
  session_jwt?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiSessionV1AttestResponse>
```

<sub>`POST /v1/sessions/attest` · `api_session_v1_Attest`</sub>

## `stytch.apiSessionV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1Authenticate(input: {
  /** The session token to authenticate. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now; minimum of 5 and a maximum of 527040 minutes (366 days). Note that a successful authentication will continue to extend the session this many minutes. */
  session_duration_minutes?: number;
  /** The JWT to authenticate. You may provide a JWT that has expired according to its `exp` claim and needs to be refreshed. If the signature is valid and the underlying session is still active then Stytch will return a new JWT. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If an `authorization_check` object is passed in, this endpoint will also check if the User is   authorized to perform the given action on the given Resource. A User is authorized if they are assigned a Role with adequate permissions.    If the User is not authorized to perform the specified action on the specified Resource, a 403 error will be thrown.   Otherwise, the response will contain a list of Roles that satisfied the authorization check. */
  authorization_check?: ApiSessionV1AuthorizationCheck;
}): Promise<ApiSessionV1AuthenticateResponse>
```

<sub>`POST /v1/sessions/authenticate` · `api_session_v1_Authenticate`</sub>

## `stytch.apiSessionV1ExchangeAccessToken`

Exchangeaccesstoken — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1ExchangeAccessToken(input: {
  /** The access token to exchange for a Stytch Session. Must be granted the `full_access` scope. */
  access_token: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiSessionV1ExchangeAccessTokenResponse>
```

<sub>`POST /v1/sessions/exchange_access_token` · `api_session_v1_ExchangeAccessToken`</sub>

## `stytch.apiSessionV1GetJwks`

Getjwks — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1GetJwks(input: {
  /** The `project_id` to get the JWKS for. */
  project_id: string;
}): Promise<ApiSessionV1GetJwksResponse>
```

<sub>`GET /v1/sessions/jwks/{project_id}` · `api_session_v1_GetJWKS`</sub>

## `stytch.apiSessionV1Migrate`

Migrate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1Migrate(input: {
  /** The authorization token Stytch will pass in to the external userinfo endpoint. */
  session_token: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiSessionV1MigrateResponse>
```

<sub>`POST /v1/sessions/migrate` · `api_session_v1_Migrate`</sub>

## `stytch.apiSessionV1Revoke`

Revoke — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSessionV1Revoke(input: {
  /** The `session_id` to revoke. */
  session_id?: string;
  /** The session token to revoke. */
  session_token?: string;
  /** A JWT for the session to revoke. */
  session_jwt?: string;
}): Promise<ApiSessionV1RevokeResponse>
```

<sub>`POST /v1/sessions/revoke` · `api_session_v1_Revoke`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
