# Sso

12 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiSsoV1GetConnections`

Getconnections — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1GetConnections(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1GetConnectionsResponse>
```

<sub>`GET /v1/b2b/sso/{organization_id}` · `api_sso_v1_GetConnections`</sub>

## `stytch.apiSsoV1DeleteConnection`

Deleteconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1DeleteConnection(input: {
  /** The organization ID that the SSO connection belongs to. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SSO connection. SAML, OIDC, and External connection IDs can be provided. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1DeleteConnectionResponse>
```

<sub>`DELETE /v1/b2b/sso/{organization_id}/connections/{connection_id}` · `api_sso_v1_DeleteConnection`</sub>

## `stytch.apiSsoV1Authenticate`

Authenticate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1Authenticate(input: {
  /** The token to authenticate. */
  sso_token: string;
  /** A base64url encoded one time secret used to validate that the request starts and ends on the same device. */
  pkce_code_verifier?: string;
  /** The `session_token` belonging to the member that you wish to associate the email with. */
  session_token?: string;
  /** The `session_jwt` belonging to the member that you wish to associate the email with. */
  session_jwt?: string;
  /** Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't already exist,   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the `session_jwt` will have a fixed lifetime of   five minutes regardless of the underlying session duration, and will need to be refreshed over time.    This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).    If a `session_token` or `session_jwt` is provided then a successful authentication will continue to extend the session this many minutes.    If the `session_duration_minutes` parameter is not specified, a Stytch session will be created with a 60 minute duration. If you don't want   to use the Stytch session product, you can ignore the session fields in the response. */
  session_duration_minutes?: number;
  /** Add a custom claims map to the Session being authenticated. Claims are only created if a Session is initialized by providing a value in   `session_duration_minutes`. Claims will be included on the Session object and in the JWT. To update a key in an existing Session, supply a new value. To   delete a key, supply a null value. Custom claims made with reserved claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) will be ignored.   Total custom claims size cannot exceed four kilobytes. */
  session_custom_claims?: { [key: string]: unknown };
  /** If the Member needs to complete an MFA step, and the Member has a phone number, this endpoint will pre-emptively send a one-time passcode (OTP) to the Member's phone number. The locale argument will be used to determine which language to use when sending the passcode.  Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English.  */
  locale?: ApiSsoV1SsoAuthenticateRequestLocale;
  /** Adds this primary authentication factor to the intermediate session token. If the resulting set of factors satisfies the organization's primary authentication requirements and MFA requirements, the intermediate session token will be consumed and converted to a member session. If not, the same intermediate session token will be returned. */
  intermediate_session_token?: string;
  /** If the `telemetry_id` is passed, as part of this request, Stytch will call the [Fingerprint Lookup API](https://stytch.com/docs/fraud/api/fingerprint-lookup) and store the associated fingerprints and IPGEO information for the Member. Your workspace must be enabled for Device Fingerprinting to use this feature. */
  telemetry_id?: string;
}): Promise<ApiSsoV1AuthenticateResponse>
```

<sub>`POST /v1/b2b/sso/authenticate` · `api_sso_v1_Authenticate`</sub>

## `stytch.apiSsoV1SsoExternalCreateConnection`

Createconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoExternalCreateConnection(input: {
  /** Globally unique UUID that identifies a different Organization within your Project. */
  external_organization_id: string;
  /** Globally unique UUID that identifies a specific SSO connection configured for a different Organization in your Project. */
  external_connection_id: string;
  /** A human-readable display name for the connection. */
  display_name?: string;
  connection_implicit_role_assignments?: (ApiSsoV1SamlConnectionImplicitRoleAssignment)[];
  group_implicit_role_assignments?: (ApiSsoV1SamlGroupImplicitRoleAssignment)[];
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoExternalCreateConnectionResponse>
```

<sub>`POST /v1/b2b/sso/external/{organization_id}` · `api_sso_v1_sso_external_CreateConnection`</sub>

## `stytch.apiSsoV1SsoExternalUpdateConnection`

Updateconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoExternalUpdateConnection(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  /** All Members who log in with this External connection will implicitly receive the specified Roles. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment. Implicit role assignments are not supported for External connections if the underlying SSO connection is an OIDC connection.  */
  external_connection_implicit_role_assignments?: (ApiSsoV1ConnectionImplicitRoleAssignment)[];
  /** Defines the names of the groups  that grant specific role assignments. For each group-Role pair, if a Member logs in with this external connection and  belongs to the specified group, they will be granted the associated Role. See the  [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment. Before adding any group implicit role assignments to an external connection, you must add a "groups" key to the underlying SAML connection's          `attribute_mapping`. Make sure that the SAML connection IdP is configured to correctly send the group information. Implicit role assignments are not supported          for External connections if the underlying SSO connection is an OIDC connection. */
  external_group_implicit_role_assignments?: (ApiSsoV1GroupImplicitRoleAssignment)[];
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific External SSO Connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoExternalUpdateConnectionResponse>
```

<sub>`PUT /v1/b2b/sso/external/{organization_id}/connections/{connection_id}` · `api_sso_v1_sso_external_UpdateConnection`</sub>

## `stytch.apiSsoV1SsoOidcCreateConnection`

Createconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoOidcCreateConnection(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  /** Name of the IdP. Enum with possible values: `classlink`, `cyberark`, `duo`, `google-workspace`, `jumpcloud`, `keycloak`, `miniorange`, `microsoft-entra`, `okta`, `onelogin`, `pingfederate`, `rippling`, `salesforce`, `shibboleth`, or `generic`.  Specifying a known provider allows Stytch to handle any provider-specific logic. */
  identity_provider?: ApiSsoV1SsoOidcCreateConnectionRequestIdentityProvider;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoOidcCreateConnectionResponse>
```

<sub>`POST /v1/b2b/sso/oidc/{organization_id}` · `api_sso_v1_sso_oidc_CreateConnection`</sub>

## `stytch.apiSsoV1SsoOidcUpdateConnection`

Updateconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoOidcUpdateConnection(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  /** The OAuth2.0 client ID used to authenticate login attempts. This will be provided by the IdP. */
  client_id?: string;
  /** The secret belonging to the OAuth2.0 client used to authenticate login attempts. This will be provided by the IdP. */
  client_secret?: string;
  /** A case-sensitive `https://` URL that uniquely identifies the IdP. This will be provided by the IdP. */
  issuer?: string;
  /** The location of the URL that starts an OAuth login at the IdP. This will be provided by the IdP. */
  authorization_url?: string;
  /** The location of the URL that issues OAuth2.0 access tokens and OIDC ID tokens. This will be provided by the IdP. */
  token_url?: string;
  /** The location of the IDP's [UserInfo Endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). This will be provided by the IdP. */
  userinfo_url?: string;
  /** The location of the IdP's JSON Web Key Set, used to verify credentials issued by the IdP. This will be provided by the IdP. */
  jwks_url?: string;
  /** Name of the IdP. Enum with possible values: `classlink`, `cyberark`, `duo`, `google-workspace`, `jumpcloud`, `keycloak`, `miniorange`, `microsoft-entra`, `okta`, `onelogin`, `pingfederate`, `rippling`, `salesforce`, `shibboleth`, or `generic`.  Specifying a known provider allows Stytch to handle any provider-specific logic. */
  identity_provider?: ApiSsoV1SsoOidcUpdateConnectionRequestIdentityProvider;
  /** Include a space-separated list of custom scopes that you'd like to include. Note that this list must be URL encoded, e.g. the spaces must be expressed as %20. */
  custom_scopes?: string;
  /** An object that represents the attributes used to identify a Member. This object will map the IdP-defined User attributes to Stytch-specific values, which will appear on the member's Trusted Metadata. */
  attribute_mapping?: { [key: string]: unknown };
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific SSO `connection_id` for a Member. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoOidcUpdateConnectionResponse>
```

<sub>`PUT /v1/b2b/sso/oidc/{organization_id}/connections/{connection_id}` · `api_sso_v1_sso_oidc_UpdateConnection`</sub>

## `stytch.apiSsoV1SsoSamlCreateConnection`

Createconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoSamlCreateConnection(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  /** Name of the IdP. Enum with possible values: `classlink`, `cyberark`, `duo`, `google-workspace`, `jumpcloud`, `keycloak`, `miniorange`, `microsoft-entra`, `okta`, `onelogin`, `pingfederate`, `rippling`, `salesforce`, `shibboleth`, or `generic`.  Specifying a known provider allows Stytch to handle any provider-specific logic. */
  identity_provider?: ApiSsoV1SsoSamlCreateConnectionRequestIdentityProvider;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoSamlCreateConnectionResponse>
```

<sub>`POST /v1/b2b/sso/saml/{organization_id}` · `api_sso_v1_sso_saml_CreateConnection`</sub>

## `stytch.apiSsoV1SsoSamlUpdateConnection`

Updateconnection — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoSamlUpdateConnection(input: {
  /** A globally unique name for the IdP. This will be provided by the IdP. */
  idp_entity_id?: string;
  /** A human-readable display name for the connection. */
  display_name?: string;
  /** An object that represents the attributes used to identify a Member. This object will map the IdP-defined User attributes to Stytch-specific values. Required attributes: `email` and one of `full_name` or `first_name` and `last_name`. */
  attribute_mapping?: { [key: string]: unknown };
  /** A certificate that Stytch will use to verify the sign-in assertion sent by the IdP, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format. See our [X509 guide](https://stytch.com/docs/b2b/api/saml-certificates) for more info. */
  x509_certificate?: string;
  /** The URL for which assertions for login requests will be sent. This will be provided by the IdP. */
  idp_sso_url?: string;
  /** All Members who log in with this SAML connection will implicitly receive the specified Roles. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment. */
  saml_connection_implicit_role_assignments?: (ApiSsoV1SamlConnectionImplicitRoleAssignment)[];
  /** Defines the names of the SAML groups  that grant specific role assignments. For each group-Role pair, if a Member logs in with this SAML connection and  belongs to the specified SAML group, they will be granted the associated Role. See the  [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment. Before adding any group implicit role assignments, you must add a "groups" key to your SAML connection's          `attribute_mapping`. Make sure that your IdP is configured to correctly send the group information. */
  saml_group_implicit_role_assignments?: (ApiSsoV1SamlGroupImplicitRoleAssignment)[];
  /** An alternative URL to use for the Audience Restriction. This value can be used when you wish to migrate an existing SAML integration to Stytch with zero downtime. Read our [SSO migration guide](https://stytch.com/docs/b2b/guides/migrations/additional-migration-considerations) for more info. */
  alternative_audience_uri?: string;
  /** Name of the IdP. Enum with possible values: `classlink`, `cyberark`, `duo`, `google-workspace`, `jumpcloud`, `keycloak`, `miniorange`, `microsoft-entra`, `okta`, `onelogin`, `pingfederate`, `rippling`, `salesforce`, `shibboleth`, or `generic`.  Specifying a known provider allows Stytch to handle any provider-specific logic. */
  identity_provider?: ApiSsoV1SsoSamlUpdateConnectionRequestIdentityProvider;
  /** A PKCS1 format RSA private key used for signing SAML requests. Only PKCS1 format (starting with "-----BEGIN RSA PRIVATE KEY-----") is supported. When provided, Stytch will generate a new x509 certificate from this key and return it in the signing_certificates array. */
  signing_private_key?: string;
  /** The NameID format the SAML Connection expects to use. Defaults to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`. */
  nameid_format?: string;
  /** An alternative URL to use for the `AssertionConsumerServiceURL` in SP initiated SAML AuthNRequests. This value can be used when you wish to migrate an existing SAML integration to Stytch with zero downtime. Note that you will be responsible for proxying requests sent to the Alternative ACS URL to Stytch. Read our [SSO migration guide](https://stytch.com/docs/b2b/guides/migrations/additional-migration-considerations) for more info. */
  alternative_acs_url?: string;
  /** Determines whether IDP initiated auth is allowed for a given SAML connection. Defaults to false (IDP Initiated Auth is enabled). */
  idp_initiated_auth_disabled?: boolean;
  /** A PKCS1 format RSA private key used to decrypt encrypted SAML assertions. Only PKCS1 format (starting with "-----BEGIN RSA PRIVATE KEY-----") is supported. */
  saml_encryption_private_key?: string;
  allow_gateway_callback?: boolean;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific SSO `connection_id` for a Member. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoSamlUpdateConnectionResponse>
```

<sub>`PUT /v1/b2b/sso/saml/{organization_id}/connections/{connection_id}` · `api_sso_v1_sso_saml_UpdateConnection`</sub>

## `stytch.apiSsoV1SsoSamlDeleteEncryptionPrivateKey`

Deleteencryptionprivatekey — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoSamlDeleteEncryptionPrivateKey(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific SSO `connection_id` for a Member. */
  connection_id: string;
  /** The ID of the encryption private key to be deleted. */
  private_key_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoSamlDeleteEncryptionPrivateKeyResponse>
```

<sub>`DELETE /v1/b2b/sso/saml/{organization_id}/connections/{connection_id}/encryption_private_keys/{private_key_id}` · `api_sso_v1_sso_saml_DeleteEncryptionPrivateKey`</sub>

## `stytch.apiSsoV1SsoSamlUpdateByUrl`

Updatebyurl — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoSamlUpdateByUrl(input: {
  /** A URL that points to the IdP metadata. This will be provided by the IdP. */
  metadata_url: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific SSO `connection_id` for a Member. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoSamlUpdateByUrlResponse>
```

<sub>`PUT /v1/b2b/sso/saml/{organization_id}/connections/{connection_id}/url` · `api_sso_v1_sso_saml_UpdateByURL`</sub>

## `stytch.apiSsoV1SsoSamlDeleteVerificationCertificate`

Deleteverificationcertificate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiSsoV1SsoSamlDeleteVerificationCertificate(input: {
  /** The organization ID that the SAML connection belongs to. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SAML connection. */
  connection_id: string;
  /** The ID of the certificate to be deleted. */
  certificate_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiSsoV1SsoSamlDeleteVerificationCertificateResponse>
```

<sub>`DELETE /v1/b2b/sso/saml/{organization_id}/connections/{connection_id}/verification_certificates/{certificate_id}` · `api_sso_v1_sso_saml_DeleteVerificationCertificate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
