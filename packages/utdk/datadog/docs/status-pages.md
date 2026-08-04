# Status Pages

25 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listStatusPages`

List status pages — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listStatusPages(input: {
  /** Offset to use as the start of the page. */
  "page[offset]"?: number;
  /** The number of status pages to return per page. */
  "page[limit]"?: number;
  /** Filter status pages by exact domain prefix match. Returns at most one result. */
  "filter[domain_prefix]"?: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
  include?: string;
}): Promise<StatusPageArray>
```

<sub>`GET /api/v2/statuspages` · `ListStatusPages`</sub>

## `datadog.createStatusPage`

Create status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createStatusPage(input: {
  data?: CreateStatusPageRequestData;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
  include?: string;
}): Promise<StatusPage>
```

<sub>`POST /api/v2/statuspages` · `CreateStatusPage`</sub>

## `datadog.deleteStatusPage`

Delete status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteStatusPage(input: {
  /** The ID of the status page. */
  page_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/statuspages/{page_id}` · `DeleteStatusPage`</sub>

## `datadog.getStatusPage`

Get status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getStatusPage(input: {
  /** The ID of the status page. */
  page_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
  include?: string;
}): Promise<StatusPage>
```

<sub>`GET /api/v2/statuspages/{page_id}` · `GetStatusPage`</sub>

## `datadog.updateStatusPage`

Update status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateStatusPage(input: {
  data?: PatchStatusPageRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Whether to delete existing subscribers when updating a status page's type. */
  delete_subscribers?: boolean;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
  include?: string;
}): Promise<StatusPage>
```

<sub>`PATCH /api/v2/statuspages/{page_id}` · `UpdateStatusPage`</sub>

## `datadog.listComponents`

List components — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listComponents(input: {
  /** The ID of the status page. */
  page_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
  include?: string;
}): Promise<StatusPagesComponentArray>
```

<sub>`GET /api/v2/statuspages/{page_id}/components` · `ListComponents`</sub>

## `datadog.createComponent`

Create component — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createComponent(input: {
  data?: CreateComponentRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
  include?: string;
}): Promise<StatusPagesComponent>
```

<sub>`POST /api/v2/statuspages/{page_id}/components` · `CreateComponent`</sub>

## `datadog.deleteComponent`

