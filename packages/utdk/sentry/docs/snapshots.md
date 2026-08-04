# Snapshots

7 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.deleteOrganizationPreprodArtifactSnapshot`

Delete a Snapshot

```ts
sentry.deleteOrganizationPreprodArtifactSnapshot(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/preprodartifacts/snapshots/{snapshot_id}/` · `deleteOrganizationPreprodArtifactSnapshot`</sub>

## `sentry.getOrganizationPreprodArtifactSnapshot`

Retrieve Snapshot details

```ts
sentry.getOrganizationPreprodArtifactSnapshot(): Promise<{ head_artifact_id?: string; base_artifact_id?: string | null; project_id?: string; comparison_type?: string; state?: string; vcs_info?: { head_sha?: string | null; base_sha?: string | null; provider?: string | null; head_repo_name?: string | null; base_repo_name?: string | null; head_ref?: string | null; base_ref?: string | null; pr_number?: number | null }; app_id?: string | null; is_selective?...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/preprodartifacts/snapshots/{snapshot_id}/` · `getOrganizationPreprodArtifactSnapshot`</sub>

## `sentry.getOrganizationPreprodArtifactSnapshotImage`

Retrieve Snapshot image detail

```ts
sentry.getOrganizationPreprodArtifactSnapshotImage(): Promise<{ image_file_name?: string; comparison_status?: string | null; head_image?: { key?: string; display_name?: string | null; group?: string | null; image_file_name?: string; width?: number; height?: number; canvas_theme?: "light" | "dark" | null | null; diff_threshold?: number | null; description?: string | null; tags?: { [key: string]: string | undefined } | null; image_url?: string } | null; base_...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/preprodartifacts/snapshots/{snapshot_id}/images/{image_identifier}/` · `getOrganizationPreprodArtifactSnapshotImage`</sub>

## `sentry.getOrganizationPreprodArtifactSnapshotLatestBase`

Retrieve latest base Snapshot

```ts
sentry.getOrganizationPreprodArtifactSnapshotLatestBase(): Promise<{ head_artifact_id?: string; project_id?: string; project_slug?: string; app_id?: string | null; image_count?: number; images?: ({ key?: string; display_name?: string | null; group?: string | null; image_file_name?: string; width?: number; height?: number; canvas_theme?: "light" | "dark" | null | null; image_url?: string })[]; diff_threshold?: number | null; date_added?: string; vcs_info?: { head...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/preprodartifacts/snapshots/latest-base/` · `getOrganizationPreprodArtifactSnapshotLatestBase`</sub>

## `sentry.getProjectPreprodSnapshotStatusCheckRules`

Retrieve Snapshot status check rules for a project

```ts
sentry.getProjectPreprodSnapshotStatusCheckRules(): Promise<{ enabled: boolean; rules: { failOnAdded: boolean; failOnRemoved: boolean; failOnChanged: boolean; failOnRenamed: boolean } }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprod/snapshots/status-check-rules/` · `getProjectPreprodSnapshotStatusCheckRules`</sub>

## `sentry.createProjectPreprodSnapshotSkippedStatusCheck`

Create a skipped Snapshot status check

```ts
sentry.createProjectPreprodSnapshotSkippedStatusCheck(): Promise<unknown>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprod/snapshots/status-checks/skip/` · `createProjectPreprodSnapshotSkippedStatusCheck`</sub>

## `sentry.uploadProjectPreprodArtifactSnapshot`

Upload a Snapshot

```ts
sentry.uploadProjectPreprodArtifactSnapshot(): Promise<{ artifactId: string; snapshotMetricsId: string; imageCount: number; snapshotUrl: string }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/preprodartifacts/snapshots/` · `uploadProjectPreprodArtifactSnapshot`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
