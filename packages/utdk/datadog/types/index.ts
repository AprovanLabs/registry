import type { ActionConnectionData, ActionConnectionDataUpdate, ActiveBillingDimensionsResponse, AllocationDataRequest, AllocationExposureScheduleResponse, AllocationResponse, ApiId, ApiKeyCreateData, ApiKeyResponse, ApiKeyUpdateData, ApiKeysResponse, ApiKeysSort, ApplicationKeyCreateData, ApplicationKeyResponse, ApplicationKeyUpdateData, ApplicationKeysSort, ApplicationSecurityWafCustomRuleCreateData, ApplicationSecurityWafCustomRuleListResponse, ApplicationSecurityWafCustomRuleResponse, ApplicationSecurityWafCustomRuleUpdateData, ApplicationSecurityWafExclusionFilterCreateData, ApplicationSecurityWafExclusionFilterResponse, ApplicationSecurityWafExclusionFilterUpdateData, ApplicationSecurityWafExclusionFiltersResponse, AppsSortField, ArbitraryCostUpsertRequestData, ArbitraryRuleResponse, ArbitraryRuleResponseArray, AssetType, AssignSeatsUserRequestData, AssignSeatsUserResponse, AttachCaseRequestData, AttachJiraIssueRequestData, Attachment, AttachmentArray, AuditLogsEventsResponse, AuditLogsQueryFilter, AuditLogsQueryOptions, AuditLogsQueryPageOptions, AuditLogsSort, AuthNMappingCreateData, AuthNMappingResourceType, AuthNMappingResponse, AuthNMappingUpdateData, AuthNMappingsResponse, AuthNMappingsSort, AwsAccountCreateRequestData, AwsAccountResponse, AwsAccountUpdateRequestData, AwsAccountsResponse, AwsCcmConfigRequestData, AwsCcmConfigResponse, AwsCloudAuthPersonaMappingCreateData, AwsCloudAuthPersonaMappingResponse, AwsCloudAuthPersonaMappingsResponse, AwsCurConfigPatchData, AwsCurConfigPostData, AwsCurConfigResponse, AwsCurConfigsResponse, AwsEventBridgeCreateRequestData, AwsEventBridgeCreateResponse, AwsEventBridgeDeleteRequestData, AwsEventBridgeDeleteResponse, AwsEventBridgeListResponse, AwsIntegrationIamPermissionsResponse, AwsLogsServicesResponse, AwsNamespacesResponse, AwsNewExternalIdResponse, AwsOnDemandCreateData, AwsOnDemandListResponse, AwsOnDemandResponse, AwsScanOptionsCreateData, AwsScanOptionsListResponse, AwsScanOptionsResponse, AwsScanOptionsUpdateData, AzureScanOptions, AzureScanOptionsArray, AzureScanOptionsData, AzureScanOptionsInputUpdateData, AzureUcConfigPairsResponse, AzureUcConfigPatchData, AzureUcConfigPostData, AzureUcConfigsResponse, BatchRowsQueryRequestData, BatchRowsQueryResponse, BatchUpsertRowsRequestData, BillingDimensionsMappingResponse, BranchCoverageSummaryRequestData, BudgetArray, BudgetValidationRequestData, BudgetValidationResponse, BudgetWithEntries, BudgetWithEntriesData, BulkDeleteAppsDatastoreItemsRequestData, BulkMuteFindingsRequestData, BulkMuteFindingsResponse, BulkPutAppsDatastoreItemsRequestData, CalculatedField, CancelDataDeletionResponseBody, CaseAssign, CaseComment, CaseCreate, CaseEmpty, CaseNotificationRuleCreate, CaseNotificationRuleResponse, CaseNotificationRuleUpdate, CaseNotificationRulesResponse, CaseResponse, CaseSortableField, CaseTypeCreate, CaseTypeResponse, CaseTypesResponse, CaseUpdateAttributes, CaseUpdateCustomAttribute, CaseUpdateDescription, CaseUpdatePriority, CaseUpdateStatus, CaseUpdateTitle, CasesResponse, ChangeRequestBranchCreateData, ChangeRequestCreateData, ChangeRequestDecisionUpdateData, ChangeRequestResponse, ChangeRequestUpdateData, ChangeRequestUpdateIncluded, CiAppCompute, CiAppCreatePipelineEventRequestDataSingleOrArray, CiAppPipelineEventsResponse, CiAppPipelinesAnalyticsAggregateResponse, CiAppPipelinesGroupBy, CiAppPipelinesQueryFilter, CiAppQueryOptions, CiAppQueryPageOptions, CiAppSort, CiAppTestEventsResponse, CiAppTestsAnalyticsAggregateResponse, CiAppTestsGroupBy, CiAppTestsQueryFilter, CloudAssetType, CloudConfigurationRuleComplianceSignalOptions, CloudWorkloadSecurityAgentPoliciesListResponse, CloudWorkloadSecurityAgentPolicyCreateData, CloudWorkloadSecurityAgentPolicyResponse, CloudWorkloadSecurityAgentPolicyUpdateData, CloudWorkloadSecurityAgentRuleCreateData, CloudWorkloadSecurityAgentRuleResponse, CloudWorkloadSecurityAgentRuleUpdateData, CloudWorkloadSecurityAgentRulesListResponse, CloudflareAccountCreateRequestData, CloudflareAccountResponse, CloudflareAccountUpdateRequestData, CloudflareAccountsResponse, CommitCoverageSummaryRequestData, ConfluentAccountCreateRequestData, ConfluentAccountResponse, ConfluentAccountUpdateRequestData, ConfluentAccountsResponse, ConfluentResourceRequestData, ConfluentResourceResponse, ConfluentResourcesResponse, ContainerImagesResponse, ContainersResponse, ConvertJobResultsToSignalsData, CostAggregationType, CostByOrgResponse, CoverageSummaryResponse, CreateActionConnectionResponse, CreateAppRequestData, CreateAppResponse, CreateAppsDatastoreRequestData, CreateAppsDatastoreResponse, CreateAttachmentRequestData, CreateCaseRequestData, CreateComponentRequestData, CreateConnectionRequestData, CreateCustomFrameworkResponse, CreateDataDeletionRequestBodyData, CreateDataDeletionResponseBody, CreateDegradationRequestData, CreateDeploymentGateParamsData, CreateDeploymentRuleParamsData, CreateEnvironmentData, CreateFeatureFlagData, CreateJiraIssueRequestData, CreateMaintenanceRequestData, CreateNotificationChannelData, CreateNotificationRuleParametersData, CreateOnCallNotificationRuleRequestData, CreateOpenApiResponse, CreateOrUpdateWidgetRequestData, CreatePageRequestData, CreatePageResponse, CreateRuleRequestData, CreateRuleResponse, CreateRulesetRequestData, CreateStatusPageRequestData, CreateTableRequestData, CreateTenancyConfigData, CreateUploadRequestData, CreateUploadResponse, CreateWorkflowResponse, CsmAgentsResponse, CsmCloudAccountsCoverageAnalysisResponse, CsmHostsAndContainersCoverageAnalysisResponse, CsmServerlessCoverageAnalysisResponse, CustomAttributeConfigCreate, CustomAttributeConfigResponse, CustomAttributeConfigsResponse, CustomCostsFileGetResponse, CustomCostsFileListResponse, CustomCostsFileUploadRequest, CustomCostsFileUploadResponse, CustomDestinationCreateRequestDefinition, CustomDestinationResponse, CustomDestinationUpdateRequestDefinition, CustomDestinationsResponse, CustomFrameworkData, CustomRuleRequestData, CustomRuleResponse, CustomRuleRevisionRequestData, CustomRuleRevisionResponse, CustomRuleRevisionsResponse, CustomRulesetRequestData, CustomRulesetResponse, DashboardListAddItemsResponse, DashboardListDeleteItemsResponse, DashboardListItemRequest, DashboardListItems, DashboardListUpdateItemsResponse, DatasetRequest, DatasetResponseMulti, DatasetResponseSingle, Datastore, DatastoreArray, Degradation, DegradationArray, DeleteAppResponse, DeleteAppsDatastoreItemRequestData, DeleteAppsDatastoreItemResponse, DeleteAppsDatastoreItemResponseArray, DeleteAppsRequestDataItems, DeleteAppsResponse, DeleteCustomFrameworkResponse, DeletedSuitesRequestDelete, DeletedSuitesResponse, DeletedTestsRequestDelete, DeletedTestsResponse, DeploymentGateResponse, DeploymentGateRulesResponse, DeploymentGatesEvaluationRequestData, DeploymentGatesEvaluationResponse, DeploymentGatesEvaluationResultResponse, DeploymentGatesListResponse, DeploymentRuleResponse, DetachCaseRequestData, DomainAllowlist, DomainAllowlistResponse, DoraDeploymentFetchResponse, DoraDeploymentPatchRequestData, DoraDeploymentRequestData, DoraDeploymentResponse, DoraDeploymentsListResponse, DoraFailureFetchResponse, DoraFailureRequestData, DoraFailureResponse, DoraFailuresListResponse, DoraListDeploymentsRequestData, DoraListFailuresRequestData, DowntimeCreateRequestData, DowntimeResponse, DowntimeUpdateRequestData, EntityResponseArray, EnvironmentResponse, EscalationPolicy, EscalationPolicyCreateRequestData, EscalationPolicyUpdateRequestData, EventCreateRequest, EventCreateResponsePayload, EventsListResponse, EventsQueryFilter, EventsQueryOptions, EventsRequestPage, EventsSort, FacetInfoRequestData, FacetInfoResponse, FastlyAccountCreateRequestData, FastlyAccountResponse, FastlyAccountUpdateRequestData, FastlyAccountsResponse, FastlyServiceData, FastlyServiceResponse, FastlyServicesResponse, FeatureFlagResponse, FindingCaseResponse, FindingCaseResponseArray, FindingEvaluation, FindingStatus, FindingVulnerabilityType, FlakyTestsSearchRequestData, FlakyTestsSearchResponse, FleetAgentInfoResponse, FleetAgentVersionsResponse, FleetAgentsResponse, FleetDeploymentConfigureCreate, FleetDeploymentPackageUpgradeCreate, FleetDeploymentResponse, FleetDeploymentsResponse, FleetScheduleCreate, FleetSchedulePatch, FleetScheduleResponse, FleetSchedulesResponse, GcpScanOptions, GcpScanOptionsArray, GcpScanOptionsData, GcpScanOptionsInputUpdateData, GcpUcConfigResponse, GcpUsageCostConfigPatchData, GcpUsageCostConfigPostData, GcpUsageCostConfigResponse, GcpUsageCostConfigsResponse, GcpstsDelegateAccountResponse, GcpstsServiceAccountData, GcpstsServiceAccountResponse, GcpstsServiceAccountUpdateRequestData, GcpstsServiceAccountsResponse, GetActionConnectionResponse, GetAppKeyRegistrationResponse, GetAppResponse, GetCustomFrameworkResponse, GetDataDeletionsResponseBody, GetDeviceResponse, GetFindingResponse, GetInterfacesResponse, GetIssueIncludeQueryParameterItem, GetMappingResponse, GetMultipleRulesetsRequestData, GetMultipleRulesetsResponse, GetResourceEvaluationFiltersResponse, GetRuleVersionHistoryResponse, GetSbomResponse, GetSuppressionVersionHistoryResponse, GetTeamMembershipsSort, GetWorkflowResponse, GlobalIncidentSettingsDataRequest, GlobalIncidentSettingsResponse, GlobalVariableJsonPatchRequestData, GlobalVariableResponse, GoogleChatAppNamedSpaceResponse, GoogleChatCreateOrganizationHandleRequestData, GoogleChatOrganizationHandleResponse, GoogleChatOrganizationHandleType, GoogleChatOrganizationHandlesResponse, GoogleChatUpdateOrganizationHandleRequestData, HamrOrgConnectionDataRequest, HamrOrgConnectionResponse, HourlyUsageResponse, HttpLog, IncidentCreateData, IncidentHandleDataRequest, IncidentHandleResponse, IncidentHandlesResponse, IncidentImpactCreateData, IncidentImpactRelatedObject, IncidentImpactResponse, IncidentImpactsResponse, IncidentImportRelatedObject, IncidentImportRequestData, IncidentImportResponse, IncidentIntegrationMetadataCreateData, IncidentIntegrationMetadataListResponse, IncidentIntegrationMetadataPatchData, IncidentIntegrationMetadataResponse, IncidentNotificationRule, IncidentNotificationRuleArray, IncidentNotificationRuleCreateData, IncidentNotificationRuleUpdateData, IncidentNotificationTemplate, IncidentNotificationTemplateArray, IncidentNotificationTemplateCreateData, IncidentNotificationTemplateUpdateData, IncidentRelatedObject, IncidentRelationshipData, IncidentResponse, IncidentSearchResponse, IncidentSearchSortOrder, IncidentServiceCreateData, IncidentServiceResponse, IncidentServiceUpdateData, IncidentServicesResponse, IncidentTeamCreateData, IncidentTeamResponse, IncidentTeamUpdateData, IncidentTeamsResponse, IncidentTodoCreateData, IncidentTodoListResponse, IncidentTodoPatchData, IncidentTodoResponse, IncidentTypeCreateData, IncidentTypeListResponse, IncidentTypePatchData, IncidentTypeResponse, IncidentUpdateData, IncidentUserDefinedFieldCreateData, IncidentUserDefinedFieldListResponse, IncidentUserDefinedFieldResponse, IncidentUserDefinedFieldUpdateData, IncidentsResponse, IncludeType, IntakePayloadAccepted, IpAllowlistData, IpAllowlistResponse, IssueResponse, IssueUpdateAssigneeRequestData, IssueUpdateStateRequestData, IssuesSearchRequestData, IssuesSearchResponse, ItemApiPayload, ItemApiPayloadArray, JiraAccountsResponse, JiraIssueCreateData, JiraIssueLinkData, JiraIssueTemplateCreateRequestData, JiraIssueTemplateResponse, JiraIssueTemplateUpdateRequestData, JiraIssueTemplatesResponse, JobCreateResponse, ListAllocationsResponse, ListApIsResponse, ListAppKeyRegistrationsResponse, ListApplicationKeysResponse, ListAppsResponse, ListAssetsSboMsResponse, ListConnectionsResponse, ListDevicesResponse, ListDowntimesResponse, ListEntityCatalogResponse, ListEnvironmentsResponse, ListFeatureFlagsResponse, ListFindingsResponse, ListIntegrationsResponse, ListInterfaceTagsResponse, ListInterfaceTagsResponseData, ListKindCatalogResponse, ListNotificationChannelsResponse, ListOnCallNotificationRulesResponse, ListPipelinesResponse, ListPowerpacksResponse, ListRelationCatalogResponse, ListRulesResponse, ListSecurityFindingsResponse, ListTagsResponse, ListTagsResponseData, ListTeamsInclude, ListTeamsSort, ListThreatHuntingJobsResponse, ListVulnerabilitiesResponse, ListVulnerableAssetsResponse, LlmObsDatasetDataRequest, LlmObsDatasetRecordsDataRequest, LlmObsDatasetRecordsListResponse, LlmObsDatasetRecordsMutationResponse, LlmObsDatasetRecordsUpdateDataRequest, LlmObsDatasetResponse, LlmObsDatasetUpdateDataRequest, LlmObsDatasetsResponse, LlmObsDeleteDatasetRecordsDataRequest, LlmObsDeleteDatasetsDataRequest, LlmObsDeleteExperimentsDataRequest, LlmObsDeleteProjectsDataRequest, LlmObsExperimentDataRequest, LlmObsExperimentEventsDataRequest, LlmObsExperimentResponse, LlmObsExperimentUpdateDataRequest, LlmObsExperimentsResponse, LlmObsProjectDataRequest, LlmObsProjectResponse, LlmObsProjectUpdateDataRequest, LlmObsProjectsResponse, LogsAggregateRequestPage, LogsAggregateResponse, LogsArchive, LogsArchiveCreateRequestDefinition, LogsArchiveOrder, LogsArchiveOrderDefinition, LogsArchives, LogsCompute, LogsGroupBy, LogsListRequestPage, LogsListResponse, LogsMetricCreateData, LogsMetricResponse, LogsMetricUpdateData, LogsMetricsResponse, LogsQueryFilter, LogsQueryOptions, LogsSort, LogsStorageTier, Maintenance, MaintenanceArray, MemberTeam, MetricAllTagsResponse, MetricAssetsResponse, MetricBulkTagConfigCreate, MetricBulkTagConfigDelete, MetricBulkTagConfigResponse, MetricEstimateResponse, MetricSeries, MetricSuggestedTagsAndAggregationsResponse, MetricTagCardinalitiesResponse, MetricTagConfigurationCreateData, MetricTagConfigurationMetricTypeCategory, MetricTagConfigurationResponse, MetricTagConfigurationUpdateData, MetricVolumesResponse, MetricsAndMetricTagConfigurationsResponse, MicrosoftTeamsGetChannelByNameResponse, MicrosoftTeamsTenantBasedHandleRequestData, MicrosoftTeamsTenantBasedHandleResponse, MicrosoftTeamsTenantBasedHandlesResponse, MicrosoftTeamsUpdateTenantBasedHandleRequestData, MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData, MicrosoftTeamsWorkflowsWebhookHandleRequestData, MicrosoftTeamsWorkflowsWebhookHandleResponse, MicrosoftTeamsWorkflowsWebhookHandlesResponse, MonitorConfigPolicyCreateData, MonitorConfigPolicyEditData, MonitorConfigPolicyListResponse, MonitorConfigPolicyResponse, MonitorDowntimeMatchResponse, MonitorNotificationRuleCreateRequestData, MonitorNotificationRuleListResponse, MonitorNotificationRuleResponse, MonitorNotificationRuleUpdateRequestData, MonitorUserTemplateCreateData, MonitorUserTemplateCreateResponse, MonitorUserTemplateListResponse, MonitorUserTemplateResponse, MonitorUserTemplateUpdateData, MonthlyCostAttributionResponse, NotebookCreateData, NotificationChannel, NotificationRule, NotificationRuleResponse, ObservabilityPipeline, ObservabilityPipelineData, ObservabilityPipelineSpecData, OktaAccount, OktaAccountResponse, OktaAccountUpdateRequestData, OktaAccountsResponse, OnCallNotificationRule, OnDemandConcurrencyCapResponse, OpsgenieServiceCreateData, OpsgenieServiceResponse, OpsgenieServiceUpdateData, OpsgenieServicesResponse, OrderDirection, OrgConfigGetResponse, OrgConfigListResponse, OrgConfigWrite, OrgConnectionCreate, OrgConnectionListResponse, OrgConnectionResponse, OrgConnectionUpdate, OutcomesBatchRequestData, OutcomesBatchResponse, OutcomesResponse, PartialApplicationKeyResponse, PatchAttachmentRequestData, PatchComponentRequestData, PatchDegradationRequestData, PatchMaintenanceRequestData, PatchNotificationRuleParametersData, PatchStatusPageRequestData, PatchTableRequestData, PermissionsResponse, Playlist, PlaylistArray, PlaylistData, PlaylistsSession, PlaylistsSessionArray, PostmortemAttachmentRequestData, PostmortemTemplateDataRequest, PostmortemTemplateResponse, PostmortemTemplatesResponse, PowerpackData, PowerpackResponse, ProcessSummariesResponse, ProductAnalyticsAnalyticsRequestData, ProductAnalyticsScalarResponse, ProductAnalyticsServerSideEventItemAccount, ProductAnalyticsServerSideEventItemApplication, ProductAnalyticsServerSideEventItemEvent, ProductAnalyticsServerSideEventItemSession, ProductAnalyticsServerSideEventItemType, ProductAnalyticsServerSideEventItemUsr, ProductAnalyticsTimeseriesResponse, ProjectCreate, ProjectRelationshipData, ProjectResponse, ProjectUpdate, ProjectedCostResponse, ProjectsResponse, PublishAppResponse, PutAppsDatastoreItemResponseArray, QueryAccountRequestData, QueryEventFilteredUsersRequestData, QueryResponse, QuerySortOrder, QueryUsersRequestData, RecommendationDocument, ReferenceTableSortType, RegisterAppKeyResponse, RelationIncludeType, RelationType, RelationshipToPermissionData, RelationshipToRoleData, RelationshipToUserData, ReorderRuleResourceData, ReorderRulesetResourceData, ResolveVulnerableSymbolsRequestData, ResolveVulnerableSymbolsResponse, RestrictionPolicy, RestrictionPolicyResponse, RestrictionQueryCreateData, RestrictionQueryListResponse, RestrictionQueryRolesResponse, RestrictionQueryUpdateData, RestrictionQueryWithRelationshipsResponse, RestrictionQueryWithoutRelationshipsResponse, RetentionFilterCreateData, RetentionFilterCreateResponse, RetentionFilterResponse, RetentionFilterUpdateData, RetentionFilterWithoutAttributes, RetentionFiltersResponse, RevertCustomRuleRevisionRequestData, RoleClone, RoleCreateData, RoleCreateResponse, RoleResponse, RoleTemplateArray, RoleUpdateData, RoleUpdateResponse, RolesResponse, RolesSort, RulesValidateQueryRequestData, RulesValidateQueryResponse, RulesetResp, RulesetRespArray, RumAnalyticsAggregateResponse, RumApplicationCreate, RumApplicationResponse, RumApplicationUpdate, RumApplicationsResponse, RumCompute, RumEventsResponse, RumGroupBy, RumMetricCreateData, RumMetricResponse, RumMetricUpdateData, RumMetricsResponse, RumQueryFilter, RumQueryOptions, RumQueryPageOptions, RumRetentionFilterCreateData, RumRetentionFilterResponse, RumRetentionFilterUpdateData, RumRetentionFiltersOrderData, RumRetentionFiltersOrderResponse, RumRetentionFiltersResponse, RumSort, RunThreatHuntingJobRequestData, SbomComponentLicenseType, SbomFormat, ScaRequestData, ScalarFormulaQueryResponse, ScalarFormulaRequest, ScannedAssetsMetadata, Schedule, ScheduleCreateRequestData, ScheduleUpdateRequestData, SearchIssuesIncludeQueryParameterItem, SeatUserDataArray, SecretRuleArray, SecurityEntityRiskScoresResponse, SecurityFilterCreateData, SecurityFilterResponse, SecurityFilterUpdateData, SecurityFiltersResponse, SecurityFindingsSearchRequestData, SecurityFindingsSort, SecurityMonitoringContentPackStatesResponse, SecurityMonitoringCriticalAssetCreateData, SecurityMonitoringCriticalAssetResponse, SecurityMonitoringCriticalAssetUpdateData, SecurityMonitoringCriticalAssetsResponse, SecurityMonitoringFilter, SecurityMonitoringListRulesResponse, SecurityMonitoringPaginatedSuppressionsResponse, SecurityMonitoringReferenceTable, SecurityMonitoringRuleBulkExportData, SecurityMonitoringRuleCase, SecurityMonitoringRuleConvertPayload, SecurityMonitoringRuleConvertResponse, SecurityMonitoringRuleCreatePayload, SecurityMonitoringRuleOptions, SecurityMonitoringRuleQuery, SecurityMonitoringRuleQueryPayload, SecurityMonitoringRuleResponse, SecurityMonitoringRuleSort, SecurityMonitoringRuleTestPayload, SecurityMonitoringRuleTestResponse, SecurityMonitoringRuleValidatePayload, SecurityMonitoringSchedulingOptions, SecurityMonitoringSignalAssigneeUpdateData, SecurityMonitoringSignalIncidentsUpdateData, SecurityMonitoringSignalListRequestFilter, SecurityMonitoringSignalListRequestPage, SecurityMonitoringSignalResponse, SecurityMonitoringSignalStateUpdateData, SecurityMonitoringSignalTriageUpdateResponse, SecurityMonitoringSignalsBulkAssigneeUpdateData, SecurityMonitoringSignalsBulkStateUpdateData, SecurityMonitoringSignalsBulkTriageUpdateResponse, SecurityMonitoringSignalsListResponse, SecurityMonitoringSignalsSort, SecurityMonitoringSuppressionCreateData, SecurityMonitoringSuppressionResponse, SecurityMonitoringSuppressionSort, SecurityMonitoringSuppressionUpdateData, SecurityMonitoringSuppressionsResponse, SecurityMonitoringThirdPartyRuleCase, SensitiveDataScannerCreateGroupResponse, SensitiveDataScannerCreateRuleResponse, SensitiveDataScannerGetConfigResponse, SensitiveDataScannerGroupCreate, SensitiveDataScannerGroupDeleteResponse, SensitiveDataScannerGroupUpdate, SensitiveDataScannerGroupUpdateResponse, SensitiveDataScannerMetaVersionOnly, SensitiveDataScannerReorderConfig, SensitiveDataScannerReorderGroupsResponse, SensitiveDataScannerRuleCreate, SensitiveDataScannerRuleDeleteResponse, SensitiveDataScannerRuleUpdate, SensitiveDataScannerRuleUpdateResponse, SensitiveDataScannerStandardPatternsResponseData, ServiceAccountCreateData, ServiceDefinitionCreateResponse, ServiceDefinitionGetResponse, ServiceDefinitionSchemaVersions, ServiceDefinitionsCreateRequest, ServiceDefinitionsListResponse, ServiceList, ServiceNowAssignmentGroupsResponse, ServiceNowBusinessServicesResponse, ServiceNowInstancesResponse, ServiceNowTemplateCreateRequestData, ServiceNowTemplateResponse, ServiceNowTemplateUpdateRequestData, ServiceNowTemplatesResponse, ServiceNowTicketCreateData, ServiceNowUsersResponse, SessionIdData, Shift, SingleAggregatedConnectionResponseArray, SingleAggregatedDnsResponseArray, SloReportCreateRequestData, SloReportPostResponse, SloReportStatusGetResponse, SloStatusResponse, Snapshot, SnapshotArray, SnapshotCreateRequestData, SnapshotUpdateRequestData, SortDirection, SpansAggregateData, SpansAggregateResponse, SpansListRequestData, SpansListResponse, SpansMetricCreateData, SpansMetricResponse, SpansMetricUpdateData, SpansMetricsResponse, SpansSort, StatusPage, StatusPageArray, StatusPagesComponent, StatusPagesComponentArray, SuiteCreateEdit, SuiteJsonPatchRequestData, SyntheticsApiMultistepParentTestsResponse, SyntheticsApiMultistepSubtestsResponse, SyntheticsFastTestResult, SyntheticsNetworkTestEdit, SyntheticsNetworkTestResponse, SyntheticsSuiteResponse, SyntheticsSuiteSearchResponse, SyntheticsTestFileCompleteMultipartUploadPart, SyntheticsTestFileDownloadResponse, SyntheticsTestFileMultipartPresignedUrlsPart, SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix, SyntheticsTestFileMultipartPresignedUrlsResponse, SyntheticsTestParentSuitesResponse, SyntheticsTestVersionHistoryResponse, SyntheticsTestVersionResponse, TableResultV2, TableResultV2Array, TableRowResourceArray, TableRowResourceIdentifier, TeamConnectionCreateData, TeamConnectionDeleteRequestDataItem, TeamConnectionsResponse, TeamCreate, TeamHierarchyLinkCreate, TeamHierarchyLinkResponse, TeamHierarchyLinksResponse, TeamLinkCreate, TeamLinkResponse, TeamLinksResponse, TeamNotificationRule, TeamNotificationRuleResponse, TeamNotificationRulesResponse, TeamOnCallResponders, TeamPermissionSettingResponse, TeamPermissionSettingUpdate, TeamPermissionSettingsResponse, TeamResponse, TeamRoutingRules, TeamRoutingRulesRequestData, TeamSyncAttributesSource, TeamSyncData, TeamSyncResponse, TeamUpdate, TeamsField, TeamsResponse, TenancyConfig, TenancyConfigList, TenancyProductsList, TestOptimizationDeleteServiceSettingsRequestData, TestOptimizationGetServiceSettingsRequestData, TestOptimizationServiceSettingsResponse, TestOptimizationUpdateServiceSettingsRequestData, ThreatHuntingJobResponse, TimelineResponse, TimeseriesFormulaQueryResponse, TimeseriesFormulaRequest, UcConfigPair, UnassignSeatsUserRequestData, UnpublishAppResponse, UpdateActionConnectionResponse, UpdateAppRequestData, UpdateAppResponse, UpdateAppsDatastoreItemRequestData, UpdateAppsDatastoreRequestData, UpdateConnectionRequestData, UpdateCustomFrameworkResponse, UpdateDeploymentGateParamsData, UpdateDeploymentRuleParamsData, UpdateEnvironmentData, UpdateFeatureFlagData, UpdateFlakyTestsRequestData, UpdateFlakyTestsResponse, UpdateOnCallNotificationRuleRequestData, UpdateOpenApiResponse, UpdateOutcomesAsyncRequestData, UpdateResourceEvaluationFiltersRequestData, UpdateResourceEvaluationFiltersResponse, UpdateRuleRequestData, UpdateRuleResponse, UpdateRulesetRequestData, UpdateTenancyConfigData, UpdateWorkflowResponse, UpsertCatalogEntityRequest, UpsertCatalogEntityResponse, UpsertCatalogKindRequest, UpsertCatalogKindResponse, UsageApplicationSecurityMonitoringResponse, UsageAttributionTypesResponse, UsageLambdaTracedInvocationsResponse, UsageObservabilityPipelinesResponse, UserCreateData, UserInvitationData, UserInvitationResponse, UserInvitationsResponse, UserResponse, UserTeamCreate, UserTeamResponse, UserTeamUpdate, UserTeamsResponse, UserUpdateData, UsersResponse, V2EventResponse, ValidationResponse, ViewershipHistorySessionArray, VulnerabilityEcosystem, VulnerabilitySeverity, VulnerabilityStatus, VulnerabilityTool, VulnerabilityType, Watch, WatchData, WatcherArray, WidgetExperienceType, WidgetListResponse, WidgetResponse, WidgetType, WorkflowData, WorkflowDataUpdate, WorkflowInstanceCreateMeta, WorkflowInstanceCreateResponse, WorkflowListInstancesResponse, WorklflowCancelInstanceResponse, WorklflowGetInstanceResponse } from "./schemas.js";

