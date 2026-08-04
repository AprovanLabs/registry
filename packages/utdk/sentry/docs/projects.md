# Projects

35 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.createOrganizationProject`

Create a Project for an Organization

```ts
sentry.createOrganizationProject(): Promise<{ latestDeploys?: { [key: string]: { [key: string]: string | undefined } | undefined } | null; options?: { [key: string]: unknown | undefined }; stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTra...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/projects/` · `createOrganizationProject`</sub>

## `sentry.disableSpikeProtection`

Disables Spike Protection feature for some of the projects within the organization.

```ts
sentry.disableSpikeProtection(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/spike-protections/` · `Disable Spike Protection`</sub>

## `sentry.enableSpikeProtection`

Enables Spike Protection feature for some of the projects within the organization.

```ts
sentry.enableSpikeProtection(): Promise<unknown>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/spike-protections/` · `Enable Spike Protection`</sub>

## `sentry.deleteProject`

Delete a Project

```ts
sentry.deleteProject(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/` · `deleteProject`</sub>

## `sentry.getProject`

Retrieve a Project

```ts
sentry.getProject(): Promise<{ stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTransactionEvent: boolean; access: (string)[]; hasAccess: boolean; hasFeedbacks: boolean; hasFlags: boolean; hasMinifiedStackTrace: boolean; hasMo...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/` · `getProject`</sub>

## `sentry.updateProject`

Update a Project

```ts
sentry.updateProject(): Promise<{ stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTransactionEvent: boolean; access: (string)[]; hasAccess: boolean; hasFeedbacks: boolean; hasFlags: boolean; hasMinifiedStackTrace: boolean; hasMo...>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/` · `updateProject`</sub>

## `sentry.listProjectDebugFiles`

List a Project's Debug Information Files

```ts
sentry.listProjectDebugFiles(): Promise<({ id: string; uuid: string; debugId: string; codeId: string | null; cpuName: string; objectName: string; symbolType: string; headers: { [key: string]: string | undefined }; size: number; sha1: string; dateCreated: string; data: { [key: string]: unknown | undefined } })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/files/dsyms/` · `listProjectDebugFiles`</sub>

## `sentry.listProjectFilters`

List a Project's Data Filters

```ts
sentry.listProjectFilters(): Promise<({ id: string; active: boolean | (string)[] })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/filters/` · `listProjectFilters`</sub>

## `sentry.updateProjectFilter`

Update an Inbound Data Filter

```ts
sentry.updateProjectFilter(): Promise<unknown>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/filters/{filter_id}/` · `updateProjectFilter`</sub>

## `sentry.listAProjectSServiceHooks`

Return a list of service hooks bound to a project.

```ts
sentry.listAProjectSServiceHooks(): Promise<({ dateCreated: string; events: (string)[]; id: string; secret: string; status: string; url: string })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/hooks/` · `List a Project's Service Hooks`</sub>

## `sentry.registerANewServiceHook`

Register a new service hook on a project. Events include: - event.alert: An alert is generated for an event (via rules). - event.created: A new event has been processed. This endpoint requires the 'servicehooks' feature to be enabled for your project.

```ts
sentry.registerANewServiceHook(): Promise<{ dateCreated: string; events: (string)[]; id: string; secret: string; status: string; url: string }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/hooks/` · `Register a New Service Hook`</sub>

## `sentry.removeAServiceHook`

Remove a service hook.

```ts
sentry.removeAServiceHook(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/hooks/{hook_id}/` · `Remove a Service Hook`</sub>

## `sentry.retrieveAServiceHook`

Return a service hook bound to a project.

```ts
sentry.retrieveAServiceHook(): Promise<{ dateCreated: string; events: (string)[]; id: string; secret: string; status: string; url: string }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/hooks/{hook_id}/` · `Retrieve a Service Hook`</sub>

## `sentry.updateAServiceHook`

Update a service hook.

```ts
sentry.updateAServiceHook(): Promise<{ dateCreated: string; events: (string)[]; id: string; secret: string; status: string; url: string }>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/hooks/{hook_id}/` · `Update a Service Hook`</sub>

## `sentry.listProjectKeys`

List a Project's Client Keys

```ts
sentry.listProjectKeys(): Promise<({ id: string; name: string; label: string; public: string | null; secret: string | null; projectId: number; isActive: boolean; rateLimit: { window: number; count: number } | null; dsn: { secret: string; public: string; csp: string; security: string; minidump: string; nel: string; unreal: string; crons: string; cdn: string; playstation: string; integration: string; otlp_traces: string; otlp_logs:...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/keys/` · `listProjectKeys`</sub>

## `sentry.createProjectKey`

Create a New Client Key

```ts
sentry.createProjectKey(): Promise<{ id: string; name: string; label: string; public: string | null; secret: string | null; projectId: number; isActive: boolean; rateLimit: { window: number; count: number } | null; dsn: { secret: string; public: string; csp: string; security: string; minidump: string; nel: string; unreal: string; crons: string; cdn: string; playstation: string; integration: string; otlp_traces: string; otlp_logs: ...>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/keys/` · `createProjectKey`</sub>

## `sentry.deleteProjectKey`

Delete a Client Key

```ts
sentry.deleteProjectKey(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/keys/{key_id}/` · `deleteProjectKey`</sub>

## `sentry.getProjectKey`

Retrieve a Client Key

```ts
sentry.getProjectKey(): Promise<{ id: string; name: string; label: string; public: string | null; secret: string | null; projectId: number; isActive: boolean; rateLimit: { window: number; count: number } | null; dsn: { secret: string; public: string; csp: string; security: string; minidump: string; nel: string; unreal: string; crons: string; cdn: string; playstation: string; integration: string; otlp_traces: string; otlp_logs: ...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/keys/{key_id}/` · `getProjectKey`</sub>

## `sentry.updateProjectKey`

Update a Client Key

```ts
sentry.updateProjectKey(): Promise<{ id: string; name: string; label: string; public: string | null; secret: string | null; projectId: number; isActive: boolean; rateLimit: { window: number; count: number } | null; dsn: { secret: string; public: string; csp: string; security: string; minidump: string; nel: string; unreal: string; crons: string; cdn: string; playstation: string; integration: string; otlp_traces: string; otlp_logs: ...>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/keys/{key_id}/` · `updateProjectKey`</sub>

## `sentry.listProjectMembers`

List a Project's Organization Members

```ts
sentry.listProjectMembers(): Promise<({ externalUsers?: ({ externalId?: string; userId?: string; teamId?: string; id: string; provider: string; externalName: string; integrationId: string })[]; id: string; email: string; name: string; user: { identities?: ({ id: string; name: string; organization: { slug: string; name: string }; provider: { id: string; name: string }; dateVerified: string; dateSynced: string })[]; avatar?: { avatarT...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/members/` · `listProjectMembers`</sub>

## `sentry.getProjectOwnership`

Retrieve Ownership Configuration for a Project

```ts
sentry.getProjectOwnership(): Promise<{ schema?: { $version: number; rules: ({ matcher: { type: string; pattern: string }; owners: ({ type: string; name: string; id?: string })[] })[] } | null; raw: string; fallthrough: boolean; dateCreated: string; lastUpdated: string; isActive: boolean; autoAssignment: string; codeownersAutoSync: boolean }>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/ownership/` · `getProjectOwnership`</sub>

## `sentry.updateProjectOwnership`

Update Ownership Configuration for a Project

```ts
sentry.updateProjectOwnership(): Promise<unknown>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/ownership/` · `updateProjectOwnership`</sub>

## `sentry.linkProjectRepository`

Link a Repository to a Project

```ts
sentry.linkProjectRepository(): Promise<{ id: string; projectId: string; repositoryId: string; source: string; created: boolean }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/repo/` · `linkProjectRepository`</sub>

## `sentry.listProjectStats`

Retrieve Event Counts for a Project

```ts
sentry.listProjectStats(): Promise<((number)[])[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/stats/` · `listProjectStats`</sub>

## `sentry.deleteProjectSymbolSource`

Delete a Symbol Source from a Project

```ts
sentry.deleteProjectSymbolSource(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/symbol-sources/` · `deleteProjectSymbolSource`</sub>

## `sentry.listProjectSymbolSources`

Retrieve a Project's Symbol Sources

```ts
sentry.listProjectSymbolSources(): Promise<({ type: "http"; url: string; username?: string; password?: { "hidden-secret"?: true }; id: string; name?: string; layout: { type: "native" | "symstore" | "symstore_index2" | "ssqp" | "unified" | "debuginfod" | "slashsymbols"; casing?: "lowercase" | "uppercase" | "default" }; filters?: { filetypes?: ("pe" | "pdb" | "portablepdb" | "mach_debug" | "mach_code" | "elf_debug" | "elf_code" | "wasm_debu...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/symbol-sources/` · `listProjectSymbolSources`</sub>

## `sentry.addProjectSymbolSource`

Add a Symbol Source to a Project

```ts
sentry.addProjectSymbolSource(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/symbol-sources/` · `addProjectSymbolSource`</sub>

## `sentry.updateProjectSymbolSource`

Update a Project's Symbol Source

```ts
sentry.updateProjectSymbolSource(): Promise<{ [key: string]: unknown }>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/symbol-sources/` · `updateProjectSymbolSource`</sub>

## `sentry.listATagSValues`

Return a list of values associated with this key. The `query` parameter can be used to to perform a "contains" match on values. When [paginated](/api/pagination) can return at most 1000 values.

```ts
sentry.listATagSValues(): Promise<({ name: string })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/tags/{key}/values/` · `List a Tag's Values`</sub>

## `sentry.deleteProjectTeam`

Delete a Team from a Project

```ts
sentry.deleteProjectTeam(): Promise<{ stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTransactionEvent: boolean; access: (string)[]; hasAccess: boolean; hasFeedbacks: boolean; hasFlags: boolean; hasMinifiedStackTrace: boolean; hasMo...>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/teams/{team_id_or_slug}/` · `deleteProjectTeam`</sub>

## `sentry.addProjectTeam`

Add a Team to a Project

```ts
sentry.addProjectTeam(): Promise<{ stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTransactionEvent: boolean; access: (string)[]; hasAccess: boolean; hasFeedbacks: boolean; hasFlags: boolean; hasMinifiedStackTrace: boolean; hasMo...>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/teams/{team_id_or_slug}/` · `addProjectTeam`</sub>

## `sentry.listAProjectSUserFeedback`

Return a list of user feedback items within this project. *This list does not include submissions from the [User Feedback Widget](https://docs.sentry.io/product/user-feedback/#user-feedback-widget). This is because it is based on an older format called User Reports - read more [here](https://develop.sentry.dev/application/feedback-architecture/#user-reports). To return a list of user feedback items from the widget, please use the [issue API](https://docs.sentry.io/api/events/list-a-projects-issues/) with the filter `issue.category:feedback`.*

```ts
sentry.listAProjectSUserFeedback(): Promise<({ comments: string; dateCreated: string; email: string; event: { eventID?: string; id?: string | null }; eventID: string; id: string; issue: { [key: string]: unknown } | null; name: string; user: { [key: string]: unknown } | null })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/user-feedback/` · `List a Project's User Feedback`</sub>

## `sentry.submitUserFeedback`

*This endpoint is DEPRECATED. We document it here for older SDKs and users who are still migrating to the [User Feedback Widget](https://docs.sentry.io/product/user-feedback/#user-feedback-widget) or [API](https://docs.sentry.io/platforms/javascript/user-feedback/#user-feedback-api)(multi-platform). If you are a new user, do not use this endpoint - unless you don't have a JS frontend, and your platform's SDK does not offer a feedback API.* Feedback must be received by the server no more than 30 minutes after the event was saved. Additionally, within 5 minutes of submitting feedback it may also be overwritten. This is useful in situations where you may need to retry sending a request due to network failures. If feedback is rejected due to a mutability threshold, a 409 status code will be returned. Note: Feedback may be submitted with DSN authentication (see auth documentation).

```ts
sentry.submitUserFeedback(): Promise<{ comments: string; dateCreated: string; email: string; event: { eventID?: string; id?: string | null }; eventID: string; id: string; issue: { [key: string]: unknown } | null; name: string; user: { [key: string]: unknown } | null }>
```

<sub>`POST /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/user-feedback/` · `Submit User Feedback`</sub>

## `sentry.listProjectUsers`

List a Project's Users

```ts
sentry.listProjectUsers(): Promise<({ id: string | null; tagValue: string; identifier: string; username: string; email: string; name: string; ipAddress: string; avatarUrl: string; hash: string; dateCreated: string | null })[]>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/users/` · `listProjectUsers`</sub>

## `sentry.createTeamProject`

Create a New Project

```ts
sentry.createTeamProject(): Promise<{ latestDeploys?: { [key: string]: { [key: string]: string | undefined } | undefined } | null; options?: { [key: string]: unknown | undefined }; stats?: unknown; transactionStats?: unknown; sessionStats?: unknown; id: string; slug: string; name: string; platform: string | null; dateCreated: string; isBookmarked: boolean; isMember: boolean; features: (string)[]; firstEvent: string | null; firstTra...>
```

<sub>`POST /api/0/teams/{organization_id_or_slug}/{team_id_or_slug}/projects/` · `createTeamProject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
