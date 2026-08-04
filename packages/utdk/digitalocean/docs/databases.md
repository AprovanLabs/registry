# Databases

71 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.databasesListClusters`

List All Database Clusters

```ts
digitalocean.databasesListClusters(input: {
  /** Limits the results to database clusters with a specific tag.<br><br>Requires `tag:read` scope. */
  tag_name?: string;
}): Promise<{ databases?: (DatabaseClusterRead)[] }>
```

<sub>`GET /v2/databases` · `databases_list_clusters`</sub>

## `digitalocean.databasesCreateCluster`

Create a New Database Cluster

```ts
digitalocean.databasesCreateCluster(input: {
  /** A unique ID that can be used to identify and reference a database cluster. */
  id?: string;
  /** A unique, human-readable name referring to a database cluster. */
  name: string;
  /** A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Caching, "mongodb" for MongoDB, "kafka" for Kafka, "opensearch" for OpenSearch, "valkey" for Valkey, "advanced_pg" for PostgreSQL Advanced Edition, and "advanced_mysql" for MySQL Advanced Edition. Advanced Edition engines are currently in public preview. */
  engine: "pg" | "mysql" | "redis" | "valkey" | "mongodb" | "kafka" | "opensearch" | "advanced_pg" | "advanced_mysql";
  /** A string representing the version of the database engine in use for the cluster. */
  version?: string;
  /** A string representing the semantic version of the database engine in use for the cluster. */
  semantic_version?: string;
  /** The number of nodes in the database cluster. */
  num_nodes: number;
  /** The slug identifier representing the size of the nodes in the database cluster. */
  size: string;
  /** The slug identifier for the region where the database cluster is located. */
  region: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  /** An array of tags (as strings) to apply to the database cluster. <br><br>Requires `tag:create` scope. */
  tags?: (string)[] | null;
  /** An array of strings containing the names of databases created in the database cluster. */
  db_names?: (string)[] | null;
  /** The connection details for OpenSearch dashboard.  */
  ui_connection?: OpensearchConnection & unknown;
  /** The connection details for Schema Registry. */
  schema_registry_connection?: SchemaRegistryConnection & unknown;
  connection?: DatabaseConnection & unknown;
  private_connection?: DatabaseConnection & unknown;
  standby_connection?: DatabaseConnection & unknown;
  standby_private_connection?: DatabaseConnection & unknown;
  users?: (DatabaseUser)[] | null;
  maintenance_window?: DatabaseMaintenanceWindow & unknown;
  /** The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.<br><br>Requires `project:assign_resource` scope. */
  project_id?: string;
  rules?: (FirewallRule)[];
  /** A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline. */
  version_end_of_life?: string;
  /** A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline. */
  version_end_of_availability?: string;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  /** Public hostname and port of the cluster's metrics endpoint(s). Includes one record for the cluster's primary node and a second entry for the cluster's standby node(s). */
  metrics_endpoints?: (DatabaseServiceEndpoint)[];
  /** Autoscaling configuration for the database cluster. Currently only supports storage autoscaling. If null, autoscaling is not configured for the cluster. */
  autoscale?: DatabaseAutoscaleParams;
  do_settings?: DoSettings & unknown;
  backup_restore?: DatabaseBackup;
}): Promise<{ database: DatabaseClusterRead }>
```

<sub>`POST /v2/databases` · `databases_create_cluster`</sub>

## `digitalocean.databasesDestroyCluster`

Destroy a Database Cluster

```ts
digitalocean.databasesDestroyCluster(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}` · `databases_destroy_cluster`</sub>

## `digitalocean.databasesGetCluster`

Retrieve an Existing Database Cluster

```ts
digitalocean.databasesGetCluster(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ database: DatabaseClusterRead }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}` · `databases_get_cluster`</sub>

## `digitalocean.databasesGetAutoscale`

Retrieve Autoscale Configuration for a Database Cluster

```ts
digitalocean.databasesGetAutoscale(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ autoscale?: DatabaseAutoscaleParams }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/autoscale` · `databases_get_autoscale`</sub>

## `digitalocean.databasesUpdateAutoscale`

Configure Autoscale Settings for a Database Cluster

```ts
digitalocean.databasesUpdateAutoscale(input: {
  storage?: DatabaseStorageAutoscaleParams & unknown;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/autoscale` · `databases_update_autoscale`</sub>

## `digitalocean.databasesListBackups`

List Backups for a Database Cluster

```ts
digitalocean.databasesListBackups(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ backups: (Backup)[]; scheduled_backup_time?: { backup_hour?: number; backup_minute?: number; backup_interval_hours?: number }; backup_progress?: string }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/backups` · `databases_list_backups`</sub>

## `digitalocean.databasesGetCa`

Retrieve the Public Certificate

```ts
digitalocean.databasesGetCa(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ ca: Ca }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/ca` · `databases_get_ca`</sub>

## `digitalocean.databasesGetConfig`

Retrieve an Existing Database Cluster Configuration

```ts
digitalocean.databasesGetConfig(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ config: MysqlAdvancedConfig | PostgresAdvancedConfig | RedisAdvancedConfig | ValkeyAdvancedConfig | KafkaAdvancedConfig | OpensearchAdvancedConfig | MongoAdvancedConfig }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/config` · `databases_get_config`</sub>

## `digitalocean.databasesPatchConfig`

Update the Database Configuration for an Existing Database

```ts
digitalocean.databasesPatchConfig(input: {
  config?: MysqlAdvancedConfig | PostgresAdvancedConfig | RedisAdvancedConfig | ValkeyAdvancedConfig | MongoAdvancedConfig | KafkaAdvancedConfig | OpensearchAdvancedConfig;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PATCH /v2/databases/{database_cluster_uuid}/config` · `databases_patch_config`</sub>

## `digitalocean.databasesList`

List All Databases

```ts
digitalocean.databasesList(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ dbs?: (Database)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/dbs` · `databases_list`</sub>

## `digitalocean.databasesAdd`

Add a New Database

```ts
digitalocean.databasesAdd(input: {
  /** The name of the database. */
  name: string;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ db: Database }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/dbs` · `databases_add`</sub>

## `digitalocean.databasesDelete`

Delete a Database

```ts
digitalocean.databasesDelete(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database. */
  database_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/dbs/{database_name}` · `databases_delete`</sub>

## `digitalocean.databasesGet`

Retrieve an Existing Database

```ts
digitalocean.databasesGet(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database. */
  database_name: string;
}): Promise<{ db: Database }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/dbs/{database_name}` · `databases_get`</sub>

## `digitalocean.databasesGetDoSettings`

Retrieve DO Settings for a Database Cluster

```ts
digitalocean.databasesGetDoSettings(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ do_settings: DoSettings }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/do_settings` · `databases_get_do_settings`</sub>

## `digitalocean.databasesUpdateDoSettings`

Update DO Settings for a Database Cluster

```ts
digitalocean.databasesUpdateDoSettings(input: {
  do_settings: DoSettings;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/do_settings` · `databases_update_do_settings`</sub>

## `digitalocean.databasesListEventsLogs`

List all Events Logs

```ts
digitalocean.databasesListEventsLogs(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ events?: (EventsLogs)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/events` · `databases_list_events_logs`</sub>

## `digitalocean.databasesGetEvictionPolicy`

Retrieve the Eviction Policy for a Caching or Valkey Cluster

```ts
digitalocean.databasesGetEvictionPolicy(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ eviction_policy: EvictionPolicyModel }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/eviction_policy` · `databases_get_evictionPolicy`</sub>

## `digitalocean.databasesUpdateEvictionPolicy`

Configure the Eviction Policy for a Caching or Valkey Cluster

```ts
digitalocean.databasesUpdateEvictionPolicy(input: {
  eviction_policy: EvictionPolicyModel;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/eviction_policy` · `databases_update_evictionPolicy`</sub>

## `digitalocean.databasesListFirewallRules`

List Firewall Rules (Trusted Sources) for a Database Cluster

```ts
digitalocean.databasesListFirewallRules(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ rules?: (FirewallRule)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/firewall` · `databases_list_firewall_rules`</sub>

## `digitalocean.databasesUpdateFirewallRules`

Update Firewall Rules (Trusted Sources) for a Database

```ts
digitalocean.databasesUpdateFirewallRules(input: {
  rules?: (FirewallRule)[];
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/firewall` · `databases_update_firewall_rules`</sub>

## `digitalocean.databasesListOpeasearchIndexes`

List Indexes for a OpenSearch Cluster

```ts
digitalocean.databasesListOpeasearchIndexes(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ indexes?: (OpensearchIndex)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/indexes` · `databases_list_opeasearch_indexes`</sub>

## `digitalocean.databasesDeleteOpensearchIndex`

Delete Index for OpenSearch Cluster

```ts
digitalocean.databasesDeleteOpensearchIndex(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the OpenSearch index. */
  index_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/indexes/{index_name}` · `databases_delete_opensearch_index`</sub>

## `digitalocean.databasesInstallUpdate`

Start Database Maintenance

```ts
digitalocean.databasesInstallUpdate(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/install_update` · `databases_install_update`</sub>

## `digitalocean.databasesListLogsink`

List Logsinks for a Database Cluster

```ts
digitalocean.databasesListLogsink(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ sinks?: (LogsinkSchema)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/logsink` · `databases_list_logsink`</sub>

## `digitalocean.databasesCreateLogsink`

Create Logsink for a Database Cluster

```ts
digitalocean.databasesCreateLogsink(input: {
  /** The name of the Logsink */
  sink_name: string;
  /** Type of logsink integration.  - Use `datadog` for Datadog integration **only with MongoDB clusters**. - For non-MongoDB clusters, use `rsyslog` for general syslog forwarding. - Other supported types include `elasticsearch` and `opensearch`.  More details about the configuration can be found in the `config` property.  */
  sink_type: "rsyslog" | "elasticsearch" | "opensearch" | "datadog";
  config: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ sink?: LogsinkSchema }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/logsink` · `databases_create_logsink`</sub>

## `digitalocean.databasesDeleteLogsink`

Delete Logsink for a Database Cluster

```ts
digitalocean.databasesDeleteLogsink(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** A unique identifier for a logsink of a database cluster */
  logsink_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/logsink/{logsink_id}` · `databases_delete_logsink`</sub>

## `digitalocean.databasesGetLogsink`

Get Logsink for a Database Cluster

```ts
digitalocean.databasesGetLogsink(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** A unique identifier for a logsink of a database cluster */
  logsink_id: string;
}): Promise<LogsinkSchema>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/logsink/{logsink_id}` · `databases_get_logsink`</sub>

## `digitalocean.databasesUpdateLogsink`

Update Logsink for a Database Cluster

```ts
digitalocean.databasesUpdateLogsink(input: {
  config: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** A unique identifier for a logsink of a database cluster */
  logsink_id: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/logsink/{logsink_id}` · `databases_update_logsink`</sub>

## `digitalocean.databasesUpdateMaintenanceWindow`

Configure a Database Cluster's Maintenance Window

```ts
digitalocean.databasesUpdateMaintenanceWindow(input: {
  /** The day of the week on which to apply maintenance updates. */
  day: string;
  /** The hour in UTC at which maintenance updates will be applied in 24 hour format. */
  hour: string;
  /** A boolean value indicating whether any maintenance is scheduled to be performed in the next window. */
  pending?: boolean;
  /** A list of strings, each containing information about a pending maintenance update. */
  description?: (string)[];
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/maintenance` · `databases_update_maintenanceWindow`</sub>

## `digitalocean.databasesUpdateRegion`

Migrate a Database Cluster to a New Region

```ts
digitalocean.databasesUpdateRegion(input: {
  /** A slug identifier for the region to which the database cluster will be migrated. */
  region: string;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/migrate` · `databases_update_region`</sub>

## `digitalocean.databasesGetMigrationStatus`

Retrieve the Status of an Online Migration

```ts
digitalocean.databasesGetMigrationStatus(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<OnlineMigration>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/online-migration` · `databases_get_migrationStatus`</sub>

## `digitalocean.databasesUpdateOnlineMigration`

Start an Online Migration

```ts
digitalocean.databasesUpdateOnlineMigration(input: {
  source: { host?: string; port?: number; dbname?: string; username?: string; password?: string };
  /** Enables SSL encryption when connecting to the source database. */
  disable_ssl?: boolean;
  /** List of databases that should be ignored during migration. */
  ignore_dbs?: (string)[];
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<OnlineMigration>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/online-migration` · `databases_update_onlineMigration`</sub>

## `digitalocean.databasesDeleteOnlineMigration`

Stop an Online Migration

```ts
digitalocean.databasesDeleteOnlineMigration(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** A unique identifier assigned to the online migration. */
  migration_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/online-migration/{migration_id}` · `databases_delete_onlineMigration`</sub>

## `digitalocean.databasesListConnectionPools`

List Connection Pools (PostgreSQL)

```ts
digitalocean.databasesListConnectionPools(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<ConnectionPools>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/pools` · `databases_list_connectionPools`</sub>

## `digitalocean.databasesAddConnectionPool`

Add a New Connection Pool (PostgreSQL)

```ts
digitalocean.databasesAddConnectionPool(input: {
  /** A unique name for the connection pool. Must be between 3 and 60 characters. */
  name: string;
  /** The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. */
  mode: string;
  /** The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster. */
  size: number;
  /** The database for use with the connection pool. */
  db: string;
  /** The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. */
  user?: string;
  connection?: DatabaseConnection & unknown;
  private_connection?: DatabaseConnection & unknown;
  standby_connection?: DatabaseConnection & unknown;
  standby_private_connection?: DatabaseConnection & unknown;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ pool: ConnectionPool }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/pools` · `databases_add_connectionPool`</sub>

## `digitalocean.databasesDeleteConnectionPool`

Delete a Connection Pool (PostgreSQL)

```ts
digitalocean.databasesDeleteConnectionPool(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the connection pool. */
  pool_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/pools/{pool_name}` · `databases_delete_connectionPool`</sub>

## `digitalocean.databasesGetConnectionPool`

Retrieve Existing Connection Pool (PostgreSQL)

```ts
digitalocean.databasesGetConnectionPool(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the connection pool. */
  pool_name: string;
}): Promise<{ pool: ConnectionPool }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/pools/{pool_name}` · `databases_get_connectionPool`</sub>

## `digitalocean.databasesUpdateConnectionPool`

Update Connection Pools (PostgreSQL)

```ts
digitalocean.databasesUpdateConnectionPool(input: {
  /** The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement. */
  mode: string;
  /** The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster. */
  size: number;
  /** The database for use with the connection pool. */
  db: string;
  /** The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user. */
  user?: string;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the connection pool. */
  pool_name: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/pools/{pool_name}` · `databases_update_connectionPool`</sub>

## `digitalocean.databasesListReplicas`

List All Read-only Replicas

```ts
digitalocean.databasesListReplicas(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ replicas?: (DatabaseReplicaRead)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/replicas` · `databases_list_replicas`</sub>

## `digitalocean.databasesCreateReplica`

Create a Read-only Replica

```ts
digitalocean.databasesCreateReplica(input: {
  /** A unique ID that can be used to identify and reference a database replica. */
  id?: string;
  /** The name to give the read-only replicating */
  name: string;
  /** A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster. */
  region?: string;
  /** A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating. */
  size: string;
  /** A string representing the current status of the database cluster. */
  status?: "creating" | "online" | "resizing" | "migrating" | "forking";
  /** A flat array of tag names as strings to apply to the read-only replica after it is created. Tag names can either be existing or new tags. <br><br>Requires `tag:create` scope. */
  tags?: (string)[];
  /** A time value given in ISO8601 combined date and time format that represents when the database cluster was created. */
  created_at?: string;
  /** A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region. <br><br>Requires `vpc:read` scope. */
  private_network_uuid?: string;
  connection?: unknown & DatabaseConnection;
  private_connection?: unknown & DatabaseConnection;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  do_settings?: DoSettings & unknown;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ replica?: DatabaseReplicaRead }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/replicas` · `databases_create_replica`</sub>

## `digitalocean.databasesDestroyReplica`

Destroy a Read-only Replica

```ts
digitalocean.databasesDestroyReplica(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database replica. */
  replica_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/replicas/{replica_name}` · `databases_destroy_replica`</sub>

## `digitalocean.databasesGetReplica`

Retrieve an Existing Read-only Replica

```ts
digitalocean.databasesGetReplica(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database replica. */
  replica_name: string;
}): Promise<{ replica?: DatabaseReplicaRead }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/replicas/{replica_name}` · `databases_get_replica`</sub>

## `digitalocean.databasesPromoteReplica`

Promote a Read-only Replica to become a Primary Cluster

```ts
digitalocean.databasesPromoteReplica(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database replica. */
  replica_name: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote` · `databases_promote_replica`</sub>

## `digitalocean.databasesUpdateClusterSize`

Resize a Database Cluster

```ts
digitalocean.databasesUpdateClusterSize(input: {
  /** A slug identifier representing desired the size of the nodes in the database cluster. */
  size: string;
  /** The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations. */
  num_nodes: number;
  /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
  storage_size_mib?: number;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/resize` · `databases_update_clusterSize`</sub>

## `digitalocean.databasesListKafkaSchemas`

List Schemas for Kafka Cluster

```ts
digitalocean.databasesListKafkaSchemas(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ subjects?: (KafkaSchemaVerbose)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/schema-registry` · `databases_list_kafka_schemas`</sub>

## `digitalocean.databasesCreateKafkaSchema`

Create Schema Registry for Kafka Cluster

```ts
digitalocean.databasesCreateKafkaSchema(input: {
  /** The name of the schema subject. */
  subject_name: string;
  /** The type of the schema. */
  schema_type: "AVRO" | "JSON" | "PROTOBUF";
  /** The schema definition in the specified format. */
  schema: string;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<KafkaSchemaVerbose>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/schema-registry` · `databases_create_kafka_schema`</sub>

## `digitalocean.databasesDeleteKafkaSchema`

Delete a Kafka Schema by Subject Name

```ts
digitalocean.databasesDeleteKafkaSchema(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the Kafka schema subject. */
  subject_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}` · `databases_delete_kafka_schema`</sub>

## `digitalocean.databasesGetKafkaSchema`

Get a Kafka Schema by Subject Name

```ts
digitalocean.databasesGetKafkaSchema(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the Kafka schema subject. */
  subject_name: string;
}): Promise<KafkaSchemaVersionVerbose>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}` · `databases_get_kafka_schema`</sub>

## `digitalocean.databasesGetKafkaSchemaVersion`

Get Kafka Schema by Subject Version

```ts
digitalocean.databasesGetKafkaSchemaVersion(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the Kafka schema subject. */
  subject_name: string;
  /** The version of the Kafka schema subject. */
  version: string;
}): Promise<KafkaSchemaVersionVerbose>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}/versions/{version}` · `databases_get_kafka_schema_version`</sub>

## `digitalocean.databasesGetKafkaSchemaConfig`

Retrieve Schema Registry Configuration for a kafka Cluster

```ts
digitalocean.databasesGetKafkaSchemaConfig(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/schema-registry/config` · `databases_get_kafka_schema_config`</sub>

## `digitalocean.databasesUpdateKafkaSchemaConfig`

Update Schema Registry Configuration for a kafka Cluster

```ts
digitalocean.databasesUpdateKafkaSchemaConfig(input: {
  /** The compatibility level of the schema registry. */
  compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE";
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/schema-registry/config` · `databases_update_kafka_schema_config`</sub>

## `digitalocean.databasesGetKafkaSchemaSubjectConfig`

Retrieve Schema Registry Configuration for a Subject of kafka Cluster

```ts
digitalocean.databasesGetKafkaSchemaSubjectConfig(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the Kafka schema subject. */
  subject_name: string;
}): Promise<{ subject_name: string; compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}` · `databases_get_kafka_schema_subject_config`</sub>

## `digitalocean.databasesUpdateKafkaSchemaSubjectConfig`

Update Schema Registry Configuration for a Subject of kafka Cluster

```ts
digitalocean.databasesUpdateKafkaSchemaSubjectConfig(input: {
  /** The compatibility level of the schema registry. */
  compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE";
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the Kafka schema subject. */
  subject_name: string;
}): Promise<{ subject_name: string; compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}` · `databases_update_kafka_schema_subject_config`</sub>

## `digitalocean.databasesGetSqlMode`

Retrieve the SQL Modes for a MySQL Cluster

```ts
digitalocean.databasesGetSqlMode(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<SqlMode>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/sql_mode` · `databases_get_sql_mode`</sub>

## `digitalocean.databasesUpdateSqlMode`

Update SQL Mode for a Cluster

```ts
digitalocean.databasesUpdateSqlMode(input: {
  /** A string specifying the configured SQL modes for the MySQL cluster. */
  sql_mode: string;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/sql_mode` · `databases_update_sql_mode`</sub>

## `digitalocean.databasesListKafkaTopics`

List Topics for a Kafka Cluster

```ts
digitalocean.databasesListKafkaTopics(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ topics?: (KafkaTopic)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/topics` · `databases_list_kafka_topics`</sub>

## `digitalocean.databasesCreateKafkaTopic`

Create Topic for a Kafka Cluster

```ts
digitalocean.databasesCreateKafkaTopic(input: {
  /** The name of the Kafka topic. */
  name: string;
  /** The number of nodes to replicate data across the cluster. */
  replication_factor?: number;
  /** The number of partitions available for the topic. On update, this value can only be increased. */
  partition_count?: number;
  config?: KafkaTopicConfig;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ topic?: KafkaTopicVerbose }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/topics` · `databases_create_kafka_topic`</sub>

## `digitalocean.databasesDeleteKafkaTopic`

Delete Topic for a Kafka Cluster

```ts
digitalocean.databasesDeleteKafkaTopic(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the Kafka topic. */
  topic_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/topics/{topic_name}` · `databases_delete_kafka_topic`</sub>

## `digitalocean.databasesGetKafkaTopic`

Get Topic for a Kafka Cluster

```ts
digitalocean.databasesGetKafkaTopic(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the Kafka topic. */
  topic_name: string;
}): Promise<{ topic?: KafkaTopicVerbose }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/topics/{topic_name}` · `databases_get_kafka_topic`</sub>

## `digitalocean.databasesUpdateKafkaTopic`

Update Topic for a Kafka Cluster

```ts
digitalocean.databasesUpdateKafkaTopic(input: {
  /** The number of nodes to replicate data across the cluster. */
  replication_factor?: number;
  /** The number of partitions available for the topic. On update, this value can only be increased. */
  partition_count?: number;
  config?: KafkaTopicConfig;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name used to identify the Kafka topic. */
  topic_name: string;
}): Promise<{ topic?: KafkaTopicVerbose }>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/topics/{topic_name}` · `databases_update_kafka_topic`</sub>

## `digitalocean.databasesUpdateMajorVersion`

Upgrade Major Version for a Database

```ts
digitalocean.databasesUpdateMajorVersion(input: {
  version?: Version;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/upgrade` · `databases_update_major_version`</sub>

## `digitalocean.databasesListUsers`

List all Database Users

```ts
digitalocean.databasesListUsers(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ users?: (DatabaseUser)[] }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/users` · `databases_list_users`</sub>

## `digitalocean.databasesAddUser`

Add a Database User

```ts
digitalocean.databasesAddUser(input: {
  /** The name of a database user. */
  name: string;
  /** A string representing the database user's role. The value will be either "primary" or "normal".  */
  role?: "primary" | "normal";
  /** A randomly generated password for the database user.<br>Requires `database:view_credentials` scope. */
  password?: string;
  /** Access certificate for TLS client authentication. (Kafka only) */
  access_cert?: string;
  /** Access key for TLS client authentication. (Kafka only) */
  access_key?: string;
  mysql_settings?: MysqlSettings;
  settings?: UserSettings;
  /** (To be deprecated: use settings.mongo_user_settings.role instead for access controls to MongoDB databases).  For MongoDB clusters, set to `true` to create a read-only user. This option is not currently supported for other database engines.              */
  readonly?: boolean;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
}): Promise<{ user: DatabaseUser }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/users` · `databases_add_user`</sub>

## `digitalocean.databasesDeleteUser`

Remove a Database User

```ts
digitalocean.databasesDeleteUser(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database user. */
  username: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/databases/{database_cluster_uuid}/users/{username}` · `databases_delete_user`</sub>

## `digitalocean.databasesGetUser`

Retrieve an Existing Database User

```ts
digitalocean.databasesGetUser(input: {
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database user. */
  username: string;
}): Promise<{ user: DatabaseUser }>
```

<sub>`GET /v2/databases/{database_cluster_uuid}/users/{username}` · `databases_get_user`</sub>

## `digitalocean.databasesUpdateUser`

Update a Database User

```ts
digitalocean.databasesUpdateUser(input: {
  settings: UserSettings;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database user. */
  username: string;
}): Promise<{ user: DatabaseUser }>
```

<sub>`PUT /v2/databases/{database_cluster_uuid}/users/{username}` · `databases_update_user`</sub>

## `digitalocean.databasesResetAuth`

Reset a Database User's Password or Authentication Method

```ts
digitalocean.databasesResetAuth(input: {
  mysql_settings?: MysqlSettings;
  /** A unique identifier for a database cluster. */
  database_cluster_uuid: string;
  /** The name of the database user. */
  username: string;
}): Promise<{ user: DatabaseUser }>
```

<sub>`POST /v2/databases/{database_cluster_uuid}/users/{username}/reset_auth` · `databases_reset_auth`</sub>

## `digitalocean.databasesGetClusterMetricsCredentials`

Retrieve Database Clusters' Metrics Endpoint Credentials

```ts
digitalocean.databasesGetClusterMetricsCredentials(): Promise<{ credentials?: DatabaseMetricsCredentials }>
```

<sub>`GET /v2/databases/metrics/credentials` · `databases_get_cluster_metrics_credentials`</sub>

## `digitalocean.databasesUpdateClusterMetricsCredentials`

Update Database Clusters' Metrics Endpoint Credentials

```ts
digitalocean.databasesUpdateClusterMetricsCredentials(input: {
  credentials?: DatabasesBasicAuthCredentials;
}): Promise<undefined>
```

<sub>`PUT /v2/databases/metrics/credentials` · `databases_update_cluster_metrics_credentials`</sub>

## `digitalocean.databasesListOptions`

List Database Options

```ts
digitalocean.databasesListOptions(): Promise<Options>
```

<sub>`GET /v2/databases/options` · `databases_list_options`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
