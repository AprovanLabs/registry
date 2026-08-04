# Organizations

15 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiOrganizationV1OrganizationsMembersGet`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersGet(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id?: string;
  /** The email address of the Member. */
  email_address?: string;
}): Promise<ApiOrganizationV1OrganizationsMembersGetResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/member` · `api_organization_v1_organizations_members_Get`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersCreate`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersCreate(input: {
  /** The email address of the Member. */
  email_address: string;
  /** The name of the Member. */
  name?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data. */
  trusted_metadata?: { [key: string]: unknown };
  /** An arbitrary JSON object of application-specific data. These fields can be edited directly by the   frontend SDK, and should not be used to store critical information. See the [Metadata resource](https://stytch.com/docs/b2b/api/metadata)   for complete field behavior details. */
  untrusted_metadata?: { [key: string]: unknown };
  /** Flag for whether or not to save a Member as `pending` or `active` in Stytch. It defaults to false. If true, new Members will be created with status `pending` in Stytch's backend. Their status will remain `pending` and they will continue to receive signup email templates for every Email Magic Link until that Member authenticates and becomes `active`. If false, new Members will be created with status `active`. */
  create_member_as_pending?: boolean;
  /** Identifies the Member as a break glass user - someone who has permissions to authenticate into an Organization by bypassing the Organization's settings. A break glass account is typically used for emergency purposes to gain access outside of normal authentication procedures. Refer to the [Organization object](https://stytch.com/docs/b2b/api/organization-object) and its `auth_methods` and `allowed_auth_methods` fields for more details. */
  is_breakglass?: boolean;
  /** The Member's phone number. A Member may only have one phone number. The phone number should be in E.164 format (i.e. +1XXXXXXXXXX). */
  mfa_phone_number?: string;
  /** Sets whether the Member is enrolled in MFA. If true, the Member must complete an MFA step whenever they wish to log in to their Organization. If false, the Member only needs to complete an MFA step if the Organization's MFA policy is set to `REQUIRED_FOR_ALL`. */
  mfa_enrolled?: boolean;
  /** Roles to explicitly assign to this Member. See the [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment)    for more information about role assignment. */
  roles?: (string)[];
  /** An identifier that can be used in most API calls where a `member_id` is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within an organization, but may be reused across different organizations in the same project. */
  external_id?: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersCreateResponse>
```

