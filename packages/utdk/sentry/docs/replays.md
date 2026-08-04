# Replays

12 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.getOrganizationReplayCount`

Retrieve a Count of Replays for a Given Issue or Transaction

```ts
sentry.getOrganizationReplayCount(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/replay-count/` · `getOrganizationReplayCount`</sub>

## `sentry.listOrganizationReplaySelectors`

List an Organization's Selectors

```ts
sentry.listOrganizationReplaySelectors(): Promise<{ data: ({ count_dead_clicks?: number; count_rage_clicks?: number; dom_element?: string; element?: { alt: string; aria_label: string; class: (string)[]; component_name: string; id: string; role: string; tag: string; testid: string; title: string }; project_id?: string })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/replay-selectors/` · `listOrganizationReplaySelectors`</sub>

## `sentry.listOrganizationReplays`

List an Organization's Replays

```ts
sentry.listOrganizationReplays(): Promise<{ data: ({ id?: string; project_id?: string; trace_ids?: (string)[]; error_ids?: (string)[]; environment?: string | null; tags?: { [key: string]: (string)[] | undefined } | (unknown)[]; user?: { id?: string | null; username?: string | null; email?: string | null; ip?: string | null; display_name?: string | null; geo?: { city?: string | null; country_code?: string | null; region?: string | null; s...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/replays/` · `listOrganizationReplays`</sub>

## `sentry.getOrganizationReplay`

Retrieve a Replay Instance

```ts
sentry.getOrganizationReplay(): Promise<{ data: { id?: string; project_id?: string; trace_ids?: (string)[]; error_ids?: (string)[]; environment?: string | null; tags?: { [key: string]: (string)[] | undefined } | (unknown)[]; user?: { id?: string | null; username?: string | null; email?: string | null; ip?: string | null; display_name?: string | null; geo?: { city?: string | null; country_code?: string | null; region?: string | null; su...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/replays/{replay_id}/` · `getOrganizationReplay`</sub>

## `sentry.deleteProjectReplay`

Delete a Replay Instance

```ts
sentry.deleteProjectReplay(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/{replay_id}/` · `deleteProjectReplay`</sub>

## `sentry.listProjectReplayClicks`

List Clicked Nodes

```ts
sentry.listProjectReplayClicks(): Promise<{ data: ({ node_id: number; timestamp: string })[] }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/{replay_id}/clicks/` · `listProjectReplayClicks`</sub>

## `sentry.listProjectReplayRecordingSegments`

List Recording Segments

```ts
sentry.listProjectReplayRecordingSegments(): Promise<(({ [key: string]: unknown | undefined })[])[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/{replay_id}/recording-segments/` · `listProjectReplayRecordingSegments`</sub>

## `sentry.getProjectReplayRecordingSegment`

Retrieve a Recording Segment

```ts
sentry.getProjectReplayRecordingSegment(): Promise<{ data: { replayId: string; segmentId: number; projectId: string; dateAdded: string | null } }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/{replay_id}/recording-segments/{segment_id}/` · `getProjectReplayRecordingSegment`</sub>

## `sentry.listProjectReplayViewedBy`

List Users Who Have Viewed a Replay

```ts
sentry.listProjectReplayViewedBy(): Promise<{ data: { viewed_by: ({ [key: string]: unknown | undefined })[] } }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/{replay_id}/viewed-by/` · `listProjectReplayViewedBy`</sub>

## `sentry.listProjectReplayDeletionJobs`

List Replay Batch-Deletion Jobs

```ts
sentry.listProjectReplayDeletionJobs(): Promise<{ data: ({ id: number; dateCreated: string; dateUpdated: string; rangeStart: string; rangeEnd: string; environments: (string)[]; status: string; query: string; countDeleted: number })[] }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/jobs/delete/` · `listProjectReplayDeletionJobs`</sub>

## `sentry.createProjectReplayDeletionJob`

Create Replay Batch Deletion Job

```ts
sentry.createProjectReplayDeletionJob(): Promise<{ data: { id: number; dateCreated: string; dateUpdated: string; rangeStart: string; rangeEnd: string; environments: (string)[]; status: string; query: string; countDeleted: number } }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/jobs/delete/` · `createProjectReplayDeletionJob`</sub>

## `sentry.getProjectReplayDeletionJob`

Retrieve a Replay Batch-Deletion Job

```ts
sentry.getProjectReplayDeletionJob(): Promise<{ data: { id: number; dateCreated: string; dateUpdated: string; rangeStart: string; rangeEnd: string; environments: (string)[]; status: string; query: string; countDeleted: number } }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/replays/jobs/delete/{job_id}/` · `getProjectReplayDeletionJob`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
