# Salesforce Integration

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getIncidentTemplates`

Get all Salesforce incident templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentTemplates(): Promise<SalesforceIncidentsTemplatesResponse>
```

<sub>`GET /api/v2/integration/salesforce-incidents/incident-templates` · `GetIncidentTemplates`</sub>

## `datadog.createIncidentTemplate`

Create a Salesforce incident template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentTemplate(input: {
  data: SalesforceIncidentsTemplateCreateData;
}): Promise<SalesforceIncidentsTemplateResponse>
```

<sub>`POST /api/v2/integration/salesforce-incidents/incident-templates` · `CreateIncidentTemplate`</sub>

## `datadog.deleteIncidentTemplate`

Delete a Salesforce incident template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentTemplate(input: {
  /** The ID of the Salesforce incident template. */
  incident_template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/salesforce-incidents/incident-templates/{incident_template_id}` · `DeleteIncidentTemplate`</sub>

## `datadog.updateIncidentTemplate`

Update a Salesforce incident template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentTemplate(input: {
  data: SalesforceIncidentsTemplateUpdateData;
  /** The ID of the Salesforce incident template. */
  incident_template_id: string;
}): Promise<SalesforceIncidentsTemplateResponse>
```

<sub>`PATCH /api/v2/integration/salesforce-incidents/incident-templates/{incident_template_id}` · `UpdateIncidentTemplate`</sub>

## `datadog.getSalesforceOrganizations`

Get all connected Salesforce organizations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSalesforceOrganizations(): Promise<SalesforceIncidentsOrganizationsResponse>
```

<sub>`GET /api/v2/integration/salesforce-incidents/organizations` · `GetSalesforceOrganizations`</sub>

## `datadog.deleteSalesforceOrganization`

Delete a connected Salesforce organization — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSalesforceOrganization(input: {
  /** The Datadog-assigned ID of the connected Salesforce organization. */
  salesforce_org_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/salesforce-incidents/organizations/{salesforce_org_id}` · `DeleteSalesforceOrganization`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
