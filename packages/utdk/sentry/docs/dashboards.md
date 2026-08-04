# Dashboards

5 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationDashboards`

List an Organization's Custom Dashboards

```ts
sentry.listOrganizationDashboards(): Promise<({ id: string; title: string; dateCreated: string; createdBy: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarType?: string; avatarUuid?: string | null; avatarUrl?: string | null }; authenticators?: (unknown)[]; canReset2fa?: boolean; id: string; name: ...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/dashboards/` · `listOrganizationDashboards`</sub>

## `sentry.createOrganizationDashboard`

Create a New Dashboard for an Organization

```ts
sentry.createOrganizationDashboard(): Promise<{ environment?: (string)[]; period?: string; utc?: string; expired?: boolean; start?: string; end?: string; id: string; title: string; dateCreated: string; createdBy: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarType?: string; avatarUuid?: string | n...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/dashboards/` · `createOrganizationDashboard`</sub>

## `sentry.deleteOrganizationDashboard`

Delete an Organization's Custom Dashboard

```ts
sentry.deleteOrganizationDashboard(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/dashboards/{dashboard_id}/` · `deleteOrganizationDashboard`</sub>

## `sentry.getOrganizationDashboard`

Retrieve an Organization's Custom Dashboard

```ts
sentry.getOrganizationDashboard(): Promise<{ environment?: (string)[]; period?: string; utc?: string; expired?: boolean; start?: string; end?: string; id: string; title: string; dateCreated: string; createdBy: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarType?: string; avatarUuid?: string | n...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/dashboards/{dashboard_id}/` · `getOrganizationDashboard`</sub>

## `sentry.updateOrganizationDashboard`

Edit an Organization's Custom Dashboard

```ts
sentry.updateOrganizationDashboard(): Promise<{ environment?: (string)[]; period?: string; utc?: string; expired?: boolean; start?: string; end?: string; id: string; title: string; dateCreated: string; createdBy: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarType?: string; avatarUuid?: string | n...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/dashboards/{dashboard_id}/` · `updateOrganizationDashboard`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
