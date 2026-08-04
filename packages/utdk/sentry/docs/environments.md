# Environments

5 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationEnvironments`

List an Organization's Environments

```ts
sentry.listOrganizationEnvironments(): Promise<({ id: string; name: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/environments/` · `listOrganizationEnvironments`</sub>

## `sentry.listProjectEnvironments`

List a Project's Environments

```ts
sentry.listProjectEnvironments(): Promise<({ id: string; name: string; isHidden: boolean })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/environments/` · `listProjectEnvironments`</sub>

## `sentry.bulkUpdateProjectEnvironments`

Bulk update the visibility for a project's environments.

```ts
sentry.bulkUpdateProjectEnvironments(): Promise<({ id: string; name: string; isHidden: boolean })[]>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/environments/` · `Bulk Update Project Environments`</sub>

## `sentry.getProjectEnvironment`

Retrieve a Project Environment

```ts
sentry.getProjectEnvironment(): Promise<{ id: string; name: string; isHidden: boolean }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/environments/{environment}/` · `getProjectEnvironment`</sub>

## `sentry.updateProjectEnvironment`

Update a Project Environment

```ts
sentry.updateProjectEnvironment(): Promise<{ id: string; name: string; isHidden: boolean }>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/environments/{environment}/` · `updateProjectEnvironment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
