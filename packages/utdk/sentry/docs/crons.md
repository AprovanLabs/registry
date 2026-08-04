# Crons

10 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationMonitors`

Retrieve Monitors for an Organization

```ts
sentry.listOrganizationMonitors(): Promise<({ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nu...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/monitors/` · `listOrganizationMonitors`</sub>

## `sentry.createOrganizationMonitor`

Create a Monitor

```ts
sentry.createOrganizationMonitor(): Promise<{ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nul...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/monitors/` · `createOrganizationMonitor`</sub>

## `sentry.deleteOrganizationMonitor`

Delete a Monitor or Monitor Environments

```ts
sentry.deleteOrganizationMonitor(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/monitors/{monitor_id_or_slug}/` · `deleteOrganizationMonitor`</sub>

## `sentry.getOrganizationMonitor`

Retrieve a Monitor

```ts
sentry.getOrganizationMonitor(): Promise<{ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nul...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/monitors/{monitor_id_or_slug}/` · `getOrganizationMonitor`</sub>

## `sentry.updateOrganizationMonitor`

Update a Monitor

```ts
sentry.updateOrganizationMonitor(): Promise<{ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nul...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/monitors/{monitor_id_or_slug}/` · `updateOrganizationMonitor`</sub>

## `sentry.listOrganizationMonitorCheckins`

Retrieve Check-Ins for a Monitor

```ts
sentry.listOrganizationMonitorCheckins(): Promise<({ groups?: (string)[]; id: string; environment: string; status: string; duration: number | null; dateCreated: string; dateAdded: string; dateUpdated: string; dateInProgress: string | null; dateClock: string; expectedTime: string; monitorConfig: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | nul...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/monitors/{monitor_id_or_slug}/checkins/` · `listOrganizationMonitorCheckins`</sub>

## `sentry.deleteProjectMonitor`

Delete a Monitor or Monitor Environments for a Project

```ts
sentry.deleteProjectMonitor(): Promise<unknown>
```

<sub>`DELETE /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/monitors/{monitor_id_or_slug}/` · `deleteProjectMonitor`</sub>

## `sentry.getProjectMonitor`

Retrieve a Monitor for a Project

```ts
sentry.getProjectMonitor(): Promise<{ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nul...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/monitors/{monitor_id_or_slug}/` · `getProjectMonitor`</sub>

## `sentry.updateProjectMonitor`

Update a Monitor for a Project

```ts
sentry.updateProjectMonitor(): Promise<{ alertRule?: { targets: ({ targetIdentifier: number; targetType: string })[]; environment: string }; id: string; name: string; slug: string; status: string; isMuted: boolean; isUpserting: boolean; config: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | null; failure_issue_threshold: number | nul...>
```

<sub>`PUT /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/monitors/{monitor_id_or_slug}/` · `updateProjectMonitor`</sub>

## `sentry.listProjectMonitorCheckins`

Retrieve Check-Ins for a Monitor by Project

```ts
sentry.listProjectMonitorCheckins(): Promise<({ groups?: (string)[]; id: string; environment: string; status: string; duration: number | null; dateCreated: string; dateAdded: string; dateUpdated: string; dateInProgress: string | null; dateClock: string; expectedTime: string; monitorConfig: { schedule_type: "crontab" | "interval"; schedule: string | (number)[]; checkin_margin: number | null; max_runtime: number | null; timezone: string | nul...>
```

<sub>`GET /api/0/projects/{organization_id_or_slug}/{project_id_or_slug}/monitors/{monitor_id_or_slug}/checkins/` · `listProjectMonitorCheckins`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
