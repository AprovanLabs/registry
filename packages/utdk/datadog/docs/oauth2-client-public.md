# OAuth2 Client Public

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getOAuth2WellKnownSites`

Get OAuth2 well-known sites — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOAuth2WellKnownSites(): Promise<OAuth2WellKnownSitesResponse>
```

<sub>`GET /api/v2/oauth2/.well-known/sites` · `GetOAuth2WellKnownSites`</sub>

## `datadog.deleteScopesRestriction`

Delete an OAuth2 client scopes restriction — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteScopesRestriction(input: {
  /** UUID of the OAuth2 client. */
  client_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/oauth2/clients/{client_uuid}/scopes_restriction` · `DeleteScopesRestriction`</sub>

## `datadog.getScopesRestriction`

Get an OAuth2 client scopes restriction — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getScopesRestriction(input: {
  /** UUID of the OAuth2 client. */
  client_uuid: string;
}): Promise<OAuthScopesRestrictionResponse>
```

<sub>`GET /api/v2/oauth2/clients/{client_uuid}/scopes_restriction` · `GetScopesRestriction`</sub>

## `datadog.upsertScopesRestriction`

Upsert an OAuth2 client scopes restriction — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertScopesRestriction(input: {
  data: UpsertOAuthScopesRestrictionData;
  /** UUID of the OAuth2 client. */
  client_uuid: string;
}): Promise<OAuthScopesRestrictionResponse>
```

<sub>`POST /api/v2/oauth2/clients/{client_uuid}/scopes_restriction` · `UpsertScopesRestriction`</sub>

## `datadog.registerOAuthClient`

Register an OAuth2 client — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.registerOAuthClient(input: {
  /** Human-readable name of the client. Control characters are rejected. */
  client_name: string;
  /** URL of the home page of the client. */
  client_uri?: string;
  /** OAuth 2.0 grant types the client may use. Defaults to `authorization_code` and `refresh_token` when omitted. */
  grant_types?: (OAuthClientRegistrationGrantType)[];
  /** URL referencing the client's JSON Web Key Set. */
  jwks_uri?: string;
  /** URL referencing a logo for the client. */
  logo_uri?: string;
  /** URL pointing to the client's privacy policy. */
  policy_uri?: string;
  /** Array of redirection URI strings used by the client in redirect-based flows. */
  redirect_uris: (string)[];
  /** OAuth 2.0 response types the client may use. Only `code` is supported. */
  response_types?: (OAuthClientRegistrationResponseType)[];
  /** Space-separated list of scope values the client may request. */
  scope?: string;
  /** Requested authentication method for the token endpoint. Only `none` is supported. */
  token_endpoint_auth_method?: string;
  /** URL pointing to the client's terms of service. */
  tos_uri?: string;
}): Promise<OAuthClientRegistrationResponse>
```

<sub>`POST /api/v2/oauth2/register` · `RegisterOAuthClient`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
