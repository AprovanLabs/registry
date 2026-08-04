# On Call

22 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createOnCallEscalationPolicy`

Create On-Call escalation policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOnCallEscalationPolicy(input: {
  data: EscalationPolicyCreateRequestData;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
  include?: string;
}): Promise<EscalationPolicy>
```

<sub>`POST /api/v2/on-call/escalation-policies` · `CreateOnCallEscalationPolicy`</sub>

## `datadog.deleteOnCallEscalationPolicy`

Delete On-Call escalation policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOnCallEscalationPolicy(input: {
  /** The ID of the escalation policy */
  policy_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/on-call/escalation-policies/{policy_id}` · `DeleteOnCallEscalationPolicy`</sub>

## `datadog.getOnCallEscalationPolicy`

Get On-Call escalation policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOnCallEscalationPolicy(input: {
  /** The ID of the escalation policy */
  policy_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
  include?: string;
}): Promise<EscalationPolicy>
```

<sub>`GET /api/v2/on-call/escalation-policies/{policy_id}` · `GetOnCallEscalationPolicy`</sub>

## `datadog.updateOnCallEscalationPolicy`

Update On-Call escalation policy — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOnCallEscalationPolicy(input: {
  data: EscalationPolicyUpdateRequestData;
  /** The ID of the escalation policy */
  policy_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
  include?: string;
}): Promise<EscalationPolicy>
```

<sub>`PUT /api/v2/on-call/escalation-policies/{policy_id}` · `UpdateOnCallEscalationPolicy`</sub>

## `datadog.createOnCallSchedule`

Create On-Call schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOnCallSchedule(input: {
  data: ScheduleCreateRequestData;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
  include?: string;
}): Promise<Schedule>
```

<sub>`POST /api/v2/on-call/schedules` · `CreateOnCallSchedule`</sub>

## `datadog.deleteOnCallSchedule`

Delete On-Call schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOnCallSchedule(input: {
  /** The ID of the schedule */
  schedule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/on-call/schedules/{schedule_id}` · `DeleteOnCallSchedule`</sub>

## `datadog.getOnCallSchedule`

Get On-Call schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOnCallSchedule(input: {
  /** The ID of the schedule */
  schedule_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
  include?: string;
}): Promise<Schedule>
```

<sub>`GET /api/v2/on-call/schedules/{schedule_id}` · `GetOnCallSchedule`</sub>

## `datadog.updateOnCallSchedule`

Update On-Call schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOnCallSchedule(input: {
  data: ScheduleUpdateRequestData;
  /** The ID of the schedule */
  schedule_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
  include?: string;
}): Promise<Schedule>
```

<sub>`PUT /api/v2/on-call/schedules/{schedule_id}` · `UpdateOnCallSchedule`</sub>

## `datadog.getScheduleOnCallUser`

Get scheduled on-call user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getScheduleOnCallUser(input: {
  /** The ID of the schedule. */
  schedule_id: string;
  /** Specifies related resources to include in the response as a comma-separated list. Allowed value: `user`. */
  include?: string;
  /** Retrieves the on-call user at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted. */
  "filter[at_ts]"?: string;
}): Promise<Shift>
```

<sub>`GET /api/v2/on-call/schedules/{schedule_id}/on-call` · `GetScheduleOnCallUser`</sub>

## `datadog.getScheduleOnCallResponders`

Get on-call responders for a schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getScheduleOnCallResponders(input: {
  /** The ID of the schedule. */
  schedule_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `schedule`, `responders`, `responders.shifts`, `responders.shifts.user`. */
  include?: string;
  /** Comma-separated list of positions to retrieve. Allowed values: `previous`, `current`, `next`. Defaults to `current` if omitted. */
  "filter[position]"?: string;
  /** Retrieves the on-call responders at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted. */
  "filter[at_ts]"?: string;
}): Promise<ScheduleOnCallResponders>
```

<sub>`GET /api/v2/on-call/schedules/{schedule_id}/responders` · `GetScheduleOnCallResponders`</sub>

## `datadog.getTeamOnCallUsers`

Get team on-call users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamOnCallUsers(input: {
  /** The team ID */
  team_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `responders`, `escalations`, `escalations.responders`. */
  include?: string;
}): Promise<TeamOnCallResponders>
```

<sub>`GET /api/v2/on-call/teams/{team_id}/on-call` · `GetTeamOnCallUsers`</sub>

## `datadog.getOnCallTeamRoutingRules`

Get On-Call team routing rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOnCallTeamRoutingRules(input: {
  /** The team ID */
  team_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`. */
  include?: string;
}): Promise<TeamRoutingRules>
```

<sub>`GET /api/v2/on-call/teams/{team_id}/routing-rules` · `GetOnCallTeamRoutingRules`</sub>

## `datadog.setOnCallTeamRoutingRules`

Set On-Call team routing rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.setOnCallTeamRoutingRules(input: {
  data?: TeamRoutingRulesRequestData;
  /** The team ID */
  team_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`. */
  include?: string;
}): Promise<TeamRoutingRules>
```

<sub>`PUT /api/v2/on-call/teams/{team_id}/routing-rules` · `SetOnCallTeamRoutingRules`</sub>

## `datadog.listUserNotificationChannels`

List On-Call notification channels for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserNotificationChannels(input: {
  /** The user ID */
  user_id: string;
}): Promise<ListNotificationChannelsResponse>
```

<sub>`GET /api/v2/on-call/users/{user_id}/notification-channels` · `ListUserNotificationChannels`</sub>

## `datadog.createUserNotificationChannel`

Create an On-Call notification channel for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createUserNotificationChannel(input: {
  data: CreateNotificationChannelData;
  /** The user ID */
  user_id: string;
}): Promise<NotificationChannel>
```

<sub>`POST /api/v2/on-call/users/{user_id}/notification-channels` · `CreateUserNotificationChannel`</sub>

## `datadog.deleteUserNotificationChannel`

Delete an On-Call notification channel for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteUserNotificationChannel(input: {
  /** The user ID */
  user_id: string;
  /** The channel ID */
  channel_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/on-call/users/{user_id}/notification-channels/{channel_id}` · `DeleteUserNotificationChannel`</sub>

## `datadog.getUserNotificationChannel`

Get an On-Call notification channel for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserNotificationChannel(input: {
  /** The user ID */
  user_id: string;
  /** The channel ID */
  channel_id: string;
}): Promise<NotificationChannel>
```

<sub>`GET /api/v2/on-call/users/{user_id}/notification-channels/{channel_id}` · `GetUserNotificationChannel`</sub>

## `datadog.listUserNotificationRules`

List On-Call notification rules for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserNotificationRules(input: {
  /** The user ID */
  user_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
  include?: string;
}): Promise<ListOnCallNotificationRulesResponse>
```

<sub>`GET /api/v2/on-call/users/{user_id}/notification-rules` · `ListUserNotificationRules`</sub>

## `datadog.createUserNotificationRule`

Create an On-Call notification rule for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createUserNotificationRule(input: {
  data: CreateOnCallNotificationRuleRequestData;
  /** The user ID */
  user_id: string;
}): Promise<OnCallNotificationRule>
```

<sub>`POST /api/v2/on-call/users/{user_id}/notification-rules` · `CreateUserNotificationRule`</sub>

## `datadog.deleteUserNotificationRule`

Delete an On-Call notification rule for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteUserNotificationRule(input: {
  /** The user ID */
  user_id: string;
  /** The rule ID */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/on-call/users/{user_id}/notification-rules/{rule_id}` · `DeleteUserNotificationRule`</sub>

## `datadog.getUserNotificationRule`

Get an On-Call notification rule for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserNotificationRule(input: {
  /** The user ID */
  user_id: string;
  /** The rule ID */
  rule_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
  include?: string;
}): Promise<OnCallNotificationRule>
```

<sub>`GET /api/v2/on-call/users/{user_id}/notification-rules/{rule_id}` · `GetUserNotificationRule`</sub>

## `datadog.updateUserNotificationRule`

Update an On-Call notification rule for a user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateUserNotificationRule(input: {
  data: UpdateOnCallNotificationRuleRequestData;
  /** The user ID */
  user_id: string;
  /** The rule ID */
  rule_id: string;
  /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
  include?: string;
}): Promise<OnCallNotificationRule>
```

<sub>`PUT /api/v2/on-call/users/{user_id}/notification-rules/{rule_id}` · `UpdateUserNotificationRule`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
