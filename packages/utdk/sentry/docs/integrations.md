# Integrations

14 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.getOrganizationConfigIntegrations`

Get Integration Provider Information

```ts
sentry.getOrganizationConfigIntegrations(): Promise<{ providers: ({ key: string; slug: string; name: string; metadata: unknown; canAdd: boolean; canDisable: boolean; features: (string)[] })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/config/integrations/` · `getOrganizationConfigIntegrations`</sub>

## `sentry.createOrganizationExternalUser`

Create an External User

```ts
sentry.createOrganizationExternalUser(): Promise<{ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/external-users/` · `createOrganizationExternalUser`</sub>

## `sentry.deleteOrganizationExternalUser`

Delete an External User

```ts
sentry.deleteOrganizationExternalUser(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/external-users/{external_user_id}/` · `deleteOrganizationExternalUser`</sub>

## `sentry.updateOrganizationExternalUser`

Update an External User

```ts
sentry.updateOrganizationExternalUser(): Promise<{ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string }>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/external-users/{external_user_id}/` · `updateOrganizationExternalUser`</sub>

## `sentry.listOrganizationForwarding`

Retrieve Data Forwarders for an Organization

```ts
sentry.listOrganizationForwarding(): Promise<({ id: string; organizationId: string; isEnabled: boolean; enrollNewProjects: boolean; enrolledProjects: ({ id: string; slug: string; platform: string | null })[]; provider: string; config: { [key: string]: string | undefined } | null; projectConfigs: ({ id: string; isEnabled: boolean; dataForwarderId: string; project: { id: string; slug: string; platform: string | null }; overrides: { [key: stri...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/forwarding/` · `listOrganizationForwarding`</sub>

## `sentry.createOrganizationForwarding`

Create a Data Forwarder for an Organization

```ts
sentry.createOrganizationForwarding(): Promise<{ id: string; organizationId: string; isEnabled: boolean; enrollNewProjects: boolean; enrolledProjects: ({ id: string; slug: string; platform: string | null })[]; provider: string; config: { [key: string]: string | undefined } | null; projectConfigs: ({ id: string; isEnabled: boolean; dataForwarderId: string; project: { id: string; slug: string; platform: string | null }; overrides: { [key: strin...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/forwarding/` · `createOrganizationForwarding`</sub>

## `sentry.deleteOrganizationForwarding`

Delete a Data Forwarder for an Organization

```ts
sentry.deleteOrganizationForwarding(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/forwarding/{data_forwarder_id}/` · `deleteOrganizationForwarding`</sub>

## `sentry.updateOrganizationForwarding`

Update a Data Forwarder for an Organization

```ts
sentry.updateOrganizationForwarding(): Promise<{ id: string; organizationId: string; isEnabled: boolean; enrollNewProjects: boolean; enrolledProjects: ({ id: string; slug: string; platform: string | null })[]; provider: string; config: { [key: string]: string | undefined } | null; projectConfigs: ({ id: string; isEnabled: boolean; dataForwarderId: string; project: { id: string; slug: string; platform: string | null }; overrides: { [key: strin...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/forwarding/{data_forwarder_id}/` · `updateOrganizationForwarding`</sub>

## `sentry.listOrganizationIntegrations`

List an Organization's Available Integrations

```ts
sentry.listOrganizationIntegrations(): Promise<({ id: string; name: string; icon: string | null; domainName: string | null; accountType: string | null; scopes: (string)[] | null; outOfDate: boolean | null; status: string; provider: unknown; configOrganization: unknown; configData: unknown; externalId: string; organizationId: number; organizationIntegrationStatus: string; gracePeriodEnd: string | null })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/integrations/` · `listOrganizationIntegrations`</sub>

## `sentry.deleteOrganizationIntegration`

Delete an Integration for an Organization

```ts
sentry.deleteOrganizationIntegration(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/integrations/{integration_id}/` · `deleteOrganizationIntegration`</sub>

## `sentry.getOrganizationIntegration`

Retrieve an Integration for an Organization

```ts
sentry.getOrganizationIntegration(): Promise<{ id: string; name: string; icon: string | null; domainName: string | null; accountType: string | null; scopes: (string)[] | null; outOfDate: boolean | null; status: string; provider: unknown; configOrganization: unknown; configData: unknown; externalId: string; organizationId: number; organizationIntegrationStatus: string; gracePeriodEnd: string | null }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/integrations/{integration_id}/` · `getOrganizationIntegration`</sub>

## `sentry.createTeamExternalTeam`

Create an External Team

```ts
sentry.createTeamExternalTeam(): Promise<{ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string }>
```

<sub>`POST /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/external-teams/` · `createTeamExternalTeam`</sub>

## `sentry.deleteTeamExternalTeam`

Delete an External Team

```ts
sentry.deleteTeamExternalTeam(): Promise<unknown>
```

<sub>`DELETE /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/external-teams/{external_team_id}/` · `deleteTeamExternalTeam`</sub>

## `sentry.updateTeamExternalTeam`

Update an External Team

```ts
sentry.updateTeamExternalTeam(): Promise<{ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string }>
```

<sub>`PUT /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/external-teams/{external_team_id}/` · `updateTeamExternalTeam`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
