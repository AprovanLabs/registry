# Profiling

3 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationProfilingChunks`

Retrieve Profile Chunks for an Organization

```ts
sentry.listOrganizationProfilingChunks(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/profiling/chunks/` · `listOrganizationProfilingChunks`</sub>

## `sentry.getOrganizationProfilingFlamegraph`

Retrieve a Flamegraph for an Organization

```ts
sentry.getOrganizationProfilingFlamegraph(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/profiling/flamegraph/` · `getOrganizationProfilingFlamegraph`</sub>

## `sentry.getProjectProfilingProfile`

Retrieve a Profile

```ts
sentry.getProjectProfilingProfile(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/profiling/profiles/{profile_id}/` · `getProjectProfilingProfile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
