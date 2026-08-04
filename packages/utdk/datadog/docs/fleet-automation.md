# Fleet Automation

16 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listFleetAgentTracers`

List tracers for a specific agent — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetAgentTracers(input: {
  /** The unique identifier (agent key) for the Datadog Agent. */
  agent_key: string;
  /** Page number for pagination (starts at 0). */
  page_number?: number;
  /** Number of results per page (must be greater than 0 and less than or equal to 100). */
  page_size?: number;
  /** Attribute to sort by. */
  sort_attribute?: string;
  /** Sort order (true for descending, false for ascending). */
  sort_descending?: boolean;
}): Promise<FleetTracersResponse>
```

<sub>`GET /api/unstable/fleet/agents/{agent_key}/tracers` · `ListFleetAgentTracers`</sub>

## `datadog.createFleetSchedule`

Create a schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFleetSchedule(input: {
  data: FleetScheduleCreate;
}): Promise<FleetScheduleResponse>
```

<sub>`POST /api/unstable/fleet/schedules` · `CreateFleetSchedule`</sub>

## `datadog.deleteFleetSchedule`

Delete a schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteFleetSchedule(input: {
  /** The unique identifier of the schedule to delete. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/unstable/fleet/schedules/{id}` · `DeleteFleetSchedule`</sub>

## `datadog.updateFleetSchedule`

Update a schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFleetSchedule(input: {
  data: FleetSchedulePatch;
  /** The unique identifier of the schedule to update. */
  id: string;
}): Promise<FleetScheduleResponse>
```

<sub>`PATCH /api/unstable/fleet/schedules/{id}` · `UpdateFleetSchedule`</sub>

## `datadog.triggerFleetSchedule`

Trigger a schedule deployment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.triggerFleetSchedule(input: {
  /** The unique identifier of the schedule to trigger. */
  id: string;
}): Promise<FleetDeploymentResponse>
```

<sub>`POST /api/unstable/fleet/schedules/{id}/trigger` · `TriggerFleetSchedule`</sub>

## `datadog.listFleetTracers`

List all fleet tracers — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetTracers(input: {
  /** Page number for pagination (starts at 0). */
  page_number?: number;
  /** Number of results per page (must be greater than 0 and less than or equal to 100). */
  page_size?: number;
  /** Attribute to sort by. */
  sort_attribute?: string;
  /** Sort order (true for descending, false for ascending). */
  sort_descending?: boolean;
  /** Filter string for narrowing down tracer results. */
  filter?: string;
}): Promise<FleetTracersResponse>
```

<sub>`GET /api/unstable/fleet/tracers` · `ListFleetTracers`</sub>

## `datadog.listFleetAgentVersionsV2`

List available Datadog Agent versions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetAgentVersionsV2(): Promise<FleetAgentVersionsV2Response>
```

<sub>`GET /api/v2/fleet/agent_versions` · `ListFleetAgentVersionsV2`</sub>

## `datadog.listFleetAgentsV2`

List all Datadog Agents — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetAgentsV2(input: {
  /** Page number for pagination, starting at 0. */
  page_number?: number;
  /** Number of agents to return per page. Maximum value is 100. Defaults to 10. */
  page_size?: number;
  /** Filter string to narrow down agent results. */
  filter?: string;
  /** Comma-separated list of tag keys to select which tags are included in each agent's `tags` attribute. Does not filter which agents are returned. */
  tags?: string;
  /** Agent attribute to sort results by. Must be a supported attribute name; unsupported values return a 400 error. */
  sort_attribute?: string;
  /** Set to `true` to sort results in descending order. Defaults to ascending. */
  sort_descending?: boolean;
}): Promise<FleetAgentsV2Response>
```

<sub>`GET /api/v2/fleet/agents` · `ListFleetAgentsV2`</sub>

## `datadog.getFleetAgentDetailV2`

Get detailed information about an agent — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFleetAgentDetailV2(input: {
  /** The unique identifier (Agent key) for the Datadog Agent. Must be a 32-character lowercase hexadecimal string. */
  agent_key: string;
  /** Comma-separated list of additional fields to include in the response. Valid values are `integrations` and `configuration_files`. Omitting this parameter returns only `agent_infos`. Unrecognized values are silently ignored rather than causing an error. */
  include?: string;
}): Promise<FleetAgentDetailV2Response>
```

<sub>`GET /api/v2/fleet/agents/{agent_key}` · `GetFleetAgentDetailV2`</sub>

## `datadog.listFleetDeploymentsV2`

List all deployments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetDeploymentsV2(input: {
  /** Number of deployments to return per page. Maximum value is 100. */
  page_size?: number;
  /** Page number for pagination, starting at 0. */
  page_number?: number;
  /** Field to sort results by (for example, `start_date`). Must be a supported field name; unsupported values return a 400 error. */
  sort?: string;
  /** Set to `true` to sort in ascending order. This setting has no effect unless `sort` is also set. Defaults to descending order. */
  ascending?: boolean;
  /** Query used to filter deployments. Uses the Datadog query syntax. Filtering on an unsupported field returns a 400 error. For example: - `status:failed` or `status:done_with_errors`: deployments that need investigation. - `status:running`: deployments currently in flight. - `update_type:update_package` or `update_type:update_config_operations`: deployments of a given type. */
  filter?: string;
}): Promise<FleetDeploymentsV2Response>
```

<sub>`GET /api/v2/fleet/deployments` · `ListFleetDeploymentsV2`</sub>

## `datadog.getFleetDeploymentV2`

Get a deployment by ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFleetDeploymentV2(input: {
  /** The unique identifier of the deployment to retrieve. */
  deployment_id: string;
}): Promise<FleetDeploymentV2DetailResponse>
```

<sub>`GET /api/v2/fleet/deployments/{deployment_id}` · `GetFleetDeploymentV2`</sub>

## `datadog.cancelFleetDeploymentV2`

Cancel a deployment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cancelFleetDeploymentV2(input: {
  /** The unique identifier of the deployment to cancel. */
  deployment_id: string;
}): Promise<FleetDeploymentV2CancelResponse>
```

<sub>`POST /api/v2/fleet/deployments/{deployment_id}/cancel` · `CancelFleetDeploymentV2`</sub>

## `datadog.createFleetDeploymentConfigureV2`

Create a configuration deployment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFleetDeploymentConfigureV2(input: {
  data: FleetDeploymentConfigureV2Create;
}): Promise<FleetDeploymentConfigureV2DryRunResponse>
```

<sub>`POST /api/v2/fleet/deployments/configure` · `CreateFleetDeploymentConfigureV2`</sub>

## `datadog.createFleetDeploymentUpgradeV2`

Upgrade hosts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFleetDeploymentUpgradeV2(input: {
  data: FleetDeploymentPackageUpgradeV2Create;
}): Promise<FleetDeploymentV2CreateResponse>
```

<sub>`POST /api/v2/fleet/deployments/upgrade` · `CreateFleetDeploymentUpgradeV2`</sub>

## `datadog.listFleetSchedulesV2`

List all schedules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFleetSchedulesV2(): Promise<FleetSchedulesV2Response>
```

<sub>`GET /api/v2/fleet/schedules` · `ListFleetSchedulesV2`</sub>

## `datadog.getFleetScheduleV2`

Get a schedule by ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFleetScheduleV2(input: {
  /** The unique identifier of the schedule to retrieve. */
  id: string;
}): Promise<FleetScheduleV2Response>
```

<sub>`GET /api/v2/fleet/schedules/{id}` · `GetFleetScheduleV2`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
