# Incidents

92 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listIncidents`

Get a list of incidents — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidents(input: {
  /** Specifies which types of related objects should be included in the response. */
  include?: (IncidentRelatedObject)[];
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
}): Promise<IncidentsResponse>
```

<sub>`GET /api/v2/incidents` · `ListIncidents`</sub>

## `datadog.createIncident`

Create an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncident(input: {
  data: IncidentCreateData;
}): Promise<IncidentResponse>
```

<sub>`POST /api/v2/incidents` · `CreateIncident`</sub>

## `datadog.deleteIncident`

Delete an existing incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncident(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}` · `DeleteIncident`</sub>

## `datadog.getIncident`

Get the details of an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncident(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** Specifies which types of related objects should be included in the response. */
  include?: (IncidentRelatedObject)[];
}): Promise<IncidentResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}` · `GetIncident`</sub>

## `datadog.updateIncident`

Update an existing incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncident(input: {
  data: IncidentUpdateData;
  /** The UUID of the incident. */
  incident_id: string;
  /** Specifies which types of related objects should be included in the response. */
  include?: (IncidentRelatedObject)[];
}): Promise<IncidentResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}` · `UpdateIncident`</sub>

## `datadog.getIncidentAiPostmortem`

Get an AI-generated incident postmortem — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentAiPostmortem(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentAiPostmortemResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/ai/postmortem` · `GetIncidentAIPostmortem`</sub>

## `datadog.listIncidentAttachments`

List incident attachments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentAttachments(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** Filter attachments by type. Supported values are `1` (`postmortem`) and `2` (`link`). */
  "filter[attachment_type]"?: string;
  /** Resource to include in the response. Supported value: `last_modified_by_user`. */
  include?: string;
}): Promise<AttachmentArray>
```

<sub>`GET /api/v2/incidents/{incident_id}/attachments` · `ListIncidentAttachments`</sub>

## `datadog.createIncidentAttachment`

Create incident attachment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentAttachment(input: {
  data?: CreateAttachmentRequestData;
  /** The UUID of the incident. */
  incident_id: string;
  /** Resource to include in the response. Supported value: `last_modified_by_user`. */
  include?: string;
}): Promise<Attachment>
```

<sub>`POST /api/v2/incidents/{incident_id}/attachments` · `CreateIncidentAttachment`</sub>

## `datadog.deleteIncidentAttachment`

Delete incident attachment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentAttachment(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The ID of the attachment. */
  attachment_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/attachments/{attachment_id}` · `DeleteIncidentAttachment`</sub>

## `datadog.updateIncidentAttachment`

Update incident attachment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentAttachment(input: {
  data?: PatchAttachmentRequestData;
  /** The UUID of the incident. */
  incident_id: string;
  /** The ID of the attachment. */
  attachment_id: string;
  /** Resource to include in the response. Supported value: `last_modified_by_user`. */
  include?: string;
}): Promise<Attachment>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/attachments/{attachment_id}` · `UpdateIncidentAttachment`</sub>

## `datadog.createIncidentPostmortemAttachment`

Create postmortem attachment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentPostmortemAttachment(input: {
  data: PostmortemAttachmentRequestData;
  /** The ID of the incident */
  incident_id: string;
}): Promise<Attachment>
```

<sub>`POST /api/v2/incidents/{incident_id}/attachments/postmortems` · `CreateIncidentPostmortemAttachment`</sub>

## `datadog.createPageFromIncident`

Create a page from an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createPageFromIncident(input: {
  data: IncidentCreatePageFromIncidentDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentPageUuidResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/cases/page` · `CreatePageFromIncident`</sub>

## `datadog.updateIncidentConfiguration`

Update an incident configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentConfiguration(input: {
  data: IncidentConfigurationPatchDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentConfigurationResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/configurations` · `UpdateIncidentConfiguration`</sub>

## `datadog.createIncidentConfiguration`

Create an incident configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentConfiguration(input: {
  data: IncidentConfigurationDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentConfigurationResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/configurations` · `CreateIncidentConfiguration`</sub>

## `datadog.listIncidentImpacts`

List an incident's impacts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentImpacts(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** Specifies which related resources should be included in the response. */
  include?: (IncidentImpactRelatedObject)[];
}): Promise<IncidentImpactsResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/impacts` · `ListIncidentImpacts`</sub>

## `datadog.createIncidentImpact`

Create an incident impact — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentImpact(input: {
  data: IncidentImpactCreateData;
  /** The UUID of the incident. */
  incident_id: string;
  /** Specifies which related resources should be included in the response. */
  include?: (IncidentImpactRelatedObject)[];
}): Promise<IncidentImpactResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/impacts` · `CreateIncidentImpact`</sub>

## `datadog.deleteIncidentImpact`

Delete an incident impact — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentImpact(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident impact. */
  impact_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/impacts/{impact_id}` · `DeleteIncidentImpact`</sub>

## `datadog.patchIncidentImpact`

Update an incident impact — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchIncidentImpact(input: {
  data: IncidentImpactPatchData;
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident impact. */
  impact_id: string;
  /** Specifies which related resources should be included in the response. */
  include?: (IncidentImpactRelatedObject)[];
}): Promise<IncidentImpactResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/impacts/{impact_id}` · `PatchIncidentImpact`</sub>

## `datadog.createOnCallPageFromIncident`

Create an on-call page from an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOnCallPageFromIncident(input: {
  data: IncidentCreateOnCallPageDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentPageUuidResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/page` · `CreateOnCallPageFromIncident`</sub>

## `datadog.linkPageToIncident`

Link a page to an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.linkPageToIncident(input: {
  data: IncidentOnCallPageDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentIntegrationMetadataResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/pages/link` · `LinkPageToIncident`</sub>

## `datadog.listIncidentIntegrations`

Get a list of an incident's integration metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentIntegrations(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentIntegrationMetadataListResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/relationships/integrations` · `ListIncidentIntegrations`</sub>

## `datadog.createIncidentIntegration`

Create an incident integration metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentIntegration(input: {
  data: IncidentIntegrationMetadataCreateData;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentIntegrationMetadataResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/relationships/integrations` · `CreateIncidentIntegration`</sub>

## `datadog.deleteIncidentIntegration`

Delete an incident integration metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentIntegration(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident integration metadata. */
  integration_metadata_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}` · `DeleteIncidentIntegration`</sub>

## `datadog.getIncidentIntegration`

Get incident integration metadata details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentIntegration(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident integration metadata. */
  integration_metadata_id: string;
}): Promise<IncidentIntegrationMetadataResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}` · `GetIncidentIntegration`</sub>

## `datadog.updateIncidentIntegration`

Update an existing incident integration metadata — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentIntegration(input: {
  data: IncidentIntegrationMetadataPatchData;
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident integration metadata. */
  integration_metadata_id: string;
}): Promise<IncidentIntegrationMetadataResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/relationships/integrations/{integration_metadata_id}` · `UpdateIncidentIntegration`</sub>

## `datadog.listIncidentTodos`

Get a list of an incident's todos — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentTodos(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentTodoListResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/relationships/todos` · `ListIncidentTodos`</sub>

## `datadog.createIncidentTodo`

Create an incident todo — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentTodo(input: {
  data: IncidentTodoCreateData;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentTodoResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/relationships/todos` · `CreateIncidentTodo`</sub>

## `datadog.deleteIncidentTodo`

Delete an incident todo — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentTodo(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident todo. */
  todo_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/relationships/todos/{todo_id}` · `DeleteIncidentTodo`</sub>

## `datadog.getIncidentTodo`

Get incident todo details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentTodo(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident todo. */
  todo_id: string;
}): Promise<IncidentTodoResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/relationships/todos/{todo_id}` · `GetIncidentTodo`</sub>

## `datadog.updateIncidentTodo`

Update an incident todo — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentTodo(input: {
  data: IncidentTodoPatchData;
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident todo. */
  todo_id: string;
}): Promise<IncidentTodoResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/relationships/todos/{todo_id}` · `UpdateIncidentTodo`</sub>

## `datadog.listIncidentResponders`

List incident responders — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentResponders(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentRespondersResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/responders` · `ListIncidentResponders`</sub>

## `datadog.createIncidentResponder`

Create an incident responder — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentResponder(input: {
  data: IncidentResponderDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentResponderResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/responders` · `CreateIncidentResponder`</sub>

## `datadog.deleteIncidentResponder`

Delete an incident responder — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentResponder(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident responder. */
  responder_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/responders/{responder_id}` · `DeleteIncidentResponder`</sub>

## `datadog.getIncidentResponder`

Get an incident responder — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentResponder(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the incident responder. */
  responder_id: string;
}): Promise<IncidentResponderResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/responders/{responder_id}` · `GetIncidentResponder`</sub>

## `datadog.createIncidentServiceNowRecord`

Create an incident ServiceNow record — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentServiceNowRecord(input: {
  data: IncidentServiceNowRecordDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentIntegrationMetadataResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/servicenow-records` · `CreateIncidentServiceNowRecord`</sub>

## `datadog.listTimestampOverrides`

List incident timestamp overrides — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTimestampOverrides(input: {
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentTimestampOverridesResponse>
```

<sub>`GET /api/v2/incidents/{incident_id}/timestamp-overrides` · `ListTimestampOverrides`</sub>

## `datadog.createTimestampOverride`

Create an incident timestamp override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTimestampOverride(input: {
  data: IncidentTimestampOverrideDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
}): Promise<IncidentTimestampOverrideResponse>
```

<sub>`POST /api/v2/incidents/{incident_id}/timestamp-overrides` · `CreateTimestampOverride`</sub>

## `datadog.deleteTimestampOverride`

Delete an incident timestamp override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTimestampOverride(input: {
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the timestamp override. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/{incident_id}/timestamp-overrides/{id}` · `DeleteTimestampOverride`</sub>

## `datadog.updateTimestampOverride`

Update an incident timestamp override — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTimestampOverride(input: {
  data: IncidentTimestampOverridePatchDataRequest;
  /** The UUID of the incident. */
  incident_id: string;
  /** The UUID of the timestamp override. */
  id: string;
}): Promise<IncidentTimestampOverrideResponse>
```

<sub>`PATCH /api/v2/incidents/{incident_id}/timestamp-overrides/{id}` · `UpdateTimestampOverride`</sub>

## `datadog.deleteGlobalIncidentHandle`

Delete global incident handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGlobalIncidentHandle(): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/global/incident-handles` · `DeleteGlobalIncidentHandle`</sub>

## `datadog.listGlobalIncidentHandles`

List global incident handles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGlobalIncidentHandles(input: {
  /** Comma-separated list of related resources to include in the response */
  include?: string;
}): Promise<IncidentHandlesResponse>
```

<sub>`GET /api/v2/incidents/config/global/incident-handles` · `ListGlobalIncidentHandles`</sub>

## `datadog.createGlobalIncidentHandle`

Create global incident handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createGlobalIncidentHandle(input: {
  data: IncidentHandleDataRequest;
  /** Comma-separated list of related resources to include in the response */
  include?: string;
}): Promise<IncidentHandleResponse>
```

<sub>`POST /api/v2/incidents/config/global/incident-handles` · `CreateGlobalIncidentHandle`</sub>

## `datadog.updateGlobalIncidentHandle`

Update global incident handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGlobalIncidentHandle(input: {
  data: IncidentHandleDataRequest;
  /** Comma-separated list of related resources to include in the response */
  include?: string;
}): Promise<IncidentHandleResponse>
```

<sub>`PUT /api/v2/incidents/config/global/incident-handles` · `UpdateGlobalIncidentHandle`</sub>

## `datadog.getGlobalIncidentSettings`

Get global incident settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGlobalIncidentSettings(): Promise<GlobalIncidentSettingsResponse>
```

<sub>`GET /api/v2/incidents/config/global/settings` · `GetGlobalIncidentSettings`</sub>

## `datadog.updateGlobalIncidentSettings`

Update global incident settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGlobalIncidentSettings(input: {
  data: GlobalIncidentSettingsDataRequest;
}): Promise<GlobalIncidentSettingsResponse>
```

<sub>`PATCH /api/v2/incidents/config/global/settings` · `UpdateGlobalIncidentSettings`</sub>

## `datadog.createIncidentGoogleChatConfiguration`

Create an incident Google Chat configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentGoogleChatConfiguration(input: {
  data: IncidentGoogleChatConfigurationDataRequest;
}): Promise<IncidentGoogleChatConfigurationResponse>
```

<sub>`POST /api/v2/incidents/config/google-chat-configurations` · `CreateIncidentGoogleChatConfiguration`</sub>

## `datadog.updateIncidentGoogleChatConfiguration`

Update an incident Google Chat configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentGoogleChatConfiguration(input: {
  data: IncidentGoogleChatConfigurationPatchDataRequest;
  /** The UUID of the Google Chat configuration. */
  id: string;
}): Promise<IncidentGoogleChatConfigurationResponse>
```

<sub>`PATCH /api/v2/incidents/config/google-chat-configurations/{id}` · `UpdateIncidentGoogleChatConfiguration`</sub>

## `datadog.createIncidentGoogleMeetConfiguration`

Create an incident Google Meet configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentGoogleMeetConfiguration(input: {
  data: IncidentGoogleMeetConfigurationDataRequest;
}): Promise<IncidentGoogleMeetConfigurationResponse>
```

<sub>`POST /api/v2/incidents/config/google-meet-configurations` · `CreateIncidentGoogleMeetConfiguration`</sub>

## `datadog.updateIncidentGoogleMeetConfiguration`

Update an incident Google Meet configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentGoogleMeetConfiguration(input: {
  data: IncidentGoogleMeetConfigurationPatchDataRequest;
  /** The UUID of the Google Meet configuration. */
  id: string;
}): Promise<IncidentGoogleMeetConfigurationResponse>
```

<sub>`PATCH /api/v2/incidents/config/google-meet-configurations/{id}` · `UpdateIncidentGoogleMeetConfiguration`</sub>

## `datadog.listIncidentImpactFields`

List incident impact fields — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentImpactFields(): Promise<IncidentImpactFieldsResponse>
```

<sub>`GET /api/v2/incidents/config/impact-fields` · `ListIncidentImpactFields`</sub>

## `datadog.createIncidentImpactField`

Create an incident impact field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentImpactField(input: {
  data: IncidentImpactFieldDataRequest;
}): Promise<IncidentImpactFieldResponse>
```

<sub>`POST /api/v2/incidents/config/impact-fields` · `CreateIncidentImpactField`</sub>

## `datadog.deleteIncidentImpactField`

Delete an incident impact field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentImpactField(input: {
  /** The UUID of the impact field. */
  field_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/impact-fields/{field_id}` · `DeleteIncidentImpactField`</sub>

## `datadog.updateIncidentImpactField`

Update an incident impact field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentImpactField(input: {
  data: IncidentImpactFieldDataRequest;
  /** The UUID of the impact field. */
  field_id: string;
}): Promise<IncidentImpactFieldResponse>
```

<sub>`PUT /api/v2/incidents/config/impact-fields/{field_id}` · `UpdateIncidentImpactField`</sub>

## `datadog.listIncidentNotificationRules`

List incident notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentNotificationRules(input: {
  /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
  include?: string;
}): Promise<IncidentNotificationRuleArray>
```

<sub>`GET /api/v2/incidents/config/notification-rules` · `ListIncidentNotificationRules`</sub>

## `datadog.createIncidentNotificationRule`

Create an incident notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentNotificationRule(input: {
  data: IncidentNotificationRuleCreateData;
}): Promise<IncidentNotificationRule>
```

<sub>`POST /api/v2/incidents/config/notification-rules` · `CreateIncidentNotificationRule`</sub>

## `datadog.deleteIncidentNotificationRule`

Delete an incident notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentNotificationRule(input: {
  /** The ID of the notification rule. */
  id: string;
  /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
  include?: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/notification-rules/{id}` · `DeleteIncidentNotificationRule`</sub>

## `datadog.getIncidentNotificationRule`

Get an incident notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentNotificationRule(input: {
  /** The ID of the notification rule. */
  id: string;
  /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
  include?: string;
}): Promise<IncidentNotificationRule>
```

<sub>`GET /api/v2/incidents/config/notification-rules/{id}` · `GetIncidentNotificationRule`</sub>

## `datadog.updateIncidentNotificationRule`

Update an incident notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentNotificationRule(input: {
  data: IncidentNotificationRuleUpdateData;
  /** The ID of the notification rule. */
  id: string;
  /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
  include?: string;
}): Promise<IncidentNotificationRule>
```

<sub>`PUT /api/v2/incidents/config/notification-rules/{id}` · `UpdateIncidentNotificationRule`</sub>

## `datadog.listIncidentNotificationTemplates`

List incident notification templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentNotificationTemplates(input: {
  /** Optional incident type ID filter. */
  "filter[incident-type]"?: string;
  /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
  include?: string;
}): Promise<IncidentNotificationTemplateArray>
```

<sub>`GET /api/v2/incidents/config/notification-templates` · `ListIncidentNotificationTemplates`</sub>

## `datadog.createIncidentNotificationTemplate`

Create incident notification template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentNotificationTemplate(input: {
  data: IncidentNotificationTemplateCreateData;
}): Promise<IncidentNotificationTemplate>
```

<sub>`POST /api/v2/incidents/config/notification-templates` · `CreateIncidentNotificationTemplate`</sub>

## `datadog.deleteIncidentNotificationTemplate`

Delete a notification template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentNotificationTemplate(input: {
  /** The ID of the notification template. */
  id: string;
  /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
  include?: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/notification-templates/{id}` · `DeleteIncidentNotificationTemplate`</sub>

## `datadog.getIncidentNotificationTemplate`

Get incident notification template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentNotificationTemplate(input: {
  /** The ID of the notification template. */
  id: string;
  /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
  include?: string;
}): Promise<IncidentNotificationTemplate>
```

<sub>`GET /api/v2/incidents/config/notification-templates/{id}` · `GetIncidentNotificationTemplate`</sub>

## `datadog.updateIncidentNotificationTemplate`

Update incident notification template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentNotificationTemplate(input: {
  data: IncidentNotificationTemplateUpdateData;
  /** The ID of the notification template. */
  id: string;
  /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
  include?: string;
}): Promise<IncidentNotificationTemplate>
```

<sub>`PATCH /api/v2/incidents/config/notification-templates/{id}` · `UpdateIncidentNotificationTemplate`</sub>

## `datadog.listIncidentPostmortemTemplates`

List postmortem templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentPostmortemTemplates(input: {
  /** Filter postmortem templates by the associated incident type ID. */
  "filter[incident-type]"?: string;
  /** The attribute to sort results by. Prefix with `-` for descending order. */
  sort?: string;
}): Promise<PostmortemTemplatesResponse>
```

<sub>`GET /api/v2/incidents/config/postmortem-templates` · `ListIncidentPostmortemTemplates`</sub>

## `datadog.createIncidentPostmortemTemplate`

Create postmortem template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentPostmortemTemplate(input: {
  data: PostmortemTemplateDataRequest;
}): Promise<PostmortemTemplateResponse>
```

<sub>`POST /api/v2/incidents/config/postmortem-templates` · `CreateIncidentPostmortemTemplate`</sub>

## `datadog.deleteIncidentPostmortemTemplate`

Delete postmortem template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentPostmortemTemplate(input: {
  /** The ID of the postmortem template. */
  template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/postmortem-templates/{template_id}` · `DeleteIncidentPostmortemTemplate`</sub>

## `datadog.getIncidentPostmortemTemplate`

Get postmortem template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentPostmortemTemplate(input: {
  /** The ID of the postmortem template. */
  template_id: string;
}): Promise<PostmortemTemplateResponse>
```

<sub>`GET /api/v2/incidents/config/postmortem-templates/{template_id}` · `GetIncidentPostmortemTemplate`</sub>

## `datadog.updateIncidentPostmortemTemplate`

Update postmortem template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentPostmortemTemplate(input: {
  data: PostmortemTemplateDataRequest;
  /** The ID of the postmortem template. */
  template_id: string;
}): Promise<PostmortemTemplateResponse>
```

<sub>`PATCH /api/v2/incidents/config/postmortem-templates/{template_id}` · `UpdateIncidentPostmortemTemplate`</sub>

## `datadog.listIncidentRules`

List incident rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentRules(input: {
  /** Filter rules by task ID. */
  "filter[task_id]"?: string;
  /** Filter rules by trigger. */
  "filter[trigger]"?: string;
  /** Filter rules by incident type UUID. */
  incidentTypeUUID?: string;
}): Promise<IncidentRulesResponse>
```

<sub>`GET /api/v2/incidents/config/rules` · `ListIncidentRules`</sub>

## `datadog.createIncidentRule`

Create an incident rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentRule(input: {
  data: IncidentRuleDataRequest;
}): Promise<IncidentRuleResponse>
```

<sub>`POST /api/v2/incidents/config/rules` · `CreateIncidentRule`</sub>

## `datadog.deleteIncidentRule`

Delete an incident rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentRule(input: {
  /** The UUID of the incident rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/rules/{rule_id}` · `DeleteIncidentRule`</sub>

## `datadog.getIncidentRule`

Get an incident rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentRule(input: {
  /** The UUID of the incident rule. */
  rule_id: string;
}): Promise<IncidentRuleResponse>
```

<sub>`GET /api/v2/incidents/config/rules/{rule_id}` · `GetIncidentRule`</sub>

## `datadog.updateIncidentRule`

Update an incident rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentRule(input: {
  data: IncidentRulePatchDataRequest;
  /** The UUID of the incident rule. */
  rule_id: string;
}): Promise<IncidentRuleResponse>
```

<sub>`PATCH /api/v2/incidents/config/rules/{rule_id}` · `UpdateIncidentRule`</sub>

## `datadog.listIncidentTypes`

Get a list of incident types — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentTypes(input: {
  /** Include deleted incident types in the response. */
  include_deleted?: boolean;
}): Promise<IncidentTypeListResponse>
```

<sub>`GET /api/v2/incidents/config/types` · `ListIncidentTypes`</sub>

## `datadog.createIncidentType`

Create an incident type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentType(input: {
  data: IncidentTypeCreateData;
}): Promise<IncidentTypeResponse>
```

<sub>`POST /api/v2/incidents/config/types` · `CreateIncidentType`</sub>

## `datadog.deleteIncidentType`

Delete an incident type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentType(input: {
  /** The UUID of the incident type. */
  incident_type_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/types/{incident_type_id}` · `DeleteIncidentType`</sub>

## `datadog.getIncidentType`

Get incident type details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentType(input: {
  /** The UUID of the incident type. */
  incident_type_id: string;
}): Promise<IncidentTypeResponse>
```

<sub>`GET /api/v2/incidents/config/types/{incident_type_id}` · `GetIncidentType`</sub>

## `datadog.updateIncidentType`

Update an incident type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentType(input: {
  data: IncidentTypePatchData;
  /** The UUID of the incident type. */
  incident_type_id: string;
}): Promise<IncidentTypeResponse>
```

<sub>`PATCH /api/v2/incidents/config/types/{incident_type_id}` · `UpdateIncidentType`</sub>

## `datadog.getOrgSettingsByIncidentType`

Get org settings by incident type — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOrgSettingsByIncidentType(input: {
  /** The UUID of the incident type. */
  incident_type_id: string;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentOrgSettingsResponse>
```

<sub>`GET /api/v2/incidents/config/types/{incident_type_id}/org-settings` · `GetOrgSettingsByIncidentType`</sub>

## `datadog.listOrgSettings`

List incident type org settings — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgSettings(input: {
  /** Maximum number of results to return. */
  "page[size]"?: number;
  /** The offset for pagination. */
  "page[offset]"?: number;
  /** Whether to include deleted records. */
  "include-deleted"?: boolean;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentOrgSettingsListResponse>
```

<sub>`GET /api/v2/incidents/config/types/org-settings` · `ListOrgSettings`</sub>

## `datadog.listIncidentUserDefinedFields`

Get a list of incident user-defined fields — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentUserDefinedFields(input: {
  /** The number of results to return per page. Must be between 0 and 1000. */
  "page[size]"?: number;
  /** The page number to retrieve, starting at 0. */
  "page[number]"?: number;
  /** When true, include soft-deleted fields in the response. */
  "include-deleted"?: boolean;
  /** Filter results to fields associated with the given incident type UUID. */
  "filter[incident-type]"?: string;
  /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
  include?: string;
}): Promise<IncidentUserDefinedFieldListResponse>
```

<sub>`GET /api/v2/incidents/config/user-defined-fields` · `ListIncidentUserDefinedFields`</sub>

## `datadog.createIncidentUserDefinedField`

Create an incident user-defined field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentUserDefinedField(input: {
  data: IncidentUserDefinedFieldCreateData;
  /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
  include?: string;
}): Promise<IncidentUserDefinedFieldResponse>
```

<sub>`POST /api/v2/incidents/config/user-defined-fields` · `CreateIncidentUserDefinedField`</sub>

## `datadog.deleteIncidentUserDefinedField`

Delete an incident user-defined field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentUserDefinedField(input: {
  /** The ID of the incident user-defined field. */
  field_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/user-defined-fields/{field_id}` · `DeleteIncidentUserDefinedField`</sub>

## `datadog.getIncidentUserDefinedField`

Get an incident user-defined field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentUserDefinedField(input: {
  /** The ID of the incident user-defined field. */
  field_id: string;
  /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
  include?: string;
}): Promise<IncidentUserDefinedFieldResponse>
```

<sub>`GET /api/v2/incidents/config/user-defined-fields/{field_id}` · `GetIncidentUserDefinedField`</sub>

## `datadog.updateIncidentUserDefinedField`

Update an incident user-defined field — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentUserDefinedField(input: {
  data: IncidentUserDefinedFieldUpdateData;
  /** The ID of the incident user-defined field. */
  field_id: string;
  /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
  include?: string;
}): Promise<IncidentUserDefinedFieldResponse>
```

<sub>`PATCH /api/v2/incidents/config/user-defined-fields/{field_id}` · `UpdateIncidentUserDefinedField`</sub>

## `datadog.listIncidentUserDefinedRoles`

List incident user-defined roles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listIncidentUserDefinedRoles(input: {
  /** Filter roles by incident type UUID. */
  "filter[incident-type]"?: string;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentUserDefinedRolesResponse>
```

<sub>`GET /api/v2/incidents/config/user-defined-roles` · `ListIncidentUserDefinedRoles`</sub>

## `datadog.createIncidentUserDefinedRole`

Create an incident user-defined role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createIncidentUserDefinedRole(input: {
  data: IncidentUserDefinedRoleDataRequest;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentUserDefinedRoleResponse>
```

<sub>`POST /api/v2/incidents/config/user-defined-roles` · `CreateIncidentUserDefinedRole`</sub>

## `datadog.deleteIncidentUserDefinedRole`

Delete an incident user-defined role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteIncidentUserDefinedRole(input: {
  /** The UUID of the incident user-defined role. */
  role_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/incidents/config/user-defined-roles/{role_id}` · `DeleteIncidentUserDefinedRole`</sub>

## `datadog.getIncidentUserDefinedRole`

Get an incident user-defined role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getIncidentUserDefinedRole(input: {
  /** The UUID of the incident user-defined role. */
  role_id: string;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentUserDefinedRoleResponse>
```

<sub>`GET /api/v2/incidents/config/user-defined-roles/{role_id}` · `GetIncidentUserDefinedRole`</sub>

## `datadog.updateIncidentUserDefinedRole`

Update an incident user-defined role — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateIncidentUserDefinedRole(input: {
  data: IncidentUserDefinedRolePatchDataRequest;
  /** The UUID of the incident user-defined role. */
  role_id: string;
  /** Comma-separated list of related resources to include in the response. */
  include?: string;
}): Promise<IncidentUserDefinedRoleResponse>
```

<sub>`PATCH /api/v2/incidents/config/user-defined-roles/{role_id}` · `UpdateIncidentUserDefinedRole`</sub>

## `datadog.importIncident`

Import an incident — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.importIncident(input: {
  data: IncidentImportRequestData;
  /** Specifies which related object types to include in the response when importing an incident. */
  include?: (IncidentImportRelatedObject)[];
}): Promise<IncidentImportResponse>
```

<sub>`POST /api/v2/incidents/import` · `ImportIncident`</sub>

## `datadog.searchIncidents`

Search for incidents — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchIncidents(input: {
  include?: IncidentRelatedObject;
  /** Specifies which incidents should be returned. The query can contain any number of incident facets joined by `ANDs`, along with multiple values for each of those facets joined by `OR`s. For example: `state:active AND severity:(SEV-2 OR SEV-1)`. */
  query: string;
  sort?: IncidentSearchSortOrder;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
}): Promise<IncidentSearchResponse>
```

<sub>`GET /api/v2/incidents/search` · `SearchIncidents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
