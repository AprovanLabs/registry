# Monitoring

72 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.monitoringListAlertPolicy`

List Alert Policies

```ts
digitalocean.monitoringListAlertPolicy(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<ListAlertPolicy & Pagination & Meta>
```

<sub>`GET /v2/monitoring/alerts` · `monitoring_list_alertPolicy`</sub>

## `digitalocean.monitoringCreateAlertPolicy`

Create Alert Policy

```ts
digitalocean.monitoringCreateAlertPolicy(input: {
  alerts: Alerts;
  compare: "GreaterThan" | "LessThan";
  description: string;
  enabled: boolean;
  entities: (string)[];
  tags: (string)[];
  type: "v1/insights/droplet/load_1" | "v1/insights/droplet/load_5" | "v1/insights/droplet/load_15" | "v1/insights/droplet/memory_utilization_percent" | "v1/insights/droplet/disk_utilization_percent" | "v1/insights/droplet/cpu" | "v1/insights/droplet/disk_read" | "v1/insights/droplet/disk_write" | "v1/insights/droplet/public_outbound_bandwidth" | "v1/insights/droplet/public_inbound_bandwidth" | "v1/insights/droplet/private_outbound_bandwidth" | "v1/insights/droplet/private_inbound_bandwidth" | "v1/insights/lbaas/avg_cpu_utilization_percent" | "v1/insights/lbaas/connection_utilization_percent" | "v1/insights/lbaas/droplet_health" | "v1/insights/lbaas/tls_connections_per_second_utilization_percent" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx" | "v1/insights/lbaas/high_http_request_response_time" | "v1/insights/lbaas/high_http_request_response_time_50p" | "v1/insights/lbaas/high_http_request_response_time_95p" | "v1/insights/lbaas/high_http_request_response_time_99p" | "v1/dbaas/alerts/load_15_alerts" | "v1/dbaas/alerts/memory_utilization_alerts" | "v1/dbaas/alerts/disk_utilization_alerts" | "v1/dbaas/alerts/cpu_alerts" | "v1/droplet/autoscale_alerts/current_instances" | "v1/droplet/autoscale_alerts/target_instances" | "v1/droplet/autoscale_alerts/current_cpu_utilization" | "v1/droplet/autoscale_alerts/target_cpu_utilization" | "v1/droplet/autoscale_alerts/current_memory_utilization" | "v1/droplet/autoscale_alerts/target_memory_utilization" | "v1/droplet/autoscale_alerts/scale_up" | "v1/droplet/autoscale_alerts/scale_down";
  value: number;
  window: "5m" | "10m" | "30m" | "1h";
}): Promise<{ policy?: AlertPolicy }>
```

<sub>`POST /v2/monitoring/alerts` · `monitoring_create_alertPolicy`</sub>

## `digitalocean.monitoringDeleteAlertPolicy`

Delete an Alert Policy

```ts
digitalocean.monitoringDeleteAlertPolicy(input: {
  /** A unique identifier for an alert policy. */
  alert_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/monitoring/alerts/{alert_uuid}` · `monitoring_delete_alertPolicy`</sub>

## `digitalocean.monitoringGetAlertPolicy`

Retrieve an Existing Alert Policy

```ts
digitalocean.monitoringGetAlertPolicy(input: {
  /** A unique identifier for an alert policy. */
  alert_uuid: string;
}): Promise<{ policy?: AlertPolicy }>
```

<sub>`GET /v2/monitoring/alerts/{alert_uuid}` · `monitoring_get_alertPolicy`</sub>

## `digitalocean.monitoringUpdateAlertPolicy`

Update an Alert Policy

```ts
digitalocean.monitoringUpdateAlertPolicy(input: {
  alerts: Alerts;
  compare: "GreaterThan" | "LessThan";
  description: string;
  enabled: boolean;
  entities: (string)[];
  tags: (string)[];
  type: "v1/insights/droplet/load_1" | "v1/insights/droplet/load_5" | "v1/insights/droplet/load_15" | "v1/insights/droplet/memory_utilization_percent" | "v1/insights/droplet/disk_utilization_percent" | "v1/insights/droplet/cpu" | "v1/insights/droplet/disk_read" | "v1/insights/droplet/disk_write" | "v1/insights/droplet/public_outbound_bandwidth" | "v1/insights/droplet/public_inbound_bandwidth" | "v1/insights/droplet/private_outbound_bandwidth" | "v1/insights/droplet/private_inbound_bandwidth" | "v1/insights/lbaas/avg_cpu_utilization_percent" | "v1/insights/lbaas/connection_utilization_percent" | "v1/insights/lbaas/droplet_health" | "v1/insights/lbaas/tls_connections_per_second_utilization_percent" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx" | "v1/insights/lbaas/high_http_request_response_time" | "v1/insights/lbaas/high_http_request_response_time_50p" | "v1/insights/lbaas/high_http_request_response_time_95p" | "v1/insights/lbaas/high_http_request_response_time_99p" | "v1/dbaas/alerts/load_15_alerts" | "v1/dbaas/alerts/memory_utilization_alerts" | "v1/dbaas/alerts/disk_utilization_alerts" | "v1/dbaas/alerts/cpu_alerts" | "v1/droplet/autoscale_alerts/current_instances" | "v1/droplet/autoscale_alerts/target_instances" | "v1/droplet/autoscale_alerts/current_cpu_utilization" | "v1/droplet/autoscale_alerts/target_cpu_utilization" | "v1/droplet/autoscale_alerts/current_memory_utilization" | "v1/droplet/autoscale_alerts/target_memory_utilization" | "v1/droplet/autoscale_alerts/scale_up" | "v1/droplet/autoscale_alerts/scale_down";
  value: number;
  window: "5m" | "10m" | "30m" | "1h";
  /** A unique identifier for an alert policy. */
  alert_uuid: string;
}): Promise<{ policy?: AlertPolicy }>
```

<sub>`PUT /v2/monitoring/alerts/{alert_uuid}` · `monitoring_update_alertPolicy`</sub>

## `digitalocean.monitoringGetAppCpuPercentageMetrics`

Get App CPU Percentage Metrics

```ts
digitalocean.monitoringGetAppCpuPercentageMetrics(input: {
  /** The app UUID. */
  app_id: string;
  /** The app component name. */
  app_component?: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/apps/cpu_percentage` · `monitoring_get_appCPUPercentageMetrics`</sub>

## `digitalocean.monitoringGetAppMemoryPercentageMetrics`

Get App Memory Percentage Metrics

```ts
digitalocean.monitoringGetAppMemoryPercentageMetrics(input: {
  /** The app UUID. */
  app_id: string;
  /** The app component name. */
  app_component?: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/apps/memory_percentage` · `monitoring_get_appMemoryPercentageMetrics`</sub>

## `digitalocean.monitoringGetAppRestartCountMetricsYml`

Get App Restart Count Metrics

```ts
digitalocean.monitoringGetAppRestartCountMetricsYml(input: {
  /** The app UUID. */
  app_id: string;
  /** The app component name. */
  app_component?: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/apps/restart_count` · `monitoring_get_appRestartCountMetrics.yml`</sub>

## `digitalocean.monitoringGetDatabaseMysqlCpuUsage`

Get Database MySQL CPU Usage Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlCpuUsage(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** Aggregation over the time range (avg, max, or min). */
  aggregate: "avg" | "max" | "min";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/cpu_usage` · `monitoring_get_database_mysql_cpu_usage`</sub>

## `digitalocean.monitoringGetDatabaseMysqlDiskUsage`

Get Database MySQL Disk Usage Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlDiskUsage(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** Aggregation over the time range (avg, max, or min). */
  aggregate: "avg" | "max" | "min";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/disk_usage` · `monitoring_get_database_mysql_disk_usage`</sub>

## `digitalocean.monitoringGetDatabaseMysqlIndexVsSequentialReads`

Get Database MySQL Index vs Sequential Reads Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlIndexVsSequentialReads(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/index_vs_sequential_reads` · `monitoring_get_database_mysql_index_vs_sequential_reads`</sub>

## `digitalocean.monitoringGetDatabaseMysqlLoad`

Get Database MySQL Load Average Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlLoad(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** Load window: **load1** (1-minute), **load5** (5-minute), **load15** (15-minute). The value is either average or max over that window, depending on the **aggregate** parameter (avg or max). */
  metric: "load1" | "load5" | "load15";
  /** Aggregation over the time range (avg or max). */
  aggregate: "avg" | "max";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/load` · `monitoring_get_database_mysql_load`</sub>

## `digitalocean.monitoringGetDatabaseMysqlMemoryUsage`

Get Database MySQL Memory Usage Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlMemoryUsage(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** Aggregation over the time range (avg, max, or min). */
  aggregate: "avg" | "max" | "min";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/memory_usage` · `monitoring_get_database_mysql_memory_usage`</sub>

## `digitalocean.monitoringGetDatabaseMysqlOpRates`

Get Database MySQL Operations Throughput Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlOpRates(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** Operation type (select, insert, update, or delete). */
  metric: "select" | "insert" | "update" | "delete";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/op_rates` · `monitoring_get_database_mysql_op_rates`</sub>

## `digitalocean.monitoringGetDatabaseMysqlSchemaLatency`

Get Database MySQL Schema Latency Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlSchemaLatency(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** The schema (database) name. */
  schema: string;
  /** Table I/O operation (insert, fetch, update, or delete). */
  metric: "insert" | "fetch" | "update" | "delete";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/schema_latency` · `monitoring_get_database_mysql_schema_latency`</sub>

## `digitalocean.monitoringGetDatabaseMysqlSchemaThroughput`

Get Database MySQL Schema Throughput Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlSchemaThroughput(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** The schema (database) name. */
  schema: string;
  /** Table I/O operation (insert, fetch, update, or delete). */
  metric: "insert" | "fetch" | "update" | "delete";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/schema_throughput` · `monitoring_get_database_mysql_schema_throughput`</sub>

## `digitalocean.monitoringGetDatabaseMysqlThreadsActive`

Get Database MySQL Threads Active Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlThreadsActive(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/threads_active` · `monitoring_get_database_mysql_threads_active`</sub>

## `digitalocean.monitoringGetDatabaseMysqlThreadsConnected`

Get Database MySQL Threads Connected Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlThreadsConnected(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/threads_connected` · `monitoring_get_database_mysql_threads_connected`</sub>

## `digitalocean.monitoringGetDatabaseMysqlThreadsCreatedRate`

Get Database MySQL Threads Created Rate Metrics

```ts
digitalocean.monitoringGetDatabaseMysqlThreadsCreatedRate(input: {
  /** The DBaaS cluster UUID (database ID). */
  db_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/database/mysql/threads_created_rate` · `monitoring_get_database_mysql_threads_created_rate`</sub>

## `digitalocean.monitoringGetDropletAutoscaleCurrentCpuUtilizationYml`

Get Droplet Autoscale Pool Current Average CPU utilization

```ts
digitalocean.monitoringGetDropletAutoscaleCurrentCpuUtilizationYml(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/current_cpu_utilization` · `monitoring_get_droplet_autoscale_current_cpu_utilization.yml`</sub>

## `digitalocean.monitoringGetDropletAutoscaleCurrentInstances`

Get Droplet Autoscale Pool Current Size

```ts
digitalocean.monitoringGetDropletAutoscaleCurrentInstances(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/current_instances` · `monitoring_get_droplet_autoscale_current_instances`</sub>

## `digitalocean.monitoringGetDropletAutoscaleCurrentMemoryUtilization`

Get Droplet Autoscale Pool Current Average Memory utilization

```ts
digitalocean.monitoringGetDropletAutoscaleCurrentMemoryUtilization(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/current_memory_utilization` · `monitoring_get_droplet_autoscale_current_memory_utilization`</sub>

## `digitalocean.monitoringGetDropletAutoscaleTargetCpuUtilization`

Get Droplet Autoscale Pool Target Average CPU utilization

```ts
digitalocean.monitoringGetDropletAutoscaleTargetCpuUtilization(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/target_cpu_utilization` · `monitoring_get_droplet_autoscale_target_cpu_utilization`</sub>

## `digitalocean.monitoringGetDropletAutoscaleTargetInstances`

Get Droplet Autoscale Pool Target Size

```ts
digitalocean.monitoringGetDropletAutoscaleTargetInstances(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/target_instances` · `monitoring_get_droplet_autoscale_target_instances`</sub>

## `digitalocean.monitoringGetDropletAutoscaleTargetMemoryUtilization`

Get Droplet Autoscale Pool Target Average Memory utilization

```ts
digitalocean.monitoringGetDropletAutoscaleTargetMemoryUtilization(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet_autoscale/target_memory_utilization` · `monitoring_get_droplet_autoscale_target_memory_utilization`</sub>

## `digitalocean.monitoringGetDropletBandwidthMetrics`

Get Droplet Bandwidth Metrics

```ts
digitalocean.monitoringGetDropletBandwidthMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** The network interface. */
  interface: "private" | "public";
  /** The traffic direction. */
  direction: "inbound" | "outbound";
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/bandwidth` · `monitoring_get_dropletBandwidthMetrics`</sub>

## `digitalocean.monitoringGetDropletCpuMetrics`

Get Droplet CPU Metrics

```ts
digitalocean.monitoringGetDropletCpuMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/cpu` · `monitoring_get_DropletCpuMetrics`</sub>

## `digitalocean.monitoringGetDropletFilesystemFreeMetrics`

Get Droplet Filesystem Free Metrics

```ts
digitalocean.monitoringGetDropletFilesystemFreeMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/filesystem_free` · `monitoring_get_dropletFilesystemFreeMetrics`</sub>

## `digitalocean.monitoringGetDropletFilesystemSizeMetrics`

Get Droplet Filesystem Size Metrics

```ts
digitalocean.monitoringGetDropletFilesystemSizeMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/filesystem_size` · `monitoring_get_dropletFilesystemSizeMetrics`</sub>

## `digitalocean.monitoringGetDropletLoad1Metrics`

Get Droplet Load1 Metrics

```ts
digitalocean.monitoringGetDropletLoad1Metrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/load_1` · `monitoring_get_dropletLoad1Metrics`</sub>

## `digitalocean.monitoringGetDropletLoad15Metrics`

Get Droplet Load15 Metrics

```ts
digitalocean.monitoringGetDropletLoad15Metrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/load_15` · `monitoring_get_dropletLoad15Metrics`</sub>

## `digitalocean.monitoringGetDropletLoad5Metrics`

Get Droplet Load5 Metrics

```ts
digitalocean.monitoringGetDropletLoad5Metrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/load_5` · `monitoring_get_dropletLoad5Metrics`</sub>

## `digitalocean.monitoringGetDropletMemoryAvailableMetrics`

Get Droplet Available Memory Metrics

```ts
digitalocean.monitoringGetDropletMemoryAvailableMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/memory_available` · `monitoring_get_dropletMemoryAvailableMetrics`</sub>

## `digitalocean.monitoringGetDropletMemoryCachedMetrics`

Get Droplet Cached Memory Metrics

```ts
digitalocean.monitoringGetDropletMemoryCachedMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/memory_cached` · `monitoring_get_dropletMemoryCachedMetrics`</sub>

## `digitalocean.monitoringGetDropletMemoryFreeMetrics`

Get Droplet Free Memory Metrics

```ts
digitalocean.monitoringGetDropletMemoryFreeMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/memory_free` · `monitoring_get_dropletMemoryFreeMetrics`</sub>

## `digitalocean.monitoringGetDropletMemoryTotalMetrics`

Get Droplet Total Memory Metrics

```ts
digitalocean.monitoringGetDropletMemoryTotalMetrics(input: {
  /** The droplet ID. */
  host_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/droplet/memory_total` · `monitoring_get_dropletMemoryTotalMetrics`</sub>

## `digitalocean.monitoringGetLbDropletsConnections`

Get Load Balancer Droplets Active Connections Metrics

```ts
digitalocean.monitoringGetLbDropletsConnections(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_connections` · `monitoring_get_lb_droplets_connections`</sub>

## `digitalocean.monitoringGetLbDropletsDowntime`

Get Load Balancer Droplets Downtime Status Metrics

```ts
digitalocean.monitoringGetLbDropletsDowntime(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_downtime` · `monitoring_get_lb_droplets_downtime`</sub>

## `digitalocean.monitoringGetLbDropletsHealthChecks`

Get Load Balancer Droplets Health Check Status Metrics

```ts
digitalocean.monitoringGetLbDropletsHealthChecks(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_health_checks` · `monitoring_get_lb_droplets_health_checks`</sub>

## `digitalocean.monitoringGetLbDropletsHttpResponseTime50P`

Get Load Balancer Droplets 50th Percentile HTTP Response Time Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpResponseTime50P(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_response_time_50p` · `monitoring_get_lb_droplets_http_response_time_50p`</sub>

## `digitalocean.monitoringGetLbDropletsHttpResponseTime95P`

Get Load Balancer Droplets 95th Percentile HTTP Response Time Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpResponseTime95P(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_response_time_95p` · `monitoring_get_lb_droplets_http_response_time_95p`</sub>

## `digitalocean.monitoringGetLbDropletsHttpResponseTime99P`

Get Load Balancer Droplets 99th Percentile HTTP Response Time Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpResponseTime99P(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_response_time_99p` · `monitoring_get_lb_droplets_http_response_time_99p`</sub>

## `digitalocean.monitoringGetLbDropletsHttpResponseTimeAvg`

Get Load Balancer Droplets Average HTTP Response Time Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpResponseTimeAvg(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_response_time_avg` · `monitoring_get_lb_droplets_http_response_time_avg`</sub>

## `digitalocean.monitoringGetLbDropletsHttpResponses`

Get Load Balancer Droplets HTTP Rate Of Response Code Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpResponses(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_responses` · `monitoring_get_lb_droplets_http_responses`</sub>

## `digitalocean.monitoringGetLbDropletsHttpSessionDuration50P`

Get Load Balancer Droplets 50th Percentile HTTP Session Duration Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpSessionDuration50P(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_session_duration_50p` · `monitoring_get_lb_droplets_http_session_duration_50p`</sub>

## `digitalocean.monitoringGetLbDropletsHttpSessionDuration95P`

Get Load Balancer Droplets 95th Percentile HTTP Session Duration Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpSessionDuration95P(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_session_duration_95p` · `monitoring_get_lb_droplets_http_session_duration_95p`</sub>

## `digitalocean.monitoringGetLbDropletsHttpSessionDurationAvg`

Get Load Balancer Droplets Average HTTP Session Duration Metrics

```ts
digitalocean.monitoringGetLbDropletsHttpSessionDurationAvg(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_http_session_duration_avg` · `monitoring_get_lb_droplets_http_session_duration_avg`</sub>

## `digitalocean.monitoringGetLbDropletsQueueSize`

Get Load Balancer Droplets Queue Size Metrics

```ts
digitalocean.monitoringGetLbDropletsQueueSize(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/droplets_queue_size` · `monitoring_get_lb_droplets_queue_size`</sub>

## `digitalocean.monitoringGetLbFrontendConnectionsCurrent`

Get Load Balancer Frontend Total Current Active Connections Metrics

```ts
digitalocean.monitoringGetLbFrontendConnectionsCurrent(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_connections_current` · `monitoring_get_lb_frontend_connections_current`</sub>

## `digitalocean.monitoringGetLbFrontendConnectionsLimit`

Get Load Balancer Frontend Max Connections Limit Metrics

```ts
digitalocean.monitoringGetLbFrontendConnectionsLimit(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_connections_limit` · `monitoring_get_lb_frontend_connections_limit`</sub>

## `digitalocean.monitoringGetLbFrontendCpuUtilization`

Get Load Balancer Frontend Average Percentage CPU Utilization Metrics

```ts
digitalocean.monitoringGetLbFrontendCpuUtilization(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_cpu_utilization` · `monitoring_get_lb_frontend_cpu_utilization`</sub>

## `digitalocean.monitoringGetLbFrontendFirewallDroppedBytes`

Get Load Balancer Frontend Firewall Dropped Bytes Metrics

```ts
digitalocean.monitoringGetLbFrontendFirewallDroppedBytes(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_firewall_dropped_bytes` · `monitoring_get_lb_frontend_firewall_dropped_bytes`</sub>

## `digitalocean.monitoringGetLbFrontendFirewallDroppedPackets`

Get Load Balancer Frontend Firewall Dropped Packets Metrics

```ts
digitalocean.monitoringGetLbFrontendFirewallDroppedPackets(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_firewall_dropped_packets` · `monitoring_get_lb_frontend_firewall_dropped_packets`</sub>

## `digitalocean.monitoringGetLbFrontendHttpRequestsPerSecond`

Get Load Balancer Frontend HTTP Requests Metrics

```ts
digitalocean.monitoringGetLbFrontendHttpRequestsPerSecond(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_http_requests_per_second` · `monitoring_get_lb_frontend_http_requests_per_second`</sub>

## `digitalocean.monitoringGetLbFrontendHttpResponses`

Get Load Balancer Frontend HTTP Rate Of Response Code Metrics

```ts
digitalocean.monitoringGetLbFrontendHttpResponses(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_http_responses` · `monitoring_get_lb_frontend_http_responses`</sub>

## `digitalocean.monitoringGetLbFrontendNetworkThroughputHttp`

Get Load Balancer Frontend HTTP Throughput Metrics

```ts
digitalocean.monitoringGetLbFrontendNetworkThroughputHttp(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_network_throughput_http` · `monitoring_get_lb_frontend_network_throughput_http`</sub>

## `digitalocean.monitoringGetLbFrontendNetworkThroughputTcp`

Get Load Balancer Frontend TCP Throughput Metrics

```ts
digitalocean.monitoringGetLbFrontendNetworkThroughputTcp(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_network_throughput_tcp` · `monitoring_get_lb_frontend_network_throughput_tcp`</sub>

## `digitalocean.monitoringGetLbFrontendNetworkThroughputUdp`

Get Load Balancer Frontend UDP Throughput Metrics

```ts
digitalocean.monitoringGetLbFrontendNetworkThroughputUdp(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_network_throughput_udp` · `monitoring_get_lb_frontend_network_throughput_udp`</sub>

## `digitalocean.monitoringGetLbFrontendNlbTcpNetworkThroughput`

Get Network Load Balancer Frontend TCP Throughput Metrics

```ts
digitalocean.monitoringGetLbFrontendNlbTcpNetworkThroughput(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_nlb_tcp_network_throughput` · `monitoring_get_lb_frontend_nlb_tcp_network_throughput`</sub>

## `digitalocean.monitoringGetLbFrontendNlbUdpNetworkThroughput`

Get Network Load Balancer Frontend UDP Throughput Metrics

```ts
digitalocean.monitoringGetLbFrontendNlbUdpNetworkThroughput(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_nlb_udp_network_throughput` · `monitoring_get_lb_frontend_nlb_udp_network_throughput`</sub>

## `digitalocean.monitoringGetLbFrontendTlsConnectionsCurrent`

Get Load Balancer Frontend Current TLS Connections Rate Metrics

```ts
digitalocean.monitoringGetLbFrontendTlsConnectionsCurrent(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_tls_connections_current` · `monitoring_get_lb_frontend_tls_connections_current`</sub>

## `digitalocean.monitoringGetLbFrontendTlsConnectionsExceedingRateLimit`

Get Load Balancer Frontend Closed TLS Connections For Exceeded Rate Limit Metrics

```ts
digitalocean.monitoringGetLbFrontendTlsConnectionsExceedingRateLimit(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_tls_connections_exceeding_rate_limit` · `monitoring_get_lb_frontend_tls_connections_exceeding_rate_limit`</sub>

## `digitalocean.monitoringGetLbFrontendTlsConnectionsLimit`

Get Load Balancer Frontend Max TLS Connections Limit Metrics

```ts
digitalocean.monitoringGetLbFrontendTlsConnectionsLimit(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
  /** UNIX timestamp to start metric window. */
  start: string;
  /** UNIX timestamp to end metric window. */
  end: string;
}): Promise<Metrics>
```

<sub>`GET /v2/monitoring/metrics/load_balancer/frontend_tls_connections_limit` · `monitoring_get_lb_frontend_tls_connections_limit`</sub>

## `digitalocean.monitoringListSinks`

Lists all sinks

```ts
digitalocean.monitoringListSinks(input: {
  resource_id?: Urn;
}): Promise<{ sinks?: (SinksResponse)[] }>
```

<sub>`GET /v2/monitoring/sinks` · `monitoring_list_sinks`</sub>

## `digitalocean.monitoringCreateSink`

Create Sink

```ts
digitalocean.monitoringCreateSink(input: {
  /** A unique identifier for an already-existing destination. */
  destination_uuid?: string;
  /** List of resources identified by their URNs. */
  resources?: (SinkResource)[];
}): Promise<undefined>
```

<sub>`POST /v2/monitoring/sinks` · `monitoring_create_sink`</sub>

## `digitalocean.monitoringDeleteSink`

Delete Sink

```ts
digitalocean.monitoringDeleteSink(input: {
  /** A unique identifier for a sink. */
  sink_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/monitoring/sinks/{sink_uuid}` · `monitoring_delete_sink`</sub>

## `digitalocean.monitoringGetSink`

Get Sink

```ts
digitalocean.monitoringGetSink(input: {
  /** A unique identifier for a sink. */
  sink_uuid: string;
}): Promise<{ sink?: SinksResponse }>
```

<sub>`GET /v2/monitoring/sinks/{sink_uuid}` · `monitoring_get_sink`</sub>

## `digitalocean.monitoringListDestinations`

List Logging Destinations

```ts
digitalocean.monitoringListDestinations(): Promise<{ destinations?: (DestinationOmitCredentials)[] }>
```

<sub>`GET /v2/monitoring/sinks/destinations` · `monitoring_list_destinations`</sub>

## `digitalocean.monitoringCreateDestination`

Create Logging Destination

```ts
digitalocean.monitoringCreateDestination(input: {
  /** destination name */
  name?: string;
  /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
  type: "opensearch_dbaas" | "opensearch_ext";
  config: OpensearchConfigRequest;
}): Promise<{ destination?: DestinationOmitCredentials }>
```

<sub>`POST /v2/monitoring/sinks/destinations` · `monitoring_create_destination`</sub>

## `digitalocean.monitoringDeleteDestination`

Delete Logging Destination

```ts
digitalocean.monitoringDeleteDestination(input: {
  /** A unique identifier for a destination. */
  destination_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/monitoring/sinks/destinations/{destination_uuid}` · `monitoring_delete_destination`</sub>

## `digitalocean.monitoringGetDestination`

Get Logging Destination

```ts
digitalocean.monitoringGetDestination(input: {
  /** A unique identifier for a destination. */
  destination_uuid: string;
}): Promise<{ destination?: DestinationOmitCredentials }>
```

<sub>`GET /v2/monitoring/sinks/destinations/{destination_uuid}` · `monitoring_get_destination`</sub>

## `digitalocean.monitoringUpdateDestination`

Update Logging Destination

```ts
digitalocean.monitoringUpdateDestination(input: {
  /** destination name */
  name?: string;
  /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
  type: "opensearch_dbaas" | "opensearch_ext";
  config: OpensearchConfigRequest;
  /** A unique identifier for a destination. */
  destination_uuid: string;
}): Promise<undefined>
```

<sub>`POST /v2/monitoring/sinks/destinations/{destination_uuid}` · `monitoring_update_destination`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
