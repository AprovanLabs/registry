# Restriction Policies

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteRestrictionPolicy`

Delete a restriction policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRestrictionPolicy(input: {
  /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`, `status-page`, `feature-flag`. */
  resource_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/restriction_policy/{resource_id}` · `DeleteRestrictionPolicy`</sub>

## `datadog.getRestrictionPolicy`

Get a restriction policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRestrictionPolicy(input: {
  /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`, `status-page`, `feature-flag`. */
  resource_id: string;
}): Promise<RestrictionPolicyResponse>
```

<sub>`GET /api/v2/restriction_policy/{resource_id}` · `GetRestrictionPolicy`</sub>

## `datadog.updateRestrictionPolicy`

Update a restriction policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRestrictionPolicy(input: {
  data: RestrictionPolicy;
  /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`, `status-page`, `feature-flag`. */
  resource_id: string;
  /** Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out. */
  allow_self_lockout?: boolean;
}): Promise<RestrictionPolicyResponse>
```

<sub>`POST /api/v2/restriction_policy/{resource_id}` · `UpdateRestrictionPolicy`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
