# Error Tracking

83 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.errorTrackingAssignmentRulesList`

```ts
posthog.errorTrackingAssignmentRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/assignment_rules/` · `error_tracking_assignment_rules_list`</sub>

## `posthog.errorTrackingAssignmentRulesCreate`

```ts
posthog.errorTrackingAssignmentRulesCreate(): Promise<{ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/assignment_rules/` · `error_tracking_assignment_rules_create`</sub>

## `posthog.errorTrackingAssignmentRulesDestroy`

```ts
posthog.errorTrackingAssignmentRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/assignment_rules/{id}/` · `error_tracking_assignment_rules_destroy`</sub>

## `posthog.errorTrackingAssignmentRulesRetrieve`

```ts
posthog.errorTrackingAssignmentRulesRetrieve(): Promise<{ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/assignment_rules/{id}/` · `error_tracking_assignment_rules_retrieve`</sub>

## `posthog.errorTrackingAssignmentRulesPartialUpdate`

```ts
posthog.errorTrackingAssignmentRulesPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/assignment_rules/{id}/` · `error_tracking_assignment_rules_partial_update`</sub>

## `posthog.errorTrackingAssignmentRulesUpdate`

```ts
posthog.errorTrackingAssignmentRulesUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/assignment_rules/{id}/` · `error_tracking_assignment_rules_update`</sub>

## `posthog.errorTrackingAssignmentRulesReorderPartialUpdate`

```ts
posthog.errorTrackingAssignmentRulesReorderPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/assignment_rules/reorder/` · `error_tracking_assignment_rules_reorder_partial_update`</sub>

## `posthog.errorTrackingBypassRulesList`

```ts
posthog.errorTrackingBypassRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; filters: unknown; order_key: number; disabled_data: unknown; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/bypass_rules/` · `error_tracking_bypass_rules_list`</sub>

## `posthog.errorTrackingBypassRulesCreate`

```ts
posthog.errorTrackingBypassRulesCreate(): Promise<{ id: string; filters: unknown; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/bypass_rules/` · `error_tracking_bypass_rules_create`</sub>

## `posthog.errorTrackingBypassRulesDestroy`

```ts
posthog.errorTrackingBypassRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/bypass_rules/{id}/` · `error_tracking_bypass_rules_destroy`</sub>

## `posthog.errorTrackingBypassRulesRetrieve`

```ts
posthog.errorTrackingBypassRulesRetrieve(): Promise<{ id: string; filters: unknown; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/bypass_rules/{id}/` · `error_tracking_bypass_rules_retrieve`</sub>

## `posthog.errorTrackingBypassRulesPartialUpdate`

```ts
posthog.errorTrackingBypassRulesPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/bypass_rules/{id}/` · `error_tracking_bypass_rules_partial_update`</sub>

## `posthog.errorTrackingBypassRulesUpdate`

```ts
posthog.errorTrackingBypassRulesUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/bypass_rules/{id}/` · `error_tracking_bypass_rules_update`</sub>

## `posthog.errorTrackingBypassRulesReorderPartialUpdate`

```ts
posthog.errorTrackingBypassRulesReorderPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/bypass_rules/reorder/` · `error_tracking_bypass_rules_reorder_partial_update`</sub>

## `posthog.errorTrackingExternalReferencesList`

```ts
posthog.errorTrackingExternalReferencesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/external_references/` · `error_tracking_external_references_list`</sub>

## `posthog.errorTrackingExternalReferencesCreate`

```ts
posthog.errorTrackingExternalReferencesCreate(): Promise<{ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/external_references/` · `error_tracking_external_references_create`</sub>

## `posthog.errorTrackingExternalReferencesDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.errorTrackingExternalReferencesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/external_references/{id}/` · `error_tracking_external_references_destroy`</sub>

## `posthog.errorTrackingExternalReferencesRetrieve`

```ts
posthog.errorTrackingExternalReferencesRetrieve(): Promise<{ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/external_references/{id}/` · `error_tracking_external_references_retrieve`</sub>

## `posthog.errorTrackingFingerprintsList`

```ts
posthog.errorTrackingFingerprintsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; fingerprint: string; issue_id: string; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/fingerprints/` · `error_tracking_fingerprints_list`</sub>

## `posthog.errorTrackingFingerprintsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.errorTrackingFingerprintsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/fingerprints/{id}/` · `error_tracking_fingerprints_destroy`</sub>

## `posthog.errorTrackingFingerprintsRetrieve`

```ts
posthog.errorTrackingFingerprintsRetrieve(): Promise<{ id: string; fingerprint: string; issue_id: string; created_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/fingerprints/{id}/` · `error_tracking_fingerprints_retrieve`</sub>

## `posthog.errorTrackingFingerprintsResolveRetrieve`

```ts
posthog.errorTrackingFingerprintsResolveRetrieve(): Promise<{ id: string; fingerprint: string; issue_id: string; created_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/fingerprints/resolve/` · `error_tracking_fingerprints_resolve_retrieve`</sub>

## `posthog.errorTrackingGitProviderFileLinksResolveGithubRetrieve`

```ts
posthog.errorTrackingGitProviderFileLinksResolveGithubRetrieve(): Promise<{ found: boolean; url?: string; error?: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/git-provider-file-links/resolve_github/` · `error_tracking_git_provider_file_links_resolve_github_retrieve`</sub>

## `posthog.errorTrackingGitProviderFileLinksResolveGitlabRetrieve`

```ts
posthog.errorTrackingGitProviderFileLinksResolveGitlabRetrieve(): Promise<{ found: boolean; url?: string; error?: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/git-provider-file-links/resolve_gitlab/` · `error_tracking_git_provider_file_links_resolve_gitlab_retrieve`</sub>

## `posthog.errorTrackingGroupingRulesList`

```ts
posthog.errorTrackingGroupingRulesList(): Promise<{ results: ({ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; description: string | null; issue: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/grouping_rules/` · `error_tracking_grouping_rules_list`</sub>

## `posthog.errorTrackingGroupingRulesCreate`

```ts
posthog.errorTrackingGroupingRulesCreate(): Promise<{ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; description: string | null; issue: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/grouping_rules/` · `error_tracking_grouping_rules_create`</sub>

## `posthog.errorTrackingGroupingRulesDestroy`

```ts
posthog.errorTrackingGroupingRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/grouping_rules/{id}/` · `error_tracking_grouping_rules_destroy`</sub>

## `posthog.errorTrackingGroupingRulesRetrieve`

```ts
posthog.errorTrackingGroupingRulesRetrieve(): Promise<{ id: string; filters: unknown; assignee: { [key: string]: unknown } | null; description: string | null; issue: { [key: string]: unknown } | null; order_key: number; disabled_data: unknown; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/grouping_rules/{id}/` · `error_tracking_grouping_rules_retrieve`</sub>

## `posthog.errorTrackingGroupingRulesPartialUpdate`

```ts
posthog.errorTrackingGroupingRulesPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/grouping_rules/{id}/` · `error_tracking_grouping_rules_partial_update`</sub>

## `posthog.errorTrackingGroupingRulesUpdate`

```ts
posthog.errorTrackingGroupingRulesUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/grouping_rules/{id}/` · `error_tracking_grouping_rules_update`</sub>

## `posthog.errorTrackingGroupingRulesReorderPartialUpdate`

```ts
posthog.errorTrackingGroupingRulesReorderPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/grouping_rules/reorder/` · `error_tracking_grouping_rules_reorder_partial_update`</sub>

## `posthog.errorTrackingIssuesList`

```ts
posthog.errorTrackingIssuesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; status: string; name: string | null; description: string | null; first_seen: string | null; assignee: { id: number | string | null; type: string } | null; external_issues: ({ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | ...>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/` · `error_tracking_issues_list`</sub>

## `posthog.errorTrackingIssuesDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.errorTrackingIssuesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/issues/{id}/` · `error_tracking_issues_destroy`</sub>

## `posthog.errorTrackingIssuesRetrieve`

```ts
posthog.errorTrackingIssuesRetrieve(): Promise<{ id: string; status: string; name: string | null; description: string | null; first_seen: string | null; assignee: { id: number | string | null; type: string } | null; external_issues: ({ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string })[]; cohort: { id: number...>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/{id}/` · `error_tracking_issues_retrieve`</sub>

## `posthog.errorTrackingIssuesPartialUpdate`

```ts
posthog.errorTrackingIssuesPartialUpdate(): Promise<{ id: string; status: string; name: string | null; description: string | null; first_seen: string | null; assignee: { id: number | string | null; type: string } | null; external_issues: ({ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string })[]; cohort: { id: number...>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/issues/{id}/` · `error_tracking_issues_partial_update`</sub>

## `posthog.errorTrackingIssuesUpdate`

```ts
posthog.errorTrackingIssuesUpdate(): Promise<{ id: string; status: string; name: string | null; description: string | null; first_seen: string | null; assignee: { id: number | string | null; type: string } | null; external_issues: ({ id: string; integration: { id: number; kind: string; display_name: string }; integration_id: number; config: { [key: string]: string | undefined }; issue: string; external_url: string })[]; cohort: { id: number...>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/issues/{id}/` · `error_tracking_issues_update`</sub>

## `posthog.errorTrackingIssuesActivityRetrieve`

```ts
posthog.errorTrackingIssuesActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/{id}/activity/` · `error_tracking_issues_activity_retrieve`</sub>

## `posthog.errorTrackingIssuesAssignPartialUpdate`

```ts
posthog.errorTrackingIssuesAssignPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/issues/{id}/assign/` · `error_tracking_issues_assign_partial_update`</sub>

## `posthog.errorTrackingIssuesCohortUpdate`

```ts
posthog.errorTrackingIssuesCohortUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/issues/{id}/cohort/` · `error_tracking_issues_cohort_update`</sub>

## `posthog.errorTrackingIssuesMergeCreate`

```ts
posthog.errorTrackingIssuesMergeCreate(): Promise<{ success: boolean }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/issues/{id}/merge/` · `error_tracking_issues_merge_create`</sub>

## `posthog.errorTrackingIssuesSplitCreate`

```ts
posthog.errorTrackingIssuesSplitCreate(): Promise<{ success: boolean; new_issue_ids: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/issues/{id}/split/` · `error_tracking_issues_split_create`</sub>

## `posthog.errorTrackingIssuesAllActivityRetrieve`

```ts
posthog.errorTrackingIssuesAllActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/activity/` · `error_tracking_issues_all_activity_retrieve`</sub>

## `posthog.errorTrackingIssuesBulkCreate`

```ts
posthog.errorTrackingIssuesBulkCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/error_tracking/issues/bulk/` · `error_tracking_issues_bulk_create`</sub>

## `posthog.errorTrackingIssuesExistsRetrieve`

```ts
posthog.errorTrackingIssuesExistsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/exists/` · `error_tracking_issues_exists_retrieve`</sub>

## `posthog.errorTrackingIssuesValuesRetrieve`

```ts
posthog.errorTrackingIssuesValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/error_tracking/issues/values/` · `error_tracking_issues_values_retrieve`</sub>

## `posthog.errorTrackingQueryIssueEventsCreate`

List sampled exception events for an error tracking issue

```ts
posthog.errorTrackingQueryIssueEventsCreate(): Promise<{ results: ({ uuid?: string; distinct_id?: string; timestamp?: string; properties?: { [key: string]: unknown } })[]; hasMore: boolean; limit: number; offset: number; nextOffset?: number }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/query/issue_events/` · `error_tracking_query_issue_events_create`</sub>

## `posthog.errorTrackingQueryIssueCreate`

Get compact error tracking issue details

```ts
posthog.errorTrackingQueryIssueCreate(): Promise<{ id: string; name?: string | null; description?: string | null; status?: string; first_seen?: string | null; last_seen?: string | null; library?: string | null; source?: string | null; assignee?: { id?: string | number | null; type?: string | null } | null; aggregations?: { occurrences?: number; users?: number; sessions?: number; volumeRange?: (number)[]; volume_buckets?: ({ label: string; value...>
```

<sub>`POST /api/projects/{project_id}/error_tracking/query/issue/` · `error_tracking_query_issue_create`</sub>

## `posthog.errorTrackingQueryIssuesListCreate`

List compact error tracking issues

```ts
posthog.errorTrackingQueryIssuesListCreate(): Promise<{ results: ({ id: string; name?: string | null; description?: string | null; status?: string; first_seen?: string | null; last_seen?: string | null; library?: string | null; source?: string | null; assignee?: { id?: string | number | null; type?: string | null } | null; aggregations?: { occurrences?: number; users?: number; sessions?: number; volumeRange?: (number)[]; volume_buckets?: ({ label: s...>
```

<sub>`POST /api/projects/{project_id}/error_tracking/query/issues/` · `error_tracking_query_issues_list_create`</sub>

## `posthog.errorTrackingRecommendationsList`

```ts
posthog.errorTrackingRecommendationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; type: string; meta: unknown; completed: boolean; status: string; computed_at: string | null; dismissed_at: string | null; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/recommendations/` · `error_tracking_recommendations_list`</sub>

## `posthog.errorTrackingRecommendationsDismissCreate`

```ts
posthog.errorTrackingRecommendationsDismissCreate(): Promise<{ id: string; type: string; meta: unknown; completed: boolean; status: string; computed_at: string | null; dismissed_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/recommendations/{id}/dismiss/` · `error_tracking_recommendations_dismiss_create`</sub>

## `posthog.errorTrackingRecommendationsRefreshCreate`

```ts
posthog.errorTrackingRecommendationsRefreshCreate(): Promise<{ id: string; type: string; meta: unknown; completed: boolean; status: string; computed_at: string | null; dismissed_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/recommendations/{id}/refresh/` · `error_tracking_recommendations_refresh_create`</sub>

## `posthog.errorTrackingRecommendationsRestoreCreate`

```ts
posthog.errorTrackingRecommendationsRestoreCreate(): Promise<{ id: string; type: string; meta: unknown; completed: boolean; status: string; computed_at: string | null; dismissed_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/recommendations/{id}/restore/` · `error_tracking_recommendations_restore_create`</sub>

## `posthog.errorTrackingReleasesList`

```ts
posthog.errorTrackingReleasesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/releases/` · `error_tracking_releases_list`</sub>

## `posthog.errorTrackingReleasesCreate`

```ts
posthog.errorTrackingReleasesCreate(): Promise<{ id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/releases/` · `error_tracking_releases_create`</sub>

## `posthog.errorTrackingReleasesDestroy`

```ts
posthog.errorTrackingReleasesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/releases/{id}/` · `error_tracking_releases_destroy`</sub>

## `posthog.errorTrackingReleasesRetrieve`

```ts
posthog.errorTrackingReleasesRetrieve(): Promise<{ id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/releases/{id}/` · `error_tracking_releases_retrieve`</sub>

## `posthog.errorTrackingReleasesPartialUpdate`

```ts
posthog.errorTrackingReleasesPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/releases/{id}/` · `error_tracking_releases_partial_update`</sub>

## `posthog.errorTrackingReleasesUpdate`

```ts
posthog.errorTrackingReleasesUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/releases/{id}/` · `error_tracking_releases_update`</sub>

## `posthog.errorTrackingReleasesHashRetrieve`

```ts
posthog.errorTrackingReleasesHashRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/error_tracking/releases/hash/{hash_id}/` · `error_tracking_releases_hash_retrieve`</sub>

## `posthog.errorTrackingSettingsRetrieveSettingsRetrieve`

```ts
posthog.errorTrackingSettingsRetrieveSettingsRetrieve(): Promise<{ project_rate_limit_value?: number | null; project_rate_limit_bucket_size_minutes?: number | null; per_issue_rate_limit_value?: number | null; per_issue_rate_limit_bucket_size_minutes?: number | null }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/settings/retrieve_settings/` · `error_tracking_settings_retrieve_settings_retrieve`</sub>

## `posthog.errorTrackingSettingsUpdateSettingsPartialUpdate`

```ts
posthog.errorTrackingSettingsUpdateSettingsPartialUpdate(): Promise<{ project_rate_limit_value?: number | null; project_rate_limit_bucket_size_minutes?: number | null; per_issue_rate_limit_value?: number | null; per_issue_rate_limit_bucket_size_minutes?: number | null }>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/settings/update_settings/` · `error_tracking_settings_update_settings_partial_update`</sub>

## `posthog.errorTrackingSpikeDetectionConfigList`

```ts
posthog.errorTrackingSpikeDetectionConfigList(): Promise<({ snooze_duration_minutes: number; multiplier: number; threshold: number })[]>
```

<sub>`GET /api/projects/{project_id}/error_tracking/spike_detection_config/` · `error_tracking_spike_detection_config_list`</sub>

## `posthog.errorTrackingSpikeDetectionConfigUpdateConfigPartialUpdate`

```ts
posthog.errorTrackingSpikeDetectionConfigUpdateConfigPartialUpdate(): Promise<{ snooze_duration_minutes: number; multiplier: number; threshold: number }>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/spike_detection_config/update_config/` · `error_tracking_spike_detection_config_update_config_partial_update`</sub>

## `posthog.errorTrackingSpikeEventsList`

```ts
posthog.errorTrackingSpikeEventsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; issue: { id: string; name: string | null; description: string | null }; detected_at: string; computed_baseline: number; current_bucket_value: number })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/spike_events/` · `error_tracking_spike_events_list`</sub>

## `posthog.errorTrackingStackFramesList`

```ts
posthog.errorTrackingStackFramesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; raw_id: string; created_at: string; contents: { [key: string]: unknown }; resolved: boolean; context: { [key: string]: unknown } | null; symbol_set_ref: string | null; release: { id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; pro...>
```

<sub>`GET /api/projects/{project_id}/error_tracking/stack_frames/` · `error_tracking_stack_frames_list`</sub>

## `posthog.errorTrackingStackFramesDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.errorTrackingStackFramesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/stack_frames/{id}/` · `error_tracking_stack_frames_destroy`</sub>

## `posthog.errorTrackingStackFramesRetrieve`

```ts
posthog.errorTrackingStackFramesRetrieve(): Promise<{ id: string; raw_id: string; created_at: string; contents: { [key: string]: unknown }; resolved: boolean; context: { [key: string]: unknown } | null; symbol_set_ref: string | null; release: { id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string } | null }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/stack_frames/{id}/` · `error_tracking_stack_frames_retrieve`</sub>

## `posthog.errorTrackingStackFramesBatchGetCreate`

```ts
posthog.errorTrackingStackFramesBatchGetCreate(): Promise<{ results: ({ id: string; raw_id: string; created_at: string; contents: { [key: string]: unknown }; resolved: boolean; context: { [key: string]: unknown } | null; symbol_set_ref: string | null; release: { id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string } | null })[] }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/stack_frames/batch_get/` · `error_tracking_stack_frames_batch_get_create`</sub>

## `posthog.errorTrackingSuppressionRulesList`

```ts
posthog.errorTrackingSuppressionRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; filters: unknown; order_key: number; disabled_data: unknown; sampling_rate: number; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/suppression_rules/` · `error_tracking_suppression_rules_list`</sub>

## `posthog.errorTrackingSuppressionRulesCreate`

```ts
posthog.errorTrackingSuppressionRulesCreate(): Promise<{ id: string; filters: unknown; order_key: number; disabled_data: unknown; sampling_rate: number; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/error_tracking/suppression_rules/` · `error_tracking_suppression_rules_create`</sub>

## `posthog.errorTrackingSuppressionRulesDestroy`

```ts
posthog.errorTrackingSuppressionRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/suppression_rules/{id}/` · `error_tracking_suppression_rules_destroy`</sub>

## `posthog.errorTrackingSuppressionRulesRetrieve`

```ts
posthog.errorTrackingSuppressionRulesRetrieve(): Promise<{ id: string; filters: unknown; order_key: number; disabled_data: unknown; sampling_rate: number; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/suppression_rules/{id}/` · `error_tracking_suppression_rules_retrieve`</sub>

## `posthog.errorTrackingSuppressionRulesPartialUpdate`

```ts
posthog.errorTrackingSuppressionRulesPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/suppression_rules/{id}/` · `error_tracking_suppression_rules_partial_update`</sub>

## `posthog.errorTrackingSuppressionRulesUpdate`

```ts
posthog.errorTrackingSuppressionRulesUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/suppression_rules/{id}/` · `error_tracking_suppression_rules_update`</sub>

## `posthog.errorTrackingSuppressionRulesReorderPartialUpdate`

```ts
posthog.errorTrackingSuppressionRulesReorderPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/error_tracking/suppression_rules/reorder/` · `error_tracking_suppression_rules_reorder_partial_update`</sub>

## `posthog.errorTrackingSymbolSetsList`

```ts
posthog.errorTrackingSymbolSetsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; ref: string; team_id: number; created_at: string; last_used: string | null; failure_reason: string | null; has_uploaded_file: boolean; release: { id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string } | null })[] }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/symbol_sets/` · `error_tracking_symbol_sets_list`</sub>

## `posthog.errorTrackingSymbolSetsDestroy`

```ts
posthog.errorTrackingSymbolSetsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/error_tracking/symbol_sets/{id}/` · `error_tracking_symbol_sets_destroy`</sub>

## `posthog.errorTrackingSymbolSetsRetrieve`

```ts
posthog.errorTrackingSymbolSetsRetrieve(): Promise<{ id: string; ref: string; team_id: number; created_at: string; last_used: string | null; failure_reason: string | null; has_uploaded_file: boolean; release: { id: string; hash_id: string; team_id: number; created_at: string; metadata: { [key: string]: unknown } | null; version: string; project: string } | null }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/symbol_sets/{id}/` · `error_tracking_symbol_sets_retrieve`</sub>

## `posthog.errorTrackingSymbolSetsDownloadRetrieve`

Return a presigned URL for downloading the symbol set's source map.

```ts
posthog.errorTrackingSymbolSetsDownloadRetrieve(): Promise<{ url: string }>
```

<sub>`GET /api/projects/{project_id}/error_tracking/symbol_sets/{id}/download/` · `error_tracking_symbol_sets_download_retrieve`</sub>

## `posthog.errorTrackingSymbolSetsFinishUploadUpdate`

```ts
posthog.errorTrackingSymbolSetsFinishUploadUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/error_tracking/symbol_sets/{id}/finish_upload/` · `error_tracking_symbol_sets_finish_upload_update`</sub>

## `posthog.errorTrackingSymbolSetsBulkDeleteCreate`

```ts
posthog.errorTrackingSymbolSetsBulkDeleteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/error_tracking/symbol_sets/bulk_delete/` · `error_tracking_symbol_sets_bulk_delete_create`</sub>

## `posthog.errorTrackingSymbolSetsBulkFinishUploadCreate`

```ts
posthog.errorTrackingSymbolSetsBulkFinishUploadCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/error_tracking/symbol_sets/bulk_finish_upload/` · `error_tracking_symbol_sets_bulk_finish_upload_create`</sub>

## `posthog.errorTrackingSymbolSetsBulkStartUploadCreate`

```ts
posthog.errorTrackingSymbolSetsBulkStartUploadCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/error_tracking/symbol_sets/bulk_start_upload/` · `error_tracking_symbol_sets_bulk_start_upload_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
