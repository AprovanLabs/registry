# Members

6 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiOrganizationV1OrganizationsMembersConnectedAppsRevoke`

Revoke — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersConnectedAppsRevoke(input: {
  body: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** The ID of the Connected App. */
  connected_app_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeResponse>
```

<sub>`POST /v1/b2b/organizations/{organization_id}/members/{member_id}/connected_apps/{connected_app_id}/revoke` · `api_organization_v1_organizations_members_connected_apps_Revoke`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOauthProvidersGithub`

Github — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOauthProvidersGithub(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** Whether to return the refresh token Stytch has stored for the OAuth Provider. Defaults to false. **Important:** If your application exchanges the refresh token, Stytch may not be able to automatically refresh access tokens in the future. */
  include_refresh_token?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersOauthProvidersGithubResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oauth_providers/github` · `api_organization_v1_organizations_members_oauth_providers_Github`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOauthProvidersGoogle`

Google — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOauthProvidersGoogle(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** Whether to return the refresh token Stytch has stored for the OAuth Provider. Defaults to false. **Important:** If your application exchanges the refresh token, Stytch may not be able to automatically refresh access tokens in the future. */
  include_refresh_token?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersOauthProvidersGoogleResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oauth_providers/google` · `api_organization_v1_organizations_members_oauth_providers_Google`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOauthProvidersHubspot`

Hubspot — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOauthProvidersHubspot(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** Whether to return the refresh token Stytch has stored for the OAuth Provider. Defaults to false. **Important:** If your application exchanges the refresh token, Stytch may not be able to automatically refresh access tokens in the future. */
  include_refresh_token?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersOauthProvidersHubspotResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oauth_providers/hubspot` · `api_organization_v1_organizations_members_oauth_providers_Hubspot`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOauthProvidersMicrosoft`

Microsoft — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOauthProvidersMicrosoft(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** Whether to return the refresh token Stytch has stored for the OAuth Provider. Defaults to false. **Important:** If your application exchanges the refresh token, Stytch may not be able to automatically refresh access tokens in the future. */
  include_refresh_token?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersOauthProvidersMicrosoftResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oauth_providers/microsoft` · `api_organization_v1_organizations_members_oauth_providers_Microsoft`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOauthProvidersSlack`

Slack — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOauthProvidersSlack(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}): Promise<ApiOrganizationV1OrganizationsMembersOauthProvidersSlackResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oauth_providers/slack` · `api_organization_v1_organizations_members_oauth_providers_Slack`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
