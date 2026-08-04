# SCIM

10 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationScimV2Groups`

List an Organization's Paginated Teams

```ts
sentry.listOrganizationScimV2Groups(input: {
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** SCIM 1-offset based index for pagination. */
  startIndex?: number;
  /** The maximum number of results the query should return, maximum of 100. */
  count?: number;
  /** A SCIM filter expression. The only operator currently supported is `eq`. */
  filter?: string;
  /** Fields that should be left off of return values. Right now the only supported field for this query is members. */
  excludedAttributes?: (string)[];
}): Promise<{ schemas: (string)[]; totalResults: number; startIndex: number; itemsPerPage: number; Resources: ({ schemas: (string)[]; id: string; displayName: string; meta: { resourceType: string }; members?: ({ value: string; display: string })[] })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/scim/v2/Groups` · `listOrganizationScimV2Groups`</sub>

## `sentry.provisionOrganizationScimV2Group`

Provision a New Team

```ts
sentry.provisionOrganizationScimV2Group(input: {
  /** The slug of the team that is shown in the UI. */
  displayName: string;
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
}): Promise<{ schemas: (string)[]; id: string; displayName: string; meta: { resourceType: string }; members?: ({ value: string; display: string })[] }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/scim/v2/Groups` · `provisionOrganizationScimV2Group`</sub>

## `sentry.deleteOrganizationScimV2Group`

Delete an Individual Team

```ts
sentry.deleteOrganizationScimV2Group(input: {
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** The ID or slug of the team the resource belongs to. */
  team_id_or_slug: string;
}): Promise<undefined>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/scim/v2/Groups/{team_id_or_slug}` · `deleteOrganizationScimV2Group`</sub>

## `sentry.getOrganizationScimV2Group`

Query an Individual Team

```ts
sentry.getOrganizationScimV2Group(input: {
  /** The ID or slug of the team the resource belongs to. */
  team_id_or_slug: string;
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
}): Promise<{ schemas: (string)[]; id: string; displayName: string; meta: { resourceType: string }; members?: ({ value: string; display: string })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/scim/v2/Groups/{team_id_or_slug}` · `getOrganizationScimV2Group`</sub>

## `sentry.updateOrganizationScimV2Group`

Update a Team's Attributes

```ts
sentry.updateOrganizationScimV2Group(input: {
  /** The list of operations to perform. Valid operations are: * Renaming a team: ```json {     "Operations": [{         "op": "replace",         "value": {             "id": 23,             "displayName": "newName"         }     }] } ``` * Adding a member to a team: ```json {     "Operations": [{         "op": "add",         "path": "members",         "value": [             {                 "value": 23,                 "display": "testexample@example.com"             }         ]     }] } ``` * Removing a member from a team: ```json {     "Operations": [{         "op": "remove",         "path": "members[value eq "23"]"     }] } ``` * Replacing an entire member set of a team: ```json {     "Operations": [{         "op": "replace",         "path": "members",         "value": [             {                 "value": 23,                 "display": "testexample2@sentry.io"             },             {                 "value": 24,                 "display": "testexample3@sentry.io"             }         ]     }] } ```  */
  Operations: ({ op: string; value?: { [key: string]: unknown | undefined }; path?: string })[];
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** The ID or slug of the team the resource belongs to. */
  team_id_or_slug: string;
}): Promise<undefined>
```

<sub>`PATCH /api/0/organizations/{organization_id_or_slug}/scim/v2/Groups/{team_id_or_slug}` · `updateOrganizationScimV2Group`</sub>

## `sentry.listOrganizationScimV2Users`

List an Organization's SCIM Members

```ts
sentry.listOrganizationScimV2Users(input: {
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** SCIM 1-offset based index for pagination. */
  startIndex?: number;
  /** The maximum number of results the query should return, maximum of 100. */
  count?: number;
  /** A SCIM filter expression. The only operator currently supported is `eq`. */
  filter?: string;
  /** Fields that should be left off of return values. Right now the only supported field for this query is members. */
  excludedAttributes?: (string)[];
}): Promise<{ schemas: (string)[]; totalResults: number; startIndex: number; itemsPerPage: number; Resources: ({ active?: boolean; schemas: (string)[]; id: string; userName: string; name: { givenName: string; familyName: string }; emails: ({ primary: boolean; value: string; type: string })[]; meta: { resourceType: string }; sentryOrgRole: string })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/scim/v2/Users` · `listOrganizationScimV2Users`</sub>

## `sentry.provisionOrganizationScimV2User`

Provision a New Organization Member

```ts
sentry.provisionOrganizationScimV2User(input: {
  /** The SAML field used for email. */
  userName: string;
  /** The organization role of the member. If unspecified, this will be                     set to the organization's default role. The options are:  * `billing` - Can manage payment and compliance details. * `member` - Can view and act on events, as well as view most other data within the organization. * `manager` - Has full management access to all teams and projects. Can also manage         the organization's membership. * `admin` - Can edit global integrations, manage projects, and add/remove teams.         They automatically assume the Team Admin role for teams they join.         Note: This role can no longer be assigned in Business and Enterprise plans. Use `TeamRoles` instead.          */
  sentryOrgRole?: "billing" | "member" | "manager" | "admin";
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
}): Promise<{ active?: boolean; schemas: (string)[]; id: string; userName: string; name: { givenName: string; familyName: string }; emails: ({ primary: boolean; value: string; type: string })[]; meta: { resourceType: string }; sentryOrgRole: string }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/scim/v2/Users` · `provisionOrganizationScimV2User`</sub>

## `sentry.deleteOrganizationScimV2User`

Delete an Organization Member via SCIM

```ts
sentry.deleteOrganizationScimV2User(input: {
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** The ID of the member to delete. */
  member_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/scim/v2/Users/{member_id}` · `deleteOrganizationScimV2User`</sub>

## `sentry.getOrganizationScimV2User`

Query an Individual Organization Member

```ts
sentry.getOrganizationScimV2User(input: {
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** The ID of the member to query. */
  member_id: string;
}): Promise<{ active?: boolean; schemas: (string)[]; id: string; userName: string; name: { givenName: string; familyName: string }; emails: ({ primary: boolean; value: string; type: string })[]; meta: { resourceType: string }; sentryOrgRole: string }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/scim/v2/Users/{member_id}` · `getOrganizationScimV2User`</sub>

## `sentry.updateOrganizationScimV2User`

Update an Organization Member's Attributes

```ts
sentry.updateOrganizationScimV2User(input: {
  /** A list of operations to perform. Currently, the only valid operation is setting a member's `active` attribute to false, after which the member will be permanently deleted. ```json {     "Operations": [{         "op": "replace",         "path": "active",         "value": False     }] } ```  */
  Operations: ({ op: string; value: unknown; path?: string })[];
  /** The ID or slug of the organization the resource belongs to. */
  organization_id_or_slug: string;
  /** The ID of the member to update. */
  member_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/0/organizations/{organization_id_or_slug}/scim/v2/Users/{member_id}` · `updateOrganizationScimV2User`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
