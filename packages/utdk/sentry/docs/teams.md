# Teams

12 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.deleteOrganizationMemberTeam`

Delete an Organization Member from a Team

```ts
sentry.deleteOrganizationMemberTeam(): Promise<{ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null } }>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/members/{member_id}/teams/{team_id_or_slug}/` · `deleteOrganizationMemberTeam`</sub>

## `sentry.addOrganizationMemberTeam`

Add an Organization Member to a Team

```ts
sentry.addOrganizationMemberTeam(): Promise<{ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null } }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/members/{member_id}/teams/{team_id_or_slug}/` · `addOrganizationMemberTeam`</sub>

## `sentry.updateOrganizationMemberTeam`

Update an Organization Member's Team Role

```ts
sentry.updateOrganizationMemberTeam(): Promise<{ isActive: boolean; teamRole: "contributor" | "admin" }>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/members/{member_id}/teams/{team_id_or_slug}/` · `updateOrganizationMemberTeam`</sub>

## `sentry.listOrganizationTeams`

List an Organization's Teams

```ts
sentry.listOrganizationTeams(): Promise<({ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; externalTeams?: ({ externalId?: string; userId?: string; teamId?: st...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/teams/` · `listOrganizationTeams`</sub>

## `sentry.createOrganizationTeam`

Create a New Team

```ts
sentry.createOrganizationTeam(): Promise<{ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; externalTeams?: ({ externalId?: string; userId?: string; teamId?: str...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/teams/` · `createOrganizationTeam`</sub>

## `sentry.listOrganizationUserTeams`

List a User's Teams for an Organization

```ts
sentry.listOrganizationUserTeams(): Promise<({ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; externalTeams?: ({ externalId?: string; userId?: string; teamId?: st...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/user-teams/` · `listOrganizationUserTeams`</sub>

## `sentry.listProjectTeams`

List a Project's Teams

```ts
sentry.listProjectTeams(): Promise<({ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null } })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/teams/` · `listProjectTeams`</sub>

## `sentry.deleteTeam`

Delete a Team

```ts
sentry.deleteTeam(): Promise<unknown>
```

<sub>`DELETE /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/` · `deleteTeam`</sub>

## `sentry.getTeam`

Retrieve a Team

```ts
sentry.getTeam(): Promise<{ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; externalTeams?: ({ externalId?: string; userId?: string; teamId?: str...>
```

<sub>`GET /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/` · `getTeam`</sub>

## `sentry.updateTeam`

Update a Team

```ts
sentry.updateTeam(): Promise<{ id: string; slug: string; name: string; dateCreated: string | null; isMember: boolean; teamRole: string | null; flags: { [key: string]: unknown | undefined }; access: (string)[]; hasAccess: boolean; isPending: boolean; memberCount: number; avatar: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; externalTeams?: ({ externalId?: string; userId?: string; teamId?: str...>
```

<sub>`PUT /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/` · `updateTeam`</sub>

## `sentry.listTeamMembers`

List a Team's Members

```ts
sentry.listTeamMembers(): Promise<({ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; role?: string; roleName?: string; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynce...>
```

<sub>`GET /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/members/` · `listTeamMembers`</sub>

## `sentry.listTeamProjects`

List a Team's Projects

```ts
sentry.listTeamProjects(): Promise<({ latestDeploys?: { [key: string]: { [key: string]: string | undefined } | undefined } | null; options?: { [key: string]: unknown | undefined }; stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTr...>
```

<sub>`GET /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/projects/` · `listTeamProjects`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
