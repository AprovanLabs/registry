# Kubernetes

28 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.kubernetesListClusters`

List All Kubernetes Clusters

```ts
digitalocean.kubernetesListClusters(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ kubernetes_clusters?: (ClusterRead)[] } & Pagination & Meta>
```

<sub>`GET /v2/kubernetes/clusters` · `kubernetes_list_clusters`</sub>

## `digitalocean.kubernetesCreateCluster`

Create a New Kubernetes Cluster

```ts
digitalocean.kubernetesCreateCluster(input: {
  /** A unique ID that can be used to identify and reference a Kubernetes cluster. */
  id?: string;
  /** A human-readable name for a Kubernetes cluster. */
  name: string;
  /** The slug identifier for the region where the Kubernetes cluster is located. */
  region: string;
  /** The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions. */
  version: string;
  /** The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation. */
  cluster_subnet?: string;
  /** The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation. */
  service_subnet?: string;
  /** A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.<br><br>Requires `vpc:read` scope. */
  vpc_uuid?: string;
  /** The UUID of the VPC subnet to attach worker nodes to. When omitted on create, the default subnet for the VPC is used. This value cannot be changed after the cluster is created.  `vpc_uuid` must also be set. <br><br>Requires `vpc:read` scope.  */
  worker_subnet_uuid?: string;
  /** The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+) */
  ipv4?: string;
  /** The base URL of the API server on the Kubernetes master node. */
  endpoint?: string;
  /** An array of tags to apply to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` and `tag:create` scope, as well as `tag:delete` if existing tags are getting removed. */
  tags?: (string)[];
  /** An object specifying the details of the worker nodes available to the Kubernetes cluster. */
  node_pools: (KubernetesNodePool)[];
  maintenance_policy?: MaintenancePolicy;
  /** A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. */
  auto_upgrade?: boolean;
  /** A boolean value indicating whether worker nodes in the cluster are not assigned public IP addresses. When omitted on create, the default value is false. When enabled, a NAT gateway must exist in the VPC where the cluster is created. */
  isolated_workers?: boolean;
  /** An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster. */
  status?: { state?: "running" | "provisioning" | "degraded" | "error" | "deleted" | "upgrading" | "deleting"; message?: string };
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created. */
  created_at?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated. */
  updated_at?: string;
  /** A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. */
  surge_upgrade?: boolean;
  /** A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. When omitted on create, the default is version-dependent; for DOKS 1.36.0 and later, the default is true; for earlier versions, the default is false. */
  ha?: boolean;
  /** A read-only boolean value indicating if a container registry is integrated with the cluster. */
  registry_enabled?: boolean;
  control_plane_firewall?: ControlPlaneFirewall;
  cluster_autoscaler_configuration?: ClusterAutoscalerConfiguration;
  sso?: Sso;
  routing_agent?: RoutingAgent;
  p2p_oci_registry_plugin?: P2POciRegistryPlugin;
  amd_gpu_device_plugin?: AmdGpuDevicePlugin;
  amd_gpu_device_metrics_exporter_plugin?: AmdGpuDeviceMetricsExporterPlugin;
  nvidia_gpu_device_plugin?: NvidiaGpuDevicePlugin;
  rdma_shared_dev_plugin?: RdmaSharedDevPlugin;
  coredns_autoscaler?: CorednsAutoscaler;
}): Promise<{ kubernetes_cluster?: Cluster }>
```

<sub>`POST /v2/kubernetes/clusters` · `kubernetes_create_cluster`</sub>

## `digitalocean.kubernetesDeleteCluster`

Delete a Kubernetes Cluster

```ts
digitalocean.kubernetesDeleteCluster(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/clusters/{cluster_id}` · `kubernetes_delete_cluster`</sub>

## `digitalocean.kubernetesGetCluster`

Retrieve an Existing Kubernetes Cluster

```ts
digitalocean.kubernetesGetCluster(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ kubernetes_cluster?: ClusterRead }>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}` · `kubernetes_get_cluster`</sub>

## `digitalocean.kubernetesUpdateCluster`

Update a Kubernetes Cluster

```ts
digitalocean.kubernetesUpdateCluster(input: {
  /** A human-readable name for a Kubernetes cluster. */
  name: string;
  /** An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. */
  tags?: (string)[];
  maintenance_policy?: MaintenancePolicy;
  /** A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. */
  auto_upgrade?: boolean;
  /** A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. */
  surge_upgrade?: boolean;
  /** A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. When omitted on create, the default is version-dependent; for DOKS 1.36.0 and later, the default is true; for earlier versions, the default is false. */
  ha?: boolean;
  control_plane_firewall?: ControlPlaneFirewall;
  cluster_autoscaler_configuration?: ClusterAutoscalerConfiguration;
  sso?: Sso;
  routing_agent?: RoutingAgent;
  p2p_oci_registry_plugin?: P2POciRegistryPlugin;
  amd_gpu_device_plugin?: AmdGpuDevicePlugin;
  amd_gpu_device_metrics_exporter_plugin?: AmdGpuDeviceMetricsExporterPlugin;
  nvidia_gpu_device_plugin?: NvidiaGpuDevicePlugin;
  rdma_shared_dev_plugin?: RdmaSharedDevPlugin;
  coredns_autoscaler?: CorednsAutoscaler;
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ kubernetes_cluster?: Cluster }>
```

<sub>`PUT /v2/kubernetes/clusters/{cluster_id}` · `kubernetes_update_cluster`</sub>

## `digitalocean.kubernetesGetClusterLintResults`

Fetch Clusterlint Diagnostics for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetClusterLintResults(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** Specifies the clusterlint run whose results will be retrieved. */
  run_id?: string;
}): Promise<ClusterlintResults>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/clusterlint` · `kubernetes_get_clusterLintResults`</sub>

## `digitalocean.kubernetesRunClusterLint`

Run Clusterlint Checks on a Kubernetes Cluster

```ts
digitalocean.kubernetesRunClusterLint(input: {
  /** An array of check groups that will be run when clusterlint executes checks. */
  include_groups?: (string)[];
  /** An array of checks that will be run when clusterlint executes checks. */
  include_checks?: (string)[];
  /** An array of check groups that will be omitted when clusterlint executes checks. */
  exclude_groups?: (string)[];
  /** An array of checks that will be run when clusterlint executes checks. */
  exclude_checks?: (string)[];
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ run_id?: string }>
```

<sub>`POST /v2/kubernetes/clusters/{cluster_id}/clusterlint` · `kubernetes_run_clusterLint`</sub>

## `digitalocean.kubernetesGetCredentials`

Retrieve Credentials for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetCredentials(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry. */
  expiry_seconds?: number;
}): Promise<Credentials>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/credentials` · `kubernetes_get_credentials`</sub>

## `digitalocean.kubernetesListAssociatedResources`

List Associated Resources for Cluster Deletion

```ts
digitalocean.kubernetesListAssociatedResources(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<AssociatedKubernetesResources>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources` · `kubernetes_list_associatedResources`</sub>

## `digitalocean.kubernetesDestroyAssociatedResourcesDangerous`

Delete a Cluster and All of its Associated Resources (Dangerous)

```ts
digitalocean.kubernetesDestroyAssociatedResourcesDangerous(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous` · `kubernetes_destroy_associatedResourcesDangerous`</sub>

## `digitalocean.kubernetesDestroyAssociatedResourcesSelective`

Selectively Delete a Cluster and its Associated Resources

```ts
digitalocean.kubernetesDestroyAssociatedResourcesSelective(input: {
  /** A list of IDs for associated load balancers to destroy along with the cluster. */
  load_balancers?: (string)[];
  /** A list of IDs for associated volumes to destroy along with the cluster. */
  volumes?: (string)[];
  /** A list of IDs for associated volume snapshots to destroy along with the cluster. */
  volume_snapshots?: (string)[];
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective` · `kubernetes_destroy_associatedResourcesSelective`</sub>

## `digitalocean.kubernetesGetKubeconfig`

Retrieve the kubeconfig for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetKubeconfig(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry. */
  expiry_seconds?: number;
  /** The type of credentials to return in the kubeconfig. When omitted, the default credential type for the cluster is used: `sso` for clusters with SSO enabled, `token` for clusters without SSO enabled.  */
  type?: "token" | "sso";
}): Promise<undefined>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/kubeconfig` · `kubernetes_get_kubeconfig`</sub>

## `digitalocean.kubernetesListNodePools`

List All Node Pools in a Kubernetes Clusters

```ts
digitalocean.kubernetesListNodePools(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ node_pools?: (KubernetesNodePool)[] }>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/node_pools` · `kubernetes_list_nodePools`</sub>

## `digitalocean.kubernetesAddNodePool`

Add a Node Pool to a Kubernetes Cluster

```ts
digitalocean.kubernetesAddNodePool(input: {
  /** The slug identifier for the type of Droplet used as workers in the node pool. */
  size: string;
  /** A unique ID that can be used to identify and reference a specific node pool. */
  id?: string;
  /** A human-readable name for the node pool. */
  name: string;
  /** The number of Droplet instances in the node pool. */
  count: number;
  /** An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` scope. */
  tags?: (string)[];
  /** An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool. */
  labels?: { [key: string]: unknown } | null;
  /** An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool. */
  taints?: (KubernetesNodePoolTaint)[];
  /** A boolean value indicating whether auto-scaling is enabled for this node pool. */
  auto_scale?: boolean;
  /** The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  min_nodes?: number;
  /** The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  max_nodes?: number;
  /** An object specifying the details of a specific worker node in a node pool. */
  nodes?: (Node)[];
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ node_pool?: KubernetesNodePool }>
```

<sub>`POST /v2/kubernetes/clusters/{cluster_id}/node_pools` · `kubernetes_add_nodePool`</sub>

## `digitalocean.kubernetesDeleteNodePool`

Delete a Node Pool in a Kubernetes Cluster

```ts
digitalocean.kubernetesDeleteNodePool(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A unique ID that can be used to reference a Kubernetes node pool. */
  node_pool_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}` · `kubernetes_delete_nodePool`</sub>

## `digitalocean.kubernetesGetNodePool`

Retrieve a Node Pool for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetNodePool(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A unique ID that can be used to reference a Kubernetes node pool. */
  node_pool_id: string;
}): Promise<{ node_pool?: KubernetesNodePool }>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}` · `kubernetes_get_nodePool`</sub>

## `digitalocean.kubernetesUpdateNodePool`

Update a Node Pool in a Kubernetes Cluster

```ts
digitalocean.kubernetesUpdateNodePool(input: {
  /** A unique ID that can be used to identify and reference a specific node pool. */
  id?: string;
  /** A human-readable name for the node pool. */
  name: string;
  /** The number of Droplet instances in the node pool. */
  count: number;
  /** An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`. <br><br>Requires `tag:read` scope. */
  tags?: (string)[];
  /** An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool. */
  labels?: { [key: string]: unknown } | null;
  /** An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool. */
  taints?: (KubernetesNodePoolTaint)[];
  /** A boolean value indicating whether auto-scaling is enabled for this node pool. */
  auto_scale?: boolean;
  /** The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  min_nodes?: number;
  /** The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`. */
  max_nodes?: number;
  /** An object specifying the details of a specific worker node in a node pool. */
  nodes?: (Node)[];
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A unique ID that can be used to reference a Kubernetes node pool. */
  node_pool_id: string;
}): Promise<{ node_pool?: KubernetesNodePool }>
```

<sub>`PUT /v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}` · `kubernetes_update_nodePool`</sub>

## `digitalocean.kubernetesDeleteNode`

Delete a Node in a Kubernetes Cluster

```ts
digitalocean.kubernetesDeleteNode(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A unique ID that can be used to reference a Kubernetes node pool. */
  node_pool_id: string;
  /** A unique ID that can be used to reference a node in a Kubernetes node pool. */
  node_id: string;
  /** Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion. */
  skip_drain?: number;
  /** Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement. */
  replace?: number;
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}` · `kubernetes_delete_node`</sub>

## `digitalocean.kubernetesRecycleNodePool`

Recycle a Kubernetes Node Pool

```ts
digitalocean.kubernetesRecycleNodePool(input: {
  nodes?: (string)[];
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A unique ID that can be used to reference a Kubernetes node pool. */
  node_pool_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle` · `kubernetes_recycle_node_pool`</sub>

## `digitalocean.kubernetesGetStatusMessages`

Fetch Status Messages for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetStatusMessages(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
  /** A timestamp used to return status messages emitted since the specified time. The timestamp should be in ISO8601 format. */
  since?: string;
}): Promise<{ messages?: (StatusMessages)[] }>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/status_messages` · `kubernetes_get_status_messages`</sub>

## `digitalocean.kubernetesUpgradeCluster`

Upgrade a Kubernetes Cluster

```ts
digitalocean.kubernetesUpgradeCluster(input: {
  /** The slug identifier for the version of Kubernetes that the cluster will be upgraded to. */
  version?: string;
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/kubernetes/clusters/{cluster_id}/upgrade` · `kubernetes_upgrade_cluster`</sub>

## `digitalocean.kubernetesGetAvailableUpgrades`

Retrieve Available Upgrades for an Existing Kubernetes Cluster

```ts
digitalocean.kubernetesGetAvailableUpgrades(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<{ available_upgrade_versions?: (KubernetesVersion)[] | null }>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/upgrades` · `kubernetes_get_availableUpgrades`</sub>

## `digitalocean.kubernetesGetClusterUser`

Retrieve User Information for a Kubernetes Cluster

```ts
digitalocean.kubernetesGetClusterUser(input: {
  /** A unique ID that can be used to reference a Kubernetes cluster. */
  cluster_id: string;
}): Promise<User>
```

<sub>`GET /v2/kubernetes/clusters/{cluster_id}/user` · `kubernetes_get_clusterUser`</sub>

## `digitalocean.kubernetesListOptions`

List Available Regions, Node Sizes, and Versions of Kubernetes

```ts
digitalocean.kubernetesListOptions(): Promise<KubernetesOptions>
```

<sub>`GET /v2/kubernetes/options` · `kubernetes_list_options`</sub>

## `digitalocean.kubernetesRemoveRegistries`

Remove Container Registries from Kubernetes Clusters

```ts
digitalocean.kubernetesRemoveRegistries(input: {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
  /** An array containing the registry names. */
  registries?: (string)[];
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/registries` · `kubernetes_remove_registries`</sub>

## `digitalocean.kubernetesAddRegistries`

Add Container Registries to Kubernetes Clusters

```ts
digitalocean.kubernetesAddRegistries(input: {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
  /** An array containing the registry names. */
  registries?: (string)[];
}): Promise<undefined>
```

<sub>`POST /v2/kubernetes/registries` · `kubernetes_add_registries`</sub>

## `digitalocean.kubernetesRemoveRegistry`

Remove Container Registry from Kubernetes Clusters

```ts
digitalocean.kubernetesRemoveRegistry(input: {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
}): Promise<undefined>
```

<sub>`DELETE /v2/kubernetes/registry` · `kubernetes_remove_registry`</sub>

## `digitalocean.kubernetesAddRegistry`

Add Container Registry to Kubernetes Clusters

```ts
digitalocean.kubernetesAddRegistry(input: {
  /** An array containing the UUIDs of Kubernetes clusters. */
  cluster_uuids?: (string)[];
}): Promise<undefined>
```

<sub>`POST /v2/kubernetes/registry` · `kubernetes_add_registry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
