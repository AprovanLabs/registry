# Visual Review

25 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.visualReviewReposList`

List all projects for the team.

```ts
posthog.visualReviewReposList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; repo_external_id: number; repo_full_name: string; baseline_file_paths: { [key: string]: string | undefined }; enable_pr_comments: boolean; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/` · `visual_review_repos_list`</sub>

## `posthog.visualReviewReposCreate`

Create a new repo.

```ts
posthog.visualReviewReposCreate(): Promise<{ id: string; team_id: number; repo_external_id: number; repo_full_name: string; baseline_file_paths: { [key: string]: string | undefined }; enable_pr_comments: boolean; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/visual_review/repos/` · `visual_review_repos_create`</sub>

## `posthog.visualReviewReposRetrieve`

Get a repo by ID.

```ts
posthog.visualReviewReposRetrieve(): Promise<{ id: string; team_id: number; repo_external_id: number; repo_full_name: string; baseline_file_paths: { [key: string]: string | undefined }; enable_pr_comments: boolean; created_at: string }>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{id}/` · `visual_review_repos_retrieve`</sub>

## `posthog.visualReviewReposPartialUpdate`

Update a repo's settings.

```ts
posthog.visualReviewReposPartialUpdate(): Promise<{ id: string; team_id: number; repo_external_id: number; repo_full_name: string; baseline_file_paths: { [key: string]: string | undefined }; enable_pr_comments: boolean; created_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/visual_review/repos/{id}/` · `visual_review_repos_partial_update`</sub>

## `posthog.visualReviewReposBaselinesRetrieve`

Snapshots overview for a repo: every identifier with a current baseline (latest non-superseded master/main run per run_type), plus tolerate counts, active quarantine state, and a 30-day stability sparkline. Capped at 5000 entries — sets `truncated` and returns the most recently active when exceeded. Filtering / faceting / search are all done client-side; this endpoint takes no filter query params.

```ts
posthog.visualReviewReposBaselinesRetrieve(): Promise<{ entries: ({ quarantine?: { created_by?: { id: number; first_name: string; email: string } | null; source_run?: { id: string; branch: string; commit_sha: string; created_at: string; pr_number?: number | null } | null; id: string; reason: string; expires_at: string | null; created_at: string } | null; identifier: string; run_type: string; browser: string | null; thumbnail_hash: string | null; wid...>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{id}/baselines/` · `visual_review_repos_baselines_retrieve`</sub>

## `posthog.visualReviewReposQuarantineList`

List quarantined identifiers. Without filter: active only. With identifier: full history.

```ts
posthog.visualReviewReposQuarantineList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ created_by?: { id: number; first_name: string; email: string } | null; source_run?: { id: string; branch: string; commit_sha: string; created_at: string; pr_number?: number | null } | null; id: string; identifier: string; run_type: string; reason: string; expires_at: string | null; created_at: string; updated_at: string ...>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{id}/quarantine/` · `visual_review_repos_quarantine_list`</sub>

## `posthog.visualReviewReposQuarantineCreate`

Quarantine a snapshot identifier for a specific run type.

```ts
posthog.visualReviewReposQuarantineCreate(): Promise<{ created_by?: { id: number; first_name: string; email: string } | null; source_run?: { id: string; branch: string; commit_sha: string; created_at: string; pr_number?: number | null } | null; id: string; identifier: string; run_type: string; reason: string; expires_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/visual_review/repos/{id}/quarantine/{run_type}/` · `visual_review_repos_quarantine_create`</sub>

## `posthog.visualReviewReposQuarantineExpireCreate`

Expire all active quarantine entries for an identifier.

```ts
posthog.visualReviewReposQuarantineExpireCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/visual_review/repos/{id}/quarantine/{run_type}/expire/` · `visual_review_repos_quarantine_expire_create`</sub>

## `posthog.visualReviewReposThumbnailsRetrieve`

Serve a snapshot thumbnail by identifier. Returns WebP with ETag caching.

```ts
posthog.visualReviewReposThumbnailsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{id}/thumbnails/{identifier}/` · `visual_review_repos_thumbnails_retrieve`</sub>

## `posthog.visualReviewReposRunsList`

List runs in this repo, optionally filtered by review state and free-text search.

```ts
posthog.visualReviewReposRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; chang...>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{repo_id}/runs/` · `visual_review_repos_runs_list`</sub>

## `posthog.visualReviewReposRunsCountsRetrieve`

Review state counts for runs in this repo.

```ts
posthog.visualReviewReposRunsCountsRetrieve(): Promise<{ needs_review: number; clean: number; processing: number; stale: number }>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{repo_id}/runs/counts/` · `visual_review_repos_runs_counts_retrieve`</sub>

## `posthog.visualReviewReposSnapshotsList`

Deduped baseline timeline for a snapshot identity. Newest first.

```ts
posthog.visualReviewReposSnapshotsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ current_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; run_id: string; snapshot_id: string; result: string; branch: string; commit_sha: string; created_at: string; pr_number?: number | null; diff_percentage?: number | null; review_state?: ...>
```

<sub>`GET /api/projects/{project_id}/visual_review/repos/{repo_id}/snapshots/{run_type}/{identifier}/` · `visual_review_repos_snapshots_list`</sub>

## `posthog.visualReviewRunsList`

List runs for the team, optionally filtered by review state, PR number, commit SHA, branch, or free-text search.

```ts
posthog.visualReviewRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; chang...>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/` · `visual_review_runs_list`</sub>

## `posthog.visualReviewRunsCreate`

Create a new run from a CI manifest.

```ts
posthog.visualReviewRunsCreate(): Promise<{ run_id: string; uploads: ({ content_hash: string; url: string; fields: { [key: string]: string | undefined } })[] }>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/` · `visual_review_runs_create`</sub>

## `posthog.visualReviewRunsRetrieve`

Get run status and summary.

```ts
posthog.visualReviewRunsRetrieve(): Promise<{ approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; changed: number; new: number; removed: number; unchanged: number; unresolved?: n...>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/{id}/` · `visual_review_runs_retrieve`</sub>

## `posthog.visualReviewRunsAddSnapshotsCreate`

Add a batch of snapshots to a pending run (shard-based flow).

```ts
posthog.visualReviewRunsAddSnapshotsCreate(): Promise<{ added: number; uploads: ({ content_hash: string; url: string; fields: { [key: string]: string | undefined } })[] }>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/add-snapshots/` · `visual_review_runs_add_snapshots_create`</sub>

## `posthog.visualReviewRunsApproveCreate`

Mark snapshots reviewed (DB only). Records the per-snapshot "Accept change" decision. Does not commit the baseline or change the GitHub gate — call finalize to ship the run.

```ts
posthog.visualReviewRunsApproveCreate(): Promise<{ approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; changed: number; new: number; removed: number; unchanged: number; unresolved?: n...>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/approve/` · `visual_review_runs_approve_create`</sub>

## `posthog.visualReviewRunsCompleteCreate`

Complete a run: detect removals, verify uploads, trigger diff processing.

```ts
posthog.visualReviewRunsCompleteCreate(): Promise<{ approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; changed: number; new: number; removed: number; unchanged: number; unresolved?: n...>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/complete/` · `visual_review_runs_complete_create`</sub>

## `posthog.visualReviewRunsFinalizeCreate`

Finalize a fully-reviewed run: commit the approved baseline and green the gate. Commits exactly the snapshots approved in the DB (tolerated ones keep their baseline) and only succeeds once every changed/new snapshot is resolved. With approve_all=true, any still-pending changed/new snapshot is approved first. With commit_to_github=false the server returns the signed baseline YAML instead of committing it.

```ts
posthog.visualReviewRunsFinalizeCreate(): Promise<{ run: { approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; changed: number; new: number; removed: number; unchanged: number; unresol...>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/finalize/` · `visual_review_runs_finalize_create`</sub>

## `posthog.visualReviewRunsRecomputeCreate`

Re-evaluate quarantine and counts, update commit status, and optionally rerun the CI job.

```ts
posthog.visualReviewRunsRecomputeCreate(): Promise<{ run: { approved_by?: { id: number; first_name: string; email: string } | null; search_match_type: "exact" | "similar" | null; id: string; repo_id: string; status: string; run_type: string; commit_sha: string; branch: string; pr_number: number | null; approved: boolean; approved_at: string | null; summary: { total: number; changed: number; new: number; removed: number; unchanged: number; unresol...>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/recompute/` · `visual_review_runs_recompute_create`</sub>

## `posthog.visualReviewRunsSnapshotHistoryList`

Recent change history for a snapshot identifier across runs.

```ts
posthog.visualReviewRunsSnapshotHistoryList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ current_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; run_id: string; snapshot_id: string; result: string; branch: string; commit_sha: string; created_at: string; pr_number?: number | null; diff_percentage?: number | null; review_state?: ...>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/{id}/snapshot-history/` · `visual_review_runs_snapshot_history_list`</sub>

## `posthog.visualReviewRunsSnapshotsList`

Get a run's snapshots with diff results, excluding quarantined ones by default.

```ts
posthog.visualReviewRunsSnapshotsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ current_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; baseline_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; diff_artifact?: unknown | null; reviewed_by?:...>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/{id}/snapshots/` · `visual_review_runs_snapshots_list`</sub>

## `posthog.visualReviewRunsTolerateCreate`

Mark a changed snapshot as a known tolerated alternate.

```ts
posthog.visualReviewRunsTolerateCreate(): Promise<{ current_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; baseline_artifact?: { id: string; content_hash: string; width: number | null; height: number | null; download_url: string | null } | null; diff_artifact?: unknown | null; reviewed_by?: { id: number; first_name: string; email: string } | null; cluster_summary?...>
```

<sub>`POST /api/projects/{project_id}/visual_review/runs/{id}/tolerate/` · `visual_review_runs_tolerate_create`</sub>

## `posthog.visualReviewRunsToleratedHashesList`

List known tolerated hashes for a snapshot identifier.

```ts
posthog.visualReviewRunsToleratedHashesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; alternate_hash: string; baseline_hash: string; reason: string; diff_percentage: number | null; created_at: string; source_run_id: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/{id}/tolerated-hashes/` · `visual_review_runs_tolerated_hashes_list`</sub>

## `posthog.visualReviewRunsCountsRetrieve`

Review state counts for the runs list.

```ts
posthog.visualReviewRunsCountsRetrieve(): Promise<{ needs_review: number; clean: number; processing: number; stale: number }>
```

<sub>`GET /api/projects/{project_id}/visual_review/runs/counts/` · `visual_review_runs_counts_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
