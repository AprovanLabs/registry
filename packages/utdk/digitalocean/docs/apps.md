# Apps

38 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.appsList`

List All Apps

```ts
digitalocean.appsList(input: {
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Whether the project_id of listed apps should be fetched and included. */
  with_projects?: boolean;
}): Promise<AppsResponse>
```

<sub>`GET /v2/apps` · `apps_list`</sub>

## `digitalocean.appsCreate`

Create a New App

```ts
digitalocean.appsCreate(input: {
  spec: AppSpec;
  /** The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project. <br><br>Requires `project:assign_resource` scope.  */
  project_id?: string;
}, options?: { headers?: { Accept?: "application/json" | "application/yaml"; "Content-Type"?: "application/json" | "application/yaml" } }): Promise<AppResponse>
```

<sub>`POST /v2/apps` · `apps_create`</sub>

## `digitalocean.appsListAlerts`

List all app alerts

```ts
digitalocean.appsListAlerts(input: {
  /** The app ID */
  app_id: string;
}): Promise<AppsListAlertsResponse>
```

<sub>`GET /v2/apps/{app_id}/alerts` · `apps_list_alerts`</sub>

## `digitalocean.appsAssignAlertDestinations`

Update destinations for alerts

```ts
digitalocean.appsAssignAlertDestinations(input: {
  emails?: (AppAlertEmail)[];
  slack_webhooks?: (AppAlertSlackWebhook)[];
  /** The app ID */
  app_id: string;
  /** The alert ID */
  alert_id: string;
}): Promise<AppsAlertResponse>
```

<sub>`POST /v2/apps/{app_id}/alerts/{alert_id}/destinations` · `apps_assign_alertDestinations`</sub>

## `digitalocean.appsGetExecActiveDeployment`

Retrieve Exec URL

```ts
digitalocean.appsGetExecActiveDeployment(input: {
  /** The app ID */
  app_id: string;
  /** An optional component name. If set, logs will be limited to this component only. */
  component_name: string;
  /** The name of the actively running ephemeral compute instance */
  instance_name?: string;
}): Promise<AppsGetExecResponse>
```

<sub>`GET /v2/apps/{app_id}/components/{component_name}/exec` · `apps_get_exec_active_deployment`</sub>

## `digitalocean.appsGetLogsActiveDeployment`

Retrieve Active Deployment Logs

```ts
digitalocean.appsGetLogsActiveDeployment(input: {
  /** The app ID */
  app_id: string;
  /** An optional component name. If set, logs will be limited to this component only. */
  component_name: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
  type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/components/{component_name}/logs` · `apps_get_logs_active_deployment`</sub>

## `digitalocean.appsListDeployments`

List App Deployments

```ts
digitalocean.appsListDeployments(input: {
  /** The app ID */
  app_id: string;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Optional. Filter deployments by deployment_type   - MANUAL: manual deployment   - DEPLOY_ON_PUSH: deployment triggered by a push to the app's repository   - MAINTENANCE: deployment for maintenance purposes   - MANUAL_ROLLBACK: manual revert to a previous deployment   - AUTO_ROLLBACK: automatic revert to a previous deployment   - UPDATE_DATABASE_TRUSTED_SOURCES: update database trusted sources   - AUTOSCALED: deployment that has been autoscaled */
  deployment_types?: ("MANUAL" | "DEPLOY_ON_PUSH" | "MAINTENANCE" | "MANUAL_ROLLBACK" | "AUTO_ROLLBACK" | "UPDATE_DATABASE_TRUSTED_SOURCES" | "AUTOSCALED")[];
}): Promise<AppsDeploymentsResponse>
```

<sub>`GET /v2/apps/{app_id}/deployments` · `apps_list_deployments`</sub>

## `digitalocean.appsCreateDeployment`

Create an App Deployment

```ts
digitalocean.appsCreateDeployment(input: {
  force_build?: boolean;
  /** The app ID */
  app_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`POST /v2/apps/{app_id}/deployments` · `apps_create_deployment`</sub>

## `digitalocean.appsGetDeployment`

Retrieve an App Deployment

```ts
digitalocean.appsGetDeployment(input: {
  /** The app ID */
  app_id: string;
  /** The deployment ID */
  deployment_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`GET /v2/apps/{app_id}/deployments/{deployment_id}` · `apps_get_deployment`</sub>

## `digitalocean.appsCancelDeployment`

Cancel a Deployment

```ts
digitalocean.appsCancelDeployment(input: {
  /** The app ID */
  app_id: string;
  /** The deployment ID */
  deployment_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`POST /v2/apps/{app_id}/deployments/{deployment_id}/cancel` · `apps_cancel_deployment`</sub>

## `digitalocean.appsGetExec`

Retrieve Exec URL for Deployment

```ts
digitalocean.appsGetExec(input: {
  /** The app ID */
  app_id: string;
  /** The deployment ID */
  deployment_id: string;
  /** An optional component name. If set, logs will be limited to this component only. */
  component_name: string;
  /** The name of the actively running ephemeral compute instance */
  instance_name?: string;
}): Promise<AppsGetExecResponse>
```

<sub>`GET /v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/exec` · `apps_get_exec`</sub>

## `digitalocean.appsGetLogs`

Retrieve Deployment Logs

```ts
digitalocean.appsGetLogs(input: {
  /** The app ID */
  app_id: string;
  /** The deployment ID */
  deployment_id: string;
  /** An optional component name. If set, logs will be limited to this component only. */
  component_name: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
  type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/logs` · `apps_get_logs`</sub>

## `digitalocean.appsGetLogsAggregate`

Retrieve Aggregate Deployment Logs

```ts
digitalocean.appsGetLogsAggregate(input: {
  /** The app ID */
  app_id: string;
  /** The deployment ID */
  deployment_id: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
  type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/deployments/{deployment_id}/logs` · `apps_get_logs_aggregate`</sub>

## `digitalocean.appsListEvents`

List App Events

```ts
digitalocean.appsListEvents(input: {
  /** The app ID */
  app_id: string;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Filter events by event type. */
  event_types?: ("UNKNOWN" | "DEPLOYMENT" | "AUTOSCALING")[];
}): Promise<AppEvents>
```

<sub>`GET /v2/apps/{app_id}/events` · `apps_list_events`</sub>

## `digitalocean.appsGetEvent`

Get an Event

```ts
digitalocean.appsGetEvent(input: {
  /** The app ID */
  app_id: string;
  /** The event ID */
  event_id: string;
}): Promise<{ event?: AppEvent }>
```

<sub>`GET /v2/apps/{app_id}/events/{event_id}` · `apps_get_event`</sub>

## `digitalocean.appsCancelEvent`

Cancel an Event

```ts
digitalocean.appsCancelEvent(input: {
  /** The app ID */
  app_id: string;
  /** The event ID */
  event_id: string;
}): Promise<{ event?: AppEvent }>
```

<sub>`POST /v2/apps/{app_id}/events/{event_id}/cancel` · `apps_cancel_event`</sub>

## `digitalocean.appsGetEventLogs`

Retrieve Event Logs

```ts
digitalocean.appsGetEventLogs(input: {
  /** The app ID */
  app_id: string;
  /** The event ID */
  event_id: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
  type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/events/{event_id}/logs` · `apps_get_event_logs`</sub>

## `digitalocean.appsGetHealth`

Retrieve App Health

```ts
digitalocean.appsGetHealth(input: {
  /** The app ID */
  app_id: string;
}): Promise<AppHealthResponse>
```

<sub>`GET /v2/apps/{app_id}/health` · `apps_get_health`</sub>

## `digitalocean.appsGetInstances`

Retrieve App Instances

```ts
digitalocean.appsGetInstances(input: {
  /** The app ID */
  app_id: string;
}): Promise<AppInstances>
```

<sub>`GET /v2/apps/{app_id}/instances` · `apps_get_instances`</sub>

## `digitalocean.appsListJobInvocations`

List Job Invocations

```ts
digitalocean.appsListJobInvocations(input: {
  /** The app ID */
  app_id: string;
  /** The job names to list job invocations for. */
  job_names?: (Schema)[];
  /** The deployment ID */
  deployment_id?: string;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Number of items returned per page */
  per_page?: number;
}): Promise<AppJobInvocations>
```

<sub>`GET /v2/apps/{app_id}/job-invocations` · `apps_list_job_invocations`</sub>

## `digitalocean.appsGetJobInvocation`

Get Job Invocations

```ts
digitalocean.appsGetJobInvocation(input: {
  /** The app ID */
  app_id: string;
  /** The ID of the job invocation to retrieve. */
  job_invocation_id: string;
  /** The job name to list job invocations for. */
  job_name?: string;
}): Promise<AppJobInvocation>
```

<sub>`GET /v2/apps/{app_id}/job-invocations/{job_invocation_id}` · `apps_get_job_invocation`</sub>

## `digitalocean.appsCancelJobInvocation`

Cancel Job Invocation

```ts
digitalocean.appsCancelJobInvocation(input: {
  /** The app ID */
  app_id: string;
  /** The ID of the job invocation to retrieve. */
  job_invocation_id: string;
  /** The job name to list job invocations for. */
  job_name?: string;
}): Promise<AppJobInvocation>
```

<sub>`POST /v2/apps/{app_id}/job-invocations/{job_invocation_id}/cancel` · `apps_cancel_job_invocation`</sub>

## `digitalocean.appsGetJobInvocationLogs`

Retrieve Job Invocation Logs

```ts
digitalocean.appsGetJobInvocationLogs(input: {
  /** The app ID */
  app_id: string;
  /** The job name to list job invocations for. */
  job_name: string;
  /** The ID of the job invocation to retrieve. */
  job_invocation_id: string;
  /** The deployment ID */
  deployment_id?: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve */
  type: "JOB_INVOCATION";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
  /** The number of lines from the end of the logs to retrieve. */
  tail_lines?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/jobs/{job_name}/invocations/{job_invocation_id}/logs` · `apps_get_job_invocation_logs`</sub>

## `digitalocean.appsGetLogsActiveDeploymentAggregate`

Retrieve Active Deployment Aggregate Logs

```ts
digitalocean.appsGetLogsActiveDeploymentAggregate(input: {
  /** The app ID */
  app_id: string;
  /** Whether the logs should follow live updates. */
  follow?: boolean;
  /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
  type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
  /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
  pod_connection_timeout?: string;
}): Promise<AppsGetLogsResponse>
```

<sub>`GET /v2/apps/{app_id}/logs` · `apps_get_logs_active_deployment_aggregate`</sub>

## `digitalocean.appsGetMetricsBandwidthDaily`

Retrieve App Daily Bandwidth Metrics

```ts
digitalocean.appsGetMetricsBandwidthDaily(input: {
  /** The app ID */
  app_id: string;
  /** Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. */
  date?: string;
}): Promise<AppMetricsBandwidthUsage>
```

<sub>`GET /v2/apps/{app_id}/metrics/bandwidth_daily` · `apps_get_metrics_bandwidth_daily`</sub>

## `digitalocean.appsRestart`

Restart an App

```ts
digitalocean.appsRestart(input: {
  components?: (string)[];
  /** The app ID */
  app_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`POST /v2/apps/{app_id}/restart` · `apps_restart`</sub>

## `digitalocean.appsCreateRollback`

Rollback App

```ts
digitalocean.appsCreateRollback(input: {
  /** The ID of the deployment to rollback to. */
  deployment_id?: string;
  /** Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned. */
  skip_pin?: boolean;
  /** The app ID */
  app_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`POST /v2/apps/{app_id}/rollback` · `apps_create_rollback`</sub>

## `digitalocean.appsCommitRollback`

Commit App Rollback

```ts
digitalocean.appsCommitRollback(input: {
  /** The app ID */
  app_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/apps/{app_id}/rollback/commit` · `apps_commit_rollback`</sub>

## `digitalocean.appsRevertRollback`

Revert App Rollback

```ts
digitalocean.appsRevertRollback(input: {
  /** The app ID */
  app_id: string;
}): Promise<AppsDeploymentResponse>
```

<sub>`POST /v2/apps/{app_id}/rollback/revert` · `apps_revert_rollback`</sub>

## `digitalocean.appsValidateRollback`

Validate App Rollback

```ts
digitalocean.appsValidateRollback(input: {
  /** The ID of the deployment to rollback to. */
  deployment_id?: string;
  /** Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned. */
  skip_pin?: boolean;
  /** The app ID */
  app_id: string;
}): Promise<{ valid?: boolean; error?: unknown & AppRollbackValidationCondition; warnings?: (AppRollbackValidationCondition)[] }>
```

<sub>`POST /v2/apps/{app_id}/rollback/validate` · `apps_validate_rollback`</sub>

## `digitalocean.appsDelete`

Delete an App

```ts
digitalocean.appsDelete(input: {
  /** The ID of the app */
  id: string;
}): Promise<AppsDeleteAppResponse>
```

<sub>`DELETE /v2/apps/{id}` · `apps_delete`</sub>

## `digitalocean.appsGet`

Retrieve an Existing App

```ts
digitalocean.appsGet(input: {
  /** The ID of the app */
  id: string;
  /** The name of the app to retrieve. */
  name?: string;
}): Promise<AppResponse>
```

<sub>`GET /v2/apps/{id}` · `apps_get`</sub>

## `digitalocean.appsUpdate`

Update an App

```ts
digitalocean.appsUpdate(input: {
  spec: AppSpec;
  /** Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code. */
  update_all_source_versions?: boolean;
  /** The ID of the app */
  id: string;
}): Promise<AppResponse>
```

<sub>`PUT /v2/apps/{id}` · `apps_update`</sub>

## `digitalocean.appsListMetricsBandwidthDaily`

Retrieve Multiple Apps' Daily Bandwidth Metrics

```ts
digitalocean.appsListMetricsBandwidthDaily(input: {
  /** A list of app IDs to query bandwidth metrics for. */
  app_ids: (string)[];
  /** Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. */
  date?: string;
}): Promise<AppMetricsBandwidthUsage>
```

<sub>`POST /v2/apps/metrics/bandwidth_daily` · `apps_list_metrics_bandwidth_daily`</sub>

## `digitalocean.appsValidateAppSpec`

Propose an App Spec

```ts
digitalocean.appsValidateAppSpec(input: {
  spec: AppSpec;
  /** An optional ID of an existing app. If set, the spec will be treated as a proposed update to the specified app. The existing app is not modified using this method. */
  app_id?: string;
}): Promise<AppProposeResponse>
```

<sub>`POST /v2/apps/propose` · `apps_validate_appSpec`</sub>

## `digitalocean.appsListRegions`

List App Regions

```ts
digitalocean.appsListRegions(): Promise<AppsListRegionsResponse>
```

<sub>`GET /v2/apps/regions` · `apps_list_regions`</sub>

## `digitalocean.appsListInstanceSizes`

List Instance Sizes

```ts
digitalocean.appsListInstanceSizes(): Promise<AppsListInstanceSizesResponse>
```

<sub>`GET /v2/apps/tiers/instance_sizes` · `apps_list_instanceSizes`</sub>

## `digitalocean.appsGetInstanceSize`

Retrieve an Instance Size

```ts
digitalocean.appsGetInstanceSize(input: {
  /** The slug of the instance size */
  slug: string;
}): Promise<AppsGetInstanceSizeResponse>
```

<sub>`GET /v2/apps/tiers/instance_sizes/{slug}` · `apps_get_instanceSize`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
