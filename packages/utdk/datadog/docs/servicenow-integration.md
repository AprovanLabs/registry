# ServiceNow Integration

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listServiceNowAssignmentGroups`

List ServiceNow assignment groups — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceNowAssignmentGroups(input: {
  /** The ID of the ServiceNow instance */
  instance_id: string;
}): Promise<ServiceNowAssignmentGroupsResponse>
```

<sub>`GET /api/v2/integration/servicenow/assignment_groups/{instance_id}` · `ListServiceNowAssignmentGroups`</sub>

## `datadog.listServiceNowBusinessServices`

List ServiceNow business services — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceNowBusinessServices(input: {
  /** The ID of the ServiceNow instance */
  instance_id: string;
}): Promise<ServiceNowBusinessServicesResponse>
```

<sub>`GET /api/v2/integration/servicenow/business_services/{instance_id}` · `ListServiceNowBusinessServices`</sub>

## `datadog.listServiceNowTemplates`

List ServiceNow templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceNowTemplates(): Promise<ServiceNowTemplatesResponse>
```

<sub>`GET /api/v2/integration/servicenow/handles` · `ListServiceNowTemplates`</sub>

## `datadog.createServiceNowTemplate`

Create ServiceNow template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createServiceNowTemplate(input: {
  data: ServiceNowTemplateCreateRequestData;
}): Promise<ServiceNowTemplateResponse>
```

<sub>`POST /api/v2/integration/servicenow/handles` · `CreateServiceNowTemplate`</sub>

## `datadog.deleteServiceNowTemplate`

Delete ServiceNow template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteServiceNowTemplate(input: {
  /** The ID of the ServiceNow template to delete */
  template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/servicenow/handles/{template_id}` · `DeleteServiceNowTemplate`</sub>

## `datadog.getServiceNowTemplate`

Get ServiceNow template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceNowTemplate(input: {
  /** The ID of the ServiceNow template to retrieve */
  template_id: string;
}): Promise<ServiceNowTemplateResponse>
```

<sub>`GET /api/v2/integration/servicenow/handles/{template_id}` · `GetServiceNowTemplate`</sub>

## `datadog.updateServiceNowTemplate`

Update ServiceNow template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateServiceNowTemplate(input: {
  data: ServiceNowTemplateUpdateRequestData;
  /** The ID of the ServiceNow template to update */
  template_id: string;
}): Promise<ServiceNowTemplateResponse>
```

<sub>`PUT /api/v2/integration/servicenow/handles/{template_id}` · `UpdateServiceNowTemplate`</sub>

## `datadog.listServiceNowInstances`

List ServiceNow instances — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceNowInstances(): Promise<ServiceNowInstancesResponse>
```

<sub>`GET /api/v2/integration/servicenow/instances` · `ListServiceNowInstances`</sub>

## `datadog.listServiceNowUsers`

List ServiceNow users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceNowUsers(input: {
  /** The ID of the ServiceNow instance */
  instance_id: string;
}): Promise<ServiceNowUsersResponse>
```

<sub>`GET /api/v2/integration/servicenow/users/{instance_id}` · `ListServiceNowUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
