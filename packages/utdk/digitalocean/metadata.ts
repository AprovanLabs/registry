import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "oneClicks_list": {
    "accessPath": [
      "oneClicksList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/1-clicks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type"
    ],
    "description": "List 1-Click Applications",
    "parameterDescriptions": {
      "type": "Restrict results to a certain type of 1-Click."
    }
  },
  "oneClicks_install_kubernetes": {
    "accessPath": [
      "oneClicksInstallKubernetes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "addon_slugs",
      "cluster_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/1-clicks/kubernetes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Install Kubernetes 1-Click Applications"
  },
  "account_get": {
    "accessPath": [
      "accountGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/account",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get User Information"
  },
  "sshKeys_list": {
    "accessPath": [
      "sshKeysList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/account/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All SSH Keys",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "sshKeys_create": {
    "accessPath": [
      "sshKeysCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "fingerprint",
      "public_key",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/account/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New SSH Key"
  },
  "sshKeys_get": {
    "accessPath": [
      "sshKeysGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/account/keys/{ssh_key_identifier}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ssh_key_identifier"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing SSH Key",
    "parameterDescriptions": {
      "ssh_key_identifier": "Either the ID or the fingerprint of an existing SSH key."
    }
  },
  "sshKeys_update": {
    "accessPath": [
      "sshKeysUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/account/keys/{ssh_key_identifier}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ssh_key_identifier"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an SSH Key's Name",
    "parameterDescriptions": {
      "ssh_key_identifier": "Either the ID or the fingerprint of an existing SSH key."
    }
  },
  "sshKeys_delete": {
    "accessPath": [
      "sshKeysDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/account/keys/{ssh_key_identifier}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "ssh_key_identifier"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an SSH Key",
    "parameterDescriptions": {
      "ssh_key_identifier": "Either the ID or the fingerprint of an existing SSH key."
    }
  },
  "actions_list": {
    "accessPath": [
      "actionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Actions",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "actions_get": {
    "accessPath": [
      "actionsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Action",
    "parameterDescriptions": {
      "action_id": "A unique numeric ID that can be used to identify and reference an action."
    }
  },
  "addons_get_app": {
    "accessPath": [
      "addonsGetApp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/add-ons/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Available Add-On Applications"
  },
  "addons_get_app_metadata": {
    "accessPath": [
      "addonsGetAppMetadata"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/add-ons/apps/{app_slug}/metadata",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Metadata for an Add-On Application",
    "parameterDescriptions": {
      "app_slug": "The slug identifier for the application whose metadata is being requested."
    }
  },
  "addons_list": {
    "accessPath": [
      "addonsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/add-ons/saas",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all Add-On Resources"
  },
  "addons_create": {
    "accessPath": [
      "addonsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "app_slug",
      "plan_slug",
      "name",
      "metadata",
      "linked_droplet_id",
      "fleet_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/add-ons/saas",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create/Provision a New Add-on Resource"
  },
  "addons_get": {
    "accessPath": [
      "addonsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/add-ons/saas/{resource_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get details on an Add-On Resource",
    "parameterDescriptions": {
      "resource_uuid": "The UUID of the add-on resource to retrieve."
    }
  },
  "addons_delete": {
    "accessPath": [
      "addonsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/add-ons/saas/{resource_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete/Deprovision an Add-on Resource",
    "parameterDescriptions": {
      "resource_uuid": "A unique identifier for the add-on resource."
    }
  },
  "addons_patch": {
    "accessPath": [
      "addonsPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/add-ons/saas/{resource_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the name for an Add-On Resource",
    "parameterDescriptions": {
      "resource_uuid": "The UUID of the add-on resource to rename."
    }
  },
  "addons_patch_plan": {
    "accessPath": [
      "addonsPatchPlan"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "plan_slug"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/add-ons/saas/{resource_uuid}/plan",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "resource_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the plan for an Add-On Resource",
    "parameterDescriptions": {
      "resource_uuid": "The UUID of the add-on resource to update."
    }
  },
  "apps_list": {
    "accessPath": [
      "appsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "with_projects"
    ],
    "description": "List All Apps",
    "parameterDescriptions": {
      "page": "Which 'page' of paginated results to return.",
      "per_page": "Number of items returned per page",
      "with_projects": "Whether the project_id of listed apps should be fetched and included."
    }
  },
  "apps_create": {
    "accessPath": [
      "appsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "spec",
      "project_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [
      "Accept",
      "Content-Type"
    ],
    "method": "POST",
    "routeTemplate": "/v2/apps",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New App",
    "parameterDescriptions": {
      "Accept": "The content-type that should be used by the response. By default, the response will be `application/json`. `application/yaml` is also supported.",
      "Content-Type": "The content-type used for the request. By default, the requests are assumed to use `application/json`. `application/yaml` is also supported."
    }
  },
  "apps_delete": {
    "accessPath": [
      "appsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/apps/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an App",
    "parameterDescriptions": {
      "id": "The ID of the app"
    }
  },
  "apps_get": {
    "accessPath": [
      "appsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name"
    ],
    "description": "Retrieve an Existing App",
    "parameterDescriptions": {
      "id": "The ID of the app",
      "name": "The name of the app to retrieve."
    }
  },
  "apps_update": {
    "accessPath": [
      "appsUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "spec",
      "update_all_source_versions"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/apps/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an App",
    "parameterDescriptions": {
      "id": "The ID of the app"
    }
  },
  "apps_restart": {
    "accessPath": [
      "appsRestart"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "components"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/restart",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Restart an App",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_get_logs_active_deployment": {
    "accessPath": [
      "appsGetLogsActiveDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/components/{component_name}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "component_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "follow",
      "type",
      "pod_connection_timeout"
    ],
    "description": "Retrieve Active Deployment Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "component_name": "An optional component name. If set, logs will be limited to this component only.",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime\n- AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id)",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`."
    }
  },
  "apps_get_exec_active_deployment": {
    "accessPath": [
      "appsGetExecActiveDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/components/{component_name}/exec",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "component_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "instance_name"
    ],
    "description": "Retrieve Exec URL",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "component_name": "An optional component name. If set, logs will be limited to this component only.",
      "instance_name": "The name of the actively running ephemeral compute instance"
    }
  },
  "apps_get_instances": {
    "accessPath": [
      "appsGetInstances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve App Instances",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_list_deployments": {
    "accessPath": [
      "appsListDeployments"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "deployment_types"
    ],
    "description": "List App Deployments",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "page": "Which 'page' of paginated results to return.",
      "per_page": "Number of items returned per page",
      "deployment_types": "Optional. Filter deployments by deployment_type\n  - MANUAL: manual deployment\n  - DEPLOY_ON_PUSH: deployment triggered by a push to the app's repository\n  - MAINTENANCE: deployment for maintenance purposes\n  - MANUAL_ROLLBACK: manual revert to a previous deployment\n  - AUTO_ROLLBACK: automatic revert to a previous deployment\n  - UPDATE_DATABASE_TRUSTED_SOURCES: update database trusted sources\n  - AUTOSCALED: deployment that has been autoscaled"
    }
  },
  "apps_create_deployment": {
    "accessPath": [
      "appsCreateDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "force_build"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/deployments",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an App Deployment",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_get_deployment": {
    "accessPath": [
      "appsGetDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/deployments/{deployment_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an App Deployment",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "deployment_id": "The deployment ID"
    }
  },
  "apps_cancel_deployment": {
    "accessPath": [
      "appsCancelDeployment"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/deployments/{deployment_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a Deployment",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "deployment_id": "The deployment ID"
    }
  },
  "apps_get_logs": {
    "accessPath": [
      "appsGetLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "deployment_id",
      "component_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "follow",
      "type",
      "pod_connection_timeout"
    ],
    "description": "Retrieve Deployment Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "deployment_id": "The deployment ID",
      "component_name": "An optional component name. If set, logs will be limited to this component only.",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime\n- AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id)",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`."
    }
  },
  "apps_get_logs_aggregate": {
    "accessPath": [
      "appsGetLogsAggregate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/deployments/{deployment_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "deployment_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "follow",
      "type",
      "pod_connection_timeout"
    ],
    "description": "Retrieve Aggregate Deployment Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "deployment_id": "The deployment ID",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime\n- AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id)",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`."
    }
  },
  "apps_get_exec": {
    "accessPath": [
      "appsGetExec"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/exec",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "deployment_id",
      "component_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "instance_name"
    ],
    "description": "Retrieve Exec URL for Deployment",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "deployment_id": "The deployment ID",
      "component_name": "An optional component name. If set, logs will be limited to this component only.",
      "instance_name": "The name of the actively running ephemeral compute instance"
    }
  },
  "apps_get_logs_active_deployment_aggregate": {
    "accessPath": [
      "appsGetLogsActiveDeploymentAggregate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "follow",
      "type",
      "pod_connection_timeout"
    ],
    "description": "Retrieve Active Deployment Aggregate Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime\n- AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id)",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`."
    }
  },
  "apps_list_job_invocations": {
    "accessPath": [
      "appsListJobInvocations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/job-invocations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "job_names",
      "deployment_id",
      "page",
      "per_page"
    ],
    "description": "List Job Invocations",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "job_names": "The job names to list job invocations for.",
      "deployment_id": "The deployment ID",
      "page": "Which 'page' of paginated results to return.",
      "per_page": "Number of items returned per page"
    }
  },
  "apps_get_job_invocation": {
    "accessPath": [
      "appsGetJobInvocation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/job-invocations/{job_invocation_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "job_invocation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "job_name"
    ],
    "description": "Get Job Invocations",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "job_invocation_id": "The ID of the job invocation to retrieve.",
      "job_name": "The job name to list job invocations for."
    }
  },
  "apps_cancel_job_invocation": {
    "accessPath": [
      "appsCancelJobInvocation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/job-invocations/{job_invocation_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "job_invocation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "job_name"
    ],
    "description": "Cancel Job Invocation",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "job_invocation_id": "The ID of the job invocation to retrieve.",
      "job_name": "The job name to list job invocations for."
    }
  },
  "apps_get_job_invocation_logs": {
    "accessPath": [
      "appsGetJobInvocationLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/jobs/{job_name}/invocations/{job_invocation_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "job_name",
      "job_invocation_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "deployment_id",
      "follow",
      "type",
      "pod_connection_timeout",
      "tail_lines"
    ],
    "description": "Retrieve Job Invocation Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "job_name": "The job name to list job invocations for.",
      "job_invocation_id": "The ID of the job invocation to retrieve.",
      "deployment_id": "The deployment ID",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.",
      "tail_lines": "The number of lines from the end of the logs to retrieve."
    }
  },
  "apps_list_events": {
    "accessPath": [
      "appsListEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "event_types"
    ],
    "description": "List App Events",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "page": "Which 'page' of paginated results to return.",
      "per_page": "Number of items returned per page",
      "event_types": "Filter events by event type."
    }
  },
  "apps_get_event": {
    "accessPath": [
      "appsGetEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/events/{event_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "event_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an Event",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "event_id": "The event ID"
    }
  },
  "apps_cancel_event": {
    "accessPath": [
      "appsCancelEvent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/events/{event_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "event_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel an Event",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "event_id": "The event ID"
    }
  },
  "apps_get_event_logs": {
    "accessPath": [
      "appsGetEventLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/events/{event_id}/logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "event_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "follow",
      "type",
      "pod_connection_timeout"
    ],
    "description": "Retrieve Event Logs",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "event_id": "The event ID",
      "follow": "Whether the logs should follow live updates.",
      "type": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime\n- AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id)",
      "pod_connection_timeout": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`."
    }
  },
  "apps_list_instanceSizes": {
    "accessPath": [
      "appsListInstanceSizes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/tiers/instance_sizes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Instance Sizes"
  },
  "apps_get_instanceSize": {
    "accessPath": [
      "appsGetInstanceSize"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/tiers/instance_sizes/{slug}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "slug"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Instance Size",
    "parameterDescriptions": {
      "slug": "The slug of the instance size"
    }
  },
  "apps_list_regions": {
    "accessPath": [
      "appsListRegions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/regions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List App Regions"
  },
  "apps_validate_appSpec": {
    "accessPath": [
      "appsValidateAppSpec"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "spec",
      "app_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/propose",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Propose an App Spec"
  },
  "apps_list_alerts": {
    "accessPath": [
      "appsListAlerts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all app alerts",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_assign_alertDestinations": {
    "accessPath": [
      "appsAssignAlertDestinations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "emails",
      "slack_webhooks"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/alerts/{alert_id}/destinations",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id",
      "alert_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update destinations for alerts",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "alert_id": "The alert ID"
    }
  },
  "apps_create_rollback": {
    "accessPath": [
      "appsCreateRollback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "deployment_id",
      "skip_pin"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/rollback",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Rollback App",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_validate_rollback": {
    "accessPath": [
      "appsValidateRollback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "deployment_id",
      "skip_pin"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/rollback/validate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate App Rollback",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_commit_rollback": {
    "accessPath": [
      "appsCommitRollback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/rollback/commit",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Commit App Rollback",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_revert_rollback": {
    "accessPath": [
      "appsRevertRollback"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/{app_id}/rollback/revert",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revert App Rollback",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "apps_get_metrics_bandwidth_daily": {
    "accessPath": [
      "appsGetMetricsBandwidthDaily"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/metrics/bandwidth_daily",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "date"
    ],
    "description": "Retrieve App Daily Bandwidth Metrics",
    "parameterDescriptions": {
      "app_id": "The app ID",
      "date": "Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday."
    }
  },
  "apps_list_metrics_bandwidth_daily": {
    "accessPath": [
      "appsListMetricsBandwidthDaily"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "app_ids",
      "date"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/apps/metrics/bandwidth_daily",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Multiple Apps' Daily Bandwidth Metrics"
  },
  "apps_get_health": {
    "accessPath": [
      "appsGetHealth"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/apps/{app_id}/health",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "app_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve App Health",
    "parameterDescriptions": {
      "app_id": "The app ID"
    }
  },
  "cdn_list_endpoints": {
    "accessPath": [
      "cdnListEndpoints"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/cdn/endpoints",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All CDN Endpoints",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "cdn_create_endpoint": {
    "accessPath": [
      "cdnCreateEndpoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "origin",
      "endpoint",
      "ttl",
      "certificate_id",
      "custom_domain",
      "created_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/cdn/endpoints",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New CDN Endpoint"
  },
  "cdn_get_endpoint": {
    "accessPath": [
      "cdnGetEndpoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/cdn/endpoints/{cdn_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cdn_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing CDN Endpoint",
    "parameterDescriptions": {
      "cdn_id": "A unique identifier for a CDN endpoint."
    }
  },
  "cdn_update_endpoints": {
    "accessPath": [
      "cdnUpdateEndpoints"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ttl",
      "certificate_id",
      "custom_domain"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/cdn/endpoints/{cdn_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cdn_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a CDN Endpoint",
    "parameterDescriptions": {
      "cdn_id": "A unique identifier for a CDN endpoint."
    }
  },
  "cdn_delete_endpoint": {
    "accessPath": [
      "cdnDeleteEndpoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/cdn/endpoints/{cdn_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cdn_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a CDN Endpoint",
    "parameterDescriptions": {
      "cdn_id": "A unique identifier for a CDN endpoint."
    }
  },
  "cdn_purge_cache": {
    "accessPath": [
      "cdnPurgeCache"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "files"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/cdn/endpoints/{cdn_id}/cache",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cdn_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Purge the Cache for an Existing CDN Endpoint",
    "parameterDescriptions": {
      "cdn_id": "A unique identifier for a CDN endpoint."
    }
  },
  "certificates_list": {
    "accessPath": [
      "certificatesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/certificates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "name"
    ],
    "description": "List All Certificates",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "name": "Name of expected certificate"
    }
  },
  "certificates_create": {
    "accessPath": [
      "certificatesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/certificates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Certificate"
  },
  "certificates_get": {
    "accessPath": [
      "certificatesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/certificates/{certificate_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "certificate_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Certificate",
    "parameterDescriptions": {
      "certificate_id": "A unique identifier for a certificate."
    }
  },
  "certificates_delete": {
    "accessPath": [
      "certificatesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/certificates/{certificate_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "certificate_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Certificate",
    "parameterDescriptions": {
      "certificate_id": "A unique identifier for a certificate."
    }
  },
  "balance_get": {
    "accessPath": [
      "balanceGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/balance",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Customer Balance"
  },
  "billingHistory_list": {
    "accessPath": [
      "billingHistoryList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/billing_history",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Billing History"
  },
  "invoices_list": {
    "accessPath": [
      "invoicesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/invoices",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Invoices",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "invoices_get_byUUID": {
    "accessPath": [
      "invoicesGetByUuid"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/invoices/{invoice_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invoice_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "Retrieve an Invoice by UUID",
    "parameterDescriptions": {
      "invoice_uuid": "UUID of the invoice",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "invoices_get_csvByUUID": {
    "accessPath": [
      "invoicesGetCsvByUuid"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/invoices/{invoice_uuid}/csv",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invoice_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Invoice CSV by UUID",
    "parameterDescriptions": {
      "invoice_uuid": "UUID of the invoice"
    }
  },
  "invoices_get_pdfByUUID": {
    "accessPath": [
      "invoicesGetPdfByUuid"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/invoices/{invoice_uuid}/pdf",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invoice_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Invoice PDF by UUID",
    "parameterDescriptions": {
      "invoice_uuid": "UUID of the invoice"
    }
  },
  "invoices_get_summaryByUUID": {
    "accessPath": [
      "invoicesGetSummaryByUuid"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/customers/my/invoices/{invoice_uuid}/summary",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invoice_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Invoice Summary by UUID",
    "parameterDescriptions": {
      "invoice_uuid": "UUID of the invoice"
    }
  },
  "billingInsights_list": {
    "accessPath": [
      "billingInsightsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/billing/{account_urn}/insights/{start_date}/{end_date}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "account_urn",
      "start_date",
      "end_date"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Billing Insights",
    "parameterDescriptions": {
      "account_urn": "URN of the customer account, can be a team (do:team:uuid) or an organization (do:teamgroup:uuid)",
      "start_date": "Start date for billing insights in YYYY-MM-DD format",
      "end_date": "End date for billing insights in YYYY-MM-DD format. Must be within 31 days of start_date",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "databases_list_options": {
    "accessPath": [
      "databasesListOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/options",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Database Options"
  },
  "databases_list_clusters": {
    "accessPath": [
      "databasesListClusters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tag_name"
    ],
    "description": "List All Database Clusters",
    "parameterDescriptions": {
      "tag_name": "Limits the results to database clusters with a specific tag.<br><br>Requires `tag:read` scope."
    }
  },
  "databases_create_cluster": {
    "accessPath": [
      "databasesCreateCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "name",
      "engine",
      "version",
      "semantic_version",
      "num_nodes",
      "size",
      "region",
      "status",
      "created_at",
      "private_network_uuid",
      "tags",
      "db_names",
      "ui_connection",
      "schema_registry_connection",
      "connection",
      "private_connection",
      "standby_connection",
      "standby_private_connection",
      "users",
      "maintenance_window",
      "project_id",
      "rules",
      "version_end_of_life",
      "version_end_of_availability",
      "storage_size_mib",
      "metrics_endpoints",
      "autoscale",
      "do_settings",
      "backup_restore"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Database Cluster"
  },
  "databases_get_cluster": {
    "accessPath": [
      "databasesGetCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_destroy_cluster": {
    "accessPath": [
      "databasesDestroyCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Destroy a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_config": {
    "accessPath": [
      "databasesGetConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Database Cluster Configuration",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_patch_config": {
    "accessPath": [
      "databasesPatchConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the Database Configuration for an Existing Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_ca": {
    "accessPath": [
      "databasesGetCa"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/ca",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Public Certificate",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_migrationStatus": {
    "accessPath": [
      "databasesGetMigrationStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/online-migration",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Status of an Online Migration",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_onlineMigration": {
    "accessPath": [
      "databasesUpdateOnlineMigration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "source",
      "disable_ssl",
      "ignore_dbs"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/online-migration",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start an Online Migration",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_delete_onlineMigration": {
    "accessPath": [
      "databasesDeleteOnlineMigration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "migration_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Stop an Online Migration",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "migration_id": "A unique identifier assigned to the online migration."
    }
  },
  "databases_update_region": {
    "accessPath": [
      "databasesUpdateRegion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "region"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/migrate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Migrate a Database Cluster to a New Region",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_clusterSize": {
    "accessPath": [
      "databasesUpdateClusterSize"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "size",
      "num_nodes",
      "storage_size_mib"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/resize",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Resize a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_list_firewall_rules": {
    "accessPath": [
      "databasesListFirewallRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/firewall",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Firewall Rules (Trusted Sources) for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_firewall_rules": {
    "accessPath": [
      "databasesUpdateFirewallRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/firewall",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Firewall Rules (Trusted Sources) for a Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_do_settings": {
    "accessPath": [
      "databasesGetDoSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/do_settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve DO Settings for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_do_settings": {
    "accessPath": [
      "databasesUpdateDoSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "do_settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/do_settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update DO Settings for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_maintenanceWindow": {
    "accessPath": [
      "databasesUpdateMaintenanceWindow"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "day",
      "hour",
      "pending",
      "description"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/maintenance",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Configure a Database Cluster's Maintenance Window",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_install_update": {
    "accessPath": [
      "databasesInstallUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/install_update",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start Database Maintenance",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_list_backups": {
    "accessPath": [
      "databasesListBackups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/backups",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Backups for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_list_replicas": {
    "accessPath": [
      "databasesListReplicas"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/replicas",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Read-only Replicas",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_create_replica": {
    "accessPath": [
      "databasesCreateReplica"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "name",
      "region",
      "size",
      "status",
      "tags",
      "created_at",
      "private_network_uuid",
      "connection",
      "private_connection",
      "storage_size_mib",
      "do_settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/replicas",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Read-only Replica",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_list_events_logs": {
    "accessPath": [
      "databasesListEventsLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all Events Logs",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_replica": {
    "accessPath": [
      "databasesGetReplica"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "replica_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Read-only Replica",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "replica_name": "The name of the database replica."
    }
  },
  "databases_destroy_replica": {
    "accessPath": [
      "databasesDestroyReplica"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "replica_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Destroy a Read-only Replica",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "replica_name": "The name of the database replica."
    }
  },
  "databases_promote_replica": {
    "accessPath": [
      "databasesPromoteReplica"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "replica_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Promote a Read-only Replica to become a Primary Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "replica_name": "The name of the database replica."
    }
  },
  "databases_list_users": {
    "accessPath": [
      "databasesListUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List all Database Users",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_add_user": {
    "accessPath": [
      "databasesAddUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "role",
      "password",
      "access_cert",
      "access_key",
      "mysql_settings",
      "settings",
      "readonly"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a Database User",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_user": {
    "accessPath": [
      "databasesGetUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Database User",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "username": "The name of the database user."
    }
  },
  "databases_delete_user": {
    "accessPath": [
      "databasesDeleteUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove a Database User",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "username": "The name of the database user."
    }
  },
  "databases_update_user": {
    "accessPath": [
      "databasesUpdateUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Database User",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "username": "The name of the database user."
    }
  },
  "databases_reset_auth": {
    "accessPath": [
      "databasesResetAuth"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "mysql_settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "username"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Reset a Database User's Password or Authentication Method",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "username": "The name of the database user."
    }
  },
  "databases_list": {
    "accessPath": [
      "databasesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/dbs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Databases",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_add": {
    "accessPath": [
      "databasesAdd"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/dbs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a New Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get": {
    "accessPath": [
      "databasesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "database_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "database_name": "The name of the database."
    }
  },
  "databases_delete": {
    "accessPath": [
      "databasesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "database_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "database_name": "The name of the database."
    }
  },
  "databases_list_connectionPools": {
    "accessPath": [
      "databasesListConnectionPools"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/pools",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Connection Pools (PostgreSQL)",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_add_connectionPool": {
    "accessPath": [
      "databasesAddConnectionPool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "mode",
      "size",
      "db",
      "user",
      "connection",
      "private_connection",
      "standby_connection",
      "standby_private_connection"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/pools",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a New Connection Pool (PostgreSQL)",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_connectionPool": {
    "accessPath": [
      "databasesGetConnectionPool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "pool_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Existing Connection Pool (PostgreSQL)",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "pool_name": "The name used to identify the connection pool."
    }
  },
  "databases_update_connectionPool": {
    "accessPath": [
      "databasesUpdateConnectionPool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "mode",
      "size",
      "db",
      "user"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "pool_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Connection Pools (PostgreSQL)",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "pool_name": "The name used to identify the connection pool."
    }
  },
  "databases_delete_connectionPool": {
    "accessPath": [
      "databasesDeleteConnectionPool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "pool_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Connection Pool (PostgreSQL)",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "pool_name": "The name used to identify the connection pool."
    }
  },
  "databases_get_evictionPolicy": {
    "accessPath": [
      "databasesGetEvictionPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/eviction_policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Eviction Policy for a Caching or Valkey Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_evictionPolicy": {
    "accessPath": [
      "databasesUpdateEvictionPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "eviction_policy"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/eviction_policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Configure the Eviction Policy for a Caching or Valkey Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_sql_mode": {
    "accessPath": [
      "databasesGetSqlMode"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/sql_mode",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the SQL Modes for a MySQL Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_sql_mode": {
    "accessPath": [
      "databasesUpdateSqlMode"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sql_mode"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/sql_mode",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update SQL Mode for a Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_major_version": {
    "accessPath": [
      "databasesUpdateMajorVersion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "version"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/upgrade",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upgrade Major Version for a Database",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_autoscale": {
    "accessPath": [
      "databasesGetAutoscale"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/autoscale",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Autoscale Configuration for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_autoscale": {
    "accessPath": [
      "databasesUpdateAutoscale"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "storage"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/autoscale",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Configure Autoscale Settings for a Database Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_list_kafka_topics": {
    "accessPath": [
      "databasesListKafkaTopics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/topics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Topics for a Kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_create_kafka_topic": {
    "accessPath": [
      "databasesCreateKafkaTopic"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "replication_factor",
      "partition_count",
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/topics",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Topic for a Kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_kafka_topic": {
    "accessPath": [
      "databasesGetKafkaTopic"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "topic_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Topic for a Kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "topic_name": "The name used to identify the Kafka topic."
    }
  },
  "databases_update_kafka_topic": {
    "accessPath": [
      "databasesUpdateKafkaTopic"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "replication_factor",
      "partition_count",
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "topic_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Topic for a Kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "topic_name": "The name used to identify the Kafka topic."
    }
  },
  "databases_delete_kafka_topic": {
    "accessPath": [
      "databasesDeleteKafkaTopic"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "topic_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Topic for a Kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "topic_name": "The name used to identify the Kafka topic."
    }
  },
  "databases_list_logsink": {
    "accessPath": [
      "databasesListLogsink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/logsink",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Logsinks for a Database Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_create_logsink": {
    "accessPath": [
      "databasesCreateLogsink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "sink_name",
      "sink_type",
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/logsink",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Logsink for a Database Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_logsink": {
    "accessPath": [
      "databasesGetLogsink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/logsink/{logsink_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "logsink_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Logsink for a Database Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "logsink_id": "A unique identifier for a logsink of a database cluster"
    }
  },
  "databases_update_logsink": {
    "accessPath": [
      "databasesUpdateLogsink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/logsink/{logsink_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "logsink_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Logsink for a Database Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "logsink_id": "A unique identifier for a logsink of a database cluster"
    }
  },
  "databases_delete_logsink": {
    "accessPath": [
      "databasesDeleteLogsink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/logsink/{logsink_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "logsink_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Logsink for a Database Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "logsink_id": "A unique identifier for a logsink of a database cluster"
    }
  },
  "databases_list_kafka_schemas": {
    "accessPath": [
      "databasesListKafkaSchemas"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Schemas for Kafka Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_create_kafka_schema": {
    "accessPath": [
      "databasesCreateKafkaSchema"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "subject_name",
      "schema_type",
      "schema"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Schema Registry for Kafka Cluster\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_kafka_schema": {
    "accessPath": [
      "databasesGetKafkaSchema"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "subject_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Kafka Schema by Subject Name\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "subject_name": "The name of the Kafka schema subject."
    }
  },
  "databases_delete_kafka_schema": {
    "accessPath": [
      "databasesDeleteKafkaSchema"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "subject_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Kafka Schema by Subject Name\n",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "subject_name": "The name of the Kafka schema subject."
    }
  },
  "databases_get_kafka_schema_version": {
    "accessPath": [
      "databasesGetKafkaSchemaVersion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/{subject_name}/versions/{version}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "subject_name",
      "version"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Kafka Schema by Subject Version",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "subject_name": "The name of the Kafka schema subject.",
      "version": "The version of the Kafka schema subject."
    }
  },
  "databases_get_kafka_schema_config": {
    "accessPath": [
      "databasesGetKafkaSchemaConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Schema Registry Configuration for a kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_update_kafka_schema_config": {
    "accessPath": [
      "databasesUpdateKafkaSchemaConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compatibility_level"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/config",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Schema Registry Configuration for a kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_get_kafka_schema_subject_config": {
    "accessPath": [
      "databasesGetKafkaSchemaSubjectConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "subject_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Schema Registry Configuration for a Subject of kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "subject_name": "The name of the Kafka schema subject."
    }
  },
  "databases_update_kafka_schema_subject_config": {
    "accessPath": [
      "databasesUpdateKafkaSchemaSubjectConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "compatibility_level"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "subject_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Schema Registry Configuration for a Subject of kafka Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "subject_name": "The name of the Kafka schema subject."
    }
  },
  "databases_get_cluster_metrics_credentials": {
    "accessPath": [
      "databasesGetClusterMetricsCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/metrics/credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Database Clusters' Metrics Endpoint Credentials"
  },
  "databases_update_cluster_metrics_credentials": {
    "accessPath": [
      "databasesUpdateClusterMetricsCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "credentials"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/databases/metrics/credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Database Clusters' Metrics Endpoint Credentials"
  },
  "databases_list_opeasearch_indexes": {
    "accessPath": [
      "databasesListOpeasearchIndexes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/indexes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Indexes for a OpenSearch Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster."
    }
  },
  "databases_delete_opensearch_index": {
    "accessPath": [
      "databasesDeleteOpensearchIndex"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/databases/{database_cluster_uuid}/indexes/{index_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "database_cluster_uuid",
      "index_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Index for OpenSearch Cluster",
    "parameterDescriptions": {
      "database_cluster_uuid": "A unique identifier for a database cluster.",
      "index_name": "The name of the OpenSearch index."
    }
  },
  "dedicatedInferences_get": {
    "accessPath": [
      "dedicatedInferencesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Dedicated Inference",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance."
    }
  },
  "dedicatedInferences_patch": {
    "accessPath": [
      "dedicatedInferencesPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "spec",
      "access_tokens"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Dedicated Inference",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance."
    }
  },
  "dedicatedInferences_delete": {
    "accessPath": [
      "dedicatedInferencesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Dedicated Inference",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance."
    }
  },
  "dedicatedInferences_list": {
    "accessPath": [
      "dedicatedInferencesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "region"
    ],
    "description": "List Dedicated Inferences",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "region": "Filter by region. Dedicated Inference is only available in nyc2, tor1, and atl1."
    }
  },
  "dedicatedInferences_create": {
    "accessPath": [
      "dedicatedInferencesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "spec",
      "access_tokens"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/dedicated-inferences",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Dedicated Inference"
  },
  "dedicatedInferences_list_accelerators": {
    "accessPath": [
      "dedicatedInferencesListAccelerators"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/accelerators",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "slug"
    ],
    "description": "List Dedicated Inference Accelerators",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "slug": "Filter accelerators by GPU slug."
    }
  },
  "dedicatedInferences_get_accelerator": {
    "accessPath": [
      "dedicatedInferencesGetAccelerator"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/accelerators/{accelerator_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id",
      "accelerator_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Dedicated Inference Accelerator",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance.",
      "accelerator_id": "A unique identifier for a Dedicated Inference accelerator."
    }
  },
  "dedicatedInferences_get_ca": {
    "accessPath": [
      "dedicatedInferencesGetCa"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/ca",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Dedicated Inference CA Certificate",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance."
    }
  },
  "dedicatedInferences_list_tokens": {
    "accessPath": [
      "dedicatedInferencesListTokens"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Dedicated Inference Tokens",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "dedicatedInferences_create_tokens": {
    "accessPath": [
      "dedicatedInferencesCreateTokens"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Dedicated Inference Token",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance."
    }
  },
  "dedicatedInferences_delete_tokens": {
    "accessPath": [
      "dedicatedInferencesDeleteTokens"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/dedicated-inferences/{dedicated_inference_id}/tokens/{token_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dedicated_inference_id",
      "token_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Revoke a Dedicated Inference Token",
    "parameterDescriptions": {
      "dedicated_inference_id": "A unique identifier for a Dedicated Inference instance.",
      "token_id": "A unique identifier for a Dedicated Inference access token."
    }
  },
  "dedicatedInferences_list_sizes": {
    "accessPath": [
      "dedicatedInferencesListSizes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/sizes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Dedicated Inference Sizes"
  },
  "dedicatedInferences_get_gpu_model_config": {
    "accessPath": [
      "dedicatedInferencesGetGpuModelConfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/dedicated-inferences/gpu-model-config",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Dedicated Inference GPU Model Config"
  },
  "domains_list": {
    "accessPath": [
      "domainsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/domains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Domains",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "domains_create": {
    "accessPath": [
      "domainsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "ip_address",
      "ttl",
      "zone_file"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/domains",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Domain"
  },
  "domains_get": {
    "accessPath": [
      "domainsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/domains/{domain_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Domain",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself."
    }
  },
  "domains_delete": {
    "accessPath": [
      "domainsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/domains/{domain_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Domain",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself."
    }
  },
  "domains_list_records": {
    "accessPath": [
      "domainsListRecords"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/domains/{domain_name}/records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "type",
      "per_page",
      "page"
    ],
    "description": "List All Domain Records",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself.",
      "name": "A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`.",
      "type": "The type of the DNS record. For example: A, CNAME, TXT, ...",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "domains_create_record": {
    "accessPath": [
      "domainsCreateRecord"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/domains/{domain_name}/records",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Domain Record",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself."
    }
  },
  "domains_get_record": {
    "accessPath": [
      "domainsGetRecord"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name",
      "domain_record_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Domain Record",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself.",
      "domain_record_id": "The unique identifier of the domain record."
    }
  },
  "domains_patch_record": {
    "accessPath": [
      "domainsPatchRecord"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "type",
      "name",
      "data",
      "priority",
      "port",
      "ttl",
      "weight",
      "flags",
      "tag"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name",
      "domain_record_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Domain Record",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself.",
      "domain_record_id": "The unique identifier of the domain record."
    }
  },
  "domains_update_record": {
    "accessPath": [
      "domainsUpdateRecord"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "type",
      "name",
      "data",
      "priority",
      "port",
      "ttl",
      "weight",
      "flags",
      "tag"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name",
      "domain_record_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Domain Record",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself.",
      "domain_record_id": "The unique identifier of the domain record."
    }
  },
  "domains_delete_record": {
    "accessPath": [
      "domainsDeleteRecord"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "domain_name",
      "domain_record_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Domain Record",
    "parameterDescriptions": {
      "domain_name": "The name of the domain itself.",
      "domain_record_id": "The unique identifier of the domain record."
    }
  },
  "droplets_list": {
    "accessPath": [
      "dropletsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "tag_name",
      "name",
      "type"
    ],
    "description": "List All Droplets",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "tag_name": "Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope.",
      "name": "Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.",
      "type": "When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`."
    }
  },
  "droplets_create": {
    "accessPath": [
      "dropletsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Droplet"
  },
  "droplets_destroy_byTag": {
    "accessPath": [
      "dropletsDestroyByTag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tag_name"
    ],
    "description": "Deleting Droplets by Tag",
    "parameterDescriptions": {
      "tag_name": "Specifies Droplets to be deleted by tag."
    }
  },
  "droplets_get": {
    "accessPath": [
      "dropletsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_destroy": {
    "accessPath": [
      "dropletsDestroy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets/{droplet_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Existing Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_list_backups": {
    "accessPath": [
      "dropletsListBackups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/backups",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Backups for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "droplets_get_backup_policy": {
    "accessPath": [
      "dropletsGetBackupPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/backups/policy",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Backup Policy for an Existing Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_list_backup_policies": {
    "accessPath": [
      "dropletsListBackupPolicies"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/backups/policies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Backup Policies for All Existing Droplets",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "droplets_list_supported_backup_policies": {
    "accessPath": [
      "dropletsListSupportedBackupPolicies"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/backups/supported_policies",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Supported Droplet Backup Policies"
  },
  "droplets_list_snapshots": {
    "accessPath": [
      "dropletsListSnapshots"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Snapshots for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "dropletActions_list": {
    "accessPath": [
      "dropletActionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Actions for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "dropletActions_post": {
    "accessPath": [
      "dropletActionsPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/droplets/{droplet_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate a Droplet Action",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "dropletActions_post_byTag": {
    "accessPath": [
      "dropletActionsPostByTag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/droplets/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "tag_name"
    ],
    "description": "Acting on Tagged Droplets",
    "parameterDescriptions": {
      "tag_name": "Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope."
    }
  },
  "dropletActions_get": {
    "accessPath": [
      "dropletActionsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id",
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a Droplet Action",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "action_id": "A unique numeric ID that can be used to identify and reference an action."
    }
  },
  "droplets_list_kernels": {
    "accessPath": [
      "dropletsListKernels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/kernels",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Available Kernels for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "droplets_list_firewalls": {
    "accessPath": [
      "dropletsListFirewalls"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/firewalls",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List all Firewalls Applied to a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "droplets_list_neighbors": {
    "accessPath": [
      "dropletsListNeighbors"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/neighbors",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Neighbors for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_list_associatedResources": {
    "accessPath": [
      "dropletsListAssociatedResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/destroy_with_associated_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Associated Resources for a Droplet",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_destroy_withAssociatedResourcesSelective": {
    "accessPath": [
      "dropletsDestroyWithAssociatedResourcesSelective"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "floating_ips",
      "reserved_ips",
      "snapshots",
      "volumes",
      "volume_snapshots"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Selectively Destroy a Droplet and its Associated Resources",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_destroy_withAssociatedResourcesDangerous": {
    "accessPath": [
      "dropletsDestroyWithAssociatedResourcesDangerous"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [
      "X-Dangerous"
    ],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Destroy a Droplet and All of its Associated Resources (Dangerous)",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance.",
      "X-Dangerous": "Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed."
    }
  },
  "droplets_get_DestroyAssociatedResourcesStatus": {
    "accessPath": [
      "dropletsGetDestroyAssociatedResourcesStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Check Status of a Droplet Destroy with Associated Resources Request",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "droplets_destroy_retryWithAssociatedResources": {
    "accessPath": [
      "dropletsDestroyRetryWithAssociatedResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "droplet_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retry a Droplet Destroy with Associated Resources Request",
    "parameterDescriptions": {
      "droplet_id": "A unique identifier for a Droplet instance."
    }
  },
  "autoscalepools_list": {
    "accessPath": [
      "autoscalepoolsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/autoscale",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "name"
    ],
    "description": "List All Autoscale Pools",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "name": "The name of the autoscale pool"
    }
  },
  "autoscalepools_create": {
    "accessPath": [
      "autoscalepoolsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "config",
      "droplet_template"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/droplets/autoscale",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Autoscale Pool"
  },
  "autoscalepools_get": {
    "accessPath": [
      "autoscalepoolsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Autoscale Pool",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool."
    }
  },
  "autoscalepools_update": {
    "accessPath": [
      "autoscalepoolsUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "config",
      "droplet_template"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Autoscale Pool",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool."
    }
  },
  "autoscalepools_delete": {
    "accessPath": [
      "autoscalepoolsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete autoscale pool",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool."
    }
  },
  "autoscalepools_delete_dangerous": {
    "accessPath": [
      "autoscalepoolsDeleteDangerous"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [
      "X-Dangerous"
    ],
    "method": "DELETE",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}/dangerous",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete autoscale pool and resources",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "X-Dangerous": "Acknowledge this action will destroy the autoscale pool and its associated resources and _can not_ be reversed."
    }
  },
  "autoscalepools_list_members": {
    "accessPath": [
      "autoscalepoolsListMembers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}/members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List members",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "autoscale_pool_id": "A unique identifier for an autoscale pool."
    }
  },
  "autoscalepools_list_history": {
    "accessPath": [
      "autoscalepoolsListHistory"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/droplets/autoscale/{autoscale_pool_id}/history",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "autoscale_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List history events",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "autoscale_pool_id": "A unique identifier for an autoscale pool."
    }
  },
  "firewalls_list": {
    "accessPath": [
      "firewallsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/firewalls",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Firewalls",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "firewalls_create": {
    "accessPath": [
      "firewallsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/firewalls",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Firewall"
  },
  "firewalls_get": {
    "accessPath": [
      "firewallsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/firewalls/{firewall_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_update": {
    "accessPath": [
      "firewallsUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/firewalls/{firewall_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_delete": {
    "accessPath": [
      "firewallsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/firewalls/{firewall_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_assign_droplets": {
    "accessPath": [
      "firewallsAssignDroplets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "droplet_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/firewalls/{firewall_id}/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Droplets to a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_delete_droplets": {
    "accessPath": [
      "firewallsDeleteDroplets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "droplet_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/firewalls/{firewall_id}/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Droplets from a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_add_tags": {
    "accessPath": [
      "firewallsAddTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/firewalls/{firewall_id}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Tags to a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_delete_tags": {
    "accessPath": [
      "firewallsDeleteTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/firewalls/{firewall_id}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Tags from a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_add_rules": {
    "accessPath": [
      "firewallsAddRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/firewalls/{firewall_id}/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Rules to a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "firewalls_delete_rules": {
    "accessPath": [
      "firewallsDeleteRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/firewalls/{firewall_id}/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "firewall_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Rules from a Firewall",
    "parameterDescriptions": {
      "firewall_id": "A unique ID that can be used to identify and reference a firewall."
    }
  },
  "floatingIPs_list": {
    "accessPath": [
      "floatingIPsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/floating_ips",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Floating IPs",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "floatingIPs_create": {
    "accessPath": [
      "floatingIPsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/floating_ips",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Floating IP"
  },
  "floatingIPs_get": {
    "accessPath": [
      "floatingIPsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/floating_ips/{floating_ip}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "floating_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Floating IP",
    "parameterDescriptions": {
      "floating_ip": "A floating IP address."
    }
  },
  "floatingIPs_delete": {
    "accessPath": [
      "floatingIPsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/floating_ips/{floating_ip}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "floating_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Floating IP",
    "parameterDescriptions": {
      "floating_ip": "A floating IP address."
    }
  },
  "floatingIPsAction_list": {
    "accessPath": [
      "floatingIPsActionList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/floating_ips/{floating_ip}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "floating_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Actions for a Floating IP",
    "parameterDescriptions": {
      "floating_ip": "A floating IP address."
    }
  },
  "floatingIPsAction_post": {
    "accessPath": [
      "floatingIPsActionPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/floating_ips/{floating_ip}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "floating_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate a Floating IP Action",
    "parameterDescriptions": {
      "floating_ip": "A floating IP address."
    }
  },
  "floatingIPsAction_get": {
    "accessPath": [
      "floatingIPsActionGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/floating_ips/{floating_ip}/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "floating_ip",
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Floating IP Action",
    "parameterDescriptions": {
      "floating_ip": "A floating IP address.",
      "action_id": "A unique numeric ID that can be used to identify and reference an action."
    }
  },
  "functions_list_namespaces": {
    "accessPath": [
      "functionsListNamespaces"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/functions/namespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Namespaces"
  },
  "functions_create_namespace": {
    "accessPath": [
      "functionsCreateNamespace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "region",
      "label"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/functions/namespaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Namespace"
  },
  "functions_get_namespace": {
    "accessPath": [
      "functionsGetNamespace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Namespace",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functions_delete_namespace": {
    "accessPath": [
      "functionsDeleteNamespace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Namespace",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functions_list_triggers": {
    "accessPath": [
      "functionsListTriggers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/triggers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Triggers",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functions_create_trigger": {
    "accessPath": [
      "functionsCreateTrigger"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "function",
      "type",
      "is_enabled",
      "scheduled_details"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/triggers",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Trigger",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functions_get_trigger": {
    "accessPath": [
      "functionsGetTrigger"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id",
      "trigger_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Trigger",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed.",
      "trigger_name": "The name of the trigger to be managed."
    }
  },
  "functions_update_trigger": {
    "accessPath": [
      "functionsUpdateTrigger"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "is_enabled",
      "scheduled_details"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id",
      "trigger_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Trigger",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed.",
      "trigger_name": "The name of the trigger to be managed."
    }
  },
  "functions_delete_trigger": {
    "accessPath": [
      "functionsDeleteTrigger"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id",
      "trigger_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Trigger",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed.",
      "trigger_name": "The name of the trigger to be managed."
    }
  },
  "functionsAccessKey_list": {
    "accessPath": [
      "functionsAccessKeyList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Namespace Access Keys",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functionsAccessKey_create": {
    "accessPath": [
      "functionsAccessKeyCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "expires_in"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Namespace Access Key",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed."
    }
  },
  "functionsAccessKey_update": {
    "accessPath": [
      "functionsAccessKeyUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Namespace Access Key",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed.",
      "key_id": "The ID of the access key to be managed."
    }
  },
  "functionsAccessKey_delete": {
    "accessPath": [
      "functionsAccessKeyDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/functions/namespaces/{namespace_id}/keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "namespace_id",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Namespace Access Key",
    "parameterDescriptions": {
      "namespace_id": "The ID of the namespace to be managed.",
      "key_id": "The ID of the access key to be managed."
    }
  },
  "images_list": {
    "accessPath": [
      "imagesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "private",
      "tag_name",
      "per_page",
      "page"
    ],
    "description": "List All Images",
    "parameterDescriptions": {
      "type": "Filters results based on image type which can be either `application` or `distribution`.",
      "private": "Used to filter only user images.",
      "tag_name": "Used to filter images by a specific tag.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "images_create_custom": {
    "accessPath": [
      "imagesCreateCustom"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "distribution",
      "description",
      "url",
      "region",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Custom Image"
  },
  "images_get": {
    "accessPath": [
      "imagesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/images/{image_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Image",
    "parameterDescriptions": {
      "image_id": "A unique number (id) or string (slug) used to identify and reference a\nspecific image.\n\n**Public** images can be identified by image `id` or `slug`.\n\n**Private** images *must* be identified by image `id`.\n"
    }
  },
  "images_update": {
    "accessPath": [
      "imagesUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "distribution",
      "description"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/images/{image_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an Image",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "images_delete": {
    "accessPath": [
      "imagesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/images/{image_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Image",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "images_post_account_transfer_create": {
    "accessPath": [
      "imagesPostAccountTransferCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images/{image_id}/account_transfer",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate an Image Account Transfer",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "images_post_account_transfer_accept": {
    "accessPath": [
      "imagesPostAccountTransferAccept"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "transfer_id",
      "recipient_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images/{image_id}/account_transfer/accept",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Accept an Image Account Transfer",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "images_post_account_transfer_cancel": {
    "accessPath": [
      "imagesPostAccountTransferCancel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "transfer_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images/{image_id}/account_transfer/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel an Image Account Transfer",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "images_post_account_transfer_decline": {
    "accessPath": [
      "imagesPostAccountTransferDecline"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "transfer_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images/{image_id}/account_transfer/decline",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Decline an Image Account Transfer",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "imageActions_list": {
    "accessPath": [
      "imageActionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/images/{image_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Actions for an Image",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "imageActions_post": {
    "accessPath": [
      "imageActionsPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/images/{image_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate an Image Action",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image."
    }
  },
  "imageActions_get": {
    "accessPath": [
      "imageActionsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/images/{image_id}/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "image_id",
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Action",
    "parameterDescriptions": {
      "image_id": "A unique number that can be used to identify and reference a specific image.",
      "action_id": "A unique numeric ID that can be used to identify and reference an action."
    }
  },
  "kubernetes_list_clusters": {
    "accessPath": [
      "kubernetesListClusters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Kubernetes Clusters",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "kubernetes_create_cluster": {
    "accessPath": [
      "kubernetesCreateCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "name",
      "region",
      "version",
      "cluster_subnet",
      "service_subnet",
      "vpc_uuid",
      "worker_subnet_uuid",
      "ipv4",
      "endpoint",
      "tags",
      "node_pools",
      "maintenance_policy",
      "auto_upgrade",
      "isolated_workers",
      "status",
      "created_at",
      "updated_at",
      "surge_upgrade",
      "ha",
      "registry_enabled",
      "control_plane_firewall",
      "cluster_autoscaler_configuration",
      "sso",
      "routing_agent",
      "p2p_oci_registry_plugin",
      "amd_gpu_device_plugin",
      "amd_gpu_device_metrics_exporter_plugin",
      "nvidia_gpu_device_plugin",
      "rdma_shared_dev_plugin",
      "coredns_autoscaler"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/clusters",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Kubernetes Cluster"
  },
  "kubernetes_get_cluster": {
    "accessPath": [
      "kubernetesGetCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_update_cluster": {
    "accessPath": [
      "kubernetesUpdateCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "tags",
      "maintenance_policy",
      "auto_upgrade",
      "surge_upgrade",
      "ha",
      "control_plane_firewall",
      "cluster_autoscaler_configuration",
      "sso",
      "routing_agent",
      "p2p_oci_registry_plugin",
      "amd_gpu_device_plugin",
      "amd_gpu_device_metrics_exporter_plugin",
      "nvidia_gpu_device_plugin",
      "rdma_shared_dev_plugin",
      "coredns_autoscaler"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_delete_cluster": {
    "accessPath": [
      "kubernetesDeleteCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_list_associatedResources": {
    "accessPath": [
      "kubernetesListAssociatedResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Associated Resources for Cluster Deletion",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_destroy_associatedResourcesSelective": {
    "accessPath": [
      "kubernetesDestroyAssociatedResourcesSelective"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "load_balancers",
      "volumes",
      "volume_snapshots"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Selectively Delete a Cluster and its Associated Resources",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_destroy_associatedResourcesDangerous": {
    "accessPath": [
      "kubernetesDestroyAssociatedResourcesDangerous"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Cluster and All of its Associated Resources (Dangerous)",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_get_kubeconfig": {
    "accessPath": [
      "kubernetesGetKubeconfig"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/kubeconfig",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "expiry_seconds",
      "type"
    ],
    "description": "Retrieve the kubeconfig for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "expiry_seconds": "The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.",
      "type": "The type of credentials to return in the kubeconfig. When omitted, the\ndefault credential type for the cluster is used: `sso` for clusters with SSO enabled, `token` for clusters without SSO enabled.\n"
    }
  },
  "kubernetes_get_credentials": {
    "accessPath": [
      "kubernetesGetCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "expiry_seconds"
    ],
    "description": "Retrieve Credentials for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "expiry_seconds": "The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry."
    }
  },
  "kubernetes_get_availableUpgrades": {
    "accessPath": [
      "kubernetesGetAvailableUpgrades"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/upgrades",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Available Upgrades for an Existing Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_upgrade_cluster": {
    "accessPath": [
      "kubernetesUpgradeCluster"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "version"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/upgrade",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upgrade a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_list_nodePools": {
    "accessPath": [
      "kubernetesListNodePools"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Node Pools in a Kubernetes Clusters",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_add_nodePool": {
    "accessPath": [
      "kubernetesAddNodePool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "size",
      "id",
      "name",
      "count",
      "tags",
      "labels",
      "taints",
      "auto_scale",
      "min_nodes",
      "max_nodes",
      "nodes"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add a Node Pool to a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_get_nodePool": {
    "accessPath": [
      "kubernetesGetNodePool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id",
      "node_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a Node Pool for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "node_pool_id": "A unique ID that can be used to reference a Kubernetes node pool."
    }
  },
  "kubernetes_update_nodePool": {
    "accessPath": [
      "kubernetesUpdateNodePool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "name",
      "count",
      "tags",
      "labels",
      "taints",
      "auto_scale",
      "min_nodes",
      "max_nodes",
      "nodes"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id",
      "node_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Node Pool in a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "node_pool_id": "A unique ID that can be used to reference a Kubernetes node pool."
    }
  },
  "kubernetes_delete_nodePool": {
    "accessPath": [
      "kubernetesDeleteNodePool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id",
      "node_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Node Pool in a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "node_pool_id": "A unique ID that can be used to reference a Kubernetes node pool."
    }
  },
  "kubernetes_delete_node": {
    "accessPath": [
      "kubernetesDeleteNode"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id",
      "node_pool_id",
      "node_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "skip_drain",
      "replace"
    ],
    "description": "Delete a Node in a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "node_pool_id": "A unique ID that can be used to reference a Kubernetes node pool.",
      "node_id": "A unique ID that can be used to reference a node in a Kubernetes node pool.",
      "skip_drain": "Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion.",
      "replace": "Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement."
    }
  },
  "kubernetes_recycle_node_pool": {
    "accessPath": [
      "kubernetesRecycleNodePool"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "nodes"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id",
      "node_pool_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Recycle a Kubernetes Node Pool",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "node_pool_id": "A unique ID that can be used to reference a Kubernetes node pool."
    }
  },
  "kubernetes_get_clusterUser": {
    "accessPath": [
      "kubernetesGetClusterUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/user",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve User Information for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_list_options": {
    "accessPath": [
      "kubernetesListOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/options",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Available Regions, Node Sizes, and Versions of Kubernetes"
  },
  "kubernetes_run_clusterLint": {
    "accessPath": [
      "kubernetesRunClusterLint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "include_groups",
      "include_checks",
      "exclude_groups",
      "exclude_checks"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Run Clusterlint Checks on a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster."
    }
  },
  "kubernetes_get_clusterLintResults": {
    "accessPath": [
      "kubernetesGetClusterLintResults"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "run_id"
    ],
    "description": "Fetch Clusterlint Diagnostics for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "run_id": "Specifies the clusterlint run whose results will be retrieved."
    }
  },
  "kubernetes_add_registry": {
    "accessPath": [
      "kubernetesAddRegistry"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cluster_uuids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Container Registry to Kubernetes Clusters"
  },
  "kubernetes_remove_registry": {
    "accessPath": [
      "kubernetesRemoveRegistry"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cluster_uuids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Container Registry from Kubernetes Clusters"
  },
  "kubernetes_add_registries": {
    "accessPath": [
      "kubernetesAddRegistries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cluster_uuids",
      "registries"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/kubernetes/registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Container Registries to Kubernetes Clusters"
  },
  "kubernetes_remove_registries": {
    "accessPath": [
      "kubernetesRemoveRegistries"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cluster_uuids",
      "registries"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/kubernetes/registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Container Registries from Kubernetes Clusters"
  },
  "kubernetes_get_status_messages": {
    "accessPath": [
      "kubernetesGetStatusMessages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/kubernetes/clusters/{cluster_id}/status_messages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cluster_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "since"
    ],
    "description": "Fetch Status Messages for a Kubernetes Cluster",
    "parameterDescriptions": {
      "cluster_id": "A unique ID that can be used to reference a Kubernetes cluster.",
      "since": "A timestamp used to return status messages emitted since the specified time. The timestamp should be in ISO8601 format."
    }
  },
  "loadBalancers_create": {
    "accessPath": [
      "loadBalancersCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/load_balancers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Load Balancer"
  },
  "loadBalancers_list": {
    "accessPath": [
      "loadBalancersList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/load_balancers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Load Balancers",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "loadBalancers_get": {
    "accessPath": [
      "loadBalancersGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/load_balancers/{lb_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_update": {
    "accessPath": [
      "loadBalancersUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/load_balancers/{lb_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_delete": {
    "accessPath": [
      "loadBalancersDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/load_balancers/{lb_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_delete_cache": {
    "accessPath": [
      "loadBalancersDeleteCache"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/load_balancers/{lb_id}/cache",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Global Load Balancer CDN Cache",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_add_droplets": {
    "accessPath": [
      "loadBalancersAddDroplets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "droplet_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/load_balancers/{lb_id}/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Droplets to a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_remove_droplets": {
    "accessPath": [
      "loadBalancersRemoveDroplets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "droplet_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/load_balancers/{lb_id}/droplets",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Droplets from a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_add_forwardingRules": {
    "accessPath": [
      "loadBalancersAddForwardingRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "forwarding_rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/load_balancers/{lb_id}/forwarding_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Forwarding Rules to a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "loadBalancers_remove_forwardingRules": {
    "accessPath": [
      "loadBalancersRemoveForwardingRules"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "forwarding_rules"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/load_balancers/{lb_id}/forwarding_rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "lb_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Remove Forwarding Rules from a Load Balancer",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer."
    }
  },
  "monitoring_list_alertPolicy": {
    "accessPath": [
      "monitoringListAlertPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Alert Policies",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "monitoring_create_alertPolicy": {
    "accessPath": [
      "monitoringCreateAlertPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "alerts",
      "compare",
      "description",
      "enabled",
      "entities",
      "tags",
      "type",
      "value",
      "window"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/monitoring/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Alert Policy"
  },
  "monitoring_get_alertPolicy": {
    "accessPath": [
      "monitoringGetAlertPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/alerts/{alert_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "alert_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Alert Policy",
    "parameterDescriptions": {
      "alert_uuid": "A unique identifier for an alert policy."
    }
  },
  "monitoring_update_alertPolicy": {
    "accessPath": [
      "monitoringUpdateAlertPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "alerts",
      "compare",
      "description",
      "enabled",
      "entities",
      "tags",
      "type",
      "value",
      "window"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/monitoring/alerts/{alert_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "alert_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an Alert Policy",
    "parameterDescriptions": {
      "alert_uuid": "A unique identifier for an alert policy."
    }
  },
  "monitoring_delete_alertPolicy": {
    "accessPath": [
      "monitoringDeleteAlertPolicy"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/monitoring/alerts/{alert_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "alert_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Alert Policy",
    "parameterDescriptions": {
      "alert_uuid": "A unique identifier for an alert policy."
    }
  },
  "monitoring_get_dropletBandwidthMetrics": {
    "accessPath": [
      "monitoringGetDropletBandwidthMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/bandwidth",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "interface",
      "direction",
      "start",
      "end"
    ],
    "description": "Get Droplet Bandwidth Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "interface": "The network interface.",
      "direction": "The traffic direction.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_DropletCpuMetrics": {
    "accessPath": [
      "monitoringGetDropletCpuMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/cpu",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet CPU Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletFilesystemFreeMetrics": {
    "accessPath": [
      "monitoringGetDropletFilesystemFreeMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/filesystem_free",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Filesystem Free Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletFilesystemSizeMetrics": {
    "accessPath": [
      "monitoringGetDropletFilesystemSizeMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/filesystem_size",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Filesystem Size Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletLoad1Metrics": {
    "accessPath": [
      "monitoringGetDropletLoad1Metrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/load_1",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Load1 Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletLoad5Metrics": {
    "accessPath": [
      "monitoringGetDropletLoad5Metrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/load_5",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Load5 Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletLoad15Metrics": {
    "accessPath": [
      "monitoringGetDropletLoad15Metrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/load_15",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Load15 Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletMemoryCachedMetrics": {
    "accessPath": [
      "monitoringGetDropletMemoryCachedMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/memory_cached",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Cached Memory Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletMemoryFreeMetrics": {
    "accessPath": [
      "monitoringGetDropletMemoryFreeMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/memory_free",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Free Memory Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletMemoryTotalMetrics": {
    "accessPath": [
      "monitoringGetDropletMemoryTotalMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/memory_total",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Total Memory Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_dropletMemoryAvailableMetrics": {
    "accessPath": [
      "monitoringGetDropletMemoryAvailableMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet/memory_available",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "host_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Available Memory Metrics",
    "parameterDescriptions": {
      "host_id": "The droplet ID.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_appMemoryPercentageMetrics": {
    "accessPath": [
      "monitoringGetAppMemoryPercentageMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/apps/memory_percentage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "app_id",
      "app_component",
      "start",
      "end"
    ],
    "description": "Get App Memory Percentage Metrics",
    "parameterDescriptions": {
      "app_id": "The app UUID.",
      "app_component": "The app component name.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_appCPUPercentageMetrics": {
    "accessPath": [
      "monitoringGetAppCpuPercentageMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/apps/cpu_percentage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "app_id",
      "app_component",
      "start",
      "end"
    ],
    "description": "Get App CPU Percentage Metrics",
    "parameterDescriptions": {
      "app_id": "The app UUID.",
      "app_component": "The app component name.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_appRestartCountMetrics.yml": {
    "accessPath": [
      "monitoringGetAppRestartCountMetricsYml"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/apps/restart_count",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "app_id",
      "app_component",
      "start",
      "end"
    ],
    "description": "Get App Restart Count Metrics",
    "parameterDescriptions": {
      "app_id": "The app UUID.",
      "app_component": "The app component name.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_connections_current": {
    "accessPath": [
      "monitoringGetLbFrontendConnectionsCurrent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_connections_current",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Total Current Active Connections Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_connections_limit": {
    "accessPath": [
      "monitoringGetLbFrontendConnectionsLimit"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_connections_limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Max Connections Limit Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_cpu_utilization": {
    "accessPath": [
      "monitoringGetLbFrontendCpuUtilization"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_cpu_utilization",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Average Percentage CPU Utilization Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_firewall_dropped_bytes": {
    "accessPath": [
      "monitoringGetLbFrontendFirewallDroppedBytes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_firewall_dropped_bytes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Firewall Dropped Bytes Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_firewall_dropped_packets": {
    "accessPath": [
      "monitoringGetLbFrontendFirewallDroppedPackets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_firewall_dropped_packets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Firewall Dropped Packets Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_http_responses": {
    "accessPath": [
      "monitoringGetLbFrontendHttpResponses"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_http_responses",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend HTTP Rate Of Response Code Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_http_requests_per_second": {
    "accessPath": [
      "monitoringGetLbFrontendHttpRequestsPerSecond"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_http_requests_per_second",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend HTTP Requests Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_network_throughput_http": {
    "accessPath": [
      "monitoringGetLbFrontendNetworkThroughputHttp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_network_throughput_http",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend HTTP Throughput Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_network_throughput_udp": {
    "accessPath": [
      "monitoringGetLbFrontendNetworkThroughputUdp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_network_throughput_udp",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend UDP Throughput Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_network_throughput_tcp": {
    "accessPath": [
      "monitoringGetLbFrontendNetworkThroughputTcp"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_network_throughput_tcp",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend TCP Throughput Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_nlb_tcp_network_throughput": {
    "accessPath": [
      "monitoringGetLbFrontendNlbTcpNetworkThroughput"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_nlb_tcp_network_throughput",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Network Load Balancer Frontend TCP Throughput Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_nlb_udp_network_throughput": {
    "accessPath": [
      "monitoringGetLbFrontendNlbUdpNetworkThroughput"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_nlb_udp_network_throughput",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Network Load Balancer Frontend UDP Throughput Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_tls_connections_current": {
    "accessPath": [
      "monitoringGetLbFrontendTlsConnectionsCurrent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_tls_connections_current",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Current TLS Connections Rate Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_tls_connections_limit": {
    "accessPath": [
      "monitoringGetLbFrontendTlsConnectionsLimit"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_tls_connections_limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Max TLS Connections Limit Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_frontend_tls_connections_exceeding_rate_limit": {
    "accessPath": [
      "monitoringGetLbFrontendTlsConnectionsExceedingRateLimit"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/frontend_tls_connections_exceeding_rate_limit",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Frontend Closed TLS Connections For Exceeded Rate Limit Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_session_duration_avg": {
    "accessPath": [
      "monitoringGetLbDropletsHttpSessionDurationAvg"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_session_duration_avg",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Average HTTP Session Duration Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_session_duration_50p": {
    "accessPath": [
      "monitoringGetLbDropletsHttpSessionDuration50P"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_session_duration_50p",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets 50th Percentile HTTP Session Duration Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_session_duration_95p": {
    "accessPath": [
      "monitoringGetLbDropletsHttpSessionDuration95P"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_session_duration_95p",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets 95th Percentile HTTP Session Duration Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_response_time_avg": {
    "accessPath": [
      "monitoringGetLbDropletsHttpResponseTimeAvg"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_response_time_avg",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Average HTTP Response Time Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_response_time_50p": {
    "accessPath": [
      "monitoringGetLbDropletsHttpResponseTime50P"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_response_time_50p",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets 50th Percentile HTTP Response Time Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_response_time_95p": {
    "accessPath": [
      "monitoringGetLbDropletsHttpResponseTime95P"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_response_time_95p",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets 95th Percentile HTTP Response Time Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_response_time_99p": {
    "accessPath": [
      "monitoringGetLbDropletsHttpResponseTime99P"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_response_time_99p",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets 99th Percentile HTTP Response Time Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_queue_size": {
    "accessPath": [
      "monitoringGetLbDropletsQueueSize"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_queue_size",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Queue Size Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_http_responses": {
    "accessPath": [
      "monitoringGetLbDropletsHttpResponses"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_http_responses",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets HTTP Rate Of Response Code Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_connections": {
    "accessPath": [
      "monitoringGetLbDropletsConnections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_connections",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Active Connections Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_health_checks": {
    "accessPath": [
      "monitoringGetLbDropletsHealthChecks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_health_checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Health Check Status Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_lb_droplets_downtime": {
    "accessPath": [
      "monitoringGetLbDropletsDowntime"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/load_balancer/droplets_downtime",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "lb_id",
      "start",
      "end"
    ],
    "description": "Get Load Balancer Droplets Downtime Status Metrics",
    "parameterDescriptions": {
      "lb_id": "A unique identifier for a load balancer.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_current_instances": {
    "accessPath": [
      "monitoringGetDropletAutoscaleCurrentInstances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/current_instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Current Size",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_target_instances": {
    "accessPath": [
      "monitoringGetDropletAutoscaleTargetInstances"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/target_instances",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Target Size",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_current_cpu_utilization.yml": {
    "accessPath": [
      "monitoringGetDropletAutoscaleCurrentCpuUtilizationYml"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/current_cpu_utilization",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Current Average CPU utilization",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_target_cpu_utilization": {
    "accessPath": [
      "monitoringGetDropletAutoscaleTargetCpuUtilization"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/target_cpu_utilization",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Target Average CPU utilization",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_current_memory_utilization": {
    "accessPath": [
      "monitoringGetDropletAutoscaleCurrentMemoryUtilization"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/current_memory_utilization",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Current Average Memory utilization",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_droplet_autoscale_target_memory_utilization": {
    "accessPath": [
      "monitoringGetDropletAutoscaleTargetMemoryUtilization"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/droplet_autoscale/target_memory_utilization",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "autoscale_pool_id",
      "start",
      "end"
    ],
    "description": "Get Droplet Autoscale Pool Target Average Memory utilization",
    "parameterDescriptions": {
      "autoscale_pool_id": "A unique identifier for an autoscale pool.",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_cpu_usage": {
    "accessPath": [
      "monitoringGetDatabaseMysqlCpuUsage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/cpu_usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "aggregate",
      "start",
      "end"
    ],
    "description": "Get Database MySQL CPU Usage Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "aggregate": "Aggregation over the time range (avg, max, or min).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_load": {
    "accessPath": [
      "monitoringGetDatabaseMysqlLoad"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/load",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "metric",
      "aggregate",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Load Average Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "metric": "Load window: **load1** (1-minute), **load5** (5-minute), **load15** (15-minute). The value is either average or max over that window, depending on the **aggregate** parameter (avg or max).",
      "aggregate": "Aggregation over the time range (avg or max).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_memory_usage": {
    "accessPath": [
      "monitoringGetDatabaseMysqlMemoryUsage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/memory_usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "aggregate",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Memory Usage Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "aggregate": "Aggregation over the time range (avg, max, or min).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_disk_usage": {
    "accessPath": [
      "monitoringGetDatabaseMysqlDiskUsage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/disk_usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "aggregate",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Disk Usage Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "aggregate": "Aggregation over the time range (avg, max, or min).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_threads_connected": {
    "accessPath": [
      "monitoringGetDatabaseMysqlThreadsConnected"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/threads_connected",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Threads Connected Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_threads_created_rate": {
    "accessPath": [
      "monitoringGetDatabaseMysqlThreadsCreatedRate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/threads_created_rate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Threads Created Rate Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_threads_active": {
    "accessPath": [
      "monitoringGetDatabaseMysqlThreadsActive"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/threads_active",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Threads Active Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_index_vs_sequential_reads": {
    "accessPath": [
      "monitoringGetDatabaseMysqlIndexVsSequentialReads"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/index_vs_sequential_reads",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Index vs Sequential Reads Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_op_rates": {
    "accessPath": [
      "monitoringGetDatabaseMysqlOpRates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/op_rates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "metric",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Operations Throughput Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "metric": "Operation type (select, insert, update, or delete).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_schema_throughput": {
    "accessPath": [
      "monitoringGetDatabaseMysqlSchemaThroughput"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/schema_throughput",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "schema",
      "metric",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Schema Throughput Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "schema": "The schema (database) name.",
      "metric": "Table I/O operation (insert, fetch, update, or delete).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_get_database_mysql_schema_latency": {
    "accessPath": [
      "monitoringGetDatabaseMysqlSchemaLatency"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/metrics/database/mysql/schema_latency",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "db_id",
      "schema",
      "metric",
      "start",
      "end"
    ],
    "description": "Get Database MySQL Schema Latency Metrics",
    "parameterDescriptions": {
      "db_id": "The DBaaS cluster UUID (database ID).",
      "schema": "The schema (database) name.",
      "metric": "Table I/O operation (insert, fetch, update, or delete).",
      "start": "UNIX timestamp to start metric window.",
      "end": "UNIX timestamp to end metric window."
    }
  },
  "monitoring_create_destination": {
    "accessPath": [
      "monitoringCreateDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/monitoring/sinks/destinations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Logging Destination"
  },
  "monitoring_list_destinations": {
    "accessPath": [
      "monitoringListDestinations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/sinks/destinations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Logging Destinations"
  },
  "monitoring_get_destination": {
    "accessPath": [
      "monitoringGetDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/sinks/destinations/{destination_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "destination_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Logging Destination",
    "parameterDescriptions": {
      "destination_uuid": "A unique identifier for a destination."
    }
  },
  "monitoring_update_destination": {
    "accessPath": [
      "monitoringUpdateDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "config"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/monitoring/sinks/destinations/{destination_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "destination_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Logging Destination",
    "parameterDescriptions": {
      "destination_uuid": "A unique identifier for a destination."
    }
  },
  "monitoring_delete_destination": {
    "accessPath": [
      "monitoringDeleteDestination"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/monitoring/sinks/destinations/{destination_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "destination_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Logging Destination",
    "parameterDescriptions": {
      "destination_uuid": "A unique identifier for a destination."
    }
  },
  "monitoring_create_sink": {
    "accessPath": [
      "monitoringCreateSink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "destination_uuid",
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/monitoring/sinks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Sink"
  },
  "monitoring_list_sinks": {
    "accessPath": [
      "monitoringListSinks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/sinks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "resource_id"
    ],
    "description": "Lists all sinks",
    "parameterDescriptions": {
      "resource_id": "A unique URN for a resource."
    }
  },
  "monitoring_get_sink": {
    "accessPath": [
      "monitoringGetSink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/monitoring/sinks/{sink_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "sink_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Sink",
    "parameterDescriptions": {
      "sink_uuid": "A unique identifier for a sink."
    }
  },
  "monitoring_delete_sink": {
    "accessPath": [
      "monitoringDeleteSink"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/monitoring/sinks/{sink_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "sink_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Sink",
    "parameterDescriptions": {
      "sink_uuid": "A unique identifier for a sink."
    }
  },
  "nfs_create": {
    "accessPath": [
      "nfsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "size_gib",
      "region",
      "vpc_ids",
      "performance_tier"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/nfs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new NFS share"
  },
  "nfs_list": {
    "accessPath": [
      "nfsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region"
    ],
    "description": "List NFS shares per region",
    "parameterDescriptions": {
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides."
    }
  },
  "nfs_get": {
    "accessPath": [
      "nfsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs/{nfs_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "nfs_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region"
    ],
    "description": "Get an NFS share",
    "parameterDescriptions": {
      "nfs_id": "The unique ID of the NFS share",
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides."
    }
  },
  "nfs_delete": {
    "accessPath": [
      "nfsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/nfs/{nfs_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "nfs_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region"
    ],
    "description": "Delete an NFS share",
    "parameterDescriptions": {
      "nfs_id": "The unique ID of the NFS share",
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides."
    }
  },
  "nfs_create_action": {
    "accessPath": [
      "nfsCreateAction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/nfs/{nfs_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "nfs_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate an NFS action",
    "parameterDescriptions": {
      "nfs_id": "The unique ID of the NFS share"
    }
  },
  "nfs_list_snapshot": {
    "accessPath": [
      "nfsListSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region",
      "share_id"
    ],
    "description": "List NFS snapshots per region",
    "parameterDescriptions": {
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.",
      "share_id": "The unique ID of an NFS share. If provided, only snapshots of this specific share will be returned."
    }
  },
  "nfs_get_snapshot": {
    "accessPath": [
      "nfsGetSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs/snapshots/{nfs_snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "nfs_snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region"
    ],
    "description": "Get an NFS snapshot by ID",
    "parameterDescriptions": {
      "nfs_snapshot_id": "The unique ID of the NFS snapshot",
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides."
    }
  },
  "nfs_delete_snapshot": {
    "accessPath": [
      "nfsDeleteSnapshot"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/nfs/snapshots/{nfs_snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "nfs_snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "region"
    ],
    "description": "Delete an NFS snapshot",
    "parameterDescriptions": {
      "nfs_snapshot_id": "The unique ID of the NFS snapshot",
      "region": "The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides."
    }
  },
  "nfs_create_access_point": {
    "accessPath": [
      "nfsCreateAccessPoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "path",
      "access_policy",
      "vpc_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/nfs/shares/{share_id}/access_points",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "share_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an NFS access point",
    "parameterDescriptions": {
      "share_id": "The unique identifier of the NFS share."
    }
  },
  "nfs_list_access_points": {
    "accessPath": [
      "nfsListAccessPoints"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs/shares/{share_id}/access_points",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "share_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "status"
    ],
    "description": "List NFS access points for a share",
    "parameterDescriptions": {
      "share_id": "The unique identifier of the NFS share.",
      "status": "Filter access points by status."
    }
  },
  "nfs_get_access_point": {
    "accessPath": [
      "nfsGetAccessPoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/nfs/access_points/{access_point_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "access_point_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an NFS access point",
    "parameterDescriptions": {
      "access_point_id": "The unique identifier of the NFS access point."
    }
  },
  "nfs_delete_access_point": {
    "accessPath": [
      "nfsDeleteAccessPoint"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/nfs/access_points/{access_point_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "access_point_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an NFS access point",
    "parameterDescriptions": {
      "access_point_id": "The unique identifier of the NFS access point."
    }
  },
  "organizations_create_team": {
    "accessPath": [
      "organizationsCreateTeam"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "invitations"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/organizations/team",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Team in an Organization"
  },
  "organizations_list_teams": {
    "accessPath": [
      "organizationsListTeams"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/organizations/teams",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Teams in an Organization"
  },
  "partnerAttachments_list": {
    "accessPath": [
      "partnerAttachmentsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/partner_network_connect/attachments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List all partner attachments",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "partnerAttachments_create": {
    "accessPath": [
      "partnerAttachmentsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "connection_bandwidth_in_mbps",
      "region",
      "naas_provider",
      "vpc_ids",
      "parent_uuid",
      "bgp",
      "redundancy_zone"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/partner_network_connect/attachments",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new partner attachment"
  },
  "partnerAttachments_get": {
    "accessPath": [
      "partnerAttachmentsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an existing partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "partnerAttachments_patch": {
    "accessPath": [
      "partnerAttachmentsPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an existing partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "partnerAttachments_delete": {
    "accessPath": [
      "partnerAttachmentsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an existing partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "partnerAttachments_get_bgp_auth_key": {
    "accessPath": [
      "partnerAttachmentsGetBgpAuthKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}/bgp_auth_key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get current BGP auth key for the partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "partnerAttachments_list_remote_routes": {
    "accessPath": [
      "partnerAttachmentsListRemoteRoutes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}/remote_routes",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List remote routes for a partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "partnerAttachments_get_service_key": {
    "accessPath": [
      "partnerAttachmentsGetServiceKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}/service_key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get the current service key for the partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "partnerAttachments_create_service_key": {
    "accessPath": [
      "partnerAttachmentsCreateServiceKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/partner_network_connect/attachments/{pa_id}/service_key",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "pa_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Regenerate the service key for the partner attachment",
    "parameterDescriptions": {
      "pa_id": "A unique identifier for a partner attachment."
    }
  },
  "projects_list": {
    "accessPath": [
      "projectsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Projects",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "projects_create": {
    "accessPath": [
      "projectsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "owner_uuid",
      "owner_id",
      "name",
      "description",
      "purpose",
      "environment",
      "created_at",
      "updated_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Project"
  },
  "projects_get_default": {
    "accessPath": [
      "projectsGetDefault"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/projects/default",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Default Project"
  },
  "projects_update_default": {
    "accessPath": [
      "projectsUpdateDefault"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "owner_uuid",
      "owner_id",
      "name",
      "description",
      "purpose",
      "environment",
      "created_at",
      "updated_at",
      "is_default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/projects/default",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update the Default Project"
  },
  "projects_patch_default": {
    "accessPath": [
      "projectsPatchDefault"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "owner_uuid",
      "owner_id",
      "name",
      "description",
      "purpose",
      "environment",
      "created_at",
      "updated_at",
      "is_default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/projects/default",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch the Default Project"
  },
  "projects_get": {
    "accessPath": [
      "projectsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Project",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project."
    }
  },
  "projects_update": {
    "accessPath": [
      "projectsUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "owner_uuid",
      "owner_id",
      "name",
      "description",
      "purpose",
      "environment",
      "created_at",
      "updated_at",
      "is_default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Project",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project."
    }
  },
  "projects_patch": {
    "accessPath": [
      "projectsPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "owner_uuid",
      "owner_id",
      "name",
      "description",
      "purpose",
      "environment",
      "created_at",
      "updated_at",
      "is_default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Patch a Project",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project."
    }
  },
  "projects_delete": {
    "accessPath": [
      "projectsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Existing Project",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project."
    }
  },
  "projects_list_resources": {
    "accessPath": [
      "projectsListResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/projects/{project_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Project Resources",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "projects_assign_resources": {
    "accessPath": [
      "projectsAssignResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/projects/{project_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Assign Resources to a Project",
    "parameterDescriptions": {
      "project_id": "A unique identifier for a project."
    }
  },
  "projects_list_resources_default": {
    "accessPath": [
      "projectsListResourcesDefault"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/projects/default/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Default Project Resources"
  },
  "projects_assign_resources_default": {
    "accessPath": [
      "projectsAssignResourcesDefault"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/projects/default/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Assign Resources to Default Project"
  },
  "regions_list": {
    "accessPath": [
      "regionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/regions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Data Center Regions",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "registries_list": {
    "accessPath": [
      "registriesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Container Registries"
  },
  "registries_create": {
    "accessPath": [
      "registriesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "subscription_tier_slug",
      "region"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registries",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Container Registry"
  },
  "registries_get": {
    "accessPath": [
      "registriesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Container Registry By Name",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registries_delete": {
    "accessPath": [
      "registriesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registries/{registry_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry By Name",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registries_get_dockerCredentials": {
    "accessPath": [
      "registriesGetDockerCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/docker-credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Docker Credentials By Registry Name",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registries_get_subscription": {
    "accessPath": [
      "registriesGetSubscription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Subscription Information"
  },
  "registries_update_subscription": {
    "accessPath": [
      "registriesUpdateSubscription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tier_slug"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registries/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Subscription Tier"
  },
  "registries_get_options": {
    "accessPath": [
      "registriesGetOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/options",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Registry Options (Subscription Tiers and Available Regions)"
  },
  "registries_get_garbageCollection": {
    "accessPath": [
      "registriesGetGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/garbage-collection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Active Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registries_run_garbageCollection": {
    "accessPath": [
      "registriesRunGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registries/{registry_name}/garbage-collection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registries_list_garbageCollections": {
    "accessPath": [
      "registriesListGarbageCollections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/garbage-collections",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Garbage Collections",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "registries_update_garbageCollection": {
    "accessPath": [
      "registriesUpdateGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cancel"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/registries/{registry_name}/garbage-collection/{garbage_collection_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "garbage_collection_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "garbage_collection_uuid": "The UUID of a garbage collection run."
    }
  },
  "registries_list_repositoriesV2": {
    "accessPath": [
      "registriesListRepositoriesV2"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/repositoriesV2",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "page_token"
    ],
    "description": "List All Container Registry Repositories (V2)",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return. Ignored when 'page_token' is provided.",
      "page_token": "Token to retrieve of the next or previous set of results more quickly than using 'page'.",
      "registry_name": "The name of a container registry."
    }
  },
  "registries_delete_repository": {
    "accessPath": [
      "registriesDeleteRepository"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registries/{registry_name}/repositories/{repository_name}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry Repository",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."
    }
  },
  "registries_list_repositoryTags": {
    "accessPath": [
      "registriesListRepositoryTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/repositories/{repository_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Container Registry Repository Tags",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."
    }
  },
  "registries_delete_repositoryTag": {
    "accessPath": [
      "registriesDeleteRepositoryTag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registries/{registry_name}/repositories/{repository_name}/tags/{repository_tag}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name",
      "repository_tag"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry Repository Tag",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
      "repository_tag": "The name of a container registry repository tag."
    }
  },
  "registries_list_repositoryManifests": {
    "accessPath": [
      "registriesListRepositoryManifests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registries/{registry_name}/repositories/{repository_name}/digests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Container Registry Repository Manifests",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."
    }
  },
  "registries_delete_repositoryManifest": {
    "accessPath": [
      "registriesDeleteRepositoryManifest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registries/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name",
      "manifest_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry Repository Manifest",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
      "manifest_digest": "The manifest digest of a container registry repository tag."
    }
  },
  "registries_validate_name": {
    "accessPath": [
      "registriesValidateName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registries/validate-name",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate a Container Registry Name"
  },
  "registry_get": {
    "accessPath": [
      "registryGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Container Registry Information"
  },
  "registry_create": {
    "accessPath": [
      "registryCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "subscription_tier_slug",
      "region"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Container Registry"
  },
  "registry_delete": {
    "accessPath": [
      "registryDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registry",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry"
  },
  "registry_get_subscription": {
    "accessPath": [
      "registryGetSubscription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Subscription"
  },
  "registry_update_subscription": {
    "accessPath": [
      "registryUpdateSubscription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tier_slug"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registry/subscription",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Subscription Tier"
  },
  "registry_get_dockerCredentials": {
    "accessPath": [
      "registryGetDockerCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/docker-credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "expiry_seconds",
      "read_write"
    ],
    "description": "Get Docker Credentials for Container Registry",
    "parameterDescriptions": {
      "expiry_seconds": "The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire.",
      "read_write": "By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials."
    }
  },
  "registry_validate_name": {
    "accessPath": [
      "registryValidateName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registry/validate-name",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Validate a Container Registry Name"
  },
  "registry_list_repositories": {
    "accessPath": [
      "registryListRepositories"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/repositories",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Container Registry Repositories",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "registry_name": "The name of a container registry."
    }
  },
  "registry_list_repositoriesV2": {
    "accessPath": [
      "registryListRepositoriesV2"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/repositoriesV2",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "page_token"
    ],
    "description": "List All Container Registry Repositories (V2)",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return. Ignored when 'page_token' is provided.",
      "page_token": "Token to retrieve of the next or previous set of results more quickly than using 'page'.",
      "registry_name": "The name of a container registry."
    }
  },
  "registry_list_repositoryTags": {
    "accessPath": [
      "registryListRepositoryTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/repositories/{repository_name}/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Container Registry Repository Tags",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."
    }
  },
  "registry_delete_repositoryTag": {
    "accessPath": [
      "registryDeleteRepositoryTag"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name",
      "repository_tag"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry Repository Tag",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
      "repository_tag": "The name of a container registry repository tag."
    }
  },
  "registry_list_repositoryManifests": {
    "accessPath": [
      "registryListRepositoryManifests"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/repositories/{repository_name}/digests",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Container Registry Repository Manifests",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."
    }
  },
  "registry_delete_repositoryManifest": {
    "accessPath": [
      "registryDeleteRepositoryManifest"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "repository_name",
      "manifest_digest"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Container Registry Repository Manifest",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "repository_name": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
      "manifest_digest": "The manifest digest of a container registry repository tag."
    }
  },
  "registry_run_garbageCollection": {
    "accessPath": [
      "registryRunGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "type"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/registry/{registry_name}/garbage-collection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registry_get_garbageCollection": {
    "accessPath": [
      "registryGetGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/garbage-collection",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Active Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry."
    }
  },
  "registry_list_garbageCollections": {
    "accessPath": [
      "registryListGarbageCollections"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/{registry_name}/garbage-collections",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Garbage Collections",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "registry_update_garbageCollection": {
    "accessPath": [
      "registryUpdateGarbageCollection"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "cancel"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "registry_name",
      "garbage_collection_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Garbage Collection",
    "parameterDescriptions": {
      "registry_name": "The name of a container registry.",
      "garbage_collection_uuid": "The UUID of a garbage collection run."
    }
  },
  "registry_get_options": {
    "accessPath": [
      "registryGetOptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/registry/options",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Registry Options (Subscription Tiers and Available Regions)"
  },
  "droplets_list_neighborsIds": {
    "accessPath": [
      "dropletsListNeighborsIds"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reports/droplet_neighbors_ids",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Droplet Neighbors"
  },
  "reservedIPs_list": {
    "accessPath": [
      "reservedIPsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ips",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Reserved IPs",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "reservedIPs_create": {
    "accessPath": [
      "reservedIPsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/reserved_ips",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Reserved IP"
  },
  "reservedIPs_get": {
    "accessPath": [
      "reservedIPsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ips/{reserved_ip}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Reserved IP",
    "parameterDescriptions": {
      "reserved_ip": "A reserved IP address."
    }
  },
  "reservedIPs_delete": {
    "accessPath": [
      "reservedIPsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/reserved_ips/{reserved_ip}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Reserved IP",
    "parameterDescriptions": {
      "reserved_ip": "A reserved IP address."
    }
  },
  "reservedIPsActions_list": {
    "accessPath": [
      "reservedIPsActionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ips/{reserved_ip}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List All Actions for a Reserved IP",
    "parameterDescriptions": {
      "reserved_ip": "A reserved IP address."
    }
  },
  "reservedIPsActions_post": {
    "accessPath": [
      "reservedIPsActionsPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/reserved_ips/{reserved_ip}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ip"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate a Reserved IP Action",
    "parameterDescriptions": {
      "reserved_ip": "A reserved IP address."
    }
  },
  "reservedIPsActions_get": {
    "accessPath": [
      "reservedIPsActionsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ips/{reserved_ip}/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ip",
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Reserved IP Action",
    "parameterDescriptions": {
      "reserved_ip": "A reserved IP address.",
      "action_id": "A unique numeric ID that can be used to identify and reference an action."
    }
  },
  "reservedIPv6_list": {
    "accessPath": [
      "reservedIPv6List"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ipv6",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Reserved IPv6s",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "reservedIPv6_create": {
    "accessPath": [
      "reservedIPv6Create"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "region_slug"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/reserved_ipv6",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Reserved IPv6"
  },
  "reservedIPv6_get": {
    "accessPath": [
      "reservedIPv6Get"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/reserved_ipv6/{reserved_ipv6}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ipv6"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Reserved IPv6",
    "parameterDescriptions": {
      "reserved_ipv6": "A reserved IPv6 address."
    }
  },
  "reservedIPv6_delete": {
    "accessPath": [
      "reservedIPv6Delete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/reserved_ipv6/{reserved_ipv6}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ipv6"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Reserved IPv6",
    "parameterDescriptions": {
      "reserved_ipv6": "A reserved IPv6 address."
    }
  },
  "reservedIPv6Actions_post": {
    "accessPath": [
      "reservedIPv6ActionsPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/reserved_ipv6/{reserved_ipv6}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "reserved_ipv6"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Initiate a Reserved IPv6 Action",
    "parameterDescriptions": {
      "reserved_ipv6": "A reserved IPv6 address."
    }
  },
  "byoipPrefixes_create": {
    "accessPath": [
      "byoipPrefixesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "prefix",
      "region",
      "signature"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/byoip_prefixes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a BYOIP Prefix"
  },
  "byoipPrefixes_list": {
    "accessPath": [
      "byoipPrefixesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/byoip_prefixes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List BYOIP Prefixes",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "byoipPrefixes_get": {
    "accessPath": [
      "byoipPrefixesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/byoip_prefixes/{byoip_prefix_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "byoip_prefix_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a BYOIP Prefix",
    "parameterDescriptions": {
      "byoip_prefix_uuid": "The unique identifier for the BYOIP Prefix."
    }
  },
  "byoipPrefixes_delete": {
    "accessPath": [
      "byoipPrefixesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/byoip_prefixes/{byoip_prefix_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "byoip_prefix_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a BYOIP Prefix",
    "parameterDescriptions": {
      "byoip_prefix_uuid": "The unique identifier for the BYOIP Prefix."
    }
  },
  "byoipPrefixes_patch": {
    "accessPath": [
      "byoipPrefixesPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "advertise"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/byoip_prefixes/{byoip_prefix_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "byoip_prefix_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a BYOIP Prefix",
    "parameterDescriptions": {
      "byoip_prefix_uuid": "A unique identifier for a BYOIP prefix."
    }
  },
  "byoipPrefixes_list_resources": {
    "accessPath": [
      "byoipPrefixesListResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/byoip_prefixes/{byoip_prefix_uuid}/ips",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "byoip_prefix_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List BYOIP Prefix Resources",
    "parameterDescriptions": {
      "byoip_prefix_uuid": "The unique identifier for the BYOIP Prefix.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "security_list_scans": {
    "accessPath": [
      "securityListScans"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/security/scans",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Scans",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "security_create_scan": {
    "accessPath": [
      "securityCreateScan"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/security/scans",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Scan"
  },
  "security_get_scan": {
    "accessPath": [
      "securityGetScan"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/security/scans/{scan_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "scan_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "severity",
      "per_page",
      "page",
      "type"
    ],
    "description": "Get Scan",
    "parameterDescriptions": {
      "scan_id": "The scan UUID.",
      "severity": "The finding severity level to include.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "type": "The finding type to include."
    }
  },
  "security_get_latest_scan": {
    "accessPath": [
      "securityGetLatestScan"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/security/scans/latest",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "severity",
      "type"
    ],
    "description": "Get Latest Scan",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "severity": "The finding severity level to include.",
      "type": "The finding type to include."
    }
  },
  "security_create_scan_rule": {
    "accessPath": [
      "securityCreateScanRule"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "resource"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/security/scans/rules",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Scan Rule"
  },
  "security_list_scan_finding_affected_resources": {
    "accessPath": [
      "securityListScanFindingAffectedResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/security/scans/{scan_id}/findings/{finding_uuid}/affected_resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "scan_id",
      "finding_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Finding Affected Resources",
    "parameterDescriptions": {
      "scan_id": "The scan UUID.",
      "finding_uuid": "The finding UUID.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "security_list_settings": {
    "accessPath": [
      "securityListSettings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/security/settings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Settings",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "security_update_settings_plan": {
    "accessPath": [
      "securityUpdateSettingsPlan"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tier_coverage"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/security/settings/plan",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Plan"
  },
  "security_create_suppression": {
    "accessPath": [
      "securityCreateSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "rule_uuid",
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/security/settings/suppressions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Suppression"
  },
  "security_delete_suppression": {
    "accessPath": [
      "securityDeleteSuppression"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/security/settings/suppressions/{suppression_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "suppression_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Suppression",
    "parameterDescriptions": {
      "suppression_uuid": "The suppression UUID to remove."
    }
  },
  "sizes_list": {
    "accessPath": [
      "sizesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/sizes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Droplet Sizes",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "snapshots_list": {
    "accessPath": [
      "snapshotsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "resource_type"
    ],
    "description": "List All Snapshots",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "resource_type": "Used to filter snapshots by a resource type."
    }
  },
  "snapshots_get": {
    "accessPath": [
      "snapshotsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Snapshot",
    "parameterDescriptions": {
      "snapshot_id": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot."
    }
  },
  "snapshots_delete": {
    "accessPath": [
      "snapshotsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Snapshot",
    "parameterDescriptions": {
      "snapshot_id": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot."
    }
  },
  "spacesKey_list": {
    "accessPath": [
      "spacesKeyList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/spaces/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "sort",
      "sort_direction",
      "name",
      "bucket",
      "permission"
    ],
    "description": "List Spaces Access Keys",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "sort": "The field to sort by.",
      "sort_direction": "The direction to sort by. Possible values are `asc` or `desc`.",
      "name": "The access key's name.",
      "bucket": "The bucket's name.",
      "permission": "The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string."
    }
  },
  "spacesKey_create": {
    "accessPath": [
      "spacesKeyCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "grants",
      "access_key",
      "created_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/spaces/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Spaces Access Key"
  },
  "spacesKey_get": {
    "accessPath": [
      "spacesKeyGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/spaces/keys/{access_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "access_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a Spaces Access Key",
    "parameterDescriptions": {
      "access_key": "The access key's ID."
    }
  },
  "spacesKey_delete": {
    "accessPath": [
      "spacesKeyDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/spaces/keys/{access_key}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "access_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Spaces Access Key",
    "parameterDescriptions": {
      "access_key": "The access key's ID."
    }
  },
  "spacesKey_update": {
    "accessPath": [
      "spacesKeyUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "grants",
      "access_key",
      "created_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/spaces/keys/{access_key}",
    "pathConflictKeys": [
      "access_key"
    ],
    "pathParameterKeys": [
      "access_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Spaces Access Keys",
    "parameterDescriptions": {
      "access_key": "The access key's ID."
    }
  },
  "spacesKey_patch": {
    "accessPath": [
      "spacesKeyPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "grants",
      "access_key",
      "created_at"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/spaces/keys/{access_key}",
    "pathConflictKeys": [
      "access_key"
    ],
    "pathParameterKeys": [
      "access_key"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Spaces Access Keys",
    "parameterDescriptions": {
      "access_key": "The access key's ID."
    }
  },
  "tags_list": {
    "accessPath": [
      "tagsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Tags",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "tags_create": {
    "accessPath": [
      "tagsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/tags",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Tag"
  },
  "tags_get": {
    "accessPath": [
      "tagsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/tags/{tag_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a Tag",
    "parameterDescriptions": {
      "tag_id": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."
    }
  },
  "tags_delete": {
    "accessPath": [
      "tagsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/tags/{tag_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Tag",
    "parameterDescriptions": {
      "tag_id": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."
    }
  },
  "tags_assign_resources": {
    "accessPath": [
      "tagsAssignResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/tags/{tag_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Tag a Resource",
    "parameterDescriptions": {
      "tag_id": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."
    }
  },
  "tags_unassign_resources": {
    "accessPath": [
      "tagsUnassignResources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "resources"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/tags/{tag_id}/resources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "tag_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Untag a Resource",
    "parameterDescriptions": {
      "tag_id": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."
    }
  },
  "vectorDatabases_list": {
    "accessPath": [
      "vectorDatabasesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vector-databases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List All Vector Databases"
  },
  "vectorDatabases_create": {
    "accessPath": [
      "vectorDatabasesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "project_id",
      "region",
      "size",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vector-databases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Vector Database"
  },
  "vectorDatabases_get": {
    "accessPath": [
      "vectorDatabasesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vector-databases/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Vector Database",
    "parameterDescriptions": {
      "id": "ID of the vector database."
    }
  },
  "vectorDatabases_update": {
    "accessPath": [
      "vectorDatabasesUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config",
      "id",
      "project_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/vector-databases/{id}",
    "pathConflictKeys": [
      "id"
    ],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Vector Database",
    "parameterDescriptions": {
      "id": "ID of the vector database."
    }
  },
  "vectorDatabases_delete": {
    "accessPath": [
      "vectorDatabasesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/vector-databases/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Vector Database",
    "parameterDescriptions": {
      "id": "ID of the vector database."
    }
  },
  "vectorDatabases_list_backups": {
    "accessPath": [
      "vectorDatabasesListBackups"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vector-databases/{id}/backups",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Backups for a Vector Database",
    "parameterDescriptions": {
      "id": "Required. ID of the vector database."
    }
  },
  "vectorDatabases_get_restore_status": {
    "accessPath": [
      "vectorDatabasesGetRestoreStatus"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vector-databases/{id}/backups/{backup_id}/restore",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id",
      "backup_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the Status of a Restore",
    "parameterDescriptions": {
      "id": "Required. ID of the vector database.",
      "backup_id": "Required. ID of the backup being restored."
    }
  },
  "vectorDatabases_post_restore_backup": {
    "accessPath": [
      "vectorDatabasesPostRestoreBackup"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "backup_id",
      "id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vector-databases/{id}/backups/{backup_id}/restore",
    "pathConflictKeys": [
      "id",
      "backup_id"
    ],
    "pathParameterKeys": [
      "id",
      "backup_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Restore a Vector Database from a Backup",
    "parameterDescriptions": {
      "id": "Required. ID of the vector database.",
      "backup_id": "Required. ID of the backup to restore from."
    }
  },
  "vectorDatabases_get_credentials": {
    "accessPath": [
      "vectorDatabasesGetCredentials"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vector-databases/{id}/credentials",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Admin Credentials for a Vector Database",
    "parameterDescriptions": {
      "id": "ID of the vector database."
    }
  },
  "vectorDatabases_post_resize": {
    "accessPath": [
      "vectorDatabasesPostResize"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "size"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vector-databases/{id}/resize",
    "pathConflictKeys": [
      "id"
    ],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Resize a Vector Database",
    "parameterDescriptions": {
      "id": "Required. ID of the vector database to resize."
    }
  },
  "vectorDatabases_update_tags": {
    "accessPath": [
      "vectorDatabasesUpdateTags"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/vector-databases/{id}/tags",
    "pathConflictKeys": [
      "id"
    ],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Tags on a Vector Database",
    "parameterDescriptions": {
      "id": "Required. ID of the vector database to update tags for."
    }
  },
  "volumes_list": {
    "accessPath": [
      "volumesList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "region",
      "per_page",
      "page"
    ],
    "description": "List All Block Storage Volumes",
    "parameterDescriptions": {
      "name": "The block storage volume's name.",
      "region": "The slug identifier for the region where the resource is available.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumes_create": {
    "accessPath": [
      "volumesCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Block Storage Volume"
  },
  "volumes_delete_byName": {
    "accessPath": [
      "volumesDeleteByName"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/volumes",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "name",
      "region"
    ],
    "description": "Delete a Block Storage Volume by Name",
    "parameterDescriptions": {
      "name": "The block storage volume's name.",
      "region": "The slug identifier for the region where the resource is available."
    }
  },
  "volumeActions_post": {
    "accessPath": [
      "volumeActionsPost"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/volumes/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "Initiate A Block Storage Action By Volume Name",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumeSnapshots_get_byId": {
    "accessPath": [
      "volumeSnapshotsGetById"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Volume Snapshot",
    "parameterDescriptions": {
      "snapshot_id": "The unique identifier for the snapshot."
    }
  },
  "volumeSnapshots_delete_byId": {
    "accessPath": [
      "volumeSnapshotsDeleteById"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/volumes/snapshots/{snapshot_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "snapshot_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Volume Snapshot",
    "parameterDescriptions": {
      "snapshot_id": "The unique identifier for the snapshot."
    }
  },
  "volumes_get": {
    "accessPath": [
      "volumesGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes/{volume_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Block Storage Volume",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume."
    }
  },
  "volumes_delete": {
    "accessPath": [
      "volumesDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/volumes/{volume_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Block Storage Volume",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume."
    }
  },
  "volumeActions_list": {
    "accessPath": [
      "volumeActionsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes/{volume_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Actions for a Volume",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumeActions_post_byId": {
    "accessPath": [
      "volumeActionsPostById"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/volumes/{volume_id}/actions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "Initiate A Block Storage Action By Volume Id",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumeActions_get": {
    "accessPath": [
      "volumeActionsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes/{volume_id}/actions/{action_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id",
      "action_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "Retrieve an Existing Volume Action",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume.",
      "action_id": "A unique numeric ID that can be used to identify and reference an action.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumeSnapshots_list": {
    "accessPath": [
      "volumeSnapshotsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/volumes/{volume_id}/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List Snapshots for a Volume",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "volumeSnapshots_create": {
    "accessPath": [
      "volumeSnapshotsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/volumes/{volume_id}/snapshots",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "volume_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Snapshot from a Volume",
    "parameterDescriptions": {
      "volume_id": "The ID of the block storage volume."
    }
  },
  "vpcs_list": {
    "accessPath": [
      "vpcsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpcs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All VPCs",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "vpcs_create": {
    "accessPath": [
      "vpcsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "region",
      "ip_range"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vpcs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New VPC"
  },
  "vpcs_get": {
    "accessPath": [
      "vpcsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpcs/{vpc_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC."
    }
  },
  "vpcs_update": {
    "accessPath": [
      "vpcsUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/vpcs/{vpc_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC."
    }
  },
  "vpcs_patch": {
    "accessPath": [
      "vpcsPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "description",
      "default"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/vpcs/{vpc_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Partially Update a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC."
    }
  },
  "vpcs_delete": {
    "accessPath": [
      "vpcsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/vpcs/{vpc_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC."
    }
  },
  "vpcs_list_members": {
    "accessPath": [
      "vpcsListMembers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpcs/{vpc_id}/members",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "resource_type",
      "per_page",
      "page"
    ],
    "description": "List the Member Resources of a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC.",
      "resource_type": "Used to filter VPC members by a resource type.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "vpcs_list_peerings": {
    "accessPath": [
      "vpcsListPeerings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpcs/{vpc_id}/peerings",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List the Peerings of a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "vpcs_create_peerings": {
    "accessPath": [
      "vpcsCreatePeerings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "vpc_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vpcs/{vpc_id}/peerings",
    "pathConflictKeys": [
      "vpc_id"
    ],
    "pathParameterKeys": [
      "vpc_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Peering with a VPC",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC."
    }
  },
  "vpcs_patch_peerings": {
    "accessPath": [
      "vpcsPatchPeerings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/vpcs/{vpc_id}/peerings/{vpc_peering_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_id",
      "vpc_peering_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a VPC Peering",
    "parameterDescriptions": {
      "vpc_id": "A unique identifier for a VPC.",
      "vpc_peering_id": "A unique identifier for a VPC peering."
    }
  },
  "vpcPeerings_list": {
    "accessPath": [
      "vpcPeeringsList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpc_peerings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "region"
    ],
    "description": "List All VPC Peerings",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "region": "The slug identifier for the region where the resource is available."
    }
  },
  "vpcPeerings_create": {
    "accessPath": [
      "vpcPeeringsCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "vpc_ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vpc_peerings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New VPC Peering"
  },
  "vpcPeerings_get": {
    "accessPath": [
      "vpcPeeringsGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpc_peerings/{vpc_peering_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_peering_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing VPC Peering",
    "parameterDescriptions": {
      "vpc_peering_id": "A unique identifier for a VPC peering."
    }
  },
  "vpcPeerings_patch": {
    "accessPath": [
      "vpcPeeringsPatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/vpc_peerings/{vpc_peering_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_peering_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a VPC peering",
    "parameterDescriptions": {
      "vpc_peering_id": "A unique identifier for a VPC peering."
    }
  },
  "vpcPeerings_delete": {
    "accessPath": [
      "vpcPeeringsDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/vpc_peerings/{vpc_peering_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vpc_peering_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a VPC peering",
    "parameterDescriptions": {
      "vpc_peering_id": "A unique identifier for a VPC peering."
    }
  },
  "vpcnatgateways_list": {
    "accessPath": [
      "vpcnatgatewaysList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpc_nat_gateways",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page",
      "state",
      "region",
      "type",
      "name"
    ],
    "description": "List All VPC NAT Gateways",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return.",
      "state": "The current state of the VPC NAT gateway.",
      "region": "The region where the VPC NAT gateway is located.",
      "type": "The type of the VPC NAT gateway.",
      "name": "The name of the VPC NAT gateway."
    }
  },
  "vpcnatgateways_create": {
    "accessPath": [
      "vpcnatgatewaysCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "region",
      "size",
      "vpcs",
      "udp_timeout_seconds",
      "icmp_timeout_seconds",
      "tcp_timeout_seconds"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/vpc_nat_gateways",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New VPC NAT Gateway"
  },
  "vpcnatgateways_get": {
    "accessPath": [
      "vpcnatgatewaysGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/vpc_nat_gateways/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing VPC NAT Gateway",
    "parameterDescriptions": {
      "id": "The unique identifier of the VPC NAT gateway."
    }
  },
  "vpcnatgateways_update": {
    "accessPath": [
      "vpcnatgatewaysUpdate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "size",
      "vpcs",
      "udp_timeout_seconds",
      "icmp_timeout_seconds",
      "tcp_timeout_seconds"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/vpc_nat_gateways/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update VPC NAT Gateway",
    "parameterDescriptions": {
      "id": "The unique identifier of the VPC NAT gateway."
    }
  },
  "vpcnatgateways_delete": {
    "accessPath": [
      "vpcnatgatewaysDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/vpc_nat_gateways/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete VPC NAT Gateway",
    "parameterDescriptions": {
      "id": "The unique identifier of the VPC NAT gateway."
    }
  },
  "uptime_list_checks": {
    "accessPath": [
      "uptimeListChecks"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/uptime/checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Checks",
    "parameterDescriptions": {
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "uptime_create_check": {
    "accessPath": [
      "uptimeCreateCheck"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "target",
      "regions",
      "enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/uptime/checks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Check"
  },
  "uptime_get_check": {
    "accessPath": [
      "uptimeGetCheck"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/uptime/checks/{check_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Check",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check."
    }
  },
  "uptime_update_check": {
    "accessPath": [
      "uptimeUpdateCheck"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "target",
      "regions",
      "enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/uptime/checks/{check_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Check",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check."
    }
  },
  "uptime_delete_check": {
    "accessPath": [
      "uptimeDeleteCheck"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/uptime/checks/{check_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Check",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check."
    }
  },
  "uptime_get_checkState": {
    "accessPath": [
      "uptimeGetCheckState"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/uptime/checks/{check_id}/state",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Check State",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check."
    }
  },
  "uptime_list_alerts": {
    "accessPath": [
      "uptimeListAlerts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/uptime/checks/{check_id}/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "per_page",
      "page"
    ],
    "description": "List All Alerts",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check.",
      "per_page": "Number of items returned per page",
      "page": "Which 'page' of paginated results to return."
    }
  },
  "uptime_create_alert": {
    "accessPath": [
      "uptimeCreateAlert"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "id",
      "name",
      "type",
      "threshold",
      "comparison",
      "notifications",
      "period"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/uptime/checks/{check_id}/alerts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a New Alert",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check."
    }
  },
  "uptime_get_alert": {
    "accessPath": [
      "uptimeGetAlert"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id",
      "alert_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Alert",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check.",
      "alert_id": "A unique identifier for an alert."
    }
  },
  "uptime_update_alert": {
    "accessPath": [
      "uptimeUpdateAlert"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "type",
      "threshold",
      "comparison",
      "notifications",
      "period"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id",
      "alert_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an Alert",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check.",
      "alert_id": "A unique identifier for an alert."
    }
  },
  "uptime_delete_alert": {
    "accessPath": [
      "uptimeDeleteAlert"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "check_id",
      "alert_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Alert",
    "parameterDescriptions": {
      "check_id": "A unique identifier for a check.",
      "alert_id": "A unique identifier for an alert."
    }
  },
  "genai_list_agents": {
    "accessPath": [
      "genaiListAgents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "only_deployed",
      "page",
      "per_page"
    ],
    "description": "List Agents",
    "parameterDescriptions": {
      "only_deployed": "Only list agents that are deployed.",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_agent": {
    "accessPath": [
      "genaiCreateAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "anthropic_key_uuid",
      "description",
      "instruction",
      "knowledge_base_uuid",
      "mcp_servers",
      "model_provider_key_uuid",
      "model_router_uuid",
      "model_uuid",
      "name",
      "open_ai_key_uuid",
      "project_id",
      "reasoning_effort",
      "region",
      "router_preset_slug",
      "tags",
      "thinking_token_budget",
      "web_fetch_enabled",
      "web_search_enabled",
      "workspace_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an Agent"
  },
  "genai_list_agent_api_keys": {
    "accessPath": [
      "genaiListAgentApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Agent API Keys",
    "parameterDescriptions": {
      "agent_uuid": "Agent id",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_agent_api_key": {
    "accessPath": [
      "genaiCreateAgentApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/api_keys",
    "pathConflictKeys": [
      "agent_uuid"
    ],
    "pathParameterKeys": [
      "agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an Agent API Key",
    "parameterDescriptions": {
      "agent_uuid": "Agent id"
    }
  },
  "genai_update_agent_api_key": {
    "accessPath": [
      "genaiUpdateAgentApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuid",
      "api_key_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}",
    "pathConflictKeys": [
      "agent_uuid",
      "api_key_uuid"
    ],
    "pathParameterKeys": [
      "agent_uuid",
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update API Key for an Agent",
    "parameterDescriptions": {
      "agent_uuid": "Agent id",
      "api_key_uuid": "API key ID"
    }
  },
  "genai_delete_agent_api_key": {
    "accessPath": [
      "genaiDeleteAgentApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete API Key for an Agent ",
    "parameterDescriptions": {
      "agent_uuid": "A unique identifier for your agent.",
      "api_key_uuid": "API key for an agent."
    }
  },
  "genai_regenerate_agent_api_key": {
    "accessPath": [
      "genaiRegenerateAgentApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Regenerate API Key for an Agent",
    "parameterDescriptions": {
      "agent_uuid": "Agent id",
      "api_key_uuid": "API key ID"
    }
  },
  "genai_attach_agent_function": {
    "accessPath": [
      "genaiAttachAgentFunction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuid",
      "description",
      "faas_name",
      "faas_namespace",
      "function_name",
      "input_schema",
      "output_schema"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/functions",
    "pathConflictKeys": [
      "agent_uuid"
    ],
    "pathParameterKeys": [
      "agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Function Route to an Agent",
    "parameterDescriptions": {
      "agent_uuid": "Agent id"
    }
  },
  "genai_update_agent_function": {
    "accessPath": [
      "genaiUpdateAgentFunction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuid",
      "description",
      "faas_name",
      "faas_namespace",
      "function_name",
      "function_uuid",
      "input_schema",
      "output_schema"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}",
    "pathConflictKeys": [
      "agent_uuid",
      "function_uuid"
    ],
    "pathParameterKeys": [
      "agent_uuid",
      "function_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Function Route for an Agent",
    "parameterDescriptions": {
      "agent_uuid": "Agent id",
      "function_uuid": "Function id"
    }
  },
  "genai_detach_agent_function": {
    "accessPath": [
      "genaiDetachAgentFunction"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "function_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Function Route for an Agent",
    "parameterDescriptions": {
      "agent_uuid": "The id of the agent the function route belongs to.",
      "function_uuid": "The function route to be destroyed. This does not destroy the function itself."
    }
  },
  "genai_attach_agent_guardrails": {
    "accessPath": [
      "genaiAttachAgentGuardrails"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuid",
      "guardrails"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/guardrails",
    "pathConflictKeys": [
      "agent_uuid"
    ],
    "pathParameterKeys": [
      "agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Attach Guardrails to an Agent",
    "parameterDescriptions": {
      "agent_uuid": "The UUID of the agent."
    }
  },
  "genai_detach_agent_guardrail": {
    "accessPath": [
      "genaiDetachAgentGuardrail"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/guardrails/{guardrail_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "guardrail_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Detach a Guardrail from an Agent",
    "parameterDescriptions": {
      "agent_uuid": "The UUID of the agent.",
      "guardrail_uuid": "The UUID of the guardrail to detach."
    }
  },
  "genai_attach_knowledge_bases": {
    "accessPath": [
      "genaiAttachKnowledgeBases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/knowledge_bases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Attach Knowledge Bases to an Agent",
    "parameterDescriptions": {
      "agent_uuid": "A unique identifier for an agent."
    }
  },
  "genai_attach_knowledge_base": {
    "accessPath": [
      "genaiAttachKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Attach Knowledge Base to an Agent",
    "parameterDescriptions": {
      "agent_uuid": "A unique identifier for an agent.",
      "knowledge_base_uuid": "A unique identifier for a knowledge base."
    }
  },
  "genai_detach_knowledge_base": {
    "accessPath": [
      "genaiDetachKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "agent_uuid",
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Detach Knowledge Base from an Agent",
    "parameterDescriptions": {
      "agent_uuid": "Agent id",
      "knowledge_base_uuid": "Knowledge base id"
    }
  },
  "genai_attach_agent": {
    "accessPath": [
      "genaiAttachAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "child_agent_uuid",
      "if_case",
      "parent_agent_uuid",
      "route_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}",
    "pathConflictKeys": [
      "parent_agent_uuid",
      "child_agent_uuid"
    ],
    "pathParameterKeys": [
      "parent_agent_uuid",
      "child_agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Agent Route to an Agent",
    "parameterDescriptions": {
      "parent_agent_uuid": "A unique identifier for the parent agent.",
      "child_agent_uuid": "Routed agent id"
    }
  },
  "genai_update_attached_agent": {
    "accessPath": [
      "genaiUpdateAttachedAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "child_agent_uuid",
      "if_case",
      "parent_agent_uuid",
      "route_name",
      "uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}",
    "pathConflictKeys": [
      "parent_agent_uuid",
      "child_agent_uuid"
    ],
    "pathParameterKeys": [
      "parent_agent_uuid",
      "child_agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Agent Route for an Agent",
    "parameterDescriptions": {
      "parent_agent_uuid": "A unique identifier for the parent agent.",
      "child_agent_uuid": "Routed agent id"
    }
  },
  "genai_detach_agent": {
    "accessPath": [
      "genaiDetachAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "parent_agent_uuid",
      "child_agent_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Agent Route for an Agent",
    "parameterDescriptions": {
      "parent_agent_uuid": "Pagent agent id",
      "child_agent_uuid": "Routed agent id"
    }
  },
  "genai_get_agent": {
    "accessPath": [
      "genaiGetAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Agent",
    "parameterDescriptions": {
      "uuid": "Unique agent id"
    }
  },
  "genai_update_agent": {
    "accessPath": [
      "genaiUpdateAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_log_insights_enabled",
      "allowed_domains",
      "anthropic_key_uuid",
      "clear_mcp_servers",
      "conversation_logs_enabled",
      "description",
      "instruction",
      "k",
      "max_tokens",
      "mcp_servers",
      "model_provider_key_uuid",
      "model_router_uuid",
      "model_uuid",
      "name",
      "open_ai_key_uuid",
      "project_id",
      "provide_citations",
      "reasoning_effort",
      "retrieval_method",
      "router_preset_slug",
      "tags",
      "temperature",
      "thinking_token_budget",
      "top_p",
      "uuid",
      "web_fetch_enabled",
      "web_search_enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an Agent",
    "parameterDescriptions": {
      "uuid": "Unique agent id"
    }
  },
  "genai_delete_agent": {
    "accessPath": [
      "genaiDeleteAgent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an Agent",
    "parameterDescriptions": {
      "uuid": "Unique agent id"
    }
  },
  "genai_get_agent_children": {
    "accessPath": [
      "genaiGetAgentChildren"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}/child_agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "View Agent Routes",
    "parameterDescriptions": {
      "uuid": "Agent id"
    }
  },
  "genai_update_agent_deployment_visibility": {
    "accessPath": [
      "genaiUpdateAgentDeploymentVisibility"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uuid",
      "visibility"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}/deployment_visibility",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Agent Status",
    "parameterDescriptions": {
      "uuid": "Unique id"
    }
  },
  "genai_get_agent_usage": {
    "accessPath": [
      "genaiGetAgentUsage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}/usage",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start",
      "stop"
    ],
    "description": "Get Agent Usage",
    "parameterDescriptions": {
      "uuid": "Agent id",
      "start": "Return all usage data from this date.",
      "stop": "Return all usage data up to this date, if omitted, will return up to the current date."
    }
  },
  "genai_list_agent_versions": {
    "accessPath": [
      "genaiListAgentVersions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}/versions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Agent Versions",
    "parameterDescriptions": {
      "uuid": "Agent uuid",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_rollback_to_agent_version": {
    "accessPath": [
      "genaiRollbackToAgentVersion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uuid",
      "version_hash"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/agents/{uuid}/versions",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Rollback to Agent Version",
    "parameterDescriptions": {
      "uuid": "Agent unique identifier"
    }
  },
  "genai_list_anthropic_api_keys": {
    "accessPath": [
      "genaiListAnthropicApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/anthropic/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Anthropic API Keys",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_anthropic_api_key": {
    "accessPath": [
      "genaiCreateAnthropicApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "api_key",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/anthropic/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Anthropic API Key"
  },
  "genai_get_anthropic_api_key": {
    "accessPath": [
      "genaiGetAnthropicApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/anthropic/keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Anthropic API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_update_anthropic_api_key": {
    "accessPath": [
      "genaiUpdateAnthropicApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "api_key",
      "api_key_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/anthropic/keys/{api_key_uuid}",
    "pathConflictKeys": [
      "api_key_uuid"
    ],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Anthropic API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_delete_anthropic_api_key": {
    "accessPath": [
      "genaiDeleteAnthropicApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/anthropic/keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Anthropic API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_list_agents_by_anthropic_key": {
    "accessPath": [
      "genaiListAgentsByAnthropicKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/anthropic/keys/{uuid}/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List agents by Anthropic key",
    "parameterDescriptions": {
      "uuid": "Unique ID of Anthropic key",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_list_custom_models": {
    "accessPath": [
      "genaiListCustomModels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/custom_models",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page",
      "status"
    ],
    "description": "List Custom Models",
    "parameterDescriptions": {
      "page": "Page number for pagination.",
      "per_page": "Number of items per page.",
      "status": "Filter by model status."
    }
  },
  "genai_import_custom_model": {
    "accessPath": [
      "genaiImportCustomModel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "accept_hf_token_storage",
      "accept_terms_and_conditions",
      "description",
      "name",
      "preferred_gpu_region",
      "source_ref",
      "source_type",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/custom_models/import",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Import Custom Model"
  },
  "genai_get_custom_model": {
    "accessPath": [
      "genaiGetCustomModel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/custom_models/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Custom Model",
    "parameterDescriptions": {
      "uuid": "UUID of the custom model to retrieve"
    }
  },
  "genai_delete_custom_model": {
    "accessPath": [
      "genaiDeleteCustomModel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/custom_models/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Custom Model",
    "parameterDescriptions": {
      "uuid": "UUID of the custom model to delete"
    }
  },
  "genai_update_custom_model_metadata": {
    "accessPath": [
      "genaiUpdateCustomModelMetadata"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "input_modalities",
      "license",
      "name",
      "output_modalities",
      "parameters",
      "tags",
      "uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/gen-ai/custom_models/{uuid}/metadata",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Custom Model Metadata",
    "parameterDescriptions": {
      "uuid": "UUID of the custom model to update"
    }
  },
  "genai_list_evaluation_datasets": {
    "accessPath": [
      "genaiListEvaluationDatasets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "dataset_type"
    ],
    "description": "List Evaluation Datasets",
    "parameterDescriptions": {
      "dataset_type": "Filter by evaluation dataset type."
    }
  },
  "genai_create_evaluation_dataset": {
    "accessPath": [
      "genaiCreateEvaluationDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dataset_type",
      "file_upload_dataset",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/evaluation_datasets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Evaluation Dataset"
  },
  "genai_create_evaluation_dataset_file_upload_presigned_urls": {
    "accessPath": [
      "genaiCreateEvaluationDatasetFileUploadPresignedUrls"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "files"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Presigned URLs for Evaluation Dataset File Upload"
  },
  "genai_delete_evaluation_dataset": {
    "accessPath": [
      "genaiDeleteEvaluationDataset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/evaluation_datasets/{dataset_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dataset_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Evaluation Dataset",
    "parameterDescriptions": {
      "dataset_uuid": "UUID of the evaluation dataset to delete."
    }
  },
  "genai_get_evaluation_dataset_download_url": {
    "accessPath": [
      "genaiGetEvaluationDatasetDownloadUrl"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_datasets/{dataset_uuid}/download_url",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "dataset_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Download URL for Evaluation Dataset",
    "parameterDescriptions": {
      "dataset_uuid": "UUID of the evaluation dataset."
    }
  },
  "genai_list_evaluation_metrics": {
    "accessPath": [
      "genaiListEvaluationMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Evaluation Metrics"
  },
  "genai_create_custom_evaluation_metric": {
    "accessPath": [
      "genaiCreateCustomEvaluationMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config",
      "description",
      "metric_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/custom_evaluation_metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Custom Evaluation Metric"
  },
  "genai_update_custom_evaluation_metric": {
    "accessPath": [
      "genaiUpdateCustomEvaluationMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "config",
      "description",
      "metric_name",
      "metric_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/custom_evaluation_metrics/{metric_uuid}",
    "pathConflictKeys": [
      "metric_uuid"
    ],
    "pathParameterKeys": [
      "metric_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Custom Evaluation Metric",
    "parameterDescriptions": {
      "metric_uuid": "UUID of the custom metric to update."
    }
  },
  "genai_delete_custom_evaluation_metric": {
    "accessPath": [
      "genaiDeleteCustomEvaluationMetric"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/custom_evaluation_metrics/{metric_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "metric_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Custom Evaluation Metric",
    "parameterDescriptions": {
      "metric_uuid": "UUID of the custom metric to delete."
    }
  },
  "genai_run_evaluation_test_case": {
    "accessPath": [
      "genaiRunEvaluationTestCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_deployment_names",
      "agent_uuids",
      "run_name",
      "test_case_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/evaluation_runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Run an Evaluation Test Case"
  },
  "genai_get_evaluation_run": {
    "accessPath": [
      "genaiGetEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "evaluation_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Information About an Existing Evaluation Run",
    "parameterDescriptions": {
      "evaluation_run_uuid": "Evaluation run UUID."
    }
  },
  "genai_get_evaluation_run_results": {
    "accessPath": [
      "genaiGetEvaluationRunResults"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "evaluation_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "Retrieve Results of an Evaluation Run",
    "parameterDescriptions": {
      "evaluation_run_uuid": "Evaluation run UUID.",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_get_evaluation_run_prompt_results": {
    "accessPath": [
      "genaiGetEvaluationRunPromptResults"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "evaluation_run_uuid",
      "prompt_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Results of an Evaluation Run Prompt",
    "parameterDescriptions": {
      "evaluation_run_uuid": "Evaluation run UUID.",
      "prompt_id": "Prompt ID to get results for."
    }
  },
  "genai_list_evaluation_test_cases": {
    "accessPath": [
      "genaiListEvaluationTestCases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_test_cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Evaluation Test Cases"
  },
  "genai_create_evaluation_test_case": {
    "accessPath": [
      "genaiCreateEvaluationTestCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_workspace_name",
      "dataset_uuid",
      "description",
      "metrics",
      "name",
      "star_metric",
      "workspace_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/evaluation_test_cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Evaluation Test Case."
  },
  "genai_list_evaluation_runs_by_test_case": {
    "accessPath": [
      "genaiListEvaluationRunsByTestCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "evaluation_test_case_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "evaluation_test_case_version"
    ],
    "description": "List Evaluation Runs by Test Case",
    "parameterDescriptions": {
      "evaluation_test_case_uuid": "Evaluation run UUID.",
      "evaluation_test_case_version": "Version of the test case."
    }
  },
  "genai_get_evaluation_test_case": {
    "accessPath": [
      "genaiGetEvaluationTestCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/evaluation_test_cases/{test_case_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "test_case_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "evaluation_test_case_version"
    ],
    "description": "Retrieve Information About an Existing Evaluation Test Case",
    "parameterDescriptions": {
      "test_case_uuid": "The test case uuid to retrieve.",
      "evaluation_test_case_version": "Version of the test case."
    }
  },
  "genai_update_evaluation_test_case": {
    "accessPath": [
      "genaiUpdateEvaluationTestCase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "dataset_uuid",
      "description",
      "metrics",
      "name",
      "star_metric",
      "test_case_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/evaluation_test_cases/{test_case_uuid}",
    "pathConflictKeys": [
      "test_case_uuid"
    ],
    "pathParameterKeys": [
      "test_case_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update an Evaluation Test Case.",
    "parameterDescriptions": {
      "test_case_uuid": "Test-case UUID to update"
    }
  },
  "genai_list_indexing_jobs": {
    "accessPath": [
      "genaiListIndexingJobs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/indexing_jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Indexing Jobs for a Knowledge Base",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_indexing_job": {
    "accessPath": [
      "genaiCreateIndexingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data_source_uuids",
      "knowledge_base_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/indexing_jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Start Indexing Job for a Knowledge Base"
  },
  "genai_list_indexing_job_data_sources": {
    "accessPath": [
      "genaiListIndexingJobDataSources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "indexing_job_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Data Sources for Indexing Job for a Knowledge Base",
    "parameterDescriptions": {
      "indexing_job_uuid": "Uuid of the indexing job"
    }
  },
  "genai_get_indexing_job_details_signed_url": {
    "accessPath": [
      "genaiGetIndexingJobDetailsSignedUrl"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/details_signed_url",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "indexing_job_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Signed URL for Indexing Job Details",
    "parameterDescriptions": {
      "indexing_job_uuid": "The uuid of the indexing job"
    }
  },
  "genai_get_indexing_job": {
    "accessPath": [
      "genaiGetIndexingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/indexing_jobs/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Status of Indexing Job for a Knowledge Base",
    "parameterDescriptions": {
      "uuid": "Indexing job id"
    }
  },
  "genai_cancel_indexing_job": {
    "accessPath": [
      "genaiCancelIndexingJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/indexing_jobs/{uuid}/cancel",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel Indexing Job for a Knowledge Base",
    "parameterDescriptions": {
      "uuid": "A unique identifier for an indexing job."
    }
  },
  "genai_list_knowledge_bases": {
    "accessPath": [
      "genaiListKnowledgeBases"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/knowledge_bases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Knowledge Bases",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_knowledge_base": {
    "accessPath": [
      "genaiCreateKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "database_id",
      "datasources",
      "embedding_model_uuid",
      "name",
      "project_id",
      "region",
      "reranking_config",
      "size",
      "tags",
      "vpc_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/knowledge_bases",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Knowledge Base"
  },
  "genai_create_data_source_file_upload_presigned_urls": {
    "accessPath": [
      "genaiCreateDataSourceFileUploadPresignedUrls"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "files"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Presigned URLs for Data Source File Upload"
  },
  "genai_list_knowledge_base_data_sources": {
    "accessPath": [
      "genaiListKnowledgeBaseDataSources"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Data Sources for a Knowledge Base",
    "parameterDescriptions": {
      "knowledge_base_uuid": "Knowledge base id",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_knowledge_base_data_source": {
    "accessPath": [
      "genaiCreateKnowledgeBaseDataSource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "aws_data_source",
      "chunking_algorithm",
      "chunking_options",
      "knowledge_base_uuid",
      "spaces_data_source",
      "web_crawler_data_source"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources",
    "pathConflictKeys": [
      "knowledge_base_uuid"
    ],
    "pathParameterKeys": [
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Add Data Source to a Knowledge Base",
    "parameterDescriptions": {
      "knowledge_base_uuid": "Knowledge base id"
    }
  },
  "genai_update_knowledge_base_data_source": {
    "accessPath": [
      "genaiUpdateKnowledgeBaseDataSource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "chunking_algorithm",
      "chunking_options",
      "data_source_uuid",
      "knowledge_base_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}",
    "pathConflictKeys": [
      "knowledge_base_uuid",
      "data_source_uuid"
    ],
    "pathParameterKeys": [
      "knowledge_base_uuid",
      "data_source_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Data Source options",
    "parameterDescriptions": {
      "knowledge_base_uuid": "Knowledge Base ID (Path Parameter)",
      "data_source_uuid": "Data Source ID (Path Parameter)"
    }
  },
  "genai_delete_knowledge_base_data_source": {
    "accessPath": [
      "genaiDeleteKnowledgeBaseDataSource"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "knowledge_base_uuid",
      "data_source_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Data Source from a Knowledge Base",
    "parameterDescriptions": {
      "knowledge_base_uuid": "Knowledge base id",
      "data_source_uuid": "Data source id"
    }
  },
  "genai_list_indexing_jobs_by_knowledge_base": {
    "accessPath": [
      "genaiListIndexingJobsByKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/indexing_jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Indexing Jobs for a Knowledge Base",
    "parameterDescriptions": {
      "knowledge_base_uuid": "Knowledge base uuid in string"
    }
  },
  "genai_get_knowledge_base": {
    "accessPath": [
      "genaiGetKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Information About an Existing Knowledge Base",
    "parameterDescriptions": {
      "uuid": "Knowledge base id"
    }
  },
  "genai_update_knowledge_base": {
    "accessPath": [
      "genaiUpdateKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "database_id",
      "name",
      "project_id",
      "reranking_config",
      "tags",
      "uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{uuid}",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Knowledge Base",
    "parameterDescriptions": {
      "uuid": "Knowledge base id"
    }
  },
  "genai_delete_knowledge_base": {
    "accessPath": [
      "genaiDeleteKnowledgeBase"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/knowledge_bases/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Knowledge Base",
    "parameterDescriptions": {
      "uuid": "Knowledge base id"
    }
  },
  "genai_create_model_eval_dataset_upload_presigned_urls": {
    "accessPath": [
      "genaiCreateModelEvalDatasetUploadPresignedUrls"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "files"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/model_evaluation/datasets/file_upload_presigned_urls",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Presigned URLs for Model Evaluation Dataset File Upload"
  },
  "genai_list_model_evaluation_metrics": {
    "accessPath": [
      "genaiListModelEvaluationMetrics"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_metrics",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Model Evaluation Metrics"
  },
  "genai_list_model_evaluation_presets": {
    "accessPath": [
      "genaiListModelEvaluationPresets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_presets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Model Evaluation Presets"
  },
  "genai_get_model_evaluation_preset": {
    "accessPath": [
      "genaiGetModelEvaluationPreset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_presets/{eval_preset_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_preset_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve Model Evaluation Preset",
    "parameterDescriptions": {
      "eval_preset_uuid": "UUID of the evaluation preset."
    }
  },
  "genai_delete_model_evaluation_preset": {
    "accessPath": [
      "genaiDeleteModelEvaluationPreset"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/model_evaluation_presets/{eval_preset_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_preset_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Model Evaluation Preset",
    "parameterDescriptions": {
      "eval_preset_uuid": "UUID of the evaluation preset to delete."
    }
  },
  "genai_list_model_evaluation_runs": {
    "accessPath": [
      "genaiListModelEvaluationRuns"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "eval_preset_uuid",
      "status",
      "page",
      "per_page",
      "statuses",
      "candidate_types",
      "search",
      "sort_by",
      "sort_direction"
    ],
    "description": "List Model Evaluation Runs",
    "parameterDescriptions": {
      "eval_preset_uuid": "UUID of the evaluation preset to filter by.",
      "status": "Filter by evaluation run status.",
      "page": "Page number.",
      "per_page": "Items per page.",
      "statuses": "Filter by one or more statuses. Empty means no status filter.",
      "candidate_types": "Filter by one or more candidate model source types\n(serverless, dedicated, router). Empty means no candidate-type filter.",
      "search": "Free-text search across the eval run name, candidate model name and\ndataset name (case-insensitive substring match). Empty means no search.",
      "sort_by": "Field to sort by. Defaults to creation date when unspecified.",
      "sort_direction": "Sort direction. Defaults to descending when unspecified."
    }
  },
  "genai_create_model_evaluation_run": {
    "accessPath": [
      "genaiCreateModelEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "candidate_inference_config",
      "candidate_model_name",
      "candidate_model_source",
      "candidate_model_uuid",
      "dataset_uuid",
      "eval_preset_uuid",
      "judge_model_uuid",
      "metric_uuids",
      "name",
      "preset_name",
      "preset_save_sections",
      "save_as_preset",
      "source",
      "star_metric"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create Model Evaluation Run"
  },
  "genai_get_model_evaluation_run": {
    "accessPath": [
      "genaiGetModelEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs/{eval_run_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "Retrieve Model Evaluation Run",
    "parameterDescriptions": {
      "eval_run_uuid": "UUID of the evaluation run.",
      "page": "Page number for per-prompt results (defaults to 1).",
      "per_page": "Number of per-prompt results per page (defaults to 50)."
    }
  },
  "genai_delete_model_evaluation_run": {
    "accessPath": [
      "genaiDeleteModelEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs/{eval_run_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Model Evaluation Run",
    "parameterDescriptions": {
      "eval_run_uuid": "UUID of the model evaluation run to delete. The run must be in a terminal\nstatus (`successful`, `partially_successful`, `failed`, or `cancelled`).\nFor runs still in progress, either wait for the run to finish or cancel\nit, then retry the delete."
    }
  },
  "genai_update_model_evaluation_run": {
    "accessPath": [
      "genaiUpdateModelEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "eval_run_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PATCH",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs/{eval_run_uuid}",
    "pathConflictKeys": [
      "eval_run_uuid"
    ],
    "pathParameterKeys": [
      "eval_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update Model Evaluation Run",
    "parameterDescriptions": {
      "eval_run_uuid": "UUID of the model evaluation run to update. Returned by `CreateModelEvaluationRun`\nand listed via `ListModelEvaluationRuns`."
    }
  },
  "genai_cancel_model_evaluation_run": {
    "accessPath": [
      "genaiCancelModelEvaluationRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "eval_run_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs/{eval_run_uuid}/cancel",
    "pathConflictKeys": [
      "eval_run_uuid"
    ],
    "pathParameterKeys": [
      "eval_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel Model Evaluation Run",
    "parameterDescriptions": {
      "eval_run_uuid": "UUID of the model evaluation run to cancel. Returned by `CreateModelEvaluationRun`\nand listed via `ListModelEvaluationRuns`. The run must be in a non-terminal status\n(queued, running_dataset, or evaluating_results); already-terminal runs return an\nerror."
    }
  },
  "genai_get_model_evaluation_run_results_download_url": {
    "accessPath": [
      "genaiGetModelEvaluationRunResultsDownloadUrl"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/model_evaluation_runs/{eval_run_uuid}/results/download_url",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_run_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Download URL for Model Evaluation Run Results",
    "parameterDescriptions": {
      "eval_run_uuid": "UUID of the evaluation run."
    }
  },
  "genai_list_models": {
    "accessPath": [
      "genaiListModels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "usecases",
      "public_only",
      "page",
      "per_page"
    ],
    "description": "List Available Models",
    "parameterDescriptions": {
      "usecases": "Include only models defined for the listed usecases.\n\n - MODEL_USECASE_UNKNOWN: The use case of the model is unknown\n - MODEL_USECASE_AGENT: The model maybe used in an agent\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\n - MODEL_USECASE_REASONING: The model usecase for reasoning\n - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference",
      "public_only": "Only include models that are publicly available.",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_list_model_api_keys": {
    "accessPath": [
      "genaiListModelApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Model API Keys",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_model_api_key": {
    "accessPath": [
      "genaiCreateModelApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/models/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Model API Key"
  },
  "genai_update_model_api_key": {
    "accessPath": [
      "genaiUpdateModelApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "api_key_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/models/api_keys/{api_key_uuid}",
    "pathConflictKeys": [
      "api_key_uuid"
    ],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update API Key for a Model",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_delete_model_api_key": {
    "accessPath": [
      "genaiDeleteModelApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/models/api_keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete API Key for a Model",
    "parameterDescriptions": {
      "api_key_uuid": "API key for an agent."
    }
  },
  "genai_regenerate_model_api_key": {
    "accessPath": [
      "genaiRegenerateModelApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Regenerate API Key for a Model",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_list_model_catalog": {
    "accessPath": [
      "genaiListModelCatalog"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/catalog",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "limit"
    ],
    "description": "List Model Catalog"
  },
  "genai_get_model_catalog_card": {
    "accessPath": [
      "genaiGetModelCatalogCard"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/catalog/{id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "model_id"
    ],
    "description": "Get Model Catalog Card",
    "parameterDescriptions": {
      "model_id": "Model identifier used for API calls (e.g., \"llama3.1-70b-instruct\"). Alternative to UUID lookup."
    }
  },
  "genai_list_model_routers": {
    "accessPath": [
      "genaiListModelRouters"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/routers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Model Routers",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_model_router": {
    "accessPath": [
      "genaiCreateModelRouter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "fallback_models",
      "name",
      "policies",
      "regions"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/models/routers",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Model Router"
  },
  "genai_list_model_router_presets": {
    "accessPath": [
      "genaiListModelRouterPresets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/routers/presets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Model Router Presets",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_list_model_router_task_presets": {
    "accessPath": [
      "genaiListModelRouterTaskPresets"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/routers/tasks/presets",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List Model Router Task Presets",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_get_model_router": {
    "accessPath": [
      "genaiGetModelRouter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/models/routers/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Model Router",
    "parameterDescriptions": {
      "uuid": "Model router id"
    }
  },
  "genai_update_model_router": {
    "accessPath": [
      "genaiUpdateModelRouter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "fallback_models",
      "name",
      "policies",
      "regions",
      "uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/models/routers/{uuid}",
    "pathConflictKeys": [
      "uuid"
    ],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Model Router",
    "parameterDescriptions": {
      "uuid": "Model router id"
    }
  },
  "genai_delete_model_router": {
    "accessPath": [
      "genaiDeleteModelRouter"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/models/routers/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Model Router",
    "parameterDescriptions": {
      "uuid": "Model router id"
    }
  },
  "genai_create_oauth2_dropbox_tokens": {
    "accessPath": [
      "genaiCreateOauth2DropboxTokens"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "code",
      "redirect_url"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/oauth2/dropbox/tokens",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Oauth2 Dropbox Tokens"
  },
  "genai_get_oauth2_url": {
    "accessPath": [
      "genaiGetOauth2Url"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/oauth2/url",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "type",
      "redirect_url"
    ],
    "description": "Get Oauth2 URL",
    "parameterDescriptions": {
      "type": "Type \"google\" / \"dropbox\".",
      "redirect_url": "The redirect url."
    }
  },
  "genai_list_openai_api_keys": {
    "accessPath": [
      "genaiListOpenaiApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/openai/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List OpenAI API Keys",
    "parameterDescriptions": {
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_create_openai_api_key": {
    "accessPath": [
      "genaiCreateOpenaiApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "api_key",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/openai/keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create OpenAI API Key"
  },
  "genai_get_openai_api_key": {
    "accessPath": [
      "genaiGetOpenaiApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/openai/keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get OpenAI API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_update_openai_api_key": {
    "accessPath": [
      "genaiUpdateOpenaiApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "api_key",
      "api_key_uuid",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/openai/keys/{api_key_uuid}",
    "pathConflictKeys": [
      "api_key_uuid"
    ],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update OpenAI API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_delete_openai_api_key": {
    "accessPath": [
      "genaiDeleteOpenaiApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/openai/keys/{api_key_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "api_key_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete OpenAI API Key",
    "parameterDescriptions": {
      "api_key_uuid": "API key ID"
    }
  },
  "genai_list_agents_by_openai_key": {
    "accessPath": [
      "genaiListAgentsByOpenaiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/openai/keys/{uuid}/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "page",
      "per_page"
    ],
    "description": "List agents by OpenAI key",
    "parameterDescriptions": {
      "uuid": "Unique ID of OpenAI key",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_list_datacenter_regions": {
    "accessPath": [
      "genaiListDatacenterRegions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/regions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "serves_inference",
      "serves_batch"
    ],
    "description": "List Datacenter Regions",
    "parameterDescriptions": {
      "serves_inference": "Include datacenters that serve inference.",
      "serves_batch": "Include datacenters that are capable of running batch jobs."
    }
  },
  "genai_create_scheduled_indexing": {
    "accessPath": [
      "genaiCreateScheduledIndexing"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "days",
      "knowledge_base_uuid",
      "time"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/scheduled-indexing",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create scheduled indexing for knowledge base"
  },
  "genai_get_scheduled_indexing": {
    "accessPath": [
      "genaiGetScheduledIndexing"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/scheduled-indexing/knowledge-base/{knowledge_base_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "knowledge_base_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Scheduled Indexing for Knowledge Base",
    "parameterDescriptions": {
      "knowledge_base_uuid": "UUID of the scheduled indexing entry"
    }
  },
  "genai_delete_scheduled_indexing": {
    "accessPath": [
      "genaiDeleteScheduledIndexing"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/scheduled-indexing/{uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete Scheduled Indexing",
    "parameterDescriptions": {
      "uuid": "UUID of the scheduled indexing"
    }
  },
  "genai_list_workspaces": {
    "accessPath": [
      "genaiListWorkspaces"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/workspaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Workspaces"
  },
  "genai_create_workspace": {
    "accessPath": [
      "genaiCreateWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuids",
      "description",
      "name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v2/gen-ai/workspaces",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Workspace"
  },
  "genai_get_workspace": {
    "accessPath": [
      "genaiGetWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve an Existing Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace UUID."
    }
  },
  "genai_update_workspace": {
    "accessPath": [
      "genaiUpdateWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "description",
      "name",
      "workspace_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}",
    "pathConflictKeys": [
      "workspace_uuid"
    ],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update a Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace UUID."
    }
  },
  "genai_delete_workspace": {
    "accessPath": [
      "genaiDeleteWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace UUID."
    }
  },
  "genai_list_agents_by_workspace": {
    "accessPath": [
      "genaiListAgentsByWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}/agents",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "only_deployed",
      "page",
      "per_page"
    ],
    "description": "List agents by Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace UUID.",
      "only_deployed": "Only list agents that are deployed.",
      "page": "Page number.",
      "per_page": "Items per page."
    }
  },
  "genai_update_agents_workspace": {
    "accessPath": [
      "genaiUpdateAgentsWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "agent_uuids",
      "workspace_uuid"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}/agents",
    "pathConflictKeys": [
      "workspace_uuid"
    ],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Move Agents to a Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace uuid to move agents to"
    }
  },
  "genai_list_evaluation_test_cases_by_workspace": {
    "accessPath": [
      "genaiListEvaluationTestCasesByWorkspace"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "workspace_uuid"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List Evaluation Test Cases by Workspace",
    "parameterDescriptions": {
      "workspace_uuid": "Workspace UUID."
    }
  },
  "inference_create_chat_completion": {
    "accessPath": [
      "inferenceCreateChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "messages",
      "model",
      "max_tokens",
      "max_completion_tokens",
      "frequency_penalty",
      "presence_penalty",
      "top_logprobs",
      "tools",
      "tool_choice",
      "stream",
      "stop",
      "logit_bias",
      "logprobs",
      "n",
      "stream_options",
      "reasoning_effort",
      "seed",
      "metadata",
      "temperature",
      "top_p",
      "user"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/chat/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a model response for the given chat conversation"
  },
  "inference_create_messages": {
    "accessPath": [
      "inferenceCreateMessages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "max_tokens",
      "messages",
      "system",
      "stop_sequences",
      "stream",
      "temperature",
      "top_p",
      "top_k",
      "tools",
      "tool_choice",
      "metadata",
      "reasoning_effort",
      "speed",
      "thinking"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/messages",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create the next assistant message"
  },
  "inference_create_embedding": {
    "accessPath": [
      "inferenceCreateEmbedding"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "input",
      "user",
      "encoding_format"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/embeddings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create embedding"
  },
  "agentInference_create_chat_completion": {
    "accessPath": [
      "agentInferenceCreateChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "messages",
      "model",
      "max_tokens",
      "max_completion_tokens",
      "frequency_penalty",
      "presence_penalty",
      "top_logprobs",
      "tools",
      "tool_choice",
      "stream",
      "stop",
      "logit_bias",
      "logprobs",
      "n",
      "stream_options",
      "reasoning_effort",
      "seed",
      "metadata",
      "temperature",
      "top_p",
      "user"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/api/v1/chat/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "agent"
    ],
    "description": "Create a model response for the given chat conversation",
    "parameterDescriptions": {
      "agent": "Must be set to true for agent-based completion behavior."
    }
  },
  "inference_create_image": {
    "accessPath": [
      "inferenceCreateImage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "prompt",
      "model",
      "moderation",
      "background",
      "output_format",
      "output_compression",
      "n",
      "quality",
      "size",
      "stream",
      "partial_images",
      "user"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/images/generations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Generate images from text prompts"
  },
  "inference_list_models": {
    "accessPath": [
      "inferenceListModels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/models",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "List available models"
  },
  "inference_create_response": {
    "accessPath": [
      "inferenceCreateResponse"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "input",
      "max_output_tokens",
      "temperature",
      "stream",
      "instructions",
      "top_p",
      "stream_options",
      "tools",
      "tool_choice",
      "stop",
      "metadata",
      "user"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/responses",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Send Prompt to a Model Using the Responses API"
  },
  "inference_create_async_invoke": {
    "accessPath": [
      "inferenceCreateAsyncInvoke"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model_id",
      "input",
      "tags"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/async-invoke",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Generate Image, Audio, or Text-to-Speech Using fal Models"
  },
  "inference_create_batch_file": {
    "accessPath": [
      "inferenceCreateBatchFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file_name"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/batches/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Batch Inference Input File"
  },
  "inference_upload_batch_file": {
    "accessPath": [
      "inferenceUploadBatchFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "raw",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "PUT",
    "routeTemplate": "/<upload_url>",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upload a Batch Inference Input File"
  },
  "inference_create_batch": {
    "accessPath": [
      "inferenceCreateBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file_id",
      "provider",
      "endpoint",
      "completion_window",
      "request_id",
      "metadata"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/batches",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a Batch Inference Job"
  },
  "inference_list_batches": {
    "accessPath": [
      "inferenceListBatches"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/batches",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "status"
    ],
    "description": "List Batch Inference Jobs",
    "parameterDescriptions": {
      "after": "Cursor for pagination. Pass the `last_id` value from the previous response to fetch the next page. Omit for the first page.\n",
      "limit": "Maximum number of batches to return per page.",
      "status": "Optional filter restricting results to batches in the given lifecycle state.\n"
    }
  },
  "inference_get_batch": {
    "accessPath": [
      "inferenceGetBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/batches/{batch_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a Batch Inference Job",
    "parameterDescriptions": {
      "batch_id": "The batch job identifier."
    }
  },
  "inference_get_batch_results": {
    "accessPath": [
      "inferenceGetBatchResults"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/batches/{batch_id}/results",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get Batch Inference Results Download Links",
    "parameterDescriptions": {
      "batch_id": "The batch job identifier."
    }
  },
  "inference_cancel_batch": {
    "accessPath": [
      "inferenceCancelBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/batches/{batch_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a Batch Inference Job",
    "parameterDescriptions": {
      "batch_id": "The batch job identifier."
    }
  }
} satisfies ToolRuntimeMetadataMap;