Delete component — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteComponent(input: {
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the component. */
  component_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/statuspages/{page_id}/components/{component_id}` · `DeleteComponent`</sub>

## `datadog.getComponent`

Get component — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getComponent(input: {
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the component. */
  component_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
  include?: string;
}): Promise<StatusPagesComponent>
```

<sub>`GET /api/v2/statuspages/{page_id}/components/{component_id}` · `GetComponent`</sub>

## `datadog.updateComponent`

Update component — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateComponent(input: {
  data?: PatchComponentRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the component. */
  component_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
  include?: string;
}): Promise<StatusPagesComponent>
```

<sub>`PATCH /api/v2/statuspages/{page_id}/components/{component_id}` · `UpdateComponent`</sub>

## `datadog.createDegradation`

Create degradation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDegradation(input: {
  data?: CreateDegradationRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Whether to notify page subscribers of the degradation. */
  notify_subscribers?: boolean;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Degradation>
```

<sub>`POST /api/v2/statuspages/{page_id}/degradations` · `CreateDegradation`</sub>

## `datadog.deleteDegradation`

Delete degradation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDegradation(input: {
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the degradation. */
  degradation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/statuspages/{page_id}/degradations/{degradation_id}` · `DeleteDegradation`</sub>

## `datadog.getDegradation`

Get degradation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDegradation(input: {
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the degradation. */
  degradation_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Degradation>
```

<sub>`GET /api/v2/statuspages/{page_id}/degradations/{degradation_id}` · `GetDegradation`</sub>

## `datadog.updateDegradation`

Update degradation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDegradation(input: {
  data?: PatchDegradationRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the degradation. */
  degradation_id: string;
  /** Whether to notify page subscribers of the degradation. */
  notify_subscribers?: boolean;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Degradation>
```

<sub>`PATCH /api/v2/statuspages/{page_id}/degradations/{degradation_id}` · `UpdateDegradation`</sub>

## `datadog.softDeleteDegradationUpdate`

Soft delete degradation update — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.softDeleteDegradationUpdate(input: {
  /** The ID of the degradation. */
  degradation_id: string;
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the degradation update. */
  update_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/statuspages/{page_id}/degradations/{degradation_id}/updates/{update_id}` · `SoftDeleteDegradationUpdate`</sub>

## `datadog.editDegradationUpdate`

Edit degradation update — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editDegradationUpdate(input: {
  data?: PatchDegradationUpdateRequestData;
  /** The ID of the degradation. */
  degradation_id: string;
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the degradation update. */
  update_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, degradation, status_page. */
  include?: string;
}): Promise<DegradationUpdate>
```

<sub>`PATCH /api/v2/statuspages/{page_id}/degradations/{degradation_id}/updates/{update_id}` · `EditDegradationUpdate`</sub>

## `datadog.createBackfilledDegradation`

Create backfilled degradation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createBackfilledDegradation(input: {
  data?: CreateBackfilledDegradationRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Degradation>
```

<sub>`POST /api/v2/statuspages/{page_id}/degradations/backfill` · `CreateBackfilledDegradation`</sub>

## `datadog.createMaintenance`

Schedule maintenance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createMaintenance(input: {
  data?: CreateMaintenanceRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Whether to notify page subscribers of the maintenance. */
  notify_subscribers?: boolean;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Maintenance>
```

<sub>`POST /api/v2/statuspages/{page_id}/maintenances` · `CreateMaintenance`</sub>

## `datadog.getMaintenance`

Get maintenance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMaintenance(input: {
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the maintenance. */
  maintenance_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Maintenance>
```

<sub>`GET /api/v2/statuspages/{page_id}/maintenances/{maintenance_id}` · `GetMaintenance`</sub>

## `datadog.updateMaintenance`

Update maintenance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateMaintenance(input: {
  data?: PatchMaintenanceRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** The ID of the maintenance. */
  maintenance_id: string;
  /** Whether to notify page subscribers of the maintenance. */
  notify_subscribers?: boolean;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Maintenance>
```

<sub>`PATCH /api/v2/statuspages/{page_id}/maintenances/{maintenance_id}` · `UpdateMaintenance`</sub>

## `datadog.createBackfilledMaintenance`

Create backfilled maintenance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createBackfilledMaintenance(input: {
  data?: CreateBackfilledMaintenanceRequestData;
  /** The ID of the status page. */
  page_id: string;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
}): Promise<Maintenance>
```

<sub>`POST /api/v2/statuspages/{page_id}/maintenances/backfill` · `CreateBackfilledMaintenance`</sub>

## `datadog.publishStatusPage`

Publish status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.publishStatusPage(input: {
  /** The ID of the status page. */
  page_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/statuspages/{page_id}/publish` · `PublishStatusPage`</sub>

## `datadog.unpublishStatusPage`

Unpublish status page — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unpublishStatusPage(input: {
  /** The ID of the status page. */
  page_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/statuspages/{page_id}/unpublish` · `UnpublishStatusPage`</sub>

## `datadog.listDegradations`

List degradations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDegradations(input: {
  /** Optional page id filter. */
  "filter[page_id]"?: string;
  /** Offset to use as the start of the page. */
  "page[offset]"?: number;
  /** The number of degradations to return per page. */
  "page[limit]"?: number;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
  /** Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved. */
  "filter[status]"?: string;
  /** Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at. */
  sort?: string;
}): Promise<DegradationArray>
```

<sub>`GET /api/v2/statuspages/degradations` · `ListDegradations`</sub>

## `datadog.listMaintenances`

List maintenances — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMaintenances(input: {
  /** Optional page id filter. */
  "filter[page_id]"?: string;
  /** Offset to use as the start of the page. */
  "page[offset]"?: number;
  /** The number of maintenances to return per page. */
  "page[limit]"?: number;
  /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
  include?: string;
  /** Optional maintenance status filter. Supported values: scheduled, in_progress, completed. */
  "filter[status]"?: string;
  /** Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date. */
  sort?: string;
}): Promise<MaintenanceArray>
```

<sub>`GET /api/v2/statuspages/maintenances` · `ListMaintenances`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
