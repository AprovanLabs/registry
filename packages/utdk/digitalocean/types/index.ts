import type { AccessKey, AccessKeyCreateResponse, AccessPointActionResponse, AccessPointGetResponse, AccessPointListResponse, AccessPolicy, Account, Action, ActionLink, AddonsAppInfo, AddonsAppMetadata, AddonsResource, AddonsResourceMetadata, AffectedResource, Alert, AlertPolicy, Alerts, AmdGpuDeviceMetricsExporterPlugin, AmdGpuDevicePlugin, ApiAgentGuardrailInput, ApiAwsDataSource, ApiCancelKnowledgeBaseIndexingJobOutput, ApiCancelModelEvaluationRunOutput, ApiCandidateInferenceConfig, ApiCandidateModelSource, ApiChunkingAlgorithm, ApiChunkingOptions, ApiCreateAgentApiKeyOutput, ApiCreateAgentOutput, ApiCreateAnthropicApiKeyOutput, ApiCreateCustomEvaluationMetricOutput, ApiCreateDataSourceFileUploadPresignedUrlsOutput, ApiCreateEvaluationDatasetOutput, ApiCreateEvaluationTestCaseOutput, ApiCreateKnowledgeBaseDataSourceOutput, ApiCreateKnowledgeBaseOutput, ApiCreateModelEvaluationRunOutput, ApiCreateModelRouterOutput, ApiCreateOpenAiapiKeyOutput, ApiCreateScheduledIndexingOutput, ApiCreateWorkspaceOutput, ApiCustomEvaluationMetricConfig, ApiDeleteAgentApiKeyOutput, ApiDeleteAgentOutput, ApiDeleteAnthropicApiKeyOutput, ApiDeleteCustomEvaluationMetricOutput, ApiDeleteCustomModelOutputPublic, ApiDeleteEvaluationDatasetOutput, ApiDeleteKnowledgeBaseDataSourceOutput, ApiDeleteKnowledgeBaseOutput, ApiDeleteModelApiKeyOutput, ApiDeleteModelEvaluationPresetOutput, ApiDeleteModelEvaluationRunOutputPublic, ApiDeleteModelRouterOutput, ApiDeleteOpenAiapiKeyOutput, ApiDeleteScheduledIndexingOutput, ApiDeleteWorkspaceOutput, ApiDeploymentVisibility, ApiDropboxOauth2GetTokensOutput, ApiEvaluationDatasetType, ApiEvaluationTestCaseMetricList, ApiFileUploadDataSource, ApiGenerateOauth2UrlOutput, ApiGetAgentOutput, ApiGetAgentUsageOutput, ApiGetAnthropicApiKeyOutput, ApiGetChildrenOutput, ApiGetCustomModelOutputPublic, ApiGetEvaluationDatasetDownloadUrlOutput, ApiGetEvaluationRunOutput, ApiGetEvaluationRunPromptResultsOutput, ApiGetEvaluationRunResultsOutput, ApiGetEvaluationTestCaseOutput, ApiGetIndexingJobDetailsSignedUrlOutput, ApiGetKnowledgeBaseIndexingJobOutput, ApiGetKnowledgeBaseOutput, ApiGetModelCatalogCardOutput, ApiGetModelEvaluationPresetOutput, ApiGetModelEvaluationRunOutput, ApiGetModelEvaluationRunResultsDownloadUrlOutput, ApiGetModelRouterOutput, ApiGetOpenAiapiKeyOutput, ApiGetScheduledIndexingOutput, ApiGetWorkspaceOutput, ApiImportCustomModelOutputPublic, ApiKbDataSource, ApiLinkAgentFunctionOutput, ApiLinkAgentGuardrailOutput, ApiLinkAgentOutput, ApiLinkKnowledgeBaseOutput, ApiListAgentApiKeysOutput, ApiListAgentVersionsOutput, ApiListAgentsByAnthropicKeyOutput, ApiListAgentsByOpenAiKeyOutput, ApiListAgentsByWorkspaceOutput, ApiListAgentsOutputPublic, ApiListAnthropicApiKeysOutput, ApiListCustomModelsOutputPublic, ApiListEvaluationDatasetsOutput, ApiListEvaluationMetricsOutput, ApiListEvaluationRunsByTestCaseOutput, ApiListEvaluationTestCasesByWorkspaceOutput, ApiListEvaluationTestCasesOutput, ApiListIndexingJobDataSourcesOutput, ApiListKnowledgeBaseDataSourcesOutput, ApiListKnowledgeBaseIndexingJobsOutput, ApiListKnowledgeBasesOutput, ApiListModelApiKeysOutput, ApiListModelCatalogOutput, ApiListModelEvaluationMetricsOutput, ApiListModelEvaluationPresetsOutput, ApiListModelEvaluationRunsOutput, ApiListModelRouterPresetsOutput, ApiListModelRouterTaskPresetsOutput, ApiListModelRoutersOutput, ApiListModelsOutputPublic, ApiListOpenAiapiKeysOutput, ApiListRegionsOutput, ApiListWorkspacesOutput, ApiMcpServer, ApiModelRouterTaskPolicy, ApiMoveAgentsToWorkspaceOutput, ApiOpenSearchPlanSize, ApiPresetSaveSection, ApiPresignedUrlFile, ApiRegenerateAgentApiKeyOutput, ApiRegenerateModelApiKeyOutput, ApiRerankingConfiguration, ApiRetrievalMethod, ApiRollbackToAgentVersionOutput, ApiRunEvaluationTestCaseOutput, ApiSpacesDataSource, ApiStarMetric, ApiStartKnowledgeBaseIndexingJobOutput, ApiUnlinkAgentFunctionOutput, ApiUnlinkAgentGuardrailOutput, ApiUnlinkAgentOutput, ApiUnlinkKnowledgeBaseOutput, ApiUpdateAgentApiKeyOutput, ApiUpdateAgentDeploymentVisbilityOutput, ApiUpdateAgentFunctionOutput, ApiUpdateAgentOutput, ApiUpdateAnthropicApiKeyOutput, ApiUpdateCustomEvaluationMetricOutput, ApiUpdateCustomModelMetadataOutputPublic, ApiUpdateEvaluationTestCaseOutput, ApiUpdateKnowledgeBaseDataSourceOutput, ApiUpdateKnowledgeBaseOutput, ApiUpdateLinkedAgentOutput, ApiUpdateModelApiKeyOutput, ApiUpdateModelEvaluationRunOutput, ApiUpdateModelRouterOutput, ApiUpdateOpenAiapiKeyOutput, ApiUpdateWorkspaceOutput, ApiWebCrawlerDataSource, AppAlertEmail, AppAlertSlackWebhook, AppEvent, AppEvents, AppHealthResponse, AppInstances, AppJobInvocation, AppJobInvocations, AppMetricsBandwidthUsage, AppProposeResponse, AppResponse, AppRollbackValidationCondition, AppSpec, AppsAlertResponse, AppsDeleteAppResponse, AppsDeploymentResponse, AppsDeploymentsResponse, AppsGetExecResponse, AppsGetInstanceSizeResponse, AppsGetLogsResponse, AppsListAlertsResponse, AppsListInstanceSizesResponse, AppsListRegionsResponse, AppsResponse, AssociatedKubernetesResources, AssociatedResource, AssociatedResourceStatus, AsyncInvokeResponse, AutoscalePool, AutoscalePoolDropletTemplate, AutoscalePoolDynamicConfig, AutoscalePoolStaticConfig, Backup, Balance, Batch, BatchFileCreateResponse, BatchListResponse, BatchResultsResponse, BillingDataPoint, BillingHistory, ByoipPrefix, ByoipPrefixResource, Ca, CdnEndpoint, Certificate, CertificateRequestCustom, CertificateRequestLetsEncrypt, ChatCompletionTool, ChatMessage, Check, Cluster, ClusterAutoscalerConfiguration, ClusterRead, ClusterlintResults, ConnectionPool, ConnectionPools, ControlPlaneFirewall, CorednsAutoscaler, CreateTeam, Credentials, CustomModelSourceRef, CustomModelSourceType, CustomModelTags, Database, DatabaseAutoscaleParams, DatabaseBackup, DatabaseClusterRead, DatabaseConnection, DatabaseMaintenanceWindow, DatabaseMetricsCredentials, DatabaseReplicaRead, DatabaseServiceEndpoint, DatabaseStorageAutoscaleParams, DatabaseUser, DatabasesBasicAuthCredentials, DatadogLogsink, DedicatedInference, DedicatedInferenceAccelerator, DedicatedInferenceAccessToken, DedicatedInferenceGpuModelConfigsResponse, DedicatedInferenceSizesResponse, DedicatedInferenceSpec, DestinationOmitCredentials, Distribution, DoSettings, DockerCredentials, Domain, DomainRecord, DomainRecordA, DomainRecordAaaa, DomainRecordCaa, DomainRecordCname, DomainRecordMx, DomainRecordNs, DomainRecordSoa, DomainRecordSrv, DomainRecordTxt, Droplet, DropletAction, DropletActionChangeBackupPolicy, DropletActionChangeKernel, DropletActionEnableBackups, DropletActionRebuild, DropletActionRename, DropletActionResize, DropletActionRestore, DropletActionSnapshot, DropletBackupPolicyRecord, DropletMultiCreate, DropletSingleCreate, DropletSnapshot, ElasticsearchLogsink, EmbeddingsResponse, EventsLogs, EvictionPolicyModel, ExistingTagsArray, Firewall, FirewallRule, FirewallRules, FloatingIp, FloatingIpActionAssign, FloatingIpActionUnassign, FloatingIpCreate, ForwardingRule, GarbageCollection, Grant, History, Image, ImageActionBase, ImageActionTransfer, ImageDescription, ImageName, ImagesPostAccountTransferCreate, InvoiceItem, InvoicePreview, InvoiceSummary, KafkaAdvancedConfig, KafkaSchemaVerbose, KafkaSchemaVersionVerbose, KafkaTopic, KafkaTopicConfig, KafkaTopicVerbose, Kernel, Key, KeyCreateResponse, KubernetesNodePool, KubernetesNodePoolTaint, KubernetesOptions, KubernetesVersion, ListAlertPolicy, ListModelsResponse, LoadBalancer, LoadBalancerCreate, LogsinkSchema, MaintenancePolicy, Member, MessagesApiMessageParam, MessagesRequestTextBlockParam, MessagesThinkingConfigParam, MessagesToolChoiceParam, MessagesToolDefinitionParam, Meta, MetaOptionalTotal, Metrics, MongoAdvancedConfig, Multiregistry, MysqlAdvancedConfig, MysqlSettings, NamespaceInfo, NeighborIds, NfsActionAttach, NfsActionDetach, NfsActionReassign, NfsActionResize, NfsActionSnapshot, NfsActionSwitchPerformanceTier, NfsActionsResponse, NfsCreateResponse, NfsGetResponse, NfsListResponse, NfsSnapshotGetResponse, NfsSnapshotListResponse, Node, Notification, NvidiaGpuDevicePlugin, OneClicks, OnlineMigration, OpensearchAdvancedConfig, OpensearchConfigRequest, OpensearchConnection, OpensearchIndex, OpensearchLogsink, Options, OrganizationTeam, P2POciRegistryPlugin, Pagination, PartnerAttachment, PartnerAttachmentRemoteRoute, PartnerAttachmentUpdatable, PostgresAdvancedConfig, Project, RdmaSharedDevPlugin, RedisAdvancedConfig, Region, RegionSlug, Registry, Repository, RepositoryManifest, RepositoryTag, RepositoryV2, ReservedIp, ReservedIpActionAssign, ReservedIpActionUnassign, ReservedIpCreate, ReservedIpv6, ReservedIpv6ActionAssign, ReservedIpv6ActionUnassign, ReservedIpv6List, Resource, RoutingAgent, RsyslogLogsink, Scan, ScheduledDetails, Schema, SchemaRegistryConnection, Settings, SinkResource, SinksResponse, Size, Snapshots, SqlMode, SshKeyFingerprint, SshKeyId, SshKeyName, SshKeys, Sso, State, StatusMessages, Subscription, SubscriptionTierBase, SubscriptionTierExtended, SupportedDropletBackupPolicy, SuppressedResourceRoot, Tags, TagsArray, TagsMetadata, TeamInvitation, TeamInvitationStatus, TransferId, TriggerInfo, Urn, User, UserSettings, ValkeyAdvancedConfig, VectordbCreateVectorDbResponse, VectordbGetRestoreStatusResponse, VectordbGetVectorDbAdminCredentialsResponse, VectordbGetVectorDbResponse, VectordbListBackupsResponse, VectordbListVectorDBsResponse, VectordbResizeVectorDbResponse, VectordbRestoreBackupResponse, VectordbUpdateVectorDbResponse, VectordbUpdateVectorDbTagsResponse, VectordbVectorDbConfig, Version, VolumeAction, VolumeActionPostAttach, VolumeActionPostDetach, VolumeActionPostResize, VolumeFull, VolumesExt4, VolumesXfs, Vpc, VpcMember, VpcNatGatewayCreate, VpcNatGatewayGet, VpcNatGatewayUpdate, VpcPeering } from "./schemas.js";

