# B2B Scim

8 operations · `@utdk/stytch`

```ts
import stytch from "@utdk/stytch";
```

## `stytch.apiB2BScimV1B2BScimConnectionGet`

Get — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionGet(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionGetResponse>
```

<sub>`GET /v1/b2b/scim/{organization_id}/connection` · `api_b2b_scim_v1_b2b_scim_connection_Get`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionCreate`

Create — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionCreate(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  identity_provider?: ApiB2BScimV1ScimConnectionCreateRequestIdentityProvider;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionCreateResponse>
```

<sub>`POST /v1/b2b/scim/{organization_id}/connection` · `api_b2b_scim_v1_b2b_scim_connection_Create`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionDelete`

Delete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionDelete(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionDeleteResponse>
```

<sub>`DELETE /v1/b2b/scim/{organization_id}/connection/{connection_id}` · `api_b2b_scim_v1_b2b_scim_connection_Delete`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionGetGroups`

Getgroups — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionGetGroups(input: {
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
  /** The `cursor` field allows you to paginate through your results. Each result array is limited to 1000 results. If your query returns more than 1000 results, you will need to paginate the responses using the `cursor`. If you receive a response that includes a non-null `next_cursor` in the `results_metadata` object, repeat the search call with the `next_cursor` value set to the `cursor` field to retrieve the next page of results. Continue to make search calls until the `next_cursor` in the response is null. */
  cursor?: string;
  /** The number of search results to return per page. The default limit is 100. A maximum of 1000 results can be returned by a single search request. If the total size of your result set is greater than one page size, you must paginate the response. See the `cursor` field. */
  limit?: number;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionGetGroupsResponse>
```

<sub>`GET /v1/b2b/scim/{organization_id}/connection/{connection_id}` · `api_b2b_scim_v1_b2b_scim_connection_GetGroups`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionUpdate`

Update — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionUpdate(input: {
  /** A human-readable display name for the connection. */
  display_name?: string;
  identity_provider?: ApiB2BScimV1ScimConnectionUpdateRequestIdentityProvider;
  /** An array of SCIM group implicit role assignments. Each object in the array must contain a `group_id` and a `role_id`. */
  scim_group_implicit_role_assignments?: (ApiB2BScimV1ScimGroupImplicitRoleAssignments)[];
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionUpdateResponse>
```

<sub>`PUT /v1/b2b/scim/{organization_id}/connection/{connection_id}` · `api_b2b_scim_v1_b2b_scim_connection_Update`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionRotateCancel`

Rotatecancel — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionRotateCancel(input: {
  body: ApiB2BScimV1B2BScimConnectionRotateCancelRequest;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionRotateCancelResponse>
```

<sub>`POST /v1/b2b/scim/{organization_id}/connection/{connection_id}/rotate/cancel` · `api_b2b_scim_v1_b2b_scim_connection_RotateCancel`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionRotateComplete`

Rotatecomplete — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionRotateComplete(input: {
  body: ApiB2BScimV1B2BScimConnectionRotateCompleteRequest;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionRotateCompleteResponse>
```

<sub>`POST /v1/b2b/scim/{organization_id}/connection/{connection_id}/rotate/complete` · `api_b2b_scim_v1_b2b_scim_connection_RotateComplete`</sub>

## `stytch.apiB2BScimV1B2BScimConnectionRotateStart`

Rotatestart — [Provider docs](https://stytch.com/docs)

```ts
stytch.apiB2BScimV1B2BScimConnectionRotateStart(input: {
  body: ApiB2BScimV1B2BScimConnectionRotateStartRequest;
  /** Globally unique UUID that identifies a specific Organization. The `organization_id` is critical to perform operations on an Organization, so be sure to preserve this value. You may also use the organization_slug or organization_external_id here as a convenience. */
  organization_id: string;
  /** The ID of the SCIM connection. */
  connection_id: string;
}, options?: { headers?: { "X-Stytch-Member-Session"?: string; "X-Stytch-Member-SessionJWT"?: string } }): Promise<ApiB2BScimV1B2BScimConnectionRotateStartResponse>
```

<sub>`POST /v1/b2b/scim/{organization_id}/connection/{connection_id}/rotate/start` · `api_b2b_scim_v1_b2b_scim_connection_RotateStart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
