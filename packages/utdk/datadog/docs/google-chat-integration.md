# Google Chat Integration

16 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listGoogleChatOrganizations`

Get all Google Chat organization bindings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGoogleChatOrganizations(): Promise<GoogleChatOrganizationsResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations` · `ListGoogleChatOrganizations`</sub>

## `datadog.deleteGoogleChatOrganization`

Delete a Google Chat organization binding — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGoogleChatOrganization(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/google-chat/organizations/{organization_binding_id}` · `DeleteGoogleChatOrganization`</sub>

## `datadog.getGoogleChatOrganization`

Get a Google Chat organization binding — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGoogleChatOrganization(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatOrganizationResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}` · `GetGoogleChatOrganization`</sub>

## `datadog.deleteGoogleChatDelegatedUser`

Delete the delegated user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGoogleChatDelegatedUser(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/google-chat/organizations/{organization_binding_id}/delegated-user` · `DeleteGoogleChatDelegatedUser`</sub>

## `datadog.getGoogleChatDelegatedUser`

Get the delegated user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGoogleChatDelegatedUser(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatDelegatedUserResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}/delegated-user` · `GetGoogleChatDelegatedUser`</sub>

## `datadog.listOrganizationHandles`

Get all organization handles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrganizationHandles(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatOrganizationHandlesResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles` · `ListOrganizationHandles`</sub>

## `datadog.createOrganizationHandle`

Create organization handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrganizationHandle(input: {
  data: GoogleChatCreateOrganizationHandleRequestData;
  type: GoogleChatOrganizationHandleType;
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatOrganizationHandleResponse>
```

<sub>`POST /api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles` · `CreateOrganizationHandle`</sub>

## `datadog.deleteOrganizationHandle`

Delete organization handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrganizationHandle(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your organization handle ID. */
  handle_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}` · `DeleteOrganizationHandle`</sub>

## `datadog.getOrganizationHandle`

Get organization handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrganizationHandle(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your organization handle ID. */
  handle_id: string;
}): Promise<GoogleChatOrganizationHandleResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}` · `GetOrganizationHandle`</sub>

## `datadog.updateOrganizationHandle`

Update organization handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrganizationHandle(input: {
  data: GoogleChatUpdateOrganizationHandleRequestData;
  type: GoogleChatOrganizationHandleType;
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your organization handle ID. */
  handle_id: string;
}): Promise<GoogleChatOrganizationHandleResponse>
```

<sub>`PATCH /api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}` · `UpdateOrganizationHandle`</sub>

## `datadog.listGoogleChatTargetAudiences`

Get all target audiences — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGoogleChatTargetAudiences(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatTargetAudiencesResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences` · `ListGoogleChatTargetAudiences`</sub>

## `datadog.createGoogleChatTargetAudience`

Create a target audience — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createGoogleChatTargetAudience(input: {
  data: GoogleChatTargetAudienceCreateRequestData;
  /** Your organization binding ID. */
  organization_binding_id: string;
}): Promise<GoogleChatTargetAudienceResponse>
```

<sub>`POST /api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences` · `CreateGoogleChatTargetAudience`</sub>

## `datadog.deleteGoogleChatTargetAudience`

Delete a target audience — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGoogleChatTargetAudience(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your target audience ID. */
  target_audience_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}` · `DeleteGoogleChatTargetAudience`</sub>

## `datadog.getGoogleChatTargetAudience`

Get a target audience — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGoogleChatTargetAudience(input: {
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your target audience ID. */
  target_audience_id: string;
}): Promise<GoogleChatTargetAudienceResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}` · `GetGoogleChatTargetAudience`</sub>

## `datadog.updateGoogleChatTargetAudience`

Update a target audience — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGoogleChatTargetAudience(input: {
  data: GoogleChatTargetAudienceUpdateRequestData;
  /** Your organization binding ID. */
  organization_binding_id: string;
  /** Your target audience ID. */
  target_audience_id: string;
}): Promise<GoogleChatTargetAudienceResponse>
```

<sub>`PATCH /api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}` · `UpdateGoogleChatTargetAudience`</sub>

## `datadog.getSpaceByDisplayName`

Get space information by display name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSpaceByDisplayName(input: {
  /** The Google Chat domain name. */
  domain_name: string;
  /** The Google Chat space display name. */
  space_display_name: string;
}): Promise<GoogleChatAppNamedSpaceResponse>
```

<sub>`GET /api/v2/integration/google-chat/organizations/app/named-spaces/{domain_name}/{space_display_name}` · `GetSpaceByDisplayName`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
