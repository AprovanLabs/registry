# Mobile Builds

5 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.getOrganizationPreprodArtifactInstallDetails`

Retrieve install info for a given artifact

```ts
sentry.getOrganizationPreprodArtifactInstallDetails(): Promise<{ buildId: string; state: string; appInfo: { appId: string | null; name: string | null; version: string | null; buildNumber: number | null; artifactType: string | null; dateAdded: string | null; dateBuilt: string | null }; gitInfo: { headSha: string | null; baseSha: string | null; provider: string | null; headRepoName: string | null; baseRepoName: string | null; headRef: string | null; baseRef: s...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/preprodartifacts/{artifact_id}/install-details/` · `getOrganizationPreprodArtifactInstallDetails`</sub>

## `sentry.getOrganizationPreprodArtifactSizeAnalysis`

Retrieve Size Analysis results for a given artifact

```ts
sentry.getOrganizationPreprodArtifactSizeAnalysis(): Promise<{ buildId: string; state: string; appInfo: { appId: string | null; name: string | null; version: string | null; buildNumber: number | null; artifactType: string | null; dateAdded: string | null; dateBuilt: string | null }; gitInfo: { headSha: string | null; baseSha: string | null; provider: string | null; headRepoName: string | null; baseRepoName: string | null; headRef: string | null; baseRef: s...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/preprodartifacts/{artifact_id}/size-analysis/` · `getOrganizationPreprodArtifactSizeAnalysis`</sub>

## `sentry.getProjectPreprodSizeAnalysisStatusCheckRules`

Retrieve Size Analysis status check rules for a project

```ts
sentry.getProjectPreprodSizeAnalysisStatusCheckRules(): Promise<{ enabled: boolean; rules: ({ id: string; metric: "install_size" | "download_size"; measurement: "absolute" | "absolute_diff" | "relative_diff"; value: string; filterQuery: string; filters: ({ key: "app_id" | "build_configuration_name" | "git_head_ref" | "platform_name"; conditions: ({ operator: "contains" | "endsWith" | "equals" | "in" | "matches" | "notContains" | "notEndsWith" | "notEquals" | ...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprod/size-analysis/status-check-rules/` · `getProjectPreprodSizeAnalysisStatusCheckRules`</sub>

## `sentry.createProjectPreprodSizeAnalysisSkippedStatusCheck`

Create a skipped Size Analysis status check

```ts
sentry.createProjectPreprodSizeAnalysisSkippedStatusCheck(): Promise<unknown>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprod/size-analysis/status-checks/skip/` · `createProjectPreprodSizeAnalysisSkippedStatusCheck`</sub>

## `sentry.getProjectInstallableBuildLatest`

Get the latest installable build for a project

```ts
sentry.getProjectInstallableBuildLatest(): Promise<{ latestArtifact: { buildId: string; state: string; appInfo: { appId: string | null; name: string | null; version: string | null; buildNumber: number | null; artifactType: string | null; dateAdded: string | null; dateBuilt: string | null }; gitInfo: { headSha: string | null; baseSha: string | null; provider: string | null; headRepoName: string | null; baseRepoName: string | null; headRef: string ...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprodartifacts/build-distribution/latest/` · `getProjectInstallableBuildLatest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
