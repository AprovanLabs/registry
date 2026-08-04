# Events

19 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.deleteOrganizationIssues`

Bulk Remove an Organization's Issues

```ts
sentry.deleteOrganizationIssues(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/issues/` · `deleteOrganizationIssues`</sub>

## `sentry.listOrganizationIssues`

List an Organization's Issues

```ts
sentry.listOrganizationIssues(): Promise<({ id: string; shareId: string | null; shortId: string; title: string; culprit: string | null; permalink: string; logger: string | null; level: "sample" | "debug" | "info" | "warning" | "error" | "fatal" | "unknown"; status: "resolved" | "ignored" | "pending_deletion" | "pending_merge" | "reprocessing" | "unresolved"; statusDetails: { ignoreCount?: number; ignoreUntil?: string; ignoreUserCount?: ...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/` · `listOrganizationIssues`</sub>

## `sentry.updateOrganizationIssues`

Bulk Mutate an Organization's Issues

```ts
sentry.updateOrganizationIssues(): Promise<{ assignedTo?: { type: "user" | "team"; id: string; name: string; email?: string }; discard?: boolean; hasSeen?: boolean; inbox?: boolean; isBookmarked?: boolean; isPublic?: boolean; isSubscribed?: boolean; merge?: { parent: string; children: (string)[] }; priority?: string; shareId?: string; status?: string; statusDetails?: { inNextRelease?: boolean; inRelease?: string; inCommit?: { commit: stri...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/issues/` · `updateOrganizationIssues`</sub>

## `sentry.deleteOrganizationIssue`

Remove an Issue

```ts
sentry.deleteOrganizationIssue(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/` · `deleteOrganizationIssue`</sub>

## `sentry.getOrganizationIssue`

Retrieve an Issue

```ts
sentry.getOrganizationIssue(): Promise<{ isUnhandled?: boolean; count?: string; userCount?: number; firstSeen?: string | null; lastSeen?: string | null; derivedData?: { blocker: string; progress: string; status: string; viewCount: number; hasOpenFixPr: boolean; isAssigned: boolean; hasRootCause: boolean; lastCompletedAutofixStep: string; lastProgressedAt: string | null }; id: string; shareId: string | null; shortId: string; title: str...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/` · `getOrganizationIssue`</sub>

## `sentry.updateOrganizationIssue`

Update an Issue

```ts
sentry.updateOrganizationIssue(): Promise<{ isUnhandled?: boolean; count?: string; userCount?: number; firstSeen?: string | null; lastSeen?: string | null; derivedData?: { blocker: string; progress: string; status: string; viewCount: number; hasOpenFixPr: boolean; isAssigned: boolean; hasRootCause: boolean; lastCompletedAutofixStep: string; lastProgressedAt: string | null }; id: string; shareId: string | null; shortId: string; title: str...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/` · `updateOrganizationIssue`</sub>

## `sentry.listOrganizationIssueEvents`

List an Issue's Events

```ts
sentry.listOrganizationIssueEvents(): Promise<({ id: string; "event.type": string; groupID: string | null; eventID: string; projectID: string; message: string; title: string; location: string | null; culprit: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } | null; data?: { [key: string]: unknown | undefine...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/events/` · `listOrganizationIssueEvents`</sub>

## `sentry.getOrganizationIssueEvent`

Retrieve an Issue Event

```ts
sentry.getOrganizationIssueEvent(): Promise<{ id: string; groupID: string | null; eventID: string; projectID: string; message: string | null; title: string; location: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } | null; data?: { [key: string]: unknown | undefined } | null } | null; tags: ({ query?: st...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/events/{event_id}/` · `getOrganizationIssueEvent`</sub>

## `sentry.listOrganizationIssueHashes`

List an Issue's Hashes

```ts
sentry.listOrganizationIssueHashes(): Promise<({ id: string; latestEvent: { id: string; groupID: string | null; eventID: string; projectID: string; message: string | null; title: string; location: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } | null; data?: { [key: string]: unknown | undefined } | null }...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/hashes/` · `listOrganizationIssueHashes`</sub>

## `sentry.getOrganizationIssueTag`

Retrieve Tag Details

```ts
sentry.getOrganizationIssueTag(): Promise<{ uniqueValues?: number | null; totalValues?: number | null; topValues?: ({ query?: string | null; key: string; name: string; value: string | null; count: number | null; lastSeen: string | null; firstSeen: string | null })[] | null; key: string; name: string }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/tags/{key}/` · `getOrganizationIssueTag`</sub>

## `sentry.listOrganizationIssueTagValues`

List a Tag's Values for an Issue

```ts
sentry.listOrganizationIssueTagValues(): Promise<({ query?: string | null; key: string; name: string; value: string | null; count: number | null; lastSeen: string | null; firstSeen: string | null })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/tags/{key}/values/` · `listOrganizationIssueTagValues`</sub>

## `sentry.listProjectEvents`

List a Project's Error Events

```ts
sentry.listProjectEvents(): Promise<({ id: string; "event.type": string; groupID: string | null; eventID: string; projectID: string; message: string; title: string; location: string | null; culprit: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } | null; data?: { [key: string]: unknown | undefine...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/events/` · `listProjectEvents`</sub>

## `sentry.getProjectEvent`

Retrieve an Event for a Project

```ts
sentry.getProjectEvent(): Promise<{ id: string; groupID: string | null; eventID: string; projectID: string; message: string | null; title: string; location: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } | null; data?: { [key: string]: unknown | undefined } | null } | null; tags: ({ query?: st...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/events/{event_id}/` · `getProjectEvent`</sub>

## `sentry.listProjectEventAttachments`

List an Event's Attachments

```ts
sentry.listProjectEventAttachments(): Promise<({ id: string; event_id: string; type: string; name: string; mimetype: string | null; dateCreated: string; size: number; headers: { [key: string]: string | null | undefined }; sha1: string | null })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/events/{event_id}/attachments/` · `listProjectEventAttachments`</sub>

## `sentry.getProjectEventAttachment`

Retrieve an Event Attachment

```ts
sentry.getProjectEventAttachment(): Promise<{ id: string; event_id: string; type: string; name: string; mimetype: string | null; dateCreated: string; size: number; headers: { [key: string]: string | null | undefined }; sha1: string | null }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/events/{event_id}/attachments/{attachment_id}/` · `getProjectEventAttachment`</sub>

## `sentry.getProjectEventSourceMapDebug`

Get Debug Information Related to Source Maps for a Given Event

```ts
sentry.getProjectEventSourceMapDebug(): Promise<{ dist: string | null; release: string | null; exceptions: ({ frames: ({ debug_id_process: { debug_id: string | null; uploaded_source_file_with_correct_debug_id: boolean; uploaded_source_map_with_correct_debug_id: boolean }; release_process: { abs_path: string; matching_source_file_names: (string)[]; matching_source_map_name: string | null; source_map_reference: string | null; source_file_lookup_...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/events/{event_id}/source-map-debug/` · `getProjectEventSourceMapDebug`</sub>

## `sentry.bulkRemoveAListOfIssues`

Permanently remove the given issues. The list of issues to modify is given through the `id` query parameter. It is repeated for each issue that should be removed. Only queries by 'id' are accepted. If any IDs are out of scope this operation will succeed without any data mutation.

```ts
sentry.bulkRemoveAListOfIssues(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/issues/` · `Bulk Remove a List of Issues`</sub>

## `sentry.listAProjectSIssues`

**Deprecated**: This endpoint has been replaced with the [Organization Issues endpoint](/api/events/list-an-organizations-issues/) which supports filtering on project and additional functionality. Return a list of issues (groups) bound to a project. All parameters are supplied as query string parameters. A default query of ``is:unresolved`` is applied. To return results with other statuses send an new query value (i.e. ``?query=`` for all results). The ``statsPeriod`` parameter can be used to select the timeline stats which should be present. Possible values are: ``""`` (disable),``"24h"`` (default), ``"14d"`` User feedback items from the [User Feedback Widget](https://docs.sentry.io/product/user-feedback/#user-feedback-widget) are built off the issue platform, so to return a list of user feedback items for a specific project, filter for `issue.category:feedback`.

```ts
sentry.listAProjectSIssues(): Promise<({ annotations: (string)[]; assignedTo: { [key: string]: unknown } | null; count: string; culprit: string; firstSeen: string; hasSeen: boolean; id: string; isBookmarked: boolean; isPublic: boolean; isSubscribed: boolean; lastSeen: string; level: string; logger: string | null; metadata: { filename: string; type: string; value: string } | { title: string }; numComments: number; permalink: string; p...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/issues/` · `List a Project's Issues`</sub>

## `sentry.bulkMutateAListOfIssues`

Bulk mutate various attributes on issues. The list of issues to modify is given through the `id` query parameter. It is repeated for each issue that should be modified. - For non-status updates, the `id` query parameter is required. - For status updates, the `id` query parameter may be omitted for a batch "update all" query. - An optional `status` query parameter may be used to restrict mutations to only events with the given status. The following attributes can be modified and are supplied as JSON object in the body: If any IDs are out of scope this operation will succeed without any data mutation.

```ts
sentry.bulkMutateAListOfIssues(): Promise<{ isPublic: boolean; status: "resolved" | "unresolved" | "ignored"; statusDetails: { [key: string]: unknown } }>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/issues/` · `Bulk Mutate a List of Issues`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
