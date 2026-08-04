# Monitors

17 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getMonitorNotificationRules`

Get all monitor notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMonitorNotificationRules(input: {
  /** The page to start paginating from. If `page` is not specified, the argument defaults to the first page. */
  page?: number;
  /** The number of rules to return per page. If `per_page` is not specified, the argument defaults to 100. */
  per_page?: number;
  /** String for sort order, composed of field and sort order separated by a colon, for example `name:asc`. Supported sort directions: `asc`, `desc`. Supported fields: `name`, `created_at`. */
  sort?: string;
  /** JSON-encoded filter object. Supported keys: * `text`: Free-text query matched against rule name, tags, and recipients. * `tags`: Array of strings. Return rules that have any of these tags. * `recipients`: Array of strings. Return rules that have any of these recipients. */
  filters?: string;
  /** Comma-separated list of resource paths for related resources to include in the response. Supported resource path is `created_by`. */
  include?: string;
}): Promise<MonitorNotificationRuleListResponse>
```

<sub>`GET /api/v2/monitor/notification_rule` · `GetMonitorNotificationRules`</sub>

## `datadog.createMonitorNotificationRule`

Create a monitor notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createMonitorNotificationRule(input: {
  data: MonitorNotificationRuleCreateRequestData;
}): Promise<MonitorNotificationRuleResponse>
```

<sub>`POST /api/v2/monitor/notification_rule` · `CreateMonitorNotificationRule`</sub>

## `datadog.deleteMonitorNotificationRule`

Delete a monitor notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteMonitorNotificationRule(input: {
  /** ID of the monitor notification rule to delete. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/monitor/notification_rule/{rule_id}` · `DeleteMonitorNotificationRule`</sub>

## `datadog.getMonitorNotificationRule`

Get a monitor notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMonitorNotificationRule(input: {
  /** ID of the monitor notification rule to fetch. */
  rule_id: string;
  /** Comma-separated list of resource paths for related resources to include in the response. Supported resource path is `created_by`. */
  include?: string;
}): Promise<MonitorNotificationRuleResponse>
```

<sub>`GET /api/v2/monitor/notification_rule/{rule_id}` · `GetMonitorNotificationRule`</sub>

## `datadog.updateMonitorNotificationRule`

Update a monitor notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateMonitorNotificationRule(input: {
  data: MonitorNotificationRuleUpdateRequestData;
  /** ID of the monitor notification rule to update. */
  rule_id: string;
}): Promise<MonitorNotificationRuleResponse>
```

<sub>`PATCH /api/v2/monitor/notification_rule/{rule_id}` · `UpdateMonitorNotificationRule`</sub>

## `datadog.listMonitorConfigPolicies`

Get all monitor configuration policies — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMonitorConfigPolicies(): Promise<MonitorConfigPolicyListResponse>
```

<sub>`GET /api/v2/monitor/policy` · `ListMonitorConfigPolicies`</sub>

## `datadog.createMonitorConfigPolicy`

Create a monitor configuration policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createMonitorConfigPolicy(input: {
  data: MonitorConfigPolicyCreateData;
}): Promise<MonitorConfigPolicyResponse>
```

<sub>`POST /api/v2/monitor/policy` · `CreateMonitorConfigPolicy`</sub>

## `datadog.deleteMonitorConfigPolicy`

Delete a monitor configuration policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteMonitorConfigPolicy(input: {
  /** ID of the monitor configuration policy. */
  policy_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/monitor/policy/{policy_id}` · `DeleteMonitorConfigPolicy`</sub>

## `datadog.getMonitorConfigPolicy`

Get a monitor configuration policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMonitorConfigPolicy(input: {
  /** ID of the monitor configuration policy. */
  policy_id: string;
}): Promise<MonitorConfigPolicyResponse>
```

<sub>`GET /api/v2/monitor/policy/{policy_id}` · `GetMonitorConfigPolicy`</sub>

## `datadog.updateMonitorConfigPolicy`

Edit a monitor configuration policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateMonitorConfigPolicy(input: {
  data: MonitorConfigPolicyEditData;
  /** ID of the monitor configuration policy. */
  policy_id: string;
}): Promise<MonitorConfigPolicyResponse>
```

<sub>`PATCH /api/v2/monitor/policy/{policy_id}` · `UpdateMonitorConfigPolicy`</sub>

## `datadog.listMonitorUserTemplates`

Get all monitor user templates — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMonitorUserTemplates(): Promise<MonitorUserTemplateListResponse>
```

<sub>`GET /api/v2/monitor/template` · `ListMonitorUserTemplates`</sub>

## `datadog.createMonitorUserTemplate`

Create a monitor user template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createMonitorUserTemplate(input: {
  data: MonitorUserTemplateCreateData;
}): Promise<MonitorUserTemplateCreateResponse>
```

<sub>`POST /api/v2/monitor/template` · `CreateMonitorUserTemplate`</sub>

## `datadog.deleteMonitorUserTemplate`

Delete a monitor user template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteMonitorUserTemplate(input: {
  /** ID of the monitor user template. */
  template_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/monitor/template/{template_id}` · `DeleteMonitorUserTemplate`</sub>

## `datadog.getMonitorUserTemplate`

Get a monitor user template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMonitorUserTemplate(input: {
  /** ID of the monitor user template. */
  template_id: string;
  /** Whether to include all versions of the template in the response in the versions field. */
  with_all_versions?: boolean;
}): Promise<MonitorUserTemplateResponse>
```

<sub>`GET /api/v2/monitor/template/{template_id}` · `GetMonitorUserTemplate`</sub>

## `datadog.updateMonitorUserTemplate`

Update a monitor user template to a new version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateMonitorUserTemplate(input: {
  data: MonitorUserTemplateUpdateData;
  /** ID of the monitor user template. */
  template_id: string;
}): Promise<MonitorUserTemplateResponse>
```

<sub>`PUT /api/v2/monitor/template/{template_id}` · `UpdateMonitorUserTemplate`</sub>

## `datadog.validateExistingMonitorUserTemplate`

Validate an existing monitor user template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateExistingMonitorUserTemplate(input: {
  data: MonitorUserTemplateUpdateData;
  /** ID of the monitor user template. */
  template_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/monitor/template/{template_id}/validate` · `ValidateExistingMonitorUserTemplate`</sub>

## `datadog.validateMonitorUserTemplate`

Validate a monitor user template — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateMonitorUserTemplate(input: {
  data: MonitorUserTemplateCreateData;
}): Promise<undefined>
```

<sub>`POST /api/v2/monitor/template/validate` · `ValidateMonitorUserTemplate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