export type DigitaloceanClient = {
  /**
   * List 1-Click Applications
   */
  oneClicksList: (input: {
    /** Restrict results to a certain type of 1-Click. */
    type?: "droplet" | "kubernetes";
  }) => Promise<{ "1_clicks"?: (OneClicks)[] }>;

  /**
   * Install Kubernetes 1-Click Applications
   */
  oneClicksInstallKubernetes: (input: {
    /** An array of 1-Click Application slugs to be installed to the Kubernetes cluster. */
    addon_slugs: (string)[];
    /** A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed. */
    cluster_uuid: string;
  }) => Promise<{ message?: string }>;

  /**
   * Get User Information
   */
  accountGet: () => Promise<{ account?: Account }>;

  /**
   * List All SSH Keys
   */
  sshKeysList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ ssh_keys?: (SshKeys)[] } & Pagination & Meta>;

  /**
   * Create a New SSH Key
   */
  sshKeysCreate: (input: {
    id?: SshKeyId;
    fingerprint?: SshKeyFingerprint;
    /** The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation. */
    public_key: string;
    name: SshKeyName;
  }) => Promise<{ ssh_key?: SshKeys }>;

  /**
   * Retrieve an Existing SSH Key
   */
  sshKeysGet: (input: {
    /** Either the ID or the fingerprint of an existing SSH key. */
    ssh_key_identifier: SshKeyId | SshKeyFingerprint;
  }) => Promise<{ ssh_key?: SshKeys }>;

  /**
   * Update an SSH Key's Name
   */
  sshKeysUpdate: (input: {
    name?: SshKeyName;
    /** Either the ID or the fingerprint of an existing SSH key. */
    ssh_key_identifier: SshKeyId | SshKeyFingerprint;
  }) => Promise<{ ssh_key?: SshKeys }>;

  /**
   * Delete an SSH Key
   */
  sshKeysDelete: (input: {
    /** Either the ID or the fingerprint of an existing SSH key. */
    ssh_key_identifier: SshKeyId | SshKeyFingerprint;
  }) => Promise<undefined>;

  /**
   * List All Actions
   */
  actionsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ actions?: (Action)[] } & Pagination & Meta>;

  /**
   * Retrieve an Existing Action
   */
  actionsGet: (input: {
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
  }) => Promise<{ action?: Action }>;

  /**
   * List Available Add-On Applications
   */
  addonsGetApp: () => Promise<{ apps?: (AddonsAppInfo)[] }>;

  /**
   * Get Metadata for an Add-On Application
   */
  addonsGetAppMetadata: (input: {
    /** The slug identifier for the application whose metadata is being requested. */
    app_slug: string;
  }) => Promise<{ metadata?: (AddonsAppMetadata)[] }>;

  /**
   * List all Add-On Resources
   */
  addonsList: () => Promise<{ resources?: (AddonsResource)[] }>;

  /**
   * Create/Provision a New Add-on Resource
   */
  addonsCreate: (input: {
    /** The slug identifier for the application associated with the resource. */
    app_slug: string;
    /** The slug identifier for the plan associated with the resource. */
    plan_slug: string;
    /** The name of the addon resource. */
    name: string;
    /** Metadata associated with the resource, set by the user. Metadata expected varies per app, and can be verified with a GET request to "/v2/add-ons/apps/{app_slug}/metadata" */
    metadata: (AddonsResourceMetadata)[];
    /** ID of the droplet to be linked to this resource, if applicable. */
    linked_droplet_id?: number;
    /** UUID of the fleet/project to which this resource will belong. */
    fleet_uuid?: string;
  }) => Promise<{ resource?: AddonsResource }>;

  /**
   * Get details on an Add-On Resource
   */
  addonsGet: (input: {
    /** The UUID of the add-on resource to retrieve. */
    resource_uuid: string;
  }) => Promise<{ resource?: AddonsResource }>;

  /**
   * Delete/Deprovision an Add-on Resource
   */
  addonsDelete: (input: {
    /** A unique identifier for the add-on resource. */
    resource_uuid: string;
  }) => Promise<undefined>;

  /**
   * Update the name for an Add-On Resource
   */
  addonsPatch: (input: {
    /** The new name for the add-on resource. */
    name: string;
    /** The UUID of the add-on resource to rename. */
    resource_uuid: string;
  }) => Promise<{ resource?: AddonsResource }>;

  /**
   * Update the plan for an Add-On Resource
   */
  addonsPatchPlan: (input: {
    /** The slug identifier for the new plan to apply to the add-on resource. */
    plan_slug: string;
    /** The UUID of the add-on resource to update. */
    resource_uuid: string;
  }) => Promise<{ resource?: AddonsResource }>;

  /**
   * List All Apps
   */
  appsList: (input: {
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Whether the project_id of listed apps should be fetched and included. */
    with_projects?: boolean;
  }) => Promise<AppsResponse>;

  /**
   * Create a New App
   */
  appsCreate: (input: {
    spec: AppSpec;
    /** The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project. <br><br>Requires `project:assign_resource` scope.  */
    project_id?: string;
  }, options?: { headers?: { Accept?: "application/json" | "application/yaml"; "Content-Type"?: "application/json" | "application/yaml" } }) => Promise<AppResponse>;

  /**
   * Delete an App
   */
  appsDelete: (input: {
    /** The ID of the app */
    id: string;
  }) => Promise<AppsDeleteAppResponse>;

  /**
   * Retrieve an Existing App
   */
  appsGet: (input: {
    /** The ID of the app */
    id: string;
    /** The name of the app to retrieve. */
    name?: string;
  }) => Promise<AppResponse>;

  /**
   * Update an App
   */
  appsUpdate: (input: {
    spec: AppSpec;
    /** Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code. */
    update_all_source_versions?: boolean;
    /** The ID of the app */
    id: string;
  }) => Promise<AppResponse>;

  /**
   * Restart an App
   */
  appsRestart: (input: {
    components?: (string)[];
    /** The app ID */
    app_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Retrieve Active Deployment Logs
   */
  appsGetLogsActiveDeployment: (input: {
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
  }) => Promise<AppsGetLogsResponse>;

  /**
   * Retrieve Exec URL
   */
  appsGetExecActiveDeployment: (input: {
    /** The app ID */
    app_id: string;
    /** An optional component name. If set, logs will be limited to this component only. */
    component_name: string;
    /** The name of the actively running ephemeral compute instance */
    instance_name?: string;
  }) => Promise<AppsGetExecResponse>;

  /**
   * Retrieve App Instances
   */
  appsGetInstances: (input: {
    /** The app ID */
    app_id: string;
  }) => Promise<AppInstances>;

  /**
   * List App Deployments
   */
  appsListDeployments: (input: {
    /** The app ID */
    app_id: string;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Optional. Filter deployments by deployment_type   - MANUAL: manual deployment   - DEPLOY_ON_PUSH: deployment triggered by a push to the app's repository   - MAINTENANCE: deployment for maintenance purposes   - MANUAL_ROLLBACK: manual revert to a previous deployment   - AUTO_ROLLBACK: automatic revert to a previous deployment   - UPDATE_DATABASE_TRUSTED_SOURCES: update database trusted sources   - AUTOSCALED: deployment that has been autoscaled */
    deployment_types?: ("MANUAL" | "DEPLOY_ON_PUSH" | "MAINTENANCE" | "MANUAL_ROLLBACK" | "AUTO_ROLLBACK" | "UPDATE_DATABASE_TRUSTED_SOURCES" | "AUTOSCALED")[];
  }) => Promise<AppsDeploymentsResponse>;

  /**
   * Create an App Deployment
   */
  appsCreateDeployment: (input: {
    force_build?: boolean;
    /** The app ID */
    app_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Retrieve an App Deployment
   */
  appsGetDeployment: (input: {
    /** The app ID */
    app_id: string;
    /** The deployment ID */
    deployment_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Cancel a Deployment
   */
  appsCancelDeployment: (input: {
    /** The app ID */
    app_id: string;
    /** The deployment ID */
    deployment_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Retrieve Deployment Logs
   */
  appsGetLogs: (input: {
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
  }) => Promise<AppsGetLogsResponse>;

  /**
   * Retrieve Aggregate Deployment Logs
   */
  appsGetLogsAggregate: (input: {
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
  }) => Promise<AppsGetLogsResponse>;

  /**
   * Retrieve Exec URL for Deployment
   */
  appsGetExec: (input: {
    /** The app ID */
    app_id: string;
    /** The deployment ID */
    deployment_id: string;
    /** An optional component name. If set, logs will be limited to this component only. */
    component_name: string;
    /** The name of the actively running ephemeral compute instance */
    instance_name?: string;
  }) => Promise<AppsGetExecResponse>;

  /**
   * Retrieve Active Deployment Aggregate Logs
   */
  appsGetLogsActiveDeploymentAggregate: (input: {
    /** The app ID */
    app_id: string;
    /** Whether the logs should follow live updates. */
    follow?: boolean;
    /** The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) */
    type: "UNSPECIFIED" | "BUILD" | "DEPLOY" | "RUN" | "RUN_RESTARTED" | "AUTOSCALE_EVENT";
    /** An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. */
    pod_connection_timeout?: string;
  }) => Promise<AppsGetLogsResponse>;

  /**
   * List Job Invocations
   */
  appsListJobInvocations: (input: {
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
  }) => Promise<AppJobInvocations>;

  /**
   * Get Job Invocations
   */
  appsGetJobInvocation: (input: {
    /** The app ID */
    app_id: string;
    /** The ID of the job invocation to retrieve. */
    job_invocation_id: string;
    /** The job name to list job invocations for. */
    job_name?: string;
  }) => Promise<AppJobInvocation>;

  /**
   * Cancel Job Invocation
   */
  appsCancelJobInvocation: (input: {
    /** The app ID */
    app_id: string;
    /** The ID of the job invocation to retrieve. */
    job_invocation_id: string;
    /** The job name to list job invocations for. */
    job_name?: string;
  }) => Promise<AppJobInvocation>;

  /**
   * Retrieve Job Invocation Logs
   */
  appsGetJobInvocationLogs: (input: {
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
  }) => Promise<AppsGetLogsResponse>;

  /**
   * List App Events
   */
  appsListEvents: (input: {
    /** The app ID */
    app_id: string;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Filter events by event type. */
    event_types?: ("UNKNOWN" | "DEPLOYMENT" | "AUTOSCALING")[];
  }) => Promise<AppEvents>;

  /**
   * Get an Event
   */
  appsGetEvent: (input: {
    /** The app ID */
    app_id: string;
    /** The event ID */
    event_id: string;
  }) => Promise<{ event?: AppEvent }>;

  /**
   * Cancel an Event
   */
  appsCancelEvent: (input: {
    /** The app ID */
    app_id: string;
    /** The event ID */
    event_id: string;
  }) => Promise<{ event?: AppEvent }>;

  /**
   * Retrieve Event Logs
   */
  appsGetEventLogs: (input: {
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
  }) => Promise<AppsGetLogsResponse>;

  /**
   * List Instance Sizes
   */
  appsListInstanceSizes: () => Promise<AppsListInstanceSizesResponse>;

  /**
   * Retrieve an Instance Size
   */
  appsGetInstanceSize: (input: {
    /** The slug of the instance size */
    slug: string;
  }) => Promise<AppsGetInstanceSizeResponse>;

  /**
   * List App Regions
   */
  appsListRegions: () => Promise<AppsListRegionsResponse>;

  /**
   * Propose an App Spec
   */
  appsValidateAppSpec: (input: {
    spec: AppSpec;
    /** An optional ID of an existing app. If set, the spec will be treated as a proposed update to the specified app. The existing app is not modified using this method. */
    app_id?: string;
  }) => Promise<AppProposeResponse>;

  /**
   * List all app alerts
   */
  appsListAlerts: (input: {
    /** The app ID */
    app_id: string;
  }) => Promise<AppsListAlertsResponse>;

  /**
   * Update destinations for alerts
   */
  appsAssignAlertDestinations: (input: {
    emails?: (AppAlertEmail)[];
    slack_webhooks?: (AppAlertSlackWebhook)[];
    /** The app ID */
    app_id: string;
    /** The alert ID */
    alert_id: string;
  }) => Promise<AppsAlertResponse>;

  /**
   * Rollback App
   */
  appsCreateRollback: (input: {
    /** The ID of the deployment to rollback to. */
    deployment_id?: string;
    /** Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned. */
    skip_pin?: boolean;
    /** The app ID */
    app_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Validate App Rollback
   */
  appsValidateRollback: (input: {
    /** The ID of the deployment to rollback to. */
    deployment_id?: string;
    /** Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned. */
    skip_pin?: boolean;
    /** The app ID */
    app_id: string;
  }) => Promise<{ valid?: boolean; error?: unknown & AppRollbackValidationCondition; warnings?: (AppRollbackValidationCondition)[] }>;

  /**
   * Commit App Rollback
   */
  appsCommitRollback: (input: {
    /** The app ID */
    app_id: string;
  }) => Promise<undefined>;

  /**
   * Revert App Rollback
   */
  appsRevertRollback: (input: {
    /** The app ID */
    app_id: string;
  }) => Promise<AppsDeploymentResponse>;

  /**
   * Retrieve App Daily Bandwidth Metrics
   */
  appsGetMetricsBandwidthDaily: (input: {
    /** The app ID */
    app_id: string;
    /** Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. */
    date?: string;
  }) => Promise<AppMetricsBandwidthUsage>;

  /**
   * Retrieve Multiple Apps' Daily Bandwidth Metrics
   */
  appsListMetricsBandwidthDaily: (input: {
    /** A list of app IDs to query bandwidth metrics for. */
    app_ids: (string)[];
    /** Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday. */
    date?: string;
  }) => Promise<AppMetricsBandwidthUsage>;

  /**
   * Retrieve App Health
   */
  appsGetHealth: (input: {
    /** The app ID */
    app_id: string;
  }) => Promise<AppHealthResponse>;

  /**
   * List All CDN Endpoints
   */
  cdnListEndpoints: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ endpoints?: (CdnEndpoint)[] } & Pagination & Meta>;

  /**
   * Create a New CDN Endpoint
   */
  cdnCreateEndpoint: (input: {
    /** A unique ID that can be used to identify and reference a CDN endpoint. */
    id?: string;
    /** The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space. */
    origin: string;
    /** The fully qualified domain name (FQDN) from which the CDN-backed content is served. */
    endpoint?: string;
    /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
    ttl?: 60 | 600 | 3600 | 86400 | 604800;
    /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
    certificate_id?: string;
    /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
    custom_domain?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created. */
    created_at?: string;
  }) => Promise<{ endpoint?: CdnEndpoint }>;

  /**
   * Retrieve an Existing CDN Endpoint
   */
  cdnGetEndpoint: (input: {
    /** A unique identifier for a CDN endpoint. */
    cdn_id: string;
  }) => Promise<{ endpoint?: CdnEndpoint }>;

  /**
   * Update a CDN Endpoint
   */
  cdnUpdateEndpoints: (input: {
    /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
    ttl?: 60 | 600 | 3600 | 86400 | 604800;
    /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
    certificate_id?: string;
    /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
    custom_domain?: string;
    /** A unique identifier for a CDN endpoint. */
    cdn_id: string;
  }) => Promise<{ endpoint?: CdnEndpoint }>;

  /**
   * Delete a CDN Endpoint
   */
  cdnDeleteEndpoint: (input: {
    /** A unique identifier for a CDN endpoint. */
    cdn_id: string;
  }) => Promise<undefined>;

  /**
   * Purge the Cache for an Existing CDN Endpoint
   */
  cdnPurgeCache: (input: {
    /** An array of strings containing the path to the content to be purged from the CDN cache. */
    files: (string)[];
    /** A unique identifier for a CDN endpoint. */
    cdn_id: string;
  }) => Promise<undefined>;

  /**
   * List All Certificates
   */
  certificatesList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Name of expected certificate */
    name?: string;
  }) => Promise<{ certificates?: (Certificate)[] } & Pagination & Meta>;

  /**
   * Create a New Certificate
   */
  certificatesCreate: (input: {
    body: CertificateRequestLetsEncrypt | CertificateRequestCustom;
  }) => Promise<{ certificate?: Certificate }>;

  /**
   * Retrieve an Existing Certificate
   */
  certificatesGet: (input: {
    /** A unique identifier for a certificate. */
    certificate_id: string;
  }) => Promise<{ certificate?: Certificate }>;

  /**
   * Delete a Certificate
   */
  certificatesDelete: (input: {
    /** A unique identifier for a certificate. */
    certificate_id: string;
  }) => Promise<undefined>;

  /**
   * Get Customer Balance
   */
  balanceGet: () => Promise<Balance>;

  /**
   * List Billing History
   */
  billingHistoryList: () => Promise<{ billing_history?: (BillingHistory)[] } & Pagination & MetaOptionalTotal>;

  /**
   * List All Invoices
   */
  invoicesList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ invoices?: (InvoicePreview)[]; invoice_preview?: InvoicePreview } & Pagination & Meta>;

  /**
   * Retrieve an Invoice by UUID
   */
  invoicesGetByUuid: (input: {
    /** UUID of the invoice */
    invoice_uuid: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ invoice_items?: (InvoiceItem)[] } & Pagination & Meta>;

  /**
   * Retrieve an Invoice CSV by UUID
   */
  invoicesGetCsvByUuid: (input: {
    /** UUID of the invoice */
    invoice_uuid: string;
  }) => Promise<string>;

  /**
   * Retrieve an Invoice PDF by UUID
   */
  invoicesGetPdfByUuid: (input: {
    /** UUID of the invoice */
    invoice_uuid: string;
  }) => Promise<string>;

  /**
   * Retrieve an Invoice Summary by UUID
   */
  invoicesGetSummaryByUuid: (input: {
    /** UUID of the invoice */
    invoice_uuid: string;
  }) => Promise<InvoiceSummary>;

  /**
   * List Billing Insights
   */
  billingInsightsList: (input: {
    /** URN of the customer account, can be a team (do:team:uuid) or an organization (do:teamgroup:uuid) */
    account_urn: string;
    /** Start date for billing insights in YYYY-MM-DD format */
    start_date: string;
    /** End date for billing insights in YYYY-MM-DD format. Must be within 31 days of start_date */
    end_date: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ data_points: (BillingDataPoint)[]; total_items: number; total_pages: number; current_page: number }>;

  /**
   * List Database Options
   */
  databasesListOptions: () => Promise<Options>;

  /**
   * List All Database Clusters
   */
  databasesListClusters: (input: {
    /** Limits the results to database clusters with a specific tag.<br><br>Requires `tag:read` scope. */
    tag_name?: string;
  }) => Promise<{ databases?: (DatabaseClusterRead)[] }>;

  /**
   * Create a New Database Cluster
   */
  databasesCreateCluster: (input: {
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
  }) => Promise<{ database: DatabaseClusterRead }>;

  /**
   * Retrieve an Existing Database Cluster
   */
  databasesGetCluster: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ database: DatabaseClusterRead }>;

  /**
   * Destroy a Database Cluster
   */
  databasesDestroyCluster: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Retrieve an Existing Database Cluster Configuration
   */
  databasesGetConfig: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ config: MysqlAdvancedConfig | PostgresAdvancedConfig | RedisAdvancedConfig | ValkeyAdvancedConfig | KafkaAdvancedConfig | OpensearchAdvancedConfig | MongoAdvancedConfig }>;

  /**
   * Update the Database Configuration for an Existing Database
   */
  databasesPatchConfig: (input: {
    config?: MysqlAdvancedConfig | PostgresAdvancedConfig | RedisAdvancedConfig | ValkeyAdvancedConfig | MongoAdvancedConfig | KafkaAdvancedConfig | OpensearchAdvancedConfig;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Retrieve the Public Certificate
   */
  databasesGetCa: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ ca: Ca }>;

  /**
   * Retrieve the Status of an Online Migration
   */
  databasesGetMigrationStatus: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<OnlineMigration>;

  /**
   * Start an Online Migration
   */
  databasesUpdateOnlineMigration: (input: {
    source: { host?: string; port?: number; dbname?: string; username?: string; password?: string };
    /** Enables SSL encryption when connecting to the source database. */
    disable_ssl?: boolean;
    /** List of databases that should be ignored during migration. */
    ignore_dbs?: (string)[];
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<OnlineMigration>;

  /**
   * Stop an Online Migration
   */
  databasesDeleteOnlineMigration: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** A unique identifier assigned to the online migration. */
    migration_id: string;
  }) => Promise<undefined>;

  /**
   * Migrate a Database Cluster to a New Region
   */
  databasesUpdateRegion: (input: {
    /** A slug identifier for the region to which the database cluster will be migrated. */
    region: string;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Resize a Database Cluster
   */
  databasesUpdateClusterSize: (input: {
    /** A slug identifier representing desired the size of the nodes in the database cluster. */
    size: string;
    /** The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations. */
    num_nodes: number;
    /** Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage. */
    storage_size_mib?: number;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * List Firewall Rules (Trusted Sources) for a Database Cluster
   */
  databasesListFirewallRules: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ rules?: (FirewallRule)[] }>;

  /**
   * Update Firewall Rules (Trusted Sources) for a Database
   */
  databasesUpdateFirewallRules: (input: {
    rules?: (FirewallRule)[];
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Retrieve DO Settings for a Database Cluster
   */
  databasesGetDoSettings: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ do_settings: DoSettings }>;

  /**
   * Update DO Settings for a Database Cluster
   */
  databasesUpdateDoSettings: (input: {
    do_settings: DoSettings;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Configure a Database Cluster's Maintenance Window
   */
  databasesUpdateMaintenanceWindow: (input: {
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
  }) => Promise<undefined>;

  /**
   * Start Database Maintenance
   */
  databasesInstallUpdate: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * List Backups for a Database Cluster
   */
  databasesListBackups: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ backups: (Backup)[]; scheduled_backup_time?: { backup_hour?: number; backup_minute?: number; backup_interval_hours?: number }; backup_progress?: string }>;

  /**
   * List All Read-only Replicas
   */
  databasesListReplicas: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ replicas?: (DatabaseReplicaRead)[] }>;

  /**
   * Create a Read-only Replica
   */
  databasesCreateReplica: (input: {
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
  }) => Promise<{ replica?: DatabaseReplicaRead }>;

  /**
   * List all Events Logs
   */
  databasesListEventsLogs: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ events?: (EventsLogs)[] }>;

  /**
   * Retrieve an Existing Read-only Replica
   */
  databasesGetReplica: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database replica. */
    replica_name: string;
  }) => Promise<{ replica?: DatabaseReplicaRead }>;

  /**
   * Destroy a Read-only Replica
   */
  databasesDestroyReplica: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database replica. */
    replica_name: string;
  }) => Promise<undefined>;

  /**
   * Promote a Read-only Replica to become a Primary Cluster
   */
  databasesPromoteReplica: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database replica. */
    replica_name: string;
  }) => Promise<undefined>;

  /**
   * List all Database Users
   */
  databasesListUsers: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ users?: (DatabaseUser)[] }>;

  /**
   * Add a Database User
   */
  databasesAddUser: (input: {
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
  }) => Promise<{ user: DatabaseUser }>;

  /**
   * Retrieve an Existing Database User
   */
  databasesGetUser: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database user. */
    username: string;
  }) => Promise<{ user: DatabaseUser }>;

  /**
   * Remove a Database User
   */
  databasesDeleteUser: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database user. */
    username: string;
  }) => Promise<undefined>;

  /**
   * Update a Database User
   */
  databasesUpdateUser: (input: {
    settings: UserSettings;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database user. */
    username: string;
  }) => Promise<{ user: DatabaseUser }>;

  /**
   * Reset a Database User's Password or Authentication Method
   */
  databasesResetAuth: (input: {
    mysql_settings?: MysqlSettings;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database user. */
    username: string;
  }) => Promise<{ user: DatabaseUser }>;

  /**
   * List All Databases
   */
  databasesList: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ dbs?: (Database)[] }>;

  /**
   * Add a New Database
   */
  databasesAdd: (input: {
    /** The name of the database. */
    name: string;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ db: Database }>;

  /**
   * Retrieve an Existing Database
   */
  databasesGet: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database. */
    database_name: string;
  }) => Promise<{ db: Database }>;

  /**
   * Delete a Database
   */
  databasesDelete: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the database. */
    database_name: string;
  }) => Promise<undefined>;

  /**
   * List Connection Pools (PostgreSQL)
   */
  databasesListConnectionPools: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<ConnectionPools>;

  /**
   * Add a New Connection Pool (PostgreSQL)
   */
  databasesAddConnectionPool: (input: {
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
  }) => Promise<{ pool: ConnectionPool }>;

  /**
   * Retrieve Existing Connection Pool (PostgreSQL)
   */
  databasesGetConnectionPool: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name used to identify the connection pool. */
    pool_name: string;
  }) => Promise<{ pool: ConnectionPool }>;

  /**
   * Update Connection Pools (PostgreSQL)
   */
  databasesUpdateConnectionPool: (input: {
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
  }) => Promise<undefined>;

  /**
   * Delete a Connection Pool (PostgreSQL)
   */
  databasesDeleteConnectionPool: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name used to identify the connection pool. */
    pool_name: string;
  }) => Promise<undefined>;

  /**
   * Retrieve the Eviction Policy for a Caching or Valkey Cluster
   */
  databasesGetEvictionPolicy: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ eviction_policy: EvictionPolicyModel }>;

  /**
   * Configure the Eviction Policy for a Caching or Valkey Cluster
   */
  databasesUpdateEvictionPolicy: (input: {
    eviction_policy: EvictionPolicyModel;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Retrieve the SQL Modes for a MySQL Cluster
   */
  databasesGetSqlMode: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<SqlMode>;

  /**
   * Update SQL Mode for a Cluster
   */
  databasesUpdateSqlMode: (input: {
    /** A string specifying the configured SQL modes for the MySQL cluster. */
    sql_mode: string;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Upgrade Major Version for a Database
   */
  databasesUpdateMajorVersion: (input: {
    version?: Version;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * Retrieve Autoscale Configuration for a Database Cluster
   */
  databasesGetAutoscale: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ autoscale?: DatabaseAutoscaleParams }>;

  /**
   * Configure Autoscale Settings for a Database Cluster
   */
  databasesUpdateAutoscale: (input: {
    storage?: DatabaseStorageAutoscaleParams & unknown;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<undefined>;

  /**
   * List Topics for a Kafka Cluster
   */
  databasesListKafkaTopics: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ topics?: (KafkaTopic)[] }>;

  /**
   * Create Topic for a Kafka Cluster
   */
  databasesCreateKafkaTopic: (input: {
    /** The name of the Kafka topic. */
    name: string;
    /** The number of nodes to replicate data across the cluster. */
    replication_factor?: number;
    /** The number of partitions available for the topic. On update, this value can only be increased. */
    partition_count?: number;
    config?: KafkaTopicConfig;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ topic?: KafkaTopicVerbose }>;

  /**
   * Get Topic for a Kafka Cluster
   */
  databasesGetKafkaTopic: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name used to identify the Kafka topic. */
    topic_name: string;
  }) => Promise<{ topic?: KafkaTopicVerbose }>;

  /**
   * Update Topic for a Kafka Cluster
   */
  databasesUpdateKafkaTopic: (input: {
    /** The number of nodes to replicate data across the cluster. */
    replication_factor?: number;
    /** The number of partitions available for the topic. On update, this value can only be increased. */
    partition_count?: number;
    config?: KafkaTopicConfig;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name used to identify the Kafka topic. */
    topic_name: string;
  }) => Promise<{ topic?: KafkaTopicVerbose }>;

  /**
   * Delete Topic for a Kafka Cluster
   */
  databasesDeleteKafkaTopic: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name used to identify the Kafka topic. */
    topic_name: string;
  }) => Promise<undefined>;

  /**
   * List Logsinks for a Database Cluster 
   */
  databasesListLogsink: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ sinks?: (LogsinkSchema)[] }>;

  /**
   * Create Logsink for a Database Cluster 
   */
  databasesCreateLogsink: (input: {
    /** The name of the Logsink */
    sink_name: string;
    /** Type of logsink integration.  - Use `datadog` for Datadog integration **only with MongoDB clusters**. - For non-MongoDB clusters, use `rsyslog` for general syslog forwarding. - Other supported types include `elasticsearch` and `opensearch`.  More details about the configuration can be found in the `config` property.  */
    sink_type: "rsyslog" | "elasticsearch" | "opensearch" | "datadog";
    config: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ sink?: LogsinkSchema }>;

  /**
   * Get Logsink for a Database Cluster 
   */
  databasesGetLogsink: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** A unique identifier for a logsink of a database cluster */
    logsink_id: string;
  }) => Promise<LogsinkSchema>;

  /**
   * Update Logsink for a Database Cluster 
   */
  databasesUpdateLogsink: (input: {
    config: RsyslogLogsink | ElasticsearchLogsink | OpensearchLogsink | DatadogLogsink;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** A unique identifier for a logsink of a database cluster */
    logsink_id: string;
  }) => Promise<undefined>;

  /**
   * Delete Logsink for a Database Cluster 
   */
  databasesDeleteLogsink: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** A unique identifier for a logsink of a database cluster */
    logsink_id: string;
  }) => Promise<undefined>;

  /**
   * List Schemas for Kafka Cluster 
   */
  databasesListKafkaSchemas: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ subjects?: (KafkaSchemaVerbose)[] }>;

  /**
   * Create Schema Registry for Kafka Cluster 
   */
  databasesCreateKafkaSchema: (input: {
    /** The name of the schema subject. */
    subject_name: string;
    /** The type of the schema. */
    schema_type: "AVRO" | "JSON" | "PROTOBUF";
    /** The schema definition in the specified format. */
    schema: string;
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<KafkaSchemaVerbose>;

  /**
   * Get a Kafka Schema by Subject Name 
   */
  databasesGetKafkaSchema: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the Kafka schema subject. */
    subject_name: string;
  }) => Promise<KafkaSchemaVersionVerbose>;

  /**
   * Delete a Kafka Schema by Subject Name 
   */
  databasesDeleteKafkaSchema: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the Kafka schema subject. */
    subject_name: string;
  }) => Promise<undefined>;

  /**
   * Get Kafka Schema by Subject Version
   */
  databasesGetKafkaSchemaVersion: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the Kafka schema subject. */
    subject_name: string;
    /** The version of the Kafka schema subject. */
    version: string;
  }) => Promise<KafkaSchemaVersionVerbose>;

  /**
   * Retrieve Schema Registry Configuration for a kafka Cluster
   */
  databasesGetKafkaSchemaConfig: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>;

  /**
   * Update Schema Registry Configuration for a kafka Cluster
   */
  databasesUpdateKafkaSchemaConfig: (input: {
    /** The compatibility level of the schema registry. */
    compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE";
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>;

  /**
   * Retrieve Schema Registry Configuration for a Subject of kafka Cluster
   */
  databasesGetKafkaSchemaSubjectConfig: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the Kafka schema subject. */
    subject_name: string;
  }) => Promise<{ subject_name: string; compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>;

  /**
   * Update Schema Registry Configuration for a Subject of kafka Cluster
   */
  databasesUpdateKafkaSchemaSubjectConfig: (input: {
    /** The compatibility level of the schema registry. */
    compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE";
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the Kafka schema subject. */
    subject_name: string;
  }) => Promise<{ subject_name: string; compatibility_level: "NONE" | "BACKWARD" | "BACKWARD_TRANSITIVE" | "FORWARD" | "FORWARD_TRANSITIVE" | "FULL" | "FULL_TRANSITIVE" }>;

  /**
   * Retrieve Database Clusters' Metrics Endpoint Credentials
   */
  databasesGetClusterMetricsCredentials: () => Promise<{ credentials?: DatabaseMetricsCredentials }>;

  /**
   * Update Database Clusters' Metrics Endpoint Credentials
   */
  databasesUpdateClusterMetricsCredentials: (input: {
    credentials?: DatabasesBasicAuthCredentials;
  }) => Promise<undefined>;

  /**
   * List Indexes for a OpenSearch Cluster
   */
  databasesListOpeasearchIndexes: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
  }) => Promise<{ indexes?: (OpensearchIndex)[] }>;

  /**
   * Delete Index for OpenSearch Cluster
   */
  databasesDeleteOpensearchIndex: (input: {
    /** A unique identifier for a database cluster. */
    database_cluster_uuid: string;
    /** The name of the OpenSearch index. */
    index_name: string;
  }) => Promise<undefined>;

  /**
   * Get a Dedicated Inference
   */
  dedicatedInferencesGet: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
  }) => Promise<{ dedicated_inference?: DedicatedInference }>;

  /**
   * Update a Dedicated Inference
   */
  dedicatedInferencesPatch: (input: {
    spec?: DedicatedInferenceSpec;
    /** Provider tokens for model access (e.g. gated Hugging Face models). */
    access_tokens?: { hugging_face_token?: string };
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
  }) => Promise<{ dedicated_inference?: DedicatedInference }>;

  /**
   * Delete a Dedicated Inference
   */
  dedicatedInferencesDelete: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
  }) => Promise<undefined>;

  /**
   * List Dedicated Inferences
   */
  dedicatedInferencesList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Filter by region. Dedicated Inference is only available in nyc2, tor1, and atl1. */
    region?: "nyc2" | "tor1" | "atl1";
  }) => Promise<{ dedicated_inferences: (DedicatedInference)[]; links: { pages?: { [key: string]: string | undefined } }; meta: { total: number } }>;

  /**
   * Create a Dedicated Inference
   */
  dedicatedInferencesCreate: (input: {
    spec: DedicatedInferenceSpec;
    /** Key-value pairs for provider tokens (e.g. Hugging Face). */
    access_tokens?: { [key: string]: string | undefined };
  }) => Promise<{ dedicated_inference?: DedicatedInference; token?: DedicatedInferenceAccessToken }>;

  /**
   * List Dedicated Inference Accelerators
   */
  dedicatedInferencesListAccelerators: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Filter accelerators by GPU slug. */
    slug?: string;
  }) => Promise<{ accelerators?: (DedicatedInferenceAccelerator)[] } & Pagination & Meta>;

  /**
   * Get a Dedicated Inference Accelerator
   */
  dedicatedInferencesGetAccelerator: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
    /** A unique identifier for a Dedicated Inference accelerator. */
    accelerator_id: string;
  }) => Promise<DedicatedInferenceAccelerator>;

  /**
   * Get Dedicated Inference CA Certificate
   */
  dedicatedInferencesGetCa: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
  }) => Promise<{ cert: string }>;

  /**
   * List Dedicated Inference Tokens
   */
  dedicatedInferencesListTokens: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ tokens?: (DedicatedInferenceAccessToken)[] } & Pagination & Meta>;

  /**
   * Create a Dedicated Inference Token
   */
  dedicatedInferencesCreateTokens: (input: {
    /** Name for the new token. */
    name: string;
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
  }) => Promise<{ token?: DedicatedInferenceAccessToken }>;

  /**
   * Revoke a Dedicated Inference Token
   */
  dedicatedInferencesDeleteTokens: (input: {
    /** A unique identifier for a Dedicated Inference instance. */
    dedicated_inference_id: string;
    /** A unique identifier for a Dedicated Inference access token. */
    token_id: string;
  }) => Promise<undefined>;

  /**
   * List Dedicated Inference Sizes
   */
  dedicatedInferencesListSizes: () => Promise<DedicatedInferenceSizesResponse>;

  /**
   * Get Dedicated Inference GPU Model Config
   */
  dedicatedInferencesGetGpuModelConfig: () => Promise<DedicatedInferenceGpuModelConfigsResponse>;

  /**
   * List All Domains
   */
  domainsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ domains: (Domain)[] } & Pagination & Meta>;

  /**
   * Create a New Domain
   */
  domainsCreate: (input: {
    /** The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name. */
    name?: string;
    /** This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain. */
    ip_address?: string;
    /** This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
    ttl?: number | null;
    /** This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource. */
    zone_file?: string | null;
  }) => Promise<{ domain?: Domain }>;

  /**
   * Retrieve an Existing Domain
   */
  domainsGet: (input: {
    /** The name of the domain itself. */
    domain_name: string;
  }) => Promise<{ domain?: Domain }>;

  /**
   * Delete a Domain
   */
  domainsDelete: (input: {
    /** The name of the domain itself. */
    domain_name: string;
  }) => Promise<undefined>;

  /**
   * List All Domain Records
   */
  domainsListRecords: (input: {
    /** The name of the domain itself. */
    domain_name: string;
    /** A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. */
    name?: string;
    /** The type of the DNS record. For example: A, CNAME, TXT, ... */
    type?: "A" | "AAAA" | "CAA" | "CNAME" | "MX" | "NS" | "SOA" | "SRV" | "TXT";
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ domain_records?: (DomainRecord)[] } & Pagination & Meta>;

  /**
   * Create a New Domain Record
   */
  domainsCreateRecord: (input: {
    body?: DomainRecordA | DomainRecordAaaa | DomainRecordCaa | DomainRecordCname | DomainRecordMx | DomainRecordNs | DomainRecordSoa | DomainRecordSrv | DomainRecordTxt;
    /** The name of the domain itself. */
    domain_name: string;
  }) => Promise<{ domain_record?: DomainRecord }>;

  /**
   * Retrieve an Existing Domain Record
   */
  domainsGetRecord: (input: {
    /** The name of the domain itself. */
    domain_name: string;
    /** The unique identifier of the domain record. */
    domain_record_id: number;
  }) => Promise<{ domain_record?: DomainRecord }>;

  /**
   * Update a Domain Record
   */
  domainsPatchRecord: (input: {
    /** A unique identifier for each domain record. */
    id?: number;
    /** The type of the DNS record. For example: A, CNAME, TXT, ... */
    type: string;
    /** The host name, alias, or service being defined by the record. */
    name?: string;
    /** Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. */
    data?: string;
    /** The priority for SRV and MX records. */
    priority?: number | null;
    /** The port for SRV records. */
    port?: number | null;
    /** This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
    ttl?: number;
    /** The weight for SRV records. */
    weight?: number | null;
    /** An unsigned integer between 0-255 used for CAA records. */
    flags?: number | null;
    /** The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef" */
    tag?: string | null;
    /** The name of the domain itself. */
    domain_name: string;
    /** The unique identifier of the domain record. */
    domain_record_id: number;
  }) => Promise<{ domain_record?: DomainRecord }>;

  /**
   * Update a Domain Record
   */
  domainsUpdateRecord: (input: {
    /** A unique identifier for each domain record. */
    id?: number;
    /** The type of the DNS record. For example: A, CNAME, TXT, ... */
    type: string;
    /** The host name, alias, or service being defined by the record. */
    name?: string;
    /** Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. */
    data?: string;
    /** The priority for SRV and MX records. */
    priority?: number | null;
    /** The port for SRV records. */
    port?: number | null;
    /** This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
    ttl?: number;
    /** The weight for SRV records. */
    weight?: number | null;
    /** An unsigned integer between 0-255 used for CAA records. */
    flags?: number | null;
    /** The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef" */
    tag?: string | null;
    /** The name of the domain itself. */
    domain_name: string;
    /** The unique identifier of the domain record. */
    domain_record_id: number;
  }) => Promise<{ domain_record?: DomainRecord }>;

  /**
   * Delete a Domain Record
   */
  domainsDeleteRecord: (input: {
    /** The name of the domain itself. */
    domain_name: string;
    /** The unique identifier of the domain record. */
    domain_record_id: number;
  }) => Promise<undefined>;

  /**
   * List All Droplets
   */
  dropletsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope. */
    tag_name?: string;
    /** Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`. */
    name?: string;
    /** When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`. */
    type?: "droplets" | "gpus";
  }) => Promise<{ droplets?: (Droplet)[] } & Pagination & Meta>;

  /**
   * Create a New Droplet
   */
  dropletsCreate: (input: {
    body?: DropletSingleCreate | DropletMultiCreate;
  }) => Promise<{ droplet: Droplet; links: { actions?: (ActionLink)[] } } | { droplets: (Droplet)[]; links: { actions?: (ActionLink)[] } }>;

  /**
   * Deleting Droplets by Tag
   */
  dropletsDestroyByTag: (input: {
    /** Specifies Droplets to be deleted by tag. */
    tag_name: string;
  }) => Promise<undefined>;

  /**
   * Retrieve an Existing Droplet
   */
  dropletsGet: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<{ droplet?: Droplet }>;

  /**
   * Delete an Existing Droplet
   */
  dropletsDestroy: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<undefined>;

  /**
   * List Backups for a Droplet
   */
  dropletsListBackups: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ backups?: (DropletSnapshot)[] } & Pagination & Meta>;

  /**
   * Retrieve the Backup Policy for an Existing Droplet
   */
  dropletsGetBackupPolicy: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<{ policy?: DropletBackupPolicyRecord }>;

  /**
   * List Backup Policies for All Existing Droplets
   */
  dropletsListBackupPolicies: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ policies?: { [key: string]: DropletBackupPolicyRecord | undefined } } & Pagination & Meta>;

  /**
   * List Supported Droplet Backup Policies
   */
  dropletsListSupportedBackupPolicies: () => Promise<{ supported_policies?: (SupportedDropletBackupPolicy)[] }>;

  /**
   * List Snapshots for a Droplet
   */
  dropletsListSnapshots: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ snapshots?: (DropletSnapshot)[] } & Pagination & Meta>;

  /**
   * List Actions for a Droplet
   */
  dropletActionsList: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ actions?: (Action)[] } & Pagination & Meta>;

  /**
   * Initiate a Droplet Action
   */
  dropletActionsPost: (input: {
    body?: DropletAction | DropletActionEnableBackups | DropletActionChangeBackupPolicy | DropletActionRestore | DropletActionResize | DropletActionRebuild | DropletActionRename | DropletActionChangeKernel | DropletActionSnapshot;
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<{ action?: Action }>;

  /**
   * Acting on Tagged Droplets
   */
  dropletActionsPostByTag: (input: {
    body?: DropletAction | DropletActionSnapshot;
    /** Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope. */
    tag_name?: string;
  }) => Promise<{ actions?: (Action)[] }>;

  /**
   * Retrieve a Droplet Action
   */
  dropletActionsGet: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
  }) => Promise<{ action?: Action }>;

  /**
   * List All Available Kernels for a Droplet
   */
  dropletsListKernels: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ kernels?: (Kernel)[] } & Pagination & Meta>;

  /**
   * List all Firewalls Applied to a Droplet
   */
  dropletsListFirewalls: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ firewalls?: (Firewall)[] } & Pagination & Meta>;

  /**
   * List Neighbors for a Droplet
   */
  dropletsListNeighbors: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<{ droplets?: (Droplet)[] }>;

  /**
   * List Associated Resources for a Droplet
   */
  dropletsListAssociatedResources: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<{ reserved_ips?: (AssociatedResource)[]; floating_ips?: (AssociatedResource)[]; snapshots?: (AssociatedResource)[]; volumes?: (AssociatedResource)[]; volume_snapshots?: (AssociatedResource)[] }>;

  /**
   * Selectively Destroy a Droplet and its Associated Resources
   */
  dropletsDestroyWithAssociatedResourcesSelective: (input: {
    /** An array of unique identifiers for the floating IPs to be scheduled for deletion. */
    floating_ips?: (string)[];
    /** An array of unique identifiers for the reserved IPs to be scheduled for deletion. */
    reserved_ips?: (string)[];
    /** An array of unique identifiers for the snapshots to be scheduled for deletion. */
    snapshots?: (string)[];
    /** An array of unique identifiers for the volumes to be scheduled for deletion. */
    volumes?: (string)[];
    /** An array of unique identifiers for the volume snapshots to be scheduled for deletion. */
    volume_snapshots?: (string)[];
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<undefined>;

  /**
   * Destroy a Droplet and All of its Associated Resources (Dangerous)
   */
  dropletsDestroyWithAssociatedResourcesDangerous: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }, options: { headers: { "X-Dangerous": boolean } }) => Promise<undefined>;

  /**
   * Check Status of a Droplet Destroy with Associated Resources Request
   */
  dropletsGetDestroyAssociatedResourcesStatus: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<AssociatedResourceStatus>;

  /**
   * Retry a Droplet Destroy with Associated Resources Request
   */
  dropletsDestroyRetryWithAssociatedResources: (input: {
    /** A unique identifier for a Droplet instance. */
    droplet_id: number;
  }) => Promise<undefined>;

  /**
   * List All Autoscale Pools
   */
  autoscalepoolsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** The name of the autoscale pool */
    name?: string;
  }) => Promise<{ autoscale_pools?: (AutoscalePool)[] } & Pagination & Meta>;

  /**
   * Create a New Autoscale Pool
   */
  autoscalepoolsCreate: (input: {
    /** The human-readable name of the autoscale pool. This field cannot be updated */
    name: string;
    /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
    config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
    droplet_template: AutoscalePoolDropletTemplate;
  }) => Promise<{ autoscale_pool?: AutoscalePool }>;

  /**
   * Retrieve an Existing Autoscale Pool
   */
  autoscalepoolsGet: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
  }) => Promise<{ autoscale_pool?: AutoscalePool }>;

  /**
   * Update Autoscale Pool
   */
  autoscalepoolsUpdate: (input: {
    /** The human-readable name of the autoscale pool. This field cannot be updated */
    name: string;
    /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
    config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
    droplet_template: AutoscalePoolDropletTemplate;
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
  }) => Promise<{ autoscale_pool?: AutoscalePool }>;

  /**
   * Delete autoscale pool
   */
  autoscalepoolsDelete: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
  }) => Promise<undefined>;

  /**
   * Delete autoscale pool and resources
   */
  autoscalepoolsDeleteDangerous: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
  }, options: { headers: { "X-Dangerous": boolean } }) => Promise<undefined>;

  /**
   * List members
   */
  autoscalepoolsListMembers: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ droplets?: (Member)[] } & Pagination & Meta>;

  /**
   * List history events
   */
  autoscalepoolsListHistory: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ history?: (History)[] } & Pagination & Meta>;

  /**
   * List All Firewalls
   */
  firewallsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ firewalls?: (Firewall)[] } & Pagination & Meta>;

  /**
   * Create a New Firewall
   */
  firewallsCreate: (input: {
    body?: Firewall & unknown & unknown | unknown;
  }) => Promise<{ firewall?: Firewall }>;

  /**
   * Retrieve an Existing Firewall
   */
  firewallsGet: (input: {
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<{ firewall?: Firewall }>;

  /**
   * Update a Firewall
   */
  firewallsUpdate: (input: {
    body?: Firewall & unknown | unknown;
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<{ firewall?: Firewall }>;

  /**
   * Delete a Firewall
   */
  firewallsDelete: (input: {
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Add Droplets to a Firewall
   */
  firewallsAssignDroplets: (input: {
    /** An array containing the IDs of the Droplets to be assigned to the firewall. */
    droplet_ids: (number)[];
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Remove Droplets from a Firewall
   */
  firewallsDeleteDroplets: (input: {
    /** An array containing the IDs of the Droplets to be removed from the firewall. */
    droplet_ids: (number)[];
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Add Tags to a Firewall
   */
  firewallsAddTags: (input: {
    tags: ExistingTagsArray & unknown;
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Remove Tags from a Firewall
   */
  firewallsDeleteTags: (input: {
    tags: ExistingTagsArray & unknown;
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Add Rules to a Firewall
   */
  firewallsAddRules: (input: {
    body?: FirewallRules & unknown | unknown;
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * Remove Rules from a Firewall
   */
  firewallsDeleteRules: (input: {
    body?: FirewallRules & unknown | unknown;
    /** A unique ID that can be used to identify and reference a firewall. */
    firewall_id: string;
  }) => Promise<undefined>;

  /**
   * List All Floating IPs
   */
  floatingIPsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ floating_ips?: (FloatingIp)[] } & Pagination & Meta>;

  /**
   * Create a New Floating IP
   */
  floatingIPsCreate: (input: {
    body: FloatingIpCreate;
  }) => Promise<{ floating_ip?: FloatingIp; links?: { droplets?: (ActionLink)[]; actions?: (ActionLink)[] } }>;

  /**
   * Retrieve an Existing Floating IP
   */
  floatingIPsGet: (input: {
    /** A floating IP address. */
    floating_ip: string;
  }) => Promise<{ floating_ip?: FloatingIp }>;

  /**
   * Delete a Floating IP
   */
  floatingIPsDelete: (input: {
    /** A floating IP address. */
    floating_ip: string;
  }) => Promise<undefined>;

  /**
   * List All Actions for a Floating IP
   */
  floatingIPsActionList: (input: {
    /** A floating IP address. */
    floating_ip: string;
  }) => Promise<{ actions?: (Action)[] } & Pagination & Meta>;

  /**
   * Initiate a Floating IP Action
   */
  floatingIPsActionPost: (input: {
    body?: FloatingIpActionUnassign | FloatingIpActionAssign;
    /** A floating IP address. */
    floating_ip: string;
  }) => Promise<{ action?: Action & { project_id?: string } }>;

  /**
   * Retrieve an Existing Floating IP Action
   */
  floatingIPsActionGet: (input: {
    /** A floating IP address. */
    floating_ip: string;
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
  }) => Promise<{ action?: Action & { project_id?: string } }>;

  /**
   * List Namespaces
   */
  functionsListNamespaces: () => Promise<{ namespaces?: (NamespaceInfo)[] }>;

  /**
   * Create Namespace
   */
  functionsCreateNamespace: (input: {
    /** The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace. */
    region: string;
    /** The namespace's unique name. */
    label: string;
  }) => Promise<{ namespace?: NamespaceInfo }>;

  /**
   * Get Namespace
   */
  functionsGetNamespace: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<{ namespace?: NamespaceInfo }>;

  /**
   * Delete Namespace
   */
  functionsDeleteNamespace: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<undefined>;

  /**
   * List Triggers
   */
  functionsListTriggers: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<{ triggers?: (TriggerInfo)[] }>;

  /**
   * Create Trigger
   */
  functionsCreateTrigger: (input: {
    /** The trigger's unique name within the namespace. */
    name: string;
    /** Name of function(action) that exists in the given namespace. */
    function: string;
    /** One of different type of triggers. Currently only SCHEDULED is supported. */
    type: string;
    /** Indicates weather the trigger is paused or unpaused. */
    is_enabled: boolean;
    scheduled_details: ScheduledDetails;
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<{ trigger?: TriggerInfo }>;

  /**
   * Get Trigger
   */
  functionsGetTrigger: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
    /** The name of the trigger to be managed. */
    trigger_name: string;
  }) => Promise<{ trigger?: TriggerInfo }>;

  /**
   * Update Trigger
   */
  functionsUpdateTrigger: (input: {
    /** Indicates weather the trigger is paused or unpaused. */
    is_enabled?: boolean;
    scheduled_details?: ScheduledDetails;
    /** The ID of the namespace to be managed. */
    namespace_id: string;
    /** The name of the trigger to be managed. */
    trigger_name: string;
  }) => Promise<{ trigger?: TriggerInfo }>;

  /**
   * Delete Trigger
   */
  functionsDeleteTrigger: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
    /** The name of the trigger to be managed. */
    trigger_name: string;
  }) => Promise<undefined>;

  /**
   * List Namespace Access Keys
   */
  functionsAccessKeyList: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<{ access_keys?: (AccessKey)[]; count?: number }>;

  /**
   * Create a Namespace Access Key
   */
  functionsAccessKeyCreate: (input: {
    /** The access key's name. */
    name: string;
    /** The duration after which the access key expires, specified as a human-readable duration string in the format `<int>h` (hours) or `<int>d` (days). Minimum value is `1h`. If omitted, the key will never expire. */
    expires_in?: string;
    /** The ID of the namespace to be managed. */
    namespace_id: string;
  }) => Promise<{ access_key?: AccessKeyCreateResponse }>;

  /**
   * Update a Namespace Access Key
   */
  functionsAccessKeyUpdate: (input: {
    /** The new name for the access key. */
    name: string;
    /** The ID of the namespace to be managed. */
    namespace_id: string;
    /** The ID of the access key to be managed. */
    key_id: string;
  }) => Promise<{ access_key?: AccessKey }>;

  /**
   * Delete a Namespace Access Key
   */
  functionsAccessKeyDelete: (input: {
    /** The ID of the namespace to be managed. */
    namespace_id: string;
    /** The ID of the access key to be managed. */
    key_id: string;
  }) => Promise<{ [key: string]: unknown }>;

  /**
   * List All Images
   */
  imagesList: (input: {
    /** Filters results based on image type which can be either `application` or `distribution`. */
    type?: "application" | "distribution";
    /** Used to filter only user images. */
    private?: boolean;
    /** Used to filter images by a specific tag. */
    tag_name?: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ images: (Image)[] } & Pagination & Meta>;

  /**
   * Create a Custom Image
   */
  imagesCreateCustom: (input: {
    name: ImageName;
    distribution?: Distribution;
    description?: ImageDescription;
    /** A URL from which the custom Linux virtual machine image may be retrieved.  The image it points to must be in the raw, qcow2, vhdx, vdi, or vmdk format.  It may be compressed using gzip or bzip2 and must be smaller than 100 GB after being decompressed. */
    url: string;
    region: RegionSlug;
    tags?: TagsArray;
  }) => Promise<{ image?: Image }>;

  /**
   * Retrieve an Existing Image
   */
  imagesGet: (input: {
    /** A unique number (id) or string (slug) used to identify and reference a specific image.  **Public** images can be identified by image `id` or `slug`.  **Private** images *must* be identified by image `id`.  */
    image_id: number | string;
  }) => Promise<{ image: Image }>;

  /**
   * Update an Image
   */
  imagesUpdate: (input: {
    name?: ImageName;
    distribution?: Distribution;
    description?: ImageDescription;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<{ image: Image }>;

  /**
   * Delete an Image
   */
  imagesDelete: (input: {
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<undefined>;

  /**
   * Initiate an Image Account Transfer
   */
  imagesPostAccountTransferCreate: (input: {
    body: ImagesPostAccountTransferCreate;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<{ transfer_id?: TransferId }>;

  /**
   * Accept an Image Account Transfer
   */
  imagesPostAccountTransferAccept: (input: {
    /** A unique number that used to identify and reference an image account transfer. */
    transfer_id: number;
    /** The UUID of the team that the image will be transferred to. */
    recipient_uuid: string;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<undefined>;

  /**
   * Cancel an Image Account Transfer
   */
  imagesPostAccountTransferCancel: (input: {
    /** A unique number that used to identify and reference an image account transfer. */
    transfer_id: number;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<undefined>;

  /**
   * Decline an Image Account Transfer
   */
  imagesPostAccountTransferDecline: (input: {
    /** A unique number that used to identify and reference an image account transfer. */
    transfer_id: number;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<undefined>;

  /**
   * List All Actions for an Image
   */
  imageActionsList: (input: {
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<{ actions?: (Action)[] } & Pagination & Meta>;

  /**
   * Initiate an Image Action
   */
  imageActionsPost: (input: {
    body?: ImageActionBase | ImageActionTransfer;
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
  }) => Promise<Action>;

  /**
   * Retrieve an Existing Action
   */
  imageActionsGet: (input: {
    /** A unique number that can be used to identify and reference a specific image. */
    image_id: number;
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
  }) => Promise<Action>;

  /**
   * List All Kubernetes Clusters
   */
  kubernetesListClusters: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ kubernetes_clusters?: (ClusterRead)[] } & Pagination & Meta>;

  /**
   * Create a New Kubernetes Cluster
   */
  kubernetesCreateCluster: (input: {
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
  }) => Promise<{ kubernetes_cluster?: Cluster }>;

  /**
   * Retrieve an Existing Kubernetes Cluster
   */
  kubernetesGetCluster: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<{ kubernetes_cluster?: ClusterRead }>;

  /**
   * Update a Kubernetes Cluster
   */
  kubernetesUpdateCluster: (input: {
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
  }) => Promise<{ kubernetes_cluster?: Cluster }>;

  /**
   * Delete a Kubernetes Cluster
   */
  kubernetesDeleteCluster: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<undefined>;

  /**
   * List Associated Resources for Cluster Deletion
   */
  kubernetesListAssociatedResources: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<AssociatedKubernetesResources>;

  /**
   * Selectively Delete a Cluster and its Associated Resources
   */
  kubernetesDestroyAssociatedResourcesSelective: (input: {
    /** A list of IDs for associated load balancers to destroy along with the cluster. */
    load_balancers?: (string)[];
    /** A list of IDs for associated volumes to destroy along with the cluster. */
    volumes?: (string)[];
    /** A list of IDs for associated volume snapshots to destroy along with the cluster. */
    volume_snapshots?: (string)[];
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<undefined>;

  /**
   * Delete a Cluster and All of its Associated Resources (Dangerous)
   */
  kubernetesDestroyAssociatedResourcesDangerous: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<undefined>;

  /**
   * Retrieve the kubeconfig for a Kubernetes Cluster
   */
  kubernetesGetKubeconfig: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry. */
    expiry_seconds?: number;
    /** The type of credentials to return in the kubeconfig. When omitted, the default credential type for the cluster is used: `sso` for clusters with SSO enabled, `token` for clusters without SSO enabled.  */
    type?: "token" | "sso";
  }) => Promise<undefined>;

  /**
   * Retrieve Credentials for a Kubernetes Cluster
   */
  kubernetesGetCredentials: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry. */
    expiry_seconds?: number;
  }) => Promise<Credentials>;

  /**
   * Retrieve Available Upgrades for an Existing Kubernetes Cluster
   */
  kubernetesGetAvailableUpgrades: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<{ available_upgrade_versions?: (KubernetesVersion)[] | null }>;

  /**
   * Upgrade a Kubernetes Cluster
   */
  kubernetesUpgradeCluster: (input: {
    /** The slug identifier for the version of Kubernetes that the cluster will be upgraded to. */
    version?: string;
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<undefined>;

  /**
   * List All Node Pools in a Kubernetes Clusters
   */
  kubernetesListNodePools: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<{ node_pools?: (KubernetesNodePool)[] }>;

  /**
   * Add a Node Pool to a Kubernetes Cluster
   */
  kubernetesAddNodePool: (input: {
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
  }) => Promise<{ node_pool?: KubernetesNodePool }>;

  /**
   * Retrieve a Node Pool for a Kubernetes Cluster
   */
  kubernetesGetNodePool: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** A unique ID that can be used to reference a Kubernetes node pool. */
    node_pool_id: string;
  }) => Promise<{ node_pool?: KubernetesNodePool }>;

  /**
   * Update a Node Pool in a Kubernetes Cluster
   */
  kubernetesUpdateNodePool: (input: {
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
  }) => Promise<{ node_pool?: KubernetesNodePool }>;

  /**
   * Delete a Node Pool in a Kubernetes Cluster
   */
  kubernetesDeleteNodePool: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** A unique ID that can be used to reference a Kubernetes node pool. */
    node_pool_id: string;
  }) => Promise<undefined>;

  /**
   * Delete a Node in a Kubernetes Cluster
   */
  kubernetesDeleteNode: (input: {
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
  }) => Promise<undefined>;

  /**
   * Recycle a Kubernetes Node Pool
   */
  kubernetesRecycleNodePool: (input: {
    nodes?: (string)[];
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** A unique ID that can be used to reference a Kubernetes node pool. */
    node_pool_id: string;
  }) => Promise<undefined>;

  /**
   * Retrieve User Information for a Kubernetes Cluster
   */
  kubernetesGetClusterUser: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
  }) => Promise<User>;

  /**
   * List Available Regions, Node Sizes, and Versions of Kubernetes
   */
  kubernetesListOptions: () => Promise<KubernetesOptions>;

  /**
   * Run Clusterlint Checks on a Kubernetes Cluster
   */
  kubernetesRunClusterLint: (input: {
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
  }) => Promise<{ run_id?: string }>;

  /**
   * Fetch Clusterlint Diagnostics for a Kubernetes Cluster
   */
  kubernetesGetClusterLintResults: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** Specifies the clusterlint run whose results will be retrieved. */
    run_id?: string;
  }) => Promise<ClusterlintResults>;

  /**
   * Add Container Registry to Kubernetes Clusters
   */
  kubernetesAddRegistry: (input: {
    /** An array containing the UUIDs of Kubernetes clusters. */
    cluster_uuids?: (string)[];
  }) => Promise<undefined>;

  /**
   * Remove Container Registry from Kubernetes Clusters
   */
  kubernetesRemoveRegistry: (input: {
    /** An array containing the UUIDs of Kubernetes clusters. */
    cluster_uuids?: (string)[];
  }) => Promise<undefined>;

  /**
   * Add Container Registries to Kubernetes Clusters
   */
  kubernetesAddRegistries: (input: {
    /** An array containing the UUIDs of Kubernetes clusters. */
    cluster_uuids?: (string)[];
    /** An array containing the registry names. */
    registries?: (string)[];
  }) => Promise<undefined>;

  /**
   * Remove Container Registries from Kubernetes Clusters
   */
  kubernetesRemoveRegistries: (input: {
    /** An array containing the UUIDs of Kubernetes clusters. */
    cluster_uuids?: (string)[];
    /** An array containing the registry names. */
    registries?: (string)[];
  }) => Promise<undefined>;

  /**
   * Fetch Status Messages for a Kubernetes Cluster
   */
  kubernetesGetStatusMessages: (input: {
    /** A unique ID that can be used to reference a Kubernetes cluster. */
    cluster_id: string;
    /** A timestamp used to return status messages emitted since the specified time. The timestamp should be in ISO8601 format. */
    since?: string;
  }) => Promise<{ messages?: (StatusMessages)[] }>;

  /**
   * Create a New Load Balancer
   */
  loadBalancersCreate: (input: {
    body: LoadBalancerCreate;
  }) => Promise<{ load_balancer?: LoadBalancer }>;

  /**
   * List All Load Balancers
   */
  loadBalancersList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ load_balancers?: (LoadBalancer)[] } & Pagination & Meta>;

  /**
   * Retrieve an Existing Load Balancer
   */
  loadBalancersGet: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<{ load_balancer?: LoadBalancer }>;

  /**
   * Update a Load Balancer
   */
  loadBalancersUpdate: (input: {
    body: LoadBalancerCreate;
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<{ load_balancer?: LoadBalancer }>;

  /**
   * Delete a Load Balancer
   */
  loadBalancersDelete: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * Delete a Global Load Balancer CDN Cache
   */
  loadBalancersDeleteCache: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * Add Droplets to a Load Balancer
   */
  loadBalancersAddDroplets: (input: {
    /** An array containing the IDs of the Droplets assigned to the load balancer. */
    droplet_ids: (number)[];
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * Remove Droplets from a Load Balancer
   */
  loadBalancersRemoveDroplets: (input: {
    /** An array containing the IDs of the Droplets assigned to the load balancer. */
    droplet_ids: (number)[];
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * Add Forwarding Rules to a Load Balancer
   */
  loadBalancersAddForwardingRules: (input: {
    forwarding_rules: (ForwardingRule)[];
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * Remove Forwarding Rules from a Load Balancer
   */
  loadBalancersRemoveForwardingRules: (input: {
    forwarding_rules: (ForwardingRule)[];
    /** A unique identifier for a load balancer. */
    lb_id: string;
  }) => Promise<undefined>;

  /**
   * List Alert Policies
   */
  monitoringListAlertPolicy: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<ListAlertPolicy & Pagination & Meta>;

  /**
   * Create Alert Policy
   */
  monitoringCreateAlertPolicy: (input: {
    alerts: Alerts;
    compare: "GreaterThan" | "LessThan";
    description: string;
    enabled: boolean;
    entities: (string)[];
    tags: (string)[];
    type: "v1/insights/droplet/load_1" | "v1/insights/droplet/load_5" | "v1/insights/droplet/load_15" | "v1/insights/droplet/memory_utilization_percent" | "v1/insights/droplet/disk_utilization_percent" | "v1/insights/droplet/cpu" | "v1/insights/droplet/disk_read" | "v1/insights/droplet/disk_write" | "v1/insights/droplet/public_outbound_bandwidth" | "v1/insights/droplet/public_inbound_bandwidth" | "v1/insights/droplet/private_outbound_bandwidth" | "v1/insights/droplet/private_inbound_bandwidth" | "v1/insights/lbaas/avg_cpu_utilization_percent" | "v1/insights/lbaas/connection_utilization_percent" | "v1/insights/lbaas/droplet_health" | "v1/insights/lbaas/tls_connections_per_second_utilization_percent" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx" | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx" | "v1/insights/lbaas/high_http_request_response_time" | "v1/insights/lbaas/high_http_request_response_time_50p" | "v1/insights/lbaas/high_http_request_response_time_95p" | "v1/insights/lbaas/high_http_request_response_time_99p" | "v1/dbaas/alerts/load_15_alerts" | "v1/dbaas/alerts/memory_utilization_alerts" | "v1/dbaas/alerts/disk_utilization_alerts" | "v1/dbaas/alerts/cpu_alerts" | "v1/droplet/autoscale_alerts/current_instances" | "v1/droplet/autoscale_alerts/target_instances" | "v1/droplet/autoscale_alerts/current_cpu_utilization" | "v1/droplet/autoscale_alerts/target_cpu_utilization" | "v1/droplet/autoscale_alerts/current_memory_utilization" | "v1/droplet/autoscale_alerts/target_memory_utilization" | "v1/droplet/autoscale_alerts/scale_up" | "v1/droplet/autoscale_alerts/scale_down";
    value: number;
    window: "5m" | "10m" | "30m" | "1h";
  }) => Promise<{ policy?: AlertPolicy }>;

  /**
   * Retrieve an Existing Alert Policy
   */
  monitoringGetAlertPolicy: (input: {
    /** A unique identifier for an alert policy. */
    alert_uuid: string;
  }) => Promise<{ policy?: AlertPolicy }>;

  /**
   * Update an Alert Policy
   */
  monitoringUpdateAlertPolicy: (input: {
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
  }) => Promise<{ policy?: AlertPolicy }>;

  /**
   * Delete an Alert Policy
   */
  monitoringDeleteAlertPolicy: (input: {
    /** A unique identifier for an alert policy. */
    alert_uuid: string;
  }) => Promise<undefined>;

  /**
   * Get Droplet Bandwidth Metrics
   */
  monitoringGetDropletBandwidthMetrics: (input: {
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
  }) => Promise<Metrics>;

  /**
   * Get Droplet CPU Metrics
   */
  monitoringGetDropletCpuMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Filesystem Free Metrics
   */
  monitoringGetDropletFilesystemFreeMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Filesystem Size Metrics
   */
  monitoringGetDropletFilesystemSizeMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Load1 Metrics
   */
  monitoringGetDropletLoad1Metrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Load5 Metrics
   */
  monitoringGetDropletLoad5Metrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Load15 Metrics
   */
  monitoringGetDropletLoad15Metrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Cached Memory Metrics
   */
  monitoringGetDropletMemoryCachedMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Free Memory Metrics
   */
  monitoringGetDropletMemoryFreeMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Total Memory Metrics
   */
  monitoringGetDropletMemoryTotalMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Available Memory Metrics
   */
  monitoringGetDropletMemoryAvailableMetrics: (input: {
    /** The droplet ID. */
    host_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get App Memory Percentage Metrics
   */
  monitoringGetAppMemoryPercentageMetrics: (input: {
    /** The app UUID. */
    app_id: string;
    /** The app component name. */
    app_component?: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get App CPU Percentage Metrics
   */
  monitoringGetAppCpuPercentageMetrics: (input: {
    /** The app UUID. */
    app_id: string;
    /** The app component name. */
    app_component?: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get App Restart Count Metrics
   */
  monitoringGetAppRestartCountMetricsYml: (input: {
    /** The app UUID. */
    app_id: string;
    /** The app component name. */
    app_component?: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Total Current Active Connections Metrics
   */
  monitoringGetLbFrontendConnectionsCurrent: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Max Connections Limit Metrics
   */
  monitoringGetLbFrontendConnectionsLimit: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Average Percentage CPU Utilization Metrics
   */
  monitoringGetLbFrontendCpuUtilization: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Firewall Dropped Bytes Metrics
   */
  monitoringGetLbFrontendFirewallDroppedBytes: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Firewall Dropped Packets Metrics
   */
  monitoringGetLbFrontendFirewallDroppedPackets: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend HTTP Rate Of Response Code Metrics
   */
  monitoringGetLbFrontendHttpResponses: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend HTTP Requests Metrics
   */
  monitoringGetLbFrontendHttpRequestsPerSecond: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend HTTP Throughput Metrics
   */
  monitoringGetLbFrontendNetworkThroughputHttp: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend UDP Throughput Metrics
   */
  monitoringGetLbFrontendNetworkThroughputUdp: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend TCP Throughput Metrics
   */
  monitoringGetLbFrontendNetworkThroughputTcp: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Network Load Balancer Frontend TCP Throughput Metrics
   */
  monitoringGetLbFrontendNlbTcpNetworkThroughput: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Network Load Balancer Frontend UDP Throughput Metrics
   */
  monitoringGetLbFrontendNlbUdpNetworkThroughput: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Current TLS Connections Rate Metrics
   */
  monitoringGetLbFrontendTlsConnectionsCurrent: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Max TLS Connections Limit Metrics
   */
  monitoringGetLbFrontendTlsConnectionsLimit: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Frontend Closed TLS Connections For Exceeded Rate Limit Metrics
   */
  monitoringGetLbFrontendTlsConnectionsExceedingRateLimit: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Average HTTP Session Duration Metrics
   */
  monitoringGetLbDropletsHttpSessionDurationAvg: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets 50th Percentile HTTP Session Duration Metrics
   */
  monitoringGetLbDropletsHttpSessionDuration50P: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets 95th Percentile HTTP Session Duration Metrics
   */
  monitoringGetLbDropletsHttpSessionDuration95P: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Average HTTP Response Time Metrics
   */
  monitoringGetLbDropletsHttpResponseTimeAvg: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets 50th Percentile HTTP Response Time Metrics
   */
  monitoringGetLbDropletsHttpResponseTime50P: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets 95th Percentile HTTP Response Time Metrics
   */
  monitoringGetLbDropletsHttpResponseTime95P: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets 99th Percentile HTTP Response Time Metrics
   */
  monitoringGetLbDropletsHttpResponseTime99P: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Queue Size Metrics
   */
  monitoringGetLbDropletsQueueSize: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets HTTP Rate Of Response Code Metrics
   */
  monitoringGetLbDropletsHttpResponses: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Active Connections Metrics
   */
  monitoringGetLbDropletsConnections: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Health Check Status Metrics
   */
  monitoringGetLbDropletsHealthChecks: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Load Balancer Droplets Downtime Status Metrics
   */
  monitoringGetLbDropletsDowntime: (input: {
    /** A unique identifier for a load balancer. */
    lb_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Current Size
   */
  monitoringGetDropletAutoscaleCurrentInstances: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Target Size
   */
  monitoringGetDropletAutoscaleTargetInstances: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Current Average CPU utilization
   */
  monitoringGetDropletAutoscaleCurrentCpuUtilizationYml: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Target Average CPU utilization
   */
  monitoringGetDropletAutoscaleTargetCpuUtilization: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Current Average Memory utilization
   */
  monitoringGetDropletAutoscaleCurrentMemoryUtilization: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Droplet Autoscale Pool Target Average Memory utilization
   */
  monitoringGetDropletAutoscaleTargetMemoryUtilization: (input: {
    /** A unique identifier for an autoscale pool. */
    autoscale_pool_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL CPU Usage Metrics
   */
  monitoringGetDatabaseMysqlCpuUsage: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** Aggregation over the time range (avg, max, or min). */
    aggregate: "avg" | "max" | "min";
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Load Average Metrics
   */
  monitoringGetDatabaseMysqlLoad: (input: {
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
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Memory Usage Metrics
   */
  monitoringGetDatabaseMysqlMemoryUsage: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** Aggregation over the time range (avg, max, or min). */
    aggregate: "avg" | "max" | "min";
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Disk Usage Metrics
   */
  monitoringGetDatabaseMysqlDiskUsage: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** Aggregation over the time range (avg, max, or min). */
    aggregate: "avg" | "max" | "min";
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Threads Connected Metrics
   */
  monitoringGetDatabaseMysqlThreadsConnected: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Threads Created Rate Metrics
   */
  monitoringGetDatabaseMysqlThreadsCreatedRate: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Threads Active Metrics
   */
  monitoringGetDatabaseMysqlThreadsActive: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Index vs Sequential Reads Metrics
   */
  monitoringGetDatabaseMysqlIndexVsSequentialReads: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Operations Throughput Metrics
   */
  monitoringGetDatabaseMysqlOpRates: (input: {
    /** The DBaaS cluster UUID (database ID). */
    db_id: string;
    /** Operation type (select, insert, update, or delete). */
    metric: "select" | "insert" | "update" | "delete";
    /** UNIX timestamp to start metric window. */
    start: string;
    /** UNIX timestamp to end metric window. */
    end: string;
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Schema Throughput Metrics
   */
  monitoringGetDatabaseMysqlSchemaThroughput: (input: {
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
  }) => Promise<Metrics>;

  /**
   * Get Database MySQL Schema Latency Metrics
   */
  monitoringGetDatabaseMysqlSchemaLatency: (input: {
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
  }) => Promise<Metrics>;

  /**
   * Create Logging Destination
   */
  monitoringCreateDestination: (input: {
    /** destination name */
    name?: string;
    /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
    type: "opensearch_dbaas" | "opensearch_ext";
    config: OpensearchConfigRequest;
  }) => Promise<{ destination?: DestinationOmitCredentials }>;

  /**
   * List Logging Destinations
   */
  monitoringListDestinations: () => Promise<{ destinations?: (DestinationOmitCredentials)[] }>;

  /**
   * Get Logging Destination
   */
  monitoringGetDestination: (input: {
    /** A unique identifier for a destination. */
    destination_uuid: string;
  }) => Promise<{ destination?: DestinationOmitCredentials }>;

  /**
   * Update Logging Destination
   */
  monitoringUpdateDestination: (input: {
    /** destination name */
    name?: string;
    /** The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch cluster or `opensearch_ext` for an externally managed one.  */
    type: "opensearch_dbaas" | "opensearch_ext";
    config: OpensearchConfigRequest;
    /** A unique identifier for a destination. */
    destination_uuid: string;
  }) => Promise<undefined>;

  /**
   * Delete Logging Destination
   */
  monitoringDeleteDestination: (input: {
    /** A unique identifier for a destination. */
    destination_uuid: string;
  }) => Promise<undefined>;

  /**
   * Create Sink
   */
  monitoringCreateSink: (input: {
    /** A unique identifier for an already-existing destination. */
    destination_uuid?: string;
    /** List of resources identified by their URNs. */
    resources?: (SinkResource)[];
  }) => Promise<undefined>;

  /**
   * Lists all sinks
   */
  monitoringListSinks: (input: {
    resource_id?: Urn;
  }) => Promise<{ sinks?: (SinksResponse)[] }>;

  /**
   * Get Sink
   */
  monitoringGetSink: (input: {
    /** A unique identifier for a sink. */
    sink_uuid: string;
  }) => Promise<{ sink?: SinksResponse }>;

  /**
   * Delete Sink
   */
  monitoringDeleteSink: (input: {
    /** A unique identifier for a sink. */
    sink_uuid: string;
  }) => Promise<undefined>;

  /**
   * Create a new NFS share
   */
  nfsCreate: (input: {
    /** The human-readable name of the share. */
    name: string;
    /** The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50. */
    size_gib: number;
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region: string;
    /** List of VPC IDs that should be able to access the share. */
    vpc_ids: (string)[];
    /** The performance tier of the share. */
    performance_tier?: string;
  }) => Promise<NfsCreateResponse>;

  /**
   * List NFS shares per region
   */
  nfsList: (input: {
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
  }) => Promise<NfsListResponse>;

  /**
   * Get an NFS share
   */
  nfsGet: (input: {
    /** The unique ID of the NFS share */
    nfs_id: string;
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
  }) => Promise<NfsGetResponse>;

  /**
   * Delete an NFS share
   */
  nfsDelete: (input: {
    /** The unique ID of the NFS share */
    nfs_id: string;
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
  }) => Promise<undefined>;

  /**
   * Initiate an NFS action
   */
  nfsCreateAction: (input: {
    body: NfsActionResize | NfsActionSnapshot | NfsActionAttach | NfsActionDetach | NfsActionReassign | NfsActionSwitchPerformanceTier;
    /** The unique ID of the NFS share */
    nfs_id: string;
  }) => Promise<NfsActionsResponse>;

  /**
   * List NFS snapshots per region
   */
  nfsListSnapshot: (input: {
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
    /** The unique ID of an NFS share. If provided, only snapshots of this specific share will be returned. */
    share_id?: string;
  }) => Promise<NfsSnapshotListResponse>;

  /**
   * Get an NFS snapshot by ID
   */
  nfsGetSnapshot: (input: {
    /** The unique ID of the NFS snapshot */
    nfs_snapshot_id: string;
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
  }) => Promise<NfsSnapshotGetResponse>;

  /**
   * Delete an NFS snapshot
   */
  nfsDeleteSnapshot: (input: {
    /** The unique ID of the NFS snapshot */
    nfs_snapshot_id: string;
    /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
    region?: string;
  }) => Promise<undefined>;

  /**
   * Create an NFS access point
   */
  nfsCreateAccessPoint: (input: {
    /** The name for the access point. Must be unique per share. Must be 2–63 characters and match `^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$`. The name `default` is reserved (case-insensitive) for the implicit default access point created with each share.  */
    name: string;
    /** The export sub-path. Must start with `/`, must not be exactly `/` (reserved for the default access point), must be at most 1024 characters, may contain only alphanumerics, `-`, `_`, `.`, and `/`, and must not contain `..` path segments.  */
    path: string;
    access_policy: AccessPolicy;
    /** Required. The VPC this access point will be pinned to. A storage gateway is provisioned (or reused) in this VPC, and the access point becomes mountable from this VPC regardless of whether the parent share is currently attached to it.  */
    vpc_id: string;
    /** The unique identifier of the NFS share. */
    share_id: string;
  }) => Promise<AccessPointActionResponse>;

  /**
   * List NFS access points for a share
   */
  nfsListAccessPoints: (input: {
    /** The unique identifier of the NFS share. */
    share_id: string;
    /** Filter access points by status. */
    status?: "ACCESS_POINT_CREATING" | "ACCESS_POINT_ACTIVE" | "ACCESS_POINT_FAILED" | "ACCESS_POINT_DELETED";
  }) => Promise<AccessPointListResponse>;

  /**
   * Get an NFS access point
   */
  nfsGetAccessPoint: (input: {
    /** The unique identifier of the NFS access point. */
    access_point_id: string;
  }) => Promise<AccessPointGetResponse>;

  /**
   * Delete an NFS access point
   */
  nfsDeleteAccessPoint: (input: {
    /** The unique identifier of the NFS access point. */
    access_point_id: string;
  }) => Promise<AccessPointActionResponse>;

  /**
   * Create a Team in an Organization
   */
  organizationsCreateTeam: (input: {
    /** The human-readable name for the team to create. */
    name: string;
    /** Optional invitations to send when creating the team. Each invitation includes an email address and a role. The `owner` role cannot be assigned via invitation.  */
    invitations?: (TeamInvitation)[];
  }) => Promise<{ team: CreateTeam; invitations?: { [key: string]: TeamInvitationStatus | undefined } }>;

  /**
   * List Teams in an Organization
   */
  organizationsListTeams: () => Promise<{ teams: (OrganizationTeam)[] }>;

  /**
   * List all partner attachments
   */
  partnerAttachmentsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ partner_attachments?: (PartnerAttachment)[] } & Pagination & Meta>;

  /**
   * Create a new partner attachment
   */
  partnerAttachmentsCreate: (input: {
    /** The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
    name: string;
    /** Bandwidth (in Mbps) of the connection. */
    connection_bandwidth_in_mbps: 1000 | 2000 | 5000 | 10000;
    /** The region to create the partner attachment. */
    region: "nyc" | "sfo" | "fra" | "ams" | "sgp";
    naas_provider: string;
    /** An array of VPCs IDs. */
    vpc_ids: (string)[];
    /** Optional associated partner attachment UUID */
    parent_uuid?: string;
    /** Optional BGP configurations */
    bgp?: { local_router_ip: string; peer_router_ip: string; peer_router_asn: number; auth_key: string };
    /** Optional redundancy zone for the partner attachment. */
    redundancy_zone?: "MEGAPORT_BLUE" | "MEGAPORT_RED";
  }) => Promise<{ partner_attachment?: PartnerAttachment }>;

  /**
   * Retrieve an existing partner attachment
   */
  partnerAttachmentsGet: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ partner_attachment?: PartnerAttachment }>;

  /**
   * Update an existing partner attachment
   */
  partnerAttachmentsPatch: (input: {
    body?: PartnerAttachmentUpdatable;
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ partner_attachment?: PartnerAttachment }>;

  /**
   * Delete an existing partner attachment
   */
  partnerAttachmentsDelete: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ partner_attachment?: PartnerAttachment }>;

  /**
   * Get current BGP auth key for the partner attachment
   */
  partnerAttachmentsGetBgpAuthKey: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ bgp_auth_key?: { [key: string]: unknown } }>;

  /**
   * List remote routes for a partner attachment
   */
  partnerAttachmentsListRemoteRoutes: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ remote_routes?: (PartnerAttachmentRemoteRoute)[] } & Pagination & Meta>;

  /**
   * Get the current service key for the partner attachment
   */
  partnerAttachmentsGetServiceKey: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ service_key?: { [key: string]: unknown } }>;

  /**
   * Regenerate the service key for the partner attachment
   */
  partnerAttachmentsCreateServiceKey: (input: {
    /** A unique identifier for a partner attachment. */
    pa_id: string;
  }) => Promise<{ [key: string]: unknown }>;

  /**
   * List All Projects
   */
  projectsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ projects?: (Project)[] } & Pagination & Meta>;

  /**
   * Create a Project
   */
  projectsCreate: (input: {
    /** The unique universal identifier of this project. */
    id?: string;
    /** The unique universal identifier of the project owner. */
    owner_uuid?: string;
    /** The integer id of the project owner. */
    owner_id?: number;
    /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
    name: string;
    /** The description of the project. The maximum length is 255 characters. */
    description?: string;
    /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
    purpose: string;
    /** The environment of the project's resources. */
    environment?: "Development" | "Staging" | "Production";
    /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
    created_at?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
    updated_at?: string;
  }) => Promise<{ project?: Project }>;

  /**
   * Retrieve the Default Project
   */
  projectsGetDefault: () => Promise<{ project?: Project }>;

  /**
   * Update the Default Project
   */
  projectsUpdateDefault: (input: {
    /** The unique universal identifier of this project. */
    id?: string;
    /** The unique universal identifier of the project owner. */
    owner_uuid?: string;
    /** The integer id of the project owner. */
    owner_id?: number;
    /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
    name: string;
    /** The description of the project. The maximum length is 255 characters. */
    description: string;
    /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
    purpose: string;
    /** The environment of the project's resources. */
    environment: "Development" | "Staging" | "Production";
    /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
    created_at?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
    updated_at?: string;
    /** If true, all resources will be added to this project if no project is specified. */
    is_default: boolean;
  }) => Promise<{ project?: Project }>;

  /**
   * Patch the Default Project
   */
  projectsPatchDefault: (input: {
    /** The unique universal identifier of this project. */
    id?: string;
    /** The unique universal identifier of the project owner. */
    owner_uuid?: string;
    /** The integer id of the project owner. */
    owner_id?: number;
    /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
    name?: string;
    /** The description of the project. The maximum length is 255 characters. */
    description?: string;
    /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
    purpose?: string;
    /** The environment of the project's resources. */
    environment?: "Development" | "Staging" | "Production";
    /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
    created_at?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
    updated_at?: string;
    /** If true, all resources will be added to this project if no project is specified. */
    is_default?: boolean;
  }) => Promise<{ project?: Project }>;

  /**
   * Retrieve an Existing Project
   */
  projectsGet: (input: {
    /** A unique identifier for a project. */
    project_id: string;
  }) => Promise<{ project?: Project }>;

  /**
   * Update a Project
   */
  projectsUpdate: (input: {
    /** The unique universal identifier of this project. */
    id?: string;
    /** The unique universal identifier of the project owner. */
    owner_uuid?: string;
    /** The integer id of the project owner. */
    owner_id?: number;
    /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
    name: string;
    /** The description of the project. The maximum length is 255 characters. */
    description: string;
    /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
    purpose: string;
    /** The environment of the project's resources. */
    environment: "Development" | "Staging" | "Production";
    /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
    created_at?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
    updated_at?: string;
    /** If true, all resources will be added to this project if no project is specified. */
    is_default: boolean;
    /** A unique identifier for a project. */
    project_id: string;
  }) => Promise<{ project?: Project }>;

  /**
   * Patch a Project
   */
  projectsPatch: (input: {
    /** The unique universal identifier of this project. */
    id?: string;
    /** The unique universal identifier of the project owner. */
    owner_uuid?: string;
    /** The integer id of the project owner. */
    owner_id?: number;
    /** The human-readable name for the project. The maximum length is 175 characters and the name must be unique. */
    name?: string;
    /** The description of the project. The maximum length is 255 characters. */
    description?: string;
    /** The purpose of the project. The maximum length is 255 characters. It can have one of the following values:  - Just trying out DigitalOcean - Class project / Educational purposes - Website or blog - Web Application - Service or API - Mobile Application - Machine learning / AI / Data processing - IoT - Operational / Developer tooling  If another value for purpose is specified, for example, "your custom purpose", your purpose will be stored as `Other: your custom purpose`.  */
    purpose?: string;
    /** The environment of the project's resources. */
    environment?: "Development" | "Staging" | "Production";
    /** A time value given in ISO8601 combined date and time format that represents when the project was created. */
    created_at?: string;
    /** A time value given in ISO8601 combined date and time format that represents when the project was updated. */
    updated_at?: string;
    /** If true, all resources will be added to this project if no project is specified. */
    is_default?: boolean;
    /** A unique identifier for a project. */
    project_id: string;
  }) => Promise<{ project?: Project }>;

  /**
   * Delete an Existing Project
   */
  projectsDelete: (input: {
    /** A unique identifier for a project. */
    project_id: string;
  }) => Promise<undefined>;

  /**
   * List Project Resources
   */
  projectsListResources: (input: {
    /** A unique identifier for a project. */
    project_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ resources?: (Resource)[] } & Pagination & Meta>;

  /**
   * Assign Resources to a Project
   */
  projectsAssignResources: (input: {
    /** A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned. */
    resources?: (Urn)[];
    /** A unique identifier for a project. */
    project_id: string;
  }) => Promise<{ resources?: (Resource)[] }>;

  /**
   * List Default Project Resources
   */
  projectsListResourcesDefault: () => Promise<{ resources?: (Resource)[] } & Pagination & Meta>;

  /**
   * Assign Resources to Default Project
   */
  projectsAssignResourcesDefault: (input: {
    /** A list of uniform resource names (URNs) to be added to a project. Only resources that you are authorized to see will be returned. */
    resources?: (Urn)[];
  }) => Promise<{ resources?: (Resource)[] }>;

  /**
   * List All Data Center Regions
   */
  regionsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ regions: (Region)[] } & Pagination & Meta>;

  /**
   * List All Container Registries
   */
  registriesList: () => Promise<{ registries?: (Registry)[] }>;

  /**
   * Create Container Registry
   */
  registriesCreate: (input: {
    /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
    name: string;
    /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
    subscription_tier_slug?: "starter" | "basic" | "professional";
    /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
    region?: "nyc3" | "sfo3" | "sfo2" | "ams3" | "sgp1" | "fra1" | "blr1" | "syd1";
  }) => Promise<{ registry?: Multiregistry }>;

  /**
   * Get a Container Registry By Name
   */
  registriesGet: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<{ registry?: Multiregistry }>;

  /**
   * Delete Container Registry By Name
   */
  registriesDelete: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<undefined>;

  /**
   * Get Docker Credentials By Registry Name
   */
  registriesGetDockerCredentials: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<DockerCredentials>;

  /**
   * Get Subscription Information
   */
  registriesGetSubscription: () => Promise<{ subscription?: Subscription }>;

  /**
   * Update Subscription Tier
   */
  registriesUpdateSubscription: (input: {
    /** The slug of the subscription tier to sign up for. */
    tier_slug?: "starter" | "basic" | "professional";
  }) => Promise<{ subscription?: Subscription }>;

  /**
   * List Registry Options (Subscription Tiers and Available Regions)
   */
  registriesGetOptions: () => Promise<{ options?: { available_regions?: (string)[]; subscription_tiers?: (SubscriptionTierBase & SubscriptionTierExtended)[] } }>;

  /**
   * Get Active Garbage Collection
   */
  registriesGetGarbageCollection: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * Start Garbage Collection
   */
  registriesRunGarbageCollection: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * List Garbage Collections
   */
  registriesListGarbageCollections: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ garbage_collections?: (GarbageCollection)[] }>;

  /**
   * Update Garbage Collection
   */
  registriesUpdateGarbageCollection: (input: {
    /** A boolean value indicating that the garbage collection should be cancelled. */
    cancel?: boolean;
    /** The name of a container registry. */
    registry_name: string;
    /** The UUID of a garbage collection run. */
    garbage_collection_uuid: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * List All Container Registry Repositories (V2)
   */
  registriesListRepositoriesV2: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. Ignored when 'page_token' is provided. */
    page?: number;
    /** Token to retrieve of the next or previous set of results more quickly than using 'page'. */
    page_token?: string;
  }) => Promise<{ repositories?: (RepositoryV2)[] } & Pagination & Meta>;

  /**
   * Delete Container Registry Repository
   */
  registriesDeleteRepository: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
  }) => Promise<undefined>;

  /**
   * List All Container Registry Repository Tags
   */
  registriesListRepositoryTags: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ tags?: (RepositoryTag)[] } & Pagination & Meta>;

  /**
   * Delete Container Registry Repository Tag
   */
  registriesDeleteRepositoryTag: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** The name of a container registry repository tag. */
    repository_tag: string;
  }) => Promise<undefined>;

  /**
   * List All Container Registry Repository Manifests
   */
  registriesListRepositoryManifests: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ manifests?: (RepositoryManifest)[] } & Pagination & Meta>;

  /**
   * Delete Container Registry Repository Manifest
   */
  registriesDeleteRepositoryManifest: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** The manifest digest of a container registry repository tag. */
    manifest_digest: string;
  }) => Promise<undefined>;

  /**
   * Validate a Container Registry Name
   */
  registriesValidateName: (input: {
    /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
    name: string;
  }) => Promise<undefined>;

  /**
   * Get Container Registry Information
   */
  registryGet: () => Promise<{ registry?: Registry }>;

  /**
   * Create Container Registry
   */
  registryCreate: (input: {
    /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
    name: string;
    /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
    subscription_tier_slug: "starter" | "basic" | "professional";
    /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
    region?: "nyc3" | "sfo3" | "ams3" | "sgp1" | "fra1";
  }) => Promise<{ registry?: Registry }>;

  /**
   * Delete Container Registry
   */
  registryDelete: () => Promise<undefined>;

  /**
   * Get Subscription
   */
  registryGetSubscription: () => Promise<{ subscription?: Subscription }>;

  /**
   * Update Subscription Tier
   */
  registryUpdateSubscription: (input: {
    /** The slug of the subscription tier to sign up for. */
    tier_slug?: "starter" | "basic" | "professional";
  }) => Promise<{ subscription?: Subscription }>;

  /**
   * Get Docker Credentials for Container Registry
   */
  registryGetDockerCredentials: (input: {
    /** The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire. */
    expiry_seconds?: number;
    /** By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials. */
    read_write?: boolean;
  }) => Promise<DockerCredentials>;

  /**
   * Validate a Container Registry Name
   */
  registryValidateName: (input: {
    /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
    name: string;
  }) => Promise<undefined>;

  /**
   * List All Container Registry Repositories
   */
  registryListRepositories: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ repositories?: (Repository)[] } & Pagination & Meta>;

  /**
   * List All Container Registry Repositories (V2)
   */
  registryListRepositoriesV2: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. Ignored when 'page_token' is provided. */
    page?: number;
    /** Token to retrieve of the next or previous set of results more quickly than using 'page'. */
    page_token?: string;
  }) => Promise<{ repositories?: (RepositoryV2)[] } & Pagination & Meta>;

  /**
   * List All Container Registry Repository Tags
   */
  registryListRepositoryTags: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ tags?: (RepositoryTag)[] } & Pagination & Meta>;

  /**
   * Delete Container Registry Repository Tag
   */
  registryDeleteRepositoryTag: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** The name of a container registry repository tag. */
    repository_tag: string;
  }) => Promise<undefined>;

  /**
   * List All Container Registry Repository Manifests
   */
  registryListRepositoryManifests: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ manifests?: (RepositoryManifest)[] } & Pagination & Meta>;

  /**
   * Delete Container Registry Repository Manifest
   */
  registryDeleteRepositoryManifest: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
    repository_name: string;
    /** The manifest digest of a container registry repository tag. */
    manifest_digest: string;
  }) => Promise<undefined>;

  /**
   * Start Garbage Collection
   */
  registryRunGarbageCollection: (input: {
    /** Type of the garbage collection to run against this registry */
    type?: "untagged manifests only" | "unreferenced blobs only" | "untagged manifests and unreferenced blobs";
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * Get Active Garbage Collection
   */
  registryGetGarbageCollection: (input: {
    /** The name of a container registry. */
    registry_name: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * List Garbage Collections
   */
  registryListGarbageCollections: (input: {
    /** The name of a container registry. */
    registry_name: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ garbage_collections?: (GarbageCollection)[] }>;

  /**
   * Update Garbage Collection
   */
  registryUpdateGarbageCollection: (input: {
    /** A boolean value indicating that the garbage collection should be cancelled. */
    cancel?: boolean;
    /** The name of a container registry. */
    registry_name: string;
    /** The UUID of a garbage collection run. */
    garbage_collection_uuid: string;
  }) => Promise<{ garbage_collection?: GarbageCollection }>;

  /**
   * List Registry Options (Subscription Tiers and Available Regions)
   */
  registryGetOptions: () => Promise<{ options?: { available_regions?: (string)[]; subscription_tiers?: (SubscriptionTierBase & SubscriptionTierExtended)[] } }>;

  /**
   * List All Droplet Neighbors
   */
  dropletsListNeighborsIds: () => Promise<NeighborIds>;

  /**
   * List All Reserved IPs
   */
  reservedIPsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ reserved_ips?: (ReservedIp)[] } & Pagination & Meta>;

  /**
   * Create a New Reserved IP
   */
  reservedIPsCreate: (input: {
    body: ReservedIpCreate;
  }) => Promise<{ reserved_ip?: ReservedIp; links?: { droplets?: (ActionLink)[]; actions?: (ActionLink)[] } }>;

  /**
   * Retrieve an Existing Reserved IP
   */
  reservedIPsGet: (input: {
    /** A reserved IP address. */
    reserved_ip: string;
  }) => Promise<{ reserved_ip?: ReservedIp }>;

  /**
   * Delete a Reserved IP
   */
  reservedIPsDelete: (input: {
    /** A reserved IP address. */
    reserved_ip: string;
  }) => Promise<undefined>;

  /**
   * List All Actions for a Reserved IP
   */
  reservedIPsActionsList: (input: {
    /** A reserved IP address. */
    reserved_ip: string;
  }) => Promise<{ actions?: (Action)[] } & Pagination & Meta>;

  /**
   * Initiate a Reserved IP Action
   */
  reservedIPsActionsPost: (input: {
    body?: ReservedIpActionUnassign | ReservedIpActionAssign;
    /** A reserved IP address. */
    reserved_ip: string;
  }) => Promise<{ action?: Action & { project_id?: string } }>;

  /**
   * Retrieve an Existing Reserved IP Action
   */
  reservedIPsActionsGet: (input: {
    /** A reserved IP address. */
    reserved_ip: string;
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
  }) => Promise<{ action?: Action & { project_id?: string } }>;

  /**
   * List All Reserved IPv6s
   */
  reservedIPv6List: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<ReservedIpv6List & Pagination & Meta>;

  /**
   * Create a New Reserved IPv6
   */
  reservedIPv6Create: (input: {
    /** The slug identifier for the region the reserved IPv6 will be reserved to. */
    region_slug: string;
  }) => Promise<{ reserved_ipv6?: { ip?: string; region_slug?: string; reserved_at?: string } }>;

  /**
   * Retrieve an Existing Reserved IPv6
   */
  reservedIPv6Get: (input: {
    /** A reserved IPv6 address. */
    reserved_ipv6: string;
  }) => Promise<{ reserved_ipv6?: ReservedIpv6 }>;

  /**
   * Delete a Reserved IPv6
   */
  reservedIPv6Delete: (input: {
    /** A reserved IPv6 address. */
    reserved_ipv6: string;
  }) => Promise<undefined>;

  /**
   * Initiate a Reserved IPv6 Action
   */
  reservedIPv6ActionsPost: (input: {
    body?: ReservedIpv6ActionUnassign | ReservedIpv6ActionAssign;
    /** A reserved IPv6 address. */
    reserved_ipv6: string;
  }) => Promise<{ action?: Action & { resource_id?: number; resource_type?: string; region_slug?: string } }>;

  /**
   * Create a BYOIP Prefix
   */
  byoipPrefixesCreate: (input: {
    /** The IP prefix in CIDR notation to bring */
    prefix: string;
    /** The region where the prefix will be created */
    region: string;
    /** The signature hash for the prefix creation request */
    signature: string;
  }) => Promise<{ uuid?: string; region?: string; status?: string }>;

  /**
   * List BYOIP Prefixes
   */
  byoipPrefixesList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ byoip_prefixes?: (ByoipPrefix)[] } & Pagination & Meta>;

  /**
   * Get a BYOIP Prefix
   */
  byoipPrefixesGet: (input: {
    /** The unique identifier for the BYOIP Prefix. */
    byoip_prefix_uuid: string;
  }) => Promise<{ byoip_prefix?: ByoipPrefix }>;

  /**
   * Delete a BYOIP Prefix
   */
  byoipPrefixesDelete: (input: {
    /** The unique identifier for the BYOIP Prefix. */
    byoip_prefix_uuid: string;
  }) => Promise<undefined>;

  /**
   * Update a BYOIP Prefix
   */
  byoipPrefixesPatch: (input: {
    /** Whether the BYOIP prefix should be advertised */
    advertise?: boolean;
    /** A unique identifier for a BYOIP prefix. */
    byoip_prefix_uuid: string;
  }) => Promise<{ byoip_prefix?: ByoipPrefix }>;

  /**
   * List BYOIP Prefix Resources
   */
  byoipPrefixesListResources: (input: {
    /** The unique identifier for the BYOIP Prefix. */
    byoip_prefix_uuid: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ ips?: (ByoipPrefixResource)[] } & Pagination & Meta>;

  /**
   * List Scans
   */
  securityListScans: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ scans?: (Scan)[] } & Pagination & Meta>;

  /**
   * Create Scan
   */
  securityCreateScan: () => Promise<{ scan?: Scan }>;

  /**
   * Get Scan
   */
  securityGetScan: (input: {
    /** The scan UUID. */
    scan_id: string;
    /** The finding severity level to include. */
    severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** The finding type to include. */
    type?: string;
  }) => Promise<{ scan?: Scan }>;

  /**
   * Get Latest Scan
   */
  securityGetLatestScan: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** The finding severity level to include. */
    severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    /** The finding type to include. */
    type?: string;
  }) => Promise<{ scan?: Scan }>;

  /**
   * Create Scan Rule
   */
  securityCreateScanRule: (input: {
    /** The URN of a resource to exclude from future scans. */
    resource?: string;
  }) => Promise<undefined>;

  /**
   * List Finding Affected Resources
   */
  securityListScanFindingAffectedResources: (input: {
    /** The scan UUID. */
    scan_id: string;
    /** The finding UUID. */
    finding_uuid: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ affected_resources?: (AffectedResource)[] }>;

  /**
   * List Settings
   */
  securityListSettings: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<Settings>;

  /**
   * Update Plan
   */
  securityUpdateSettingsPlan: (input: {
    /** Scan coverage for each available plan tier. */
    tier_coverage?: { [key: string]: { resources?: (string)[]; tags?: (string)[] } | undefined };
  }) => Promise<{ tier_coverage?: { [key: string]: { resources?: (string)[]; tags?: (string)[] } | undefined } }>;

  /**
   * Create Suppression
   */
  securityCreateSuppression: (input: {
    /** The rule UUID to suppress for the listed resources. */
    rule_uuid?: string;
    /** The URNs of resources to suppress for the rule. */
    resources?: (string)[];
  }) => Promise<SuppressedResourceRoot>;

  /**
   * Delete Suppression
   */
  securityDeleteSuppression: (input: {
    /** The suppression UUID to remove. */
    suppression_uuid: string;
  }) => Promise<undefined>;

  /**
   * List All Droplet Sizes
   */
  sizesList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ sizes: (Size)[] } & Pagination & Meta>;

  /**
   * List All Snapshots
   */
  snapshotsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** Used to filter snapshots by a resource type. */
    resource_type?: "droplet" | "volume";
  }) => Promise<{ snapshots?: (Snapshots)[] } & Pagination & Meta>;

  /**
   * Retrieve an Existing Snapshot
   */
  snapshotsGet: (input: {
    /** Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot. */
    snapshot_id: number | string;
  }) => Promise<{ snapshot?: Snapshots }>;

  /**
   * Delete a Snapshot
   */
  snapshotsDelete: (input: {
    /** Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot. */
    snapshot_id: number | string;
  }) => Promise<undefined>;

  /**
   * List Spaces Access Keys
   */
  spacesKeyList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** The field to sort by. */
    sort?: string;
    /** The direction to sort by. Possible values are `asc` or `desc`. */
    sort_direction?: string;
    /** The access key's name. */
    name?: string;
    /** The bucket's name. */
    bucket?: string;
    /** The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string. */
    permission?: string;
  }) => Promise<{ keys?: (Key)[] } & Pagination & Meta>;

  /**
   * Create a New Spaces Access Key
   */
  spacesKeyCreate: (input: {
    /** The access key's name. */
    name?: string;
    /** The list of permissions for the access key. */
    grants?: (Grant)[];
    /** The Access Key ID used to access a bucket. */
    access_key?: string;
    /** The date and time the key was created. */
    created_at?: string;
  }) => Promise<{ key?: KeyCreateResponse }>;

  /**
   * Get a Spaces Access Key
   */
  spacesKeyGet: (input: {
    /** The access key's ID. */
    access_key: string;
  }) => Promise<{ keys?: (Key)[] }>;

  /**
   * Delete a Spaces Access Key
   */
  spacesKeyDelete: (input: {
    /** The access key's ID. */
    access_key: string;
  }) => Promise<undefined>;

  /**
   * Update Spaces Access Keys
   */
  spacesKeyUpdate: (input: {
    /** The access key's name. */
    name?: string;
    /** The list of permissions for the access key. */
    grants?: (Grant)[];
    /** The Access Key ID used to access a bucket. */
    access_key?: string;
    /** The date and time the key was created. */
    created_at?: string;
  }, options: { params: { access_key: string } }) => Promise<{ key?: Key }>;

  /**
   * Update Spaces Access Keys
   */
  spacesKeyPatch: (input: {
    /** The access key's name. */
    name?: string;
    /** The list of permissions for the access key. */
    grants?: (Grant)[];
    /** The Access Key ID used to access a bucket. */
    access_key?: string;
    /** The date and time the key was created. */
    created_at?: string;
  }, options: { params: { access_key: string } }) => Promise<{ key?: Key }>;

  /**
   * List All Tags
   */
  tagsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ tags?: (Tags)[] } & Pagination & Meta>;

  /**
   * Create a New Tag
   */
  tagsCreate: (input: {
    /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.  **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.  When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).  Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".  */
    name?: string;
    /** An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.  This will only include resources that you are authorized to see. For example, to see tagged Droplets, include the `droplet:read` scope.  */
    resources?: TagsMetadata & { droplets?: unknown & TagsMetadata; imgages?: unknown & TagsMetadata; volumes?: unknown & TagsMetadata; volume_snapshots?: unknown & TagsMetadata; databases?: unknown & TagsMetadata };
  }) => Promise<{ tag?: Tags }>;

  /**
   * Retrieve a Tag
   */
  tagsGet: (input: {
    /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
    tag_id: string;
  }) => Promise<{ tag?: Tags }>;

  /**
   * Delete a Tag
   */
  tagsDelete: (input: {
    /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
    tag_id: string;
  }) => Promise<undefined>;

  /**
   * Tag a Resource
   */
  tagsAssignResources: (input: {
    /** An array of objects containing resource_id and resource_type  attributes.  This response will only include resources that you are authorized to see. For example, to see Droplets, include the `droplet:read` scope.  */
    resources: ({ resource_id?: string; resource_type?: "droplet" | "image" | "volume" | "volume_snapshot" })[];
    /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
    tag_id: string;
  }) => Promise<undefined>;

  /**
   * Untag a Resource
   */
  tagsUnassignResources: (input: {
    /** An array of objects containing resource_id and resource_type  attributes.  This response will only include resources that you are authorized to see. For example, to see Droplets, include the `droplet:read` scope.  */
    resources: ({ resource_id?: string; resource_type?: "droplet" | "image" | "volume" | "volume_snapshot" })[];
    /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
    tag_id: string;
  }) => Promise<undefined>;

  /**
   * List All Vector Databases
   */
  vectorDatabasesList: (input: {
    page?: number;
    per_page?: number;
  }) => Promise<VectordbListVectorDBsResponse>;

  /**
   * Create a New Vector Database
   */
  vectorDatabasesCreate: (input: {
    /** Required. Human-readable name for the database. */
    name?: string;
    /** Required. ID of the project to create the vector database in. */
    project_id?: string;
    /** Required. Region slug where the database will be provisioned. */
    region?: string;
    /** Required. Resource tier: small, medium, or large. */
    size?: string;
    /** A set of arbitrary tags to organize your vector database */
    tags?: (string)[];
  }) => Promise<VectordbCreateVectorDbResponse>;

  /**
   * Retrieve an Existing Vector Database
   */
  vectorDatabasesGet: (input: {
    /** ID of the vector database. */
    id: string;
  }) => Promise<VectordbGetVectorDbResponse>;

  /**
   * Update a Vector Database
   */
  vectorDatabasesUpdate: (input: {
    config?: VectordbVectorDbConfig;
    /** ID of the vector database. */
    id?: string;
    /** Optional. New project UUID to assign the database to. */
    project_id?: string;
  }, options: { params: { id: string } }) => Promise<VectordbUpdateVectorDbResponse>;

  /**
   * Delete a Vector Database
   */
  vectorDatabasesDelete: (input: {
    /** ID of the vector database. */
    id: string;
  }) => Promise<undefined>;

  /**
   * List Backups for a Vector Database
   */
  vectorDatabasesListBackups: (input: {
    /** Required. ID of the vector database. */
    id: string;
  }) => Promise<VectordbListBackupsResponse>;

  /**
   * Retrieve the Status of a Restore
   */
  vectorDatabasesGetRestoreStatus: (input: {
    /** Required. ID of the vector database. */
    id: string;
    /** Required. ID of the backup being restored. */
    backup_id: string;
  }) => Promise<VectordbGetRestoreStatusResponse>;

  /**
   * Restore a Vector Database from a Backup
   */
  vectorDatabasesPostRestoreBackup: (input: {
    /** Required. ID of the backup to restore from. */
    backup_id?: string;
    /** Required. ID of the vector database. */
    id?: string;
  }, options: { params: { id: string; backup_id: string } }) => Promise<VectordbRestoreBackupResponse>;

  /**
   * Retrieve Admin Credentials for a Vector Database
   */
  vectorDatabasesGetCredentials: (input: {
    /** ID of the vector database. */
    id: string;
  }) => Promise<VectordbGetVectorDbAdminCredentialsResponse>;

  /**
   * Resize a Vector Database
   */
  vectorDatabasesPostResize: (input: {
    /** Required. ID of the vector database to resize. */
    id?: string;
    /** Required. Target resource tier: small, medium, or large. */
    size?: string;
  }, options: { params: { id: string } }) => Promise<VectordbResizeVectorDbResponse>;

  /**
   * Update Tags on a Vector Database
   */
  vectorDatabasesUpdateTags: (input: {
    /** Required. ID of the vector database to update tags for. */
    id?: string;
    /** Tags to set on the vector database. Replaces all existing tags. */
    tags?: (string)[];
  }, options: { params: { id: string } }) => Promise<VectordbUpdateVectorDbTagsResponse>;

  /**
   * List All Block Storage Volumes
   */
  volumesList: (input: {
    /** The block storage volume's name. */
    name?: string;
    region?: RegionSlug;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ volumes: (VolumeFull)[] } & Pagination & Meta>;

  /**
   * Create a New Block Storage Volume
   */
  volumesCreate: (input: {
    body: VolumesExt4 | VolumesXfs;
  }) => Promise<{ volume?: VolumeFull }>;

  /**
   * Delete a Block Storage Volume by Name
   */
  volumesDeleteByName: (input: {
    /** The block storage volume's name. */
    name?: string;
    region?: RegionSlug;
  }) => Promise<undefined>;

  /**
   * Initiate A Block Storage Action By Volume Name
   */
  volumeActionsPost: (input: {
    body: VolumeActionPostAttach | VolumeActionPostDetach;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ action?: VolumeAction }>;

  /**
   * Retrieve an Existing Volume Snapshot
   */
  volumeSnapshotsGetById: (input: {
    /** The unique identifier for the snapshot. */
    snapshot_id: string;
  }) => Promise<{ snapshot?: Snapshots }>;

  /**
   * Delete a Volume Snapshot
   */
  volumeSnapshotsDeleteById: (input: {
    /** The unique identifier for the snapshot. */
    snapshot_id: string;
  }) => Promise<undefined>;

  /**
   * Retrieve an Existing Block Storage Volume
   */
  volumesGet: (input: {
    /** The ID of the block storage volume. */
    volume_id: string;
  }) => Promise<{ volume?: VolumeFull }>;

  /**
   * Delete a Block Storage Volume
   */
  volumesDelete: (input: {
    /** The ID of the block storage volume. */
    volume_id: string;
  }) => Promise<undefined>;

  /**
   * List All Actions for a Volume
   */
  volumeActionsList: (input: {
    /** The ID of the block storage volume. */
    volume_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ actions?: (VolumeAction)[] } & Pagination & Meta>;

  /**
   * Initiate A Block Storage Action By Volume Id
   */
  volumeActionsPostById: (input: {
    body: VolumeActionPostAttach | VolumeActionPostDetach | VolumeActionPostResize;
    /** The ID of the block storage volume. */
    volume_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ action?: VolumeAction }>;

  /**
   * Retrieve an Existing Volume Action
   */
  volumeActionsGet: (input: {
    /** The ID of the block storage volume. */
    volume_id: string;
    /** A unique numeric ID that can be used to identify and reference an action. */
    action_id: number;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ action?: VolumeAction }>;

  /**
   * List Snapshots for a Volume
   */
  volumeSnapshotsList: (input: {
    /** The ID of the block storage volume. */
    volume_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ snapshots?: (Snapshots)[] } & Pagination & Meta>;

  /**
   * Create Snapshot from a Volume
   */
  volumeSnapshotsCreate: (input: {
    /** A human-readable name for the volume snapshot. */
    name: string;
    tags?: TagsArray;
    /** The ID of the block storage volume. */
    volume_id: string;
  }) => Promise<{ snapshot?: Snapshots }>;

  /**
   * List All VPCs
   */
  vpcsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ vpcs?: (Vpc)[] } & Pagination & Meta>;

  /**
   * Create a New VPC
   */
  vpcsCreate: (input: {
    /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
    name: string;
    /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
    description?: string;
    /** The slug identifier for the region where the VPC will be created. */
    region: string;
    /** The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account. */
    ip_range?: string;
  }) => Promise<{ vpc?: Vpc }>;

  /**
   * Retrieve an Existing VPC
   */
  vpcsGet: (input: {
    /** A unique identifier for a VPC. */
    vpc_id: string;
  }) => Promise<{ vpc?: Vpc }>;

  /**
   * Update a VPC
   */
  vpcsUpdate: (input: {
    /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
    name: string;
    /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
    description?: string;
    /** A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined. */
    default?: boolean;
    /** A unique identifier for a VPC. */
    vpc_id: string;
  }) => Promise<{ vpc?: Vpc }>;

  /**
   * Partially Update a VPC
   */
  vpcsPatch: (input: {
    /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
    name?: string;
    /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
    description?: string;
    /** A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined. */
    default?: boolean;
    /** A unique identifier for a VPC. */
    vpc_id: string;
  }) => Promise<{ vpc?: Vpc }>;

  /**
   * Delete a VPC
   */
  vpcsDelete: (input: {
    /** A unique identifier for a VPC. */
    vpc_id: string;
  }) => Promise<undefined>;

  /**
   * List the Member Resources of a VPC
   */
  vpcsListMembers: (input: {
    /** A unique identifier for a VPC. */
    vpc_id: string;
    /** Used to filter VPC members by a resource type. */
    resource_type?: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ members?: (VpcMember)[] } & Pagination & Meta>;

  /**
   * List the Peerings of a VPC
   */
  vpcsListPeerings: (input: {
    /** A unique identifier for a VPC. */
    vpc_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ peerings?: (VpcPeering)[] } & Pagination & Meta>;

  /**
   * Create a Peering with a VPC
   */
  vpcsCreatePeerings: (input: {
    /** The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
    name: string;
    /** The ID of the VPC to peer with. */
    vpc_id: string;
  }, options: { params: { vpc_id: string } }) => Promise<{ peering?: VpcPeering }>;

  /**
   * Update a VPC Peering
   */
  vpcsPatchPeerings: (input: {
    /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
    name: string;
    /** A unique identifier for a VPC. */
    vpc_id: string;
    /** A unique identifier for a VPC peering. */
    vpc_peering_id: string;
  }) => Promise<{ peering?: VpcPeering }>;

  /**
   * List All VPC Peerings
   */
  vpcPeeringsList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    region?: RegionSlug;
  }) => Promise<{ vpc_peerings?: (VpcPeering)[] } & Pagination & Meta>;

  /**
   * Create a New VPC Peering
   */
  vpcPeeringsCreate: (input: {
    /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
    name: string;
    /** An array of the two peered VPCs IDs. */
    vpc_ids: (string)[];
  }) => Promise<{ vpc_peering?: VpcPeering }>;

  /**
   * Retrieve an Existing VPC Peering
   */
  vpcPeeringsGet: (input: {
    /** A unique identifier for a VPC peering. */
    vpc_peering_id: string;
  }) => Promise<{ vpc_peering?: VpcPeering }>;

  /**
   * Update a VPC peering
   */
  vpcPeeringsPatch: (input: {
    /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
    name: string;
    /** A unique identifier for a VPC peering. */
    vpc_peering_id: string;
  }) => Promise<{ vpc_peering?: VpcPeering }>;

  /**
   * Delete a VPC peering
   */
  vpcPeeringsDelete: (input: {
    /** A unique identifier for a VPC peering. */
    vpc_peering_id: string;
  }) => Promise<{ vpc_peering?: VpcPeering }>;

  /**
   * List All VPC NAT Gateways
   */
  vpcnatgatewaysList: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
    /** The current state of the VPC NAT gateway. */
    state?: "new" | "provisioning" | "active" | "deleting" | "error" | "invalid";
    /** The region where the VPC NAT gateway is located. */
    region?: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
    /** The type of the VPC NAT gateway. */
    type?: "public";
    /** The name of the VPC NAT gateway. */
    name?: string;
  }) => Promise<{ vpc_nat_gateways?: (VpcNatGatewayGet)[] } & Pagination & Meta>;

  /**
   * Create a New VPC NAT Gateway
   */
  vpcnatgatewaysCreate: (input: {
    /** The human-readable name of the VPC NAT gateway. */
    name: string;
    /** The type of the VPC NAT gateway. */
    type: "PUBLIC";
    /** The region in which the VPC NAT gateway is created. */
    region: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
    /** The size of the VPC NAT gateway. */
    size: number;
    /** An array of VPCs associated with the VPC NAT gateway. */
    vpcs: ({ vpc_uuid: string; default_gateway?: boolean })[];
    /** The UDP timeout in seconds for the VPC NAT gateway. */
    udp_timeout_seconds?: number;
    /** The ICMP timeout in seconds for the VPC NAT gateway. */
    icmp_timeout_seconds?: number;
    /** The TCP timeout in seconds for the VPC NAT gateway. */
    tcp_timeout_seconds?: number;
  }) => Promise<{ vpc_nat_gateway?: VpcNatGatewayCreate }>;

  /**
   * Retrieve an Existing VPC NAT Gateway
   */
  vpcnatgatewaysGet: (input: {
    /** The unique identifier of the VPC NAT gateway. */
    id: string;
  }) => Promise<{ vpc_nat_gateway?: VpcNatGatewayGet }>;

  /**
   * Update VPC NAT Gateway
   */
  vpcnatgatewaysUpdate: (input: {
    /** The human-readable name of the VPC NAT gateway. */
    name: string;
    /** The size of the VPC NAT gateway. */
    size: number;
    /** An array of VPCs associated with the VPC NAT gateway. */
    vpcs?: ({ vpc_uuid?: string; default_gateway?: boolean })[];
    /** The UDP timeout in seconds for the VPC NAT gateway. */
    udp_timeout_seconds?: number;
    /** The ICMP timeout in seconds for the VPC NAT gateway. */
    icmp_timeout_seconds?: number;
    /** The TCP timeout in seconds for the VPC NAT gateway. */
    tcp_timeout_seconds?: number;
    /** The unique identifier of the VPC NAT gateway. */
    id: string;
  }) => Promise<{ vpc_nat_gateway?: VpcNatGatewayUpdate }>;

  /**
   * Delete VPC NAT Gateway
   */
  vpcnatgatewaysDelete: (input: {
    /** The unique identifier of the VPC NAT gateway. */
    id: string;
  }) => Promise<undefined>;

  /**
   * List All Checks
   */
  uptimeListChecks: (input: {
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ checks?: (Check)[] } & Pagination & Meta>;

  /**
   * Create a New Check
   */
  uptimeCreateCheck: (input: {
    /** A human-friendly display name. */
    name: string;
    /** The type of health check to perform. */
    type: "ping" | "http" | "https";
    /** The endpoint to perform healthchecks on. */
    target: string;
    /** An array containing the selected regions to perform healthchecks from. */
    regions: ("us_east" | "us_west" | "eu_west" | "se_asia")[];
    /** A boolean value indicating whether the check is enabled/disabled. */
    enabled: boolean;
  }) => Promise<{ check?: Check }>;

  /**
   * Retrieve an Existing Check
   */
  uptimeGetCheck: (input: {
    /** A unique identifier for a check. */
    check_id: string;
  }) => Promise<{ check?: Check }>;

  /**
   * Update a Check
   */
  uptimeUpdateCheck: (input: {
    /** A human-friendly display name. */
    name?: string;
    /** The type of health check to perform. */
    type?: "ping" | "http" | "https";
    /** The endpoint to perform healthchecks on. */
    target?: string;
    /** An array containing the selected regions to perform healthchecks from. */
    regions?: ("us_east" | "us_west" | "eu_west" | "se_asia")[];
    /** A boolean value indicating whether the check is enabled/disabled. */
    enabled?: boolean;
    /** A unique identifier for a check. */
    check_id: string;
  }) => Promise<{ check?: Check }>;

  /**
   * Delete a Check
   */
  uptimeDeleteCheck: (input: {
    /** A unique identifier for a check. */
    check_id: string;
  }) => Promise<undefined>;

  /**
   * Retrieve Check State
   */
  uptimeGetCheckState: (input: {
    /** A unique identifier for a check. */
    check_id: string;
  }) => Promise<{ state?: State }>;

  /**
   * List All Alerts
   */
  uptimeListAlerts: (input: {
    /** A unique identifier for a check. */
    check_id: string;
    /** Number of items returned per page */
    per_page?: number;
    /** Which 'page' of paginated results to return. */
    page?: number;
  }) => Promise<{ alerts?: (Alert)[] } & Pagination & Meta>;

  /**
   * Create a New Alert
   */
  uptimeCreateAlert: (input: {
    /** A unique ID that can be used to identify and reference the alert. */
    id?: string;
    /** A human-friendly display name. */
    name: string;
    /** The type of alert. */
    type: "latency" | "down" | "down_global" | "ssl_expiry";
    /** The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type. */
    threshold?: number;
    /** The comparison operator used against the alert's threshold. */
    comparison?: "greater_than" | "less_than";
    notifications: Notification;
    /** Period of time the threshold must be exceeded to trigger the alert. */
    period: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    /** A unique identifier for a check. */
    check_id: string;
  }) => Promise<{ alert?: Alert }>;

  /**
   * Retrieve an Existing Alert
   */
  uptimeGetAlert: (input: {
    /** A unique identifier for a check. */
    check_id: string;
    /** A unique identifier for an alert. */
    alert_id: string;
  }) => Promise<{ alert?: Alert }>;

  /**
   * Update an Alert
   */
  uptimeUpdateAlert: (input: {
    /** A human-friendly display name. */
    name: string;
    /** The type of alert. */
    type: "latency" | "down" | "down_global" | "ssl_expiry";
    /** The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type. */
    threshold?: number;
    /** The comparison operator used against the alert's threshold. */
    comparison?: "greater_than" | "less_than";
    notifications: Notification;
    /** Period of time the threshold must be exceeded to trigger the alert. */
    period: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    /** A unique identifier for a check. */
    check_id: string;
    /** A unique identifier for an alert. */
    alert_id: string;
  }) => Promise<{ alert?: Alert }>;

  /**
   * Delete an Alert
   */
  uptimeDeleteAlert: (input: {
    /** A unique identifier for a check. */
    check_id: string;
    /** A unique identifier for an alert. */
    alert_id: string;
  }) => Promise<undefined>;

  /**
   * List Agents
   */
  genaiListAgents: (input: {
    /** Only list agents that are deployed. */
    only_deployed?: boolean;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentsOutputPublic>;

  /**
   * Create an Agent
   */
  genaiCreateAgent: (input: {
    /** Optional Anthropic API key ID to use with Anthropic models */
    anthropic_key_uuid?: string;
    /** A text description of the agent, not used in inference */
    description?: string;
    /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
    instruction?: string;
    /** Ids of the knowledge base(s) to attach to the agent */
    knowledge_base_uuid?: (string)[];
    /** MCP (Model Context Protocol) servers to attach to the agent */
    mcp_servers?: (ApiMcpServer)[];
    model_provider_key_uuid?: string;
    model_router_uuid?: string;
    /** Identifier for the foundation model. */
    model_uuid?: string;
    /** Agent name */
    name?: string;
    /** Optional OpenAI API key ID to use with OpenAI models */
    open_ai_key_uuid?: string;
    /** The id of the DigitalOcean project this agent will belong to */
    project_id?: string;
    reasoning_effort?: string;
    /** The DigitalOcean region to deploy your agent in */
    region?: string;
    router_preset_slug?: string;
    /** Agent tag to organize related resources */
    tags?: (string)[];
    thinking_token_budget?: number;
    /** Whether the agent can use the built-in web_fetch tool to retrieve content from public web pages. */
    web_fetch_enabled?: boolean;
    /** Whether the agent can use the built-in web_search tool to search the public web for current information. */
    web_search_enabled?: boolean;
    /** Identifier for the workspace */
    workspace_uuid?: string;
  }) => Promise<ApiCreateAgentOutput>;

  /**
   * List Agent API Keys
   */
  genaiListAgentApiKeys: (input: {
    /** Agent id */
    agent_uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentApiKeysOutput>;

  /**
   * Create an Agent API Key
   */
  genaiCreateAgentApiKey: (input: {
    /** Agent id */
    agent_uuid?: string;
    /** A human friendly name to identify the key */
    name?: string;
  }, options: { params: { agent_uuid: string } }) => Promise<ApiCreateAgentApiKeyOutput>;

  /**
   * Update API Key for an Agent
   */
  genaiUpdateAgentApiKey: (input: {
    /** Agent id */
    agent_uuid?: string;
    /** API key ID */
    api_key_uuid?: string;
    /** Name */
    name?: string;
  }, options: { params: { agent_uuid: string; api_key_uuid: string } }) => Promise<ApiUpdateAgentApiKeyOutput>;

  /**
   * Delete API Key for an Agent 
   */
  genaiDeleteAgentApiKey: (input: {
    /** A unique identifier for your agent. */
    agent_uuid: string;
    /** API key for an agent. */
    api_key_uuid: string;
  }) => Promise<ApiDeleteAgentApiKeyOutput>;

  /**
   * Regenerate API Key for an Agent
   */
  genaiRegenerateAgentApiKey: (input: {
    /** Agent id */
    agent_uuid: string;
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiRegenerateAgentApiKeyOutput>;

  /**
   * Add Function Route to an Agent
   */
  genaiAttachAgentFunction: (input: {
    /** Agent id */
    agent_uuid?: string;
    /** Function description */
    description?: string;
    /** The name of the function in the DigitalOcean functions platform */
    faas_name?: string;
    /** The namespace of the function in the DigitalOcean functions platform */
    faas_namespace?: string;
    /** Function name */
    function_name?: string;
    /** Describe the input schema for the function so the agent may call it */
    input_schema?: { [key: string]: unknown };
    /** Describe the output schema for the function so the agent handle its response */
    output_schema?: { [key: string]: unknown };
  }, options: { params: { agent_uuid: string } }) => Promise<ApiLinkAgentFunctionOutput>;

  /**
   * Update Function Route for an Agent
   */
  genaiUpdateAgentFunction: (input: {
    /** Agent id */
    agent_uuid?: string;
    /** Funciton description */
    description?: string;
    /** The name of the function in the DigitalOcean functions platform */
    faas_name?: string;
    /** The namespace of the function in the DigitalOcean functions platform */
    faas_namespace?: string;
    /** Function name */
    function_name?: string;
    /** Function id */
    function_uuid?: string;
    /** Describe the input schema for the function so the agent may call it */
    input_schema?: { [key: string]: unknown };
    /** Describe the output schema for the function so the agent handle its response */
    output_schema?: { [key: string]: unknown };
  }, options: { params: { agent_uuid: string; function_uuid: string } }) => Promise<ApiUpdateAgentFunctionOutput>;

  /**
   * Delete Function Route for an Agent
   */
  genaiDetachAgentFunction: (input: {
    /** The id of the agent the function route belongs to. */
    agent_uuid: string;
    /** The function route to be destroyed. This does not destroy the function itself. */
    function_uuid: string;
  }) => Promise<ApiUnlinkAgentFunctionOutput>;

  /**
   * Attach Guardrails to an Agent
   */
  genaiAttachAgentGuardrails: (input: {
    /** The UUID of the agent. */
    agent_uuid?: string;
    /** The list of guardrails to attach. */
    guardrails?: (ApiAgentGuardrailInput)[];
  }, options: { params: { agent_uuid: string } }) => Promise<ApiLinkAgentGuardrailOutput>;

  /**
   * Detach a Guardrail from an Agent
   */
  genaiDetachAgentGuardrail: (input: {
    /** The UUID of the agent. */
    agent_uuid: string;
    /** The UUID of the guardrail to detach. */
    guardrail_uuid: string;
  }) => Promise<ApiUnlinkAgentGuardrailOutput>;

  /**
   * Attach Knowledge Bases to an Agent
   */
  genaiAttachKnowledgeBases: (input: {
    /** A unique identifier for an agent. */
    agent_uuid: string;
  }) => Promise<ApiLinkKnowledgeBaseOutput>;

  /**
   * Attach Knowledge Base to an Agent
   */
  genaiAttachKnowledgeBase: (input: {
    /** A unique identifier for an agent. */
    agent_uuid: string;
    /** A unique identifier for a knowledge base. */
    knowledge_base_uuid: string;
  }) => Promise<ApiLinkKnowledgeBaseOutput>;

  /**
   * Detach Knowledge Base from an Agent
   */
  genaiDetachKnowledgeBase: (input: {
    /** Agent id */
    agent_uuid: string;
    /** Knowledge base id */
    knowledge_base_uuid: string;
  }) => Promise<ApiUnlinkKnowledgeBaseOutput>;

  /**
   * Add Agent Route to an Agent
   */
  genaiAttachAgent: (input: {
    /** Routed agent id */
    child_agent_uuid?: string;
    if_case?: string;
    /** A unique identifier for the parent agent. */
    parent_agent_uuid?: string;
    /** Name of route */
    route_name?: string;
  }, options: { params: { parent_agent_uuid: string; child_agent_uuid: string } }) => Promise<ApiLinkAgentOutput>;

  /**
   * Update Agent Route for an Agent
   */
  genaiUpdateAttachedAgent: (input: {
    /** Routed agent id */
    child_agent_uuid?: string;
    /** Describes the case in which the child agent should be used */
    if_case?: string;
    /** A unique identifier for the parent agent. */
    parent_agent_uuid?: string;
    /** Route name */
    route_name?: string;
    /** Unique id of linkage */
    uuid?: string;
  }, options: { params: { parent_agent_uuid: string; child_agent_uuid: string } }) => Promise<ApiUpdateLinkedAgentOutput>;

  /**
   * Delete Agent Route for an Agent
   */
  genaiDetachAgent: (input: {
    /** Pagent agent id */
    parent_agent_uuid: string;
    /** Routed agent id */
    child_agent_uuid: string;
  }) => Promise<ApiUnlinkAgentOutput>;

  /**
   * Retrieve an Existing Agent
   */
  genaiGetAgent: (input: {
    /** Unique agent id */
    uuid: string;
  }) => Promise<ApiGetAgentOutput>;

  /**
   * Update an Agent
   */
  genaiUpdateAgent: (input: {
    agent_log_insights_enabled?: boolean;
    /** Optional list of allowed domains for the chatbot - Must use fully qualified domain name (FQDN) such as https://example.com */
    allowed_domains?: (string)[];
    /** Optional anthropic key uuid for use with anthropic models */
    anthropic_key_uuid?: string;
    /** When true, removes all MCP servers from the agent. Use this instead of sending an empty mcp_servers array. */
    clear_mcp_servers?: boolean;
    /** Optional update of conversation logs enabled */
    conversation_logs_enabled?: boolean;
    /** Agent description */
    description?: string;
    /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
    instruction?: string;
    /** How many results should be considered from an attached knowledge base */
    k?: number;
    /** Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response. */
    max_tokens?: number;
    /** MCP (Model Context Protocol) servers to attach to the agent */
    mcp_servers?: (ApiMcpServer)[];
    /** Optional Model Provider uuid for use with provider models */
    model_provider_key_uuid?: string;
    model_router_uuid?: string;
    /** Identifier for the foundation model. */
    model_uuid?: string;
    /** Agent name */
    name?: string;
    /** Optional OpenAI key uuid for use with OpenAI models */
    open_ai_key_uuid?: string;
    /** The id of the DigitalOcean project this agent will belong to */
    project_id?: string;
    provide_citations?: boolean;
    reasoning_effort?: string;
    retrieval_method?: ApiRetrievalMethod;
    router_preset_slug?: string;
    /** A set of abitrary tags to organize your agent */
    tags?: (string)[];
    /** Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation. */
    temperature?: number;
    thinking_token_budget?: number;
    /** Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses. */
    top_p?: number;
    /** Unique agent id */
    uuid?: string;
    /** Optional. Set to true to let the agent use the built-in web_fetch tool to retrieve content from public web pages, or false to disable it. */
    web_fetch_enabled?: boolean;
    /** Optional. Set to true to let the agent use the built-in web_search tool to search the public web for current information, or false to disable it. */
    web_search_enabled?: boolean;
  }, options: { params: { uuid: string } }) => Promise<ApiUpdateAgentOutput>;

  /**
   * Delete an Agent
   */
  genaiDeleteAgent: (input: {
    /** Unique agent id */
    uuid: string;
  }) => Promise<ApiDeleteAgentOutput>;

  /**
   * View Agent Routes
   */
  genaiGetAgentChildren: (input: {
    /** Agent id */
    uuid: string;
  }) => Promise<ApiGetChildrenOutput>;

  /**
   * Update Agent Status
   */
  genaiUpdateAgentDeploymentVisibility: (input: {
    /** Unique id */
    uuid?: string;
    visibility?: ApiDeploymentVisibility;
  }, options: { params: { uuid: string } }) => Promise<ApiUpdateAgentDeploymentVisbilityOutput>;

  /**
   * Get Agent Usage
   */
  genaiGetAgentUsage: (input: {
    /** Agent id */
    uuid: string;
    /** Return all usage data from this date. */
    start?: string;
    /** Return all usage data up to this date, if omitted, will return up to the current date. */
    stop?: string;
  }) => Promise<ApiGetAgentUsageOutput>;

  /**
   * List Agent Versions
   */
  genaiListAgentVersions: (input: {
    /** Agent uuid */
    uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentVersionsOutput>;

  /**
   * Rollback to Agent Version
   */
  genaiRollbackToAgentVersion: (input: {
    /** Agent unique identifier */
    uuid?: string;
    /** Unique identifier */
    version_hash?: string;
  }, options: { params: { uuid: string } }) => Promise<ApiRollbackToAgentVersionOutput>;

  /**
   * List Anthropic API Keys
   */
  genaiListAnthropicApiKeys: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAnthropicApiKeysOutput>;

  /**
   * Create Anthropic API Key
   */
  genaiCreateAnthropicApiKey: (input: {
    /** Anthropic API key */
    api_key?: string;
    /** Name of the key */
    name?: string;
  }) => Promise<ApiCreateAnthropicApiKeyOutput>;

  /**
   * Get Anthropic API Key
   */
  genaiGetAnthropicApiKey: (input: {
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiGetAnthropicApiKeyOutput>;

  /**
   * Update Anthropic API Key
   */
  genaiUpdateAnthropicApiKey: (input: {
    /** Anthropic API key */
    api_key?: string;
    /** API key ID */
    api_key_uuid?: string;
    /** Name of the key */
    name?: string;
  }, options: { params: { api_key_uuid: string } }) => Promise<ApiUpdateAnthropicApiKeyOutput>;

  /**
   * Delete Anthropic API Key
   */
  genaiDeleteAnthropicApiKey: (input: {
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiDeleteAnthropicApiKeyOutput>;

  /**
   * List agents by Anthropic key
   */
  genaiListAgentsByAnthropicKey: (input: {
    /** Unique ID of Anthropic key */
    uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentsByAnthropicKeyOutput>;

  /**
   * List Custom Models
   */
  genaiListCustomModels: (input: {
    /** Page number for pagination. */
    page?: number;
    /** Number of items per page. */
    per_page?: number;
    /** Filter by model status. */
    status?: "STATUS_UNSPECIFIED" | "STATUS_IMPORTING" | "STATUS_READY" | "STATUS_FAILED" | "STATUS_DELETED";
  }) => Promise<ApiListCustomModelsOutputPublic>;

  /**
   * Import Custom Model
   */
  genaiImportCustomModel: (input: {
    /** Whether the caller accepts storage of their HuggingFace token for gated model access */
    accept_hf_token_storage?: boolean;
    /** Whether the caller accepts the terms and conditions for importing this model */
    accept_terms_and_conditions?: boolean;
    /** Description of the model */
    description?: string;
    /** Name for the imported model */
    name?: string;
    /** Preferred GPU region for deployment */
    preferred_gpu_region?: string;
    source_ref?: CustomModelSourceRef;
    source_type?: CustomModelSourceType;
    tags?: CustomModelTags;
  }) => Promise<ApiImportCustomModelOutputPublic>;

  /**
   * Get Custom Model
   */
  genaiGetCustomModel: (input: {
    /** UUID of the custom model to retrieve */
    uuid: string;
  }) => Promise<ApiGetCustomModelOutputPublic>;

  /**
   * Delete Custom Model
   */
  genaiDeleteCustomModel: (input: {
    /** UUID of the custom model to delete */
    uuid: string;
  }) => Promise<ApiDeleteCustomModelOutputPublic>;

  /**
   * Update Custom Model Metadata
   */
  genaiUpdateCustomModelMetadata: (input: {
    description?: string;
    /** Optional new input modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
    input_modalities?: (string)[];
    license?: string;
    name?: string;
    /** Optional new output modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
    output_modalities?: (string)[];
    parameters?: string;
    tags?: CustomModelTags;
    /** UUID of the custom model to update */
    uuid?: string;
  }, options: { params: { uuid: string } }) => Promise<ApiUpdateCustomModelMetadataOutputPublic>;

  /**
   * List Evaluation Datasets
   */
  genaiListEvaluationDatasets: (input: {
    /** Filter by evaluation dataset type. */
    dataset_type?: "EVALUATION_DATASET_TYPE_UNKNOWN" | "EVALUATION_DATASET_TYPE_ADK" | "EVALUATION_DATASET_TYPE_NON_ADK" | "EVALUATION_DATASET_TYPE_MODEL";
  }) => Promise<ApiListEvaluationDatasetsOutput>;

  /**
   * Create Evaluation Dataset
   */
  genaiCreateEvaluationDataset: (input: {
    dataset_type?: ApiEvaluationDatasetType;
    file_upload_dataset?: ApiFileUploadDataSource;
    /** The name of the agent evaluation dataset. */
    name?: string;
  }) => Promise<ApiCreateEvaluationDatasetOutput>;

  /**
   * Create Presigned URLs for Evaluation Dataset File Upload
   */
  genaiCreateEvaluationDatasetFileUploadPresignedUrls: (input: {
    /** A list of files to generate presigned URLs for. */
    files?: (ApiPresignedUrlFile)[];
  }) => Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>;

  /**
   * Delete Evaluation Dataset
   */
  genaiDeleteEvaluationDataset: (input: {
    /** UUID of the evaluation dataset to delete. */
    dataset_uuid: string;
  }) => Promise<ApiDeleteEvaluationDatasetOutput>;

  /**
   * Get Download URL for Evaluation Dataset
   */
  genaiGetEvaluationDatasetDownloadUrl: (input: {
    /** UUID of the evaluation dataset. */
    dataset_uuid: string;
  }) => Promise<ApiGetEvaluationDatasetDownloadUrlOutput>;

  /**
   * List Evaluation Metrics
   */
  genaiListEvaluationMetrics: () => Promise<ApiListEvaluationMetricsOutput>;

  /**
   * Create Custom Evaluation Metric
   */
  genaiCreateCustomEvaluationMetric: (input: {
    config?: ApiCustomEvaluationMetricConfig;
    description?: string;
    metric_name?: string;
  }) => Promise<ApiCreateCustomEvaluationMetricOutput>;

  /**
   * Update Custom Evaluation Metric
   */
  genaiUpdateCustomEvaluationMetric: (input: {
    config?: ApiCustomEvaluationMetricConfig;
    description?: string;
    metric_name?: string;
    metric_uuid?: string;
  }, options: { params: { metric_uuid: string } }) => Promise<ApiUpdateCustomEvaluationMetricOutput>;

  /**
   * Delete Custom Evaluation Metric
   */
  genaiDeleteCustomEvaluationMetric: (input: {
    /** UUID of the custom metric to delete. */
    metric_uuid: string;
  }) => Promise<ApiDeleteCustomEvaluationMetricOutput>;

  /**
   * Run an Evaluation Test Case
   */
  genaiRunEvaluationTestCase: (input: {
    /** Agent deployment names to run the test case against (ADK agent workspaces). */
    agent_deployment_names?: (string)[];
    /** Agent UUIDs to run the test case against (legacy agents). */
    agent_uuids?: (string)[];
    /** The name of the run. */
    run_name?: string;
    /** Test-case UUID to run */
    test_case_uuid?: string;
  }) => Promise<ApiRunEvaluationTestCaseOutput>;

  /**
   * Retrieve Information About an Existing Evaluation Run
   */
  genaiGetEvaluationRun: (input: {
    /** Evaluation run UUID. */
    evaluation_run_uuid: string;
  }) => Promise<ApiGetEvaluationRunOutput>;

  /**
   * Retrieve Results of an Evaluation Run
   */
  genaiGetEvaluationRunResults: (input: {
    /** Evaluation run UUID. */
    evaluation_run_uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiGetEvaluationRunResultsOutput>;

  /**
   * Retrieve Results of an Evaluation Run Prompt
   */
  genaiGetEvaluationRunPromptResults: (input: {
    /** Evaluation run UUID. */
    evaluation_run_uuid: string;
    /** Prompt ID to get results for. */
    prompt_id: number;
  }) => Promise<ApiGetEvaluationRunPromptResultsOutput>;

  /**
   * List Evaluation Test Cases
   */
  genaiListEvaluationTestCases: () => Promise<ApiListEvaluationTestCasesOutput>;

  /**
   * Create Evaluation Test Case.
   */
  genaiCreateEvaluationTestCase: (input: {
    agent_workspace_name?: string;
    /** Dataset against which the test‑case is executed. */
    dataset_uuid?: string;
    /** Description of the test case. */
    description?: string;
    /** Full metric list to use for evaluation test case. */
    metrics?: (string)[];
    /** Name of the test case. */
    name?: string;
    star_metric?: ApiStarMetric;
    /** The workspace uuid. */
    workspace_uuid?: string;
  }) => Promise<ApiCreateEvaluationTestCaseOutput>;

  /**
   * List Evaluation Runs by Test Case
   */
  genaiListEvaluationRunsByTestCase: (input: {
    /** Evaluation run UUID. */
    evaluation_test_case_uuid: string;
    /** Version of the test case. */
    evaluation_test_case_version?: number;
  }) => Promise<ApiListEvaluationRunsByTestCaseOutput>;

  /**
   * Retrieve Information About an Existing Evaluation Test Case
   */
  genaiGetEvaluationTestCase: (input: {
    /** The test case uuid to retrieve. */
    test_case_uuid: string;
    /** Version of the test case. */
    evaluation_test_case_version?: number;
  }) => Promise<ApiGetEvaluationTestCaseOutput>;

  /**
   * Update an Evaluation Test Case.
   */
  genaiUpdateEvaluationTestCase: (input: {
    /** Dataset against which the test‑case is executed. */
    dataset_uuid?: string;
    /** Description of the test case. */
    description?: string;
    metrics?: ApiEvaluationTestCaseMetricList;
    /** Name of the test case. */
    name?: string;
    star_metric?: ApiStarMetric;
    /** Test-case UUID to update */
    test_case_uuid?: string;
  }, options: { params: { test_case_uuid: string } }) => Promise<ApiUpdateEvaluationTestCaseOutput>;

  /**
   * List Indexing Jobs for a Knowledge Base
   */
  genaiListIndexingJobs: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListKnowledgeBaseIndexingJobsOutput>;

  /**
   * Start Indexing Job for a Knowledge Base
   */
  genaiCreateIndexingJob: (input: {
    /** List of data source ids to index, if none are provided, all data sources will be indexed */
    data_source_uuids?: (string)[];
    /** Knowledge base id */
    knowledge_base_uuid?: string;
  }) => Promise<ApiStartKnowledgeBaseIndexingJobOutput>;

  /**
   * List Data Sources for Indexing Job for a Knowledge Base
   */
  genaiListIndexingJobDataSources: (input: {
    /** Uuid of the indexing job */
    indexing_job_uuid: string;
  }) => Promise<ApiListIndexingJobDataSourcesOutput>;

  /**
   * Get Signed URL for Indexing Job Details
   */
  genaiGetIndexingJobDetailsSignedUrl: (input: {
    /** The uuid of the indexing job */
    indexing_job_uuid: string;
  }) => Promise<ApiGetIndexingJobDetailsSignedUrlOutput>;

  /**
   * Retrieve Status of Indexing Job for a Knowledge Base
   */
  genaiGetIndexingJob: (input: {
    /** Indexing job id */
    uuid: string;
  }) => Promise<ApiGetKnowledgeBaseIndexingJobOutput>;

  /**
   * Cancel Indexing Job for a Knowledge Base
   */
  genaiCancelIndexingJob: (input: {
    /** A unique identifier for an indexing job. */
    uuid?: string;
  }, options: { params: { uuid: string } }) => Promise<ApiCancelKnowledgeBaseIndexingJobOutput>;

  /**
   * List Knowledge Bases
   */
  genaiListKnowledgeBases: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListKnowledgeBasesOutput>;

  /**
   * Create a Knowledge Base
   */
  genaiCreateKnowledgeBase: (input: {
    /** Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional. If not provided, we create a new database for the knowledge base in the same region as the knowledge base. */
    database_id?: string;
    /** Optional data sources to attach at creation. Omit or use an empty list to create the knowledge base without sources, then add sources (with chunking strategy and sizes) using [Add a Data Source to a Knowledge Base](#operation/create_knowledge_base_data_source). When provided, see [Organize Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-data-sources) for best practices. */
    datasources?: (ApiKbDataSource)[];
    /** Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models). */
    embedding_model_uuid?: string;
    /** Name of the knowledge base. */
    name?: string;
    /** Identifier of the DigitalOcean project this knowledge base will belong to. */
    project_id?: string;
    /** The datacenter region to deploy the knowledge base in. */
    region?: string;
    reranking_config?: ApiRerankingConfiguration;
    size?: ApiOpenSearchPlanSize;
    /** Tags to organize your knowledge base. */
    tags?: (string)[];
    /** The VPC to deploy the knowledge base database in */
    vpc_uuid?: string;
  }) => Promise<ApiCreateKnowledgeBaseOutput>;

  /**
   * Create Presigned URLs for Data Source File Upload
   */
  genaiCreateDataSourceFileUploadPresignedUrls: (input: {
    /** A list of files to generate presigned URLs for. */
    files?: (ApiPresignedUrlFile)[];
  }) => Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>;

  /**
   * List Data Sources for a Knowledge Base
   */
  genaiListKnowledgeBaseDataSources: (input: {
    /** Knowledge base id */
    knowledge_base_uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListKnowledgeBaseDataSourcesOutput>;

  /**
   * Add Data Source to a Knowledge Base
   */
  genaiCreateKnowledgeBaseDataSource: (input: {
    aws_data_source?: ApiAwsDataSource;
    chunking_algorithm?: ApiChunkingAlgorithm;
    chunking_options?: ApiChunkingOptions;
    /** Knowledge base id */
    knowledge_base_uuid?: string;
    spaces_data_source?: ApiSpacesDataSource;
    web_crawler_data_source?: ApiWebCrawlerDataSource;
  }, options: { params: { knowledge_base_uuid: string } }) => Promise<ApiCreateKnowledgeBaseDataSourceOutput>;

  /**
   * Update Data Source options
   */
  genaiUpdateKnowledgeBaseDataSource: (input: {
    chunking_algorithm?: ApiChunkingAlgorithm;
    chunking_options?: ApiChunkingOptions;
    /** Data Source ID (Path Parameter) */
    data_source_uuid?: string;
    /** Knowledge Base ID (Path Parameter) */
    knowledge_base_uuid?: string;
  }, options: { params: { knowledge_base_uuid: string; data_source_uuid: string } }) => Promise<ApiUpdateKnowledgeBaseDataSourceOutput>;

  /**
   * Delete a Data Source from a Knowledge Base
   */
  genaiDeleteKnowledgeBaseDataSource: (input: {
    /** Knowledge base id */
    knowledge_base_uuid: string;
    /** Data source id */
    data_source_uuid: string;
  }) => Promise<ApiDeleteKnowledgeBaseDataSourceOutput>;

  /**
   * List Indexing Jobs for a Knowledge Base
   */
  genaiListIndexingJobsByKnowledgeBase: (input: {
    /** Knowledge base uuid in string */
    knowledge_base_uuid: string;
  }) => Promise<ApiListKnowledgeBaseIndexingJobsOutput>;

  /**
   * Retrieve Information About an Existing Knowledge Base
   */
  genaiGetKnowledgeBase: (input: {
    /** Knowledge base id */
    uuid: string;
  }) => Promise<ApiGetKnowledgeBaseOutput>;

  /**
   * Update a Knowledge Base
   */
  genaiUpdateKnowledgeBase: (input: {
    /** The id of the DigitalOcean database this knowledge base will use, optional. */
    database_id?: string;
    /** Knowledge base name */
    name?: string;
    /** The id of the DigitalOcean project this knowledge base will belong to */
    project_id?: string;
    reranking_config?: ApiRerankingConfiguration;
    /** Tags to organize your knowledge base. */
    tags?: (string)[];
    /** Knowledge base id */
    uuid?: string;
  }, options: { params: { uuid: string } }) => Promise<ApiUpdateKnowledgeBaseOutput>;

  /**
   * Delete a Knowledge Base
   */
  genaiDeleteKnowledgeBase: (input: {
    /** Knowledge base id */
    uuid: string;
  }) => Promise<ApiDeleteKnowledgeBaseOutput>;

  /**
   * Create Presigned URLs for Model Evaluation Dataset File Upload
   */
  genaiCreateModelEvalDatasetUploadPresignedUrls: (input: {
    /** A list of files to generate presigned URLs for. */
    files?: (ApiPresignedUrlFile)[];
  }) => Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>;

  /**
   * List Model Evaluation Metrics
   */
  genaiListModelEvaluationMetrics: () => Promise<ApiListModelEvaluationMetricsOutput>;

  /**
   * List Model Evaluation Presets
   */
  genaiListModelEvaluationPresets: () => Promise<ApiListModelEvaluationPresetsOutput>;

  /**
   * Retrieve Model Evaluation Preset
   */
  genaiGetModelEvaluationPreset: (input: {
    /** UUID of the evaluation preset. */
    eval_preset_uuid: string;
  }) => Promise<ApiGetModelEvaluationPresetOutput>;

  /**
   * Delete Model Evaluation Preset
   */
  genaiDeleteModelEvaluationPreset: (input: {
    /** UUID of the evaluation preset to delete. */
    eval_preset_uuid: string;
  }) => Promise<ApiDeleteModelEvaluationPresetOutput>;

  /**
   * List Model Evaluation Runs
   */
  genaiListModelEvaluationRuns: (input: {
    /** UUID of the evaluation preset to filter by. */
    eval_preset_uuid?: string;
    /** Filter by evaluation run status. */
    status?: "MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "MODEL_EVALUATION_RUN_QUEUED" | "MODEL_EVALUATION_RUN_RUNNING_DATASET" | "MODEL_EVALUATION_RUN_EVALUATING_RESULTS" | "MODEL_EVALUATION_RUN_CANCELLING" | "MODEL_EVALUATION_RUN_CANCELLED" | "MODEL_EVALUATION_RUN_SUCCESSFUL" | "MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "MODEL_EVALUATION_RUN_FAILED";
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
    /** Filter by one or more statuses. Empty means no status filter. */
    statuses?: ("MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "MODEL_EVALUATION_RUN_QUEUED" | "MODEL_EVALUATION_RUN_RUNNING_DATASET" | "MODEL_EVALUATION_RUN_EVALUATING_RESULTS" | "MODEL_EVALUATION_RUN_CANCELLING" | "MODEL_EVALUATION_RUN_CANCELLED" | "MODEL_EVALUATION_RUN_SUCCESSFUL" | "MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "MODEL_EVALUATION_RUN_FAILED")[];
    /** Filter by one or more candidate model source types (serverless, dedicated, router). Empty means no candidate-type filter. */
    candidate_types?: ("CANDIDATE_MODEL_SOURCE_SERVERLESS" | "CANDIDATE_MODEL_SOURCE_DEDICATED" | "CANDIDATE_MODEL_SOURCE_ROUTER")[];
    /** Free-text search across the eval run name, candidate model name and dataset name (case-insensitive substring match). Empty means no search. */
    search?: string;
    /** Field to sort by. Defaults to creation date when unspecified. */
    sort_by?: "MODEL_EVALUATION_RUN_SORT_FIELD_UNSPECIFIED" | "MODEL_EVALUATION_RUN_SORT_FIELD_CREATED_AT" | "MODEL_EVALUATION_RUN_SORT_FIELD_STATUS";
    /** Sort direction. Defaults to descending when unspecified. */
    sort_direction?: "SORT_DIRECTION_UNSPECIFIED" | "SORT_DIRECTION_ASC" | "SORT_DIRECTION_DESC";
  }) => Promise<ApiListModelEvaluationRunsOutput>;

  /**
   * Create Model Evaluation Run
   */
  genaiCreateModelEvaluationRun: (input: {
    candidate_inference_config?: ApiCandidateInferenceConfig;
    /** Model slug used to call the candidate model API. For dedicated inference, this is the model slug from the deployment. For serverless, this should match the model's internal name. */
    candidate_model_name?: string;
    candidate_model_source?: ApiCandidateModelSource;
    /** UUID of the candidate model to evaluate. */
    candidate_model_uuid?: string;
    /** UUID of the dataset to use for evaluation. */
    dataset_uuid?: string;
    eval_preset_uuid?: string;
    /** UUID of the judge model used to score responses. */
    judge_model_uuid?: string;
    /** UUIDs of metrics to evaluate (selected from ListModelEvaluationMetrics). */
    metric_uuids?: (string)[];
    name?: string;
    preset_name?: string;
    /** Which sections of this run's resolved configuration to persist as a reusable preset. Each selected section saves only its own fields; the remaining sections stay empty on the preset and must be supplied inline on future runs that reference it. Empty means do not save a preset (unless the deprecated `save_as_preset` boolean is true, in which case all sections are saved). Ignored when `eval_preset_uuid` is set. Use `preset_name` to label the saved preset. */
    preset_save_sections?: (ApiPresetSaveSection)[];
    /** Deprecated: use `preset_save_sections`. When `true` and `preset_save_sections` is empty, all five sections of the resolved configuration are saved as a reusable preset (legacy behavior). Ignored when `eval_preset_uuid` is set. */
    save_as_preset?: boolean;
    /** Source of the run creation (api, sdk, cli). */
    source?: string;
    star_metric?: ApiStarMetric;
  }) => Promise<ApiCreateModelEvaluationRunOutput>;

  /**
   * Retrieve Model Evaluation Run
   */
  genaiGetModelEvaluationRun: (input: {
    /** UUID of the evaluation run. */
    eval_run_uuid: string;
    /** Page number for per-prompt results (defaults to 1). */
    page?: number;
    /** Number of per-prompt results per page (defaults to 50). */
    per_page?: number;
  }) => Promise<ApiGetModelEvaluationRunOutput>;

  /**
   * Delete Model Evaluation Run
   */
  genaiDeleteModelEvaluationRun: (input: {
    /** UUID of the model evaluation run to delete. The run must be in a terminal status (`successful`, `partially_successful`, `failed`, or `cancelled`). For runs still in progress, either wait for the run to finish or cancel it, then retry the delete. */
    eval_run_uuid: string;
  }) => Promise<ApiDeleteModelEvaluationRunOutputPublic>;

  /**
   * Update Model Evaluation Run
   */
  genaiUpdateModelEvaluationRun: (input: {
    /** UUID of the model evaluation run to update. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. */
    eval_run_uuid?: string;
    /** Optional new display name for the evaluation run (max 255 characters). */
    name?: string;
  }, options: { params: { eval_run_uuid: string } }) => Promise<ApiUpdateModelEvaluationRunOutput>;

  /**
   * Cancel Model Evaluation Run
   */
  genaiCancelModelEvaluationRun: (input: {
    /** UUID of the model evaluation run to cancel. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. The run must be in a non-terminal status (queued, running_dataset, or evaluating_results); already-terminal runs return an error. */
    eval_run_uuid?: string;
  }, options: { params: { eval_run_uuid: string } }) => Promise<ApiCancelModelEvaluationRunOutput>;

  /**
   * Get Download URL for Model Evaluation Run Results
   */
  genaiGetModelEvaluationRunResultsDownloadUrl: (input: {
    /** UUID of the evaluation run. */
    eval_run_uuid: string;
  }) => Promise<ApiGetModelEvaluationRunResultsDownloadUrlOutput>;

  /**
   * List Available Models
   */
  genaiListModels: (input: {
    /** Include only models defined for the listed usecases.   - MODEL_USECASE_UNKNOWN: The use case of the model is unknown  - MODEL_USECASE_AGENT: The model maybe used in an agent  - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning  - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)  - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails  - MODEL_USECASE_REASONING: The model usecase for reasoning  - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference */
    usecases?: ("MODEL_USECASE_UNKNOWN" | "MODEL_USECASE_AGENT" | "MODEL_USECASE_FINETUNED" | "MODEL_USECASE_KNOWLEDGEBASE" | "MODEL_USECASE_GUARDRAIL" | "MODEL_USECASE_REASONING" | "MODEL_USECASE_SERVERLESS")[];
    /** Only include models that are publicly available. */
    public_only?: boolean;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListModelsOutputPublic>;

  /**
   * List Model API Keys
   */
  genaiListModelApiKeys: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListModelApiKeysOutput>;

  /**
   * Create a Model API Key
   */
  genaiCreateModelApiKey: (input: {
    /** A human friendly name to identify the key */
    name?: string;
  }) => Promise<{ id: string; message: string; request_id?: string }>;

  /**
   * Update API Key for a Model
   */
  genaiUpdateModelApiKey: (input: {
    /** API key ID */
    api_key_uuid?: string;
    /** Name */
    name?: string;
  }, options: { params: { api_key_uuid: string } }) => Promise<ApiUpdateModelApiKeyOutput>;

  /**
   * Delete API Key for a Model
   */
  genaiDeleteModelApiKey: (input: {
    /** API key for an agent. */
    api_key_uuid: string;
  }) => Promise<ApiDeleteModelApiKeyOutput>;

  /**
   * Regenerate API Key for a Model
   */
  genaiRegenerateModelApiKey: (input: {
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiRegenerateModelApiKeyOutput>;

  /**
   * List Model Catalog
   */
  genaiListModelCatalog: (input: {
    page?: number;
    limit?: number;
  }) => Promise<ApiListModelCatalogOutput>;

  /**
   * Get Model Catalog Card
   */
  genaiGetModelCatalogCard: (input: {
    id: string;
    /** Model identifier used for API calls (e.g., "llama3.1-70b-instruct"). Alternative to UUID lookup. */
    model_id?: string;
  }) => Promise<ApiGetModelCatalogCardOutput>;

  /**
   * List Model Routers
   */
  genaiListModelRouters: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListModelRoutersOutput>;

  /**
   * Create a Model Router
   */
  genaiCreateModelRouter: (input: {
    /** Model router description */
    description?: string;
    /** At least one fallback model is required; order defines failover priority */
    fallback_models?: (string)[];
    /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
    name?: string;
    /** Router policies */
    policies?: (ApiModelRouterTaskPolicy)[];
    /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
    regions?: (string)[];
  }) => Promise<ApiCreateModelRouterOutput>;

  /**
   * List Model Router Presets
   */
  genaiListModelRouterPresets: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListModelRouterPresetsOutput>;

  /**
   * List Model Router Task Presets
   */
  genaiListModelRouterTaskPresets: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListModelRouterTaskPresetsOutput>;

  /**
   * Retrieve an Existing Model Router
   */
  genaiGetModelRouter: (input: {
    /** Model router id */
    uuid: string;
  }) => Promise<ApiGetModelRouterOutput>;

  /**
   * Update a Model Router
   */
  genaiUpdateModelRouter: (input: {
    /** Model router description */
    description?: string;
    fallback_models?: ({ [key: string]: unknown })[];
    /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
    name?: string;
    /** Router policies */
    policies?: (ApiModelRouterTaskPolicy)[];
    /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
    regions?: (string)[];
    /** Model router id */
    uuid?: string;
  }, options: { params: { uuid: string } }) => Promise<ApiUpdateModelRouterOutput>;

  /**
   * Delete a Model Router
   */
  genaiDeleteModelRouter: (input: {
    /** Model router id */
    uuid: string;
  }) => Promise<ApiDeleteModelRouterOutput>;

  /**
   * Get Oauth2 Dropbox Tokens
   */
  genaiCreateOauth2DropboxTokens: (input: {
    /** The oauth2 code from google */
    code?: string;
    /** Redirect url */
    redirect_url?: string;
  }) => Promise<ApiDropboxOauth2GetTokensOutput>;

  /**
   * Get Oauth2 URL
   */
  genaiGetOauth2Url: (input: {
    /** Type "google" / "dropbox". */
    type?: string;
    /** The redirect url. */
    redirect_url?: string;
  }) => Promise<ApiGenerateOauth2UrlOutput>;

  /**
   * List OpenAI API Keys
   */
  genaiListOpenaiApiKeys: (input: {
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListOpenAiapiKeysOutput>;

  /**
   * Create OpenAI API Key
   */
  genaiCreateOpenaiApiKey: (input: {
    /** OpenAI API key */
    api_key?: string;
    /** Name of the key */
    name?: string;
  }) => Promise<ApiCreateOpenAiapiKeyOutput>;

  /**
   * Get OpenAI API Key
   */
  genaiGetOpenaiApiKey: (input: {
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiGetOpenAiapiKeyOutput>;

  /**
   * Update OpenAI API Key
   */
  genaiUpdateOpenaiApiKey: (input: {
    /** OpenAI API key */
    api_key?: string;
    /** API key ID */
    api_key_uuid?: string;
    /** Name of the key */
    name?: string;
  }, options: { params: { api_key_uuid: string } }) => Promise<ApiUpdateOpenAiapiKeyOutput>;

  /**
   * Delete OpenAI API Key
   */
  genaiDeleteOpenaiApiKey: (input: {
    /** API key ID */
    api_key_uuid: string;
  }) => Promise<ApiDeleteOpenAiapiKeyOutput>;

  /**
   * List agents by OpenAI key
   */
  genaiListAgentsByOpenaiKey: (input: {
    /** Unique ID of OpenAI key */
    uuid: string;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentsByOpenAiKeyOutput>;

  /**
   * List Datacenter Regions
   */
  genaiListDatacenterRegions: (input: {
    /** Include datacenters that serve inference. */
    serves_inference?: boolean;
    /** Include datacenters that are capable of running batch jobs. */
    serves_batch?: boolean;
  }) => Promise<ApiListRegionsOutput>;

  /**
   * Create scheduled indexing for knowledge base
   */
  genaiCreateScheduledIndexing: (input: {
    /** Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 ) */
    days?: (number)[];
    /** Knowledge base uuid for which the schedule is created */
    knowledge_base_uuid?: string;
    /** Time of execution (HH:MM) UTC */
    time?: string;
  }) => Promise<ApiCreateScheduledIndexingOutput>;

  /**
   * Get Scheduled Indexing for Knowledge Base
   */
  genaiGetScheduledIndexing: (input: {
    /** UUID of the scheduled indexing entry */
    knowledge_base_uuid: string;
  }) => Promise<ApiGetScheduledIndexingOutput>;

  /**
   * Delete Scheduled Indexing
   */
  genaiDeleteScheduledIndexing: (input: {
    /** UUID of the scheduled indexing */
    uuid: string;
  }) => Promise<ApiDeleteScheduledIndexingOutput>;

  /**
   * List Workspaces
   */
  genaiListWorkspaces: () => Promise<ApiListWorkspacesOutput>;

  /**
   * Create a Workspace
   */
  genaiCreateWorkspace: (input: {
    /** Ids of the agents(s) to attach to the workspace */
    agent_uuids?: (string)[];
    /** Description of the workspace */
    description?: string;
    /** Name of the workspace */
    name?: string;
  }) => Promise<ApiCreateWorkspaceOutput>;

  /**
   * Retrieve an Existing Workspace
   */
  genaiGetWorkspace: (input: {
    /** Workspace UUID. */
    workspace_uuid: string;
  }) => Promise<ApiGetWorkspaceOutput>;

  /**
   * Update a Workspace
   */
  genaiUpdateWorkspace: (input: {
    /** The new description of the workspace */
    description?: string;
    /** The new name of the workspace */
    name?: string;
    /** Workspace UUID. */
    workspace_uuid?: string;
  }, options: { params: { workspace_uuid: string } }) => Promise<ApiUpdateWorkspaceOutput>;

  /**
   * Delete a Workspace
   */
  genaiDeleteWorkspace: (input: {
    /** Workspace UUID. */
    workspace_uuid: string;
  }) => Promise<ApiDeleteWorkspaceOutput>;

  /**
   * List agents by Workspace
   */
  genaiListAgentsByWorkspace: (input: {
    /** Workspace UUID. */
    workspace_uuid: string;
    /** Only list agents that are deployed. */
    only_deployed?: boolean;
    /** Page number. */
    page?: number;
    /** Items per page. */
    per_page?: number;
  }) => Promise<ApiListAgentsByWorkspaceOutput>;

  /**
   * Move Agents to a Workspace
   */
  genaiUpdateAgentsWorkspace: (input: {
    /** Agent uuids */
    agent_uuids?: (string)[];
    /** Workspace uuid to move agents to */
    workspace_uuid?: string;
  }, options: { params: { workspace_uuid: string } }) => Promise<ApiMoveAgentsToWorkspaceOutput>;

  /**
   * List Evaluation Test Cases by Workspace
   */
  genaiListEvaluationTestCasesByWorkspace: (input: {
    /** Workspace UUID. */
    workspace_uuid: string;
  }) => Promise<ApiListEvaluationTestCasesByWorkspaceOutput>;

  /**
   * Create a model response for the given chat conversation
   */
  inferenceCreateChatCompletion: (input: {
    /** A list of messages comprising the conversation so far. */
    messages: (ChatMessage)[];
    /** Model ID used to generate the response. */
    model: string;
    /** The maximum number of tokens that can be generated in the completion. The token count of your prompt plus max_tokens cannot exceed the model's context length.  */
    max_tokens?: number | null;
    /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run.  */
    max_completion_tokens?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  */
    frequency_penalty?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  */
    presence_penalty?: number | null;
    /** An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used.  */
    top_logprobs?: number | null;
    /** A list of tools the model may call. Currently, only functions are supported as a tool. */
    tools?: (ChatCompletionTool)[];
    /** Controls which (if any) tool is called by the model. none means the model will not call any tool and instead generates a message. auto means the model can pick between generating a message or calling one or more tools. required means the model must call one or more tools. Specifying a particular tool via {"type": "function", "function": {"name": "my_function"}} forces the model to call that tool. none is the default when no tools are present. auto is the default if tools are present.  */
    tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
    /** If set to true, the model response data will be streamed to the client as it is generated using server-sent events.  */
    stream?: boolean | null;
    /** Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.  */
    stop?: string | (string)[];
    /** Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  */
    logit_bias?: { [key: string]: number | undefined } | null;
    /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.  */
    logprobs?: boolean | null;
    /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs. */
    n?: number | null;
    /** Options for streaming response. Only set this when you set stream to true. */
    stream_options?: { include_usage?: boolean } | null;
    /** Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.  */
    reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh" | null;
    /** If specified, the system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed.  */
    seed?: number | null;
    /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters. */
    metadata?: { [key: string]: string | undefined } | null;
    /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or top_p but not both.  */
    temperature?: number | null;
    /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.  */
    top_p?: number | null;
    /** A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse. */
    user?: string;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Create the next assistant message
   */
  inferenceCreateMessages: (input: {
    /** Model ID (for example `claude-opus-4-6` or a serverless model id). */
    model: string;
    /** Maximum tokens to generate before stopping. */
    max_tokens: number;
    /** Conversation turns. Each item has `role` `user` or `assistant` and `content` as a string or an array of content blocks.  */
    messages: (MessagesApiMessageParam)[];
    /** System prompt as plain text or as an array of text blocks. */
    system?: string | (MessagesRequestTextBlockParam)[];
    /** Custom strings that stop generation when produced. */
    stop_sequences?: (string)[];
    /** When true, the response is streamed using server-sent events (SSE). */
    stream?: boolean;
    /** Sampling temperature between 0.0 and 1.0. */
    temperature?: number | null;
    /** Nucleus sampling; use either `temperature` or `top_p`, not both. */
    top_p?: number | null;
    /** Top-K sampling cutoff. */
    top_k?: number | null;
    /** Tool definitions the model may invoke. */
    tools?: (MessagesToolDefinitionParam)[];
    tool_choice?: MessagesToolChoiceParam;
    /** Optional request metadata. */
    metadata?: { user_id?: string };
    /** DigitalOcean extension for reasoning-capable models. Ignored by executors that do not support it.  */
    reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh" | null;
    /** DigitalOcean extension for preferred inference speed. Ignored when not supported.  */
    speed?: "standard" | "fast" | null;
    thinking?: MessagesThinkingConfigParam;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Create embedding
   */
  inferenceCreateEmbedding: (input: {
    /** Model id to use for embeddings. Must match a model your account can access. */
    model: string;
    /** A single string or 1–2048 strings; each string produces one row in `data`, in order. */
    input: string | (string)[];
    /** Optional end-user identifier to help with abuse monitoring. */
    user?: string;
    /** How embedding values are returned in each `data[].embedding` field. */
    encoding_format?: "float" | "base64";
  }) => Promise<EmbeddingsResponse>;

  /**
   * Create a model response for the given chat conversation
   */
  agentInferenceCreateChatCompletion: (input: {
    /** A list of messages comprising the conversation so far. */
    messages: (ChatMessage)[];
    /** Model ID used to generate the response. */
    model: string;
    /** The maximum number of tokens that can be generated in the completion. The token count of your prompt plus max_tokens cannot exceed the model's context length.  */
    max_tokens?: number | null;
    /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run.  */
    max_completion_tokens?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  */
    frequency_penalty?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  */
    presence_penalty?: number | null;
    /** An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used.  */
    top_logprobs?: number | null;
    /** A list of tools the model may call. Currently, only functions are supported as a tool. */
    tools?: (ChatCompletionTool)[];
    /** Controls which (if any) tool is called by the model. none means the model will not call any tool and instead generates a message. auto means the model can pick between generating a message or calling one or more tools. required means the model must call one or more tools. Specifying a particular tool via {"type": "function", "function": {"name": "my_function"}} forces the model to call that tool. none is the default when no tools are present. auto is the default if tools are present.  */
    tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
    /** If set to true, the model response data will be streamed to the client as it is generated using server-sent events.  */
    stream?: boolean | null;
    /** Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.  */
    stop?: string | (string)[];
    /** Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  */
    logit_bias?: { [key: string]: number | undefined } | null;
    /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.  */
    logprobs?: boolean | null;
    /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs. */
    n?: number | null;
    /** Options for streaming response. Only set this when you set stream to true. */
    stream_options?: { include_usage?: boolean } | null;
    /** Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.  */
    reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh" | null;
    /** If specified, the system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed.  */
    seed?: number | null;
    /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters. */
    metadata?: { [key: string]: string | undefined } | null;
    /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or top_p but not both.  */
    temperature?: number | null;
    /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.  */
    top_p?: number | null;
    /** A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse. */
    user?: string;
    /** Must be set to true for agent-based completion behavior. */
    agent: boolean;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Generate images from text prompts
   */
  inferenceCreateImage: (input: {
    /** A text description of the desired image(s). Supports up to 32,000 characters and provides automatic prompt optimization for best results.  */
    prompt: string;
    /** The model to use for image generation.  */
    model: string;
    /** The moderation setting for the image generation. Supported values: low, auto.  */
    moderation?: string | null;
    /** The background setting for the image generation. Supported values: transparent, opaque, auto.  */
    background?: string | null;
    /** The output format for the image generation. Supported values: png, webp, jpeg.  */
    output_format?: string | null;
    /** The output compression level for the image generation (0-100).  */
    output_compression?: number | null;
    /** The number of images to generate. Must be between 1 and 10.  */
    n: number;
    /** The quality of the image that will be generated. Supported values: auto, high, medium, low.  */
    quality?: string | null;
    /** The size of the generated images. GPT-IMAGE-1 supports: auto (automatically select best size), 1536x1024 (landscape), 1024x1536 (portrait).  */
    size?: "auto" | "1536x1024" | "1024x1536";
    /** If set to true, partial image data will be streamed as the image is being generated. The response will be sent as server-sent events with partial image chunks. When stream is true, partial_images must be greater than 0.  */
    stream?: boolean | null;
    /** The number of partial image chunks to return during streaming generation. Defaults to 0. When stream=true, this must be greater than 0 to receive progressive updates of the image as it is being generated.  */
    partial_images?: number | null;
    /** A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse.  */
    user?: string | null;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * List available models
   */
  inferenceListModels: () => Promise<ListModelsResponse>;

  /**
   * Send Prompt to a Model Using the Responses API
   */
  inferenceCreateResponse: (input: {
    /** The model ID of the model you want to use. Get the model ID using `/v1/models` or on the available models page.  */
    model: string;
    /** The prompt or input content you want the model to respond to. Can be a simple text string or an array of message objects for conversation context.  */
    input: string | ({ role?: "user" | "assistant" | "system" | "tool" | "developer"; content: string })[];
    /** The maximum number of tokens to generate in the response.  */
    max_output_tokens?: number | null;
    /** A value between 0.0 and 2.0 to control randomness and creativity. Lower values like 0.2 make the output more focused and deterministic, while higher values like 0.8 make it more random.  */
    temperature?: number | null;
    /** Set to true to stream partial responses as Server-Sent Events.  */
    stream?: boolean | null;
    /** System-level instructions for the model. This sets the behavior and context for the response generation.  */
    instructions?: string | null;
    /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.  */
    top_p?: number | null;
    /** Options for streaming response. Only set this when you set stream to true. */
    stream_options?: { include_usage?: boolean } | null;
    /** A list of tools the model may call.  */
    tools?: ({ type: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[] | null;
    /** Controls which (if any) tool is called by the model.  */
    tool_choice?: "none" | "auto" | "required" | { type: "function"; function: { name: string } };
    /** Up to 4 sequences where the API will stop generating further tokens.  */
    stop?: string | (string)[] | null;
    /** Set of key-value pairs that can be attached to the request.  */
    metadata?: { [key: string]: string | undefined } | null;
    /** A unique identifier representing your end-user.  */
    user?: string | null;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Generate Image, Audio, or Text-to-Speech Using fal Models
   */
  inferenceCreateAsyncInvoke: (input: {
    /** The ID of the model to invoke asynchronously.  */
    model_id: string;
    /** The input parameters for the model invocation. Fields vary by model type.  For **image generation** models (e.g., `fal-ai/flux/schnell`, `fal-ai/fast-sdxl`), use `prompt` along with optional image parameters like `output_format`, `num_inference_steps`, `guidance_scale`, `num_images`, and `enable_safety_checker`.  For **audio generation** models (e.g., `fal-ai/stable-audio-25/text-to-audio`), use `prompt` along with `seconds_total` to control the duration.  For **text-to-speech** models (e.g., `fal-ai/elevenlabs/tts/multilingual-v2`), use `text` with the content you want converted to speech.  */
    input: { prompt?: string; text?: string; output_format?: string | null; num_inference_steps?: number | null; guidance_scale?: number | null; num_images?: number | null; enable_safety_checker?: boolean | null; seconds_total?: number | null; [key: string]: unknown };
    /** An optional list of key-value tags to attach to the invocation request for tracking or categorization.  */
    tags?: ({ key: string; value: string })[] | null;
  }) => Promise<AsyncInvokeResponse>;

  /**
   * Create a Batch Inference Input File
   */
  inferenceCreateBatchFile: (input: {
    /** The file you plan to upload. Must end with `.jsonl` (case-insensitive) and contain one request per line in the schema expected by the target `provider`.  */
    file_name: string;
  }) => Promise<BatchFileCreateResponse>;

  /**
   * Upload a Batch Inference Input File
   */
  inferenceUploadBatchFile: (input: {
    body: string;
  }) => Promise<undefined>;

  /**
   * Create a Batch Inference Job
   */
  inferenceCreateBatch: (input: {
    /** The `file_id` returned by `POST /v1/batches/files`. */
    file_id: string;
    /** The inference provider whose JSONL schema the input file conforms to. `openai` follows the OpenAI Batch API input schema (`custom_id`, `method`, `url`, `body`); `anthropic` follows the Anthropic Message Batches JSONL conventions.  */
    provider: "openai" | "anthropic";
    /** Inference endpoint each request is dispatched to. **Required when `provider` is `openai` and must match the `url` on every JSONL line. Must be omitted when `provider` is `anthropic`.**  */
    endpoint?: "/v1/responses" | "/v1/chat/completions";
    /** Time window in which the job must complete. Jobs that do not finish in time transition to `expired`.  */
    completion_window: "24h";
    /** Client-supplied idempotency key. Retries with the same value return the existing job instead of creating a duplicate.  */
    request_id: string;
    /** Optional string-valued metadata to attach to the job. */
    metadata?: { [key: string]: string | undefined } | null;
  }) => Promise<Batch>;

  /**
   * List Batch Inference Jobs
   */
  inferenceListBatches: (input: {
    /** Cursor for pagination. Pass the `last_id` value from the previous response to fetch the next page. Omit for the first page.  */
    after?: string;
    /** Maximum number of batches to return per page. */
    limit?: number;
    /** Optional filter restricting results to batches in the given lifecycle state.  */
    status?: "validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled";
  }) => Promise<BatchListResponse>;

  /**
   * Retrieve a Batch Inference Job
   */
  inferenceGetBatch: (input: {
    /** The batch job identifier. */
    batch_id: string;
  }) => Promise<Batch>;

  /**
   * Get Batch Inference Results Download Links
   */
  inferenceGetBatchResults: (input: {
    /** The batch job identifier. */
    batch_id: string;
  }) => Promise<BatchResultsResponse>;

  /**
   * Cancel a Batch Inference Job
   */
  inferenceCancelBatch: (input: {
    /** The batch job identifier. */
    batch_id: string;
  }) => Promise<Batch>;
};

export * from "./schemas.js";
