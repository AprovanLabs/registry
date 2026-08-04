# Password

7 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BPasswordV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1Authenticate(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The email address of the Member. */
  email_address: string;
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** A secret token for a given Stytch Session. */
  session_token?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** The JSON Web Token (JWT) for a given Stytch Session. */
  session_jwt?: string;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiB2BPasswordV1PasswordsAuthenticateRequestLocale;
  /** Adds this primary authentication factor to the intermediate session token. If the resulting set of factors satisfies the organization's primary authentication requirements and MFA requirements, the intermediate session token will be consumed and converted to a member session. If not, the same intermediate session token will be returned. */
  intermediate_session_token?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiB2BPasswordV1AuthenticateResponse>
```

<sub>`POST /v1/b2b/passwords/authenticate` · `api_b2b_password_v1_Authenticate`</sub>

## `stytch.apiB2BPasswordV1Migrate`

Migrate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1Migrate(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The password hash. For a Scrypt or PBKDF2 hash, the hash needs to be a base64 encoded string. */
  hash: string;
  /** The password hash used. Currently `bcrypt`, `scrypt`, `argon_2i`, `argon_2id`, `md_5`, `sha_1`, `sha_512`, and `pbkdf_2` are supported. */
  hash_type: ApiB2BPasswordV1PasswordsMigrateRequestHashType;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Optional parameters for MD-5 hash types. */
  md_5_config?: ApiPasswordV1Md5Config;
  /** Required parameters if the argon2 hex form, as opposed to the encoded form, is supplied. */
  argon_2_config?: ApiPasswordV1Argon2Config;
  /** Optional parameters for SHA-1 hash types. */
  sha_1_config?: ApiPasswordV1Sha1Config;
  /** Optional parameters for SHA-512 hash types. */
  sha_512_config?: ApiPasswordV1Sha512Config;
  /** Required parameters if the scrypt is not provided in a **PHC encoded form**. */
  scrypt_config?: ApiPasswordV1ScryptConfig;
  /** Required additional parameters for PBKDF2 hash keys. Note that we use the SHA-256 by default, please contact [support@stytch.com](mailto:support@stytch.com) if you use another hashing function. */
  pbkdf_2_config?: ApiPasswordV1Pbkdf2Config;
  /** The name of the Member. Each field in the name object is optional. */
  name?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data. */
  trusted_metadata?: { [key: string]: unknown };
  /** An arbitrary JSON object of application-specific data. These fields can be edited directly by the   frontend SDK, and should not be used to store critical information. See the [Metadata resource](https://stytch.com/docs/b2b/api/metadata)   for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** Roles to explicitly assign to this Member.  Will completely replace any existing explicitly assigned roles. See the  [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment.     If a Role is removed from a Member, and the Member is also implicitly assigned this Role from an SSO connection    or an SSO group, we will by default revoke any existing sessions for the Member that contain any SSO    authentication factors with the affected connection ID. You can preserve these sessions by passing in the    `preserve_existing_sessions` parameter with a value of `true`. */
  roles?: (string)[];
  /** Whether to preserve existing sessions when explicit Roles that are revoked are also implicitly assigned   by SSO connection or SSO group. Defaults to `false` - that is, existing Member Sessions that contain SSO   authentication factors with the affected SSO connection IDs will be revoked. */
  preserve_existing_sessions?: boolean;
  /** The Member's phone number. A Member may only have one phone number. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). */
  mfa_phone_number?: string;
  /** Whether to set the user's phone number as verified. This is a dangerous field. This flag should only be set if you can attest that    the user owns the phone number in question. */
  set_phone_number_verified?: boolean;
  /** If a new member is created, this will set an identifier that can be used in most API calls where a `member_id` is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within an organization, but may be reused across different organizations in the same project. Note that if a member already exists, this field will be ignored. */
  external_id?: string;
}): Promise<ApiB2BPasswordV1MigrateResponse>
```

<sub>`POST /v1/b2b/passwords/migrate` · `api_b2b_password_v1_Migrate`</sub>

## `stytch.apiB2BPasswordV1StrengthCheck`

Strengthcheck — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BPasswordV1StrengthCheck(input: {
  /** The password to authenticate, reset, or set for the first time. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** The email address of the Member. */
  email_address?: string;
}): Promise<ApiB2BPasswordV1StrengthCheckResponse>
```

<sub>`POST /v1/b2b/passwords/strength_check` · `api_b2b_password_v1_StrengthCheck`</sub>

## `stytch.apiPasswordV1Create`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1Create(input: {
  /** The email address of the end user. */
  email: string;
  /** The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key, supply a null value.    Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be ignored. Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The `untrusted_metadata` field contains an arbitrary JSON object of application-specific data. Untrusted metadata can be edited by end users directly via the SDK, and **cannot be used to store critical information.** See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** The name of the user. Each field in the name object is optional. */
  name?: ApiUserV1Name;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the User. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiPasswordV1CreateResponse>
```

<sub>`POST /v1/passwords` · `api_password_v1_Create`</sub>

## `stytch.apiPasswordV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1Authenticate(input: {
  /** The email address of the end user. */
  email: string;
  /** The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
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
}): Promise<ApiPasswordV1AuthenticateResponse>
```

<sub>`POST /v1/passwords/authenticate` · `api_password_v1_Authenticate`</sub>

## `stytch.apiPasswordV1Migrate`

Migrate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1Migrate(input: {
  /** The email address of the end user. */
  email: string;
  /** The password hash. For a Scrypt or PBKDF2 hash, the hash needs to be a base64 encoded string. */
  hash: string;
  /** The password hash used. Currently `bcrypt`, `scrypt`, `argon_2i`, `argon_2id`, `md_5`, `sha_1`, `sha_512`, and `pbkdf_2` are supported. */
  hash_type: ApiPasswordV1PasswordsMigrateRequestHashType;
  /** Optional parameters for MD-5 hash types. */
  md_5_config?: ApiPasswordV1Md5Config;
  /** Required parameters if the argon2 hex form, as opposed to the encoded form, is supplied. */
  argon_2_config?: ApiPasswordV1Argon2Config;
  /** Optional parameters for SHA-1 hash types. */
  sha_1_config?: ApiPasswordV1Sha1Config;
  /** Optional parameters for SHA-512 hash types. */
  sha_512_config?: ApiPasswordV1Sha512Config;
  /** Required parameters if the scrypt is not provided in a [PHC encoded form](https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md#phc-string-format). */
  scrypt_config?: ApiPasswordV1ScryptConfig;
  /** Required additional parameters for PBKDF2 hash keys. */
  pbkdf_2_config?: ApiPasswordV1Pbkdf2Config;
  /** The `trusted_metadata` field contains an arbitrary JSON object of application-specific data. See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  trusted_metadata?: { [key: string]: unknown };
  /** The `untrusted_metadata` field contains an arbitrary JSON object of application-specific data. Untrusted metadata can be edited by end users directly via the SDK, and **cannot be used to store critical information.** See the [Metadata](https://stytch.com/docs/api/metadata) reference for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** Whether to set the user's email as verified. This is a dangerous field, incorrect use may lead to users getting erroneously                 deduplicated into one User object. This flag should only be set if you can attest that the user owns the email address in question.                  */
  set_email_verified?: boolean;
  /** The name of the user. Each field in the name object is optional. */
  name?: ApiUserV1Name;
  /** The phone number of the user. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). */
  phone_number?: string;
  /** Whether to set the user's phone number as verified. This is a dangerous field, this flag should only be set if you can attest that    the user owns the phone number in question. */
  set_phone_number_verified?: boolean;
  /** If a new user is created, this will set an identifier that can be used in API calls wherever a user_id is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. */
  external_id?: string;
  /** Roles to explicitly assign to this User.    See the [RBAC guide](https://stytch.com/docs/guides/rbac/role-assignment) for more information about role assignment. */
  roles?: (string)[];
}): Promise<ApiPasswordV1MigrateResponse>
```

<sub>`POST /v1/passwords/migrate` · `api_password_v1_Migrate`</sub>

## `stytch.apiPasswordV1StrengthCheck`

Strengthcheck — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiPasswordV1StrengthCheck(input: {
  /** The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characters, etc. */
  password: string;
  /** The email address of the end user. */
  email?: string;
}): Promise<ApiPasswordV1StrengthCheckResponse>
```

<sub>`POST /v1/passwords/strength_check` · `api_password_v1_StrengthCheck`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
