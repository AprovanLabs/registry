# Organizations

16 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.getOrganization`

Retrieve an Organization

```ts
sentry.getOrganization(): Promise<{ features?: (string)[]; extraOptions?: { [key: string]: { [key: string]: unknown | undefined } | undefined }; access?: (string)[]; onboardingTasks?: ({ task: string | null; status: string; completionSeen: string | null; dateCompleted: string; data: unknown })[]; id: string; slug: string; status: { id: string; name: string }; name: string; dateCreated: string; isEarlyAdopter: boolean; require2FA:...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/` · `getOrganization`</sub>

## `sentry.updateOrganization`

Update an Organization

```ts
sentry.updateOrganization(): Promise<{ features?: (string)[]; extraOptions?: { [key: string]: { [key: string]: unknown | undefined } | undefined }; access?: (string)[]; onboardingTasks?: ({ task: string | null; status: string; completionSeen: string | null; dateCompleted: string; data: unknown })[]; id: string; slug: string; status: { id: string; name: string }; name: string; dateCreated: string; isEarlyAdopter: boolean; require2FA:...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/` · `updateOrganization`</sub>

## `sentry.resolveOrganizationEventId`

Resolve an Event ID

```ts
sentry.resolveOrganizationEventId(): Promise<{ organizationSlug: string; projectSlug: string; groupId: string; eventId: string; event: { id: string; groupID: string | null; eventID: string; projectID: string; message: string | null; title: string; location: string | null; user: { id?: string | null; email?: string | null; username?: string | null; ip_address?: string | null; name?: string | null; geo?: { [key: string]: string | undefined } ...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/eventids/{event_id}/` · `resolveOrganizationEventId`</sub>

## `sentry.listOrganizationMembers`

List an Organization's Members

```ts
sentry.listOrganizationMembers(): Promise<({ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarT...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/members/` · `listOrganizationMembers`</sub>

## `sentry.addOrganizationMember`

Add a Member to an Organization

```ts
sentry.addOrganizationMember(): Promise<{ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarTy...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/members/` · `addOrganizationMember`</sub>

## `sentry.deleteOrganizationMember`

Delete an Organization Member

```ts
sentry.deleteOrganizationMember(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/members/{member_id}/` · `deleteOrganizationMember`</sub>

## `sentry.getOrganizationMember`

Retrieve an Organization Member

```ts
sentry.getOrganizationMember(): Promise<{ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; role?: string; roleName?: string; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/members/{member_id}/` · `getOrganizationMember`</sub>

## `sentry.updateOrganizationMember`

Update an Organization Member's Roles

```ts
sentry.updateOrganizationMember(): Promise<{ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; role?: string; roleName?: string; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/members/{member_id}/` · `updateOrganizationMember`</sub>

## `sentry.listOrganizationProjectKeys`

List an Organization's Client Keys

```ts
sentry.listOrganizationProjectKeys(): Promise<({ id: string; name: string; label: string; public: string | null; secret: string | null; projectId: number; isActive: boolean; rateLimit: { window: number; count: number } | null; dsn: { secret: string; public: string; csp: string; security: string; minidump: string; nel: string; unreal: string; crons: string; cdn: string; playstation: string; integration: string; otlp_traces: string; otlp_logs:...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/project-keys/` · `listOrganizationProjectKeys`</sub>

## `sentry.listOrganizationProjects`

List an Organization's Projects

```ts
sentry.listOrganizationProjects(): Promise<({ latestDeploys?: { [key: string]: { [key: string]: string | undefined } | undefined } | null; options?: { [key: string]: unknown | undefined }; stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTr...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/projects/` · `listOrganizationProjects`</sub>

## `sentry.listOrganizationRelayUsage`

List an Organization's trusted Relays

```ts
sentry.listOrganizationRelayUsage(): Promise<({ relayId: string; version: string; publicKey: string | null; firstSeen: string; lastSeen: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/relay_usage/` · `listOrganizationRelayUsage`</sub>

## `sentry.listOrganizationRepos`

List an Organization's Repositories

```ts
sentry.listOrganizationRepos(): Promise<({ url?: string | null; provider?: { [key: string]: string | undefined }; status?: string; integrationId?: string | null; externalSlug?: string | null; externalId?: string | null; settings?: { enabledCodeReview: boolean; codeReviewTriggers: (string)[] } | null; id: string; name: string; dateCreated: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/repos/` · `listOrganizationRepos`</sub>

## `sentry.listOrganizationRepoCommits`

List a Repository's Commits

```ts
sentry.listOrganizationRepoCommits(): Promise<({ id: string; message: string | null; dateCreated: string; pullRequest: { id: string; title: string | null; message: string | null; dateCreated: string; mergedAt: string | null; status: "merged" | "open" | "closed" | "draft" | "unknown" | null | null; repository: { url?: string | null; provider?: { [key: string]: string | undefined }; status?: string; integrationId?: string | null; externalSlug?...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/repos/{repo_id}/commits/` · `listOrganizationRepoCommits`</sub>

## `sentry.resolveOrganizationShortId`

Resolve a Short ID

```ts
sentry.resolveOrganizationShortId(): Promise<{ organizationSlug: string; projectSlug: string; groupId: string; group: { isUnhandled?: boolean; count?: string; userCount?: number; firstSeen?: string | null; lastSeen?: string | null; derivedData?: { blocker: string; progress: string; status: string; viewCount: number; hasOpenFixPr: boolean; isAssigned: boolean; hasRootCause: boolean; lastCompletedAutofixStep: string; lastProgressedAt: string ...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/shortids/{issue_id}/` · `resolveOrganizationShortId`</sub>

## `sentry.listOrganizationStatsV2`

Retrieve Event Counts for an Organization (v2)

```ts
sentry.listOrganizationStatsV2(): Promise<{ start: string; end: string; intervals: (string)[]; groups: ({ by: { [key: string]: unknown | undefined }; totals: { [key: string]: unknown | undefined }; series: { [key: string]: unknown | undefined } })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/stats_v2/` · `listOrganizationStatsV2`</sub>

## `sentry.getOrganizationStatsSummary`

Retrieve an Organization's Events Count by Project

```ts
sentry.getOrganizationStatsSummary(): Promise<{ start: string; end: string; projects: ({ id: string; slug: string; stats: ({ [key: string]: unknown | undefined })[] })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/stats-summary/` · `getOrganizationStatsSummary`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
