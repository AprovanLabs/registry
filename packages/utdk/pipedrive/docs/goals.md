# Goals

5 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.addGoal`

Add a new goal

```ts
pipedrive.addGoal(input: {
  /** The title of the goal */
  title?: string;
  /** Who this goal is assigned to. It requires the following JSON structure: `{ "id": "1", "type": "person" }`. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team. */
  assignee: { [key: string]: unknown };
  /** The type of the goal. It requires the following JSON structure: `{ "name": "deals_started", "params": { "pipeline_id": [1, 2], "activity_type_id": [9] } }`. Type can be one of: `deals_won`, `deals_progressed`, `activities_completed`, `activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. The `pipeline_id` and `activity_type_id` need to be given as an array of integers. To track the goal in all pipelines, set `pipeline_id` as `null` and similarly, to track the goal for all activities, set `activity_type_id` as `null`.” */
  type: { [key: string]: unknown };
  /** The expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: `{ "target": "50", "tracking_metric": "quantity" }` or `{ "target": "50", "tracking_metric": "sum", "currency_id": 1 }`. `currency_id` should only be added to `sum` type of goals. */
  expected_outcome: { [key: string]: unknown };
  /** The date when the goal starts and ends. It requires the following JSON structure: `{ "start": "2019-01-01", "end": "2022-12-31" }`. Date in format of YYYY-MM-DD. "end" can be set to `null` for an infinite, open-ended goal. */
  duration: { [key: string]: unknown };
  /** The interval of the goal */
  interval: "weekly" | "monthly" | "quarterly" | "yearly";
}): Promise<{ success?: boolean; data?: { goal?: { id?: string; owner_id?: number; title?: string; type?: { name?: string; params?: { pipeline_id?: (number)[]; activity_type_id?: (number)[] } }; assignee?: { id?: number; type?: string }; interval?: string; duration?: { start?: string; end?: string }; expected_outcome?: { target?: number; tracking_metric?: string }; is_active?: boolean; report_ids?: (string)[...>
```

<sub>`POST /goals` · `addGoal`</sub>

## `pipedrive.deleteGoal`

Delete existing goal

```ts
pipedrive.deleteGoal(input: {
  /** The ID of the goal */
  id: string;
}): Promise<{ success?: boolean }>
```

<sub>`DELETE /goals/{id}` · `deleteGoal`</sub>

## `pipedrive.updateGoal`

Update existing goal

```ts
pipedrive.updateGoal(input: {
  /** The title of the goal */
  title?: string;
  /** Who this goal is assigned to. It requires the following JSON structure: `{ "id": "1", "type": "person" }`. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team. */
  assignee?: { [key: string]: unknown };
  /** The type of the goal. It requires the following JSON structure: `{ "name": "deals_started", "params": { "pipeline_id": [1, 2], "activity_type_id": [9] } }`. Type can be one of: `deals_won`, `deals_progressed`, `activities_completed`, `activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. The `pipeline_id` and `activity_type_id` need to be given as an array of integers. To track the goal in all pipelines, set `pipeline_id` as `null` and similarly, to track the goal for all activities, set `activity_type_id` as `null`.” */
  type?: { [key: string]: unknown };
  /** The expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: `{ "target": "50", "tracking_metric": "quantity" }` or `{ "target": "50", "tracking_metric": "sum", "currency_id": 1 }`. `currency_id` should only be added to `sum` type of goals. */
  expected_outcome?: { [key: string]: unknown };
  /** The date when the goal starts and ends. It requires the following JSON structure: `{ "start": "2019-01-01", "end": "2022-12-31" }`. Date in format of YYYY-MM-DD. "end" can be set to `null` for an infinite, open-ended goal. */
  duration?: { [key: string]: unknown };
  /** The interval of the goal */
  interval?: "weekly" | "monthly" | "quarterly" | "yearly";
  /** The ID of the goal */
  id: string;
}): Promise<{ success?: boolean; data?: { goal?: { id?: string; owner_id?: number; title?: string; type?: { name?: string; params?: { pipeline_id?: (number)[]; activity_type_id?: (number)[] } }; assignee?: { id?: number; type?: string }; interval?: string; duration?: { start?: string; end?: string }; expected_outcome?: { target?: number; tracking_metric?: string }; is_active?: boolean; report_ids?: (string)[...>
```

<sub>`PUT /goals/{id}` · `updateGoal`</sub>

## `pipedrive.getGoalResult`

Get result of a goal

```ts
pipedrive.getGoalResult(input: {
  /** The ID of the goal that the results are looked for */
  id: string;
  /** The start date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date.  */
  "period.start": string;
  /** The end date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date.  */
  "period.end": string;
}): Promise<{ success?: boolean; data?: { progress?: number; goal?: { id?: string; owner_id?: number; title?: string; type?: { name?: string; params?: { pipeline_id?: (number)[]; activity_type_id?: (number)[] } }; assignee?: { id?: number; type?: string }; interval?: string; duration?: { start?: string; end?: string }; expected_outcome?: { target?: number; tracking_metric?: string }; is_active?: boolean; rep...>
```

<sub>`GET /goals/{id}/results` · `getGoalResult`</sub>

## `pipedrive.getGoals`

Find goals

```ts
pipedrive.getGoals(input: {
  /** The type of the goal. If provided, everyone's goals will be returned. */
  "type.name"?: "deals_won" | "deals_progressed" | "activities_completed" | "activities_added" | "deals_started";
  /** The title of the goal */
  title?: string;
  /** Whether the goal is active or not */
  is_active?: boolean;
  /** The ID of the user who's goal to fetch. When omitted, only your goals will be returned. */
  "assignee.id"?: number;
  /** The type of the goal's assignee. If provided, everyone's goals will be returned. */
  "assignee.type"?: "person" | "company" | "team";
  /** The numeric value of the outcome. If provided, everyone's goals will be returned. */
  "expected_outcome.target"?: number;
  /** The tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned. */
  "expected_outcome.tracking_metric"?: "quantity" | "sum";
  /** The numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned. */
  "expected_outcome.currency_id"?: number;
  /** An array of pipeline IDs or `null` for all pipelines. If provided, everyone's goals will be returned. */
  "type.params.pipeline_id"?: (number)[];
  /** The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned. */
  "type.params.stage_id"?: number;
  /** An array of IDs or `null` for all activity types. Only applicable for `activities_completed` and/or `activities_added` types of goals. If provided, everyone's goals will be returned. */
  "type.params.activity_type_id"?: (number)[];
  /** The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too. */
  "period.start"?: string;
  /** The end date of the period for which to find goals. Date in format of YYYY-MM-DD. */
  "period.end"?: string;
}): Promise<{ success?: boolean; data?: { goals?: ({ id?: string; owner_id?: number; title?: string; type?: { name?: string; params?: { pipeline_id?: (number)[]; activity_type_id?: (number)[] } }; assignee?: { id?: number; type?: string }; interval?: string; duration?: { start?: string; end?: string }; expected_outcome?: { target?: number; tracking_metric?: string }; is_active?: boolean; report_ids?: (string...>
```

<sub>`GET /goals/find` · `getGoals`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
