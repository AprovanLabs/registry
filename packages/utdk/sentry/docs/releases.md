# Releases

23 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationReleaseThresholdStatuses`

Retrieve Statuses of Release Thresholds (Alpha)

```ts
sentry.listOrganizationReleaseThresholdStatuses(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/release-threshold-statuses/` · `listOrganizationReleaseThresholdStatuses`</sub>

## `sentry.listOrganizationReleases`

List an Organization's Releases

```ts
sentry.listOrganizationReleases(): Promise<({ ref?: string | null; url?: string | null; dateReleased?: string | null; dateCreated?: string | null; dateStarted?: string | null; owner?: { [key: string]: unknown | undefined } | null; lastCommit?: { [key: string]: unknown | undefined } | null; lastDeploy?: { dateStarted?: string | null; url?: string | null; id: string; environment: string; dateFinished: string; name: string } | null; firstEve...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/` · `listOrganizationReleases`</sub>

## `sentry.createOrganizationRelease`

Create a New Release for an Organization

```ts
sentry.createOrganizationRelease(): Promise<{ ref?: string | null; url?: string | null; dateReleased?: string | null; dateCreated?: string | null; dateStarted?: string | null; owner?: { [key: string]: unknown | undefined } | null; lastCommit?: { [key: string]: unknown | undefined } | null; lastDeploy?: { dateStarted?: string | null; url?: string | null; id: string; environment: string; dateFinished: string; name: string } | null; firstEven...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/releases/` · `createOrganizationRelease`</sub>

## `sentry.deleteOrganizationRelease`

Delete an Organization's Release

```ts
sentry.deleteOrganizationRelease(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/releases/{version}/` · `deleteOrganizationRelease`</sub>

## `sentry.getOrganizationRelease`

Retrieve an Organization's Release

```ts
sentry.getOrganizationRelease(): Promise<{ ref?: string | null; url?: string | null; dateReleased?: string | null; dateCreated?: string | null; dateStarted?: string | null; owner?: { [key: string]: unknown | undefined } | null; lastCommit?: { [key: string]: unknown | undefined } | null; lastDeploy?: { dateStarted?: string | null; url?: string | null; id: string; environment: string; dateFinished: string; name: string } | null; firstEven...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/` · `getOrganizationRelease`</sub>

## `sentry.updateOrganizationRelease`

Update an Organization's Release

```ts
sentry.updateOrganizationRelease(): Promise<{ ref?: string | null; url?: string | null; dateReleased?: string | null; dateCreated?: string | null; dateStarted?: string | null; owner?: { [key: string]: unknown | undefined } | null; lastCommit?: { [key: string]: unknown | undefined } | null; lastDeploy?: { dateStarted?: string | null; url?: string | null; id: string; environment: string; dateFinished: string; name: string } | null; firstEven...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/releases/{version}/` · `updateOrganizationRelease`</sub>

## `sentry.retrieveFilesChangedInAReleaseSCommits`

Retrieve files changed in a release's commits

```ts
sentry.retrieveFilesChangedInAReleaseSCommits(): Promise<unknown>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/commitfiles/` · `Retrieve Files Changed in a Release's Commits`</sub>

## `sentry.listOrganizationReleaseCommits`

List an Organization Release's Commits

```ts
sentry.listOrganizationReleaseCommits(): Promise<({ id: string; message: string | null; dateCreated: string; pullRequest: { id: string; title: string | null; message: string | null; dateCreated: string; mergedAt: string | null; status: "merged" | "open" | "closed" | "draft" | "unknown" | null | null; repository: { url?: string | null; provider?: { [key: string]: string | undefined }; status?: string; integrationId?: string | null; externalSlug?...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/commits/` · `listOrganizationReleaseCommits`</sub>

## `sentry.listOrganizationReleaseDeploys`

List a Release's Deploys

```ts
sentry.listOrganizationReleaseDeploys(): Promise<({ id: string; environment: string; dateStarted: string | null; dateFinished: string; name: string | null; url: string | null })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/deploys/` · `listOrganizationReleaseDeploys`</sub>

## `sentry.createOrganizationReleaseDeploy`

Create a Deploy

```ts
sentry.createOrganizationReleaseDeploy(): Promise<{ id: string; environment: string; dateStarted: string | null; dateFinished: string; name: string | null; url: string | null }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/releases/{version}/deploys/` · `createOrganizationReleaseDeploy`</sub>

## `sentry.listOrganizationReleaseFiles`

List an Organization's Release Files

```ts
sentry.listOrganizationReleaseFiles(): Promise<({ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/files/` · `listOrganizationReleaseFiles`</sub>

## `sentry.uploadOrganizationReleaseFile`

Upload a New Organization Release File

```ts
sentry.uploadOrganizationReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/releases/{version}/files/` · `uploadOrganizationReleaseFile`</sub>

## `sentry.deleteOrganizationReleaseFile`

Delete an Organization Release's File

```ts
sentry.deleteOrganizationReleaseFile(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/releases/{version}/files/{file_id}/` · `deleteOrganizationReleaseFile`</sub>

## `sentry.getOrganizationReleaseFile`

Retrieve an Organization Release's File

```ts
sentry.getOrganizationReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/releases/{version}/files/{file_id}/` · `getOrganizationReleaseFile`</sub>

## `sentry.updateOrganizationReleaseFile`

Update an Organization Release File

```ts
sentry.updateOrganizationReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/releases/{version}/files/{file_id}/` · `updateOrganizationReleaseFile`</sub>

## `sentry.getOrganizationSessions`

Retrieve Release Health Session Statistics

```ts
sentry.getOrganizationSessions(): Promise<{ start: string; end: string; intervals: (string)[]; groups: ({ by: { project?: number; release?: string; environment?: string; "session.status"?: string }; series: { [key: string]: (number | null)[] | undefined }; totals: { [key: string]: number | null | undefined } })[]; query: string }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/sessions/` · `getOrganizationSessions`</sub>

## `sentry.listProjectReleases`

List a Project's Releases

```ts
sentry.listProjectReleases(): Promise<({ ref?: string | null; url?: string | null; dateReleased?: string | null; dateCreated?: string | null; dateStarted?: string | null; owner?: { [key: string]: unknown | undefined } | null; lastCommit?: { [key: string]: unknown | undefined } | null; lastDeploy?: { dateStarted?: string | null; url?: string | null; id: string; environment: string; dateFinished: string; name: string } | null; firstEve...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/` · `listProjectReleases`</sub>

## `sentry.listProjectReleaseCommits`

List a Project Release's Commits

```ts
sentry.listProjectReleaseCommits(): Promise<({ id: string; message: string | null; dateCreated: string; pullRequest: { id: string; title: string | null; message: string | null; dateCreated: string; mergedAt: string | null; status: "merged" | "open" | "closed" | "draft" | "unknown" | null | null; repository: { url?: string | null; provider?: { [key: string]: string | undefined }; status?: string; integrationId?: string | null; externalSlug?...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/commits/` · `listProjectReleaseCommits`</sub>

## `sentry.listProjectReleaseFiles`

List a Project's Release Files

```ts
sentry.listProjectReleaseFiles(): Promise<({ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/files/` · `listProjectReleaseFiles`</sub>

## `sentry.uploadProjectReleaseFile`

Upload a New Project Release File

```ts
sentry.uploadProjectReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/files/` · `uploadProjectReleaseFile`</sub>

## `sentry.deleteProjectReleaseFile`

Delete a Project Release's File

```ts
sentry.deleteProjectReleaseFile(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/files/{file_id}/` · `deleteProjectReleaseFile`</sub>

## `sentry.getProjectReleaseFile`

Retrieve a Project Release's File

```ts
sentry.getProjectReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/files/{file_id}/` · `getProjectReleaseFile`</sub>

## `sentry.updateProjectReleaseFile`

Update a Project Release File

```ts
sentry.updateProjectReleaseFile(): Promise<{ id: string; name: string; dist: string | null; headers: { [key: string]: unknown | undefined }; size: number; sha1: string; dateCreated: string }>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/releases/{version}/files/{file_id}/` · `updateProjectReleaseFile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
