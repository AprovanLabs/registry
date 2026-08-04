# B2B Oauth

2 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BOauthV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BOauthV1Authenticate(input: {
  /** The token to authenticate. */
  oauth_token: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_verifier?: string;
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiB2BOauthV1OauthAuthenticateRequestLocale;
  /** Adds this primary authentication factor to the intermediate session token. If the resulting set of factors satisfies the organization's primary authentication requirements and MFA requirements, the intermediate session token will be consumed and converted to a member session. If not, the same intermediate session token will be returned. */
  intermediate_session_token?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BOauthV1AuthenticateResponse>
```

<sub>`POST /v1/b2b/oauth/authenticate` · `api_b2b_oauth_v1_Authenticate`</sub>

## `stytch.apiB2BOauthV1B2BOauthDiscoveryAuthenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BOauthV1B2BOauthDiscoveryAuthenticate(input: {
  /** The Discovery OAuth token to authenticate. */
  discovery_oauth_token: string;
  session_token?: string;
  session_duration_minutes?: number;
  session_jwt?: string;
  session_custom_claims?: { [key: string]: unknown };
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_verifier?: string;
}): Promise<ApiB2BOauthV1B2BOauthDiscoveryAuthenticateResponse>
```

<sub>`POST /v1/b2b/oauth/discovery/authenticate` · `api_b2b_oauth_v1_b2b_oauth_discovery_Authenticate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