export type DatadogClient = {
  /**
   * List all available Agent versions
   */
  listFleetAgentVersions: () => Promise<FleetAgentVersionsResponse>;

  /**
   * List all Datadog Agents
   */
  listFleetAgents: (input: {
    /** Page number for pagination (starts at 0). */
    page_number?: number;
    /** Number of results per page (must be greater than 0 and less than or equal to 100). */
    page_size?: number;
    /** Attribute to sort by. */
    sort_attribute?: string;
    /** Sort order (true for descending, false for ascending). */
    sort_descending?: boolean;
    /** Comma-separated list of tags to filter agents. */
    tags?: string;
    /** Filter string for narrowing down agent results. */
    filter?: string;
  }) => Promise<FleetAgentsResponse>;

  /**
   * Get detailed information about an agent
   */
  getFleetAgentInfo: (input: {
    /** The unique identifier (agent key) for the Datadog Agent. */
    agent_key: string;
  }) => Promise<FleetAgentInfoResponse>;

  /**
   * List all deployments
   */
  listFleetDeployments: (input: {
    /** Number of deployments to return per page. Maximum value is 100. */
    page_size?: number;
    /** Index of the first deployment to return. Use this with `page_size` to paginate through results. */
    page_offset?: number;
  }) => Promise<FleetDeploymentsResponse>;

  /**
   * Create a configuration deployment
   */
  createFleetDeploymentConfigure: (input: {
    data: FleetDeploymentConfigureCreate;
  }) => Promise<FleetDeploymentResponse>;

  /**
   * Upgrade hosts
   */
  createFleetDeploymentUpgrade: (input: {
    data: FleetDeploymentPackageUpgradeCreate;
  }) => Promise<FleetDeploymentResponse>;

  /**
   * Get a configuration deployment by ID
   */
  getFleetDeployment: (input: {
    /** The unique identifier of the deployment to retrieve. */
    deployment_id: string;
    /** Maximum number of hosts to return per page. Default is 50, maximum is 100. */
    limit?: number;
    /** Page index for pagination (zero-based). Use this to retrieve subsequent pages of hosts. */
    page?: number;
  }) => Promise<FleetDeploymentResponse>;

  /**
   * Cancel a deployment
   */
  cancelFleetDeployment: (input: {
    /** The unique identifier of the deployment to cancel. */
    deployment_id: string;
  }) => Promise<undefined>;

  /**
   * List all schedules
   */
  listFleetSchedules: () => Promise<FleetSchedulesResponse>;

  /**
   * Create a schedule
   */
  createFleetSchedule: (input: {
    data: FleetScheduleCreate;
  }) => Promise<FleetScheduleResponse>;

  /**
   * Delete a schedule
   */
  deleteFleetSchedule: (input: {
    /** The unique identifier of the schedule to delete. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get a schedule by ID
   */
  getFleetSchedule: (input: {
    /** The unique identifier of the schedule to retrieve. */
    id: string;
  }) => Promise<FleetScheduleResponse>;

  /**
   * Update a schedule
   */
  updateFleetSchedule: (input: {
    data: FleetSchedulePatch;
    /** The unique identifier of the schedule to update. */
    id: string;
  }) => Promise<FleetScheduleResponse>;

  /**
   * Trigger a schedule deployment
   */
  triggerFleetSchedule: (input: {
    /** The unique identifier of the schedule to trigger. */
    id: string;
  }) => Promise<FleetDeploymentResponse>;

  /**
   * List datastores
   */
  listDatastores: () => Promise<DatastoreArray>;

  /**
   * Create datastore
   */
  createDatastore: (input: {
    data?: CreateAppsDatastoreRequestData;
  }) => Promise<CreateAppsDatastoreResponse>;

  /**
   * Delete datastore
   */
  deleteDatastore: (input: {
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<undefined>;

  /**
   * Get datastore
   */
  getDatastore: (input: {
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<Datastore>;

  /**
   * Update datastore
   */
  updateDatastore: (input: {
    data?: UpdateAppsDatastoreRequestData;
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<Datastore>;

  /**
   * Delete datastore item
   */
  deleteDatastoreItem: (input: {
    data?: DeleteAppsDatastoreItemRequestData;
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<DeleteAppsDatastoreItemResponse>;

  /**
   * List datastore items
   */
  listDatastoreItems: (input: {
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
    /** Optional query filter to search items using the [logs search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). */
    filter?: string;
    /** Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter. */
    item_key?: string;
    /** Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page. */
    "page[limit]"?: number;
    /** Optional field to offset the number of items to skip from the beginning of the result set for pagination. */
    "page[offset]"?: number;
    /** Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at'). */
    sort?: string;
  }) => Promise<ItemApiPayloadArray>;

  /**
   * Update datastore item
   */
  updateDatastoreItem: (input: {
    data?: UpdateAppsDatastoreItemRequestData;
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<ItemApiPayload>;

  /**
   * Bulk delete datastore items
   */
  bulkDeleteDatastoreItems: (input: {
    data?: BulkDeleteAppsDatastoreItemsRequestData;
    /** The ID of the datastore. */
    datastore_id: string;
  }) => Promise<DeleteAppsDatastoreItemResponseArray>;

  /**
   * Bulk write datastore items
   */
  bulkWriteDatastoreItems: (input: {
    data?: BulkPutAppsDatastoreItemsRequestData;
    /** The unique identifier of the datastore to retrieve. */
    datastore_id: string;
  }) => Promise<PutAppsDatastoreItemResponseArray>;

  /**
   * List App Key Registrations
   */
  listAppKeyRegistrations: (input: {
    /** The number of App Key Registrations to return per page. */
    "page[size]"?: number;
    /** The page number to return. */
    "page[number]"?: number;
  }) => Promise<ListAppKeyRegistrationsResponse>;

  /**
   * Unregister an App Key
   */
  unregisterAppKey: (input: {
    /** The ID of the app key */
    app_key_id: string;
  }) => Promise<undefined>;

  /**
   * Get an existing App Key Registration
   */
  getAppKeyRegistration: (input: {
    /** The ID of the app key */
    app_key_id: string;
  }) => Promise<GetAppKeyRegistrationResponse>;

  /**
   * Register a new App Key
   */
  registerAppKey: (input: {
    /** The ID of the app key */
    app_key_id: string;
  }) => Promise<RegisterAppKeyResponse>;

  /**
   * Create a new Action Connection
   */
  createActionConnection: (input: {
    data: ActionConnectionData;
  }) => Promise<CreateActionConnectionResponse>;

  /**
   * Delete an existing Action Connection
   */
  deleteActionConnection: (input: {
    /** The ID of the action connection */
    connection_id: string;
  }) => Promise<undefined>;

  /**
   * Get an existing Action Connection
   */
  getActionConnection: (input: {
    /** The ID of the action connection */
    connection_id: string;
  }) => Promise<GetActionConnectionResponse>;

  /**
   * Update an existing Action Connection
   */
  updateActionConnection: (input: {
    data: ActionConnectionDataUpdate;
    /** The ID of the action connection */
    connection_id: string;
  }) => Promise<UpdateActionConnectionResponse>;

  /**
   * List AWS scan options
   */
  listAwsScanOptions: () => Promise<AwsScanOptionsListResponse>;

  /**
   * Create AWS scan options
   */
  createAwsScanOptions: (input: {
    data: AwsScanOptionsCreateData;
  }) => Promise<AwsScanOptionsResponse>;

  /**
   * Delete AWS scan options
   */
  deleteAwsScanOptions: (input: {
    /** The ID of an AWS account. */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Get AWS scan options
   */
  getAwsScanOptions: (input: {
    /** The ID of an AWS account. */
    account_id: string;
  }) => Promise<AwsScanOptionsResponse>;

  /**
   * Update AWS scan options
   */
  updateAwsScanOptions: (input: {
    data: AwsScanOptionsUpdateData;
    /** The ID of an AWS account. */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * List Azure scan options
   */
  listAzureScanOptions: () => Promise<AzureScanOptionsArray>;

  /**
   * Create Azure scan options
   */
  createAzureScanOptions: (input: {
    data?: AzureScanOptionsData;
  }) => Promise<AzureScanOptions>;

  /**
   * Delete Azure scan options
   */
  deleteAzureScanOptions: (input: {
    /** The Azure subscription ID. */
    subscription_id: string;
  }) => Promise<undefined>;

  /**
   * Get Azure scan options
   */
  getAzureScanOptions: (input: {
    /** The Azure subscription ID. */
    subscription_id: string;
  }) => Promise<AzureScanOptions>;

  /**
   * Update Azure scan options
   */
  updateAzureScanOptions: (input: {
    data?: AzureScanOptionsInputUpdateData;
    /** The Azure subscription ID. */
    subscription_id: string;
  }) => Promise<AzureScanOptions>;

  /**
   * List GCP scan options
   */
  listGcpScanOptions: () => Promise<GcpScanOptionsArray>;

  /**
   * Create GCP scan options
   */
  createGcpScanOptions: (input: {
    data?: GcpScanOptionsData;
  }) => Promise<GcpScanOptions>;

  /**
   * Delete GCP scan options
   */
  deleteGcpScanOptions: (input: {
    /** The GCP project ID. */
    project_id: string;
  }) => Promise<undefined>;

  /**
   * Get GCP scan options
   */
  getGcpScanOptions: (input: {
    /** The GCP project ID. */
    project_id: string;
  }) => Promise<GcpScanOptions>;

  /**
   * Update GCP scan options
   */
  updateGcpScanOptions: (input: {
    data?: GcpScanOptionsInputUpdateData;
    /** The GCP project ID. */
    project_id: string;
  }) => Promise<GcpScanOptions>;

  /**
   * List AWS on demand tasks
   */
  listAwsOnDemandTasks: () => Promise<AwsOnDemandListResponse>;

  /**
   * Create AWS on demand task
   */
  createAwsOnDemandTask: (input: {
    data: AwsOnDemandCreateData;
  }) => Promise<AwsOnDemandResponse>;

  /**
   * Get AWS on demand task
   */
  getAwsOnDemandTask: (input: {
    /** The UUID of the task. */
    task_id: string;
  }) => Promise<AwsOnDemandResponse>;

  /**
   * Get all API keys
   */
  listApiKeys: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: ApiKeysSort;
    /** Filter API keys by the specified string. */
    filter?: string;
    /** Only include API keys created on or after the specified date. */
    "filter[created_at][start]"?: string;
    /** Only include API keys created on or before the specified date. */
    "filter[created_at][end]"?: string;
    /** Only include API keys modified on or after the specified date. */
    "filter[modified_at][start]"?: string;
    /** Only include API keys modified on or before the specified date. */
    "filter[modified_at][end]"?: string;
    /** Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. */
    include?: string;
    /** Filter API keys by remote config read enabled status. */
    "filter[remote_config_read_enabled]"?: boolean;
    /** Filter API keys by category. */
    "filter[category]"?: string;
  }) => Promise<ApiKeysResponse>;

  /**
   * Create an API key
   */
  createApiKey: (input: {
    data: ApiKeyCreateData;
  }) => Promise<ApiKeyResponse>;

  /**
   * Delete an API key
   */
  deleteApiKey: (input: {
    /** The ID of the API key. */
    api_key_id: string;
  }) => Promise<undefined>;

  /**
   * Get API key
   */
  getApiKey: (input: {
    /** The ID of the API key. */
    api_key_id: string;
    /** Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. */
    include?: string;
  }) => Promise<ApiKeyResponse>;

  /**
   * Edit an API key
   */
  updateApiKey: (input: {
    data: ApiKeyUpdateData;
    /** The ID of the API key. */
    api_key_id: string;
  }) => Promise<ApiKeyResponse>;

  /**
   * List APIs
   */
  listApIs: (input: {
    /** Filter APIs by name */
    query?: string;
    /** Number of items per page. */
    "page[limit]"?: number;
    /** Offset for pagination. */
    "page[offset]"?: number;
  }) => Promise<ListApIsResponse>;

  /**
   * Delete an API
   */
  deleteOpenApi: (input: {
    id: ApiId;
  }) => Promise<undefined>;

  /**
   * Get an API
   */
  getOpenApi: (input: {
    id: ApiId;
  }) => Promise<string>;

  /**
   * Update an API
   */
  updateOpenApi: (input: {
    /** Binary `OpenAPI` spec file */
    openapi_spec_file?: string;
    id: ApiId;
  }) => Promise<UpdateOpenApiResponse>;

  /**
   * Create a new API
   */
  createOpenApi: (input: {
    /** Binary `OpenAPI` spec file */
    openapi_spec_file?: string;
  }) => Promise<CreateOpenApiResponse>;

  /**
   * Get all span-based metrics
   */
  listSpansMetrics: () => Promise<SpansMetricsResponse>;

  /**
   * Create a span-based metric
   */
  createSpansMetric: (input: {
    data: SpansMetricCreateData;
  }) => Promise<SpansMetricResponse>;

  /**
   * Delete a span-based metric
   */
  deleteSpansMetric: (input: {
    /** The name of the span-based metric. */
    metric_id: string;
  }) => Promise<undefined>;

  /**
   * Get a span-based metric
   */
  getSpansMetric: (input: {
    /** The name of the span-based metric. */
    metric_id: string;
  }) => Promise<SpansMetricResponse>;

  /**
   * Update a span-based metric
   */
  updateSpansMetric: (input: {
    data: SpansMetricUpdateData;
    /** The name of the span-based metric. */
    metric_id: string;
  }) => Promise<SpansMetricResponse>;

  /**
   * List all APM retention filters
   */
  listApmRetentionFilters: () => Promise<RetentionFiltersResponse>;

  /**
   * Create a retention filter
   */
  createApmRetentionFilter: (input: {
    data: RetentionFilterCreateData;
  }) => Promise<RetentionFilterCreateResponse>;

  /**
   * Re-order retention filters
   */
  reorderApmRetentionFilters: (input: {
    /** A list of retention filters objects. */
    data: (RetentionFilterWithoutAttributes)[];
  }) => Promise<undefined>;

  /**
   * Delete a retention filter
   */
  deleteApmRetentionFilter: (input: {
    /** The ID of the retention filter. */
    filter_id: string;
  }) => Promise<undefined>;

  /**
   * Get a given APM retention filter
   */
  getApmRetentionFilter: (input: {
    /** The ID of the retention filter. */
    filter_id: string;
  }) => Promise<RetentionFilterResponse>;

  /**
   * Update a retention filter
   */
  updateApmRetentionFilter: (input: {
    data: RetentionFilterUpdateData;
    /** The ID of the retention filter. */
    filter_id: string;
  }) => Promise<RetentionFilterResponse>;

  /**
   * Get service list
   */
  getServiceList: (input: {
    /** Filter services by environment. Can be set to `*` to return all services across all environments. */
    "filter[env]": string;
  }) => Promise<ServiceList>;

  /**
   * Delete Multiple Apps
   */
  deleteApps: (input: {
    /** An array of objects containing the IDs of the apps to delete. */
    data?: (DeleteAppsRequestDataItems)[];
  }) => Promise<DeleteAppsResponse>;

  /**
   * List Apps
   */
  listApps: (input: {
    /** The number of apps to return per page. */
    limit?: number;
    /** The page number to return. */
    page?: number;
    /** Filter apps by the app creator. Usually the user's email. */
    "filter[user_name]"?: string;
    /** Filter apps by the app creator's UUID. */
    "filter[user_uuid]"?: string;
    /** Filter by app name. */
    "filter[name]"?: string;
    /** Filter apps by the app name or the app creator. */
    "filter[query]"?: string;
    /** Filter apps by whether they are published. */
    "filter[deployed]"?: boolean;
    /** Filter apps by tags. */
    "filter[tags]"?: string;
    /** Filter apps by whether you have added them to your favorites. */
    "filter[favorite]"?: boolean;
    /** Filter apps by whether they are enabled for self-service. */
    "filter[self_service]"?: boolean;
    /** The fields and direction to sort apps by. */
    sort?: (AppsSortField)[];
  }) => Promise<ListAppsResponse>;

  /**
   * Create App
   */
  createApp: (input: {
    data?: CreateAppRequestData;
  }) => Promise<CreateAppResponse>;

  /**
   * Delete App
   */
  deleteApp: (input: {
    /** The ID of the app to delete. */
    app_id: string;
  }) => Promise<DeleteAppResponse>;

  /**
   * Get App
   */
  getApp: (input: {
    /** The ID of the app to retrieve. */
    app_id: string;
    /** The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively. */
    version?: string;
  }) => Promise<GetAppResponse>;

  /**
   * Update App
   */
  updateApp: (input: {
    data?: UpdateAppRequestData;
    /** The ID of the app to update. */
    app_id: string;
  }) => Promise<UpdateAppResponse>;

  /**
   * Unpublish App
   */
  unpublishApp: (input: {
    /** The ID of the app to unpublish. */
    app_id: string;
  }) => Promise<UnpublishAppResponse>;

  /**
   * Publish App
   */
  publishApp: (input: {
    /** The ID of the app to publish. */
    app_id: string;
  }) => Promise<PublishAppResponse>;

  /**
   * Get all application keys
   */
  listApplicationKeys: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: ApplicationKeysSort;
    /** Filter application keys by the specified string. */
    filter?: string;
    /** Only include application keys created on or after the specified date. */
    "filter[created_at][start]"?: string;
    /** Only include application keys created on or before the specified date. */
    "filter[created_at][end]"?: string;
    /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
    include?: string;
  }) => Promise<ListApplicationKeysResponse>;

  /**
   * Delete an application key
   */
  deleteApplicationKey: (input: {
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<undefined>;

  /**
   * Get an application key
   */
  getApplicationKey: (input: {
    /** The ID of the application key. */
    app_key_id: string;
    /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
    include?: string;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Edit an application key
   */
  updateApplicationKey: (input: {
    data: ApplicationKeyUpdateData;
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Get a list of Audit Logs events
   */
  listAuditLogs: (input: {
    /** Search query following Audit Logs syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested events. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested events. */
    "filter[to]"?: string;
    sort?: AuditLogsSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of events in the response. */
    "page[limit]"?: number;
  }) => Promise<AuditLogsEventsResponse>;

  /**
   * Search Audit Logs events
   */
  searchAuditLogs: (input: {
    filter?: AuditLogsQueryFilter;
    options?: AuditLogsQueryOptions;
    page?: AuditLogsQueryPageOptions;
    sort?: AuditLogsSort;
  }) => Promise<AuditLogsEventsResponse>;

  /**
   * List all AuthN Mappings
   */
  listAuthNMappings: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: AuthNMappingsSort;
    /** Filter all mappings by the given string. */
    filter?: string;
    resource_type?: AuthNMappingResourceType;
  }) => Promise<AuthNMappingsResponse>;

  /**
   * Create an AuthN Mapping
   */
  createAuthNMapping: (input: {
    data: AuthNMappingCreateData;
  }) => Promise<AuthNMappingResponse>;

  /**
   * Delete an AuthN Mapping
   */
  deleteAuthNMapping: (input: {
    /** The UUID of the AuthN Mapping. */
    authn_mapping_id: string;
  }) => Promise<undefined>;

  /**
   * Get an AuthN Mapping by UUID
   */
  getAuthNMapping: (input: {
    /** The UUID of the AuthN Mapping. */
    authn_mapping_id: string;
  }) => Promise<AuthNMappingResponse>;

  /**
   * Edit an AuthN Mapping
   */
  updateAuthNMapping: (input: {
    data: AuthNMappingUpdateData;
    /** The UUID of the AuthN Mapping. */
    authn_mapping_id: string;
  }) => Promise<AuthNMappingResponse>;

  /**
   * Search cases
   */
  searchCases: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    "sort[field]"?: CaseSortableField;
    /** Search query */
    filter?: string;
    /** Specify if order is ascending or not */
    "sort[asc]"?: boolean;
  }) => Promise<CasesResponse>;

  /**
   * Create a case
   */
  createCase: (input: {
    data: CaseCreate;
  }) => Promise<CaseResponse>;

  /**
   * Get all projects
   */
  getProjects: () => Promise<ProjectsResponse>;

  /**
   * Create a project
   */
  createProject: (input: {
    data: ProjectCreate;
  }) => Promise<ProjectResponse>;

  /**
   * Remove a project
   */
  deleteProject: (input: {
    /** Project UUID. */
    project_id: string;
  }) => Promise<undefined>;

  /**
   * Get the details of a project
   */
  getProject: (input: {
    /** Project UUID. */
    project_id: string;
  }) => Promise<ProjectResponse>;

  /**
   * Update a project
   */
  updateProject: (input: {
    data: ProjectUpdate;
    /** Project UUID. */
    project_id: string;
  }) => Promise<ProjectResponse>;

  /**
   * Get notification rules
   */
  getProjectNotificationRules: (input: {
    /** Project UUID */
    project_id: string;
  }) => Promise<CaseNotificationRulesResponse>;

  /**
   * Create a notification rule
   */
  createProjectNotificationRule: (input: {
    data: CaseNotificationRuleCreate;
    /** Project UUID */
    project_id: string;
  }) => Promise<CaseNotificationRuleResponse>;

  /**
   * Delete a notification rule
   */
  deleteProjectNotificationRule: (input: {
    /** Project UUID */
    project_id: string;
    /** Notification Rule UUID */
    notification_rule_id: string;
  }) => Promise<undefined>;

  /**
   * Update a notification rule
   */
  updateProjectNotificationRule: (input: {
    data: CaseNotificationRuleUpdate;
    /** Project UUID */
    project_id: string;
    /** Notification Rule UUID */
    notification_rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get all case types
   */
  getAllCaseTypes: () => Promise<CaseTypesResponse>;

  /**
   * Create a case type
   */
  createCaseType: (input: {
    data: CaseTypeCreate;
  }) => Promise<CaseTypeResponse>;

  /**
   * Get all custom attributes
   */
  getAllCustomAttributes: () => Promise<CustomAttributeConfigsResponse>;

  /**
   * Delete a case type
   */
  deleteCaseType: (input: {
    /** Case type's UUID */
    case_type_id: string;
  }) => Promise<undefined>;

  /**
   * Get all custom attributes config of case type
   */
  getAllCustomAttributeConfigsByCaseType: (input: {
    /** Case type's UUID */
    case_type_id: string;
  }) => Promise<CustomAttributeConfigsResponse>;

  /**
   * Create custom attribute config for a case type
   */
  createCustomAttributeConfig: (input: {
    data: CustomAttributeConfigCreate;
    /** Case type's UUID */
    case_type_id: string;
  }) => Promise<CustomAttributeConfigResponse>;

  /**
   * Delete custom attributes config
   */
  deleteCustomAttributeConfig: (input: {
    /** Case type's UUID */
    case_type_id: string;
    /** Case Custom attribute's UUID */
    custom_attribute_id: string;
  }) => Promise<undefined>;

  /**
   * Get the details of a case
   */
  getCase: (input: {
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Archive case
   */
  archiveCase: (input: {
    data: CaseEmpty;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Assign case
   */
  assignCase: (input: {
    data: CaseAssign;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Update case attributes
   */
  updateAttributes: (input: {
    data: CaseUpdateAttributes;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Comment case
   */
  commentCase: (input: {
    data: CaseComment;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<TimelineResponse>;

  /**
   * Delete case comment
   */
  deleteCaseComment: (input: {
    /** Case's UUID or key */
    case_id: string;
    /** Timeline cell's UUID */
    cell_id: string;
  }) => Promise<undefined>;

  /**
   * Delete custom attribute from case
   */
  deleteCaseCustomAttribute: (input: {
    /** Case's UUID or key */
    case_id: string;
    /** Case Custom attribute's key */
    custom_attribute_key: string;
  }) => Promise<CaseResponse>;

  /**
   * Update case custom attribute
   */
  updateCaseCustomAttribute: (input: {
    data: CaseUpdateCustomAttribute;
    /** Case's UUID or key */
    case_id: string;
    /** Case Custom attribute's key */
    custom_attribute_key: string;
  }) => Promise<CaseResponse>;

  /**
   * Update case description
   */
  updateCaseDescription: (input: {
    data: CaseUpdateDescription;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Update case priority
   */
  updatePriority: (input: {
    data: CaseUpdatePriority;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Link incident to case
   */
  linkIncident: (input: {
    data: IncidentRelationshipData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Remove Jira issue link from case
   */
  unlinkJiraIssue: (input: {
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<undefined>;

  /**
   * Link existing Jira issue to case
   */
  linkJiraIssueToCase: (input: {
    data: JiraIssueLinkData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<undefined>;

  /**
   * Create Jira issue for case
   */
  createCaseJiraIssue: (input: {
    data: JiraIssueCreateData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<undefined>;

  /**
   * Create investigation notebook for case
   */
  createCaseNotebook: (input: {
    data: NotebookCreateData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<undefined>;

  /**
   * Update case project
   */
  moveCaseToProject: (input: {
    data: ProjectRelationshipData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Create ServiceNow ticket for case
   */
  createCaseServiceNowTicket: (input: {
    data: ServiceNowTicketCreateData;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<undefined>;

  /**
   * Update case status
   */
  updateStatus: (input: {
    data: CaseUpdateStatus;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Update case title
   */
  updateCaseTitle: (input: {
    data: CaseUpdateTitle;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Unarchive case
   */
  unarchiveCase: (input: {
    data: CaseEmpty;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Unassign case
   */
  unassignCase: (input: {
    data: CaseEmpty;
    /** Case's UUID or key */
    case_id: string;
  }) => Promise<CaseResponse>;

  /**
   * Get a list of entities
   */
  listCatalogEntity: (input: {
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Maximum number of entities in the response. */
    "page[limit]"?: number;
    /** Filter entities by UUID. */
    "filter[id]"?: string;
    /** Filter entities by reference */
    "filter[ref]"?: string;
    /** Filter entities by name. */
    "filter[name]"?: string;
    /** Filter entities by kind. */
    "filter[kind]"?: string;
    /** Filter entities by owner. */
    "filter[owner]"?: string;
    "filter[relation][type]"?: RelationType;
    /** Filter entities by excluding snapshotted entities. */
    "filter[exclude_snapshot]"?: string;
    include?: IncludeType;
    /** If true, includes discovered services from APM and USM that do not have entity definitions. */
    includeDiscovered?: boolean;
  }) => Promise<ListEntityCatalogResponse>;

  /**
   * Create or update entities
   */
  upsertCatalogEntity: (input: {
    body: UpsertCatalogEntityRequest;
  }) => Promise<UpsertCatalogEntityResponse>;

  /**
   * Preview catalog entities
   */
  previewCatalogEntities: () => Promise<EntityResponseArray>;

  /**
   * Delete a single entity
   */
  deleteCatalogEntity: (input: {
    /** UUID or Entity Ref. */
    entity_id: string;
  }) => Promise<undefined>;

  /**
   * Get a list of entity kinds
   */
  listCatalogKind: (input: {
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Maximum number of kinds in the response. */
    "page[limit]"?: number;
    /** Filter entities by UUID. */
    "filter[id]"?: string;
    /** Filter entities by name. */
    "filter[name]"?: string;
  }) => Promise<ListKindCatalogResponse>;

  /**
   * Create or update kinds
   */
  upsertCatalogKind: (input: {
    body: UpsertCatalogKindRequest;
  }) => Promise<UpsertCatalogKindResponse>;

  /**
   * Delete a single kind
   */
  deleteCatalogKind: (input: {
    /** Entity kind. */
    kind_id: string;
  }) => Promise<undefined>;

  /**
   * Get a list of entity relations
   */
  listCatalogRelation: (input: {
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Maximum number of relations in the response. */
    "page[limit]"?: number;
    "filter[type]"?: RelationType;
    /** Filter relations by the reference of the first entity in the relation. */
    "filter[from_ref]"?: string;
    /** Filter relations by the reference of the second entity in the relation. */
    "filter[to_ref]"?: string;
    include?: RelationIncludeType;
    /** If true, includes relationships discovered by APM and USM. */
    includeDiscovered?: boolean;
  }) => Promise<ListRelationCatalogResponse>;

  /**
   * Create a change request
   */
  createChangeRequest: (input: {
    data: ChangeRequestCreateData;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Get a change request
   */
  getChangeRequest: (input: {
    /** The identifier of the change request. */
    change_request_id: string;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Update a change request
   */
  updateChangeRequest: (input: {
    data: ChangeRequestUpdateData;
    included?: ChangeRequestUpdateIncluded;
    /** The identifier of the change request. */
    change_request_id: string;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Create a change request branch
   */
  createChangeRequestBranch: (input: {
    data: ChangeRequestBranchCreateData;
    /** The identifier of the change request. */
    change_request_id: string;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Delete a change request decision
   */
  deleteChangeRequestDecision: (input: {
    /** The identifier of the change request. */
    change_request_id: string;
    /** The identifier of the change request decision. */
    decision_id: string;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Update a change request decision
   */
  updateChangeRequestDecision: (input: {
    data: ChangeRequestDecisionUpdateData;
    included?: ChangeRequestUpdateIncluded;
    /** The identifier of the change request. */
    change_request_id: string;
    /** The identifier of the change request decision. */
    decision_id: string;
  }) => Promise<ChangeRequestResponse>;

  /**
   * Send pipeline event
   */
  createCiAppPipelineEvent: (input: {
    data?: CiAppCreatePipelineEventRequestDataSingleOrArray;
  }) => Promise<{ [key: string]: unknown }>;

  /**
   * Aggregate pipelines events
   */
  aggregateCiAppPipelineEvents: (input: {
    /** The list of metrics or timeseries to compute for the retrieved buckets. */
    compute?: (CiAppCompute)[];
    filter?: CiAppPipelinesQueryFilter;
    /** The rules for the group-by. */
    group_by?: (CiAppPipelinesGroupBy)[];
    options?: CiAppQueryOptions;
  }) => Promise<CiAppPipelinesAnalyticsAggregateResponse>;

  /**
   * Get a list of pipelines events
   */
  listCiAppPipelineEvents: (input: {
    /** Search query following log syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested events. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested events. */
    "filter[to]"?: string;
    sort?: CiAppSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of events in the response. */
    "page[limit]"?: number;
  }) => Promise<CiAppPipelineEventsResponse>;

  /**
   * Search pipelines events
   */
  searchCiAppPipelineEvents: (input: {
    filter?: CiAppPipelinesQueryFilter;
    options?: CiAppQueryOptions;
    page?: CiAppQueryPageOptions;
    sort?: CiAppSort;
  }) => Promise<CiAppPipelineEventsResponse>;

  /**
   * Delete Test Optimization service settings
   */
  deleteTestOptimizationServiceSettings: (input: {
    data: TestOptimizationDeleteServiceSettingsRequestData;
  }) => Promise<undefined>;

  /**
   * Update Test Optimization service settings
   */
  updateTestOptimizationServiceSettings: (input: {
    data: TestOptimizationUpdateServiceSettingsRequestData;
  }) => Promise<TestOptimizationServiceSettingsResponse>;

  /**
   * Get Test Optimization service settings
   */
  getTestOptimizationServiceSettings: (input: {
    data: TestOptimizationGetServiceSettingsRequestData;
  }) => Promise<TestOptimizationServiceSettingsResponse>;

  /**
   * Aggregate tests events
   */
  aggregateCiAppTestEvents: (input: {
    /** The list of metrics or timeseries to compute for the retrieved buckets. */
    compute?: (CiAppCompute)[];
    filter?: CiAppTestsQueryFilter;
    /** The rules for the group-by. */
    group_by?: (CiAppTestsGroupBy)[];
    options?: CiAppQueryOptions;
  }) => Promise<CiAppTestsAnalyticsAggregateResponse>;

  /**
   * Get a list of tests events
   */
  listCiAppTestEvents: (input: {
    /** Search query following log syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested events. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested events. */
    "filter[to]"?: string;
    sort?: CiAppSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of events in the response. */
    "page[limit]"?: number;
  }) => Promise<CiAppTestEventsResponse>;

  /**
   * Search tests events
   */
  searchCiAppTestEvents: (input: {
    filter?: CiAppTestsQueryFilter;
    options?: CiAppQueryOptions;
    page?: CiAppQueryPageOptions;
    sort?: CiAppSort;
  }) => Promise<CiAppTestEventsResponse>;

  /**
   * List AWS cloud authentication persona mappings
   */
  listAwsCloudAuthPersonaMappings: () => Promise<AwsCloudAuthPersonaMappingsResponse>;

  /**
   * Create an AWS cloud authentication persona mapping
   */
  createAwsCloudAuthPersonaMapping: (input: {
    data: AwsCloudAuthPersonaMappingCreateData;
  }) => Promise<AwsCloudAuthPersonaMappingResponse>;

  /**
   * Delete an AWS cloud authentication persona mapping
   */
  deleteAwsCloudAuthPersonaMapping: (input: {
    /** The ID of the persona mapping */
    persona_mapping_id: string;
  }) => Promise<undefined>;

  /**
   * Get an AWS cloud authentication persona mapping
   */
  getAwsCloudAuthPersonaMapping: (input: {
    /** The ID of the persona mapping */
    persona_mapping_id: string;
  }) => Promise<AwsCloudAuthPersonaMappingResponse>;

  /**
   * Create a custom framework
   */
  createCustomFramework: (input: {
    data: CustomFrameworkData;
  }) => Promise<CreateCustomFrameworkResponse>;

  /**
   * Delete a custom framework
   */
  deleteCustomFramework: (input: {
    /** The framework handle */
    handle: string;
    /** The framework version */
    version: string;
  }) => Promise<DeleteCustomFrameworkResponse>;

  /**
   * Get a custom framework
   */
  getCustomFramework: (input: {
    /** The framework handle */
    handle: string;
    /** The framework version */
    version: string;
  }) => Promise<GetCustomFrameworkResponse>;

  /**
   * Update a custom framework
   */
  updateCustomFramework: (input: {
    data: CustomFrameworkData;
    /** The framework handle */
    handle: string;
    /** The framework version */
    version: string;
  }) => Promise<UpdateCustomFrameworkResponse>;

  /**
   * List resource filters
   */
  getResourceEvaluationFilters: (input: {
    /** Filter resource filters by cloud provider (e.g. aws, gcp, azure). */
    cloud_provider?: string;
    /** Filter resource filters by cloud provider account ID. This parameter is only valid when provider is specified. */
    account_id?: string;
    /** Skip cache for resource filters. */
    skip_cache?: boolean;
  }) => Promise<GetResourceEvaluationFiltersResponse>;

  /**
   * Update resource filters
   */
  updateResourceEvaluationFilters: (input: {
    data: UpdateResourceEvaluationFiltersRequestData;
  }) => Promise<UpdateResourceEvaluationFiltersResponse>;

  /**
   * Get code coverage summary for a branch
   */
  getCodeCoverageBranchSummary: (input: {
    data: BranchCoverageSummaryRequestData;
  }) => Promise<CoverageSummaryResponse>;

  /**
   * Get code coverage summary for a commit
   */
  getCodeCoverageCommitSummary: (input: {
    data: CommitCoverageSummaryRequestData;
  }) => Promise<CoverageSummaryResponse>;

  /**
   * Get all Container Images
   */
  listContainerImages: (input: {
    /** Comma-separated list of tags to filter Container Images by. */
    "filter[tags]"?: string;
    /** Comma-separated list of tags to group Container Images by. */
    group_by?: string;
    /** Attribute to sort Container Images by. */
    sort?: string;
    /** Maximum number of results returned. */
    "page[size]"?: number;
    /** String to query the next page of results. This key is provided with each valid response from the API in `meta.pagination.next_cursor`. */
    "page[cursor]"?: string;
  }) => Promise<ContainerImagesResponse>;

  /**
   * Get All Containers
   */
  listContainers: (input: {
    /** Comma-separated list of tags to filter containers by. */
    "filter[tags]"?: string;
    /** Comma-separated list of tags to group containers by. */
    group_by?: string;
    /** Attribute to sort containers by. */
    sort?: string;
    /** Maximum number of results returned. */
    "page[size]"?: number;
    /** String to query the next page of results. This key is provided with each valid response from the API in `meta.pagination.next_cursor`. */
    "page[cursor]"?: string;
  }) => Promise<ContainersResponse>;

  /**
   * List custom allocation rules
   */
  listCustomAllocationRules: () => Promise<ArbitraryRuleResponseArray>;

  /**
   * Create custom allocation rule
   */
  createCustomAllocationRule: (input: {
    data?: ArbitraryCostUpsertRequestData;
  }) => Promise<ArbitraryRuleResponse>;

  /**
   * Reorder custom allocation rules
   */
  reorderCustomAllocationRules: (input: {
    /** The `ReorderRuleResourceArray` `data`. */
    data: (ReorderRuleResourceData)[];
  }) => Promise<undefined>;

  /**
   * Delete custom allocation rule
   */
  deleteCustomAllocationRule: (input: {
    /** The unique identifier of the custom allocation rule */
    rule_id: number;
  }) => Promise<undefined>;

  /**
   * Get custom allocation rule
   */
  getCustomAllocationRule: (input: {
    /** The unique identifier of the custom allocation rule */
    rule_id: number;
  }) => Promise<ArbitraryRuleResponse>;

  /**
   * Update custom allocation rule
   */
  updateCustomAllocationRule: (input: {
    data?: ArbitraryCostUpsertRequestData;
    /** The unique identifier of the custom allocation rule */
    rule_id: number;
  }) => Promise<ArbitraryRuleResponse>;

  /**
   * List Cloud Cost Management AWS CUR configs
   */
  listCostAwscurConfigs: () => Promise<AwsCurConfigsResponse>;

  /**
   * Create Cloud Cost Management AWS CUR config
   */
  createCostAwscurConfig: (input: {
    data: AwsCurConfigPostData;
  }) => Promise<AwsCurConfigResponse>;

  /**
   * Delete Cloud Cost Management AWS CUR config
   */
  deleteCostAwscurConfig: (input: {
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<undefined>;

  /**
   * Get cost AWS CUR config
   */
  getCostAwscurConfig: (input: {
    /** The unique identifier of the cloud account */
    cloud_account_id: number;
  }) => Promise<AwsCurConfigResponse>;

  /**
   * Update Cloud Cost Management AWS CUR config
   */
  updateCostAwscurConfig: (input: {
    data: AwsCurConfigPatchData;
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<AwsCurConfigsResponse>;

  /**
   * List Cloud Cost Management Azure configs
   */
  listCostAzureUcConfigs: () => Promise<AzureUcConfigsResponse>;

  /**
   * Create Cloud Cost Management Azure configs
   */
  createCostAzureUcConfigs: (input: {
    data: AzureUcConfigPostData;
  }) => Promise<AzureUcConfigPairsResponse>;

  /**
   * Delete Cloud Cost Management Azure config
   */
  deleteCostAzureUcConfig: (input: {
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<undefined>;

  /**
   * Get cost Azure UC config
   */
  getCostAzureUcConfig: (input: {
    /** The unique identifier of the cloud account */
    cloud_account_id: number;
  }) => Promise<UcConfigPair>;

  /**
   * Update Cloud Cost Management Azure config
   */
  updateCostAzureUcConfigs: (input: {
    data: AzureUcConfigPatchData;
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<AzureUcConfigPairsResponse>;

  /**
   * Create or update a budget
   */
  upsertBudget: (input: {
    data?: BudgetWithEntriesData;
  }) => Promise<BudgetWithEntries>;

  /**
   * Validate CSV budget
   */
  validateCsvBudget: () => Promise<ValidationResponse>;

  /**
   * Validate budget
   */
  validateBudget: (input: {
    data?: BudgetValidationRequestData;
  }) => Promise<BudgetValidationResponse>;

  /**
   * Delete budget
   */
  deleteBudget: (input: {
    /** Budget id. */
    budget_id: string;
  }) => Promise<undefined>;

  /**
   * Get budget
   */
  getBudget: (input: {
    /** Budget id. */
    budget_id: string;
  }) => Promise<BudgetWithEntries>;

  /**
   * List budgets
   */
  listBudgets: () => Promise<BudgetArray>;

  /**
   * List Custom Costs files
   */
  listCustomCostsFiles: (input: {
    /** Page number for pagination */
    "page[number]"?: number;
    /** Page size for pagination */
    "page[size]"?: number;
    /** Filter by file status */
    "filter[status]"?: string;
    /** Sort key with optional descending prefix */
    sort?: string;
  }) => Promise<CustomCostsFileListResponse>;

  /**
   * Upload Custom Costs file
   */
  uploadCustomCostsFile: (input: {
    body: CustomCostsFileUploadRequest;
  }) => Promise<CustomCostsFileUploadResponse>;

  /**
   * Delete Custom Costs file
   */
  deleteCustomCostsFile: (input: {
    /** File ID. */
    file_id: string;
  }) => Promise<undefined>;

  /**
   * Get Custom Costs file
   */
  getCustomCostsFile: (input: {
    /** File ID. */
    file_id: string;
  }) => Promise<CustomCostsFileGetResponse>;

  /**
   * List Google Cloud Usage Cost configs
   */
  listCostGcpUsageCostConfigs: () => Promise<GcpUsageCostConfigsResponse>;

  /**
   * Create Google Cloud Usage Cost config
   */
  createCostGcpUsageCostConfig: (input: {
    data: GcpUsageCostConfigPostData;
  }) => Promise<GcpUsageCostConfigResponse>;

  /**
   * Delete Google Cloud Usage Cost config
   */
  deleteCostGcpUsageCostConfig: (input: {
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<undefined>;

  /**
   * Get Google Cloud Usage Cost config
   */
  getCostGcpUsageCostConfig: (input: {
    /** The unique identifier of the cloud account */
    cloud_account_id: number;
  }) => Promise<GcpUcConfigResponse>;

  /**
   * Update Google Cloud Usage Cost config
   */
  updateCostGcpUsageCostConfig: (input: {
    data: GcpUsageCostConfigPatchData;
    /** Cloud Account id. */
    cloud_account_id: number;
  }) => Promise<GcpUsageCostConfigResponse>;

  /**
   * Get active billing dimensions for cost attribution
   */
  getActiveBillingDimensions: () => Promise<ActiveBillingDimensionsResponse>;

  /**
   * Get Monthly Cost Attribution
   */
  getMonthlyCostAttribution: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning in this month. */
    start_month: string;
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
    end_month?: string;
    /** Comma-separated list specifying cost types (e.g., `<billing_dimension>_on_demand_cost`, `<billing_dimension>_committed_cost`, `<billing_dimension>_total_cost`) and the proportions (`<billing_dimension>_percentage_in_org`, `<billing_dimension>_percentage_in_account`). Use `*` to retrieve all fields. Example: `infra_host_on_demand_cost,infra_host_percentage_in_account` To obtain the complete list of active billing dimensions that can be used to replace `<billing_dimension>` in the field names, make a request to the [Get active billing dimensions API](https://docs.datadoghq.com/api/latest/usage-metering/#get-active-billing-dimensions-for-cost-attribution). */
    fields: string;
    sort_direction?: SortDirection;
    /** The billing dimension to sort by. Always sorted by total cost. Example: `infra_host`. */
    sort_name?: string;
    /** Comma separated list of tag keys used to group cost. If no value is provided the cost will not be broken down by tags. To see which tags are available, look for the value of `tag_config_source` in the API response. */
    tag_breakdown_keys?: string;
    /** List following results with a next_record_id provided in the previous query. */
    next_record_id?: string;
    /** Include child org cost in the response. Defaults to `true`. */
    include_descendants?: boolean;
  }) => Promise<MonthlyCostAttributionResponse>;

  /**
   * Get all CSM Agents
   */
  listAllCsmAgents: (input: {
    /** The page index for pagination (zero-based). */
    page?: number;
    /** The number of items to include in a single page. */
    size?: number;
    /** A search query string to filter results (for example, `hostname:COMP-T2H4J27423`). */
    query?: string;
    order_direction?: OrderDirection;
  }) => Promise<CsmAgentsResponse>;

  /**
   * Get the CSM Cloud Accounts Coverage Analysis
   */
  getCsmCloudAccountsCoverageAnalysis: () => Promise<CsmCloudAccountsCoverageAnalysisResponse>;

  /**
   * Get the CSM Hosts and Containers Coverage Analysis
   */
  getCsmHostsAndContainersCoverageAnalysis: () => Promise<CsmHostsAndContainersCoverageAnalysisResponse>;

  /**
   * Get the CSM Serverless Coverage Analysis
   */
  getCsmServerlessCoverageAnalysis: () => Promise<CsmServerlessCoverageAnalysisResponse>;

  /**
   * Get all CSM Serverless Agents
   */
  listAllCsmServerlessAgents: (input: {
    /** The page index for pagination (zero-based). */
    page?: number;
    /** The number of items to include in a single page. */
    size?: number;
    /** A search query string to filter results (for example, `hostname:COMP-T2H4J27423`). */
    query?: string;
    order_direction?: OrderDirection;
  }) => Promise<CsmAgentsResponse>;

  /**
   * Get all application keys owned by current user
   */
  listCurrentUserApplicationKeys: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: ApplicationKeysSort;
    /** Filter application keys by the specified string. */
    filter?: string;
    /** Only include application keys created on or after the specified date. */
    "filter[created_at][start]"?: string;
    /** Only include application keys created on or before the specified date. */
    "filter[created_at][end]"?: string;
    /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
    include?: string;
  }) => Promise<ListApplicationKeysResponse>;

  /**
   * Create an application key for current user
   */
  createCurrentUserApplicationKey: (input: {
    data: ApplicationKeyCreateData;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Delete an application key owned by current user
   */
  deleteCurrentUserApplicationKey: (input: {
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<undefined>;

  /**
   * Get one application key owned by current user
   */
  getCurrentUserApplicationKey: (input: {
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Edit an application key owned by current user
   */
  updateCurrentUserApplicationKey: (input: {
    data: ApplicationKeyUpdateData;
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Delete items from a dashboard list
   */
  deleteDashboardListItems: (input: {
    /** List of dashboards to delete from the dashboard list. */
    dashboards?: (DashboardListItemRequest)[];
    /** ID of the dashboard list to delete items from. */
    dashboard_list_id: number;
  }) => Promise<DashboardListDeleteItemsResponse>;

  /**
   * Get items of a Dashboard List
   */
  getDashboardListItems: (input: {
    /** ID of the dashboard list to get items from. */
    dashboard_list_id: number;
  }) => Promise<DashboardListItems>;

  /**
   * Add Items to a Dashboard List
   */
  createDashboardListItems: (input: {
    /** List of dashboards to add the dashboard list. */
    dashboards?: (DashboardListItemRequest)[];
    /** ID of the dashboard list to add items to. */
    dashboard_list_id: number;
  }) => Promise<DashboardListAddItemsResponse>;

  /**
   * Update items of a dashboard list
   */
  updateDashboardListItems: (input: {
    /** List of dashboards to update the dashboard list to. */
    dashboards?: (DashboardListItemRequest)[];
    /** ID of the dashboard list to update items from. */
    dashboard_list_id: number;
  }) => Promise<DashboardListUpdateItemsResponse>;

  /**
   * Get all datasets
   */
  getAllDatasets: () => Promise<DatasetResponseMulti>;

  /**
   * Create a dataset
   */
  createDataset: (input: {
    data: DatasetRequest;
  }) => Promise<DatasetResponseSingle>;

  /**
   * Delete a dataset
   */
  deleteDataset: (input: {
    /** The ID of a defined dataset. */
    dataset_id: string;
  }) => Promise<undefined>;

  /**
   * Get a single dataset by ID
   */
  getDataset: (input: {
    /** The ID of a defined dataset. */
    dataset_id: string;
  }) => Promise<DatasetResponseSingle>;

  /**
   * Edit a dataset
   */
  updateDataset: (input: {
    data: DatasetRequest;
    /** The ID of a defined dataset. */
    dataset_id: string;
  }) => Promise<DatasetResponseSingle>;

  /**
   * Creates a data deletion request
   */
  createDataDeletionRequest: (input: {
    data: CreateDataDeletionRequestBodyData;
    /** Name of the product to be deleted, either `logs` or `rum`. */
    product: string;
  }) => Promise<CreateDataDeletionResponseBody>;

  /**
   * Gets a list of data deletion requests
   */
  getDataDeletionRequests: (input: {
    /** The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored. */
    next_page?: string;
    /** Retrieve only the requests related to the given product. */
    product?: string;
    /** Retrieve only the requests that matches the given query. */
    query?: string;
    /** Retrieve only the requests with the given status. */
    status?: string;
    /** Sets the page size of the search. */
    page_size?: number;
  }) => Promise<GetDataDeletionsResponseBody>;

  /**
   * Cancels a data deletion request
   */
  cancelDataDeletionRequest: (input: {
    /** ID of the deletion request. */
    id: string;
  }) => Promise<CancelDataDeletionResponseBody>;

  /**
   * Get all deployment gates
   */
  listDeploymentGates: (input: {
    /** Cursor for pagination. Use the `meta.page.next_cursor` value from the previous response. */
    "page[cursor]"?: string;
    /** Number of results per page. Defaults to 50. Must be between 1 and 1000. */
    "page[size]"?: number;
  }) => Promise<DeploymentGatesListResponse>;

  /**
   * Create deployment gate
   */
  createDeploymentGate: (input: {
    data: CreateDeploymentGateParamsData;
  }) => Promise<DeploymentGateResponse>;

  /**
   * Get rules for a deployment gate
   */
  getDeploymentGateRules: (input: {
    /** The ID of the deployment gate. */
    gate_id: string;
  }) => Promise<DeploymentGateRulesResponse>;

  /**
   * Create deployment rule
   */
  createDeploymentRule: (input: {
    data?: CreateDeploymentRuleParamsData;
    /** The ID of the deployment gate. */
    gate_id: string;
  }) => Promise<DeploymentRuleResponse>;

  /**
   * Delete deployment rule
   */
  deleteDeploymentRule: (input: {
    /** The ID of the deployment gate. */
    gate_id: string;
    /** The ID of the deployment rule. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get deployment rule
   */
  getDeploymentRule: (input: {
    /** The ID of the deployment gate. */
    gate_id: string;
    /** The ID of the deployment rule. */
    id: string;
  }) => Promise<DeploymentRuleResponse>;

  /**
   * Update deployment rule
   */
  updateDeploymentRule: (input: {
    data: UpdateDeploymentRuleParamsData;
    /** The ID of the deployment gate. */
    gate_id: string;
    /** The ID of the deployment rule. */
    id: string;
  }) => Promise<DeploymentRuleResponse>;

  /**
   * Delete deployment gate
   */
  deleteDeploymentGate: (input: {
    /** The ID of the deployment gate. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get deployment gate
   */
  getDeploymentGate: (input: {
    /** The ID of the deployment gate. */
    id: string;
  }) => Promise<DeploymentGateResponse>;

  /**
   * Update deployment gate
   */
  updateDeploymentGate: (input: {
    data: UpdateDeploymentGateParamsData;
    /** The ID of the deployment gate. */
    id: string;
  }) => Promise<DeploymentGateResponse>;

  /**
   * Trigger a deployment gate evaluation
   */
  triggerDeploymentGatesEvaluation: (input: {
    data: DeploymentGatesEvaluationRequestData;
  }) => Promise<DeploymentGatesEvaluationResponse>;

  /**
   * Get a deployment gate evaluation result
   */
  getDeploymentGatesEvaluationResult: (input: {
    /** The evaluation ID returned by the trigger endpoint. */
    id: string;
  }) => Promise<DeploymentGatesEvaluationResultResponse>;

  /**
   * Get Domain Allowlist
   */
  getDomainAllowlist: () => Promise<DomainAllowlistResponse>;

  /**
   * Sets Domain Allowlist
   */
  patchDomainAllowlist: (input: {
    data: DomainAllowlist;
  }) => Promise<DomainAllowlistResponse>;

  /**
   * Send a deployment event
   */
  createDoraDeployment: (input: {
    data: DoraDeploymentRequestData;
  }) => Promise<DoraDeploymentResponse>;

  /**
   * Delete a deployment event
   */
  deleteDoraDeployment: (input: {
    /** The ID of the deployment event to delete. */
    deployment_id: string;
  }) => Promise<undefined>;

  /**
   * Get a list of deployment events
   */
  listDoraDeployments: (input: {
    data: DoraListDeploymentsRequestData;
  }) => Promise<DoraDeploymentsListResponse>;

  /**
   * Get a deployment event
   */
  getDoraDeployment: (input: {
    /** The ID of the deployment event. */
    deployment_id: string;
  }) => Promise<DoraDeploymentFetchResponse>;

  /**
   * Patch a deployment event
   */
  patchDoraDeployment: (input: {
    data: DoraDeploymentPatchRequestData;
    /** The ID of the deployment event. */
    deployment_id: string;
  }) => Promise<undefined>;

  /**
   * Send an incident event
   */
  createDoraFailure: (input: {
    data: DoraFailureRequestData;
  }) => Promise<DoraFailureResponse>;

  /**
   * Delete an incident event
   */
  deleteDoraFailure: (input: {
    /** The ID of the incident event to delete. */
    failure_id: string;
  }) => Promise<undefined>;

  /**
   * Get a list of incident events
   */
  listDoraFailures: (input: {
    data: DoraListFailuresRequestData;
  }) => Promise<DoraFailuresListResponse>;

  /**
   * Get an incident event
   */
  getDoraFailure: (input: {
    /** The ID of the incident event. */
    failure_id: string;
  }) => Promise<DoraFailureFetchResponse>;

  /**
   * Send an incident event (legacy)
   */
  createDoraIncident: (input: {
    data: DoraFailureRequestData;
  }) => Promise<DoraFailureResponse>;

  /**
   * Get all downtimes
   */
  listDowntimes: (input: {
    /** Only return downtimes that are active when the request is made. */
    current_only?: boolean;
    /** Comma-separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `monitor`. */
    include?: string;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Maximum number of downtimes in the response. */
    "page[limit]"?: number;
  }) => Promise<ListDowntimesResponse>;

  /**
   * Schedule a downtime
   */
  createDowntime: (input: {
    data: DowntimeCreateRequestData;
  }) => Promise<DowntimeResponse>;

  /**
   * Cancel a downtime
   */
  cancelDowntime: (input: {
    /** ID of the downtime to cancel. */
    downtime_id: string;
  }) => Promise<undefined>;

  /**
   * Get a downtime
   */
  getDowntime: (input: {
    /** ID of the downtime to fetch. */
    downtime_id: string;
    /** Comma-separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `monitor`. */
    include?: string;
  }) => Promise<DowntimeResponse>;

  /**
   * Update a downtime
   */
  updateDowntime: (input: {
    data: DowntimeUpdateRequestData;
    /** ID of the downtime to update. */
    downtime_id: string;
  }) => Promise<DowntimeResponse>;

  /**
   * Search error tracking issues
   */
  searchIssues: (input: {
    data: IssuesSearchRequestData;
    /** Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`. */
    include?: (SearchIssuesIncludeQueryParameterItem)[];
  }) => Promise<IssuesSearchResponse>;

  /**
   * Get the details of an error tracking issue
   */
  getIssue: (input: {
    /** The identifier of the issue. */
    issue_id: string;
    /** Comma-separated list of relationship objects that should be included in the response. Possible values are `assignee`, `case`, and `team_owners`. */
    include?: (GetIssueIncludeQueryParameterItem)[];
  }) => Promise<IssueResponse>;

  /**
   * Remove the assignee of an issue
   */
  deleteIssueAssignee: (input: {
    /** The identifier of the issue. */
    issue_id: string;
  }) => Promise<undefined>;

  /**
   * Update the assignee of an issue
   */
  updateIssueAssignee: (input: {
    data: IssueUpdateAssigneeRequestData;
    /** The identifier of the issue. */
    issue_id: string;
  }) => Promise<IssueResponse>;

  /**
   * Update the state of an issue
   */
  updateIssueState: (input: {
    data: IssueUpdateStateRequestData;
    /** The identifier of the issue. */
    issue_id: string;
  }) => Promise<IssueResponse>;

  /**
   * Get a list of events
   */
  listEvents: (input: {
    /** Search query following events syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested events, in milliseconds. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested events, in milliseconds. */
    "filter[to]"?: string;
    sort?: EventsSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of events in the response. */
    "page[limit]"?: number;
  }) => Promise<EventsListResponse>;

  /**
   * Post an event
   */
  createEvent: (input: {
    data: EventCreateRequest;
  }) => Promise<EventCreateResponsePayload>;

  /**
   * Search events
   */
  searchEvents: (input: {
    filter?: EventsQueryFilter;
    options?: EventsQueryOptions;
    page?: EventsRequestPage;
    sort?: EventsSort;
  }) => Promise<EventsListResponse>;

  /**
   * Get an event
   */
  getEvent: (input: {
    /** The UID of the event. */
    event_id: string;
  }) => Promise<V2EventResponse>;

  /**
   * List feature flags
   */
  listFeatureFlags: (input: {
    /** Filter feature flags by key (partial matching). */
    key?: string;
    /** Filter by archived status. */
    is_archived?: boolean;
    /** Maximum number of results to return. */
    limit?: number;
    /** Number of results to skip. */
    offset?: number;
  }) => Promise<ListFeatureFlagsResponse>;

  /**
   * Create a feature flag
   */
  createFeatureFlag: (input: {
    data: CreateFeatureFlagData;
  }) => Promise<FeatureFlagResponse>;

  /**
   * List environments
   */
  listFeatureFlagsEnvironments: (input: {
    /** Filter environments by name (partial matching). */
    name?: string;
    /** Filter environments by key (partial matching). */
    key?: string;
    /** Maximum number of results to return. */
    limit?: number;
    /** Number of results to skip. */
    offset?: number;
  }) => Promise<ListEnvironmentsResponse>;

  /**
   * Create an environment
   */
  createFeatureFlagsEnvironment: (input: {
    data: CreateEnvironmentData;
  }) => Promise<EnvironmentResponse>;

  /**
   * Delete an environment
   */
  deleteFeatureFlagsEnvironment: (input: {
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<undefined>;

  /**
   * Get an environment
   */
  getFeatureFlagsEnvironment: (input: {
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<EnvironmentResponse>;

  /**
   * Update an environment
   */
  updateFeatureFlagsEnvironment: (input: {
    data: UpdateEnvironmentData;
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<EnvironmentResponse>;

  /**
   * Pause a progressive rollout
   */
  pauseExposureSchedule: (input: {
    /** The ID of the exposure schedule. */
    exposure_schedule_id: string;
  }) => Promise<AllocationExposureScheduleResponse>;

  /**
   * Resume a progressive rollout
   */
  resumeExposureSchedule: (input: {
    /** The ID of the exposure schedule. */
    exposure_schedule_id: string;
  }) => Promise<AllocationExposureScheduleResponse>;

  /**
   * Start a progressive rollout
   */
  startExposureSchedule: (input: {
    /** The ID of the exposure schedule. */
    exposure_schedule_id: string;
  }) => Promise<AllocationExposureScheduleResponse>;

  /**
   * Stop a progressive rollout
   */
  stopExposureSchedule: (input: {
    /** The ID of the exposure schedule. */
    exposure_schedule_id: string;
  }) => Promise<AllocationExposureScheduleResponse>;

  /**
   * Get a feature flag
   */
  getFeatureFlag: (input: {
    /** The ID of the feature flag. */
    feature_flag_id: string;
  }) => Promise<FeatureFlagResponse>;

  /**
   * Update a feature flag
   */
  updateFeatureFlag: (input: {
    data: UpdateFeatureFlagData;
    /** The ID of the feature flag. */
    feature_flag_id: string;
  }) => Promise<FeatureFlagResponse>;

  /**
   * Archive a feature flag
   */
  archiveFeatureFlag: (input: {
    /** The ID of the feature flag. */
    feature_flag_id: string;
  }) => Promise<FeatureFlagResponse>;

  /**
   * Create targeting rules for a flag env
   */
  createAllocationsForFeatureFlagInEnvironment: (input: {
    data: AllocationDataRequest;
    /** The ID of the feature flag. */
    feature_flag_id: string;
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<AllocationResponse>;

  /**
   * Update targeting rules for a flag
   */
  updateAllocationsForFeatureFlagInEnvironment: (input: {
    /** Targeting rules (allocations) to replace existing ones with. */
    data: (AllocationDataRequest)[];
    /** The ID of the feature flag. */
    feature_flag_id: string;
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<ListAllocationsResponse>;

  /**
   * Disable a feature flag in an environment
   */
  disableFeatureFlagEnvironment: (input: {
    /** The ID of the feature flag. */
    feature_flag_id: string;
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<undefined>;

  /**
   * Enable a feature flag in an environment
   */
  enableFeatureFlagEnvironment: (input: {
    /** The ID of the feature flag. */
    feature_flag_id: string;
    /** The ID of the environment. */
    environment_id: string;
  }) => Promise<undefined>;

  /**
   * Unarchive a feature flag
   */
  unarchiveFeatureFlag: (input: {
    /** The ID of the feature flag. */
    feature_flag_id: string;
  }) => Promise<FeatureFlagResponse>;

  /**
   * Get HAMR organization connection
   */
  getHamrOrgConnection: () => Promise<HamrOrgConnectionResponse>;

  /**
   * Create or update HAMR organization connection
   */
  createHamrOrgConnection: (input: {
    data: HamrOrgConnectionDataRequest;
  }) => Promise<HamrOrgConnectionResponse>;

  /**
   * Get a list of incidents
   */
  listIncidents: (input: {
    /** Specifies which types of related objects should be included in the response. */
    include?: (IncidentRelatedObject)[];
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
  }) => Promise<IncidentsResponse>;

  /**
   * Create an incident
   */
  createIncident: (input: {
    data: IncidentCreateData;
  }) => Promise<IncidentResponse>;

  /**
   * Delete global incident handle
   */
  deleteGlobalIncidentHandle: () => Promise<undefined>;

  /**
   * List global incident handles
   */
  listGlobalIncidentHandles: (input: {
    /** Comma-separated list of related resources to include in the response */
    include?: string;
  }) => Promise<IncidentHandlesResponse>;

  /**
   * Create global incident handle
   */
  createGlobalIncidentHandle: (input: {
    data: IncidentHandleDataRequest;
    /** Comma-separated list of related resources to include in the response */
    include?: string;
  }) => Promise<IncidentHandleResponse>;

  /**
   * Update global incident handle
   */
  updateGlobalIncidentHandle: (input: {
    data: IncidentHandleDataRequest;
    /** Comma-separated list of related resources to include in the response */
    include?: string;
  }) => Promise<IncidentHandleResponse>;

  /**
   * Get global incident settings
   */
  getGlobalIncidentSettings: () => Promise<GlobalIncidentSettingsResponse>;

  /**
   * Update global incident settings
   */
  updateGlobalIncidentSettings: (input: {
    data: GlobalIncidentSettingsDataRequest;
  }) => Promise<GlobalIncidentSettingsResponse>;

  /**
   * List incident notification rules
   */
  listIncidentNotificationRules: (input: {
    /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
    include?: string;
  }) => Promise<IncidentNotificationRuleArray>;

  /**
   * Create an incident notification rule
   */
  createIncidentNotificationRule: (input: {
    data: IncidentNotificationRuleCreateData;
  }) => Promise<IncidentNotificationRule>;

  /**
   * Delete an incident notification rule
   */
  deleteIncidentNotificationRule: (input: {
    /** The ID of the notification rule. */
    id: string;
    /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
    include?: string;
  }) => Promise<undefined>;

  /**
   * Get an incident notification rule
   */
  getIncidentNotificationRule: (input: {
    /** The ID of the notification rule. */
    id: string;
    /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
    include?: string;
  }) => Promise<IncidentNotificationRule>;

  /**
   * Update an incident notification rule
   */
  updateIncidentNotificationRule: (input: {
    data: IncidentNotificationRuleUpdateData;
    /** The ID of the notification rule. */
    id: string;
    /** Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template` */
    include?: string;
  }) => Promise<IncidentNotificationRule>;

  /**
   * List incident notification templates
   */
  listIncidentNotificationTemplates: (input: {
    /** Optional incident type ID filter. */
    "filter[incident-type]"?: string;
    /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
    include?: string;
  }) => Promise<IncidentNotificationTemplateArray>;

  /**
   * Create incident notification template
   */
  createIncidentNotificationTemplate: (input: {
    data: IncidentNotificationTemplateCreateData;
  }) => Promise<IncidentNotificationTemplate>;

  /**
   * Delete a notification template
   */
  deleteIncidentNotificationTemplate: (input: {
    /** The ID of the notification template. */
    id: string;
    /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
    include?: string;
  }) => Promise<undefined>;

  /**
   * Get incident notification template
   */
  getIncidentNotificationTemplate: (input: {
    /** The ID of the notification template. */
    id: string;
    /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
    include?: string;
  }) => Promise<IncidentNotificationTemplate>;

  /**
   * Update incident notification template
   */
  updateIncidentNotificationTemplate: (input: {
    data: IncidentNotificationTemplateUpdateData;
    /** The ID of the notification template. */
    id: string;
    /** Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type` */
    include?: string;
  }) => Promise<IncidentNotificationTemplate>;

  /**
   * List postmortem templates
   */
  listIncidentPostmortemTemplates: () => Promise<PostmortemTemplatesResponse>;

  /**
   * Create postmortem template
   */
  createIncidentPostmortemTemplate: (input: {
    data: PostmortemTemplateDataRequest;
  }) => Promise<PostmortemTemplateResponse>;

  /**
   * Delete postmortem template
   */
  deleteIncidentPostmortemTemplate: (input: {
    /** The ID of the postmortem template */
    template_id: string;
  }) => Promise<undefined>;

  /**
   * Get postmortem template
   */
  getIncidentPostmortemTemplate: (input: {
    /** The ID of the postmortem template */
    template_id: string;
  }) => Promise<PostmortemTemplateResponse>;

  /**
   * Update postmortem template
   */
  updateIncidentPostmortemTemplate: (input: {
    data: PostmortemTemplateDataRequest;
    /** The ID of the postmortem template */
    template_id: string;
  }) => Promise<PostmortemTemplateResponse>;

  /**
   * Get a list of incident types
   */
  listIncidentTypes: (input: {
    /** Include deleted incident types in the response. */
    include_deleted?: boolean;
  }) => Promise<IncidentTypeListResponse>;

  /**
   * Create an incident type
   */
  createIncidentType: (input: {
    data: IncidentTypeCreateData;
  }) => Promise<IncidentTypeResponse>;

  /**
   * Delete an incident type
   */
  deleteIncidentType: (input: {
    /** The UUID of the incident type. */
    incident_type_id: string;
  }) => Promise<undefined>;

  /**
   * Get incident type details
   */
  getIncidentType: (input: {
    /** The UUID of the incident type. */
    incident_type_id: string;
  }) => Promise<IncidentTypeResponse>;

  /**
   * Update an incident type
   */
  updateIncidentType: (input: {
    data: IncidentTypePatchData;
    /** The UUID of the incident type. */
    incident_type_id: string;
  }) => Promise<IncidentTypeResponse>;

  /**
   * Get a list of incident user-defined fields
   */
  listIncidentUserDefinedFields: (input: {
    /** The number of results to return per page. Must be between 0 and 1000. */
    "page[size]"?: number;
    /** The page number to retrieve, starting at 0. */
    "page[number]"?: number;
    /** When true, include soft-deleted fields in the response. */
    "include-deleted"?: boolean;
    /** Filter results to fields associated with the given incident type UUID. */
    "filter[incident-type]"?: string;
    /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
    include?: string;
  }) => Promise<IncidentUserDefinedFieldListResponse>;

  /**
   * Create an incident user-defined field
   */
  createIncidentUserDefinedField: (input: {
    data: IncidentUserDefinedFieldCreateData;
    /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
    include?: string;
  }) => Promise<IncidentUserDefinedFieldResponse>;

  /**
   * Delete an incident user-defined field
   */
  deleteIncidentUserDefinedField: (input: {
    /** The ID of the incident user-defined field. */
    field_id: string;
  }) => Promise<undefined>;

  /**
   * Get an incident user-defined field
   */
  getIncidentUserDefinedField: (input: {
    /** The ID of the incident user-defined field. */
    field_id: string;
    /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
    include?: string;
  }) => Promise<IncidentUserDefinedFieldResponse>;

  /**
   * Update an incident user-defined field
   */
  updateIncidentUserDefinedField: (input: {
    data: IncidentUserDefinedFieldUpdateData;
    /** The ID of the incident user-defined field. */
    field_id: string;
    /** Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type". */
    include?: string;
  }) => Promise<IncidentUserDefinedFieldResponse>;

  /**
   * Import an incident
   */
  importIncident: (input: {
    data: IncidentImportRequestData;
    /** Specifies which related object types to include in the response when importing an incident. */
    include?: (IncidentImportRelatedObject)[];
  }) => Promise<IncidentImportResponse>;

  /**
   * Search for incidents
   */
  searchIncidents: (input: {
    include?: IncidentRelatedObject;
    /** Specifies which incidents should be returned. The query can contain any number of incident facets joined by `ANDs`, along with multiple values for each of those facets joined by `OR`s. For example: `state:active AND severity:(SEV-2 OR SEV-1)`. */
    query: string;
    sort?: IncidentSearchSortOrder;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
  }) => Promise<IncidentSearchResponse>;

  /**
   * Delete an existing incident
   */
  deleteIncident: (input: {
    /** The UUID of the incident. */
    incident_id: string;
  }) => Promise<undefined>;

  /**
   * Get the details of an incident
   */
  getIncident: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** Specifies which types of related objects should be included in the response. */
    include?: (IncidentRelatedObject)[];
  }) => Promise<IncidentResponse>;

  /**
   * Update an existing incident
   */
  updateIncident: (input: {
    data: IncidentUpdateData;
    /** The UUID of the incident. */
    incident_id: string;
    /** Specifies which types of related objects should be included in the response. */
    include?: (IncidentRelatedObject)[];
  }) => Promise<IncidentResponse>;

  /**
   * List incident attachments
   */
  listIncidentAttachments: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** Filter attachments by type. Supported values are `1` (`postmortem`) and `2` (`link`). */
    "filter[attachment_type]"?: string;
    /** Resource to include in the response. Supported value: `last_modified_by_user`. */
    include?: string;
  }) => Promise<AttachmentArray>;

  /**
   * Create incident attachment
   */
  createIncidentAttachment: (input: {
    data?: CreateAttachmentRequestData;
    /** The UUID of the incident. */
    incident_id: string;
    /** Resource to include in the response. Supported value: `last_modified_by_user`. */
    include?: string;
  }) => Promise<Attachment>;

  /**
   * Create postmortem attachment
   */
  createIncidentPostmortemAttachment: (input: {
    data: PostmortemAttachmentRequestData;
    /** The ID of the incident */
    incident_id: string;
  }) => Promise<Attachment>;

  /**
   * Delete incident attachment
   */
  deleteIncidentAttachment: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The ID of the attachment. */
    attachment_id: string;
  }) => Promise<undefined>;

  /**
   * Update incident attachment
   */
  updateIncidentAttachment: (input: {
    data?: PatchAttachmentRequestData;
    /** The UUID of the incident. */
    incident_id: string;
    /** The ID of the attachment. */
    attachment_id: string;
    /** Resource to include in the response. Supported value: `last_modified_by_user`. */
    include?: string;
  }) => Promise<Attachment>;

  /**
   * List an incident's impacts
   */
  listIncidentImpacts: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** Specifies which related resources should be included in the response. */
    include?: (IncidentImpactRelatedObject)[];
  }) => Promise<IncidentImpactsResponse>;

  /**
   * Create an incident impact
   */
  createIncidentImpact: (input: {
    data: IncidentImpactCreateData;
    /** The UUID of the incident. */
    incident_id: string;
    /** Specifies which related resources should be included in the response. */
    include?: (IncidentImpactRelatedObject)[];
  }) => Promise<IncidentImpactResponse>;

  /**
   * Delete an incident impact
   */
  deleteIncidentImpact: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident impact. */
    impact_id: string;
  }) => Promise<undefined>;

  /**
   * Get a list of an incident's integration metadata
   */
  listIncidentIntegrations: (input: {
    /** The UUID of the incident. */
    incident_id: string;
  }) => Promise<IncidentIntegrationMetadataListResponse>;

  /**
   * Create an incident integration metadata
   */
  createIncidentIntegration: (input: {
    data: IncidentIntegrationMetadataCreateData;
    /** The UUID of the incident. */
    incident_id: string;
  }) => Promise<IncidentIntegrationMetadataResponse>;

  /**
   * Delete an incident integration metadata
   */
  deleteIncidentIntegration: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident integration metadata. */
    integration_metadata_id: string;
  }) => Promise<undefined>;

  /**
   * Get incident integration metadata details
   */
  getIncidentIntegration: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident integration metadata. */
    integration_metadata_id: string;
  }) => Promise<IncidentIntegrationMetadataResponse>;

  /**
   * Update an existing incident integration metadata
   */
  updateIncidentIntegration: (input: {
    data: IncidentIntegrationMetadataPatchData;
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident integration metadata. */
    integration_metadata_id: string;
  }) => Promise<IncidentIntegrationMetadataResponse>;

  /**
   * Get a list of an incident's todos
   */
  listIncidentTodos: (input: {
    /** The UUID of the incident. */
    incident_id: string;
  }) => Promise<IncidentTodoListResponse>;

  /**
   * Create an incident todo
   */
  createIncidentTodo: (input: {
    data: IncidentTodoCreateData;
    /** The UUID of the incident. */
    incident_id: string;
  }) => Promise<IncidentTodoResponse>;

  /**
   * Delete an incident todo
   */
  deleteIncidentTodo: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident todo. */
    todo_id: string;
  }) => Promise<undefined>;

  /**
   * Get incident todo details
   */
  getIncidentTodo: (input: {
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident todo. */
    todo_id: string;
  }) => Promise<IncidentTodoResponse>;

  /**
   * Update an incident todo
   */
  updateIncidentTodo: (input: {
    data: IncidentTodoPatchData;
    /** The UUID of the incident. */
    incident_id: string;
    /** The UUID of the incident todo. */
    todo_id: string;
  }) => Promise<IncidentTodoResponse>;

  /**
   * List all AWS integrations
   */
  listAwsAccounts: (input: {
    /** Optional query parameter to filter accounts by AWS Account ID. If not provided, all accounts are returned. */
    aws_account_id?: string;
  }) => Promise<AwsAccountsResponse>;

  /**
   * Create an AWS integration
   */
  createAwsAccount: (input: {
    data: AwsAccountCreateRequestData;
  }) => Promise<AwsAccountResponse>;

  /**
   * Delete an AWS integration
   */
  deleteAwsAccount: (input: {
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<undefined>;

  /**
   * Get an AWS integration by config ID
   */
  getAwsAccount: (input: {
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<AwsAccountResponse>;

  /**
   * Update an AWS integration
   */
  updateAwsAccount: (input: {
    data: AwsAccountUpdateRequestData;
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<AwsAccountResponse>;

  /**
   * Delete AWS CCM config
   */
  deleteAwsAccountCcmConfig: (input: {
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<undefined>;

  /**
   * Get AWS CCM config
   */
  getAwsAccountCcmConfig: (input: {
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<AwsCcmConfigResponse>;

  /**
   * Update AWS CCM config
   */
  updateAwsAccountCcmConfig: (input: {
    data: AwsCcmConfigRequestData;
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<AwsCcmConfigResponse>;

  /**
   * Create AWS CCM config
   */
  createAwsAccountCcmConfig: (input: {
    data: AwsCcmConfigRequestData;
    /** Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. */
    aws_account_config_id: string;
  }) => Promise<AwsCcmConfigResponse>;

  /**
   * List available namespaces
   */
  listAwsNamespaces: () => Promise<AwsNamespacesResponse>;

  /**
   * Delete an Amazon EventBridge source
   */
  deleteAwsEventBridgeSource: (input: {
    data: AwsEventBridgeDeleteRequestData;
  }) => Promise<AwsEventBridgeDeleteResponse>;

  /**
   * Get all Amazon EventBridge sources
   */
  listAwsEventBridgeSources: () => Promise<AwsEventBridgeListResponse>;

  /**
   * Create an Amazon EventBridge source
   */
  createAwsEventBridgeSource: (input: {
    data: AwsEventBridgeCreateRequestData;
  }) => Promise<AwsEventBridgeCreateResponse>;

  /**
   * Generate a new external ID
   */
  createNewAwsExternalId: () => Promise<AwsNewExternalIdResponse>;

  /**
   * Get AWS integration IAM permissions
   */
  getAwsIntegrationIamPermissions: () => Promise<AwsIntegrationIamPermissionsResponse>;

  /**
   * Get resource collection IAM permissions
   */
  getAwsIntegrationIamPermissionsResourceCollection: () => Promise<AwsIntegrationIamPermissionsResponse>;

  /**
   * Get AWS integration standard IAM permissions
   */
  getAwsIntegrationIamPermissionsStandard: () => Promise<AwsIntegrationIamPermissionsResponse>;

  /**
   * Get list of AWS log ready services
   */
  listAwsLogsServices: () => Promise<AwsLogsServicesResponse>;

  /**
   * List all GCP STS-enabled service accounts
   */
  listGcpstsAccounts: () => Promise<GcpstsServiceAccountsResponse>;

  /**
   * Create a new entry for your service account
   */
  createGcpstsAccount: (input: {
    data?: GcpstsServiceAccountData;
  }) => Promise<GcpstsServiceAccountResponse>;

  /**
   * Delete an STS enabled GCP Account
   */
  deleteGcpstsAccount: (input: {
    /** Your GCP STS enabled service account's unique ID. */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Update STS Service Account
   */
  updateGcpstsAccount: (input: {
    data?: GcpstsServiceAccountUpdateRequestData;
    /** Your GCP STS enabled service account's unique ID. */
    account_id: string;
  }) => Promise<GcpstsServiceAccountResponse>;

  /**
   * List delegate account
   */
  getGcpstsDelegate: () => Promise<GcpstsDelegateAccountResponse>;

  /**
   * Create a Datadog GCP principal
   */
  makeGcpstsDelegate: (input: {
    body?: { [key: string]: unknown };
  }) => Promise<GcpstsDelegateAccountResponse>;

  /**
   * Get space information by display name
   */
  getSpaceByDisplayName: (input: {
    /** The Google Chat domain name. */
    domain_name: string;
    /** The Google Chat space display name. */
    space_display_name: string;
  }) => Promise<GoogleChatAppNamedSpaceResponse>;

  /**
   * Get all organization handles
   */
  listOrganizationHandles: (input: {
    /** Your organization binding ID. */
    organization_binding_id: string;
  }) => Promise<GoogleChatOrganizationHandlesResponse>;

  /**
   * Create organization handle
   */
  createOrganizationHandle: (input: {
    data: GoogleChatCreateOrganizationHandleRequestData;
    type: GoogleChatOrganizationHandleType;
    /** Your organization binding ID. */
    organization_binding_id: string;
  }) => Promise<GoogleChatOrganizationHandleResponse>;

  /**
   * Delete organization handle
   */
  deleteOrganizationHandle: (input: {
    /** Your organization binding ID. */
    organization_binding_id: string;
    /** Your organization handle ID. */
    handle_id: string;
  }) => Promise<undefined>;

  /**
   * Get organization handle
   */
  getOrganizationHandle: (input: {
    /** Your organization binding ID. */
    organization_binding_id: string;
    /** Your organization handle ID. */
    handle_id: string;
  }) => Promise<GoogleChatOrganizationHandleResponse>;

  /**
   * Update organization handle
   */
  updateOrganizationHandle: (input: {
    data: GoogleChatUpdateOrganizationHandleRequestData;
    type: GoogleChatOrganizationHandleType;
    /** Your organization binding ID. */
    organization_binding_id: string;
    /** Your organization handle ID. */
    handle_id: string;
  }) => Promise<GoogleChatOrganizationHandleResponse>;

  /**
   * List Jira accounts
   */
  listJiraAccounts: () => Promise<JiraAccountsResponse>;

  /**
   * Delete Jira account
   */
  deleteJiraAccount: (input: {
    /** The ID of the Jira account to delete */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * List Jira issue templates
   */
  listJiraIssueTemplates: () => Promise<JiraIssueTemplatesResponse>;

  /**
   * Create Jira issue template
   */
  createJiraIssueTemplate: (input: {
    data?: JiraIssueTemplateCreateRequestData;
  }) => Promise<JiraIssueTemplateResponse>;

  /**
   * Delete Jira issue template
   */
  deleteJiraIssueTemplate: (input: {
    /** The ID of the Jira issue template to delete */
    issue_template_id: string;
  }) => Promise<undefined>;

  /**
   * Get Jira issue template
   */
  getJiraIssueTemplate: (input: {
    /** The ID of the Jira issue template to retrieve */
    issue_template_id: string;
  }) => Promise<JiraIssueTemplateResponse>;

  /**
   * Update Jira issue template
   */
  updateJiraIssueTemplate: (input: {
    data: JiraIssueTemplateUpdateRequestData;
    /** The ID of the Jira issue template to update */
    issue_template_id: string;
  }) => Promise<JiraIssueTemplateResponse>;

  /**
   * Get channel information by name
   */
  getChannelByName: (input: {
    /** Your tenant name. */
    tenant_name: string;
    /** Your team name. */
    team_name: string;
    /** Your channel name. */
    channel_name: string;
  }) => Promise<MicrosoftTeamsGetChannelByNameResponse>;

  /**
   * Get all tenant-based handles
   */
  listTenantBasedHandles: (input: {
    /** Your tenant id. */
    tenant_id?: string;
    /** Your tenant-based handle name. */
    name?: string;
  }) => Promise<MicrosoftTeamsTenantBasedHandlesResponse>;

  /**
   * Create tenant-based handle
   */
  createTenantBasedHandle: (input: {
    data: MicrosoftTeamsTenantBasedHandleRequestData;
  }) => Promise<MicrosoftTeamsTenantBasedHandleResponse>;

  /**
   * Delete tenant-based handle
   */
  deleteTenantBasedHandle: (input: {
    /** Your tenant-based handle id. */
    handle_id: string;
  }) => Promise<undefined>;

  /**
   * Get tenant-based handle information
   */
  getTenantBasedHandle: (input: {
    /** Your tenant-based handle id. */
    handle_id: string;
  }) => Promise<MicrosoftTeamsTenantBasedHandleResponse>;

  /**
   * Update tenant-based handle
   */
  updateTenantBasedHandle: (input: {
    data: MicrosoftTeamsUpdateTenantBasedHandleRequestData;
    /** Your tenant-based handle id. */
    handle_id: string;
  }) => Promise<MicrosoftTeamsTenantBasedHandleResponse>;

  /**
   * Get all Workflows webhook handles
   */
  listWorkflowsWebhookHandles: (input: {
    /** Your Workflows webhook handle name. */
    name?: string;
  }) => Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse>;

  /**
   * Create Workflows webhook handle
   */
  createWorkflowsWebhookHandle: (input: {
    data: MicrosoftTeamsWorkflowsWebhookHandleRequestData;
  }) => Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;

  /**
   * Delete Workflows webhook handle
   */
  deleteWorkflowsWebhookHandle: (input: {
    /** Your Workflows webhook handle id. */
    handle_id: string;
  }) => Promise<undefined>;

  /**
   * Get Workflows webhook handle information
   */
  getWorkflowsWebhookHandle: (input: {
    /** Your Workflows webhook handle id. */
    handle_id: string;
  }) => Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;

  /**
   * Update Workflows webhook handle
   */
  updateWorkflowsWebhookHandle: (input: {
    data: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData;
    /** Your Workflows webhook handle id. */
    handle_id: string;
  }) => Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;

  /**
   * List tenancy products
   */
  listTenancyProducts: (input: {
    /** Comma-separated list of product keys to filter by. */
    productKeys: string;
  }) => Promise<TenancyProductsList>;

  /**
   * Get tenancy configs
   */
  getTenancyConfigs: () => Promise<TenancyConfigList>;

  /**
   * Create tenancy config
   */
  createTenancyConfig: (input: {
    data: CreateTenancyConfigData;
  }) => Promise<TenancyConfig>;

  /**
   * Delete tenancy config
   */
  deleteTenancyConfig: (input: {
    /** The OCID of the tenancy config to delete. */
    tenancy_ocid: string;
  }) => Promise<undefined>;

  /**
   * Get tenancy config
   */
  getTenancyConfig: (input: {
    /** The OCID of the tenancy config to retrieve. */
    tenancy_ocid: string;
  }) => Promise<TenancyConfig>;

  /**
   * Update tenancy config
   */
  updateTenancyConfig: (input: {
    data: UpdateTenancyConfigData;
    /** The OCID of the tenancy config to update. */
    tenancy_ocid: string;
  }) => Promise<TenancyConfig>;

  /**
   * Get all service objects
   */
  listOpsgenieServices: () => Promise<OpsgenieServicesResponse>;

  /**
   * Create a new service object
   */
  createOpsgenieService: (input: {
    data: OpsgenieServiceCreateData;
  }) => Promise<OpsgenieServiceResponse>;

  /**
   * Delete a single service object
   */
  deleteOpsgenieService: (input: {
    /** The UUID of the service. */
    integration_service_id: string;
  }) => Promise<undefined>;

  /**
   * Get a single service object
   */
  getOpsgenieService: (input: {
    /** The UUID of the service. */
    integration_service_id: string;
  }) => Promise<OpsgenieServiceResponse>;

  /**
   * Update a single service object
   */
  updateOpsgenieService: (input: {
    data: OpsgenieServiceUpdateData;
    /** The UUID of the service. */
    integration_service_id: string;
  }) => Promise<OpsgenieServiceResponse>;

  /**
   * List ServiceNow assignment groups
   */
  listServiceNowAssignmentGroups: (input: {
    /** The ID of the ServiceNow instance */
    instance_id: string;
  }) => Promise<ServiceNowAssignmentGroupsResponse>;

  /**
   * List ServiceNow business services
   */
  listServiceNowBusinessServices: (input: {
    /** The ID of the ServiceNow instance */
    instance_id: string;
  }) => Promise<ServiceNowBusinessServicesResponse>;

  /**
   * List ServiceNow templates
   */
  listServiceNowTemplates: () => Promise<ServiceNowTemplatesResponse>;

  /**
   * Create ServiceNow template
   */
  createServiceNowTemplate: (input: {
    data: ServiceNowTemplateCreateRequestData;
  }) => Promise<ServiceNowTemplateResponse>;

  /**
   * Delete ServiceNow template
   */
  deleteServiceNowTemplate: (input: {
    /** The ID of the ServiceNow template to delete */
    template_id: string;
  }) => Promise<undefined>;

  /**
   * Get ServiceNow template
   */
  getServiceNowTemplate: (input: {
    /** The ID of the ServiceNow template to retrieve */
    template_id: string;
  }) => Promise<ServiceNowTemplateResponse>;

  /**
   * Update ServiceNow template
   */
  updateServiceNowTemplate: (input: {
    data: ServiceNowTemplateUpdateRequestData;
    /** The ID of the ServiceNow template to update */
    template_id: string;
  }) => Promise<ServiceNowTemplateResponse>;

  /**
   * List ServiceNow instances
   */
  listServiceNowInstances: () => Promise<ServiceNowInstancesResponse>;

  /**
   * List ServiceNow users
   */
  listServiceNowUsers: (input: {
    /** The ID of the ServiceNow instance */
    instance_id: string;
  }) => Promise<ServiceNowUsersResponse>;

  /**
   * List Integrations
   */
  listIntegrations: () => Promise<ListIntegrationsResponse>;

  /**
   * List Cloudflare accounts
   */
  listCloudflareAccounts: () => Promise<CloudflareAccountsResponse>;

  /**
   * Add Cloudflare account
   */
  createCloudflareAccount: (input: {
    data: CloudflareAccountCreateRequestData;
  }) => Promise<CloudflareAccountResponse>;

  /**
   * Delete Cloudflare account
   */
  deleteCloudflareAccount: (input: {
    /** None */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Get Cloudflare account
   */
  getCloudflareAccount: (input: {
    /** None */
    account_id: string;
  }) => Promise<CloudflareAccountResponse>;

  /**
   * Update Cloudflare account
   */
  updateCloudflareAccount: (input: {
    data: CloudflareAccountUpdateRequestData;
    /** None */
    account_id: string;
  }) => Promise<CloudflareAccountResponse>;

  /**
   * List Confluent accounts
   */
  listConfluentAccount: () => Promise<ConfluentAccountsResponse>;

  /**
   * Add Confluent account
   */
  createConfluentAccount: (input: {
    data: ConfluentAccountCreateRequestData;
  }) => Promise<ConfluentAccountResponse>;

  /**
   * Delete Confluent account
   */
  deleteConfluentAccount: (input: {
    /** Confluent Account ID. */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Get Confluent account
   */
  getConfluentAccount: (input: {
    /** Confluent Account ID. */
    account_id: string;
  }) => Promise<ConfluentAccountResponse>;

  /**
   * Update Confluent account
   */
  updateConfluentAccount: (input: {
    data: ConfluentAccountUpdateRequestData;
    /** Confluent Account ID. */
    account_id: string;
  }) => Promise<ConfluentAccountResponse>;

  /**
   * List Confluent Account resources
   */
  listConfluentResource: (input: {
    /** Confluent Account ID. */
    account_id: string;
  }) => Promise<ConfluentResourcesResponse>;

  /**
   * Add resource to Confluent account
   */
  createConfluentResource: (input: {
    data: ConfluentResourceRequestData;
    /** Confluent Account ID. */
    account_id: string;
  }) => Promise<ConfluentResourceResponse>;

  /**
   * Delete resource from Confluent account
   */
  deleteConfluentResource: (input: {
    /** Confluent Account ID. */
    account_id: string;
    /** Confluent Account Resource ID. */
    resource_id: string;
  }) => Promise<undefined>;

  /**
   * Get resource from Confluent account
   */
  getConfluentResource: (input: {
    /** Confluent Account ID. */
    account_id: string;
    /** Confluent Account Resource ID. */
    resource_id: string;
  }) => Promise<ConfluentResourceResponse>;

  /**
   * Update resource in Confluent account
   */
  updateConfluentResource: (input: {
    data: ConfluentResourceRequestData;
    /** Confluent Account ID. */
    account_id: string;
    /** Confluent Account Resource ID. */
    resource_id: string;
  }) => Promise<ConfluentResourceResponse>;

  /**
   * List Fastly accounts
   */
  listFastlyAccounts: () => Promise<FastlyAccountsResponse>;

  /**
   * Add Fastly account
   */
  createFastlyAccount: (input: {
    data: FastlyAccountCreateRequestData;
  }) => Promise<FastlyAccountResponse>;

  /**
   * Delete Fastly account
   */
  deleteFastlyAccount: (input: {
    /** Fastly Account id. */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Get Fastly account
   */
  getFastlyAccount: (input: {
    /** Fastly Account id. */
    account_id: string;
  }) => Promise<FastlyAccountResponse>;

  /**
   * Update Fastly account
   */
  updateFastlyAccount: (input: {
    data: FastlyAccountUpdateRequestData;
    /** Fastly Account id. */
    account_id: string;
  }) => Promise<FastlyAccountResponse>;

  /**
   * List Fastly services
   */
  listFastlyServices: (input: {
    /** Fastly Account id. */
    account_id: string;
  }) => Promise<FastlyServicesResponse>;

  /**
   * Add Fastly service
   */
  createFastlyService: (input: {
    data: FastlyServiceData;
    /** Fastly Account id. */
    account_id: string;
  }) => Promise<FastlyServiceResponse>;

  /**
   * Delete Fastly service
   */
  deleteFastlyService: (input: {
    /** Fastly Account id. */
    account_id: string;
    /** Fastly Service ID. */
    service_id: string;
  }) => Promise<undefined>;

  /**
   * Get Fastly service
   */
  getFastlyService: (input: {
    /** Fastly Account id. */
    account_id: string;
    /** Fastly Service ID. */
    service_id: string;
  }) => Promise<FastlyServiceResponse>;

  /**
   * Update Fastly service
   */
  updateFastlyService: (input: {
    data: FastlyServiceData;
    /** Fastly Account id. */
    account_id: string;
    /** Fastly Service ID. */
    service_id: string;
  }) => Promise<FastlyServiceResponse>;

  /**
   * List Okta accounts
   */
  listOktaAccounts: () => Promise<OktaAccountsResponse>;

  /**
   * Add Okta account
   */
  createOktaAccount: (input: {
    data: OktaAccount;
  }) => Promise<OktaAccountResponse>;

  /**
   * Delete Okta account
   */
  deleteOktaAccount: (input: {
    /** None */
    account_id: string;
  }) => Promise<undefined>;

  /**
   * Get Okta account
   */
  getOktaAccount: (input: {
    /** None */
    account_id: string;
  }) => Promise<OktaAccountResponse>;

  /**
   * Update Okta account
   */
  updateOktaAccount: (input: {
    data: OktaAccountUpdateRequestData;
    /** None */
    account_id: string;
  }) => Promise<OktaAccountResponse>;

  /**
   * Get IP Allowlist
   */
  getIpAllowlist: () => Promise<IpAllowlistResponse>;

  /**
   * Update IP Allowlist
   */
  updateIpAllowlist: (input: {
    data: IpAllowlistData;
  }) => Promise<IpAllowlistResponse>;

  /**
   * List LLM Observability experiments
   */
  listLlmObsExperiments: (input: {
    /** Filter experiments by project ID. Required if `filter[dataset_id]` is not provided. */
    "filter[project_id]"?: string;
    /** Filter experiments by dataset ID. */
    "filter[dataset_id]"?: string;
    /** Filter experiments by experiment ID. Can be specified multiple times. */
    "filter[id]"?: string;
    /** Use the Pagination cursor to retrieve the next page of results. */
    "page[cursor]"?: string;
    /** Maximum number of results to return per page. */
    "page[limit]"?: number;
  }) => Promise<LlmObsExperimentsResponse>;

  /**
   * Create an LLM Observability experiment
   */
  createLlmObsExperiment: (input: {
    data: LlmObsExperimentDataRequest;
  }) => Promise<LlmObsExperimentResponse>;

  /**
   * Delete LLM Observability experiments
   */
  deleteLlmObsExperiments: (input: {
    data: LlmObsDeleteExperimentsDataRequest;
  }) => Promise<undefined>;

  /**
   * Update an LLM Observability experiment
   */
  updateLlmObsExperiment: (input: {
    data: LlmObsExperimentUpdateDataRequest;
    /** The ID of the LLM Observability experiment. */
    experiment_id: string;
  }) => Promise<LlmObsExperimentResponse>;

  /**
   * Push events for an LLM Observability experiment
   */
  createLlmObsExperimentEvents: (input: {
    data: LlmObsExperimentEventsDataRequest;
    /** The ID of the LLM Observability experiment. */
    experiment_id: string;
  }) => Promise<undefined>;

  /**
   * List LLM Observability projects
   */
  listLlmObsProjects: (input: {
    /** Filter projects by project ID. */
    "filter[id]"?: string;
    /** Filter projects by name. */
    "filter[name]"?: string;
    /** Use the Pagination cursor to retrieve the next page of results. */
    "page[cursor]"?: string;
    /** Maximum number of results to return per page. */
    "page[limit]"?: number;
  }) => Promise<LlmObsProjectsResponse>;

  /**
   * Create an LLM Observability project
   */
  createLlmObsProject: (input: {
    data: LlmObsProjectDataRequest;
  }) => Promise<LlmObsProjectResponse>;

  /**
   * Delete LLM Observability projects
   */
  deleteLlmObsProjects: (input: {
    data: LlmObsDeleteProjectsDataRequest;
  }) => Promise<undefined>;

  /**
   * Update an LLM Observability project
   */
  updateLlmObsProject: (input: {
    data: LlmObsProjectUpdateDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
  }) => Promise<LlmObsProjectResponse>;

  /**
   * List LLM Observability datasets
   */
  listLlmObsDatasets: (input: {
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** Filter datasets by name. */
    "filter[name]"?: string;
    /** Filter datasets by dataset ID. */
    "filter[id]"?: string;
    /** Use the Pagination cursor to retrieve the next page of results. */
    "page[cursor]"?: string;
    /** Maximum number of results to return per page. */
    "page[limit]"?: number;
  }) => Promise<LlmObsDatasetsResponse>;

  /**
   * Create an LLM Observability dataset
   */
  createLlmObsDataset: (input: {
    data: LlmObsDatasetDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
  }) => Promise<LlmObsDatasetResponse>;

  /**
   * Delete LLM Observability datasets
   */
  deleteLlmObsDatasets: (input: {
    data: LlmObsDeleteDatasetsDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
  }) => Promise<undefined>;

  /**
   * Update an LLM Observability dataset
   */
  updateLlmObsDataset: (input: {
    data: LlmObsDatasetUpdateDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** The ID of the LLM Observability dataset. */
    dataset_id: string;
  }) => Promise<LlmObsDatasetResponse>;

  /**
   * List LLM Observability dataset records
   */
  listLlmObsDatasetRecords: (input: {
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** The ID of the LLM Observability dataset. */
    dataset_id: string;
    /** Retrieve records from a specific dataset version. Defaults to the current version. */
    "filter[version]"?: number;
    /** Use the Pagination cursor to retrieve the next page of results. */
    "page[cursor]"?: string;
    /** Maximum number of results to return per page. */
    "page[limit]"?: number;
  }) => Promise<LlmObsDatasetRecordsListResponse>;

  /**
   * Update LLM Observability dataset records
   */
  updateLlmObsDatasetRecords: (input: {
    data: LlmObsDatasetRecordsUpdateDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** The ID of the LLM Observability dataset. */
    dataset_id: string;
  }) => Promise<LlmObsDatasetRecordsMutationResponse>;

  /**
   * Append records to an LLM Observability dataset
   */
  createLlmObsDatasetRecords: (input: {
    data: LlmObsDatasetRecordsDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** The ID of the LLM Observability dataset. */
    dataset_id: string;
  }) => Promise<LlmObsDatasetRecordsMutationResponse>;

  /**
   * Delete LLM Observability dataset records
   */
  deleteLlmObsDatasetRecords: (input: {
    data: LlmObsDeleteDatasetRecordsDataRequest;
    /** The ID of the LLM Observability project. */
    project_id: string;
    /** The ID of the LLM Observability dataset. */
    dataset_id: string;
  }) => Promise<undefined>;

  /**
   * Send logs
   */
  submitLog: (input: {
    body: HttpLog;
    /** Log tags can be passed as query parameters with `text/plain` content type. */
    ddtags?: string;
  }, options?: { headers?: { "Content-Encoding"?: "identity" | "gzip" | "deflate" } }) => Promise<{ [key: string]: unknown }>;

  /**
   * Aggregate events
   */
  aggregateLogs: (input: {
    /** The list of metrics or timeseries to compute for the retrieved buckets. */
    compute?: (LogsCompute)[];
    filter?: LogsQueryFilter;
    /** The rules for the group by */
    group_by?: (LogsGroupBy)[];
    options?: LogsQueryOptions;
    page?: LogsAggregateRequestPage;
  }) => Promise<LogsAggregateResponse>;

  /**
   * Get archive order
   */
  getLogsArchiveOrder: () => Promise<LogsArchiveOrder>;

  /**
   * Update archive order
   */
  updateLogsArchiveOrder: (input: {
    data?: LogsArchiveOrderDefinition;
  }) => Promise<LogsArchiveOrder>;

  /**
   * Get all archives
   */
  listLogsArchives: () => Promise<LogsArchives>;

  /**
   * Create an archive
   */
  createLogsArchive: (input: {
    data?: LogsArchiveCreateRequestDefinition;
  }) => Promise<LogsArchive>;

  /**
   * Delete an archive
   */
  deleteLogsArchive: (input: {
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<undefined>;

  /**
   * Get an archive
   */
  getLogsArchive: (input: {
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<LogsArchive>;

  /**
   * Update an archive
   */
  updateLogsArchive: (input: {
    data?: LogsArchiveCreateRequestDefinition;
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<LogsArchive>;

  /**
   * Revoke role from an archive
   */
  removeRoleFromArchive: (input: {
    data?: RelationshipToRoleData;
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<undefined>;

  /**
   * List read roles for an archive
   */
  listArchiveReadRoles: (input: {
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<RolesResponse>;

  /**
   * Grant role to an archive
   */
  addReadRoleToArchive: (input: {
    data?: RelationshipToRoleData;
    /** The ID of the archive. */
    archive_id: string;
  }) => Promise<undefined>;

  /**
   * Get all custom destinations
   */
  listLogsCustomDestinations: () => Promise<CustomDestinationsResponse>;

  /**
   * Create a custom destination
   */
  createLogsCustomDestination: (input: {
    data?: CustomDestinationCreateRequestDefinition;
  }) => Promise<CustomDestinationResponse>;

  /**
   * Delete a custom destination
   */
  deleteLogsCustomDestination: (input: {
    /** The ID of the custom destination. */
    custom_destination_id: string;
  }) => Promise<undefined>;

  /**
   * Get a custom destination
   */
  getLogsCustomDestination: (input: {
    /** The ID of the custom destination. */
    custom_destination_id: string;
  }) => Promise<CustomDestinationResponse>;

  /**
   * Update a custom destination
   */
  updateLogsCustomDestination: (input: {
    data?: CustomDestinationUpdateRequestDefinition;
    /** The ID of the custom destination. */
    custom_destination_id: string;
  }) => Promise<CustomDestinationResponse>;

  /**
   * Get all log-based metrics
   */
  listLogsMetrics: () => Promise<LogsMetricsResponse>;

  /**
   * Create a log-based metric
   */
  createLogsMetric: (input: {
    data: LogsMetricCreateData;
  }) => Promise<LogsMetricResponse>;

  /**
   * Delete a log-based metric
   */
  deleteLogsMetric: (input: {
    /** The name of the log-based metric. */
    metric_id: string;
  }) => Promise<undefined>;

  /**
   * Get a log-based metric
   */
  getLogsMetric: (input: {
    /** The name of the log-based metric. */
    metric_id: string;
  }) => Promise<LogsMetricResponse>;

  /**
   * Update a log-based metric
   */
  updateLogsMetric: (input: {
    data: LogsMetricUpdateData;
    /** The name of the log-based metric. */
    metric_id: string;
  }) => Promise<LogsMetricResponse>;

  /**
   * List restriction queries
   */
  listRestrictionQueries: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<RestrictionQueryListResponse>;

  /**
   * Create a restriction query
   */
  createRestrictionQuery: (input: {
    data?: RestrictionQueryCreateData;
  }) => Promise<RestrictionQueryWithoutRelationshipsResponse>;

  /**
   * Get restriction query for a given role
   */
  getRoleRestrictionQuery: (input: {
    /** The ID of the role. */
    role_id: string;
  }) => Promise<RestrictionQueryListResponse>;

  /**
   * Get all restriction queries for a given user
   */
  listUserRestrictionQueries: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<RestrictionQueryListResponse>;

  /**
   * Delete a restriction query
   */
  deleteRestrictionQuery: (input: {
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<undefined>;

  /**
   * Get a restriction query
   */
  getRestrictionQuery: (input: {
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<RestrictionQueryWithRelationshipsResponse>;

  /**
   * Update a restriction query
   */
  updateRestrictionQuery: (input: {
    data?: RestrictionQueryUpdateData;
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<RestrictionQueryWithoutRelationshipsResponse>;

  /**
   * Replace a restriction query
   */
  replaceRestrictionQuery: (input: {
    data?: RestrictionQueryUpdateData;
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<RestrictionQueryWithoutRelationshipsResponse>;

  /**
   * Revoke role from a restriction query
   */
  removeRoleFromRestrictionQuery: (input: {
    data?: RelationshipToRoleData;
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<undefined>;

  /**
   * List roles for a restriction query
   */
  listRestrictionQueryRoles: (input: {
    /** The ID of the restriction query. */
    restriction_query_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<RestrictionQueryRolesResponse>;

  /**
   * Grant role to a restriction query
   */
  addRoleToRestrictionQuery: (input: {
    data?: RelationshipToRoleData;
    /** The ID of the restriction query. */
    restriction_query_id: string;
  }) => Promise<undefined>;

  /**
   * Search logs (GET)
   */
  listLogsGet: (input: {
    /** Search query following logs syntax. */
    "filter[query]"?: string;
    /** For customers with multiple indexes, the indexes to search. Defaults to '*' which means all indexes */
    "filter[indexes]"?: (string)[];
    /** Minimum timestamp for requested logs. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested logs. */
    "filter[to]"?: string;
    "filter[storage_tier]"?: LogsStorageTier;
    sort?: LogsSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of logs in the response. */
    "page[limit]"?: number;
  }) => Promise<LogsListResponse>;

  /**
   * Search logs (POST)
   */
  listLogs: (input: {
    filter?: LogsQueryFilter;
    options?: LogsQueryOptions;
    page?: LogsListRequestPage;
    sort?: LogsSort;
  }) => Promise<LogsListResponse>;

  /**
   * Get a list of metrics
   */
  listTagConfigurations: (input: {
    /** Only return custom metrics that have been configured with Metrics Without Limits. */
    "filter[configured]"?: boolean;
    /** Only return metrics that have the given tag key(s) in their Metrics Without Limits configuration (included or excluded). */
    "filter[tags_configured]"?: string;
    "filter[metric_type]"?: MetricTagConfigurationMetricTypeCategory;
    /** Only return distribution metrics that have percentile aggregations enabled (true) or disabled (false). */
    "filter[include_percentiles]"?: boolean;
    /** Only return metrics that have been queried (true) or not queried (false) in the look back window. Set the window with `filter[queried][window][seconds]`; if omitted, a default window is used. */
    "filter[queried]"?: boolean;
    /** Only return metrics that have been queried or not queried in the specified window. Dependent on being sent with `filter[queried]`. The default value is 2,592,000 seconds (30 days), the maximum value is 15,552,000 seconds (180 days), and the minimum value is 1 second. */
    "filter[queried][window][seconds]"?: number;
    /** Only return metrics that were submitted with tags matching this expression. You can use AND, OR, IN, and wildcards (for example, service:web*). */
    "filter[tags]"?: string;
    /** Only return metrics that are used in at least one dashboard, monitor, notebook, or SLO. */
    "filter[related_assets]"?: boolean;
    /** Only return metrics that have been actively reporting in the specified window. The default value is 3600 seconds (1 hour), the maximum value is 2,592,000 seconds (30 days), and the minimum value is 1 second. */
    "window[seconds]"?: number;
    /** Maximum number of results per page. Use with `page[cursor]` for pagination. The default value is 10000, the maximum value is 10000, and the minimum value is 1. */
    "page[size]"?: number;
    /** Cursor for pagination. Use `page[size]` to opt-in to pagination and get the first page; for subsequent pages, use the value from `meta.pagination.next_cursor` in the response. Pagination is complete when `next_cursor` is null. */
    "page[cursor]"?: string;
  }) => Promise<MetricsAndMetricTagConfigurationsResponse>;

  /**
   * Delete tags for multiple metrics
   */
  deleteBulkTagsMetricsConfiguration: (input: {
    data: MetricBulkTagConfigDelete;
  }) => Promise<MetricBulkTagConfigResponse>;

  /**
   * Configure tags for multiple metrics
   */
  createBulkTagsMetricsConfiguration: (input: {
    data: MetricBulkTagConfigCreate;
  }) => Promise<MetricBulkTagConfigResponse>;

  /**
   * List active tags and aggregations
   */
  listActiveMetricConfigurations: (input: {
    /** The name of the metric. */
    metric_name: string;
    /** The number of seconds of look back (from now). Default value is 604,800 (1 week), minimum value is 7200 (2 hours), maximum value is 2,630,000 (1 month). */
    "window[seconds]"?: number;
  }) => Promise<MetricSuggestedTagsAndAggregationsResponse>;

  /**
   * List tags by metric name
   */
  listTagsByMetricName: (input: {
    /** The name of the metric. */
    metric_name: string;
    /** The number of seconds of look back (from now) to query for tag data. Default value is 14400 (4 hours), minimum value is 14400 (4 hours). */
    "window[seconds]"?: number;
    /** Filter results to tags from data points that have the specified tags. For example, `filter[tags]=env:staging,host:123` returns tags only from data points with both `env:staging` and `host:123`. */
    "filter[tags]"?: string;
    /** Filter returned tags to those matching a substring. For example, `filter[match]=env` returns tags like `env:prod`, `environment:staging`, etc. */
    "filter[match]"?: string;
    /** Whether to include tag values in the response. Defaults to true. */
    "filter[include_tag_values]"?: boolean;
    /** Whether to allow partial results. Defaults to false. */
    "filter[allow_partial]"?: boolean;
    /** Maximum number of results to return. */
    "page[limit]"?: number;
  }) => Promise<MetricAllTagsResponse>;

  /**
   * Related Assets to a Metric
   */
  listMetricAssets: (input: {
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricAssetsResponse>;

  /**
   * Tag Configuration Cardinality Estimator
   */
  estimateMetricsOutputSeries: (input: {
    /** The name of the metric. */
    metric_name: string;
    /** Filtered tag keys that the metric is configured to query with. */
    "filter[groups]"?: string;
    /** The number of hours of look back (from now) to estimate cardinality with. If unspecified, it defaults to 0 hours. */
    "filter[hours_ago]"?: number;
    /** Deprecated. Number of aggregations has no impact on volume. */
    "filter[num_aggregations]"?: number;
    /** A boolean, for distribution metrics only, to estimate cardinality if the metric includes additional percentile aggregators. */
    "filter[pct]"?: boolean;
    /** A window, in hours, from the look back to estimate cardinality with. The minimum and default is 1 hour. */
    "filter[timespan_h]"?: number;
  }) => Promise<MetricEstimateResponse>;

  /**
   * Get tag key cardinality details
   */
  getMetricTagCardinalityDetails: (input: {
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricTagCardinalitiesResponse>;

  /**
   * Delete a tag configuration
   */
  deleteTagConfiguration: (input: {
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<undefined>;

  /**
   * List tag configuration by name
   */
  listTagConfigurationByName: (input: {
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricTagConfigurationResponse>;

  /**
   * Update a tag configuration
   */
  updateTagConfiguration: (input: {
    data: MetricTagConfigurationUpdateData;
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricTagConfigurationResponse>;

  /**
   * Create a tag configuration
   */
  createTagConfiguration: (input: {
    data: MetricTagConfigurationCreateData;
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricTagConfigurationResponse>;

  /**
   * List distinct metric volumes by metric name
   */
  listVolumesByMetricName: (input: {
    /** The name of the metric. */
    metric_name: string;
  }) => Promise<MetricVolumesResponse>;

  /**
   * Get all monitor notification rules
   */
  getMonitorNotificationRules: (input: {
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
  }) => Promise<MonitorNotificationRuleListResponse>;

  /**
   * Create a monitor notification rule
   */
  createMonitorNotificationRule: (input: {
    data: MonitorNotificationRuleCreateRequestData;
  }) => Promise<MonitorNotificationRuleResponse>;

  /**
   * Delete a monitor notification rule
   */
  deleteMonitorNotificationRule: (input: {
    /** ID of the monitor notification rule to delete. */
    rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get a monitor notification rule
   */
  getMonitorNotificationRule: (input: {
    /** ID of the monitor notification rule to fetch. */
    rule_id: string;
    /** Comma-separated list of resource paths for related resources to include in the response. Supported resource path is `created_by`. */
    include?: string;
  }) => Promise<MonitorNotificationRuleResponse>;

  /**
   * Update a monitor notification rule
   */
  updateMonitorNotificationRule: (input: {
    data: MonitorNotificationRuleUpdateRequestData;
    /** ID of the monitor notification rule to update. */
    rule_id: string;
  }) => Promise<MonitorNotificationRuleResponse>;

  /**
   * Get all monitor configuration policies
   */
  listMonitorConfigPolicies: () => Promise<MonitorConfigPolicyListResponse>;

  /**
   * Create a monitor configuration policy
   */
  createMonitorConfigPolicy: (input: {
    data: MonitorConfigPolicyCreateData;
  }) => Promise<MonitorConfigPolicyResponse>;

  /**
   * Delete a monitor configuration policy
   */
  deleteMonitorConfigPolicy: (input: {
    /** ID of the monitor configuration policy. */
    policy_id: string;
  }) => Promise<undefined>;

  /**
   * Get a monitor configuration policy
   */
  getMonitorConfigPolicy: (input: {
    /** ID of the monitor configuration policy. */
    policy_id: string;
  }) => Promise<MonitorConfigPolicyResponse>;

  /**
   * Edit a monitor configuration policy
   */
  updateMonitorConfigPolicy: (input: {
    data: MonitorConfigPolicyEditData;
    /** ID of the monitor configuration policy. */
    policy_id: string;
  }) => Promise<MonitorConfigPolicyResponse>;

  /**
   * Get all monitor user templates
   */
  listMonitorUserTemplates: () => Promise<MonitorUserTemplateListResponse>;

  /**
   * Create a monitor user template
   */
  createMonitorUserTemplate: (input: {
    data: MonitorUserTemplateCreateData;
  }) => Promise<MonitorUserTemplateCreateResponse>;

  /**
   * Validate a monitor user template
   */
  validateMonitorUserTemplate: (input: {
    data: MonitorUserTemplateCreateData;
  }) => Promise<undefined>;

  /**
   * Delete a monitor user template
   */
  deleteMonitorUserTemplate: (input: {
    /** ID of the monitor user template. */
    template_id: string;
  }) => Promise<undefined>;

  /**
   * Get a monitor user template
   */
  getMonitorUserTemplate: (input: {
    /** ID of the monitor user template. */
    template_id: string;
    /** Whether to include all versions of the template in the response in the versions field. */
    with_all_versions?: boolean;
  }) => Promise<MonitorUserTemplateResponse>;

  /**
   * Update a monitor user template to a new version
   */
  updateMonitorUserTemplate: (input: {
    data: MonitorUserTemplateUpdateData;
    /** ID of the monitor user template. */
    template_id: string;
  }) => Promise<MonitorUserTemplateResponse>;

  /**
   * Validate an existing monitor user template
   */
  validateExistingMonitorUserTemplate: (input: {
    data: MonitorUserTemplateUpdateData;
    /** ID of the monitor user template. */
    template_id: string;
  }) => Promise<undefined>;

  /**
   * Get active downtimes for a monitor
   */
  listMonitorDowntimes: (input: {
    /** The id of the monitor. */
    monitor_id: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Maximum number of downtimes in the response. */
    "page[limit]"?: number;
  }) => Promise<MonitorDowntimeMatchResponse>;

  /**
   * Get the list of devices
   */
  listDevices: (input: {
    /** Size for a given page. The maximum allowed value is 500. Defaults to 50. */
    "page[size]"?: number;
    /** Specific page number to return. Defaults to 0. */
    "page[number]"?: number;
    /** The field to sort the devices by. Defaults to `name`. */
    sort?: string;
    /** Filter devices by tag. */
    "filter[tag]"?: string;
  }) => Promise<ListDevicesResponse>;

  /**
   * Get the device details
   */
  getDevice: (input: {
    /** The id of the device to fetch. */
    device_id: string;
  }) => Promise<GetDeviceResponse>;

  /**
   * Get the list of interfaces of the device
   */
  getInterfaces: (input: {
    /** The ID of the device to get interfaces from. */
    device_id: string;
    /** Whether to get the IP addresses of the interfaces. */
    get_ip_addresses?: boolean;
  }) => Promise<GetInterfacesResponse>;

  /**
   * Get the list of tags for a device
   */
  listDeviceUserTags: (input: {
    /** The id of the device to fetch tags for. */
    device_id: string;
  }) => Promise<ListTagsResponse>;

  /**
   * Update the tags for a device
   */
  updateDeviceUserTags: (input: {
    data?: ListTagsResponseData;
    /** The id of the device to update tags for. */
    device_id: string;
  }) => Promise<ListTagsResponse>;

  /**
   * List tags for an interface
   */
  listInterfaceUserTags: (input: {
    /** The ID of the interface for which to retrieve tags. */
    interface_id: string;
  }) => Promise<ListInterfaceTagsResponse>;

  /**
   * Update the tags for an interface
   */
  updateInterfaceUserTags: (input: {
    data?: ListInterfaceTagsResponseData;
    /** The ID of the interface for which to update tags. */
    interface_id: string;
  }) => Promise<ListInterfaceTagsResponse>;

  /**
   * Get all aggregated connections
   */
  getAggregatedConnections: (input: {
    /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
    from?: number;
    /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
    to?: number;
    /** Comma-separated list of fields to group connections by. The maximum number of group_by(s) is 10. */
    group_by?: string;
    /** Comma-separated list of tags to filter connections by. */
    tags?: string;
    /** The number of connections to be returned. The maximum value is 7500. The default is 100. */
    limit?: number;
  }) => Promise<SingleAggregatedConnectionResponseArray>;

  /**
   * Get all aggregated DNS traffic
   */
  getAggregatedDns: (input: {
    /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
    from?: number;
    /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
    to?: number;
    /** Comma-separated list of fields to group DNS traffic by. The server side defaults to `network.dns_query` if unspecified. `server_ungrouped` may be used if groups are not desired. The maximum number of group_by(s) is 10. */
    group_by?: string;
    /** Comma-separated list of tags to filter DNS traffic by. */
    tags?: string;
    /** The number of aggregated DNS entries to be returned. The maximum value is 7500. The default is 100. */
    limit?: number;
  }) => Promise<SingleAggregatedDnsResponseArray>;

  /**
   * List pipelines
   */
  listPipelines: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<ListPipelinesResponse>;

  /**
   * Create a new pipeline
   */
  createPipeline: (input: {
    data: ObservabilityPipelineSpecData;
  }) => Promise<ObservabilityPipeline>;

  /**
   * Validate an observability pipeline
   */
  validatePipeline: (input: {
    data: ObservabilityPipelineSpecData;
  }) => Promise<ValidationResponse>;

  /**
   * Delete a pipeline
   */
  deletePipeline: (input: {
    /** The ID of the pipeline to delete. */
    pipeline_id: string;
  }) => Promise<undefined>;

  /**
   * Get a specific pipeline
   */
  getPipeline: (input: {
    /** The ID of the pipeline to retrieve. */
    pipeline_id: string;
  }) => Promise<ObservabilityPipeline>;

  /**
   * Update a pipeline
   */
  updatePipeline: (input: {
    data: ObservabilityPipelineData;
    /** The ID of the pipeline to update. */
    pipeline_id: string;
  }) => Promise<ObservabilityPipeline>;

  /**
   * Create On-Call escalation policy
   */
  createOnCallEscalationPolicy: (input: {
    data: EscalationPolicyCreateRequestData;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
    include?: string;
  }) => Promise<EscalationPolicy>;

  /**
   * Delete On-Call escalation policy
   */
  deleteOnCallEscalationPolicy: (input: {
    /** The ID of the escalation policy */
    policy_id: string;
  }) => Promise<undefined>;

  /**
   * Get On-Call escalation policy
   */
  getOnCallEscalationPolicy: (input: {
    /** The ID of the escalation policy */
    policy_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
    include?: string;
  }) => Promise<EscalationPolicy>;

  /**
   * Update On-Call escalation policy
   */
  updateOnCallEscalationPolicy: (input: {
    data: EscalationPolicyUpdateRequestData;
    /** The ID of the escalation policy */
    policy_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`. */
    include?: string;
  }) => Promise<EscalationPolicy>;

  /**
   * Create On-Call Page
   */
  createOnCallPage: (input: {
    data?: CreatePageRequestData;
  }) => Promise<CreatePageResponse>;

  /**
   * Acknowledge On-Call Page
   */
  acknowledgeOnCallPage: (input: {
    /** The page ID. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Escalate On-Call Page
   */
  escalateOnCallPage: (input: {
    /** The page ID. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Resolve On-Call Page
   */
  resolveOnCallPage: (input: {
    /** The page ID. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Create On-Call schedule
   */
  createOnCallSchedule: (input: {
    data: ScheduleCreateRequestData;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
    include?: string;
  }) => Promise<Schedule>;

  /**
   * Delete On-Call schedule
   */
  deleteOnCallSchedule: (input: {
    /** The ID of the schedule */
    schedule_id: string;
  }) => Promise<undefined>;

  /**
   * Get On-Call schedule
   */
  getOnCallSchedule: (input: {
    /** The ID of the schedule */
    schedule_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
    include?: string;
  }) => Promise<Schedule>;

  /**
   * Update On-Call schedule
   */
  updateOnCallSchedule: (input: {
    data: ScheduleUpdateRequestData;
    /** The ID of the schedule */
    schedule_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. */
    include?: string;
  }) => Promise<Schedule>;

  /**
   * Get scheduled on-call user
   */
  getScheduleOnCallUser: (input: {
    /** The ID of the schedule. */
    schedule_id: string;
    /** Specifies related resources to include in the response as a comma-separated list. Allowed value: `user`. */
    include?: string;
    /** Retrieves the on-call user at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted. */
    "filter[at_ts]"?: string;
  }) => Promise<Shift>;

  /**
   * Get team on-call users
   */
  getTeamOnCallUsers: (input: {
    /** The team ID */
    team_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `responders`, `escalations`, `escalations.responders`. */
    include?: string;
  }) => Promise<TeamOnCallResponders>;

  /**
   * Get On-Call team routing rules
   */
  getOnCallTeamRoutingRules: (input: {
    /** The team ID */
    team_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`. */
    include?: string;
  }) => Promise<TeamRoutingRules>;

  /**
   * Set On-Call team routing rules
   */
  setOnCallTeamRoutingRules: (input: {
    data?: TeamRoutingRulesRequestData;
    /** The team ID */
    team_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`. */
    include?: string;
  }) => Promise<TeamRoutingRules>;

  /**
   * List On-Call notification channels for a user
   */
  listUserNotificationChannels: (input: {
    /** The user ID */
    user_id: string;
  }) => Promise<ListNotificationChannelsResponse>;

  /**
   * Create an On-Call notification channel for a user
   */
  createUserNotificationChannel: (input: {
    data: CreateNotificationChannelData;
    /** The user ID */
    user_id: string;
  }) => Promise<NotificationChannel>;

  /**
   * Delete an On-Call notification channel for a user
   */
  deleteUserNotificationChannel: (input: {
    /** The user ID */
    user_id: string;
    /** The channel ID */
    channel_id: string;
  }) => Promise<undefined>;

  /**
   * Get an On-Call notification channel for a user
   */
  getUserNotificationChannel: (input: {
    /** The user ID */
    user_id: string;
    /** The channel ID */
    channel_id: string;
  }) => Promise<NotificationChannel>;

  /**
   * List On-Call notification rules for a user
   */
  listUserNotificationRules: (input: {
    /** The user ID */
    user_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
    include?: string;
  }) => Promise<ListOnCallNotificationRulesResponse>;

  /**
   * Create an On-Call notification rule for a user
   */
  createUserNotificationRule: (input: {
    data: CreateOnCallNotificationRuleRequestData;
    /** The user ID */
    user_id: string;
  }) => Promise<OnCallNotificationRule>;

  /**
   * Delete an On-Call notification rule for a user
   */
  deleteUserNotificationRule: (input: {
    /** The user ID */
    user_id: string;
    /** The rule ID */
    rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get an On-Call notification rule for a user
   */
  getUserNotificationRule: (input: {
    /** The user ID */
    user_id: string;
    /** The rule ID */
    rule_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
    include?: string;
  }) => Promise<OnCallNotificationRule>;

  /**
   * Update an On-Call notification rule for a user
   */
  updateUserNotificationRule: (input: {
    data: UpdateOnCallNotificationRuleRequestData;
    /** The user ID */
    user_id: string;
    /** The rule ID */
    rule_id: string;
    /** Comma-separated list of included relationships to be returned. Allowed values: `channel`. */
    include?: string;
  }) => Promise<OnCallNotificationRule>;

  /**
   * List Org Configs
   */
  listOrgConfigs: () => Promise<OrgConfigListResponse>;

  /**
   * Get a specific Org Config value
   */
  getOrgConfig: (input: {
    /** The name of an Org Config. */
    org_config_name: string;
  }) => Promise<OrgConfigGetResponse>;

  /**
   * Update a specific Org Config
   */
  updateOrgConfig: (input: {
    data: OrgConfigWrite;
    /** The name of an Org Config. */
    org_config_name: string;
  }) => Promise<OrgConfigGetResponse>;

  /**
   * List Org Connections
   */
  listOrgConnections: (input: {
    /** The Org ID of the sink org. */
    sink_org_id?: string;
    /** The Org ID of the source org. */
    source_org_id?: string;
    /** The limit of number of entries you want to return. Default is 1000. */
    limit?: number;
    /** The pagination offset which you want to query from. Default is 0. */
    offset?: number;
  }) => Promise<OrgConnectionListResponse>;

  /**
   * Create Org Connection
   */
  createOrgConnections: (input: {
    data: OrgConnectionCreate;
  }) => Promise<OrgConnectionResponse>;

  /**
   * Delete Org Connection
   */
  deleteOrgConnections: (input: {
    /** The unique identifier of the org connection. */
    connection_id: string;
  }) => Promise<undefined>;

  /**
   * Update Org Connection
   */
  updateOrgConnections: (input: {
    data: OrgConnectionUpdate;
    /** The unique identifier of the org connection. */
    connection_id: string;
  }) => Promise<OrgConnectionResponse>;

  /**
   * List permissions
   */
  listPermissions: () => Promise<PermissionsResponse>;

  /**
   * List findings
   */
  listFindings: (input: {
    /** Limit the number of findings returned. Must be <= 1000. */
    "page[limit]"?: number;
    /** Return findings for a given snapshot of time (Unix ms). */
    snapshot_timestamp?: number;
    /** Return the next page of findings pointed to by the cursor. */
    "page[cursor]"?: string;
    /** Return findings that have these associated tags (repeatable). */
    "filter[tags]"?: string;
    /** Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators). */
    "filter[evaluation_changed_at]"?: string;
    /** Set to `true` to return findings that are muted. Set to `false` to return unmuted findings. */
    "filter[muted]"?: boolean;
    /** Return findings for the specified rule ID. */
    "filter[rule_id]"?: string;
    /** Return findings for the specified rule. */
    "filter[rule_name]"?: string;
    /** Return only findings for the specified resource type. */
    "filter[resource_type]"?: string;
    /** Return only findings for the specified resource id. */
    "filter[@resource_id]"?: string;
    /** Return findings that were found on a specified date (Unix ms) or date range (using comparison operators). */
    "filter[discovery_timestamp]"?: string;
    "filter[evaluation]"?: FindingEvaluation;
    "filter[status]"?: FindingStatus;
    /** Return findings that match the selected vulnerability types (repeatable). */
    "filter[vulnerability_type]"?: (FindingVulnerabilityType)[];
    /** Return additional fields for some findings. */
    detailed_findings?: boolean;
  }) => Promise<ListFindingsResponse>;

  /**
   * Mute or unmute a batch of findings
   */
  muteFindings: (input: {
    data: BulkMuteFindingsRequestData;
  }) => Promise<BulkMuteFindingsResponse>;

  /**
   * Get a finding
   */
  getFinding: (input: {
    /** The ID of the finding. */
    finding_id: string;
    /** Return the finding for a given snapshot of time (Unix ms). */
    snapshot_timestamp?: number;
  }) => Promise<GetFindingResponse>;

  /**
   * Get all powerpacks
   */
  listPowerpacks: (input: {
    /** Maximum number of powerpacks in the response. */
    "page[limit]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
  }) => Promise<ListPowerpacksResponse>;

  /**
   * Create a new powerpack
   */
  createPowerpack: (input: {
    data?: PowerpackData;
  }) => Promise<PowerpackResponse>;

  /**
   * Delete a powerpack
   */
  deletePowerpack: (input: {
    /** Powerpack id */
    powerpack_id: string;
  }) => Promise<undefined>;

  /**
   * Get a Powerpack
   */
  getPowerpack: (input: {
    /** ID of the powerpack. */
    powerpack_id: string;
  }) => Promise<PowerpackResponse>;

  /**
   * Update a powerpack
   */
  updatePowerpack: (input: {
    data?: PowerpackData;
    /** ID of the powerpack. */
    powerpack_id: string;
  }) => Promise<PowerpackResponse>;

  /**
   * Get all processes
   */
  listProcesses: (input: {
    /** String to search processes by. */
    search?: string;
    /** Comma-separated list of tags to filter processes by. */
    tags?: string;
    /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
    from?: number;
    /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
    to?: number;
    /** Maximum number of results returned. */
    "page[limit]"?: number;
    /** String to query the next page of results. This key is provided with each valid response from the API in `meta.page.after`. */
    "page[cursor]"?: string;
  }) => Promise<ProcessSummariesResponse>;

  /**
   * Send server-side events
   */
  submitProductAnalyticsEvent: (input: {
    account?: ProductAnalyticsServerSideEventItemAccount;
    application: ProductAnalyticsServerSideEventItemApplication;
    event: ProductAnalyticsServerSideEventItemEvent;
    session?: ProductAnalyticsServerSideEventItemSession;
    type: ProductAnalyticsServerSideEventItemType;
    usr?: ProductAnalyticsServerSideEventItemUsr;
  }) => Promise<{ [key: string]: unknown }>;

  /**
   * Get account facet info
   */
  getAccountFacetInfo: (input: {
    data?: FacetInfoRequestData;
  }) => Promise<FacetInfoResponse>;

  /**
   * Query accounts
   */
  queryAccounts: (input: {
    data?: QueryAccountRequestData;
  }) => Promise<QueryResponse>;

  /**
   * Compute scalar analytics
   */
  queryProductAnalyticsScalar: (input: {
    data: ProductAnalyticsAnalyticsRequestData;
  }) => Promise<ProductAnalyticsScalarResponse>;

  /**
   * Compute timeseries analytics
   */
  queryProductAnalyticsTimeseries: (input: {
    data: ProductAnalyticsAnalyticsRequestData;
  }) => Promise<ProductAnalyticsTimeseriesResponse>;

  /**
   * Query event filtered users
   */
  queryEventFilteredUsers: (input: {
    data?: QueryEventFilteredUsersRequestData;
  }) => Promise<QueryResponse>;

  /**
   * Get user facet info
   */
  getUserFacetInfo: (input: {
    data?: FacetInfoRequestData;
  }) => Promise<FacetInfoResponse>;

  /**
   * Query users
   */
  queryUsers: (input: {
    data?: QueryUsersRequestData;
  }) => Promise<QueryResponse>;

  /**
   * Get mapping
   */
  getMapping: (input: {
    /** The entity for which to get the mapping */
    entity: string;
  }) => Promise<GetMappingResponse>;

  /**
   * Create connection
   */
  createConnection: (input: {
    data?: CreateConnectionRequestData;
    /** The entity for which to create the connection */
    entity: string;
  }) => Promise<undefined>;

  /**
   * Update connection
   */
  updateConnection: (input: {
    data?: UpdateConnectionRequestData;
    /** The entity for which to update the connection */
    entity: string;
  }) => Promise<undefined>;

  /**
   * Delete connection
   */
  deleteConnection: (input: {
    /** The connection ID to delete */
    id: string;
    /** The entity for which to delete the connection */
    entity: string;
  }) => Promise<undefined>;

  /**
   * List connections
   */
  listConnections: (input: {
    /** The entity for which to list connections */
    entity: string;
  }) => Promise<ListConnectionsResponse>;

  /**
   * Query scalar data across multiple products
   */
  queryScalarData: (input: {
    data: ScalarFormulaRequest;
  }) => Promise<ScalarFormulaQueryResponse>;

  /**
   * Query timeseries data across multiple products
   */
  queryTimeseriesData: (input: {
    data: TimeseriesFormulaRequest;
  }) => Promise<TimeseriesFormulaQueryResponse>;

  /**
   * Batch rows query
   */
  batchRowsQuery: (input: {
    data?: BatchRowsQueryRequestData;
  }) => Promise<BatchRowsQueryResponse>;

  /**
   * List tables
   */
  listTables: (input: {
    /** Number of tables to return. */
    "page[limit]"?: number;
    /** Number of tables to skip for pagination. */
    "page[offset]"?: number;
    sort?: ReferenceTableSortType;
    /** Filter by table status. */
    "filter[status]"?: string;
    /** Filter by exact table name match. */
    "filter[table_name][exact]"?: string;
    /** Filter by table name containing substring. */
    "filter[table_name][contains]"?: string;
  }) => Promise<TableResultV2Array>;

  /**
   * Create reference table
   */
  createReferenceTable: (input: {
    data?: CreateTableRequestData;
  }) => Promise<TableResultV2>;

  /**
   * Delete table
   */
  deleteTable: (input: {
    /** Unique identifier of the reference table to delete */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get table
   */
  getTable: (input: {
    /** Unique identifier of the reference table to retrieve */
    id: string;
  }) => Promise<TableResultV2>;

  /**
   * Update reference table
   */
  updateReferenceTable: (input: {
    data?: PatchTableRequestData;
    /** Unique identifier of the reference table to update */
    id: string;
  }) => Promise<undefined>;

  /**
   * Delete rows
   */
  deleteRows: (input: {
    /** List of row resources to delete from the reference table. */
    data: (TableRowResourceIdentifier)[];
    /** Unique identifier of the reference table to delete rows from */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get rows by id
   */
  getRowsById: (input: {
    /** Unique identifier of the reference table to get rows from */
    id: string;
    /** List of row IDs (primary key values) to retrieve from the reference table. */
    row_id: (string)[];
  }) => Promise<TableRowResourceArray>;

  /**
   * Upsert rows
   */
  upsertRows: (input: {
    /** List of row resources to create or update in the reference table. */
    data: (BatchUpsertRowsRequestData)[];
    /** Unique identifier of the reference table to upsert rows into */
    id: string;
  }) => Promise<undefined>;

  /**
   * Create reference table upload
   */
  createReferenceTableUpload: (input: {
    data?: CreateUploadRequestData;
  }) => Promise<CreateUploadResponse>;

  /**
   * List all WAF custom rules
   */
  listApplicationSecurityWafCustomRules: () => Promise<ApplicationSecurityWafCustomRuleListResponse>;

  /**
   * Create a WAF custom rule
   */
  createApplicationSecurityWafCustomRule: (input: {
    data: ApplicationSecurityWafCustomRuleCreateData;
  }) => Promise<ApplicationSecurityWafCustomRuleResponse>;

  /**
   * Delete a WAF Custom Rule
   */
  deleteApplicationSecurityWafCustomRule: (input: {
    /** The ID of the custom rule. */
    custom_rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get a WAF custom rule
   */
  getApplicationSecurityWafCustomRule: (input: {
    /** The ID of the custom rule. */
    custom_rule_id: string;
  }) => Promise<ApplicationSecurityWafCustomRuleResponse>;

  /**
   * Update a WAF Custom Rule
   */
  updateApplicationSecurityWafCustomRule: (input: {
    data: ApplicationSecurityWafCustomRuleUpdateData;
    /** The ID of the custom rule. */
    custom_rule_id: string;
  }) => Promise<ApplicationSecurityWafCustomRuleResponse>;

  /**
   * List all WAF exclusion filters
   */
  listApplicationSecurityWafExclusionFilters: () => Promise<ApplicationSecurityWafExclusionFiltersResponse>;

  /**
   * Create a WAF exclusion filter
   */
  createApplicationSecurityWafExclusionFilter: (input: {
    data: ApplicationSecurityWafExclusionFilterCreateData;
  }) => Promise<ApplicationSecurityWafExclusionFilterResponse>;

  /**
   * Delete a WAF exclusion filter
   */
  deleteApplicationSecurityWafExclusionFilter: (input: {
    /** The identifier of the WAF exclusion filter. */
    exclusion_filter_id: string;
  }) => Promise<undefined>;

  /**
   * Get a WAF exclusion filter
   */
  getApplicationSecurityWafExclusionFilter: (input: {
    /** The identifier of the WAF exclusion filter. */
    exclusion_filter_id: string;
  }) => Promise<ApplicationSecurityWafExclusionFilterResponse>;

  /**
   * Update a WAF exclusion filter
   */
  updateApplicationSecurityWafExclusionFilter: (input: {
    data: ApplicationSecurityWafExclusionFilterUpdateData;
    /** The identifier of the WAF exclusion filter. */
    exclusion_filter_id: string;
  }) => Promise<ApplicationSecurityWafExclusionFilterResponse>;

  /**
   * Get all Workload Protection agent rules
   */
  listCsmThreatsAgentRules: (input: {
    /** The ID of the Agent policy */
    policy_id?: string;
  }) => Promise<CloudWorkloadSecurityAgentRulesListResponse>;

  /**
   * Create a Workload Protection agent rule
   */
  createCsmThreatsAgentRule: (input: {
    data: CloudWorkloadSecurityAgentRuleCreateData;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Delete a Workload Protection agent rule
   */
  deleteCsmThreatsAgentRule: (input: {
    /** The ID of the Agent rule */
    agent_rule_id: string;
    /** The ID of the Agent policy */
    policy_id?: string;
  }) => Promise<undefined>;

  /**
   * Get a Workload Protection agent rule
   */
  getCsmThreatsAgentRule: (input: {
    /** The ID of the Agent rule */
    agent_rule_id: string;
    /** The ID of the Agent policy */
    policy_id?: string;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Update a Workload Protection agent rule
   */
  updateCsmThreatsAgentRule: (input: {
    data: CloudWorkloadSecurityAgentRuleUpdateData;
    /** The ID of the Agent rule */
    agent_rule_id: string;
    /** The ID of the Agent policy */
    policy_id?: string;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Get all Workload Protection policies
   */
  listCsmThreatsAgentPolicies: () => Promise<CloudWorkloadSecurityAgentPoliciesListResponse>;

  /**
   * Create a Workload Protection policy
   */
  createCsmThreatsAgentPolicy: (input: {
    data: CloudWorkloadSecurityAgentPolicyCreateData;
  }) => Promise<CloudWorkloadSecurityAgentPolicyResponse>;

  /**
   * Download the Workload Protection policy
   */
  downloadCsmThreatsPolicy: () => Promise<string>;

  /**
   * Delete a Workload Protection policy
   */
  deleteCsmThreatsAgentPolicy: (input: {
    /** The ID of the Agent policy */
    policy_id: string;
  }) => Promise<undefined>;

  /**
   * Get a Workload Protection policy
   */
  getCsmThreatsAgentPolicy: (input: {
    /** The ID of the Agent policy */
    policy_id: string;
  }) => Promise<CloudWorkloadSecurityAgentPolicyResponse>;

  /**
   * Update a Workload Protection policy
   */
  updateCsmThreatsAgentPolicy: (input: {
    data: CloudWorkloadSecurityAgentPolicyUpdateData;
    /** The ID of the Agent policy */
    policy_id: string;
  }) => Promise<CloudWorkloadSecurityAgentPolicyResponse>;

  /**
   * List replay heatmap snapshots
   */
  listReplayHeatmapSnapshots: (input: {
    /** Device type to filter snapshots. */
    "filter[device_type]"?: string;
    /** View name to filter snapshots. */
    "filter[view_name]": string;
    /** Maximum number of snapshots to return. */
    "page[limit]"?: number;
    /** Filter by application ID. */
    "filter[application_id]"?: string;
  }) => Promise<SnapshotArray>;

  /**
   * Create replay heatmap snapshot
   */
  createReplayHeatmapSnapshot: (input: {
    data: SnapshotCreateRequestData;
  }) => Promise<Snapshot>;

  /**
   * Delete replay heatmap snapshot
   */
  deleteReplayHeatmapSnapshot: (input: {
    /** Unique identifier of the heatmap snapshot. */
    snapshot_id: string;
  }) => Promise<undefined>;

  /**
   * Update replay heatmap snapshot
   */
  updateReplayHeatmapSnapshot: (input: {
    data: SnapshotUpdateRequestData;
    /** Unique identifier of the heatmap snapshot. */
    snapshot_id: string;
  }) => Promise<Snapshot>;

  /**
   * Delete a restriction policy
   */
  deleteRestrictionPolicy: (input: {
    /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`. */
    resource_id: string;
  }) => Promise<undefined>;

  /**
   * Get a restriction policy
   */
  getRestrictionPolicy: (input: {
    /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`. */
    resource_id: string;
  }) => Promise<RestrictionPolicyResponse>;

  /**
   * Update a restriction policy
   */
  updateRestrictionPolicy: (input: {
    data: RestrictionPolicy;
    /** Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`. */
    resource_id: string;
    /** Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out. */
    allow_self_lockout?: boolean;
  }) => Promise<RestrictionPolicyResponse>;

  /**
   * List roles
   */
  listRoles: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: RolesSort;
    /** Filter all roles by the given string. */
    filter?: string;
    /** Filter all roles by the given list of role IDs. */
    "filter[id]"?: string;
  }) => Promise<RolesResponse>;

  /**
   * Create role
   */
  createRole: (input: {
    data: RoleCreateData;
  }) => Promise<RoleCreateResponse>;

  /**
   * List role templates
   */
  listRoleTemplates: () => Promise<RoleTemplateArray>;

  /**
   * Delete role
   */
  deleteRole: (input: {
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<undefined>;

  /**
   * Get a role
   */
  getRole: (input: {
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<RoleResponse>;

  /**
   * Update a role
   */
  updateRole: (input: {
    data: RoleUpdateData;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<RoleUpdateResponse>;

  /**
   * Create a new role by cloning an existing role
   */
  cloneRole: (input: {
    data: RoleClone;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<RoleResponse>;

  /**
   * Revoke permission
   */
  removePermissionFromRole: (input: {
    data?: RelationshipToPermissionData;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<PermissionsResponse>;

  /**
   * List permissions for a role
   */
  listRolePermissions: (input: {
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<PermissionsResponse>;

  /**
   * Grant permission to a role
   */
  addPermissionToRole: (input: {
    data?: RelationshipToPermissionData;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<PermissionsResponse>;

  /**
   * Remove a user from a role
   */
  removeUserFromRole: (input: {
    data: RelationshipToUserData;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<UsersResponse>;

  /**
   * Get all users of a role
   */
  listRoleUsers: (input: {
    /** The unique identifier of the role. */
    role_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `email`, `status`. */
    sort?: string;
    /** Filter all users by the given string. Defaults to no filtering. */
    filter?: string;
  }) => Promise<UsersResponse>;

  /**
   * Add a user to a role
   */
  addUserToRole: (input: {
    data: RelationshipToUserData;
    /** The unique identifier of the role. */
    role_id: string;
  }) => Promise<UsersResponse>;

  /**
   * Aggregate RUM events
   */
  aggregateRumEvents: (input: {
    /** The list of metrics or timeseries to compute for the retrieved buckets. */
    compute?: (RumCompute)[];
    filter?: RumQueryFilter;
    /** The rules for the group by. */
    group_by?: (RumGroupBy)[];
    options?: RumQueryOptions;
    page?: RumQueryPageOptions;
  }) => Promise<RumAnalyticsAggregateResponse>;

  /**
   * List all the RUM applications
   */
  getRumApplications: () => Promise<RumApplicationsResponse>;

  /**
   * Create a new RUM application
   */
  createRumApplication: (input: {
    data: RumApplicationCreate;
  }) => Promise<RumApplicationResponse>;

  /**
   * Order RUM retention filters
   */
  orderRetentionFilters: (input: {
    /** A list of RUM retention filter IDs along with type. */
    data?: (RumRetentionFiltersOrderData)[];
    /** RUM application ID. */
    app_id: string;
  }) => Promise<RumRetentionFiltersOrderResponse>;

  /**
   * Get all RUM retention filters
   */
  listRetentionFilters: (input: {
    /** RUM application ID. */
    app_id: string;
  }) => Promise<RumRetentionFiltersResponse>;

  /**
   * Create a RUM retention filter
   */
  createRetentionFilter: (input: {
    data: RumRetentionFilterCreateData;
    /** RUM application ID. */
    app_id: string;
  }) => Promise<RumRetentionFilterResponse>;

  /**
   * Delete a RUM retention filter
   */
  deleteRetentionFilter: (input: {
    /** RUM application ID. */
    app_id: string;
    /** Retention filter ID. */
    rf_id: string;
  }) => Promise<undefined>;

  /**
   * Get a RUM retention filter
   */
  getRetentionFilter: (input: {
    /** RUM application ID. */
    app_id: string;
    /** Retention filter ID. */
    rf_id: string;
  }) => Promise<RumRetentionFilterResponse>;

  /**
   * Update a RUM retention filter
   */
  updateRetentionFilter: (input: {
    data: RumRetentionFilterUpdateData;
    /** RUM application ID. */
    app_id: string;
    /** Retention filter ID. */
    rf_id: string;
  }) => Promise<RumRetentionFilterResponse>;

  /**
   * Delete a RUM application
   */
  deleteRumApplication: (input: {
    /** RUM application ID. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get a RUM application
   */
  getRumApplication: (input: {
    /** RUM application ID. */
    id: string;
  }) => Promise<RumApplicationResponse>;

  /**
   * Update a RUM application
   */
  updateRumApplication: (input: {
    data: RumApplicationUpdate;
    /** RUM application ID. */
    id: string;
  }) => Promise<RumApplicationResponse>;

  /**
   * Get all rum-based metrics
   */
  listRumMetrics: () => Promise<RumMetricsResponse>;

  /**
   * Create a rum-based metric
   */
  createRumMetric: (input: {
    data: RumMetricCreateData;
  }) => Promise<RumMetricResponse>;

  /**
   * Delete a rum-based metric
   */
  deleteRumMetric: (input: {
    /** The name of the rum-based metric. */
    metric_id: string;
  }) => Promise<undefined>;

  /**
   * Get a rum-based metric
   */
  getRumMetric: (input: {
    /** The name of the rum-based metric. */
    metric_id: string;
  }) => Promise<RumMetricResponse>;

  /**
   * Update a rum-based metric
   */
  updateRumMetric: (input: {
    data: RumMetricUpdateData;
    /** The name of the rum-based metric. */
    metric_id: string;
  }) => Promise<RumMetricResponse>;

  /**
   * Get a list of RUM events
   */
  listRumEvents: (input: {
    /** Search query following RUM syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested events. */
    "filter[from]"?: string;
    /** Maximum timestamp for requested events. */
    "filter[to]"?: string;
    sort?: RumSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of events in the response. */
    "page[limit]"?: number;
  }) => Promise<RumEventsResponse>;

  /**
   * Search RUM events
   */
  searchRumEvents: (input: {
    filter?: RumQueryFilter;
    options?: RumQueryOptions;
    page?: RumQueryPageOptions;
    sort?: RumSort;
  }) => Promise<RumEventsResponse>;

  /**
   * List rum replay playlists
   */
  listRumReplayPlaylists: (input: {
    /** Filter playlists by the UUID of the user who created them. */
    "filter[created_by_uuid]"?: string;
    /** Search query to filter playlists by name. */
    "filter[query]"?: string;
    /** Page number for pagination (0-indexed). */
    "page[number]"?: number;
    /** Number of items per page. */
    "page[size]"?: number;
  }) => Promise<PlaylistArray>;

  /**
   * Create rum replay playlist
   */
  createRumReplayPlaylist: (input: {
    data: PlaylistData;
  }) => Promise<Playlist>;

  /**
   * Delete rum replay playlist
   */
  deleteRumReplayPlaylist: (input: {
    /** Unique identifier of the playlist. */
    playlist_id: number;
  }) => Promise<undefined>;

  /**
   * Get rum replay playlist
   */
  getRumReplayPlaylist: (input: {
    /** Unique identifier of the playlist. */
    playlist_id: number;
  }) => Promise<Playlist>;

  /**
   * Update rum replay playlist
   */
  updateRumReplayPlaylist: (input: {
    data: PlaylistData;
    /** Unique identifier of the playlist. */
    playlist_id: number;
  }) => Promise<Playlist>;

  /**
   * Bulk remove rum replay playlist sessions
   */
  bulkRemoveRumReplayPlaylistSessions: (input: {
    /** Array of session identifier data objects. */
    data: (SessionIdData)[];
    /** Unique identifier of the playlist. */
    playlist_id: number;
  }) => Promise<undefined>;

  /**
   * List rum replay playlist sessions
   */
  listRumReplayPlaylistSessions: (input: {
    /** Unique identifier of the playlist. */
    playlist_id: number;
    /** Page number for pagination (0-indexed). */
    "page[number]"?: number;
    /** Number of items per page. */
    "page[size]"?: number;
  }) => Promise<PlaylistsSessionArray>;

  /**
   * Remove rum replay session from playlist
   */
  removeRumReplaySessionFromPlaylist: (input: {
    /** Unique identifier of the playlist. */
    playlist_id: number;
    /** Unique identifier of the session. */
    session_id: string;
  }) => Promise<undefined>;

  /**
   * Add rum replay session to playlist
   */
  addRumReplaySessionToPlaylist: (input: {
    /** Unique identifier of the playlist. */
    playlist_id: number;
    /** Unique identifier of the session. */
    session_id: string;
    /** Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'. */
    data_source?: string;
    /** Server-side timestamp in milliseconds. */
    ts: number;
  }) => Promise<PlaylistsSession>;

  /**
   * Get segments
   */
  getSegments: (input: {
    /** Unique identifier of the view. */
    view_id: string;
    /** Unique identifier of the session. */
    session_id: string;
    /** Storage source: 'event_platform' or 'blob'. */
    source?: string;
    /** Server-side timestamp in milliseconds. */
    ts?: number;
    /** Maximum size in bytes for the segment list. */
    max_list_size?: number;
    /** Paging token for pagination. */
    paging?: string;
  }) => Promise<undefined>;

  /**
   * List rum replay session watchers
   */
  listRumReplaySessionWatchers: (input: {
    /** Unique identifier of the session. */
    session_id: string;
    /** Number of items per page. */
    "page[size]"?: number;
    /** Page number for pagination (0-indexed). */
    "page[number]"?: number;
  }) => Promise<WatcherArray>;

  /**
   * Delete rum replay session watch
   */
  deleteRumReplaySessionWatch: (input: {
    /** Unique identifier of the session. */
    session_id: string;
  }) => Promise<undefined>;

  /**
   * Create rum replay session watch
   */
  createRumReplaySessionWatch: (input: {
    data: WatchData;
    /** Unique identifier of the session. */
    session_id: string;
  }) => Promise<Watch>;

  /**
   * List rum replay viewership history sessions
   */
  listRumReplayViewershipHistorySessions: (input: {
    /** Start timestamp in milliseconds for watched_at filter. */
    "filter[watched_at][start]"?: number;
    /** Page number for pagination (0-indexed). */
    "page[number]"?: number;
    /** Filter by user UUID. Defaults to current user if not specified. */
    "filter[created_by]"?: string;
    /** End timestamp in milliseconds for watched_at filter. */
    "filter[watched_at][end]"?: number;
    /** Comma-separated list of session IDs to filter by. */
    "filter[session_ids]"?: string;
    /** Number of items per page. */
    "page[size]"?: number;
    /** Filter by application ID. */
    "filter[application_id]"?: string;
  }) => Promise<ViewershipHistorySessionArray>;

  /**
   * Upload IdP metadata
   */
  uploadIdPMetadata: (input: {
    /** The IdP metadata XML file */
    idp_file?: string;
  }) => Promise<undefined>;

  /**
   * List all rule outcomes
   */
  listScorecardOutcomes: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Include related rule details in the response. */
    include?: string;
    /** Return only specified values in the outcome attributes. */
    "fields[outcome]"?: string;
    /** Return only specified values in the included rule details. */
    "fields[rule]"?: string;
    /** Filter the outcomes on a specific service name. */
    "filter[outcome][service_name]"?: string;
    /** Filter the outcomes by a specific state. */
    "filter[outcome][state]"?: string;
    /** Filter outcomes on whether a rule is enabled/disabled. */
    "filter[rule][enabled]"?: boolean;
    /** Filter outcomes based on rule ID. */
    "filter[rule][id]"?: string;
    /** Filter outcomes based on rule name. */
    "filter[rule][name]"?: string;
  }) => Promise<OutcomesResponse>;

  /**
   * Update Scorecard outcomes asynchronously
   */
  updateScorecardOutcomesAsync: (input: {
    data?: UpdateOutcomesAsyncRequestData;
  }) => Promise<undefined>;

  /**
   * Create outcomes batch
   */
  createScorecardOutcomesBatch: (input: {
    data?: OutcomesBatchRequestData;
  }) => Promise<OutcomesBatchResponse>;

  /**
   * List all rules
   */
  listScorecardRules: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** Include related scorecard details in the response. */
    include?: string;
    /** Filter the rules on a rule ID. */
    "filter[rule][id]"?: string;
    /** Filter for enabled rules only. */
    "filter[rule][enabled]"?: boolean;
    /** Filter for custom rules only. */
    "filter[rule][custom]"?: boolean;
    /** Filter rules on the rule name. */
    "filter[rule][name]"?: string;
    /** Filter rules on the rule description. */
    "filter[rule][description]"?: string;
    /** Return only specific fields in the response for rule attributes. */
    "fields[rule]"?: string;
    /** Return only specific fields in the included response for scorecard attributes. */
    "fields[scorecard]"?: string;
  }) => Promise<ListRulesResponse>;

  /**
   * Create a new rule
   */
  createScorecardRule: (input: {
    data?: CreateRuleRequestData;
  }) => Promise<CreateRuleResponse>;

  /**
   * Delete a rule
   */
  deleteScorecardRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<undefined>;

  /**
   * Update an existing rule
   */
  updateScorecardRule: (input: {
    data?: UpdateRuleRequestData;
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<UpdateRuleResponse>;

  /**
   * Unassign seats from users
   */
  unassignSeatsUser: (input: {
    /** The data for the unassign seats user request. */
    data?: UnassignSeatsUserRequestData;
  }) => Promise<undefined>;

  /**
   * Get users with seats
   */
  getSeatsUsers: (input: {
    /** The product code for which to retrieve seat users. */
    product_code: string;
    /** Maximum number of results to return. */
    "page[limit]"?: number;
    /** Cursor for pagination. */
    "page[cursor]"?: string;
  }) => Promise<SeatUserDataArray>;

  /**
   * Assign seats to users
   */
  assignSeatsUser: (input: {
    /** The data for the assign seats user request. */
    data?: AssignSeatsUserRequestData;
  }) => Promise<AssignSeatsUserResponse>;

  /**
   * List Entity Risk Scores
   */
  listEntityRiskScores: (input: {
    /** Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago. */
    from?: number;
    /** End time for the query in Unix timestamp (milliseconds). Defaults to now. */
    to?: number;
    /** Size of the page to return. Maximum is 1000. */
    "page[size]"?: number;
    /** Page number to return (1-indexed). */
    "page[number]"?: number;
    /** Query ID for pagination consistency. */
    "page[queryId]"?: string;
    /** Sort order for results. Format: `field:direction` where direction is `asc` or `desc`. Supported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`. */
    "filter[sort]"?: string;
    /** Supports filtering by entity attributes, risk scores, severity, and more. Example: `severity:critical AND entityType:aws_iam_user` */
    "filter[query]"?: string;
    /** Filter by entity type(s). Can specify multiple values. */
    entityType?: (string)[];
  }) => Promise<SecurityEntityRiskScoresResponse>;

  /**
   * Download the Workload Protection policy (US1-FED)
   */
  downloadCloudWorkloadPolicyFile: () => Promise<string>;

  /**
   * List security findings
   */
  listSecurityFindings: (input: {
    /** The search query following log search syntax. */
    "filter[query]"?: string;
    /** Get the next page of results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** The maximum number of findings in the response. */
    "page[limit]"?: number;
    sort?: SecurityFindingsSort;
  }) => Promise<ListSecurityFindingsResponse>;

  /**
   * Detach security findings from their case
   */
  detachCase: (input: {
    data?: DetachCaseRequestData;
  }) => Promise<undefined>;

  /**
   * Create cases for security findings
   */
  createCases: (input: {
    /** Array of case creation request data objects. */
    data: (CreateCaseRequestData)[];
  }) => Promise<FindingCaseResponseArray>;

  /**
   * Attach security findings to a case
   */
  attachCase: (input: {
    data?: AttachCaseRequestData;
    /** Unique identifier of the case to attach security findings to */
    case_id: string;
  }) => Promise<FindingCaseResponse>;

  /**
   * Attach security findings to a Jira issue
   */
  attachJiraIssue: (input: {
    data?: AttachJiraIssueRequestData;
  }) => Promise<FindingCaseResponse>;

  /**
   * Create Jira issues for security findings
   */
  createJiraIssues: (input: {
    /** Array of Jira issue creation request data objects. */
    data: (CreateJiraIssueRequestData)[];
  }) => Promise<FindingCaseResponseArray>;

  /**
   * Search security findings
   */
  searchSecurityFindings: (input: {
    data?: SecurityFindingsSearchRequestData;
  }) => Promise<ListSecurityFindingsResponse>;

  /**
   * List assets SBOMs
   */
  listAssetsSboMs: (input: {
    /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
    "page[token]"?: string;
    /** The page number to be retrieved. It should be equal to or greater than 1. */
    "page[number]"?: number;
    "filter[asset_type]"?: AssetType;
    /** The name of the asset for the SBOM request. */
    "filter[asset_name]"?: string;
    /** The name of the component that is a dependency of an asset. */
    "filter[package_name]"?: string;
    /** The version of the component that is a dependency of an asset. */
    "filter[package_version]"?: string;
    /** The software license name of the component that is a dependency of an asset. */
    "filter[license_name]"?: string;
    "filter[license_type]"?: SbomComponentLicenseType;
  }) => Promise<ListAssetsSboMsResponse>;

  /**
   * Get SBOM
   */
  getSbom: (input: {
    asset_type: AssetType;
    /** The name of the asset for the SBOM request. */
    "filter[asset_name]": string;
    /** The container image `repo_digest` for the SBOM request. When the requested asset type is 'Image', this filter is mandatory. */
    "filter[repo_digest]"?: string;
    "ext:format"?: SbomFormat;
  }) => Promise<GetSbomResponse>;

  /**
   * List scanned assets metadata
   */
  listScannedAssetsMetadata: (input: {
    /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
    "page[token]"?: string;
    /** The page number to be retrieved. It should be equal to or greater than 1. */
    "page[number]"?: number;
    "filter[asset.type]"?: CloudAssetType;
    /** The name of the scanned asset. */
    "filter[asset.name]"?: string;
    /** The origin of last success scan. */
    "filter[last_success.origin]"?: string;
    /** The environment of last success scan. */
    "filter[last_success.env]"?: string;
  }) => Promise<ScannedAssetsMetadata>;

  /**
   * Get the list of signal-based notification rules
   */
  getSignalNotificationRules: () => Promise<{ data?: (NotificationRule)[] }>;

  /**
   * Create a new signal-based notification rule
   */
  createSignalNotificationRule: (input: {
    data?: CreateNotificationRuleParametersData;
  }) => Promise<NotificationRuleResponse>;

  /**
   * Delete a signal-based notification rule
   */
  deleteSignalNotificationRule: (input: {
    /** ID of the notification rule. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get details of a signal-based notification rule
   */
  getSignalNotificationRule: (input: {
    /** ID of the notification rule. */
    id: string;
  }) => Promise<NotificationRuleResponse>;

  /**
   * Patch a signal-based notification rule
   */
  patchSignalNotificationRule: (input: {
    data?: PatchNotificationRuleParametersData;
    /** ID of the notification rule. */
    id: string;
  }) => Promise<NotificationRuleResponse>;

  /**
   * List vulnerabilities
   */
  listVulnerabilities: (input: {
    /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
    "page[token]"?: string;
    /** The page number to be retrieved. It should be equal or greater than `1` */
    "page[number]"?: number;
    "filter[type]"?: VulnerabilityType;
    /** Filter by vulnerability base (i.e. from the original advisory) severity score. */
    "filter[cvss.base.score][`$op`]"?: number;
    "filter[cvss.base.severity]"?: VulnerabilitySeverity;
    /** Filter by vulnerability base CVSS vector. */
    "filter[cvss.base.vector]"?: string;
    /** Filter by vulnerability Datadog severity score. */
    "filter[cvss.datadog.score][`$op`]"?: number;
    "filter[cvss.datadog.severity]"?: VulnerabilitySeverity;
    /** Filter by vulnerability Datadog CVSS vector. */
    "filter[cvss.datadog.vector]"?: string;
    "filter[status]"?: VulnerabilityStatus;
    "filter[tool]"?: VulnerabilityTool;
    /** Filter by library name. */
    "filter[library.name]"?: string;
    /** Filter by library version. */
    "filter[library.version]"?: string;
    /** Filter by advisory ID. */
    "filter[advisory.id]"?: string;
    /** Filter by exploitation probability. */
    "filter[risks.exploitation_probability]"?: boolean;
    /** Filter by POC exploit availability. */
    "filter[risks.poc_exploit_available]"?: boolean;
    /** Filter by public exploit availability. */
    "filter[risks.exploit_available]"?: boolean;
    /** Filter by vulnerability [EPSS](https://www.first.org/epss/) severity score. */
    "filter[risks.epss.score][`$op`]"?: number;
    "filter[risks.epss.severity]"?: VulnerabilitySeverity;
    /** Filter by language. */
    "filter[language]"?: string;
    "filter[ecosystem]"?: VulnerabilityEcosystem;
    /** Filter by vulnerability location. */
    "filter[code_location.location]"?: string;
    /** Filter by vulnerability file path. */
    "filter[code_location.file_path]"?: string;
    /** Filter by method. */
    "filter[code_location.method]"?: string;
    /** Filter by fix availability. */
    "filter[fix_available]"?: boolean;
    /** Filter by vulnerability `repo_digest` (when the vulnerability is related to `Image` asset). */
    "filter[repo_digests]"?: string;
    /** Filter by origin. */
    "filter[origin]"?: string;
    /** Filter for whether the vulnerability affects a running kernel (for vulnerabilities related to a `Host` asset). */
    "filter[running_kernel]"?: boolean;
    /** Filter by asset name. This field supports the usage of wildcards (*). */
    "filter[asset.name]"?: string;
    "filter[asset.type]"?: AssetType;
    /** Filter by the first version of the asset this vulnerability has been detected on. */
    "filter[asset.version.first]"?: string;
    /** Filter by the last version of the asset this vulnerability has been detected on. */
    "filter[asset.version.last]"?: string;
    /** Filter by the repository url associated to the asset. */
    "filter[asset.repository_url]"?: string;
    /** Filter whether the asset is in production or not. */
    "filter[asset.risks.in_production]"?: boolean;
    /** Filter whether the asset is under attack or not. */
    "filter[asset.risks.under_attack]"?: boolean;
    /** Filter whether the asset is publicly accessible or not. */
    "filter[asset.risks.is_publicly_accessible]"?: boolean;
    /** Filter whether the asset is publicly accessible or not. */
    "filter[asset.risks.has_privileged_access]"?: boolean;
    /** Filter whether the asset  has access to sensitive data or not. */
    "filter[asset.risks.has_access_to_sensitive_data]"?: boolean;
    /** Filter by asset environments. */
    "filter[asset.environments]"?: string;
    /** Filter by asset teams. */
    "filter[asset.teams]"?: string;
    /** Filter by asset architecture. */
    "filter[asset.arch]"?: string;
    /** Filter by asset operating system name. */
    "filter[asset.operating_system.name]"?: string;
    /** Filter by asset operating system version. */
    "filter[asset.operating_system.version]"?: string;
  }) => Promise<ListVulnerabilitiesResponse>;

  /**
   * Get the list of vulnerability notification rules
   */
  getVulnerabilityNotificationRules: () => Promise<{ data?: (NotificationRule)[] }>;

  /**
   * Create a new vulnerability-based notification rule
   */
  createVulnerabilityNotificationRule: (input: {
    data?: CreateNotificationRuleParametersData;
  }) => Promise<NotificationRuleResponse>;

  /**
   * Delete a vulnerability-based notification rule
   */
  deleteVulnerabilityNotificationRule: (input: {
    /** ID of the notification rule. */
    id: string;
  }) => Promise<undefined>;

  /**
   * Get details of a vulnerability notification rule
   */
  getVulnerabilityNotificationRule: (input: {
    /** ID of the notification rule. */
    id: string;
  }) => Promise<NotificationRuleResponse>;

  /**
   * Patch a vulnerability-based notification rule
   */
  patchVulnerabilityNotificationRule: (input: {
    data?: PatchNotificationRuleParametersData;
    /** ID of the notification rule. */
    id: string;
  }) => Promise<NotificationRuleResponse>;

  /**
   * List vulnerable assets
   */
  listVulnerableAssets: (input: {
    /** Its value must come from the `links` section of the response of the first request. Do not manually edit it. */
    "page[token]"?: string;
    /** The page number to be retrieved. It should be equal or greater than `1` */
    "page[number]"?: number;
    /** Filter by name. This field supports the usage of wildcards (*). */
    "filter[name]"?: string;
    "filter[type]"?: AssetType;
    /** Filter by the first version of the asset since it has been vulnerable. */
    "filter[version.first]"?: string;
    /** Filter by the last detected version of the asset. */
    "filter[version.last]"?: string;
    /** Filter by the repository url associated to the asset. */
    "filter[repository_url]"?: string;
    /** Filter whether the asset is in production or not. */
    "filter[risks.in_production]"?: boolean;
    /** Filter whether the asset (Service) is under attack or not. */
    "filter[risks.under_attack]"?: boolean;
    /** Filter whether the asset (Host) is publicly accessible or not. */
    "filter[risks.is_publicly_accessible]"?: boolean;
    /** Filter whether the asset (Host) has privileged access or not. */
    "filter[risks.has_privileged_access]"?: boolean;
    /** Filter whether the asset (Host)  has access to sensitive data or not. */
    "filter[risks.has_access_to_sensitive_data]"?: boolean;
    /** Filter by environment. */
    "filter[environments]"?: string;
    /** Filter by teams. */
    "filter[teams]"?: string;
    /** Filter by architecture. */
    "filter[arch]"?: string;
    /** Filter by operating system name. */
    "filter[operating_system.name]"?: string;
    /** Filter by operating system version. */
    "filter[operating_system.version]"?: string;
  }) => Promise<ListVulnerableAssetsResponse>;

  /**
   * Get all Workload Protection agent rules (US1-FED)
   */
  listCloudWorkloadSecurityAgentRules: () => Promise<CloudWorkloadSecurityAgentRulesListResponse>;

  /**
   * Create a Workload Protection agent rule (US1-FED)
   */
  createCloudWorkloadSecurityAgentRule: (input: {
    data: CloudWorkloadSecurityAgentRuleCreateData;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Delete a Workload Protection agent rule (US1-FED)
   */
  deleteCloudWorkloadSecurityAgentRule: (input: {
    /** The ID of the Agent rule */
    agent_rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get a Workload Protection agent rule (US1-FED)
   */
  getCloudWorkloadSecurityAgentRule: (input: {
    /** The ID of the Agent rule */
    agent_rule_id: string;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Update a Workload Protection agent rule (US1-FED)
   */
  updateCloudWorkloadSecurityAgentRule: (input: {
    data: CloudWorkloadSecurityAgentRuleUpdateData;
    /** The ID of the Agent rule */
    agent_rule_id: string;
  }) => Promise<CloudWorkloadSecurityAgentRuleResponse>;

  /**
   * Get all critical assets
   */
  listSecurityMonitoringCriticalAssets: () => Promise<SecurityMonitoringCriticalAssetsResponse>;

  /**
   * Create a critical asset
   */
  createSecurityMonitoringCriticalAsset: (input: {
    data: SecurityMonitoringCriticalAssetCreateData;
  }) => Promise<SecurityMonitoringCriticalAssetResponse>;

  /**
   * Get critical assets affecting a specific rule
   */
  getCriticalAssetsAffectingRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringCriticalAssetsResponse>;

  /**
   * Delete a critical asset
   */
  deleteSecurityMonitoringCriticalAsset: (input: {
    /** The ID of the critical asset. */
    critical_asset_id: string;
  }) => Promise<undefined>;

  /**
   * Get a critical asset
   */
  getSecurityMonitoringCriticalAsset: (input: {
    /** The ID of the critical asset. */
    critical_asset_id: string;
  }) => Promise<SecurityMonitoringCriticalAssetResponse>;

  /**
   * Update a critical asset
   */
  updateSecurityMonitoringCriticalAsset: (input: {
    data: SecurityMonitoringCriticalAssetUpdateData;
    /** The ID of the critical asset. */
    critical_asset_id: string;
  }) => Promise<SecurityMonitoringCriticalAssetResponse>;

  /**
   * Get all security filters
   */
  listSecurityFilters: () => Promise<SecurityFiltersResponse>;

  /**
   * Create a security filter
   */
  createSecurityFilter: (input: {
    data: SecurityFilterCreateData;
  }) => Promise<SecurityFilterResponse>;

  /**
   * Delete a security filter
   */
  deleteSecurityFilter: (input: {
    /** The ID of the security filter. */
    security_filter_id: string;
  }) => Promise<undefined>;

  /**
   * Get a security filter
   */
  getSecurityFilter: (input: {
    /** The ID of the security filter. */
    security_filter_id: string;
  }) => Promise<SecurityFilterResponse>;

  /**
   * Update a security filter
   */
  updateSecurityFilter: (input: {
    data: SecurityFilterUpdateData;
    /** The ID of the security filter. */
    security_filter_id: string;
  }) => Promise<SecurityFilterResponse>;

  /**
   * Get all suppression rules
   */
  listSecurityMonitoringSuppressions: (input: {
    /** Query string. */
    query?: string;
    sort?: SecurityMonitoringSuppressionSort;
    /** Size for a given page. Use `-1` to return all items. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<SecurityMonitoringPaginatedSuppressionsResponse>;

  /**
   * Create a suppression rule
   */
  createSecurityMonitoringSuppression: (input: {
    data: SecurityMonitoringSuppressionCreateData;
  }) => Promise<SecurityMonitoringSuppressionResponse>;

  /**
   * Get suppressions affecting future rule
   */
  getSuppressionsAffectingFutureRule: (input: {
    body: SecurityMonitoringRuleCreatePayload;
  }) => Promise<SecurityMonitoringSuppressionsResponse>;

  /**
   * Get suppressions affecting a specific rule
   */
  getSuppressionsAffectingRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringSuppressionsResponse>;

  /**
   * Validate a suppression rule
   */
  validateSecurityMonitoringSuppression: (input: {
    data: SecurityMonitoringSuppressionCreateData;
  }) => Promise<undefined>;

  /**
   * Delete a suppression rule
   */
  deleteSecurityMonitoringSuppression: (input: {
    /** The ID of the suppression rule */
    suppression_id: string;
  }) => Promise<undefined>;

  /**
   * Get a suppression rule
   */
  getSecurityMonitoringSuppression: (input: {
    /** The ID of the suppression rule */
    suppression_id: string;
  }) => Promise<SecurityMonitoringSuppressionResponse>;

  /**
   * Update a suppression rule
   */
  updateSecurityMonitoringSuppression: (input: {
    data: SecurityMonitoringSuppressionUpdateData;
    /** The ID of the suppression rule */
    suppression_id: string;
  }) => Promise<SecurityMonitoringSuppressionResponse>;

  /**
   * Get a suppression's version history
   */
  getSuppressionVersionHistory: (input: {
    /** The ID of the suppression rule */
    suppression_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<GetSuppressionVersionHistoryResponse>;

  /**
   * Get content pack states
   */
  getContentPacksStates: () => Promise<SecurityMonitoringContentPackStatesResponse>;

  /**
   * Activate content pack
   */
  activateContentPack: (input: {
    /** The ID of the content pack to activate. */
    content_pack_id: string;
  }) => Promise<undefined>;

  /**
   * Deactivate content pack
   */
  deactivateContentPack: (input: {
    /** The ID of the content pack to deactivate. */
    content_pack_id: string;
  }) => Promise<undefined>;

  /**
   * List rules
   */
  listSecurityMonitoringRules: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** A search query to filter security rules. You can filter by attributes such as `type`, `source`, `tags`. */
    query?: string;
    sort?: SecurityMonitoringRuleSort;
  }) => Promise<SecurityMonitoringListRulesResponse>;

  /**
   * Create a detection rule
   */
  createSecurityMonitoringRule: (input: {
    body: SecurityMonitoringRuleCreatePayload;
  }) => Promise<SecurityMonitoringRuleResponse>;

  /**
   * Bulk export security monitoring rules
   */
  bulkExportSecurityMonitoringRules: (input: {
    data: SecurityMonitoringRuleBulkExportData;
  }) => Promise<string>;

  /**
   * Convert a rule from JSON to Terraform
   */
  convertSecurityMonitoringRuleFromJsonToTerraform: (input: {
    body: SecurityMonitoringRuleConvertPayload;
  }) => Promise<SecurityMonitoringRuleConvertResponse>;

  /**
   * Test a rule
   */
  testSecurityMonitoringRule: (input: {
    rule?: SecurityMonitoringRuleTestPayload;
    /** Data payloads used to test rules query with the expected result. */
    ruleQueryPayloads?: (SecurityMonitoringRuleQueryPayload)[];
  }) => Promise<SecurityMonitoringRuleTestResponse>;

  /**
   * Validate a detection rule
   */
  validateSecurityMonitoringRule: (input: {
    body: SecurityMonitoringRuleValidatePayload;
  }) => Promise<undefined>;

  /**
   * Delete an existing rule
   */
  deleteSecurityMonitoringRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get a rule's details
   */
  getSecurityMonitoringRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringRuleResponse>;

  /**
   * Update an existing rule
   */
  updateSecurityMonitoringRule: (input: {
    /** Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined. */
    calculatedFields?: (CalculatedField)[];
    /** Cases for generating signals. */
    cases?: (SecurityMonitoringRuleCase)[];
    complianceSignalOptions?: CloudConfigurationRuleComplianceSignalOptions;
    /** Custom/Overridden Message for generated signals (used in case of Default rule update). */
    customMessage?: string;
    /** Custom/Overridden name (used in case of Default rule update). */
    customName?: string;
    /** Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules. */
    filters?: (SecurityMonitoringFilter)[];
    /** Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups. */
    groupSignalsBy?: (string)[];
    /** Whether the notifications include the triggering group-by values in their title. */
    hasExtendedTitle?: boolean;
    /** Whether the rule is enabled. */
    isEnabled?: boolean;
    /** Message for generated signals. */
    message?: string;
    /** Name of the rule. */
    name?: string;
    options?: SecurityMonitoringRuleOptions;
    /** Queries for selecting logs which are part of the rule. */
    queries?: (SecurityMonitoringRuleQuery)[];
    /** Reference tables for the rule. */
    referenceTables?: (SecurityMonitoringReferenceTable)[];
    schedulingOptions?: SecurityMonitoringSchedulingOptions;
    /** Tags for generated signals. */
    tags?: (string)[];
    /** Cases for generating signals from third-party rules. Only available for third-party rules. */
    thirdPartyCases?: (SecurityMonitoringThirdPartyRuleCase)[];
    /** The version of the rule being updated. */
    version?: number;
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringRuleResponse>;

  /**
   * Convert an existing rule from JSON to Terraform
   */
  convertExistingSecurityMonitoringRule: (input: {
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringRuleConvertResponse>;

  /**
   * Test an existing rule
   */
  testExistingSecurityMonitoringRule: (input: {
    rule?: SecurityMonitoringRuleTestPayload;
    /** Data payloads used to test rules query with the expected result. */
    ruleQueryPayloads?: (SecurityMonitoringRuleQueryPayload)[];
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SecurityMonitoringRuleTestResponse>;

  /**
   * Get a rule's version history
   */
  getRuleVersionHistory: (input: {
    /** The ID of the rule. */
    rule_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<GetRuleVersionHistoryResponse>;

  /**
   * Get a quick list of security signals
   */
  listSecurityMonitoringSignals: (input: {
    /** The search query for security signals. */
    "filter[query]"?: string;
    /** The minimum timestamp for requested security signals. */
    "filter[from]"?: string;
    /** The maximum timestamp for requested security signals. */
    "filter[to]"?: string;
    sort?: SecurityMonitoringSignalsSort;
    /** A list of results using the cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** The maximum number of security signals in the response. */
    "page[limit]"?: number;
  }) => Promise<SecurityMonitoringSignalsListResponse>;

  /**
   * Bulk update triage assignee of security signals
   */
  bulkEditSecurityMonitoringSignalsAssignee: (input: {
    /** An array of signal assignee updates. */
    data: (SecurityMonitoringSignalsBulkAssigneeUpdateData)[];
  }) => Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse>;

  /**
   * Bulk update triage state of security signals
   */
  bulkEditSecurityMonitoringSignalsState: (input: {
    /** An array of signal state updates. */
    data: (SecurityMonitoringSignalsBulkStateUpdateData)[];
  }) => Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse>;

  /**
   * Get a list of security signals
   */
  searchSecurityMonitoringSignals: (input: {
    filter?: SecurityMonitoringSignalListRequestFilter;
    page?: SecurityMonitoringSignalListRequestPage;
    sort?: SecurityMonitoringSignalsSort;
  }) => Promise<SecurityMonitoringSignalsListResponse>;

  /**
   * Get a signal's details
   */
  getSecurityMonitoringSignal: (input: {
    /** The ID of the signal. */
    signal_id: string;
  }) => Promise<SecurityMonitoringSignalResponse>;

  /**
   * Modify the triage assignee of a security signal
   */
  editSecurityMonitoringSignalAssignee: (input: {
    data: SecurityMonitoringSignalAssigneeUpdateData;
    /** The ID of the signal. */
    signal_id: string;
  }) => Promise<SecurityMonitoringSignalTriageUpdateResponse>;

  /**
   * Change the related incidents of a security signal
   */
  editSecurityMonitoringSignalIncidents: (input: {
    data: SecurityMonitoringSignalIncidentsUpdateData;
    /** The ID of the signal. */
    signal_id: string;
  }) => Promise<SecurityMonitoringSignalTriageUpdateResponse>;

  /**
   * Change the triage state of a security signal
   */
  editSecurityMonitoringSignalState: (input: {
    data: SecurityMonitoringSignalStateUpdateData;
    /** The ID of the signal. */
    signal_id: string;
  }) => Promise<SecurityMonitoringSignalTriageUpdateResponse>;

  /**
   * List Scanning Groups
   */
  listScanningGroups: () => Promise<SensitiveDataScannerGetConfigResponse>;

  /**
   * Reorder Groups
   */
  reorderScanningGroups: (input: {
    data: SensitiveDataScannerReorderConfig;
    meta: SensitiveDataScannerMetaVersionOnly;
  }) => Promise<SensitiveDataScannerReorderGroupsResponse>;

  /**
   * Create Scanning Group
   */
  createScanningGroup: (input: {
    data?: SensitiveDataScannerGroupCreate;
    meta?: SensitiveDataScannerMetaVersionOnly;
  }) => Promise<SensitiveDataScannerCreateGroupResponse>;

  /**
   * Delete Scanning Group
   */
  deleteScanningGroup: (input: {
    meta: SensitiveDataScannerMetaVersionOnly;
    /** The ID of a group of rules. */
    group_id: string;
  }) => Promise<SensitiveDataScannerGroupDeleteResponse>;

  /**
   * Update Scanning Group
   */
  updateScanningGroup: (input: {
    data: SensitiveDataScannerGroupUpdate;
    meta: SensitiveDataScannerMetaVersionOnly;
    /** The ID of a group of rules. */
    group_id: string;
  }) => Promise<SensitiveDataScannerGroupUpdateResponse>;

  /**
   * Create Scanning Rule
   */
  createScanningRule: (input: {
    data: SensitiveDataScannerRuleCreate;
    meta: SensitiveDataScannerMetaVersionOnly;
  }) => Promise<SensitiveDataScannerCreateRuleResponse>;

  /**
   * Delete Scanning Rule
   */
  deleteScanningRule: (input: {
    meta: SensitiveDataScannerMetaVersionOnly;
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SensitiveDataScannerRuleDeleteResponse>;

  /**
   * Update Scanning Rule
   */
  updateScanningRule: (input: {
    data: SensitiveDataScannerRuleUpdate;
    meta: SensitiveDataScannerMetaVersionOnly;
    /** The ID of the rule. */
    rule_id: string;
  }) => Promise<SensitiveDataScannerRuleUpdateResponse>;

  /**
   * List standard patterns
   */
  listStandardPatterns: () => Promise<SensitiveDataScannerStandardPatternsResponseData>;

  /**
   * Submit metrics
   */
  submitMetrics: (input: {
    /** A list of timeseries to submit to Datadog. */
    series: (MetricSeries)[];
  }, options?: { headers?: { "Content-Encoding"?: "deflate" | "zstd1" | "gzip" } }) => Promise<IntakePayloadAccepted>;

  /**
   * Create a service account
   */
  createServiceAccount: (input: {
    data: ServiceAccountCreateData;
  }) => Promise<UserResponse>;

  /**
   * List application keys for this service account
   */
  listServiceAccountApplicationKeys: (input: {
    /** The ID of the service account. */
    service_account_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: ApplicationKeysSort;
    /** Filter application keys by the specified string. */
    filter?: string;
    /** Only include application keys created on or after the specified date. */
    "filter[created_at][start]"?: string;
    /** Only include application keys created on or before the specified date. */
    "filter[created_at][end]"?: string;
  }) => Promise<ListApplicationKeysResponse>;

  /**
   * Create an application key for this service account
   */
  createServiceAccountApplicationKey: (input: {
    data: ApplicationKeyCreateData;
    /** The ID of the service account. */
    service_account_id: string;
  }) => Promise<ApplicationKeyResponse>;

  /**
   * Delete an application key for this service account
   */
  deleteServiceAccountApplicationKey: (input: {
    /** The ID of the service account. */
    service_account_id: string;
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<undefined>;

  /**
   * Get one application key for this service account
   */
  getServiceAccountApplicationKey: (input: {
    /** The ID of the service account. */
    service_account_id: string;
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<PartialApplicationKeyResponse>;

  /**
   * Edit an application key for this service account
   */
  updateServiceAccountApplicationKey: (input: {
    data: ApplicationKeyUpdateData;
    /** The ID of the service account. */
    service_account_id: string;
    /** The ID of the application key. */
    app_key_id: string;
  }) => Promise<PartialApplicationKeyResponse>;

  /**
   * Get a list of all incident services
   */
  listIncidentServices: (input: {
    include?: IncidentRelatedObject;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** A search query that filters services by name. */
    filter?: string;
  }) => Promise<IncidentServicesResponse>;

  /**
   * Create a new incident service
   */
  createIncidentService: (input: {
    data: IncidentServiceCreateData;
  }) => Promise<IncidentServiceResponse>;

  /**
   * Get all service definitions
   */
  listServiceDefinitions: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    schema_version?: ServiceDefinitionSchemaVersions;
  }) => Promise<ServiceDefinitionsListResponse>;

  /**
   * Create or update service definition
   */
  createOrUpdateServiceDefinitions: (input: {
    body: ServiceDefinitionsCreateRequest;
  }) => Promise<ServiceDefinitionCreateResponse>;

  /**
   * Delete a single service definition
   */
  deleteServiceDefinition: (input: {
    /** The name of the service. */
    service_name: string;
  }) => Promise<undefined>;

  /**
   * Get a single service definition
   */
  getServiceDefinition: (input: {
    /** The name of the service. */
    service_name: string;
    schema_version?: ServiceDefinitionSchemaVersions;
  }) => Promise<ServiceDefinitionGetResponse>;

  /**
   * Delete an existing incident service
   */
  deleteIncidentService: (input: {
    /** The ID of the incident service. */
    service_id: string;
  }) => Promise<undefined>;

  /**
   * Get details of an incident service
   */
  getIncidentService: (input: {
    /** The ID of the incident service. */
    service_id: string;
    include?: IncidentRelatedObject;
  }) => Promise<IncidentServiceResponse>;

  /**
   * Update an existing incident service
   */
  updateIncidentService: (input: {
    data: IncidentServiceUpdateData;
    /** The ID of the incident service. */
    service_id: string;
  }) => Promise<IncidentServiceResponse>;

  /**
   * List hist signals
   */
  listSecurityMonitoringHistsignals: (input: {
    /** The search query for security signals. */
    "filter[query]"?: string;
    /** The minimum timestamp for requested security signals. */
    "filter[from]"?: string;
    /** The maximum timestamp for requested security signals. */
    "filter[to]"?: string;
    sort?: SecurityMonitoringSignalsSort;
    /** A list of results using the cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** The maximum number of security signals in the response. */
    "page[limit]"?: number;
  }) => Promise<SecurityMonitoringSignalsListResponse>;

  /**
   * Search hist signals
   */
  searchSecurityMonitoringHistsignals: (input: {
    filter?: SecurityMonitoringSignalListRequestFilter;
    page?: SecurityMonitoringSignalListRequestPage;
    sort?: SecurityMonitoringSignalsSort;
  }) => Promise<SecurityMonitoringSignalsListResponse>;

  /**
   * Get a hist signal's details
   */
  getSecurityMonitoringHistsignal: (input: {
    /** The ID of the threat hunting signal. */
    histsignal_id: string;
  }) => Promise<SecurityMonitoringSignalResponse>;

  /**
   * List threat hunting jobs
   */
  listThreatHuntingJobs: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** The order of the jobs in results. */
    sort?: string;
    /** Query used to filter items from the fetched list. */
    "filter[query]"?: string;
  }) => Promise<ListThreatHuntingJobsResponse>;

  /**
   * Run a threat hunting job
   */
  runThreatHuntingJob: (input: {
    data?: RunThreatHuntingJobRequestData;
  }) => Promise<JobCreateResponse>;

  /**
   * Convert a job result to a signal
   */
  convertJobResultToSignal: (input: {
    data?: ConvertJobResultsToSignalsData;
  }) => Promise<undefined>;

  /**
   * Delete an existing job
   */
  deleteThreatHuntingJob: (input: {
    /** The ID of the job. */
    job_id: string;
  }) => Promise<undefined>;

  /**
   * Get a job's details
   */
  getThreatHuntingJob: (input: {
    /** The ID of the job. */
    job_id: string;
  }) => Promise<ThreatHuntingJobResponse>;

  /**
   * Cancel a threat hunting job
   */
  cancelThreatHuntingJob: (input: {
    /** The ID of the job. */
    job_id: string;
  }) => Promise<undefined>;

  /**
   * Get a job's hist signals
   */
  getSecurityMonitoringHistsignalsByJobId: (input: {
    /** The ID of the job. */
    job_id: string;
    /** The search query for security signals. */
    "filter[query]"?: string;
    /** The minimum timestamp for requested security signals. */
    "filter[from]"?: string;
    /** The maximum timestamp for requested security signals. */
    "filter[to]"?: string;
    sort?: SecurityMonitoringSignalsSort;
    /** A list of results using the cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** The maximum number of security signals in the response. */
    "page[limit]"?: number;
  }) => Promise<SecurityMonitoringSignalsListResponse>;

  /**
   * Create a new SLO report
   */
  createSloReportJob: (input: {
    data: SloReportCreateRequestData;
  }) => Promise<SloReportPostResponse>;

  /**
   * Get SLO report
   */
  getSloReport: (input: {
    /** The ID of the report job. */
    report_id: string;
  }) => Promise<string>;

  /**
   * Get SLO report status
   */
  getSloReportJobStatus: (input: {
    /** The ID of the report job. */
    report_id: string;
  }) => Promise<SloReportStatusGetResponse>;

  /**
   * Get SLO status
   */
  getSloStatus: (input: {
    /** The ID of the SLO. */
    slo_id: string;
    /** The starting timestamp for the SLO status query in epoch seconds. */
    from_ts: number;
    /** The ending timestamp for the SLO status query in epoch seconds. */
    to_ts: number;
    /** Whether to exclude correction windows from the SLO status calculation. Defaults to false. */
    disable_corrections?: boolean;
  }) => Promise<SloStatusResponse>;

  /**
   * Get SPA Recommendations
   */
  getSpaRecommendations: (input: {
    /** The service name for a spark job. */
    service: string;
    /** The recommendation service should not use its metrics cache. */
    bypass_cache?: string;
  }) => Promise<RecommendationDocument>;

  /**
   * Get SPA Recommendations with a shard parameter
   */
  getSpaRecommendationsWithShard: (input: {
    /** The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs */
    shard: string;
    /** The service name for a spark job */
    service: string;
    /** The recommendation service should not use its metrics cache. */
    bypass_cache?: string;
  }) => Promise<RecommendationDocument>;

  /**
   * Aggregate spans
   */
  aggregateSpans: (input: {
    data?: SpansAggregateData;
  }) => Promise<SpansAggregateResponse>;

  /**
   * Get a list of spans
   */
  listSpansGet: (input: {
    /** Search query following spans syntax. */
    "filter[query]"?: string;
    /** Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). */
    "filter[from]"?: string;
    /** Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). */
    "filter[to]"?: string;
    sort?: SpansSort;
    /** List following results with a cursor provided in the previous query. */
    "page[cursor]"?: string;
    /** Maximum number of spans in the response. */
    "page[limit]"?: number;
  }) => Promise<SpansListResponse>;

  /**
   * Search spans
   */
  listSpans: (input: {
    data?: SpansListRequestData;
  }) => Promise<SpansListResponse>;

  /**
   * Post dependencies for analysis
   */
  createScaResult: (input: {
    data?: ScaRequestData;
  }) => Promise<undefined>;

  /**
   * POST request to resolve vulnerable symbols
   */
  createScaResolveVulnerableSymbols: (input: {
    data?: ResolveVulnerableSymbolsRequestData;
  }) => Promise<ResolveVulnerableSymbolsResponse>;

  /**
   * Delete Custom Ruleset
   */
  deleteCustomRuleset: (input: {
    /** The ruleset name */
    ruleset_name: string;
  }) => Promise<undefined>;

  /**
   * Show Custom Ruleset
   */
  getCustomRuleset: (input: {
    /** The ruleset name */
    ruleset_name: string;
  }) => Promise<CustomRulesetResponse>;

  /**
   * Update Custom Ruleset
   */
  updateCustomRuleset: (input: {
    data?: CustomRulesetRequestData;
    /** The ruleset name */
    ruleset_name: string;
  }) => Promise<CustomRulesetResponse>;

  /**
   * Create Custom Rule
   */
  createCustomRule: (input: {
    data?: CustomRuleRequestData;
    /** The ruleset name */
    ruleset_name: string;
  }) => Promise<CustomRuleResponse>;

  /**
   * Delete Custom Rule
   */
  deleteCustomRule: (input: {
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
  }) => Promise<undefined>;

  /**
   * Show Custom Rule
   */
  getCustomRule: (input: {
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
  }) => Promise<CustomRuleResponse>;

  /**
   * List Custom Rule Revisions
   */
  listCustomRuleRevisions: (input: {
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
    /** Pagination offset */
    "page[offset]"?: number;
    /** Pagination limit */
    "page[limit]"?: number;
  }) => Promise<CustomRuleRevisionsResponse>;

  /**
   * Create Custom Rule Revision
   */
  createCustomRuleRevision: (input: {
    data?: CustomRuleRevisionRequestData;
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
  }) => Promise<undefined>;

  /**
   * Revert Custom Rule Revision
   */
  revertCustomRuleRevision: (input: {
    data?: RevertCustomRuleRevisionRequestData;
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
  }) => Promise<undefined>;

  /**
   * Show Custom Rule Revision
   */
  getCustomRuleRevision: (input: {
    /** The ruleset name */
    ruleset_name: string;
    /** The rule name */
    rule_name: string;
    /** The revision ID */
    id: string;
  }) => Promise<CustomRuleRevisionResponse>;

  /**
   * Ruleset get multiple
   */
  listMultipleRulesets: (input: {
    data?: GetMultipleRulesetsRequestData;
  }) => Promise<GetMultipleRulesetsResponse>;

  /**
   * Returns a list of Secrets rules
   */
  getSecretsRules: () => Promise<SecretRuleArray>;

  /**
   * List status pages
   */
  listStatusPages: (input: {
    /** Offset to use as the start of the page. */
    "page[offset]"?: number;
    /** The number of status pages to return per page. */
    "page[limit]"?: number;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
    include?: string;
  }) => Promise<StatusPageArray>;

  /**
   * Create status page
   */
  createStatusPage: (input: {
    data?: CreateStatusPageRequestData;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
    include?: string;
  }) => Promise<StatusPage>;

  /**
   * List degradations
   */
  listDegradations: (input: {
    /** Optional page id filter. */
    "filter[page_id]"?: string;
    /** Offset to use as the start of the page. */
    "page[offset]"?: number;
    /** The number of degradations to return per page. */
    "page[limit]"?: number;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
    /** Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved. */
    "filter[status]"?: string;
    /** Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at. */
    sort?: string;
  }) => Promise<DegradationArray>;

  /**
   * List maintenances
   */
  listMaintenances: (input: {
    /** Optional page id filter. */
    "filter[page_id]"?: string;
    /** Offset to use as the start of the page. */
    "page[offset]"?: number;
    /** The number of maintenances to return per page. */
    "page[limit]"?: number;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
    /** Optional maintenance status filter. Supported values: scheduled, in_progress, completed. */
    "filter[status]"?: string;
    /** Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date. */
    sort?: string;
  }) => Promise<MaintenanceArray>;

  /**
   * Delete status page
   */
  deleteStatusPage: (input: {
    /** The ID of the status page. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Get status page
   */
  getStatusPage: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
    include?: string;
  }) => Promise<StatusPage>;

  /**
   * Update status page
   */
  updateStatusPage: (input: {
    data?: PatchStatusPageRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** Whether to delete existing subscribers when updating a status page's type. */
    delete_subscribers?: boolean;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user. */
    include?: string;
  }) => Promise<StatusPage>;

  /**
   * List components
   */
  listComponents: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
    include?: string;
  }) => Promise<StatusPagesComponentArray>;

  /**
   * Create component
   */
  createComponent: (input: {
    data?: CreateComponentRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
    include?: string;
  }) => Promise<StatusPagesComponent>;

  /**
   * Delete component
   */
  deleteComponent: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the component. */
    component_id: string;
  }) => Promise<undefined>;

  /**
   * Get component
   */
  getComponent: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the component. */
    component_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
    include?: string;
  }) => Promise<StatusPagesComponent>;

  /**
   * Update component
   */
  updateComponent: (input: {
    data?: PatchComponentRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the component. */
    component_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group. */
    include?: string;
  }) => Promise<StatusPagesComponent>;

  /**
   * Create degradation
   */
  createDegradation: (input: {
    data?: CreateDegradationRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** Whether to notify page subscribers of the degradation. */
    notify_subscribers?: boolean;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Degradation>;

  /**
   * Delete degradation
   */
  deleteDegradation: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the degradation. */
    degradation_id: string;
  }) => Promise<undefined>;

  /**
   * Get degradation
   */
  getDegradation: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the degradation. */
    degradation_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Degradation>;

  /**
   * Update degradation
   */
  updateDegradation: (input: {
    data?: PatchDegradationRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the degradation. */
    degradation_id: string;
    /** Whether to notify page subscribers of the degradation. */
    notify_subscribers?: boolean;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Degradation>;

  /**
   * Schedule maintenance
   */
  createMaintenance: (input: {
    data?: CreateMaintenanceRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** Whether to notify page subscribers of the maintenance. */
    notify_subscribers?: boolean;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Maintenance>;

  /**
   * Get maintenance
   */
  getMaintenance: (input: {
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the maintenance. */
    maintenance_id: string;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Maintenance>;

  /**
   * Update maintenance
   */
  updateMaintenance: (input: {
    data?: PatchMaintenanceRequestData;
    /** The ID of the status page. */
    page_id: string;
    /** The ID of the maintenance. */
    maintenance_id: string;
    /** Whether to notify page subscribers of the maintenance. */
    notify_subscribers?: boolean;
    /** Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page. */
    include?: string;
  }) => Promise<Maintenance>;

  /**
   * Publish status page
   */
  publishStatusPage: (input: {
    /** The ID of the status page. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Unpublish status page
   */
  unpublishStatusPage: (input: {
    /** The ID of the status page. */
    page_id: string;
  }) => Promise<undefined>;

  /**
   * Get available subtests for a multistep test
   */
  getApiMultistepSubtests: (input: {
    /** The public ID of the API multistep test. */
    public_id: string;
  }) => Promise<SyntheticsApiMultistepSubtestsResponse>;

  /**
   * Get parent tests for a subtest
   */
  getApiMultistepSubtestParents: (input: {
    /** The public ID of the subtest. */
    public_id: string;
  }) => Promise<SyntheticsApiMultistepParentTestsResponse>;

  /**
   * Get the on-demand concurrency cap
   */
  getOnDemandConcurrencyCap: () => Promise<OnDemandConcurrencyCapResponse>;

  /**
   * Save new value for on-demand concurrency cap
   */
  setOnDemandConcurrencyCap: (input: {
    /** Value of the on-demand concurrency cap. */
    on_demand_concurrency_cap?: number;
  }) => Promise<OnDemandConcurrencyCapResponse>;

  /**
   * Create a test suite
   */
  createSyntheticsSuite: (input: {
    data: SuiteCreateEdit;
  }) => Promise<SyntheticsSuiteResponse>;

  /**
   * Bulk delete suites
   */
  deleteSyntheticsSuites: (input: {
    data: DeletedSuitesRequestDelete;
  }) => Promise<DeletedSuitesResponse>;

  /**
   * Search test suites
   */
  searchSuites: (input: {
    /** The search query. */
    query?: string;
    /** The sort order for the results (e.g., `name,asc` or `name,desc`). */
    sort?: string;
    /** If true, return only facets instead of full test details. */
    facets_only?: boolean;
    /** The offset from which to start returning results. */
    start?: number;
    /** The maximum number of results to return. */
    count?: number;
  }) => Promise<SyntheticsSuiteSearchResponse>;

  /**
   * Get a suite
   */
  getSyntheticsSuite: (input: {
    /** The public ID of the suite to get details from. */
    public_id: string;
  }) => Promise<SyntheticsSuiteResponse>;

  /**
   * Edit a test suite
   */
  editSyntheticsSuite: (input: {
    data: SuiteCreateEdit;
    /** The public ID of the suite to edit. */
    public_id: string;
  }) => Promise<SyntheticsSuiteResponse>;

  /**
   * Patch a test suite
   */
  patchTestSuite: (input: {
    data: SuiteJsonPatchRequestData;
    /** The public ID of the Synthetic test suite to patch. */
    public_id: string;
  }) => Promise<SyntheticsSuiteResponse>;

  /**
   * Bulk delete tests
   */
  deleteSyntheticsTests: (input: {
    data: DeletedTestsRequestDelete;
  }) => Promise<DeletedTestsResponse>;

  /**
   * Get a fast test result
   */
  getSyntheticsFastTestResult: (input: {
    /** The UUID of the fast test to retrieve the result for. */
    id: string;
  }) => Promise<SyntheticsFastTestResult>;

  /**
   * Create a Network Path test
   */
  createSyntheticsNetworkTest: (input: {
    data: SyntheticsNetworkTestEdit;
  }) => Promise<SyntheticsNetworkTestResponse>;

  /**
   * Get a Network Path test
   */
  getSyntheticsNetworkTest: (input: {
    /** The public ID of the Network Path test to get details from. */
    public_id: string;
  }) => Promise<SyntheticsNetworkTestResponse>;

  /**
   * Edit a Network Path test
   */
  updateSyntheticsNetworkTest: (input: {
    data: SyntheticsNetworkTestEdit;
    /** The public ID of the Network Path test to edit. */
    public_id: string;
  }) => Promise<SyntheticsNetworkTestResponse>;

  /**
   * Get a presigned URL for downloading a test file
   */
  getTestFileDownloadUrl: (input: {
    /** The bucket key referencing the file to download. */
    bucketKey: string;
    /** The public ID of the Synthetic test. */
    public_id: string;
  }) => Promise<SyntheticsTestFileDownloadResponse>;

  /**
   * Get presigned URLs for uploading a test file
   */
  getTestFileMultipartPresignedUrls: (input: {
    bucketKeyPrefix: SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix;
    /** Array of part descriptors for the multipart upload. */
    parts: (SyntheticsTestFileMultipartPresignedUrlsPart)[];
    /** The public ID of the Synthetic test. */
    public_id: string;
  }) => Promise<SyntheticsTestFileMultipartPresignedUrlsResponse>;

  /**
   * Abort a multipart upload of a test file
   */
  abortTestFileMultipartUpload: (input: {
    /** The full storage path of the file whose upload should be aborted. */
    key: string;
    /** The upload ID of the multipart upload to abort. */
    uploadId: string;
    /** The public ID of the Synthetic test. */
    public_id: string;
  }) => Promise<undefined>;

  /**
   * Complete a multipart upload of a test file
   */
  completeTestFileMultipartUpload: (input: {
    /** The full storage path for the uploaded file. */
    key: string;
    /** Array of completed parts with their ETags. */
    parts: (SyntheticsTestFileCompleteMultipartUploadPart)[];
    /** The upload ID returned when the multipart upload was initiated. */
    uploadId: string;
    /** The public ID of the Synthetic test. */
    public_id: string;
  }) => Promise<undefined>;

  /**
   * Get parent suites for a test
   */
  getTestParentSuites: (input: {
    /** The public ID of the Synthetic test. */
    public_id: string;
  }) => Promise<SyntheticsTestParentSuitesResponse>;

  /**
   * Get version history of a test
   */
  listSyntheticsTestVersions: (input: {
    /** The public ID of the Synthetic test. */
    public_id: string;
    /** The version number of the last item from the previous page. Omit to get the first page. */
    last_version_number?: number;
    /** Maximum number of version records to return per page. */
    limit?: number;
  }) => Promise<SyntheticsTestVersionHistoryResponse>;

  /**
   * Get a specific version of a test
   */
  getSyntheticsTestVersion: (input: {
    /** The public ID of the Synthetic test. */
    public_id: string;
    /** The version number to retrieve. */
    version_number: number;
    /** If `true`, include change metadata in the response. */
    include_change_metadata?: boolean;
    /** If `true`, only check whether the version exists without returning its full payload. Returns an empty object if the version exists, or 404 if not. */
    only_check_existence?: boolean;
  }) => Promise<SyntheticsTestVersionResponse>;

  /**
   * Patch a global variable
   */
  patchGlobalVariable: (input: {
    data: GlobalVariableJsonPatchRequestData;
    /** The ID of the global variable. */
    variable_id: string;
  }) => Promise<GlobalVariableResponse>;

  /**
   * List tag pipeline rulesets
   */
  listTagPipelinesRulesets: () => Promise<RulesetRespArray>;

  /**
   * Create tag pipeline ruleset
   */
  createTagPipelinesRuleset: (input: {
    data?: CreateRulesetRequestData;
  }) => Promise<RulesetResp>;

  /**
   * Reorder tag pipeline rulesets
   */
  reorderTagPipelinesRulesets: (input: {
    /** The `ReorderRulesetResourceArray` `data`. */
    data: (ReorderRulesetResourceData)[];
  }) => Promise<undefined>;

  /**
   * Validate query
   */
  validateQuery: (input: {
    data?: RulesValidateQueryRequestData;
  }) => Promise<RulesValidateQueryResponse>;

  /**
   * Delete tag pipeline ruleset
   */
  deleteTagPipelinesRuleset: (input: {
    /** The unique identifier of the ruleset */
    ruleset_id: string;
  }) => Promise<undefined>;

  /**
   * Get a tag pipeline ruleset
   */
  getTagPipelinesRuleset: (input: {
    /** The unique identifier of the ruleset */
    ruleset_id: string;
  }) => Promise<RulesetResp>;

  /**
   * Update tag pipeline ruleset
   */
  updateTagPipelinesRuleset: (input: {
    data?: UpdateRulesetRequestData;
    /** The unique identifier of the ruleset */
    ruleset_id: string;
  }) => Promise<RulesetResp>;

  /**
   * Get all teams
   */
  listTeams: (input: {
    /** Specific page number to return. */
    "page[number]"?: number;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    sort?: ListTeamsSort;
    /** Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions` */
    include?: (ListTeamsInclude)[];
    /** Search query. Can be team name, team handle, or email of team member */
    "filter[keyword]"?: string;
    /** When true, only returns teams the current user belongs to */
    "filter[me]"?: boolean;
    /** List of fields that need to be fetched. */
    "fields[team]"?: (TeamsField)[];
  }) => Promise<TeamsResponse>;

  /**
   * Create a team
   */
  createTeam: (input: {
    data: TeamCreate;
  }) => Promise<TeamResponse>;

  /**
   * Get team hierarchy links
   */
  listTeamHierarchyLinks: (input: {
    /** Specific page number to return. */
    "page[number]"?: number;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Filter by parent team ID */
    "filter[parent_team]"?: string;
    /** Filter by sub team ID */
    "filter[sub_team]"?: string;
  }) => Promise<TeamHierarchyLinksResponse>;

  /**
   * Create a team hierarchy link
   */
  addTeamHierarchyLink: (input: {
    data: TeamHierarchyLinkCreate;
  }) => Promise<TeamHierarchyLinkResponse>;

  /**
   * Remove a team hierarchy link
   */
  removeTeamHierarchyLink: (input: {
    /** The team hierarchy link's identifier */
    link_id: string;
  }) => Promise<undefined>;

  /**
   * Get a team hierarchy link
   */
  getTeamHierarchyLink: (input: {
    /** The team hierarchy link's identifier */
    link_id: string;
  }) => Promise<TeamHierarchyLinkResponse>;

  /**
   * Delete team connections
   */
  deleteTeamConnections: (input: {
    /** Array of team connection IDs to delete. */
    data: (TeamConnectionDeleteRequestDataItem)[];
  }) => Promise<undefined>;

  /**
   * List team connections
   */
  listTeamConnections: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** Filter team connections by external source systems. */
    "filter[sources]"?: (string)[];
    /** Filter team connections by Datadog team IDs. */
    "filter[team_ids]"?: (string)[];
    /** Filter team connections by connected team IDs from external systems. */
    "filter[connected_team_ids]"?: (string)[];
    /** Filter team connections by connection IDs. */
    "filter[connection_ids]"?: (string)[];
  }) => Promise<TeamConnectionsResponse>;

  /**
   * Create team connections
   */
  createTeamConnections: (input: {
    /** Array of team connections to create. */
    data: (TeamConnectionCreateData)[];
  }) => Promise<TeamConnectionsResponse>;

  /**
   * Get team sync configurations
   */
  getTeamSync: (input: {
    "filter[source]": TeamSyncAttributesSource;
  }) => Promise<TeamSyncResponse>;

  /**
   * Link Teams with GitHub Teams
   */
  syncTeams: (input: {
    data: TeamSyncData;
  }) => Promise<undefined>;

  /**
   * Get all member teams
   */
  listMemberTeams: (input: {
    /** None */
    super_team_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** List of fields that need to be fetched. */
    "fields[team]"?: (TeamsField)[];
  }) => Promise<TeamsResponse>;

  /**
   * Add a member team
   */
  addMemberTeam: (input: {
    data: MemberTeam;
    /** None */
    super_team_id: string;
  }) => Promise<undefined>;

  /**
   * Remove a member team
   */
  removeMemberTeam: (input: {
    /** None */
    super_team_id: string;
    /** None */
    member_team_id: string;
  }) => Promise<undefined>;

  /**
   * Remove a team
   */
  deleteTeam: (input: {
    /** None */
    team_id: string;
  }) => Promise<undefined>;

  /**
   * Get a team
   */
  getTeam: (input: {
    /** None */
    team_id: string;
  }) => Promise<TeamResponse>;

  /**
   * Update a team
   */
  updateTeam: (input: {
    data: TeamUpdate;
    /** None */
    team_id: string;
  }) => Promise<TeamResponse>;

  /**
   * Get links for a team
   */
  getTeamLinks: (input: {
    /** None */
    team_id: string;
  }) => Promise<TeamLinksResponse>;

  /**
   * Create a team link
   */
  createTeamLink: (input: {
    data: TeamLinkCreate;
    /** None */
    team_id: string;
  }) => Promise<TeamLinkResponse>;

  /**
   * Remove a team link
   */
  deleteTeamLink: (input: {
    /** None */
    team_id: string;
    /** None */
    link_id: string;
  }) => Promise<undefined>;

  /**
   * Get a team link
   */
  getTeamLink: (input: {
    /** None */
    team_id: string;
    /** None */
    link_id: string;
  }) => Promise<TeamLinkResponse>;

  /**
   * Update a team link
   */
  updateTeamLink: (input: {
    data: TeamLinkCreate;
    /** None */
    team_id: string;
    /** None */
    link_id: string;
  }) => Promise<TeamLinkResponse>;

  /**
   * Get team memberships
   */
  getTeamMemberships: (input: {
    /** None */
    team_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    sort?: GetTeamMembershipsSort;
    /** Search query, can be user email or name */
    "filter[keyword]"?: string;
  }) => Promise<UserTeamsResponse>;

  /**
   * Add a user to a team
   */
  createTeamMembership: (input: {
    data: UserTeamCreate;
    /** None */
    team_id: string;
  }) => Promise<UserTeamResponse>;

  /**
   * Remove a user from a team
   */
  deleteTeamMembership: (input: {
    /** None */
    team_id: string;
    /** None */
    user_id: string;
  }) => Promise<undefined>;

  /**
   * Update a user's membership attributes on a team
   */
  updateTeamMembership: (input: {
    data: UserTeamUpdate;
    /** None */
    team_id: string;
    /** None */
    user_id: string;
  }) => Promise<UserTeamResponse>;

  /**
   * Get team notification rules
   */
  getTeamNotificationRules: (input: {
    /** None */
    team_id: string;
  }) => Promise<TeamNotificationRulesResponse>;

  /**
   * Create team notification rule
   */
  createTeamNotificationRule: (input: {
    data: TeamNotificationRule;
    /** None */
    team_id: string;
  }) => Promise<TeamNotificationRuleResponse>;

  /**
   * Delete team notification rule
   */
  deleteTeamNotificationRule: (input: {
    /** None */
    team_id: string;
    /** None */
    rule_id: string;
  }) => Promise<undefined>;

  /**
   * Get team notification rule
   */
  getTeamNotificationRule: (input: {
    /** None */
    team_id: string;
    /** None */
    rule_id: string;
  }) => Promise<TeamNotificationRuleResponse>;

  /**
   * Update team notification rule
   */
  updateTeamNotificationRule: (input: {
    data: TeamNotificationRule;
    /** None */
    team_id: string;
    /** None */
    rule_id: string;
  }) => Promise<TeamNotificationRuleResponse>;

  /**
   * Get permission settings for a team
   */
  getTeamPermissionSettings: (input: {
    /** None */
    team_id: string;
  }) => Promise<TeamPermissionSettingsResponse>;

  /**
   * Update permission setting for team
   */
  updateTeamPermissionSetting: (input: {
    data: TeamPermissionSettingUpdate;
    /** None */
    team_id: string;
    /** None */
    action: string;
  }) => Promise<TeamPermissionSettingResponse>;

  /**
   * Get a list of all incident teams
   */
  listIncidentTeams: (input: {
    include?: IncidentRelatedObject;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific offset to use as the beginning of the returned page. */
    "page[offset]"?: number;
    /** A search query that filters teams by name. */
    filter?: string;
  }) => Promise<IncidentTeamsResponse>;

  /**
   * Create a new incident team
   */
  createIncidentTeam: (input: {
    data: IncidentTeamCreateData;
  }) => Promise<IncidentTeamResponse>;

  /**
   * Delete an existing incident team
   */
  deleteIncidentTeam: (input: {
    /** The ID of the incident team. */
    team_id: string;
  }) => Promise<undefined>;

  /**
   * Get details of an incident team
   */
  getIncidentTeam: (input: {
    /** The ID of the incident team. */
    team_id: string;
    include?: IncidentRelatedObject;
  }) => Promise<IncidentTeamResponse>;

  /**
   * Update an existing incident team
   */
  updateIncidentTeam: (input: {
    data: IncidentTeamUpdateData;
    /** The ID of the incident team. */
    team_id: string;
  }) => Promise<IncidentTeamResponse>;

  /**
   * Update flaky test states
   */
  updateFlakyTests: (input: {
    data: UpdateFlakyTestsRequestData;
  }) => Promise<UpdateFlakyTestsResponse>;

  /**
   * Search flaky tests
   */
  searchFlakyTests: (input: {
    data?: FlakyTestsSearchRequestData;
  }) => Promise<FlakyTestsSearchResponse>;

  /**
   * Get hourly usage for application security
   */
  getUsageApplicationSecurityMonitoring: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
    start_hr: string;
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
    end_hr?: string;
  }) => Promise<UsageApplicationSecurityMonitoringResponse>;

  /**
   * Get billing dimension mapping for usage endpoints
   */
  getBillingDimensionMapping: (input: {
    /** Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month. */
    "filter[month]"?: string;
    /** String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`. */
    "filter[view]"?: string;
  }) => Promise<BillingDimensionsMappingResponse>;

  /**
   * Get cost across multi-org account
   */
  getCostByOrg: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. */
    start_month: string;
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
    end_month?: string;
  }) => Promise<CostByOrgResponse>;

  /**
   * Get estimated cost across your account
   */
  getEstimatedCostByOrg: (input: {
    /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`. */
    view?: string;
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. **Either start_month or start_date should be specified, but not both.** (start_month cannot go beyond two months in the past). Provide an `end_month` to view month-over-month cost. */
    start_month?: string;
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
    end_month?: string;
    /** Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. **Either start_month or start_date should be specified, but not both.** (start_date cannot go beyond two months in the past). Provide an `end_date` to view day-over-day cumulative cost. */
    start_date?: string;
    /** Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day. */
    end_date?: string;
    cost_aggregation?: CostAggregationType;
    /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
    include_connected_accounts?: boolean;
  }) => Promise<CostByOrgResponse>;

  /**
   * Get historical cost across your account
   */
  getHistoricalCostByOrg: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. */
    start_month: string;
    /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`.  Defaults to `summary`. */
    view?: string;
    /** Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month. */
    end_month?: string;
    /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
    include_connected_accounts?: boolean;
  }) => Promise<CostByOrgResponse>;

  /**
   * Get hourly usage by product family
   */
  getHourlyUsage: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. */
    "filter[timestamp][start]": string;
    /** Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. */
    "filter[timestamp][end]"?: string;
    /** Comma separated list of product families to retrieve. Available families are `all`, `analyzed_logs`, `application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`, `csm_container_enterprise`, `csm_host_enterprise`, `cspm`, `custom_events`, `cws`, `dbm`, `error_tracking`, `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `ingested_spans`, `iot`, `lambda_traced_invocations`, `llm_observability`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`, `observability_pipelines`, `online_archive`, `profiling`, `product_analytics`, `rum`, `rum_browser_sessions`, `rum_mobile_sessions`, `sds`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`, `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`. The following product family has been **deprecated**: `audit_logs`. */
    "filter[product_families]": string;
    /** Include child org usage in the response. Defaults to false. */
    "filter[include_descendants]"?: boolean;
    /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false. */
    "filter[include_connected_accounts]"?: boolean;
    /** Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false. */
    "filter[include_breakdown]"?: boolean;
    /** Comma separated list of product family versions to use in the format `product_family:version`. For example, `infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested product family. Currently all families have one version `1.0.0`. */
    "filter[versions]"?: string;
    /** Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified. */
    "page[limit]"?: number;
    /** List following results with a next_record_id provided in the previous query. */
    "page[next_record_id]"?: string;
  }) => Promise<HourlyUsageResponse>;

  /**
   * Get hourly usage for Lambda traced invocations
   */
  getUsageLambdaTracedInvocations: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
    start_hr: string;
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
    end_hr?: string;
  }) => Promise<UsageLambdaTracedInvocationsResponse>;

  /**
   * Get hourly usage for observability pipelines
   */
  getUsageObservabilityPipelines: (input: {
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour. */
    start_hr: string;
    /** Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. */
    end_hr?: string;
  }) => Promise<UsageObservabilityPipelinesResponse>;

  /**
   * Get projected cost across your account
   */
  getProjectedCost: (input: {
    /** String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`. */
    view?: string;
    /** Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`. */
    include_connected_accounts?: boolean;
  }) => Promise<ProjectedCostResponse>;

  /**
   * Get usage attribution types
   */
  getUsageAttributionTypes: () => Promise<UsageAttributionTypesResponse>;

  /**
   * Send invitation emails
   */
  sendInvitations: (input: {
    /** List of user invitations. */
    data: (UserInvitationData)[];
  }) => Promise<UserInvitationsResponse>;

  /**
   * Get a user invitation
   */
  getInvitation: (input: {
    /** The UUID of the user invitation. */
    user_invitation_uuid: string;
  }) => Promise<UserInvitationResponse>;

  /**
   * List all users
   */
  listUsers: (input: {
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
    /** User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `modified_at`, `user_count`. */
    sort?: string;
    sort_dir?: QuerySortOrder;
    /** Filter all users by the given string. Defaults to no filtering. */
    filter?: string;
    /** Filter on status attribute. Comma separated list, with possible values `Active`, `Pending`, and `Disabled`. Defaults to no filtering. */
    "filter[status]"?: string;
  }) => Promise<UsersResponse>;

  /**
   * Create a user
   */
  createUser: (input: {
    data: UserCreateData;
  }) => Promise<UserResponse>;

  /**
   * Disable a user
   */
  disableUser: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<undefined>;

  /**
   * Get user details
   */
  getUser: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<UserResponse>;

  /**
   * Update a user
   */
  updateUser: (input: {
    data: UserUpdateData;
    /** The ID of the user. */
    user_id: string;
  }) => Promise<UserResponse>;

  /**
   * Get a user organization
   */
  listUserOrganizations: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<UserResponse>;

  /**
   * Get a user permissions
   */
  listUserPermissions: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<PermissionsResponse>;

  /**
   * Get user memberships
   */
  getUserMemberships: (input: {
    /** None */
    user_uuid: string;
  }) => Promise<UserTeamsResponse>;

  /**
   * Search widgets
   */
  searchWidgets: (input: {
    experience_type: WidgetExperienceType;
    "filter[widgetType]"?: WidgetType;
    /** Filter widgets by the email handle of the creator. */
    "filter[creatorHandle]"?: string;
    /** Filter to only widgets favorited by the current user. */
    "filter[isFavorited]"?: boolean;
    /** Filter widgets by title (substring match). */
    "filter[title]"?: string;
    /** Filter widgets by tags. Format as bracket-delimited CSV, e.g. `[tag1,tag2]`. */
    "filter[tags]"?: string;
    /** Sort field for the results. Prefix with `-` for descending order. Allowed values: `title`, `created_at`, `modified_at`. */
    sort?: string;
    /** Page number for pagination (0-indexed). */
    "page[number]"?: number;
    /** Number of widgets per page. */
    "page[size]"?: number;
  }) => Promise<WidgetListResponse>;

  /**
   * Create a widget
   */
  createWidget: (input: {
    data: CreateOrUpdateWidgetRequestData;
    experience_type: WidgetExperienceType;
  }) => Promise<WidgetResponse>;

  /**
   * Delete a widget
   */
  deleteWidget: (input: {
    experience_type: WidgetExperienceType;
    /** The UUID of the widget. */
    uuid: string;
  }) => Promise<undefined>;

  /**
   * Get a widget
   */
  getWidget: (input: {
    experience_type: WidgetExperienceType;
    /** The UUID of the widget. */
    uuid: string;
  }) => Promise<WidgetResponse>;

  /**
   * Update a widget
   */
  updateWidget: (input: {
    data: CreateOrUpdateWidgetRequestData;
    experience_type: WidgetExperienceType;
    /** The UUID of the widget. */
    uuid: string;
  }) => Promise<WidgetResponse>;

  /**
   * Create a Workflow
   */
  createWorkflow: (input: {
    data: WorkflowData;
  }) => Promise<CreateWorkflowResponse>;

  /**
   * Delete an existing Workflow
   */
  deleteWorkflow: (input: {
    /** The ID of the workflow. */
    workflow_id: string;
  }) => Promise<undefined>;

  /**
   * Get an existing Workflow
   */
  getWorkflow: (input: {
    /** The ID of the workflow. */
    workflow_id: string;
  }) => Promise<GetWorkflowResponse>;

  /**
   * Update an existing Workflow
   */
  updateWorkflow: (input: {
    data: WorkflowDataUpdate;
    /** The ID of the workflow. */
    workflow_id: string;
  }) => Promise<UpdateWorkflowResponse>;

  /**
   * List workflow instances
   */
  listWorkflowInstances: (input: {
    /** The ID of the workflow. */
    workflow_id: string;
    /** Size for a given page. The maximum allowed value is 100. */
    "page[size]"?: number;
    /** Specific page number to return. */
    "page[number]"?: number;
  }) => Promise<WorkflowListInstancesResponse>;

  /**
   * Execute a workflow
   */
  createWorkflowInstance: (input: {
    meta?: WorkflowInstanceCreateMeta;
    /** The ID of the workflow. */
    workflow_id: string;
  }) => Promise<WorkflowInstanceCreateResponse>;

  /**
   * Get a workflow instance
   */
  getWorkflowInstance: (input: {
    /** The ID of the workflow. */
    workflow_id: string;
    /** The ID of the workflow instance. */
    instance_id: string;
  }) => Promise<WorklflowGetInstanceResponse>;

  /**
   * Cancel a workflow instance
   */
  cancelWorkflowInstance: (input: {
    /** The ID of the workflow. */
    workflow_id: string;
    /** The ID of the workflow instance. */
    instance_id: string;
  }) => Promise<WorklflowCancelInstanceResponse>;
};

export * from "./schemas.js";
