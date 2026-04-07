import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "meta/root": {
    "accessPath": [
      "meta",
      "root"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/list-global-advisories": {
    "accessPath": [
      "securityAdvisories",
      "listGlobalAdvisories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/advisories",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ghsa_id",
      "type",
      "cve_id",
      "ecosystem",
      "severity",
      "cwes",
      "is_withdrawn",
      "affects",
      "published",
      "updated",
      "modified",
      "epss_percentage",
      "epss_percentile",
      "before",
      "after",
      "direction",
      "per_page",
      "sort"
    ]
  },
  "security-advisories/get-global-advisory": {
    "accessPath": [
      "securityAdvisories",
      "getGlobalAdvisory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/advisories/{ghsa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ghsa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "agent-tasks/list-tasks-for-repo": {
    "accessPath": [
      "agentTasks",
      "listTasksForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/agents/repos/{owner}/{repo}/tasks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "sort",
      "direction",
      "state",
      "is_archived",
      "since",
      "creator_id"
    ]
  },
  "agent-tasks/create-task": {
    "accessPath": [
      "agentTasks",
      "createTask"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_id",
      "problem_statement",
      "event_content",
      "model",
      "custom_agent",
      "create_pull_request",
      "base_ref"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/agents/repos/{owner}/{repo}/tasks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "agent-tasks/get-task-by-repo-and-id": {
    "accessPath": [
      "agentTasks",
      "getTaskByRepoAndId"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/agents/repos/{owner}/{repo}/tasks/{task_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "task_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "agent-tasks/list-tasks": {
    "accessPath": [
      "agentTasks",
      "listTasks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/agents/tasks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "sort",
      "direction",
      "state",
      "is_archived",
      "since"
    ]
  },
  "agent-tasks/get-task-by-id": {
    "accessPath": [
      "agentTasks",
      "getTaskById"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/agents/tasks/{task_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "task_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/get-authenticated": {
    "accessPath": [
      "apps",
      "getAuthenticated"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/create-from-manifest": {
    "accessPath": [
      "apps",
      "createFromManifest"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/app-manifests/{code}/conversions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "code"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/get-webhook-config-for-app": {
    "accessPath": [
      "apps",
      "getWebhookConfigForApp"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/hook/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/update-webhook-config-for-app": {
    "accessPath": [
      "apps",
      "updateWebhookConfigForApp"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "url",
      "content_type",
      "secret",
      "insecure_ssl"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/app/hook/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-webhook-deliveries": {
    "accessPath": [
      "apps",
      "listWebhookDeliveries"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/hook/deliveries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "cursor",
      "status"
    ]
  },
  "apps/get-webhook-delivery": {
    "accessPath": [
      "apps",
      "getWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/hook/deliveries/{delivery_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/redeliver-webhook-delivery": {
    "accessPath": [
      "apps",
      "redeliverWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/app/hook/deliveries/{delivery_id}/attempts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-installation-requests-for-authenticated-app": {
    "accessPath": [
      "apps",
      "listInstallationRequestsForAuthenticatedApp"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/installation-requests",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/list-installations": {
    "accessPath": [
      "apps",
      "listInstallations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/installations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "since",
      "outdated"
    ]
  },
  "apps/get-installation": {
    "accessPath": [
      "apps",
      "getInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/app/installations/{installation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/delete-installation": {
    "accessPath": [
      "apps",
      "deleteInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/app/installations/{installation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/create-installation-access-token": {
    "accessPath": [
      "apps",
      "createInstallationAccessToken"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "repositories",
      "repository_ids",
      "permissions"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/app/installations/{installation_id}/access_tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/suspend-installation": {
    "accessPath": [
      "apps",
      "suspendInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/app/installations/{installation_id}/suspended",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/unsuspend-installation": {
    "accessPath": [
      "apps",
      "unsuspendInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/app/installations/{installation_id}/suspended",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/delete-authorization": {
    "accessPath": [
      "apps",
      "deleteAuthorization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_token"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/applications/{client_id}/grant",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "client_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/check-token": {
    "accessPath": [
      "apps",
      "checkToken"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_token"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/applications/{client_id}/token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "client_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/reset-token": {
    "accessPath": [
      "apps",
      "resetToken"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_token"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/applications/{client_id}/token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "client_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/delete-token": {
    "accessPath": [
      "apps",
      "deleteToken"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_token"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/applications/{client_id}/token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "client_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/scope-token": {
    "accessPath": [
      "apps",
      "scopeToken"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_token",
      "target",
      "target_id",
      "repositories",
      "repository_ids",
      "permissions"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/applications/{client_id}/token/scoped",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "client_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/get-by-slug": {
    "accessPath": [
      "apps",
      "getBySlug"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/apps/{app_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "classroom/get-an-assignment": {
    "accessPath": [
      "classroom",
      "getAnAssignment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/assignments/{assignment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assignment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "classroom/list-accepted-assignments-for-an-assignment": {
    "accessPath": [
      "classroom",
      "listAcceptedAssignmentsForAnAssignment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/assignments/{assignment_id}/accepted_assignments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assignment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "classroom/get-assignment-grades": {
    "accessPath": [
      "classroom",
      "getAssignmentGrades"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/assignments/{assignment_id}/grades",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assignment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "classroom/list-classrooms": {
    "accessPath": [
      "classroom",
      "listClassrooms"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/classrooms",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "classroom/get-a-classroom": {
    "accessPath": [
      "classroom",
      "getAClassroom"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/classrooms/{classroom_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "classroom_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "classroom/list-assignments-for-a-classroom": {
    "accessPath": [
      "classroom",
      "listAssignmentsForAClassroom"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/classrooms/{classroom_id}/assignments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "classroom_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "codes-of-conduct/get-all-codes-of-conduct": {
    "accessPath": [
      "codesOfConduct",
      "getAllCodesOfConduct"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/codes_of_conduct",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codes-of-conduct/get-conduct-code": {
    "accessPath": [
      "codesOfConduct",
      "getConductCode"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/codes_of_conduct/{key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "credentials/revoke": {
    "accessPath": [
      "credentials",
      "revoke"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "credentials"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/credentials/revoke",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "emojis/get": {
    "accessPath": [
      "emojis",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/emojis",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-retention-limit-for-enterprise": {
    "accessPath": [
      "actions",
      "getActionsCacheRetentionLimitForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-retention-limit-for-enterprise": {
    "accessPath": [
      "actions",
      "setActionsCacheRetentionLimitForEnterprise"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_retention_days"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/enterprises/{enterprise}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-storage-limit-for-enterprise": {
    "accessPath": [
      "actions",
      "getActionsCacheStorageLimitForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-storage-limit-for-enterprise": {
    "accessPath": [
      "actions",
      "setActionsCacheStorageLimitForEnterprise"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_size_gb"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/enterprises/{enterprise}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/list-oidc-custom-property-inclusions-for-enterprise": {
    "accessPath": [
      "oidc",
      "listOidcCustomPropertyInclusionsForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/actions/oidc/customization/properties/repo",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/create-oidc-custom-property-inclusion-for-enterprise": {
    "accessPath": [
      "oidc",
      "createOidcCustomPropertyInclusionForEnterprise"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "custom_property_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/actions/oidc/customization/properties/repo",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/delete-oidc-custom-property-inclusion-for-enterprise": {
    "accessPath": [
      "oidc",
      "deleteOidcCustomPropertyInclusionForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/enterprises/{enterprise}/actions/oidc/customization/properties/repo/{custom_property_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "custom_property_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-configurations-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "getConfigurationsForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after"
    ]
  },
  "code-security/create-configuration-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "createConfigurationForEnterprise"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "advanced_security",
      "code_security",
      "dependency_graph",
      "dependency_graph_autosubmit_action",
      "dependency_graph_autosubmit_action_options",
      "dependabot_alerts",
      "dependabot_security_updates",
      "code_scanning_options",
      "code_scanning_default_setup",
      "code_scanning_default_setup_options",
      "code_scanning_delegated_alert_dismissal",
      "secret_protection",
      "secret_scanning",
      "secret_scanning_push_protection",
      "secret_scanning_validity_checks",
      "secret_scanning_non_provider_patterns",
      "secret_scanning_generic_secrets",
      "secret_scanning_delegated_alert_dismissal",
      "secret_scanning_extended_metadata",
      "private_vulnerability_reporting",
      "enforcement"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-default-configurations-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "getDefaultConfigurationsForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/defaults",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-single-configuration-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "getSingleConfigurationForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/update-enterprise-configuration": {
    "accessPath": [
      "codeSecurity",
      "updateEnterpriseConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "advanced_security",
      "code_security",
      "dependency_graph",
      "dependency_graph_autosubmit_action",
      "dependency_graph_autosubmit_action_options",
      "dependabot_alerts",
      "dependabot_security_updates",
      "code_scanning_default_setup",
      "code_scanning_default_setup_options",
      "code_scanning_options",
      "code_scanning_delegated_alert_dismissal",
      "secret_protection",
      "secret_scanning",
      "secret_scanning_push_protection",
      "secret_scanning_validity_checks",
      "secret_scanning_non_provider_patterns",
      "secret_scanning_generic_secrets",
      "secret_scanning_delegated_alert_dismissal",
      "secret_scanning_extended_metadata",
      "private_vulnerability_reporting",
      "enforcement"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/delete-configuration-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "deleteConfigurationForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/attach-enterprise-configuration": {
    "accessPath": [
      "codeSecurity",
      "attachEnterpriseConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "scope"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/set-configuration-as-default-for-enterprise": {
    "accessPath": [
      "codeSecurity",
      "setConfigurationAsDefaultForEnterprise"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "default_for_new_repos"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-repositories-for-enterprise-configuration": {
    "accessPath": [
      "codeSecurity",
      "getRepositoriesForEnterpriseConfiguration"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "status"
    ]
  },
  "copilot/copilot-enterprise-one-day-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotEnterpriseOneDayUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "day"
    ]
  },
  "copilot/copilot-enterprise-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotEnterpriseUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/copilot/metrics/reports/enterprise-28-day/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/copilot-users-one-day-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotUsersOneDayUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/copilot/metrics/reports/users-1-day",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "day"
    ]
  },
  "copilot/copilot-users-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotUsersUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/copilot/metrics/reports/users-28-day/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/list-alerts-for-enterprise": {
    "accessPath": [
      "dependabot",
      "listAlertsForEnterprise"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/dependabot/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "classification",
      "state",
      "severity",
      "ecosystem",
      "package",
      "epss_percentage",
      "has",
      "assignee",
      "scope",
      "sort",
      "direction",
      "before",
      "after",
      "per_page"
    ]
  },
  "enterprise-teams/list": {
    "accessPath": [
      "enterpriseTeams",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "enterprise-teams/create": {
    "accessPath": [
      "enterpriseTeams",
      "create"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "sync_to_organizations",
      "organization_selection_type",
      "group_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-memberships/list": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "enterprise-team-memberships/bulk-add": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "bulkAdd"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships/add",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-memberships/bulk-remove": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "bulkRemove"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-memberships/get": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-memberships/add": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "add"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-memberships/remove": {
    "accessPath": [
      "enterpriseTeamMemberships",
      "remove"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-organizations/get-assignments": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "getAssignments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "enterprise-team-organizations/bulk-add": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "bulkAdd"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "organization_slugs"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations/add",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-organizations/bulk-remove": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "bulkRemove"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "organization_slugs"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations/remove",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-organizations/get-assignment": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "getAssignment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-organizations/add": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "add"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-team-organizations/delete": {
    "accessPath": [
      "enterpriseTeamOrganizations",
      "delete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "enterprise-team",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-teams/get": {
    "accessPath": [
      "enterpriseTeams",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/enterprises/{enterprise}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-teams/update": {
    "accessPath": [
      "enterpriseTeams",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "sync_to_organizations",
      "organization_selection_type",
      "group_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/enterprises/{enterprise}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "enterprise-teams/delete": {
    "accessPath": [
      "enterpriseTeams",
      "delete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/enterprises/{enterprise}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "enterprise",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-public-events": {
    "accessPath": [
      "activity",
      "listPublicEvents"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/get-feeds": {
    "accessPath": [
      "activity",
      "getFeeds"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/feeds",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/list": {
    "accessPath": [
      "gists",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page",
      "page"
    ]
  },
  "gists/create": {
    "accessPath": [
      "gists",
      "create"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "files",
      "public"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/gists",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/list-public": {
    "accessPath": [
      "gists",
      "listPublic"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/public",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page",
      "page"
    ]
  },
  "gists/list-starred": {
    "accessPath": [
      "gists",
      "listStarred"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/starred",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page",
      "page"
    ]
  },
  "gists/get": {
    "accessPath": [
      "gists",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/update": {
    "accessPath": [
      "gists",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "files"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/gists/{gist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/delete": {
    "accessPath": [
      "gists",
      "delete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/gists/{gist_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/list-comments": {
    "accessPath": [
      "gists",
      "listComments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "gists/create-comment": {
    "accessPath": [
      "gists",
      "createComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/gists/{gist_id}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/get-comment": {
    "accessPath": [
      "gists",
      "getComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/update-comment": {
    "accessPath": [
      "gists",
      "updateComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/gists/{gist_id}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/delete-comment": {
    "accessPath": [
      "gists",
      "deleteComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/gists/{gist_id}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/list-commits": {
    "accessPath": [
      "gists",
      "listCommits"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "gists/list-forks": {
    "accessPath": [
      "gists",
      "listForks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/forks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "gists/fork": {
    "accessPath": [
      "gists",
      "fork"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/gists/{gist_id}/forks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/check-is-starred": {
    "accessPath": [
      "gists",
      "checkIsStarred"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/star",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/star": {
    "accessPath": [
      "gists",
      "star"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/gists/{gist_id}/star",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/unstar": {
    "accessPath": [
      "gists",
      "unstar"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/gists/{gist_id}/star",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/get-revision": {
    "accessPath": [
      "gists",
      "getRevision"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gists/{gist_id}/{sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gist_id",
      "sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gitignore/get-all-templates": {
    "accessPath": [
      "gitignore",
      "getAllTemplates"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gitignore/templates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gitignore/get-template": {
    "accessPath": [
      "gitignore",
      "getTemplate"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/gitignore/templates/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-repos-accessible-to-installation": {
    "accessPath": [
      "apps",
      "listReposAccessibleToInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/installation/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/revoke-installation-access-token": {
    "accessPath": [
      "apps",
      "revokeInstallationAccessToken"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/installation/token",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list": {
    "accessPath": [
      "issues",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "state",
      "labels",
      "sort",
      "direction",
      "since",
      "collab",
      "orgs",
      "owned",
      "pulls",
      "per_page",
      "page"
    ]
  },
  "licenses/get-all-commonly-used": {
    "accessPath": [
      "licenses",
      "getAllCommonlyUsed"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/licenses",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "featured",
      "per_page",
      "page"
    ]
  },
  "licenses/get": {
    "accessPath": [
      "licenses",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/licenses/{license}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "license"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "markdown/render": {
    "accessPath": [
      "markdown",
      "render"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "text",
      "mode",
      "context"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/markdown",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "markdown/render-raw": {
    "accessPath": [
      "markdown",
      "renderRaw"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/markdown/raw",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/get-subscription-plan-for-account": {
    "accessPath": [
      "apps",
      "getSubscriptionPlanForAccount"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-plans": {
    "accessPath": [
      "apps",
      "listPlans"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/plans",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/list-accounts-for-plan": {
    "accessPath": [
      "apps",
      "listAccountsForPlan"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/plans/{plan_id}/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "plan_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "apps/get-subscription-plan-for-account-stubbed": {
    "accessPath": [
      "apps",
      "getSubscriptionPlanForAccountStubbed"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/stubbed/accounts/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-plans-stubbed": {
    "accessPath": [
      "apps",
      "listPlansStubbed"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/stubbed/plans",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/list-accounts-for-plan-stubbed": {
    "accessPath": [
      "apps",
      "listAccountsForPlanStubbed"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/marketplace_listing/stubbed/plans/{plan_id}/accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "plan_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "meta/get": {
    "accessPath": [
      "meta",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/meta",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-public-events-for-repo-network": {
    "accessPath": [
      "activity",
      "listPublicEventsForRepoNetwork"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/networks/{owner}/{repo}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-notifications-for-authenticated-user": {
    "accessPath": [
      "activity",
      "listNotificationsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/notifications",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "all",
      "participating",
      "since",
      "before",
      "page",
      "per_page"
    ]
  },
  "activity/mark-notifications-as-read": {
    "accessPath": [
      "activity",
      "markNotificationsAsRead"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "last_read_at",
      "read"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/notifications",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/get-thread": {
    "accessPath": [
      "activity",
      "getThread"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/notifications/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/mark-thread-as-read": {
    "accessPath": [
      "activity",
      "markThreadAsRead"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/notifications/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/mark-thread-as-done": {
    "accessPath": [
      "activity",
      "markThreadAsDone"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/notifications/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/get-thread-subscription-for-authenticated-user": {
    "accessPath": [
      "activity",
      "getThreadSubscriptionForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/notifications/threads/{thread_id}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/set-thread-subscription": {
    "accessPath": [
      "activity",
      "setThreadSubscription"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ignored"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/notifications/threads/{thread_id}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/delete-thread-subscription": {
    "accessPath": [
      "activity",
      "deleteThreadSubscription"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/notifications/threads/{thread_id}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "meta/get-octocat": {
    "accessPath": [
      "meta",
      "getOctocat"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/octocat",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "s"
    ]
  },
  "orgs/list": {
    "accessPath": [
      "orgs",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page"
    ]
  },
  "actions/get-actions-cache-retention-limit-for-organization": {
    "accessPath": [
      "actions",
      "getActionsCacheRetentionLimitForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-retention-limit-for-organization": {
    "accessPath": [
      "actions",
      "setActionsCacheRetentionLimitForOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_retention_days"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/organizations/{org}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-storage-limit-for-organization": {
    "accessPath": [
      "actions",
      "getActionsCacheStorageLimitForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-storage-limit-for-organization": {
    "accessPath": [
      "actions",
      "setActionsCacheStorageLimitForOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_size_gb"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/organizations/{org}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/repository-access-for-org": {
    "accessPath": [
      "dependabot",
      "repositoryAccessForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/dependabot/repository-access",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "dependabot/update-repository-access-for-org": {
    "accessPath": [
      "dependabot",
      "updateRepositoryAccessForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "repository_ids_to_add",
      "repository_ids_to_remove"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/organizations/{org}/dependabot/repository-access",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/set-repository-access-default-level": {
    "accessPath": [
      "dependabot",
      "setRepositoryAccessDefaultLevel"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "default_level"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/organizations/{org}/dependabot/repository-access/default-level",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "billing/get-all-budgets-org": {
    "accessPath": [
      "billing",
      "getAllBudgetsOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/settings/billing/budgets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "scope"
    ]
  },
  "billing/get-budget-org": {
    "accessPath": [
      "billing",
      "getBudgetOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/settings/billing/budgets/{budget_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "budget_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "billing/update-budget-org": {
    "accessPath": [
      "billing",
      "updateBudgetOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "budget_amount",
      "prevent_further_usage",
      "budget_alerting",
      "budget_scope",
      "budget_entity_name",
      "budget_type",
      "budget_product_sku"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/organizations/{org}/settings/billing/budgets/{budget_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "budget_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "billing/delete-budget-org": {
    "accessPath": [
      "billing",
      "deleteBudgetOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/organizations/{org}/settings/billing/budgets/{budget_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "budget_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "billing/get-github-billing-premium-request-usage-report-org": {
    "accessPath": [
      "billing",
      "getGithubBillingPremiumRequestUsageReportOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/settings/billing/premium_request/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day",
      "user",
      "model",
      "product"
    ]
  },
  "billing/get-github-billing-usage-report-org": {
    "accessPath": [
      "billing",
      "getGithubBillingUsageReportOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/settings/billing/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day"
    ]
  },
  "billing/get-github-billing-usage-summary-report-org": {
    "accessPath": [
      "billing",
      "getGithubBillingUsageSummaryReportOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/organizations/{org}/settings/billing/usage/summary",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day",
      "repository",
      "product",
      "sku"
    ]
  },
  "orgs/get": {
    "accessPath": [
      "orgs",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update": {
    "accessPath": [
      "orgs",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "billing_email",
      "company",
      "email",
      "twitter_username",
      "location",
      "name",
      "description",
      "has_organization_projects",
      "has_repository_projects",
      "default_repository_permission",
      "members_can_create_repositories",
      "members_can_create_internal_repositories",
      "members_can_create_private_repositories",
      "members_can_create_public_repositories",
      "members_allowed_repository_creation_type",
      "members_can_create_pages",
      "members_can_create_public_pages",
      "members_can_create_private_pages",
      "members_can_fork_private_repositories",
      "web_commit_signoff_required",
      "blog",
      "advanced_security_enabled_for_new_repositories",
      "dependabot_alerts_enabled_for_new_repositories",
      "dependabot_security_updates_enabled_for_new_repositories",
      "dependency_graph_enabled_for_new_repositories",
      "secret_scanning_enabled_for_new_repositories",
      "secret_scanning_push_protection_enabled_for_new_repositories",
      "secret_scanning_push_protection_custom_link_enabled",
      "secret_scanning_push_protection_custom_link",
      "deploy_keys_enabled_for_repositories"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/delete": {
    "accessPath": [
      "orgs",
      "delete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-usage-for-org": {
    "accessPath": [
      "actions",
      "getActionsCacheUsageForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/cache/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-usage-by-repo-for-org": {
    "accessPath": [
      "actions",
      "getActionsCacheUsageByRepoForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/cache/usage-by-repository",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/list-hosted-runners-for-org": {
    "accessPath": [
      "actions",
      "listHostedRunnersForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/create-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "createHostedRunnerForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "image",
      "size",
      "runner_group_id",
      "maximum_runners",
      "enable_static_ip",
      "image_gen"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-custom-images-for-org": {
    "accessPath": [
      "actions",
      "listCustomImagesForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-custom-image-for-org": {
    "accessPath": [
      "actions",
      "getCustomImageForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "image_definition_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-custom-image-from-org": {
    "accessPath": [
      "actions",
      "deleteCustomImageFromOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "image_definition_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-custom-image-versions-for-org": {
    "accessPath": [
      "actions",
      "listCustomImageVersionsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_definition_id",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-custom-image-version-for-org": {
    "accessPath": [
      "actions",
      "getCustomImageVersionForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "image_definition_id",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-custom-image-version-from-org": {
    "accessPath": [
      "actions",
      "deleteCustomImageVersionFromOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "image_definition_id",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runners-github-owned-images-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnersGithubOwnedImagesForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/github-owned",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runners-partner-images-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnersPartnerImagesForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/images/partner",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runners-limits-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnersLimitsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runners-machine-specs-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnersMachineSpecsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/machine-sizes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runners-platforms-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnersPlatformsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/platforms",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "getHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/{hosted_runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hosted_runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/update-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "updateHostedRunnerForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "runner_group_id",
      "maximum_runners",
      "enable_static_ip",
      "size",
      "image_id",
      "image_version"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/{hosted_runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hosted_runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "deleteHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/hosted-runners/{hosted_runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hosted_runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/list-oidc-custom-property-inclusions-for-org": {
    "accessPath": [
      "oidc",
      "listOidcCustomPropertyInclusionsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/oidc/customization/properties/repo",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/create-oidc-custom-property-inclusion-for-org": {
    "accessPath": [
      "oidc",
      "createOidcCustomPropertyInclusionForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "custom_property_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/oidc/customization/properties/repo",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/delete-oidc-custom-property-inclusion-for-org": {
    "accessPath": [
      "oidc",
      "deleteOidcCustomPropertyInclusionForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/oidc/customization/properties/repo/{custom_property_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "custom_property_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/get-oidc-custom-sub-template-for-org": {
    "accessPath": [
      "oidc",
      "getOidcCustomSubTemplateForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/oidc/customization/sub",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "oidc/update-oidc-custom-sub-template-for-org": {
    "accessPath": [
      "oidc",
      "updateOidcCustomSubTemplateForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "include_claim_keys"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/oidc/customization/sub",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-github-actions-permissions-organization": {
    "accessPath": [
      "actions",
      "getGithubActionsPermissionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-github-actions-permissions-organization": {
    "accessPath": [
      "actions",
      "setGithubActionsPermissionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enabled_repositories",
      "allowed_actions",
      "sha_pinning_required"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-artifact-and-log-retention-settings-organization": {
    "accessPath": [
      "actions",
      "getArtifactAndLogRetentionSettingsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/artifact-and-log-retention",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-artifact-and-log-retention-settings-organization": {
    "accessPath": [
      "actions",
      "setArtifactAndLogRetentionSettingsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "days"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/artifact-and-log-retention",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-fork-pr-contributor-approval-permissions-organization": {
    "accessPath": [
      "actions",
      "getForkPrContributorApprovalPermissionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/fork-pr-contributor-approval",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-fork-pr-contributor-approval-permissions-organization": {
    "accessPath": [
      "actions",
      "setForkPrContributorApprovalPermissionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "approval_policy"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/fork-pr-contributor-approval",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-private-repo-fork-pr-workflows-settings-organization": {
    "accessPath": [
      "actions",
      "getPrivateRepoForkPrWorkflowsSettingsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/fork-pr-workflows-private-repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-private-repo-fork-pr-workflows-settings-organization": {
    "accessPath": [
      "actions",
      "setPrivateRepoForkPrWorkflowsSettingsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "run_workflows_from_fork_pull_requests",
      "send_write_tokens_to_workflows",
      "send_secrets_and_variables",
      "require_approval_for_fork_pr_workflows"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/fork-pr-workflows-private-repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-selected-repositories-enabled-github-actions-organization": {
    "accessPath": [
      "actions",
      "listSelectedRepositoriesEnabledGithubActionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/set-selected-repositories-enabled-github-actions-organization": {
    "accessPath": [
      "actions",
      "setSelectedRepositoriesEnabledGithubActionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/enable-selected-repository-github-actions-organization": {
    "accessPath": [
      "actions",
      "enableSelectedRepositoryGithubActionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/disable-selected-repository-github-actions-organization": {
    "accessPath": [
      "actions",
      "disableSelectedRepositoryGithubActionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/permissions/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-allowed-actions-organization": {
    "accessPath": [
      "actions",
      "getAllowedActionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/selected-actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-allowed-actions-organization": {
    "accessPath": [
      "actions",
      "setAllowedActionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "github_owned_allowed",
      "verified_allowed",
      "patterns_allowed"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/selected-actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-self-hosted-runners-permissions-organization": {
    "accessPath": [
      "actions",
      "getSelfHostedRunnersPermissionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-self-hosted-runners-permissions-organization": {
    "accessPath": [
      "actions",
      "setSelfHostedRunnersPermissionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enabled_repositories"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-selected-repositories-self-hosted-runners-organization": {
    "accessPath": [
      "actions",
      "listSelectedRepositoriesSelfHostedRunnersOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/set-selected-repositories-self-hosted-runners-organization": {
    "accessPath": [
      "actions",
      "setSelectedRepositoriesSelfHostedRunnersOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/enable-selected-repository-self-hosted-runners-organization": {
    "accessPath": [
      "actions",
      "enableSelectedRepositorySelfHostedRunnersOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/disable-selected-repository-self-hosted-runners-organization": {
    "accessPath": [
      "actions",
      "disableSelectedRepositorySelfHostedRunnersOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/permissions/self-hosted-runners/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-github-actions-default-workflow-permissions-organization": {
    "accessPath": [
      "actions",
      "getGithubActionsDefaultWorkflowPermissionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/permissions/workflow",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-github-actions-default-workflow-permissions-organization": {
    "accessPath": [
      "actions",
      "setGithubActionsDefaultWorkflowPermissionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "default_workflow_permissions",
      "can_approve_pull_request_reviews"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/permissions/workflow",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-self-hosted-runner-groups-for-org": {
    "accessPath": [
      "actions",
      "listSelfHostedRunnerGroupsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runner-groups",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "visible_to_repository"
    ]
  },
  "actions/create-self-hosted-runner-group-for-org": {
    "accessPath": [
      "actions",
      "createSelfHostedRunnerGroupForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "visibility",
      "selected_repository_ids",
      "runners",
      "allows_public_repositories",
      "restricted_to_workflows",
      "selected_workflows",
      "network_configuration_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/runner-groups",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-self-hosted-runner-group-for-org": {
    "accessPath": [
      "actions",
      "getSelfHostedRunnerGroupForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/update-self-hosted-runner-group-for-org": {
    "accessPath": [
      "actions",
      "updateSelfHostedRunnerGroupForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "visibility",
      "allows_public_repositories",
      "restricted_to_workflows",
      "selected_workflows",
      "network_configuration_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-self-hosted-runner-group-from-org": {
    "accessPath": [
      "actions",
      "deleteSelfHostedRunnerGroupFromOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-github-hosted-runners-in-group-for-org": {
    "accessPath": [
      "actions",
      "listGithubHostedRunnersInGroupForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/list-repo-access-to-self-hosted-runner-group-in-org": {
    "accessPath": [
      "actions",
      "listRepoAccessToSelfHostedRunnerGroupInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "actions/set-repo-access-to-self-hosted-runner-group-in-org": {
    "accessPath": [
      "actions",
      "setRepoAccessToSelfHostedRunnerGroupInOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-repo-access-to-self-hosted-runner-group-in-org": {
    "accessPath": [
      "actions",
      "addRepoAccessToSelfHostedRunnerGroupInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-repo-access-to-self-hosted-runner-group-in-org": {
    "accessPath": [
      "actions",
      "removeRepoAccessToSelfHostedRunnerGroupInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-self-hosted-runners-in-group-for-org": {
    "accessPath": [
      "actions",
      "listSelfHostedRunnersInGroupForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/set-self-hosted-runners-in-group-for-org": {
    "accessPath": [
      "actions",
      "setSelfHostedRunnersInGroupForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "runners"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-self-hosted-runner-to-group-for-org": {
    "accessPath": [
      "actions",
      "addSelfHostedRunnerToGroupForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-self-hosted-runner-from-group-for-org": {
    "accessPath": [
      "actions",
      "removeSelfHostedRunnerFromGroupForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_group_id",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-self-hosted-runners-for-org": {
    "accessPath": [
      "actions",
      "listSelfHostedRunnersForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "per_page",
      "page"
    ]
  },
  "actions/list-runner-applications-for-org": {
    "accessPath": [
      "actions",
      "listRunnerApplicationsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runners/downloads",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/generate-runner-jitconfig-for-org": {
    "accessPath": [
      "actions",
      "generateRunnerJitconfigForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "runner_group_id",
      "labels",
      "work_folder"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/runners/generate-jitconfig",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-registration-token-for-org": {
    "accessPath": [
      "actions",
      "createRegistrationTokenForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/runners/registration-token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-remove-token-for-org": {
    "accessPath": [
      "actions",
      "createRemoveTokenForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/runners/remove-token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "getSelfHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-self-hosted-runner-from-org": {
    "accessPath": [
      "actions",
      "deleteSelfHostedRunnerFromOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-labels-for-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "listLabelsForSelfHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-custom-labels-to-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "addCustomLabelsToSelfHostedRunnerForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "labels"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-custom-labels-for-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "setCustomLabelsForSelfHostedRunnerForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "labels"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-all-custom-labels-from-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "removeAllCustomLabelsFromSelfHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-custom-label-from-self-hosted-runner-for-org": {
    "accessPath": [
      "actions",
      "removeCustomLabelFromSelfHostedRunnerForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/runners/{runner_id}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "runner_id",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-org-secrets": {
    "accessPath": [
      "actions",
      "listOrgSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/get-org-public-key": {
    "accessPath": [
      "actions",
      "getOrgPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-org-secret": {
    "accessPath": [
      "actions",
      "getOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-or-update-org-secret": {
    "accessPath": [
      "actions",
      "createOrUpdateOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id",
      "visibility",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-org-secret": {
    "accessPath": [
      "actions",
      "deleteOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-selected-repos-for-org-secret": {
    "accessPath": [
      "actions",
      "listSelectedReposForOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "actions/set-selected-repos-for-org-secret": {
    "accessPath": [
      "actions",
      "setSelectedReposForOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-selected-repo-to-org-secret": {
    "accessPath": [
      "actions",
      "addSelectedRepoToOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-selected-repo-from-org-secret": {
    "accessPath": [
      "actions",
      "removeSelectedRepoFromOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-org-variables": {
    "accessPath": [
      "actions",
      "listOrgVariables"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/create-org-variable": {
    "accessPath": [
      "actions",
      "createOrgVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value",
      "visibility",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/actions/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-org-variable": {
    "accessPath": [
      "actions",
      "getOrgVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/update-org-variable": {
    "accessPath": [
      "actions",
      "updateOrgVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value",
      "visibility",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}",
    "pathConflictKeys": [
      "name"
    ],
    "pathParameterKeys": [
      "org",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-org-variable": {
    "accessPath": [
      "actions",
      "deleteOrgVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-selected-repos-for-org-variable": {
    "accessPath": [
      "actions",
      "listSelectedReposForOrgVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "actions/set-selected-repos-for-org-variable": {
    "accessPath": [
      "actions",
      "setSelectedReposForOrgVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-selected-repo-to-org-variable": {
    "accessPath": [
      "actions",
      "addSelectedRepoToOrgVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-selected-repo-from-org-variable": {
    "accessPath": [
      "actions",
      "removeSelectedRepoFromOrgVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/create-artifact-deployment-record": {
    "accessPath": [
      "orgs",
      "createArtifactDeploymentRecord"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "digest",
      "version",
      "status",
      "logical_environment",
      "physical_environment",
      "cluster",
      "deployment_name",
      "tags",
      "runtime_risks",
      "github_repository",
      "return_records"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/artifacts/metadata/deployment-record",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/set-cluster-deployment-records": {
    "accessPath": [
      "orgs",
      "setClusterDeploymentRecords"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "logical_environment",
      "physical_environment",
      "deployments",
      "return_records"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/artifacts/metadata/deployment-record/cluster/{cluster}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "cluster"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/create-artifact-storage-record": {
    "accessPath": [
      "orgs",
      "createArtifactStorageRecord"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "digest",
      "version",
      "artifact_url",
      "path",
      "registry_url",
      "repository",
      "status",
      "github_repository",
      "return_records"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/artifacts/metadata/storage-record",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-artifact-deployment-records": {
    "accessPath": [
      "orgs",
      "listArtifactDeploymentRecords"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/artifacts/{subject_digest}/metadata/deployment-records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-artifact-storage-records": {
    "accessPath": [
      "orgs",
      "listArtifactStorageRecords"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/artifacts/{subject_digest}/metadata/storage-records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-attestations-bulk": {
    "accessPath": [
      "orgs",
      "listAttestationsBulk"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "subject_digests",
      "predicate_type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/attestations/bulk-list",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after"
    ]
  },
  "orgs/delete-attestations-bulk": {
    "accessPath": [
      "orgs",
      "deleteAttestationsBulk"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/attestations/delete-request",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/delete-attestations-by-subject-digest": {
    "accessPath": [
      "orgs",
      "deleteAttestationsBySubjectDigest"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/attestations/digest/{subject_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-attestation-repositories": {
    "accessPath": [
      "orgs",
      "listAttestationRepositories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/attestations/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "predicate_type"
    ]
  },
  "orgs/delete-attestations-by-id": {
    "accessPath": [
      "orgs",
      "deleteAttestationsById"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/attestations/{attestation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "attestation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-attestations": {
    "accessPath": [
      "orgs",
      "listAttestations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/attestations/{subject_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "predicate_type"
    ]
  },
  "orgs/list-blocked-users": {
    "accessPath": [
      "orgs",
      "listBlockedUsers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/blocks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/check-blocked-user": {
    "accessPath": [
      "orgs",
      "checkBlockedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/block-user": {
    "accessPath": [
      "orgs",
      "blockUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/unblock-user": {
    "accessPath": [
      "orgs",
      "unblockUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "campaigns/list-org-campaigns": {
    "accessPath": [
      "campaigns",
      "listOrgCampaigns"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/campaigns",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "direction",
      "state",
      "sort"
    ]
  },
  "campaigns/create-campaign": {
    "accessPath": [
      "campaigns",
      "createCampaign"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/campaigns",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "campaigns/get-campaign-summary": {
    "accessPath": [
      "campaigns",
      "getCampaignSummary"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/campaigns/{campaign_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "campaign_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "campaigns/update-campaign": {
    "accessPath": [
      "campaigns",
      "updateCampaign"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "managers",
      "team_managers",
      "ends_at",
      "contact_link",
      "state"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/campaigns/{campaign_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "campaign_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "campaigns/delete-campaign": {
    "accessPath": [
      "campaigns",
      "deleteCampaign"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/campaigns/{campaign_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "campaign_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/list-alerts-for-org": {
    "accessPath": [
      "codeScanning",
      "listAlertsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/code-scanning/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tool_name",
      "tool_guid",
      "before",
      "after",
      "page",
      "per_page",
      "direction",
      "state",
      "sort",
      "severity",
      "assignees"
    ]
  },
  "code-security/get-configurations-for-org": {
    "accessPath": [
      "codeSecurity",
      "getConfigurationsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/code-security/configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "target_type",
      "per_page",
      "before",
      "after"
    ]
  },
  "code-security/create-configuration": {
    "accessPath": [
      "codeSecurity",
      "createConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "advanced_security",
      "code_security",
      "dependency_graph",
      "dependency_graph_autosubmit_action",
      "dependency_graph_autosubmit_action_options",
      "dependabot_alerts",
      "dependabot_security_updates",
      "dependabot_delegated_alert_dismissal",
      "code_scanning_options",
      "code_scanning_default_setup",
      "code_scanning_default_setup_options",
      "code_scanning_delegated_alert_dismissal",
      "secret_protection",
      "secret_scanning",
      "secret_scanning_push_protection",
      "secret_scanning_delegated_bypass",
      "secret_scanning_delegated_bypass_options",
      "secret_scanning_validity_checks",
      "secret_scanning_non_provider_patterns",
      "secret_scanning_generic_secrets",
      "secret_scanning_delegated_alert_dismissal",
      "secret_scanning_extended_metadata",
      "private_vulnerability_reporting",
      "enforcement"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/code-security/configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-default-configurations": {
    "accessPath": [
      "codeSecurity",
      "getDefaultConfigurations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/code-security/configurations/defaults",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/detach-configuration": {
    "accessPath": [
      "codeSecurity",
      "detachConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/code-security/configurations/detach",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-configuration": {
    "accessPath": [
      "codeSecurity",
      "getConfiguration"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/update-configuration": {
    "accessPath": [
      "codeSecurity",
      "updateConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "advanced_security",
      "code_security",
      "dependency_graph",
      "dependency_graph_autosubmit_action",
      "dependency_graph_autosubmit_action_options",
      "dependabot_alerts",
      "dependabot_security_updates",
      "dependabot_delegated_alert_dismissal",
      "code_scanning_default_setup",
      "code_scanning_default_setup_options",
      "code_scanning_options",
      "code_scanning_delegated_alert_dismissal",
      "secret_protection",
      "secret_scanning",
      "secret_scanning_push_protection",
      "secret_scanning_delegated_bypass",
      "secret_scanning_delegated_bypass_options",
      "secret_scanning_validity_checks",
      "secret_scanning_non_provider_patterns",
      "secret_scanning_generic_secrets",
      "secret_scanning_delegated_alert_dismissal",
      "secret_scanning_extended_metadata",
      "private_vulnerability_reporting",
      "enforcement"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/delete-configuration": {
    "accessPath": [
      "codeSecurity",
      "deleteConfiguration"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/attach-configuration": {
    "accessPath": [
      "codeSecurity",
      "attachConfiguration"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "scope",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}/attach",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/set-configuration-as-default": {
    "accessPath": [
      "codeSecurity",
      "setConfigurationAsDefault"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "default_for_new_repos"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}/defaults",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-repositories-for-configuration": {
    "accessPath": [
      "codeSecurity",
      "getRepositoriesForConfiguration"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/code-security/configurations/{configuration_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "status"
    ]
  },
  "codespaces/list-in-organization": {
    "accessPath": [
      "codespaces",
      "listInOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/set-codespaces-access": {
    "accessPath": [
      "codespaces",
      "setCodespacesAccess"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "visibility",
      "selected_usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/codespaces/access",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/set-codespaces-access-users": {
    "accessPath": [
      "codespaces",
      "setCodespacesAccessUsers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/codespaces/access/selected_users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/delete-codespaces-access-users": {
    "accessPath": [
      "codespaces",
      "deleteCodespacesAccessUsers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/codespaces/access/selected_users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-org-secrets": {
    "accessPath": [
      "codespaces",
      "listOrgSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/codespaces/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/get-org-public-key": {
    "accessPath": [
      "codespaces",
      "getOrgPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-org-secret": {
    "accessPath": [
      "codespaces",
      "getOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/create-or-update-org-secret": {
    "accessPath": [
      "codespaces",
      "createOrUpdateOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id",
      "visibility",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/delete-org-secret": {
    "accessPath": [
      "codespaces",
      "deleteOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-selected-repos-for-org-secret": {
    "accessPath": [
      "codespaces",
      "listSelectedReposForOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "codespaces/set-selected-repos-for-org-secret": {
    "accessPath": [
      "codespaces",
      "setSelectedReposForOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/add-selected-repo-to-org-secret": {
    "accessPath": [
      "codespaces",
      "addSelectedRepoToOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/remove-selected-repo-from-org-secret": {
    "accessPath": [
      "codespaces",
      "removeSelectedRepoFromOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/get-copilot-organization-details": {
    "accessPath": [
      "copilot",
      "getCopilotOrganizationDetails"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/billing",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/list-copilot-seats": {
    "accessPath": [
      "copilot",
      "listCopilotSeats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/billing/seats",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "copilot/add-copilot-seats-for-teams": {
    "accessPath": [
      "copilot",
      "addCopilotSeatsForTeams"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_teams"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/copilot/billing/selected_teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/cancel-copilot-seat-assignment-for-teams": {
    "accessPath": [
      "copilot",
      "cancelCopilotSeatAssignmentForTeams"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_teams"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/copilot/billing/selected_teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/add-copilot-seats-for-users": {
    "accessPath": [
      "copilot",
      "addCopilotSeatsForUsers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/copilot/billing/selected_users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/cancel-copilot-seat-assignment-for-users": {
    "accessPath": [
      "copilot",
      "cancelCopilotSeatAssignmentForUsers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_usernames"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/copilot/billing/selected_users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/get-copilot-coding-agent-permissions-organization": {
    "accessPath": [
      "copilot",
      "getCopilotCodingAgentPermissionsOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/set-copilot-coding-agent-permissions-organization": {
    "accessPath": [
      "copilot",
      "setCopilotCodingAgentPermissionsOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enabled_repositories"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/list-copilot-coding-agent-selected-repositories-for-organization": {
    "accessPath": [
      "copilot",
      "listCopilotCodingAgentSelectedRepositoriesForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "copilot/set-copilot-coding-agent-selected-repositories-for-organization": {
    "accessPath": [
      "copilot",
      "setCopilotCodingAgentSelectedRepositoriesForOrganization"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/enable-copilot-coding-agent-for-repository-in-organization": {
    "accessPath": [
      "copilot",
      "enableCopilotCodingAgentForRepositoryInOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/disable-copilot-coding-agent-for-repository-in-organization": {
    "accessPath": [
      "copilot",
      "disableCopilotCodingAgentForRepositoryInOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/copilot/coding-agent/permissions/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/copilot-content-exclusion-for-organization": {
    "accessPath": [
      "copilot",
      "copilotContentExclusionForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/content_exclusion",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/set-copilot-content-exclusion-for-organization": {
    "accessPath": [
      "copilot",
      "setCopilotContentExclusionForOrganization"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/copilot/content_exclusion",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/copilot-metrics-for-organization": {
    "accessPath": [
      "copilot",
      "copilotMetricsForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "until",
      "page",
      "per_page"
    ]
  },
  "copilot/copilot-organization-one-day-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotOrganizationOneDayUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/metrics/reports/organization-1-day",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "day"
    ]
  },
  "copilot/copilot-organization-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotOrganizationUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/metrics/reports/organization-28-day/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/copilot-organization-users-one-day-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotOrganizationUsersOneDayUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/metrics/reports/users-1-day",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "day"
    ]
  },
  "copilot/copilot-organization-users-usage-metrics": {
    "accessPath": [
      "copilot",
      "copilotOrganizationUsersUsageMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/copilot/metrics/reports/users-28-day/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/list-alerts-for-org": {
    "accessPath": [
      "dependabot",
      "listAlertsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/dependabot/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "classification",
      "state",
      "severity",
      "ecosystem",
      "package",
      "epss_percentage",
      "artifact_registry_url",
      "artifact_registry",
      "has",
      "assignee",
      "runtime_risk",
      "scope",
      "sort",
      "direction",
      "before",
      "after",
      "per_page"
    ]
  },
  "dependabot/list-org-secrets": {
    "accessPath": [
      "dependabot",
      "listOrgSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/dependabot/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "dependabot/get-org-public-key": {
    "accessPath": [
      "dependabot",
      "getOrgPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/get-org-secret": {
    "accessPath": [
      "dependabot",
      "getOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/create-or-update-org-secret": {
    "accessPath": [
      "dependabot",
      "createOrUpdateOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id",
      "visibility",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/delete-org-secret": {
    "accessPath": [
      "dependabot",
      "deleteOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/list-selected-repos-for-org-secret": {
    "accessPath": [
      "dependabot",
      "listSelectedReposForOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "dependabot/set-selected-repos-for-org-secret": {
    "accessPath": [
      "dependabot",
      "setSelectedReposForOrgSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/add-selected-repo-to-org-secret": {
    "accessPath": [
      "dependabot",
      "addSelectedRepoToOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/remove-selected-repo-from-org-secret": {
    "accessPath": [
      "dependabot",
      "removeSelectedRepoFromOrgSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/list-docker-migration-conflicting-packages-for-organization": {
    "accessPath": [
      "packages",
      "listDockerMigrationConflictingPackagesForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/docker/conflicts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-public-org-events": {
    "accessPath": [
      "activity",
      "listPublicOrgEvents"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-failed-invitations": {
    "accessPath": [
      "orgs",
      "listFailedInvitations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/failed_invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-webhooks": {
    "accessPath": [
      "orgs",
      "listWebhooks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/hooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/create-webhook": {
    "accessPath": [
      "orgs",
      "createWebhook"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "config",
      "events",
      "active"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/hooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-webhook": {
    "accessPath": [
      "orgs",
      "getWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-webhook": {
    "accessPath": [
      "orgs",
      "updateWebhook"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config",
      "events",
      "active",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/delete-webhook": {
    "accessPath": [
      "orgs",
      "deleteWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-webhook-config-for-org": {
    "accessPath": [
      "orgs",
      "getWebhookConfigForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-webhook-config-for-org": {
    "accessPath": [
      "orgs",
      "updateWebhookConfigForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "url",
      "content_type",
      "secret",
      "insecure_ssl"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-webhook-deliveries": {
    "accessPath": [
      "orgs",
      "listWebhookDeliveries"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/deliveries",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "cursor",
      "status"
    ]
  },
  "orgs/get-webhook-delivery": {
    "accessPath": [
      "orgs",
      "getWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id",
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/redeliver-webhook-delivery": {
    "accessPath": [
      "orgs",
      "redeliverWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id",
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/ping-webhook": {
    "accessPath": [
      "orgs",
      "pingWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/hooks/{hook_id}/pings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "api-insights/get-route-stats-by-actor": {
    "accessPath": [
      "apiInsights",
      "getRouteStatsByActor"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/route-stats/{actor_type}/{actor_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "actor_type",
      "actor_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "page",
      "per_page",
      "direction",
      "sort",
      "api_route_substring"
    ]
  },
  "api-insights/get-subject-stats": {
    "accessPath": [
      "apiInsights",
      "getSubjectStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/subject-stats",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "page",
      "per_page",
      "direction",
      "sort",
      "subject_name_substring"
    ]
  },
  "api-insights/get-summary-stats": {
    "accessPath": [
      "apiInsights",
      "getSummaryStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/summary-stats",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp"
    ]
  },
  "api-insights/get-summary-stats-by-user": {
    "accessPath": [
      "apiInsights",
      "getSummaryStatsByUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/summary-stats/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp"
    ]
  },
  "api-insights/get-summary-stats-by-actor": {
    "accessPath": [
      "apiInsights",
      "getSummaryStatsByActor"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/summary-stats/{actor_type}/{actor_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "actor_type",
      "actor_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp"
    ]
  },
  "api-insights/get-time-stats": {
    "accessPath": [
      "apiInsights",
      "getTimeStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/time-stats",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "timestamp_increment"
    ]
  },
  "api-insights/get-time-stats-by-user": {
    "accessPath": [
      "apiInsights",
      "getTimeStatsByUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/time-stats/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "timestamp_increment"
    ]
  },
  "api-insights/get-time-stats-by-actor": {
    "accessPath": [
      "apiInsights",
      "getTimeStatsByActor"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "actor_type",
      "actor_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "timestamp_increment"
    ]
  },
  "api-insights/get-user-stats": {
    "accessPath": [
      "apiInsights",
      "getUserStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/insights/api/user-stats/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "min_timestamp",
      "max_timestamp",
      "page",
      "per_page",
      "direction",
      "sort",
      "actor_name_substring"
    ]
  },
  "apps/get-org-installation": {
    "accessPath": [
      "apps",
      "getOrgInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/installation",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-app-installations": {
    "accessPath": [
      "orgs",
      "listAppInstallations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/installations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "interactions/get-restrictions-for-org": {
    "accessPath": [
      "interactions",
      "getRestrictionsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/set-restrictions-for-org": {
    "accessPath": [
      "interactions",
      "setRestrictionsForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "limit",
      "expiry"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/remove-restrictions-for-org": {
    "accessPath": [
      "interactions",
      "removeRestrictionsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-pending-invitations": {
    "accessPath": [
      "orgs",
      "listPendingInvitations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "role",
      "invitation_source"
    ]
  },
  "orgs/create-invitation": {
    "accessPath": [
      "orgs",
      "createInvitation"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "invitee_id",
      "email",
      "role",
      "team_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/cancel-invitation": {
    "accessPath": [
      "orgs",
      "cancelInvitation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/invitations/{invitation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-invitation-teams": {
    "accessPath": [
      "orgs",
      "listInvitationTeams"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/invitations/{invitation_id}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-issue-fields": {
    "accessPath": [
      "orgs",
      "listIssueFields"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/issue-fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/create-issue-field": {
    "accessPath": [
      "orgs",
      "createIssueField"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "data_type",
      "visibility",
      "options"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/issue-fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-issue-field": {
    "accessPath": [
      "orgs",
      "updateIssueField"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "visibility",
      "options"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/issue-fields/{issue_field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "issue_field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/delete-issue-field": {
    "accessPath": [
      "orgs",
      "deleteIssueField"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/issue-fields/{issue_field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "issue_field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-issue-types": {
    "accessPath": [
      "orgs",
      "listIssueTypes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/issue-types",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/create-issue-type": {
    "accessPath": [
      "orgs",
      "createIssueType"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "is_enabled",
      "description",
      "color"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/issue-types",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-issue-type": {
    "accessPath": [
      "orgs",
      "updateIssueType"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "is_enabled",
      "description",
      "color"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/issue-types/{issue_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "issue_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/delete-issue-type": {
    "accessPath": [
      "orgs",
      "deleteIssueType"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/issue-types/{issue_type_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "issue_type_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-for-org": {
    "accessPath": [
      "issues",
      "listForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "state",
      "labels",
      "type",
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "orgs/list-members": {
    "accessPath": [
      "orgs",
      "listMembers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "role",
      "per_page",
      "page"
    ]
  },
  "orgs/check-membership-for-user": {
    "accessPath": [
      "orgs",
      "checkMembershipForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/remove-member": {
    "accessPath": [
      "orgs",
      "removeMember"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-codespaces-for-user-in-org": {
    "accessPath": [
      "codespaces",
      "getCodespacesForUserInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/members/{username}/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/delete-from-organization": {
    "accessPath": [
      "codespaces",
      "deleteFromOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/members/{username}/codespaces/{codespace_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username",
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/stop-in-organization": {
    "accessPath": [
      "codespaces",
      "stopInOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username",
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/get-copilot-seat-details-for-user": {
    "accessPath": [
      "copilot",
      "getCopilotSeatDetailsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/members/{username}/copilot",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-membership-for-user": {
    "accessPath": [
      "orgs",
      "getMembershipForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/set-membership-for-user": {
    "accessPath": [
      "orgs",
      "setMembershipForUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/remove-membership-for-user": {
    "accessPath": [
      "orgs",
      "removeMembershipForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/list-for-org": {
    "accessPath": [
      "migrations",
      "listForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/migrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "exclude"
    ]
  },
  "migrations/start-for-org": {
    "accessPath": [
      "migrations",
      "startForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "repositories",
      "lock_repositories",
      "exclude_metadata",
      "exclude_git_data",
      "exclude_attachments",
      "exclude_releases",
      "exclude_owner_projects",
      "org_metadata_only",
      "exclude"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/migrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/get-status-for-org": {
    "accessPath": [
      "migrations",
      "getStatusForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/migrations/{migration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "exclude"
    ]
  },
  "migrations/download-archive-for-org": {
    "accessPath": [
      "migrations",
      "downloadArchiveForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/migrations/{migration_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/delete-archive-for-org": {
    "accessPath": [
      "migrations",
      "deleteArchiveForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/migrations/{migration_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/unlock-repo-for-org": {
    "accessPath": [
      "migrations",
      "unlockRepoForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "migration_id",
      "repo_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/list-repos-for-org": {
    "accessPath": [
      "migrations",
      "listReposForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/migrations/{migration_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-org-roles": {
    "accessPath": [
      "orgs",
      "listOrgRoles"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/organization-roles",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/revoke-all-org-roles-team": {
    "accessPath": [
      "orgs",
      "revokeAllOrgRolesTeam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/organization-roles/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/assign-team-to-org-role": {
    "accessPath": [
      "orgs",
      "assignTeamToOrgRole"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/revoke-org-role-team": {
    "accessPath": [
      "orgs",
      "revokeOrgRoleTeam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/revoke-all-org-roles-user": {
    "accessPath": [
      "orgs",
      "revokeAllOrgRolesUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/organization-roles/users/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/assign-user-to-org-role": {
    "accessPath": [
      "orgs",
      "assignUserToOrgRole"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/organization-roles/users/{username}/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/revoke-org-role-user": {
    "accessPath": [
      "orgs",
      "revokeOrgRoleUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/organization-roles/users/{username}/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-org-role": {
    "accessPath": [
      "orgs",
      "getOrgRole"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/organization-roles/{role_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-org-role-teams": {
    "accessPath": [
      "orgs",
      "listOrgRoleTeams"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/organization-roles/{role_id}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-org-role-users": {
    "accessPath": [
      "orgs",
      "listOrgRoleUsers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/organization-roles/{role_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "role_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-outside-collaborators": {
    "accessPath": [
      "orgs",
      "listOutsideCollaborators"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/outside_collaborators",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "per_page",
      "page"
    ]
  },
  "orgs/convert-member-to-outside-collaborator": {
    "accessPath": [
      "orgs",
      "convertMemberToOutsideCollaborator"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "async"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/outside_collaborators/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/remove-outside-collaborator": {
    "accessPath": [
      "orgs",
      "removeOutsideCollaborator"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/outside_collaborators/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/list-packages-for-organization": {
    "accessPath": [
      "packages",
      "listPackagesForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/packages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "package_type",
      "visibility",
      "page",
      "per_page"
    ]
  },
  "packages/get-package-for-organization": {
    "accessPath": [
      "packages",
      "getPackageForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-for-org": {
    "accessPath": [
      "packages",
      "deletePackageForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-for-org": {
    "accessPath": [
      "packages",
      "restorePackageForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "token"
    ]
  },
  "packages/get-all-package-versions-for-package-owned-by-org": {
    "accessPath": [
      "packages",
      "getAllPackageVersionsForPackageOwnedByOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "state"
    ]
  },
  "packages/get-package-version-for-organization": {
    "accessPath": [
      "packages",
      "getPackageVersionForOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-version-for-org": {
    "accessPath": [
      "packages",
      "deletePackageVersionForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-version-for-org": {
    "accessPath": [
      "packages",
      "restorePackageVersionForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "org",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-pat-grant-requests": {
    "accessPath": [
      "orgs",
      "listPatGrantRequests"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/personal-access-token-requests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "sort",
      "direction",
      "owner",
      "repository",
      "permission",
      "last_used_before",
      "last_used_after",
      "token_id"
    ]
  },
  "orgs/review-pat-grant-requests-in-bulk": {
    "accessPath": [
      "orgs",
      "reviewPatGrantRequestsInBulk"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "pat_request_ids",
      "action",
      "reason"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/personal-access-token-requests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/review-pat-grant-request": {
    "accessPath": [
      "orgs",
      "reviewPatGrantRequest"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "action",
      "reason"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/personal-access-token-requests/{pat_request_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "pat_request_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-pat-grant-request-repositories": {
    "accessPath": [
      "orgs",
      "listPatGrantRequestRepositories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "pat_request_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-pat-grants": {
    "accessPath": [
      "orgs",
      "listPatGrants"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/personal-access-tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "sort",
      "direction",
      "owner",
      "repository",
      "permission",
      "last_used_before",
      "last_used_after",
      "token_id"
    ]
  },
  "orgs/update-pat-accesses": {
    "accessPath": [
      "orgs",
      "updatePatAccesses"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "action",
      "pat_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/personal-access-tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-pat-access": {
    "accessPath": [
      "orgs",
      "updatePatAccess"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "action"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/personal-access-tokens/{pat_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "pat_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-pat-grant-repositories": {
    "accessPath": [
      "orgs",
      "listPatGrantRepositories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/personal-access-tokens/{pat_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "pat_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "private-registries/list-org-private-registries": {
    "accessPath": [
      "privateRegistries",
      "listOrgPrivateRegistries"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/private-registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "private-registries/create-org-private-registry": {
    "accessPath": [
      "privateRegistries",
      "createOrgPrivateRegistry"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "registry_type",
      "url",
      "username",
      "replaces_base",
      "encrypted_value",
      "key_id",
      "visibility",
      "selected_repository_ids",
      "auth_type",
      "tenant_id",
      "client_id",
      "aws_region",
      "account_id",
      "role_name",
      "domain",
      "domain_owner",
      "jfrog_oidc_provider_name",
      "audience",
      "identity_mapping_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/private-registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "private-registries/get-org-public-key": {
    "accessPath": [
      "privateRegistries",
      "getOrgPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/private-registries/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "private-registries/get-org-private-registry": {
    "accessPath": [
      "privateRegistries",
      "getOrgPrivateRegistry"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/private-registries/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "private-registries/update-org-private-registry": {
    "accessPath": [
      "privateRegistries",
      "updateOrgPrivateRegistry"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "registry_type",
      "url",
      "username",
      "replaces_base",
      "encrypted_value",
      "key_id",
      "visibility",
      "selected_repository_ids",
      "auth_type",
      "tenant_id",
      "client_id",
      "aws_region",
      "account_id",
      "role_name",
      "domain",
      "domain_owner",
      "jfrog_oidc_provider_name",
      "audience",
      "identity_mapping_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/private-registries/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "private-registries/delete-org-private-registry": {
    "accessPath": [
      "privateRegistries",
      "deleteOrgPrivateRegistry"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/private-registries/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-for-org": {
    "accessPath": [
      "projects",
      "listForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "before",
      "after",
      "per_page"
    ]
  },
  "projects/get-for-org": {
    "accessPath": [
      "projects",
      "getForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/create-draft-item-for-org": {
    "accessPath": [
      "projects",
      "createDraftItemForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/drafts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-fields-for-org": {
    "accessPath": [
      "projects",
      "listFieldsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after"
    ]
  },
  "projects/add-field-for-org": {
    "accessPath": [
      "projects",
      "addFieldForOrg"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/get-field-for-org": {
    "accessPath": [
      "projects",
      "getFieldForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/fields/{field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "field_id",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-items-for-org": {
    "accessPath": [
      "projects",
      "listItemsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "fields",
      "before",
      "after",
      "per_page"
    ]
  },
  "projects/add-item-for-org": {
    "accessPath": [
      "projects",
      "addItemForOrg"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/get-org-item": {
    "accessPath": [
      "projects",
      "getOrgItem"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "fields"
    ]
  },
  "projects/update-item-for-org": {
    "accessPath": [
      "projects",
      "updateItemForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "fields"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/delete-item-for-org": {
    "accessPath": [
      "projects",
      "deleteItemForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/create-view-for-org": {
    "accessPath": [
      "projects",
      "createViewForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "layout",
      "filter",
      "visible_fields"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/views",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-view-items-for-org": {
    "accessPath": [
      "projects",
      "listViewItemsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/projectsV2/{project_number}/views/{view_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "org",
      "view_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "fields",
      "before",
      "after",
      "per_page"
    ]
  },
  "orgs/custom-properties-for-repos-get-organization-definitions": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposGetOrganizationDefinitions"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/properties/schema",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/custom-properties-for-repos-create-or-update-organization-definitions": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposCreateOrUpdateOrganizationDefinitions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "properties"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/properties/schema",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/custom-properties-for-repos-get-organization-definition": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposGetOrganizationDefinition"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/properties/schema/{custom_property_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "custom_property_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/custom-properties-for-repos-create-or-update-organization-definition": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposCreateOrUpdateOrganizationDefinition"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "value_type",
      "required",
      "default_value",
      "description",
      "allowed_values",
      "values_editable_by",
      "require_explicit_values"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/properties/schema/{custom_property_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "custom_property_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/custom-properties-for-repos-delete-organization-definition": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposDeleteOrganizationDefinition"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/properties/schema/{custom_property_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "custom_property_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/custom-properties-for-repos-get-organization-values": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposGetOrganizationValues"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/properties/values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "repository_query"
    ]
  },
  "orgs/custom-properties-for-repos-create-or-update-organization-values": {
    "accessPath": [
      "orgs",
      "customPropertiesForReposCreateOrUpdateOrganizationValues"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "repository_names",
      "properties"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/properties/values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/list-public-members": {
    "accessPath": [
      "orgs",
      "listPublicMembers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/public_members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/check-public-membership-for-user": {
    "accessPath": [
      "orgs",
      "checkPublicMembershipForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/public_members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/set-public-membership-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "setPublicMembershipForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/public_members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/remove-public-membership-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "removePublicMembershipForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/public_members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-for-org": {
    "accessPath": [
      "repos",
      "listForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "repos/create-in-org": {
    "accessPath": [
      "repos",
      "createInOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "homepage",
      "private",
      "visibility",
      "has_issues",
      "has_projects",
      "has_wiki",
      "has_downloads",
      "is_template",
      "team_id",
      "auto_init",
      "gitignore_template",
      "license_template",
      "allow_squash_merge",
      "allow_merge_commit",
      "allow_rebase_merge",
      "allow_auto_merge",
      "delete_branch_on_merge",
      "use_squash_pr_title_as_default",
      "squash_merge_commit_title",
      "squash_merge_commit_message",
      "merge_commit_title",
      "merge_commit_message",
      "custom_properties"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-org-rulesets": {
    "accessPath": [
      "repos",
      "getOrgRulesets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "targets"
    ]
  },
  "repos/create-org-ruleset": {
    "accessPath": [
      "repos",
      "createOrgRuleset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "target",
      "enforcement",
      "bypass_actors",
      "conditions",
      "rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/rulesets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-org-rule-suites": {
    "accessPath": [
      "repos",
      "getOrgRuleSuites"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets/rule-suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref",
      "repository_name",
      "time_period",
      "actor_name",
      "rule_suite_result",
      "per_page",
      "page"
    ]
  },
  "repos/get-org-rule-suite": {
    "accessPath": [
      "repos",
      "getOrgRuleSuite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets/rule-suites/{rule_suite_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "rule_suite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-org-ruleset": {
    "accessPath": [
      "repos",
      "getOrgRuleset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-org-ruleset": {
    "accessPath": [
      "repos",
      "updateOrgRuleset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "target",
      "enforcement",
      "bypass_actors",
      "conditions",
      "rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-org-ruleset": {
    "accessPath": [
      "repos",
      "deleteOrgRuleset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-org-ruleset-history": {
    "accessPath": [
      "orgs",
      "getOrgRulesetHistory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets/{ruleset_id}/history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/get-org-ruleset-version": {
    "accessPath": [
      "orgs",
      "getOrgRulesetVersion"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/rulesets/{ruleset_id}/history/{version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "ruleset_id",
      "version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "secret-scanning/list-alerts-for-org": {
    "accessPath": [
      "secretScanning",
      "listAlertsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/secret-scanning/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "secret_type",
      "exclude_secret_types",
      "resolution",
      "assignee",
      "sort",
      "direction",
      "page",
      "per_page",
      "before",
      "after",
      "validity",
      "is_publicly_leaked",
      "is_multi_repo",
      "hide_secret"
    ]
  },
  "secret-scanning/list-org-pattern-configs": {
    "accessPath": [
      "secretScanning",
      "listOrgPatternConfigs"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/secret-scanning/pattern-configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "secret-scanning/update-org-pattern-configs": {
    "accessPath": [
      "secretScanning",
      "updateOrgPatternConfigs"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "pattern_config_version",
      "provider_pattern_settings",
      "custom_pattern_settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/secret-scanning/pattern-configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/list-org-repository-advisories": {
    "accessPath": [
      "securityAdvisories",
      "listOrgRepositoryAdvisories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/security-advisories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "direction",
      "sort",
      "before",
      "after",
      "per_page",
      "state"
    ]
  },
  "orgs/list-security-manager-teams": {
    "accessPath": [
      "orgs",
      "listSecurityManagerTeams"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/security-managers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/add-security-manager-team": {
    "accessPath": [
      "orgs",
      "addSecurityManagerTeam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/security-managers/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/remove-security-manager-team": {
    "accessPath": [
      "orgs",
      "removeSecurityManagerTeam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/security-managers/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-immutable-releases-settings": {
    "accessPath": [
      "orgs",
      "getImmutableReleasesSettings"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/set-immutable-releases-settings": {
    "accessPath": [
      "orgs",
      "setImmutableReleasesSettings"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enforced_repositories",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/get-immutable-releases-settings-repositories": {
    "accessPath": [
      "orgs",
      "getImmutableReleasesSettingsRepositories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "orgs/set-immutable-releases-settings-repositories": {
    "accessPath": [
      "orgs",
      "setImmutableReleasesSettingsRepositories"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/enable-selected-repository-immutable-releases-organization": {
    "accessPath": [
      "orgs",
      "enableSelectedRepositoryImmutableReleasesOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/disable-selected-repository-immutable-releases-organization": {
    "accessPath": [
      "orgs",
      "disableSelectedRepositoryImmutableReleasesOrganization"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/settings/immutable-releases/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "hosted-compute/list-network-configurations-for-org": {
    "accessPath": [
      "hostedCompute",
      "listNetworkConfigurationsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/settings/network-configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "hosted-compute/create-network-configuration-for-org": {
    "accessPath": [
      "hostedCompute",
      "createNetworkConfigurationForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "compute_service",
      "network_settings_ids",
      "failover_network_settings_ids",
      "failover_network_enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/settings/network-configurations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "hosted-compute/get-network-configuration-for-org": {
    "accessPath": [
      "hostedCompute",
      "getNetworkConfigurationForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "network_configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "hosted-compute/update-network-configuration-for-org": {
    "accessPath": [
      "hostedCompute",
      "updateNetworkConfigurationForOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "compute_service",
      "network_settings_ids",
      "failover_network_settings_ids",
      "failover_network_enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "network_configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "hosted-compute/delete-network-configuration-from-org": {
    "accessPath": [
      "hostedCompute",
      "deleteNetworkConfigurationFromOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "network_configuration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "hosted-compute/get-network-settings-for-org": {
    "accessPath": [
      "hostedCompute",
      "getNetworkSettingsForOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/settings/network-settings/{network_settings_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "network_settings_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "copilot/copilot-metrics-for-team": {
    "accessPath": [
      "copilot",
      "copilotMetricsForTeam"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/team/{team_slug}/copilot/metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "until",
      "page",
      "per_page"
    ]
  },
  "teams/list": {
    "accessPath": [
      "teams",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "team_type"
    ]
  },
  "teams/create": {
    "accessPath": [
      "teams",
      "create"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "maintainers",
      "repo_names",
      "privacy",
      "notification_setting",
      "permission",
      "parent_team_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/get-by-name": {
    "accessPath": [
      "teams",
      "getByName"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/update-in-org": {
    "accessPath": [
      "teams",
      "updateInOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "privacy",
      "notification_setting",
      "permission",
      "parent_team_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/delete-in-org": {
    "accessPath": [
      "teams",
      "deleteInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-pending-invitations-in-org": {
    "accessPath": [
      "teams",
      "listPendingInvitationsInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "teams/list-members-in-org": {
    "accessPath": [
      "teams",
      "listMembersInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "role",
      "per_page",
      "page"
    ]
  },
  "teams/get-membership-for-user-in-org": {
    "accessPath": [
      "teams",
      "getMembershipForUserInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/add-or-update-membership-for-user-in-org": {
    "accessPath": [
      "teams",
      "addOrUpdateMembershipForUserInOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/remove-membership-for-user-in-org": {
    "accessPath": [
      "teams",
      "removeMembershipForUserInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-repos-in-org": {
    "accessPath": [
      "teams",
      "listReposInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "teams/check-permissions-for-repo-in-org": {
    "accessPath": [
      "teams",
      "checkPermissionsForRepoInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/add-or-update-repo-permissions-in-org": {
    "accessPath": [
      "teams",
      "addOrUpdateRepoPermissionsInOrg"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "permission"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/remove-repo-in-org": {
    "accessPath": [
      "teams",
      "removeRepoInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-child-in-org": {
    "accessPath": [
      "teams",
      "listChildInOrg"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/orgs/{org}/teams/{team_slug}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "team_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/enable-or-disable-security-product-on-all-org-repos": {
    "accessPath": [
      "orgs",
      "enableOrDisableSecurityProductOnAllOrgRepos"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "query_suite"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/orgs/{org}/{security_product}/{enablement}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org",
      "security_product",
      "enablement"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "rate-limit/get": {
    "accessPath": [
      "rateLimit",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/rate_limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get": {
    "accessPath": [
      "repos",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update": {
    "accessPath": [
      "repos",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "homepage",
      "private",
      "visibility",
      "security_and_analysis",
      "has_issues",
      "has_projects",
      "has_wiki",
      "is_template",
      "default_branch",
      "allow_squash_merge",
      "allow_merge_commit",
      "allow_rebase_merge",
      "allow_auto_merge",
      "delete_branch_on_merge",
      "allow_update_branch",
      "use_squash_pr_title_as_default",
      "squash_merge_commit_title",
      "squash_merge_commit_message",
      "merge_commit_title",
      "merge_commit_message",
      "archived",
      "allow_forking",
      "web_commit_signoff_required"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete": {
    "accessPath": [
      "repos",
      "delete"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-artifacts-for-repo": {
    "accessPath": [
      "actions",
      "listArtifactsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/artifacts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "name"
    ]
  },
  "actions/get-artifact": {
    "accessPath": [
      "actions",
      "getArtifact"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "artifact_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-artifact": {
    "accessPath": [
      "actions",
      "deleteArtifact"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "artifact_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/download-artifact": {
    "accessPath": [
      "actions",
      "downloadArtifact"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "artifact_id",
      "archive_format"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-retention-limit-for-repository": {
    "accessPath": [
      "actions",
      "getActionsCacheRetentionLimitForRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-retention-limit-for-repository": {
    "accessPath": [
      "actions",
      "setActionsCacheRetentionLimitForRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_retention_days"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/cache/retention-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-storage-limit-for-repository": {
    "accessPath": [
      "actions",
      "getActionsCacheStorageLimitForRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-actions-cache-storage-limit-for-repository": {
    "accessPath": [
      "actions",
      "setActionsCacheStorageLimitForRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_cache_size_gb"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/cache/storage-limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-usage": {
    "accessPath": [
      "actions",
      "getActionsCacheUsage"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/cache/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-actions-cache-list": {
    "accessPath": [
      "actions",
      "getActionsCacheList"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/caches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "ref",
      "key",
      "sort",
      "direction"
    ]
  },
  "actions/delete-actions-cache-by-key": {
    "accessPath": [
      "actions",
      "deleteActionsCacheByKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/caches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "key",
      "ref"
    ]
  },
  "actions/delete-actions-cache-by-id": {
    "accessPath": [
      "actions",
      "deleteActionsCacheById"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/caches/{cache_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "cache_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-job-for-workflow-run": {
    "accessPath": [
      "actions",
      "getJobForWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/jobs/{job_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/download-job-logs-for-workflow-run": {
    "accessPath": [
      "actions",
      "downloadJobLogsForWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/re-run-job-for-workflow-run": {
    "accessPath": [
      "actions",
      "reRunJobForWorkflowRun"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enable_debug_logging"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-custom-oidc-sub-claim-for-repo": {
    "accessPath": [
      "actions",
      "getCustomOidcSubClaimForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/oidc/customization/sub",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-custom-oidc-sub-claim-for-repo": {
    "accessPath": [
      "actions",
      "setCustomOidcSubClaimForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "use_default",
      "include_claim_keys"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/oidc/customization/sub",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-repo-organization-secrets": {
    "accessPath": [
      "actions",
      "listRepoOrganizationSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/organization-secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/list-repo-organization-variables": {
    "accessPath": [
      "actions",
      "listRepoOrganizationVariables"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/organization-variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/get-github-actions-permissions-repository": {
    "accessPath": [
      "actions",
      "getGithubActionsPermissionsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-github-actions-permissions-repository": {
    "accessPath": [
      "actions",
      "setGithubActionsPermissionsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enabled",
      "allowed_actions",
      "sha_pinning_required"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-workflow-access-to-repository": {
    "accessPath": [
      "actions",
      "getWorkflowAccessToRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/access",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-workflow-access-to-repository": {
    "accessPath": [
      "actions",
      "setWorkflowAccessToRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "access_level"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/access",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-artifact-and-log-retention-settings-repository": {
    "accessPath": [
      "actions",
      "getArtifactAndLogRetentionSettingsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-artifact-and-log-retention-settings-repository": {
    "accessPath": [
      "actions",
      "setArtifactAndLogRetentionSettingsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "days"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-fork-pr-contributor-approval-permissions-repository": {
    "accessPath": [
      "actions",
      "getForkPrContributorApprovalPermissionsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-fork-pr-contributor-approval-permissions-repository": {
    "accessPath": [
      "actions",
      "setForkPrContributorApprovalPermissionsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "approval_policy"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-private-repo-fork-pr-workflows-settings-repository": {
    "accessPath": [
      "actions",
      "getPrivateRepoForkPrWorkflowsSettingsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-private-repo-fork-pr-workflows-settings-repository": {
    "accessPath": [
      "actions",
      "setPrivateRepoForkPrWorkflowsSettingsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "run_workflows_from_fork_pull_requests",
      "send_write_tokens_to_workflows",
      "send_secrets_and_variables",
      "require_approval_for_fork_pr_workflows"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-allowed-actions-repository": {
    "accessPath": [
      "actions",
      "getAllowedActionsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/selected-actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-allowed-actions-repository": {
    "accessPath": [
      "actions",
      "setAllowedActionsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "github_owned_allowed",
      "verified_allowed",
      "patterns_allowed"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/selected-actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-github-actions-default-workflow-permissions-repository": {
    "accessPath": [
      "actions",
      "getGithubActionsDefaultWorkflowPermissionsRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/workflow",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-github-actions-default-workflow-permissions-repository": {
    "accessPath": [
      "actions",
      "setGithubActionsDefaultWorkflowPermissionsRepository"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "default_workflow_permissions",
      "can_approve_pull_request_reviews"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/permissions/workflow",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-self-hosted-runners-for-repo": {
    "accessPath": [
      "actions",
      "listSelfHostedRunnersForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "per_page",
      "page"
    ]
  },
  "actions/list-runner-applications-for-repo": {
    "accessPath": [
      "actions",
      "listRunnerApplicationsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/downloads",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/generate-runner-jitconfig-for-repo": {
    "accessPath": [
      "actions",
      "generateRunnerJitconfigForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "runner_group_id",
      "labels",
      "work_folder"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/generate-jitconfig",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-registration-token-for-repo": {
    "accessPath": [
      "actions",
      "createRegistrationTokenForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/registration-token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-remove-token-for-repo": {
    "accessPath": [
      "actions",
      "createRemoveTokenForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/remove-token",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "getSelfHostedRunnerForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-self-hosted-runner-from-repo": {
    "accessPath": [
      "actions",
      "deleteSelfHostedRunnerFromRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-labels-for-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "listLabelsForSelfHostedRunnerForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/add-custom-labels-to-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "addCustomLabelsToSelfHostedRunnerForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "labels"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/set-custom-labels-for-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "setCustomLabelsForSelfHostedRunnerForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "labels"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-all-custom-labels-from-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "removeAllCustomLabelsFromSelfHostedRunnerForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/remove-custom-label-from-self-hosted-runner-for-repo": {
    "accessPath": [
      "actions",
      "removeCustomLabelFromSelfHostedRunnerForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "runner_id",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-workflow-runs-for-repo": {
    "accessPath": [
      "actions",
      "listWorkflowRunsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "actor",
      "branch",
      "event",
      "status",
      "per_page",
      "page",
      "created",
      "exclude_pull_requests",
      "check_suite_id",
      "head_sha"
    ]
  },
  "actions/get-workflow-run": {
    "accessPath": [
      "actions",
      "getWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "exclude_pull_requests"
    ]
  },
  "actions/delete-workflow-run": {
    "accessPath": [
      "actions",
      "deleteWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-reviews-for-run": {
    "accessPath": [
      "actions",
      "getReviewsForRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/approve-workflow-run": {
    "accessPath": [
      "actions",
      "approveWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/approve",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-workflow-run-artifacts": {
    "accessPath": [
      "actions",
      "listWorkflowRunArtifacts"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "name",
      "direction"
    ]
  },
  "actions/get-workflow-run-attempt": {
    "accessPath": [
      "actions",
      "getWorkflowRunAttempt"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id",
      "attempt_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "exclude_pull_requests"
    ]
  },
  "actions/list-jobs-for-workflow-run-attempt": {
    "accessPath": [
      "actions",
      "listJobsForWorkflowRunAttempt"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id",
      "attempt_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/download-workflow-run-attempt-logs": {
    "accessPath": [
      "actions",
      "downloadWorkflowRunAttemptLogs"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id",
      "attempt_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/cancel-workflow-run": {
    "accessPath": [
      "actions",
      "cancelWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/review-custom-gates-for-run": {
    "accessPath": [
      "actions",
      "reviewCustomGatesForRun"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/force-cancel-workflow-run": {
    "accessPath": [
      "actions",
      "forceCancelWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-jobs-for-workflow-run": {
    "accessPath": [
      "actions",
      "listJobsForWorkflowRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "per_page",
      "page"
    ]
  },
  "actions/download-workflow-run-logs": {
    "accessPath": [
      "actions",
      "downloadWorkflowRunLogs"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-workflow-run-logs": {
    "accessPath": [
      "actions",
      "deleteWorkflowRunLogs"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-pending-deployments-for-run": {
    "accessPath": [
      "actions",
      "getPendingDeploymentsForRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/review-pending-deployments-for-run": {
    "accessPath": [
      "actions",
      "reviewPendingDeploymentsForRun"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "environment_ids",
      "state",
      "comment"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/re-run-workflow": {
    "accessPath": [
      "actions",
      "reRunWorkflow"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enable_debug_logging"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/re-run-workflow-failed-jobs": {
    "accessPath": [
      "actions",
      "reRunWorkflowFailedJobs"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enable_debug_logging"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-workflow-run-usage": {
    "accessPath": [
      "actions",
      "getWorkflowRunUsage"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/runs/{run_id}/timing",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-repo-secrets": {
    "accessPath": [
      "actions",
      "listRepoSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/get-repo-public-key": {
    "accessPath": [
      "actions",
      "getRepoPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-repo-secret": {
    "accessPath": [
      "actions",
      "getRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-or-update-repo-secret": {
    "accessPath": [
      "actions",
      "createOrUpdateRepoSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-repo-secret": {
    "accessPath": [
      "actions",
      "deleteRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-repo-variables": {
    "accessPath": [
      "actions",
      "listRepoVariables"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/create-repo-variable": {
    "accessPath": [
      "actions",
      "createRepoVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-repo-variable": {
    "accessPath": [
      "actions",
      "getRepoVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/update-repo-variable": {
    "accessPath": [
      "actions",
      "updateRepoVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/actions/variables/{name}",
    "pathConflictKeys": [
      "name"
    ],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-repo-variable": {
    "accessPath": [
      "actions",
      "deleteRepoVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/actions/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-repo-workflows": {
    "accessPath": [
      "actions",
      "listRepoWorkflows"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/get-workflow": {
    "accessPath": [
      "actions",
      "getWorkflow"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/disable-workflow": {
    "accessPath": [
      "actions",
      "disableWorkflow"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-workflow-dispatch": {
    "accessPath": [
      "actions",
      "createWorkflowDispatch"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ref",
      "inputs",
      "return_run_details"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/enable-workflow": {
    "accessPath": [
      "actions",
      "enableWorkflow"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-workflow-runs": {
    "accessPath": [
      "actions",
      "listWorkflowRuns"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "actor",
      "branch",
      "event",
      "status",
      "per_page",
      "page",
      "created",
      "exclude_pull_requests",
      "check_suite_id",
      "head_sha"
    ]
  },
  "actions/get-workflow-usage": {
    "accessPath": [
      "actions",
      "getWorkflowUsage"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "workflow_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-activities": {
    "accessPath": [
      "repos",
      "listActivities"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/activity",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "direction",
      "per_page",
      "before",
      "after",
      "ref",
      "actor",
      "time_period",
      "activity_type"
    ]
  },
  "issues/list-assignees": {
    "accessPath": [
      "issues",
      "listAssignees"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/assignees",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/check-user-can-be-assigned": {
    "accessPath": [
      "issues",
      "checkUserCanBeAssigned"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/assignees/{assignee}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "assignee"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-attestation": {
    "accessPath": [
      "repos",
      "createAttestation"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "bundle"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/attestations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-attestations": {
    "accessPath": [
      "repos",
      "listAttestations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/attestations/{subject_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "predicate_type"
    ]
  },
  "repos/list-autolinks": {
    "accessPath": [
      "repos",
      "listAutolinks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/autolinks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-autolink": {
    "accessPath": [
      "repos",
      "createAutolink"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "key_prefix",
      "url_template",
      "is_alphanumeric"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/autolinks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-autolink": {
    "accessPath": [
      "repos",
      "getAutolink"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/autolinks/{autolink_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "autolink_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-autolink": {
    "accessPath": [
      "repos",
      "deleteAutolink"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/autolinks/{autolink_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "autolink_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/check-automated-security-fixes": {
    "accessPath": [
      "repos",
      "checkAutomatedSecurityFixes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/automated-security-fixes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/enable-automated-security-fixes": {
    "accessPath": [
      "repos",
      "enableAutomatedSecurityFixes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/automated-security-fixes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/disable-automated-security-fixes": {
    "accessPath": [
      "repos",
      "disableAutomatedSecurityFixes"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/automated-security-fixes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-branches": {
    "accessPath": [
      "repos",
      "listBranches"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "protected",
      "per_page",
      "page"
    ]
  },
  "repos/get-branch": {
    "accessPath": [
      "repos",
      "getBranch"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-branch-protection": {
    "accessPath": [
      "repos",
      "getBranchProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-branch-protection": {
    "accessPath": [
      "repos",
      "updateBranchProtection"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "required_status_checks",
      "enforce_admins",
      "required_pull_request_reviews",
      "restrictions",
      "required_linear_history",
      "allow_force_pushes",
      "allow_deletions",
      "block_creations",
      "required_conversation_resolution",
      "lock_branch",
      "allow_fork_syncing"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-branch-protection": {
    "accessPath": [
      "repos",
      "deleteBranchProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-admin-branch-protection": {
    "accessPath": [
      "repos",
      "getAdminBranchProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/set-admin-branch-protection": {
    "accessPath": [
      "repos",
      "setAdminBranchProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-admin-branch-protection": {
    "accessPath": [
      "repos",
      "deleteAdminBranchProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-pull-request-review-protection": {
    "accessPath": [
      "repos",
      "getPullRequestReviewProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-pull-request-review-protection": {
    "accessPath": [
      "repos",
      "updatePullRequestReviewProtection"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dismissal_restrictions",
      "dismiss_stale_reviews",
      "require_code_owner_reviews",
      "required_approving_review_count",
      "require_last_push_approval",
      "bypass_pull_request_allowances"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-pull-request-review-protection": {
    "accessPath": [
      "repos",
      "deletePullRequestReviewProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-commit-signature-protection": {
    "accessPath": [
      "repos",
      "getCommitSignatureProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-commit-signature-protection": {
    "accessPath": [
      "repos",
      "createCommitSignatureProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-commit-signature-protection": {
    "accessPath": [
      "repos",
      "deleteCommitSignatureProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-status-checks-protection": {
    "accessPath": [
      "repos",
      "getStatusChecksProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-status-check-protection": {
    "accessPath": [
      "repos",
      "updateStatusCheckProtection"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "strict",
      "contexts",
      "checks"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-status-check-protection": {
    "accessPath": [
      "repos",
      "removeStatusCheckProtection"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-all-status-check-contexts": {
    "accessPath": [
      "repos",
      "getAllStatusCheckContexts"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/add-status-check-contexts": {
    "accessPath": [
      "repos",
      "addStatusCheckContexts"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/set-status-check-contexts": {
    "accessPath": [
      "repos",
      "setStatusCheckContexts"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-status-check-contexts": {
    "accessPath": [
      "repos",
      "removeStatusCheckContexts"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-access-restrictions": {
    "accessPath": [
      "repos",
      "getAccessRestrictions"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-access-restrictions": {
    "accessPath": [
      "repos",
      "deleteAccessRestrictions"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-apps-with-access-to-protected-branch": {
    "accessPath": [
      "repos",
      "getAppsWithAccessToProtectedBranch"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/add-app-access-restrictions": {
    "accessPath": [
      "repos",
      "addAppAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "apps"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/set-app-access-restrictions": {
    "accessPath": [
      "repos",
      "setAppAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "apps"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-app-access-restrictions": {
    "accessPath": [
      "repos",
      "removeAppAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "apps"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-teams-with-access-to-protected-branch": {
    "accessPath": [
      "repos",
      "getTeamsWithAccessToProtectedBranch"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/add-team-access-restrictions": {
    "accessPath": [
      "repos",
      "addTeamAccessRestrictions"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/set-team-access-restrictions": {
    "accessPath": [
      "repos",
      "setTeamAccessRestrictions"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-team-access-restrictions": {
    "accessPath": [
      "repos",
      "removeTeamAccessRestrictions"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-users-with-access-to-protected-branch": {
    "accessPath": [
      "repos",
      "getUsersWithAccessToProtectedBranch"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/add-user-access-restrictions": {
    "accessPath": [
      "repos",
      "addUserAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "users"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/set-user-access-restrictions": {
    "accessPath": [
      "repos",
      "setUserAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "users"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-user-access-restrictions": {
    "accessPath": [
      "repos",
      "removeUserAccessRestrictions"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "users"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/rename-branch": {
    "accessPath": [
      "repos",
      "renameBranch"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "new_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/branches/{branch}/rename",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/create": {
    "accessPath": [
      "checks",
      "create"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/check-runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/get": {
    "accessPath": [
      "checks",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/check-runs/{check_run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/update": {
    "accessPath": [
      "checks",
      "update"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/check-runs/{check_run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/list-annotations": {
    "accessPath": [
      "checks",
      "listAnnotations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "checks/rerequest-run": {
    "accessPath": [
      "checks",
      "rerequestRun"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/create-suite": {
    "accessPath": [
      "checks",
      "createSuite"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "head_sha"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/check-suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/set-suites-preferences": {
    "accessPath": [
      "checks",
      "setSuitesPreferences"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "auto_trigger_checks"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/check-suites/preferences",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/get-suite": {
    "accessPath": [
      "checks",
      "getSuite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/check-suites/{check_suite_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_suite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "checks/list-for-suite": {
    "accessPath": [
      "checks",
      "listForSuite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_suite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "check_name",
      "status",
      "filter",
      "per_page",
      "page"
    ]
  },
  "checks/rerequest-suite": {
    "accessPath": [
      "checks",
      "rerequestSuite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "check_suite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/list-alerts-for-repo": {
    "accessPath": [
      "codeScanning",
      "listAlertsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tool_name",
      "tool_guid",
      "page",
      "per_page",
      "ref",
      "pr",
      "direction",
      "before",
      "after",
      "sort",
      "state",
      "severity",
      "assignees"
    ]
  },
  "code-scanning/get-alert": {
    "accessPath": [
      "codeScanning",
      "getAlert"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/update-alert": {
    "accessPath": [
      "codeScanning",
      "updateAlert"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-autofix": {
    "accessPath": [
      "codeScanning",
      "getAutofix"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/create-autofix": {
    "accessPath": [
      "codeScanning",
      "createAutofix"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/commit-autofix": {
    "accessPath": [
      "codeScanning",
      "commitAutofix"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "target_ref",
      "message"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/list-alert-instances": {
    "accessPath": [
      "codeScanning",
      "listAlertInstances"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "ref",
      "pr"
    ]
  },
  "code-scanning/list-recent-analyses": {
    "accessPath": [
      "codeScanning",
      "listRecentAnalyses"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/analyses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tool_name",
      "tool_guid",
      "page",
      "per_page",
      "pr",
      "ref",
      "sarif_id",
      "direction",
      "sort"
    ]
  },
  "code-scanning/get-analysis": {
    "accessPath": [
      "codeScanning",
      "getAnalysis"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "analysis_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/delete-analysis": {
    "accessPath": [
      "codeScanning",
      "deleteAnalysis"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "analysis_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "confirm_delete"
    ]
  },
  "code-scanning/list-codeql-databases": {
    "accessPath": [
      "codeScanning",
      "listCodeqlDatabases"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/databases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-codeql-database": {
    "accessPath": [
      "codeScanning",
      "getCodeqlDatabase"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "language"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/delete-codeql-database": {
    "accessPath": [
      "codeScanning",
      "deleteCodeqlDatabase"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "language"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/create-variant-analysis": {
    "accessPath": [
      "codeScanning",
      "createVariantAnalysis"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-variant-analysis": {
    "accessPath": [
      "codeScanning",
      "getVariantAnalysis"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "codeql_variant_analysis_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-variant-analysis-repo-task": {
    "accessPath": [
      "codeScanning",
      "getVariantAnalysisRepoTask"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "codeql_variant_analysis_id",
      "repo_owner",
      "repo_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-default-setup": {
    "accessPath": [
      "codeScanning",
      "getDefaultSetup"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/default-setup",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/update-default-setup": {
    "accessPath": [
      "codeScanning",
      "updateDefaultSetup"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "state",
      "runner_type",
      "runner_label",
      "query_suite",
      "threat_model",
      "languages"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/default-setup",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/upload-sarif": {
    "accessPath": [
      "codeScanning",
      "uploadSarif"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "commit_sha",
      "ref",
      "sarif",
      "checkout_uri",
      "started_at",
      "tool_name",
      "validate"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/sarifs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-scanning/get-sarif": {
    "accessPath": [
      "codeScanning",
      "getSarif"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "sarif_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "code-security/get-configuration-for-repository": {
    "accessPath": [
      "codeSecurity",
      "getConfigurationForRepository"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/code-security-configuration",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/codeowners-errors": {
    "accessPath": [
      "repos",
      "codeownersErrors"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codeowners/errors",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref"
    ]
  },
  "codespaces/list-in-repository-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "listInRepositoryForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/create-with-repo-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "createWithRepoForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ref",
      "location",
      "geo",
      "client_ip",
      "machine",
      "devcontainer_path",
      "multi_repo_permissions_opt_out",
      "working_directory",
      "idle_timeout_minutes",
      "display_name",
      "retention_period_minutes"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-devcontainers-in-repository-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "listDevcontainersInRepositoryForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/devcontainers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/repo-machines-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "repoMachinesForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/machines",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "location",
      "client_ip",
      "ref"
    ]
  },
  "codespaces/pre-flight-with-repo-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "preFlightWithRepoForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/new",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref",
      "client_ip"
    ]
  },
  "codespaces/check-permissions-for-devcontainer": {
    "accessPath": [
      "codespaces",
      "checkPermissionsForDevcontainer"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/permissions_check",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref",
      "devcontainer_path"
    ]
  },
  "codespaces/list-repo-secrets": {
    "accessPath": [
      "codespaces",
      "listRepoSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/get-repo-public-key": {
    "accessPath": [
      "codespaces",
      "getRepoPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-repo-secret": {
    "accessPath": [
      "codespaces",
      "getRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/create-or-update-repo-secret": {
    "accessPath": [
      "codespaces",
      "createOrUpdateRepoSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/delete-repo-secret": {
    "accessPath": [
      "codespaces",
      "deleteRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-collaborators": {
    "accessPath": [
      "repos",
      "listCollaborators"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/collaborators",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "affiliation",
      "permission",
      "per_page",
      "page"
    ]
  },
  "repos/check-collaborator": {
    "accessPath": [
      "repos",
      "checkCollaborator"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/collaborators/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/add-collaborator": {
    "accessPath": [
      "repos",
      "addCollaborator"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "permission"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/collaborators/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/remove-collaborator": {
    "accessPath": [
      "repos",
      "removeCollaborator"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/collaborators/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-collaborator-permission-level": {
    "accessPath": [
      "repos",
      "getCollaboratorPermissionLevel"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/collaborators/{username}/permission",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-commit-comments-for-repo": {
    "accessPath": [
      "repos",
      "listCommitCommentsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-commit-comment": {
    "accessPath": [
      "repos",
      "getCommitComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-commit-comment": {
    "accessPath": [
      "repos",
      "updateCommitComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-commit-comment": {
    "accessPath": [
      "repos",
      "deleteCommitComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/list-for-commit-comment": {
    "accessPath": [
      "reactions",
      "listForCommitComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "content",
      "per_page",
      "page"
    ]
  },
  "reactions/create-for-commit-comment": {
    "accessPath": [
      "reactions",
      "createForCommitComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/delete-for-commit-comment": {
    "accessPath": [
      "reactions",
      "deleteForCommitComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id",
      "reaction_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-commits": {
    "accessPath": [
      "repos",
      "listCommits"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sha",
      "path",
      "author",
      "committer",
      "since",
      "until",
      "per_page",
      "page"
    ]
  },
  "repos/list-branches-for-head-commit": {
    "accessPath": [
      "repos",
      "listBranchesForHeadCommit"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "commit_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-comments-for-commit": {
    "accessPath": [
      "repos",
      "listCommentsForCommit"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "commit_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-commit-comment": {
    "accessPath": [
      "repos",
      "createCommitComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body",
      "path",
      "position",
      "line"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "commit_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-pull-requests-associated-with-commit": {
    "accessPath": [
      "repos",
      "listPullRequestsAssociatedWithCommit"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{commit_sha}/pulls",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "commit_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-commit": {
    "accessPath": [
      "repos",
      "getCommit"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "checks/list-for-ref": {
    "accessPath": [
      "checks",
      "listForRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{ref}/check-runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "check_name",
      "status",
      "filter",
      "per_page",
      "page",
      "app_id"
    ]
  },
  "checks/list-suites-for-ref": {
    "accessPath": [
      "checks",
      "listSuitesForRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{ref}/check-suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "app_id",
      "check_name",
      "per_page",
      "page"
    ]
  },
  "repos/get-combined-status-for-ref": {
    "accessPath": [
      "repos",
      "getCombinedStatusForRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{ref}/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/list-commit-statuses-for-ref": {
    "accessPath": [
      "repos",
      "listCommitStatusesForRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/commits/{ref}/statuses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-community-profile-metrics": {
    "accessPath": [
      "repos",
      "getCommunityProfileMetrics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/community/profile",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/compare-commits": {
    "accessPath": [
      "repos",
      "compareCommits"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/compare/{basehead}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "basehead"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "repos/get-content": {
    "accessPath": [
      "repos",
      "getContent"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/contents/{path}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "path"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref"
    ]
  },
  "repos/create-or-update-file-contents": {
    "accessPath": [
      "repos",
      "createOrUpdateFileContents"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "content",
      "sha",
      "branch",
      "committer",
      "author"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/contents/{path}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "path"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-file": {
    "accessPath": [
      "repos",
      "deleteFile"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "sha",
      "branch",
      "committer",
      "author"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/contents/{path}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "path"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-contributors": {
    "accessPath": [
      "repos",
      "listContributors"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/contributors",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "anon",
      "per_page",
      "page"
    ]
  },
  "dependabot/list-alerts-for-repo": {
    "accessPath": [
      "dependabot",
      "listAlertsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "classification",
      "state",
      "severity",
      "ecosystem",
      "package",
      "manifest",
      "epss_percentage",
      "has",
      "assignee",
      "scope",
      "sort",
      "direction",
      "before",
      "after",
      "per_page"
    ]
  },
  "dependabot/get-alert": {
    "accessPath": [
      "dependabot",
      "getAlert"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/update-alert": {
    "accessPath": [
      "dependabot",
      "updateAlert"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/list-repo-secrets": {
    "accessPath": [
      "dependabot",
      "listRepoSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "dependabot/get-repo-public-key": {
    "accessPath": [
      "dependabot",
      "getRepoPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/get-repo-secret": {
    "accessPath": [
      "dependabot",
      "getRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/create-or-update-repo-secret": {
    "accessPath": [
      "dependabot",
      "createOrUpdateRepoSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependabot/delete-repo-secret": {
    "accessPath": [
      "dependabot",
      "deleteRepoSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependency-graph/diff-range": {
    "accessPath": [
      "dependencyGraph",
      "diffRange"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependency-graph/compare/{basehead}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "basehead"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name"
    ]
  },
  "dependency-graph/export-sbom": {
    "accessPath": [
      "dependencyGraph",
      "exportSbom"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/dependency-graph/sbom",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "dependency-graph/create-repository-snapshot": {
    "accessPath": [
      "dependencyGraph",
      "createRepositorySnapshot"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "version",
      "job",
      "sha",
      "ref",
      "detector",
      "metadata",
      "manifests",
      "scanned"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/dependency-graph/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-deployments": {
    "accessPath": [
      "repos",
      "listDeployments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sha",
      "ref",
      "task",
      "environment",
      "per_page",
      "page"
    ]
  },
  "repos/create-deployment": {
    "accessPath": [
      "repos",
      "createDeployment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ref",
      "task",
      "auto_merge",
      "required_contexts",
      "payload",
      "environment",
      "description",
      "transient_environment",
      "production_environment"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-deployment": {
    "accessPath": [
      "repos",
      "getDeployment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-deployment": {
    "accessPath": [
      "repos",
      "deleteDeployment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-deployment-statuses": {
    "accessPath": [
      "repos",
      "listDeploymentStatuses"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-deployment-status": {
    "accessPath": [
      "repos",
      "createDeploymentStatus"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "state",
      "target_url",
      "log_url",
      "description",
      "environment",
      "environment_url",
      "auto_inactive"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-deployment-status": {
    "accessPath": [
      "repos",
      "getDeploymentStatus"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "deployment_id",
      "status_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-dispatch-event": {
    "accessPath": [
      "repos",
      "createDispatchEvent"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "event_type",
      "client_payload"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/dispatches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-all-environments": {
    "accessPath": [
      "repos",
      "getAllEnvironments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-environment": {
    "accessPath": [
      "repos",
      "getEnvironment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-or-update-environment": {
    "accessPath": [
      "repos",
      "createOrUpdateEnvironment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "wait_timer",
      "prevent_self_review",
      "reviewers",
      "deployment_branch_policy"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-an-environment": {
    "accessPath": [
      "repos",
      "deleteAnEnvironment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-deployment-branch-policies": {
    "accessPath": [
      "repos",
      "listDeploymentBranchPolicies"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-deployment-branch-policy": {
    "accessPath": [
      "repos",
      "createDeploymentBranchPolicy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-deployment-branch-policy": {
    "accessPath": [
      "repos",
      "getDeploymentBranchPolicy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "branch_policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-deployment-branch-policy": {
    "accessPath": [
      "repos",
      "updateDeploymentBranchPolicy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "branch_policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-deployment-branch-policy": {
    "accessPath": [
      "repos",
      "deleteDeploymentBranchPolicy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "branch_policy_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-all-deployment-protection-rules": {
    "accessPath": [
      "repos",
      "getAllDeploymentProtectionRules"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_name",
      "repo",
      "owner"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-deployment-protection-rule": {
    "accessPath": [
      "repos",
      "createDeploymentProtectionRule"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "integration_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_name",
      "repo",
      "owner"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-custom-deployment-rule-integrations": {
    "accessPath": [
      "repos",
      "listCustomDeploymentRuleIntegrations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_name",
      "repo",
      "owner"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "repos/get-custom-deployment-protection-rule": {
    "accessPath": [
      "repos",
      "getCustomDeploymentProtectionRule"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "protection_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/disable-deployment-protection-rule": {
    "accessPath": [
      "repos",
      "disableDeploymentProtectionRule"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "environment_name",
      "repo",
      "owner",
      "protection_rule_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-environment-secrets": {
    "accessPath": [
      "actions",
      "listEnvironmentSecrets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/get-environment-public-key": {
    "accessPath": [
      "actions",
      "getEnvironmentPublicKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-environment-secret": {
    "accessPath": [
      "actions",
      "getEnvironmentSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/create-or-update-environment-secret": {
    "accessPath": [
      "actions",
      "createOrUpdateEnvironmentSecret"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-environment-secret": {
    "accessPath": [
      "actions",
      "deleteEnvironmentSecret"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/list-environment-variables": {
    "accessPath": [
      "actions",
      "listEnvironmentVariables"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "actions/create-environment-variable": {
    "accessPath": [
      "actions",
      "createEnvironmentVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/variables",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/get-environment-variable": {
    "accessPath": [
      "actions",
      "getEnvironmentVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "environment_name",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/update-environment-variable": {
    "accessPath": [
      "actions",
      "updateEnvironmentVariable"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "value"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
    "pathConflictKeys": [
      "name"
    ],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "actions/delete-environment-variable": {
    "accessPath": [
      "actions",
      "deleteEnvironmentVariable"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name",
      "environment_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-repo-events": {
    "accessPath": [
      "activity",
      "listRepoEvents"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/list-forks": {
    "accessPath": [
      "repos",
      "listForks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/forks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "per_page",
      "page"
    ]
  },
  "repos/create-fork": {
    "accessPath": [
      "repos",
      "createFork"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "organization",
      "name",
      "default_branch_only"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/forks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/create-blob": {
    "accessPath": [
      "git",
      "createBlob"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content",
      "encoding"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/git/blobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/get-blob": {
    "accessPath": [
      "git",
      "getBlob"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/blobs/{file_sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "file_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/create-commit": {
    "accessPath": [
      "git",
      "createCommit"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "tree",
      "parents",
      "author",
      "committer",
      "signature"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/git/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/get-commit": {
    "accessPath": [
      "git",
      "getCommit"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/commits/{commit_sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "commit_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/list-matching-refs": {
    "accessPath": [
      "git",
      "listMatchingRefs"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/matching-refs/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/get-ref": {
    "accessPath": [
      "git",
      "getRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/ref/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/create-ref": {
    "accessPath": [
      "git",
      "createRef"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ref",
      "sha"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/git/refs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/update-ref": {
    "accessPath": [
      "git",
      "updateRef"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sha",
      "force"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/git/refs/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/delete-ref": {
    "accessPath": [
      "git",
      "deleteRef"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/git/refs/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/create-tag": {
    "accessPath": [
      "git",
      "createTag"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tag",
      "message",
      "object",
      "type",
      "tagger"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/git/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/get-tag": {
    "accessPath": [
      "git",
      "getTag"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/tags/{tag_sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "tag_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/create-tree": {
    "accessPath": [
      "git",
      "createTree"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tree",
      "base_tree"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/git/trees",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "git/get-tree": {
    "accessPath": [
      "git",
      "getTree"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/git/trees/{tree_sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "tree_sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "recursive"
    ]
  },
  "repos/list-webhooks": {
    "accessPath": [
      "repos",
      "listWebhooks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/hooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-webhook": {
    "accessPath": [
      "repos",
      "createWebhook"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "config",
      "events",
      "active"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/hooks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-webhook": {
    "accessPath": [
      "repos",
      "getWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-webhook": {
    "accessPath": [
      "repos",
      "updateWebhook"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config",
      "events",
      "add_events",
      "remove_events",
      "active"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-webhook": {
    "accessPath": [
      "repos",
      "deleteWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-webhook-config-for-repo": {
    "accessPath": [
      "repos",
      "getWebhookConfigForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-webhook-config-for-repo": {
    "accessPath": [
      "repos",
      "updateWebhookConfigForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "url",
      "content_type",
      "secret",
      "insecure_ssl"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-webhook-deliveries": {
    "accessPath": [
      "repos",
      "listWebhookDeliveries"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "cursor",
      "status"
    ]
  },
  "repos/get-webhook-delivery": {
    "accessPath": [
      "repos",
      "getWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id",
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/redeliver-webhook-delivery": {
    "accessPath": [
      "repos",
      "redeliverWebhookDelivery"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id",
      "delivery_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/ping-webhook": {
    "accessPath": [
      "repos",
      "pingWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/pings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/test-push-webhook": {
    "accessPath": [
      "repos",
      "testPushWebhook"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/hooks/{hook_id}/tests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "hook_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/check-immutable-releases": {
    "accessPath": [
      "repos",
      "checkImmutableReleases"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/immutable-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/enable-immutable-releases": {
    "accessPath": [
      "repos",
      "enableImmutableReleases"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/immutable-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/disable-immutable-releases": {
    "accessPath": [
      "repos",
      "disableImmutableReleases"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/immutable-releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/get-import-status": {
    "accessPath": [
      "migrations",
      "getImportStatus"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/start-import": {
    "accessPath": [
      "migrations",
      "startImport"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "vcs_url",
      "vcs",
      "vcs_username",
      "vcs_password",
      "tfvc_project"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/update-import": {
    "accessPath": [
      "migrations",
      "updateImport"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "vcs_username",
      "vcs_password",
      "vcs",
      "tfvc_project"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/cancel-import": {
    "accessPath": [
      "migrations",
      "cancelImport"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/get-commit-authors": {
    "accessPath": [
      "migrations",
      "getCommitAuthors"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/import/authors",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since"
    ]
  },
  "migrations/map-commit-author": {
    "accessPath": [
      "migrations",
      "mapCommitAuthor"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "email",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/import/authors/{author_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "author_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/get-large-files": {
    "accessPath": [
      "migrations",
      "getLargeFiles"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/import/large_files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/set-lfs-preference": {
    "accessPath": [
      "migrations",
      "setLfsPreference"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "use_lfs"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/import/lfs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/get-repo-installation": {
    "accessPath": [
      "apps",
      "getRepoInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/installation",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/get-restrictions-for-repo": {
    "accessPath": [
      "interactions",
      "getRestrictionsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/set-restrictions-for-repo": {
    "accessPath": [
      "interactions",
      "setRestrictionsForRepo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "limit",
      "expiry"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/remove-restrictions-for-repo": {
    "accessPath": [
      "interactions",
      "removeRestrictionsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-invitations": {
    "accessPath": [
      "repos",
      "listInvitations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/update-invitation": {
    "accessPath": [
      "repos",
      "updateInvitation"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "permissions"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/invitations/{invitation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-invitation": {
    "accessPath": [
      "repos",
      "deleteInvitation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/invitations/{invitation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-for-repo": {
    "accessPath": [
      "issues",
      "listForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "milestone",
      "state",
      "assignee",
      "type",
      "creator",
      "mentioned",
      "labels",
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "issues/create": {
    "accessPath": [
      "issues",
      "create"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "body",
      "assignee",
      "milestone",
      "labels",
      "assignees",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-comments-for-repo": {
    "accessPath": [
      "issues",
      "listCommentsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "issues/get-comment": {
    "accessPath": [
      "issues",
      "getComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/update-comment": {
    "accessPath": [
      "issues",
      "updateComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/delete-comment": {
    "accessPath": [
      "issues",
      "deleteComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/pin-comment": {
    "accessPath": [
      "issues",
      "pinComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}/pin",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/unpin-comment": {
    "accessPath": [
      "issues",
      "unpinComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}/pin",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/list-for-issue-comment": {
    "accessPath": [
      "reactions",
      "listForIssueComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "content",
      "per_page",
      "page"
    ]
  },
  "reactions/create-for-issue-comment": {
    "accessPath": [
      "reactions",
      "createForIssueComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/delete-for-issue-comment": {
    "accessPath": [
      "reactions",
      "deleteForIssueComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id",
      "reaction_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-events-for-repo": {
    "accessPath": [
      "issues",
      "listEventsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/get-event": {
    "accessPath": [
      "issues",
      "getEvent"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/events/{event_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "event_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/get": {
    "accessPath": [
      "issues",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/update": {
    "accessPath": [
      "issues",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "body",
      "assignee",
      "state",
      "state_reason",
      "milestone",
      "labels",
      "assignees",
      "issue_field_values",
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/add-assignees": {
    "accessPath": [
      "issues",
      "addAssignees"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "assignees"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/assignees",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/remove-assignees": {
    "accessPath": [
      "issues",
      "removeAssignees"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "assignees"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/assignees",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/check-user-can-be-assigned-to-issue": {
    "accessPath": [
      "issues",
      "checkUserCanBeAssignedToIssue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number",
      "assignee"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-comments": {
    "accessPath": [
      "issues",
      "listComments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page",
      "page"
    ]
  },
  "issues/create-comment": {
    "accessPath": [
      "issues",
      "createComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-dependencies-blocked-by": {
    "accessPath": [
      "issues",
      "listDependenciesBlockedBy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/add-blocked-by-dependency": {
    "accessPath": [
      "issues",
      "addBlockedByDependency"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "issue_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/remove-dependency-blocked-by": {
    "accessPath": [
      "issues",
      "removeDependencyBlockedBy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number",
      "issue_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-dependencies-blocking": {
    "accessPath": [
      "issues",
      "listDependenciesBlocking"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/list-events": {
    "accessPath": [
      "issues",
      "listEvents"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/list-issue-field-values-for-issue": {
    "accessPath": [
      "issues",
      "listIssueFieldValuesForIssue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/issue-field-values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/list-labels-on-issue": {
    "accessPath": [
      "issues",
      "listLabelsOnIssue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/add-labels": {
    "accessPath": [
      "issues",
      "addLabels"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/set-labels": {
    "accessPath": [
      "issues",
      "setLabels"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/remove-all-labels": {
    "accessPath": [
      "issues",
      "removeAllLabels"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/remove-label": {
    "accessPath": [
      "issues",
      "removeLabel"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/lock": {
    "accessPath": [
      "issues",
      "lock"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "lock_reason"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/lock",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/unlock": {
    "accessPath": [
      "issues",
      "unlock"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/lock",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/get-parent": {
    "accessPath": [
      "issues",
      "getParent"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/parent",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/list-for-issue": {
    "accessPath": [
      "reactions",
      "listForIssue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "content",
      "per_page",
      "page"
    ]
  },
  "reactions/create-for-issue": {
    "accessPath": [
      "reactions",
      "createForIssue"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/delete-for-issue": {
    "accessPath": [
      "reactions",
      "deleteForIssue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number",
      "reaction_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/remove-sub-issue": {
    "accessPath": [
      "issues",
      "removeSubIssue"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sub_issue_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issue",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-sub-issues": {
    "accessPath": [
      "issues",
      "listSubIssues"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/add-sub-issue": {
    "accessPath": [
      "issues",
      "addSubIssue"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sub_issue_id",
      "replace_parent"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/reprioritize-sub-issue": {
    "accessPath": [
      "issues",
      "reprioritizeSubIssue"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sub_issue_id",
      "after_id",
      "before_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-events-for-timeline": {
    "accessPath": [
      "issues",
      "listEventsForTimeline"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/issues/{issue_number}/timeline",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/list-deploy-keys": {
    "accessPath": [
      "repos",
      "listDeployKeys"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-deploy-key": {
    "accessPath": [
      "repos",
      "createDeployKey"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "key",
      "read_only"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-deploy-key": {
    "accessPath": [
      "repos",
      "getDeployKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-deploy-key": {
    "accessPath": [
      "repos",
      "deleteDeployKey"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-labels-for-repo": {
    "accessPath": [
      "issues",
      "listLabelsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "issues/create-label": {
    "accessPath": [
      "issues",
      "createLabel"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "color",
      "description"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/get-label": {
    "accessPath": [
      "issues",
      "getLabel"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/update-label": {
    "accessPath": [
      "issues",
      "updateLabel"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "new_name",
      "color",
      "description"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/delete-label": {
    "accessPath": [
      "issues",
      "deleteLabel"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/labels/{name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-languages": {
    "accessPath": [
      "repos",
      "listLanguages"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/languages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "licenses/get-for-repo": {
    "accessPath": [
      "licenses",
      "getForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/license",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref"
    ]
  },
  "repos/merge-upstream": {
    "accessPath": [
      "repos",
      "mergeUpstream"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "branch"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/merge-upstream",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/merge": {
    "accessPath": [
      "repos",
      "merge"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "base",
      "head",
      "commit_message"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/merges",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-milestones": {
    "accessPath": [
      "issues",
      "listMilestones"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/milestones",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "issues/create-milestone": {
    "accessPath": [
      "issues",
      "createMilestone"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "state",
      "description",
      "due_on"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/milestones",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/get-milestone": {
    "accessPath": [
      "issues",
      "getMilestone"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/milestones/{milestone_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "milestone_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/update-milestone": {
    "accessPath": [
      "issues",
      "updateMilestone"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "state",
      "description",
      "due_on"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/milestones/{milestone_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "milestone_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/delete-milestone": {
    "accessPath": [
      "issues",
      "deleteMilestone"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/milestones/{milestone_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "milestone_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-labels-for-milestone": {
    "accessPath": [
      "issues",
      "listLabelsForMilestone"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/milestones/{milestone_number}/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "milestone_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-repo-notifications-for-authenticated-user": {
    "accessPath": [
      "activity",
      "listRepoNotificationsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/notifications",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "all",
      "participating",
      "since",
      "before",
      "per_page",
      "page"
    ]
  },
  "activity/mark-repo-notifications-as-read": {
    "accessPath": [
      "activity",
      "markRepoNotificationsAsRead"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "last_read_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/notifications",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-pages": {
    "accessPath": [
      "repos",
      "getPages"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-pages-site": {
    "accessPath": [
      "repos",
      "createPagesSite"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-information-about-pages-site": {
    "accessPath": [
      "repos",
      "updateInformationAboutPagesSite"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/pages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-pages-site": {
    "accessPath": [
      "repos",
      "deletePagesSite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/pages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-pages-builds": {
    "accessPath": [
      "repos",
      "listPagesBuilds"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages/builds",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/request-pages-build": {
    "accessPath": [
      "repos",
      "requestPagesBuild"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pages/builds",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-latest-pages-build": {
    "accessPath": [
      "repos",
      "getLatestPagesBuild"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages/builds/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-pages-build": {
    "accessPath": [
      "repos",
      "getPagesBuild"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages/builds/{build_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "build_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-pages-deployment": {
    "accessPath": [
      "repos",
      "createPagesDeployment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "artifact_id",
      "artifact_url",
      "environment",
      "pages_build_version",
      "oidc_token"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pages/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-pages-deployment": {
    "accessPath": [
      "repos",
      "getPagesDeployment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pages_deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/cancel-pages-deployment": {
    "accessPath": [
      "repos",
      "cancelPagesDeployment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pages_deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-pages-health-check": {
    "accessPath": [
      "repos",
      "getPagesHealthCheck"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pages/health",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/check-private-vulnerability-reporting": {
    "accessPath": [
      "repos",
      "checkPrivateVulnerabilityReporting"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/private-vulnerability-reporting",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/enable-private-vulnerability-reporting": {
    "accessPath": [
      "repos",
      "enablePrivateVulnerabilityReporting"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/private-vulnerability-reporting",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/disable-private-vulnerability-reporting": {
    "accessPath": [
      "repos",
      "disablePrivateVulnerabilityReporting"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/private-vulnerability-reporting",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/custom-properties-for-repos-get-repository-values": {
    "accessPath": [
      "repos",
      "customPropertiesForReposGetRepositoryValues"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/properties/values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/custom-properties-for-repos-create-or-update-repository-values": {
    "accessPath": [
      "repos",
      "customPropertiesForReposCreateOrUpdateRepositoryValues"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "properties"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/properties/values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list": {
    "accessPath": [
      "pulls",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "head",
      "base",
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "pulls/create": {
    "accessPath": [
      "pulls",
      "create"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "head",
      "head_repo",
      "base",
      "body",
      "maintainer_can_modify",
      "draft",
      "issue"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-review-comments-for-repo": {
    "accessPath": [
      "pulls",
      "listReviewCommentsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "pulls/get-review-comment": {
    "accessPath": [
      "pulls",
      "getReviewComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/update-review-comment": {
    "accessPath": [
      "pulls",
      "updateReviewComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/delete-review-comment": {
    "accessPath": [
      "pulls",
      "deleteReviewComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/list-for-pull-request-review-comment": {
    "accessPath": [
      "reactions",
      "listForPullRequestReviewComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "content",
      "per_page",
      "page"
    ]
  },
  "reactions/create-for-pull-request-review-comment": {
    "accessPath": [
      "reactions",
      "createForPullRequestReviewComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/delete-for-pull-request-comment": {
    "accessPath": [
      "reactions",
      "deleteForPullRequestComment"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "comment_id",
      "reaction_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/get": {
    "accessPath": [
      "pulls",
      "get"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/update": {
    "accessPath": [
      "pulls",
      "update"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "body",
      "state",
      "base",
      "maintainer_can_modify"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/create-with-pr-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "createWithPrForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "location",
      "geo",
      "client_ip",
      "machine",
      "devcontainer_path",
      "multi_repo_permissions_opt_out",
      "working_directory",
      "idle_timeout_minutes",
      "display_name",
      "retention_period_minutes"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-review-comments": {
    "accessPath": [
      "pulls",
      "listReviewComments"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "pulls/create-review-comment": {
    "accessPath": [
      "pulls",
      "createReviewComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body",
      "commit_id",
      "path",
      "position",
      "side",
      "line",
      "start_line",
      "start_side",
      "in_reply_to",
      "subject_type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/create-reply-for-review-comment": {
    "accessPath": [
      "pulls",
      "createReplyForReviewComment"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "comment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-commits": {
    "accessPath": [
      "pulls",
      "listCommits"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "pulls/list-files": {
    "accessPath": [
      "pulls",
      "listFiles"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "pulls/check-if-merged": {
    "accessPath": [
      "pulls",
      "checkIfMerged"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/merge": {
    "accessPath": [
      "pulls",
      "merge"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "commit_title",
      "commit_message",
      "sha",
      "merge_method"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-requested-reviewers": {
    "accessPath": [
      "pulls",
      "listRequestedReviewers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/request-reviewers": {
    "accessPath": [
      "pulls",
      "requestReviewers"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/remove-requested-reviewers": {
    "accessPath": [
      "pulls",
      "removeRequestedReviewers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "reviewers",
      "team_reviewers"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-reviews": {
    "accessPath": [
      "pulls",
      "listReviews"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "pulls/create-review": {
    "accessPath": [
      "pulls",
      "createReview"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "commit_id",
      "body",
      "event",
      "comments"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/get-review": {
    "accessPath": [
      "pulls",
      "getReview"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/update-review": {
    "accessPath": [
      "pulls",
      "updateReview"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/delete-pending-review": {
    "accessPath": [
      "pulls",
      "deletePendingReview"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/list-comments-for-review": {
    "accessPath": [
      "pulls",
      "listCommentsForReview"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "pulls/dismiss-review": {
    "accessPath": [
      "pulls",
      "dismissReview"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "message",
      "event"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/submit-review": {
    "accessPath": [
      "pulls",
      "submitReview"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "body",
      "event"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number",
      "review_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "pulls/update-branch": {
    "accessPath": [
      "pulls",
      "updateBranch"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "expected_head_sha"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "pull_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-readme": {
    "accessPath": [
      "repos",
      "getReadme"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/readme",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref"
    ]
  },
  "repos/get-readme-in-directory": {
    "accessPath": [
      "repos",
      "getReadmeInDirectory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/readme/{dir}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "dir"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref"
    ]
  },
  "repos/list-releases": {
    "accessPath": [
      "repos",
      "listReleases"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/create-release": {
    "accessPath": [
      "repos",
      "createRelease"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tag_name",
      "target_commitish",
      "name",
      "body",
      "draft",
      "prerelease",
      "discussion_category_name",
      "generate_release_notes",
      "make_latest"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/releases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-release-asset": {
    "accessPath": [
      "repos",
      "getReleaseAsset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/assets/{asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-release-asset": {
    "accessPath": [
      "repos",
      "updateReleaseAsset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "label",
      "state"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/releases/assets/{asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-release-asset": {
    "accessPath": [
      "repos",
      "deleteReleaseAsset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/releases/assets/{asset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "asset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/generate-release-notes": {
    "accessPath": [
      "repos",
      "generateReleaseNotes"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tag_name",
      "target_commitish",
      "previous_tag_name",
      "configuration_file_path"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/releases/generate-notes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-latest-release": {
    "accessPath": [
      "repos",
      "getLatestRelease"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-release-by-tag": {
    "accessPath": [
      "repos",
      "getReleaseByTag"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/tags/{tag}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "tag"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-release": {
    "accessPath": [
      "repos",
      "getRelease"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/update-release": {
    "accessPath": [
      "repos",
      "updateRelease"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tag_name",
      "target_commitish",
      "name",
      "body",
      "draft",
      "prerelease",
      "make_latest",
      "discussion_category_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-release": {
    "accessPath": [
      "repos",
      "deleteRelease"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-release-assets": {
    "accessPath": [
      "repos",
      "listReleaseAssets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}/assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/upload-release-asset": {
    "accessPath": [
      "repos",
      "uploadReleaseAsset"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}/assets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "label"
    ]
  },
  "reactions/list-for-release": {
    "accessPath": [
      "reactions",
      "listForRelease"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "content",
      "per_page",
      "page"
    ]
  },
  "reactions/create-for-release": {
    "accessPath": [
      "reactions",
      "createForRelease"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "content"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}/reactions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "reactions/delete-for-release": {
    "accessPath": [
      "reactions",
      "deleteForRelease"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "release_id",
      "reaction_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-branch-rules": {
    "accessPath": [
      "repos",
      "getBranchRules"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rules/branches/{branch}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "branch"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-repo-rulesets": {
    "accessPath": [
      "repos",
      "getRepoRulesets"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "includes_parents",
      "targets"
    ]
  },
  "repos/create-repo-ruleset": {
    "accessPath": [
      "repos",
      "createRepoRuleset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "target",
      "enforcement",
      "bypass_actors",
      "conditions",
      "rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-repo-rule-suites": {
    "accessPath": [
      "repos",
      "getRepoRuleSuites"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/rule-suites",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "ref",
      "time_period",
      "actor_name",
      "rule_suite_result",
      "per_page",
      "page"
    ]
  },
  "repos/get-repo-rule-suite": {
    "accessPath": [
      "repos",
      "getRepoRuleSuite"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "rule_suite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-repo-ruleset": {
    "accessPath": [
      "repos",
      "getRepoRuleset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "includes_parents"
    ]
  },
  "repos/update-repo-ruleset": {
    "accessPath": [
      "repos",
      "updateRepoRuleset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "target",
      "enforcement",
      "bypass_actors",
      "conditions",
      "rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/delete-repo-ruleset": {
    "accessPath": [
      "repos",
      "deleteRepoRuleset"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/{ruleset_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-repo-ruleset-history": {
    "accessPath": [
      "repos",
      "getRepoRulesetHistory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/{ruleset_id}/history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ruleset_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-repo-ruleset-version": {
    "accessPath": [
      "repos",
      "getRepoRulesetVersion"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ruleset_id",
      "version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "secret-scanning/list-alerts-for-repo": {
    "accessPath": [
      "secretScanning",
      "listAlertsForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "secret_type",
      "exclude_secret_types",
      "resolution",
      "assignee",
      "sort",
      "direction",
      "page",
      "per_page",
      "before",
      "after",
      "validity",
      "is_publicly_leaked",
      "is_multi_repo",
      "hide_secret"
    ]
  },
  "secret-scanning/get-alert": {
    "accessPath": [
      "secretScanning",
      "getAlert"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "hide_secret"
    ]
  },
  "secret-scanning/update-alert": {
    "accessPath": [
      "secretScanning",
      "updateAlert"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "secret-scanning/list-locations-for-alert": {
    "accessPath": [
      "secretScanning",
      "listLocationsForAlert"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "alert_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "secret-scanning/create-push-protection-bypass": {
    "accessPath": [
      "secretScanning",
      "createPushProtectionBypass"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "reason",
      "placeholder_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "secret-scanning/get-scan-history": {
    "accessPath": [
      "secretScanning",
      "getScanHistory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/secret-scanning/scan-history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/list-repository-advisories": {
    "accessPath": [
      "securityAdvisories",
      "listRepositoryAdvisories"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "direction",
      "sort",
      "before",
      "after",
      "per_page",
      "state"
    ]
  },
  "security-advisories/create-repository-advisory": {
    "accessPath": [
      "securityAdvisories",
      "createRepositoryAdvisory"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "summary",
      "description",
      "cve_id",
      "vulnerabilities",
      "cwe_ids",
      "credits",
      "severity",
      "cvss_vector_string",
      "start_private_fork"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/create-private-vulnerability-report": {
    "accessPath": [
      "securityAdvisories",
      "createPrivateVulnerabilityReport"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "summary",
      "description",
      "vulnerabilities",
      "cwe_ids",
      "severity",
      "cvss_vector_string",
      "start_private_fork"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories/reports",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/get-repository-advisory": {
    "accessPath": [
      "securityAdvisories",
      "getRepositoryAdvisory"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ghsa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/update-repository-advisory": {
    "accessPath": [
      "securityAdvisories",
      "updateRepositoryAdvisory"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "summary",
      "description",
      "cve_id",
      "vulnerabilities",
      "cwe_ids",
      "credits",
      "severity",
      "cvss_vector_string",
      "state",
      "collaborating_users",
      "collaborating_teams"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ghsa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/create-repository-advisory-cve-request": {
    "accessPath": [
      "securityAdvisories",
      "createRepositoryAdvisoryCveRequest"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ghsa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "security-advisories/create-fork": {
    "accessPath": [
      "securityAdvisories",
      "createFork"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ghsa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-stargazers-for-repo": {
    "accessPath": [
      "activity",
      "listStargazersForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stargazers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-code-frequency-stats": {
    "accessPath": [
      "repos",
      "getCodeFrequencyStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stats/code_frequency",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-commit-activity-stats": {
    "accessPath": [
      "repos",
      "getCommitActivityStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stats/commit_activity",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-contributors-stats": {
    "accessPath": [
      "repos",
      "getContributorsStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stats/contributors",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-participation-stats": {
    "accessPath": [
      "repos",
      "getParticipationStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stats/participation",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-punch-card-stats": {
    "accessPath": [
      "repos",
      "getPunchCardStats"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/stats/punch_card",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-commit-status": {
    "accessPath": [
      "repos",
      "createCommitStatus"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "state",
      "target_url",
      "description",
      "context"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/statuses/{sha}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "sha"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-watchers-for-repo": {
    "accessPath": [
      "activity",
      "listWatchersForRepo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/subscribers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/get-repo-subscription": {
    "accessPath": [
      "activity",
      "getRepoSubscription"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/set-repo-subscription": {
    "accessPath": [
      "activity",
      "setRepoSubscription"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "subscribed",
      "ignored"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/delete-repo-subscription": {
    "accessPath": [
      "activity",
      "deleteRepoSubscription"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-tags": {
    "accessPath": [
      "repos",
      "listTags"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/download-tarball-archive": {
    "accessPath": [
      "repos",
      "downloadTarballArchive"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/tarball/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-teams": {
    "accessPath": [
      "repos",
      "listTeams"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/get-all-topics": {
    "accessPath": [
      "repos",
      "getAllTopics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/topics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ]
  },
  "repos/replace-all-topics": {
    "accessPath": [
      "repos",
      "replaceAllTopics"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "names"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/topics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-clones": {
    "accessPath": [
      "repos",
      "getClones"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/traffic/clones",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per"
    ]
  },
  "repos/get-top-paths": {
    "accessPath": [
      "repos",
      "getTopPaths"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/traffic/popular/paths",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-top-referrers": {
    "accessPath": [
      "repos",
      "getTopReferrers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/traffic/popular/referrers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/get-views": {
    "accessPath": [
      "repos",
      "getViews"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/traffic/views",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per"
    ]
  },
  "repos/transfer": {
    "accessPath": [
      "repos",
      "transfer"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "new_owner",
      "new_name",
      "team_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{owner}/{repo}/transfer",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/check-vulnerability-alerts": {
    "accessPath": [
      "repos",
      "checkVulnerabilityAlerts"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/vulnerability-alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/enable-vulnerability-alerts": {
    "accessPath": [
      "repos",
      "enableVulnerabilityAlerts"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repos/{owner}/{repo}/vulnerability-alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/disable-vulnerability-alerts": {
    "accessPath": [
      "repos",
      "disableVulnerabilityAlerts"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repos/{owner}/{repo}/vulnerability-alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/download-zipball-archive": {
    "accessPath": [
      "repos",
      "downloadZipballArchive"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repos/{owner}/{repo}/zipball/{ref}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo",
      "ref"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/create-using-template": {
    "accessPath": [
      "repos",
      "createUsingTemplate"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "owner",
      "name",
      "description",
      "include_all_branches",
      "private"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repos/{template_owner}/{template_repo}/generate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "template_owner",
      "template_repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-public": {
    "accessPath": [
      "repos",
      "listPublic"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since"
    ]
  },
  "issues/add-issue-field-values": {
    "accessPath": [
      "issues",
      "addIssueFieldValues"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "issue_field_values"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/repositories/{repository_id}/issues/{issue_number}/issue-field-values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "repository_id",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/set-issue-field-values": {
    "accessPath": [
      "issues",
      "setIssueFieldValues"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "issue_field_values"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/repositories/{repository_id}/issues/{issue_number}/issue-field-values",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "repository_id",
      "issue_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/delete-issue-field-value": {
    "accessPath": [
      "issues",
      "deleteIssueFieldValue"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/repositories/{repository_id}/issues/{issue_number}/issue-field-values/{issue_field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "repository_id",
      "issue_number",
      "issue_field_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "search/code": {
    "accessPath": [
      "search",
      "code"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/code",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "sort",
      "order",
      "per_page",
      "page"
    ]
  },
  "search/commits": {
    "accessPath": [
      "search",
      "commits"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/commits",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "sort",
      "order",
      "per_page",
      "page"
    ]
  },
  "search/issues-and-pull-requests": {
    "accessPath": [
      "search",
      "issuesAndPullRequests"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "sort",
      "order",
      "per_page",
      "page",
      "advanced_search",
      "search_type"
    ]
  },
  "search/labels": {
    "accessPath": [
      "search",
      "labels"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/labels",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "repository_id",
      "q",
      "sort",
      "order",
      "per_page",
      "page"
    ]
  },
  "search/repos": {
    "accessPath": [
      "search",
      "repos"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "sort",
      "order",
      "per_page",
      "page"
    ]
  },
  "search/topics": {
    "accessPath": [
      "search",
      "topics"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/topics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "per_page",
      "page"
    ]
  },
  "search/users": {
    "accessPath": [
      "search",
      "users"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/search/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "sort",
      "order",
      "per_page",
      "page"
    ]
  },
  "teams/get-legacy": {
    "accessPath": [
      "teams",
      "getLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/update-legacy": {
    "accessPath": [
      "teams",
      "updateLegacy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "privacy",
      "notification_setting",
      "permission",
      "parent_team_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/delete-legacy": {
    "accessPath": [
      "teams",
      "deleteLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/teams/{team_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-pending-invitations-legacy": {
    "accessPath": [
      "teams",
      "listPendingInvitationsLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "teams/list-members-legacy": {
    "accessPath": [
      "teams",
      "listMembersLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "role",
      "per_page",
      "page"
    ]
  },
  "teams/get-member-legacy": {
    "accessPath": [
      "teams",
      "getMemberLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/add-member-legacy": {
    "accessPath": [
      "teams",
      "addMemberLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/teams/{team_id}/members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/remove-member-legacy": {
    "accessPath": [
      "teams",
      "removeMemberLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/teams/{team_id}/members/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/get-membership-for-user-legacy": {
    "accessPath": [
      "teams",
      "getMembershipForUserLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/add-or-update-membership-for-user-legacy": {
    "accessPath": [
      "teams",
      "addOrUpdateMembershipForUserLegacy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/teams/{team_id}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/remove-membership-for-user-legacy": {
    "accessPath": [
      "teams",
      "removeMembershipForUserLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/teams/{team_id}/memberships/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-repos-legacy": {
    "accessPath": [
      "teams",
      "listReposLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "teams/check-permissions-for-repo-legacy": {
    "accessPath": [
      "teams",
      "checkPermissionsForRepoLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/add-or-update-repo-permissions-legacy": {
    "accessPath": [
      "teams",
      "addOrUpdateRepoPermissionsLegacy"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "permission"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/teams/{team_id}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/remove-repo-legacy": {
    "accessPath": [
      "teams",
      "removeRepoLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/teams/{team_id}/repos/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id",
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "teams/list-child-legacy": {
    "accessPath": [
      "teams",
      "listChildLegacy"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/teams/{team_id}/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "team_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/get-authenticated": {
    "accessPath": [
      "users",
      "getAuthenticated"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/update-authenticated": {
    "accessPath": [
      "users",
      "updateAuthenticated"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "email",
      "blog",
      "twitter_username",
      "company",
      "location",
      "hireable",
      "bio"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/user",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-blocked-by-authenticated-user": {
    "accessPath": [
      "users",
      "listBlockedByAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/blocks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/check-blocked": {
    "accessPath": [
      "users",
      "checkBlocked"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/block": {
    "accessPath": [
      "users",
      "block"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/unblock": {
    "accessPath": [
      "users",
      "unblock"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/blocks/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "repository_id"
    ]
  },
  "codespaces/create-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "createForAuthenticatedUser"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/codespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-secrets-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "listSecretsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/secrets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "codespaces/get-public-key-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "getPublicKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/secrets/public-key",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "getSecretForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/create-or-update-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "createOrUpdateSecretForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "encrypted_value",
      "key_id",
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/delete-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "deleteSecretForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/list-repositories-for-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "listRepositoriesForSecretForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/set-repositories-for-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "setRepositoriesForSecretForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "selected_repository_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/add-repository-for-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "addRepositoryForSecretForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/remove-repository-for-secret-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "removeRepositoryForSecretForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "secret_name",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "getForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/{codespace_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/update-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "updateForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "machine",
      "display_name",
      "recent_folders"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/user/codespaces/{codespace_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/delete-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "deleteForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/codespaces/{codespace_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/export-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "exportForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/codespaces/{codespace_name}/exports",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/get-export-details-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "getExportDetailsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/{codespace_name}/exports/{export_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name",
      "export_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/codespace-machines-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "codespaceMachinesForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/codespaces/{codespace_name}/machines",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/publish-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "publishForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "private"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/codespaces/{codespace_name}/publish",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/start-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "startForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/codespaces/{codespace_name}/start",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "codespaces/stop-for-authenticated-user": {
    "accessPath": [
      "codespaces",
      "stopForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/codespaces/{codespace_name}/stop",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "codespace_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/list-docker-migration-conflicting-packages-for-authenticated-user": {
    "accessPath": [
      "packages",
      "listDockerMigrationConflictingPackagesForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/docker/conflicts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/set-primary-email-visibility-for-authenticated-user": {
    "accessPath": [
      "users",
      "setPrimaryEmailVisibilityForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "visibility"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/user/email/visibility",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-emails-for-authenticated-user": {
    "accessPath": [
      "users",
      "listEmailsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/emails",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/add-email-for-authenticated-user": {
    "accessPath": [
      "users",
      "addEmailForAuthenticatedUser"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/emails",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-email-for-authenticated-user": {
    "accessPath": [
      "users",
      "deleteEmailForAuthenticatedUser"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/emails",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-followers-for-authenticated-user": {
    "accessPath": [
      "users",
      "listFollowersForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/followers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/list-followed-by-authenticated-user": {
    "accessPath": [
      "users",
      "listFollowedByAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/following",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/check-person-is-followed-by-authenticated": {
    "accessPath": [
      "users",
      "checkPersonIsFollowedByAuthenticated"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/following/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/follow": {
    "accessPath": [
      "users",
      "follow"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/following/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/unfollow": {
    "accessPath": [
      "users",
      "unfollow"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/following/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-gpg-keys-for-authenticated-user": {
    "accessPath": [
      "users",
      "listGpgKeysForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/gpg_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/create-gpg-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "createGpgKeyForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "armored_public_key"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/gpg_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/get-gpg-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "getGpgKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/gpg_keys/{gpg_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gpg_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-gpg-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "deleteGpgKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/gpg_keys/{gpg_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "gpg_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-installations-for-authenticated-user": {
    "accessPath": [
      "apps",
      "listInstallationsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/installations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/list-installation-repos-for-authenticated-user": {
    "accessPath": [
      "apps",
      "listInstallationReposForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/installations/{installation_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/add-repo-to-installation-for-authenticated-user": {
    "accessPath": [
      "apps",
      "addRepoToInstallationForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/installations/{installation_id}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/remove-repo-from-installation-for-authenticated-user": {
    "accessPath": [
      "apps",
      "removeRepoFromInstallationForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/installations/{installation_id}/repositories/{repository_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "installation_id",
      "repository_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/get-restrictions-for-authenticated-user": {
    "accessPath": [
      "interactions",
      "getRestrictionsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/set-restrictions-for-authenticated-user": {
    "accessPath": [
      "interactions",
      "setRestrictionsForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "limit",
      "expiry"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "interactions/remove-restrictions-for-authenticated-user": {
    "accessPath": [
      "interactions",
      "removeRestrictionsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/interaction-limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "issues/list-for-authenticated-user": {
    "accessPath": [
      "issues",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/issues",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "filter",
      "state",
      "labels",
      "sort",
      "direction",
      "since",
      "per_page",
      "page"
    ]
  },
  "users/list-public-ssh-keys-for-authenticated-user": {
    "accessPath": [
      "users",
      "listPublicSshKeysForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/create-public-ssh-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "createPublicSshKeyForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "key"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/get-public-ssh-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "getPublicSshKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-public-ssh-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "deletePublicSshKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "apps/list-subscriptions-for-authenticated-user": {
    "accessPath": [
      "apps",
      "listSubscriptionsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/marketplace_purchases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "apps/list-subscriptions-for-authenticated-user-stubbed": {
    "accessPath": [
      "apps",
      "listSubscriptionsForAuthenticatedUserStubbed"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/marketplace_purchases/stubbed",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-memberships-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "listMembershipsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/memberships/orgs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "state",
      "per_page",
      "page"
    ]
  },
  "orgs/get-membership-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "getMembershipForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/memberships/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "orgs/update-membership-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "updateMembershipForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "state"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/user/memberships/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/list-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/migrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "migrations/start-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "startForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "lock_repositories",
      "exclude_metadata",
      "exclude_git_data",
      "exclude_attachments",
      "exclude_releases",
      "exclude_owner_projects",
      "org_metadata_only",
      "exclude",
      "repositories"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/migrations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/get-status-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "getStatusForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/migrations/{migration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "exclude"
    ]
  },
  "migrations/get-archive-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "getArchiveForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/migrations/{migration_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/delete-archive-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "deleteArchiveForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/migrations/{migration_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/unlock-repo-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "unlockRepoForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/migrations/{migration_id}/repos/{repo_name}/lock",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "migration_id",
      "repo_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "migrations/list-repos-for-authenticated-user": {
    "accessPath": [
      "migrations",
      "listReposForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/migrations/{migration_id}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-for-authenticated-user": {
    "accessPath": [
      "orgs",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/orgs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "packages/list-packages-for-authenticated-user": {
    "accessPath": [
      "packages",
      "listPackagesForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/packages",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "package_type",
      "visibility",
      "page",
      "per_page"
    ]
  },
  "packages/get-package-for-authenticated-user": {
    "accessPath": [
      "packages",
      "getPackageForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-for-authenticated-user": {
    "accessPath": [
      "packages",
      "deletePackageForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-for-authenticated-user": {
    "accessPath": [
      "packages",
      "restorePackageForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/packages/{package_type}/{package_name}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "token"
    ]
  },
  "packages/get-all-package-versions-for-package-owned-by-authenticated-user": {
    "accessPath": [
      "packages",
      "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/packages/{package_type}/{package_name}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "state"
    ]
  },
  "packages/get-package-version-for-authenticated-user": {
    "accessPath": [
      "packages",
      "getPackageVersionForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-version-for-authenticated-user": {
    "accessPath": [
      "packages",
      "deletePackageVersionForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-version-for-authenticated-user": {
    "accessPath": [
      "packages",
      "restorePackageVersionForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-public-emails-for-authenticated-user": {
    "accessPath": [
      "users",
      "listPublicEmailsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/public_emails",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/list-for-authenticated-user": {
    "accessPath": [
      "repos",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "visibility",
      "affiliation",
      "type",
      "sort",
      "direction",
      "per_page",
      "page",
      "since",
      "before"
    ]
  },
  "repos/create-for-authenticated-user": {
    "accessPath": [
      "repos",
      "createForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "homepage",
      "private",
      "has_issues",
      "has_projects",
      "has_wiki",
      "has_discussions",
      "team_id",
      "auto_init",
      "gitignore_template",
      "license_template",
      "allow_squash_merge",
      "allow_merge_commit",
      "allow_rebase_merge",
      "allow_auto_merge",
      "delete_branch_on_merge",
      "squash_merge_commit_title",
      "squash_merge_commit_message",
      "merge_commit_title",
      "merge_commit_message",
      "has_downloads",
      "is_template"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/list-invitations-for-authenticated-user": {
    "accessPath": [
      "repos",
      "listInvitationsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/repository_invitations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/accept-invitation-for-authenticated-user": {
    "accessPath": [
      "repos",
      "acceptInvitationForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/user/repository_invitations/{invitation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "repos/decline-invitation-for-authenticated-user": {
    "accessPath": [
      "repos",
      "declineInvitationForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/repository_invitations/{invitation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invitation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-social-accounts-for-authenticated-user": {
    "accessPath": [
      "users",
      "listSocialAccountsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/social_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/add-social-account-for-authenticated-user": {
    "accessPath": [
      "users",
      "addSocialAccountForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "account_urls"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/social_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-social-account-for-authenticated-user": {
    "accessPath": [
      "users",
      "deleteSocialAccountForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "account_urls"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/social_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-ssh-signing-keys-for-authenticated-user": {
    "accessPath": [
      "users",
      "listSshSigningKeysForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/ssh_signing_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/create-ssh-signing-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "createSshSigningKeyForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "key"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/ssh_signing_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/get-ssh-signing-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "getSshSigningKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/ssh_signing_keys/{ssh_signing_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ssh_signing_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-ssh-signing-key-for-authenticated-user": {
    "accessPath": [
      "users",
      "deleteSshSigningKeyForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/ssh_signing_keys/{ssh_signing_key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ssh_signing_key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-repos-starred-by-authenticated-user": {
    "accessPath": [
      "activity",
      "listReposStarredByAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/starred",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "activity/check-repo-is-starred-by-authenticated-user": {
    "accessPath": [
      "activity",
      "checkRepoIsStarredByAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/starred/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/star-repo-for-authenticated-user": {
    "accessPath": [
      "activity",
      "starRepoForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PUT",
    "pathTemplate": "/user/starred/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/unstar-repo-for-authenticated-user": {
    "accessPath": [
      "activity",
      "unstarRepoForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/user/starred/{owner}/{repo}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "owner",
      "repo"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-watched-repos-for-authenticated-user": {
    "accessPath": [
      "activity",
      "listWatchedReposForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/subscriptions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "teams/list-for-authenticated-user": {
    "accessPath": [
      "teams",
      "listForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/get-by-id": {
    "accessPath": [
      "users",
      "getById"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/user/{account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/create-draft-item-for-authenticated-user": {
    "accessPath": [
      "projects",
      "createDraftItemForAuthenticatedUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "title",
      "body"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/user/{user_id}/projectsV2/{project_number}/drafts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list": {
    "accessPath": [
      "users",
      "list"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page"
    ]
  },
  "projects/create-view-for-user": {
    "accessPath": [
      "projects",
      "createViewForUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "layout",
      "filter",
      "visible_fields"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{user_id}/projectsV2/{project_number}/views",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/get-by-username": {
    "accessPath": [
      "users",
      "getByUsername"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-attestations-bulk": {
    "accessPath": [
      "users",
      "listAttestationsBulk"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "subject_digests",
      "predicate_type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/attestations/bulk-list",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after"
    ]
  },
  "users/delete-attestations-bulk": {
    "accessPath": [
      "users",
      "deleteAttestationsBulk"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/attestations/delete-request",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-attestations-by-subject-digest": {
    "accessPath": [
      "users",
      "deleteAttestationsBySubjectDigest"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/users/{username}/attestations/digest/{subject_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/delete-attestations-by-id": {
    "accessPath": [
      "users",
      "deleteAttestationsById"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/users/{username}/attestations/{attestation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "attestation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-attestations": {
    "accessPath": [
      "users",
      "listAttestations"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/attestations/{subject_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "subject_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after",
      "predicate_type"
    ]
  },
  "packages/list-docker-migration-conflicting-packages-for-user": {
    "accessPath": [
      "packages",
      "listDockerMigrationConflictingPackagesForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/docker/conflicts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "activity/list-events-for-authenticated-user": {
    "accessPath": [
      "activity",
      "listEventsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-org-events-for-authenticated-user": {
    "accessPath": [
      "activity",
      "listOrgEventsForAuthenticatedUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/events/orgs/{org}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "org"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-public-events-for-user": {
    "accessPath": [
      "activity",
      "listPublicEventsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/events/public",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/list-followers-for-user": {
    "accessPath": [
      "users",
      "listFollowersForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/followers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/list-following-for-user": {
    "accessPath": [
      "users",
      "listFollowingForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/following",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/check-following-for-user": {
    "accessPath": [
      "users",
      "checkFollowingForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/following/{target_user}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "target_user"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "gists/list-for-user": {
    "accessPath": [
      "gists",
      "listForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/gists",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since",
      "per_page",
      "page"
    ]
  },
  "users/list-gpg-keys-for-user": {
    "accessPath": [
      "users",
      "listGpgKeysForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/gpg_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/get-context-for-user": {
    "accessPath": [
      "users",
      "getContextForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/hovercard",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "subject_type",
      "subject_id"
    ]
  },
  "apps/get-user-installation": {
    "accessPath": [
      "apps",
      "getUserInstallation"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/installation",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "users/list-public-keys-for-user": {
    "accessPath": [
      "users",
      "listPublicKeysForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "orgs/list-for-user": {
    "accessPath": [
      "orgs",
      "listForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/orgs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "packages/list-packages-for-user": {
    "accessPath": [
      "packages",
      "listPackagesForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/packages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "package_type",
      "visibility",
      "page",
      "per_page"
    ]
  },
  "packages/get-package-for-user": {
    "accessPath": [
      "packages",
      "getPackageForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-for-user": {
    "accessPath": [
      "packages",
      "deletePackageForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-for-user": {
    "accessPath": [
      "packages",
      "restorePackageForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "token"
    ]
  },
  "packages/get-all-package-versions-for-package-owned-by-user": {
    "accessPath": [
      "packages",
      "getAllPackageVersionsForPackageOwnedByUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/get-package-version-for-user": {
    "accessPath": [
      "packages",
      "getPackageVersionForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "package_version_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/delete-package-version-for-user": {
    "accessPath": [
      "packages",
      "deletePackageVersionForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "packages/restore-package-version-for-user": {
    "accessPath": [
      "packages",
      "restorePackageVersionForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "package_type",
      "package_name",
      "username",
      "package_version_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-for-user": {
    "accessPath": [
      "projects",
      "listForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "q",
      "before",
      "after",
      "per_page"
    ]
  },
  "projects/get-for-user": {
    "accessPath": [
      "projects",
      "getForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-fields-for-user": {
    "accessPath": [
      "projects",
      "listFieldsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "before",
      "after"
    ]
  },
  "projects/add-field-for-user": {
    "accessPath": [
      "projects",
      "addFieldForUser"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/fields",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/get-field-for-user": {
    "accessPath": [
      "projects",
      "getFieldForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/fields/{field_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "field_id",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-items-for-user": {
    "accessPath": [
      "projects",
      "listItemsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "before",
      "after",
      "per_page",
      "q",
      "fields"
    ]
  },
  "projects/add-item-for-user": {
    "accessPath": [
      "projects",
      "addItemForUser"
    ],
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username",
      "project_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/get-user-item": {
    "accessPath": [
      "projects",
      "getUserItem"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "fields"
    ]
  },
  "projects/update-item-for-user": {
    "accessPath": [
      "projects",
      "updateItemForUser"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "fields"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "PATCH",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/delete-item-for-user": {
    "accessPath": [
      "projects",
      "deleteItemForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "DELETE",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/items/{item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username",
      "item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "projects/list-view-items-for-user": {
    "accessPath": [
      "projects",
      "listViewItemsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/projectsV2/{project_number}/views/{view_number}/items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_number",
      "username",
      "view_number"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "fields",
      "before",
      "after",
      "per_page"
    ]
  },
  "activity/list-received-events-for-user": {
    "accessPath": [
      "activity",
      "listReceivedEventsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/received_events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-received-public-events-for-user": {
    "accessPath": [
      "activity",
      "listReceivedPublicEventsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/received_events/public",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "repos/list-for-user": {
    "accessPath": [
      "repos",
      "listForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/repos",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "billing/get-github-billing-premium-request-usage-report-user": {
    "accessPath": [
      "billing",
      "getGithubBillingPremiumRequestUsageReportUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/settings/billing/premium_request/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day",
      "model",
      "product"
    ]
  },
  "billing/get-github-billing-usage-report-user": {
    "accessPath": [
      "billing",
      "getGithubBillingUsageReportUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/settings/billing/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day"
    ]
  },
  "billing/get-github-billing-usage-summary-report-user": {
    "accessPath": [
      "billing",
      "getGithubBillingUsageSummaryReportUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/settings/billing/usage/summary",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "year",
      "month",
      "day",
      "repository",
      "product",
      "sku"
    ]
  },
  "users/list-social-accounts-for-user": {
    "accessPath": [
      "users",
      "listSocialAccountsForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/social_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "users/list-ssh-signing-keys-for-user": {
    "accessPath": [
      "users",
      "listSshSigningKeysForUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/ssh_signing_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "activity/list-repos-starred-by-user": {
    "accessPath": [
      "activity",
      "listReposStarredByUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/starred",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "sort",
      "direction",
      "per_page",
      "page"
    ]
  },
  "activity/list-repos-watched-by-user": {
    "accessPath": [
      "activity",
      "listReposWatchedByUser"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/users/{username}/subscriptions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ]
  },
  "meta/get-all-versions": {
    "accessPath": [
      "meta",
      "getAllVersions"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "meta/get-zen": {
    "accessPath": [
      "meta",
      "getZen"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/zen",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  }
} satisfies ToolRuntimeMetadataMap;