<sub>`POST /v1/b2b/organizations/{organization_id}/members` · `api_organization_v1_organizations_members_Create`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDelete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDelete(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersDeleteResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/members/{member_id}` · `api_organization_v1_organizations_members_Delete`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersUpdate`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersUpdate(input: {
  /** The name of the Member.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.name` action on the `stytch.member` Resource. Alternatively, if the Member Session matches the Member associated with the `member_id` passed in the request, the authorization check will also allow a Member Session that has permission to perform the `update.info.name` action on the `stytch.self` Resource. */
  name?: string;
  /** An arbitrary JSON object for storing application-specific data or identity-provider-specific data.           If a session header is passed into the request, this field may **not** be passed into the request. You cannot           update trusted metadata when acting as a Member. */
  trusted_metadata?: { [key: string]: unknown };
  /** An arbitrary JSON object of application-specific data. These fields can be edited directly by the   frontend SDK, and should not be used to store critical information. See the [Metadata resource](https://stytch.com/docs/b2b/api/metadata)   for complete field behavior details.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.untrusted-metadata` action on the `stytch.member` Resource. Alternatively, if the Member Session matches the Member associated with the `member_id` passed in the request, the authorization check will also allow a Member Session that has permission to perform the `update.info.untrusted-metadata` action on the `stytch.self` Resource. */
  untrusted_metadata?: { [key: string]: unknown };
  /** Identifies the Member as a break glass user - someone who has permissions to authenticate into an Organization by bypassing the Organization's settings. A break glass account is typically used for emergency purposes to gain access outside of normal authentication procedures. Refer to the [Organization object](https://stytch.com/docs/b2b/api/organization-object) and its `auth_methods` and `allowed_auth_methods` fields for more details.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.is-breakglass` action on the `stytch.member` Resource. */
  is_breakglass?: boolean;
  /** Sets the Member's phone number. Throws an error if the Member already has a phone number. To change the Member's phone number, use the [Delete member phone number endpoint](https://stytch.com/docs/b2b/api/delete-member-mfa-phone-number) to delete the Member's existing phone number first.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.mfa-phone` action on the `stytch.member` Resource. Alternatively, if the Member Session matches the Member associated with the `member_id` passed in the request, the authorization check will also allow a Member Session that has permission to perform the `update.info.mfa-phone` action on the `stytch.self` Resource. */
  mfa_phone_number?: string;
  /** Sets whether the Member is enrolled in MFA. If true, the Member must complete an MFA step whenever they wish to log in to their Organization. If false, the Member only needs to complete an MFA step if the Organization's MFA policy is set to `REQUIRED_FOR_ALL`.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.mfa-enrolled` action on the `stytch.member` Resource. Alternatively, if the Member Session matches the Member associated with the `member_id` passed in the request, the authorization check will also allow a Member Session that has permission to perform the `update.settings.mfa-enrolled` action on the `stytch.self` Resource. */
  mfa_enrolled?: boolean;
  /** Roles to explicitly assign to this Member.  Will completely replace any existing explicitly assigned roles. See the  [RBAC guide](https://stytch.com/docs/b2b/guides/rbac/role-assignment) for more information about role assignment.     If a Role is removed from a Member, and the Member is also implicitly assigned this Role from an SSO connection    or an SSO group, we will by default revoke any existing sessions for the Member that contain any SSO    authentication factors with the affected connection ID. You can preserve these sessions by passing in the    `preserve_existing_sessions` parameter with a value of `true`.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.roles` action on the `stytch.member` Resource. */
  roles?: (string)[];
  /** Whether to preserve existing sessions when explicit Roles that are revoked are also implicitly assigned   by SSO connection or SSO group. Defaults to `false` - that is, existing Member Sessions that contain SSO   authentication factors with the affected SSO connection IDs will be revoked. */
  preserve_existing_sessions?: boolean;
  /** The Member's default MFA method. This value is used to determine which secondary MFA method to use in the case of multiple methods registered for a Member. The current possible values are `sms_otp` and `totp`.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.settings.default-mfa-method` action on the `stytch.member` Resource. Alternatively, if the Member Session matches the Member associated with the `member_id` passed in the request, the authorization check will also allow a Member Session that has permission to perform the `update.settings.default-mfa-method` action on the `stytch.self` Resource. */
  default_mfa_method?: string;
  /** Updates the Member's `email_address`, if provided. This will clear any existing passwords and require re-verification of the new email address.         If a Member's email address is changed, other Members in the same Organization cannot use the old email address, although the Member may update back to their old email address.         A Member's email address can only be useable again by other Members if the Member is deleted.  If this field is provided and a session header is passed into the request, the Member Session must have permission to perform the `update.info.email` action on the `stytch.member` Resource. Members cannot update their own email address. */
  email_address?: string;
  /** An identifier that can be used in most API calls where a `member_id` is expected. This is a string consisting of alphanumeric, `.`, `_`, `-`, or `|` characters with a maximum length of 128 characters. External IDs must be unique within an organization, but may be reused across different organizations in the same project. */
  external_id?: string;
  /** If `unlink_email` is `true` and an `email_address` is provided, the Member's previous email will be deleted instead of retired. Defaults to `false`. */
  unlink_email?: boolean;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersUpdateResponse>
```

<sub>`PUT /v1/b2b/organizations/{organization_id}/members/{member_id}` · `api_organization_v1_organizations_members_Update`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersGetConnectedApps`

Getconnectedapps — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersGetConnectedApps(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersGetConnectedAppsResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/connected_apps` · `api_organization_v1_organizations_members_GetConnectedApps`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDeleteExternalId`

Deleteexternalid — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDeleteExternalId(input: {
  organization_id: string;
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersDeleteExternalIdResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/members/{member_id}/external_id` · `api_organization_v1_organizations_members_DeleteExternalId`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersOidcProviders`

Oidcproviders — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersOidcProviders(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
  /** Whether to return the refresh token Stytch has stored for the OAuth Provider. Defaults to false. **Important:** If your application exchanges the refresh token, Stytch may not be able to automatically refresh access tokens in the future. */
  include_refresh_token?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersOidcProvidersResponse>
```

<sub>`GET /v1/b2b/organizations/{organization_id}/members/{member_id}/oidc_providers` · `api_organization_v1_organizations_members_OIDCProviders`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersReactivate`

Reactivate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersReactivate(input: {
  body: ApiOrganizationV1OrganizationsMembersReactivateRequest;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersReactivateResponse>
```

<sub>`PUT /v1/b2b/organizations/{organization_id}/members/{member_id}/reactivate` · `api_organization_v1_organizations_members_Reactivate`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersStartEmailUpdate`

Startemailupdate — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersStartEmailUpdate(input: {
  /** The new email address for the Member. */
  email_address: string;
  /** The URL that the Member clicks from the login Email Magic Link. This URL should be an endpoint in the backend server that   verifies the request by querying Stytch's authenticate endpoint and finishes the login. If this value is not passed, the default login   redirect URL that you set in your Dashboard is used. If you have not set a default login redirect URL, an error is returned. */
  login_redirect_url?: string;
  /** Used to determine which language to use when sending the user this delivery method. Parameter is an [IETF BCP 47 language tag](https://www.w3.org/International/articles/language-tags/), e.g. `"en"`.  If no value is provided, the copy defaults to English. */
  locale?: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestLocale;
  /** Use a custom template for login emails. By default, it will use your default email template. Templates can be added in the [Stytch dashboard](https://stytch.com/dashboard/templates) using our built-in customization options or custom HTML templates with type “Magic Links - Login”. */
  login_template_id?: string;
  /** The method that should be used to verify a member's new email address. The options are `EMAIL_MAGIC_LINK` or `EMAIL_OTP`. This field is optional, if no value is provided, `EMAIL_MAGIC_LINK` will be used. */
  delivery_method?: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestDeliveryMethod;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersStartEmailUpdateResponse>
```

<sub>`POST /v1/b2b/organizations/{organization_id}/members/{member_id}/start_email_update` · `api_organization_v1_organizations_members_StartEmailUpdate`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDeleteTotp`

Deletetotp — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDeleteTotp(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersDeleteTotpResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/members/{member_id}/totp` · `api_organization_v1_organizations_members_DeleteTOTP`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersUnlinkRetiredEmail`

Unlinkretiredemail — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersUnlinkRetiredEmail(input: {
  /** The globally unique UUID of a Member's email. */
  email_id?: string;
  /** The email address of the Member. */
  email_address?: string;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailResponse>
```

<sub>`POST /v1/b2b/organizations/{organization_id}/members/{member_id}/unlink_retired_email` · `api_organization_v1_organizations_members_UnlinkRetiredEmail`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDeleteMfaPhoneNumber`

Deletemfaphonenumber — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDeleteMfaPhoneNumber(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. You may use an external_id here if one is set for the member. */
  member_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersDeleteMfaPhoneNumberResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/members/mfa_phone_numbers/{member_id}` · `api_organization_v1_organizations_members_DeleteMFAPhoneNumber`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDeletePassword`

Deletepassword — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDeletePassword(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** Globally unique UUID that identifies a Member's password. */
  member_password_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersDeletePasswordResponse>
```

<sub>`DELETE /v1/b2b/organizations/{organization_id}/members/passwords/{member_password_id}` · `api_organization_v1_organizations_members_DeletePassword`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersDangerouslyGet`

Dangerouslyget — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersDangerouslyGet(input: {
  /** Globally unique UUID that identifies a specific Member. The `member_id` is critical to perform operations on a Member, so be sure to preserve this value. */
  member_id: string;
  /** Whether to include deleted Members in the response. Defaults to false. */
  include_deleted?: boolean;
}): Promise<ApiOrganizationV1OrganizationsMembersGetResponse>
```

<sub>`GET /v1/b2b/organizations/members/dangerously_get/{member_id}` · `api_organization_v1_organizations_members_DangerouslyGet`</sub>

## `stytch.apiOrganizationV1OrganizationsMembersSearch`

Search — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiOrganizationV1OrganizationsMembersSearch(input: {
  /** An array of organization_ids. At least one value is required. */
  organization_ids: (string)[];
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
  /** The optional query object contains the operator, i.e. `AND` or `OR`, and the operands that will filter your results. Only an operator is required. If you include no operands, no filtering will be applied. If you include no query object, it will return all Members with no filtering applied. */
  query?: ApiOrganizationV1SearchQuery;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiOrganizationV1OrganizationsMembersSearchResponse>
```

<sub>`POST /v1/b2b/organizations/members/search` · `api_organization_v1_organizations_members_Search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
