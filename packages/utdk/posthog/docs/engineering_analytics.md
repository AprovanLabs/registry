# Engineering Analytics

30 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.engineeringAnalyticsAuthorWorkflowCosts`

One author's estimated CI cost split by workflow over a window (date_from default -30d), highest spend first. Runs are attributed to the author through their pull requests (attribution is by PR number). Returns an empty list when the job-level source isn't synced.

```ts
posthog.engineeringAnalyticsAuthorWorkflowCosts(): Promise<({ workflow_name: string; billable_minutes: number; estimated_cost_usd: number | null; costed_jobs: number; unsettled_jobs: number; excluded_jobs: number })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/author_workflow_costs/` · `engineering_analytics_author_workflow_costs`</sub>

## `posthog.engineeringAnalyticsBrokenTests`

The broken-tests triage panel: live CI failures over the last 2 days grouped into distinct failures (by test id + normalized error signature) and classified by how each is behaving right now — breaking trunk, a new failure spreading across branches, probably-resolved, flaky, or one PR's own problem — ranked with the most urgent first. Also returns breaking_master_jobs, the default-branch jobs whose latest run is red. Reach for this to answer 'what CI failures should I care about right now'; expand a row's latest_run_id via run_failure_logs for the failing lines. Fingerprinting is pytest-only for now (jest/playwright/cargo failures aren't grouped yet), and the breaking/resolved distinction needs the job-level source synced — without it those failures fall through to flaky/pr_only rather than being misreported.

```ts
posthog.engineeringAnalyticsBrokenTests(): Promise<{ rows: ({ fingerprint: string; test_id: string; error_signature: string; job_name: string; repo: string; state: "breaking_master" | "novel_burst" | "potentially_resolved" | "flaky" | "pr_only"; first_seen: string; last_seen: string; occurrences: number; branches: number; master_hits: number; latest_run_id: number; latest_branch: string; trend_24h?: (number)[] })[]; breaking_master_jobs: (string)...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/broken_tests/` · `engineering_analytics_broken_tests`</sub>

## `posthog.engineeringAnalyticsCiCards`

Headline counts for the open-PR backlog: open PRs, distinct repos, stuck PRs (open, non-draft, non-bot, older than 7 days), and PRs with failing CI. The failing-CI count rests on the head-SHA join and can lag until late CI completions settle.

```ts
posthog.engineeringAnalyticsCiCards(): Promise<{ open_prs: number; repos: number; stuck: number; failing_ci: number }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/ci_cards/` · `engineering_analytics_ci_cards`</sub>

## `posthog.engineeringAnalyticsCiFailureLogs`

The thinned CI failure logs for a pull request, grouped by failed job. Resolves the PR to its workflow runs via the pull_requests association (all of the PR's pushes, not just the latest commit), then reads the Logs product joined on run_id. Returns failed jobs only (the worker fetches logs for failures); logs_available is false when CI hasn't failed, the logs aged out of the short Logs retention, or a fork PR has no run association. Each line carries its original 1-based line number in the full pre-thinning log; lines are the failure region (errors plus surrounding context, with omission markers), capped per job and overall.

```ts
posthog.engineeringAnalyticsCiFailureLogs(): Promise<{ repo: { provider: string; owner: string; name: string }; jobs: ({ lines: ({ original_line: number | null; text: string })[]; job_id: number; run_id: number; conclusion: string; branch: string; original_total_lines: number; line_count: number; truncated: boolean })[]; pr_number: number; runs_attributed: number; logs_available: boolean; truncated: boolean }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/ci_failure_logs/` · `engineering_analytics_ci_failure_logs`</sub>

## `posthog.engineeringAnalyticsCiSignalsConfigRetrieve`

Return the atomic CI Signals configuration and aggregate GitHub warehouse sync status.

```ts
posthog.engineeringAnalyticsCiSignalsConfigRetrieve(): Promise<{ configured: boolean; enabled: boolean; sync_status: "running" | "completed" | "failed" | null }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/ci-signals-config/` · `engineering_analytics_ci_signals_config_retrieve`</sub>

## `posthog.engineeringAnalyticsCiSignalsConfigUpdate`

Enable or disable all CI signal detectors in one transaction.

```ts
posthog.engineeringAnalyticsCiSignalsConfigUpdate(): Promise<{ configured: boolean; enabled: boolean; sync_status: "running" | "completed" | "failed" | null }>
```

<sub>`PUT /api/projects/{project_id}/engineering_analytics/ci-signals-config/` · `engineering_analytics_ci_signals_config_update`</sub>

## `posthog.engineeringAnalyticsCurrentBranchHealth`

Current default-branch CI verdict over the fixed last-24-hours window. Counts every workflow whose latest completed run failed or timed out; failing workflow names are a bounded preview. The default branch is detected from the same window, independently of analytics date filters.

```ts
posthog.engineeringAnalyticsCurrentBranchHealth(): Promise<{ default_branch: string; settled_workflows: number; failing_workflows: number; failing_workflow_names: (string)[] }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/current_branch_health/` · `engineering_analytics_current_branch_health`</sub>

## `posthog.engineeringAnalyticsFlakyTests`

The active test-health queue: pytest and Jest tests worth acting on now, from the per-test CI spans, over a window (default -7d, maximum 30 days). Evidence is counted per CI run, never per span or run attempt. A test is a 'confirmed_flake' when one commit both failed and passed it (a 'Re-run failed jobs' attempt went green, or an in-job retry recovered it); 'quarantined' when a tolerated failure is recorded while it is masked; otherwise 'suspected_regression'. It qualifies on any same-commit recovery, any master/main failure, a quarantined failure, or failures on at least min_failed_prs distinct PRs. Counts are absolute, never rates: CI emits every failure but omits ordinary passing spans, so there is no execution denominator. 'suspected_regression' means no recovery was recorded in this data, not that the test never flakes.

```ts
posthog.engineeringAnalyticsFlakyTests(): Promise<{ items: ({ runner: "pytest" | "jest"; nodeid: string; selector: string; classification: "confirmed_flake" | "suspected_regression" | "quarantined"; same_commit_recovery_run_count: number; failed_run_count: number; failed_pr_count: number; master_failed_run_count: number; quarantined_failed_run_count: number; last_signal_at: string })[]; truncated: boolean; limit: number }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/flaky_tests/` · `engineering_analytics_flaky_tests`</sub>

## `posthog.engineeringAnalyticsJobAggregates`

Per-job aggregates for one workflow over a window (default -30d), one row per de-sharded job name (matrix shards aggregate together), busiest first: queue p50, duration p50/p95, failure rate, retry pressure, run share (below 1.0 = conditional job), and billable cost. Jobs always need their run as context — this is the aggregate view; use workflow_jobs for one run's jobs. Empty when the job-level source isn't synced.

```ts
posthog.engineeringAnalyticsJobAggregates(): Promise<({ job_name: string; job_count: number; shard_count: number; runs_in: number; run_share: number | null; queue_p50_seconds: number | null; p50_seconds: number | null; p95_seconds: number | null; failure_rate: number | null; retry_job_count: number; billable_minutes: number | null; estimated_cost_usd: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/job_aggregates/` · `engineering_analytics_job_aggregates`</sub>

## `posthog.engineeringAnalyticsMasterFailures`

Default-branch failures over a window (default -24h), grouped error-tracking style by (workflow, de-sharded failing job) with a run count and first/last seen, newest group first. `branch` overrides the detected default branch. PR-branch failures are deliberately excluded — at monorepo volume a flat feed is a firehose; those surface per PR. Groups degrade to workflow level (failed_job '') when the job-level source isn't synced.

```ts
posthog.engineeringAnalyticsMasterFailures(): Promise<({ repo: { provider: string; owner: string; name: string }; workflow_name: string; failed_job: string; run_count: number; first_seen: string; last_seen: string; latest_run_id: number })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/master_failures/` · `engineering_analytics_master_failures`</sub>

## `posthog.engineeringAnalyticsPrCost`

Estimated CI cost for a pull request, summed over the jobs of all its workflow runs. Billable self-hosted Linux runners only — provider-hosted (free GitHub-hosted) and non-Linux jobs are excluded. Every figure is zero/null with `jobs_available` false when the job-level source isn't synced yet. `llm_spend` carries the agent LLM token spend attributed to the PR by git branch, or null when no `$ai_generation` event matched.

```ts
posthog.engineeringAnalyticsPrCost(): Promise<{ by_workflow: ({ workflow_name: string; billable_minutes: number; estimated_cost_usd: number | null; costed_jobs: number; unsettled_jobs: number; excluded_jobs: number })[]; by_run: ({ run_id: number; run_attempt: number; billable_minutes: number; estimated_cost_usd: number | null })[]; llm_spend?: { cost_usd: number; input_tokens: number; output_tokens: number; generations: number } | null; job...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/pr_cost/` · `engineering_analytics_pr_cost`</sub>

## `posthog.engineeringAnalyticsPrLifecycle`

The timeline of a single pull request: header plus ordered events (opened, CI started/finished, merged or closed). Use this to answer 'where is this PR stuck and what happened to it'. This is a partial view: review and comment events are not yet available.

```ts
posthog.engineeringAnalyticsPrLifecycle(): Promise<{ pull_request: { author: { handle: string; display_name: string; avatar_url: string; is_bot: boolean }; repo: { provider: string; owner: string; name: string }; id: number; number: number; title: string; state: "open" | "closed" | "merged"; is_draft: boolean; created_at: string; merged_at: string | null; closed_at: string | null }; events: ({ kind: "opened" | "ci_started" | "ci_finished" | "merg...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/pr_lifecycle/` · `engineering_analytics_pr_lifecycle`</sub>

## `posthog.engineeringAnalyticsPrRuns`

Every workflow run attributed to a pull request, across all its commits (grouped by head SHA client-side), newest first. Run-level only.

```ts
posthog.engineeringAnalyticsPrRuns(): Promise<({ repo: { provider: string; owner: string; name: string }; id: number; workflow_name: string; head_sha: string; head_branch: string; status: string; conclusion: string | null; run_started_at: string | null; updated_at: string | null; duration_seconds: number | null; run_attempt: number; pr_number: number; commit_pr_number: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/pr_runs/` · `engineering_analytics_pr_runs`</sub>

## `posthog.engineeringAnalyticsPullRequests`

Open pull requests plus any merged or closed since date_from (default -30d), newest first, each with its head-SHA CI rollup. The list is capped; when more match, `truncated` is true and the ci_cards counts can exceed it. open_to_merge_seconds is coarse — it fuses draft and ready-for-review time; CI counts can lag until late completions settle.

```ts
posthog.engineeringAnalyticsPullRequests(): Promise<{ items: ({ author: { handle: string; display_name: string; avatar_url: string; is_bot: boolean }; repo: { provider: string; owner: string; name: string }; ci: { runs: number; passing: number; failing: number; pending: number; failing_workflows?: (string)[] }; push_history: ({ head_sha: string; started_at: string; wall_seconds: number | null; failed: boolean; pending: boolean })[]; number: number...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/pull_requests/` · `engineering_analytics_pull_requests`</sub>

## `posthog.engineeringAnalyticsQuarantine`

Flaky-test quarantine file

```ts
posthog.engineeringAnalyticsQuarantine(): Promise<{ entries: ({ id: string; runner: string; reason: string; owner: string; issue: string; added: string; expires: string; mode: "run" | "skip"; lifecycle: "active" | "expiring_soon" | "in_grace" | "overdue"; days_until_expiry: number; selector_kind: "product" | "file" | "directory" | "test" })[]; repo: { provider: string; owner: string; name: string } | null; available: boolean; parse_errors: (stri...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/quarantine/` · `engineering_analytics_quarantine`</sub>

## `posthog.engineeringAnalyticsQuarantineRequest`

Quarantine, extend, or unquarantine a flaky test

```ts
posthog.engineeringAnalyticsQuarantineRequest(): Promise<{ pr_url: string; issue_url: string; branch: string }>
```

<sub>`POST /api/projects/{project_id}/engineering_analytics/quarantine/request/` · `engineering_analytics_quarantine_request`</sub>

## `posthog.engineeringAnalyticsRepoOverview`

Repo-level headline aggregates over a window (default -30d): run count, success rate, re-run cycles, merged-PR count (bots included), median PR open-to-merge (bots and drafts excluded; coarse — draft and ready time fused), and billable minutes + estimated cost — each with its equal-length previous-window twin so a caller can render honest deltas. Also carries the detected default branch and its completed-run history series (skippable via include_series=false). Cost figures are null until the job-level source is synced.

```ts
posthog.engineeringAnalyticsRepoOverview(): Promise<{ cost_series: ({ bucket_start: string; estimated_cost_usd: number | null; merges: number; cost_per_merge_usd: number | null })[]; time_to_green_series: ({ bucket_start: string; p50_seconds: number | null })[]; success_rate_series: ({ bucket_start: string; success_rate: number | null })[]; open_to_merge_series: ({ bucket_start: string; p50_seconds: number | null })[]; run_count: number; run_count...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/repo_overview/` · `engineering_analytics_repo_overview`</sub>

## `posthog.engineeringAnalyticsRepoRunActivity`

Default-branch health as compact chart points over a window (default -30d), newest first, for the repo-hub run-activity chart. All of a commit's workflow runs are collapsed into ONE point per commit (head SHA): its earliest workflow start, wall-clock duration until the last workflow settled (null while any is still running), and an overall conclusion that is 'failure' if any workflow decisively failed, else 'success' when at least one passed, else 'neutral'. `branch` overrides the detected default branch. `truncated` is true when more commits matched than the cap, so the chart covers only the most recent commits.

```ts
posthog.engineeringAnalyticsRepoRunActivity(): Promise<{ points: ({ run_id: number; conclusion: string | null; run_started_at: string; duration_seconds: number | null; head_branch: string; pr_number: number; head_sha: string })[]; truncated: boolean; limit: number }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/repo_run_activity/` · `engineering_analytics_repo_run_activity`</sub>

## `posthog.engineeringAnalyticsResolveBranch`

Resolve a git branch to the pull request(s) it belongs to — the cross-product link seam so another product (the LLM analytics UI) can turn a git branch into a PR detail link. Matches the PR's head ref, open PRs first then most recently updated. Pass `timestamp` (the trace's capture time) to prefer the PR that was active at that moment when a branch name has been reused across PRs. `branch` is required. Returns a possibly-empty, possibly-multi list — an empty list is a valid 200 (the caller renders a plain chip).

```ts
posthog.engineeringAnalyticsResolveBranch(): Promise<({ repo: string; number: number; title: string | null; state: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/resolve_branch/` · `engineering_analytics_resolve_branch`</sub>

## `posthog.engineeringAnalyticsRunFailureLogs`

The thinned CI failure logs of one workflow run, grouped by failed job — the run-scoped twin of ci_failure_logs for surfaces that aren't PR-scoped (default-branch failures, the run page). logs_available is false when the run didn't fail or its logs aged out of the short Logs retention.

```ts
posthog.engineeringAnalyticsRunFailureLogs(): Promise<{ jobs: ({ lines: ({ original_line: number | null; text: string })[]; job_id: number; run_id: number; conclusion: string; branch: string; original_total_lines: number; line_count: number; truncated: boolean })[]; run_id: number; logs_available: boolean; truncated: boolean }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/run_failure_logs/` · `engineering_analytics_run_failure_logs`</sub>

## `posthog.engineeringAnalyticsSources`

The team's selectable GitHub repositories, oldest source first — one entry per repository a source is configured to sync, so a source syncing several repositories appears once per repo. Populate a repo picker from this and pass a chosen entry's `id` back as `source_id` and its `repo` back as `repo` to the other endpoints. Includes repositories whose tables aren't fully synced yet.

```ts
posthog.engineeringAnalyticsSources(): Promise<({ id: string; repo: string; prefix: string; synced?: boolean })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/sources/` · `engineering_analytics_sources`</sub>

## `posthog.engineeringAnalyticsTeamCiActivity`

One owning team's CI test activity: per-test current-vs-prior signal pairs (the before/after comparison) over the window and its equal-length prior twin. Signal = runs where an owned test failed, errored, or a retry recovered it. Counts are absolute, never rates: CI emits every failure but omits ordinary passing spans, so there is no execution denominator. 'suspected_regression' means no recovery was recorded in this data, not that the test never flakes.

```ts
posthog.engineeringAnalyticsTeamCiActivity(): Promise<{ tests: ({ runner: "pytest" | "jest"; nodeid: string; selector: string; signal_count: number; signal_count_prior: number; last_seen_at: string })[]; owner_team: string; truncated_tests: boolean }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/team_ci_activity/` · `engineering_analytics_team_ci_activity`</sub>

## `posthog.engineeringAnalyticsTeamCiHealth`

Per-owning-team rollup of the CI test surfaces each team owns, over the same run evidence as flaky_tests and with the same meaning of flaky: flaky_test_count is owned tests one commit was seen both failing and passing in the window, regression_test_count is owned tests that failed with no such proof and still hit the blast-radius bar, plus failed/recovery/quarantined run counts. Each has an equal-length previous-window twin for honest deltas. Ownership is stamped on the spans at CI emission time from the repo's ownership map (products/*/product.yaml + CODEOWNERS); unstamped spans aggregate under the literal team 'unowned', and a re-stamped test lands under its latest owner only. Teams are organizational owners of code surfaces, never authors. Counts are absolute, never rates: CI emits every failure but omits ordinary passing spans, so there is no execution denominator. 'suspected_regression' means no recovery was recorded in this data, not that the test never flakes.

```ts
posthog.engineeringAnalyticsTeamCiHealth(): Promise<{ items: ({ owner_team: string; flaky_test_count: number; flaky_test_count_prior: number; regression_test_count: number; regression_test_count_prior: number; failed_run_count: number; failed_run_count_prior: number; same_commit_recovery_run_count: number; same_commit_recovery_run_count_prior: number; quarantined_failed_run_count: number; quarantined_failed_run_count_prior: number; last_seen_at: s...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/team_ci_health/` · `engineering_analytics_team_ci_health`</sub>

## `posthog.engineeringAnalyticsTeamMergeTrend`

One team's daily time-to-merge trend: the median and average open→merge seconds over the PRs the team's members merged each day (PR author login → GitHub org team membership). Team-level aggregates only, never per-member figures or cross-team rankings. Timing is the coarse open→merge (draft + review time combined); bots are excluded. Requires the GitHub source's team_members snapshot; has_membership_data is false without it.

```ts
posthog.engineeringAnalyticsTeamMergeTrend(): Promise<{ points: ({ day: string; median_seconds: number | null; average_seconds: number | null; merged_count: number })[]; owner_team: string; has_membership_data: boolean }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/team_merge_trend/` · `engineering_analytics_team_merge_trend`</sub>

## `posthog.engineeringAnalyticsWorkflowHealth`

Per-workflow CI health over a window (default last 24 hours, maximum 366 days): run count, success rate, p50/p95 duration, last failure time, latest-run status, and a zero-filled run history bucketed by hour/day/week to fit the window. p50/p95 are over successful runs only, so cancelled (superseded) and failed runs never bias the duration trend. Optionally scope to a single git branch via `branch`, or to attributed pull-request runs via `run_scope=pull_request`. Use this for 'is CI getting slower' and 'which workflow is the long pole'; compare two windows to get a trend.

```ts
posthog.engineeringAnalyticsWorkflowHealth(): Promise<({ repo: { provider: string; owner: string; name: string }; buckets: ({ bucket_start: string; run_count: number; completed: number; successes: number; failures: number })[]; workflow_name: string; run_count: number; successful_run_count: number; conclusive_run_count: number; success_rate: number | null; p50_seconds: number | null; p95_seconds: number | null; last_failure_at: string | null; latest...>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_health/` · `engineering_analytics_workflow_health`</sub>

## `posthog.engineeringAnalyticsWorkflowJobs`

Jobs of a single workflow run attempt, with per-job duration, runner tier, and estimated cost. Scoped to one run_attempt (the latest unless specified) so a re-run's attempts don't merge. Returns an empty list when the job-level source isn't synced yet.

```ts
posthog.engineeringAnalyticsWorkflowJobs(): Promise<({ id: number; run_id: number; name: string; status: string; conclusion: string | null; started_at: string | null; completed_at: string | null; duration_seconds: number | null; runner_provider: string; runner_label: string; estimated_cost_usd: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_jobs/` · `engineering_analytics_workflow_jobs`</sub>

## `posthog.engineeringAnalyticsWorkflowRunActivity`

Compact per-run points for a single workflow over a window (date_from default -30d), newest first, for the run-activity chart: each run's start time, duration, conclusion, branch, and attributed PR. Optionally scope to a single git branch via `branch`, matching workflow_runs. Leaner and higher-capped than workflow_runs so the chart spans the full window even on busy workflows; `truncated` is true when the cap is hit, so the chart covers only the most recent runs.

```ts
posthog.engineeringAnalyticsWorkflowRunActivity(): Promise<{ points: ({ run_id: number; conclusion: string | null; run_started_at: string; duration_seconds: number | null; head_branch: string; pr_number: number; head_sha: string })[]; truncated: boolean; limit: number }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_run_activity/` · `engineering_analytics_workflow_run_activity`</sub>

## `posthog.engineeringAnalyticsWorkflowRun`

A single workflow run: status, conclusion, duration, branch, attempt, and the attributed pull request. Run-level only — per-job and per-step detail are not tracked yet.

```ts
posthog.engineeringAnalyticsWorkflowRun(): Promise<{ repo: { provider: string; owner: string; name: string }; id: number; workflow_name: string; head_sha: string; head_branch: string; status: string; conclusion: string | null; run_started_at: string | null; updated_at: string | null; duration_seconds: number | null; run_attempt: number; pr_number: number; commit_pr_number: number | null }>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_run/` · `engineering_analytics_workflow_run`</sub>

## `posthog.engineeringAnalyticsWorkflowRunnerCosts`

A workflow's estimated CI cost broken down by runner tier over a window (date_from default -30d), highest spend first. Optionally scope to a single git branch via `branch`. Returns an empty list when the job-level source isn't synced.

```ts
posthog.engineeringAnalyticsWorkflowRunnerCosts(): Promise<({ provider: string; runner_label: string; job_count: number; billable_minutes: number; estimated_cost_usd: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_runner_costs/` · `engineering_analytics_workflow_runner_costs`</sub>

## `posthog.engineeringAnalyticsWorkflowRuns`

Runs of a single workflow within a repo over a window (date_from default -30d), newest first. Optionally scope to a single git branch via `branch`. Each row is run-level — per-job and per-step detail are not tracked yet. Use this as the GitHub 'workflow' page between the workflow list and a single run.

```ts
posthog.engineeringAnalyticsWorkflowRuns(): Promise<({ repo: { provider: string; owner: string; name: string }; id: number; workflow_name: string; head_sha: string; head_branch: string; status: string; conclusion: string | null; run_started_at: string | null; updated_at: string | null; duration_seconds: number | null; run_attempt: number; pr_number: number; commit_pr_number: number | null })[]>
```

<sub>`GET /api/projects/{project_id}/engineering_analytics/workflow_runs/` · `engineering_analytics_workflow_runs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
