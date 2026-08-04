# Monitors

14 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.deleteOrganizationDetectors`

Bulk Delete Monitors

```ts
sentry.deleteOrganizationDetectors(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/detectors/` · `deleteOrganizationDetectors`</sub>

## `sentry.listOrganizationDetectors`

Fetch an Organization's Monitors

```ts
sentry.listOrganizationDetectors(): Promise<({ owner?: { type: "user" | "team"; id: string; name: string; email?: string } | null; createdBy?: string | null; latestGroup?: { [key: string]: unknown | undefined } | null; description?: string | null; id: string; projectId: string; name: string; type: string; workflowIds: (string)[] | null; dateCreated: string; dateUpdated: string; dataSources: ({ [key: string]: unknown | undefined })[] | null...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/detectors/` · `listOrganizationDetectors`</sub>

## `sentry.updateOrganizationDetectors`

Mutate an Organization's Monitors

```ts
sentry.updateOrganizationDetectors(): Promise<({ owner?: { type: "user" | "team"; id: string; name: string; email?: string } | null; createdBy?: string | null; latestGroup?: { [key: string]: unknown | undefined } | null; description?: string | null; id: string; projectId: string; name: string; type: string; workflowIds: (string)[] | null; dateCreated: string; dateUpdated: string; dataSources: ({ [key: string]: unknown | undefined })[] | null...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/detectors/` · `updateOrganizationDetectors`</sub>

## `sentry.deleteOrganizationDetector`

Delete a Monitor

```ts
sentry.deleteOrganizationDetector(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/detectors/{detector_id}/` · `deleteOrganizationDetector`</sub>

## `sentry.getOrganizationDetector`

Fetch a Monitor

```ts
sentry.getOrganizationDetector(): Promise<{ owner?: { type: "user" | "team"; id: string; name: string; email?: string } | null; createdBy?: string | null; latestGroup?: { [key: string]: unknown | undefined } | null; description?: string | null; id: string; projectId: string; name: string; type: string; workflowIds: (string)[] | null; dateCreated: string; dateUpdated: string; dataSources: ({ [key: string]: unknown | undefined })[] | null;...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/detectors/{detector_id}/` · `getOrganizationDetector`</sub>

## `sentry.updateOrganizationDetector`

Update a Monitor by ID

```ts
sentry.updateOrganizationDetector(): Promise<{ owner?: { type: "user" | "team"; id: string; name: string; email?: string } | null; createdBy?: string | null; latestGroup?: { [key: string]: unknown | undefined } | null; description?: string | null; id: string; projectId: string; name: string; type: string; workflowIds: (string)[] | null; dateCreated: string; dateUpdated: string; dataSources: ({ [key: string]: unknown | undefined })[] | null;...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/detectors/{detector_id}/` · `updateOrganizationDetector`</sub>

## `sentry.createOrganizationProjectDetector`

Create a Monitor for a Project

```ts
sentry.createOrganizationProjectDetector(): Promise<{ owner?: { type: "user" | "team"; id: string; name: string; email?: string } | null; createdBy?: string | null; latestGroup?: { [key: string]: unknown | undefined } | null; description?: string | null; id: string; projectId: string; name: string; type: string; workflowIds: (string)[] | null; dateCreated: string; dateUpdated: string; dataSources: ({ [key: string]: unknown | undefined })[] | null;...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/projects/{project_id_or_slug}/detectors/` · `createOrganizationProjectDetector`</sub>

## `sentry.deleteOrganizationWorkflows`

Bulk Delete Alerts

```ts
sentry.deleteOrganizationWorkflows(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/workflows/` · `deleteOrganizationWorkflows`</sub>

## `sentry.listOrganizationWorkflows`

Fetch Alerts

```ts
sentry.listOrganizationWorkflows(): Promise<({ id: string; name: string; organizationId: string; createdBy: string | null; dateCreated: string; dateUpdated: string; triggers: { id?: string; organizationId?: string; logicType?: string; conditions?: ({ id: string; type: string; comparison: boolean | number; conditionResult: boolean })[] | (unknown)[]; actions?: ({ id?: string; type?: string; integrationId?: string | null; data?: { [key: stri...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/workflows/` · `listOrganizationWorkflows`</sub>

## `sentry.createOrganizationWorkflow`

Create an Alert for an Organization

```ts
sentry.createOrganizationWorkflow(): Promise<{ id: string; name: string; organizationId: string; createdBy: string | null; dateCreated: string; dateUpdated: string; triggers: { id?: string; organizationId?: string; logicType?: string; conditions?: ({ id: string; type: string; comparison: boolean | number; conditionResult: boolean })[] | (unknown)[]; actions?: ({ id?: string; type?: string; integrationId?: string | null; data?: { [key: strin...>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/workflows/` · `createOrganizationWorkflow`</sub>

## `sentry.updateOrganizationWorkflows`

Mutate an Organization's Alerts

```ts
sentry.updateOrganizationWorkflows(): Promise<({ id: string; name: string; organizationId: string; createdBy: string | null; dateCreated: string; dateUpdated: string; triggers: { id?: string; organizationId?: string; logicType?: string; conditions?: ({ id: string; type: string; comparison: boolean | number; conditionResult: boolean })[] | (unknown)[]; actions?: ({ id?: string; type?: string; integrationId?: string | null; data?: { [key: stri...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/workflows/` · `updateOrganizationWorkflows`</sub>

## `sentry.deleteOrganizationWorkflow`

Delete an Alert

```ts
sentry.deleteOrganizationWorkflow(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/workflows/{workflow_id}/` · `deleteOrganizationWorkflow`</sub>

## `sentry.getOrganizationWorkflow`

Fetch an Alert

```ts
sentry.getOrganizationWorkflow(): Promise<{ id: string; name: string; organizationId: string; createdBy: string | null; dateCreated: string; dateUpdated: string; triggers: { id?: string; organizationId?: string; logicType?: string; conditions?: ({ id: string; type: string; comparison: boolean | number; conditionResult: boolean })[] | (unknown)[]; actions?: ({ id?: string; type?: string; integrationId?: string | null; data?: { [key: strin...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/workflows/{workflow_id}/` · `getOrganizationWorkflow`</sub>

## `sentry.updateOrganizationWorkflow`

Update an Alert by ID

```ts
sentry.updateOrganizationWorkflow(): Promise<{ id: string; name: string; organizationId: string; createdBy: string | null; dateCreated: string; dateUpdated: string; triggers: { id?: string; organizationId?: string; logicType?: string; conditions?: ({ id: string; type: string; comparison: boolean | number; conditionResult: boolean })[] | (unknown)[]; actions?: ({ id?: string; type?: string; integrationId?: string | null; data?: { [key: strin...>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/workflows/{workflow_id}/` · `updateOrganizationWorkflow`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
